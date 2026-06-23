StartupEvents.registry('item', (event) => {
    // === Gate Rods ===

    let stargateRod = [
        'raw',
        'activated',
        'infernally_reforged',
        'awakened_inferno',
        'abyssally_reforged',
        'awakened_abyss',
        'prismaticly_infused',
        'faetic',
        'kaleidoscopicly_infused',
        'riftic',
        'primordicly_infused',
        'temporic',
    ];

    stargateRod.forEach((rod) => {
        event
            .create(`${rod}_stargate_rod`)
            .tooltip(Text.translate(`item.kubejs.${rod}_stargate_rod.tooltip`))
            .texture(`kubejs:item/stargate/gate_items/components/rods/${rod}`);
        // .textureJson({ //temp
        //     layer0: `kubejs:item/stargate/gate_items/temp/rods/rod`,
        //     layer1: `kubejs:item/stargate/gate_items/temp/rods/${rod}`
        // })
    });

    // === Tiered Components ===

    ['csg', 'asg', 'dsg'].forEach((tier) => {
        event
            .create(`${tier}_field_stabiliser`)
            .tooltip(Text.translate('item.kubejs.field_stabiliser.tooltip'))
            .texture(`kubejs:item/stargate/gate_items/components/${tier}/field_stabiliser`);

        event
            .create(`${tier}_energy_modulator`)
            .tooltip(Text.translate('item.kubejs.energy_modulator.tooltip'))
            .texture(`kubejs:item/stargate/gate_items/components/${tier}/energy_modulator`);

        event
            .create(`${tier}_stellar_dialer`)
            .tooltip(Text.translate('item.kubejs.stellar_dialer.tooltip'))
            .texture(`kubejs:item/stargate/gate_items/components/${tier}/stellar_dialer`);

        event
            .create(`${tier}_dpu`)
            .tooltip(Text.translate('item.kubejs.dpu.tooltip'))
            .textureJson({
                layer0: `kubejs:item/stargate/gate_items/components/${tier}/dpu_backing`,
                layer1: `kubejs:item/stargate/gate_items/components/${tier}/dpu_overlay`,
            });

        event
            .create(`${tier}_computational_matrix`)
            .tooltip(Text.translate('item.kubejs.computational_matrix.tooltip'))
            .texture(`kubejs:item/stargate/gate_items/components/${tier}/computational_matrix`);

        event
            .create(`${tier}_stellar_access_point`)
            .tooltip(Text.translate('item.kubejs.stellar_access_point.tooltip'))
            .texture(`kubejs:item/stargate/gate_items/components/${tier}/stellar_access_point`);

        event
            .create(`${tier}_chevron`)
            .tooltip(Text.translate('item.kubejs.chevron.tooltip'))
            .texture(`kubejs:item/stargate/gate_items/components/${tier}/chevron`);

        event
            .create(`${tier}_dimensional_supercomputer`)
            .tooltip(Text.translate('item.kubejs.dimensional_supercomputer.tooltip'))
            .texture(`kubejs:item/stargate/gate_items/components/${tier}/dimensional_supercomputer`);

        event
            .create(`${tier}_reinforced_plating`)
            .tooltip(Text.translate('item.kubejs.reinforced_plating.tooltip'))
            .texture(`kubejs:item/stargate/gate_items/components/${tier}/reinforced_plating`);

        event
            .create(`${tier}_stargate_rod_base`)
            .tooltip(Text.translate('item.kubejs.stargate_rod_base.tooltip'))
            .texture(`kubejs:item/stargate/gate_items/components/${tier}/stargate_rod_base`);

        event
            .create(`${tier}_enscription_plate`)
            .tooltip(Text.translate('item.kubejs.enscription_plate.tooltip'))
            .texture(`kubejs:item/stargate/gate_items/components/${tier}/enscription_plate`);

        event
            .create(`${tier}_enscription_chip`)
            .tooltip(Text.translate('item.kubejs.enscription_chip.tooltip'))
            .texture(`kubejs:item/stargate/gate_items/components/${tier}/dpu_backing`);
    });

    // OLD
    /// === CSG ===
    // event.create('crude_stargate_rod')
    //     .tooltip(Text.translate('item.kubejs.crude_stargate_rod.tooltip'))
    //     .texture('kubejs:item/stargate/gate_items/crude_stargate_rod')
    //     .rarity('rare');

    // event.create('stargate_rod')
    //     .tooltip(Text.translate('item.kubejs.stargate_rod.tooltip'))
    //     .texture('kubejs:item/stargate/gate_items/stargate_rod')
    //     .rarity('epic');

    //     event.create('computational_super_matrix')
    //         .texture('kubejs:item/stargate/gate_items/computation_super_matrix')
    //         .rarity('rare');

    //     event.create('classic_stargate_computer_core')
    //         .rarity('uncommon')
    //         .texture('kubejs:item/stargate/gate_items/classic_computational_core');

    //     event.create('classic_chevron_disk')
    //         .rarity('rare')
    //         .texture('kubejs:item/stargate/gate_items/classic_chevron_disk');

    // === ASG ===
    // event.create('untreated_infernal_stargate_rod')
    //     .tooltip(Text.translate('item.kubejs.untreated_infernal_stargate_rod.tooltip'))
    //     .texture('kubejs:item/stargate/gate_items/untreated_infernal_stargate_rod');

    // event.create('infernal_stargate_rod')
    //     .tooltip(Text.translate('item.kubejs.infernal_stargate_rod.tooltip'))
    //     .texture('kubejs:item/stargate/gate_items/infernal_stargate_rod');

    // event.create('untreated_abyssal_stargate_rod')
    //     .tooltip(Text.translate('item.kubejs.untreated_abyssal_stargate_rod.tooltip'))
    //     .texture('kubejs:item/stargate/gate_items/untreated_abyssal_stargate_rod');

    // event.create('abyssal_stargate_rod')
    //     .tooltip(Text.translate('item.kubejs.abyssal_stargate_rod.tooltip'))
    //     .texture('kubejs:item/stargate/gate_items/abyssal_stargate_rod');

    // event.create('ancient_stargate_computer_core')
    //     .rarity('uncommon')
    //     .texture('kubejs:item/stargate/gate_items/ancient_stargate_computer_core');

    // event.create('ancient_chevron_disk')
    //     .rarity('rare')
    //     .texture('kubejs:item/stargate/gate_items/ancient_chevron_disk');

    // event.create('classic_chevron_assembly')
    //     .rarity('rare')
    //     .texture('kubejs:item/stargate/gate_items/classic_chevron_assembly');
});
