GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('super_cracker', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .tooltips([Text.translate('block.start_core.gap'), Text.translate('gtceu.multiblock.exact_hatch_1.tooltip')])
        .recipeType('cracker')
        .machine((holder) => new $CoiledMulti(holder))
        .recipeModifiers([
            GTRecipeModifiers.CRACKER_OVERCLOCK,
            $StarTRecipeModifiers.THROUGHPUT_BOOSTING,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(GTBlocks.CASING_PALLADIUM_SUBSTATION)
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle(' BCCCDDDCCCB ', ' B   BBB   B ', 'BBBBBBEBBBBBB', ' B   BBB   B ', ' BCCCDDDCCCB ')
                .aisle(' B   BBB   B ', 'BBFFF   FFFBB', 'BBFFF   FFFBB', 'BBFFF   FFFBB', ' B   BBB   B ')
                .aisle('BBBBBBBBBBBBB', 'BBFFF   FFFBB', 'GHHHHHHHHHHHG', 'BBFFF   FFFBB', 'BBBBBBBBBBBBB')
                .aisle(' B   BBB   B ', 'BBFFF   FFFBB', 'BBFFF   FFFBB', 'BBFFF   FFFBB', ' B   BBB   B ')
                .aisle(' BCCCDDDCCCB ', ' B   BBB   B ', 'BBBBBB@BBBBBB', ' B   BBB   B ', ' BCCCDDDCCCB ')
                .where(' ', Predicates.any())
                .where(
                    'B',
                    Predicates.blocks('gtceu:palladium_substation')
                        .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(1).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                )
                .where('C', Predicates.blocks('gtceu:birmabright_frame'))
                .where('D', Predicates.blocks('kubejs:pallaridium_firebox_casing'))
                .where('E', Predicates.abilities(PartAbility.MUFFLER))
                .where('F', Predicates.heatingCoils())
                .where('G', Predicates.blocks('kubejs:pallaridium_engine_intake_casing'))
                .where('H', Predicates.blocks('kubejs:pallaridium_pipe_casing'))
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_palladium_substation',
            'gtceu:block/multiblock/cracking_unit'
        )
        .additionalDisplay(global.crackerOverclockDisplay);
});
