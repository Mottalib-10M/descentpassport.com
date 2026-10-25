/**
 * Family tree checker (home and country pages): up to three foreign-born ancestors, each with the
 * people between them and you, evaluated against the dated rules of 20 countries (lib/engine/descent.ts).
 * First render = build defaults (RECETTE §17.5); a shared link is applied after mount. Nothing typed
 * leaves the browser: the state is written to the address bar only after an interaction.
 */
import { useEffect, useMemo, useState } from 'react';
import NumberField from '../ui/NumberField';
import SelectField from '../ui/SelectField';
import { evaluate, COUNTRY_ORDER, countryName, relLabel, relPath, REL_OPTIONS, FLAG_DEFS, DEFAULT_FLAGS, type LineIn, type Flags } from '../../lib/engine/descent';
import { readParams, updateURL } from '../../lib/url-state';

interface Props { idPrefix?: string; defaultCountry?: string; defaultRel?: string; primary?: boolean }
const YEAR_MAX = 2026;
const DEFAULT_LINE = (country = 'it', rel = 'MF'): LineIn => ({
  country, rel, ancBorn: 1902, ancNat: 0, mid: rel.length === 3 ? [1935, 1962] : rel.length === 2 ? [1962] : [], you: 1990,
  flags: { ...DEFAULT_FLAGS },
});
function fixMid(l: LineIn): LineIn {
  const need = l.rel.length - 1;
  const base = [1935, 1962];
  const mid = need === 0 ? [] : need === 1 ? [l.mid[l.mid.length - 1] ?? base[1]] : [l.mid.length === 2 ? l.mid[0] : base[0], l.mid[l.mid.length - 1] ?? base[1]];
  return { ...l, mid };
}
const enc = (l: LineIn) => [l.country, l.rel, l.ancBorn, l.ancNat, ...(l.mid.length ? l.mid : []), l.you].join('.') + '.' + Object.keys(FLAG_DEFS).map((k) => (l.flags[k as keyof Flags] ? '1' : '0')).join('');
function dec(s: string | null): LineIn | null {
  if (!s) return null;
  const p = s.split('.');
  const country = p[0], rel = p[1];
  if (!COUNTRY_ORDER.includes(country) || !REL_OPTIONS.includes(rel)) return null;
  const nums = p.slice(2, p.length - 1).map(Number);
  if (nums.length !== rel.length + 2 || nums.some((n) => !Number.isFinite(n))) return null;
  const bits = p[p.length - 1] ?? '';
  const flags = Object.fromEntries(Object.keys(FLAG_DEFS).map((k, i) => [k, k === 'married' ? bits[i] !== '0' : bits[i] === '1'])) as unknown as Flags;
  return { country, rel, ancBorn: nums[0], ancNat: nums[1], mid: nums.slice(2, 2 + rel.length - 1), you: nums[nums.length - 1], flags };
}
const TONE: Record<string, string> = { yes: 'text-green-800', maybe: 'text-amber-800', no: 'text-red-800', closed: 'text-red-800' };
const LEVEL: Record<string, string> = { yes: 'Likely eligible', maybe: 'Possible: a condition to check', no: 'Not under current rules', closed: 'Route closed' };

