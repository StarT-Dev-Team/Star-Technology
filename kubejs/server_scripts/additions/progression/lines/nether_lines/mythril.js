ServerEvents.recipes((event) => {
    const id = global.id;

    event.recipes.gtceu
        .molten_destabilizing(id('molten_mythrillic_mixture'))
        .inputFluids('gtceu:molten_mythrillic_mixture 300000')
        .outputFluids(
            'gtceu:mythrillic 200000',
            'gtceu:highly_unstable_nether_magma 25000',
            'gtceu:molten_ore_mixture 75000'
        )
        .itemOutputs('32x gtceu:netherrack_dust')
        .duration(3600)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu
        .electrolyzer(id('mythrillic_dust'))
        .inputFluids('gtceu:mythrillic 1000')
        .outputFluids('gtceu:mystical_nether_magma 250')
        .itemOutputs('gtceu:mythrillic_dust', 'gtceu:small_mythrillic_dust')
        .duration(140)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu
        .ordered_chemistry(id('mythrillic_hydroxide'))
        .layeredRecipe((layers) =>
            layers
                .itemInputs('gtceu:mythrillic_dust')
                .inputFluids('gtceu:hydrogen 2875')
                .next()
                .itemInputs('3x gtceu:carbon_dust')
                .inputFluids('gtceu:hydrogen 3250')
                .next()
                .itemInputs('2x gtceu:sodium_hydroxide_dust')
                .inputFluids('gtceu:hydrochloric_acid 1875')
        )
        .inputFluids('gtceu:oxygen 1875')
        .duration(116)
        .itemOutputs('6x gtceu:mythrillic_hydride_dust')
        .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu
        .electric_blast_furnace(id('mythril'))
        .itemInputs('gtceu:mythrillic_hydride_dust')
        .itemInputs('gtceu:sulfur_dust')
        .itemOutputs('gtceu:mythril_dust')
        .outputFluids('gtceu:hydrogen_sulfide 1000')
        .duration(420)
        .blastFurnaceTemp(9100)
        .EUt(GTValues.VHA[GTValues.UEV]);

    event.replaceInput(
        { id: 'gtceu:electric_blast_furnace/blast_mythril_gas' },
        Fluid.of('gtceu:krypton 10'),
        Fluid.of('gtceu:xenon 10')
    );
});
