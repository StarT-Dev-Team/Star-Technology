GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('molten_destabilizing')
        .category('resource_production')
        .setMaxIOSize(0, 12, 1, 8)
        .setSound(GTSoundEntries.MINER)
        .setProgressBar(GuiTextures.PROGRESS_BAR_DISTILLATION_TOWER, FillDirection.LEFT_TO_RIGHT);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('molten_destabiliser', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('molten_destabilizing')
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(GCYMBlocks.CASING_HIGH_TEMPERATURE_SMELTING)
        .pattern((definition) =>
            newFactoryBlockPattern([
                '   FFF   |         |         |         |         |   BBB   |         |         |         |         ',
                ' FFHHHFF |  BHHHB  |  BHTHB  |  BHTHB  |  BHHHB  |  BZZZB  |    B    |    B    |   HHH   |         ',
                ' FHHHHHF | BHCPCHB | BHCPCHB | BHCPCHB | BHCPCHB | BZCPCZB |  BNTNB  |  BNTNB  |  HHHHH  |    B    ',
                'FHHHHHHHF| HCB BCH | HCB BCH | HCB BCH | HCB BCH |BZCB BCZB|  NBPBN  |  NB BN  | HHB BHH |   NNN   ',
                'FHHHHHHHF| HP P PH | TP P PT | TP P PT | HP P PH |BZP P PZB| BTPPPTB | BT P TB | HH P HH |  BNMNB  ',
                'FHHHHHHHF| HCB BCH | HCB BCH | HCB BCH | HCB BCH |BZCB BCZB|  NBPBN  |  NB BN  | HHB BHH |   NNN   ',
                ' FHHHHHF | BHCPCHB | BHCPCHB | BHCPCHB | BHCPCHB | BZCPCZB |  BNTNB  |  BNTNB  |  HHHHH  |    B    ',
                ' FFHHHFF |  BHHHB  |  BH@HB  |  BHHHB  |  BHHHB  |  BZZZB  |    B    |    B    |   HHH   |         ',
                '   FFF   |         |         |         |         |   BBB   |         |         |         |         ',
            ])
                .whereDict({
                    ' ': P.any(),
                    H: P.anyOf([
                        P.gtBlock('high_temperature_smelting_casing'),
                        P.ability(PA.itemIn, { max: 2, view: 1 }),
                        P.ability(PA.itemOut, { max: 3 }),
                        P.ability(PA.fluidOut, { max: 12 }),
                        P.ability(PA.parallelHatch, { max: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                        P.ability(PA.euIn, { max: 2, view: 1 }),
                    ]),
                    F: P.kjsBlock('enriched_naquadah_firebox_casing'),
                    B: P.gtBlock('black_steel_frame'),
                    T: P.gtBlock('heat_vent'),
                    Z: P.gtBlock('zpm_machine_casing'),
                    C: P.gtBlock('trinium_coil_block'),
                    P: P.kjsBlock('enriched_naquadah_pipe_casing'),
                    N: P.kjsBlock('enriched_naquadah_machine_casing'),
                    M: P.ability(PA.muffler),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/gcym/high_temperature_smelting_casing',
            'gtceu:block/machines/electromagnetic_separator'
        );
});
