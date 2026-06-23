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
            newFactoryBlockPattern([
                'HHHHHHH| FGGGF | FGGGF | FGGGF |  FFF  ',
                'HDgggDH|FB###BF|FB###BF|FB###BF| F###F ',
                'HgggggH|G#####G|G#####G|G##L##G|F#####F',
                'HggDggH|G##O##G|G##O##G|G#LOL#G|F##L##F',
                'HgggggH|G#####G|G#####G|G##L##G|F#####F',
                'HDgggDH|FB###BF|FB###BF|FB###BF| F###F ',
                'HHHCHHH| FGGGF | FGGGF | FGGGF |  FFF  ',
            ])
                .whereDict({
                    C: P.controller(definition),
                    H: P.anyOf([
                        P.block(GTBlocks.CASING_STEEL_SOLID.get(), { min: 14 }),
                        P.ability(PA.itemIn, { max: 2, view: 1 }),
                        P.ability(PA.euIn, { max: 2, view: 1 }),
                        P.ability(PA.itemOut, { max: 2, view: 1 }),
                        P.ability(PA.fluidIn, { max: 2, view: 1 }),
                        P.ability(PA.fluidOut, { max: 2, view: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                    ]),
                    B: P.gtBlock('soul_infused_block'),
                    O: P.block('minecraft:oak_log'),
                    L: P.block('minecraft:oak_leaves'),
                    D: P.block('minecraft:dirt'),
                    F: P.gtBlock('steel_frame'),
                    G: P.block('thermal:obsidian_glass'),
                    g: P.block('minecraft:grass_block'),
                    '#': P.air(),
                    ' ': P.any(),
                })
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_solid_steel',
            'gtceu:block/multiblock/implosion_compressor'
        );
});
