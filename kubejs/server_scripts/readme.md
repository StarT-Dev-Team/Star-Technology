# server_scripts/

Server-side scripts, reloaded with `/reload`.  
Handles recipe additions, recipe removals, tag modifications, loot tables, and other server events.

## Structure

| Path                               | Description                                                                                          |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------- |
| [`additions/`](additions/)         | New recipe additions — multiblock recipes, machines and parts, and progression material chains.      |
| [`modifications/`](modifications/) | Targeted modifications to existing mod recipes (AE2, Thermal, Create, etc.).                         |
| [`systems/`](systems/)             | Custom gameplay systems implemented via GT recipes (fusion, agriculture, gate-based crafting, etc.). |
| [`utils/`](utils/)                 | Shared utilities, tags, ore/fluid veins, dimensional hazards, calculator, and tools.                 |
| [`deprecated/`](deprecated/)       | Old scripts kept for reference; not part of the active load.                                         |

## Root files

| File                                   | Description                                                                                                                            |
| -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| [`item_hiding.js`](item_hiding.js)     | Hides redundant or conflicting items and recipes from JEI/EMI based on `config/item_hiding.json`.                                      |
| [`mass_removals.js`](mass_removals.js) | Bulk removal of recipes that are unnecessary, replaced, or gated by Star Technology (Thermal, Create, Ex Nihilo, Flux Networks, etc.). |
