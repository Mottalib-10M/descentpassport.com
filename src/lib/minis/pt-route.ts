import type { MiniSpec } from '../mini-types';
import { typical, LEVEL, YN, opts, C } from '../mini-kit';
const K = C.pt;
const D = new Date(`${K.cutoffs.lo2026}T00:00:00Z`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
const GEN = opts(['Parent', 'Grandparent', 'Great-grandparent']).map((o) => ({ ...o, value: String(Number(o.value) + 1) }));
const spec: MiniSpec = {
  title: 'Which Portuguese route opens for you?',
  cta: 'Check your whole family tree', ctaPage: 'home',
  inputs: [
    { id: 'gen', label: 'Your Portuguese-born ancestor is your', def: 2, options: GEN },
    { id: 'nat', label: 'Did that ancestor take US citizenship before the next child was born?', def: 0, options: YN },
    { id: 'filed', label: `Grandchild application filed before ${D}`, def: 0, options: YN },
  ],
  run: (v) => {
    const r = typical('pt', v.gen, { natAfterNext: v.nat ? false : null });
    const oldRules = v.gen === 2 && !!v.filed;
    return {
      head: ['Under Law 37/81 as amended in 2026', LEVEL[r.level]],
      rows: [
        ['Route', oldRules ? `Grandchild declaration (rules before ${D})` : r.route],
        ['Registry fee', K.fee.amount === null ? 'Not published on the registry guide' : String(K.fee.amount)],
        ['Published time', 'Not published'],
      ],
      note: oldRules ? `A file pending on ${D} is decided under the earlier text, without the new culture and history test.` : r.reasons[r.reasons.length - 1]?.text,
    };
  },
};
export default spec;
