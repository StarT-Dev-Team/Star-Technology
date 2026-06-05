# client_scripts/ponder/

Create mod ponder (in-game tutorial) scene definitions for Star Technology machines and mechanics.

## Files

| File | Description |
|---|---|
| [`main.js`](main.js) | Entry point — registers ponder tags (e.g. "GregTech Multiblocks", "Stargate Travel") and wires scene functions to their corresponding blocks. |
| [`multis.js`](multis.js) | Ponder scene definitions for multiblock machines. |
| [`utils.js`](utils.js) | Shared utility helpers for ponder scenes: lazy initialization, GregTech machine lookups, animation helpers, and Java class bindings (`MetaMachineBlockEntity`, `RelativeDirection`, etc.). |
| [`types.d.ts`](types.d.ts) | TypeScript type declarations for ponder scene builder APIs, providing IDE autocomplete when editing scene scripts. |
| [`scenes/`](scenes/) | Individual scene script files, one per topic. |

## scenes/

| File | Description |
|---|---|
| [`classic_stargate.js`](scenes/classic_stargate.js) | Ponder scenes explaining how to build and use the Classic Stargate. |
| [`multiblock_construction.js`](scenes/multiblock_construction.js) | General tutorial on constructing GTCEu multiblock machines. |
| [`multiblock_introduction.js`](scenes/multiblock_introduction.js) | Overview scene introducing multiblock mechanics to new players. |
| [`mutliblock_wallsharing.js`](scenes/mutliblock_wallsharing.js) | Demonstrates wall-sharing between adjacent multiblocks. |
