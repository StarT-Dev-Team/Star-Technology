StartupEvents.registry('item', (event) => {
    // === Proto Runes ===

    ['solarus', 'energized', 'lunarus'].forEach((rune) => {
        //sun, empowered, moon

        event
            .create(`proto_${rune}_rune`)
            .tooltip(Text.translate(`item.kubejs.proto_rune.tooltip`))
            .tooltip(Text.translate(`item.kubejs.proto_${rune}_rune.tooltip`))
            .textureJson({
                layer0: `kubejs:item/stargate/gate_items/components/csg/enscription_plate`,
                layer1: `kubejs:item/stargate/gate_items/runes/proto/${rune}`,
            });
    });

    // === Runic Plating ===

    ['reinforced', 'pathway', 'stabilization', 'transportation'].forEach((rune) => {
        event
            .create(`runic_${rune}_plating`)
            .tooltip(Text.translate(`item.kubejs.runic_plating.tooltip`))
            .tooltip(Text.translate(`item.kubejs.runic_${rune}_plating.tooltip`))
            .textureJson({
                layer0: `kubejs:item/stargate/gate_items/components/asg/enscription_plate`,
                layer1: `kubejs:item/stargate/gate_items/runes/runic/${rune}`,
            });
    });

    // === Transcension Engraved Sigils ===

    ['undina', 'sylvestris', 'gnomus', 'vulcanus', 'illustris', 'tenebrosus'].forEach((rune) => {
        //water, air, earth, fire, light, dark

        event
            .create(`transcension_engraved_${rune}_sigil`)
            .tooltip(Text.translate(`item.kubejs.transcension_engraved_sigil.tooltip`))
            .tooltip(Text.translate(`item.kubejs.transcension_engraved_${rune}_sigil.tooltip`))
            .textureJson({
                layer0: `kubejs:item/stargate/gate_items/components/dsg/enscription_plate`,
                layer1: `kubejs:item/stargate/gate_items/runes/sigil/${rune}`,
            });
    });

    //Removed
    // event.create('runic_engraved_plating')
    //     .tooltip(Text.translate('item.kubejs.runic_engraved_plating.tooltip'))
    //     .texture('kubejs:item/stargate/runic_plating/rune_engraved_plating')
    //     .rarity('epic');

    // event.create('runic_pathway_engraved_plating')
    //     .texture('kubejs:item/stargate/runic_plating/runic_pathway_engraved_plating')
    //     .rarity('rare');

    // event.create('runic_stabilization_plating')
    //     .texture('kubejs:item/stargate/runic_plating/runic_stable_plating')
    //     .rarity('rare');

    // event.create('runic_transportation_engraved_plating')
    //     .texture('kubejs:item/stargate/runic_plating/runic_transport_plating')
    //     .rarity('epic');

    // event.create('runic_energized_transportation_plating')
    //     .texture('kubejs:item/stargate/runes/runic_transport_energized_plating')
    //     .rarity('uncommon');

    // event.create('runic_energized_pathway_plating')
    //     .texture('kubejs:item/stargate/runes/runic_pathway_energized_plating')
    //     .rarity('uncommon');

    // event.create('runic_energized_plating')
    //     .texture('kubejs:item/stargate/runes/runic_energized_plating')
    //     .rarity('rare');
});
