GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('compact_assembly_line', 'multiblock')
        .machine((holder) => new $AssemblyLineMulti(holder))
        .rotationState(RotationState.ALL)
        .tooltips([
            Text.translate("block.start_core.gap"),
            Text.translate("gtceu.multiblock.exact_hatch_1.tooltip")
        ])
        .recipeType('assembly_line')
        .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT_SUBTICK, $StarTRecipeModifiers.THROUGHPUT_BOOSTING, GTRecipeModifiers.BATCH_MODE])
        .appearanceBlock(() => Block.getBlock('kubejs:superdense_machine_casing'))
        .pattern(definition => FactoryBlockPattern.start($RelativeDirection.BACK, $RelativeDirection.UP, $RelativeDirection.RIGHT)
            .aisle('SSISS', '@SDSS', 'SSSSS')
            .aisle('TSIST', 'GRDRG', 'TSCST').setRepeatable(3, 15)
            .aisle('SSOSS', 'SSDSS', 'SSSSS')
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .where('S', Predicates.blocks('kubejs:superdense_machine_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(4).setPreviewCount(0))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(1).setPreviewCount(0))
                .or(Predicates.abilities(PartAbility.OPTICAL_DATA_RECEPTION).setExactLimit(1)))
            .where('G', Predicates.blocks('gtceu:fusion_glass'))
            .where('D', Predicates.blocks('kubejs:superdense_assembly_machine_casing'))
            .where('R', Predicates.blocks('kubejs:superdense_assembly_control_casing'))
            .where('C', Predicates.blocks('gtceu:superconducting_coil'))
            .where('I', Predicates.abilities(PartAbility.IMPORT_ITEMS))
            .where('O', Predicates.abilities(PartAbility.EXPORT_ITEMS).addTooltips(Component.translatable("gtceu.multiblock.pattern.location_end")))
            .where('T', Predicates.blocks('gtceu:assembly_line_grating'))
            .where(' ', Predicates.any())
            .build())
    ["partSorter(java.util.function.Function)"]((mc) => $AssemblyLineMulti.partSorter(mc))
        .workableCasingModel('kubejs:block/casings/abydos_multis/superdense_machine_casing',
            'gtceu:block/multiblock/assembly_line');

});