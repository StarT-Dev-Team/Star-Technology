# server_scripts/utils/

Shared utilities loaded at high priority, available to all server scripts via `global`.

## Root files

| File                               | Description                                                                                                                                      |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`calculator.js`](calculator.js)   | In-game chat calculator — type `=<expression>` in chat to evaluate GT recipe math (voltage, duration, EU/t). Supports `=help` for documentation. |
| [`fluid_veins.js`](fluid_veins.js) | GT fluid vein definitions for custom fluids.                                                                                                     |
| [`id_loader.js`](id_loader.js)     | Defines `global.id(id)` — shorthand that prefixes any ID with `start:`.                                                                          |
| [`loot.js`](loot.js)               | Custom loot table additions and modifications.                                                                                                   |
| [`ore_veins.js`](ore_veins.js)     | GT ore vein definitions for custom materials.                                                                                                    |
| [`tags.js`](tags.js)               | Item tag additions — adds custom circuit items to GT circuit tags, removes conflicting GT wood plank tags, and adds Komaru filament tags.        |
| [`tier_data.js`](tier_data.js)     | Central registry defining tier voltages, materials, components, and stats across all GregTech tiers. Loaded at priority 100,000.                 |

## dimensional/ subfolder

Scripts managing dimensional hazard systems (radiation, heat, etc.) applied when players enter specific dimensions or
areas.

| File                                   | Description                                                                                                        |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| [`armors.js`](dimensional/armors.js)   | Defines which armor pieces provide protection against dimensional hazards.                                         |
| [`buffs.js`](dimensional/buffs.js)     | Positive buff effects granted in certain dimensional contexts.                                                     |
| [`defense.js`](dimensional/defense.js) | Logic for calculating hazard resistance from equipped armor and items.                                             |
| [`effects.js`](dimensional/effects.js) | Applies dimensional effects (radiation, heat exhaustion, abyssal pull) to players based on location and equipment. |
| [`helpers.js`](dimensional/helpers.js) | Shared utility functions used across the dimensional scripts.                                                      |

## helpers/

| File                                                               | Description                                                                                                                                      |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`extended_recipe_builder.js`](helpers/extended_recipe_builder.js) | Extended Recipe Builder helper definitions for GT recipe construction. Loaded at priority 10,000.                                                |
| [`recipe_helpers.js`](helpers/recipe_helpers.js)                   | GT recipe helper functions: `global.getRecipeTier` and related utilities.                                                                        |
| [`tag_loader.js`](helpers/tag_loader.js)                           | Loads Java class references needed for tag manipulation (`ResourceLocation`, `Registries`, structure finders, etc.). Loaded at priority 100,000. |
| [`test.js`](helpers/test.js)                                       | Development and testing utility helpers (`global.test` namespace). Loaded at priority 10,000.                                                    |

## tools/

| File                                                             | Description                                                                                                  |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| [`info_dump.js`](tools/info_dump.js)                             | Debug utility — logs creative tab IDs and other registry info to console when enabled via its config object. |
| [`multiblock_pattern_tool.js`](tools/multiblock_pattern_tool.js) | In-game `/multiblock` command tool for inspecting and generating multiblock patterns.                        |
| [`recipe_dump.js`](tools/recipe_dump.js)                         | Utility for filtering and dumping recipes to JSON/logs.                                                      |
