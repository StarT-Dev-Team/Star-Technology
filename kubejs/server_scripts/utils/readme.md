# server_scripts/utils/

Shared utilities loaded at high priority, available to all server scripts via `global`.

## Root files

| File | Description |
|---|---|
| [`id_loader.js`](id_loader.js) | Defines `global.id(id)` — shorthand that prefixes any ID with `start:`. |
| [`calculator.js`](calculator.js) | In-game chat calculator — type `=<expression>` in chat to evaluate GT recipe math (voltage, duration, EU/t). Supports `=help` for documentation. |
| [`info_dump.js`](info_dump.js) | Debug utility — logs creative tab IDs and other registry info to console when enabled via its config object. |

## helpers/

| File | Description |
|---|---|
| [`const_loader.js`](helpers/const_loader.js) | Loads Java class references needed in server scripts (StarT machine classes, fluid ingredient, structure locators, etc.). Loaded at priority 100,000. |
| [`packmode_helpers.js`](helpers/packmode_helpers.js) | Server-side packmode utility functions. |
| [`recipe_helpers.js`](helpers/recipe_helpers.js) | GT recipe helper functions: `global.calculateRecyclingDuration` and related recycling math utilities. |
| [`tag_loader.js`](helpers/tag_loader.js) | Loads Java class references needed for tag manipulation (`ResourceLocation`, `Registries`, structure finders, etc.). Loaded at priority 100,000. |
