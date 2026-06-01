# server_scripts/common/utils/

Shared server-side utilities for tags, world generation, loot, and dimensional hazards.

## Root files

| File | Description |
|---|---|
| [`tags.js`](tags.js) | Item tag additions — adds custom circuit items to GT circuit tags, removes conflicting GT wood plank tags, and adds Komaru filament tags. |
| [`ore_veins.js`](ore_veins.js) | GT ore vein definitions for custom materials. |
| [`fluid_veins.js`](fluid_veins.js) | GT fluid vein definitions for custom fluids. |
| [`loot.js`](loot.js) | Custom loot table additions and modifications. |

## dimensional/ subfolder

Scripts managing dimensional hazard systems (radiation, heat, etc.) applied when players enter specific dimensions or areas.

| File | Description |
|---|---|
| [`armors.js`](dimensional/armors.js) | Defines which armor pieces provide protection against dimensional hazards. |
| [`buffs.js`](dimensional/buffs.js) | Positive buff effects granted in certain dimensional contexts. |
| [`defense.js`](dimensional/defense.js) | Logic for calculating hazard resistance from equipped armor and items. |
| [`effects.js`](dimensional/effects.js) | Applies dimensional effects (radiation, heat exhaustion, abyssal pull) to players based on location and equipment. |
| [`helpers.js`](dimensional/helpers.js) | Shared utility functions used across the dimensional scripts. |
