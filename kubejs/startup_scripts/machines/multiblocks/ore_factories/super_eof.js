GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('super_electric_ore_factory', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .tooltips([Text.translate('block.start_core.gap'), Text.translate('gtceu.multiblock.exact_hatch_1.tooltip')])
        .recipeType('electric_ore_processing')
        .recipeModifiers([
            GTRecipeModifiers.OC_NON_PERFECT,
            $StarTRecipeModifiers.THROUGHPUT_BOOSTING,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .pattern((definition) =>
            newFactoryBlockPattern([
                ' BBB | AAA | AAA |  A  |     |     |     ',
                'BAAAB|AC#CA|A###A| A#A | AAA |  A  |  D  ',
                'BAAAB|A#E#A|A#E#A|A#E#A| AEA | AMA | D D ',
                'BAAAB|AC#CA|A###A| A#A | AAA |  A  |  D  ',
                ' BBB | A@A | AAA |  A  |     |     |     ',
            ])
                .whereDict({
                    A: P.anyOf(
                        P.gtBlock('clean_machine_casing', { min: 5 }),
                        P.ability(PA.itemIn, { prev: 1 }),
                        P.ability(PA.itemOut, { prev: 1 }),
                        P.ability(PA.fluidIn, { prev: 1 }),
                        P.ability(PA.euIn, { max: 1 }),
                        P.ability(PA.maintenance, { exact: 1 })
                    ),
                    B: P.gtBlock('steel_firebox_casing'),
                    ' ': P.any(),
                    '#': P.air(),
                    C: P.gtBlock('stainless_steel_gearbox'),
                    D: P.gtBlock('steel_machine_casing'),
                    E: P.gtBlock('steel_pipe_casing'),
                    M: P.ability(PA.muffler),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_clean_stainless_steel',
            'kubejs:block/multiblock/primitive_blast_furnace'
        );
});
