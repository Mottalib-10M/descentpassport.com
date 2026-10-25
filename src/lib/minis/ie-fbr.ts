import type { MiniSpec } from '../mini-types';
import { typical, LEVEL, YN, opts, C, cur } from '../mini-kit';
const K = C.ie;
const spec: MiniSpec = {
  title: 'Can you register as Irish, and what does it cost?',
  cta: 'Check your whole family tree', ctaPage: 'home',
  inputs: [
    { id: 'gen', label: 'The relative born on the island of Ireland is your', def: 2, options: opts(['Parent', 'Grandparent', 'Great-grandparent']).map((o) => ({ ...o, value: String(Number(o.value) + 1) })) },
    { id: 'fbr', label: 'Your parent was entered in the Foreign Births Register before your birth', def: 0, options: YN },
    { id: 'minor', label: 'Applicant', def: 0, options: [{ value: '0', label: 'Adult (18 or over)' }, { value: '1', label: 'Child under 18' }] },
  ],
  run: (v) => {
    const r = typical('ie', v.gen, { flags: { fbrParent: !!v.fbr } });
    const fee = v.minor ? K.feeMinor : K.fee;
    const register = r.level === 'yes' && v.gen >= 2;
    return {
      head: ['Under the rules in force on October 25, 2026', LEVEL[r.level]],
      rows: [
        ['Route', r.route],
        ['Registration fee', register ? cur(fee.amount, 'EUR') : v.gen === 1 ? 'None: passport application only' : 'Not applicable'],
        ['Published wait', register ? `About ${K.time.minMonths} months, in date order` : 'Not applicable'],
      ],
      note: r.reasons[0]?.text,
    };
  },
};
export default spec;
