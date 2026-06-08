ServerEvents.recipes((event) => {
    const id = global.id;

    event.recipes.gtceu
        .molten_destabilizing(id('molten_adamantamite_mixture'))
        .inputFluids('gtceu:molten_adamantamite_mixture 300000')
        .outputFluids(
            'gtceu:adamantamite 200000',
            'gtceu:highly_unstable_nether_magma 25000',
            'gtceu:molten_ore_mixture 75000'
        )
        .itemOutputs('32x gtceu:netherrack_dust')
        .duration(3600)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu
        .electrolyzer(id('adamantamite_dust'))
        .inputFluids('gtceu:adamantamite 1000')
        .outputFluids('gtceu:mystical_nether_magma 250')
        .itemOutputs('gtceu:adamantamite_dust', 'gtceu:small_adamantamite_dust')
        .duration(140)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu
        .ordered_chemistry(id('adamantine_hydroxide'))
        .layeredRecipe((layers) =>
            layers
                .itemInputs('gtceu:adamantamite_dust')
                .inputFluids('gtceu:hydrochloric_acid 2500')
                .next()
                .itemInputs('3x gtceu:carbon_dust')
                .inputFluids('gtceu:hydrogen 4250')
                .next()
                .itemInputs('3x gtceu:sodium_hydroxide_dust', '2x gtceu:sodium_dust')
                .next()
                .inputFluids('gtceu:hydrofluoric_acid 1875', 'gtceu:chlorine 2000')
                .next()
                .itemInputs('2x gtceu:magnesium_dust')
                .inputFluids('gtceu:nitric_acid 1500')
        )
        .itemOutputs('5x gtceu:adamantine_hydroxide_dust')
        .duration(180)
        .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu
        .large_chemical_reactor(id('adamantine'))
        .itemInputs('gtceu:adamantine_hydroxide_dust', '3x gtceu:sodium_dust')
        .itemOutputs('gtceu:adamantine_dust', '9x gtceu:sodium_hydroxide_dust')
        .duration(540)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.replaceInput(
        { id: 'gtceu:electric_blast_furnace/blast_adamantine_gas' },
        Fluid.of('gtceu:krypton 10'),
        Fluid.of('gtceu:xenon 10')
    );
});
