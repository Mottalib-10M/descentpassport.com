import type { MiniSpec } from '../mini-types';
import { typical, LEVEL, YN, opts, C } from '../mini-kit';
const K = C.hu;
const GEN = opts(['Parent', 'Grandparent', 'Great-grandparent']).map((o) => ({ ...o, value: String(Number(o.value) + 1) }));
const spec: MiniSpec = {
  title: 'Verification or simplified naturalization?',
  cta: 'Check your whole family tree', ctaPage: 'home',
  inputs: [
    { id: 'gen', label: 'Your Hungarian ancestor is your', def: 2, options: GEN },
    { id: 'lang', label: 'You can hold a conversation in Hungarian', def: 0, options: YN },
    { id: 'dep', label: 'The ancestor was formally deprived of citizenship', def: 0, options: YN },
  ],
  run: (v) => {
    const r = typical('hu', v.gen, { flags: { huLanguage: !!v.lang, deprived: !!v.dep } });
    const verif = r.route === 'Citizenship verification';
    return {
      head: ['Under Act LV of 1993', LEVEL[r.level]],
      rows: [
        ['Route', r.route],
        ['Fee', verif ? (K.fee.amount === 0 ? 'Free without a certificate' : String(K.fee.amount)) : 'Naturalization fee not published'],
        ['Hungarian language check', verif ? 'None' : 'Yes, in person'],
        ['Published time', K.time.text],
      ],
      note: r.reasons[r.reasons.length - 1]?.text,
    };
  },
};
export default spec;
