import type { MiniSpec } from '../mini-types';
import { LEVEL, YN, opts, C, usd, cur, year, clamp } from '../mini-kit';
import { evaluate, DEFAULT_FLAGS } from '../engine/descent';
const K = C.pl;
const GEN = opts(['Parent', 'Grandparent', 'Great-grandparent']).map((o) => ({ ...o, value: String(Number(o.value) + 1) }));
const spec: MiniSpec = {
  title: 'Did your Polish line survive the 1920 and 1951 Acts?',
  cta: 'Check every branch of your family tree', ctaPage: 'home',
  inputs: [
    { id: 'gen', label: 'The ancestor born in Poland is your', def: 2, options: GEN },
    year('kid', 'Year that ancestor\'s child in your line was born', 1925),
    year('nat', 'Year the ancestor became a US citizen (0 if never)', 1940, 'Type 0 if the ancestor never naturalized.'),
    { id: 'mother', label: 'The Polish-born ancestor is a woman married to a non-Pole', def: 0, options: YN },
    { id: 'pre', label: 'The ancestor left Polish lands before 1920', def: 0, options: YN },
    { id: 'mil', label: 'The ancestor served in a foreign army before 1951', def: 0, options: YN },
  ],
  run: (v) => {
    const g = clamp(v.gen, 1, 3);
    const kid = clamp(v.kid, 1880, 2026);
    const nat = v.nat ? clamp(v.nat, 1880, 2026) : 0;
    const born = Array.from({ length: g + 1 }, (_, i) => (i === 0 ? kid - 30 : kid + 30 * (i - 1)));
    const rel = (v.mother ? 'F' : 'M') + 'M'.repeat(g - 1);
    const r = evaluate({ country: 'pl', rel, ancBorn: born[0], ancNat: nat, mid: born.slice(1, g), you: born[g], flags: { ...DEFAULT_FLAGS, plPre1920: !!v.pre, plMilitary: !!v.mil } });
    return {
      head: ['Under the 1920, 1951 and 2009 Acts', LEVEL[r.level]],
      rows: [
        ['Route', r.route],
        ['Fee at a US consulate', usd(K.fee.amount)],
        ['Stamp duty if filed in Poland', cur(K.feePoland.amount, 'PLN')],
        ['Published decision time', 'Not published'],
      ],
      note: r.reasons.find((x) => x.ok === false)?.text ?? r.reasons[r.reasons.length - 2]?.text,
    };
  },
};
export default spec;
