GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('super_implosion_compressor', 'multiblock')
        .rotationState(RotationState.ALL)
        .tooltips([
            Text.translate("block.start_core.gap"),
            Text.translate("gtceu.multiblock.exact_hatch_1.tooltip")
        ])
        .recipeType('implosion_compressor')
        .machine((holder) => new $CoiledMulti(holder))
        .recipeModifiers([GTRecipeModifiers.MULTI_SMELTER_PARALLEL, GTRecipeModifiers.BATCH_MODE])
        .appearanceBlock(() => Block.getBlock('gtceu:stress_proof_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('AABAA', 'CBBBC', 'CBDBC', 'CBBBC', 'AABAA')
            .aisle('ABBBA', 'BEEEB', 'BE#EB', 'BEEEB', 'ABBBA')
            .aisle('BBBBB', 'BE#EB', 'D###D', 'BE#EB', 'BBBBB')
            .aisle('ABBBA', 'BEEEB', 'BE#EB', 'BEEEB', 'ABBBA')
            .aisle('AABAA', 'CBBBC', 'CB@BC', 'CBBBC', 'AABAA')
            .where('A', Predicates.blocks('gtceu:steel_firebox_casing'))
            .where('B', Predicates.blocks('gtceu:stress_proof_casing').setMinGlobalLimited(5)
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('C', Predicates.blocks('gtceu:stainless_steel_frame'))
            .where('D', Predicates.heatingCoils())
            .where('E', Predicates.blocks('gtceu:steel_pipe_casing'))
            .where('#', Predicates.air())
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingModel('gtceu:block/casings/gcym/stress_proof_casing',
            'gtceu:block/multiblock/implosion_compressor');

});