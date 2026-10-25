/** FBAR (FinCEN Form 114) and Form 8938 (FATCA) tests, thresholds read from params-2026.json (IRS, FinCEN). */
import P from '../../data/params-2026.json';
export type Filing = 'single' | 'joint' | 'separate';
export interface TaxIn { peakAccounts: number; endAssets: number; peakAssets: number; abroad: boolean; filing: Filing }
export interface TaxOut { fbar: boolean; fbarMargin: number; f8938: boolean; endLimit: number; anyLimit: number }
export function fatcaLimits(abroad: boolean, filing: Filing) {
  const t = P.us.fatca8938.thresholds.find((x) => x.abroad === abroad && x.filing === (filing === 'joint' ? 'joint' : 'single'))!;
  return { end: t.endOfYear, any: t.anyTime };
}
export function taxCheck(i: TaxIn): TaxOut {
  const lim = fatcaLimits(i.abroad, i.filing);
  const fbar = i.peakAccounts > P.us.fbar.threshold;
  const f8938 = i.endAssets > lim.end || Math.max(i.peakAssets, i.endAssets) > lim.any;
  return { fbar, fbarMargin: i.peakAccounts - P.us.fbar.threshold, f8938, endLimit: lim.end, anyLimit: lim.any };
}
