ServerEvents.recipes((event) => {
    const id = global.id;

    //Mystical Magma
    event.recipes.gtceu
        .cyclonic_sifter(id('mystical_nether_magma'))
        .inputFluids('gtceu:highly_unstable_nether_magma 200000')
        .chancedInput('1x kubejs:ancient_netherite_reinforced_mesh', 1000, -150)
        .outputFluids('gtceu:mystical_nether_magma 12000')
        .itemOutputs(
            '3x gtceu:deactivated_nether_dust',
            '2x gtceu:small_deactivated_nether_dust',
            '1x gtceu:tiny_deactivated_nether_dust'
        )
        .duration(1350)
        .EUt((GTValues.VA[GTValues.UEV] * 3) / 11);

    event.recipes.gtceu
        .polarizer(id('nether_dust_activation'))
        .itemInputs('1x gtceu:deactivated_nether_dust')
        .itemOutputs('1x gtceu:activated_nether_dust')
        .duration(360)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu
        .molten_destabilizing(id('mystical_nether_magma_deconstruction'))
        .inputFluids('gtceu:mystical_nether_magma 3000')
        .outputFluids(
            'gtceu:estaltadyne_nether_magma 1000',
            'gtceu:adamantamite_nether_magma 1000',
            'gtceu:mythrillic_nether_magma 1000'
        )
        .duration(480)
        .EUt((GTValues.VHA[GTValues.UHV] * 3) / 5);

    event.recipes.gtceu
        .manifold_centrifuge(id('adamantamite_nether_magma_deconstruction'))
        .inputFluids('gtceu:adamantamite_nether_magma 9000')
        .outputFluids(
            'gtceu:molten_adamantamite_mixture 6000',
            'gtceu:enriched_adamantamite_mixture 2000',
            'gtceu:mystical_nether_magma 1000'
        )
        .duration(1200)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu
        .manifold_centrifuge(id('mythrillic_nether_magma_deconstruction'))
        .inputFluids('gtceu:mythrillic_nether_magma 9000')
        .outputFluids(
            'gtceu:molten_mythrillic_mixture 6000',
            'gtceu:enriched_mythrillic_mixture 2000',
            'gtceu:mystical_nether_magma 1000'
        )
        .duration(1200)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu
        .manifold_centrifuge(id('estaltadyne_nether_magma_deconstruction'))
        .inputFluids('gtceu:estaltadyne_nether_magma 9000')
        .outputFluids(
            'gtceu:molten_estaltadyne_mixture 6000',
            'gtceu:enriched_estaltadyne_mixture 2000',
            'gtceu:mystical_nether_magma 1000'
        )
        .duration(1200)
        .EUt(GTValues.VHA[GTValues.UHV]);

    ['mythrillic', 'adamantamite'].forEach((type) => {
        event.recipes.gtceu
            .heat_chamber(id(`activated_nether_by_enriched_${type}_to_atomic_nether_sludge`))
            .inputFluids(`gtceu:enriched_${type}_mixture 100`)
            .itemInputs('1x gtceu:small_activated_nether_dust')
            .outputFluids(`gtceu:molten_${type}_mixture 100`)
            .itemOutputs('1x gtceu:small_atomic_nether_sludge_dust')
            .duration(300)
            .EUt(GTValues.VHA[GTValues.UHV]);
    });

    event.recipes.gtceu
        .heat_chamber(id(`enriched_estaltadyne_mixture_to_solution`))
        .inputFluids(`gtceu:enriched_estaltadyne_mixture 500`)
        .itemInputs(`3x gtceu:small_activated_nether_dust`, '7x gtceu:tiny_activated_nether_dust')
        .outputFluids(`gtceu:enriched_estaltadyne_solution 500`)
        .itemOutputs('3x gtceu:small_atomic_nether_sludge_dust', '7x gtceu:tiny_atomic_nether_sludge_dust')
        .duration(1200)
        .EUt(GTValues.VHA[GTValues.UHV]);

    //Debris Magma
    event.recipes.gtceu
        .centrifuge(id('debris_rich_nether_magma_deconstruction'))
        .inputFluids('gtceu:debris_rich_nether_magma 250000')
        .outputFluids('minecraft:lava 100000')
        .outputFluids('gtceu:debris 125000')
        .outputFluids('gtceu:ancient_debris 25000')
        .duration(2400)
        .EUt(GTValues.VHA[GTValues.UEV]);

    event.recipes.gtceu
        .fluid_solidifier(id('debris_dust_from_liquid'))
        .inputFluids('gtceu:debris 144')
        .itemOutputs('1x gtceu:debris_dust')
        .duration(20)
        .EUt(GTValues.VHA[GTValues.IV]);

    event.recipes.gtceu
        .fluid_solidifier(id('ancient_debris_from_liquid'))
        .inputFluids('gtceu:ancient_debris 576')
        .itemOutputs('1x minecraft:ancient_debris')
        .duration(100)
        .EUt(GTValues.VHA[GTValues.LuV]);
});
