GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('component_nexus')
        .category('highly_advanced')
        .setEUIO('in')
        .setMaxIOSize(10, 1, 4, 0)
        .setSound(GTSoundEntries.ASSEMBLER)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
        .setMaxTooltips(4);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('component_nexus', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .tooltips([Text.translate('block.start_core.gap'), Text.translate('gtceu.multiblock.exact_hatch_1.tooltip')])
        .recipeType('component_nexus')
        .recipeModifiers([
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            $StarTRecipeModifiers.THROUGHPUT_BOOSTING,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('kubejs:superdense_machine_casing'))
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle('ABBBABBBAAABBBA    ', 'ACCCACCCADACCCA    ', '        AAA        ')
                .aisle('AEEEAEEEFFFEEEA    ', 'AGHGAGHGAIAGHGA    ', 'ACCCACCCAJACCCA    ')
                .aisle('AFFFFFFFFEFFFFA    ', 'IIIIIIIIIIIIIII    ', 'AAAAAAAAAJAAAAA    ')
                .aisle('AEEEAEEEFFFEEEA    ', 'AGHGAGHGAIAGHGA    ', 'ACCCACCCAJACCCA    ')
                .aisle('ABBBABBBAFABBBA    ', 'ACCCACCCAIACCCA    ', '        AJA        ')
                .aisle('        AFA        ', '        AIA        ', '        AJA        ')
                .aisle('    ABBBAFABBBABBBA', '    ACCCAIACCCACCCA', '        AJA        ')
                .aisle('    AEEEFFFEEEAEEEA', '    AGHGAIAGHGAGHGA', '    ACCCAJACCCACCCA')
                .aisle('    AFFFFEFFFFFFFFA', '    IIIIIIIIIIIIIII', '    AAAAAJAAAAAAAAA')
                .aisle('    AEEEFFFEEEAEEEA', '    AGHGAIAGHGAGHGA', '    ACCCAJACCCACCCA')
                .aisle('    ABBBAAABBBABBBA', '    ACCCA@ACCCACCCA', '        AAA        ')
                .where(
                    'A',
                    Predicates.blocks('kubejs:superdense_machine_casing')
                        .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(4).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(8).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(1).setPreviewCount(0))
                        .or(Predicates.blocks('gtceu:uhv_stabilization_module').setExactLimit(1))
                )
                .where('B', Predicates.blocks('gtceu:computer_heat_vent'))
                .where(' ', Predicates.any())
                .where('C', Predicates.blocks('gtceu:fusion_glass'))
                .where('D', Predicates.blocks('gtceu:uhv_rotor_holder'))
                .where('E', Predicates.blocks('gtceu:assembly_line_grating'))
                .where('F', Predicates.blocks('gtceu:advanced_computer_casing'))
                .where('G', Predicates.blocks('gtceu:fusion_coil'))
                .where('H', Predicates.blocks('gtceu:assembly_line_unit'))
                .where('I', Predicates.blocks('kubejs:superdense_assembly_machine_casing'))
                .where('J', Predicates.blocks('gtceu:superconducting_coil'))
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/abydos_multis/superdense_machine_casing',
            'gtceu:block/machines/assembler'
        );
});
