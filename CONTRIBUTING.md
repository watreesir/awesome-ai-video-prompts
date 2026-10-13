# Contributing

1. Add one JSON file per prompt in `data/prompts/`, named `<id>.json`, with all required fields (see existing files).
2. Write original prompts only. Do not paste prompts or media from other collections without permission.
3. Keep `test_status: "Untested"` and `model_tested: []` unless you generated the clip yourself; then list model, settings and date.
4. Run `node scripts/build.mjs` and commit the regenerated README and site files. CI runs `--check`.
5. No promotional links inside prompt entries.
