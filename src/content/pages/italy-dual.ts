import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'italy-dual',
  group: 'italy',
  order: 120,
  country: 'it',
  tool: { kind: 'mini:it-dual' },
  mini: { kind: 'fbar' },
  related: ['italy', 'dual', 'dual-taxes', 'countries-dual', 'italy-in-italy'],
  sources: ['it-law-91-art11', 'it-law-91-art3bis', 'dos-dual', 'usc-1481', 'irs-fbar'],
  en: {
    slug: 'italy-dual-citizenship',
    nav: 'US and Italian dual citizenship',
    card: 'Keeping both passports: what Italy and the United States allow, which passport to show where, taxes and the 2025 twist.',
    title: 'Italy dual citizenship for Americans: both passports, rules',
    description: 'Italy dual citizenship for US citizens: art. 11 of Law 91/1992, the State Department rule on passports, why another citizenship now blocks descent, FBAR duties.',
    h1: 'Dual citizenship with Italy and the United States',
    intro: 'Choose the border you are crossing: the tool tells you which of your two passports to show.',
    resume: (h) => `Italy and the United States both allow dual citizenship, so an American recognized as Italian keeps both passports. On the Italian side, ${h.src('it-law-91-art11', 'article 11 of Law 91/1992')} says a citizen who holds, acquires or reacquires a foreign citizenship keeps the Italian one, unless they renounce it. On the US side, the State Department states that US law does not make a citizen choose, and that acquiring a foreign citizenship by descent does not cost US citizenship unless done with the intention of giving it up. Two practical rules follow: you enter and leave the United States on your US passport, and Italy may ask you to enter and leave Italy as an Italian. The twist since 2025 is that holding US citizenship from birth is precisely what now blocks automatic transmission to people born abroad, unless an exception of article 3-bis applies, which is why a dual citizen's own children may not inherit the Italian passport.`,
    faqs: (h) => [
      { q: 'Will my children born in the US be Italian if I am a dual citizen?', a: `Not automatically under the 2025 rules: they are born with US citizenship, so article 3-bis applies to them too. They qualify if you hold, or held at death, only Italian citizenship (rare for a dual citizen) or if you lived two years in a row in Italy before their birth. A child under 3 can also acquire it by a declaration of both parents (${h.src('it-law-91-art3bis', 'art. 3-bis')}).` },
      { q: 'Do I have to tell the US government that I became Italian?', a: 'No. No US form records a second citizenship, and the passport application does not ask for it. What does follow you is the reporting of foreign accounts and assets: open an Italian bank account and the FBAR and Form 8938 thresholds apply as they would to any US person.' },
      { q: 'Can I lose US citizenship by taking an oath in Italy?', a: `Only if you act voluntarily with the intention of giving up US nationality: that is the test of ${h.src('usc-1481', '8 U.S.C. 1481')}. Recognition by descent involves no oath at all; it confirms a status. People who naturalize in Italy by marriage do swear an oath, and the State Department still presumes they intend to keep US citizenship.` },
    ],
    body: (h) => `
<h2>What each country says</h2>
${h.table(['Question', 'Italy', 'United States'], [
  ['Must you give up the other citizenship?', 'No (art. 11, Law 91/1992)', 'No (State Department)'],
  ['Passport to enter and leave the country', 'Italian, as a rule', 'US, required by law'],
  ['Can you lose it by acquiring the other?', 'No; only by renouncing', 'Only with intent to relinquish'],
  ['Tax filing while living abroad', 'Based on residence', 'Based on citizenship'],
], 'Sources: Normattiva; travel.state.gov; IRS.', ['l', 'l', 'l'])}
<p>The State Department page on ${h.src('dos-dual', 'dual nationality')} adds one caveat worth knowing before a long stay in Italy: dual nationals owe allegiance to both countries, must obey the laws of both, and may get limited help from US consulates while in the country of their other nationality.</p>
<h2>Military service, voting and jury duty</h2>
<p>Italy no longer calls up conscripts in peacetime, so a newly recognized adult is not drafted. Recognized citizens living abroad are entered in the register of Italians abroad (AIRE) through their consulate, which lets them vote by mail in Italian national elections and referendums. US jury duty and voting are unaffected by the Italian passport.</p>
<h2>Money and taxes</h2>
<p>The United States taxes its citizens wherever they live. Holding an Italian passport does not change that, but moving to Italy, opening accounts there or receiving an Italian pension brings reporting duties. The ${h.src('irs-fbar', 'FBAR')} is due when foreign accounts together exceed ${h.usd(h.P.us.fbar.threshold)} at any time of the year; the tool below runs that test and the Form 8938 one. The ${h.a('dual-taxes', 'tax page for dual citizens')} covers the foreign earned income exclusion and the treaty between the two countries.</p>
<h2>Living and working in Europe</h2>
<p>The practical value of the Italian passport is the right to live, work and study anywhere in the European Union without a visa, and to stay in the Schengen area without counting days. Spouses who are not Italian do not get the passport through you automatically, but they can live with you in Italy and later apply by marriage. If you plan to move, the ${h.a('italy-in-italy', 'page on applying from Italy')} explains how a comune handles a recognition file.</p>
<h2>The circle the 2025 law created</h2>
<p>Under article 3-bis, US citizenship at birth is what stops the Italian line, so the dual status that families sought for generations now ends with the recognized person unless they or their children meet an exception. Families planning ahead read the ${h.a('italy', 'main Italy page')} with this in mind, and the ${h.a('countries-dual', 'table of countries')} shows how other countries treat the children of dual citizens.</p>`,
  },
});
