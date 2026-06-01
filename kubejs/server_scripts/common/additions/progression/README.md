# server_scripts/common/additions/progression/

Material processing chains and crafting recipes for the main progression path, shared by all packmodes.

## Root files

| File | Description |
|---|---|
| [`casings.js`](casings.js) | Recipes for machine casing. |
| [`misc_additions.js`](misc_additions.js) | Miscellaneous progression recipes that don't belong to a specific line. |

## Subfolders

| Folder | Description |
|---|---|
| [`circuitry/`](circuitry/) | Circuit and circuit-board recipes (circuit parts, assembled circuits, Draco circuit assembly, universal circuits). |
| [`components/`](components/) | Machine component recipes (component materials, Component Nexus recipes, component parts, LUV→UV and UHV→UIV tiers). |
| [`komaru/`](komaru/) | Komaru module and frame recipes (part of the threading/Komaru system). |
| [`lines/`](lines/) | Material processing chains organised by dimension/zone (see below). |
| [`power/`](power/) | Power system recipes (solar panels, wireless power, thermal augments, modular combustion). |
| [`recycling/`](recycling/) | Deconstruction/recycling recipes for coils, components, converters, fusion casings, parallel hatches, and single blocks. |

## lines/ subfolders

| Folder/File | Description |
|---|---|
| [`abydos_lines/`](lines/abydos_lines/) | Processing chains for Abydos materials (Akreyrium, Naquadite, Zirconium, Zapolgium, Rare Earth, SiC Bite, Deionized Water, Magma, Ultimate alloys, misc). |
| [`nether_lines/`](lines/nether_lines/) | Processing chains for Nether materials (Adamantine, Mythril, Estalt, Calamatium, Isovol, Hexafluorobromic Acid, Atomic Nether Sludge, Magmas, misc). |
| [`end_lines/`](lines/end_lines/) | Processing chains for End materials (Abyssal Room materials, misc). |
| [`gate_lines/`](lines/gate_lines/) | Processing chains for post-gate materials (Aerogels, Runic Convergence). |
| [`riftic/`](lines/riftic/) | Processing chains for Riftic materials (Riftion, Faematter Filaments, misc). |
| [`polymers/`](lines/polymers/) | Polymer synthesis chains (PEDOT:PSS, PEEK, Perfluoroelastomer, Polycarbonate, Polyimide, misc utilization). |
| [`brine_line.js`](lines/brine_line.js) | Brine processing chain. |
| [`combustion_lines.js`](lines/combustion_lines.js) | Combustion fuel processing chains. |
| [`cryptands.js`](lines/cryptands.js) | Cryptand synthesis chain. |
| [`intermediate_multis.js`](lines/intermediate_multis.js) | Recipes unlocked at intermediate multiblock tiers. |
| [`modifications.js`](lines/modifications.js) | Tweaks to existing material line recipes. |
| [`netherite.js`](lines/netherite.js) | Netherite processing chain. |
| [`nether_stars.js`](lines/nether_stars.js) | Nether Star processing recipes. |
