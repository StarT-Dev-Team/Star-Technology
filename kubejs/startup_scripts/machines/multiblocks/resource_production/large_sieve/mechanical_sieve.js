GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('mechanical_sieve')
        .category('resource_production')
        .setMaxIOSize(2, 6, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_SIFT, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MACERATOR);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('mechanical_sieve', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .tooltips([Text.translate('block.start_core.gap'), Text.translate('gtceu.multiblock.exact_hatch_1.tooltip')])
        .recipeType('mechanical_sieve')
        .recipeModifiers(GTRecipeModifiers.OC_NON_PERFECT, GTRecipeModifiers.BATCH_MODE)
        .appearanceBlock(() => Block.getBlock('kubejs:treatedwood_casing'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                'F   F|F   F|F   F|FFFFF|WWWWW|WWWWW|WWWWW',
                '     |     |     |FWWWF|WMMMW|W   W|W   W',
                '     |     |     |FWWWF|WMMMW|W   W|W   W',
                '     |     |     |FWWWF|WMMMW|W   W|W   W',
                'F   F|F   F|F   F|FFFFF|WWCWW|WWWWW|WWWWW',
            ])
                .whereDict({
                    C: P.controller(definition),
                    W: P.anyOf([
                        P.kjsBlock('treatedwood_casing'),
                        P.ability(PA.itemIn, { max: 2, view: 1 }),
                        P.ability(PA.itemOut, { max: 2, view: 1 }),
                        P.ability(PA.euIn, { max: 1, view: 1 }),
                    ]),
                    F: P.gtBlock('treated_wood_frame'),
                    M: P.kjsBlock('meshblock'),
                    ' ': P.any(),
                })
                .build()
        )
        .workableCasingModel('kubejs:block/casings/basic/casing_wood', 'gtceu:block/machines/macerator');
});
