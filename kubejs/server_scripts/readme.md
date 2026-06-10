# server_scripts/

Server-side scripts, reloaded with `/reload`.  
Handles recipe additions, recipe removals, tag modifications, loot tables, and other server events.

## Structure

| Path | Description |
|---|---|
| [`additions/`](additions/) | New recipe additions — multiblock recipes and progression material chains. |
| [`modifications/`](modifications/) | Targeted modifications to existing mod recipes (AE2, Thermal, Create, etc.). |
| [`systems/`](systems/) | Custom gameplay systems implemented via GT recipes (fusion, agriculture, gate-based crafting, etc.). |
| [`utils/`](utils/) | Tag additions, ore vein definitions, fluid vein definitions, loot table helpers, and utilities. |
| [`deprecated/`](deprecated/) | Old scripts kept for reference; not part of the active load. |
| [`utils/`](utils/) | Shared utility scripts (constants, helpers, tag loader, recipe helpers). |

## Root files

| File | Description |
|---|---|
| [`mass_removals.js`](mass_removals.js) | Bulk removal of recipes that are unnecessary, replaced or gated by Star Technology (Thermal, Create, Ex Nihilo, Flux Networks, etc.) |
