import type { MiniSpec } from '../mini-types';
import { typical, LEVEL, YN, year } from '../mini-kit';
const spec: MiniSpec = {
  title: 'Does the 1948 rule block my Italian mother line?',
  cta: 'Check the whole tree', ctaPage: 'home',
  inputs: [
    year('child', 'Year the child of the Italian woman was born', 1935),
    { id: 'gen', label: 'The Italian woman is your', def: 2, options: [{ value: '1', label: 'Mother' }, { value: '2', label: 'Grandmother' }, { value: '3', label: 'Great-grandmother' }] },
    { id: 'filed', label: 'Case filed by March 27, 2025', def: 0, options: YN },
  ],
  run: (v) => {
    const g = Math.max(1, Math.min(3, Math.round(v.gen)));
    const child = Math.max(1860, Math.min(2026, Math.round(v.child)));
    const births = g === 1 ? [child - 30, child] : g === 2 ? [child - 30, child, child + 30] : [child - 30, child, child + 30, child + 55];
    const r = typical('it', g, { sexes: 'FMM', births, flags: { itFiled: !!v.filed } });
    const before = child < 1948;
    return {
      head: ['Verdict', LEVEL[r.level]],
      rows: [['Child born', before ? 'Before January 1, 1948' : 'From January 1, 1948'], ['Route', r.route], ['Rules applied', v.filed ? 'Old rules (filed in time)' : 'Law 74/2025']],
      note: r.reasons.find((x) => x.ok !== true)?.text ?? r.reasons[0]?.text,
    };
  },
};
export default spec;
