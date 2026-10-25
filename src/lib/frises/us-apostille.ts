import P from '../../data/params-2026.json';
const S = P.sources as Record<string, { url: string }>;
const A = P.us.apostille.federal;
export default {
  caption: 'Getting a federal document apostilled by mail: the State Department publishes its processing time; state offices and translators set their own.',
  startLabel: 'Day the State Department receives your request',
  steps: [
    { id: 'fed', title: 'Federal apostille by mail', detail: `USCIS or National Archives letter, form DS-4194, $${A.fee} per document.`, minDays: 0, maxDays: A.mailWeeks * 7, source: { label: 'State Department, Office of Authentications', href: S['us-dos-authentications'].url } },
    { id: 'state', title: 'State apostilles on vital records', detail: 'Each state sets its own time and fee.', minDays: -1, maxDays: -1, unknown: true },
    { id: 'tr', title: 'Translations, if the country wants them', detail: 'Done after the apostille, which is translated too.', minDays: -1, maxDays: -1, unknown: true },
  ],
};
