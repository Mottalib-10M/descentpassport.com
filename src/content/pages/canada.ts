import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'canada',
  group: 'countries',
  order: 200,
  country: 'ca',
  tool: { kind: 'mini:ca-c3' },
  mini: { kind: 'cost', props: { country: 'ca' } },
  related: ['canada-apply', 'canada-great', 'us-canada', 'documents', 'cost'],
  sources: ['ca-rules-2025', 'ca-news-c3-in-force', 'ca-news-c3-assent', 'ca-citizenship-act', 'ca-act-changes', 'ca-proof-apply', 'ca-fees', 'ca-ptime-json', 'ca-dual'],
  en: {
    slug: 'canadian-citizenship-by-descent',
    nav: 'Canadian citizenship by descent',
    card: 'Bill C-3 ended the first-generation limit for anyone born abroad before December 15, 2025. After that date, the 1,095-day test.',
    title: 'Canadian citizenship by descent after Bill C-3: who is in',
    description: 'Canadian citizenship by descent since Bill C-3: no generation limit for births abroad before December 15, 2025, the 1,095-day parent test after, CA$75 proof.',
    h1: 'Canadian citizenship by descent under Bill C-3',
    intro: 'Type the year of birth of the person born outside Canada, where the Canadian parent was born and the days that parent spent in Canada.',
    resume: (h) => {
      const K = h.C('ca');
      return `Canadian citizenship by descent is now decided by Bill C-3, An Act to amend the Citizenship Act (2025), which received royal assent on November 20, 2025 and took effect on ${h.date(K.cutoffs.c3)} (${h.src('ca-news-c3-in-force', 'IRCC announcement')}). For most Americans with Canadian roots the result is simple. If you were born outside Canada before that date and one of your parents was a Canadian citizen, you are in most cases already Canadian, whatever the number of generations born abroad before you, and even if that parent only became Canadian through the same reform. Nothing has to be granted: you ask Immigration, Refugees and Citizenship Canada for a citizenship certificate, the document that proves it, for ${h.cur(K.fee.amount, 'CAD')}. For a child born or adopted abroad on or after that date, a parent who was also born abroad passes citizenship on only after spending ${h.num(K.cutoffs.presenceDays)} days in Canada, added together, before the birth or adoption. Canada lets you keep US citizenship.`;
    },
    faqs: (h) => [
      { q: 'Do I become Canadian on the day IRCC issues my certificate?', a: 'No. For a person born abroad before December 15, 2025 to a Canadian parent, citizenship comes from the law itself, in most cases from birth or from the date the reform took effect. The certificate only records a status you already hold. That matters for your own children, whose rights depend on your status at their birth, not on the date of your paperwork.' },
      { q: 'Does the 1,095-day test apply to my children born before the reform?', a: `No. The ${h.num(h.C('ca').cutoffs.presenceDays)}-day condition only concerns children born or adopted outside Canada on or after December 15, 2025. A child born abroad in 2010 or 2020 to a Canadian parent falls under the rule for earlier births, with no presence test and no generation cap. Each child still needs a certificate of their own to prove it.` },
      { q: 'Can I turn down Canadian citizenship I never asked for?', a: 'Yes. IRCC accepts that some people became citizens automatically without wanting it, and they can apply to renounce. Renunciation is a formal application with its own form and fee, decided by IRCC. Doing nothing has no effect on your US citizenship, since US law does not ask you to choose between the two.' },
      { q: 'What did my ancestor need to be for the line to count?', a: `A Canadian citizen when the next person in the line was born. Canadian citizenship as such began in ${h.C('ca').cutoffs.citizenship1947}, so for older generations IRCC looks at whether the ancestor became a citizen then or would have, and the reform's restoration clauses cover most people who lost it before. Renunciation or revocation of citizenship can still break the line.` },
    ],
    body: (h) => {
      const K = h.C('ca');
      return `
<h2>Two rules, split by one date</h2>
${h.table(['Born or adopted outside Canada', 'Canadian parent', 'Result'], [
  ['Before December 15, 2025', 'Any Canadian citizen, born in Canada or abroad', 'Citizen in most cases, no generation limit'],
  ['On or after December 15, 2025', 'Born or naturalized in Canada', 'Citizen at birth'],
  ['On or after December 15, 2025', 'Born abroad, ' + h.num(K.cutoffs.presenceDays) + ' days in Canada before the birth', 'Citizen at birth'],
  ['On or after December 15, 2025', 'Born abroad, fewer days', 'Not a citizen by descent'],
], 'Citizenship Act, s. 3, as amended by S.C. 2025, c. 5, in force since December 15, 2025.', ['l', 'l', 'l'])}
<p>Before the reform, Canada applied a first-generation limit: a child born abroad to a Canadian parent who was also born abroad was not Canadian. Parliament passed ${h.src('ca-news-c3-assent', 'Bill C-3')} to replace it, and the new text of the ${h.src('ca-citizenship-act', 'Citizenship Act')} took effect on ${h.date(K.cutoffs.c3)}. The ${h.src('ca-rules-2025', 'IRCC page on the new rules')} sums it up: born outside Canada before that date to a Canadian parent, you are in most cases automatically a citizen, including when your parent only became Canadian through the changes.</p>
<h2>Who qualifies if you were born before December 15, 2025</h2>
<p>The test is a chain, read one link at a time. Your parent must have been a Canadian citizen when you were born. If that parent was born abroad, their own parent must have been Canadian at their birth, and so on up to someone born or naturalized in Canada. The reform removed the cap on the number of links, so a great-grandparent born in Nova Scotia can be enough, as the ${h.a('canada-great', 'great-grandparent page')} explains. It also restored citizenship to people the old rules left out, the group often called Lost Canadians: people born abroad before 1977 under the old registration and wedlock rules, people who lost citizenship under the old rule on keeping it, and others caught by earlier provisions. The exceptions are narrow. Someone who renounced citizenship after a grant, or whose citizenship was revoked, is not brought back by these clauses.</p>
<p>Two practical points follow. First, being born in wedlock or not no longer changes the result for a Canadian father or mother. Second, an ancestor who took US citizenship after the next child was born did not break the line for that child. An ancestor who left Canada before ${K.cutoffs.citizenship1947}, when Canadian citizenship was created, is the case that needs the most care: IRCC checks whether they became a citizen at that point.</p>
<h2>Children born on or after December 15, 2025</h2>
<p>For a new child born outside Canada, the reform replaced the old cap with a connection test. If the Canadian parent was born in Canada or naturalized there, the child is Canadian at birth. If the parent was born abroad, the child is Canadian only if that parent spent at least ${h.num(K.cutoffs.presenceDays)} days physically in Canada before the birth, according to the ${h.src('ca-news-c3-in-force', 'IRCC notice of December 15, 2025')}. The days are cumulative: summers with grandparents, a semester at McGill and a two-year job all add up, at any age. Days after the birth do not count for that child. The same test applies to a child adopted abroad, counted before the adoption. Children of parents serving abroad with the Canadian Armed Forces or a Canadian public service are exempt.</p>
<p>The tool at the top of this page applies these two rules, using only the year of birth, so a birth in 2025 itself is shown as a case to check by date. It treats the parent born in Canada as one generation and the parent born abroad as two, and it reads the presence test from the number of days you type.</p>
<h2>Documents IRCC asks for</h2>
<p>The application is for a citizenship certificate, also called proof of citizenship. The ${h.src('ca-proof-apply', 'IRCC application page')} asks for proof of the parent-to-child link in every generation you rely on, and proof that each Canadian in the chain was a citizen: a provincial birth certificate, a citizenship certificate, or a naturalization record. Birth certificates must come from the issuing authority; hospital or baptism records can help when a civil record does not exist. US vital records in English need no translation, and the page does not ask for apostilles. Records in another language need a translation and a sworn statement from the translator, and a relative cannot translate. The ${h.a('documents', 'document checklist')} covers ordering US records, and the ${h.a('canada-apply', 'application page')} walks through the forms.</p>
<h2>Fee and waiting time</h2>
<p>The ${h.src('ca-fees', 'IRCC fee list')} sets the certificate at ${h.cur(K.fee.amount, 'CAD')} per person, adults and children alike. A search of citizenship records costs ${h.cur(K.feeSearch.amount, 'CAD')}, and resuming citizenship after a renunciation costs ${h.cur(K.feeResume.amount, 'CAD')} for an adult. Processing time for certificates is ${K.time.text}, in the ${h.src('ca-ptime-json', 'data IRCC publishes')} behind its processing times tool. The ${h.a('cost', 'cost calculator')} adds the US records and copies to the IRCC fee.</p>
<!--tool:mini:ca-apply-->
<h2>Keeping your US passport</h2>
<p>Canada allows multiple citizenship, and the ${h.src('ca-dual', 'Government of Canada travel page')} adds one condition that surprises many Americans: a Canadian who also holds another citizenship needs a valid Canadian passport to fly back to Canada. On the US side, the State Department does not ask you to choose. The ${h.a('us-canada', 'American and Canadian dual citizenship page')} explains which passport to use at each border and the US filings that follow you, and the ${h.a('dual', 'dual citizenship guide')} covers the US position in general. If Canada is one option among several in your family, the ${h.a('countries-dual', 'country table')} compares the rules.</p>`;
    },
  },
});
