ServerEvents.recipes((event) => {
    const id = global.id;

    // === Xenotime RE Line ===
    event.recipes.gtceu
        .large_chemical_reactor(id('xenotime_proc_1'))
        .itemInputs('2x gtceu:xenotime_dust')
        .inputFluids('gtceu:sulfuric_acid 3000')
        .outputFluids('gtceu:rare_earth_sulfate_solution 1000', 'gtceu:phosphoric_acid 2000')
        .duration(550)
        .EUt(28000);

    event.recipes.gtceu
        .mixer(id('xenotime_proc_2'))
        .itemInputs('gtceu:rare_earth_dust')
        .inputFluids('gtceu:rare_earth_sulfate_solution 2000')
        .outputFluids('gtceu:rare_earth_leach_mixture 2000')
        .duration(150)
        .EUt(88000);

    event.recipes.gtceu
        .electrolyzer(id('xenotime_proc_3'))
        .inputFluids('gtceu:rare_earth_leach_mixture 1000')
        .itemOutputs('1x gtceu:yttrium_dust')
        .outputFluids('gtceu:rare_earth_concentrate 3000')
        .duration(700)
        .EUt(26000);

    event.recipes.gtceu
        .electric_blast_furnace(id('xenotime_proc_4'))
        .itemInputs('2x gtceu:quicklime_dust')
        .inputFluids('gtceu:rare_earth_concentrate 1000')
        .itemOutputs('gtceu:rich_rare_earth_dust', '6x gtceu:calcium_sulfate_dust')
        .outputFluids('gtceu:oxygen 1000')
        .blastFurnaceTemp(7500)
        .duration(1200)
        .EUt(30000);

    event.recipes.gtceu
        .centrifuge(id('xenotime_proc_5'))
        .itemInputs('1x gtceu:rich_rare_earth_dust')
        .chancedOutput('1x gtceu:small_lutetium_dust', 4000, 300)
        .chancedOutput('1x gtceu:small_dysprosium_dust', 4000, 300)
        .chancedOutput('1x gtceu:small_europium_dust', 4000, 300)
        .chancedOutput('1x gtceu:small_samarium_dust', 4000, 300)
        .duration(28)
        .EUt(48000);

    // === Magnetic Adjsutments ===
    event.remove({ output: /gtceu:.*magnetic_dysprosium.*/ });
    event.remove({ input: /gtceu:.*magnetic_dysprosium.*/ });
    event.remove({ output: /gtceu:.*magnetic_zapolgium.*/ });
    event.remove({ input: /gtceu:.*magnetic_zapolgium.*/ });

    [
        { type: 'dysprosium', duration: 200, energy: GTValues.VA[LuV] },
        { type: 'zapolgium', duration: 300, energy: GTValues.VA[UV] },
    ].forEach((magIngot) => {
        event.recipes.gtceu
            .polarizer(id(`magnetic_${magIngot.type}_rod`))
            .itemInputs(`gtceu:${magIngot.type}_rod`)
            .itemOutputs(`gtceu:magnetic_${magIngot.type}_rod`)
            .duration(magIngot.duration / 2)
            .EUt(magIngot.energy);

        event.recipes.gtceu
            .polarizer(id(`long_magnetic_${magIngot.type}_rod`))
            .itemInputs(`gtceu:long_${magIngot.type}_rod`)
            .itemOutputs(`gtceu:long_magnetic_${magIngot.type}_rod`)
            .duration(magIngot.duration)
            .EUt(magIngot.energy);
    });
});
