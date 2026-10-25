import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'austria',
  group: 'countries',
  order: 275,
  country: 'at',
  tool: { kind: 'mini:at-58c' },
  mini: { kind: 'cost', props: { country: 'at' } },
  related: ['germany', 'documents', 'cost', 'countries-dual', 'dual'],
  sources: ['at-stbg', 'at-bmeia-58c', 'at-bmeia-58c-decl', 'at-bmeia-58c-faq', 'at-oegv-58c', 'at-bmeia-acquisition', 'at-bmeia-dual', 'at-ma35-2025'],
  en: {
    slug: 'austrian-citizenship-by-descent',
    nav: 'Austrian citizenship by descent',
    card: 'Section 58c for descendants of people persecuted by the Nazi regime: every generation, no deadline, no federal fee, US citizenship kept.',
    title: 'Austrian citizenship by descent: the section 58c route',
    description: 'Austrian citizenship by descent for Americans: section 58c for descendants of Nazi victims, every generation, no fee or deadline, and the dual citizenship trap.',
    h1: 'Austrian citizenship by descent and section 58c',
    intro: 'Say which ancestor was Austrian and whether they left because of Nazi persecution: the tool tells you whether section 58c is open to you.',
    resume: (h) => {
      return `Austrian citizenship by descent works in two very different ways for Americans. The ordinary rule is narrow: you are Austrian only if a parent was Austrian on the day you were born, and Austria withdraws citizenship from people who voluntarily take another one, so an emigrant who became a US citizen usually stopped passing it on. The second route is broad. Under ${h.src('at-stbg', 'section 58c of the Nationality Act')}, any direct descendant of a person persecuted by the Nazi regime can become Austrian by a written declaration, whatever the generation. The ancestor must have left Austria before May 15, 1955 out of fear of persecution, or been unable to return between 1933 and 1945, or been deported or killed. There is no deadline, no language test, no residence condition and no federal fee (${h.src('at-bmeia-58c-faq', 'Foreign Ministry FAQ')}). Citizenship starts on the day the declaration is received. You keep US citizenship, but any other citizenship acquired after that day costs you the Austrian one. No processing time is published.`;
    },
    faqs: (h) => [
      { q: 'My grandmother fled Vienna in 1938 and naturalized in the US in 1944. Can I use section 58c?', a: `Yes, on those facts. Section 58c looks at why the ancestor left, not at what happened to her citizenship afterwards, so her US naturalization does not block you. You must show that she lived in Austria, held Austrian or successor-state citizenship or was stateless, and left because of persecution. The ${h.src('at-bmeia-58c', 'Foreign Ministry page')} lists the accepted cases.` },
      { q: 'I already have a third citizenship in progress. Should I wait before filing?', a: 'Yes, finish it first. Austrian citizenship under section 58c takes effect the day your declaration arrives, and Austria treats any citizenship you acquire after that date as a voluntary acquisition, which ends Austrian citizenship automatically. This applies even when the other application was filed earlier. US citizenship you already hold is not affected.' },
      { q: 'Does Austria have a route for grandchildren without a persecution history?', a: `No general one. Outside section 58c, Austrian citizenship passes only at birth from a parent who is Austrian at that moment (${h.src('at-bmeia-acquisition', 'Foreign Ministry, acquisition')}). A grandparent alone does not help, and an emigrant who naturalized in the United States before your parent was born did not pass anything on.` },
    ],
    body: (h) => {
      const K = h.C('at');
      return `
<h2>Who counts as a persecuted ancestor</h2>
<p>Section 58c names three kinds of ancestors. The ${h.src('at-bmeia-58c', 'Foreign Ministry')} sets them out in plain terms, and the federal portal repeats them on its ${h.src('at-oegv-58c', 'page for descendants')}.</p>
${h.table(['The ancestor', 'Condition', 'Period'], [
  ['Left Austria', 'Austrian citizen, national of a successor state of Austria-Hungary, or stateless with main residence in Austria; left out of fear of persecution or because of it', 'Before May 15, 1955'],
  ['Could not return', 'Austrian citizen living abroad for whom returning would have meant persecution', 'January 30, 1933 to May 9, 1945'],
  ['Deported or killed', 'Austrian citizen, successor-state national or stateless resident', 'Before May 9, 1945'],
], 'Section 58c of the Austrian Nationality Act, as presented by the Foreign Ministry in 2026.', ['l', 'l', 'l'])}
<p>Persecution covers the Nazi regime and its supporters, and also persecution for defending the democratic Republic of Austria. A woman who lost Austrian citizenship by marrying a foreigner shortly before she fled is included. The ancestor does not have to have been Jewish, and does not have to have held Austrian citizenship in the narrow sense: a resident of Vienna who held Czechoslovak, Hungarian or Polish citizenship, or none, can qualify.</p>

<h2>Every generation, mothers and fathers alike</h2>
<p>All direct descendants qualify: children, grandchildren, great-grandchildren and beyond, through women and men equally. Children adopted as minors count; adults adopted as adults do not. There is no deadline. The first version of the rule, in force since September 1, 2020, covered descendants; an amendment in force since May 1, 2022 widened the list of ancestors and removed the limits that remained.</p>
<p>One group is shut out. If you already held Austrian citizenship and lost it after May 1, 2022 by acquiring another citizenship, you cannot file, unless you did not know you were Austrian at the time. A loss before that date does not bar you.</p>

<h2>How the declaration works</h2>
<p>The process starts online. The ${h.src('at-bmeia-58c-decl', 'Foreign Ministry\'s declaration page')} links to a questionnaire, reached through the website of the Austrian embassy or consulate general for your US address, which produces a personal declaration form and a list of documents. You then submit the signed declaration and the documents to that mission. The mission forwards the file to the Vienna provincial government, department MA 35, which issues a written decision confirming that you became Austrian on the day the declaration was received.</p>
<p>MA 35 is the authority because applicants live abroad and were not born in Austria. Its ${h.src('at-ma35-2025', 'annual report for 2025')} gives the volume (${K.time.text.split('; ')[1]}) but not the wait. No processing time is published, by the ministry or by MA 35.</p>

<h2>Documents, apostilles and translations</h2>
<p>You need a valid passport and a photo, your birth certificate, marriage or name-change records if your surname changed, and a criminal record certificate from your country of residence no older than eight months. For an American, that last item comes from the FBI. Your own US public documents need an apostille from the issuing authority; documents in English need no translation unless the authority asks for one. Then you prove the line: birth and marriage records for each generation, paternity acknowledgments or adoption decrees where relevant. Finally, the ancestor: proof of citizenship or statelessness, of residence in Austria and of persecution. Records about the ancestor need no apostille, and if the ancestor was deported or killed, proof of persecution is generally not needed. The ${h.a('documents', 'US documents guide')} covers apostilles state by state, and the ${h.a('cost', 'cost calculator')} adds up the US records.</p>

<h2>Before you start</h2>
<p>Gather what you know about the ancestor first: where they lived in Austria, which citizenship they held, when and why they left. Family letters, ship manifests and US naturalization files often record the last address in Vienna or another town, and the US naturalization record usually gives the date of arrival. Then check that you have not acquired, and do not plan to acquire, any other citizenship after filing. Only then fill in the questionnaire, since its answers shape the declaration form and the list of documents the mission will expect from you.</p>

<h2>Fee</h2>
<p>Filing a section 58c declaration is exempt from all federal fees by law. Because citizenship matters belong to the provinces, a provincial fee could in principle apply, but the ${h.src('at-bmeia-58c-faq', 'Foreign Ministry FAQ')} states that Vienna charges none for these files. In practice the declaration costs ${K.fee.amount === 0 ? 'nothing' : h.cur(K.fee.amount, 'EUR')}; your costs are the US records, apostilles and mailing.</p>

<h2>Keeping US citizenship, and the trap</h2>
<p>Austria normally forbids dual citizenship acquired by choice, but section 58c is an exception: you do not give up US citizenship to file (${h.src('at-bmeia-dual', 'Foreign Ministry, dual citizenship')}). The trap is timing. Austrian citizenship counts from the day of filing, and any other citizenship acquired after that day, through marriage, residence or another descent claim, ends it automatically. If you are also pursuing, say, the ${h.a('germany', 'German route for persecuted families')}, finish that first. Male citizens aged 17 to 50 living abroad must register with the mission for military purposes, but no service is due unless they move to Austria. The ${h.a('dual', 'US rules on dual nationality')} and the ${h.a('dual-taxes', 'tax page')} cover the American side.</p>

<h2>When there was no persecution</h2>
<p>Without section 58c, Austrian descent is limited to one step: a parent who was Austrian when you were born. An unmarried Austrian father passes citizenship on only if paternity was acknowledged or established within eight weeks of the birth. A child born in the United States to an Austrian parent holds both citizenships from birth and keeps them. A grandparent alone gives no right. The ${h.a('countries-dual', 'country table')} compares Austria with countries that go further back, and the ${h.a('second-passport', 'second passport guide')} looks at what an EU passport changes in practice.</p>`;
    },
  },
});
