import type { MiniSpec } from '../mini-types';
import { typical, LEVEL, opts, year, cur, C } from '../mini-kit';
const K = C.lv;
const LEFT = opts(['Before 1918', 'Between 1918 and June 17, 1940', 'Fled or deported, 1940 to 1990', 'Never left; family emigrated later']);
const spec: MiniSpec = {
  title: 'Which Latvian route fits your family?',
  cta: 'Check your whole family tree', ctaPage: 'home',
  inputs: [
    { id: 'left', label: 'Your Latvian ancestor left Latvia', def: 2, options: LEFT },
    year('you', 'Your year of birth', 1985),
  ],
  run: (v) => {
    const gen = 2;
    const r = typical('lv', gen, { you: v.you, flags: { pre1918: v.left === 0, left1940: v.left === 2 } });
    const exile = v.left === 2;
    return {
      head: ['Citizenship Law, section 2', LEVEL[r.level]],
      rows: [
        ['Route', r.route],
        ['Decision time', exile ? `Within ${K.time.maxMonths} months of complete documents` : v.left === 0 ? 'No route' : `Within ${K.time.minMonths} month of the documents`],
        ['State fee', K.fee.amount === 0 ? `None listed; ${cur(K.feeReturn.amount, 'EUR')} plus postage to return originals` : String(K.fee.amount)],
        ['Keep US citizenship', v.left === 0 ? 'Not applicable' : 'Yes'],
      ],
      note: r.reasons[r.reasons.length - 1]?.text,
    };
  },
};
export default spec;
