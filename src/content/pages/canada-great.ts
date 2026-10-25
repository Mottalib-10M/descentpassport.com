import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'canada-great',
  group: 'countries',
  order: 202,
  country: 'ca',
  tool: { kind: 'mini:ca-great' },
  related: ['canada', 'canada-apply', 'documents', 'second-passport', 'us-canada'],
  sources: ['ca-rules-2025', 'ca-citizenship-act', 'ca-news-c3-in-force', 'ca-act-changes', 'ca-proof-apply', 'ca-fees'],
  en: {
    slug: 'canadian-citizenship-by-descent/great-grandparent',
    nav: 'Canadian citizenship through a great-grandparent',
    card: 'Since December 15, 2025 Canada sets no generation cap for people born abroad before that date: how a great-grandparent line is proven.',
    title: 'Canadian citizenship through a great-grandparent in 2026',
    description: 'Canadian citizenship through a great-grandparent: no generation cap for births abroad before December 15, 2025, the pre-1947 question, records and CA$75 proof.',
    h1: 'Canadian citizenship through a great-grandparent',
    intro: 'Give your year of birth and say whether the great-grandparent left Canada and took another citizenship before 1947.',
    resume: (h) => {
      const K = h.C('ca');
      return `Canadian citizenship through a great-grandparent became possible for many Americans on ${h.date(K.cutoffs.c3)}, when Bill C-3 removed the rule that stopped citizenship after one generation born abroad. If you were born outside Canada before that date, the test is the same as for a parent: every person between the great-grandparent and you must have been a Canadian citizen when the next person was born, and the reform treats as citizens most people the older rules excluded. The question that still needs care is the starting point. Canadian citizenship only exists since ${K.cutoffs.citizenship1947}; a great-grandparent who left for the United States and naturalized there before that year may never have become a Canadian citizen, and the line then depends on what IRCC finds in the records. Proof comes through a citizenship certificate at ${h.cur(K.fee.amount, 'CAD')} per person. A child you have after the reform date also needs your ${h.num(K.cutoffs.presenceDays)} days in Canada.`;
    },
    faqs: (h) => [
      { q: 'My great-grandfather left Ontario in 1920 and became American in 1930. Is the line dead?', a: `Not necessarily, but it is the hardest case. He left before Canadian citizenship was created in ${h.C('ca').cutoffs.citizenship1947}, so IRCC has to decide whether he and his child born in Canada or abroad were ever Canadian citizens. The answer turns on dates and on the transitional rules of the 1947 Act. File for a certificate and let IRCC rule rather than guessing.` },
      { q: 'Do my grandparents and parents have to apply before I do?', a: 'No. Each person can apply in their own name, and your file must show that each link was Canadian at the next birth. In practice a family often files several applications at once, so the records of the older generations are examined in one go and the certificates arrive close together.' },
      { q: 'I was born in 1995. Does my newborn become Canadian through me?', a: `If your child was born outside Canada on or after December 15, 2025, you are a parent born abroad, so your child is Canadian only if you spent ${h.num(h.C('ca').cutoffs.presenceDays)} days in Canada before the birth. Without that time, the great-grandparent line ends with you, whatever the strength of your own claim.` },
    ],
    body: (h) => {
      const K = h.C('ca');
      return `
<h2>What changed for great-grandchildren</h2>
<p>Until the reform, Canada stopped citizenship by descent after the first generation born abroad. A great-grandchild of a Canadian, born in Ohio to a parent and a grandparent who were also born outside Canada, had no claim. ${h.src('ca-act-changes', 'Bill C-3')} took that limit away for everyone born before ${h.date(K.cutoffs.c3)}. The ${h.src('ca-rules-2025', 'IRCC explanation')} is that people born abroad to a Canadian parent before that date are in most cases citizens automatically, and that the rule also covers a parent who only became Canadian through the reform. Applied up the tree, a great-grandparent born in Canada can carry the line down to you.</p>
<h2>How IRCC reads a three-generation line</h2>
<p>Picture four people: a great-grandparent born in Canada, a grandparent born in the US, a parent born in the US and you. The questions come in order. Was the great-grandparent a Canadian citizen when the grandparent was born? Was the grandparent Canadian, under the restored rules, when your parent was born? Was your parent Canadian when you were born? If each answer is yes, you are a citizen and the certificate proves it. The reform's restoration clauses in section 3 of the ${h.src('ca-citizenship-act', 'Citizenship Act')} reach people who lost citizenship or never received it under older rules, but they do not undo a renunciation after a grant or a revocation.</p>
${h.table(['Link', 'What to prove', 'Typical record'], [
  ['Great-grandparent', 'Born or naturalized in Canada, citizen at the next birth', 'Provincial birth certificate, or baptism entry if no civil record'],
  ['Grandparent', 'Child of that great-grandparent', 'Birth certificate naming the parents'],
  ['Parent', 'Child of the grandparent', 'Long-form birth certificate'],
  ['You', 'Child of your parent', 'Long-form birth certificate'],
], 'One line of descent; marriage or name-change records fill any gap in names.', ['l', 'l', 'l'])}
<h2>The year ${K.cutoffs.citizenship1947}</h2>
<p>Canadian citizenship as a legal status began in ${K.cutoffs.citizenship1947}. Before that, people born in Canada were British subjects. For a great-grandparent who stayed connected to Canada, this changes nothing in practice. For one who emigrated early and took US citizenship long before ${K.cutoffs.citizenship1947}, it is the real question: IRCC has to decide whether that person became a Canadian citizen when the status was created, and whether their child did. The tool marks that case as one to check rather than giving a firm answer. If the great-grandparent naturalized in the US after ${K.cutoffs.citizenship1947} and after the grandparent's birth, the line for that grandparent is usually intact.</p>
<h2>Records from older generations</h2>
<p>Old Canadian records are the hard part of these files. Provincial vital statistics offices hold civil birth records, and some early births were never registered. The ${h.src('ca-proof-apply', 'IRCC application page')} accepts hospital or baptism records when a birth certificate does not exist. A French-language parish record from Quebec can be sent as it is, since French is an official language; a record in another language needs a translation with the translator's sworn statement. The ${h.a('documents', 'document checklist')} lists the US records for the younger generations.</p>
<h2>Costs, and what happens next</h2>
<p>Each person who wants proof pays ${h.cur(K.fee.amount, 'CAD')} under the ${h.src('ca-fees', 'IRCC fee list')}. If IRCC first needs to search its own archives for an ancestor's record, that search costs ${h.cur(K.feeSearch.amount, 'CAD')}. Once you hold a certificate, your children born before ${h.date(K.cutoffs.c3)} are covered by the same rule, while children born later depend on the ${h.num(K.cutoffs.presenceDays)}-day test explained on the ${h.a('canada', 'Canada page')}. The ${h.a('canada-apply', 'application guide')} walks through the forms, and the ${h.a('second-passport', 'second passport overview')} compares Canada with the other countries open to Americans.</p>`;
    },
  },
});
