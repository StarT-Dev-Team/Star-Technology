# data/

Datapack layer for KubeJS and mod data overrides.  
Structured identically to a standard Minecraft datapack (`data/<namespace>/`).

## Namespaces

| Namespace                  | Description                                                                      |
| -------------------------- | -------------------------------------------------------------------------------- |
| [`kubejs/`](kubejs/)       | Custom Star Technology data: damage types, loot tables, and structure NBT files. |
| [`minecraft/`](minecraft/) | Vanilla data overrides (e.g. structures).                                        |
| [`sgjourney/`](sgjourney/) | SG Journey structure NBT files — Stargate temples, pedestals, and cartouches.    |

## Overrides structure

| Path                                                                 | Description                                                                              |
| -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| [`minecraft/structures/`](minecraft/structures/)                     | Vanilla structure overrides (`husk_of_flame_glass.nbt`, `ruined_portal/` variants).      |
| [`sgjourney/structures/cartouche/`](sgjourney/structures/cartouche/) | Cartouche structure files (`abydos_cartouche.nbt`).                                      |
| [`sgjourney/structures/stargate/`](sgjourney/structures/stargate/)   | Stargate temple and pedestal structures across dimensions (Milky Way, Universe, Nether). |
