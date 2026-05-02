GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('essence_replication')
        .category('mystical')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 1, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_REPLICATOR, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('essence_replicator', 'multiblock')
        .rotationState(RotationState.ALL)
        .recipeType('essence_replication')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT])
        .appearanceBlock(GTBlocks.CASING_INVAR_HEATPROOF)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('IIIII', '     ', '     ', '     ', 'IIIII')
            .aisle('ISSSI', ' FGF ', ' FGF ', ' FGF ', 'ISSSI')
            .aisle('ISSSI', ' G G ', ' G G ', ' G G ', 'ISSSI')
            .aisle('ISSSI', ' FGF ', ' FGF ', ' FGF ', 'ISSSI')
            .aisle('IICII', '     ', '     ', '     ', 'IIIII')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('I', Predicates.blocks(GTBlocks.CASING_INVAR_HEATPROOF.get()).setMinGlobalLimited(23)
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('S', Predicates.blocks(GTBlocks.FIREBOX_STEEL.get()))
            .where('F', Predicates.blocks(Block.getBlock('gtceu:aluminium_frame')))
            .where('G', Predicates.blocks('thermal:obsidian_glass'))
            .where(' ', Predicates.any())
            .build())
        .workableCasingModel('gtceu:block/casings/solid/machine_casing_heatproof',
            'gtceu:block/multiblock/implosion_compressor');

});