import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'us-canada',
  group: 'dual',
  order: 420,
  country: 'ca',
  tool: { kind: 'mini:us-ca-dual' },
  related: ['canada', 'dual', 'dual-taxes', 'countries-dual', 'canada-apply'],
  sources: ['ca-dual', 'dos-dual', 'usc-1481', 'irs-abroad', 'irs-fbar', 'irs-fatca', 'irs-rp-2025-32', 'irs-2555', 'ca-proof-apply'],
  en: {
    slug: 'american-canadian-dual-citizenship',
    nav: 'American and Canadian dual citizenship',
    card: 'Both countries accept dual citizens. Which passport to show at each border, and the US filings that follow you to Toronto.',
    title: 'American and Canadian dual citizenship: passports and taxes',
    description: 'American and Canadian dual citizenship: both countries allow it, US passport for the US, Canadian passport to fly to Canada, FBAR over $10,000 and US taxes.',
    h1: 'American and Canadian dual citizenship',
    intro: 'Say where you live and type the highest combined balance of your Canadian accounts this year: the tool lists the US filings that apply.',
    resume: (h) => {
      const U = h.P.us;
      return `American and Canadian dual citizenship is allowed by both countries, and no one has to choose. The ${h.src('ca-dual', 'Government of Canada')} states that you can hold several citizenships while keeping Canadian citizenship, and the ${h.src('dos-dual', 'State Department')} states that US law does not require a citizen to choose between US citizenship and another nationality. Becoming Canadian by descent therefore costs nothing on the US side: losing US citizenship takes a voluntary act done with the intention of giving it up (${h.src('usc-1481', '8 U.S.C. 1481')}). Two border rules follow. You enter and leave the United States on your US passport, and you fly into Canada on your Canadian passport. The other lasting duty is American: the United States taxes its citizens on worldwide income wherever they live, and a dual citizen whose Canadian accounts total more than ${h.usd(U.fbar.threshold)} at any point in the year files an FBAR by ${U.fbar.due}.`;
    },
    faqs: (h) => [
      { q: 'Can I drive from Vermont into Quebec with only my US passport once I am Canadian?', a: 'The Government of Canada rule on dual citizens is written for air travel: a Canadian who also holds another citizenship needs a valid Canadian passport to return to Canada by air. At a land crossing, you are still a Canadian citizen and border officers can ask for proof, so carrying both documents avoids questions in either direction.' },
      { q: 'Does getting a Canadian certificate trigger any report to the IRS?', a: 'Your US tax position does not depend on how many nationalities you hold: you file as a US citizen before and after the certificate. What creates filings is money: Canadian bank, brokerage or retirement accounts can bring the FBAR and Form 8938 into play, and income earned in Canada must appear on your US return.' },
      { q: 'If I move to Canada, which country taxes my salary?', a: `Canada taxes its residents, and the United States keeps taxing you as a citizen. To avoid paying twice, a US citizen abroad can exclude up to ${h.usd(h.P.us.feie.amount)} of foreign salary for ${h.P.us.feie.year} on Form 2555, or claim a credit for Canadian tax paid. Which method suits you depends on your income and Canadian rates.` },
      { q: 'Is a Canadian passport required for my child born in the US to a Canadian parent?', a: 'Your child is in most cases a Canadian citizen already, but a passport requires proof first. The first step is a citizenship certificate from IRCC; the passport application comes after. Because Canada expects its dual citizens to fly in on a Canadian passport, start the paperwork well ahead of any trip.' },
    ],
    body: (h) => {
      const U = h.P.us, K = h.C('ca');
      const t = (abroad: boolean, filing: string) => U.fatca8938.thresholds.find((x: any) => x.abroad === abroad && x.filing === filing)!;
      return `
<h2>What each country says</h2>
<p>Canada and the United States reach the same answer from different starting points. Canada does not treat a second citizenship as a problem: the ${h.src('ca-dual', 'travel page for dual citizens')} confirms that you keep Canadian citizenship while holding others. The United States does not object either. The ${h.src('dos-dual', 'State Department page on dual nationality')} explains that a US citizen may acquire a foreign nationality by birth, descent or naturalization without losing US citizenship, and that US law does not ask for a choice. A Canadian who naturalizes in the United States keeps Canadian citizenship, and an American who proves Canadian citizenship by descent keeps US citizenship.</p>
<h2>Passports at the border</h2>
${h.table(['Trip', 'Passport to show', 'Rule'], [
  ['Leaving or entering the United States', 'US passport', 'State Department rule for US citizens'],
  ['Flying into Canada', 'Canadian passport', 'Government of Canada rule for dual citizens'],
], 'Border rules for a citizen of both countries, as published on October 25, 2026.', ['l', 'l', 'l'])}
<p>The airline rule is the one that catches people. An American who has just discovered Canadian citizenship through a grandparent can run into trouble boarding a flight to Toronto with a US passport alone, because the traveler is Canadian in the eyes of Canada and Canadians fly home on Canadian passports. The fix is to apply early: first a citizenship certificate, at ${h.cur(K.fee.amount, 'CAD')} through the ${h.src('ca-proof-apply', 'IRCC proof of citizenship page')}, then a passport. The ${h.a('canada-apply', 'application guide')} covers the certificate.</p>
<h2>The US filings that come with Canadian accounts</h2>
<p>Holding a Canadian passport does not create a US filing. Holding Canadian money can. The ${h.src('irs-fbar', 'FBAR')}, FinCEN Form 114, is due when the combined value of your foreign accounts goes over ${h.usd(U.fbar.threshold)} at any moment in the year. It is filed with FinCEN, not with your tax return, and is due ${U.fbar.due} with an automatic extension to ${U.fbar.extension}. ${h.src('irs-fatca', 'Form 8938')} is separate and attaches to your return, with higher thresholds:</p>
${h.table(['Where you live', 'Filing status', 'Year end over', 'Any time over'], [
  ['United States', 'Single', h.usd(t(false, 'single').endOfYear), h.usd(t(false, 'single').anyTime)],
  ['United States', 'Married filing jointly', h.usd(t(false, 'joint').endOfYear), h.usd(t(false, 'joint').anyTime)],
  ['Canada', 'Single', h.usd(t(true, 'single').endOfYear), h.usd(t(true, 'single').anyTime)],
  ['Canada', 'Married filing jointly', h.usd(t(true, 'joint').endOfYear), h.usd(t(true, 'joint').anyTime)],
], 'Form 8938 thresholds published by the IRS.', ['l', 'l', 'r', 'r'])}
<h2>Living in Canada as a US citizen</h2>
<p>The ${h.src('irs-abroad', 'IRS')} taxes US citizens on worldwide income wherever they live, so a move to Vancouver does not end US returns. For ${U.feie.year}, the foreign earned income exclusion is ${h.usd(U.feie.amount)} (${h.src('irs-rp-2025-32', 'Rev. Proc. 2025-32')}), claimed on ${h.src('irs-2555', 'Form 2555')}; the other route is a credit for Canadian income tax. The ${h.a('dual-taxes', 'dual citizen tax page')} sets out these rules for every country.</p>
<h2>Becoming Canadian in the first place</h2>
<p>Most Americans in this situation are already Canadian without knowing it: since ${h.date(K.cutoffs.c3)}, people born abroad before that date to a Canadian parent are citizens in most cases, with no generation limit. The ${h.a('canada', 'Canada page')} explains the rule, and the ${h.a('dual', 'dual citizenship guide')} and the ${h.a('countries-dual', 'country table')} put Canada next to the other countries that accept US dual citizens.</p>
<h2>Children and the next generation</h2>
<p>A child born in the United States to a parent who holds both citizenships is a US citizen by birth and, if born before ${h.date(K.cutoffs.c3)}, a Canadian citizen in most cases too. For children born on or after that date, the answer depends on the Canadian parent. A parent born in Canada passes Canadian citizenship to a child born abroad. A parent who was born abroad, as most Americans with Canadian roots were, passes it on only after ${h.num(K.cutoffs.presenceDays)} days in Canada before the birth. The ${h.a('canada', 'Canada page')} has a tool for this test.</p>`;
    },
  },
});
