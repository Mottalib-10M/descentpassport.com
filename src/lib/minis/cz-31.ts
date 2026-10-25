import type { MiniSpec } from '../mini-types';
import { typical, LEVEL, opts, C, cur, usd } from '../mini-kit';
const K = C.cz;
const spec: MiniSpec = {
  title: 'Can you declare Czech citizenship under section 31?',
  cta: 'Check every country in your family tree', ctaPage: 'home',
  inputs: [
    { id: 'gen', label: 'The Czech or Czechoslovak citizen is your', def: 2, options: opts(['Parent', 'Grandparent', 'Great-grandparent']).map((o) => ({ ...o, value: String(Number(o.value) + 1) })) },
    { id: 'nat', label: 'Did that ancestor take US (or another) citizenship?', def: 1, options: [{ value: '0', label: 'Never' }, { value: '1', label: 'Yes, before 2014' }, { value: '2', label: 'Yes, in 2014 or later' }] },
    { id: 'sk', label: 'Do you hold Slovak citizenship today?', def: 0, options: [{ value: '0', label: 'No' }, { value: '1', label: 'Yes' }] },
  ],
  run: (v) => {
    const r = typical('cz', v.gen, { natAfterNext: v.nat === 1 ? true : null });
    const blocked = !!v.sk && r.route.includes('31');
    const cert = r.route.includes('certificate');
    return {
      head: ['Under the Act in force on October 25, 2026', blocked ? LEVEL.no : LEVEL[r.level]],
      rows: [
        ['Route', blocked ? 'Not open while you hold Slovak citizenship' : r.route],
        ['Consular fee', cert ? `${cur(K.feeCert.amount, 'CZK')} (${usd(K.usdFeeCert.amount)})` : `${cur(K.fee.amount, 'CZK')} (${usd(K.usdFee.amount)})`],
        ['Published time', 'Not published; the consulate forwards the file within 30 days'],
        ['Keep US citizenship', 'Yes'],
      ],
      note: blocked ? 'Section 31 excludes people who hold Slovak citizenship.' : r.reasons[0]?.text,
    };
  },
};
export default spec;
