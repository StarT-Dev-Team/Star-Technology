GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('super_ebf', 'multiblock')
        .rotationState(RotationState.ALL)
        .tooltips([
            Text.translate("block.start_core.gap"),
            Text.translate("gtceu.multiblock.exact_hatch_1.tooltip")
        ])
        .recipeType('electric_blast_furnace')
        .machine((holder) => new $CoiledMulti(holder))
        .recipeModifiers([GTRecipeModifiers.EBF_OVERCLOCK, $StarTRecipeModifiers.THROUGHPUT_BOOSTING, GTRecipeModifiers.BATCH_MODE])
        .appearanceBlock(GCYMBlocks.CASING_HIGH_TEMPERATURE_SMELTING)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('AABAA', 'C B C', 'C D C', 'CEEEC', 'C D C', 'C B C', 'AABAA')
            .aisle('ABBBA', ' FFF ', ' FFF ', 'EFFFE', ' FFF ', ' FFF ', 'ABBBA')
            .aisle('BBBBB', 'BF#FB', 'DF#FD', 'EF#FE', 'DF#FD', 'BF#FB', 'BBMBB')
            .aisle('ABBBA', ' FFF ', ' FFF ', 'EFFFE', ' FFF ', ' FFF ', 'ABBBA')
            .aisle('AA@AA', 'C B C', 'C D C', 'CEEEC', 'C D C', 'C B C', 'AABAA')
            .where('A', Predicates.blocks('gtceu:steel_firebox_casing'))
            .where('B', Predicates.blocks('gtceu:high_temperature_smelting_casing').setMinGlobalLimited(5)
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('C', Predicates.blocks('gtceu:black_steel_frame'))
            .where('#', Predicates.any())
            .where(' ', Predicates.air())
            .where('D', Predicates.blocks('gtceu:steel_pipe_casing'))
            .where('E', Predicates.blocks('gtceu:heat_vent'))
            .where('F', Predicates.heatingCoils())
            .where('M', Predicates.abilities(PartAbility.MUFFLER))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingModel('gtceu:block/casings/gcym/high_temperature_smelting_casing',
            'gtceu:block/multiblock/gcym/mega_blast_furnace')
        .additionalDisplay(global.coilMachineTempDisplay);

});