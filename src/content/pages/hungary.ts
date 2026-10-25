import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'hungary',
  group: 'countries',
  order: 255,
  country: 'hu',
  tool: { kind: 'mini:hu-route' },
  mini: { kind: 'cost', props: { country: 'hu' } },
  related: ['greece', 'austria', 'germany', 'documents', 'cost'],
  sources: ['hu-act-lv-1993', 'hu-bfkh-simplified', 'hu-ny-simplified-en', 'hu-ny-honositas', 'hu-ny-vizsgalat', 'hu-oif-letter-2014'],
  en: {
    slug: 'hungarian-citizenship-by-descent',
    nav: 'Hungarian citizenship by descent',
    card: 'Any Hungarian ancestor, no residence in Hungary, but a conversation in Hungarian: simplified naturalization and the free verification.',
    title: 'Hungarian citizenship by descent: ancestry and language',
    description: 'Hungarian citizenship by descent: simplified naturalization via any Hungarian ancestor, the language interview, the free verification for children of citizens.',
    h1: 'Hungarian citizenship by descent: the ancestor and the language',
    intro: 'Pick your Hungarian ancestor and say whether you speak Hungarian: the tool tells you which of the two Hungarian procedures applies.',
    resume: (h) => {
      const K = h.C('hu');
      return `Hungarian citizenship by descent works through two different procedures, and the language decides which one an American can use. If one of your parents was a Hungarian citizen when you were born, you may already be Hungarian, and a citizenship verification at a consulate confirms it. That check is ${K.fee.amount === 0 ? 'free' : h.cur(K.fee.amount, 'EUR')} when you do not ask for a certificate, and it involves no language test. Further back, section 4(3) of ${h.src('hu-act-lv-1993', 'Act LV of 1993')} offers simplified naturalization to anyone whose ancestor was a Hungarian citizen, with no generation limit, no residence in Hungary and no exam on the constitution. The condition that stops most applicants is Hungarian itself: the consulate holds a conversation with you at an intermediate level, and without it the file is refused. You become a citizen on the day of the oath. The law gives the minister ${K.time.minMonths} months, extendable by ${K.time.maxMonths - K.time.minMonths}, to pass the file on.`;
    },
    faqs: (h) => [
      { q: 'How good does my Hungarian need to be for the interview?', a: 'No certificate is asked for. The officer who takes your application speaks with you in Hungarian and checks that you can follow and answer at an everyday, intermediate level. Reading a prepared text is not enough. Applicants aged 14 and over are checked, and the law has no exemption for older people, only for adults placed under legal guardianship.' },
      { q: 'My great-grandmother was Hungarian. Do I need records for everyone in between?', a: 'Yes. The chain must be documented link by link, from the Hungarian ancestor down to you, with birth and marriage records for each generation. When the line passes through a woman, her marriage certificate shows how her maiden name became her married name, so the officer can match the records.' },
      { q: 'When exactly do I become Hungarian after a simplified naturalization?', a: 'On the day you take the citizenship oath or pledge, not on the day of the decision. The consulate invites you once the naturalization certificate arrives, and you can take the oath at a Hungarian mission abroad. If you do not take it within one year of the first invitation, the certificate lapses and the naturalization falls away.' },
    ],
    body: (h) => {
      const K = h.C('hu');
      return `
<h2>Two procedures, two questions</h2>
<p>Before filling in any form, sort out whether you might already be Hungarian. Hungarian citizenship passes from parent to child at birth. If your father or mother was a Hungarian citizen on the day you were born, you probably acquired it then, even if nobody ever registered you. In that case the consulate runs a ${h.src('hu-ny-vizsgalat', 'citizenship verification')}, which needs no Hungarian at all. The laws in force when each event happened apply, so an older line is read with the rules of its time. If the chain was broken somewhere, or if your parent was never Hungarian, the route is simplified naturalization.</p>
${h.table(['', 'Citizenship verification', 'Simplified naturalization'], [
  ['Who', 'Child of a parent Hungarian at your birth', 'Descendant of any Hungarian citizen'],
  ['Language', 'None', 'Conversation in Hungarian'],
  ['Fee', K.fee.amount === 0 ? 'Free without a certificate' : h.cur(K.fee.amount, 'EUR'), 'Not published'],
  ['Becomes effective', 'You were Hungarian all along', 'On the day of the oath'],
], 'Act LV of 1993, ss. 3 and 4(3); New York consulate pages.', ['l', 'l', 'l'])}
<h2>Who qualifies for simplified naturalization</h2>
<p>Section 4(3) of the citizenship act covers a person whose ancestor was a Hungarian citizen, or who can make Hungarian origin probable. The law names no generation limit, so a great-grandparent from Debrecen or a great-great-grandfather from a village now in Slovakia can count, as long as the ancestor held Hungarian citizenship. Three conditions remain: a clean criminal record under Hungarian law with no criminal case pending before a Hungarian court, no threat to public or national security, and proof of Hungarian. There is no requirement to live in Hungary and no test on the constitution, which the ${h.src('hu-bfkh-simplified', 'Budapest government office')} lists as the main differences from ordinary naturalization.</p>
<p>The language part is where the procedure gets real. The officer who receives your file talks with you, and the conversation has to go both ways at an intermediate level. People who learned a few phrases from a grandparent rarely pass. Children of 14 and over are checked the same way, and a younger child can be checked if they will turn 14 before the end of the procedure. Minors need the consent of both parents and come in person for biometrics.</p>
<h2>The documents</h2>
<p>You fill in the application form for naturalization under section 4(3), with a handwritten CV if you are an adult, and data sheets to record your foreign birth and marriage in Hungary. Then comes the evidence: your birth certificate and civil records, and the birth, marriage and death records of every ancestor up to the Hungarian one. Church registers, archive extracts, an old Hungarian passport, a military book or a certificate of domicile can fill gaps, especially for families who left before 1945. Each document is an original or certified copy with an apostille and a certified Hungarian translation. The ${h.src('hu-ny-honositas', 'New York consulate')} can certify a translation you made yourself of a document in English, for a consular fee. Gather the whole chain before you book: a single missing generation leaves the officer with no way to connect you to the Hungarian ancestor, and the appointment is spent asking for more papers.</p>
<p>The ${h.a('documents', 'document checklist')} explains how to order US records and their apostilles, and the ${h.a('cost', 'cost calculator')} adds up copies, apostilles and translations for a Hungarian file.</p>
<h2>Filing and timing</h2>
<p>Applications are filed in person, by appointment, at a Hungarian consulate or at a government office in Hungary. The consulate takes your fingerprints and photo, checks your Hungarian on the spot and sends the file to the authority in charge of citizenship. Under ${h.src('hu-act-lv-1993', 'section 17 of the act')}, the minister has ${K.time.minMonths} months to submit the case to the President of the Republic, extendable once by ${K.time.maxMonths - K.time.minMonths} months, and time spent waiting for missing documents does not count. The President signs the naturalization certificate. The ${h.src('hu-ny-simplified-en', 'consulate')} then invites you to the oath, and a Hungarian identity card follows. For a verification, New York speaks of several months. The fee for a naturalization was not found on a Hungarian government page, so it is listed here as not published.</p>
<h2>Dual citizenship</h2>
<p>Hungary does not ask you to renounce US citizenship, and the United States does not require it either. Hungarian authorities remind applicants that some countries withdraw their own nationality when a citizen takes another; that is not the US rule, as the ${h.a('dual', 'US dual citizenship page')} explains. The ${h.a('countries-dual', 'country-by-country table')} compares Hungary with its neighbors. A Hungarian passport gives free movement in the EU, a common reason to look for a ${h.a('second-passport', 'second passport')}, and US tax filing continues wherever you live (${h.a('dual-taxes', 'taxes for dual citizens')}).</p>
<h2>When Hungary is not the answer</h2>
<p>Borders moved after 1920, and many ancestors described as Hungarian were born in places that are now Slovakia, Romania, Serbia, Ukraine or Austria. The citizenship they held, not the town's current country, decides the Hungarian route. If an ancestor was formally deprived of citizenship, automatic descent stops, but simplified naturalization stays open to a descendant who speaks Hungarian. For families with a German or Austrian side, the ${h.a('germany', 'German')} and ${h.a('austria', 'Austrian')} pages describe routes with no language condition.</p>`;
    },
  },
});
