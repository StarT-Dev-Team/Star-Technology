GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('heat_chamber')
        .category('highly_advanced')
        .setEUIO('in')
        .setMaxIOSize(4, 4, 4, 4)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    // prettier-ignore
    event
        .create('heat_chamber', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('heat_chamber')
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(GCYMBlocks.CASING_HIGH_TEMPERATURE_SMELTING)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('    BCDCB    ', '     CCC     ', '      C      ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '    BBBBB    ')
            .aisle('  BBBBBBBBB  ', '             ', '             ', '             ', '    BBBBB    ', '             ', '             ', '             ', '    BBBBB    ', '             ', '             ', '             ', '  BBBBBBBBB  ')
            .aisle(' BBBEEEEEBBB ', '  F EGHGE F  ', '  F  IEI  F  ', '  F  GHG  F  ', '  BBBBBBBBB  ', '   F     F   ', '   F     F   ', '   F     F   ', '  BBBBBBBBB  ', '  F  GHG  F  ', '  F  IEI  F  ', '  F EGHGE F  ', ' BBBEEEEEBBB ')
            .aisle(' BBBBBHBBBBB ', '   CC   CC   ', '   CC   CC   ', '    C   C    ', '  BBBDDDBBB  ', '  F  JCJ  F  ', '  F  JDJ  F  ', '  F  JCJ  F  ', '  BBBDDDBBB  ', '    C   C    ', '   CC   CC   ', '   CC   CC   ', ' BBBBBHBBBBB ')
            .aisle('BBEBBBEBBBEBB', '  EC     CE  ', '   C     C   ', '   C     C   ', ' BBBD   DBBB ', '    J   J    ', '    J   J    ', '    J   J    ', ' BBBD   DBBB ', '   C     C   ', '   C     C   ', '  EC     CE  ', 'BBEBBBEBBBEBB')
            .aisle('CBEBBBEBBBEBC', 'C G       G C', '  I       I  ', '  G       G  ', ' BBD     DBB ', '   J     J   ', '   J     J   ', '   J     J   ', ' BBD     DBB ', '  G       G  ', '  I       I  ', '  G       G  ', 'BBEBBBBBBBEBB')
            .aisle('DBEHEEEEEHEBD', 'C H       H C', 'C E       E C', '  H       H  ', ' BBD     DBB ', '   C     C   ', '   D     D   ', '   C     C   ', ' BBD     DBB ', '  H       H  ', '  E       E  ', '  H       H  ', 'BBEHEBKBEHEBB')
            .aisle('CBEBBBEBBBEBC', 'C G       G C', '  I       I  ', '  G       G  ', ' BBD     DBB ', '   J     J   ', '   J     J   ', '   J     J   ', ' BBD     DBB ', '  G       G  ', '  I       I  ', '  G       G  ', 'BBEBBBBBBBEBB')
            .aisle('BBEBBBEBBBEBB', '  EC     CE  ', '   C     C   ', '   C     C   ', ' BBBD   DBBB ', '    J   J    ', '    J   J    ', '    J   J    ', ' BBBD   DBBB ', '   C     C   ', '   C     C   ', '  EC     CE  ', 'BBEBBBEBBBEBB')
            .aisle(' BBBBBHBBBBB ', '   CC   CC   ', '   CC   CC   ', '    C   C    ', '  BBBDDDBBB  ', '  F  JCJ  F  ', '  F  JDJ  F  ', '  F  JCJ  F  ', '  BBBDDDBBB  ', '    C   C    ', '   CC   CC   ', '   CC   CC   ', ' BBBBBHBBBBB ')
            .aisle(' BBBEEEEEBBB ', '  F EGHGE F  ', '  F  IEI  F  ', '  F  GHG  F  ', '  BBBBBBBBB  ', '   F     F   ', '   F     F   ', '   F     F   ', '  BBBBBBBBB  ', '  F  GHG  F  ', '  F  IEI  F  ', '  F EGHGE F  ', ' BBBEEEEEBBB ')
            .aisle('  BBBBBBBBB  ', '             ', '             ', '             ', '    BBBBB    ', '             ', '             ', '             ', '    BBBBB    ', '             ', '             ', '             ', '  BBBBBBBBB  ')
            .aisle('    BCDCB    ', '     C@C     ', '      C      ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '    BBBBB    ')
                .where(' ', P.any())
                .where('B', P.kjsBlock('enderium_casing'))
                .where(
                    'C',
                    P.gtBlock('high_temperature_smelting_casing')
                        .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                        .or(P.ability(PA.maintenance, {exact:1}))
                        .or(P.ability(PA.parallelHatch, {max:1}))
                )
                .where('D', P.gtBlock('heat_vent'))
                .where('E', P.kjsBlock('enriched_naquadah_pipe_casing'))
                .where('F', P.gtBlock('rhodium_plated_palladium_frame'))
                .where('G', P.kjsBlock('enriched_naquadah_firebox_casing'))
                .where('H', P.kjsBlock('enriched_naquadah_engine_intake_casing'))
                .where('I', P.kjsBlock('enriched_naquadah_machine_casing'))
                .where('J', P.gtBlock('naquadah_coil_block'))
                .where('K', P.gtBlock('lv_muffler_hatch'))
                .where('@', P.controller(definition))
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/gcym/high_temperature_smelting_casing',
            'gtceu:block/multiblock/implosion_compressor'
        );
});
