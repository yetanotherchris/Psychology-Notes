import { useMemo, useState } from 'react';
import { CALIBRATION_TRIALS, EASY_TRIALS, HARD_TRIALS, Trial, TrialCategory } from './scenes';
import { FlickerParadigm } from './components/FlickerParadigm';

interface TrialResult {
  trialId: string;
  category: TrialCategory;
  expectedChange: boolean;
  detected: boolean;
  detectedMs: number | null;
  cycles: number;
}

type AppPhase = 'intro' | 'difficulty' | 'calibration' | 'running' | 'summary';
type Difficulty = 'easy' | 'hard';

const CATCH_COUNT = 4;

const shuffle = <T,>(arr: T[]): T[] => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const buildSession = (trials: Trial[], catchCount: number): Trial[] => {
  const ordered = shuffle(trials);
  const imagePool = trials.map((t) => ({ sourceId: t.id, image: t.imageA }));

  const totalLength = ordered.length + catchCount;
  const catchSlots = new Set(
    shuffle(Array.from({ length: totalLength }, (_, i) => i)).slice(
      0,
      catchCount,
    ),
  );

  // First pass: place real trials in non-catch slots so we know the
  // neighbouring real trials before we choose each catch image.
  type Slot = { kind: 'real'; trial: Trial } | { kind: 'catch' };
  const slots: Slot[] = [];
  let realIdx = 0;
  for (let i = 0; i < totalLength; i++) {
    if (catchSlots.has(i)) {
      slots.push({ kind: 'catch' });
    } else {
      slots.push({ kind: 'real', trial: ordered[realIdx++] });
    }
  }

  // Second pass: assign catch images, forbidding the source trial of any
  // immediate neighbour so e.g. trial5_a.png never appears next to trial5.
  const usedCatchImages = new Set<string>();
  let catchIdx = 0;
  for (let i = 0; i < totalLength; i++) {
    if (slots[i].kind !== 'catch') continue;
    const forbidden = new Set<string>();
    const prev = slots[i - 1];
    if (prev?.kind === 'real') forbidden.add(prev.trial.id);
    const next = slots[i + 1];
    if (next?.kind === 'real') forbidden.add(next.trial.id);

    const shuffled = shuffle(imagePool);
    const pick =
      shuffled.find(
        (p) => !forbidden.has(p.sourceId) && !usedCatchImages.has(p.image),
      ) ??
      shuffled.find((p) => !forbidden.has(p.sourceId)) ??
      shuffled[0];
    usedCatchImages.add(pick.image);
    slots[i] = {
      kind: 'real',
      trial: {
        id: `catch-${catchIdx}`,
        name: `Catch ${catchIdx + 1}`,
        category: 'catch',
        expectedChange: false,
        imageA: pick.image,
        imageB: pick.image,
      },
    };
    catchIdx++;
  }

  return slots.map((s) => (s as { kind: 'real'; trial: Trial }).trial);
};

