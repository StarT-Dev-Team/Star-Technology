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
    event
        .create('stargate_component_assembly', 'multiblock')
        .machine((holder) => new $LayeredWorkableElectricMultiblockMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('stargate_component_assembly')
        .recipeModifiers([GTRecipeModifiers.OC_PERFECT])
        .appearanceBlock(() => Block.getBlock('kubejs:prismalium_casing'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                ' BBB       BBB       BBB |B   B     B   B     B   B|B   B     B   B     B   B|B   B     B   B     B   B| BBB       BBB       BBB |                         |                         |                         |                         |                         | BBB       BBB       BBB |B   B     B   B     B   B|B   B     B   B     B   B|B   B     B   B     B   B| BBB       BBB       BBB ',
                'BCCCB     BCCCB     BCCCB| DDDC     CDDDC     CDDD | DDDCEE EECDDDCEE EECDDD | DDDC     CDDDC     CDDD |BCCCB     BCCCB     BCCCB|  E         E         E  |  E         E         E  |                         |  E         E         E  |  E         E         E  |BCCCB     BCCCB     BCCCB| DDDC     CDDDC     CDDD | DDDCEE EECDDDCEE EECDDD | DDDC     CDDDC     CDDD |B   B     B   B     B   B',
                'BCCCB     BCCCB     BCCCB| DFDCEE EECDFDCEE EECDFD | DFFFFFFFFFFFFFFFFFFFFFD | DFDCEE EECDFDCEE EECDFD |BCFCB     BCFCB     BCFCB| EFE       EFE       EFE | EFE       EFE       EFE |  F         F         F  | EFE       EFE       EFE | EFE       EFE       EFE |BCFCB     BCFCB     BCFCB| DFDCEE EECDFDCEE EECDFD | DFFFFFFFFFFFFFFFFFFFFFD | DDDCEE EECDDDCEE EECDDD |B   B     B   B     B   B',
                'BCCCB     BCCCB     BCCCB| DDDC     CDDDC     CDDD | DFDCEE EECDDDCEE EECDFD | DDDC     CDDDC     CDDD |BCCCB     BCCCB     BCCCB|  E         E         E  |  E         E         E  |                         |  E         E         E  |  E         E         E  |BCCCB     BCCCB     BCCCB| DDDC     CDDDC     CDDD | DFDCEE EECDFDCEE EECDFD | DDDC     CDDDC     CDDD |B   B     B   B     B   B',
                ' BBB     GGBBBGG     BBB |BCCCB     B   B     BCCCB|BCFCB     B   B     BCFCB|BCCCB     B   B     BCCCB| BBB       BBB       BBB |                         |                         |                         |                         |                         | BBB       BBB       BBB |BCCCB     BCCCB     BCCCB|BCFCB     BCFCB     BCFCB|BCCCB     BCCCB     BCCCB| BBB       BBB       BBB ',
                '      GGGGGHIHGGGGG      |  E                   E  | EFE                 EFE |  E                   E  |                         |                         |                         |                         |                         |                         |                         |  E         E         E  | EFE       EFE       EFE |  E         E         E  |                         ',
                '     GGGGHHHHHHHGGGG     |  E                   E  | EFE                 EFE |  E                   E  |                         |                         |                         |                         |                         |                         |                         |  E         E         E  | EFE       EFE       EFE |  E         E         E  |                         ',
                '     GGHHHHJJJHHHHGG     |                         |  F                   F  |                         |                         |                         |                         |                         |                         |                         |                         |                         |  F         F         F  |                         |                         ',
                '     GGHJJHJJJHJJHGG     |  E                   E  | EFE                 EFE |  E                   E  |                         |                         |                         |                         |                         |                         |                         |  E         E         E  | EFE       EFE       EFE |  E         E         E  |                         ',
                '    GGHHJJHHHHHJJHHGG    |  E                   E  | EFE                 EFE |  E                   E  |                         |                         |                         |                         |                         |                         |                         |  E         E         E  | EFE       EFE       EFE |  E         E         E  |                         ',
                ' BBBGGHHHHHBBBHHHHHGGBBB |BCCCB               BCCCB|BCFCB               BCFCB|BCCCB               BCCCB| BBB                 BBB |                         |                         |                         |                         |                         | BBB       BBB       BBB |BCCCB     BCCCB     BCCCB|BCFCB     BCFCB     BCFCB|BCCCB     BCCCB     BCCCB| BBB       BBB       BBB ',
                'BCCCBHHJJHBCCCBHJJHHBCCCB| DDD       BBB       DDD | DFD        B        DFD | DDD                 DDD |BCCCB               BCCCB|  E                   E  |  E                   E  |                         |  E         B         E  |  E        BBB        E  |BCCCB     BCCCB     BCCCB| DDDC     CDDDC     CDDD | DFDCEE EECDFDCEE EECDFD | DDDC     CDDDC     CDDD |B   B     B   B     B   B',
                'BCCCBIHJJHBCCCBHJJHIBCCCB| DFD       BFB       DFD | DFD       BFB       DFD | DFD        E        DFD |BCFCB       I       BCFCB| EFE        @        EFE | EFE        I        EFE |  F         E         F  | EFE       BFB       EFE | EFE       BFB       EFE |BCFCB     BCFCB     BCFCB| DFDCEE EECDFDCEE EECDFD | DFFFFFFFFFFFFFFFFFFFFFD | DDDCEE EECDDDCEE EECDDD |B   B     B   B     B   B',
                'BCCCBHHJJHBCCCBHJJHHBCCCB| DDD       BBB       DDD | DFD        B        DFD | DDD                 DDD |BCCCB               BCCCB|  E                   E  |  E                   E  |                         |  E         B         E  |  E        BBB        E  |BCCCB     BCCCB     BCCCB| DDDC     CDDDC     CDDD | DFDCEE EECDFDCEE EECDFD | DDDC     CDDDC     CDDD |B   B     B   B     B   B',
                ' BBBGGHHHHHBBBHHHHHGGBBB |BCCCB               BCCCB|BCFCB               BCFCB|BCCCB               BCCCB| BBB                 BBB |                         |                         |                         |                         |                         | BBB       BBB       BBB |BCCCB     BCCCB     BCCCB|BCFCB     BCFCB     BCFCB|BCCCB     BCCCB     BCCCB| BBB       BBB       BBB ',
                '    GGHHJJHHHHHJJHHGG    |  E                   E  | EFE                 EFE |  E                   E  |                         |                         |                         |                         |                         |                         |                         |  E         E         E  | EFE       EFE       EFE |  E         E         E  |                         ',
                '     GGHJJHJJJHJJHGG     |  E                   E  | EFE                 EFE |  E                   E  |                         |                         |                         |                         |                         |                         |                         |  E         E         E  | EFE       EFE       EFE |  E         E         E  |                         ',
                '     GGHHHHJJJHHHHGG     |                         |  F                   F  |                         |                         |                         |                         |                         |                         |                         |                         |                         |  F         F         F  |                         |                         ',
                '     GGGGHHHHHHHGGGG     |  E                   E  | EFE                 EFE |  E                   E  |                         |                         |                         |                         |                         |                         |                         |  E         E         E  | EFE       EFE       EFE |  E         E         E  |                         ',
                '      GGGGGHIHGGGGG      |  E                   E  | EFE                 EFE |  E                   E  |                         |                         |                         |                         |                         |                         |                         |  E         E         E  | EFE       EFE       EFE |  E         E         E  |                         ',
                ' BBB    GGGBBBGGG    BBB |BCCCB     B   B     BCCCB|BCFCB     B   B     BCFCB|BCCCB     B   B     BCCCB| BBB       BBB       BBB |                         |                         |                         |                         |                         | BBB       BBB       BBB |BCCCB     BCCCB     BCCCB|BCFCB     BCFCB     BCFCB|BCCCB     BCCCB     BCCCB| BBB       BBB       BBB ',
                'BCCCB     BCCCB     BCCCB| DDDC     C   C     CDDD | DFDCEE EEC   CEE EECDFD | DDDC     C   C     CDDD |BCCCB     BCCCB     BCCCB|  E         E         E  |  E         E         E  |                         |  E         E         E  |  E         E         E  |BCCCB     BCCCB     BCCCB| DDDC     CDDDC     CDDD | DFDCEE EECDFDCEE EECDFD | DDDC     CDDDC     CDDD |B   B     B   B     B   B',
                'BCCCB     BCCCB     BCCCB| DFDCEE EEC   CEE EECDFD | DFFFFFFFFC   CFFFFFFFFD | DFDCEE EEC   CEE EECDFD |BCFCB     BCCCB     BCFCB| EFE       EFE       EFE | EFE       EFE       EFE |  F         F         F  | EFE       EFE       EFE | EFE       EFE       EFE |BCFCB     BCFCB     BCFCB| DFDCEE EECDFDCEE EECDFD | DFFFFFFFFFFFFFFFFFFFFFD | DDDCEE EECDDDCEE EECDDD |B   B     B   B     B   B',
                'BCCCB     BCCCB     BCCCB| DDDC     C   C     CDDD | DDDCEE EEC   CEE EECDDD | DDDC     C   C     CDDD |BCCCB     BCCCB     BCCCB|  E         E         E  |  E         E         E  |                         |  E         E         E  |  E         E         E  |BCCCB     BCCCB     BCCCB| DDDC     CDDDC     CDDD | DDDCEE EECDDDCEE EECDDD | DDDC     CDDDC     CDDD |B   B     B   B     B   B',
                ' BBB       BBB       BBB |B   B     B   B     B   B|B   B     B   B     B   B|B   B     B   B     B   B| BBB       BBB       BBB |                         |                         |                         |                         |                         | BBB       BBB       BBB |B   B     B   B     B   B|B   B     B   B     B   B|B   B     B   B     B   B| BBB       BBB       BBB ',
            ])
                .whereDict({
                    B: P.kjsBlock('enderium_casing'),
                    ' ': P.any(),
                    C: P.anyOf([
                        P.kjsBlock('prismalium_casing'),
                        P.autoAbilities(definition.getRecipeTypes()),
                        P.ability(PA.maintenance, { exact: 1 }),
                    ]),
                    D: P.gtBlock('trinium_coil_block'),
                    E: P.gtBlock('atomic_casing'),
                    F: P.kjsBlock('dragonsteel_casing'),
                    G: P.gtBlock('fusion_glass'),
                    H: P.kjsBlock('enriched_naquadah_machine_casing'),
                    I: P.kjsBlock('enriched_naquadah_pipe_casing'),
                    J: P.kjsBlock('enriched_naquadah_heat_escape_casing'),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/superconductors/casing_prismalium',
            'gtceu:block/multiblock/implosion_compressor'
        );
});
