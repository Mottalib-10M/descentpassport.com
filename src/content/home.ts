/**
 * Home page text (one page = one data file, RECETTE §21). Figures come from params-2026.json through
 * the helpers; every date or fee in a sentence carries the source link it rests on.
 */
import type { Helpers } from '../lib/helpers';
import type { FAQ } from '../lib/guide-types';

export const HOME = {
  title: 'Citizenship by descent checker for Americans: 19 countries',
  description: 'Check which citizenship your parents, grandparents or great-grandparents can pass to you under 2026 rules: Italy, Ireland, Poland, Germany, Canada and more.',
  h1: 'Citizenship by descent: which passport can your family give you?',
  intro: 'Pick the country of a foreign-born ancestor, the line down to you and a few years: the checker applies that country\'s law as it stands today.',
  independent: 'Independent site, not a government or consulate service and not a law firm. Nothing you type leaves your browser.',
  sources: ['it-law-91-art3bis', 'ca-rules-2025', 'ie-dfa-fbr', 'pl-act-2009', 'de-stag-5', 'es-montreal-fin', 'dos-dual', 'usc-1481', 'us-uscis-genealogy', 'us-dos-authentications', 'irs-fbar'],
  resume: (h: Helpers) => `Citizenship by descent, also called jus sanguinis, is the rule by which a country treats the child of one of its citizens as a citizen too, wherever the child is born. For Americans with immigrant roots it can open a second passport without moving abroad or investing: the law of the ancestor's country decides, and the United States lets you hold both (${h.src('dos-dual', 'State Department')}). Each country draws the line in its own place. Poland follows an unbroken chain of citizens with no generation limit, as long as nobody lost Polish citizenship before the next child was born (${h.src('pl-act-2009', 'Polish Citizenship Act')}). Ireland registers the grandchildren of people born on the island (${h.src('ie-dfa-fbr', 'Foreign Births Register')}). Italy, since March 28, 2025, stops at a parent or grandparent who held Italian citizenship only (${h.src('it-law-91-art3bis', 'article 3-bis')}). Canada, since December 15, 2025, recognizes people born abroad before that date in any generation (${h.src('ca-rules-2025', 'IRCC')}). Three facts decide most lines: where and when each person was born, whether a parent was a mother or a father, and the year the emigrant took US citizenship.`,
  facts: (h: Helpers) => [
    { k: 'Countries modeled', v: '19, each with its fee, time and dual citizenship rule' },
    { k: 'Rules read on', v: h.date(h.P.retrieved_at) },
    { k: 'Official links behind the answers', v: h.num(Object.keys(h.P.sources).length) },
    { k: 'Data sent anywhere', v: 'None: the tree stays in your browser' },
  ],
  sections: (h: Helpers) => [
    {
      title: 'How citizenship by descent works',
      html: `<p>Nationality laws ask one question at every link of a family line: was the parent a citizen on the day the child was born? If yes, the child was born a citizen too, often without any paper ever being filed, and the chain goes on. If the parent had already lost that citizenship, the chain breaks at that point and nothing below it can be rebuilt by descent.</p>
<p>The most common break in American families is naturalization. Until the second half of the twentieth century, many European countries withdrew their citizenship from anyone who voluntarily took another. An Italian emigrant who became a US citizen in 1920 lost Italian citizenship that year; a son born in 1918 was born Italian, a daughter born in 1922 was not. A German emigrant who naturalized in 1925 lost German citizenship the same way. This is why the checker asks for the year the ancestor naturalized, and compares it with the birth year of the next child in the line.</p>
<p>The second break is the mother. Many laws let only a father pass on citizenship to a child born in wedlock until a date set by a reform or a court: 1948 in Italy, 1975 in Germany, 1983 in the United Kingdom, 1984 in Greece. Some countries later repaired those cases with a declaration; others did not, or only through a court. A line that runs through a woman therefore needs her children's birth years. The third limit is the number of generations born abroad: Italy now stops at the grandparent, the United Kingdom at the parent, Ireland at the grandparent born on the island, while Poland, Germany or Greece set no generation limit as long as every link held.</p>`,
    },
    {
      title: 'What changed in 2025 and 2026',
      html: `<p>Several of the routes Americans used most were rewritten in less than two years, which makes older guides wrong for at least one country in every family.</p>
<ul>
<li><strong>Italy.</strong> Decree-Law 36/2025, converted by Law 74/2025, added article 3-bis to the 1992 citizenship law with effect from March 28, 2025 (${h.src('it-law-91-art3bis', 'Normattiva')}). A person born abroad who holds another citizenship is treated as never having been Italian, unless the case was filed by March 27, 2025, or a parent or grandparent held only Italian citizenship, or a parent lived in Italy for two years before the birth. Details on the ${h.a('italy', 'Italian citizenship page')}.</li>
<li><strong>Canada.</strong> Bill C-3 came into force on December 15, 2025 (${h.src('ca-rules-2025', 'IRCC')}). It removed the first-generation limit for people born abroad before that date, and set a test of ${h.num(h.C('ca').cutoffs.presenceDays)} days of physical presence in Canada for a Canadian parent born abroad whose child is born later. See ${h.a('canada', 'Canadian citizenship by descent')}.</li>
<li><strong>Spain.</strong> The Democratic Memory Law option for grandchildren of exiles and emigrants closed on October 22, 2025 (${h.src('es-montreal-fin', 'Spanish consulate')}); files lodged in time are still being decided. See ${h.a('spain', 'Spanish citizenship by descent')}.</li>
<li><strong>Portugal.</strong> Organic Law 1/2026 added a language and culture requirement for grandchildren from May 19, 2026 (${h.src('pt-lo-1-2026-dr', 'Diário da República')}). See ${h.a('portugal', 'Portuguese citizenship by descent')}.</li>
<li><strong>Germany.</strong> Since June 27, 2024 Germany accepts multiple citizenship and no longer withdraws it from Germans who naturalize abroad (${h.src('de-bva-2024', 'Federal Office of Administration')}). The free declaration for children of German mothers and of unmarried German fathers, section 5 of the Nationality Act, stays open until August 19, 2031 (${h.src('de-stag-5', 'StAG s. 5')}). See ${h.a('germany', 'German citizenship by descent')}.</li>
</ul>`,
    },
    {
      title: 'The US records every file needs',
      html: `<p>Whatever the country, the file proves the same chain: the ancestor's birth abroad, then each birth and marriage down to you, then the date the ancestor became a US citizen, or proof that they never did. Most of that paper is American.</p>
<p><strong>Vital records</strong> come from the state where each event happened, as certified long-form copies. Fees are set by each state: California charges ${h.usd(h.P.us.records.californiaBirth.fee)} for a birth record, ${h.usd(h.P.us.records.californiaMarriage.fee)} for a marriage and ${h.usd(h.P.us.records.californiaDeath.fee)} for a death since January 1, 2026 (${h.src('ca-cdph-fees', 'California Department of Public Health')}).</p>
<p><strong>Naturalization records</strong> show the date that decides the line. Court records held by the National Archives cost ${h.usd(h.P.us.records.naraNaturalization.fee)} a copy (${h.src('us-nara-dual-citizenship-faq', 'NARA')}). USCIS holds files opened from 1906 onward and answers through its ${h.src('us-uscis-genealogy', 'genealogy program')}: an index search costs ${h.usd(h.P.us.records.uscisIndexOnline.fee)} online, a record copy ${h.usd(h.P.us.records.uscisRecordOnline.fee)} online. When no record exists, Form G-1566 asks USCIS for a certificate of non-existence, at ${h.usd(h.P.us.records.uscisNonExistenceOnline.fee)} online.</p>
<p><strong>Apostilles</strong> make a US record valid abroad. State records get one from the secretary of state of that state; federal records, such as a USCIS letter, get one from the State Department's Office of Authentications at ${h.usd(h.P.us.apostille.federal.fee)} per document, with about ${h.P.us.apostille.federal.mailWeeks} weeks by mail (${h.src('us-dos-authentications', 'State Department')}). Ireland, Canada and the United Kingdom ask for no apostille; Italy, Poland and Greece do. The ${h.a('documents', 'document checklist')} lists what each country wants and the ${h.a('cost', 'cost calculator')} adds the bill for your line.</p>`,
    },
    {
      title: 'Keeping your US citizenship, and the taxes that follow',
      html: `<p>US law does not ask you to choose. A US citizen may acquire another nationality by birth, descent or naturalization without asking any US authority (${h.src('dos-dual', 'State Department')}), and citizenship is lost only through a voluntary act done with the intention of giving it up (${h.src('usc-1481', '8 U.S.C. 1481')}). Recognition by descent is not even an act of naturalization: the other country confirms a status it says you have held since birth. Two duties remain. You enter and leave the United States on your US passport, and you keep filing US tax returns on your worldwide income.</p>
<p>A second passport does not change your taxes; foreign accounts do. If the total of your foreign accounts passes ${h.usd(h.P.us.fbar.threshold)} at any moment of the year, you file an FBAR with the Treasury (${h.src('irs-fbar', 'IRS')}), and Form 8938 applies above higher thresholds. Living and working abroad opens the foreign earned income exclusion. The ${h.a('dual-taxes', 'tax page for dual citizens')} runs each test, and the ${h.a('dual', 'page on dual citizenship for Americans')} covers the passport rule and loss of nationality. Whether you keep the other citizenship is a question for the other country: the ${h.a('countries-dual', 'table of countries')} shows which ones set conditions.</p>`,
    },
    {
      title: 'When a family has several lines',
      html: `<p>Many American families have three or four foreign-born ancestors from different countries. The checker takes up to three lines at once, so you can compare them side by side. Three questions usually settle the choice.</p>
<ol>
<li><strong>Which line works under today's law?</strong> A great-grandparent from Italy no longer counts for a new file, while a great-grandparent from Poland or Germany may, if nobody in between lost citizenship first.</li>
<li><strong>Which line needs the fewest records?</strong> Each generation adds a birth, often a marriage, and sometimes a death record, each with its apostille and translation. A grandparent line costs less than a great-grandparent line, and a country that asks for no apostille costs less again.</li>
<li><strong>Which passport serves your plans?</strong> Every citizenship of a European Union country gives the right to live and work in all of them, so an Irish, Polish or German passport opens Italy, Spain or France too. A Canadian or British passport opens its own country only.</li>
</ol>
<p>The ${h.a('second-passport', 'second citizenship page')} ranks the open routes by how far back they reach, and each country page carries its own short tool to test one line in depth.</p>`,
    },
    {
      title: 'Why a line fails, and what the checker cannot see',
      html: `<p>Most negative answers come from four causes. The emigrant naturalized before the next child in the line was born. A mother passed on citizenship before her country allowed it, with no later repair. The line has more generations born abroad than the country accepts. Or the route itself closed on a known date, as Spain's did in 2025. The checker names the cause and links the law it rests on.</p>
<p>Some facts it cannot judge: adoptions, legitimations and court decisions on parentage, name changes that make records disagree, military service or residence abroad that some old laws treated as a loss, and decisions left to an official's discretion, such as Slovakia's grant or a German naturalization for people born before 1949. When one of these is in play the answer says "possible, to check". Its verdicts are not legal advice: the country concerned decides, and the ${h.a('method', 'method page')} explains each rule and its limits.</p>`,
    },
  ],
  faqs: (h: Helpers): FAQ[] => [
    { q: 'Which countries offer citizenship by descent to Americans?', a: `Almost every country passes citizenship from parent to child; the question is how far back. Among the 19 in the checker, Poland, Germany, Greece, Latvia and Mexico set no generation limit if each link held, Canada reaches any generation born before December 15, 2025, Italy and Ireland stop at a grandparent, and the UK, Norway and Sweden at a parent.` },
    { q: 'Does a great-grandparent still count anywhere?', a: 'Yes, in countries that follow an unbroken chain rather than a fixed number of generations: Poland, Germany, Greece, Latvia or Hungary, which offers a simplified naturalization with a conversation in Hungarian. Lithuania names great-grandchildren of citizens before June 15, 1940, and Slovakia great-grandchildren born there. Italy no longer accepts them for files lodged after March 27, 2025.' },
    { q: 'Do I need to know exact dates before using the checker?', a: 'No, years are enough. The checker compares years and, when two decisive events fall in the same year, such as a naturalization and a birth, it answers "possible, to check" instead of guessing. Exact dates only matter for those cases, and the birth and naturalization certificates you will order anyway settle them.' },
    { q: 'What does recognition cost in total?', a: `It depends on the number of generations and on the country. Expect state vital records at about ${h.usd(h.P.us.records.californiaBirth.fee)} each in California, naturalization proof, apostilles where required and translations where the language is not English, plus the country's fee, from nothing in Germany's declaration to ${h.cur(h.C('it').fee.amount, 'EUR')} per adult in Italy.` },
    { q: 'Will my children inherit the second citizenship?', a: 'Usually, if they are born after you are recognized or if your recognition dates back to your own birth, as in Italy, Poland or Germany. Some countries limit it: the United Kingdom passes British citizenship by descent only one generation, and Italy since 2025 asks whether the parent held Italian citizenship alone or lived in Italy.' },
    { q: 'Is this site a service that files applications?', a: 'No. Descent Passport Check is an independent information site published by Radif Partners. It files nothing, books no appointment, recommends no lawyer and collects no personal data: the family tree you type is processed in your browser only. Every application is made directly with the consulate, ministry or register of the country concerned.' },
  ],
};
