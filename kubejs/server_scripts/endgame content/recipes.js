ServerEvents.recipes(event => {
    const id = global.id;

    event.recipes.gtceu.assembler(id('netherite_reinforced_mesh'))
        .itemInputs('1x gtceu:carbon_fiber_mesh', '4x gtceu:netherite_rod', '1x minecraft:netherite_ingot')
        .inputFluids('gtceu:epoxy 288')
        .itemOutputs('kubejs:netherite_reinforced_mesh')
        .duration(100)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.mixer(id('new_soldering_alloy'))
        .itemInputs('14x gtceu:indium_dust', '3x gtceu:tin_dust', '2x gtceu:lead_dust', 'gtceu:cadmium_dust')
        .itemOutputs('20x gtceu:indium_tin_lead_cadmium_soldering_alloy_dust')
        .duration(400)
        .EUt(45000);
    
    event.recipes.gtceu.chemical_reactor(id('strontium_oxide'))
        .itemInputs('gtceu:strontium_dust')
        .inputFluids('gtceu:oxygen 1000')
        .itemOutputs('2x gtceu:strontium_oxide_dust')
        .duration(360)
        .EUt(320);

    event.recipes.gtceu.large_chemical_reactor(id('strontium_oxide'))
        .itemInputs('gtceu:strontium_dust')
        .inputFluids('gtceu:oxygen 1000')
        .itemOutputs('2x gtceu:strontium_oxide_dust')
        .duration(360)
        .EUt(320);

    event.recipes.gtceu.chemical_reactor(id('titanium_oxide'))
        .itemInputs('gtceu:titanium_dust')
        .inputFluids('gtceu:oxygen 1000')
        .itemOutputs('2x gtceu:titanium_oxide_dust')
        .duration(360)
        .EUt(320);

    event.recipes.gtceu.large_chemical_reactor(id('titanium_oxide'))
        .itemInputs('gtceu:titanium_dust')
        .inputFluids('gtceu:oxygen 1000')
        .itemOutputs('2x gtceu:titanium_oxide_dust')
        .duration(360)
        .EUt(320);

    event.recipes.gtceu.mixer(id('strontium_titanium_oxide'))
        .itemInputs('gtceu:strontium_oxide_dust', 'gtceu:titanium_oxide_dust')
        .itemOutputs('2x gtceu:strontium_titanium_oxide_dust')
        .duration(400)
        .EUt(420);

    event.recipes.gtceu.chemical_reactor(id('iron_selenide'))
        .itemInputs('gtceu:iron_dust', 'gtceu:selenium_dust')
        .itemOutputs('gtceu:iron_selenide_dust')
        .duration(360)
        .EUt(1460);

    event.recipes.gtceu.large_chemical_reactor(id('iron_selenide'))
        .itemInputs('gtceu:iron_dust', 'gtceu:selenium_dust')
        .itemOutputs('gtceu:iron_selenide_dust')
        .duration(360)
        .EUt(1460);

    event.recipes.gtceu.mixer(id('iron_selenide_over_strontium_titanium_oxide'))
        .itemInputs('gtceu:iron_selenide_dust', 'gtceu:strontium_titanium_oxide_dust')
        .itemOutputs('2x gtceu:iron_selenide_over_strontium_titanium_oxide_dust')
        .duration(1200)
        .EUt(240000);

    event.recipes.gtceu.large_chemical_reactor(id('iron_titanium_oxide'))
        .itemInputs('5x gtceu:ferrosilite_dust', '2x gtceu:titanium_oxide_dust')
        .itemOutputs('4x gtceu:iron_titanium_oxide_dust', '3x gtceu:silicon_dioxide_dust')
        .duration(960)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.mixer(id('astatine_bis_tritelluride_cobo_selenium'))
        .itemInputs('gtceu:astatine_dust', 'gtceu:bismuth_tritelluride_dust', '4x gtceu:cobalt_dust', 'gtceu:selenium_dust')
        .itemOutputs('7x gtceu:astatine_bis_tritelluride_cobo_selenium_dust')
        .duration(360)
        .circuit(3)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.mixer(id('astatine_bis_tritelluride_cobo_selenium_over_iron_titanium_oxide_dust'))
        .itemInputs('gtceu:astatine_bis_tritelluride_cobo_selenium_dust', 'gtceu:iron_titanium_oxide_dust')
        .itemOutputs('2x gtceu:astatine_bis_tritelluride_cobo_selenium_over_iron_titanium_oxide_dust')
        .duration(480)
        .circuit(1)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.large_chemical_reactor(id('tungsten_disulfide'))
        .itemInputs('4x gtceu:tungsten_trioxide_dust')
        .inputFluids('gtceu:hydrogen_sulfide 3000')
        .itemOutputs('3x gtceu:tungsten_disulfide_dust')
        .outputFluids('minecraft:water 3000')
        .duration(480)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    event.recipes.gtceu.polarizer(id('magnetic_zapolgium'))
        .itemInputs('gtceu:zapolgium_ingot')
        .itemOutputs('gtceu:magnetic_zapolgium_ingot')
        .duration(80)
        .EUt(GTValues.VA[GTValues.UV]);

    event.recipes.gtceu.polarizer(id('magnetic_pure_netherite'))
        .itemInputs('gtceu:pure_netherite_ingot')
        .itemOutputs('gtceu:magnetic_pure_netherite_ingot')
        .duration(80)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.mixer(id('cerium_tritelluride'))
        .itemInputs('gtceu:cerium_dust', '3x gtceu:tellurium_dust')
        .itemOutputs('4x gtceu:cerium_tritelluride_dust')
        .duration(900)
        .circuit(4)
        .EUt((GTValues.VHA[GTValues.UHV]));

    event.recipes.gtceu.mixer(id('polonium_bismide'))
        .itemInputs('gtceu:polonium_dust', 'gtceu:bismuth_dust')
        .itemOutputs('2x gtceu:polonium_bismide_dust')
        .duration(600)
        .circuit(2)
        .EUt((GTValues.VHA[GTValues.UEV]));

    event.recipes.gtceu.advanced_chemistry(id('platinum_yttrium_composite'))
        .itemInputs('4x gtceu:uranium_triplatinum_dust', '26x gtceu:yttrium_barium_cuprate_dust', '12x gtceu:carbon_dust')
        .itemOutputs('22x gtceu:platinum_yttrium_composite_dust', '3x gtceu:uraninite_dust')
        .outputFluids('gtceu:carbon_dioxide 6000')
        .duration(152 * 22)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.advanced_chemistry(id('polonium_iridide_acid'))
        .itemInputs('3x gtceu:iridium_iv_oxide_dust', '2x gtceu:polonium_dust')
        .inputFluids('gtceu:phosphoric_acid 1000')
        .outputFluids('gtceu:polonium_iridide_acid 1000', 'gtceu:oxygen 2000')
        .duration(1123)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.large_chemical_reactor(id('polonium_flux'))
        .itemInputs('22x gtceu:platinum_yttrium_composite_dust')
        .inputFluids('gtceu:polonium_iridide_acid 2000', 'gtceu:hydrogen 10000')
        .itemOutputs('30x gtceu:polonium_flux_dust')
        .outputFluids('minecraft:water 8000')
        .duration(840)
        .EUt(GTValues.VHA[GTValues.UEV]);

    event.recipes.gtceu.mixer(id('hafnide_ito_ceramic'))
        .itemInputs('14x gtceu:hafnide_ceramic_base_dust', '7x gtceu:indium_tin_oxide_dust')
        .itemOutputs('21x gtceu:hafnide_ito_ceramic_dust')
        .duration(1056)
        .EUt(GTValues.VHA[GTValues.UEV]);

    event.recipes.gtceu.large_chemical_reactor(id('indium_tin_oxide'))
        .itemInputs('2x gtceu:indium_dust', '2x gtceu:tin_dust')
        .inputFluids('gtceu:oxygen 3000')
        .itemOutputs('7x gtceu:indium_tin_oxide_dust')
        .duration(462)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.assembler(id('extreme_temperature_smelting_casing'))
        .itemInputs('4x gtceu:calamatium_plate', '2x gtceu:astatium_bioselex_carbonite_plate', 'gtceu:enriched_estalt_frame')
        .itemOutputs('2x kubejs:extreme_temperature_smelting_casing')
        .circuit(6)
        .duration(50)
        .EUt(16);

    event.recipes.gtceu.assembler(id('subzero_casing'))
        .itemInputs('4x gtceu:aluminium_plate', '2x gtceu:pure_netherite_plate', 'gtceu:void_frame')
        .itemOutputs('2x kubejs:subzero_casing')
        .circuit(6)
        .duration(50)
        .EUt(16);

    event.recipes.gtceu.compressor(id('reinforced_brimstone_casing'))
        .itemInputs('16x kubejs:brimstone')
        .itemOutputs('kubejs:reinforced_brimstone_casing')
        .duration(320)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.compressor(id('reinforced_cryostone_casing'))
        .itemInputs('16x kubejs:cryostone')
        .itemOutputs('kubejs:reinforced_cryostone_casing')
        .duration(320)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.autoclave(id('brimstone'))
        .itemInputs('kubejs:brimstone', '64x minecraft:netherrack')
        .inputFluids('gtceu:blaze 500')
        .itemOutputs('kubejs:brimstone')
        .chancedOutput('kubejs:brimstone', 6660, 0)
        .duration(240)
        .EUt(GTValues.VHA[GTValues.LuV]);

    event.recipes.gtceu.autoclave(id('cryostone'))
        .itemInputs('kubejs:cryostone', '64x minecraft:netherrack')
        .inputFluids('gtceu:liquid_helium 500')
        .itemOutputs('kubejs:cryostone')
        .chancedOutput('kubejs:cryostone', 6660, 0)
        .duration(240)
        .EUt(GTValues.VHA[GTValues.LuV]);

    event.recipes.gtceu.mixer(id('thorium_plut_duranide_241'))
        .itemInputs('4x gtceu:thorium_dust', 'gtceu:duranium_dust', '3x gtceu:plutonium_241_dust')
        .itemOutputs('8x gtceu:thorium_plut_duranide_241_dust')
        .circuit(4)
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UV]);

    event.remove({output: 'gtceu:hot_diamane_ingot'});
    event.recipes.gtceu.heat_chamber(id('hot_diamane'))
        .itemInputs('3x gtceu:graphene_dust', '1x gtceu:diamond_dust')
        .inputFluids('gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 36')
        .itemOutputs('1x gtceu:hot_diamane_ingot')
        .duration(140)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.large_chemical_reactor(id('iridium_iv_oxide'))
        .itemInputs('1x gtceu:iridium_dust')
        .inputFluids('gtceu:oxygen 2000')
        .itemOutputs('3x gtceu:iridium_iv_oxide_dust')
        .duration(228)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.large_chemical_reactor(id('bismuth_iii_oxide'))
        .itemInputs('26x gtceu:bismuth_3_nitrate_dust')
        .inputFluids('minecraft:water 3000')
        .itemOutputs('5x gtceu:bismuth_iii_oxide_dust')
        .outputFluids('gtceu:nitric_acid 6000')
        .duration(328)
        .EUt(GTValues.VHA[GTValues.LuV]);

    event.recipes.gtceu.mixer(id('bismuth_iridate'))
        .itemInputs('5x gtceu:bismuth_iii_oxide_dust', '6x gtceu:iridium_iv_oxide_dust')
        .itemOutputs('11x gtceu:bismuth_iridate_dust')
        .duration(412)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu.assembly_line(id('sterile_cleaning_maintenance_hatch'))
        .itemInputs(
            '1x gtceu:uev_machine_hull', '2x gtceu:uev_robot_arm', '1x gtceu:uev_emitter', '3x #gtceu:circuits/uev', 
            '2x gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate_large_fluid_pipe', '1x gtceu:magmada_alloy_rotor', 
            '4x gtceu:blacklight', '4x gtceu:cerium_tritelluride_single_cable'
        )
        .inputFluids(
            'gtceu:indium_tin_lead_cadmium_soldering_alloy 2304',
            'gtceu:perfluoroelastomer_rubber 1152'
        )
        .itemOutputs('start_core:sterile_cleaning_maintenance_hatch')
        .duration(200)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of('gtceu:cleaning_maintenance_hatch'))
                .EUt(GTValues.VHA[GTValues.UEV])
                .CWUt(192)
            )
        .EUt(GTValues.VHA[GTValues.UIV]);

    event.remove({output: 'minecraft:end_crystal'});
    event.remove({input: 'minecraft:end_crystal'});
    event.shaped('minecraft:end_crystal', [
        'GGG',
        'GEG',
        'PCP'
    ], {
        G: 'gtceu:fusion_glass',
        E: 'gtceu:quantum_eye',
        P: 'gtceu:double_void_plate',
        C: 'kubejs:helish_star'
    }).id('start:shaped/end_crystal');

    // Draconic
    event.recipes.gtceu.fermenter(id('dragon_cell_growth'))
        .itemInputs('kubejs:draconic_stem_cells')
        .inputFluids('gtceu:sterilized_growth_medium 50000', 'gtceu:radon 75000', 'gtceu:ender_air 500000')
        .outputFluids('gtceu:dragon_breath 500')
        .duration(2400)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(GTValues.VHA[GTValues.UIV]);

    event.recipes.gtceu.injection_mixer(id('dragon_breath'))
        .itemInputs('gtceu:tiny_draconyallium_dust')
        .inputFluids('gtceu:radon 74950','gtceu:breath_hormone_complex 50')
        .outputFluids('gtceu:dragon_breath 1500')
        .duration(375)
        .EUt(GTValues.V[GTValues.UIV] * .3)
        .cleanroom($StarTAbyssalContainmentMachine.ABYSSAL_CONTAINMENT_ROOM);

    event.recipes.gtceu.forge_hammer(id('scale_recycling'))
        .itemInputs('mysticalagradditions:dragon_scale')
        .itemOutputs('2x kubejs:draconic_scale_cells')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.cutter(id('egg_separation'))
        .itemInputs('minecraft:dragon_egg')
        .inputFluids('gtceu:neutronium 10')
        .itemOutputs('kubejs:draconic_embryo','12x kubejs:dragon_egg_shard')
        .duration(1000)
        .cleanroom($StarTAbyssalContainmentMachine.ABYSSAL_CONTAINMENT_ROOM)
        .EUt(GTValues.VHA[GTValues.UIV]);

    event.recipes.gtceu.macerator(id('shard_decomp'))
        .itemInputs('kubejs:dragon_egg_shard')
        .itemOutputs('2x kubejs:draconic_scale_cells','gtceu:small_draconyallium_dust','gtceu:tiny_draconyallium_dust')
        .duration(400)
        .cleanroom($StarTAbyssalContainmentMachine.ABYSSAL_CONTAINMENT_ROOM)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.autoclave(id('embryo_decomp'))
        .itemInputs('kubejs:draconic_embryo')
        .inputFluids('gtceu:nether_star_concentrate 320')
        .itemOutputs('16x kubejs:secreting_draconic_cells','4x kubejs:draconic_stem_cells')
        .duration(600)
        .cleanroom($StarTAbyssalContainmentMachine.ABYSSAL_CONTAINMENT_ROOM)
        .EUt(GTValues.VHA[GTValues.UIV]);

    event.recipes.gtceu.chemical_reactor(id('better_draco_stem_cells'))
        .itemInputs('gtceu:small_draconyallium_dust')
        .inputFluids('gtceu:abyssal_nutrient_blend 500','gtceu:draconic_enrichment_serum 500')
        .itemOutputs('48x kubejs:draconic_stem_cells')
        .outputFluids('gtceu:condensed_abyssal_nutrient_blend 400')
        .duration(300)
        .cleanroom($StarTAbyssalContainmentMachine.ABYSSAL_CONTAINMENT_ROOM)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.large_chemical_reactor(id('better_draco_stem_cells'))
        .itemInputs('gtceu:draconyallium_dust')
        .inputFluids('gtceu:abyssal_nutrient_blend 500','gtceu:draconic_enrichment_serum 500')
        .itemOutputs('48x kubejs:draconic_stem_cells')
        .outputFluids('gtceu:condensed_abyssal_nutrient_blend 400')
        .duration(300)
        .cleanroom($StarTAbyssalContainmentMachine.ABYSSAL_CONTAINMENT_ROOM)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.assembly_line(id('abyssal_containment_room'))
        .itemInputs(
            'gtceu:draco_abyssal_frame','8x kubejs:draco_ware_casing','4x kubejs:abyssal_inductor','12x kubejs:uiv_computational_matrix',
            '2x kubejs:uiv_micropower_router','8x kubejs:uiv_microfluidic_flow_valve','64x gtceu:fine_rhenium_super_composite_alloy_wire','4x gtceu:uiv_field_generator',
            '64x kubejs:uepic_chip','64x kubejs:uepic_chip','64x kubejs:uepic_chip','32x kubejs:uepic_chip'
        )
        .inputFluids(
            'gtceu:indium_tin_lead_cadmium_soldering_alloy 46080',
            'gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 8640',
            'gtceu:perfluoroelastomer_rubber 5760'
        )
        .itemOutputs('start_core:abyssal_containment_room')
        .duration(800)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of('kubejs:abyssal_inductor_hull'))
                .EUt(GTValues.VHA[GTValues.UIV])
                .CWUt(224)
            )
        .EUt(GTValues.VA[GTValues.UIV]);

    // Lepton TlSb
    event.recipes.gtceu.mixer(id('thallium_antimonide'))
        .itemInputs('gtceu:thallium_dust','gtceu:antimony_dust')
        .itemOutputs('2x gtceu:thallium_antimonide_dust')
        .duration(160)
        .EUt(GTValues.VHA[GTValues.UV] * 3);

    event.recipes.gtceu.quantum_compressor_infusion(id('lepton_akreyrium_catalyst'))
        .itemInputs('kubejs:crystalline_akreyrium')
        .inputFluids('gtceu:dense_electron_akreyrium 100','gtceu:dense_muon_akreyrium 200','gtceu:dense_tau_akreyrium 200')
        .itemOutputs('kubejs:leptonic_akreyrium_catalyst')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.injection_mixer(id('lepton_dense_akreyrium'))
        .itemInputs('kubejs:leptonic_akreyrium_catalyst')
        .inputFluids('gtceu:lepton_flux_akreyrium 500')
        .outputFluids('gtceu:lepton_dense_akreyrium 1000')
        .duration(240)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.folding_akreyrium_stabiliser(id('lepton_resonant_thallium_antimonide'))
        .itemInputs('gtceu:gray_glass_lens','gtceu:thallium_antimonide_dust')
        .inputFluids('gtceu:lepton_dense_akreyrium 1000')
        .itemOutputs('gtceu:gray_glass_lens','gtceu:lepton_resonant_thallium_antimonide_dust')
        .outputFluids('gtceu:utopian_akreyrium 750','gtceu:lepton_coalescing_superalloy 416')
        .duration(240)
        .EUt(GTValues.VHA[GTValues.UHV]);

});
