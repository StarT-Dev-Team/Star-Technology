ServerEvents.recipes((event) => {
    const id = global.id;

    // === Hell Forge ===
    event.recipes.gtceu
        .assembly_line(id('heart_of_the_flame'))
        .itemInputs(
            'kubejs:husk_brick',
            '2x kubejs:helish_core',
            '6x gtceu:dense_ancient_netherite_plate',
            '24x gtceu:pure_netherite_screw'
        )
        .inputFluids('start_core:flamewake_solvent 500000')
        .itemOutputs('kubejs:heart_of_the_flame')
        .duration(6000)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder.researchStack(Item.of('kubejs:husk_of_the_flame')).EUt(GTValues.VHA[UHV]).CWUt(192)
        )
        .EUtVHA(UEV);

    event.recipes.gtceu
        .assembly_line(id('hellforge'))
        .itemInputs(
            'gtceu:calamatium_frame',
            '12x #gtceu:circuits/uev',
            '32x kubejs:uhv_high_strength_panel',
            '8x gtceu:neutronium_huge_fluid_pipe',
            '32x gtceu:uhv_field_generator',
            '24x gtceu:uhv_electric_pump',
            '4x gtceu:calamatium_rotor',
            '32x gtceu:isovol_screw'
        )
        .inputFluids('start_core:flamewake_solvent 240000', 'gtceu:utopian_akreyrium 60000')
        .itemOutputs('start_core:hellforge')
        .duration(2800)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder.researchStack(Item.of('kubejs:heart_of_the_flame')).EUt(GTValues.VA[UHV]).CWUt(192)
        )
        .EUtVA(UEV);

    // === Cryostate ===

    event.recipes.gtceu
        .assembly_line(id('cryostate_quantum_chiller'))
        .itemInputs(
            'gtceu:isovol_frame',
            '12x #gtceu:circuits/uev',
            '32x kubejs:uhv_high_strength_panel',
            '8x gtceu:neutronium_huge_fluid_pipe',
            '32x gtceu:uhv_field_generator',
            '24x gtceu:uhv_electric_pump',
            '4x gtceu:isovol_rotor',
            '32x gtceu:calamatium_screw'
        )
        .inputFluids('gtceu:liquid_helium 1000000', 'gtceu:utopian_akreyrium 60000')
        .itemOutputs('gtceu:cryostate_quantum_chiller')
        .duration(1800)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder.researchStack(Item.of('gtceu:mega_vacuum_freezer')).EUt(GTValues.VA[UHV]).CWUt(192)
        )
        .EUtVA(UEV);

    // === HAM ===

    event.recipes.gtceu
        .assembly_line(id('mega_abs'))
        .itemInputs(
            'gtceu:uhv_alloy_smelter',
            '12x #gtceu:circuits/uev',
            '8x gtceu:uhv_field_generator',
            '6x gtceu:dense_ancient_netherite_plate',
            '4x gtceu:uhv_robot_arm',
            '12x gtceu:uhv_fluid_regulator',
            '12x gtceu:ruthenium_trinium_americium_neutronate_quadruple_wire',
            '4x gtceu:calamatium_rotor',
            '4x gtceu:cerium_tritelluride_spring',
            '8x gtceu:calamatium_screw'
        )
        .inputFluids(
            'gtceu:indium_tin_lead_cadmium_soldering_alloy 13824',
            'gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 10368',
            'gtceu:utopian_akreyrium 12000',
            'gtceu:perfluoroelastomer_rubber 8640'
        )
        .itemOutputs('gtceu:mega_abs')
        .duration(1800)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder.researchStack(Item.of('gtceu:super_abs')).EUt(GTValues.VHA[UHV]).CWUt(160)
        )
        .EUtVHA(UEV);

    event.recipes.gtceu
        .assembly_line(id('super_compact_heat_chamber'))
        .itemInputs(
            'gtceu:heat_chamber',
            '4x #gtceu:circuits/uev',
            'gtceu:double_prismalium_plate',
            'gtceu:double_ancient_netherite_plate',
            'gtceu:uhv_field_generator',
            '64x kubejs:uepic_chip',
            '64x kubejs:uepic_chip',
            '32x kubejs:uepic_chip',
            '48x gtceu:stellarium_single_wire'
        )
        .inputFluids('gtceu:trinaquadalloy 6912', 'gtceu:tritanium 1728')
        .itemOutputs('gtceu:super_compact_heat_chamber')
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder
                .researchStack(Item.of('gtceu:super_pressure_heat_chamber'))
                .EUt(GTValues.VHA[UHV])
                .CWUt(160)
        )
        .duration(4000)
        .EUtVHA(UHV);

    event.recipes.gtceu
        .assembly_line(id('omega_pressure_heat_chamber'))
        .itemInputs(
            'gtceu:super_pressure_heat_chamber',
            '4x #gtceu:circuits/uiv',
            'gtceu:double_stellarium_plate',
            'gtceu:double_nyanium_plate',
            'gtceu:uev_field_generator',
            '64x kubejs:uepic_chip',
            '64x kubejs:uepic_chip',
            '64x kubejs:uepic_chip',
            '64x kubejs:uepic_chip',
            '32x kubejs:uepic_chip',
            '48x gtceu:ancient_runicalium_single_wire'
        )
        .inputFluids('gtceu:ancient_netherite 6912', 'gtceu:calamatium 1728')
        .itemOutputs('gtceu:omega_pressure_heat_chamber')
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder
                .researchStack(Item.of('gtceu:super_compact_heat_chamber'))
                .EUt(GTValues.VHA[UEV])
                .CWUt(192)
        )
        .duration(4800)
        .EUtVHA(UEV);
});
