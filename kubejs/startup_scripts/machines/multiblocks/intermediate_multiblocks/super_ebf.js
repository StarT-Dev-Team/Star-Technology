GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('super_ebf', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .tooltips([Text.translate('block.start_core.gap'), Text.translate('gtceu.multiblock.exact_hatch_1.tooltip')])
        .recipeType('electric_blast_furnace')
        .machine((holder) => new $CoiledMulti(holder))
        .recipeModifiers([
            GTRecipeModifiers.EBF_OVERCLOCK,
            $StarTRecipeModifiers.THROUGHPUT_BOOSTING,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(GCYMBlocks.CASING_HIGH_TEMPERATURE_SMELTING)
        .pattern((definition) =>
            newFactoryBlockPattern([
                'AABAA|C B C|C D C|CEEEC|C D C|C B C|AABAA',
                'ABBBA| FFF | FFF |EFFFE| FFF | FFF |ABBBA',
                'BBBBB|BF#FB|DF#FD|EF#FE|DF#FD|BF#FB|BBMBB',
                'ABBBA| FFF | FFF |EFFFE| FFF | FFF |ABBBA',
                'AA@AA|C B C|C D C|CEEEC|C D C|C B C|AABAA',
            ])
                .whereDict({
                    A: P.gtBlock('steel_firebox_casing'),
                    B: P.anyOf(
                        P.gtBlock('high_temperature_smelting_casing', { min: 5 }),
                        P.ability(PA.itemIn, { prev: 1 }),
                        P.ability(PA.itemOut, { prev: 1 }),
                        P.ability(PA.fluidIn, { prev: 1 }),
                        P.ability(PA.fluidOut, { prev: 1 }),
                        P.ability(PA.euIn, { max: 1 }),
                        P.ability(PA.maintenance, { exact: 1 })
                    ),
                    C: P.gtBlock('black_steel_frame'),
                    '#': P.any(),
                    ' ': P.air(),
                    D: P.gtBlock('steel_pipe_casing'),
                    E: P.gtBlock('heat_vent'),
                    F: P.heatingCoil(),
                    M: P.ability(PA.muffler),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/gcym/high_temperature_smelting_casing',
            'gtceu:block/multiblock/gcym/mega_blast_furnace'
        )
        .additionalDisplay(global.coilMachineTempDisplay);
});
