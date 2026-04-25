
ServerEvents.recipes(event => {
    const id = global.id;

    // Machine

    event.recipes.gtceu.assembly_line(id('chemical_plant_controller'))
        .itemInputs('gtceu:zpm_machine_hull', '4x gtceu:zpm_electric_motor', 'gtceu:naquadah_alloy_rotor', '2x gtceu:niobium_titanium_large_fluid_pipe', '4x #gtceu:circuits/uv')
        .inputFluids('gtceu:soldering_alloy 1872', 'gtceu:naquadria 288')
        .itemOutputs('gtceu:chemical_plant')
        .duration(1200)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of('gtceu:large_chemical_reactor'))
                .EUt(GTValues.VHA[GTValues.UV])
                .CWUt(64)
            )
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.assembly_line(id(`synthesis_plant_controller`))
        .itemInputs('gtceu:zpm_machine_hull', '4x gtceu:zpm_sensor', '4x gtceu:zpm_robot_arm', '4x gtceu:zpm_fluid_regulator', '2x gtceu:naquadah_alloy_rotor',
            '6x gtceu:niobium_titanium_large_fluid_pipe', '6x #gtceu:circuits/uv'
        )
        .inputFluids('gtceu:soldering_alloy 1872', 'gtceu:naquadria 288')
        .itemOutputs('gtceu:advanced_synthesis_plant')
        .duration(1200)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of('gtceu:zpm_chemical_reactor'))
                .EUt(GTValues.VHA[GTValues.UV])
                .CWUt(64)
            )
        .EUt(GTValues.VHA[GTValues.UHV])

    event.recipes.gtceu.assembler(id('peek_casing'))
        .itemInputs('gtceu:robust_machine_casing')
        .inputFluids('gtceu:polyether_ether_ketone 216')
        .itemOutputs('kubejs:peek_casing')
        .duration(600)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.assembly_line(id('atomic_synthesis_plant_controller'))
        .itemInputs('gtceu:uiv_machine_hull', '6x kubejs:rhenotax_coil', '8x gtceu:uiv_field_generator', '12x #gtceu:circuits/uiv',
            '6x gtceu:uiv_electric_motor', '4x gtceu:nyanium_gear', '12x gtceu:draco_abyssal_rotor', '6x gtceu:small_draconyallium_gear',
            '2x gtceu:uiv_robot_arm', '6x gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate_huge_fluid_pipe', '4x gtceu:uiv_fluid_regulator',
            '4x gtceu:lepton_resonant_thallium_antimonide_spring', '64x gtceu:fine_rhenium_super_composite_alloy_wire', '32x gtceu:fine_rhenium_super_composite_alloy_wire')
        .inputFluids('gtceu:naquadated_soldering_alloy 18720', 'gtceu:perfluoroelastomer_rubber 15696', 'gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 10080', 'gtceu:calamatium 5040')
        .itemOutputs('gtceu:atomic_synthesis_plant')
        .duration(1200)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of('gtceu:chemical_plant'))
                .EUt(GTValues.VA[GTValues.UIV])
                .CWUt(216)
            )
        .EUt(GTValues.VHA[GTValues.UXV]);

    event.recipes.gtceu.assembler(id('cattomolymer_casing'))
        .itemInputs('kubejs:nyanium_machine_casing')
        .inputFluids('gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 216')
        .itemOutputs('kubejs:cattomolymer_casing')
        .EUt(GTValues.VHA[GTValues.UHV])
        .duration(750);

    event.recipes.gtceu.assembler(id('rhenotax_coil'))
        .itemInputs('gtceu:astrenalloy_nx_frame', '8x gtceu:rhenate_w_double_wire', '16x gtceu:tantalum_carbide_foil',
            '32x gtceu:hafnide_ito_ceramic_ring', '64x gtceu:neutronium_silicon_carbide_foil')
        .inputFluids('gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 432')
        .itemOutputs('kubejs:rhenotax_coil')
        .EUt(GTValues.VHA[GTValues.UIV])
        .duration(1200);

    // === Chemical Skips ===
    const getDataItem = (cwu) => (cwu >= 160) ? 'start_core:data_dna_disk' : (cwu >=32) ? 'gtceu:data_module' : 'gtceu:data_orb' ;

    const chemicalSkip = (recId, notConsumable, inputsI, inputsF, outputsI, outputsF, circuit, circuitNum, duration, cleanroomType, cwuT, voltage, researched) => {

        let dataItem = getDataItem(cwuT);

        let chemRecipe = event.recipes.gtceu.chemical_skip(id(recId))
            
        if (notConsumable) {
            chemRecipe.notConsumable(notConsumable);
        }
        if (inputsI) {
            chemRecipe.itemInputs(inputsI);
        }
        if (inputsF) {
            chemRecipe.inputFluids(inputsF);
        }
        if (outputsI) {
            chemRecipe.itemOutputs(outputsI);
        }
        if (outputsF) {
            chemRecipe.outputFluids(outputsF);
        }
        if (circuit) {
            chemRecipe.circuit(circuitNum);
        }
        switch(cleanroomType) {
            case 'clean': {
                chemRecipe.cleanroom(CleanroomType.CLEANROOM);
                break;
            }
            case 'sterile': {
                chemRecipe.cleanroom(CleanroomType.STERILE_CLEANROOM);
                break;
            }
        }

        chemRecipe
            .duration(duration)
            .EUt(GTValues.VHA[GTValues[voltage]]);
            
        // Research pushed to theta 2 (it's not liking multiple outputs)
        //     .stationResearch(
        //         researchRecipeBuilder => researchRecipeBuilder
        //             .researchStack(Item.of(researched))
        //             .EUt(GTValues.VHA[GTValues[voltage]] / 2)
        //             .CWUt(cwuT)
        //     )  

        // if (recId == 'scheelite_line') return;

        // event.recipes.gtceu.research_station(`1_x_${researched.replace(':','_')}`)
        //     .itemInputs(dataItem)
        //     .itemInputs(researched)
        //     .itemOutputs(
        //         Item.of(
        //             `${dataItem}`,
        //             `{assembly_line_research:{research_id:"1x_${researched.replace(':','_')}",research_type:"gtceu:chemical_skip"}}`
        //         )
        //     )
        //     .CWUt(cwuT)
        //     .totalCWU(cwuT * 1200)
        //     .EUt(GTValues.VHA[GTValues[voltage]] / 2);
    }

    chemicalSkip('fluoroantimonic_acid_skip', '', [
        'gtceu:antimony_dust'
    ], [
        'gtceu:hydrogen 2000', 'gtceu:fluorine 7000'
    ], '', [
        'gtceu:fluoroantimonic_acid 1000'
    ], false, '', 150, '', 24, 'IV', 'gtceu:fluoroantimonic_acid_bucket');

    // event.recipes.gtceu.chemical_skip(id('polybenzimidazole_phenol_skip'))
    //     .inputFluids('gtceu:benzene 2000', 'gtceu:phenol 1000', 'gtceu:carbon_monoxide 2000', 'gtceu:ammonia 4000', 'gtceu:oxygen 6000')
    //     .outputFluids('gtceu:polybenzimidazole 1000', 'minecraft:water 9000')
    //     .circuit(24)
    //     .duration(315)
    //     .EUt(GTValues.VHA[GTValues.ZPM]);

    // event.recipes.gtceu.chemical_skip(id('polybenzimidazole_no_phenol_skip'))
    //     .inputFluids('gtceu:benzene 3000', 'gtceu:carbon_dioxide 2000', 'gtceu:ammonia 4000', 'gtceu:oxygen 5000')
    //     .outputFluids('gtceu:polybenzimidazole 1000', 'minecraft:water 9000')
    //     .circuit(25)
    //     .duration(315)
    //     .EUt(GTValues.VHA[GTValues.ZPM]);

    chemicalSkip('plat_line_skip', '', [
        '12x gtceu:platinum_group_sludge_dust'
    ], [
        'gtceu:aqua_regia 1500'
    ], [
        'gtceu:platinum_dust', 'gtceu:palladium_dust', 'gtceu:ruthenium_dust', 'gtceu:rhodium_dust', 'gtceu:osmium_dust', 'gtceu:iridium_dust'
    ], [
        'gtceu:nitric_acid 500', 'gtceu:hydrochloric_acid 1000'
    ], false, '', 370, '', 40, 'ZPM', 'gtceu:platinum_dust');

    chemicalSkip('tfe_skip', '', [
        '2x gtceu:carbon_dust'
    ], [
        'gtceu:fluorine 4000'
    ], '', [
        'gtceu:tetrafluoroethylene 1000'
    ], true, 1, 480, '', 32, 'LuV', 'gtceu:tetrafluoroethylene_bucket');

    // event.recipes.gtceu.chemical_skip(id('epoxy_skip'))
    //     .inputFluids('gtceu:benzene 2000', 'gtceu:propene 2000', 'gtceu:chlorine 2000', 'gtceu:oxygen 4000')
    //     .outputFluids('gtceu:epoxy 1000', 'gtceu:hydrochloric_acid 1000')
    //     .duration(150)
    //     .circuit(12)
    //     .EUt(GTValues.VHA[GTValues.LuV]);

    chemicalSkip('naquadah_line_skip', '', [
        '5x gtceu:naquadah_dust'
    ], [
        'gtceu:fluoroantimonic_acid 1000'
    ], [
        'gtceu:enriched_naquadah_dust', 'gtceu:naquadria_dust', 'gtceu:trinium_dust', 'gtceu:antimony_dust', 'gtceu:indium_phosphide_dust'
    ], [
        'gtceu:hydrogen 2000', 'gtceu:fluorine 7000'
    ], false, '', 845, '', 72, 'ZPM', 'gtceu:naquadria_dust');

    chemicalSkip('uranite_line_skip', '', [
        '20x gtceu:uraninite_dust'
    ], [
        'gtceu:hydrofluoric_acid 40000'
    ], [
        '9x gtceu:uranium_dust', 'gtceu:uranium_235_dust'
    ], [
        'gtceu:fluorine 40000', 'gtceu:hydrogen 40000', 'gtceu:oxygen 10000'
    ], false, '', 240, '', 32, 'LuV', 'gtceu:uranium_235_dust');

    chemicalSkip('sodium_persulfate_skip', '', [
        '1x gtceu:sodium_dust', '1x gtceu:sulfur_dust'
    ], [
        'gtceu:oxygen 4000'
    ], '', [
        'gtceu:sodium_persulfate 500'
    ], false, '', 30, '', 12, 'EV', 'gtceu:sodium_persulfate_bucket');

    chemicalSkip('iron_iii_chloride_skip', '', [
        '1x gtceu:iron_dust'
    ], [
        'gtceu:chlorine 3000'
    ], '', [
        'gtceu:iron_iii_chloride 1000'
    ], false, '', 30, '', 12, 'EV', 'gtceu:iron_iii_chloride_bucket');

    chemicalSkip('cupric_chloride_solution_skip', '', [
        '1x gtceu:copper_dust'
    ], [
        'gtceu:hydrogen 2000','gtceu:chlorine 3000'
    ], '', [
        'gtceu:cupric_chloride_solution 2000'
    ], false, '', 30, '', 20, 'IV', 'gtceu:cupric_chloride_solution_bucket');

    chemicalSkip('borax_skip', '', [
        '4x gtceu:boron_dust', '14x gtceu:sodium_bisulfate_dust'
    ], [
        'minecraft:water 12000'
    ], [
        '23x gtceu:borax_dust'
    ], [
        'gtceu:diluted_sulfuric_acid 3000', 'gtceu:oxygen 6000'
    ], false, '', 720, '', 20, 'IV', 'gtceu:borax_dust');

    // event.recipes.gtceu.chemical_skip(id('peek_skip'))
    //     .inputFluids('gtceu:benzene 2000','gtceu:toluene 1000','gtceu:propene 1000','gtceu:oxygen 2000')
    //     .outputFluids('gtceu:polyether_ether_ketone 4896','gtceu:acetone 1000','gtceu:hydrogen 4000')
    //     .duration(64)
    //     .circuit(5)
    //     .EUt(GTValues.VA[GTValues.UEV] * .3);

    chemicalSkip('14_butanediol_skip', [
        'gtceu:palladium_on_carbon_dust'
    ], '', [
        'gtceu:benzene 1500','gtceu:oxygen 6000','gtceu:hydrogen 18000'
    ], '', [
        'gtceu:14_butanediol 3000','gtceu:methanol 3000'
    ], true, 8, 420, '', 160, 'UHV', 'gtceu:14_butanediol_bucket');

    chemicalSkip('benzophenone_3344_tetracarboxylic_dianhydride_skip', '', '', [
        'gtceu:toluene 1000','gtceu:benzene 1375','gtceu:oxygen 9875','gtceu:acetic_acid 1000','gtceu:chlorine 3000'
    ], [
        '30x gtceu:benzophenone_3344_tetracarboxylic_dianhydride_dust'
    ], [
        'gtceu:hydrogen_chloride 3000','gtceu:carbon_dioxide 250','minecraft:water 4125','gtceu:hydrogen 3000'
    ], true, 6, 480, '', 128, 'UV', 'gtceu:benzophenone_3344_tetracarboxylic_dianhydride_dust');

    chemicalSkip('tungstate_line', '', [
        '1x gtceu:tungstate_dust'
    ], [
        'gtceu:hydrochloric_acid 2000'
    ], [
        '1x gtceu:tungsten_trioxide_dust','1x gtceu:lithium_dust'
    ], [
        'gtceu:chlorine 2000','gtceu:hydrogen 2000'
    ], false, '', 175, '', 72, 'ZPM', 'gtceu:tungsten_trioxide_dust');

    chemicalSkip('scheelite_line', '', [
        '1x gtceu:scheelite_dust'
    ], [
        'gtceu:hydrochloric_acid 2000'
    ], [
        '1x gtceu:tungsten_trioxide_dust','1x gtceu:calcium_dust'
    ], [
        'gtceu:chlorine 2000','gtceu:hydrogen 2000'
    ], false, '', 175, '', 72, 'ZPM', 'gtceu:tungsten_trioxide_dust');

    chemicalSkip('mutagen_skip', '', [
        '64x gtceu:bio_chaff','64x gtceu:bio_chaff','64x gtceu:bio_chaff','24x gtceu:bio_chaff','5x gtceu:naquadria_dust'
    ], [
        'gtceu:distilled_water 77250'
    ], '', [
        'gtceu:mutagen 9000'
    ], false, '', 558, 'sterile', 192, 'UEV', 'gtceu:mutagen_bucket');

    chemicalSkip('silicon_carbide_skip', '', [
        '3x gtceu:silicon_dioxide_dust','2x gtceu:carbon_dust'
    ], [
        'gtceu:nitrogen 1000'
    ], [
        'gtceu:silicon_carbide_dust'
    ], [
        'gtceu:carbon_dioxide 1000'
    ], true, 0, 20, '', 20, 'LuV', 'gtceu:silicon_carbide_dust');

    chemicalSkip('glycerol_skip', '', [
        '3x gtceu:carbon_dust'
    ], [
        'gtceu:hydrogen 8000', 'gtceu:oxygen 3000'
    ], '', [
        'gtceu:glycerol 1000'
    ], true, 3, 160, '', 8, 'HV', 'gtceu:glycerol_bucket');

    chemicalSkip('bromine_skip', '', '', [
        'gtceu:salt_water 100000', 'gtceu:chlorine 3000'
    ], '', [
        'gtceu:bromine 2500', 'gtceu:chlorine 1000'
    ], false, '', 355, '', 160, 'LuV', 'gtceu:bromine_bucket');

    // event.recipes.gtceu.chemical_skip(id('polyvinyl_butyral_skip'))
    //     .itemInputs('1x gtceu:carbon_dust')
    //     .inputFluids('gtceu:oxygen 6000', 'gtceu:acetic_acid 576', 'gtceu:ethylene 576', 'gtceu:propene 1000', 'gtceu:hydrogen 2000')
    //     .outputFluids('gtceu:polyvinyl_butyral 576', 'minecraft:water 1000')
    //     .duration(75)
    //     .circuit(4)
    //     .EUt(GTValues.VHA[GTValues.LuV]);

    // event.recipes.gtceu.chemical_skip(id('polyvinyl_chloride_skip'))
    //     .inputFluids('gtceu:oxygen 8000', 'gtceu:ethylene 1000', 'gtceu:hydrochloric_acid 1000')
    //     .outputFluids('gtceu:polyvinyl_chloride 1512')
    //     .duration(24)
    //     .circuit(2)
    //     .EUt(GTValues.VHA[GTValues.IV]);

    chemicalSkip('polyphenylene_sulfide_skip', '', [
        '1x gtceu:sulfur_dust'
    ], [
        'gtceu:oxygen 8000', 'gtceu:benzene 1000', 'gtceu:chlorine 2000'
    ], '', [
        'gtceu:polyphenylene_sulfide 1500', 'gtceu:hydrochloric_acid 2000'
    ], true, 11, 48, '', 20, 'IV', 'gtceu:polyphenylene_sulfide_bucket');

    chemicalSkip('caprolactam_skip', [
        'gtceu:nickel_dust'
    ], '', [
        'gtceu:hydrogen 6000', 'gtceu:benzene 1000', 'gtceu:chlorine 1000', 'gtceu:nitric_oxide 1000'
    ], [
        '19x gtceu:caprolactam_dust'
    ], [
        'gtceu:hydrochloric_acid 1000'
    ], true, 14, 42, '', 20, 'IV', 'gtceu:caprolactam_dust');

    chemicalSkip('pcb_skip', '', '', [
        'gtceu:oxygen 3000', 'gtceu:benzene 6000', 'gtceu:chlorine 12000', 'gtceu:distilled_water 1000'
    ], '', [
        'gtceu:pcb_coolant 4000', 'gtceu:hydrochloric_acid 6000'
    ], false, '', 96, '', 32, 'LuV', 'gtceu:pcb_coolant_bucket');

    chemicalSkip('pure_netherite_skip', '', [
        '7x gtceu:debris_dust'
    ], [
        'gtceu:chlorine 4000', 'gtceu:hydrogen 7000', 'gtceu:fluorine 3000'
    ], [
        '8x gtceu:pure_netherite_dust', '1x gtceu:sulfur_dust', '1x gtceu:titanium_dust'
    ], [
        'gtceu:hydrochloric_acid 8000', 'gtceu:fluorine 3000'
    ], false, '', 385, '', 72, 'ZPM', 'gtceu:pure_netherite_dust');

    chemicalSkip('perchloric_acid', '', '', [
        'gtceu:chlorine 1000', 'gtceu:hydrogen 1000', 'gtceu:oxygen 4000'
    ], '', [
        'gtceu:perchloric_acid 1000'
    ], false, '', 100, '', 8, 'HV', 'gtceu:perchloric_acid_bucket');

    chemicalSkip(`zapolgium_skip`, '', [
        '4x gtceu:zapolite_dust','5x gtceu:potassium_hydroxide_dust'
    ], [
        'gtceu:hydrogen 2000','gtceu:hydrochloric_acid 2000'
    ], [
        '5x gtceu:zapolgium_dust','4x gtceu:bauxite_dust','10x gtceu:iodine_dust','4x gtceu:rock_salt_dust'
    ], [
        'minecraft:water 6000','gtceu:oxygen 5000'
    ], false, '', 66, '', 200, 'UIV', 'gtceu:zapolgium_dust');

    chemicalSkip('zirconium_skip', '', [
        '4x gtceu:zapolite_dust','5x gtceu:potassium_hydroxide_dust'
    ], [
        'gtceu:hydrogen 2000','gtceu:hydrochloric_acid 2000'
    ], [
        '5x gtceu:zapolgium_dust','4x gtceu:bauxite_dust','10x gtceu:iodine_dust','4x gtceu:rock_salt_dust'
    ], [
        'minecraft:water 6000','gtceu:oxygen 5000'
    ], false, '', 14, '', 200, 'UIV', 'gtceu:zirconium_dust');

    chemicalSkip('raw_growth_medium_skip', '', [
        '64x gtceu:bio_chaff','64x gtceu:bio_chaff','64x gtceu:bio_chaff','24x gtceu:bio_chaff','5x gtceu:naquadria_dust', 
            '12x gtceu:meat_dust', '5x gtceu:salt_dust', '6x gtceu:calcium_dust', 'gtceu:strontium_dust'
    ], [
        'gtceu:distilled_water 85000', 'gtceu:sulfuric_acid 3000', 'gtceu:phosphoric_acid 2500'
    ], [
        '2x gtceu:phosphorus_dust'
    ], [
        'gtceu:raw_growth_medium 16875', 'gtceu:diluted_sulfuric_acid 3000'
    ], false, '', 2, 'sterile', 240, 'UXV', 'gtceu:raw_growth_medium_bucket');

    // === Absolute Reductions ===

    // event.recipes.gtceu.absolute_reduction(id('sic_bite_skip'))
    //     .itemInputs('6x gtceu:silicon_dioxide_dust','4x gtceu:carbon_dust', '6x gtceu:tellurium_dust', '4x gtceu:bismuth_dust',
    //         '69x gtceu:borax_dust')
    //     .inputFluids('gtceu:hydrogen 36000', 'gtceu:nitric_acid 16000')
    //     .itemOutputs('14x gtceu:silicon_carbide_over_bismuth_tritelluride_dust', '9x gtceu:sodium_oxide_dust', '12x gtceu:boron_dust')
    //     .outputFluids('gtceu:carbon_dioxide 2000', 'minecraft:water 56000', 'gtceu:oxygen 40000', 'gtceu:nitrogen 14000')
    //     .duration(77)
    //     .circuit(0)
    //     .EUt(GTValues.VHA[GTValues.UHV]);

    // event.recipes.gtceu.absolute_reduction(id('runic_convergence_skip'))
    //     .itemInputs('3x gtceu:pure_netherite_dust', '10x gtceu:quicklime_dust', '2x gtceu:silicon_dioxide_dust', '6x gtceu:magnesium_dust')
    //     .inputFluids('gtceu:sulfuric_acid 3000', 'gtceu:hydrogen 10000', 'gtceu:nitrobenzene 8000', 'gtceu:hydrofluoric_acid 1000', 'gtceu:nitrogen 2000')
    //     .itemOutputs('18x gtceu:calcium_sulfate_dust')
    //     .outputFluids('gtceu:runic_convergence_infusion 1000', 'gtceu:ammonia 2000', 'gtceu:phenol 6000', 'minecraft:water 1000')
    //     .duration(126)
    //     .EUt(GTValues.VHA[GTValues.UHV]);


    // event.recipes.gtceu.absolute_reduction(id('electron_catalyst_skip'))
    //     .itemInputs('8x kubejs:blank_injection_catalyst', '10x gtceu:annealed_copper_dust', '5x gtceu:sterling_silver_dust')
    //     .inputFluids('gtceu:lepton_flavour_foundational_flux 1000', 'gtceu:electrum 512')
    //     .itemOutputs('8x kubejs:electron_injection_catalyst')
    //     .duration(1556)
    //     .EUt(GTValues.VHA[GTValues.UEV]);

    // event.recipes.gtceu.absolute_reduction(id('tau_catalyst_skip'))
    //     .itemInputs('40x kubejs:blank_injection_catalyst', '2x gtceu:osmiridium_dust')
    //     .inputFluids('gtceu:lepton_flavour_foundational_flux 5000', 'gtceu:mercury 19250')
    //     .itemOutputs('40x kubejs:tau_injection_catalyst')
    //     .duration(692)
    //     .EUt(GTValues.VHA[GTValues.UEV]);

    // event.recipes.gtceu.absolute_reduction(id('muon_catalyst_skip'))
    //     .itemInputs('32x kubejs:blank_injection_catalyst')
    //     .inputFluids('gtceu:lepton_flavour_foundational_flux 4000', 'gtceu:glowstone 2048', 'minecraft:lava 3000', 'gtceu:blaze 576', 'gtceu:lumium 288')
    //     .itemOutputs('32x kubejs:muon_injection_catalyst')
    //     .duration(316)
    //     .EUt(GTValues.VHA[GTValues.UEV]);

    // event.recipes.gtceu.absolute_reduction(id('polyimide_skip'))
    //     .notConsumable('gtceu:palladium_on_carbon_dust')
    //     .notConsumable('gtceu:nickel_dust')
    //     .inputFluids('gtceu:ammonia 3250', 'gtceu:nitric_acid 1250', 'gtceu:hydrogen 18000', 'gtceu:benzene 4500', 
    //         'gtceu:oxygen 14750', 'gtceu:toluene 2000','gtceu:acetic_acid 2000')
    //     .outputFluids('gtceu:polyimide 3000', 'gtceu:nitrous_oxide 750', 'gtceu:carbon_dioxide 500', 'minecraft:water 15000')
    //     .duration(274)
    //     .circuit(7)
    //     .EUt(GTValues.VHA[GTValues.UIV]);


    // event.recipes.gtceu.absolute_reduction(id('mythril_skip'))
    //     .itemInputs('1x gtceu:mythrillic_dust','6x gtceu:sulfur_dust')
    //     .inputFluids('gtceu:oxygen 12000','gtceu:hydrochloric_acid 12000')
    //     .itemOutputs('6x gtceu:mythril_dust','2x gtceu:vanadium_dust','3x gtceu:zirconium_tetrachloride_dust')
    //     .outputFluids('gtceu:hydrogen 14000','gtceu:carbon_dioxide 6000','gtceu:hydrogen_sulfide 6000')
    //     .duration(872)
    //     .EUt(GTValues.VHA[GTValues.UIV]);

    // event.recipes.gtceu.absolute_reduction(id('adamantine_skip'))
    //     .itemInputs('1x gtceu:adamantamite_dust','6x gtceu:carbon_dust','17x gtceu:sodium_dust','8x gtceu:magnesium_dust')
    //     .inputFluids('gtceu:hydrochloric_acid 4000','gtceu:oxygen 8000','gtceu:nitric_acid 15000')
    //     .itemOutputs('5x gtceu:adamantine_dust','8x gtceu:sodium_azide_dust','4x gtceu:titanium_dust',
    //         '16x gtceu:magnesia_dust','45x gtceu:sodium_hydroxide_dust')
    //     .outputFluids('gtceu:carbon_dioxide 12000','gtceu:hydrogen 4000','gtceu:iron_ii_chloride 2000','gtceu:nitrogen_dioxide 15000')
    //     .duration(340)
    //     .EUt(GTValues.VHA[GTValues.UIV]);

    // event.recipes.gtceu.absolute_reduction(id('estalt_skip'))
    //     .itemInputs('1x gtceu:estaltadyne_dust','2x gtceu:carbon_dust','5x gtceu:sodium_hydroxide_dust','15x gtceu:phosphate_dust')
    //     .inputFluids('gtceu:oxygen 20000','gtceu:hydrofluoric_acid 9000')
    //     .itemOutputs('4x gtceu:estalt_dust','2x gtceu:aluminium_dust','35x gtceu:sodium_bisulfate_dust','12x gtceu:titanium_trifluoride_dust')
    //     .outputFluids('gtceu:phosphoric_acid 3000','gtceu:carbon_dioxide 2000')
    //     .duration(178)
    //     .EUt(GTValues.VHA[GTValues.UIV]);

    // event.recipes.gtceu.absolute_reduction(id('isovol_calamatium_skip'))
    //     .itemInputs('6x gtceu:estalt_dust')
    //     .inputFluids('gtceu:fluoroantimonic_acid 2000', 'minecraft:water 2000')
    //     .itemOutputs('1x gtceu:calamatium_dust', '1x gtceu:isovol_dust', '2x gtceu:antimony_dust')
    //     .outputFluids('gtceu:hydrogen 8000', 'gtceu:oxygen 2000', 'gtceu:fluorine 14000')
    //     .duration(52)
    //     .EUt(GTValues.VHA[GTValues.UHV]);

    // event.recipes.gtceu.absolute_reduction(id('flerovium_skip'))
    //     .itemInputs('7x gtceu:flerovium_hexaoxide_octafluorosulfatoplutonate_enriched_rare_earth_dust','8x gtceu:silver_oxide_dust')
    //     .inputFluids('gtceu:distilled_water 100000','gtceu:hydrogen 64000')
    //     .itemOutputs('4x gtceu:flerovium_dust','8x gtceu:silver_sulfate_dust','3x gtceu:rare_earth_dust')
    //     .outputFluids('gtceu:enriched_uranium_hexafluoride 8000','gtceu:hydrofluoric_acid 64000')
    //     .duration(712)
    //     .EUt(GTValues.VHA[GTValues.UIV]);

    // event.recipes.gtceu.absolute_reduction(id('seaborgium_skip'))
    //     .itemInputs('1x gtceu:seaborgium_cerium_tricarbon_tetrakis_orthosilicate_dust', '8x gtceu:chromium_trioxide_dust', '6x gtceu:sodium_hydroxide_dust')
    //     .inputFluids('gtceu:sulfuric_acid 5000', 'gtceu:hydrochloric_acid 2000', 'gtceu:hydrogen 2000')
    //     .itemOutputs('1x gtceu:seaborgium_dust', '4x gtceu:salt_dust', '1x gtceu:cerium_dioxide_dust', '1x gtceu:silicon_dioxide_dust', '5x gtceu:chromium_sulfate_dust')
    //     .outputFluids('gtceu:carbon_dioxide 3000')
    //     .duration(483)
    //     .EUt(GTValues.VHA[GTValues.UIV]);

    // event.recipes.gtceu.absolute_reduction(id('polonium_skip'))
    //     .itemInputs('1x gtceu:dipolonium_diplatinum_tris_pyrophosphate_dust', '4x gtceu:calcium_dust', '24x gtceu:sodium_hydroxide_dust')
    //     .inputFluids('gtceu:hydrochloric_acid 12000', 'gtceu:carbon_monoxide 2000')
    //     .itemOutputs('2x gtceu:polonium_dust','2x gtceu:platinum_dust','16x gtceu:salt_dust','12x gtceu:calcium_carbonate_dust')
    //     .outputFluids('minecraft:water 4000', 'gtceu:pyrophosphoric_acid 3000')
    //     .duration(2217)
    //     .EUt(GTValues.VHA[GTValues.UIV]);

    // event.recipes.gtceu.absolute_reduction(id('astatine_skip'))
    //     .itemInputs('1x gtceu:iron_2_barium_diastatide_trisulfate_dust', '6x gtceu:sodium_hydroxide_dust')
    //     .inputFluids('gtceu:hydrochloric_acid 6000', 'gtceu:nitrogen_dioxide 2000')
    //     .itemOutputs('2x gtceu:astatine_dust', '8x gtceu:sodium_nitrite_dust', '1x gtceu:barium_hydroxide_dust')
    //     .outputFluids('gtceu:iron_iii_chloride 2000', 'gtceu:sulfuric_acid 3000')
    //     .duration(76)
    //     .EUt(GTValues.VHA[GTValues.UIV]);

    // event.recipes.gtceu.absolute_reduction(id('hafnium_skip'))
    //     .itemInputs('1x gtceu:hafnium_thorium_iron_magnesium_disilicate_monosulfate_dust', '2x gtceu:potassium_hydroxide_dust', '2x gtceu:carbon_dust', 
    //         '2x gtceu:sodium_bicarbonate_dust', '3x gtceu:magnesium_dust')
    //     .inputFluids('gtceu:hydrochloric_acid 12000', 'minecraft:water 4000')
    //     .itemOutputs('1x gtceu:hafnium_dust', '1x gtceu:thorium_dust', '2x gtceu:silicon_dioxide_dust', '7x gtceu:potassium_sulfate_dust', 
    //         '9x gtceu:magnesium_chloride_dust')
    //     .outputFluids('gtceu:carbon_monoxide 2000', 'gtceu:brackish_water 4000', 'gtceu:carbon_dioxide 2000')
    //     .duration(213)
    //     .EUt(GTValues.VHA[GTValues.UIV]);

    // event.recipes.gtceu.absolute_reduction(id('oganesson_skip'))
    //     .inputFluids('gtceu:caesium_oganesson_hexanitrate_tetrafluorouranate 1000', 'minecraft:water 4000', 'gtceu:sulfuric_acid 2000')
    //     .itemOutputs('6x gtceu:uraninite_dust', '10x gtceu:sulfate_dust')
    //     .outputFluids('gtceu:oganesson 1000','gtceu:hydrofluoric_acid 8000','gtceu:nitric_acid 4000','gtceu:caesium_nitrate 2000')
    //     .duration(224)
    //     .EUt(GTValues.VHA[GTValues.UIV]);

    // event.recipes.gtceu.absolute_reduction(id('pedot_pss_skip'))
    //     .itemInputs('36x minecraft:sugar', '9x gtceu:sodium_hydroxide_dust', '3x gtceu:sulfur_dust', '11x gtceu:sodium_bisulfate_dust', 
    //         '11x gtceu:carbon_dust', '4x gtceu:calcium_hydroxide_dust', '550x #minecraft:villager_plantable_seeds')
    //     .inputFluids('gtceu:14_butanediol 1500', 'gtceu:oxygen 12750', 'gtceu:ethanol 5250', 'gtceu:sorbitol 270', 'gtceu:ethylene 3663',
    //         'gtceu:bromine 3000', 'gtceu:ammonia 3000', 'gtceu:hydrogen 13874', 'gtceu:benzene 1313')
    //     .itemOutputs('6x gtceu:potassium_bromide_dust', '12x gtceu:sodium_nitrite_dust', '9x gtceu:sodium_bicarbonate_dust', '1x gtceu:calcium_dust')
    //     .outputFluids('gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 864', 'gtceu:ethylene_glycol 1770', 'gtceu:ethane 1500',
    //         'gtceu:ethenone 1500', 'gtceu:hydrogen_chloride 750', 'gtceu:diluted_sulfuric_acid 6750')
    //     .circuit(3)
    //     .duration(126)
    //     .EUt(GTValues.VA[GTValues.UXV] * .3)
    //     .cleanroom(CleanroomType.CLEANROOM); 

    // event.recipes.gtceu.absolute_reduction(id('plat_line_skip'))
    //     .itemInputs('4x gtceu:cooperite_dust')
    //     .inputFluids('gtceu:aqua_regia 3000')
    //     .itemOutputs('gtceu:platinum_dust', 'gtceu:palladium_dust', 'gtceu:ruthenium_dust', 'gtceu:rhodium_dust', 'gtceu:osmium_dust', 'gtceu:iridium_dust')
    //     .outputFluids('gtceu:nitric_acid 1000', 'gtceu:hydrochloric_acid 2000')
    //     .duration(350)
    //     .EUt(GTValues.VHA[GTValues.ZPM]);

    // === Enlightened Chemistry ===

    event.recipes.gtceu.ordered_chemistry(id('better_draco_stem_cells'))
        .layeredRecipe((layers) => layers
            .itemInputs('gtceu:echo_shard_dust')
            .inputFluids('gtceu:draconic_enrichment_serum 1000')
            .next()
            .itemInputs('gtceu:nether_star_dust')
        )
        .itemOutputs('16x kubejs:draconic_stem_cells')
        .cleanroom($StarTAbyssalContainmentMachine.ABYSSAL_CONTAINMENT_ROOM)
        .duration(53)
        .EUt(GTValues.VHA[GTValues.UIV]);

    event.recipes.gtceu.ordered_chemistry(id('better_draco_brain_matter_cells'))
        .layeredRecipe((layers) => layers
            .itemInputs('8x gtceu:tiny_prismalium_dust')
            .inputFluids('gtceu:draconic_enrichment_serum 750')
            .next()
            .itemInputs('16x kubejs:naquadic_netherite_fibers','#gtceu:circuits/zpm')
            .inputFluids('thermal:ender 12500')
        )
        .itemOutputs('32x kubejs:draconic_brain_matter_cells')
        .cleanroom($StarTAbyssalContainmentMachine.ABYSSAL_CONTAINMENT_ROOM)
        .duration(93)
        .EUt(GTValues.VHA[GTValues.UIV]);
});