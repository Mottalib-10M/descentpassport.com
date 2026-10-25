import P from '../../data/params-2026.json';
const S = P.sources as Record<string, { url: string }>;
export default {
  caption: 'An Italian recognition file at a US consulate, from the appointment to the comune: only the decision has a legal time limit.',
  startLabel: 'Day of your consular appointment',
  steps: [
    { id: 'file', title: 'File mailed on the appointment day', detail: 'Complete file with the fee by money order (New York, San Francisco).', minDays: 0, maxDays: 0, source: { label: 'Consulate of New York', href: S['it-cons-ny-iure'].url } },
    { id: 'decision', title: 'Decision within the legal limit', detail: '730 days for a consular recognition (36 months for adult files under Law 11/2026).', minDays: 730, maxDays: 730, source: { label: 'Consulate of Sydney, legal limit', href: S['it-cons-sydney'].url } },
    { id: 'comune', title: 'Records sent to the comune', detail: 'The consulate asks the Italian town to transcribe your birth; no time is published.', minDays: -1, maxDays: -1, unknown: true },
  ],
};
