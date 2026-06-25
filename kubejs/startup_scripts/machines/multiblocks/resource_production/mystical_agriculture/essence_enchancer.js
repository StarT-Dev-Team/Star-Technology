GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('essence_enchancing')
        .category('mystical')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_MAGNET, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('essence_enchancer', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('essence_enchancing')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT, GTRecipeModifiers.BATCH_MODE])
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern((definition) =>
            newFactoryBlockPattern([
                'SBBBBBS|SB M BS|SBMMMBS|SB M BS|SBBBBBS',
                'SB M BS|F M M F|FM   MF|F M M F|SB M BS',
                'SBMMMBS|FM   MF|P     P|FM   MF|SBMMMBS',
                'SB M BS|F M M F|FM   MF|F M M F|SB M BS',
                'SBBBBBS|SB M BS|SBMCMBS|SB M BS|SBBBBBS',
            ])
                .whereDict({
                    C: P.controller(definition),
                    S: P.anyOf([
                        P.block(GTBlocks.CASING_STAINLESS_CLEAN.get(), { min: 26 }),
                        P.ability(PA.itemIn, { max: 2, view: 1 }),
                        P.ability(PA.itemOut, { max: 2, view: 1 }),
                        P.ability(PA.fluidIn, { max: 2, view: 1 }),
                        P.ability(PA.fluidOut, { max: 2, view: 1 }),
                        P.ability(PA.euIn, { max: 2, view: 1 }),
                        P.ability(PA.parallelHatch, { max: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                    ]),
                    F: P.block(GTBlocks.CASING_ALUMINIUM_FROSTPROOF.get()),
                    B: P.gtBlock('black_steel_frame'),
                    M: P.block(GTBlocks.CASING_STEEL_SOLID.get()),
                    P: P.block(GTBlocks.CASING_TITANIUM_PIPE.get()),
                    ' ': P.any(),
                })
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_clean_stainless_steel',
            'gtceu:block/multiblock/implosion_compressor'
        );
});
