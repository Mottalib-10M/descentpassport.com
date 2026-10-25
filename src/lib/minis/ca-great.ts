import type { MiniSpec } from '../mini-types';
import { typical, LEVEL, YN, year, clamp, C, cur } from '../mini-kit';
const K = C.ca;
const spec: MiniSpec = {
  title: 'Does a Canadian great-grandparent make you Canadian?',
  cta: 'Check other countries in your tree', ctaPage: 'home',
  inputs: [
    year('you', 'Your year of birth', 1985),
    { id: 'pre', label: 'The great-grandparent left Canada and took another citizenship before 1947', def: 0, options: YN },
    { id: 'days', label: 'If you were born after December 15, 2025: your parent spent 1,095 days in Canada first', def: 0, options: YN },
  ],
  run: (v) => {
    const you = clamp(v.you, 1940, 2026);
    const mid = Math.round((1910 + you) / 2);
    const r = typical('ca', 3, { you, births: [1880, 1910, mid, you], natAfterNext: v.pre ? true : null, flags: { caPresence: !!v.days } });
    return {
      head: ['Line through a great-grandparent, rules of December 15, 2025', LEVEL[r.level]],
      rows: [
        ['Route', r.route],
        ['Who files first', 'Each link can apply for a certificate; IRCC checks the whole line in your file'],
        ['Fee per certificate', cur(K.fee.amount, 'CAD')],
      ],
      note: r.reasons[r.reasons.length - 1]?.text,
    };
  },
};
export default spec;
