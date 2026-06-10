GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    // prettier-ignore
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
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('       BBCCCBB', '       DBBBBBD', '       BEBEBEB', '       BCBCBCB', '       BEBEBEB', '       DBBBBBD', '       BBCCCBB')
            .aisle('BBFBB  BBBBBBB', 'B   B  BG G GB', ' D D   EG G GE', '  E    CG G GC', ' D D   EG G GE', 'B   B  BG G GB', 'BBFBB  BBBBBBB')
            .aisle('BBBBB  CBBBBBC', ' HHH   B     B', 'DHHHD  B G G B', ' HGH   B     B', 'DHHHD  B G G B', ' HHH   B     B', 'BBBBB  CBBBBBC')
            .aisle('FBCBF  CBBBBBC', ' HGH   BG G GB', ' HGH   EG G GE', 'EGGGGGGGG G GC', ' HGH   EG G GE', ' HGH   BG G GB', 'FBCBF  CBBBBBC')
            .aisle('BBBBB  CBBBBBC', ' HHH   B     B', 'DHHHD  B G G B', ' HGH   B     B', 'DHHHD  B G G B', ' HHH   B     B', 'BBBBB  CBBBBBC')
            .aisle('BBFBB  BBBBBBB', 'B   B  BG G GB', ' D D   EG G GE', '  E    CG G GC', ' D D   EG G GE', 'B   B  BG G GB', 'BBFBB  BBBBBBB')
            .aisle('       BBCCCBB', '       DBBBBBD', '       BEBEBEB', '       BCB@BCB', '       BEBEBEB', '       DBBBBBD', '       BBCCCBB')
                .where(' ', Predicates.any())
                .where(
                    'B',
                    Predicates.blocks('kubejs:cattomolymer_casing')
                        .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(8).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(8).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(8).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(8).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                        .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2))
                        .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                )
                .where('C', Predicates.blocks('kubejs:nyanium_heat_escape_casing'))
                .where('D', Predicates.blocks('gtceu:nyanium_frame'))
                .where('E', Predicates.blocks('kubejs:nyanium_engine_intake_casing'))
                .where('F', Predicates.blocks('kubejs:nyanium_firebox_casing'))
                .where('G', Predicates.blocks('kubejs:nyanium_pipe_casing'))
                .where('H', Predicates.heatingCoils())
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/end_multis/cattomolymer_casing',
            'gtceu:block/multiblock/large_chemical_reactor'
        )
        .additionalDisplay(global.chemicalOverclockDisplay);
});
