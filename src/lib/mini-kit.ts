/** Shared bits for `lib/minis/*.ts`: formatting, clamps, yes/no options, country data. */
import P from '../data/params-2026.json';
import { money, formatNumberL } from './format-l';
export { P };
export const C = P.countries as unknown as Record<string, any>;
export const clamp = (x: number, a: number, b: number) => Math.max(a, Math.min(b, Math.round(x || 0)));
export const N = (v: number) => formatNumberL(v);
export const usd = (v: number) => money(v, 'USD');
export const cur = (v: number, c: string) => money(v, c);
export const YN = [{ value: '0', label: 'No' }, { value: '1', label: 'Yes' }];
export const opts = (labels: string[]) => labels.map((label, i) => ({ value: String(i), label }));
export const plural = (n: number, w: string, ws = `${w}s`) => `${N(n)} ${n === 1 ? w : ws}`;
/** Year inputs: plain digits, no grouping (check-nombres ignores 4-digit years). */
export const year = (id: string, label: string, def: number, help?: string) => ({ id, label, def, max: 2026, plain: true, help });
export const NOW = 2026;

import { evaluate, DEFAULT_FLAGS, type Flags, type Result } from './engine/descent';
export const LEVEL = { yes: 'Likely eligible', maybe: 'Possible, to check', no: 'Not eligible', closed: 'Route closed' } as const;
/**
 * Runs the family tree engine on a typical line: `gen` generations (1 parent … 3 great-grandparent),
 * `sexes` from the ancestor down (default all 'M'), years spaced 30 years apart ending with you.
 * `natAfterNext` = the ancestor naturalized after the next child was born (true), before it (false)
 * or never (null).
 */
export function typical(country: string, gen: number, o: { sexes?: string; you?: number; natAfterNext?: boolean | null; births?: number[]; flags?: Partial<Flags> } = {}): Result {
  const g = clamp(gen, 1, 3);
  const you = o.you ?? 1990;
  const born = o.births ?? Array.from({ length: g + 1 }, (_, i) => you - 30 * (g - i));
  const rel = (o.sexes ?? 'MMM').slice(0, g).padEnd(g, 'M');
  const next = born[1];
  const ancNat = o.natAfterNext === undefined || o.natAfterNext === null ? 0 : o.natAfterNext ? next + 5 : next - 5;
  return evaluate({ country, rel, ancBorn: born[0], ancNat, mid: born.slice(1, g), you: born[g], flags: { ...DEFAULT_FLAGS, ...(o.flags ?? {}) } });
}
