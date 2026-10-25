import type { MiniSpec } from '../mini-types';
import { typical, LEVEL, YN, opts, C, usd, cur } from '../mini-kit';
const K = C.it;
const spec: MiniSpec = {
  title: 'Which Italian ancestor still counts after Law 74/2025?',
  cta: 'Check your whole family tree', ctaPage: 'home',
  inputs: [
    { id: 'gen', label: 'Your Italian-born ancestor is your', def: 1, options: opts(['Parent', 'Grandparent', 'Great-grandparent']).map((o) => ({ ...o, value: String(Number(o.value) + 1) })) },
    { id: 'nat', label: 'Did that ancestor ever take US citizenship?', def: 0, options: YN },
    { id: 'res', label: 'Italian parent lived 2 years in Italy before your birth', def: 0, options: YN },
    { id: 'filed', label: 'Application or court case filed by March 27, 2025', def: 0, options: YN },
  ],
  run: (v) => {
    const r = typical('it', v.gen, { natAfterNext: v.nat ? true : null, flags: { itResidence: !!v.res, itFiled: !!v.filed } });
    return {
      head: ['Under the rules in force on October 25, 2026', LEVEL[r.level]],
      rows: [['Route', r.route], ['Consular fee', `${cur(K.fee.amount, 'EUR')} (${usd(K.usdFee.amount)} in New York)`], ['Legal time limit', '730 days']],
      note: r.reasons[0]?.text,
    };
  },
};
export default spec;
