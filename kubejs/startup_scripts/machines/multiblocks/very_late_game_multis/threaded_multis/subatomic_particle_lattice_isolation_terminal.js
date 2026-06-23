GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    // prettier-ignore
    event
        .create('subatomic_particle_lattice_isolation_terminal', 'multiblock')
        .machine((holder) => new $StarTThreadingCapableMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .tooltips([Text.translate('block.start_core.gap'), Text.translate('block.kubejs.threading.tooltip')])
        .recipeTypes(['cutter', 'lathe', 'wiremill', 'extruder'])
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            $StarTRecipeModifiers.THREADING_MACHINE,
            $StarTRecipeModifiers.BULK_PROCESSING,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('kubejs:inoculated_nuclei_seperation_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('      BBBBBBBBB      ', '      BBBBBBBBB      ', '      BBB   BBB      ', '      BBB   BBB      ', '      BBB   BBB      ', '      BBBBBBBBB      ', '                     ') 
            .aisle(' BBBBBBBBBBBBBBBBBBB ', ' BBBBBBBBBBBBBBBBBBB ', ' B   BBBBCDCBBBB   B ', ' B   BBBBDEDBBBB   B ', ' B   BBBBCDCBBBB   B ', ' BBBBBBBBBBBBBBBBBBB ', '       BBBBBBB       ') 
            .aisle('BBBBBBBBBBBBBBBBBBBBB', 'BBBBBBBBBBFBBBBBBBBBB', 'BBGGGBBBBBFBBBBBGGGBB', 'BBGGGBBBFFFFFBBBGGGBB', 'BBGGGBBBBBFBBBBBGGGBB', 'BBBBBBBBBBFBBBBBBBBBB', '  BBBBBBBBBBBBBBBBB  ') 
            .aisle('BBBBBBBBBBBBBBBBBBBBB', 'BBDDDBBBBBBBBBBBDDDBB', 'BB   BBBBBBBBBBB   BB', 'BB   BFFFBFBFFFB   BB', 'BB   BBBBBBBBBBB   BB', 'BBBBBBBBBBBBBBBBBBBBB', ' BBBBBBBBBBBBBBBBBBB ') 
            .aisle('BBBBBBBBBBBBBBBBBBBBB', 'BBFFFBBBBBBBBBBBFFFBB', ' CHHHBBBBBBBBBBBHHHC ', ' D   DFBBBFBBBFD   D ', ' CHHHBBBBBBBBBBBHHHC ', 'BBBBBBBBBBBBBBBBBBBBB', ' BBBBBBBBBBBBBBBBBBB ') 
            .aisle('BBBBBBBBBBBBBBBBBBBBB', 'BBFFFFFBBBBBBBFFFFFBB', ' DHHHBFBBBBBBBFBHHHD ', ' D   DFFFFFFFFFD   D ', ' DHHHBFBBBBBBBFBHHHD ', 'BBBBBFFBBBBBBBFFBBBBB', ' BBBBBBBBBBBBBBBBBBB ') 
            .aisle('BBBBBBBBBBBBBBBBBBBBB', 'BBFFFBBBBBBBBBBBFFFBB', ' CHHHBBBBBBBBBBBHHHC ', ' D   DFBBBFBBBFD   D ', ' CHHHBBBBBBBBBBBHHHC ', 'BBBBBBBBBBBBBBBBBBBBB', ' BBBBBBBBBBBBBBBBBBB ') 
            .aisle('BBBBBBBBBBBBBBBBBBBBB', 'BBDDDBBBBBBBBBBBDDDBB', 'BB   BBBBBBBBBBB   BB', 'BB   BFFFBFBFFFB   BB', 'BB   BBBBBBBBBBB   BB', 'BBDDDBBBBBBBBBBBDDDBB', ' BBBBBBBBBBBBBBBBBBB ') 
            .aisle('BBBBBBBBBBBBBBBBBBBBB', 'BBBBBBBBBBFBBBBBBBBBB', 'BBGGGBBBBBFBBBBBGGGBB', 'BBGGGBBBFFFFFBBBGGGBB', 'BBGGGBBBBBFBBBBBGGGBB', 'BBBBBBBBBBFBBBBBBBBBB', '  BBBBBBBBBBBBBBBBB  ') 
            .aisle(' BBBBBBBBBBBBBBBBBBB ', ' BBBBBBBBBBBBBBBBBBB ', ' B   BBBBBBBBBBB   B ', ' B   BBBBB@BBBBB   B ', ' B   BBBBBBBBBBB   B ', ' BBBBBBBBBBBBBBBBBBB ', '       BBBBBBB       ') 
            .aisle('      BBBBBBBBB      ', '      BBBBBBBBB      ', '      BBB   BBB      ', '      BBB   BBB      ', '      BBB   BBB      ', '      BBBBBBBBB      ', '                     ') 
                .where('A', P.block('minecraft:stone'))
                .where(' ', P.any())
                .where(
                    'B',
                    P.kjsBlock('inoculated_nuclei_seperation_casing')
                        .or(P.ability(PA.itemIn).setPreviewCount(0).setMaxGlobalLimited(20))
                        .or(P.ability(PA.itemOut).setPreviewCount(0).setMaxGlobalLimited(20))
                        .or(P.ability(PA.fluidIn).setPreviewCount(0).setMaxGlobalLimited(20))
                        .or(P.ability(PA.parallelHatch, {max:1}))
                        .or(P.ability(PA.euIn).setMaxGlobalLimited(2))
                        .or(P.ability(PA.maintenance, {exact:1}))
                )
                .where('C', $StarTThreadingStatBlocks.threadingStatBlocks())
                .where('D', P.kjsBlock('draco_assembly_grating'))
                .where('E', P.block('start_core:threading_controller'))
                .where('F', P.kjsBlock('nyanium_pipe_casing'))
                .where('G', P.kjsBlock('draco_resilient_fusion_glass'))
                .where('H', P.kjsBlock('nuclei_seperators'))
                .where('@', P.controller(definition))
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/threading/inoculated_nuclei_seperation_casing',
            'gtceu:block/machines/cutter'
        );
});
