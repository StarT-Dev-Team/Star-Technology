GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('large_me_assembler', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('me_assembler')
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('kubejs:fluix_steel_casing'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                'AAFFFFFAA|ACCCCCCCA|AAFFFFFAA',
                'AEEEEEEEA|FDDDDDDDF|AAAABAAAA',
                'AFFAEAFFA|ACCCDCCCA|AFFABAFFA',
                '   A@A   |   CCC   |   AAA   ',
            ])
                .whereDict({
                    '@': P.controller(definition),
                    A: P.anyOf([
                        P.kjsBlock('fluix_steel_casing'),
                        P.ability(PA.itemIn, { max: 2 }),
                        P.ability(PA.fluidIn, { max: 2 }),
                        P.ability(PA.itemOut, { max: 2 }),
                        P.ability(PA.parallelHatch, { max: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                        P.ability(PA.euIn, { max: 2 }),
                    ]),
                    B: P.gtBlock('assembly_line_grating'),
                    C: 'ae2:quartz_glass',
                    D: P.gtBlock('high_power_casing'),
                    E: P.gtBlock('tungstensteel_pipe_casing'),
                    F: P.gtBlock('computer_heat_vent'),
                    ' ': P.any(),
                })
                .build()
        )
        .workableCasingModel('kubejs:block/casings/basic/fluix_casing', 'gtceu:block/machines/circuit_assembler');
});
