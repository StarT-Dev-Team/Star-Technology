GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('super_pyrolyse', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .tooltips([Text.translate('block.start_core.gap'), Text.translate('gtceu.multiblock.exact_hatch_1.tooltip')])
        .recipeType('pyrolyse_oven')
        .machine((holder) => new $CoiledMulti(holder))
        .recipeModifiers([
            GTRecipeModifiers.PYROLYSE_OVEN_OVERCLOCK,
            $StarTRecipeModifiers.THROUGHPUT_BOOSTING,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('gtceu:robust_machine_casing'))
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle('ABBBA', 'BBCBB', 'BCDCB', 'BBCBB', 'ABBBA')
                .aisle('A B A', ' EEE ', 'BEFEB', ' EEE ', 'A B A')
                .aisle('A B A', ' EEE ', 'BEFEB', ' EEE ', 'A B A')
                .aisle('A B A', ' EEE ', 'BEFEB', ' EEE ', 'A B A')
                .aisle('BBBBB', 'BBBBB', 'BBFBB', 'BBBBB', 'BBBBB')
                .aisle('A B A', ' EEE ', 'BEFEB', ' EEE ', 'A B A')
                .aisle('A B A', ' EEE ', 'BEFEB', ' EEE ', 'A B A')
                .aisle('A B A', ' EEE ', 'BEFEB', ' EEE ', 'A B A')
                .aisle('ABBBA', 'BBCBB', 'BC@CB', 'BBCBB', 'ABBBA')
                .where(' ', Predicates.any())
                .where('A', Predicates.blocks('gtceu:tungsten_steel_frame'))
                .where(
                    'B',
                    Predicates.blocks('gtceu:robust_machine_casing')
                        .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(1).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                )
                .where('C', Predicates.blocks('gtceu:extreme_engine_intake_casing'))
                .where('D', Predicates.abilities(PartAbility.MUFFLER))
                .where('E', Predicates.heatingCoils())
                .where('F', Predicates.blocks('gtceu:tungstensteel_pipe_casing'))
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_robust_tungstensteel',
            'gtceu:block/multiblock/pyrolyse_oven'
        )
        .additionalDisplay(global.pyrolyseOvenOverclockDisplay);
});
