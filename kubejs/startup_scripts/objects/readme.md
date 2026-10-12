# startup_scripts/objects/

Registers custom blocks, items, and mob effects.

## Structure

| Path                   | Description                                                                         |
| ---------------------- | ----------------------------------------------------------------------------------- |
| [`blocks/`](blocks/)   | Custom block registrations (coil blocks, machine casings, decorative blocks, etc.). |
| [`items/`](items/)     | Custom item registrations (components, crystals, tools, circuit types, etc.).       |
| [`effects/`](effects/) | Custom mob effect (potion effect) registrations (e.g. radiation, heat exhaustion).  |

## blocks/ subfolders & files

| Path                                                      | Description                                                                                                   |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| [`casings/`](blocks/casings/)                             | Machine casing registrations (Abydos, End, Nether, Riftic, Runic, Stargate, Superconductor, Threading, etc.). |
| [`block_modifications.js`](blocks/block_modifications.js) | Modifies properties (hardness, resistance) of existing blocks.                                                |
| [`coils.js`](blocks/coils.js)                             | Custom heating and superconductor coil blocks.                                                                |
| [`deprecated.js`](blocks/deprecated.js)                   | Deprecated block registrations maintained for compatibility.                                                  |
| [`extras.js`](blocks/extras.js)                           | Miscellaneous custom blocks.                                                                                  |
| [`fusion.js`](blocks/fusion.js)                           | Custom fusion casing and reactor blocks.                                                                      |
| [`gate_blocks.js`](blocks/gate_blocks.js)                 | Stargate structural blocks.                                                                                   |
| [`stones.js`](blocks/stones.js)                           | Custom decorative stone blocks.                                                                               |
| [`structures.js`](blocks/structures.js)                   | Structure-specific custom blocks.                                                                             |

## items/ subfolders

| Path                                                         | Description                                                                         |
| ------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| [`circuits_and_components/`](items/circuits_and_components/) | Circuit chips, components, universal circuits, and voltage coils.                   |
| [`misc/`](items/misc/)                                       | Miscellaneous items, drinks, and thermal augments.                                  |
| [`progression/`](items/progression/)                         | Progression-locked items (dimensional, draconic, neutron reflectors, riftic).       |
| [`resource_generation/`](items/resource_generation/)         | Geode items, resource processing lines, and nuclear fuel rods.                      |
| [`solar/`](items/solar/)                                     | Photovoltaic cells and energy cores.                                                |
| [`stargate/`](items/stargate/)                               | Coordinate crystals, gate components, materials, runic platings, and singularities. |

## effects/ files

| Path                                                       | Description                                                                       |
| ---------------------------------------------------------- | --------------------------------------------------------------------------------- |
| [`dimensional_debuffs.js`](effects/dimensional_debuffs.js) | Environmental and dimensional debuffs (radiation, heat exhaustion, abyssal pull). |
| [`drinks.js`](effects/drinks.js)                           | Potion effects associated with consumable drinks.                                 |
| [`nuclear.js`](effects/nuclear.js)                         | Nuclear radiation status effects.                                                 |
