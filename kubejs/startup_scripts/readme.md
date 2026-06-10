# startup_scripts/

Scripts that run once at game startup.  
Used to register new content (materials, machines, items, blocks, effects) that must exist before the world loads.  
Reloading requires a full game restart.

## Structure

| Path | Description |
|---|---|
| [`config.js`](config.js) | Sets the KubeJS namespace (`Star Technology`) via the KubeJS platform API. |
| [`elements_materials/`](elements_materials/) | Registers custom GregTech materials and elements (chemical compositions, properties, localization). |
| [`machines/`](machines/) | Registers all custom GregTech machines — multiblocks and single-block machines. |
| [`objects/`](objects/) | Registers custom blocks, items, and mob effects. |
| [`utils/`](utils/) | Shared helpers, constants, and class loaders used across all startup scripts. |
