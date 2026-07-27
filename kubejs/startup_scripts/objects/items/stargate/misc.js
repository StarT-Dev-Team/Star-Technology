StartupEvents.registry('item', (event) => {
    ['1', '2', '3', '4', '5', '6', 'complete'].forEach((piece) => {
        event
            .create(`runic_tablet_${piece}`)
            .rarity('uncommon')
            .texture(`kubejs:item/stargate/gate_items/misc/rune_tablet_${piece}`);
    });

    event
        .create('worries_about_it')
        .displayName("§4DON'T§r Worry About It :)")
        .texture('kubejs:item/stargate/gate_items/misc/worry');

    event
        .create('runic_wave_generator')
        .texture('kubejs:item/stargate/gate_items/misc/runic_wave_generator')
        .rarity('epic');
});
