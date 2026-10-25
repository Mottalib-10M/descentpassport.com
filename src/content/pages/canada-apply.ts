import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'canada-apply',
  group: 'countries',
  order: 201,
  country: 'ca',
  tool: { kind: 'mini:ca-apply' },
  related: ['canada', 'canada-great', 'documents', 'cost', 'us-canada'],
  sources: ['ca-proof-apply', 'ca-fees', 'ca-ptime-json', 'ca-rules-2025', 'ca-act-changes'],
  en: {
    slug: 'canadian-citizenship-by-descent/apply',
    nav: 'Apply for Canadian citizenship by descent',
    card: 'The proof of citizenship application: online or paper, the records for each generation, translations and the CA$75 fee per person.',
    title: 'Apply for Canadian citizenship by descent: proof and fees',
    description: 'How to apply for Canadian citizenship by descent: the proof of citizenship certificate, online or on paper, records for each generation, translations, CA$75.',
    h1: 'How to apply for Canadian citizenship by descent',
    intro: 'Enter how many people in your family are applying and which relative was born in Canada: the tool totals the IRCC fees and the records to gather.',
    resume: (h) => {
      const K = h.C('ca');
      return `An application for Canadian citizenship by descent is, in almost every case, an application for a citizenship certificate. Since Bill C-3 took effect on ${h.date(K.cutoffs.c3)}, a person born abroad before that date to a Canadian parent is in most cases a citizen by law, so there is nothing to grant: Immigration, Refugees and Citizenship Canada checks the family line and, if it holds, issues the certificate that proves it. The ${h.src('ca-proof-apply', 'IRCC application page')} lets you apply online or on paper, but not both for the same person. You send proof of each parent-to-child link up to the relative born or naturalized in Canada, and proof that each Canadian in the line was a citizen. US records in English need no translation. The fee is ${h.cur(K.fee.amount, 'CAD')} per person, child or adult, and each family member files a separate application. IRCC does not publish a certificate processing time in the data read on October 25, 2026.`;
    },
    faqs: (h) => [
      { q: 'Should my parent apply for their certificate before I apply for mine?', a: 'It helps but it is not required. Your file must prove that your parent was Canadian when you were born, and a certificate already issued to that parent is the cleanest proof. Without it, you send the records that show their own link to Canada, and IRCC examines both generations in your application. Families often file together so the same records serve everyone.' },
      { q: 'Can I file online for myself and on paper for my children?', a: 'Each person is one application, and the rule against using both channels applies to the same person, not to the family. Read the IRCC instructions for applications made on behalf of a minor before choosing the channel. Keep the same set of supporting records for everyone so that the files tell one consistent story.' },
      { q: 'My grandmother\'s Quebec record is a baptism entry. Will IRCC accept it?', a: 'For older generations, a civil birth certificate may not exist, and IRCC says hospital or baptism records can be accepted when no birth certificate is available. Send the best record the archive holds, the full entry with the parents named, and a translation with a sworn statement if it is written in a language other than English or French.' },
    ],
    body: (h) => {
      const K = h.C('ca');
      return `
<h2>Which application you need</h2>
<p>Most Americans who read about Bill C-3 expect to apply for citizenship. In fact, the reform made people born abroad before ${h.date(K.cutoffs.c3)} citizens by the effect of the law, as the ${h.src('ca-rules-2025', 'IRCC page on the new rules')} explains. What you request is a citizenship certificate, the document Canada uses as proof of citizenship. It is the paper that lets you apply for a Canadian passport later. Other procedures exist for narrower cases. A child born abroad on or after the reform date whose parent born abroad has fewer than ${h.num(K.cutoffs.presenceDays)} days in Canada is not covered by the certificate route at all. A person who renounced Canadian citizenship and wants it back applies to resume it, for ${h.cur(K.feeResume.amount, 'CAD')} as an adult. If you are not sure whether an ancestor was ever recorded as a citizen, a search of citizenship records costs ${h.cur(K.feeSearch.amount, 'CAD')}.</p>
<h2>Online or on paper</h2>
<p>The ${h.src('ca-proof-apply', 'proof of citizenship page')} offers two channels, and an applicant chooses one. Online, you answer the questions and upload your records as clear color copies. On paper, you download the application package, which holds the instruction guide, the forms and a checklist, and mail the file with clear color copies of your records. Fill in the forms in the name shown on your birth record, and explain any change of name with a marriage record or court order.</p>
<h2>The records that prove the line</h2>
<p>IRCC wants to see a chain without gaps. For each generation, a birth certificate that names the parents shows the link. For the person born in Canada, a provincial or territorial birth certificate shows the starting point; for someone naturalized in Canada, a citizenship certificate or naturalization record does the same. Records must come from the authority that issued them: a long-form certified copy from a US state vital records office is the safe choice, and the ${h.a('documents', 'document checklist')} explains how to order one. Records in English or French are sent as they are. Anything in another language needs a full translation and a sworn statement from the translator, and a family member cannot do it, even a fluent one. The page read on October 25, 2026 does not ask for apostilles on US documents.</p>
<p>A short list for a typical American file through a grandparent born in Manitoba:</p>
${h.table(['Person', 'Record', 'Why'], [
  ['Grandparent', 'Manitoba birth certificate', 'Shows birth in Canada'],
  ['Parent', 'US long-form birth certificate', 'Names the Canadian grandparent'],
  ['You', 'US long-form birth certificate', 'Names your parent'],
  ['Anyone whose name changed', 'Marriage record or court order', 'Links the names'],
], 'Typical evidence for a line through a grandparent; IRCC can ask for more.', ['l', 'l', 'l'])}
<h2>Fees and what they cover</h2>
<p>The ${h.src('ca-fees', 'IRCC fee list')} sets the certificate at ${h.cur(K.fee.amount, 'CAD')}, and there is no family rate: a parent and three children pay four fees. The fee does not include the cost of US records, courier or a later passport. The tool at the top of the page gives the IRCC total for your family, and the ${h.a('cost', 'cost calculator')} adds the US records.</p>
<h2>How long it takes</h2>
<p>IRCC estimates processing times through an online tool. In the ${h.src('ca-ptime-json', 'data behind that tool')}, certificates are ${K.time.text}. Plan for months rather than weeks, and do not book travel that depends on a Canadian passport before the certificate arrives. If your family line goes back three generations or more, the ${h.a('canada-great', 'great-grandparent page')} explains what IRCC looks at, and the ${h.a('canada', 'main Canada page')} covers who qualifies.</p>`;
    },
  },
});
