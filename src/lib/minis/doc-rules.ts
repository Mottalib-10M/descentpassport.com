import type { MiniSpec } from '../mini-types';
import { C, cur } from '../mini-kit';
import { COUNTRY_ORDER, countryName } from '../engine/descent';
const yn = (b: boolean | null, y: string, n: string) => (b === true ? y : b === false ? n : 'Ask the consulate');
const spec: MiniSpec = {
  title: 'What does each country want on US records?',
  cta: 'Price the whole file', ctaPage: 'cost',
  inputs: [{ id: 'c', label: 'Country', def: 0, options: COUNTRY_ORDER.map((c, i) => ({ value: String(i), label: countryName(c) })) }],
  run: (v) => {
    const code = COUNTRY_ORDER[Math.max(0, Math.min(COUNTRY_ORDER.length - 1, Math.round(v.c)))];
    const k = C[code];
    return {
      head: [countryName(code), yn(k.docs?.apostille ?? null, 'Apostilles required', 'No apostille asked')],
      rows: [['Translations', yn(k.docs?.translation ?? null, 'Required', 'English accepted')], ['Who decides', k.authority], ['Fee', k.fee.amount === null ? 'Not published' : k.fee.amount === 0 ? 'Free' : cur(k.fee.amount, k.fee.cur)]],
      note: k.gens,
    };
  },
};
export default spec;
