import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'italy-1948',
  group: 'italy',
  order: 130,
  country: 'it',
  tool: { kind: 'mini:it-1948' },
  related: ['italy', 'italy-requirements', 'italy-apply', 'home', 'germany'],
  sources: ['it-cass-su-24045-2026', 'it-law-91-art3bis', 'it-cons-sydney', 'it-interno-circ-2026-08-10', 'it-cons-sf-iure'],
  en: {
    slug: 'italian-citizenship-1948-rule',
    nav: 'The 1948 rule',
    card: 'Why an Italian mother did not pass citizenship before 1948, how courts fixed it, and what the 2025 law left of that route.',
    title: 'Italian citizenship 1948 rule: mothers, courts and 2025',
    description: 'The 1948 rule for Italian citizenship through a mother: why consulates refuse births before 1948, how Italian courts recognize them, what Law 74/2025 changed.',
    h1: 'The 1948 rule: Italian citizenship through a mother',
    intro: 'Type the birth year of the Italian woman\'s child and whether a case was filed in time: the tool says which route is left.',
    resume: (h) => `The 1948 rule comes from the citizenship law of 1912, under which a child took Italian citizenship from the father; a mother passed it on only in narrow cases, and an Italian woman who married a foreigner usually lost it. The Constitution that took effect on January 1, 1948 made men and women equal, so consulates recognize citizenship through a mother only for children born from that date. Italian courts went further: since a 2009 ruling of the United Sections of the Court of Cassation, judges recognize children born before 1948 to an Italian mother, because the discrimination itself was unconstitutional. That is the "1948 case", filed in court rather than at a consulate. The 2025 reform narrowed it sharply. Article 3-bis protects court cases filed by March 27, 2025; a new case filed after that date is judged under the new limits, which require a parent or grandparent who held only Italian citizenship (${h.src('it-law-91-art3bis', 'art. 3-bis')}).`,
    faqs: (h) => [
      { q: 'My grandmother was Italian and my father was born in 1946. Is there still a way?', a: 'Under the old rules, a court would recognize your father and you. Under the 2025 rules, only if the case was filed by March 27, 2025, or if your grandmother held Italian citizenship alone and an Italian court accepts the line, a question on which consulates have no administrative route. In most new cases, the answer is no.' },
      { q: 'Does the 1948 rule also apply to an Italian father?', a: 'No. Fathers transmitted citizenship before 1948; the date only matters for mothers, and for women who lost citizenship by marrying a foreigner before that date. A line through fathers only is judged on the other conditions: naturalization dates under the old rules, the parent-or-grandparent limit under the new ones.' },
      { q: 'Did the July 2026 Cassation ruling change the 1948 rule?', a: `No. Judgment 24045/2026 of the United Sections dealt with the "minor issue": children born in the United States kept Italian citizenship when a parent naturalized during their minority. It also said article 3-bis does not apply to court cases filed before March 27, 2025, which protects pending 1948 cases (${h.src('it-cass-su-24045-2026', 'text of the judgment')}).` },
    ],
    body: (h) => `
<h2>Where the date comes from</h2>
<p>Law 555 of 1912 governed Italian citizenship for most of the century. It tied a child's citizenship to the father's and made a married woman follow her husband's. When the Republic's Constitution took effect on January 1, 1948, those rules became incompatible with equality between the sexes, but the 1912 law stayed on the books until 1992. Ministry practice settled on the date of the Constitution: births from January 1, 1948 through an Italian mother are recognized at consulates, earlier ones are not. The ${h.src('it-cons-sydney', 'Sydney consulate')} still states it this way: women transmit only from 1948.</p>
<h2>How the courts filled the gap</h2>
<p>Families whose line ran through a mother before 1948 turned to the Italian courts. Since judgment 4466 of 2009 of the United Sections, judges have held that the old rule was void from the start, so a child born in 1935 to an Italian mother is Italian too, and so is the line below. A lawsuit replaced the consular appointment, with the same records and translations as a consular file.</p>
${h.table(['Your case', 'Before March 28, 2025', 'Since March 28, 2025'], [
  ['Child of an Italian mother born from 1948', 'Consulate', 'Consulate, within the 3-bis limits'],
  ['Child of an Italian mother born before 1948', 'Court', 'Court, only if filed by March 27, 2025'],
  ['Woman who married a foreigner before 1948', 'Court restored her', 'Same limits'],
], 'Law 91/1992, art. 3-bis; Court of Cassation case law.', ['l', 'l', 'l'])}
<h2>What the 2025 reform kept</h2>
<p>Article 3-bis lists the cases still judged under the old rules. Letter (b) covers court cases filed by 11:59 p.m. Rome time on March 27, 2025. A family that sued before that deadline keeps its chance; a family that had collected records but not filed does not. The United Sections confirmed in July 2026 that the new article does not reach those earlier cases, and the ${h.src('it-interno-circ-2026-08-10', 'Interior Ministry circular of August 10, 2026')} tells registrars to follow that reading.</p>
<h2>When a mother line still works</h2>
<p>A mother line from 1948 onward is treated like a father line. The question then is the 2025 limit: is the Italian woman your mother or grandmother, and did she hold Italian citizenship only? An Italian grandmother who never naturalized in the United States, with your parent born after 1948, fits exception (c) of article 3-bis. The tool above runs these cases, and the ${h.a('home', 'family tree checker')} combines them with your other lines.</p>
<h2>Elsewhere in Europe</h2>
<p>Italy is not alone. Germany refused transmission through mothers married to foreigners for births before 1975 and now repairs it by a free declaration, as the ${h.a('germany', 'German page')} explains. The United Kingdom lets people born before 1983 to a British mother register. In both, the repair is a simple filing rather than a lawsuit.</p>`,
  },
});
