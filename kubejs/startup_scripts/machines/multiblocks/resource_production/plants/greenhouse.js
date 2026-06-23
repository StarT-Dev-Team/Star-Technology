GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('tree_greenhouse')
        .category('resource_production')
        .setEUIO('in')
        .setMaxIOSize(2, 2, 3, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_SLICE, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHAINSAW_TOOL);

    event
        .create('wild_garden')
        .category('resource_production')
        .setEUIO('in')
        .setMaxIOSize(2, 12, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_SIFT, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CENTRIFUGE);

    event
        .create('crop_greenhouse')
        .category('resource_production')
        .setEUIO('in')
        .setMaxIOSize(3, 2, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.SAW_TOOL);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('greenhouse', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes(['tree_greenhouse', 'wild_garden', 'crop_greenhouse'])
        .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT, GTRecipeModifiers.BATCH_MODE])
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle('HHHHHHH', ' FGGGF ', ' FGGGF ', ' FGGGF ', '  FFF  ')
                .aisle('HDgggDH', 'FB###BF', 'FB###BF', 'FB###BF', ' F###F ')
                .aisle('HgggggH', 'G#####G', 'G#####G', 'G##L##G', 'F#####F')
                .aisle('HggDggH', 'G##O##G', 'G##O##G', 'G#LOL#G', 'F##L##F')
                .aisle('HgggggH', 'G#####G', 'G#####G', 'G##L##G', 'F#####F')
                .aisle('HDgggDH', 'FB###BF', 'FB###BF', 'FB###BF', ' F###F ')
                .aisle('HHHCHHH', ' FGGGF ', ' FGGGF ', ' FGGGF ', '  FFF  ')
                .where('C', Predicates.controller(Predicates.blocks(definition.get())))
                .where(
                    'H',
                    Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
                        .setMinGlobalLimited(12)
                        .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                )
                .where('B', Predicates.blocks('gtceu:soul_infused_block'))
                .where('O', Predicates.blocks('minecraft:oak_log'))
                .where('L', Predicates.blocks('minecraft:oak_leaves'))
                .where('D', Predicates.blocks('minecraft:dirt'))
                .where('F', Predicates.blocks('gtceu:steel_frame'))
                .where('G', Predicates.blocks('thermal:obsidian_glass'))
                .where('g', Predicates.blocks('minecraft:grass_block'))
                .where('#', Predicates.air())
                .where(' ', Predicates.any())
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_solid_steel',
            'gtceu:block/multiblock/implosion_compressor'
        );
});
