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
            newFactoryBlockPattern([
                '                           |                           |             B             |             B             |             B             |             B             |             B             |                           |                           ',
                '                           |             B             |             B             |                           |          BCCCCCB          |                           |             B             |             B             |                           ',
                '           BBBBB           |                           |                           |                           |         B       B         |                           |                           |                           |           BBBBB           ',
                '          BBDDDBB          |                           |         CCCCCCCCC         |B       B         B       B|BB      BB       BB      BB|B       B         B       B|         CCCCCCCCC         |                           |          BBDDDBB          ',
                '          BDDDDDB          |                           |B       B         B       B|BEE    EEE       EEE    EEB|BEFFDDFFFE       EFFFDDFFEB|BEE    EEE       EEE    EEB|B       B         B       B|                           |          BDDDDDB          ',
                '          BDDGDDB          |         B   G   B         |BB      BB   G   BB      BB|BEFFDDFFFE   G   EFFFDDFFEB|HGGGGGGGGGGGGGGGGGGGGGGGGGH|BEFFDDFFFE   G   EFFFDDFFEB|BB      BB   G   BB      BB|         B   G   B         |          BDDGDDB          ',
                '          BDDDDDB          |                           |B       B         B       B|BEE    EEE       EEE    EEB|BEFFDDFFFE   G   EFFFDDFFEB|BEE    EEE       EEE    EEB|B       B         B       B|                           |          BDDDDDB          ',
                '          BBDDDBB          |                           |         CCCCCCCCC         |B       B         B       B|BB      BB   G   BB      BB|B       B         B       B|         CCCCCCCCC         |                           |          BBDDDBB          ',
                '           BBBBB           |                           |                           |                           |         B   G   B         |                           |                           |                           |           BBBBB           ',
                '                           |             B             |             B             |                           |          BCCGCCB          |                           |             B             |             B             |                           ',
                '                           |                           |             B             |             B             |             @             |             B             |             B             |                           |                           ',
            ])
                .whereDict({
                    ' ': P.any(),
                    B: P.kjsBlock('nyanium_machine_casing'),
                    C: P.gtBlock('draconyallium_frame'),
                    D: P.anyOf([
                        P.kjsBlock('draco_resilient_fusion_glass'),
                        P.ability(PA.euIn, { max: 2, view: 1 }),
                        P.ability(PA.itemOut, { max: 2 }),
                        P.ability(PA.fluidOut, { max: 2 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                        P.ability(PA.parallelHatch, { max: 1 }),
                    ]),
                    E: P.kjsBlock('draco_ware_casing'),
                    F: P.kjsBlock('draco_assembly_grating'),
                    G: P.kjsBlock('dragonsteel_casing'),
                    H: P.abilityOr([PA.itemIn, PA.fluidIn]),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel('kubejs:block/casings/nyanium/casing', 'gtceu:block/multiblock/hpca');
});
