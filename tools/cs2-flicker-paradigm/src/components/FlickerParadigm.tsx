import { FC, PointerEvent, useCallback, useEffect, useRef, useState } from 'react';
import { Trial, TrialCategory } from '../scenes';
import { Blank, Crosshair } from './Crosshair';

const IMAGE_MS = 240;
const SACCADE_MS = 80;
const FIXATION_MS = 1500;
const TRIAL_TIMEOUT_MS = 10_000;

type Phase = 'fixation' | 'trial';
type Frame = 'A' | 'blank1' | 'B' | 'blank2';

interface TrialResult {
  trialId: string;
  category: TrialCategory;
  expectedChange: boolean;
  detected: boolean;
  detectedMs: number | null;
  cycles: number;
}

interface Props {
  trial: Trial;
  trialIndex: number;
  totalTrials: number;
  onComplete: (result: TrialResult) => void;
  label?: string;
}

export const FlickerParadigm: FC<Props> = ({
  trial,
  trialIndex,
  totalTrials,
  onComplete,
  label,
}) => {
  const [phase, setPhase] = useState<Phase>('fixation');
  const [frame, setFrame] = useState<Frame>('A');

  const startTimeRef = useRef<number>(0);
  const cycleCountRef = useRef<number>(0);
  const frameTimerRef = useRef<number | null>(null);
  const deadlineTimerRef = useRef<number | null>(null);
  const submittedRef = useRef<boolean>(false);

  const clearFrameTimer = () => {
    if (frameTimerRef.current !== null) {
      window.clearTimeout(frameTimerRef.current);
      frameTimerRef.current = null;
    }
  };

  const clearDeadlineTimer = () => {
    if (deadlineTimerRef.current !== null) {
      window.clearTimeout(deadlineTimerRef.current);
      deadlineTimerRef.current = null;
    }
  };

  const finishTrial = useCallback(
    (detected: boolean) => {
      if (submittedRef.current) return;
      submittedRef.current = true;
      clearFrameTimer();
      clearDeadlineTimer();
      const detectedMs = detected
        ? Math.round(performance.now() - startTimeRef.current)
        : null;
      onComplete({
        trialId: trial.id,
        category: trial.category,
        expectedChange: trial.expectedChange,
        detected,
        detectedMs,
        cycles: cycleCountRef.current,
      });
    },
    [trial.id, trial.category, trial.expectedChange, onComplete],
  );

  useEffect(() => {
    submittedRef.current = false;
    setPhase('fixation');
    setFrame('A');
    cycleCountRef.current = 0;

    frameTimerRef.current = window.setTimeout(() => {
      setPhase('trial');
      startTimeRef.current = performance.now();
      setFrame('A');
      deadlineTimerRef.current = window.setTimeout(() => {
        finishTrial(false);
      }, TRIAL_TIMEOUT_MS);
    }, FIXATION_MS);

    return () => {
      clearFrameTimer();
      clearDeadlineTimer();
    };
  }, [trial.id, trialIndex, finishTrial]);

  useEffect(() => {
    if (phase !== 'trial') return;

    const next: Record<Frame, { f: Frame; ms: number }> = {
      A: { f: 'blank1', ms: IMAGE_MS },
      blank1: { f: 'B', ms: SACCADE_MS },
      B: { f: 'blank2', ms: IMAGE_MS },
      blank2: { f: 'A', ms: SACCADE_MS },
    };

    const step = next[frame];
    frameTimerRef.current = window.setTimeout(() => {
      if (frame === 'blank2') cycleCountRef.current += 1;
      setFrame(step.f);
    }, step.ms);

    return clearFrameTimer;
  }, [phase, frame]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.code !== 'Space') return;
      if (phase !== 'trial') return;
      e.preventDefault();
      finishTrial(true);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [phase, finishTrial]);

  const onTap = (e: PointerEvent<HTMLDivElement>) => {
    if (phase !== 'trial') return;
    e.preventDefault();
    finishTrial(true);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-2">
      <div className="text-neutral-300 text-sm tracking-wide text-center">
        <span className="text-neutral-500">
          {label ? `${label} — ` : ''}Image {trialIndex + 1} of {totalTrials}
        </span>
        <span className="mx-3 text-neutral-600">·</span>
        <span>
          {phase === 'fixation'
            ? 'Get ready…'
            : 'Press SPACE or tap the image the moment you spot a change.'}
        </span>
      </div>

      <div
        className="relative aspect-[1680/1050] bg-neutral-700 rounded shadow-lg overflow-hidden cursor-pointer select-none touch-manipulation"
        style={{
          width: 'min(100%, 1680px, calc((100vh - 100px) * 1680 / 1050))',
        }}
        onPointerDown={onTap}
        role="button"
        tabIndex={-1}
        aria-label="Tap when you see a change"
      >
        <img
          src={trial.imageA}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ visibility: phase === 'trial' && frame === 'A' ? 'visible' : 'hidden' }}
          draggable={false}
        />
        <img
          src={trial.imageB}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ visibility: phase === 'trial' && frame === 'B' ? 'visible' : 'hidden' }}
          draggable={false}
        />
        {phase === 'fixation' && <Crosshair />}
        {phase === 'trial' && (frame === 'blank1' || frame === 'blank2') && <Blank />}
      </div>
    </div>
  );
};
