import type { MiniSpec } from '../mini-types';
import { opts } from '../mini-kit';
const ROWS: Array<[string, string, string]> = [
  ['US passport', 'Required by US law to enter and leave the United States', 'Use the Italian one with the airline only if it asks'],
  ['Italian passport', 'Italy may require it to enter and leave Italy', 'Lets you live and work in Italy and the EU without a visa'],
  ['Either passport', 'No US rule against using the foreign one', 'Pick the one with the easier entry rules'],
];
const spec: MiniSpec = {
  title: 'Which passport do I show, as a US and Italian citizen?',
  cta: 'Read the US rules on dual nationality', ctaPage: 'dual',
  inputs: [{ id: 'trip', label: 'You are crossing the border of', def: 0, options: opts(['The United States', 'Italy or another EU country', 'A third country']) }],
  run: (v) => {
    const r = ROWS[Math.max(0, Math.min(2, Math.round(v.trip ?? 0)))];
    return { head: ['Show', r[0]], rows: [['Rule', r[1]], ['In practice', r[2]]], note: 'The State Department rule applies to every US national, dual or not.' };
  },
};
export default spec;
