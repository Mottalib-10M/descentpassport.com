import type { MiniSpec } from '../mini-types';
import { typical, LEVEL, opts, cur, C } from '../mini-kit';
const K = C.lt;
const GEN = opts(['Parent', 'Grandparent', 'Great-grandparent']).map((o) => ({ ...o, value: String(Number(o.value) + 1) }));
const LEFT = opts(['Before 1918', 'Between 1918 and June 1940', 'Between June 1940 and March 1990']);
const spec: MiniSpec = {
  title: 'Can you reinstate Lithuanian citizenship and keep the US one?',
  cta: 'Check your whole family tree', ctaPage: 'home',
  inputs: [
    { id: 'gen', label: 'Your Lithuanian ancestor is your', def: 3, options: GEN },
    { id: 'left', label: 'The ancestor left Lithuania', def: 2, options: LEFT },
  ],
  run: (v) => {
    const r = typical('lt', v.gen, { flags: { pre1918: v.left === 0, left1940: v.left === 2 } });
    return {
      head: ['Law on Citizenship, reinstatement', LEVEL[r.level]],
      rows: [
        ['Route', r.route],
        ['State fee', cur(K.fee.amount, 'EUR')],
        ['Filing', 'Online in MIGRIS, originals at a consulate'],
        ['Published time', K.time.text],
      ],
      note: r.reasons[r.reasons.length - 1]?.text,
    };
  },
};
export default spec;
