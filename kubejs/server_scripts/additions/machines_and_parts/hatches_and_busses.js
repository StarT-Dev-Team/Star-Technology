ServerEvents.recipes((event) => {
    const id = global.id;

    // === ULV/LV Crafting Table Hatches

    [
        { tier: 'ulv', item: '#forge:chests/wooden', fluid: '#forge:glass' },
        { tier: 'lv', item: 'gtceu:wood_crate', fluid: 'gtceu:wood_drum' },
    ].forEach((tier) => {
        [
            { type: 'input', shape: [' C ', ' M ', '   '] },
            { type: 'output', shape: ['   ', ' M ', ' C '] },
        ].forEach((type) => {
            // Busses
            event
                .shaped(Item.of(`gtceu:${tier.tier}_${type.type}_bus`), type.shape, {
                    C: tier.item,
                    M: `gtceu:${tier.tier}_machine_hull`,
                })
                .id(`start:shaped/${tier.tier}_${type.type}_bus`);
            // Hatches
            event
                .shaped(Item.of(`gtceu:${tier.tier}_${type.type}_hatch`), type.shape, {
                    C: tier.fluid,
                    M: `gtceu:${tier.tier}_machine_hull`,
                })
                .id(`start:shaped/${tier.tier}_${type.type}_hatch`);
        });
    });

    // === Maintainance Hatches ===

    event.recipes.gtceu
        .assembly_line(id('sterile_cleaning_maintenance_hatch'))
        .itemInputs(
            '1x gtceu:uev_machine_hull',
            '2x gtceu:uev_robot_arm',
            '1x gtceu:uev_emitter',
            '3x #gtceu:circuits/uev',
            '2x gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate_large_fluid_pipe',
            '1x gtceu:magmada_alloy_rotor',
            '4x gtceu:blacklight',
            '4x gtceu:cerium_tritelluride_single_cable'
        )
        .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 2304', 'gtceu:perfluoroelastomer_rubber 1152')
        .itemOutputs('start_core:sterile_cleaning_maintenance_hatch')
        .duration(200)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder
                .researchStack(Item.of('gtceu:cleaning_maintenance_hatch'))
                .EUt(GTValues.VHA[GTValues.UEV])
                .CWUt(176)
        )
        .EUt(GTValues.VHA[GTValues.UIV]);

    event.recipes.gtceu
        .assembly_line(id('absolute_stabilization_module'))
        .itemInputs(
            '1x gtceu:uhv_machine_hull',
            '4x gtceu:uhv_robot_arm',
            '3x #gtceu:circuits/uhv',
            'kubejs:uhv_catalyst_core',
            '6x gtceu:zircalloy_4_screw',
            '4x gtceu:europium_single_cable'
        )
        .inputFluids(
            'gtceu:indium_tin_lead_cadmium_soldering_alloy 4608',
            'gtceu:polyether_ether_ketone 3456',
            'gtceu:perfluoroelastomer_rubber 2304'
        )
        .itemOutputs('gtceu:uhv_stabilization_module')
        .duration(200)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder
                .researchStack(Item.of('gtceu:auto_maintenance_hatch'))
                .EUt(GTValues.VHA[GTValues.UV])
                .CWUt(144)
        )
        .EUt(GTValues.VHA[GTValues.UHV]);

    // === Variadic Hatches ===
    event.recipes.gtceu
        .assembler(id('redstone_variadic_interface'))
        .itemInputs(
            'gtceu:luv_machine_hull',
            '2x gtceu:hpic_chip',
            'gtceu:redstone_plate',
            'gtceu:advanced_item_detector_cover',
            'gtceu:advanced_fluid_detector_cover',
            'gtceu:advanced_energy_detector_cover'
        )
        .itemOutputs('start_core:redstone_variadic_interface')
        .inputFluids('gtceu:soldering_alloy 288')
        .duration(600)
        .circuit(4)
        .EUt(GTValues.V[GTValues.EV]);
});
