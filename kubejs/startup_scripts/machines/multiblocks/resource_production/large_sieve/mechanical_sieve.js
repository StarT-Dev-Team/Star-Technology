GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('mechanical_sieve')
        .category('resource_production')
        .setMaxIOSize(2, 6, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_SIFT, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MACERATOR);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('mechanical_sieve', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .tooltips([Text.translate('block.start_core.gap'), Text.translate('gtceu.multiblock.exact_hatch_1.tooltip')])
        .recipeType('mechanical_sieve')
        .recipeModifiers(GTRecipeModifiers.OC_NON_PERFECT, GTRecipeModifiers.BACTH_MODE)
        .appearanceBlock(() => Block.getBlock('kubejs:treatedwood_casing'))
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle('F   F', 'F   F', 'F   F', 'FFFFF', 'WWWWW', 'WWWWW', 'WWWWW')
                .aisle('     ', '     ', '     ', 'FWWWF', 'WMMMW', 'W   W', 'W   W')
                .aisle('     ', '     ', '     ', 'FWWWF', 'WMMMW', 'W   W', 'W   W')
                .aisle('     ', '     ', '     ', 'FWWWF', 'WMMMW', 'W   W', 'W   W')
                .aisle('F   F', 'F   F', 'F   F', 'FFFFF', 'WWCWW', 'WWWWW', 'WWWWW')
                .where('C', Predicates.controller(Predicates.blocks(definition.get())))
                .where(
                    'W',
                    Predicates.blocks('kubejs:treatedwood_casing')
                        .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(1).setPreviewCount(1))
                )
                .where('F', Predicates.blocks('gtceu:treated_wood_frame'))
                .where('M', Predicates.blocks('kubejs:meshblock'))
                .where(' ', Predicates.any())
                .build()
        )
        .workableCasingModel('kubejs:block/casings/basic/casing_wood', 'gtceu:block/machines/macerator');
});
