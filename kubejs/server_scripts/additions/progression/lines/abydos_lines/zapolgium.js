ServerEvents.recipes((event) => {
    const id = global.id;

    // Zg2I4Al2O6 => ZgI2Al2O4 + ZgI2O2 (40% + 10%)
    event.recipes.gtceu
        .electromagnetic_separator(id('zapolite_proc_1'))
        .itemInputs('gtceu:zapolite_dust')
        .itemOutputs('gtceu:zapolgium_aluminium_oxide_dust')
        .chancedOutput('gtceu:zapolgium_diiodide_dioxide_dust', 4000, 1000)
        .duration(100)
        .EUt(2600);

    // 9ZgI2Al2O4 => 4ZgI2O + 5Al2O3
    event.recipes.gtceu
        .centrifuge(id('zapolite_proc_2_a_1'))
        .itemInputs('9x gtceu:zapolgium_aluminium_oxide_dust')
        .itemOutputs('4x gtceu:zapolgium_diiodide_oxide_dust', '5x gtceu:bauxite_dust')
        .duration(800)
        .EUt(12000);

    // 4ZgI2O => 2ZgO + 2I
    event.recipes.gtceu
        .electrolyzer(id('zapolite_proc_2_a_2'))
        .itemInputs('4x gtceu:zapolgium_diiodide_oxide_dust')
        .itemOutputs('2x gtceu:zapolgium_oxide_dust', '2x gtceu:iodine_dust')
        .duration(600)
        .EUt(16000);

    // ZgI2O2 + 2H => 2ZgO + 2I + H2O
    event.recipes.gtceu
        .large_chemical_reactor(id('zapolite_proc_2_b_1'))
        .itemInputs('5x gtceu:zapolgium_diiodide_dioxide_dust')
        .inputFluids('gtceu:hydrogen 2000')
        .itemOutputs('2x gtceu:zapolgium_oxide_dust', '2x gtceu:iodine_dust')
        .outputFluids('minecraft:water 1000')
        .duration(300)
        .EUt(20000);

    // 2ZgO + 2HCl => 3ZgCl2 + H2O
    event.recipes.gtceu
        .large_chemical_reactor(id('zapolite_proc_3'))
        .itemInputs('2x gtceu:zapolgium_oxide_dust')
        .inputFluids('gtceu:hydrochloric_acid 2000')
        .itemOutputs('3x gtceu:zapolgium_chloride_dust')
        .outputFluids('minecraft:water 1000')
        .duration(600)
        .EUt(28000);

    // 3ZgCl2 + 6KOH => 5Zg(OH)2 + 4KCl
    event.recipes.gtceu
        .large_chemical_reactor(id('zapolgium_ore_proc_4'))
        .itemInputs('3x gtceu:zapolgium_chloride_dust', '6x gtceu:potassium_hydroxide_dust')
        .itemOutputs('5x gtceu:zapolgium_hydroxide_dust', '4x gtceu:rock_salt_dust')
        .duration(1200)
        .EUt(56000);

    // 5Zg(OH)2 + C => Zg + CO + H2O (steam)
    event.recipes.gtceu
        .electric_blast_furnace(id('zapolgium_proc_5'))
        .itemInputs('5x gtceu:zapolgium_hydroxide_dust', 'gtceu:carbon_dust')
        .itemOutputs('gtceu:hot_zapolgium_ingot')
        .outputFluids('gtceu:carbon_monoxide 1000', 'gtceu:steam 1000')
        .blastFurnaceTemp(10299)
        .duration(5500)
        .EUt(98000);
});
