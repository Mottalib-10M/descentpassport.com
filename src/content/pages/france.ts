import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'france',
  group: 'countries',
  order: 270,
  country: 'fr',
  tool: { kind: 'mini:fr-50' },
  mini: { kind: 'cost', props: { country: 'fr' } },
  related: ['documents', 'cost', 'countries-dual', 'dual', 'second-passport'],
  sources: ['fr-cc-18', 'fr-cc-18-1', 'fr-cc-30-3', 'fr-cc-21-14', 'fr-sp-cnf', 'fr-us-nationalite', 'fr-diplo-faq'],
  en: {
    slug: 'french-citizenship-by-descent',
    nav: 'French citizenship by descent',
    card: 'A French parent at your birth, the 50-year rule that blocks most older lines, and the free certificate from the Paris court.',
    title: 'French citizenship by descent: parent rule and 50-year bar',
    description: 'French citizenship by descent for Americans: a parent French at your birth, the 50-year rule of article 30-3, papers that keep a line alive, a free certificate.',
    h1: 'French citizenship by descent and the 50-year rule',
    intro: 'Say which ancestor was French, when the family started being born in the US and whether anyone kept French papers: the tool applies the 50-year rule.',
    resume: (h) => {
      const K = h.C('fr');
      return `French citizenship by descent rests on one sentence of the Civil Code: a child is French if at least one parent is French (${h.src('fr-cc-18', 'article 18')}). Mother or father, married or not, the parent must be French on the day of the birth. In theory that chain has no end. In practice, ${h.src('fr-cc-30-3', 'article 30-3')} closes it for most American families. When the French line has lived abroad for more than ${K.cutoffs.desuetudeYears} years, and neither you nor your French parent ever behaved as French and was treated as French by French authorities, for example by holding a French passport or registering at a consulate, French nationality by descent can no longer be proven. Where the chain is intact, proof is a certificate of French nationality from the Paris judicial court, free of charge, with a legal limit of ${K.time.text}.`;
    },
    faqs: (h) => [
      { q: 'What counts as "French papers" for the 50-year rule?', a: `French law calls it possession d'état: living as a French national and being treated as one by French authorities. Accepted evidence includes a French passport or identity card, even expired, registration with a French consulate, a voter card, French military papers or an earlier certificate of nationality. It has to concern you or your French parent; the ${h.src('fr-sp-cnf', 'service-public guide')} lists the usual proofs.` },
      { q: 'If the 50-year rule blocks me, is there any way back?', a: `One, and it is narrow. ${h.src('fr-cc-21-14', 'Article 21-14')} lets a person barred by article 30-3 reclaim French nationality by declaration if they have manifest cultural, professional, economic or family ties with France, or if they or a parent served in the French or an allied army in wartime. Ties must be real and documented, not just ancestry.` },
      { q: 'Can a French consulate in the US issue the certificate?', a: 'No. For people born and living abroad, only the nationality service of the Paris judicial court issues or refuses a certificate of French nationality. A consulate can register you and can hand over a certificate once the court has issued it, but it does not decide on nationality by descent. You mail the application to Paris.' },
      { q: 'I was born in the US to a French mother. Did I have to choose a nationality at 18?', a: `No choice was required. A child born abroad with only one French parent may give up French nationality in the six months before and the twelve months after turning 18 (${h.src('fr-cc-18-1', 'article 18-1')}). If you did nothing, you stayed French. The right to give it up disappears if the other parent became French while you were a minor.` },
    ],
    body: (h) => {
      const K = h.C('fr');
      return `
<h2>The basic rule: a French parent on the day you were born</h2>
<p>France has no grandparent route and no ancestry visa. Nationality passes from parent to child at birth, and only that way. A grandchild is French only if the parent in between was French when the grandchild was born. So the question for an American family is whether each person in the line was French at the next birth, and whether that can still be proven today.</p>
<p>The parent can be the mother or the father, married or not. Filiation must be legally established while the child is a minor. The place of birth does not matter: a child born in Chicago to a French father is as French as one born in Lyon. The ${h.src('fr-us-nationalite', 'French consular network in the United States')} adds that the French parent must stay French during the child's minority.</p>

<h2>The 50-year rule in detail</h2>
<p>Article 30-3 is the rule that ends most French claims made by Americans. It applies when three facts come together.</p>
${h.table(['Condition', 'What it means', 'Example'], [
  ['The person lives or lived abroad', 'You were born or settled outside France', 'Born in the US'],
  ['The French ancestors in the line have been settled abroad for more than ' + K.cutoffs.desuetudeYears + ' years', 'Counted back from your application', 'Grandfather emigrated in the 1950s'],
  ['Neither you nor your French parent had possession d\'état', 'No passport, ID card, consular registration or similar', 'Parent never held French papers'],
], 'Civil Code, article 30-3, in force since 1993 and unchanged on October 25, 2026.', ['l', 'l', 'l'])}
<p>When all three hold, the court will not accept proof of nationality by descent, even if the documents are perfect. The rule does not say you lost French nationality; it says you can no longer prove it by filiation. The effect is the same. A family that kept renewing French passports, generation after generation, escapes the rule. A family that stopped being French in the eyes of French authorities after the emigrant does not.</p>
<p>The rule makes the timeline essential. A French-born parent who moved to the United States and held a French passport makes a claim easy. A French-born grandparent works only if the parent in between held French papers or the line has been abroad for less than ${K.cutoffs.desuetudeYears} years. A great-grandparent who emigrated before the Second World War almost never works without French documents in the family.</p>

<h2>Three typical American cases</h2>
<p>A woman born in Boston in 1985 to a father born in Marseille, who kept his French passport: she is French by filiation, the 50-year rule cannot apply, and the certificate is a matter of paperwork. A man born in 1980 whose grandmother left Brittany in 1946, and whose mother never held French papers: the family has been abroad for more than ${K.cutoffs.desuetudeYears} years with no possession d'état, so article 30-3 blocks him unless ties to France open article 21-14. A student born in 2004 whose grandfather emigrated in 1990: the line has been abroad for less than ${K.cutoffs.desuetudeYears} years, so it can still be proven if each link was French at the next birth. The ${h.a('home', 'family tree checker')} runs the same test on your own dates.</p>

<h2>Older births and the law at each date</h2>
<p>The court applies the law in force at each birth in the line. France's nationality rules changed several times before 1973, and older texts dealt differently with mothers, with women who married foreigners and with men who naturalized abroad. Those historic rules are not covered in detail here; if your line includes births before 1973 through a French mother, or an ancestor who took US citizenship early in the twentieth century, expect the court to look closely at those links.</p>

<h2>The certificate of French nationality</h2>
<p>Proof of French nationality by descent is a certificat de nationalité française. For people born and living abroad, the nationality service of the Paris judicial court decides (${h.src('fr-sp-cnf', 'service-public guide')}). You fill in form cerfa 16237 with a family tree, attach the originals of all records and proofs, and mail the file to Paris. The clerk may ask for more documents, then issues a receipt once the file is complete. From that receipt the legal limit is ${K.time.text}. Silence at the end of the period counts as a refusal, which you can challenge before the Paris court within six months. No average time is published. The ${h.src('fr-diplo-faq', 'Foreign Ministry FAQ')} still uses the court's former name for the same office.</p>
<p>The certificate costs nothing: the procedure is ${K.fee.amount === 0 ? 'free' : h.cur(K.fee.amount, 'EUR')}. With it you can have your birth transcribed in the French civil registry and apply for a passport at a French consulate.</p>

<h2>Documents, apostilles and translations</h2>
<p>The court wants full copies of the birth records of you and of each ancestor in the line, plus the marriage and filiation records that link them. It asks for originals, not photocopies, except for identity documents and records that exist in one copy only. Every document in English must be translated into French by a translator registered as a sworn expert with a French court of appeal, and the original translation goes in the file. US public records generally need an apostille from the issuing state. Where the 50-year rule could apply, add every French paper the family kept: passports, identity cards, consular cards, military records. The ${h.a('documents', 'US documents guide')} explains how to order certified copies and apostilles, and the ${h.a('cost', 'cost calculator')} includes translations.</p>

<h2>Dual citizenship</h2>
<p>France does not ask you to give up US citizenship, and a French national who takes another nationality stays French unless they ask to lose it. The United States has no objection to a second citizenship either; the ${h.a('dual', 'dual citizenship page')} covers the US side and the ${h.a('dual-taxes', 'tax page')} what changes for your returns. To compare France with countries that have no time bar, see the ${h.a('countries-dual', 'country table')} and the ${h.a('second-passport', 'second passport guide')}.</p>`;
    },
  },
});
