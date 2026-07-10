ServerEvents.recipes((event) => {
    const id = global.id;

    // 3B C6H6 + 23B O => 4B C4H2O3 + 5B H2O + 2B CO2
    event.recipes.gtceu
        .large_chemical_reactor(id('benzene_oxidization'))
        .inputFluids('gtceu:benzene 3000', 'gtceu:oxygen 23000')
        .outputFluids('gtceu:maleic_anhydride 4000', 'minecraft:water 5000', 'gtceu:carbon_dioxide 2000')
        .circuit(3)
        .duration(526)
        .EUt(GTValues.VHA[GTValues.LuV]);

    // 1B C6H6 + 1B C7H5ClO =[1 Al]=> 1B C13H10O + 1B HCl
    event.recipes.gtceu
        .large_chemical_reactor(id('benzophenone'))
        .inputFluids('gtceu:benzene 1000', 'gtceu:benzoyl_chloride 1000')
        .notConsumable('1x gtceu:aluminium_dust')
        .outputFluids('gtceu:benzophenone 1000', 'gtceu:hydrogen_chloride 1000')
        .circuit(0)
        .duration(589)
        .EUt(GTValues.VHA[GTValues.LuV]);

    // 2B C13H10O + 1B C4H2O3 + 2B C2H4O2 + 14B O => 60 C17H6O7 + 9B H2O
    event.recipes.gtceu
        .large_chemical_reactor(id('btda'))
        .inputFluids(
            'gtceu:benzophenone 2000',
            'gtceu:maleic_anhydride 1000',
            'gtceu:acetic_acid 2000',
            'gtceu:oxygen 14000'
        )
        .itemOutputs('60x gtceu:benzophenone_3344_tetracarboxylic_dianhydride_dust')
        .outputFluids('minecraft:water 9000')
        .circuit(1)
        .duration(624)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    // 1B NH3 + 1B CH4O => 1B CH5N + 1B H2O
    event.recipes.gtceu
        .chemical_reactor(id('methylamine'))
        .inputFluids('gtceu:ammonia 1000', 'gtceu:methanol 1000')
        .outputFluids('gtceu:methylamine 1000', 'minecraft:water 1000')
        .duration(892)
        .EUt(GTValues.VA[GTValues.HV])
        .circuit(1);

    // 1B C4H2O3 + 2B CH4O => 1B C6H10O4 + 1B O
    event.recipes.gtceu
        .large_chemical_reactor(id('maleic_anhydride_esterification'))
        .inputFluids('gtceu:maleic_anhydride 1000', 'gtceu:methanol 2000')
        .outputFluids('gtceu:dimethyl_maleate 1000', 'gtceu:oxygen 1000')
        .duration(418)
        .EUt(GTValues.VHA[GTValues.UV]);

    // 2B C6H10O4 + 10B H + 1B O =[1 PdC]=> 3B C4H10O3
    event.recipes.gtceu
        .large_chemical_reactor(id('dimethyl_maleate_hydrogenation'))
        .inputFluids('gtceu:dimethyl_maleate 2000', 'gtceu:hydrogen 10000', 'gtceu:oxygen 1000')
        .notConsumable('gtceu:palladium_on_carbon_dust')
        .outputFluids('gtceu:dimethyl_succinate 3000')
        .duration(763)
        .EUt(GTValues.VA[GTValues.ZPM]);

    // 4B C4H10O3 + 12B H => 2B C4H10O2 + 8B CH4O
    event.recipes.gtceu
        .large_chemical_reactor(id('dimethyl_succinate_hydrogenation'))
        .inputFluids('gtceu:dimethyl_succinate 4000', 'gtceu:hydrogen 12000')
        .outputFluids('gtceu:14_butanediol 2000', 'gtceu:methanol 8000')
        .duration(617)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    // 1B C4H10O2 + 2B O => 1B C4H6O2 + 2B H2O
    event.recipes.gtceu
        .large_chemical_reactor(id('y_butyrolactone'))
        .inputFluids('gtceu:14_butanediol 1000', 'gtceu:oxygen 2000')
        .outputFluids('gtceu:y_butyrolactone 1000', 'minecraft:water 2000')
        .duration(372)
        .EUt(GTValues.VA[GTValues.ZPM]);

    // 1B C4H6O2 + 1B CH5N => 16 C5H9NO + 1B H2O
    event.recipes.gtceu
        .large_chemical_reactor(id('nmp'))
        .inputFluids('gtceu:y_butyrolactone 1000', 'gtceu:methylamine 1000')
        .outputFluids('minecraft:water 1000')
        .itemOutputs('16x gtceu:n_methyl_2_pyrrolidone_dust')
        .duration(434)
        .EUt(GTValues.VA[GTValues.ZPM]);

    // 3B C6H5NO2 + 12B H + 3B NH3 =[1Ni]=> 3B C6H4(NH2)2 + 6B H2O
    event.recipes.gtceu
        .large_chemical_reactor(id('m_phelyenediamine'))
        .inputFluids('gtceu:nitrobenzene 3000', 'gtceu:hydrogen 12000', 'gtceu:ammonia 3000')
        .outputFluids('gtceu:m_phelyenediamine 3000', 'minecraft:water 6000')
        .notConsumable('gtceu:nickel_dust')
        .duration(713)
        .EUt(GTValues.VA[GTValues.LuV]);

    // 60 C17H6O7 + 16 C5H9NO + 2B C6H4(NH2)2 + 1B HNO3 => 3B C17H12N2O6 + 2B H
    event.recipes.gtceu
        .large_chemical_reactor(id('polyamic_acid'))
        .itemInputs(
            '60x gtceu:benzophenone_3344_tetracarboxylic_dianhydride_dust',
            '16x gtceu:n_methyl_2_pyrrolidone_dust'
        )
        .inputFluids('gtceu:m_phelyenediamine 2000', 'gtceu:nitric_acid 1000')
        .outputFluids('gtceu:polyamic_acid 3000', 'gtceu:hydrogen 2000')
        .duration(652)
        .EUt(GTValues.VA[GTValues.UV]);

    // 4B C17H12N2O6 + 4B NH3 => 4.032B C17H10N2O4 + 7B H2O + 1B N2O
    event.recipes.gtceu
        .large_chemical_reactor(id('polyimide'))
        .inputFluids('gtceu:polyamic_acid 4000', 'gtceu:ammonia 2000')
        .outputFluids('gtceu:polyimide 4032', 'minecraft:water 7000', 'gtceu:nitrous_oxide 1000')
        .duration(247)
        .EUt(GTValues.VA[GTValues.UV]);
});
