/**
 * Step timelines (RECETTE §17.6): one file per procedure in `lib/frises/<preset>.ts`, default export
 * { steps, start, caption }. Every duration comes from params-2026.json sources; a step without a
 * published time is `unknown`.
 */
import type { FriseStep, FriseLabels } from '../components/ui/Frise';
interface Preset { steps: FriseStep[]; start?: string; caption: string; startLabel?: string }
const mods = import.meta.glob<{ default: Preset }>('./frises/*.ts', { eager: true });
const PRESETS: Record<string, Preset> = Object.fromEntries(Object.entries(mods).map(([f, m]) => [f.split('/').pop()!.replace(/\.ts$/, ''), m.default]));
const get = (p: string) => { const x = PRESETS[p]; if (!x) throw new Error(`Unknown timeline: ${p}`); return x; };
export const steps = (p: string) => get(p).steps;
export const friseStart = (p: string) => get(p).start ?? '2026-11-02';
export const labels = (p: string): FriseLabels => ({
  start: get(p).startLabel ?? 'Day you send the application', end: 'Expected end', between: 'between', and: 'and', today: 'Today',
  done: 'Done', current: 'In progress', upcoming: 'Coming', day: 'day', days: 'days', week: 'week', weeks: 'weeks', month: 'month', months: 'months',
  milestone: 'milestone', caption: get(p).caption, unknown: 'no published time', endUnknown: 'no end date can be estimated',
});
