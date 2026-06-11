ServerEvents.recipes((event) => {
    const id = global.id;

    // Boron Nitride (Mixing Casing)
    // event.recipes.gtceu.chemical_skip(id('boron_nitride'))
    //     .itemInputs('1x gtceu:boron_dust')
    //     .inputFluids('gtceu:nitrogen 1000')
    //     .itemOutputs('2x gtceu:boron_nitride_dust')
    //     .duration(240)
    //     .EUt(GTValues.VHA[GTValues.LuV] * 5/6);

    event.recipes.gtceu
        .large_chemical_reactor(id('boron_trioxide'))
        .itemInputs('2x gtceu:boron_dust')
        .inputFluids('gtceu:oxygen 3000')
        .itemOutputs('5x gtceu:boron_trioxide_dust')
        .duration(100)
        .EUt(GTValues.VHA[GTValues.IV]);

    event.recipes.gtceu
        .large_chemical_reactor(id('boron_nitride'))
        .itemInputs('5x gtceu:boron_trioxide_dust')
        .inputFluids('gtceu:ammonia 2000')
        .itemOutputs('4x gtceu:boron_nitride_dust')
        .outputFluids('minecraft:water 3000')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.IV]);

    // Thallium Tungstate (Shaky Casing)
    // event.recipes.gtceu.chemical_skip(id('thallium_tungstate'))
    //     .itemInputs('1x gtceu:tungsten_dust', '2x gtceu:thallium_dust')
    //     .inputFluids('gtceu:oxygen 4000')
    //     .itemOutputs('7x gtceu:thallium_tungstate_dust')
    //     .duration(350)
    //     .EUt(GTValues.VHA[GTValues.ZPM]);

    event.recipes.gtceu
        .large_chemical_reactor(id('tungsten_trioxide'))
        .itemInputs('1x gtceu:tungsten_dust')
        .inputFluids('gtceu:oxygen 3000')
        .itemOutputs('4x gtceu:tungsten_trioxide_dust')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.LuV]);

    event.recipes.gtceu
        .large_chemical_reactor(id('thallium_tungstate'))
        .itemInputs('2x gtceu:thallium_dust', '4x gtceu:tungsten_trioxide_dust')
        .inputFluids('gtceu:oxygen 1000')
        .itemOutputs('7x gtceu:thallium_tungstate_dust')
        .duration(800)
        .EUt(GTValues.VHA[GTValues.LuV]);
});
