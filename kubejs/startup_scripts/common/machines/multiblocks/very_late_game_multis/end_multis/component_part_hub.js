GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('component_part_hub', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .tooltips([Text.translate('block.start_core.gap'), Text.translate('gtceu.multiblock.exact_hatch_1.tooltip')])
        .recipeType('component_part_assembly')
        .recipeModifiers([
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            $StarTRecipeModifiers.THROUGHPUT_BOOSTING,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('kubejs:advanced_assembly_casing'))
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle(' BBBBB   BBBBB ', ' BBBBB   BBBBB ', '  BBB     BBB  ')
                .aisle(' CDEDC   CDEDC ', ' FGHGF   FGHGF ', '  FIF     FIF  ')
                .aisle(' CDEDC   CDEDC ', ' FJHJF   FJHJF ', '  FIF     FIF  ')
                .aisle(' CDEDC   CDEDC ', ' FGHGF   FGHGF ', '  FIF     FIF  ')
                .aisle('BBEEEBBBBBEEEBB', 'BBHHHBBKBBHHHBB', ' BBBBBBBBBBBBB ')
                .aisle('BEEDEEEEEEEDEEB', 'BHHJHHHHHHHJHHB', ' BLLLBLLLBLLLB ')
                .aisle('BBEEEBBBBBEEEBB', 'BBHHHBB@BBHHHBB', ' BBBBBBBBBBBBB ')
                .aisle(' CDEDC   CDEDC ', ' FGHGF   FGHGF ', '  FIF     FIF  ')
                .aisle(' CDEDC   CDEDC ', ' FJHJF   FJHJF ', '  FIF     FIF  ')
                .aisle(' CDEDC   CDEDC ', ' FGHGF   FGHGF ', '  FIF     FIF  ')
                .aisle(' BBBBB   BBBBB ', ' BBBBB   BBBBB ', '  BBB     BBB  ')
                .where(
                    'B',
                    Predicates.blocks('kubejs:advanced_assembly_casing')
                        .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(4).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(8).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(1).setPreviewCount(0))
                        .or(
                            Predicates.abilities(PartAbility.OPTICAL_DATA_RECEPTION)
                                .setMaxGlobalLimited(1)
                                .setPreviewCount(0)
                        )
                        .or(Predicates.blocks('gtceu:uhv_stabilization_module').setExactLimit(1))
                )
                .where(' ', Predicates.any())
                .where('C', Predicates.blocks('kubejs:nyanium_firebox_casing'))
                .where('D', Predicates.blocks('kubejs:draco_assembly_grating'))
                .where('E', Predicates.blocks('kubejs:draco_ware_casing'))
                .where('F', Predicates.blocks('kubejs:draco_resilient_fusion_glass'))
                .where('G', Predicates.blocks('start_core:advanced_fusion_coil'))
                .where('H', Predicates.blocks('kubejs:superdense_assembly_machine_casing'))
                .where('I', Predicates.blocks('kubejs:nyanium_machine_casing'))
                .where('J', Predicates.blocks('kubejs:superdense_assembly_control_casing'))
                .where('K', Predicates.blocks('gtceu:uhv_rotor_holder'))
                .where('L', Predicates.blocks('gtceu:trinium_coil_block'))
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/threading/advanced_assembly_casing',
            'gtceu:block/machines/assembler'
        );
});
