import type { MiniSpec } from '../mini-types';
import { typical, LEVEL, YN, C, cur, year } from '../mini-kit';
const K = C.gb;
const spec: MiniSpec = {
  title: 'Are you British already, or do you register?',
  cta: 'Check your whole family tree', ctaPage: 'home',
  inputs: [
    { id: 'sex', label: 'Your parent born in the UK is your', def: 1, options: [{ value: '0', label: 'Father' }, { value: '1', label: 'Mother' }] },
    { id: 'married', label: 'Your parents were married when you were born', def: 1, options: YN },
    year('born', 'Your year of birth', 1975),
  ],
  run: (v) => {
    const r = typical('gb', 1, { sexes: v.sex ? 'F' : 'M', you: v.born, flags: { married: !!v.married } });
    const register = /UKM|UKF/.test(r.route);
    return {
      head: ['Under the rules in force on October 25, 2026', LEVEL[r.level]],
      rows: [
        ['Route', r.route],
        ['Home Office fee', register ? `${cur(K.fee.amount, 'GBP')} (ceremony fee)` : 'None: passport application only'],
        ['Published time', register ? `Usually within ${K.time.maxMonths} months` : 'Passport office times apply'],
      ],
      note: r.reasons[0]?.text,
    };
  },
};
export default spec;
