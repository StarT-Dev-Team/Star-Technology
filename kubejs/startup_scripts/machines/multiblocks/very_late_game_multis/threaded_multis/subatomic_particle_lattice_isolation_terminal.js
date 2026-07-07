GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('subatomic_particle_lattice_isolation_terminal', 'multiblock')
        .machine((holder) => new $BulkingThreadedMulti(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .tooltips([Text.translate('block.start_core.gap'), Text.translate('block.kubejs.threading.tooltip')])
        .recipeTypes(['cutter', 'lathe', 'wiremill', 'extruder'])
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            $StarTRecipeModifiers.THREADING_MACHINE,
            $StarTRecipeModifiers.BULKING,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('kubejs:inoculated_nuclei_seperation_casing'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                '      BBBBBBBBB      |      BBBBBBBBB      |      BBB   BBB      |      BBB   BBB      |      BBB   BBB      |      BBBBBBBBB      |                     ',
                ' BBBBBBBBBBBBBBBBBBB | BBBBBBBBBBBBBBBBBBB | B   BBBBCDCBBBB   B | B   BBBBDEDBBBB   B | B   BBBBCDCBBBB   B | BBBBBBBBBBBBBBBBBBB |       BBBBBBB       ',
                'BBBBBBBBBBBBBBBBBBBBB|BBBBBBBBBBFBBBBBBBBBB|BBGGGBBBBBFBBBBBGGGBB|BBGGGBBBFFFFFBBBGGGBB|BBGGGBBBBBFBBBBBGGGBB|BBBBBBBBBBFBBBBBBBBBB|  BBBBBBBBBBBBBBBBB  ',
                'BBBBBBBBBBBBBBBBBBBBB|BBDDDBBBBBBBBBBBDDDBB|BB   BBBBBBBBBBB   BB|BB   BFFFBFBFFFB   BB|BB   BBBBBBBBBBB   BB|BBBBBBBBBBBBBBBBBBBBB| BBBBBBBBBBBBBBBBBBB ',
                'BBBBBBBBBBBBBBBBBBBBB|BBFFFBBBBBBBBBBBFFFBB| CHHHBBBBBBBBBBBHHHC | D   DFBBBFBBBFD   D | CHHHBBBBBBBBBBBHHHC |BBBBBBBBBBBBBBBBBBBBB| BBBBBBBBBBBBBBBBBBB ',
                'BBBBBBBBBBBBBBBBBBBBB|BBFFFFFBBBBBBBFFFFFBB| DHHHBFBBBBBBBFBHHHD | D   DFFFFFFFFFD   D | DHHHBFBBBBBBBFBHHHD |BBBBBFFBBBBBBBFFBBBBB| BBBBBBBBBBBBBBBBBBB ',
                'BBBBBBBBBBBBBBBBBBBBB|BBFFFBBBBBBBBBBBFFFBB| CHHHBBBBBBBBBBBHHHC | D   DFBBBFBBBFD   D | CHHHBBBBBBBBBBBHHHC |BBBBBBBBBBBBBBBBBBBBB| BBBBBBBBBBBBBBBBBBB ',
                'BBBBBBBBBBBBBBBBBBBBB|BBDDDBBBBBBBBBBBDDDBB|BB   BBBBBBBBBBB   BB|BB   BFFFBFBFFFB   BB|BB   BBBBBBBBBBB   BB|BBDDDBBBBBBBBBBBDDDBB| BBBBBBBBBBBBBBBBBBB ',
                'BBBBBBBBBBBBBBBBBBBBB|BBBBBBBBBBFBBBBBBBBBB|BBGGGBBBBBFBBBBBGGGBB|BBGGGBBBFFFFFBBBGGGBB|BBGGGBBBBBFBBBBBGGGBB|BBBBBBBBBBFBBBBBBBBBB|  BBBBBBBBBBBBBBBBB  ',
                ' BBBBBBBBBBBBBBBBBBB | BBBBBBBBBBBBBBBBBBB | B   BBBBBBBBBBB   B | B   BBBBB@BBBBB   B | B   BBBBBBBBBBB   B | BBBBBBBBBBBBBBBBBBB |       BBBBBBB       ',
                '      BBBBBBBBB      |      BBBBBBBBB      |      BBB   BBB      |      BBB   BBB      |      BBB   BBB      |      BBBBBBBBB      |                     ',
            ])
                .whereDict({
                    A: P.block('minecraft:stone'),
                    ' ': P.any(),
                    B: P.anyOf([
                        P.kjsBlock('inoculated_nuclei_seperation_casing'),
                        P.ability(PA.itemIn, { max: 20, view: 1 }),
                        P.ability(PA.itemOut, { max: 20, view: 1 }),
                        P.ability(PA.fluidIn, { max: 20, view: 1 }),
                        P.ability(PA.parallelHatch, { max: 1 }),
                        P.ability(PA.euIn, { max: 2, view: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                    ]),
                    C: P.threadingBlocks(),
                    D: P.kjsBlock('draco_assembly_grating'),
                    E: P.coreBlock('threading_controller'),
                    F: P.kjsBlock('nyanium_pipe_casing'),
                    G: P.kjsBlock('draco_resilient_fusion_glass'),
                    H: P.kjsBlock('nuclei_seperators'),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/threading/inoculated_nuclei_seperation_casing',
            'gtceu:block/machines/cutter'
        );
});