export default function App() {
  const [phase, setPhase] = useState<AppPhase>('intro');
  const [trialIndex, setTrialIndex] = useState(0);
  const [results, setResults] = useState<TrialResult[]>([]);
  const [calibrationResults, setCalibrationResults] = useState<TrialResult[]>([]);
  const [calibrationOrder, setCalibrationOrder] = useState<Trial[]>([]);
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [breakdownOpen, setBreakdownOpen] = useState(false);
  const [psychOpen, setPsychOpen] = useState(false);
  const [order, setOrder] = useState<Trial[]>(() =>
    buildSession(EASY_TRIALS, CATCH_COUNT),
  );

  const trial = order[trialIndex];

  const start = (d: Difficulty) => {
    const pool = d === 'easy' ? EASY_TRIALS : HARD_TRIALS;
    setDifficulty(d);
    setOrder(buildSession(pool, CATCH_COUNT));
    setCalibrationOrder(shuffle(CALIBRATION_TRIALS));
    setTrialIndex(0);
    setResults([]);
    setCalibrationResults([]);
    setBreakdownOpen(false);
    setPsychOpen(false);
    setPhase('calibration');
  };

  const handleCalibrationComplete = (r: TrialResult) => {
    setCalibrationResults((prev) => {
      const updated = [...prev, r];
      if (updated.length < calibrationOrder.length) {
        setTrialIndex(updated.length);
      } else {
        setTrialIndex(0);
        setPhase('running');
      }
      return updated;
    });
  };

  const handleComplete = (r: TrialResult) => {
    setResults((prev) => [...prev, r]);
    if (trialIndex + 1 < order.length) {
      setTrialIndex((i) => i + 1);
    } else {
      setPhase('summary');
    }
  };

  const stats = useMemo(() => {
    const real = results.filter((r) => r.expectedChange);
    const catches = results.filter((r) => !r.expectedChange);
    const detected = real.filter((r) => r.detected && r.detectedMs !== null);
    const meanMs =
      detected.length > 0
        ? detected.reduce((s, r) => s + (r.detectedMs ?? 0), 0) / detected.length
        : 0;
    const fastest = detected.reduce(
      (m, r) => (r.detectedMs! < m ? r.detectedMs! : m),
      Number.POSITIVE_INFINITY,
    );
    const slowest = detected.reduce(
      (m, r) => (r.detectedMs! > m ? r.detectedMs! : m),
      0,
    );
    const falseAlarms = catches.filter((r) => r.detected).length;
    return {
      realCount: real.length,
      detectedCount: detected.length,
      missedCount: real.length - detected.length,
      meanMs,
      fastestMs: detected.length > 0 ? fastest : 0,
      slowestMs: slowest,
      catchCount: catches.length,
      falseAlarms,
    };
  }, [results]);

  const calibrationStats = useMemo(() => {
    const detected = calibrationResults.filter((r) => r.detected && r.detectedMs !== null);
    const meanMs =
      detected.length > 0
        ? detected.reduce((s, r) => s + (r.detectedMs ?? 0), 0) / detected.length
        : 0;
    return {
      total: calibrationResults.length,
      detectedCount: detected.length,
      meanMs,
    };
  }, [calibrationResults]);

  const fmtSec = (ms: number) => `${(ms / 1000).toFixed(2)}s`;

  const shareText = useMemo(() => {
    const lines: string[] = [];
    lines.push(`CS2 Change Blindness - results (${difficulty} mode)`);
    lines.push('');
    lines.push(`Detected:      ${stats.detectedCount} / ${stats.realCount}`);
    lines.push(`Missed:        ${stats.missedCount}`);
    if (stats.detectedCount > 0) {
      lines.push(`Mean reaction: ${fmtSec(stats.meanMs)}`);
      lines.push(`Fastest:       ${fmtSec(stats.fastestMs)}`);
      lines.push(`Slowest:       ${fmtSec(stats.slowestMs)}`);
    }
    lines.push(
      `No change:     ${stats.catchCount - stats.falseAlarms} / ${stats.catchCount} correct`,
    );
    if (calibrationStats.detectedCount > 0) {
      lines.push(`Calibration:   ${fmtSec(calibrationStats.meanMs)} mean`);
    }
    return lines.join('\n');
  }, [stats, difficulty, calibrationStats]);

  const [copied, setCopied] = useState(false);
  const copyResults = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const isRunning = phase === 'running';

  return (
    <div
      className={`min-h-screen w-full bg-neutral-900 text-neutral-100 flex items-center justify-center ${
        isRunning ? 'p-2' : 'p-6'
      }`}
    >
      <div className={`w-full ${isRunning ? '' : 'max-w-5xl'}`}>
        {!isRunning && (
          <header className="mb-6 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">CS2 Change blindness</h1>
            <p className="text-neutral-400 text-sm mt-1">
              Flicker Paradigm test using Counter-Strike 2 scenes
            </p>
          </header>
        )}

        {phase === 'intro' && (
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="bg-neutral-800 rounded-lg p-8 space-y-4">
              <h2 className="text-3xl font-semibold">Instructions</h2>
              <p className="text-lg font-bold text-amber-300">
                ⚠️ Photosensitive epilepsy warning - Do NOT take part if you
                have epilepsy, a history of seizures, or any photosensitive
                condition.
              </p>
              <ul className="text-lg text-neutral-200 space-y-3 list-disc list-inside">
                <li>
                  Press{' '}
                  <kbd className="px-1.5 py-0.5 rounded bg-neutral-700 text-neutral-100 text-base">
                    SPACE
                  </kbd>{' '}
                  (tap the image on mobile/iPad) the moment you notice something change.
                </li>
                <li>Some images won't have any change at all - only respond if you actually see one.</li>
                <li>The first few images are calibration images.</li>
                <li>You have 10 seconds per image before it moves on automatically.</li>
                <li>The whole experiment takes about 2-3 minutes.</li>
              </ul>
              <button
                onClick={() => setPhase('difficulty')}
                className="w-full mt-2 px-4 py-3 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-medium"
              >
                I understand - continue
              </button>
            </div>
          </div>
        )}

        {phase === 'difficulty' && (
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="bg-neutral-800 rounded-lg p-8 space-y-6">
              <h2 className="text-xl font-semibold">Choose difficulty</h2>
              <p className="text-neutral-300">
                Easy mode features more obvious changes that most CS players will spot relatively quickly.
                Hard mode uses subtle, obscure differences - more experienced players will likely find these faster.
              </p>
              <p className="text-neutral-300">
                If you haven't tried this before, or you're on mobile or iPad, start with easy mode.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => start('easy')}
                  className="px-4 py-4 rounded text-white font-semibold text-lg"
                  style={{ backgroundColor: '#89BDE9' }}
                >
                  ez mode
                </button>
                <button
                  onClick={() => start('hard')}
                  className="px-4 py-4 rounded text-white font-semibold text-lg"
                  style={{ backgroundColor: '#F32728' }}
                >
                  hard mode
                </button>
              </div>
            </div>
          </div>
        )}

        {phase === 'calibration' && calibrationOrder[trialIndex] && (
          <FlickerParadigm
            key={`cal-${calibrationOrder[trialIndex].id}-${trialIndex}`}
            trial={calibrationOrder[trialIndex]}
            trialIndex={trialIndex}
            totalTrials={calibrationOrder.length}
            onComplete={handleCalibrationComplete}
            label="Calibration"
          />
        )}

        {phase === 'running' && trial && (
          <FlickerParadigm
            key={`${trial.id}-${trialIndex}`}
            trial={trial}
            trialIndex={trialIndex}
            totalTrials={order.length}
            onComplete={handleComplete}
          />
        )}

        {phase === 'summary' && (
          <div className="bg-neutral-800 rounded-lg p-8 max-w-2xl mx-auto space-y-5">
            <h2 className="text-lg font-semibold">
              Your performance - <span className="text-neutral-400 font-normal">{difficulty} mode</span>
            </h2>

            <div className="bg-neutral-900 rounded p-4 space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                Full results
              </h3>

              {stats.falseAlarms === 1 && (
                <div className="rounded border border-yellow-600 bg-yellow-600/10 p-3 text-sm text-yellow-200">
                  On 1 of the {stats.catchCount} images that had no change, you detected a change.
                  Try to only press SPACE when you're certain something has changed.
                </div>
              )}
              {stats.falseAlarms >= 2 && (
                <div className="rounded border border-red-600 bg-red-600/10 p-3 text-sm text-red-200">
                  On {stats.falseAlarms} of the {stats.catchCount} images that had no change, you detected a change.
                  The results won't be reliable - please re-run the test and only press SPACE when you're certain something has changed.
                </div>
              )}

              <div className="grid grid-cols-2 gap-3 text-sm">
                <Stat label="Detected" value={`${stats.detectedCount} / ${stats.realCount}`} />
                <Stat label="Missed" value={`${stats.missedCount}`} />
                <Stat
                  label="Mean reaction"
                  value={stats.detectedCount > 0 ? fmtSec(stats.meanMs) : '-'}
                />
                <Stat
                  label="Fastest"
                  value={stats.detectedCount > 0 ? fmtSec(stats.fastestMs) : '-'}
                />
                <Stat
                  label="Slowest"
                  value={stats.detectedCount > 0 ? fmtSec(stats.slowestMs) : '-'}
                />
                <Stat
                  label="Images without a change"
                  value={`${stats.catchCount - stats.falseAlarms} / ${stats.catchCount} correct`}
                />
              </div>
            </div>

            {calibrationStats.total > 0 && (
              <div className="bg-neutral-900 rounded p-4 space-y-2">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                  Calibration results ({calibrationStats.total} non-CS2 images)
                </h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <Stat
                    label="Detected"
                    value={`${calibrationStats.detectedCount} / ${calibrationStats.total}`}
                  />
                  <Stat
                    label="Mean reaction"
                    value={calibrationStats.detectedCount > 0 ? fmtSec(calibrationStats.meanMs) : '-'}
                  />
                </div>
              </div>
            )}

            {stats.falseAlarms === 0 && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold text-neutral-200">
                  Share your results
                </h3>
                <button
                  onClick={copyResults}
                  className="text-xs px-3 py-1.5 rounded bg-neutral-700 hover:bg-neutral-600 text-neutral-100"
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <textarea
                readOnly
                onFocus={(e) => e.currentTarget.select()}
                value={shareText}
                rows={stats.detectedCount > 0 ? 10 : 7}
                className="w-full font-mono text-xs bg-neutral-900 border border-emerald-500 rounded p-3 text-neutral-200 resize-none focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
            </div>
            )}

            <hr className="border-neutral-700" />

            <div>
              <button
                onClick={() => setPsychOpen((o) => !o)}
                className="flex items-center justify-between w-full text-left group"
              >
                <h3 className="text-sm font-semibold text-neutral-200">
                  In depth - the psychology behind this test
                </h3>
                <span className="text-neutral-500 text-xs group-hover:text-neutral-300 transition-colors">
                  {psychOpen ? '▲ hide' : '▼ show'}
                </span>
              </button>
              {psychOpen && (
                <div className="mt-3 text-sm text-neutral-300 space-y-3">
                  <p>
                    The flicker paradigm was introduced by{' '}
                    <a
                      href="https://psycnet.apa.org/doi/10.1111/j.1467-9280.1997.tb00427.x"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 underline hover:text-emerald-300"
                    >
                      Rensink, O'Regan & Clark (1997)
                    </a>{' '}
                    as a way to study why we miss large, obvious changes in visual scenes.
                    Unless you're staring at a fixed point, your brain takes roughly 240ms snapshots of the world,
                    each separated by a ~30ms blank called a saccade.
                  </p>
                  <p>
                    <span className="text-neutral-100 font-medium">Saccades.</span>{' '}
                    Your brain takes a snapshot of the scene roughly every 200-300ms - this is when you actually process what you're looking at.
                    Between each fixation, your vision goes blank for around 30ms, roughly 3-4 times per second - these blanks are known as saccades. During each blank, your brain suppresses visual signals to prevent you
                    seeing a blurred streak. This suppression means you're effectively not seeing for a surprisingly large
                    portion of your waking day - some estimates put it at around 40% of visual time.
                  </p>
                  <p>
                    <span className="text-neutral-100 font-medium">What the flicker does.</span>{' '}
                    The blank grey screen between each CS2 map image mimics the saccades. Without it, any difference between the two images would register as motion and you'd spot it immediately.
                  </p>
                  <p>
                    <span className="text-neutral-100 font-medium">What affects detection speed.</span>{' '}
                    Rensink et al. found that changes to whatever you consider most important in the scene are noticed fastest - in CS2, that's the enemy players. Related research also shows that changes which seem out
                    of place - things that don't belong in the scene - tend to be caught faster.
                  </p>
                </div>
              )}
            </div>

            <hr className="border-neutral-700" />

            <div>
              <button
                onClick={() => setBreakdownOpen((o) => !o)}
                className="flex items-center justify-between w-full text-left group"
              >
                <h3 className="text-sm font-semibold text-neutral-200">
                  In depth - per-image breakdown
                </h3>
                <span className="text-neutral-500 text-xs group-hover:text-neutral-300 transition-colors">
                  {breakdownOpen ? '▲ hide' : '▼ show'}
                </span>
              </button>
              {breakdownOpen && (
                <ul className="mt-3 text-sm text-neutral-300 space-y-1">
                  {results.map((r, i) => {
                    const t = order[i];
                    const isCatch = !r.expectedChange;
                    return (
                      <li
                        key={i}
                        className="flex justify-between border-b border-neutral-700 py-2"
                      >
                        <span>
                          {i + 1}. {isCatch ? 'No-change image' : t.name}
                        </span>
                        <span className="tabular-nums">
                          {isCatch
                            ? r.detected
                              ? 'change detected (no change present)'
                              : 'correct'
                            : r.detected && r.detectedMs !== null
                            ? `${fmtSec(r.detectedMs)} · ${r.cycles} cycles`
                            : 'no response'}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            <button
              onClick={() => setPhase('difficulty')}
              className="w-full mt-2 px-4 py-3 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-medium"
            >
              Run again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div className="bg-neutral-900 rounded p-3">
    <div className="text-neutral-400 text-xs uppercase tracking-wide">{label}</div>
    <div className="text-emerald-400 font-medium text-base mt-1 tabular-nums">{value}</div>
  </div>
);
