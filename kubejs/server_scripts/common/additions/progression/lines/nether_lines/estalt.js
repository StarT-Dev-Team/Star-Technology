ServerEvents.recipes((event) => {
    const id = global.id;

    event.recipes.gtceu
        .molten_destabilizing(id('molten_estaltadyne_mixture'))
        .inputFluids('gtceu:molten_estaltadyne_mixture 300000')
        .outputFluids(
            'gtceu:estaltadyne 200000',
            'gtceu:highly_unstable_nether_magma 50000',
            'gtceu:molten_ore_mixture 50000'
        )
        .itemOutputs('32x gtceu:netherrack_dust')
        .duration(3600)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu
        .electrolyzer(id('estaltadyne_dust'))
        .inputFluids('gtceu:estaltadyne 1000')
        .outputFluids('gtceu:mystical_nether_magma 250')
        .itemOutputs('gtceu:estaltadyne_dust', 'gtceu:small_estaltadyne_dust')
        .duration(140)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu
        .ordered_chemistry(id('estaltadyne_hydride'))
        .layeredRecipe((layers) =>
            layers
                .itemInputs('1x gtceu:estaltadyne_dust', '6x gtceu:carbon_dust')
                .next()
                .itemInputs('4x gtceu:sodium_dust')
                .inputFluids('gtceu:carbon_dioxide 2000')
                .next()
                .inputFluids('gtceu:hydrofluoric_acid 3500', 'gtceu:hydrogen 1500')
                .next()
                .itemInputs('2x gtceu:magnesium_dust', '1x gtceu:sodium_hydroxide_dust')
                .next()
                .itemInputs('1x gtceu:sodium_hydroxide_dust')
                .inputFluids('gtceu:nitric_acid 2000')
        )
        .itemOutputs('gtceu:estaltadyne_hydride_dust')
        .EUt(GTValues.VHA[GTValues.UEV])
        .duration(160);

    event.recipes.gtceu
        .large_chemical_reactor(id('estalt_dust'))
        .itemInputs('1x gtceu:estaltadyne_hydride_dust')
        .itemInputs('15x gtceu:phosphate_dust')
        .itemOutputs('4x gtceu:estalt_dust')
        .outputFluids('gtceu:phosphoric_acid 3000')
        .duration(1200)
        .EUt(GTValues.V[GTValues.UV]);

    event.replaceInput(
        { id: 'gtceu:electric_blast_furnace/blast_estalt_gas' },
        Fluid.of('gtceu:krypton 10'),
        Fluid.of('gtceu:xenon 10')
    );

    event.recipes.gtceu
        .electrolyzer(id('phosphoric_acid_decomp'))
        .inputFluids('gtceu:phosphoric_acid 1000')
        .outputFluids('gtceu:hydrogen 3000', 'gtceu:oxygen 4000')
        .itemOutputs('gtceu:phosphorus_dust')
        .duration(1420)
        .EUt(30);

    // === Enriched Estalt ===
    event.recipes.gtceu
        .electrolyzer(id('enriched_estalt'))
        .inputFluids('gtceu:enriched_estaltadyne_solution 1000')
        .itemOutputs('1x gtceu:enriched_estalt_dust')
        .outputFluids('gtceu:enriched_mystical_concentrate 500')
        .duration(190)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu
        .manifold_centrifuge(id('enriched_mystical_concentrate_decomposition'))
        .inputFluids('gtceu:enriched_mystical_concentrate 3000')
        .outputFluids('gtceu:enriched_mythrillic_mixture 1000')
        .outputFluids('gtceu:enriched_estaltadyne_mixture 1000')
        .outputFluids('gtceu:enriched_adamantamite_mixture 1000')
        .duration(300)
        .EUt(GTValues.VHA[GTValues.UEV]);

    event.replaceInput(
        { id: 'gtceu:electric_blast_furnace/blast_enriched_estalt_gas' },
        Fluid.of('gtceu:krypton 10'),
        Fluid.of('gtceu:xenon 10')
    );
});
