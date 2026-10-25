import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'poland',
  group: 'countries',
  order: 220,
  country: 'pl',
  tool: { kind: 'mini:pl-chain' },
  mini: { kind: 'cost', props: { country: 'pl' } },
  related: ['poland-jewish', 'documents', 'cost', 'countries-dual', 'home'],
  sources: ['pl-act-2009', 'pl-act-1920', 'pl-act-1951', 'pl-consulate-usa', 'pl-uw-lodz'],
  en: {
    slug: 'polish-citizenship-by-descent',
    nav: 'Polish citizenship by descent',
    card: 'No generation limit, but every link must have stayed Polish: the 1920 and 1951 Acts, the $118 consular fee and the voivode decision.',
    title: 'Polish citizenship by descent: the 1920 and 1951 tests',
    description: 'Polish citizenship by descent for Americans: no generation limit, the 1920 and 1951 loss rules, a voivode decision, the $118 consular fee and Polish documents.',
    h1: 'Polish citizenship by descent: proving a line that never broke',
    intro: 'Enter the year your Polish ancestor naturalized in the US and the year their child in your line was born: the tool applies the law in force at each step.',
    resume: (h) => {
      const K = h.C('pl');
      return `Polish citizenship by descent is not granted, it is confirmed. Under ${h.src('pl-act-2009', 'the Polish Citizenship Act of 2 April 2009')}, a child with at least one Polish parent is Polish at birth, wherever the birth takes place, and there is no limit on generations. The catch is that every person in the line must still have been Polish when the next one was born, judged under the law of that time. Two older laws decide most American cases. Under the ${h.src('pl-act-1920', '1920 Act')}, naturalizing abroad ended Polish citizenship, and the loss also reached the wife and children under 18; a child born in wedlock took only the father's citizenship. Under the ${h.src('pl-act-1951', '1951 Act')}, which replaced it in ${K.cutoffs.act1951}, a US naturalization without Polish permission no longer cost anything. A voivode in Poland issues the decision. The consular fee is ${h.usd(K.fee.amount)}, and no decision time is published.`;
    },
    faqs: (h) => [
      { q: 'My great-grandfather left Galicia in 1905 and never went back. Can I claim through him?', a: 'Probably not. Polish citizenship only existed from the 1920 Act, and it went to people settled in the new state who held no other citizenship. An emigrant who had already left and settled in the United States rarely qualified. A child or grandchild who returned and lived in Poland after 1920 can change the answer.' },
      { q: 'My grandfather naturalized in 1952. Does the date matter that much?', a: `Yes. The 1951 Act came into force in January ${h.C('pl').cutoffs.act1951} and dropped the rule that a foreign naturalization ended Polish citizenship. Without a permit from the Polish authorities, a US oath taken after that point left your grandfather Polish, so a child born to him afterwards or before was Polish too. A 1949 oath would usually have ended the line.` },
      { q: 'Why does the line through my Polish grandmother fail?', a: 'If your parent was born before 1951 in wedlock to a Polish mother and a non-Polish father, the 1920 Act gave the child the father\'s citizenship only. The mother could not pass it on in that situation. From 1951 a mother counts, although mixed couples in the 1950s were handled case by case until the 1962 Act.' },
      { q: 'Can the voivode refuse if I never lived in Poland or speak no Polish?', a: 'Confirmation has no language test and no residence condition. The voivode only checks whether you hold Polish citizenship under the law, from documents. When the applicant and the ancestors never lived in Poland, the Mazovian Voivode in Warsaw decides. A refusal can be appealed to the Minister of the Interior within 14 days.' },
    ],
    body: (h) => {
      const K = h.C('pl');
      return `
<h2>Who qualifies, law by law</h2>
<p>Poland treats you as a citizen today if you were one on the day each law changed, so the question is historical. The voivode reads the line from the ancestor down and applies, to each birth, the law in force that year. Three dates organize the answer.</p>
${h.table(['When the event happened', 'Law applied', 'What it means for the line'], [
  [`Before ${K.cutoffs.act1920}`, 'No Polish state', 'An emigrant who left before the 1920 Act rarely became a Polish citizen'],
  [`${K.cutoffs.act1920} to January ${K.cutoffs.act1951}`, 'Act of 20 January 1920', 'Naturalizing abroad ended it, also for children under 18; father only in wedlock'],
  [`${K.cutoffs.act1951} to ${K.cutoffs.act1962}`, 'Act of 8 January 1951', 'A foreign oath without permission no longer ended it; deprivation possible'],
  [`From ${K.cutoffs.act1962}`, 'Acts of 1962 and 2009', 'One Polish parent is enough; loss only with state consent'],
], 'Polish citizenship laws as read on isap.sejm.gov.pl, October 25, 2026.', ['l', 'l', 'l'])}
<p>The 1920 Act is the hard filter for American families. Its article 11 says citizenship was lost "przez nabycie obcego obywatelstwa", by acquiring a foreign citizenship, and article 13 extended the loss to the wife and to children under 18. So the order of two events matters: the ancestor's US naturalization and the birth of the next child in your line. A child born after a pre-1951 naturalization was never Polish. A child born before it was Polish at birth, but lost it with the father if still under 18 on the day of the oath. A child who was already an adult kept it.</p>
<p>There was one exception that saves some lines. A man who was liable for active military service and naturalized without the permission of the Minister of Military Affairs continued to be regarded as a Polish citizen. Draft-age men who took US citizenship in the 1920s and 1930s can fall under it, and the voivode decides from the documents. The opposite risk also exists: under the same Act, joining a foreign army or accepting a foreign public office without the consent of the Polish government ended citizenship. A grandfather who served in the US Army before 1951 is a point to check before paying for translations.</p>
<p>The 1951 Act changed the picture. From January ${K.cutoffs.act1951}, a Polish citizen could only lose citizenship through a foreign naturalization with the permission of the Polish authorities, and marriage stopped affecting it. The same Act allowed Poles abroad to be deprived of citizenship by decision, for example for leaving illegally after May 9, 1945 or refusing to return. A deprivation decision breaks the line. Those cases, and the restoration route for people who lost citizenship before ${K.cutoffs.restoreBefore}, are on the ${h.a('poland-jewish', 'page on Jewish ancestry and the 1968 emigration')}.</p>
<h2>Mothers, fathers and marriage</h2>
<p>Before 1951, a child born in wedlock took the father's citizenship and a child born out of wedlock took the mother's. A Polish woman who married a foreigner could also lose her own citizenship under the 1920 Act. From 1951, marriage no longer changed anyone's citizenship. The ${h.src('pl-act-2009', '2009 Act')} now says plainly that a child acquires Polish citizenship when at least one parent is Polish, and that marrying a foreigner changes nothing for either spouse.</p>
<h2>Where and how to apply</h2>
<p>The application is a request to confirm that you hold Polish citizenship. You file it in Polish, on the official form, at the ${h.src('pl-consulate-usa', 'Polish consulate for your US address')} after booking an appointment through e-Konsulat. The consul forwards it to the voivode of the last place in Poland where you or your ancestor lived; if none of you ever lived there, the Mazovian Voivode decides. The answer is an administrative decision, and you can appeal it to the Minister of the Interior and Administration within 14 days.</p>
<h2>Documents, apostilles and translations</h2>
<p>The file has to show two things: that your ancestor was a Polish citizen, and that nothing broke the line. For the first, the consulate lists Polish birth, marriage and baptism records, an old Polish passport or ID card, or a military booklet. For the second, you bring every link's long-form birth certificate with the parents' names, the marriage records and any name change, and the ancestor's naturalization record from the National Archives or USCIS. A naturalization date often decides the case on its own.</p>
<p>${K.docs.apostille ? 'US records need an apostille from the state that issued them.' : ''} ${K.docs.translation ? 'Anything not in Polish must be translated by a Polish sworn translator or by the consul.' : ''} The consul can certify copies. The ${h.a('documents', 'document checklist')} explains how to order long-form certificates and naturalization files, and the ${h.a('cost', 'cost calculator')} adds up records, apostilles and fees. Polish archives can supply the ancestor's records, but the search is up to you.</p>
<h2>Fee and waiting time</h2>
<p>A Polish consulate in the United States charges ${h.usd(K.fee.amount)} to take a confirmation application. When the request is filed directly with a voivode in Poland, the stamp duty is ${h.cur(K.feePoland.amount, 'PLN')}, as listed by the ${h.src('pl-uw-lodz', 'Łódź voivode office')}; the consular page does not say whether that duty is also due when you file through a consul. No voivode publishes a decision time, and the consular page only says the file is forwarded without delay. Plan for months, not weeks, and keep copies of everything you send.</p>
<h2>Keeping your US citizenship</h2>
<p>Poland does not ask you to give up US citizenship. Under article 3 of the 2009 Act, a Polish citizen who also holds another citizenship has the same rights and duties toward Poland as anyone else and cannot rely on the other citizenship before Polish authorities. In practice you enter and leave Poland as a Pole. Polish citizenship ends only through a renunciation approved by the President. The United States allows a second citizenship as well; the ${h.a('dual', 'dual citizenship page')} covers passports and the ${h.a('dual-taxes', 'tax page')} covers foreign bank accounts. The ${h.a('countries-dual', 'country table')} compares Poland with the other routes open to Americans.</p>`;
    },
  },
});
