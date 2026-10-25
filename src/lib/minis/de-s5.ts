import type { MiniSpec } from '../mini-types';
import { typical, LEVEL, year, C, cur, NOW } from '../mini-kit';
import { dateL } from '../format-l';
const K = C.de;
const spec: MiniSpec = {
  title: 'Section 5 declaration or discretionary naturalization?',
  cta: 'Check the rest of the family line', ctaPage: 'home',
  inputs: [
    { id: 'case', label: 'The person left out of German citizenship was born', def: 0, options: [{ value: '0', label: 'In wedlock, to a German mother and a non-German father' }, { value: '1', label: 'Out of wedlock, to a German father' }] },
    year('y', 'Year that person was born', 1955, 'It may be you, your parent or your grandparent'),
  ],
  run: (v) => {
    const y = Math.max(1900, Math.min(NOW, Math.round(v.y)));
    const mother = Math.round(v.case ?? 0) === 0;
    const r = typical('de', 1, { sexes: mother ? 'F' : 'M', you: y, flags: { married: mother } });
    const s5 = r.route.includes('s. 5');
    const born = r.level !== 'no' && !s5;
    return {
      head: ['Route for a birth in ' + y, s5 ? 'Declaration under s. 5' : born ? 'German at birth' : 'Discretionary naturalization (s. 14)'],
      rows: s5
        ? [['Fee', K.feeS5.amount === 0 ? 'Free' : cur(K.feeS5.amount, 'EUR')], ['Deadline (date of receipt)', dateL(K.cutoffs.s5Deadline)], ['Who else benefits', 'All descendants of that person'], ['Eligibility', LEVEL[r.level]]]
        : born
          ? [['What to ask for', 'Certificate of citizenship'], ['Fee', cur(K.fee.amount, 'EUR')], ['Published time', K.time.text.charAt(0).toUpperCase() + K.time.text.split(';')[0].slice(1)]]
          : [['Why', 'Section 5 covers births after May 23, 1949 only'], ['Language', 'German required for s. 14'], ['Fee for s. 5', 'Not applicable']],
      note: y === K.cutoffs.s5Born ? 'Born in 1949: the exact date matters, since s. 5 starts with births after May 23, 1949.' : born ? 'Born after the cut-off for this case, so the German parent passed citizenship at birth.' : s5 ? 'The declaration makes that person German from the day it reaches the BVA, and opens the same route to every descendant.' : r.reasons[r.reasons.length - 1]?.text.replace(/^You was/, 'You were'),
    };
  },
};
export default spec;
