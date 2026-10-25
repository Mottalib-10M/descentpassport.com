import type { MiniSpec } from '../mini-types';
import { typical, LEVEL, YN, C, cur, year } from '../mini-kit';
const K = C.se;
const spec: MiniSpec = {
  title: 'Swedish at birth? The 22nd birthday check',
  cta: 'Check every country in your family tree', ctaPage: 'home',
  inputs: [
    year('born', 'Your year of birth', 2008),
    { id: 'sex', label: 'Your Swedish parent is your', def: 1, options: [{ value: '0', label: 'Father' }, { value: '1', label: 'Mother' }] },
    { id: 'married', label: 'Your parents were married when you were born', def: 1, options: YN },
    { id: 'nat', label: 'That parent took US citizenship before July 2001 and before your birth', def: 0, options: YN },
    { id: 'ties', label: 'You lived in Sweden or visited it regularly before 22', def: 0, options: YN },
  ],
  run: (v) => {
    const r = typical('se', 1, { you: v.born, sexes: v.sex ? 'F' : 'M', natAfterNext: v.nat ? false : null, flags: { married: !!v.married, ties: !!v.ties } });
    const father = r.reasons.some((x) => x.text.includes('unmarried Swedish father'));
    return {
      head: ['Under the Act as amended on June 6, 2026', LEVEL[r.level]],
      rows: [
        ['Route', r.route],
        ['Migration Agency fee', father ? (r.level === 'no' ? 'Route closed after 18' : `${cur(K.feeFather.amount, 'SEK')} (father's notification)`) : r.level === 'no' ? (v.nat ? 'Free declaration to confirm' : 'Free regain application, narrow EU test') : 'Free (retention or declaration)'],
        ['Published time', father && r.level !== 'no' ? `${K.time.maxMonths} months for 75% of notifications` : 'Not published'],
        ['Keep US citizenship', 'Yes, since July 1, 2001'],
      ],
      note: r.reasons[r.reasons.length - 1]?.text,
    };
  },
};
export default spec;
