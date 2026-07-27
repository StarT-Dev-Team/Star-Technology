GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('injection_mixer')
        .category('ultimate')
        .setEUIO('in')
        .setMaxTooltips(4)
        .setMaxIOSize(6, 1, 6, 1)
        .setSound(GTSoundEntries.MIXER)
        .setProgressBar(GuiTextures.PROGRESS_BAR_MIXER, FillDirection.LEFT_TO_RIGHT);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('injection_mixer', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('injection_mixer')
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('kubejs:noble_mixing_casing'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                ' BBB | CCC | BBB |  B  |     |  B  | BBB |     |     |     |     |     |     ',
                'BBDBB|CDDDC|BEEEB| FEF | FGF | FDF |BDDDB| DFD |  F  |  C  |  C  |  C  |  D  ',
                'BDDDB|CDGDC|BEGEB|BEGEB| GGG |BDGDB|BDGDB| FGF | FGF | CHC | CHC | CHC | DED ',
                'BBDBB|CDDDC|BEEEB| FEF | FGF | FDF |BDDDB| DFD |  F  |  C  |  C  |  C  |  D  ',
                ' BBB | C@C | BBB |  B  |     |  B  | BBB |     |     |     |     |     |     ',
            ])
                .whereDict({
                    B: P.kjsBlock('noble_mixing_casing'),
                    ' ': P.any(),
                    C: P.anyOf([
                        P.gtBlock('fusion_glass'),
                        P.autoAbilities(definition.getRecipeTypes()),
                        P.ability(PA.maintenance, { exact: 1 }),
                        P.ability(PA.parallelHatch, { max: 1 }),
                    ]),
                    D: P.gtBlock('atomic_casing'),
                    E: P.kjsBlock('enriched_naquadah_pipe_casing'),
                    F: P.kjsBlock('enriched_naquadah_machine_casing'),
                    G: P.kjsBlock('enriched_naquadah_gearbox'),
                    H: P.kjsBlock('enriched_naquadah_engine_intake_casing'),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel('kubejs:block/casings/abydos_multis/noble_mixing_casing', 'gtceu:block/machines/mixer');
});
