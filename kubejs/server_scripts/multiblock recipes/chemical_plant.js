
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

    // Skips

    event.recipes.gtceu.chemical_skip(id('fluoroantimonic_acid'))
        .itemInputs('gtceu:antimony_dust')
        .inputFluids('gtceu:hydrogen 2000', 'gtceu:fluorine 7000')
        .outputFluids('gtceu:fluoroantimonic_acid 1000')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.LuV]);

    event.recipes.gtceu.chemical_skip(id('polybenzimidazole_phenol'))
        .inputFluids('gtceu:benzene 2000', 'gtceu:phenol 1000', 'gtceu:carbon_monoxide 2000', 'gtceu:ammonia 4000', 'gtceu:oxygen 6000')
        .outputFluids('gtceu:polybenzimidazole 1000', 'minecraft:water 9000')
        .circuit(24)
        .duration(400)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    event.recipes.gtceu.chemical_skip(id('polybenzimidazole_no_phenol'))
        .inputFluids('gtceu:benzene 3000', 'gtceu:carbon_dioxide 2000', 'gtceu:ammonia 4000', 'gtceu:oxygen 5000')
        .outputFluids('gtceu:polybenzimidazole 1000', 'minecraft:water 9000')
        .circuit(25)
        .duration(400)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    event.recipes.gtceu.chemical_skip(id('plat_line'))
        .itemInputs('6x gtceu:platinum_group_sludge_dust')
        .inputFluids('gtceu:aqua_regia 1500')
        .itemOutputs('gtceu:platinum_dust', 'gtceu:palladium_dust', 'gtceu:ruthenium_dust', 'gtceu:rhodium_dust', 'gtceu:osmium_dust', 'gtceu:iridium_dust')
        .outputFluids('gtceu:nitric_acid 500', 'gtceu:hydrochloric_acid 1000')
        .duration(600)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    event.recipes.gtceu.chemical_skip(id('ptfe'))
        .itemInputs('2x gtceu:carbon_dust')
        .inputFluids('gtceu:fluorine 4000')
        .outputFluids('gtceu:tetrafluoroethylene 1000')
        .duration(480)
        .EUt(GTValues.VHA[GTValues.LuV]);

    event.recipes.gtceu.chemical_skip(id('epoxy'))
        .inputFluids('gtceu:benzene 2000', 'gtceu:propene 2000', 'gtceu:chlorine 2000', 'gtceu:oxygen 4000')
        .outputFluids('gtceu:epoxy 1000', 'gtceu:hydrochloric_acid 1000')
        .duration(500)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    event.recipes.gtceu.chemical_skip(id('naquadah_line'))
        .itemInputs('2x gtceu:naquadah_dust')
        .inputFluids('gtceu:fluoroantimonic_acid 1000')
        .itemOutputs('gtceu:enriched_naquadah_dust', 'gtceu:naquadria_dust', 'gtceu:trinium_dust', 'gtceu:antimony_dust', 'gtceu:indium_phosphide_dust')
        .outputFluids('gtceu:hydrogen 2000', 'gtceu:fluorine 7000')
        .duration(800)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    event.recipes.gtceu.chemical_skip(id('uranite_line'))
        .itemInputs('20x gtceu:uraninite_dust')
        .inputFluids('gtceu:hydrofluoric_acid 40000')
        .itemOutputs('9x gtceu:uranium_dust', 'gtceu:uranium_235_dust')
        .outputFluids('gtceu:fluorine 40000', 'gtceu:hydrogen 40000', 'gtceu:oxygen 10000')
        .duration(800)
        .EUt(GTValues.VHA[GTValues.LuV]);

    event.recipes.gtceu.chemical_skip(id('sodium_persulfate'))
        .itemInputs('1x gtceu:sodium_dust', '1x gtceu:sulfur_dust')
        .inputFluids('gtceu:oxygen 4000')
        .outputFluids('gtceu:sodium_persulfate 500')
        .duration(20)
        .EUt(GTValues.VHA[GTValues.IV]);

    event.recipes.gtceu.chemical_skip(id('iron_iii_chloride'))
        .itemInputs('1x gtceu:iron_dust')
        .inputFluids('gtceu:chlorine 3000')
        .outputFluids('gtceu:iron_iii_chloride 1000')
        .duration(40)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.chemical_skip(id('cupric_chloride_solution'))
        .itemInputs('1x gtceu:copper_dust')
        .inputFluids('gtceu:hydrogen 2000','gtceu:chlorine 3000')
        .outputFluids('gtceu:cupric_chloride_solution 2000')
        .duration(160)
        .EUt(GTValues.VHA[GTValues.LuV]);

    event.recipes.gtceu.chemical_skip(id('borax'))
        .itemInputs('4x gtceu:boron_dust', '14x gtceu:sodium_bisulfate_dust')
        .inputFluids('minecraft:water 12000')
        .itemOutputs('23x gtceu:borax_dust')
        .outputFluids('gtceu:diluted_sulfuric_acid 3000', 'gtceu:oxygen 6000')
        .duration(400)
        .EUt((GTValues.VA[GTValues.LuV]));

    event.recipes.gtceu.chemical_skip(id('peek_skip'))
        .inputFluids('gtceu:benzene 2000','gtceu:toluene 1000','gtceu:propene 1000','gtceu:oxygen 2000')
        .outputFluids('gtceu:polyether_ether_ketone 4896','gtceu:acetone 1000','gtceu:hydrogen 4000')
        .duration(64)
        .circuit(5)
        .EUt(GTValues.VA[GTValues.UEV] * .3);

    event.recipes.gtceu.chemical_skip(id('14_butanediol_skip'))
        .notConsumable('gtceu:palladium_on_carbon_dust')
        .inputFluids('gtceu:benzene 1500','gtceu:oxygen 6000','gtceu:hydrogen 18000')
        .outputFluids('gtceu:14_butanediol 3000','gtceu:methanol 3000')
        .duration(250)
        .circuit(8)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.chemical_skip(id('benzophenone_3344_tetracarboxylic_dianhydridenediol_skip'))
        .inputFluids('gtceu:toluene 1000','gtceu:benzene 1375','gtceu:oxygen 9875','gtceu:acetic_acid 1000','gtceu:chlorine 3000')
        .itemOutputs('30x gtceu:benzophenone_3344_tetracarboxylic_dianhydride_dust')
        .outputFluids('gtceu:hydrogen_chloride 3000','gtceu:carbon_dioxide 250','minecraft:water 4125','gtceu:hydrogen 3000')
        .duration(320)
        .circuit(6)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.chemical_skip(id('tungstate_line'))
        .itemInputs('1x gtceu:tungstate_dust')
        .inputFluids('gtceu:hydrochloric_acid 2000')
        .itemOutputs('1x gtceu:tungsten_trioxide_dust','1x gtceu:lithium_dust')
        .outputFluids('gtceu:chlorine 2000','gtceu:hydrogen 2000')
        .duration(480)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    event.recipes.gtceu.chemical_skip(id('scheelite_line'))
        .itemInputs('1x gtceu:scheelite_dust')
        .inputFluids('gtceu:hydrochloric_acid 2000')
        .itemOutputs('1x gtceu:tungsten_trioxide_dust','1x gtceu:calcium_dust')
        .outputFluids('gtceu:chlorine 2000','gtceu:hydrogen 2000')
        .duration(480)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    // Bromine Skip to be done when line is redone

    event.recipes.gtceu.chemical_skip(id('mutagen_skip'))
        .itemInputs('64x gtceu:bio_chaff','64x gtceu:bio_chaff','64x gtceu:bio_chaff','24x gtceu:bio_chaff','5x gtceu:naquadria_dust')
        .inputFluids('gtceu:distilled_water 77250')
        .outputFluids('gtceu:mutagen 9000')
        .duration(1512)
        .EUt(GTValues.VA[GTValues.UEV])
        .cleanroom(CleanroomType.STERILE_CLEANROOM);

});