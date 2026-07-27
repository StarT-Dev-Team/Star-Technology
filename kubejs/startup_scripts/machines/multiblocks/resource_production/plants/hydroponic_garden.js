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
            newFactoryBlockPattern([
                'ABBBBBBBA|ABBCBCBBA|ABBBBBBBA|ADDDDDDDA| ADDDDDA |  AAAAA  ',
                ' BBBBBBB | BFGFGFB | BHHHHHB | D     D |  IIIII  |         ',
                ' BBBBBBB | CGGGGGC | BHHHHHB | D     D |  IIIII  |         ',
                ' BBBBBBB | BFGFGFB | BHHHHHB | D     D |  IIIII  |         ',
                'ABBBBBBBA|ABFGFGFBA|ABHHHHHBA|AD     DA| AIIIIIA |  AAAAA  ',
                ' BBBBBBB | CGGGGGC | BHHHHHB | D     D |  IIIII  |         ',
                ' BBBBBBB | BFGFGFB | BHHHHHB | D     D |  IIIII  |         ',
                ' BBBBBBB | CGGGGGC | BHHHHHB | D     D |  IIIII  |         ',
                'ABBBBBBBA|ABFGFGFBA|ABHHHHHBA|AD     DA| AIIIIIA |  AAAAA  ',
                ' BBBBBBB | BFGFGFB | BHHHHHB | D     D |  IIIII  |         ',
                ' BBBBBBB | CGGGGGC | BHHHHHB | D     D |  IIIII  |         ',
                ' BBBBBBB | BFGFGFB | BHHHHHB | D     D |  IIIII  |         ',
                'ABBBBBBBA|ABBC@CBBA|ABBBBBBBA|ADDDDDDDA| ADDDDDA |  AAAAA  ',
            ])
                .whereDict({
                    A: P.gtBlock('tungsten_carbide_frame'),
                    B: P.anyOf([
                        P.gtBlock('watertight_casing'),
                        P.ability(PA.itemIn, { max: 5, view: 1 }),
                        P.ability(PA.itemOut, { max: 2, view: 0 }),
                        P.ability(PA.fluidIn, { max: 5, view: 1 }),
                        P.ability(PA.euIn, { max: 2, view: 0 }),
                        P.ability(PA.parallelHatch, { max: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                    ]),
                    C: P.gtBlock('engine_intake_casing'),
                    D: P.gtBlock('tempered_glass'),
                    F: P.fluid('minecraft:water'),
                    G: P.gtBlock('titanium_pipe_casing'),
                    H: P.block('thermal:phytosoil_tilled'),
                    ' ': P.any(),
                    '#': P.air(),
                    I: P.gtBlock('laminated_glass'),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel('gtceu:block/casings/gcym/watertight_casing', 'gtceu:block/machines/extruder');
});
