# server_scripts/additions/progression/

Material processing chains and crafting recipes for the main progression path.

## Root files

| File                                       | Description                                                             |
| ------------------------------------------ | ----------------------------------------------------------------------- |
| [`casings.js`](casings.js)                 | Recipes for machine casing.                                             |
| [`circuit_etching.js`](circuit_etching.js) | Recipes for circuit etching (UV/laser etching of circuit boards).       |
| [`misc_additions.js`](misc_additions.js)   | Miscellaneous progression recipes that don't belong to a specific line. |
| [`superconductors.js`](superconductors.js) | Superconductor wire and coil recipes.                                   |

## Subfolders

| Folder                                                     | Description                                                                                                                                                                             |
| ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`circuitry/`](circuitry/)                                 | Circuit and circuit-board recipes (circuit parts, assembled circuits, Draco circuit assembly, universal circuits).                                                                      |
| [`components/`](components/)                               | Machine component recipes (component materials, Component Nexus recipes, component parts, LUV→UV and UHV→UIV tiers).                                                                    |
| [`komaru/`](komaru/)                                       | Komaru module and frame recipes (part of the threading/Komaru system).                                                                                                                  |
| [`lines/`](lines/)                                         | Material processing chains organised by dimension/zone (see below).                                                                                                                     |
| [`machines_and_parts/`](machines_and_parts/)               | Machine crafting recipes — coils, converters, hatches/busses, intermediate and large multiblocks, single blocks.                                                                        |
| [`/tiered_machines/`](machines_and_parts/tiered_machines/) | Tiered machine recipes: IO hatches, large energy hatches, modular power hatches, parallel hatches, single-block tiers, storage blocks, and transformers.                                |
| [`early_game/`](/early_game/)                              | Early-game recipe additions before GT machines are available (alloys & tools, backports from later versions, barrels, blast furnaces, caskets, composters, miscellaneous QoL, sieving). |
| [`power/`](power/)                                         | Power system recipes (solar panels, wireless power, thermal augments, modular combustion).                                                                                              |
| [`recycling/`](recycling/)                                 | Deconstruction/recycling recipes for coils, components, converters, fusion casings, parallel hatches, and single blocks.                                                                |

## lines/ subfolders

| Folder/File                                              | Description                                                                                                                                               |
| -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`abydos_lines/`](lines/abydos_lines/)                   | Processing chains for Abydos materials (Akreyrium, Naquadite, Zirconium, Zapolgium, Rare Earth, SiC Bite, Deionized Water, Magma, Ultimate alloys, misc). |
| [`nether_lines/`](lines/nether_lines/)                   | Processing chains for Nether materials (Adamantine, Mythril, Estalt, Calamatium, Isovol, Hexafluorobromic Acid, Atomic Nether Sludge, Magmas, misc).      |
| [`end_lines/`](lines/end_lines/)                         | Processing chains for End materials (Abyssal Room materials, misc).                                                                                       |
| [`gate_lines/`](lines/gate_lines/)                       | Processing chains for post-gate materials (Aerogels, Runic Convergence).                                                                                  |
| [`riftic/`](lines/riftic/)                               | Processing chains for Riftic materials (Riftion, Faematter Filaments, misc).                                                                              |
| [`polymers/`](lines/polymers/)                           | Polymer synthesis chains (PEDOT:PSS, PEEK, Perfluoroelastomer, Polycarbonate, Polyimide, misc utilization).                                               |
| [`brine_line.js`](lines/brine_line.js)                   | Brine processing chain.                                                                                                                                   |
| [`combustion_lines.js`](lines/combustion_lines.js)       | Combustion fuel processing chains.                                                                                                                        |
| [`cryptands.js`](lines/cryptands.js)                     | Used remnants of the cryptand synthesis chain.                                                                                                            |
| [`dimensional_air.js`](lines/dimensional_air.js)         | Dimensional Air processing chain.                                                                                                                         |
| [`intermediate_multis.js`](lines/intermediate_multis.js) | Recipes unlocked at intermediate multiblock tiers.                                                                                                        |
| [`modifications.js`](lines/modifications.js)             | Tweaks to existing material line recipes.                                                                                                                 |
| [`netherite.js`](lines/netherite.js)                     | Netherite processing chain.                                                                                                                               |
| [`nether_stars.js`](lines/nether_stars.js)               | Nether Star processing recipes.                                                                                                                           |
