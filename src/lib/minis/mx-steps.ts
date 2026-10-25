import type { MiniSpec } from '../mini-types';
import { typical, LEVEL, YN, opts, C, usd, clamp, plural } from '../mini-kit';
const K = C.mx;
const GEN = opts(['Parent', 'Grandparent', 'Great-grandparent']).map((o) => ({ ...o, value: String(Number(o.value) + 1) }));
const spec: MiniSpec = {
  title: 'How many consular registrations stand between you and Mexico?',
  cta: 'Compare with your other ancestors', ctaPage: 'home',
  inputs: [
    { id: 'gen', label: 'The closest relative born in Mexico is your', def: 2, options: GEN },
    { id: 'done', label: 'People between that relative and you who already hold a Mexican birth record', def: 0, unit: 'people', max: 2 },
    { id: 'copies', label: 'Extra certified copies you want for each record', def: 1, unit: 'copies', max: 10 },
    { id: 'early', label: 'That relative took US citizenship before 1998, before their child in your line was born', def: 0, options: YN },
  ],
  run: (v) => {
    const g = clamp(v.gen, 1, 3);
    const done = clamp(v.done, 0, g - 1);
    const steps = g - done;
    const copies = clamp(v.copies, 0, 10);
    const r = typical('mx', g, { natAfterNext: v.early ? false : null });
    return {
      head: ['Under art. 30 of the Constitution, as amended in 2021', LEVEL[r.level]],
      rows: [
        ['Registrations still needed', plural(steps, 'registration')],
        ['Registration fee', K.fee.amount === 0 ? 'Free, one certified copy included' : usd(K.fee.amount)],
        ['Extra copies', `${usd(K.feeCopy.amount * copies * steps)} (${usd(K.feeCopy.amount)} each, Atlanta)`],
        ['Published time', 'Not published'],
      ],
      note: steps > 1 ? 'Each person registers in turn: your parent first, then you, using the record just issued.' : r.reasons[0]?.text,
    };
  },
};
export default spec;
