# server_scripts/hardmode/Resource_Gen/

Resource generation recipes exclusive to hardmode packmode.  
In hardmode, most raw resources must be produced via these machines rather than found in world veins.

## Root files

| File | Description |
|---|---|
| [`blast_furnaces.js`](blast_furnaces.js) | Blast furnace recipes for early hardmode smelting. |
| [`geodes.js`](geodes.js) | Geode crystal harvesting and processing recipes. |
| [`misc.js`](misc.js) | Miscellaneous hardmode resource generation recipes. |
| [`pre-lv.js`](pre-lv.js) | Resource production recipes available before LV electric machines. |
| [`sieve_n_sift.js`](sieve_n_sift.js) | Ex Nihilo sieving and rock sifting recipes. |

## Subfolders

| Folder | Description |
|---|---|
| [`exnihilo/`](exnihilo/) | Ex Nihilo-specific recipes: `heat.js` (crucible/heat source rules), `melting.js` (crucible melt recipes), `sieving.js` (sieve output tables). |
| [`lines/`](lines/) | Hardmode-only processing chains: `plat_line.js` (Platinum group metals), `rare_earth_line.js` (Rare Earth element separation). |
| [`void_drilling/`](void_drilling/) | Void drill system: `drilling.js` (drill operation recipes), `processing.js` (drill output processing chains). |
