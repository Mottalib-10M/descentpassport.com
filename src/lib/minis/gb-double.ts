import type { MiniSpec } from '../mini-types';
import { typical, YN, C, cur, NOW } from '../mini-kit';
const K = C.gb;
const spec: MiniSpec = {
  title: 'Can the child be registered on form MN1?',
  cta: 'Check your whole family tree', ctaPage: 'home',
  inputs: [
    { id: 'age', label: 'Age of the child (or your own age)', def: 8, max: 99, unit: 'years' },
    { id: 'gp', label: 'The grandparent was born, naturalized or registered in the UK', def: 1, options: YN },
    { id: 'res', label: `The British parent lived ${K.cutoffs.parentResidenceYears} years in a row in the UK before the birth, under 270 days away`, def: 0, options: YN },
  ],
  run: (v) => {
    const r = typical('gb', 2, { you: NOW - Math.max(0, v.age) });
    const minor = v.age < 18;
    const ok = minor && !!v.gp && !!v.res;
    const head: [string, string] = !minor ? ['Grandchild aged 18 or over', 'Not eligible'] : !v.gp ? ['Grandparent British by descent only', 'Not eligible'] : ok ? ['Section 3(2), double descent', 'Likely eligible'] : ['Section 3(2) residence not met', 'Section 3(5) only'];
    return {
      head,
      rows: [
        ['Route', ok ? 'Registration under s. 3(2), form MN1' : minor && v.gp ? 'Section 3(5): family living in the UK for 3 years' : r.route],
        ['Home Office fee', minor && v.gp ? cur(K.feeChild.amount, 'GBP') : 'Not applicable'],
        ['Child becomes', ok ? 'British by descent, on approval' : minor && v.gp ? 'British otherwise than by descent, under s. 3(5)' : 'Not British'],
      ],
      note: minor ? `Apply before the 18th birthday; the Home Office usually decides within ${K.time.maxMonths} months.` : r.reasons[0]?.text,
    };
  },
};
export default spec;
