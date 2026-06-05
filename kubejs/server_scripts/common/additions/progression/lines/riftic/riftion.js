ServerEvents.recipes((event) => {
    const id = global.id;

    event.recipes.gtceu
        .cyclonic_sifter(id('highly_unstable_rift_source'))
        .inputFluids('gtceu:highly_unstable_rift_source 100000')
        .chancedInput('1x kubejs:voidic_reinforced_mesh', 250, -50)
        .outputFluids('gtceu:destabilized_rift_source 27500', 'gtceu:riftion_extract 1250')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.UXV]);

    event.recipes.gtceu
        .injection_mixer(id('ascension_rift_slurry'))
        .inputFluids('gtceu:destabilized_rift_source 7500', 'gtceu:borealic_concentrate 432')
        .outputFluids('gtceu:ascension_rift_slurry 5000')
        .duration(720)
        .EUt(GTValues.VHA[GTValues.UIV]);

    event.recipes.gtceu
        .injection_mixer(id('abyssal_rift_slurry'))
        .inputFluids('gtceu:destabilized_rift_source 7500', 'gtceu:voidic_plasma 432')
        .outputFluids('gtceu:abyssal_rift_slurry 5000')
        .duration(720)
        .EUt(GTValues.VHA[GTValues.UIV]);

    event.recipes.gtceu
        .pressure_heat_chamber(id('rimula_t_foundation'))
        .inputFluids('gtceu:ascension_rift_slurry 3750')
        .outputFluids('gtceu:rimula_t_foundation 2500')
        .duration(540)
        .EUt(GTValues.VA[GTValues.UIV]);

    event.recipes.gtceu
        .pressure_heat_chamber(id('rimula_s_foundation'))
        .inputFluids('gtceu:abyssal_rift_slurry 3750')
        .outputFluids('gtceu:rimula_s_foundation 2500')
        .duration(540)
        .EUt(GTValues.VA[GTValues.UIV]);

    event.recipes.gtceu
        .abyssal_akreyriadix_stabiliser(id('true_rimula_foundation'))
        .inputFluids('gtceu:rimula_s_foundation 500', 'gtceu:rimula_t_foundation 500')
        .outputFluids('gtceu:true_rimula_foundation 875')
        .duration(48)
        .EUt(GTValues.VA[GTValues.UIV]);

    event.recipes.gtceu
        .reflector_fusion_reactor(id(`riftion_plasma_from_riftion_extract_and_neutronium`))
        .inputFluids(`gtceu:riftion_extract 5000`, `gtceu:neutronium 432`)
        .outputFluids(`gtceu:riftion_plasma 250`)
        .duration(1200)
        .fusionStartEU(1500000000)
        .addData('reflector_tier', 7)
        .EUt(GTValues.VHA[GTValues.UIV]);

    for (let i = 0; i <= 2; i++) {
        let rod = ['neutronium', 'draco_abyssal', 'raging_rimulatia'];

        event.recipes.gtceu
            .riftion_accelerator(id('riftion_scattering_' + rod[i]))
            .inputFluids(`gtceu:riftion_plasma ${500 * Math.pow(2, i)}`)
            .chancedInput(`gtceu:${rod[i]}_ultradense_plate`, 6000 - 2000 * i, 0)
            .itemOutputsRanged('kubejs:up_undina_riftion', 0, 32 * Math.pow(4, i))
            .itemOutputsRanged('kubejs:down_undina_riftion', 0, 32 * Math.pow(4, i))
            .itemOutputsRanged('kubejs:up_sylvestris_riftion', 0, 32 * Math.pow(4, i))
            .itemOutputsRanged('kubejs:down_sylvestris_riftion', 0, 32 * Math.pow(4, i))
            .itemOutputsRanged('kubejs:up_gnomus_riftion', 0, 32 * Math.pow(4, i))
            .itemOutputsRanged('kubejs:down_gnomus_riftion', 0, 32 * Math.pow(4, i))
            .itemOutputsRanged('kubejs:up_vulcanus_riftion', 0, 32 * Math.pow(4, i))
            .itemOutputsRanged('kubejs:down_vulcanus_riftion', 0, 32 * Math.pow(4, i))
            .itemOutputsRanged('kubejs:up_illustris_riftion', 0, 32 * Math.pow(4, i))
            .itemOutputsRanged('kubejs:down_illustris_riftion', 0, 32 * Math.pow(4, i))
            .itemOutputsRanged('kubejs:up_tenebrosus_riftion', 0, 32 * Math.pow(4, i))
            .itemOutputsRanged('kubejs:down_tenebrosus_riftion', 0, 32 * Math.pow(4, i))
            .CWUt(500 + 250 * i)
            .totalCWU(2500000 * Math.pow(2, i))
            .EUt(GTValues.VHA[GTValues.UXV]);
    }

    let riftion = ['undina', 'sylvestris', 'gnomus', 'vulcanus', 'illustris', 'tenebrosus'];

    for (let i = 0; i <= 5; i++) {
        event.recipes.gtceu
            .riftion_slammer(id(riftion[i] + '_stabilization'))
            .itemInputs(`32x kubejs:up_${riftion[i]}_riftion`, `32x kubejs:down_${riftion[i]}_riftion`)
            .itemOutputsRanged(`kubejs:neutral_${riftion[i]}_riftion`, 0, 72)
            .itemOutputsRanged(`kubejs:wild_riftion`, 0, 56)
            .genericStartEU(50000000000) //consumes 50GEU to start the recipe
            .duration(20)
            .EUt(GTValues.VHA[GTValues.UIV]);

        event.recipes.gtceu
            .riftion_slammer(id(riftion[i] + '_flipping_down'))
            .itemInputs(`32x kubejs:up_${riftion[i]}_riftion`, `32x kubejs:wild_riftion`)
            .itemOutputsRanged(`kubejs:down_${riftion[i]}_riftion`, 0, 56)
            .itemOutputsRanged(`kubejs:wild_riftion`, 0, 72)
            .genericStartEU(50000000000) //consumes 50GEU to start the recipe
            .duration(20)
            .EUt(GTValues.VHA[GTValues.UIV]);

        event.recipes.gtceu
            .riftion_slammer(id(riftion[i] + '_flipping_up'))
            .itemInputs(`32x kubejs:down_${riftion[i]}_riftion`, `32x kubejs:wild_riftion`)
            .itemOutputsRanged(`kubejs:up_${riftion[i]}_riftion`, 0, 56)
            .itemOutputsRanged(`kubejs:wild_riftion`, 0, 72)
            .genericStartEU(50000000000) //consumes 50GEU to start the recipe
            .duration(20)
            .EUt(GTValues.VHA[GTValues.UIV]);

        event.recipes.gtceu
            .riftion_injector(id(riftion[i] + '_singularity'))
            .itemInputs('kubejs:dragonic_eye', `256x kubejs:neutral_${riftion[i]}_riftion`)
            .itemOutputs(`kubejs:${riftion[i]}_singularity`)
            .genericStartEU(250000000000) //consumes 250GEU to start the recipe
            .duration(800)
            .EUt(GTValues.VHA[GTValues.UXV]);
    }

    event.recipes.gtceu
        .kaleidoscopic_fractalizer(id('riftion_fractalization'))
        .inputFluids('gtceu:true_rimula_foundation 6000')
        .itemInputs(
            '32x kubejs:neutral_undina_riftion',
            '32x kubejs:neutral_sylvestris_riftion',
            '32x kubejs:neutral_gnomus_riftion',
            '32x kubejs:neutral_vulcanus_riftion',
            '32x kubejs:neutral_illustris_riftion',
            '32x kubejs:neutral_tenebrosus_riftion'
        )
        .outputFluids('gtceu:primordial_extract 2000', 'gtceu:condensed_rimula 2000', 'gtceu:faetic_extract 2000')
        .duration(600)
        .EUt(GTValues.VHA[GTValues.UXV]);

    event.recipes.gtceu
        .supreme_chemistry(id('primordial_residue'))
        .layeredRecipe((layers) =>
            layers
                .inputFluids('gtceu:primordial_extract 750')
                .next()
                .itemInputs('2x gtceu:void_dust')
                .next()
                .itemInputs('gtceu:xeproda_dust')
        )
        .fluidOutputs('gtceu:primordial_residue 325')
        .duration(480)
        .EUt(GTValues.VHA[GTValues.UXV]);

    event.recipes.gtceu
        .supreme_chemistry(id('riftic_concentrate'))
        .layeredRecipe((layers) =>
            layers
                .inputFluids('gtceu:condensed_rimula 750')
                .next()
                .itemInputs('2x gtceu:dragonsteel_dust')
                .next()
                .itemInputs('gtceu:rhexis_dust')
        )
        .fluidOutputs('gtceu:riftic_concentrate 325')
        .duration(480)
        .EUt(GTValues.VHA[GTValues.UXV]);

    event.recipes.gtceu
        .supreme_chemistry(id('prismatic_hypergurmalium'))
        .layeredRecipe((layers) =>
            layers
                .inputFluids('gtceu:faetic_extract 750')
                .next()
                .itemInputs('2x gtceu:aurourium_dust')
                .next()
                .itemInputs('gtceu:chalyblux_dust')
        )
        .fluidOutputs('gtceu:prismatic_hypergurmalium 325')
        .duration(480)
        .EUt(GTValues.VHA[GTValues.UXV]);
});
