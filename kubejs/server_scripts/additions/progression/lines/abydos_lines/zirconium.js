ServerEvents.recipes((event) => {
    const id = global.id;

    const toRemoveId = [
        'gtceu:electrolyzer/decomposition_electrolyzing_titanite_slurry_residue',
        'gtceu:electrolyzer/decomposition_electrolyzing_hydroxo_dioxo_titanite_mixture',
        'gtceu:electrolyzer/decomposition_electrolyzing_titanite_residue',
        'gtceu:electrolyzer/decomposition_electrolyzing_titanium_tetrachloride_mixture',
        'gtceu:electrolyzer/decomposition_electrolyzing_zirconium_tetrachloride',
        'minecraft:nuclearcraft_zirconium_dust',
    ];

    toRemoveId.forEach((element) => {
        event.remove({ id: element });
    });

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
        .mixer(id('titanite_proc_1'))
        .itemInputs('gtceu:titanite_dust')
        .inputFluids('gtceu:perchloric_acid 3000')
        .outputFluids('gtceu:titanite_slurry 1000')
        .duration(400)
        .EUt(28000);

    event.recipes.gtceu
        .centrifuge(id('titanite_proc_2'))
        .inputFluids('gtceu:titanite_slurry 1000')
        .itemOutputs('11x gtceu:calcium_perchlorate_dust')
        .outputFluids('gtceu:titanite_slurry_residue 1000', 'gtceu:silica_gel 1000', 'minecraft:water 1000')
        .duration(360)
        .EUt(28000);

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
        .itemOutputs('gtceu:silicon_dioxide_dust')
        .outputFluids('gtceu:perchloric_acid 1000')
        .duration(120)
        .EUt(1984);

    event.recipes.gtceu
        .large_chemical_reactor(id('titanite_proc_3'))
        .itemInputs('2x gtceu:sodium_hydroxide_dust')
        .inputFluids('gtceu:titanite_slurry_residue 1000')
        .outputFluids('gtceu:hydroxo_dioxo_titanite_mixture 1000')
        .duration(400)
        .EUt(17500);

    event.recipes.gtceu
        .electrolyzer(id('titanite_proc_4'))
        .inputFluids('gtceu:hydroxo_dioxo_titanite_mixture 1000')
        .itemOutputs('3x gtceu:sodium_oxide_dust')
        .outputFluids('gtceu:titanite_residue 1000', 'minecraft:water 1000')
        .duration(800)
        .EUt(50000);

    event.recipes.gtceu
        .large_chemical_reactor(id('titanite_proc_5'))
        .inputFluids('gtceu:titanite_residue 1000', 'gtceu:hydrochloric_acid 4000')
        .outputFluids('gtceu:titanium_tetrachloride_mixture', 'minecraft:water 2000')
        .duration(900)
        .EUt(6400);

    event.recipes.gtceu
        .centrifuge(id('titanite_proc_6'))
        .inputFluids('gtceu:titanium_tetrachloride_mixture 2000')
        .itemOutputs('gtceu:zirconium_tetrachloride_dust')
        .outputFluids('gtceu:titanium_tetrachloride 1000')
        .duration(1200)
        .EUt(23000);

    event.recipes.gtceu
        .large_chemical_reactor(id('zirconium_from_zirconium_tetrachloride'))
        .itemInputs('gtceu:zirconium_tetrachloride_dust')
        .inputFluids('gtceu:hydrogen 4000')
        .itemOutputs('gtceu:zirconium_dust')
        .outputFluids('gtceu:hydrochloric_acid 4000')
        .duration(600)
        .EUt(1640);
});
