StartupEvents.registry('item', (event) => {
    event
        .create('coordinate_crystal')
        .rarity('rare')
        .tooltip(Text.translate('item.kubejs.blank_dimensional_coordinate_crystal.tooltip'))
        .texture('kubejs:item/stargate/coordinate_crystals/blank_coordinate_crystal');

    event
        .create('abydos_coordinate_crystal')
        .rarity('epic')
        .tooltip(Text.translate('item.kubejs.abydos_coordinate_crystal.tooltip'))
        .texture('kubejs:item/stargate/coordinate_crystals/abydos_coordinate_crystal');

    event
        .create('nether_coordinate_crystal')
        .rarity('epic')
        .tooltip(Text.translate('item.kubejs.nether_coordinate_crystal.tooltip'))
        .texture('kubejs:item/stargate/coordinate_crystals/nether_coordinate_crystal');

    event
        .create('end_coordinate_crystal')
        .rarity('epic')
        .tooltip(Text.translate('item.kubejs.end_coordinate_crystal.tooltip'))
        .texture('kubejs:item/stargate/coordinate_crystals/end_coordinate_crystal');
});
