export type TrialCategory =
  | 'cs2-presence'
  | 'non-cs2'
  | 'calibration'
  | 'catch';

export interface Trial {
  id: string;
  name: string;
  category: TrialCategory;
  expectedChange: boolean;
  imageA: string;
  imageB: string;
}

type ImageMap = Record<string, string>;

const cs2A = import.meta.glob('../trial-images/hard/trial*_a.png', {
  eager: true,
  import: 'default',
  query: '?url',
}) as ImageMap;
const cs2B = import.meta.glob('../trial-images/hard/trial*_b.png', {
  eager: true,
  import: 'default',
  query: '?url',
}) as ImageMap;

const easyCs2A = import.meta.glob('../trial-images/easy/trial*_a.png', {
  eager: true,
  import: 'default',
  query: '?url',
}) as ImageMap;
const easyCs2B = import.meta.glob('../trial-images/easy/trial*_b.png', {
  eager: true,
  import: 'default',
  query: '?url',
}) as ImageMap;

const calibrationA = import.meta.glob('../trial-images/callibration/trial*_a.png', {
  eager: true,
  import: 'default',
  query: '?url',
}) as ImageMap;
const calibrationB = import.meta.glob('../trial-images/callibration/trial*_b.png', {
  eager: true,
  import: 'default',
  query: '?url',
}) as ImageMap;

const numberFromPath = (path: string): number => {
  const match = path.match(/trial(\d+)_/);
  return match ? Number(match[1]) : 0;
};

const buildPairs = (
  aMap: ImageMap,
  bMap: ImageMap,
  category: TrialCategory,
  prefix: string,
): Trial[] => {
  const byNumber = new Map<number, { a?: string; b?: string }>();
  for (const [path, url] of Object.entries(aMap)) {
    const n = numberFromPath(path);
    const entry = byNumber.get(n) ?? {};
    entry.a = url;
    byNumber.set(n, entry);
  }
  for (const [path, url] of Object.entries(bMap)) {
    const n = numberFromPath(path);
    const entry = byNumber.get(n) ?? {};
    entry.b = url;
    byNumber.set(n, entry);
  }
  return [...byNumber.entries()]
    .filter(([, pair]) => pair.a && pair.b)
    .sort(([x], [y]) => x - y)
    .map(([n, pair]) => ({
      id: `${prefix}-${n}`,
      name: `${prefix} image ${n}`,
      category,
      expectedChange: true,
      imageA: pair.a!,
      imageB: pair.b!,
    }));
};


export const CALIBRATION_TRIALS: Trial[] = buildPairs(
  calibrationA,
  calibrationB,
  'calibration',
  'Calibration',
);

export const EASY_TRIALS: Trial[] = [
  ...buildPairs(easyCs2A, easyCs2B, 'cs2-presence', 'CS2'),
];

export const HARD_TRIALS: Trial[] = [
  ...buildPairs(cs2A, cs2B, 'cs2-presence', 'CS2'),
];

export const TRIALS = EASY_TRIALS;
