ServerEvents.recipes((event) => {
    const id = global.id;

    event.remove({ output: /gtceu:.*coil_block/ });

    // === MoS2, Cupronickel, Kanthal (no changes) ===
    event.recipes.gtceu
        .assembler(id('molybdenum_disilicide_coil_block'))
        .itemInputs('32x gtceu:molybdenum_disilicide_ring', '16x gtceu:graphene_foil')
        .inputFluids('gtceu:hsla_steel 144')
        .itemOutputs('gtceu:molybdenum_disilicide_coil_block')
        .duration(500)
        .EUt(1920);

    event.recipes.gtceu
        .assembler(id('cupronickel_coil_block'))
        .itemInputs('8x gtceu:cupronickel_double_wire', '8x gtceu:bronze_foil')
        .inputFluids('gtceu:tin_alloy 144')
        .itemOutputs('gtceu:cupronickel_coil_block')
        .duration(200)
        .EUt(30);

    event.recipes.gtceu
        .assembler(id('kanthal_coil_block'))
        .itemInputs('8x gtceu:kanthal_double_wire', '8x gtceu:aluminium_foil')
        .inputFluids('gtceu:copper 144')
        .itemOutputs('gtceu:kanthal_coil_block')
        .duration(300)
        .EUt(120);

    // === Nichrome, RTM, HSS-G (T1 Insulators) ===
    event.recipes.gtceu
        .assembler(id('nichrome_coil_block'))
        .itemInputs(
            '8x gtceu:nichrome_double_wire',
            '8x gtceu:stainless_steel_foil',
            '4x gtceu:borosilicate_glass_foil'
        )
        .inputFluids('gtceu:aluminium 144')
        .itemOutputs('gtceu:nichrome_coil_block')
        .duration(400)
        .EUt(480);

    event.recipes.gtceu
        .assembler(id('rtm_alloy_coil_block'))
        .itemInputs(
            '8x gtceu:rtm_alloy_double_wire',
            '8x gtceu:vanadium_steel_foil',
            '8x gtceu:borosilicate_glass_foil'
        )
        .inputFluids('gtceu:nichrome 144')
        .itemOutputs('gtceu:rtm_alloy_coil_block')
        .duration(500)
        .EUt(1920);

    event.recipes.gtceu
        .assembler(id('hssg_coil_block'))
        .itemInputs('8x gtceu:hssg_double_wire', '8x gtceu:tungsten_carbide_foil', '16x gtceu:borosilicate_glass_foil')
        .inputFluids('gtceu:tungsten 144')
        .itemOutputs('gtceu:hssg_coil_block')
        .duration(600)
        .EUt(7680);

    // === Naquadah, Trinium, Tritanium (T2 Insulators + Frames) ===
    event.recipes.gtceu
        .assembler(id('naquadah_coil_block'))
        .itemInputs(
            'gtceu:hssg_frame',
            '8x gtceu:naquadah_double_wire',
            '8x gtceu:osmium_foil',
            '8x gtceu:niobium_nitride_foil'
        )
        .inputFluids('gtceu:tungsten_steel 144')
        .itemOutputs('gtceu:naquadah_coil_block')
        .duration(700)
        .EUt(30720);

    event.recipes.gtceu
        .assembler(id('trinium_coil_block'))
        .itemInputs(
            'gtceu:hsse_frame',
            '8x gtceu:trinium_double_wire',
            '8x gtceu:enriched_naquadah_foil',
            '16x gtceu:niobium_nitride_foil'
        )
        .inputFluids('gtceu:naquadah 144')
        .itemOutputs('gtceu:trinium_coil_block')
        .duration(800)
        .EUt(122880);

    event.recipes.gtceu
        .assembler(id('tritanium_coil_block'))
        .itemInputs(
            'gtceu:trinaquadalloy_frame',
            '8x gtceu:tritanium_double_wire',
            '8x gtceu:naquadria_foil',
            '32x gtceu:niobium_nitride_foil'
        )
        .inputFluids('gtceu:trinium 144')
        .itemOutputs('gtceu:tritanium_coil_block')
        .duration(900)
        .EUt(491520);

    // === Zalloy, Magmada, Abyssal (T3 Insulators + Frames + SC Fine Wire) ===
    event.recipes.gtceu
        .assembler(id('zalloy_coil_block'))
        .itemInputs(
            'gtceu:neutronium_frame',
            '8x gtceu:zalloy_double_wire',
            '8x gtceu:zirconium_foil',
            '32x gtceu:fine_ruthenium_trinium_americium_neutronate_wire',
            '16x gtceu:neutronium_silicon_carbide_foil'
        )
        .inputFluids('gtceu:tritanium 144')
        .itemOutputs('kubejs:zalloy_coil_block')
        .duration(1000)
        .EUt(1966080);

    event.recipes.gtceu
        .assembler(id('magmada_alloy_coil_block'))
        .itemInputs(
            'gtceu:ancient_netherite_frame',
            '8x gtceu:magmada_alloy_double_wire',
            '8x gtceu:pure_netherite_foil',
            '32x gtceu:fine_enriched_pallarovium_alloy_wire',
            '32x gtceu:neutronium_silicon_carbide_foil'
        )
        .inputFluids('gtceu:adamantine 144')
        .itemOutputs('kubejs:magmada_alloy_coil_block')
        .duration(1100)
        .EUt(7864320);

    event.recipes.gtceu
        .assembler(id('abyssal_alloy_coil_block'))
        .itemInputs(
            'gtceu:draconyallium_frame',
            '8x gtceu:abyssal_alloy_double_wire',
            '8x gtceu:nyanium_foil',
            '32x gtceu:fine_rhenium_super_composite_alloy_wire',
            '64x gtceu:neutronium_silicon_carbide_foil'
        )
        .inputFluids('gtceu:void 144')
        .itemOutputs('kubejs:abyssal_alloy_coil_block')
        .duration(1200)
        .EUt(31457280);
});
