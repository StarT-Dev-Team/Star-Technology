# server_scripts/systems/

Custom gameplay systems implemented as server-side recipe/event scripts.

## Root files

| File                                                           | Description                                                                                                                            |
| -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| [`cryostate_quantum_chiller.js`](cryostate_quantum_chiller.js) | Recipes for the Cryostate Quantum Chiller machine.                                                                                     |
| [`draco_infusion.js`](draco_infusion.js)                       | Recipes for the Draco Infusion (Draconic-tier circuit production).                                                                     |
| [`hellforge.js`](hellforge.js)                                 | Recipes for the Hellforge machine (extreme heat processing).                                                                           |
| [`ore_factory_processing.js`](ore_factory_processing.js)       | Processing recipes for the Ore Factory machine chain (raw ore → crushed → purified → dust).                                            |
| [`pulverizer.js`](pulverizer.js)                               | Recipes for the custom Pulverizer single-block machine.                                                                                |
| [`research.js`](research.js)                                   | Assembly Line research recipes for late-game components (HPCA heat sinks, prismalic helix cores, etc.) gated behind research stations. |
| [`threading.js`](threading.js)                                 | Recipes for the Prismalic Helix Core and other threading system components.                                                            |

## Subfolders

| Folder                             | Description                                                                                                                                                                                                                  |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`agriculture/`](agriculture/)     | Farming system recipes (Greenhouse growing, Fishery, Tree Synthesizer, Wild Garden, GCrops).                                                                                                                                  |
| [`fission/`](fission/)             | Nuclear fission recipes: fuel preparation, rod crafting, and multiblock operational recipes.                                                                                                                                 |
| [`fusion/`](fusion/)               | Fusion reactor recipes: fusion scaling curves, plasma turbine outputs, and start-up fusion machines.                                                                                                                         |
| [`gate_based/`](gate_based/)       | Stargate-locked recipes and systems (ASG, CSG, DSG stargates, dimensional pinging, quantum compressor, runes, misc gate materials).                                                                                          |
| [`resource_gen/`](resource_gen/)   | Passive resource generation recipes (Abyss Harvesting, Dimensional Destabilising, Exotic Gas Siphon, Geode processing, Hydrocarbon processing, Latex and rubber recipes, pebbles, Seawater processing, Void extractor line). |

## [agriculture/](agriculture/) files

| File                                               | Description                                                |
| -------------------------------------------------- | ---------------------------------------------------------- |
| [`farming.js`](agriculture/farming.js)             | Standard farming and crop growing recipes.                 |
| [`fishery.js`](agriculture/fishery.js)             | Industrial Fishery catching and processing recipes.        |
| [`gcrops.js`](agriculture/gcrops.js)               | GCrops automated crop processing recipes.                  |
| [`tree_greenhouse.js`](agriculture/tree_greenhouse.js) | Tree Greenhouse growing and wood production recipes.       |
| [`wild_garden.js`](agriculture/wild_garden.js)     | Wild Garden foraging and plant multiplication recipes.     |

## [fission/](fission/) files

| File                                               | Description                                                |
| -------------------------------------------------- | ---------------------------------------------------------- |
| [`nuclear_fission.js`](fission/nuclear_fission.js) | Nuclear fission fuel crafting and processing recipes.      |
| [`nuclear_reactor.js`](fission/nuclear_reactor.js) | Nuclear reactor multiblock recipes and operation cycle.    |

## [fusion/](fusion/) files

| File                                                               | Description                                                |
| ------------------------------------------------------------------ | ---------------------------------------------------------- |
| [`fusion_scaling.js`](fusion/fusion_scaling.js)                    | Fusion reactor recipe scaling curves and energy balance.   |
| [`plasma_turbines.js`](fusion/plasma_turbines.js)                  | Plasma Turbine power generation recipes.                   |
| [`start_fusion_machines.js`](fusion/start_fusion_machines.js)      | Machine recipes for the initial fusion chain setup.        |

## [gate_based/](gate_based/) files

| File                                                          | Description                                                |
| ------------------------------------------------------------- | ---------------------------------------------------------- |
| [`asg.js`](gate_based/asg.js)                                 | Advanced Stargate progression recipes.                     |
| [`csg.js`](gate_based/csg.js)                                 | Classic Stargate progression recipes.                      |
| [`dimensional_pinging.js`](gate_based/dimensional_pinging.js) | Recipes related to dimensional pinging and discovery.      |
| [`dsg.js`](gate_based/dsg.js)                                 | Dimensional Stargate recipes and mechanics.                |
| [`misc.js`](gate_based/misc.js)                               | Miscellaneous gate-related crafting recipes.               |
| [`misc_materials.js`](gate_based/misc_materials.js)           | Gate-tier material crafting recipes.                       |
| [`quantum_compressor.js`](gate_based/quantum_compressor.js)   | Quantum Compressor singularity and matter recipes.         |
| [`runes.js`](gate_based/runes.js)                             | Stargate rune carving and inscription recipes.             |

## [resource_gen/](resource_gen/) files & subfolders

| Path                                                                            | Description                                                                                  |
| ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| [`abyss_harvesting.js`](resource_gen/abyss_harvesting.js)                       | Abyssal fluid and void resource harvesting recipes.                                          |
| [`dimensional_destabilising.js`](resource_gen/dimensional_destabilising.js)     | Dimensional destabiliser recipes.                                                            |
| [`exotic_gas_siphon.js`](resource_gen/exotic_gas_siphon.js)                     | Exotic Gas Siphon atmosphere extraction recipes.                                             |
| [`geodes.js`](resource_gen/geodes.js)                                           | Geode opening, crushing, and mineral extraction recipes.                                     |
| [`hydrocarbons.js`](resource_gen/hydrocarbons.js)                               | Hydrocarbon and fuel resource generation recipes.                                            |
| [`latex.js`](resource_gen/latex.js)                                             | Latex extraction and rubber processing recipes.                                              |
| [`mechanical_sieve.js`](resource_gen/mechanical_sieve.js)                       | Automated Mechanical Sieve recipes.                                                          |
| [`pebbling.js`](resource_gen/pebbling.js)                                       | Cobblestone pebble generating recipes.                                                       |
| [`seawater.js`](resource_gen/seawater.js)                                       | Seawater distillation and mineral salt extraction recipes.                                   |
| [`void_drill_line/`](resource_gen/void_drill_line/)                             | Void drill line (`clusters.js`, `crystallisation.js`, `minerals.js`, `rare_ore_residue.js`). |
