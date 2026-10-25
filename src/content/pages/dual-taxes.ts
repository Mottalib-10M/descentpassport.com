import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'dual-taxes',
  group: 'dual',
  order: 430,
  tool: { kind: 'fbar' },
  mini: { kind: 'mini:feie' },
  related: ['dual', 'italy-dual', 'us-canada', 'second-passport', 'countries-dual'],
  sources: ['irs-abroad', 'irs-fbar', 'fincen-fbar', 'irs-fatca', 'irs-rp-2025-32', 'irs-2555', 'irs-physical-presence'],
  en: {
    slug: 'dual-citizen-taxes',
    nav: 'Taxes for dual citizens',
    card: 'FBAR over $10,000, Form 8938 thresholds, the $132,900 foreign earned income exclusion for 2026, and what a second passport does not change.',
    title: 'Dual citizen taxes: FBAR, Form 8938 and the 2026 exclusion',
    description: 'Taxes for US dual citizens in 2026: FBAR above $10,000 in foreign accounts, Form 8938 thresholds at home and abroad, the $132,900 earned income exclusion.',
    h1: 'Taxes for US dual citizens',
    intro: 'Enter your foreign account balances, where you live and your filing status: the tool says whether the FBAR and Form 8938 apply this year.',
    resume: (h) => `A second citizenship changes nothing on a US tax return: the United States taxes its citizens on worldwide income wherever they live, dual or not (${h.src('irs-abroad', 'IRS')}). What changes the picture is what usually comes with the passport, foreign bank accounts, a job or a pension abroad. Three rules matter. The FBAR, FinCEN Form 114, is due when your foreign accounts together exceed ${h.usd(h.P.us.fbar.threshold)} at any time during the year; it is filed online with FinCEN, due April 15 with an automatic extension to October 15 (${h.src('irs-fbar', 'IRS')}). Form 8938 goes with your tax return when specified foreign assets pass ${h.usd(h.P.us.fatca8938.thresholds[0].endOfYear)} at year end or ${h.usd(h.P.us.fatca8938.thresholds[0].anyTime)} at any time for a single filer living in the United States, four times more for a single filer abroad. And for 2026 the foreign earned income exclusion lets a qualifying worker abroad exclude up to ${h.usd(h.P.us.feie.amount)} of salary (${h.src('irs-rp-2025-32', 'Rev. Proc. 2025-32')}).`,
    faqs: (h) => [
      { q: 'Do I file an FBAR for an Italian account opened only to pay consular fees?', a: `Only if all your foreign accounts together exceed ${h.usd(h.P.us.fbar.threshold)} at some point in the year. Small accounts count toward that total: two accounts at ${h.usd(6000)} each push you over. The test adds up the highest balance of each account during the year.` },
      { q: 'Is the FBAR the same as Form 8938?', a: 'No. The FBAR goes to FinCEN, separately from your tax return, and covers accounts only. Form 8938 is attached to your income tax return, covers accounts and other foreign assets such as foreign shares or interests in foreign entities, and has much higher thresholds. Many people file both for the same accounts.' },
      { q: 'Does a dual citizen living in the US pay tax to the other country?', a: 'Usually not because of the passport itself: most countries tax by residence, not citizenship. Income earned in that country, such as rent from an inherited apartment, can be taxed there, and the treaty between the two countries plus the foreign tax credit decide how double taxation is avoided.' },
    ],
    body: (h) => {
      const T = h.P.us.fatca8938.thresholds;
      return `
<h2>Form 8938 thresholds</h2>
${h.table(['Situation', 'Last day of the year', 'Any time in the year'], T.map((t: any) => [`${t.abroad ? 'Living abroad' : 'Living in the US'}, ${t.filing === 'joint' ? 'married filing jointly' : 'single or married filing separately'}`, h.usd(t.endOfYear), h.usd(t.anyTime)]), 'Specified foreign financial assets, IRS summary of FATCA reporting.', ['l', 'r', 'r'])}
<p>You file Form 8938 only if you must file an income tax return in the first place. Living abroad means meeting the IRS tests for a tax home abroad and enough days outside the United States; the higher thresholds then apply.</p>
<h2>The FBAR in practice</h2>
<p>The FBAR is a report, not a tax: it lists each foreign account and its highest balance in the year. It is filed electronically through FinCEN's BSA system, not with your tax return. Accounts include checking, savings, brokerage and some pension accounts held abroad, and accounts you can sign on, such as a parent's account in the old country. Penalties for not filing can be heavy, which is why the ${h.src('fincen-fbar', 'FinCEN page')} and the IRS both stress the ${h.usd(h.P.us.fbar.threshold)} aggregate test.</p>
<h2>Working abroad: exclusion or credit</h2>
<p>An American who moves to Dublin or Milan on a second passport keeps filing a US return. Two tools prevent double taxation of salary. The foreign earned income exclusion, claimed on ${h.src('irs-2555', 'Form 2555')}, removes up to ${h.usd(h.P.us.feie.amount)} of foreign earnings for 2026 (${h.usd(h.P.us.feie.previous)} for 2025) for people who pass the ${h.src('irs-physical-presence', 'physical presence test')}, ${h.num(h.P.us.feie.presenceDays)} full days abroad in twelve months, or the bona fide residence test. The foreign tax credit instead offsets US tax with the income tax paid abroad, which often works better in countries with higher rates than the United States. The tool below runs the exclusion.</p>
<h2>What does not change</h2>
<ul>
<li>Your duty to file: the filing rules are generally the same whether you live in the United States or abroad.</li>
<li>Worldwide income: income from every source stays reportable, including rent or interest earned in the other country.</li>
<li>Your US passport: the IRS rules apply to US citizens, whatever other passport they hold.</li>
</ul>
<h2>Before and after the passport</h2>
<p>Nothing is due when a consulate recognizes you; the duties start with accounts and income abroad. If you plan to move, read the ${h.a('dual', 'US rules on dual nationality')} and the ${h.a('second-passport', 'comparison of second citizenship routes')}. For a US and Canadian household, the ${h.a('us-canada', 'US and Canadian page')} covers the two tax systems.</p>`;
    },
  },
});
