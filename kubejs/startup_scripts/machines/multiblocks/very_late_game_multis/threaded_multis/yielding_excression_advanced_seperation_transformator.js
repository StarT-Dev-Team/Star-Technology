GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    // prettier-ignore
    event
        .create('yielding_excression_advanced_seperation_transformator', 'multiblock')
        .machine((holder) => new $StarTThreadingCapableMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .tooltips([Text.translate('block.start_core.gap'), Text.translate('block.kubejs.threading.tooltip')])
        .recipeTypes(['distillation_tower', 'distillery', 'brewery', 'fermenter', 'fluid_heater'])
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            $StarTRecipeModifiers.THREADING_MACHINE,
            $StarTRecipeModifiers.BULK_PROCESSING,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('kubejs:quantumly_resistant_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('   BBBBB         ', '   BBBBB         ', '   BBBBB         ', '   BBBBB         ', '   BBBBB         ', '   BBBBB         ', '   BBBBB         ', '   BBBBB         ', '   BBBBB         ', '   BBBBB         ', '                 ', '                 ')
            .aisle(' BBBBBBBBB       ', ' BBBCCCBBB       ', ' BBBCDCBBB       ', '   BCDCB         ', ' BBBCDCBBB       ', ' BBBCCCBBB       ', ' BBBCDCBBB       ', '   BCCCB         ', ' BBBCDCBBB       ', ' BBBCCCBBB       ', '    BBB          ', '                 ')
            .aisle(' BBBBBBBBB       ', ' BCC D CCB       ', ' BCD   DCB       ', '  EC D CE        ', ' BCD   DCB       ', ' BCC D CCB       ', ' BCD   DCB       ', '  EC   CE        ', ' BCD   DCB       ', ' BCC C CCB       ', '  BBBBBBB        ', '                 ')
            .aisle('BBBBBBBBBBB      ', 'BBC DCD CBB      ', 'BBD  C  DBB      ', 'BBC DCD CBB      ', 'BBD  C  DBB      ', 'BBC DCD CBB      ', 'BBD  C  DBB      ', 'BBC  C  CBB      ', 'BBD  C  DBB      ', 'BBC  C  CBB      ', '  BB D BB        ', '    BBB          ')
            .aisle('BBBBBBBBBBB  BBB ', 'BC DCDCD CB  BBB ', 'BC  D D  CB  BBB ', 'BC DCDCD CB  BBB ', 'BC  D D  CB  BBB ', 'BC DCDCD CB  BBB ', 'BC       CB  BBB ', 'BC       CB   B  ', 'BC   C   CB      ', 'BC       CB      ', ' BB     BB       ', '   BBBBB         ')
            .aisle('BBBBBBBBBBB BBBBB', 'BCDCDCDCDCB BBDBB', 'BD C C C DB BBDBB', 'BDDCDCDCDCB BBDBB', 'BD C C C DB BBDBB', 'BCDCDCDCDCB BBDBB', 'BD C C C DB BBDBB', 'BC C C C CB  BBB ', 'BD CCCCC DB      ', 'BCCC C CCCB      ', ' BBD C DBB       ', '   BBFBB         ')
            .aisle('BBBBBBBBBBB BBBBB', 'BC DCDCD CB BD DB', 'BC  D D  CB BDCDB', 'BC DCDCD CB BDCDB', 'BC  D D  CBDBDCDB', 'BC DCDCD CCCCCCDB', 'BC       CBDBDGDB', 'BC       CB BBHBB', 'BC   C   CB      ', 'BC       CB      ', ' BB     BB       ', '   BBBBB         ')
            .aisle('BBBBBBBBBBB BBBBB', 'BBC DCD CBB BBDBB', 'BBD  C  DBB BBDBB', 'BBC DCD CBB BBDBB', 'BBD  C  DBB BBDBB', 'BBC DCD CBB BBDBB', 'BBD  C  DBB BBDBB', 'BBC  C  CBB  BBB ', 'BBD  C  DBB      ', 'BBC  C  CBB      ', '  BB D BB        ', '    BBB          ')
            .aisle(' BBBBBBBBB   BBB ', ' BCC D CCB   BBB ', ' BCD   DCB   BBB ', '  EC D CE    BBB ', ' BCD   DCB   BBB ', ' BCC D CCB   BBB ', ' BCD   DCB   BBB ', '  EC   CE     B  ', ' BCD   DCB       ', ' BCC C CCB       ', '  BBBBBBB        ', '                 ')
            .aisle(' BBBBBBBBB       ', ' BBBCCCBBB       ', ' BBBCDCBBB       ', '   BCDCB         ', ' BBBCDCBBB       ', ' BBBCCCBBB       ', ' BBBCDCBBB       ', '   BCCCB         ', ' BBBCDCBBB       ', ' BBBCCCBBB       ', '    BBB          ', '                 ')
            .aisle('   BBBBB         ', '   BBBBB         ', '   BBBBB         ', '   BB@BB         ', '   BBBBB         ', '   BBBBB         ', '   BBBBB         ', '   BBIBB         ', '   BBBBB         ', '   BBBBB         ', '                 ', '                 ')
                .where(' ', P.any())
                .where(
                    'B',
                    P.kjsBlock('quantumly_resistant_casing')
                        .or(P.ability(PA.itemIn).setPreviewCount(0).setMaxGlobalLimited(20))
                        .or(P.ability(PA.itemOut).setPreviewCount(0).setMaxGlobalLimited(20))
                        .or(P.ability(PA.fluidIn).setPreviewCount(0).setMaxGlobalLimited(20))
                        .or(P.ability(PA.fluidOut).setPreviewCount(0).setMaxGlobalLimited(20))
                        .or(P.ability(PA.parallelHatch, {max:1}))
                        .or(P.ability(PA.euIn).setMaxGlobalLimited(2))
                        .or(P.ability(PA.maintenance, {exact:1}))
                )
                .where('C', P.kjsBlock('nyanium_pipe_casing'))
                .where('D', P.gtBlock('aerorelient_steel_frame'))
                .where('E', $StarTThreadingStatBlocks.threadingStatBlocks())
                .where('F', P.gtBlock('uiv_rotor_holder'))
                .where('G', P.block('start_core:advanced_fusion_coil'))
                .where('H', P.kjsBlock('draco_resilient_fusion_glass'))
                .where('@', P.controller(definition))
                .where('I', P.block('start_core:threading_controller'))
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/threading/quantumly_resistant_casing',
            'gtceu:block/machines/distillery'
        );
});
