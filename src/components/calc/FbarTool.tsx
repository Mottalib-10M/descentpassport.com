/**
 * FBAR and Form 8938: does a dual citizen with foreign accounts have to file? Thresholds from
 * params-2026.json (FinCEN, IRS). First render = defaults (RECETTE §17.5); nothing leaves the browser.
 */
import { useMemo, useState } from 'react';
import NumberField from '../ui/NumberField';
import SelectField from '../ui/SelectField';
import { taxCheck, type Filing } from '../../lib/engine/tax';
import { money } from '../../lib/format-l';
import P from '../../data/params-2026.json';
interface Props { idPrefix?: string; primary?: boolean }
const usd = (n: number) => money(n, 'USD');
export default function FbarTool({ idPrefix = 'f', primary = false }: Props) {
  const [peak, setPeak] = useState(12000);
  const [end, setEnd] = useState(9000);
  const [abroad, setAbroad] = useState('0');
  const [filing, setFiling] = useState<Filing>('single');
  const r = useMemo(() => taxCheck({ peakAccounts: peak, endAssets: end, peakAssets: peak, abroad: abroad === '1', filing }), [peak, end, abroad, filing]);
  const id = (s: string) => `${idPrefix}-fbar-${s}`;
  return (
    <div data-chrome className={`not-prose rounded-xl border border-accent-200 bg-white p-4 sm:p-5 ${primary ? 'my-2' : 'my-8'}`}>
      <p className="text-base font-semibold text-navy-900">Do I file an FBAR or Form 8938 this year?</p>
      <div className="mt-3 grid gap-5 md:grid-cols-2">
        <form className="grid content-start gap-3 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()} {...(primary ? {} : { 'data-simulateur-secondaire': '' })}>
          <NumberField id={id('peak')} label="Highest total in foreign accounts" value={peak} onChange={setPeak} unit="$" max={100_000_000} help="All accounts added, at their highest in the year" />
          <NumberField id={id('end')} label="Foreign assets on Dec 31" value={end} onChange={setEnd} unit="$" max={100_000_000} help="Accounts, foreign shares, pensions" />
          <SelectField id={id('abroad')} label="Where you live" value={abroad} onChange={setAbroad} options={[{ value: '0', label: 'In the United States' }, { value: '1', label: 'Abroad (IRS tests met)' }]} />
          <SelectField id={id('filing')} label="Filing status" value={filing} onChange={(v) => setFiling(v as Filing)} options={[{ value: 'single', label: 'Single' }, { value: 'joint', label: 'Married filing jointly' }, { value: 'separate', label: 'Married filing separately' }]} />
        </form>
        <div aria-live="polite" {...(primary ? { 'data-resultat': '' } : {})} className="rounded-lg bg-navy-50 p-4">
          <p className="text-sm font-medium text-navy-600">FBAR (FinCEN Form 114)</p>
          <p className="tabular-nums mt-1 text-3xl font-bold text-navy-900">{r.fbar ? 'Required' : 'Not required'}</p>
          <table className="mt-3 w-full text-sm"><tbody className="divide-y divide-navy-200">
            <tr><td className="py-1.5 pr-3 text-navy-600">FBAR threshold</td><td className="tabular-nums py-1.5 text-right text-navy-900">over {usd(P.us.fbar.threshold)} at any time</td></tr>
            <tr><td className="py-1.5 pr-3 text-navy-600">Form 8938</td><td className="tabular-nums py-1.5 text-right text-navy-900">{r.f8938 ? 'Required with your return' : 'Not required'}</td></tr>
            <tr><td className="py-1.5 pr-3 text-navy-600">Your 8938 limits</td><td className="tabular-nums py-1.5 text-right text-navy-900">{usd(r.endLimit)} on Dec 31 · {usd(r.anyLimit)} any time</td></tr>
            <tr><td className="py-1.5 pr-3 text-navy-600">FBAR due</td><td className="tabular-nums py-1.5 text-right text-navy-900">April 15, automatic extension to October 15</td></tr>
          </tbody></table>
          <p className="mt-2 text-xs text-navy-600">Form 8938 applies only if you must file an income tax return. A second passport changes neither test: they follow the accounts you hold.</p>
        </div>
      </div>
    </div>
  );
}
