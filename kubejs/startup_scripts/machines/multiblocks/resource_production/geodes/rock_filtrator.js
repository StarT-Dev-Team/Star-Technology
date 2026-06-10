GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('rock_filtrator')
        .category('resource_production')
        .setMaxIOSize(2, 9, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_SIFT, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MACERATOR);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('rock_filtrator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .tooltips([Text.translate('block.start_core.gap'), Text.translate('gtceu.multiblock.exact_hatch_1.tooltip')])
        .recipeType('rock_filtrator')
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle('SFS', 'SGS', 'SGS', 'SFS')
                .aisle('FBF', 'GMG', 'GMG', 'FIF')
                .aisle('SCS', 'SGS', 'SGS', 'SFS')
                .where('C', Predicates.controller(Predicates.blocks(definition.get())))
                .where(
                    'S',
                    Predicates.blocks('gtceu:solid_machine_casing')
                        .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(1).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(3).setPreviewCount(2))
                        .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(1).setPreviewCount(1))
                )
                .where('F', Predicates.blocks('gtceu:steel_firebox_casing'))
                .where('B', Predicates.blocks('gtceu:cupronickel_coil_block'))
                .where('G', Predicates.blocks('gtceu:tempered_glass'))
                .where('M', Predicates.blocks('kubejs:mesh_block'))
                .where('I', Predicates.abilities(PartAbility.IMPORT_ITEMS))
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_solid_steel',
            'gtceu:block/multiblock/implosion_compressor'
        );
});
