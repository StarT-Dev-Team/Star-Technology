GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('hydroponic_garden')
        .category('resource_production')
        .setEUIO('in')
        .setMaxIOSize(2, 2, 2, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_SIFT, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CENTRIFUGE);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('hydroponic_garden', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('hydroponic_garden')
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('gtceu:watertight_casing'))
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle('ABBBBBBBA', 'ABBCBCBBA', 'ABBBBBBBA', 'ADDDDDDDA', ' ADDDDDA ', '  AAAAA  ')
                .aisle(' BBBBBBB ', ' BFGFGFB ', ' BHHHHHB ', ' D     D ', '  IIIII  ', '         ')
                .aisle(' BBBBBBB ', ' CGGGGGC ', ' BHHHHHB ', ' D     D ', '  IIIII  ', '         ')
                .aisle(' BBBBBBB ', ' BFGFGFB ', ' BHHHHHB ', ' D     D ', '  IIIII  ', '         ')
                .aisle('ABBBBBBBA', 'ABFGFGFBA', 'ABHHHHHBA', 'AD     DA', ' AIIIIIA ', '  AAAAA  ')
                .aisle(' BBBBBBB ', ' CGGGGGC ', ' BHHHHHB ', ' D     D ', '  IIIII  ', '         ')
                .aisle(' BBBBBBB ', ' BFGFGFB ', ' BHHHHHB ', ' D     D ', '  IIIII  ', '         ')
                .aisle(' BBBBBBB ', ' CGGGGGC ', ' BHHHHHB ', ' D     D ', '  IIIII  ', '         ')
                .aisle('ABBBBBBBA', 'ABFGFGFBA', 'ABHHHHHBA', 'AD     DA', ' AIIIIIA ', '  AAAAA  ')
                .aisle(' BBBBBBB ', ' BFGFGFB ', ' BHHHHHB ', ' D     D ', '  IIIII  ', '         ')
                .aisle(' BBBBBBB ', ' CGGGGGC ', ' BHHHHHB ', ' D     D ', '  IIIII  ', '         ')
                .aisle(' BBBBBBB ', ' BFGFGFB ', ' BHHHHHB ', ' D     D ', '  IIIII  ', '         ')
                .aisle('ABBBBBBBA', 'ABBC@CBBA', 'ABBBBBBBA', 'ADDDDDDDA', ' ADDDDDA ', '  AAAAA  ')
                .where('A', Predicates.blocks('gtceu:tungsten_carbide_frame'))
                .where(
                    'B',
                    Predicates.blocks('gtceu:watertight_casing')
                        .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(5).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(5).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                        .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                )
                .where('C', Predicates.blocks('gtceu:engine_intake_casing'))
                .where('D', Predicates.blocks('gtceu:tempered_glass'))
                .where('F', Predicates.blocks('minecraft:water'))
                .where('G', Predicates.blocks('gtceu:titanium_pipe_casing'))
                .where('H', Predicates.blocks('thermal:phytosoil_tilled'))
                .where(' ', Predicates.any())
                .where('#', Predicates.air())
                .where('I', Predicates.blocks('gtceu:laminated_glass'))
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .build()
        )
        .workableCasingModel('gtceu:block/casings/gcym/watertight_casing', 'gtceu:block/machines/extruder');
});
