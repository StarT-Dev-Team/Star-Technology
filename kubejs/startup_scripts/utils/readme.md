# startup_scripts/utils/

Shared helpers and constants loaded at high priority, available to all other startup scripts via `global`.

## [helpers/](helpers/)

| File                                         | Description                                                                                                                                                                                                                                   |
| -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`const_loader.js`](helpers/const_loader.js) | Loads all Java class references used across startup scripts (`StarTRecipeModifiers`, `StarTPartAbility`, `BoostedPlasmaTurbine`, `StartSteamMulti`, threading classes, etc.). Loaded at priority 1,000,000 so it runs before everything else. |
| [`gt_helpers.js`](helpers/gt_helpers.js)     | GregTech utility functions (`global.getGtMaterial`, coil temperature display, multi-smelter parallel display, cracker overclock display, etc.).                                                                                               |
| [`ui_builder.js`](helpers/ui_builder.js)     | Helpers for constructing machine UI layouts programmatically.                                                                                                                                                                                 |

## [extras/](extras/)

| File                                                | Description                                                                                  |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| [`creative_tab.js`](extras/creative_tab.js)         | Modifies the GTCEu machine creative tab (e.g. removes fusion reactors from the default tab). |
| [`world_gen_layers.js`](extras/world_gen_layers.js) | Defines world generation layer registrations used by ore and fluid vein scripts.             |
