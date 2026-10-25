import type { MiniSpec } from '../mini-types';
import { typical, LEVEL, YN, opts, C, cur, plural } from '../mini-kit';
const K = C.ie;
const spec: MiniSpec = {
  title: 'What does Irish dual citizenship cost your family?',
  cta: 'Price the US records too', ctaPage: 'cost',
  inputs: [
    { id: 'gen', label: 'The relative born on the island of Ireland is your', def: 2, options: opts(['Parent', 'Grandparent']).map((o) => ({ ...o, value: String(Number(o.value) + 1) })) },
    { id: 'adults', label: 'Adults registering (you included)', def: 1, max: 10 },
    { id: 'kids', label: 'Children under 18 who can register through you', def: 0, max: 10 },
    { id: 'early', label: 'Some of your children were born before your registration', def: 0, options: YN },
  ],
  run: (v) => {
    const r = typical('ie', v.gen);
    const fbrAdults = v.gen >= 2 ? Math.max(0, v.adults) : 0;
    const total = fbrAdults * K.fee.amount + Math.max(0, v.kids) * K.feeMinor.amount;
    const rows: Array<[string, string]> = [
      ['Your route', r.route],
      ['Adult registrations', v.gen >= 2 ? `${plural(fbrAdults, 'adult')} × ${cur(K.fee.amount, 'EUR')}` : 'None: Irish from birth'],
      ['Child registrations', `${plural(Math.max(0, v.kids), 'child', 'children')} × ${cur(K.feeMinor.amount, 'EUR')}`],
      ['Keep US citizenship', K.dual.status === 'yes' ? 'Yes, no renunciation' : 'With conditions'],
    ];
    return {
      head: ['Foreign Births Register fees, passports not included', cur(total, 'EUR')],
      rows,
      note: v.early && v.gen >= 2
        ? 'Children born before your own registration cannot register through you: they are great-grandchildren of the Irish-born relative.'
        : `Irish from the date of registration; the Department states about ${K.time.minMonths} months. ${LEVEL[r.level]} for you.`,
    };
  },
};
export default spec;
