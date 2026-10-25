import type { MiniSpec } from '../mini-types';
import { P, usd } from '../mini-kit';
const F = P.us.feie;
const spec: MiniSpec = {
  title: 'How much foreign salary can I exclude in 2026?',
  cta: 'Check FBAR and Form 8938 too', ctaPage: 'dual-taxes',
  inputs: [
    { id: 'pay', label: 'Salary earned abroad in 2026', def: 95000, unit: '$', max: 10_000_000 },
    { id: 'days', label: 'Full days abroad in a 12-month period', def: 340, max: 366 },
  ],
  run: (v) => {
    const pay = Math.max(0, v.pay), ok = v.days >= F.presenceDays;
    const ex = ok ? Math.min(pay, F.amount) : 0;
    return {
      head: ['Excluded from US income', usd(ex)],
      rows: [['2026 limit', usd(F.amount)], ['Still taxable in the US', usd(pay - ex)], ['Physical presence test', ok ? 'Met' : `Not met: ${F.presenceDays} full days needed, or bona fide residence`]],
      note: 'Claimed on Form 2555 with your return; the foreign tax credit is the other way to avoid double tax.',
    };
  },
};
export default spec;
