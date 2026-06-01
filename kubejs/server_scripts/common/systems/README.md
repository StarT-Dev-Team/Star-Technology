# server_scripts/common/systems/

Custom gameplay systems implemented as server-side recipe/event scripts, shared by all packmodes.

## Root files

| File | Description |
|---|---|
| [`cryostate_quantum_chiller.js`](cryostate_quantum_chiller.js) | Recipes for the Cryostate Quantum Chiller machine. |
| [`draco_infusion.js`](draco_infusion.js) | Recipes for the Draco Infusion (Draconic-tier circuit production). |
| [`hellforge.js`](hellforge.js) | Recipes for the Hellforge machine (extreme heat processing). |
| [`pulverizer.js`](pulverizer.js) | Recipes for the custom Pulverizer single-block machine. |
| [`research.js`](research.js) | Assembly Line research recipes for late-game components (HPCA heat sinks, prismalic helix cores, etc.) gated behind research stations. |
| [`threading.js`](threading.js) | Recipes for the Prismalic Helix Core and other threading system components. |

## Subfolders

| Folder | Description |
|---|---|
| [`agriculture/`](agriculture/) | Farming system recipes (Greenhouse growing, Fishery, Tree Synthesizer, Wild Garden). |
| [`fusion/`](fusion/) | Fusion reactor recipes: fusion scaling curves, plasma turbine outputs, and the start-up fusion machine chain. |
| [`gate_based/`](gate_based/) | Stargate-locked recipes and systems (ASG, CSG, DSG stargates; dimensional pinging; quantum compressor; runes; misc gate materials). |
| [`mystical agriculture/`](mystical%20agriculture/) | Mystical Agriculture integration (essence burning, essence enchancer, essence replication, greenhouse growing, crop registration). |
| [`resource gen/`](resource%20gen/) | Passive resource generation recipes (Abyss Harvesting, Dimensional Destabilising, Exotic Gas Siphon, Hydrocarbon processing, Seawater processing). |
