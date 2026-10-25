import type { MiniSpec } from '../mini-types';
import { typical, LEVEL, YN, opts, C, cur, year, clamp } from '../mini-kit';
const K = C.gr;
const GEN = opts(['Parent', 'Grandparent', 'Great-grandparent']).map((o) => ({ ...o, value: String(Number(o.value) + 1) }));
const spec: MiniSpec = {
  title: 'Which Greek route fits your line?',
  cta: 'Check your whole family tree', ctaPage: 'home',
  inputs: [
    { id: 'gen', label: 'Your Greek ancestor is your', def: 2, options: GEN },
    { id: 'mother', label: 'The Greek link closest to you is your', def: 0, options: [{ value: '0', label: 'Father' }, { value: '1', label: 'Mother' }] },
    year('you', 'Year you were born', 1975),
    { id: 'married', label: 'Your parents were married when you were born', def: 1, options: YN },
    { id: 'late', label: 'Your parent was recognized as Greek only after your birth', def: 0, options: YN },
  ],
  run: (v) => {
    const g = clamp(v.gen, 1, 3);
    const you = clamp(v.you, 1900, 2026);
    const sexes = 'M'.repeat(g - 1) + (v.mother ? 'F' : 'M');
    const r = typical('gr', g, { sexes, you, flags: { married: !!v.married } });
    const art26 = !!v.late && g >= 2;
    const fee = art26 ? K.feeArt26.amount : K.fee.amount;
    return {
      head: ['Under the Code as codified in 2025', LEVEL[r.level]],
      rows: [
        ['Route', art26 ? 'Determination under art. 26' : r.route],
        ['Fee', fee === 0 ? 'No fee in the Code' : cur(fee, 'EUR')],
        ['Published time', 'Not published'],
      ],
      note: art26 ? 'A parent recognized after your birth sends the file through art. 26, decided by a regional citizenship directorate.' : r.reasons[r.reasons.length - 1]?.text,
    };
  },
};
export default spec;
