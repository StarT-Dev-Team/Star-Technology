ServerEvents.recipes(event => {
    const id = global.id;

    event.recipes.gtceu.heat_chamber(id('nether_star_concentrate'))
        .itemInputs('4x kubejs:energized_nether_star_shard', '2x gtceu:nether_star_dust')
        .inputFluids('gtceu:energized_blitz 720','gtceu:energized_blizz 720','gtceu:energized_basalz 720','gtceu:energized_blaze 720')
        .outputFluids('gtceu:nether_star_concentrate 576')
        .duration(240)
        .EUt(GTValues.VHA[GTValues.UEV]);

    event.recipes.gtceu.injection_mixer(id('helish_star'))
        .itemInputs('gtceu:gravi_star', '2x gtceu:warped_dust')
        .inputFluids('gtceu:flerovium 576')
        .itemOutputs('kubejs:helish_star')
        .duration(960)
        .EUt(GTValues.VA[GTValues.UV]);

    const WarpedMaceration = (type,size) => {
    event.recipes.gtceu.macerator(id(`warped_dust_nether_from_${type.split(':')[1]}`))
        .itemInputs(type)
        .itemOutputs(`${size}x gtceu:warped_dust`)
        .dimension('minecraft:the_nether')
        .duration(100 * size)
        .EUt(GTValues.VA[GTValues.LuV]);
    };
    WarpedMaceration('#chipped:warped_roots', 1);
    WarpedMaceration('#chipped:warped_fungus', 1);
    WarpedMaceration('minecraft:warped_wart_block', 9);

    //Sculk Variant
    event.recipes.gtceu.polarizer(id('ionized_sculk_dust'))
        .itemInputs('gtceu:sculk_dust')
        .itemOutputs('gtceu:ionized_sculk_dust')
        .duration(300)
        .EUt(GTValues.VA[GTValues.UV]);

    event.recipes.gtceu.large_chemical_reactor(id('sodium_over_sculk_to_echo'))
        .itemInputs('2x gtceu:sodium_over_sculk_dust','3x gtceu:silicon_dioxide_dust')
        .itemOutputs('2x gtceu:sodium_dust','5x gtceu:echo_shard_dust')
        .duration(320)
        .EUt(GTValues.VHA[GTValues.UEV]);
    
    //Ancient Netherite
    event.recipes.gtceu.assembler(id('ancient_netherite_reinforced_mesh'))
        .itemInputs('1x kubejs:netherite_reinforced_mesh', '4x gtceu:ancient_netherite_rod', '1x gtceu:ancient_netherite_ingot')
        .inputFluids('gtceu:niobium_nitride 576')
        .itemOutputs('1x kubejs:ancient_netherite_reinforced_mesh')
        .duration(100)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.remove({id: /^blast_ancient_netherite.*/});
    event.recipes.gtceu.electric_blast_furnace(id('hot_ancient_netherite_ingot'))
        .itemInputs('4x minecraft:gold_ingot','4x gtceu:ancient_debris_dust')
        .inputFluids('gtceu:argon 2000')
        .itemOutputs('1x gtceu:hot_ancient_netherite_ingot')
        .blastFurnaceTemp(13300)
        .duration(2500)
        .EUt(GTValues.VHA[GTValues.UHV]*2/3);

    event.recipes.gtceu.macerator(id('ancient_debris_dust'))
        .itemInputs('minecraft:ancient_debris')
        .itemOutputs('4x gtceu:ancient_debris_dust')
        .duration(124)
        .EUt(380644);

    // H.A.M Controller
    event.recipes.gtceu.assembly_line(id('mega_abs'))
        .itemInputs(
            'gtceu:uev_alloy_smelter', '8x #gtceu:circuits/uev', '4x gtceu:uev_field_generator', '4x gtceu:dense_ancient_netherite_plate',
            '2x gtceu:uev_robot_arm', '4x gtceu:uev_electric_pump', '12x kubejs:uev_microfluidic_flow_valve', '16x kubejs:uev_super_magnetic_core',
            '6x gtceu:seaborgium_palladium_enriched_estalt_flerovium_alloy_quadruple_wire', '2x gtceu:calamatium_rotor', '2x gtceu:polonium_bismide_spring', '8x gtceu:calamatium_screw'
        )
        .inputFluids(
            'gtceu:indium_tin_lead_cadmium_soldering_alloy 13824',
            'gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 10368',
            'gtceu:utopian_akreyrium 12000',
            'gtceu:perfluoroelastomer_rubber 8640'
        )
        .itemOutputs('gtceu:mega_abs')
        .duration(1800)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of('gtceu:alloy_blast_smelter'))
                .EUt(GTValues.VHA[GTValues.UEV])
                .CWUt(192)
            )
        .EUt(GTValues.VHA[GTValues.UIV]);

});