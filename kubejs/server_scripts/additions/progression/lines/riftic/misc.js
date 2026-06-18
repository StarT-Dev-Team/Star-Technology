ServerEvents.recipes((event) => {
    const id = global.id;

    event.recipes.gtceu
        .ordered_chemistry(id('netherite_triselex_oxide'))
        .layeredRecipe((layers) =>
            layers
                .itemInputs('4x gtceu:netherite_dust', '1x gtceu:electrotine_dust')
                .next()
                .itemInputs('3x gtceu:selenium_dust')
                .inputFluids('gtceu:sulfuric_acid 2000')
        )
        .itemOutputs('15x gtceu:netherite_triselex_oxide_dust')
        .outputFluids('gtceu:hydrogen_sulfide 2000')
        .duration(1200)
        .EUt(GTValues.VA[GTValues.UEV] / 3);

    event.recipes.gtceu
        .riftion_injector(id('raging_rimulatia_ingot'))
        .itemInputs('gtceu:draco_abyssal_ingot', '32x kubejs:wild_riftion')
        .itemOutputs('gtceu:raging_rimulatia_ingot')
        .genericStartEU(125000000000) //consumes 125GEU to start the recipe
        .duration(400)
        .EUt(GTValues.VHA[GTValues.UXV]);

    event.recipes.gtceu
        .riftion_injector(id('rift_infused_soc'))
        .itemInputs('kubejs:draco_advanced_soc', '4x kubejs:wild_riftion')
        .itemOutputs('kubejs:rift_infused_soc')
        .genericStartEU(75000000000) //consumes 75GEU to start the recipe
        .duration(100)
        .EUt(GTValues.VHA[GTValues.UXV]);

    event.recipes.gtceu
        .ordered_chemistry(id('kaleidoscope_agitation_serum'))
        .layeredRecipe((layers) =>
            layers
                .itemInputs('2x gtceu:flerovium_dust')
                .inputFluids('gtceu:borealic_concentrate 576')
                .next()
                .itemInputs('3x gtceu:einsteinium_253_dust')
                .inputFluids('gtceu:void 576')
        )
        .outputFluids('gtceu:kaleidoscope_agitation_serum 1300')
        .duration(900)
        .EUt(GTValues.VA[GTValues.UIV] / 3);
});
