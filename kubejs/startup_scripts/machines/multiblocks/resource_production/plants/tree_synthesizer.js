GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('tree_synthesizer', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('tree_greenhouse')
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('gtceu:robust_machine_casing'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                'AABBBBBAA|BBBBBBBBB|BCCCDCCCB|BCCCDCCCB|BCCCCCCCB|BCCCCCCCB|BCCCCCCCB|BCCCCCCCB|ECCCCCCCE|ECCCCCCCE|ECCCCCCCE|#EECCCEE#|#########',
                'ABGGGGGBA|BGHHHHHGB|CG     GC|CG     GC|CG     GC|C       C|C       C|C       C|C   IIIIC|C   IIIIC|C       C|ECC   CCE|###EEE###',
                'BGBBGBBGB|BHHHHJJHB|C    KK C|C    KK C|C    KK C|C    KK C|C    KK C|C    KK C|C   IKKIC|C   IIIIC|C    II C|EC     CE|##ECCCE##',
                'BGBBGBBGB|BHHHHJJHB|C    KK C|C    KK C|C    KK C|C    KK C|C    KK C|C    KK C|C   IKKIC|C   IIIIC|C    II C|C       C|#ECCCCCE#',
                'BGGGGGGGB|BHHHHHHHB|D       D|D       D|C       C|C FFF   C|C  F    C|C       C|C   IIIIC|C   IIIIC|C       C|C       C|#ECCDCCE#',
                'BGBBGBBGB|BHHJHHHHB|C  L    C|C  L    C|C  L    C|C FLF   C|C FFF   C|C       C|C       C|C       C|C       C|C       C|#ECCCCCE#',
                'BGBBGBBGB|BHHHHHHHB|C       C|C       C|C       C|C FFF   C|C  F    C|C       C|C       C|C       C|C       C|EC     CE|##ECCCE##',
                'ABGGGGGBA|BGHHHHHGB|CG     GC|CG     GC|CG     GC|C       C|C       C|C       C|C       C|C       C|C       C|ECC   CCE|###EEE###',
                'AABBBBBAA|BBBB@BBBB|BCCCDCCCB|BCCCDCCCB|BCCCCCCCB|BCCCCCCCB|BCCCCCCCB|BCCCCCCCB|ECCCCCCCE|ECCCCCCCE|ECCCCCCCE|#EECCCEE#|#########',
            ])
                .whereDict({
                    A: P.blocks('gtceu:tungstensteel_firebox_casing'),
                    B: P.anyOf([
                        P.blocks('gtceu:robust_machine_casing'),
                        P.ability(PA.itemIn, { max: 5, prev: 1 }),
                        P.ability(PA.itemOut, { max: 2, prev: 1 }),
                        P.ability(PA.fluidIn, { max: 5, prev: 1 }),
                        P.ability(PA.fluidOut, { max: 2, prev: 1 }),
                        P.ability(PA.euIn, { max: 2, prev: 1 }),
                        P.ability(PA.parallelHatch, { max: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                    ]),
                    C: P.blocks('gtceu:laminated_glass'),
                    D: P.blocks('gtceu:extreme_engine_intake_casing'),
                    E: P.blocks('gtceu:blue_steel_frame'),
                    '#': P.any(),
                    F: P.blocks('minecraft:oak_leaves'),
                    G: P.blocks('gtceu:tungstensteel_pipe_casing'),
                    H: P.blocks('minecraft:grass_block'),
                    I: P.blocks('minecraft:spruce_leaves'),
                    J: P.blocks('minecraft:dirt'),
                    K: P.blocks('minecraft:spruce_log'),
                    L: P.blocks('minecraft:oak_log'),
                    ' ': P.air(),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_robust_tungstensteel',
            'gtceu:block/machines/extruder'
        );
});
