# server_scripts/hardmode/

Recipe scripts that run only in **hardmode** packmode.

## Root files

| File | Description |
|---|---|
| [`mass_removals.js`](mass_removals.js) | Bulk recipe removals specific to hardmode — gates additional vanilla and mod recipes that are obtainable differently in hardmode. |
| [`recipe_renames.js`](recipe_renames.js) | Renames recipe IDs where conflicts arise in hardmode. |

## Subfolders

| Folder | Description |
|---|---|
| [`progression/`](progression/) | Hardmode-specific crafting progression (casings, circuits, components, machines, misc, pre-LV Create age). |
| [`Resource_Gen/`](Resource_Gen/) | Hardmode resource generation recipes (blast furnaces, Ex Nihilo sieving/melting/heat, geodes, void drilling, material lines). |
| [`utils/`](utils/) | Hardmode server-side utilities (tag changes, loot table modifications, on-load events). |
