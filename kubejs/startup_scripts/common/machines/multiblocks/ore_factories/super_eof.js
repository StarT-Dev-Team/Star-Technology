GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('super_electric_ore_factory', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .tooltips([ 
            Text.translate("block.start_core.gap"),
            Text.translate("gtceu.multiblock.exact_hatch_1.tooltip")
        ])
        .recipeType('electric_ore_processing')
        .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT, $StarTRecipeModifiers.THROUGHPUT_BOOSTING, GTRecipeModifiers.BATCH_MODE])
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle(' BBB ', ' AAA ', ' AAA ', '  A  ', '     ', '     ', '     ')
            .aisle('BAAAB', 'AC#CA', 'A###A', ' A#A ', ' AAA ', '  A  ', '  D  ')
            .aisle('BAAAB', 'A#E#A', 'A#E#A', 'A#E#A', ' AEA ', ' AMA ', ' D D ')
            .aisle('BAAAB', 'AC#CA', 'A###A', ' A#A ', ' AAA ', '  A  ', '  D  ')
            .aisle(' BBB ', ' A@A ', ' AAA ', '  A  ', '     ', '     ', '     ')
            .where('A', Predicates.blocks('gtceu:clean_machine_casing').setMinGlobalLimited(5)
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('B', Predicates.blocks('gtceu:steel_firebox_casing'))
            .where(' ', Predicates.any())
            .where('#', Predicates.air())
            .where('C', Predicates.blocks('gtceu:stainless_steel_gearbox'))
            .where('D', Predicates.blocks('gtceu:steel_machine_casing'))
            .where('E', Predicates.blocks('gtceu:steel_pipe_casing'))
            .where('M', Predicates.abilities(PartAbility.MUFFLER))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingModel('gtceu:block/casings/solid/machine_casing_clean_stainless_steel',
            'kubejs:block/multiblock/primitive_blast_furnace');

});