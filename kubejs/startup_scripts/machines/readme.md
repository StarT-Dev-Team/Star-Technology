# startup_scripts/machines/

Registers all custom GregTech machines.

## Files & Folders

| Path | Description |
|---|---|
| [`custom_hatches.js`](custom_hatches.js) | Registers custom machine hatches (e.g. Absolute Parallel Hatches). |
| [`machine_io_changes.js`](machine_io_changes.js) | Modifies input/output hatch behaviour on existing GT machines. |
| [`machine_recipe_type_changes.js`](machine_recipe_type_changes.js) | Adjusts recipe type bindings for existing GT machines. |
| [`multiblocks/`](multiblocks/) | Multiblock machine definitions, split by category (see below). |
| [`single_blocks/`](single_blocks/) | Single-block machine definitions (composters, pulverizers, AE2 machines, barrels, etc.). |

## multiblocks/ subfolders

| Folder | Description |
|---|---|
| [`ae2/`](multiblocks/ae2/) | AE2-integrated multiblocks (e.g. Large ME Assembler). |
| [`intermediate_multiblocks/`](multiblocks/intermediate_multiblocks/) | Mid-tier multiblocks bridging early and late game. |
| [`ore_factories/`](multiblocks/ore%20factories/) | Ore processing multiblocks (Ore Factory tiers, Rock Filtrator, etc.). |
| [`power/`](multiblocks/power/) | Power generation multiblocks (solar arrays, plasma turbines, combustion modules, etc.). |
| [`primitives/`](multiblocks/primitives/) | Early-game primitive multiblocks (Kiln, Solid Blast Furnace, etc.). |
| [`resource_production/`](multiblocks/resource_production/) | Resource generation multiblocks (Greenhouse, Hydroponic Garden, Fishery, etc.). |
| [`stargate_related_multiblocks/`](multiblocks/stargate_related_multiblocks/) | Machines tied to Stargate progression (Gate Assembly, Dimensional Finder, etc.). |
| [`very_late_game_multis/`](multiblocks/very_late_game_multis/) | End-game and post-Stargate multiblocks. |
| [`deprecated/`](multiblocks/deprecated/) | Old multiblock definitions kept for reference; not loaded in current versions. |
| [`csg_helper.js`](csg_helper.js) | Helper for CSG construction. |
