import type { MiniSpec } from '../mini-types';
import { typical, LEVEL, YN, opts, C, cur } from '../mini-kit';
const K = C.sk;
const spec: MiniSpec = {
  title: 'Does your Slovak ancestor open section 7(8)?',
  cta: 'Check every country in your family tree', ctaPage: 'home',
  inputs: [
    { id: 'gen', label: 'The ancestor born in Slovakia is your', def: 2, options: opts(['Parent', 'Grandparent', 'Great-grandparent', 'Great-great-grandparent or earlier']).map((o) => ({ ...o, value: String(Number(o.value) + 1) })) },
    { id: 'cs', label: 'That ancestor held Czechoslovak citizenship (lived after October 28, 1918)', def: 1, options: YN },
    { id: 'born', label: 'That ancestor was born on the territory of today\'s Slovakia', def: 1, options: YN },
  ],
  run: (v) => {
    const ok = v.gen <= 3 && !!v.cs && !!v.born;
    const r = typical('sk', Math.min(v.gen, 3));
    const why = v.gen > 3 ? 'Section 7(8) stops at a great-grandparent.' : !v.cs ? 'An ancestor who left before Czechoslovakia existed (1918) and never held its citizenship does not count.' : !v.born ? 'The ancestor must have been born on the territory of today\'s Slovakia.' : r.reasons[1]?.text;
    return {
      head: ['Under Act 40/1993 as in force on October 25, 2026', ok ? LEVEL[r.level] : LEVEL.no],
      rows: [
        ['Route', ok ? r.route : 'Not under section 7(8)'],
        ['Administrative fee', ok ? cur(K.fee.amount, 'EUR') : 'Not applicable'],
        ['Legal time limit', `${K.time.maxMonths} months from receipt by the Ministry`],
        ['Keep US citizenship', 'Yes, if held before the grant'],
      ],
      note: why,
    };
  },
};
export default spec;
