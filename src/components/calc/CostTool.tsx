/**
 * What the file costs: certified US records, apostilles, proof of the ancestor's naturalization,
 * translations and the country's fee (lib/engine/cost.ts). First render = build defaults (RECETTE §17.5).
 */
import { useEffect, useMemo, useState } from 'react';
import NumberField from '../ui/NumberField';
import SelectField from '../ui/SelectField';
import { cost, type NatProof } from '../../lib/engine/cost';
import { COUNTRY_ORDER, countryName } from '../../lib/engine/descent';
import { money } from '../../lib/format-l';
import { readParams, updateURL } from '../../lib/url-state';
import P from '../../data/params-2026.json';

interface Props { idPrefix?: string; defaultCountry?: string; primary?: boolean }
const usd = (n: number) => money(n, 'USD');
const yesNo = (b: boolean | null, y: string, n: string, u: string) => (b === true ? y : b === false ? n : u);

export default function CostTool({ idPrefix = 'k', defaultCountry = 'it', primary = false }: Props) {
  const [country, setCountry] = useState(defaultCountry);
  const [gen, setGen] = useState('2');
  const [deaths, setDeaths] = useState(1);
  const [extra, setExtra] = useState(0);
  const [priceMode, setPriceMode] = useState('ca');
  const [price, setPrice] = useState(25);
  const [apo, setApo] = useState(P.us.apostille.californiaSos.fee);
  const [tr, setTr] = useState(0);
  const [nat, setNat] = useState<NatProof>(defaultCountry === 'it' ? 'cne' : 'nara');
  const [adults, setAdults] = useState(1);
  const [touched, setTouched] = useState(false);
  useEffect(() => {
    const u = readParams(window.location.search);
    const c = u.get('pays'); if (c && COUNTRY_ORDER.includes(c)) setCountry(c);
    const g = u.get('gen'); if (g && ['1', '2', '3'].includes(g)) setGen(g);
  }, []);
  useEffect(() => { if (touched) updateURL({ pays: country, gen }); }, [country, gen, touched]);
  const t = <T,>(f: (v: T) => void) => (v: T) => { setTouched(true); f(v); };
  const r = useMemo(() => cost({ country, gen: Number(gen), deaths, extra, copyPrice: priceMode === 'ca' ? null : price, apostille: apo, translationPerDoc: tr, natProof: nat, adults }), [country, gen, deaths, extra, priceMode, price, apo, tr, nat, adults]);
  const id = (s: string) => `${idPrefix}-cost-${s}`;
  const k = (P.countries as Record<string, any>)[country];
  const feeTxt = r.fee === null ? 'not published' : r.fee === 0 ? 'free' : money(r.fee, r.feeCur);
  return (
    <div data-chrome className={`not-prose rounded-xl border border-accent-200 bg-white p-4 sm:p-5 ${primary ? 'my-2' : 'my-8'}`}>
      <p className="text-base font-semibold text-navy-900">What will the file cost?</p>
      <div className="mt-3 grid gap-5 lg:grid-cols-2">
        <form className="grid content-start gap-3 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()} {...(primary ? {} : { 'data-simulateur-secondaire': '' })}>
          <SelectField id={id('country')} label="Country" value={country} onChange={t(setCountry)} options={COUNTRY_ORDER.map((c) => ({ value: c, label: countryName(c) }))} />
          <SelectField id={id('gen')} label="The ancestor is your" value={gen} onChange={t(setGen)} options={[{ value: '1', label: 'Parent' }, { value: '2', label: 'Grandparent' }, { value: '3', label: 'Great-grandparent' }]} />
          <NumberField id={id('deaths')} label="Deceased people in the line" value={deaths} onChange={t(setDeaths)} max={3} help="Each needs a death certificate" />
          <NumberField id={id('extra')} label="Other records" value={extra} onChange={t(setExtra)} max={30} help="Divorces, name changes, corrections" />
          <SelectField id={id('mode')} label="Price of certified copies" value={priceMode} onChange={t(setPriceMode)} options={[{ value: 'ca', label: 'California rates' }, { value: 'own', label: "My state's price" }]} />
          <NumberField id={id('adults')} label="Adults applying" value={adults} onChange={t(setAdults)} max={10} />
          {priceMode === 'own' && <NumberField id={id('price')} className="sm:col-span-2" label="Price per certified copy" value={price} onChange={t(setPrice)} unit="$" max={500} />}
          <NumberField id={id('apo')} label="State apostille, per record" value={apo} onChange={t(setApo)} unit="$" max={500} help="California Secretary of State by default" />
          <NumberField id={id('tr')} label="Translation, per document" value={tr} onChange={t(setTr)} unit="$" max={1000} help="Your translator's quote" />
          <SelectField id={id('nat')} className="sm:col-span-2" label="Proof about the ancestor's naturalization" value={nat} onChange={(v) => t(setNat)(v as NatProof)} options={[{ value: 'nara', label: 'Naturalized: certified copy from the National Archives' }, { value: 'cne', label: 'Never naturalized: USCIS certificate of non-existence' }, { value: 'none', label: 'Not asked for' }]} />
        </form>
        <div aria-live="polite" {...(primary ? { 'data-resultat': '' } : {})} className="rounded-lg bg-navy-50 p-4">
          <p className="text-sm font-medium text-navy-600">US side of the file{k.usdFee || r.feeCur === 'USD' ? ', fee included' : ''}</p>
          <p className="tabular-nums mt-1 text-3xl font-bold text-navy-900">{usd(r.usTotal)}</p>
          <table className="mt-3 w-full text-sm"><tbody className="divide-y divide-navy-200">
            <tr><td className="py-1.5 pr-3 text-navy-600">{r.records} certified records ({r.births} births, {r.marriages} marriages, {r.deaths} deaths{r.records - r.births - r.marriages - r.deaths ? `, ${r.records - r.births - r.marriages - r.deaths} other` : ''})</td><td className="tabular-nums py-1.5 text-right text-navy-900">{usd(r.copies)}</td></tr>
            <tr><td className="py-1.5 pr-3 text-navy-600">Apostilles ({yesNo(r.needApostille, `${r.apostilled} records`, 'not required', `${r.apostilled}, ask the consulate`)})</td><td className="tabular-nums py-1.5 text-right text-navy-900">{usd(r.apostilleCost)}</td></tr>
            <tr><td className="py-1.5 pr-3 text-navy-600">Naturalization proof</td><td className="tabular-nums py-1.5 text-right text-navy-900">{usd(r.natCost)}</td></tr>
            <tr><td className="py-1.5 pr-3 text-navy-600">Translations ({yesNo(r.needTranslation, `${r.translated} documents`, 'English accepted', `${r.translated}, ask the consulate`)})</td><td className="tabular-nums py-1.5 text-right text-navy-900">{usd(r.translationCost)}</td></tr>
            <tr><td className="py-1.5 pr-3 text-navy-600">{countryName(country)} fee{adults > 1 ? `, ${adults} adults` : ''}</td><td className="tabular-nums py-1.5 text-right text-navy-900">{feeTxt}{r.feeUsd !== null && r.feeCur !== 'USD' ? ` (${usd(r.feeUsd)})` : ''}</td></tr>
          </tbody></table>
          <p className="mt-2 text-xs text-navy-600">{r.feeCur !== 'USD' && !k.usdFee && r.fee ? `The ${countryName(country)} fee is paid in ${r.feeCur} and is not added to the dollar total. ` : ''}{k.usdFee ? 'Dollar fee: New York consulate rate for October 1 to December 31, 2026. ' : ''}Records from the old country are not counted: they are ordered there.</p>
        </div>
      </div>
    </div>
  );
}
