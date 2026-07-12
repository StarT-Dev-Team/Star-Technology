ServerEvents.recipes((event) => {
    const id = global.id;

    event.recipes.gtceu
        .chemical_reactor(id('perchloric_acid'))
        .itemInputs('gtceu:sodium_perchlorate_dust')
        .inputFluids('gtceu:hydrochloric_acid 1000')
        .outputFluids('gtceu:perchloric_acid 1000')
        .itemOutputs('gtceu:salt_dust')
        .duration(200)
        .EUt(120);

    event.recipes.gtceu
        .large_chemical_reactor(id('perchloric_acid'))
        .itemInputs('gtceu:sodium_perchlorate_dust')
        .inputFluids('gtceu:hydrochloric_acid 1000')
        .outputFluids('gtceu:perchloric_acid 1000')
        .itemOutputs('gtceu:salt_dust')
        .duration(200)
        .EUt(120);

    event.recipes.gtceu
        .chemical_reactor(id('calcium_perchlorate_to_perchloric_acid'))
        .itemInputs('11x gtceu:calcium_perchlorate_dust')
        .inputFluids('gtceu:sulfuric_acid 1000')
        .itemOutputs('6x gtceu:calcium_sulfate_dust')
        .outputFluids('gtceu:perchloric_acid 2000')
        .duration(120)
        .EUt(496);

    event.recipes.gtceu
        .large_chemical_reactor(id('calcium_perchlorate_to_perchloric_acid'))
        .itemInputs('11x gtceu:calcium_perchlorate_dust')
        .inputFluids('gtceu:sulfuric_acid 1000')
        .itemOutputs('6x gtceu:calcium_sulfate_dust')
        .outputFluids('gtceu:perchloric_acid 2000')
        .duration(120)
        .EUt(496);

    event.recipes.gtceu
        .centrifuge(id('silica_gel_to_perchloric_acid'))
        .inputFluids('gtceu:silica_gel 1000')
        .itemOutputs('3x gtceu:silicon_dioxide_dust')
        .outputFluids('gtceu:perchloric_acid 1000')
        .duration(120)
        .EUt(1984);

    // CaTiSiO5 + 3B HClO4 => 1B (CaTiSiO5)?
    event.recipes.gtceu
        .mixer(id('titanite_proc_1'))
        .itemInputs('gtceu:titanite_dust')
        .inputFluids('gtceu:perchloric_acid 3000')
        .outputFluids('gtceu:titanite_slurry 1000')
        .duration(400)
        .EUt(28000);

    // 1B (CaTiSiO5)? => 11 CaCl2O8 + 1B (TiO2)? + 1BClHOgSi + 1B H2O
    event.recipes.gtceu
        .centrifuge(id('titanite_proc_2'))
        .inputFluids('gtceu:titanite_slurry 1000')
        .itemOutputs('11x gtceu:calcium_perchlorate_dust')
        .outputFluids('gtceu:titanite_slurry_residue 1000', 'gtceu:silica_gel 1000', 'minecraft:water 1000')
        .duration(360)
        .EUt(28000);

    // 1B (TiO2)? + 6 NaOH => 1B Na2(TiO2)O2H2?
    event.recipes.gtceu
        .large_chemical_reactor(id('titanite_proc_3'))
        .itemInputs('6x gtceu:sodium_hydroxide_dust')
        .inputFluids('gtceu:titanite_slurry_residue 1000')
        .outputFluids('gtceu:hydroxo_dioxo_titanite_mixture 1000')
        .duration(400)
        .EUt(17500);

    // 1B Na2(TiO2)O2H2? => 1B (TiO2)? + 3 Na2O + 1B H2O
    event.recipes.gtceu
        .electrolyzer(id('titanite_proc_4'))
        .inputFluids('gtceu:hydroxo_dioxo_titanite_mixture 1000')
        .itemOutputs('3x gtceu:sodium_oxide_dust')
        .outputFluids('gtceu:titanite_residue 1000', 'minecraft:water 1000')
        .duration(800)
        .EUt(50000);

    // 1B (TiO2)? + 2 C + 8B HCl => 1B (TiCl4)(ZrCl4) + 2CH4O
    event.recipes.gtceu
        .large_chemical_reactor(id('titanite_proc_5'))
        .itemInputs('2x gtceu:carbon_dust')
        .inputFluids('gtceu:titanite_residue 1000', 'gtceu:hydrochloric_acid 8000')
        .outputFluids('gtceu:titanium_tetrachloride_mixture', 'gtceu:methanol 2000')
        .duration(900)
        .EUt(6400);

    // 1B (TiCl4)(ZgCl4) => 5 ZrCl4 + 1B TiCl
    event.recipes.gtceu
        .centrifuge(id('titanite_proc_6'))
        .inputFluids('gtceu:titanium_tetrachloride_mixture 5000')
        .itemOutputs('5x gtceu:zirconium_tetrachloride_dust')
        .outputFluids('gtceu:titanium_tetrachloride 1000')
        .duration(1200)
        .EUt(23000);

    // 5 ZrCl + 4B H => 1 Zr + 4HCl
    event.recipes.gtceu
        .large_chemical_reactor(id('zirconium_from_zirconium_tetrachloride'))
        .itemInputs('5x gtceu:zirconium_tetrachloride_dust')
        .inputFluids('gtceu:hydrogen 4000')
        .itemOutputs('gtceu:zirconium_dust')
        .outputFluids('gtceu:hydrochloric_acid 4000')
        .duration(600)
        .EUt(1640);
});
