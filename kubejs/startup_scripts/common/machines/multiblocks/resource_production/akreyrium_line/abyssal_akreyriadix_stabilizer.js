GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('abyssal_akreyriadix_stabiliser')
        .category('resource_production')
        .setEUIO('in')
        .setMaxIOSize(2, 1, 2, 1)
        .setSound(GTSoundEntries.MACERATOR)
        .setProgressBar(GuiTextures.PROGRESS_BAR_FUSION, FillDirection.LEFT_TO_RIGHT);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('abyssal_akreyriadix_stabiliser', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes(['abyssal_akreyriadix_stabiliser', 'folding_akreyrium_stabiliser'])
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('kubejs:nyanium_machine_casing'))
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle(
                    '                           ',
                    '                           ',
                    '             B             ',
                    '             B             ',
                    '             B             ',
                    '             B             ',
                    '             B             ',
                    '                           ',
                    '                           '
                )
                .aisle(
                    '                           ',
                    '             B             ',
                    '             B             ',
                    '                           ',
                    '          BCCCCCB          ',
                    '                           ',
                    '             B             ',
                    '             B             ',
                    '                           '
                )
                .aisle(
                    '           BBBBB           ',
                    '                           ',
                    '                           ',
                    '                           ',
                    '         B       B         ',
                    '                           ',
                    '                           ',
                    '                           ',
                    '           BBBBB           '
                )
                .aisle(
                    '          BBDDDBB          ',
                    '                           ',
                    '         CCCCCCCCC         ',
                    'B       B         B       B',
                    'BB      BB       BB      BB',
                    'B       B         B       B',
                    '         CCCCCCCCC         ',
                    '                           ',
                    '          BBDDDBB          '
                )
                .aisle(
                    '          BDDDDDB          ',
                    '                           ',
                    'B       B         B       B',
                    'BEE    EEE       EEE    EEB',
                    'BEFFDDFFFE       EFFFDDFFEB',
                    'BEE    EEE       EEE    EEB',
                    'B       B         B       B',
                    '                           ',
                    '          BDDDDDB          '
                )
                .aisle(
                    '          BDDGDDB          ',
                    '         B   G   B         ',
                    'BB      BB   G   BB      BB',
                    'BEFFDDFFFE   G   EFFFDDFFEB',
                    'HGGGGGGGGGGGGGGGGGGGGGGGGGH',
                    'BEFFDDFFFE   G   EFFFDDFFEB',
                    'BB      BB   G   BB      BB',
                    '         B   G   B         ',
                    '          BDDGDDB          '
                )
                .aisle(
                    '          BDDDDDB          ',
                    '                           ',
                    'B       B         B       B',
                    'BEE    EEE       EEE    EEB',
                    'BEFFDDFFFE   G   EFFFDDFFEB',
                    'BEE    EEE       EEE    EEB',
                    'B       B         B       B',
                    '                           ',
                    '          BDDDDDB          '
                )
                .aisle(
                    '          BBDDDBB          ',
                    '                           ',
                    '         CCCCCCCCC         ',
                    'B       B         B       B',
                    'BB      BB   G   BB      BB',
                    'B       B         B       B',
                    '         CCCCCCCCC         ',
                    '                           ',
                    '          BBDDDBB          '
                )
                .aisle(
                    '           BBBBB           ',
                    '                           ',
                    '                           ',
                    '                           ',
                    '         B   G   B         ',
                    '                           ',
                    '                           ',
                    '                           ',
                    '           BBBBB           '
                )
                .aisle(
                    '                           ',
                    '             B             ',
                    '             B             ',
                    '                           ',
                    '          BCCGCCB          ',
                    '                           ',
                    '             B             ',
                    '             B             ',
                    '                           '
                )
                .aisle(
                    '                           ',
                    '                           ',
                    '             B             ',
                    '             B             ',
                    '             @             ',
                    '             B             ',
                    '             B             ',
                    '                           ',
                    '                           '
                )
                .where(' ', Predicates.any())
                .where('B', Predicates.blocks('kubejs:nyanium_machine_casing'))
                .where('C', Predicates.blocks('gtceu:draconyallium_frame'))
                .where(
                    'D',
                    Predicates.blocks('kubejs:draco_resilient_fusion_glass')
                        .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2))
                        .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2))
                        .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                        .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                )
                .where('E', Predicates.blocks('kubejs:draco_ware_casing'))
                .where('F', Predicates.blocks('kubejs:draco_assembly_grating'))
                .where('G', Predicates.blocks('kubejs:dragonsteel_casing'))
                .where(
                    'H',
                    Predicates.abilities(PartAbility.IMPORT_ITEMS).or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
                )
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .build()
        )
        .workableCasingModel('kubejs:block/casings/nyanium/casing', 'gtceu:block/multiblock/hpca');
});
