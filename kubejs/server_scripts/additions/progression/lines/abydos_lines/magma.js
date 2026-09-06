ServerEvents.recipes((event) => {
    const id = global.id;

    // === Magma Breakdown ===
    event.recipes.gtceu
        .cyclonic_sifter(id('abydos_refractory_dense_magma'))
        .chancedInput('1x kubejs:netherite_reinforced_mesh', 300, -20)
        .inputFluids('gtceu:abydos_refractory_dense_magma 25000')
        .outputFluids('gtceu:refractory_dense_residue 16000')
        .itemOutputs('1x gtceu:abydos_magma_slag_dust')
        .duration(240)
        .EUt(GTValues.VHA[ZPM] * 0.8);

    event.recipes.gtceu
        .cyclonic_sifter(id('abydos_reactive_dense_magma'))
        .chancedInput('1x kubejs:netherite_reinforced_mesh', 300, -20)
        .inputFluids('gtceu:abydos_reactive_dense_magma 25000')
        .outputFluids('gtceu:reactive_dense_residue 16000')
        .itemOutputs('1x gtceu:abydos_magma_slag_dust')
        .duration(240)
        .EUt(GTValues.VHA[ZPM] * 0.8);

    event.recipes.gtceu
        .cyclonic_sifter(id('abydos_naquadite_dense_magma'))
        .chancedInput('1x kubejs:netherite_reinforced_mesh', 300, -20)
        .inputFluids('gtceu:abydos_naquadite_dense_magma 25000')
        .outputFluids('gtceu:naquadite_dense_residue 16000')
        .itemOutputs('1x gtceu:abydos_magma_slag_dust')
        .duration(240)
        .EUt(GTValues.VHA[ZPM] * 0.8);

    // === Residue Breakdown ===
    event.recipes.gtceu
        .molten_destabilizing(id('abydos_refractory_dense_magma'))
        .inputFluids('gtceu:abydos_refractory_dense_magma 300000')
        .outputFluids('minecraft:lava 290000')
        .itemOutputs(
            '4x gtceu:raw_titanite',
            '3x gtceu:raw_xenotime',
            '2x gtceu:raw_monazite',
            '1x gtceu:raw_scheelite'
        )
        .duration(1080)
        .EUtVHA(UV);

    event.recipes.gtceu
        .molten_destabilizing(id('abydos_reactive_dense_magma'))
        .inputFluids('gtceu:abydos_reactive_dense_magma 300000')
        .outputFluids('minecraft:lava 290000')
        .itemOutputs(
            '4x gtceu:raw_zapolite',
            '3x gtceu:raw_crookesite',
            '2x gtceu:raw_kitkaite',
            '1x gtceu:raw_lautarite'
        )
        .duration(1080)
        .EUtVHA(UV);

    event.recipes.gtceu
        .molten_destabilizing(id('abydos_naquadite_dense_magma'))
        .inputFluids('gtceu:abydos_naquadite_dense_magma 300000')
        .outputFluids('minecraft:lava 290000')
        .itemOutputs(
            '4x gtceu:raw_naquadite',
            '3x gtceu:raw_magnesite',
            '2x gtceu:raw_chromite',
            '1x gtceu:raw_magnetite'
        )
        .duration(1080)
        .EUtVHA(UV);

    event.recipes.gtceu
        .molten_destabilizing(id('refractory_dense_residue'))
        .inputFluids('gtceu:refractory_dense_residue 60000')
        .outputFluids('gtceu:molten_ore_mixture 50000')
        .itemOutputs(
            '8x gtceu:raw_titanite',
            '6x gtceu:raw_xenotime',
            '5x gtceu:raw_monazite',
            '3x gtceu:raw_scheelite'
        )
        .duration(840)
        .EUtVHA(UV);

    event.recipes.gtceu
        .molten_destabilizing(id('reactive_dense_residue'))
        .inputFluids('gtceu:reactive_dense_residue 60000')
        .outputFluids('gtceu:molten_ore_mixture 50000')
        .itemOutputs(
            '8x gtceu:raw_zapolite',
            '6x gtceu:raw_crookesite',
            '5x gtceu:raw_kitkaite',
            '3x gtceu:raw_lautarite'
        )
        .duration(840)
        .EUtVHA(UV);

    event.recipes.gtceu
        .molten_destabilizing(id('naquadite_dense_residue'))
        .inputFluids('gtceu:naquadite_dense_residue 60000')
        .outputFluids('gtceu:molten_ore_mixture 50000')
        .itemOutputs(
            '8x gtceu:raw_naquadite',
            '6x gtceu:raw_magnesite',
            '5x gtceu:raw_chromite',
            '3x gtceu:raw_magnetite'
        )
        .duration(840)
        .EUtVHA(UV);

    // === Slag Breakdown ===
    event.recipes.gtceu
        .centrifuge(id('abydos_magma_slag_separation'))
        .itemInputs('7x gtceu:abydos_magma_slag_dust')
        .itemOutputs(
            '3x gtceu:strontianite_dust',
            '2x gtceu:celestine_dust',
            '1x gtceu:metal_mixture_dust',
            '1x gtceu:gypsum_dust'
        )
        .duration(342)
        .EUtVHA(EV);
});
