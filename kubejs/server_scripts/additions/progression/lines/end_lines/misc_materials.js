ServerEvents.recipes((event) => {
    const id = global.id;

    event.remove({ output: 'minecraft:end_crystal' });
    event.remove({ input: 'minecraft:end_crystal' });
    event
        .shaped('minecraft:end_crystal', ['GGG', 'GEG', 'PCP'], {
            G: 'gtceu:fusion_glass',
            E: 'gtceu:quantum_eye',
            P: 'gtceu:double_void_plate',
            C: 'kubejs:helish_star',
        })
        .id('start:shaped/end_crystal');

    event.recipes.gtceu
        .mixer(id('hafnide_ito_ceramic'))
        .itemInputs('14x gtceu:hafnide_ceramic_base_dust', '7x gtceu:indium_tin_oxide_dust')
        .itemOutputs('21x gtceu:hafnide_ito_ceramic_dust')
        .duration(856)
        .EUtVHA(UEV);

    event.recipes.gtceu
        .large_chemical_reactor(id('indium_tin_oxide'))
        .itemInputs('2x gtceu:indium_dust', '2x gtceu:tin_dust')
        .inputFluids('gtceu:oxygen 3000')
        .itemOutputs('7x gtceu:indium_tin_oxide_dust')
        .duration(462)
        .EUtVA(UHV);

    event.remove({ output: 'gtceu:hot_diamane_ingot' });
    event.recipes.gtceu
        .heat_chamber(id('hot_diamane'))
        .itemInputs('3x gtceu:graphene_dust', '1x gtceu:diamond_dust')
        .inputFluids('gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 36')
        .itemOutputs('1x gtceu:hot_diamane_ingot')
        .duration(140)
        .EUtVHA(UV);

    event.recipes.gtceu
        .large_chemical_reactor(id('iridium_iv_oxide'))
        .itemInputs('1x gtceu:iridium_dust')
        .inputFluids('gtceu:oxygen 2000')
        .itemOutputs('3x gtceu:iridium_iv_oxide_dust')
        .duration(228)
        .EUtVA(LuV);

    event.recipes.gtceu
        .large_chemical_reactor(id('bismuth_iii_oxide'))
        .itemInputs('26x gtceu:bismuth_3_nitrate_dust')
        .inputFluids('minecraft:water 3000')
        .itemOutputs('5x gtceu:bismuth_iii_oxide_dust')
        .outputFluids('gtceu:nitric_acid 6000')
        .duration(328)
        .EUtVHA(LuV);

    event.recipes.gtceu
        .mixer(id('bismuth_iridate'))
        .itemInputs('5x gtceu:bismuth_iii_oxide_dust', '6x gtceu:iridium_iv_oxide_dust')
        .itemOutputs('11x gtceu:bismuth_iridate_dust')
        .duration(412)
        .EUtVA(ZPM);

    // Draconic
    event.recipes.gtceu
        .fermenter(id('dragon_cell_growth'))
        .itemInputs('kubejs:draconic_stem_cells', '2x gtceu:void_ring')
        .inputFluids('gtceu:sterilized_growth_medium 50000', 'gtceu:radon 100000', 'gtceu:liquid_ender_air 500000')
        .outputFluids('gtceu:dragon_breath 500')
        .itemOutputs('3x gtceu:tiny_void_dust')
        .duration(2400)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(GTValues.VA[UIV] / 3);

    event.recipes.gtceu
        .injection_mixer(id('dragon_breath'))
        .itemInputs('gtceu:tiny_draconyallium_dust')
        .inputFluids('gtceu:radon 124000', 'gtceu:breath_hormone_complex 1000')
        .outputFluids('gtceu:dragon_breath 5000')
        .duration(1575)
        .EUt(GTValues.V[UIV] * 0.3)
        .cleanroom($StarTAbyssalContainmentMachine.ABYSSAL_CONTAINMENT_ROOM);

    event.recipes.gtceu
        .forge_hammer(id('scale_recycling'))
        .itemInputs('mysticalagradditions:dragon_scale')
        .itemOutputs('2x kubejs:draconic_scale_cells')
        .duration(200)
        .EUtVHA(UHV);

    event.recipes.gtceu
        .cutter(id('egg_separation'))
        .itemInputs('minecraft:dragon_egg')
        .inputFluids('gtceu:neutronium 50')
        .itemOutputs('kubejs:draconic_embryo', '8x kubejs:dragon_egg_shard')
        .duration(1000)
        .cleanroom($StarTAbyssalContainmentMachine.ABYSSAL_CONTAINMENT_ROOM)
        .EUtVHA(UIV);

    event.recipes.gtceu
        .macerator(id('shard_decomp'))
        .itemInputs('kubejs:dragon_egg_shard')
        .itemOutputs(
            '2x kubejs:draconic_scale_cells',
            'gtceu:small_draconyallium_dust',
            'gtceu:tiny_draconyallium_dust'
        )
        .duration(400)
        .cleanroom($StarTAbyssalContainmentMachine.ABYSSAL_CONTAINMENT_ROOM)
        .EUtVA(UHV);

    event.recipes.gtceu
        .autoclave(id('embryo_decomp'))
        .itemInputs('kubejs:draconic_embryo')
        .inputFluids('gtceu:nether_star_concentrate 640')
        .itemOutputs('12x kubejs:secreting_draconic_cells', '8x kubejs:draconic_stem_cells')
        .duration(600)
        .cleanroom($StarTAbyssalContainmentMachine.ABYSSAL_CONTAINMENT_ROOM)
        .EUtVHA(UIV);
});