export default function DescentChecker({ idPrefix = 'c', defaultCountry = 'it', defaultRel, primary = false }: Props) {
  const startRel = defaultRel ?? 'MF';
  const [lines, setLines] = useState<LineIn[]>([fixMid(DEFAULT_LINE(defaultCountry, startRel))]);
  const [active, setActive] = useState(0);
  const [touched, setTouched] = useState(false);
  useEffect(() => {
    const u = readParams(window.location.search);
    const got = ['l1', 'l2', 'l3'].map((k) => dec(u.get(k))).filter((x): x is LineIn => !!x);
    if (got.length) setLines(got);
  }, []);
  useEffect(() => { if (touched) updateURL(Object.fromEntries(lines.map((l, i) => [`l${i + 1}`, enc(l)]))); }, [lines, touched]);
  const line = lines[Math.min(active, lines.length - 1)];
  const set = (patch: Partial<LineIn>) => { setTouched(true); setLines((ls) => ls.map((l, i) => (i === active ? fixMid({ ...l, ...patch }) : l))); };
  const setFlag = (k: keyof Flags, v: boolean) => set({ flags: { ...line.flags, [k]: v } });
  const results = useMemo(() => lines.map((l) => evaluate(l)), [lines]);
  const r = results[Math.min(active, lines.length - 1)];
  const id = (s: string) => `${idPrefix}-${s}`;
  const gen = line.rel.length;
  const flagKeys = (Object.keys(FLAG_DEFS) as Array<keyof Flags>).filter((k) => FLAG_DEFS[k].countries.includes(line.country) && (FLAG_DEFS[k].minGen ?? 1) <= gen && !(k === 'married' && gen === 0));
  const hits = results.filter((x) => x.level === 'yes' || x.level === 'maybe').length;
  return (
    <div data-chrome className={`not-prose rounded-xl border border-accent-200 bg-white p-4 sm:p-5 ${primary ? 'my-2' : 'my-8'}`}>
      <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Ancestors">
        {lines.map((l, i) => (
          <button key={i} type="button" role="tab" aria-selected={i === active} onClick={() => setActive(i)}
            className={`h-9 rounded-md border px-3 text-sm font-medium ${i === active ? 'border-accent-600 bg-accent-600 text-white' : 'border-navy-300 text-navy-700 hover:bg-navy-50'}`}>
            {`Ancestor ${i + 1}: ${countryName(l.country)}`}
          </button>
        ))}
        {lines.length < 3 && <button type="button" onClick={() => { setTouched(true); setLines((ls) => [...ls, fixMid(DEFAULT_LINE(ls.length === 1 ? 'ie' : 'pl', 'FM'))]); setActive(lines.length); }} className="h-9 rounded-md border border-dashed border-navy-400 px-3 text-sm text-navy-700 hover:bg-navy-50">+ Add an ancestor</button>}
        {lines.length > 1 && <button type="button" onClick={() => { setTouched(true); setLines((ls) => ls.filter((_, i) => i !== active)); setActive(0); }} className="h-9 rounded-md px-2 text-sm text-navy-600 underline">Remove this one</button>}
      </div>
      <div className="mt-4 grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
        <form className="grid content-start gap-3 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()} {...(primary ? {} : { 'data-simulateur-secondaire': '' })}>
          <SelectField id={id('country')} label="Ancestor's country of citizenship" value={line.country} onChange={(v) => set({ country: v })} options={COUNTRY_ORDER.map((c) => ({ value: c, label: countryName(c) }))} />
          <SelectField id={id('rel')} label="Who is this ancestor to you?" value={line.rel} onChange={(v) => set({ rel: v })} options={REL_OPTIONS.map((x) => ({ value: x, label: relLabel(x) }))} />
          <NumberField id={id('anc')} label="Ancestor's year of birth" value={line.ancBorn} onChange={(v) => set({ ancBorn: v })} max={YEAR_MAX} plain />
          <NumberField id={id('nat')} label="Year they took US (or other) citizenship" value={line.ancNat} onChange={(v) => set({ ancNat: v })} max={YEAR_MAX} plain placeholder="never" help="Leave empty if they never naturalized" />
          {gen === 3 && <NumberField id={id('gp')} label={`Your ${relPath(line.rel.slice(1)).toLowerCase()}'s year of birth`} value={line.mid[0]} onChange={(v) => set({ mid: [v, line.mid[1]] })} max={YEAR_MAX} plain />}
          {gen >= 2 && <NumberField id={id('par')} label={`Your ${line.rel.endsWith('M') ? 'father' : 'mother'}'s year of birth`} value={line.mid[line.mid.length - 1]} onChange={(v) => set({ mid: gen === 3 ? [line.mid[0], v] : [v] })} max={YEAR_MAX} plain />}
          <NumberField id={id('you')} label="Your year of birth" value={line.you} onChange={(v) => set({ you: v })} max={YEAR_MAX} plain autoComplete="bday-year" />
          {flagKeys.length > 0 && (
            <fieldset className="sm:col-span-2 rounded-lg border border-navy-200 p-3">
              <legend className="px-1 text-sm font-medium text-navy-700">Facts that change the answer for {countryName(line.country)}</legend>
              <div className="grid gap-2">
                {flagKeys.map((k) => (
                  <label key={k} className="flex items-start gap-2 text-sm text-navy-800">
                    <input type="checkbox" className="mt-1 h-4 w-4 accent-accent-600" checked={line.flags[k]} onChange={(e) => setFlag(k, e.target.checked)} />
                    <span>{FLAG_DEFS[k].label}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          )}
        </form>
        <div aria-live="polite" {...(primary ? { 'data-resultat': '' } : {})} className="rounded-lg bg-navy-50 p-4">
          <p className="text-sm font-medium text-navy-600">{countryName(line.country)} · {r.route}</p>
          <p className={`mt-1 text-2xl font-bold sm:text-3xl ${TONE[r.level]}`}>{LEVEL[r.level]}</p>
          <ul className="mt-3 space-y-2 text-sm">
            {r.reasons.map((x, i) => (
              <li key={i} className="flex gap-2">
                <span aria-hidden="true" className={`mt-0.5 shrink-0 font-bold ${x.ok === true ? 'text-green-800' : x.ok === false ? 'text-red-800' : 'text-amber-800'}`}>{x.ok === true ? '✓' : x.ok === false ? '✗' : '?'}</span>
                <span className="text-navy-800">{x.text}{x.src && <> <a href={x.src} target="_blank" rel="nofollow noopener noreferrer" className="text-accent-700 underline">source</a></>}</span>
              </li>
            ))}
          </ul>
          {r.facts.length > 0 && <table className="mt-3 w-full text-sm"><tbody className="divide-y divide-navy-200">{r.facts.map(([k, v]) => <tr key={k}><td className="py-1.5 pr-3 text-navy-600">{k}</td><td className="tabular-nums py-1.5 text-right text-navy-900">{v}</td></tr>)}</tbody></table>}
          {lines.length > 1 && <p className="mt-3 text-sm text-navy-700">{hits} of {lines.length} ancestors open a possible route.</p>}
          {r.page && <a href={r.page} className="mt-3 inline-block text-sm font-medium text-accent-700 hover:underline">{countryName(line.country)}: documents, fees and waiting times →</a>}
          <p className="mt-2 text-xs text-navy-600">Not legal advice. The decision belongs to the country concerned; nothing you enter is sent anywhere.</p>
        </div>
      </div>
    </div>
  );
}
