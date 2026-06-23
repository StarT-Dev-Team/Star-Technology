GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('dual_chambered_vacuum_complex', 'multiblock')
        .machine((holder) => new $VacuumChemicalReactorMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .paginatedTooltips([
            [
                Text.translate('block.gtceu.vacuum_chemical_reaction_chamber.p1.0'),
                Text.translate('block.gtceu.vacuum_chemical_reaction_chamber.p1.1'),
                Text.translate('block.gtceu.vacuum_chemical_reaction_chamber.p1.2'),
                Text.translate('block.gtceu.vacuum_chemical_reaction_chamber.p1.3'),
                Text.translate('block.gtceu.vacuum_chemical_reaction_chamber.p1.4'),
                Text.translate('block.start_core.breaker_line'),
                Text.translate('block.gtceu.vacuum_chemical_reaction_chamber.p1.5'),
                Text.translate('block.start_core.breaker_line'),
                Text.translate('block.gtceu.dual_chambered_vacuum_complex.p1.1'),
            ],
        ])
        .recipeType('vacuum_chemical_reaction_chamber')
        .recipeModifiers([
            GTRecipeModifiers.OC_NON_PERFECT,
            $StarTRecipeModifiers.VACUUM_CHEMICAL_REACTION_CHAMBER,
            $StarTRecipeModifiers.THROUGHPUT_BOOSTING,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('kubejs:enriched_naquadah_machine_casing'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                '     BBBBB     |     C   C     |     C   C     |     C   C     |     BBBBB     |               |               |               ',
                '     BBBBBBBBB |      DDD    C |      DED    C |      DDD    C |     BBBBBBBBB |       F       |               |               ',
                'CCBCCBBBBBBBBBB|C   C DDD DDDDC|B   B GHG DGGDC|C   C DDD DDDDC|CCBCCBBBBBBBBBB|      FFF  FFF |               |               ',
                'CBBBCBBBBBBBBBB|B   B DDD DDDD |B   B GHG D  D |B   B DHD DHHD |CBBBCBBHBBBBHBB|  F   FHFFFFHF |       H    H  |       HHHHHH  ',
                'BBBBBBBBBBBBBBB|BDDDD DDD DDDD | DIDD GHG EDDD |BDDDD DDD DDDD |BBBBBBBBBBBBBBB|  F   FFF  FFF |               |               ',
                'BBBBBBBBBBBBBBB| DDDD DDD DDDDB| DDDE GHG DDID | DDDD DDD DDDDB|BBBBBBBBBBBBBBB| FFF  FFF   F  |               |               ',
                'BBBBBBBBBBCBBBC| DDDD DDD B   B| D  D GHG B   B| DHHD DHD B   B|BBHBBBBHBBCBBBC| FHFFFFHF   F  |  H    H       |  HHHHHH       ',
                'BBBBBBBBBBCCBCC|CDDDD DDD C   C|CDGGD GHG B   B|CDDDD DDD C   C|BBBBBBBBBBCCBCC| FFF  FFF      |               |               ',
                ' BBBBBBBBB     | C    DDD      | C    DDD      | C    DDD      | BBBBBBBBB     |       F       |               |               ',
                '     BBBBB     |     C B C     |     C @ C     |     C B C     |     BBBBB     |               |               |               ',
            ])
                .whereDict({
                    ' ': P.any(),
                    B: P.anyOf([
                        P.kjsBlock('enriched_naquadah_machine_casing'),
                        P.ability(PA.fluidIn, { max: 8, prev: 1 }),
                        P.ability(PA.fluidOut, { max: 2, prev: 1 }),
                        P.ability(PA.itemIn, { max: 2, prev: 1 }),
                        P.ability(PA.itemOut, { max: 2, prev: 1 }),
                        P.ability(PA.euIn, { max: 2, prev: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                        P.ability(PA.variadicsInterface, { max: 4, prev: 1 }),
                    ]),
                    C: P.gtBlock('naquadah_alloy_frame'),
                    D: P.kjsBlock('polycarbonate_casing'),
                    E: P.gtBlock('molybdenum_disilicide_coil_block'),
                    F: P.kjsBlock('enriched_naquadah_firebox_casing'),
                    G: P.kjsBlock('reinforced_fusion_glass'),
                    H: P.kjsBlock('enriched_naquadah_pipe_casing'),
                    I: P.vacuumPumps(),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel('kubejs:block/casings/naquadah/casing', 'gtceu:block/machines/chemical_reactor');
});
