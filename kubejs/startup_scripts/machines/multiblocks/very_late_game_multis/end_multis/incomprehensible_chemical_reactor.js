GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('incomprehensible_chemical_reactor', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .machine((holder) => new $CoiledMulti(holder))
        .recipeTypes(['large_chemical_reactor'])
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.CHEMICAL_REACTOR_OVERCLOCK,
            $StarTRecipeModifiers.THROUGHPUT_BOOSTING,
            $StarTRecipeModifiers.BULK_PROCESSING,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('kubejs:cattomolymer_casing'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                '       BBCCCBB|       DBBBBBD|       BEBEBEB|       BCBCBCB|       BEBEBEB|       DBBBBBD|       BBCCCBB',
                'BBFBB  BBBBBBB|B   B  BG G GB| D D   EG G GE|  E    CG G GC| D D   EG G GE|B   B  BG G GB|BBFBB  BBBBBBB',
                'BBBBB  CBBBBBC| HHH   B     B|DHHHD  B G G B| HGH   B     B|DHHHD  B G G B| HHH   B     B|BBBBB  CBBBBBC',
                'FBCBF  CBBBBBC| HGH   BG G GB| HGH   EG G GE|EGGGGGGGG G GC| HGH   EG G GE| HGH   BG G GB|FBCBF  CBBBBBC',
                'BBBBB  CBBBBBC| HHH   B     B|DHHHD  B G G B| HGH   B     B|DHHHD  B G G B| HHH   B     B|BBBBB  CBBBBBC',
                'BBFBB  BBBBBBB|B   B  BG G GB| D D   EG G GE|  E    CG G GC| D D   EG G GE|B   B  BG G GB|BBFBB  BBBBBBB',
                '       BBCCCBB|       DBBBBBD|       BEBEBEB|       BCB@BCB|       BEBEBEB|       DBBBBBD|       BBCCCBB',
            ])
                .whereDict({
                    ' ': Predicates.any(),
                    B: Predicates.blocks('kubejs:cattomolymer_casing')
                        .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(8).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(8).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(8).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(8).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                        .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2))
                        .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)),
                    C: Predicates.blocks('kubejs:nyanium_heat_escape_casing'),
                    D: Predicates.blocks('gtceu:nyanium_frame'),
                    E: Predicates.blocks('kubejs:nyanium_engine_intake_casing'),
                    F: Predicates.blocks('kubejs:nyanium_firebox_casing'),
                    G: Predicates.blocks('kubejs:nyanium_pipe_casing'),
                    H: Predicates.heatingCoils(),
                    '@': Predicates.controller(Predicates.blocks(definition.get())),
                })
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/end_multis/cattomolymer_casing',
            'gtceu:block/multiblock/large_chemical_reactor'
        )
        .additionalDisplay(global.chemicalOverclockDisplay);
});
