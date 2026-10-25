import type { MiniSpec } from '../mini-types';
import { P, C, YN, usd, cur } from '../mini-kit';
const K = C.ca, U = P.us;
const spec: MiniSpec = {
  title: 'Which US obligations follow a dual US and Canadian citizen?',
  cta: 'Read the tax page', ctaPage: 'dual-taxes',
  inputs: [
    { id: 'live', label: 'You live in Canada', def: 0, options: YN },
    { id: 'bal', label: 'Highest combined balance of your Canadian accounts this year', def: 8000, unit: '$', max: 10_000_000 },
    { id: 'joint', label: 'You file a joint US return', def: 0, options: YN },
  ],
  run: (v) => {
    const bal = Math.max(0, v.bal);
    const t = U.fatca8938.thresholds.find((x: any) => x.abroad === !!v.live && x.filing === (v.joint ? 'joint' : 'single'));
    return {
      head: ['FBAR for this balance', bal > U.fbar.threshold ? 'Required' : 'Not required'],
      rows: [
        ['FBAR threshold', `Over ${usd(U.fbar.threshold)} in total, due ${U.fbar.due}, automatic extension to ${U.fbar.extension}`],
        ['Form 8938', t ? `${usd(t.endOfYear)} at year end or ${usd(t.anyTime)} at any time` : 'See the tax page'],
        ['Salary exclusion', v.live ? `Up to ${usd(U.feie.amount)} for ${U.feie.year} on Form 2555` : 'Not for income earned while living in the US'],
        ['Passports', 'US passport to enter and leave the US, Canadian passport to fly to Canada'],
        ['Certificate fee', cur(K.fee.amount, 'CAD')],
      ],
      note: 'Type balances already converted to US dollars. The two forms are separate: one can be due without the other.',
    };
  },
};
export default spec;
