# Prompt structure

Each prompt follows: **format → subject → action → camera → light → style/mood → constraints**.

- Format: aspect ratio and shot size first, so the model frames correctly.
- One main action, described in order if there are steps.
- One named camera move (static, push-in, dolly back, orbit, crane up, track).
- Light and palette in plain words.
- Constraints last (e.g. "no text").

`aspect_ratio` and `duration` are suggested creative intent, not a claim that any specific model supports them.
`test_status` is `Untested` until the prompt is actually generated; then `model_tested` lists the model and date.
