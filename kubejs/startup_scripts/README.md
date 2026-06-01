# startup_scripts/

Scripts that run once at game startup.  
Used to register new content (materials, machines, items, blocks, effects) that must exist before the world loads.  
Reloading requires a full game restart.

## Structure

| Path | Description |
|---|---|
| [`config.js`](config.js) | Sets the KubeJS namespace (`Star Technology`) via the KubeJS platform API. |
| [`common/`](common/) | Startup registrations shared across all packmodes. |
| [`hardmode/`](hardmode/) | Startup registrations exclusive to hardmode packmode. |
| [`utils/`](utils/) | Shared helpers, constants, and class loaders used across all startup scripts. |
