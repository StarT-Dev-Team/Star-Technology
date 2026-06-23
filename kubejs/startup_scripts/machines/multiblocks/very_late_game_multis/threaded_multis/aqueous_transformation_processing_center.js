GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    // prettier-ignore
    event
        .create('aqueous_transformation_processing_center', 'multiblock')
        .machine((holder) => new $StarTThreadingCapableMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .tooltips([Text.translate('block.start_core.gap'), Text.translate('block.kubejs.threading.tooltip')])
        .recipeTypes(['extractor', 'canner', 'fluid_solidifier'])
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            $StarTRecipeModifiers.THREADING_MACHINE,
            $StarTRecipeModifiers.BULK_PROCESSING,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('kubejs:subatomically_secure_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('                   ', '  BBB              ', ' BBBBB             ', ' BBKBB             ', ' BBBBB             ', '  BBB              ', '                   ', '                   ', '                   ') 
            .aisle(' BBBBB             ', 'BBBBBBB            ', 'BBBBBBB            ', 'BBBBBBB            ', 'BBBBBBB            ', 'BBBBBBB            ', ' BBBBB             ', '                   ', '                   ') 
            .aisle('  BBB              ', ' BBCBB             ', 'B     B            ', 'D  E  B            ', 'B     B            ', ' BBBBB             ', '  BBB              ', '                   ', '                   ') 
            .aisle('  BBB       BBB    ', ' BBCBB      BBB    ', 'B     B     BBB    ', 'D  E  B            ', 'B     B            ', ' BBBBB             ', '  BBB              ', '                   ', '                   ') 
            .aisle('  BBB     BBBBBBB  ', ' BBCBB     FGGGF   ', 'B     B   BBBBBBB  ', 'D  E  B     BDB    ', 'B     B     BDB    ', ' BBBBB      BDB    ', '  BBB       BDB    ', '            BBB    ', '                   ') 
            .aisle('  BBB    BBBBBBBBB ', ' BBCBB    GBGGGBG  ', 'B     BB BBB   BBB ', 'D  E  BB  BD   DB  ', 'B     BB  BD   DB  ', ' BBBBB    BD   DB  ', '  BBB     BD   DB  ', '           BBBBB   ', '            BBB    ') 
            .aisle('BBBBBBB  BBBBBBBBB ', 'BBBCBBB  FBGGGGGBF ', 'B     BBBBB  E  BB ', 'D  E  BBBBB  E  D  ', 'B     BBBBB  E  D  ', 'BBBBBBB   B  E  D  ', 'BBBBBBB   B  E  D  ', '          BBGGGBB  ', '           BBBBB   ') 
            .aisle('H BBB H  BBBBBBBBBB', ' BBCBBBBBBGGGCGGGGB', 'B        I       BB', 'D  E     I       B ', 'B        I       B ', ' BBBBBBBBB       B ', 'H BBB H  B       B ', '         BBGGGGGBB ', '          BBBBBBB  ') 
            .aisle('H BBB H  BBBBBBBBBB', ' BBCBBBBBBGGCCCGGGB', 'B        I E   E BB', 'D  EEEEEEI E   E D ', 'B        I E   E D ', ' BBBBBBBBB E   E D ', 'H BBBBBBBB E   E D ', '         BBGGGGGBB ', '          BBBBBBB  ') 
            .aisle('H BBB H  BBBBBBBBBB', ' BBCBBBBBBGGGCGGGGB', 'B        I       BB', 'D  E     I       B ', 'B        I       B ', ' BBBBBBBBB       B ', 'H BBB H  B       B ', '         BBGGGGGBB ', '          BBBBBBB  ') 
            .aisle('BBBBBBB  BBBBBBBBB ', 'BBBCBBB  FBGGGGGBF ', 'B     BBBBB  E  BB ', 'D  E  BBBBB  E  D  ', 'B     BBBBB  E  D  ', 'BBBBBBB   B  E  D  ', 'BBBBBBB   B  E  D  ', '          BBGGGBB  ', '           BBBBB   ') 
            .aisle('  BBB    BBBBBBBBB ', ' BBCBB    GBGGGBG  ', 'B     BB BBB   BBB ', 'D  E  BB  BD   DB  ', 'B     BB  BD   DB  ', ' BBBBB    BD   DB  ', '  BBB     BD   DB  ', '           BBBBB   ', '            BBB    ') 
            .aisle('  BBB     BBBBBBB  ', ' BBCBB     FGGGF   ', 'B     B   BBBBBBB  ', 'D  E  B     BDB    ', 'B     B     BDB    ', ' BBBBB      BDB    ', '  BBB       BDB    ', '            BBB    ', '                   ') 
            .aisle('  BBB       BBB    ', ' BBCBB      BBB    ', 'B     B     BBB    ', 'D  E  B            ', 'B     B            ', ' BBBBB             ', '  BBB              ', '                   ', '                   ') 
            .aisle('  BBB              ', ' BBCBB             ', 'B     B            ', 'D  E  B            ', 'B     B            ', ' BBBBB             ', '  BBB              ', '                   ', '                   ') 
            .aisle(' BBBBB             ', 'BBBBBBB            ', 'BBBJBBB            ', 'BBJEJBB            ', 'BBBJBBB            ', 'BBBBBBB            ', ' BBBBB             ', '                   ', '                   ') 
            .aisle('                   ', '  BBB              ', ' BBBBB             ', ' BB@BB             ', ' BBBBB             ', '  BBB              ', '                   ', '                   ', '                   ') 
                .where(' ', P.any())
                .where(
                    'B',
                    P.kjsBlock('subatomically_secure_casing')
                        .or(P.ability(PA.itemIn).setPreviewCount(0).setMaxGlobalLimited(20))
                        .or(P.ability(PA.itemOut).setPreviewCount(0).setMaxGlobalLimited(20))
                        .or(P.ability(PA.fluidIn).setPreviewCount(0).setMaxGlobalLimited(20))
                        .or(P.ability(PA.fluidOut).setPreviewCount(0).setMaxGlobalLimited(20))
                        .or(P.ability(PA.parallelHatch, {max:1}))
                        .or(P.ability(PA.euIn).setMaxGlobalLimited(2))
                        .or(P.ability(PA.maintenance, {exact:1}))
                )
                .where('C', P.kjsBlock('rhenotax_coil'))
                .where('D', P.kjsBlock('draco_resilient_fusion_glass'))
                .where('E', P.kjsBlock('nyanium_pipe_casing'))
                .where('F', $StarTThreadingStatBlocks.threadingStatBlocks())
                .where('G', P.kjsBlock('nyanium_machine_casing'))
                .where('H', P.gtBlock('abyssal_alloy_frame'))
                .where('I', P.kjsBlock('nyanium_heat_escape_casing'))
                .where('J', P.kjsBlock('nyanium_firebox_casing'))
                .where('K', P.block('start_core:threading_controller'))
                .where('@', P.controller(definition))
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/threading/subatomically_secure_casing',
            'gtceu:block/machines/fluid_solidifier'
        );
});
