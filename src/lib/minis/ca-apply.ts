import type { MiniSpec } from '../mini-types';
import { C, cur, clamp, plural, opts } from '../mini-kit';
const K = C.ca;
const spec: MiniSpec = {
  title: 'What will the proof of citizenship applications cost?',
  cta: 'Add the US records and copies', ctaPage: 'cost',
  inputs: [
    { id: 'people', label: 'People applying for a certificate (adults and children)', def: 1, max: 20 },
    { id: 'gen', label: 'The relative born in Canada is your', def: 1, options: opts(['Parent', 'Grandparent', 'Great-grandparent']).map((o) => ({ ...o, value: String(Number(o.value) + 1) })) },
    { id: 'fr', label: 'Some records are in a language other than English or French', def: 0, options: [{ value: '0', label: 'No' }, { value: '1', label: 'Yes' }] },
  ],
  run: (v) => {
    const n = clamp(v.people, 1, 20), gen = clamp(v.gen, 1, 3);
    return {
      head: ['IRCC fees for the whole family', cur(n * K.fee.amount, 'CAD')],
      rows: [
        ['Certificates', `${plural(n, 'application')} × ${cur(K.fee.amount, 'CAD')}`],
        ['Birth records to show the line', `${plural(gen + 1, 'generation')}, you included, each with the parents named`],
        ['Translations', v.fr ? 'Needed, with a sworn statement by a translator outside the family' : 'None for US records in English'],
        ['Apostilles', K.docs.apostille ? 'Required' : 'Not asked on the IRCC page'],
      ],
      note: `Published processing time: ${K.time.text}.`,
    };
  },
};
export default spec;
