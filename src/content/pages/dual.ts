import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'dual',
  group: 'dual',
  order: 400,
  tool: { kind: 'mini:us-loss' },
  mini: { kind: 'dualtable' },
  related: ['countries-dual', 'dual-taxes', 'second-passport', 'us-canada', 'italy-dual'],
  sources: ['dos-dual', 'dos-relinquish', 'usc-1481', 'irs-abroad', 'irs-fbar'],
  en: {
    slug: 'dual-citizenship-for-americans',
    nav: 'Dual citizenship for Americans',
    card: 'What US law says about a second citizenship, the passport rule, loss of nationality, taxes and which countries make you choose.',
    title: 'Dual citizenship for Americans: what US law allows in 2026',
    description: 'Dual citizenship for US citizens: no choice required by US law, the US passport rule, when nationality can be lost under 8 U.S.C. 1481, taxes, the other side.',
    h1: 'Dual citizenship for American citizens',
    intro: 'Say how you would get the other citizenship and whether you mean to give up the US one: the tool applies the test of US law.',
    resume: (h) => `Dual citizenship means being a citizen of two countries at once, each treating you as its own. For Americans the US side is settled: the ${h.src('dos-dual', 'State Department')} states that US law does not require a citizen to choose between US citizenship and another nationality, and that a US citizen may acquire a foreign citizenship by birth, descent or naturalization without asking any US authority. Losing US citizenship requires a potentially expatriating act, such as naturalizing abroad as an adult, performed voluntarily and with the intention of giving up US nationality (${h.src('usc-1481', '8 U.S.C. 1481')}); it is never automatic. Two duties come with it: you must enter and leave the United States on a US passport, and the United States keeps taxing you on worldwide income wherever you live. Whether you keep the other citizenship depends on the other country: Italy, Ireland, Canada or Poland accept dual citizens, while Austria, Slovakia or Spain's option route set conditions.`,
    faqs: (h) => [
      { q: 'Does the US recognize dual citizenship?', a: 'US law neither encourages nor forbids it. It accepts that you hold another nationality, treats you as a US citizen in all dealings with the United States, and expects you to obey US law. In practice, recognition means nothing is asked of you: no declaration, no form, no permission before or after acquiring the other citizenship.' },
      { q: 'Can my children hold three citizenships?', a: `US law sets no limit on the number of nationalities. A child born in the US to an Irish parent and an Italian-recognized parent can hold all three if each country's law allows it. The ${h.src('dos-dual', 'State Department')} notes that US parents may apply for a foreign citizenship on behalf of minor children without any US permission.` },
      { q: 'Will a second passport cause trouble at US border control?', a: 'Not if you use the US one. US nationals, including dual nationals, must enter and leave the United States on a US passport. Showing the foreign passport at a US border is the mistake to avoid; using it elsewhere, for instance to enter the European Union, is consistent with US law.' },
      { q: 'Is there a cost to giving up US citizenship later?', a: `Renouncing is done in person before a US consular officer abroad, under oath, and is irrevocable; the State Department explains the steps on its ${h.src('dos-relinquish', 'relinquishment page')}. Tax consequences follow from the IRS rules on expatriation, which can include an exit tax for people with large assets or income.` },
    ],
    body: (h) => `
<h2>The four rules US law sets</h2>
${h.table(['Rule', 'What it means for you'], [
  ['No choice required', 'You can acquire another citizenship and keep yours'],
  ['US passport at US borders', 'Enter and leave the United States as an American'],
  ['Loss only with intent', 'A voluntary act plus the intention to give up US nationality'],
  ['Citizenship-based taxation', 'Worldwide income stays reportable to the IRS'],
], 'Sources: travel.state.gov; 8 U.S.C. 1481; IRS.', ['l', 'l'])}
<h2>What can, and cannot, cost US citizenship</h2>
<p>The law lists seven potentially expatriating acts: naturalizing in a foreign state after 18, swearing allegiance to a foreign state, serving in a foreign army at war with the United States or as an officer, holding certain foreign government posts, a formal renunciation before a US consul, a renunciation in wartime on US soil, and treason. None of them ends citizenship by itself. The State Department presumes that a person who naturalizes abroad or swears a routine oath intends to keep US citizenship. Loss happens when the person asks for it and the Department approves a Certificate of Loss of Nationality.</p>
<p>Recognition by descent is not even on the list. An Italian or Irish consulate that records you as a citizen confirms a status you are deemed to have from birth; there is no application for naturalization and, in most cases, no oath.</p>
<h2>Allegiance to two countries</h2>
<p>Dual nationals owe allegiance to both countries and must obey both sets of laws. In the country of your other nationality, US consular help may be limited, because that country treats you as its own citizen. Military service is the classic example: a country with conscription may call up a dual national who settles there, whatever the US passport says. Before a long stay, read the country's rules; the ${h.a('countries-dual', 'table of countries')} links each one.</p>
<h2>Money: the part that follows you</h2>
<p>The United States taxes citizens on worldwide income wherever they live (${h.src('irs-abroad', 'IRS')}). A second passport does not change that, but living abroad and holding foreign accounts brings reporting duties: the FBAR when accounts exceed ${h.usd(h.P.us.fbar.threshold)} at any time of the year, Form 8938 above higher thresholds, and the foreign earned income exclusion of ${h.usd(h.P.us.feie.amount)} for 2026 for those who work abroad. The ${h.a('dual-taxes', 'tax page for dual citizens')} runs each test.</p>
<h2>Where the other country decides</h2>
<p>Whether you keep both depends on the other side. Most countries in the ${h.a('home', 'family tree checker')} accept dual citizens, but not all on the same terms: Austria's declaration for descendants of people persecuted by the Nazi regime requires you to take any other citizenship before filing, Slovakia withdraws its citizenship from people who later naturalize elsewhere, and Spain's option route asks for a declaration renouncing US nationality, a formality under Spanish law that does not, by itself, end US citizenship. The table above filters them. For pairs that matter most to American families, see ${h.a('us-canada', 'US and Canadian dual citizenship')} and ${h.a('italy-dual', 'US and Italian dual citizenship')}.</p>`,
  },
});
