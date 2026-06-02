# CS2 Flicker Paradigm

Change-blindness test on Counter-Strike 2 screenshots, using the classic flicker paradigm (Rensink, O'Regan & Clark, 1997).

## Paradigm

1. **Calibration** — 5 shuffled non-CS2 image pairs run first to establish a baseline reaction time.
2. **Fixation** — gray field with a central crosshair to anchor gaze.
3. **Flicker loop** — image A (240 ms) → blank (80 ms) → image B (240 ms) → blank (80 ms), repeating until the participant responds.
4. **Response** — press Space or tap the image the moment a change is detected; reaction time and A/B cycle count are recorded. A trial times out after 10 seconds.

The blank interval disrupts low-level motion cues, forcing the viewer to rely on attention to detect the change.

## Trial types

| Type | Description |
|------|-------------|
| Calibration | 5 non-CS2 image pairs, run before the main experiment |
| Easy | 11 CS2 screenshot pairs with relatively obvious changes |
| Hard | 11 CS2 screenshot pairs with subtle, harder-to-spot changes |
| Catch | No-change trials (same image flickered) to measure false alarm rate |

Catch trials are shuffled into the main session; the experiment warns the participant if their false alarm rate is high.

## Results

After the session the participant sees:

- **Full results** — detected count, missed count, mean/fastest/slowest reaction times, catch trial accuracy
- **Calibration results** — detected count and mean reaction time for the calibration phase
- **Share text** — a copyable summary including the calibration mean

## Run locally

```bash
npm install
npm run dev
```

## Deploy

Built as part of the Psychology Notes site via Docker. The Dockerfile runs `npm run build` and serves the `dist/` output under `/tools/cs2-flicker-paradigm/`.
