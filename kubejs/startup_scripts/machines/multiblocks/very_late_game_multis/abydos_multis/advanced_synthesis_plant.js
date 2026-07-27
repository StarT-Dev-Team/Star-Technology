GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('ordered_chemistry')
        .category('highly_advanced')
        .setEUIO('in')
        .setMaxTooltips(4)
        .setMaxIOSize(6, 6, 6, 6)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL)
        .setLayered();
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('advanced_synthesis_plant', 'multiblock')
        .machine((holder) => new $LayeredWorkableElectricMultiblockMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes(['ordered_chemistry'])
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT_SUBTICK])
        .appearanceBlock(() => Block.getBlock('kubejs:peek_casing'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                '    FHHHF|    TFOFT|    T   T|    T   T|    T   T|    FFFFF',
                '    HFFFH|    F P F|     FFF |     MMM |     FFF |    FEEEF',
                '    HFFFH|    FPPPF|     F F |     M M |     F F |    FEEEF',
                '    HFFFH|    F P F|     FFF |     MMM |     FFF |    FEEEF',
                'FHHHFFFFF|TFFFFPPPT|T   TFFFT|T   T   T|T   T   T|FFFFFFFFF',
                'HFFFFFFFH|F P P P F| FFFFFGF | MMM     | FFF     |FEEEF   F',
                'HFFFFFFFH|IPPPPPPPF| F  FGGF | M M     | F F     |FEEEF   F',
                'HFFFFFFFH|F P P P F| FFFFFFF | MMM     | FFF     |FEEEF   F',
                'FHHHFHHHF|TFFFTF@FT|T   T   T|T   T   T|T   T   T|FFFFFFFFF',
            ])
                .whereDict({
                    '@': P.controller(definition),
                    F: P.anyOf([
                        P.kjsBlock('peek_casing'),
                        P.ability(PA.maintenance, { exact: 1 }),
                        P.ability(PA.euIn, { max: 2 }),
                        P.ability(PA.parallelHatch, { max: 1 }),
                    ]),
                    H: P.block(GCYMBlocks.HEAT_VENT.get()),
                    M: P.block(GCYMBlocks.MOLYBDENUM_DISILICIDE_COIL_BLOCK.get()),
                    E: P.kjsBlock('enriched_naquadah_engine_intake_casing'),
                    P: P.block(GTBlocks.CASING_POLYTETRAFLUOROETHYLENE_PIPE.get()),
                    T: P.gtBlock('tungsten_frame'),
                    G: P.gtBlock('laminated_glass'),
                    ' ': P.any(),
                    O: P.abilityOr([PA.itemOut, PA.fluidOut]),
                    I: P.abilityOr([PA.fluidIn, PA.itemIn]),
                })
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/basic/machine_casing_peek',
            'gtceu:block/multiblock/large_chemical_reactor'
        );
});
