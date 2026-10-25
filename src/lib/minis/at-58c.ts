import type { MiniSpec } from '../mini-types';
import { typical, LEVEL, YN, opts, C, cur } from '../mini-kit';
const K = C.at;
const spec: MiniSpec = {
  title: 'Can you declare Austrian citizenship under section 58c?',
  cta: 'Check every country in your family tree', ctaPage: 'home',
  inputs: [
    { id: 'gen', label: 'The Austrian ancestor is your', def: 2, options: opts(['Parent', 'Grandparent', 'Great-grandparent or earlier']).map((o) => ({ ...o, value: String(Number(o.value) + 1) })) },
    { id: 'pers', label: 'The ancestor left before 1955, or was deported or killed, because of Nazi persecution', def: 1, options: YN },
    { id: 'nat', label: 'Did the ancestor take another citizenship?', def: 0, options: [{ value: '0', label: 'Never' }, { value: '1', label: 'Yes, after the next child was born' }, { value: '2', label: 'Yes, before that child was born' }] },
  ],
  run: (v) => {
    const nat = v.nat === 1 ? true : v.nat === 2 ? false : null;
    const r = typical('at', v.gen, { natAfterNext: nat, flags: { persecuted: !!v.pers } });
    const s58 = r.route.includes('58c');
    return {
      head: ['Under the rules in force on October 25, 2026', LEVEL[r.level]],
      rows: [['Route', r.route], ['Federal fee', r.level === 'no' ? 'Not applicable' : s58 ? (K.fee.amount === 0 ? 'None' : cur(K.fee.amount, 'EUR')) : 'Depends on the procedure'], ['Published time', 'Not published'], ['Keep US citizenship', s58 ? 'Yes, if acquired before you file' : 'Only if held from birth']],
      note: r.reasons[r.reasons.length - 1]?.text,
    };
  },
};
export default spec;
