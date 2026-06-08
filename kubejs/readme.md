# KubeJS — Star Technology

This directory contains all KubeJS scripting and overrides for the **Star Technology** modpack.  
KubeJS integrates with the modpack via three script lifecycles and two resource directories.

## Top-level structure

| Path | Description |
|---|---|
| [`startup_scripts/`](startup_scripts/) | Run once at game launch. Used to register new materials, machines, items, blocks, and effects. |
| [`server_scripts/`](server_scripts/) | Run on every `/reload`. Used to add/modify/remove recipes, handle server events, and define tags. |
| [`client_scripts/`](client_scripts/) | Run on every `F3+T`. Used for JEI/EMI tooltips, item hiding, ponder scenes, and other client-side events. |
| [`assets/`](assets/) | Acts as a resource pack — textures, models, blockstates, and lang files for KubeJS-registered content and mod overrides. |
| [`data/`](data/) | Acts as a datapack — loot tables, damage types, and structure NBT files. |
| [`config/`](config/) | KubeJS config storage (`client.properties`, `common.properties`). |

## Reload commands

| Command | Reloads |
|---|---|
| `/reload` | `server_scripts/` |
| `F3+T` | `client_scripts/` and `assets/` |

## Logs

KubeJS-specific logs are written to `logs/kubejs/`.
