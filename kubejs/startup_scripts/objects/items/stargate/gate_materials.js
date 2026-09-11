StartupEvents.registry('item', (event) => {
    // === Fragments ===

    ['inferno', 'abyss', 'prismalic', 'riftic', 'primordial'].forEach((fragment) => {
        event
            .create(`${fragment}_fragment`)
            .tooltip(Text.translate(`item.kubejs.${fragment}_fragment.tooltip`))
            .texture(`kubejs:item/stargate/gate_items/materials/fragment/${fragment}`)
            .textureJson({
                //temp
                layer0: `kubejs:item/stargate/gate_items/materials/fragment/${fragment}/base`,
                layer1: `kubejs:item/stargate/gate_items/materials/fragment/${fragment}/overlay`,
            });
    });

    // === Core ===

    [
        'quantum',
        'decaying',
        'voidic',
        'draconic',
        'prismafae_illuminatus',
        'spatium_ruptura',
        'primus_tempus',
        'ascension',
    ].forEach((core) => {
        event
            .create(`${core}_core`)
            .tooltip(Text.translate(`item.kubejs.${core}_core.tooltip`))
            .textureJson({
                layer0: `kubejs:item/stargate/gate_items/materials/core/${core}/base`,
                layer1: `kubejs:item/stargate/gate_items/materials/core/${core}/overlay`,
            });
    });

    //OLD
    // === Cores and Fragments
    // event.create('empty_coordinate_core')
    //     .texture('kubejs:item/stargate/gate_items/empty_coordinate_core');

    // event.create('draconic_coordinate_core')
    //     .tooltip(Text.translate('item.kubejs.draconic_coordinate_core.tooltip'))
    //     .texture('kubejs:item/stargate/gate_items/draconic_core');

    // event.create('inferno_fragment')
    //     .texture('kubejs:item/stargate/gate_items/inferno_fragment');

    // event.create('abyss_fragment')
    //     .texture('kubejs:item/stargate/gate_items/abyss_fragment');

    // event.create('hell_core')
    //     .texture('kubejs:item/stargate/gate_items/hell_core');

    // event.create('void_core')
    //     .texture('kubejs:item/stargate/gate_items/void_core');
});
