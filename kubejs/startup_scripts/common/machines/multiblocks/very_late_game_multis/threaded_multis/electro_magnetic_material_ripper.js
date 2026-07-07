GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('electro_magnetic_material_ripper', 'multiblock')
        .machine((holder) => new $StarTThreadingCapableMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .tooltips([Text.translate('block.start_core.gap'), Text.translate('block.kubejs.threading.tooltip')])
        .recipeTypes(['polarizer', 'electromagnetic_separator', 'electrolyzer'])
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            $StarTRecipeModifiers.THREADING_MACHINE,
            $StarTRecipeModifiers.BULK_PROCESSING,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('kubejs:aurouric_resilient_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('               BBBBB', '               BBBBB', ' BBBBBBB       BBBBB', ' BB   BB       BBBBB', ' B     B       BBBBB', ' B     B       BBBBB', ' B     B       BBBBB', ' BB   BB       BBBBB', ' BBBBBBB       BBBBB', '                    ')
            .aisle(' C  C  C       BBBBB', ' BBBBBBB       BBBD ', ' BBBBBBB       BBBD ', ' BBEDEBBBBFFFBBBBBD ', ' DGGDGGBBFFFFFBBBBBB', ' DDDEDDBBFFFFFBBBBBB', ' DGGDGGBBFFFFFBBBBBB', ' BBEDEBBBBFFFBBBBBBB', ' BBBBBBB       BBBBB', ' BBBBBBB       BBBBB')
            .aisle('               BBBBB', ' BB   BB       BBBD ', ' BBGDGBBBBFFFBBBBBD ', 'BBCCCCCB       BBBD ', 'BBC F CB       BBBBB', 'BBCFHFCBC     CBBBBB', 'BBC F CB       BBBD ', 'BBCCCCCB       BBBD ', ' BBGDGBBBBFFFBBBBBBB', ' BB   BB       BBBBB')
            .aisle('               BBBBB', ' B     B       BBBBB', ' DGGDGGBBFFFFFBBBBBB', 'BBC   CB       BBBBB', ' D  F  DCB   BCDBBBB', ' DFFHFFDFDD DDFDBBBB', ' D  F  DCB   BCDBBD ', 'BBC   CB       BBBD ', ' DGGDGGBBFFFFFBBBBBB', ' B     B       BBBBB')
            .aisle('               BBBBB', ' B     B       BBBBB', ' DDDDDDBBFFFFFBBBBBB', 'BBC   CBC     CBBBBB', ' DFFFFFDFDD DDFDBBBB', ' IHHHHHHHHHHHHHHHHBB', ' DFFFFFDFDD DDFDBBD ', 'BBC   CBC     CBBBD ', ' DDDDDDBBFFFFFBBBBBB', ' B     B       BBBBB')
            .aisle('               BBBBB', ' B     B       BBBBB', ' DGGDGGBBFFFFFBBBBBB', 'BBC   CB       BBBBB', ' D  F  DCB   BCDBBBB', ' DFFHFFDFDD DDFDBJBB', ' D  F  DCB   BCDBBD ', 'BBC   CB       BBBD ', ' DGGDGGBBFFFFFBBBBBB', ' B     B       BBBBB')
            .aisle('               BBBBB', ' BB   BB       BBBD ', ' BBGDGBBBBFFFBBBBBD ', 'BBCCCCCB       BBBD ', 'BBC F CB       BBBBB', 'BBCFHFCBC     CBBJBB', 'BBC F CB       BBBD ', 'BBCCCCCB       BBBD ', ' BBGDGBBBBFFFBBBBBBB', ' BB   BB       BBBBB')
            .aisle(' C  C  C       BBBBB', ' BBBBBBB       BDDD ', ' BBBBBBB       BDDD ', ' BBEDEBBBBFFFBBBDDD ', ' DGGDGGBBFFFFFBBBBBB', ' DDDEDDBBFFFFFBBBJBB', ' DGGDGGBBFFFFFBBBBBB', ' BBEDEBBBBFFFBBBBBBB', ' BBBBBBB       BBBBB', ' BBBBBBB       BBBBB')
            .aisle('               BBBBB', '               B   B', ' BBBBBBB       B   B', ' BB   BB       B   B', ' B     B       BBBBB', ' B     B       BB@BB', ' B     B       BBBBB', ' BB   BB       BBBBB', ' BBBBBBB       BBBBB', '                    ')
                .where(' ', Predicates.any())
                .where(
                    'B',
                    Predicates.blocks('kubejs:aurouric_resilient_casing')
                        .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(0).setMaxGlobalLimited(20))
                        .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(0).setMaxGlobalLimited(20))
                        .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(0).setMaxGlobalLimited(20))
                        .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setPreviewCount(0).setMaxGlobalLimited(20))
                        .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                        .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2))
                        .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                )
                .where('C', Predicates.blocks('gtceu:draco_abyssal_frame'))
                .where('D', Predicates.blocks('kubejs:aurouric_polarization_cell'))
                .where('E', $StarTThreadingStatBlocks.threadingStatBlocks())
                .where('F', Predicates.blocks('kubejs:draco_resilient_fusion_glass'))
                .where('G', Predicates.blocks('kubejs:draco_assembly_grating'))
                .where('H', Predicates.blocks('start_core:advanced_fusion_coil'))
                .where('I', Predicates.blocks('start_core:threading_controller'))
                .where('J', Predicates.blocks('kubejs:nyanium_pipe_casing'))
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/threading/aurouric_resilient_casing',
            'gtceu:block/machines/electrolyzer'
        );
});
