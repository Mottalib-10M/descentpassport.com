import type { MiniSpec } from '../mini-types';
import { YN } from '../mini-kit';
const spec: MiniSpec = {
  title: 'Can living in Italy open Italian citizenship?',
  cta: 'Check your family tree first', ctaPage: 'home',
  inputs: [
    { id: 'anc', label: 'An Italian citizen by birth among your', def: 1, options: [{ value: '1', label: 'Parents or grandparents' }, { value: '0', label: 'Neither' }] },
    { id: 'years', label: 'Years of legal residence in Italy since turning 18', def: 1, max: 30 },
    { id: 'parentRes', label: 'Your Italian parent lived 2 years in Italy before your birth', def: 0, options: YN },
  ],
  run: (v) => {
    if (v.parentRes) return { head: ['Route', 'Recognition by descent'], rows: [['Basis', 'Art. 3-bis, letter (d)'], ['Residence of your own', 'Not needed']], note: 'Your parent\'s two years in Italy are an exception of the 2025 law: you are recognized, not naturalized.' };
    if (!v.anc) return { head: ['Route', 'Ordinary naturalization'], rows: [['Basis', 'Residence rules for foreigners'], ['Descent', 'Not relevant']], note: 'Without an Italian parent or grandparent by birth, descent gives no shortcut.' };
    const y = Math.max(0, Math.round(v.years));
    const ok = y >= 2;
    return {
      head: ['Declaration under art. 4', ok ? 'Open' : `${2 - y} more ${2 - y === 1 ? 'year' : 'years'}`],
      rows: [['Legal residence needed', '2 years after turning 18'], ['Your residence', `${y} ${y === 1 ? 'year' : 'years'}`], ['Effect', 'Citizen from the day after the declaration']],
      note: 'The declaration must follow within one year of meeting the condition; the comune where you live receives it.',
    };
  },
};
export default spec;
