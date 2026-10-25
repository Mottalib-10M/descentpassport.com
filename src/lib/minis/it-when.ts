import type { MiniSpec } from '../mini-types';
import { C, cur, usd } from '../mini-kit';
const K = C.it;
const spec: MiniSpec = {
  title: 'Where and how fast, depending on when you file',
  cta: 'See what goes in the file', ctaPage: 'italy-requirements',
  inputs: [{ id: 'y', label: 'Year you file as an adult living in the US', def: 2027, max: 2035, plain: true }],
  run: (v) => {
    const y = Math.max(2026, Math.min(2035, Math.round(v.y)));
    const central = y >= 2029;
    return {
      head: ['Filed with', central ? 'Foreign Ministry office in Rome' : 'Your US consulate'],
      rows: [['How', central ? 'By post only' : 'Prenot@mi appointment, within the yearly cap'], ['Time limit', '36 months (Law 11/2026)'], ['Fee per adult', `${cur(K.fee.amount, 'EUR')} (${usd(K.usdFee.amount)} in New York, Q4 2026)`]],
      note: 'Minors\' declarations stay with the consulates after 2028.',
    };
  },
};
export default spec;
