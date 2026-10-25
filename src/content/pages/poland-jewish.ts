import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'poland-jewish',
  group: 'countries',
  order: 221,
  country: 'pl',
  tool: { kind: 'mini:pl-1968' },
  related: ['poland', 'documents', 'cost', 'second-passport', 'home'],
  sources: ['pl-act-2009', 'pl-act-1920', 'pl-act-1951', 'pl-consulate-usa'],
  en: {
    slug: 'polish-citizenship-by-descent/jewish-ancestry',
    nav: 'Polish citizenship with Jewish ancestry',
    card: 'Same law for every family: prewar emigrants, postwar deprivations, the 1968 departures and the restoration of citizenship lost before 1999.',
    title: 'Polish citizenship by descent with Jewish ancestry: 1968',
    description: 'Polish citizenship by descent for families with Jewish roots: prewar emigrants, 1951 deprivations, 1968 departures and restoring citizenship lost before 1999.',
    h1: 'Polish citizenship by descent for families with Jewish ancestry',
    intro: 'Say who in your family lost Polish citizenship and whether the next person in your line was born before or after: the tool shows confirmation or restoration.',
    resume: (h) => {
      const K = h.C('pl');
      return `Polish citizenship by descent works the same way for Jewish families as for any other: Polish law has no separate route by religion or origin. What differs is history, because many Jewish families left Poland at moments when the law was harsh. Three situations come up. Prewar emigrants who naturalized in the United States before ${K.cutoffs.act1951} usually lost citizenship under the ${h.src('pl-act-1920', '1920 Act')}, together with children then under 18. People who left after the war could be deprived of citizenship by decision under the ${h.src('pl-act-1951', '1951 Act')}, which breaks the line. And those who left in 1968 and the following years often lost citizenship when they emigrated. For anyone who personally lost it before January 1, ${K.cutoffs.restoreBefore}, article 38 of the ${h.src('pl-act-2009', '2009 Act')} restores it on request. Restoration helps that person; descendants born after the loss rely on the ordinary confirmation rules instead.`;
    },
    faqs: (h) => [
      { q: 'Is there a special Polish citizenship route for Holocaust survivors\' descendants?', a: 'No. Polish law has no route reserved for Jewish families or for descendants of survivors. The voivode applies the same confirmation rules to everyone: was each person in the line still Polish when the next was born? A survivor who never naturalized elsewhere before 1951 and was never deprived of citizenship can pass it on like anyone else.' },
      { q: 'My parents left Poland in 1968 on a one-way travel document. Am I Polish?', a: `It depends on your birth date. If you were born in Poland before your parents lost citizenship, you were born Polish, and the question is whether the loss covered you. If you were born abroad afterwards, you were not born Polish. Your parents can ask for restoration under article 38, but restoration does not reach back to you.` },
      { q: 'Who decides a restoration request and what does it cost?', a: 'The Minister of the Interior decides, on the application of the person who lost citizenship. It is a personal request: a child cannot file it for a parent who has died. The pages read for this site publish no fee or decision time for restoration, so check the current amounts with the Polish consulate before filing.' },
    ],
    body: (h) => {
      const K = h.C('pl');
      return `
<h2>Prewar emigrants and the 1920 Act</h2>
<p>A Jewish ancestor who left Poland between ${K.cutoffs.act1920} and the Second World War was usually a Polish citizen when leaving. What happened next decides the case. Under the 1920 Act, acquiring a foreign citizenship ended Polish citizenship, and article 13 extended the loss to the wife and to children under 18. If your grandfather became a US citizen in 1938 and your father was born in New York in 1940, your father was never Polish. If your father was born in 1925 and was already an adult at the oath, he kept it. The same filter applies to everyone, and the ${h.a('poland', 'main Polish page')} explains it with a table.</p>
<p>Ancestors who left before ${K.cutoffs.act1920}, from the Russian, Austrian or German partitions, raise a different problem: there was no Polish citizenship yet. Most of them never became Polish citizens, unless they returned to the new state.</p>
<h2>Survivors and postwar departures</h2>
<p>For a survivor who stayed in Poland after 1945 and left later, the 1951 Act is the reference. It allowed the state to deprive a Pole living abroad of citizenship, for example for leaving illegally after May 9, 1945, refusing to return when called, or evading military duty. A deprivation decision ends citizenship from that day, and a child born afterwards is not Polish through that parent. Deprivation required a decision, though: leaving alone did not do it. A survivor who emigrated legally, kept a Polish passport and naturalized in the US after ${K.cutoffs.act1951} without a Polish permit usually stayed Polish, and children born later were born Polish.</p>
<h2>The 1968 departures</h2>
<p>After the political campaign of March 1968, thousands of Polish Jews left the country. Many lost Polish citizenship when they emigrated, under the citizenship law of ${K.cutoffs.act1962}. Article 38 of the 2009 Act now restores citizenship to a person who lost it before January 1, ${K.cutoffs.restoreBefore} under article 13, 14 or 15 of the 1962 Act, or under the 1920 and 1951 Acts. The text says the citizenship "przywraca się", is restored, on that person's application. Exclusions concern voluntary service in Axis forces, Axis public office and acts against Poland.</p>
<p>For descendants, the key is the birth date. A child born in Poland before the parents lost citizenship was born Polish; the voivode then checks whether the loss extended to that child. A child born abroad after the loss was not born Polish, and the restoration of a parent does not change that. Children born after a parent's restoration are Polish at birth under the ordinary rule. A family with several branches may therefore end up with one restored parent, one child who needs a confirmation decision and another with no claim at all, so test each person separately.</p>
<h2>Records for Jewish lines</h2>
<p>The documents are those of any confirmation file: Polish birth and marriage records, a prewar passport or ID, a military booklet, then the US records of each generation with apostilles and sworn Polish translations, as the ${h.src('pl-consulate-usa', 'consulate')} lists. For 1968 emigrants, the travel document issued on departure is often the most useful piece. Civil records for prewar Jewish communities may sit in Polish state archives. The ${h.a('documents', 'document checklist')} covers the US side, and the ${h.a('cost', 'cost calculator')} estimates the total. The consular fee for a confirmation request is ${h.usd(K.fee.amount)}.</p>
<p>If Poland does not work for your family, the ${h.a('second-passport', 'overview of second citizenship routes')} compares other countries. You can also run your whole tree through the ${h.a('home', 'family tree checker')}.</p>`;
    },
  },
});
