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
                    A: P.gtBlock('tungstensteel_firebox_casing'),
                    B: P.anyOf([
                        P.gtBlock('robust_machine_casing'),
                        P.ability(PA.itemIn, { max: 5, view: 1 }),
                        P.ability(PA.itemOut, { max: 2, view: 1 }),
                        P.ability(PA.fluidIn, { max: 5, view: 1 }),
                        P.ability(PA.fluidOut, { max: 2, view: 1 }),
                        P.ability(PA.euIn, { max: 2, view: 1 }),
                        P.ability(PA.parallelHatch, { max: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                    ]),
                    C: P.gtBlock('laminated_glass'),
                    D: P.gtBlock('extreme_engine_intake_casing'),
                    E: P.gtBlock('blue_steel_frame'),
                    '#': P.any(),
                    F: P.block('minecraft:oak_leaves'),
                    G: P.gtBlock('tungstensteel_pipe_casing'),
                    H: P.block('minecraft:grass_block'),
                    I: P.block('minecraft:spruce_leaves'),
                    J: P.block('minecraft:dirt'),
                    K: P.block('minecraft:spruce_log'),
                    L: P.block('minecraft:oak_log'),
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
