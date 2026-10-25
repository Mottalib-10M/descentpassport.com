/**
 * Paperwork cost of a citizenship by descent file, US side in dollars (certified copies, apostilles,
 * naturalization proof, translations) and the country's own fee in its currency. Defaults are official
 * figures: California vital records (CDPH, from January 1, 2026), California Secretary of State apostille,
 * State Department authentication (22 CFR 22.1), NARA and USCIS fees (Form G-1055).
 */
import P from '../../data/params-2026.json';

export type NatProof = 'nara' | 'cne' | 'none';
export interface CostIn {
  country: string; gen: number; deaths: number; extra: number;
  copyPrice: number | null; apostille: number; translationPerDoc: number; natProof: NatProof; adults: number;
}
export interface CostOut {
  births: number; marriages: number; deaths: number; records: number; copies: number;
  apostilled: number; apostilleCost: number; natCost: number; translated: number; translationCost: number;
  usTotal: number; fee: number | null; feeCur: string; feeUsd: number | null; needApostille: boolean | null; needTranslation: boolean | null;
}
const R = P.us.records;
export function cost(i: CostIn): CostOut {
  const k = (P.countries as Record<string, any>)[i.country];
  const gen = Math.max(1, Math.min(3, Math.round(i.gen)));
  const births = gen;                       // everyone born in the US in the line, you included
  const marriages = gen;                    // the ancestor's marriage and each one below, yours excluded
  const deaths = Math.max(0, Math.min(gen, Math.round(i.deaths)));
  const extra = Math.max(0, Math.round(i.extra));
  const records = births + marriages + deaths + extra;
  const copies = i.copyPrice === null
    ? births * R.californiaBirth.fee + marriages * R.californiaMarriage.fee + deaths * R.californiaDeath.fee + extra * R.californiaBirth.fee
    : records * i.copyPrice;
  const needApostille: boolean | null = k.docs?.apostille ?? null;
  const needTranslation: boolean | null = k.docs?.translation ?? null;
  const fedDoc = i.natProof === 'cne' ? 1 : 0;   // a USCIS certificate is a federal document
  const apostilled = needApostille === false ? 0 : records;
  const apostilleCost = apostilled * i.apostille + (needApostille === false ? 0 : fedDoc * P.us.apostille.federal.fee);
  const natCost = i.natProof === 'nara' ? R.naraNaturalization.fee : i.natProof === 'cne' ? R.uscisNonExistenceOnline.fee : 0;
  const translated = needTranslation === false ? 0 : records + fedDoc + (i.natProof === 'nara' ? 1 : 0);
  const translationCost = translated * i.translationPerDoc;
  const adults = Math.max(1, Math.round(i.adults));
  const fee = k.fee.amount === null ? null : k.fee.amount * adults;
  const feeUsd = k.usdFee ? k.usdFee.amount * adults : k.fee.cur === 'USD' && fee !== null ? fee : null;
  const usTotal = copies + apostilleCost + natCost + translationCost + (k.fee.cur === 'USD' && fee !== null ? fee : 0) + (k.usdFee ? feeUsd! : 0);
  return { births, marriages, deaths, records, copies, apostilled, apostilleCost, natCost, translated, translationCost, usTotal, fee, feeCur: k.fee.cur, feeUsd, needApostille, needTranslation };
}
