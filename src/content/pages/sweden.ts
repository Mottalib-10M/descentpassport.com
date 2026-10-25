import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'sweden',
  group: 'countries',
  order: 296,
  country: 'se',
  tool: { kind: 'mini:se-22' },
  mini: { kind: 'cost', props: { country: 'se' } },
  related: ['norway', 'home', 'countries-dual', 'documents', 'dual'],
  sources: ['se-medborgarskapslag', 'mv-auto', 'mv-father', 'mv-retain', 'mv-regain', 'mv-declaration', 'mv-news-2026', 'mv-adults', 'mv-means'],
  en: {
    slug: 'swedish-citizenship-by-descent',
    nav: 'Swedish citizenship by descent',
    card: 'Parent only, the retention application before 22, and what the June 6, 2026 reform closed for former Swedes living in the US.',
    title: 'Swedish citizenship by descent: parents, 22 and 2026 rules',
    description: 'Swedish citizenship by descent: a parent only, the free application to keep it before 22, the father notification, and the June 2026 reform for former citizens.',
    h1: 'Swedish citizenship by descent after the 2026 reform',
    intro: 'Enter your year of birth, which parent is Swedish and your time in Sweden: the tool says whether you are Swedish and what to file before 22.',
    resume: (h) => {
      const K = h.C('se');
      return `Swedish citizenship by descent passes from a parent only: you are Swedish if a parent was Swedish when you were born, and a grandparent who emigrated does not count on their own. Since April 1, ${K.cutoffs.act2015} a Swedish father or mother passes it on wherever the child is born; for births abroad before that date, an unmarried Swedish father had to file a notification before the child turned 18. A second rule matters for Americans: under ${h.src('se-medborgarskapslag', 'section 14 of the Citizenship Act')}, a Swede born abroad who never lived in Sweden and has no ties through visits loses citizenship at ${K.cutoffs.lossAge}, unless they apply to keep it between 18 and 22, for free. The reform in force since June 6, 2026 closed the notification that let former Swedes in the US take citizenship back; they now need ${K.cutoffs.formerResidenceYears} years of residence in Sweden. It also opened a free, narrow way to regain citizenship lost at 22.`;
    },
    faqs: (h) => [
      { q: 'I was born in the US to a Swedish mother in 1995. Am I Swedish?', a: `Possibly, but births before July 1, ${h.C('se').cutoffs.act2001} follow older rules that the Migration Agency applies case by case, and section 14 may have ended your citizenship at 22 if you never lived in Sweden. The simplest answer comes from a free declaration of citizenship, filed through a Swedish embassy or consulate, which states whether you are Swedish today.` },
      { q: 'Can former Swedish citizens in the US still get citizenship back by notification?', a: `Not since June 6, 2026. The reform repealed the notification for former citizens without a transition period. A former Swede who lives outside the Nordic countries must now apply like other adults, after at least ${h.C('se').cutoffs.formerResidenceYears} years of residence in Sweden, and pay ${h.cur(h.C('se').feeApply.amount, 'SEK')}. Nordic citizens keep a notification route, but US citizens are not among them.` },
      { q: 'What does the new Swedish route to regain citizenship lost at 22 require?', a: 'A free application, made from age 22, showing that losing Swedish and therefore EU citizenship had disproportionate consequences for you or your family in Sweden or another EU country. Only circumstances before your 22nd birthday count, and only losses after January 1, 1995. A life spent entirely in the US rarely meets that test.' },
    ],
    body: (h) => {
      const K = h.C('se');
      return `
<h2>Were you Swedish at birth?</h2>
${h.table(['Born abroad', 'Swedish mother', 'Swedish father'], [
  [`On or after April 1, ${K.cutoffs.act2015}`, 'Yes', 'Yes, married or not'],
  [`July 1, ${K.cutoffs.act2001} to March 31, ${K.cutoffs.act2015}`, 'Yes', 'If married to the mother; otherwise notification before 18'],
  [`Before July 1, ${K.cutoffs.act2001}`, 'Older rules: ask for a declaration', 'Older rules: ask for a declaration'],
], 'Swedish Citizenship Act (2001:82) and Migration Agency pages read on October 25, 2026. The parent must be Swedish on the day of the birth.', ['l', 'l', 'l'])}
<p>The ${h.src('mv-auto', 'Migration Agency')} describes the current rule simply: a child born on or after April 1, ${K.cutoffs.act2015} is Swedish if a parent is Swedish at the time of birth, or was Swedish at death. Between July 1, ${K.cutoffs.act2001} and March 31, ${K.cutoffs.act2015}, the mother always passed it on, and the father did so if the child was born in Sweden or if he was married to the mother. A child of an unmarried Swedish father became Swedish if the parents later married while the child was under 18 and unmarried.</p>
<p>For births before July 1, ${K.cutoffs.act2001}, the older act applies, and a parent who became a US citizen before that date generally stopped being Swedish. The free ${h.src('mv-declaration', 'declaration of citizenship')} exists for exactly these doubts: born abroad, never lived in Sweden, a parent who naturalized. It costs nothing and is filed through a Swedish embassy or consulate.</p>
<h2>The father's notification before 18</h2>
<p>When a child was born outside Sweden before April 1, ${K.cutoffs.act2015} to a Swedish father not married to the mother, the ${h.src('mv-father', 'father files a notification')} while the child is under 18. He must have been Swedish when the child was born, paternity must be legally established, every guardian must agree, a child aged 12 or more must consent, and from 15 extra identity and criminal record conditions apply. The fee is ${h.cur(K.feeFather.amount, 'SEK')}, and the Migration Agency reports that 75% of recent cases were decided within ${K.time.maxMonths} months. This route survived the 2026 reform, but it closes on the child's 18th birthday.</p>
<!--tool:mini:se-22-->
<h2>Keeping it after 22</h2>
<p>Section 14 of the Act is the rule that catches most Swedish-American families. A Swede born abroad who has never had residence in Sweden, and has not stayed there in a way that shows ties, such as a long stay or regular shorter visits, loses citizenship automatically on the ${K.cutoffs.lossAge}nd birthday. Children who got their citizenship from that person lose it at the same time, unless the other parent is still Swedish. Nobody loses it if that would leave them stateless, or after seven years in total in Denmark, Finland, Iceland or Norway.</p>
<p>The answer is an ${h.src('mv-retain', 'application to retain citizenship')}, filed after the 18th and before the 22nd birthday at an embassy or consulate. It is free. The Migration Agency adds that no application is needed by someone who has lived in Sweden or visited it regularly, but it does not publish a processing time, so filing early leaves room for questions. Keep evidence of time spent in Sweden: school terms, summer jobs and travel records all help show ties.</p>
<h2>What changed on June 6, 2026</h2>
<p>The reform brought in by Lag 2026:447, in force on June 6, 2026 without transitional rules, rewrote naturalization: eight years of residence for most applicants, requirements on self-support and on knowledge of Swedish and Swedish society, and a citizenship test from August 2026, as the ${h.src('mv-news-2026', 'Migration Agency announced')}. For American families, two changes stand out.</p>
<p>First, the notification routes for former Swedish citizens and for young adults were repealed. A former Swede who lost citizenship by becoming a US citizen before ${K.cutoffs.act2001} can no longer simply notify the authorities from abroad. They must ${h.src('mv-adults', 'apply')}, with at least ${K.cutoffs.formerResidenceYears} years of residence in Sweden, and the fee is ${h.cur(K.feeApply.amount, 'SEK')}; the agency reports 75% of adult applications decided within ${K.timeApply.months} months. In practice there is no remote route left for a former citizen living in the United States.</p>
<p>Second, a new ${h.src('mv-regain', 'application to regain citizenship lost at 22')} was created. It is free and takes effect from the 22nd birthday if granted, but the test is narrow: the loss of Swedish, and therefore EU, citizenship must have had disproportionate consequences for the person or their family in Sweden or another EU country, judged only on facts before age 22, and only for losses after January 1, 1995.</p>
<h2>Documents and fees in one place</h2>
<p>A retention application needs correctly made copies of your passports and, if your citizenship came by application or notification, proof of it. A declaration needs an identity document, your birth certificate and, where relevant, your parents' marriage certificate. A father's notification needs proof of paternity, the father's passport showing his citizenship at the birth and the child's birth certificate. Copies must be certified. ${K.docs.apostille === null ? 'The Migration Agency pages read for this guide do not set a general apostille rule for US records, so follow the checklist of the form you use.' : ''} The ${h.a('documents', 'document checklist')} and the ${h.a('cost', 'cost calculator')} cover the US side.</p>
<h2>Dual citizenship</h2>
<p>Sweden has allowed dual citizenship since July 1, ${K.cutoffs.act2001}, as the ${h.src('mv-means', 'Migration Agency confirms')}. A Swede who becomes a US citizen today keeps Swedish citizenship, and Sweden does not ask Americans to give up US citizenship. The United States does not object either, as the ${h.a('dual', 'dual citizenship page')} explains. Norway applies a similar parent-only rule with its own age-22 test, set out on the ${h.a('norway', 'Norwegian citizenship page')}; the ${h.a('countries-dual', 'country table')} compares the rest, and the ${h.a('home', 'family tree checker')} runs every country in your tree.</p>`;
    },
  },
});
