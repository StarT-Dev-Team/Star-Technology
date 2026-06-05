GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('stargate_component_assembly')
        .category('gate_construction')
        .setEUIO('in')
        .setMaxIOSize(4, 1, 2, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_MASS_FAB, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER)
        .setLayered();
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    // prettier-ignore
    event
        .create('stargate_component_assembly', 'multiblock')
        .machine((holder) => new $LayeredWorkableElectricMultiblockMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('stargate_component_assembly')
        .recipeModifiers([GTRecipeModifiers.OC_PERFECT])
        .appearanceBlock(() => Block.getBlock('kubejs:prismalium_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle(' BBB       BBB       BBB ', 'B   B     B   B     B   B', 'B   B     B   B     B   B', 'B   B     B   B     B   B', ' BBB       BBB       BBB ', '                         ', '                         ', '                         ', '                         ', '                         ', ' BBB       BBB       BBB ', 'B   B     B   B     B   B', 'B   B     B   B     B   B', 'B   B     B   B     B   B', ' BBB       BBB       BBB ')
            .aisle('BCCCB     BCCCB     BCCCB', ' DDDC     CDDDC     CDDD ', ' DDDCEE EECDDDCEE EECDDD ', ' DDDC     CDDDC     CDDD ', 'BCCCB     BCCCB     BCCCB', '  E         E         E  ', '  E         E         E  ', '                         ', '  E         E         E  ', '  E         E         E  ', 'BCCCB     BCCCB     BCCCB', ' DDDC     CDDDC     CDDD ', ' DDDCEE EECDDDCEE EECDDD ', ' DDDC     CDDDC     CDDD ', 'B   B     B   B     B   B')
            .aisle('BCCCB     BCCCB     BCCCB', ' DFDCEE EECDFDCEE EECDFD ', ' DFFFFFFFFFFFFFFFFFFFFFD ', ' DFDCEE EECDFDCEE EECDFD ', 'BCFCB     BCFCB     BCFCB', ' EFE       EFE       EFE ', ' EFE       EFE       EFE ', '  F         F         F  ', ' EFE       EFE       EFE ', ' EFE       EFE       EFE ', 'BCFCB     BCFCB     BCFCB', ' DFDCEE EECDFDCEE EECDFD ', ' DFFFFFFFFFFFFFFFFFFFFFD ', ' DDDCEE EECDDDCEE EECDDD ', 'B   B     B   B     B   B')
            .aisle('BCCCB     BCCCB     BCCCB', ' DDDC     CDDDC     CDDD ', ' DFDCEE EECDDDCEE EECDFD ', ' DDDC     CDDDC     CDDD ', 'BCCCB     BCCCB     BCCCB', '  E         E         E  ', '  E         E         E  ', '                         ', '  E         E         E  ', '  E         E         E  ', 'BCCCB     BCCCB     BCCCB', ' DDDC     CDDDC     CDDD ', ' DFDCEE EECDFDCEE EECDFD ', ' DDDC     CDDDC     CDDD ', 'B   B     B   B     B   B')
            .aisle(' BBB     GGBBBGG     BBB ', 'BCCCB     B   B     BCCCB', 'BCFCB     B   B     BCFCB', 'BCCCB     B   B     BCCCB', ' BBB       BBB       BBB ', '                         ', '                         ', '                         ', '                         ', '                         ', ' BBB       BBB       BBB ', 'BCCCB     BCCCB     BCCCB', 'BCFCB     BCFCB     BCFCB', 'BCCCB     BCCCB     BCCCB', ' BBB       BBB       BBB ')
            .aisle('      GGGGGHIHGGGGG      ', '  E                   E  ', ' EFE                 EFE ', '  E                   E  ', '                         ', '                         ', '                         ', '                         ', '                         ', '                         ', '                         ', '  E         E         E  ', ' EFE       EFE       EFE ', '  E         E         E  ', '                         ')
            .aisle('     GGGGHHHHHHHGGGG     ', '  E                   E  ', ' EFE                 EFE ', '  E                   E  ', '                         ', '                         ', '                         ', '                         ', '                         ', '                         ', '                         ', '  E         E         E  ', ' EFE       EFE       EFE ', '  E         E         E  ', '                         ')
            .aisle('     GGHHHHJJJHHHHGG     ', '                         ', '  F                   F  ', '                         ', '                         ', '                         ', '                         ', '                         ', '                         ', '                         ', '                         ', '                         ', '  F         F         F  ', '                         ', '                         ')
            .aisle('     GGHJJHJJJHJJHGG     ', '  E                   E  ', ' EFE                 EFE ', '  E                   E  ', '                         ', '                         ', '                         ', '                         ', '                         ', '                         ', '                         ', '  E         E         E  ', ' EFE       EFE       EFE ', '  E         E         E  ', '                         ')
            .aisle('    GGHHJJHHHHHJJHHGG    ', '  E                   E  ', ' EFE                 EFE ', '  E                   E  ', '                         ', '                         ', '                         ', '                         ', '                         ', '                         ', '                         ', '  E         E         E  ', ' EFE       EFE       EFE ', '  E         E         E  ', '                         ')
            .aisle(' BBBGGHHHHHBBBHHHHHGGBBB ', 'BCCCB               BCCCB', 'BCFCB               BCFCB', 'BCCCB               BCCCB', ' BBB                 BBB ', '                         ', '                         ', '                         ', '                         ', '                         ', ' BBB       BBB       BBB ', 'BCCCB     BCCCB     BCCCB', 'BCFCB     BCFCB     BCFCB', 'BCCCB     BCCCB     BCCCB', ' BBB       BBB       BBB ')
            .aisle('BCCCBHHJJHBCCCBHJJHHBCCCB', ' DDD       BBB       DDD ', ' DFD        B        DFD ', ' DDD                 DDD ', 'BCCCB               BCCCB', '  E                   E  ', '  E                   E  ', '                         ', '  E         B         E  ', '  E        BBB        E  ', 'BCCCB     BCCCB     BCCCB', ' DDDC     CDDDC     CDDD ', ' DFDCEE EECDFDCEE EECDFD ', ' DDDC     CDDDC     CDDD ', 'B   B     B   B     B   B')
            .aisle('BCCCBIHJJHBCCCBHJJHIBCCCB', ' DFD       BFB       DFD ', ' DFD       BFB       DFD ', ' DFD        E        DFD ', 'BCFCB       I       BCFCB', ' EFE        @        EFE ', ' EFE        I        EFE ', '  F         E         F  ', ' EFE       BFB       EFE ', ' EFE       BFB       EFE ', 'BCFCB     BCFCB     BCFCB', ' DFDCEE EECDFDCEE EECDFD ', ' DFFFFFFFFFFFFFFFFFFFFFD ', ' DDDCEE EECDDDCEE EECDDD ', 'B   B     B   B     B   B')
            .aisle('BCCCBHHJJHBCCCBHJJHHBCCCB', ' DDD       BBB       DDD ', ' DFD        B        DFD ', ' DDD                 DDD ', 'BCCCB               BCCCB', '  E                   E  ', '  E                   E  ', '                         ', '  E         B         E  ', '  E        BBB        E  ', 'BCCCB     BCCCB     BCCCB', ' DDDC     CDDDC     CDDD ', ' DFDCEE EECDFDCEE EECDFD ', ' DDDC     CDDDC     CDDD ', 'B   B     B   B     B   B')
            .aisle(' BBBGGHHHHHBBBHHHHHGGBBB ', 'BCCCB               BCCCB', 'BCFCB               BCFCB', 'BCCCB               BCCCB', ' BBB                 BBB ', '                         ', '                         ', '                         ', '                         ', '                         ', ' BBB       BBB       BBB ', 'BCCCB     BCCCB     BCCCB', 'BCFCB     BCFCB     BCFCB', 'BCCCB     BCCCB     BCCCB', ' BBB       BBB       BBB ')
            .aisle('    GGHHJJHHHHHJJHHGG    ', '  E                   E  ', ' EFE                 EFE ', '  E                   E  ', '                         ', '                         ', '                         ', '                         ', '                         ', '                         ', '                         ', '  E         E         E  ', ' EFE       EFE       EFE ', '  E         E         E  ', '                         ')
            .aisle('     GGHJJHJJJHJJHGG     ', '  E                   E  ', ' EFE                 EFE ', '  E                   E  ', '                         ', '                         ', '                         ', '                         ', '                         ', '                         ', '                         ', '  E         E         E  ', ' EFE       EFE       EFE ', '  E         E         E  ', '                         ')
            .aisle('     GGHHHHJJJHHHHGG     ', '                         ', '  F                   F  ', '                         ', '                         ', '                         ', '                         ', '                         ', '                         ', '                         ', '                         ', '                         ', '  F         F         F  ', '                         ', '                         ')
            .aisle('     GGGGHHHHHHHGGGG     ', '  E                   E  ', ' EFE                 EFE ', '  E                   E  ', '                         ', '                         ', '                         ', '                         ', '                         ', '                         ', '                         ', '  E         E         E  ', ' EFE       EFE       EFE ', '  E         E         E  ', '                         ')
            .aisle('      GGGGGHIHGGGGG      ', '  E                   E  ', ' EFE                 EFE ', '  E                   E  ', '                         ', '                         ', '                         ', '                         ', '                         ', '                         ', '                         ', '  E         E         E  ', ' EFE       EFE       EFE ', '  E         E         E  ', '                         ')
            .aisle(' BBB    GGGBBBGGG    BBB ', 'BCCCB     B   B     BCCCB', 'BCFCB     B   B     BCFCB', 'BCCCB     B   B     BCCCB', ' BBB       BBB       BBB ', '                         ', '                         ', '                         ', '                         ', '                         ', ' BBB       BBB       BBB ', 'BCCCB     BCCCB     BCCCB', 'BCFCB     BCFCB     BCFCB', 'BCCCB     BCCCB     BCCCB', ' BBB       BBB       BBB ')
            .aisle('BCCCB     BCCCB     BCCCB', ' DDDC     C   C     CDDD ', ' DFDCEE EEC   CEE EECDFD ', ' DDDC     C   C     CDDD ', 'BCCCB     BCCCB     BCCCB', '  E         E         E  ', '  E         E         E  ', '                         ', '  E         E         E  ', '  E         E         E  ', 'BCCCB     BCCCB     BCCCB', ' DDDC     CDDDC     CDDD ', ' DFDCEE EECDFDCEE EECDFD ', ' DDDC     CDDDC     CDDD ', 'B   B     B   B     B   B')
            .aisle('BCCCB     BCCCB     BCCCB', ' DFDCEE EEC   CEE EECDFD ', ' DFFFFFFFFC   CFFFFFFFFD ', ' DFDCEE EEC   CEE EECDFD ', 'BCFCB     BCCCB     BCFCB', ' EFE       EFE       EFE ', ' EFE       EFE       EFE ', '  F         F         F  ', ' EFE       EFE       EFE ', ' EFE       EFE       EFE ', 'BCFCB     BCFCB     BCFCB', ' DFDCEE EECDFDCEE EECDFD ', ' DFFFFFFFFFFFFFFFFFFFFFD ', ' DDDCEE EECDDDCEE EECDDD ', 'B   B     B   B     B   B')
            .aisle('BCCCB     BCCCB     BCCCB', ' DDDC     C   C     CDDD ', ' DDDCEE EEC   CEE EECDDD ', ' DDDC     C   C     CDDD ', 'BCCCB     BCCCB     BCCCB', '  E         E         E  ', '  E         E         E  ', '                         ', '  E         E         E  ', '  E         E         E  ', 'BCCCB     BCCCB     BCCCB', ' DDDC     CDDDC     CDDD ', ' DDDCEE EECDDDCEE EECDDD ', ' DDDC     CDDDC     CDDD ', 'B   B     B   B     B   B')
            .aisle(' BBB       BBB       BBB ', 'B   B     B   B     B   B', 'B   B     B   B     B   B', 'B   B     B   B     B   B', ' BBB       BBB       BBB ', '                         ', '                         ', '                         ', '                         ', '                         ', ' BBB       BBB       BBB ', 'B   B     B   B     B   B', 'B   B     B   B     B   B', 'B   B     B   B     B   B', ' BBB       BBB       BBB ')
                .where('B', Predicates.blocks('kubejs:enderium_casing'))
                .where(' ', Predicates.any())
                .where(
                    'C',
                    Predicates.blocks('kubejs:prismalium_casing')
                        .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                        .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                )
                .where('D', Predicates.blocks('gtceu:trinium_coil_block'))
                .where('E', Predicates.blocks('gtceu:atomic_casing'))
                .where('F', Predicates.blocks('kubejs:dragonsteel_casing'))
                .where('G', Predicates.blocks('gtceu:fusion_glass'))
                .where('H', Predicates.blocks('kubejs:enriched_naquadah_machine_casing'))
                .where('I', Predicates.blocks('kubejs:enriched_naquadah_pipe_casing'))
                .where('J', Predicates.blocks('kubejs:enriched_naquadah_heat_escape_casing'))
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/superconductors/casing_prismalium',
            'gtceu:block/multiblock/implosion_compressor'
        );
});
