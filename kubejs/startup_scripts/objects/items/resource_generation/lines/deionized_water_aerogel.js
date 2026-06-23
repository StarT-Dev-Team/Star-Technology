StartupEvents.registry('item', (event) => {
    // De-Ionized Water
    event
        .create('dry_ion_exchange_resin_beads')
        .texture('kubejs:item/progression/ion_beads/dry_ion_exchange_resin_beads');

    event
        .create('dirty_ion_exchange_resin_beads')
        .texture('kubejs:item/progression/ion_beads/dirty_ion_exchange_resin_beads');

    event.create('ion_exchange_resin_beads').texture('kubejs:item/progression/ion_beads/ion_exchange_resin_beads');

    // Aerogel
    event
        .create('wet_aerogel_ingot')
        .tooltip(Text.translate('item.kubejs.wet_aerogel_ingot.tooltip'))
        .texture('kubejs:item/resource_gen/lines/aerogel/wet_aerogel_ingot');
});
