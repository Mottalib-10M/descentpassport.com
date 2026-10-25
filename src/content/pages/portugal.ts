import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'portugal',
  group: 'countries',
  order: 265,
  country: 'pt',
  tool: { kind: 'mini:pt-route' },
  mini: { kind: 'cost', props: { country: 'pt' } },
  related: ['spain', 'greece', 'documents', 'cost', 'dual'],
  sources: ['pt-lei-37-81-consolidada', 'pt-lo-1-2026-dr', 'pt-lo-1-2026-pdf', 'pt-irn-filho', 'pt-irn-neto', 'pt-irn-correio', 'pt-irn-submeter'],
  en: {
    slug: 'portuguese-citizenship-by-descent',
    nav: 'Portuguese citizenship by descent',
    card: 'Children register at any age; grandchildren now face a language, culture and history test since Organic Law 1/2026 took effect in May.',
    title: 'Portuguese citizenship by descent: the 2026 grandchild test',
    description: 'Portuguese citizenship by descent: children of a Portuguese parent register at any age, grandchildren now pass a culture test, great-grandchildren need 5 years.',
    h1: 'Portuguese citizenship by descent after Organic Law 1/2026',
    intro: 'Pick your Portuguese ancestor, say whether they naturalized before the next child was born and whether a grandchild file was already in.',
    resume: (h) => {
      const K = h.C('pt');
      return `Portuguese citizenship by descent still runs two generations deep, but the grandchild route got harder on ${h.date(K.cutoffs.lo2026)}. On that day ${h.src('pt-lo-1-2026-dr', 'Organic Law 1/2026')} amended the 1981 nationality law. A child born in the United States to a Portuguese father or mother is Portuguese of origin once the birth is entered in the Portuguese civil registry, at any age, with effect from birth. A grandchild of a grandparent who was Portuguese of origin and never lost it can declare the wish to be Portuguese, but must now prove knowledge of the Portuguese language and of the country's culture, history and national symbols, know basic rights and duties, sign a solemn declaration and show a clean criminal record. Files pending before that date keep the earlier rules. Great-grandchildren have no declaration route: only ${h.src('pt-lo-1-2026-pdf', 'naturalization after 5 years of legal residence')} in Portugal. No registry fee and no average waiting time appear on the registry's guide pages.`;
    },
    faqs: (h) => [
      { q: 'Does the new Portuguese test apply to children of a Portuguese parent?', a: 'No. The 2026 amendment added the language, culture and history conditions to the grandchild route only. A child born abroad to a Portuguese mother or father still becomes Portuguese of origin by registering the birth or declaring the wish to be Portuguese, with no test, no residence and no age limit.' },
      { q: 'If I become Portuguese as a grandchild, are my own children covered?', a: 'Yes, in a way the law makes simple. Attribution has effect from birth, so a grandchild who becomes Portuguese of origin is then a Portuguese parent. Their children born abroad can register as children of a Portuguese citizen, the route with no test, at any age.' },
      { q: 'I served in the US military. Can that cause a problem?', a: `It can for routes that depend on a declaration. Under ${h.src('pt-lei-37-81-consolidada', 'article 9 of the law')}, the public prosecutor may oppose an acquisition if the applicant performed military service for a foreign state that was not compulsory. Volunteer enlistment in the US armed forces falls in that wording, so expect questions.` },
    ],
    body: (h) => {
      const K = h.C('pt');
      return `
<h2>Three generations, three different rules</h2>
${h.table(['Your Portuguese ancestor', 'Route', 'Conditions'], [
  ['Parent', 'Attribution, art. 1(1)(c)', 'Birth registered or declaration, any age'],
  ['Grandparent', 'Attribution, art. 1(1)(d)', 'Ties, language, culture and history test, clean record'],
  ['Great-grandparent', 'Naturalization, art. 6(8)', '5 years of legal residence in Portugal'],
], `Nationality Law 37/81 as amended by Organic Law 1/2026, in force since ${h.date(K.cutoffs.lo2026)}.`, ['l', 'l', 'l'])}
<p>All three start from the same question: was your ancestor Portuguese of origin, and did they keep it? The registry checks whether an emigrant who took US citizenship lost Portuguese nationality under the law in force at the time. The ${h.a('home', 'family tree checker')} marks those cases as needing that check.</p>
<h2>Children of a Portuguese parent</h2>
<p>Article 1(1)(c) of the ${h.src('pt-lei-37-81-consolidada', 'nationality law')} makes Portuguese of origin anyone born abroad to a Portuguese mother or father, as long as the birth is entered in the Portuguese civil registry or the person declares the wish to be Portuguese. There is no age limit, so a 60-year-old in Ohio whose mother was born in the Azores can still register. Citizenship counts from birth, not from the registration. One limit matters for older families: only parentage established while the person was a minor counts, unless it was established or recognized in a court action. The ${h.src('pt-irn-filho', 'registry guide for children')} lists the declaration and the documents.</p>
<h2>Grandchildren since May 2026</h2>
<p>Before the reform, a grandchild declared the wish to be Portuguese and showed effective ties to the Portuguese community, usually by knowing the language. Since ${h.date(K.cutoffs.lo2026)}, ${h.src('pt-lo-1-2026-pdf', 'Organic Law 1/2026')} adds the conditions of article 6(1)(c) to (h). In plain terms, the grandchild must:</p>
<ul>
<li>prove knowledge of Portuguese and of Portuguese culture, history and national symbols, by a test or a certificate;</li>
<li>know the fundamental rights and duties of citizens and how the Portuguese state is organized;</li>
<li>sign a solemn declaration of adherence to the democratic rule of law;</li>
<li>have no final prison sentence of more than three years for the listed crimes, pose no security threat and not be under UN or EU sanctions.</li>
</ul>
<p>The grandparent must have been Portuguese of origin and never have lost that nationality. Applications already pending on the day the law took effect are decided under the earlier text, according to article 7 of the amending law. The government had 90 days to adapt the nationality regulation, and the ${h.src('pt-irn-neto', 'registry guide for grandchildren')} still describes only knowledge of the language, so check what it says on the day you file.</p>
<h2>Great-grandchildren and others</h2>
<p>A great-grandchild of a Portuguese emigrant has no attribution route. The 2026 law created a shorter path to naturalization for them, ${h.src('pt-lo-1-2026-pdf', '5 years of legal residence')} in Portugal instead of the general period, which the same reform raised to 7 years for EU and Portuguese-speaking nationals and 10 for others. The naturalization route for descendants of Sephardic Jews was repealed at the same time. Minor children of someone who acquires Portuguese nationality can acquire it too, by declaration.</p>
<h2>Documents and how to file</h2>
<p>You need your full birth certificate, the birth certificate of your Portuguese parent, and for a grandchild also the birth certificate of the parent who links you to the grandparent. A Portuguese birth record can be skipped when you give the registry office, year and entry number. Each US record carries an apostille and a certified translation into Portuguese. Grandchildren add criminal record certificates from the countries of birth, nationality and residence since age 16, and proof of the language and culture knowledge. The ${h.a('documents', 'document checklist')} covers US records and apostilles, and the ${h.a('cost', 'cost calculator')} prices them.</p>
<p>From the United States you can file at the Portuguese consulate for your area, or send the file by registered mail to the Central Registry Office in Lisbon with your signature certified, as the ${h.src('pt-irn-correio', 'mail filing page')} explains. Payment is by bank check in euros or by card on the registry's payment platform. Once the file is entered, an email gives you a code to follow it on the ${h.src('pt-irn-submeter', 'registry website')}. Biometric data is collected for the citizen card.</p>
<h2>Fee and waiting time</h2>
<p>The registry fee is ${K.fee.amount === null ? 'not stated on the guide pages read for this site' : h.cur(K.fee.amount, 'EUR')}, and amounts quoted elsewhere could not be matched to a government page, so none is given here. No average processing time is published by the registry either. After registration, the public prosecutor has two years (${h.src('pt-lei-37-81-consolidada', 'nationality law')}) to oppose an acquisition based on a declaration, for instance for lack of effective ties.</p>
<h2>Keeping your US passport</h2>
<p>Portugal does not ask you to give up US citizenship. Portuguese nationality ends only when a person who holds another nationality declares that they no longer want to be Portuguese. The United States allows it too: see ${h.a('dual', 'the US rules on dual citizenship')} and the ${h.a('countries-dual', 'comparison of countries')}. Living in Portugal changes your tax picture, covered on ${h.a('dual-taxes', 'the dual citizen tax page')}, and an EU passport is the usual reason people look for a ${h.a('second-passport', 'second passport')}. If your family also has Spanish roots, the ${h.a('spain', 'Spanish page')} explains what is still open there.</p>`;
    },
  },
});
