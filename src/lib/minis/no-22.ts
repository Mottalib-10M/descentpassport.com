import type { MiniSpec } from '../mini-types';
import { typical, LEVEL, YN, C, cur, year } from '../mini-kit';
const K = C.no;
const spec: MiniSpec = {
  title: 'Are you Norwegian, and do you keep it after 22?',
  cta: 'Check every country in your family tree', ctaPage: 'home',
  inputs: [
    year('born', 'Your year of birth', 2006),
    { id: 'sex', label: 'Your Norwegian parent is your', def: 0, options: [{ value: '0', label: 'Father' }, { value: '1', label: 'Mother' }] },
    { id: 'married', label: 'Your parents were married when you were born', def: 1, options: YN },
    { id: 'nat', label: 'That parent took US citizenship before 2020 and before your birth', def: 0, options: YN },
    { id: 'ties', label: 'You spent 6 months or more in Norway before turning 22', def: 0, options: YN },
  ],
  run: (v) => {
    const r = typical('no', 1, { you: v.born, sexes: v.sex ? 'F' : 'M', natAfterNext: v.nat ? false : null, flags: { married: !!v.married, ties: !!v.ties } });
    const young = 2026 - v.born < K.cutoffs.lossAge;
    return {
      head: ['Under the rules in force on October 25, 2026', LEVEL[r.level]],
      rows: [
        ['Route', r.route],
        ['UDI fee', v.nat ? `${cur(K.fee.amount, 'NOK')} for your parent's notification` : r.level === 'no' ? 'No notification after a loss at 22' : young ? `${K.feeKeep.amount === 0 ? 'Free' : cur(K.feeKeep.amount, 'NOK')} to keep it before 22` : 'None if already confirmed'],
        ['Published time', r.level === 'no' && !v.nat ? 'Not applicable' : `${K.timeKeep.months} months (UDI, September 24, 2026)`],
        ['Keep US citizenship', 'Yes, since 2020'],
      ],
      note: r.reasons[r.reasons.length - 1]?.text,
    };
  },
};
export default spec;
