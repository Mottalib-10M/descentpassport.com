import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'uk',
  group: 'countries',
  order: 240,
  country: 'gb',
  tool: { kind: 'mini:gb-descent' },
  mini: { kind: 'cost', props: { country: 'gb' } },
  related: ['uk-grandparent', 'documents', 'cost', 'dual', 'countries-dual'],
  sources: ['gb-bna-s2', 'gb-bna-s4c', 'gb-govuk-british-parent', 'gb-ukm-guide', 'gb-fees', 'gb-priority', 'gb-dual', 'gb-ard-guide'],
  en: {
    slug: 'british-citizenship-by-descent',
    nav: 'British citizenship by descent',
    card: 'One generation born abroad, the pre-1983 mothers and pre-2006 unmarried fathers who can register, and the £130 fee.',
    title: 'British citizenship by descent: rules for Americans',
    description: 'British citizenship by descent for Americans: one generation abroad, registration for children of pre-1983 British mothers or unmarried fathers, a £130 fee.',
    h1: 'British citizenship by descent for Americans',
    intro: 'Say which parent was born in the UK, whether your parents were married and the year you were born: the tool tells you if you are British already or which form applies.',
    resume: (h) => {
      const K = h.C('gb');
      return `British citizenship by descent, which many Americans search for as English citizenship, passes automatically for one generation born abroad. If your mother or father was born, adopted, naturalized or registered in the United Kingdom, you are British by descent and you apply for a passport, not for citizenship. Two groups were left out by older rules and can now register as of right. People born before ${K.cutoffs.mother1983} to a British mother register under ${h.src('gb-bna-s4c', 'section 4C')} with form UKM. People born before July 1, 2006 to a British father who was not married to their mother register with form UKF. Both cost ${h.cur(K.fee.amount, 'GBP')}, which is the citizenship ceremony fee, and the Home Office usually decides within ${K.time.maxMonths} months. The ${h.cur(K.feePriority.amount, 'GBP')} priority service, about 30 working days, is open only to people applying from inside the UK. A grandparent born in the UK does not make an adult British. The UK allows dual citizenship.`;
    },
    faqs: (h) => [
      { q: 'Is there such a thing as English citizenship by descent?', a: 'No. England, Scotland, Wales and Northern Ireland share one nationality, British citizenship, under the British Nationality Act 1981. A parent born in London, Glasgow or Belfast passes on exactly the same status. Searching for English or Scottish citizenship leads to the same rules and the same Home Office forms.' },
      { q: 'My mother was born in England and I was born in the US in 1975. Am I British?', a: `Not automatically, because before ${h.C('gb').cutoffs.mother1983} only fathers passed it on. You are entitled to register under section 4C with form UKM. Being born in the United States meets the descent condition, and your mother's birth in the UK gives the right of abode the form asks about. There is no age limit, and you become British by descent.` },
      { q: 'Do adults have to attend a ceremony to become British by registration?', a: 'Yes. An adult approved on form UKM or UKF is invited to a citizenship ceremony and must attend within 90 days of the invitation. People living in the United States can attend at a British embassy or consulate. The ceremony includes an oath or affirmation of allegiance and a pledge.' },
      { q: 'What if no form fits my family history?', a: `Section 4L, applied for on ${h.src('gb-ard-guide', 'form ARD')}, lets the Home Office register an adult who would have been British but for historical unfairness, such as an old rule against mothers or unmarried fathers that the other forms do not cover. It is discretionary, so it may be refused even when the story is accurate.` },
    ],
    body: (h) => {
      const K = h.C('gb');
      return `
<h2>Who is British by descent, and who must register</h2>
${h.table(['Your situation', 'Status', 'Form and fee'], [
  ['Parent born, adopted, naturalized or registered in the UK, born after the cut-offs below', 'British by descent automatically', 'Passport application'],
  [`Born before ${K.cutoffs.mother1983} to a British mother`, 'Entitled to register', `UKM, ${h.cur(K.fee.amount, 'GBP')}`],
  ['Born before July 1, 2006 to an unmarried British father', 'Entitled to register', `UKF, ${h.cur(K.fee.amount, 'GBP')}`],
  ['Only a grandparent was British, and you are an adult', 'No route as of right', 'Section 4L, discretionary'],
], 'British Nationality Act 1981, ss. 2 and 4C; Home Office guidance and fee table.', ['l', 'l', 'l'])}
<p>The core rule sits in ${h.src('gb-bna-s2', 'section 2 of the 1981 Act')}. A child born outside the UK is a British citizen if, at the time of birth, a parent was a British citizen "otherwise than by descent". That phrase means the parent became British in their own right: by birth, adoption, naturalization or registration in the UK, or as a Crown servant posted abroad. A child born in the United States to such a parent is British by descent from birth, with nothing to apply for except a passport.</p>
<p>The limit is just as clear. A British citizen by descent cannot normally pass citizenship on to a child born abroad. So a woman born in Ohio to a father from Manchester is British, but her own children born in Ohio are not, unless one of the registration routes on the ${h.a('uk-grandparent', 'grandparent and double descent page')} applies.</p>
<h2>The two corrections for older rules</h2>
<p>Before January 1, ${K.cutoffs.mother1983}, nationality law let fathers, not mothers, pass citizenship to children born abroad. ${h.src('gb-bna-s4c', 'Section 4C')} repairs this. A person born before that date is entitled to register if they would have become a citizen of the United Kingdom and Colonies had women then passed it on like men, and would have had the right of abode. Two conditions follow in practice. Birth in a country outside the Commonwealth, such as the United States, satisfies the descent condition when the mother was a citizen. The right of abode is usually shown by the mother's own birth, adoption, naturalization or registration in the UK. The ${h.src('gb-ukm-guide', 'form UKM guidance')} lists what proves each point.</p>
<p>The second correction concerns fathers. Until ${h.src('gb-govuk-british-parent', 'July 1, 2006')}, a British father passed citizenship automatically only if he was married to the mother. Children born before that date to an unmarried British father can register with form UKF, on the same fee basis as form UKM. From July 1, 2006 an unmarried father passes it on in the same way as a mother.</p>
<p>One more historical point can matter. A parent who took another citizenship before 1949 could lose British nationality under the law of the time, and the Home Office then checks whether the parent was still a citizen when you were born.</p>
<!--tool:mini:gb-descent-->
<h2>Documents for the application</h2>
<p>For form UKM the ${h.src('gb-ukm-guide', 'Home Office guidance')} asks for your passport, your full birth certificate naming your parents, your mother's full birth certificate, and her naturalization or registration certificate if she was not born in the UK. Marriage certificates explain name changes. If your mother's status came through one of her own parents, add that grandparent's records too. Records issued in another language need a translation. ${K.docs.apostille ? 'US records need an apostille.' : 'The guidance does not ask for an apostille on US records.'} Where a record cannot be found, the Home Office decides on the balance of probabilities, so a short family tree and any old British passports help. Form UKM also names two referees, one a professional and one a British passport holder, who have each known you for at least three years.</p>
<p>After applying online you enroll your fingerprints and photo, usually within 45 days, at a center you are told about after paying. The ${h.a('documents', 'US records guide')} explains how to order long-form certificates from a state vital records office, and the ${h.a('cost', 'cost calculator')} adds up the US side.</p>
<h2>Fees and waiting time</h2>
<p>The ${h.src('gb-fees', 'Home Office fee table')} sets ${h.cur(K.fee.amount, 'GBP')} for registration on form UKM or UKF. That amount is the citizenship ceremony fee; there is no separate application charge for these entitlement routes. Registering a child on form MN1 costs ${h.cur(K.feeChild.amount, 'GBP')}. If you believe you are already British and want written confirmation instead of a passport, form NS costs ${h.cur(K.feeStatus.amount, 'GBP')}.</p>
<p>The standard decision time is usually within ${K.time.maxMonths} months, and the Home Office says it will contact you if a file takes longer. Since July 20, 2026 a ${h.src('gb-priority', 'priority service')} has existed for citizenship applications at an extra ${h.cur(K.feePriority.amount, 'GBP')}, with a decision usually within 30 working days, but the ${h.src('gb-ukm-guide', 'UKM guidance')} opens it to people applying from within the UK. From an address in the United States, plan on the standard time. Adults then have 90 days to attend their ceremony.</p>
<h2>Keeping your US citizenship</h2>
<p>The ${h.src('gb-dual', 'UK government')} states that dual citizenship is allowed. You do not give up your US passport to become British, and the United States does not ask you to choose; the ${h.a('dual', 'US dual citizenship page')} explains that side. You enter the United States on your US passport and the UK on your British one. The ${h.a('countries-dual', 'country comparison table')} sets the UK alongside the other European routes, the ${h.a('dual-taxes', 'tax page')} covers US reporting on a UK bank account, and the ${h.a('home', 'family tree checker')} tests other branches of your family.</p>`;
    },
  },
});
