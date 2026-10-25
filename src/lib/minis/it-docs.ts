import type { MiniSpec } from '../mini-types';
import { cost } from '../engine/cost';
import { opts, usd, plural } from '../mini-kit';
const spec: MiniSpec = {
  title: 'How many records does an Italian file need?',
  cta: 'Price every record and apostille', ctaPage: 'cost',
  inputs: [
    { id: 'gen', label: 'Your Italian ancestor is your', def: 2, options: opts(['Parent', 'Grandparent', 'Great-grandparent (old rules only)']).map((o) => ({ ...o, value: String(Number(o.value) + 1) })) },
    { id: 'deaths', label: 'Deceased people in the line', def: 1, max: 3 },
    { id: 'nat', label: 'Did the ancestor naturalize in the US?', def: 0, options: [{ value: '0', label: 'Never (non-existence proof)' }, { value: '1', label: 'Yes (naturalization record)' }] },
  ],
  run: (v) => {
    const r = cost({ country: 'it', gen: v.gen, deaths: v.deaths, extra: 0, copyPrice: null, apostille: 20, translationPerDoc: 0, natProof: v.nat ? 'nara' : 'cne', adults: 1 });
    return {
      head: ['US records to order', plural(r.records, 'record')],
      rows: [['Births, marriages, deaths', `${r.births}, ${r.marriages}, ${r.deaths}`], ['Apostilles from the state', plural(r.apostilled, 'apostille')], ['Documents to translate into Italian', plural(r.translated, 'document')], ['US side at California rates', usd(r.usTotal - (r.feeUsd ?? 0))]],
      note: 'Plus the ancestor\'s birth extract from the Italian comune, which needs neither apostille nor translation.',
    };
  },
};
export default spec;
