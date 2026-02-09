
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
                .EUt(GTValues.VHA[GTValues.ZPM])
                .CWUt(16)
            )
        .EUt(GTValues.VHA[GTValues.UV]);

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

    event.recipes.gtceu.chemical_skip(id('fluoroantimonic_acid_skip'))
        .itemInputs('gtceu:antimony_dust')
        .inputFluids('gtceu:hydrogen 2000', 'gtceu:fluorine 7000')
        .outputFluids('gtceu:fluoroantimonic_acid 1000')
        .duration(150)
        .EUt(GTValues.VHA[GTValues.IV]);

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

    event.recipes.gtceu.chemical_skip(id('plat_line_skip'))
        .itemInputs('12x gtceu:platinum_group_sludge_dust')
        .inputFluids('gtceu:aqua_regia 1500')
        .itemOutputs('gtceu:platinum_dust', 'gtceu:palladium_dust', 'gtceu:ruthenium_dust', 'gtceu:rhodium_dust', 'gtceu:osmium_dust', 'gtceu:iridium_dust')
        .outputFluids('gtceu:nitric_acid 500', 'gtceu:hydrochloric_acid 1000')
        .duration(370)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    event.recipes.gtceu.chemical_skip(id('tfe_skip'))
        .itemInputs('2x gtceu:carbon_dust')
        .inputFluids('gtceu:fluorine 4000')
        .outputFluids('gtceu:tetrafluoroethylene 1000')
        .duration(480)
        .circuit(1)
        .EUt(GTValues.VHA[GTValues.LuV]);

    // event.recipes.gtceu.chemical_skip(id('epoxy_skip'))
    //     .inputFluids('gtceu:benzene 2000', 'gtceu:propene 2000', 'gtceu:chlorine 2000', 'gtceu:oxygen 4000')
    //     .outputFluids('gtceu:epoxy 1000', 'gtceu:hydrochloric_acid 1000')
    //     .duration(150)
    //     .circuit(12)
    //     .EUt(GTValues.VHA[GTValues.LuV]);

    event.recipes.gtceu.chemical_skip(id('naquadah_line_skip'))
        .itemInputs('5x gtceu:naquadah_dust')
        .inputFluids('gtceu:fluoroantimonic_acid 1000')
        .itemOutputs('gtceu:enriched_naquadah_dust', 'gtceu:naquadria_dust', 'gtceu:trinium_dust', 'gtceu:antimony_dust', 'gtceu:indium_phosphide_dust')
        .outputFluids('gtceu:hydrogen 2000', 'gtceu:fluorine 7000')
        .duration(845)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    event.recipes.gtceu.chemical_skip(id('uranite_line_skip'))
        .itemInputs('20x gtceu:uraninite_dust')
        .inputFluids('gtceu:hydrofluoric_acid 40000')
        .itemOutputs('9x gtceu:uranium_dust', 'gtceu:uranium_235_dust')
        .outputFluids('gtceu:fluorine 40000', 'gtceu:hydrogen 40000', 'gtceu:oxygen 10000')
        .duration(240)
        .EUt(GTValues.VHA[GTValues.LuV]);

    event.recipes.gtceu.chemical_skip(id('sodium_persulfate_skip'))
        .itemInputs('1x gtceu:sodium_dust', '1x gtceu:sulfur_dust')
        .inputFluids('gtceu:oxygen 4000')
        .outputFluids('gtceu:sodium_persulfate 500')
        .duration(30)
        .EUt(GTValues.VHA[GTValues.EV]);

    event.recipes.gtceu.chemical_skip(id('iron_iii_chloride_skip'))
        .itemInputs('1x gtceu:iron_dust')
        .inputFluids('gtceu:chlorine 3000')
        .outputFluids('gtceu:iron_iii_chloride 1000')
        .duration(30)
        .EUt(GTValues.VA[GTValues.EV]);

    event.recipes.gtceu.chemical_skip(id('cupric_chloride_solution_skip'))
        .itemInputs('1x gtceu:copper_dust')
        .inputFluids('gtceu:hydrogen 2000','gtceu:chlorine 3000')
        .outputFluids('gtceu:cupric_chloride_solution 2000')
        .duration(30)
        .EUt(GTValues.VHA[GTValues.IV]);

    event.recipes.gtceu.chemical_skip(id('borax_skip'))
        .itemInputs('4x gtceu:boron_dust', '14x gtceu:sodium_bisulfate_dust')
        .inputFluids('minecraft:water 12000')
        .itemOutputs('23x gtceu:borax_dust')
        .outputFluids('gtceu:diluted_sulfuric_acid 3000', 'gtceu:oxygen 6000')
        .duration(720)
        .EUt(GTValues.VHA[GTValues.IV]);

    // event.recipes.gtceu.chemical_skip(id('peek_skip'))
    //     .inputFluids('gtceu:benzene 2000','gtceu:toluene 1000','gtceu:propene 1000','gtceu:oxygen 2000')
    //     .outputFluids('gtceu:polyether_ether_ketone 4896','gtceu:acetone 1000','gtceu:hydrogen 4000')
    //     .duration(64)
    //     .circuit(5)
    //     .EUt(GTValues.VA[GTValues.UEV] * .3);

    event.recipes.gtceu.chemical_skip(id('14_butanediol_skip'))
        .notConsumable('gtceu:palladium_on_carbon_dust')
        .inputFluids('gtceu:benzene 1500','gtceu:oxygen 6000','gtceu:hydrogen 18000')
        .outputFluids('gtceu:14_butanediol 3000','gtceu:methanol 3000')
        .duration(420)
        .circuit(8)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.chemical_skip(id('benzophenone_3344_tetracarboxylic_dianhydridenediol_skip'))
        .inputFluids('gtceu:toluene 1000','gtceu:benzene 1375','gtceu:oxygen 9875','gtceu:acetic_acid 1000','gtceu:chlorine 3000')
        .itemOutputs('30x gtceu:benzophenone_3344_tetracarboxylic_dianhydride_dust')
        .outputFluids('gtceu:hydrogen_chloride 3000','gtceu:carbon_dioxide 250','minecraft:water 4125','gtceu:hydrogen 3000')
        .duration(480)
        .circuit(6)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.chemical_skip(id('tungstate_line'))
        .itemInputs('1x gtceu:tungstate_dust')
        .inputFluids('gtceu:hydrochloric_acid 2000')
        .itemOutputs('1x gtceu:tungsten_trioxide_dust','1x gtceu:lithium_dust')
        .outputFluids('gtceu:chlorine 2000','gtceu:hydrogen 2000')
        .duration(175)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    event.recipes.gtceu.chemical_skip(id('scheelite_line'))
        .itemInputs('1x gtceu:scheelite_dust')
        .inputFluids('gtceu:hydrochloric_acid 2000')
        .itemOutputs('1x gtceu:tungsten_trioxide_dust','1x gtceu:calcium_dust')
        .outputFluids('gtceu:chlorine 2000','gtceu:hydrogen 2000')
        .duration(175)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    event.recipes.gtceu.chemical_skip(id('mutagen_skip'))
        .itemInputs('64x gtceu:bio_chaff','64x gtceu:bio_chaff','64x gtceu:bio_chaff','24x gtceu:bio_chaff','5x gtceu:naquadria_dust')
        .inputFluids('gtceu:distilled_water 77250')
        .outputFluids('gtceu:mutagen 9000')
        .duration(558)
        .EUt(GTValues.VA[GTValues.UEV])
        .cleanroom(CleanroomType.STERILE_CLEANROOM);

    event.recipes.gtceu.chemical_skip(id('sic_skip'))
        .itemInputs('3x gtceu:silicon_dioxide_dust','2x gtceu:carbon_dust')
        .inputFluids('gtceu:nitrogen 1000')
        .itemOutputs('gtceu:silicon_carbide_dust')
        .outputFluids('gtceu:carbon_dioxide 1000')
        .duration(20)
        .circuit(0)
        .EUt(GTValues.VHA[GTValues.LuV]);

    event.recipes.gtceu.chemical_skip(id('glycerol_skip'))
        .itemInputs('3x gtceu:carbon_dust')
        .inputFluids('gtceu:hydrogen 8000', 'gtceu:oxygen 3000')
        .outputFluids('gtceu:glycerol 1000')
        .duration(160)
        .circuit(3)
        .EUt(GTValues.VHA[GTValues.HV]);

    event.recipes.gtceu.chemical_skip(id('bromine_skip'))
        .inputFluids('gtceu:salt_water 100000', 'gtceu:chlorine 3000')
        .outputFluids('gtceu:bromine 2500', 'gtceu:chlorine 1000')
        .duration(355)
        .EUt(GTValues.VA[GTValues.LuV]);

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

    event.recipes.gtceu.chemical_skip(id('polyphenylene_sulfide_skip'))
        .itemInputs('1x gtceu:sulfur_dust')
        .inputFluids('gtceu:oxygen 8000', 'gtceu:benzene 1000', 'gtceu:chlorine 2000')
        .outputFluids('gtceu:polyphenylene_sulfide 1500', 'gtceu:hydrochloric_acid 2000')
        .duration(48)
        .circuit(11)
        .EUt(GTValues.VHA[GTValues.IV]);

    event.recipes.gtceu.chemical_skip(id('caprolactam_skip'))        
        .notConsumable('gtceu:nickel_dust')
        .inputFluids('gtceu:hydrogen 6000', 'gtceu:benzene 1000', 'gtceu:chlorine 1000', 'gtceu:nitric_oxide 1000')
        .outputFluids('gtceu:hydrochloric_acid 1000')
        .itemOutputs('19x gtceu:caprolactam_dust')
        .duration(42)
        .circuit(14)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.chemical_skip(id('pcb_skip'))        
        .inputFluids('gtceu:oxygen 3000', 'gtceu:benzene 6000', 'gtceu:chlorine 12000', 'gtceu:distilled_water 1000')
        .outputFluids('gtceu:pcb_coolant 4000', 'gtceu:hydrochloric_acid 6000')
        .duration(96)
        .EUt(GTValues.VHA[GTValues.LuV]);

    event.recipes.gtceu.chemical_skip(id('pure_netherite_skip'))
        .itemInputs('7x gtceu:debris_dust')
        .inputFluids('gtceu:chlorine 4000', 'gtceu:hydrogen 7000', 'gtceu:fluorine 3000')
        .itemOutputs('8x gtceu:pure_netherite_dust', '1x gtceu:sulfur_dust', '1x gtceu:titanium_dust')
        .outputFluids('gtceu:hydrochloric_acid 8000', 'gtceu:fluorine 3000')
        .duration(385)
        .EUt((GTValues.VA[GTValues.ZPM]));

    event.recipes.gtceu.chemical_skip(id('perchloric_acid'))
        .inputFluids('gtceu:chlorine 1000', 'gtceu:hydrogen 1000', 'gtceu:oxygen 4000')
        .outputFluids('gtceu:perchloric_acid 1000')
        .duration(100)
        .EUt((GTValues.VA[GTValues.HV]));

    // === Absolute Reductions ===

    event.recipes.gtceu.absolute_reduction(id('sic_bite_skip'))
        .itemInputs('6x gtceu:silicon_dioxide_dust','4x gtceu:carbon_dust', '6x gtceu:tellurium_dust', '4x gtceu:bismuth_dust',
            '69x gtceu:borax_dust')
        .inputFluids('gtceu:hydrogen 36000', 'gtceu:nitric_acid 16000')
        .itemOutputs('14x gtceu:silicon_carbide_over_bismuth_tritelluride_dust', '9x gtceu:sodium_oxide_dust', '12x gtceu:boron_dust')
        .outputFluids('gtceu:carbon_dioxide 2000', 'minecraft:water 56000', 'gtceu:oxygen 40000', 'gtceu:nitrogen 14000')
        .duration(77)
        .circuit(0)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.absolute_reduction(id('runic_convergence_skip'))
        .itemInputs('3x gtceu:pure_netherite_dust', '10x gtceu:quicklime_dust', '2x gtceu:silicon_dioxide_dust', '6x gtceu:magnesium_dust')
        .inputFluids('gtceu:sulfuric_acid 3000', 'gtceu:hydrogen 10000', 'gtceu:nitrobenzene 8000', 'gtceu:hydrofluoric_acid 1000', 'gtceu:nitrogen 2000')
        .itemOutputs('18x gtceu:calcium_sulfate_dust')
        .outputFluids('gtceu:runic_convergence_infusion 1000', 'gtceu:ammonia 2000', 'gtceu:phenol 6000', 'minecraft:water 1000')
        .duration(126)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.absolute_reduction(id('zapolgium_skip'))
        .itemInputs('4x gtceu:zapolite_dust','5x gtceu:potassium_hydroxide_dust')
        .inputFluids('gtceu:hydrogen 2000','gtceu:hydrochloric_acid 2000')
        .itemOutputs('5x gtceu:zapolgium_dust','4x gtceu:bauxite_dust','10x gtceu:iodine_dust','4x gtceu:rock_salt_dust')
        .outputFluids('minecraft:water 6000','gtceu:oxygen 5000')
        .duration(1049)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.absolute_reduction(id('zirconium_skip'))
        .itemInputs('2x gtceu:titanite_dust')
        .inputFluids('gtceu:hydrochloric_acid 4000', 'gtceu:sulfuric_acid 2000')
        .itemOutputs('1x gtceu:zirconium_dust', '2x gtceu:silicon_dioxide_dust', '12x gtceu:calcium_sulfate_dust')
        .outputFluids('gtceu:titanium_tetrachloride 1000', 'minecraft:water 6000')
        .duration(212)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.absolute_reduction(id('electron_catalyst_skip'))
        .itemInputs('8x kubejs:blank_injection_catalyst', '10x gtceu:annealed_copper_dust', '5x gtceu:sterling_silver_dust')
        .inputFluids('gtceu:lepton_flavour_foundational_flux 1000', 'gtceu:electrum 512')
        .itemOutputs('8x kubejs:electron_injection_catalyst')
        .duration(1556)
        .EUt(GTValues.VHA[GTValues.UEV]);

    event.recipes.gtceu.absolute_reduction(id('tau_catalyst_skip'))
        .itemInputs('40x kubejs:blank_injection_catalyst', '2x gtceu:osmiridium_dust')
        .inputFluids('gtceu:lepton_flavour_foundational_flux 5000', 'gtceu:mercury 19250')
        .itemOutputs('40x kubejs:tau_injection_catalyst')
        .duration(692)
        .EUt(GTValues.VHA[GTValues.UEV]);

    event.recipes.gtceu.absolute_reduction(id('muon_catalyst_skip'))
        .itemInputs('32x kubejs:blank_injection_catalyst')
        .inputFluids('gtceu:lepton_flavour_foundational_flux 4000', 'gtceu:glowstone 2048', 'minecraft:lava 3000', 'gtceu:blaze 576', 'gtceu:lumium 288')
        .itemOutputs('32x kubejs:muon_injection_catalyst')
        .duration(316)
        .EUt(GTValues.VHA[GTValues.UEV]);

    // event.recipes.gtceu.absolute_reduction(id('polyimide_skip'))
    //     .notConsumable('gtceu:palladium_on_carbon_dust')
    //     .notConsumable('gtceu:nickel_dust')
    //     .inputFluids('gtceu:ammonia 3250', 'gtceu:nitric_acid 1250', 'gtceu:hydrogen 18000', 'gtceu:benzene 4500', 
    //         'gtceu:oxygen 14750', 'gtceu:toluene 2000','gtceu:acetic_acid 2000')
    //     .outputFluids('gtceu:polyimide 3000', 'gtceu:nitrous_oxide 750', 'gtceu:carbon_dioxide 500', 'minecraft:water 15000')
    //     .duration(274)
    //     .circuit(7)
    //     .EUt(GTValues.VHA[GTValues.UIV]);

    event.recipes.gtceu.absolute_reduction(id('raw_growth_medium_skip'))
        .itemInputs('64x gtceu:bio_chaff','64x gtceu:bio_chaff','64x gtceu:bio_chaff','24x gtceu:bio_chaff','5x gtceu:naquadria_dust', 
            '12x gtceu:meat_dust', '5x gtceu:salt_dust', '5x gtceu:calcium_dust', '8x minecraft:bone_meal')
        .inputFluids('gtceu:distilled_water 85000', 'gtceu:sulfuric_acid 3000', 'gtceu:phosphoric_acid 2500')
        .itemOutputs('2x gtceu:phosphorus_dust')
        .outputFluids('gtceu:raw_growth_medium 9000', 'gtceu:diluted_sulfuric_acid 3000')
        .duration(117)
        .EUt(GTValues.VA[GTValues.UEV])
        .cleanroom(CleanroomType.STERILE_CLEANROOM);

    event.recipes.gtceu.absolute_reduction(id('mythril_skip'))
        .itemInputs('1x gtceu:mythrillic_dust','6x gtceu:sulfur_dust')
        .inputFluids('gtceu:oxygen 12000','gtceu:hydrochloric_acid 12000')
        .itemOutputs('6x gtceu:mythril_dust','2x gtceu:vanadium_dust','3x gtceu:zirconium_tetrachloride_dust')
        .outputFluids('gtceu:hydrogen 14000','gtceu:carbon_dioxide 6000','gtceu:hydrogen_sulfide 6000')
        .duration(872)
        .EUt(GTValues.VHA[GTValues.UIV]);

    event.recipes.gtceu.absolute_reduction(id('adamantine_skip'))
        .itemInputs('1x gtceu:adamantamite_dust','6x gtceu:carbon_dust','17x gtceu:sodium_dust','8x gtceu:magnesium_dust')
        .inputFluids('gtceu:hydrochloric_acid 4000','gtceu:oxygen 8000','gtceu:nitric_acid 15000')
        .itemOutputs('5x gtceu:adamantine_dust','8x gtceu:sodium_azide_dust','4x gtceu:titanium_dust',
            '16x gtceu:magnesia_dust','45x gtceu:sodium_hydroxide_dust')
        .outputFluids('gtceu:carbon_dioxide 12000','gtceu:hydrogen 4000','gtceu:iron_ii_chloride 2000','gtceu:nitrogen_dioxide 15000')
        .duration(340)
        .EUt(GTValues.VHA[GTValues.UIV]);

    event.recipes.gtceu.absolute_reduction(id('estalt_skip'))
        .itemInputs('1x gtceu:estaltadyne_dust','2x gtceu:carbon_dust','5x gtceu:sodium_hydroxide_dust','15x gtceu:phosphate_dust')
        .inputFluids('gtceu:oxygen 20000','gtceu:hydrofluoric_acid 9000')
        .itemOutputs('4x gtceu:estalt_dust','2x gtceu:aluminium_dust','35x gtceu:sodium_bisulfate_dust','12x gtceu:titanium_trifluoride_dust')
        .outputFluids('gtceu:phosphoric_acid 3000','gtceu:carbon_dioxide 2000')
        .duration(178)
        .EUt(GTValues.VHA[GTValues.UIV]);

    event.recipes.gtceu.absolute_reduction(id('isovol_calamatium_skip'))
        .itemInputs('6x gtceu:estalt_dust')
        .inputFluids('gtceu:fluoroantimonic_acid 2000', 'minecraft:water 2000')
        .itemOutputs('1x gtceu:calamatium_dust', '1x gtceu:isovol_dust', '2x gtceu:antimony_dust')
        .outputFluids('gtceu:hydrogen 8000', 'gtceu:oxygen 2000', 'gtceu:fluorine 14000')
        .duration(52)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.absolute_reduction(id('flerovium_skip'))
        .itemInputs('7x gtceu:flerovium_hexaoxide_octafluorosulfatoplutonate_enriched_rare_earth_dust','8x gtceu:silver_oxide_dust')
        .inputFluids('gtceu:distilled_water 100000','gtceu:hydrogen 64000')
        .itemOutputs('4x gtceu:flerovium_dust','8x gtceu:silver_sulfate_dust','3x gtceu:rare_earth_dust')
        .outputFluids('gtceu:enriched_uranium_hexafluoride 8000','gtceu:hydrofluoric_acid 64000')
        .duration(712)
        .EUt(GTValues.VHA[GTValues.UIV]);

    event.recipes.gtceu.absolute_reduction(id('seaborgium_skip'))
        .itemInputs('1x gtceu:seaborgium_cerium_tricarbon_tetrakis_orthosilicate_dust', '8x gtceu:chromium_trioxide_dust', '6x gtceu:sodium_hydroxide_dust')
        .inputFluids('gtceu:sulfuric_acid 5000', 'gtceu:hydrochloric_acid 2000', 'gtceu:hydrogen 2000')
        .itemOutputs('1x gtceu:seaborgium_dust', '4x gtceu:salt_dust', '1x gtceu:cerium_dioxide_dust', '1x gtceu:silicon_dioxide_dust', '5x gtceu:chromium_sulfate_dust')
        .outputFluids('gtceu:carbon_dioxide 3000')
        .duration(483)
        .EUt(GTValues.VHA[GTValues.UIV]);

    event.recipes.gtceu.absolute_reduction(id('polonium_skip'))
        .itemInputs('1x gtceu:dipolonium_diplatinum_tris_pyrophosphate_dust', '4x gtceu:calcium_dust', '24x gtceu:sodium_hydroxide_dust')
        .inputFluids('gtceu:hydrochloric_acid 12000', 'gtceu:carbon_monoxide 2000')
        .itemOutputs('2x gtceu:polonium_dust','2x gtceu:platinum_dust','16x gtceu:salt_dust','12x gtceu:calcium_carbonate_dust')
        .outputFluids('minecraft:water 4000', 'gtceu:pyrophosphoric_acid 3000')
        .duration(2217)
        .EUt(GTValues.VHA[GTValues.UIV]);

    event.recipes.gtceu.absolute_reduction(id('astatine_skip'))
        .itemInputs('1x gtceu:iron_2_barium_diastatide_trisulfate_dust', '6x gtceu:sodium_hydroxide_dust')
        .inputFluids('gtceu:hydrochloric_acid 6000', 'gtceu:nitrogen_dioxide 2000')
        .itemOutputs('2x gtceu:astatine_dust', '8x gtceu:sodium_nitrite_dust', '1x gtceu:barium_hydroxide_dust')
        .outputFluids('gtceu:iron_iii_chloride 2000', 'gtceu:sulfuric_acid 3000')
        .duration(76)
        .EUt(GTValues.VHA[GTValues.UIV]);

    event.recipes.gtceu.absolute_reduction(id('hafnium_skip'))
        .itemInputs('1x gtceu:hafnium_thorium_iron_magnesium_disilicate_monosulfate_dust', '2x gtceu:potassium_hydroxide_dust', '2x gtceu:carbon_dust', 
            '2x gtceu:sodium_bicarbonate_dust', '3x gtceu:magnesium_dust')
        .inputFluids('gtceu:hydrochloric_acid 12000', 'minecraft:water 4000')
        .itemOutputs('1x gtceu:hafnium_dust', '1x gtceu:thorium_dust', '2x gtceu:silicon_dioxide_dust', '7x gtceu:potassium_sulfate_dust', 
            '9x gtceu:magnesium_chloride_dust')
        .outputFluids('gtceu:carbon_monoxide 2000', 'gtceu:brackish_water 4000', 'gtceu:carbon_dioxide 2000')
        .duration(213)
        .EUt(GTValues.VHA[GTValues.UIV]);

    event.recipes.gtceu.absolute_reduction(id('oganesson_skip'))
        .inputFluids('gtceu:caesium_oganesson_hexanitrate_tetrafluorouranate 1000', 'minecraft:water 4000', 'gtceu:sulfuric_acid 2000')
        .itemOutputs('6x gtceu:uraninite_dust', '10x gtceu:sulfate_dust')
        .outputFluids('gtceu:oganesson 1000','gtceu:hydrofluoric_acid 8000','gtceu:nitric_acid 4000','gtceu:caesium_nitrate 2000')
        .duration(224)
        .EUt(GTValues.VHA[GTValues.UIV]);

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

    event.recipes.gtceu.absolute_reduction(id('plat_line_skip'))
        .itemInputs('4x gtceu:cooperite_dust')
        .inputFluids('gtceu:aqua_regia 3000')
        .itemOutputs('gtceu:platinum_dust', 'gtceu:palladium_dust', 'gtceu:ruthenium_dust', 'gtceu:rhodium_dust', 'gtceu:osmium_dust', 'gtceu:iridium_dust')
        .outputFluids('gtceu:nitric_acid 1000', 'gtceu:hydrochloric_acid 2000')
        .duration(350)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    // === Enlightened Chemistry ===

    event.recipes.gtceu.enlightened_chemistry(id('better_draco_stem_cells'))
        .itemInputs('gtceu:nether_star_dust','gtceu:echo_shard_dust')
        .inputFluids('gtceu:draconic_enrichment_serum 1000')
        .itemOutputs('16x kubejs:draconic_stem_cells')
        .duration(106)
        .EUt(GTValues.VHA[GTValues.UIV]);

    event.recipes.gtceu.enlightened_chemistry(id('better_draco_brain_matter_cells'))
        .itemInputs('8x gtceu:tiny_prismalium_dust','16x kubejs:naquadic_netherite_fibers','#gtceu:circuits/zpm')
        .inputFluids('gtceu:draconic_enrichment_serum 750','thermal:ender 12500')
        .itemOutputs('32x kubejs:draconic_brain_matter_cells')
        .duration(186)
        .EUt(GTValues.VHA[GTValues.UIV]);

});