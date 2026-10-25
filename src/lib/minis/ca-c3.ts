import type { MiniSpec } from '../mini-types';
import { typical, LEVEL, year, clamp, C, cur, N } from '../mini-kit';
const K = C.ca;
const spec: MiniSpec = {
  title: 'Are you Canadian under Bill C-3?',
  cta: 'Check the rest of your family tree', ctaPage: 'home',
  inputs: [
    year('you', 'Your year of birth', 1990, 'The child born outside Canada: you, or your child.'),
    { id: 'pborn', label: 'Your Canadian parent was born', def: 1, options: [{ value: '0', label: 'In Canada' }, { value: '1', label: 'Outside Canada' }] },
    { id: 'days', label: 'Days that parent spent in Canada before your birth', def: 0, max: 30000, help: 'Count every stay, added together, at any age.' },
  ],
  run: (v) => {
    const you = clamp(v.you, 1900, 2026);
    const gen = v.pborn ? 2 : 1;
    const ok = Math.max(0, v.days) >= K.cutoffs.presenceDays;
    const r = typical('ca', gen, { you, flags: { caPresence: ok } });
    const after = you > 2025;
    return {
      head: ['Under the Citizenship Act as amended on December 15, 2025', LEVEL[r.level]],
      rows: [
        ['Route', r.route],
        ['Presence test', !after ? 'Does not apply: born before December 15, 2025' : !v.pborn ? 'Does not apply: parent born in Canada' : `${ok ? 'Met' : 'Not met'} (${N(Math.max(0, v.days))} of ${N(K.cutoffs.presenceDays)} days)`],
        ['Certificate fee', `${cur(K.fee.amount, 'CAD')} per person`],
      ],
      note: r.reasons[r.reasons.length - 1]?.text,
    };
  },
};
export default spec;
