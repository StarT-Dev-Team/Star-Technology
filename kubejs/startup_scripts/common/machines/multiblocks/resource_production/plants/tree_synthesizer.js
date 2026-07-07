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
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('AABBBBBAA', 'BBBBBBBBB', 'BCCCDCCCB', 'BCCCDCCCB', 'BCCCCCCCB', 'BCCCCCCCB', 'BCCCCCCCB', 'BCCCCCCCB', 'ECCCCCCCE', 'ECCCCCCCE', 'ECCCCCCCE', '#EECCCEE#', '#########')
            .aisle('ABGGGGGBA', 'BGHHHHHGB', 'CG     GC', 'CG     GC', 'CG     GC', 'C       C', 'C       C', 'C       C', 'C   IIIIC', 'C   IIIIC', 'C       C', 'ECC   CCE', '###EEE###')
            .aisle('BGBBGBBGB', 'BHHHHJJHB', 'C    KK C', 'C    KK C', 'C    KK C', 'C    KK C', 'C    KK C', 'C    KK C', 'C   IKKIC', 'C   IIIIC', 'C    II C', 'EC     CE', '##ECCCE##')
            .aisle('BGBBGBBGB', 'BHHHHJJHB', 'C    KK C', 'C    KK C', 'C    KK C', 'C    KK C', 'C    KK C', 'C    KK C', 'C   IKKIC', 'C   IIIIC', 'C    II C', 'C       C', '#ECCCCCE#')
            .aisle('BGGGGGGGB', 'BHHHHHHHB', 'D       D', 'D       D', 'C       C', 'C FFF   C', 'C  F    C', 'C       C', 'C   IIIIC', 'C   IIIIC', 'C       C', 'C       C', '#ECCDCCE#')
            .aisle('BGBBGBBGB', 'BHHJHHHHB', 'C  L    C', 'C  L    C', 'C  L    C', 'C FLF   C', 'C FFF   C', 'C       C', 'C       C', 'C       C', 'C       C', 'C       C', '#ECCCCCE#')
            .aisle('BGBBGBBGB', 'BHHHHHHHB', 'C       C', 'C       C', 'C       C', 'C FFF   C', 'C  F    C', 'C       C', 'C       C', 'C       C', 'C       C', 'EC     CE', '##ECCCE##')
            .aisle('ABGGGGGBA', 'BGHHHHHGB', 'CG     GC', 'CG     GC', 'CG     GC', 'C       C', 'C       C', 'C       C', 'C       C', 'C       C', 'C       C', 'ECC   CCE', '###EEE###')
            .aisle('AABBBBBAA', 'BBBB@BBBB', 'BCCCDCCCB', 'BCCCDCCCB', 'BCCCCCCCB', 'BCCCCCCCB', 'BCCCCCCCB', 'BCCCCCCCB', 'ECCCCCCCE', 'ECCCCCCCE', 'ECCCCCCCE', '#EECCCEE#', '#########')
                .where('A', Predicates.blocks('gtceu:tungstensteel_firebox_casing'))
                .where(
                    'B',
                    Predicates.blocks('gtceu:robust_machine_casing')
                        .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(5).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(5).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                        .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                )
                .where('C', Predicates.blocks('gtceu:laminated_glass'))
                .where('D', Predicates.blocks('gtceu:extreme_engine_intake_casing'))
                .where('E', Predicates.blocks('gtceu:blue_steel_frame'))
                .where('#', Predicates.any())
                .where('F', Predicates.blocks('minecraft:oak_leaves'))
                .where('G', Predicates.blocks('gtceu:tungstensteel_pipe_casing'))
                .where('H', Predicates.blocks('minecraft:grass_block'))
                .where('I', Predicates.blocks('minecraft:spruce_leaves'))
                .where('J', Predicates.blocks('minecraft:dirt'))
                .where('K', Predicates.blocks('minecraft:spruce_log'))
                .where('L', Predicates.blocks('minecraft:oak_log'))
                .where('C', Predicates.blocks('gtceu:laminated_glass'))
                .where(' ', Predicates.air())
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_robust_tungstensteel',
            'gtceu:block/machines/extruder'
        );
});
