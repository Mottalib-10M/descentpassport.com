/** Formatting for the English (US) pages (RECETTE §4.1): integers, US separators, foreign currencies with their own symbol. */
export type L = 'en';
const TAG = 'en-US';
export const langTag = (_lang: L = 'en') => TAG;
const cache = new Map<string, Intl.NumberFormat>();
function nf(o: Intl.NumberFormatOptions) {
  const k = JSON.stringify(o);
  if (!cache.has(k)) cache.set(k, new Intl.NumberFormat(TAG, o));
  return cache.get(k)!;
}
export const formatNumberL = (v: number, _lang: L = 'en', d = 0) => nf({ minimumFractionDigits: d, maximumFractionDigits: d }).format(v);
/** "$75", "€600", "£1,630", "CA$75", "PLN 58": cents only when the official amount has them. */
export const money = (v: number, cur: string, _lang: L = 'en') => {
  const cents = Math.round(v * 100) % 100 !== 0;
  return nf({ style: 'currency', currency: cur, currencyDisplay: 'symbol', minimumFractionDigits: cents ? 2 : 0, maximumFractionDigits: cents ? 2 : 0 })
    .format(v).replace(/^([A-Z]{3}) /, '$1 ');
};
export const pct = (v: number, _lang: L = 'en', d = 0) => `${formatNumberL(v * 100, 'en', d)}%`;
/** "2026-10-25" → "October 25, 2026" (UTC, never shifts a day). */
export const dateL = (iso: string, _lang: L = 'en') => new Date(`${iso}T00:00:00Z`).toLocaleDateString(TAG, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
