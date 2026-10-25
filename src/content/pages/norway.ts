import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'norway',
  group: 'countries',
  order: 295,
  country: 'no',
  tool: { kind: 'mini:no-22' },
  mini: { kind: 'cost', props: { country: 'no' } },
  related: ['sweden', 'home', 'countries-dual', 'documents', 'dual'],
  sources: ['no-statsborgerloven', 'udi-by-birth', 'udi-guide', 'udi-reacquire', 'udi-fees', 'udi-wait', 'udi-dual', 'norway-us-reclaim'],
  en: {
    slug: 'norwegian-citizenship-by-descent',
    nav: 'Norwegian citizenship by descent',
    card: 'Parent only, the loss at 22 for Norwegians born abroad, and the NOK 3,200 notification that lets former citizens back in since 2020.',
    title: 'Norwegian citizenship by descent: parent rule and age 22',
    description: 'Norwegian citizenship by descent for Americans: only a parent passes it on, the loss at 22 and how to keep it, and the 2020 route back for former citizens.',
    h1: 'Norwegian citizenship by descent and the age-22 rule',
    intro: 'Give your year of birth, which parent is Norwegian and your time in Norway: the tool says whether you are Norwegian and what to do before 22.',
    resume: (h) => {
      const K = h.C('no');
      return `Norwegian citizenship by descent reaches one generation only: you are Norwegian if a parent was Norwegian on the day you were born, and there is no route through a grandparent who emigrated. Since September 1, ${K.cutoffs.act2006} either parent passes it on, married or not; before that date it came through the mother, or through a father married to the mother. Two rules then decide whether an American keeps it. Under ${h.src('no-statsborgerloven', 'section 24 of the Nationality Act')}, a Norwegian born abroad who never lived in Norway for two years loses citizenship on the ${K.cutoffs.lossAge}nd birthday unless they apply in time to keep it, for free; six months in Norway in total before 22 count as enough ties. And since January 1, ${K.cutoffs.dual2020}, Norway allows dual citizenship, so former Norwegians who lost it by taking US citizenship can get it back by notification for ${h.cur(K.fee.amount, 'NOK')}, with UDI answering in ${K.time.minMonths} months.`;
    },
    faqs: (h) => [
      { q: 'My grandfather was born in Norway. Can I claim Norwegian citizenship through him?', a: 'Only if your parent was Norwegian on the day you were born. Norway has no ancestry route for grandchildren: the Nationality Act looks at the parent alone. If your parent lost Norwegian citizenship by naturalizing in the US before you were born, the line stops there, even if that parent later takes it back by notification.' },
      { q: 'I turn 22 next year and have never lived in Norway. What should I do now?', a: `File the application to keep Norwegian citizenship before your 22nd birthday. It costs ${h.cur(h.C('no').feeKeep.amount, 'NOK')} and UDI states ${h.C('no').timeKeep.months} months for an answer. If you spent six months or more in Norway in total before 22, even in several visits, that counts as ties. Late applications are accepted only when you were not seriously at fault.` },
      { q: 'Does the Norwegian notification for former citizens have a closing date?', a: 'No closing date appears in section 22 a of the Act, which has applied since January 1, 2020. The route is for people who lost Norwegian citizenship by taking another one, and it requires six months in Norway before 22 for those Norwegian by birth. It does not cover people who lost citizenship at 22 for lack of ties.' },
      { q: 'Do my children become Norwegian when I take my citizenship back?', a: 'Adult children do not follow: they were born when you were not Norwegian, so the parent rule does not reach them, and they would need their own route, usually residence in Norway. For minors, the UDI fee list includes a free notification of Norwegian citizenship for children under 18; UDI decides whether a given child qualifies.' },
    ],
    body: (h) => {
      const K = h.C('no');
      return `
<h2>Were you Norwegian at birth?</h2>
${h.table(['Born', 'Norwegian mother', 'Norwegian father'], [
  [`On or after September 1, ${K.cutoffs.act2006}`, 'Yes', 'Yes, married or not'],
  [`July 1, ${K.cutoffs.mother1979} to August 31, ${K.cutoffs.act2006}`, 'Yes', 'Yes if married to the mother'],
  [`July 1961 to June ${K.cutoffs.mother1979}`, 'Only if the mother filed a notification before you turned 18', 'Yes if married to the mother'],
  ['1951 to June 1961', 'No, if the father was foreign', 'Yes if married to the mother'],
], 'UDI self-check "Are you a Norwegian citizen?" and Nationality Act s. 4. A parent counts only if Norwegian on the day of your birth.', ['l', 'l', 'l'])}
<p>The ${h.src('udi-guide', 'UDI self-check')} walks through these dates. The common thread is that only the parent's citizenship on the day of your birth matters. A Norwegian-born parent who became a US citizen before ${K.cutoffs.dual2020} lost Norwegian citizenship on that day; a child born afterwards was not Norwegian at birth, even if the parent later took it back. The cases of mothers married to foreign fathers before ${K.cutoffs.mother1979} depend on a notification that UDI must check in its own records, so the tool sends those users to an official assessment rather than to a yes.</p>
<h2>The 22nd birthday</h2>
<p>Being Norwegian at birth is only half of the answer for an American. Section 24 of the Act provides that a Norwegian who also holds another citizenship and has never lived in Norway for two years in total, or seven years across the Nordic countries, loses Norwegian citizenship automatically on the ${K.cutoffs.lossAge}nd birthday. Living there means stays of at least six months at a time, but ${h.src('udi-by-birth', 'UDI')} treats six months in Norway in total before 22, including several shorter visits, as enough ties to keep it on application.</p>
<p>The answer is a free application to keep citizenship, filed with UDI before the 22nd birthday. UDI states a waiting time of ${K.timeKeep.months} months for these applications. A late application is accepted only if the person was not seriously at fault. The loss also spreads down: when a parent loses Norwegian citizenship this way, their children lose it too, unless the other parent is still Norwegian. Nobody loses it if that would leave them stateless, which rarely matters for US citizens.</p>
<p>For a family in the United States, the practical step is to put the date in the calendar early. Gather the passport, the Norwegian parent's records and proof of any time spent in Norway, such as school records, work contracts or stamped passports, well before the birthday. A teenager who spends a summer or a semester in Norway can reach the six months of total stay that UDI accepts as ties, which turns a doubtful case into a simple one.</p>
<!--tool:mini:no-22-->
<h2>Former Norwegians: the notification since 2020</h2>
<p>Before January 1, ${K.cutoffs.dual2020}, a Norwegian who took US citizenship by application lost Norwegian citizenship. When dual citizenship became legal, chapter 4 A of the Act added ${h.src('udi-reacquire', 'a notification route')} for those former citizens. The conditions are short: your identity is checked, normally with a passport; if you were Norwegian by birth, you spent at least six months in Norway in total before 22; you have no disqualifying criminal record; and your loss of citizenship is first entered in the National Population Register. No residence in Norway is needed. People who lost citizenship at 22 for lack of ties cannot use this route.</p>
<p>The ${h.src('norway-us-reclaim', 'guide published by the Norwegian missions in the US')} sets out the order of the steps. First, send your naturalization certificate and a copy of your US passport to the Norwegian Tax Administration so that your US citizenship is registered. Then fill in the online notification and pay the fee, order a Norwegian police certificate for the purpose of the notification, and hand in the originals at the Embassy in Washington or a consulate general. The mission cannot make copies, so bring same-size copies of every document.</p>
<h2>Documents, fees and waiting times</h2>
<p>The notification asks for a valid passport, the naturalization certificate, the police certificate and the items on the UDI checklist for your case. If you are not in the population register, proof of former citizenship such as an expired Norwegian passport or a birth or baptism record helps you order the police certificate. ${K.docs.apostille === null ? 'Apostille and translation requirements are set per document in the UDI checklist rather than in a general rule, so read the checklist that the online form generates.' : ''} The ${h.a('documents', 'document checklist')} covers US records in general.</p>
<p>According to the ${h.src('udi-fees', 'UDI fee list')}, the notification for an adult former citizen costs ${h.cur(K.fee.amount, 'NOK')}, an application to keep citizenship before 22 costs ${h.cur(K.feeKeep.amount, 'NOK')} and a notification for a child under 18 is free. A standard application for citizenship, which requires residence in Norway, costs ${h.cur(K.feeStandard.amount, 'NOK')}. The ${h.src('udi-wait', 'UDI waiting time page')}, updated September 24, 2026, shows ${K.time.minMonths} months for former citizens' notifications from the day the documents are handed in. The ${h.a('cost', 'cost calculator')} adds the US records you need.</p>
<h2>Dual citizenship with the United States</h2>
<p>${h.src('udi-dual', 'Since January 1, ' + K.cutoffs.dual2020)}, Norway allows its citizens to hold one or more other citizenships. A Norwegian who naturalizes in the US today keeps Norwegian citizenship, and an American who becomes Norwegian is not asked to renounce US citizenship. On the US side, a second citizenship does not threaten your US one unless you intend to give it up, as the ${h.a('dual', 'dual citizenship page')} explains. Sweden follows a similar parent-only rule with its own age-22 test, described on the ${h.a('sweden', 'Swedish citizenship page')}, and the ${h.a('countries-dual', 'country table')} compares the others. The ${h.a('home', 'family tree checker')} tests every country in your family at once.</p>`;
    },
  },
});
