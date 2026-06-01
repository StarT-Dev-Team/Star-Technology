# startup_scripts/hardmode/

Startup registrations exclusive to **hardmode** packmode.  
These are loaded in addition to `common/` when the packmode is set to `hard`.

## Structure

| Path | Description |
|---|---|
| [`elements_materials/elements/`](elements_materials/elements/) | Additional elements used only in hardmode progression. |
| [`elements_materials/materials/`](elements_materials/materials/) | Additional materials used only in hardmode progression. |
| [`machines/multiblocks/`](machines/multiblocks/) | Multiblock machines specific to hardmode. |
| [`machines/single block/`](machines/single%20block/) | Single-block machines specific to hardmode. |
| [`objects/blocks.js`](objects/blocks.js) | Additional block registrations for hardmode. |
| [`objects/items.js`](objects/items.js) | Additional item registrations for hardmode. |
| [`objects/item_modifications.js`](objects/item_modifications.js) | Modifies existing items (e.g. stack sizes, properties) for hardmode balance. |
| [`utils/events.js`](utils/events.js) | Startup event hooks specific to hardmode (world gen, fluid interactions, etc.). |
| [`utils/fluid_interactions.js`](utils/fluid_interactions.js) | Custom fluid interaction rules for hardmode (e.g. lava + water variants). |
| [`utils/hm_modification.js`](utils/hm_modification.js) | Miscellaneous hardmode-only startup modifications. |
| [`utils/mob_removals.js`](utils/mob_removals.js) | Removes or suppresses certain mob spawns in hardmode. |
