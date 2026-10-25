import type { MiniSpec } from '../mini-types';
import { typical, LEVEL, YN, opts, year, C, NOW } from '../mini-kit';
const K = C.fr;
const spec: MiniSpec = {
  title: 'Does the 50-year rule block your French line?',
  cta: 'Check the rest of your family tree', ctaPage: 'home',
  inputs: [
    { id: 'gen', label: 'The French-born ancestor is your', def: 2, options: opts(['Parent', 'Grandparent', 'Great-grandparent']).map((o) => ({ ...o, value: String(Number(o.value) + 1) })) },
    year('first', 'Year the first person in the line was born in the US', 1950, 'Your parent, grandparent… whoever was born outside France first'),
    year('you', 'Your year of birth', 1985),
    { id: 'papers', label: 'You or your French parent ever held a French passport, ID card or consular registration', def: 0, options: YN },
  ],
  run: (v) => {
    const g = Math.max(1, Math.min(3, Math.round(v.gen)));
    const you = Math.max(1900, Math.min(NOW, Math.round(v.you)));
    const first = g === 1 ? you : Math.max(1880, Math.min(you - 1, Math.round(v.first)));
    const births = g === 1 ? [you - 30, you] : [first - 30, first, ...(g === 3 ? [Math.round((first + you) / 2)] : []), you];
    const r = typical('fr', g, { births, flags: { frPapers: !!v.papers } });
    const years = NOW - first;
    return {
      head: [`Family abroad for ${years} years`, LEVEL[r.level]],
      rows: [['Route', r.route], ['Threshold of art. 30-3', `${K.cutoffs.desuetudeYears} years abroad without French papers`], ['Fee', K.fee.amount === 0 ? 'Free' : String(K.fee.amount)], ['Legal time limit', K.time.text]],
      note: r.reasons.find((x) => x.ok === false)?.text ?? r.reasons[r.reasons.length - 1]?.text,
    };
  },
};
export default spec;
