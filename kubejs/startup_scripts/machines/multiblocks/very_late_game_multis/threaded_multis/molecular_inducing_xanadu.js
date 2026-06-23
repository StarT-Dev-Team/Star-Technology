GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    // prettier-ignore
    event
        .create('molecular_inducing_xanadu', 'multiblock')
        .machine((holder) => new $StarTThreadingCapableMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .tooltips([Text.translate('block.start_core.gap'), Text.translate('block.kubejs.threading.tooltip')])
        .recipeTypes(['autoclave', 'mixer', 'ore_washer', 'chemical_bath'])
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            $StarTRecipeModifiers.THREADING_MACHINE,
            $StarTRecipeModifiers.BULK_PROCESSING,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('kubejs:atomic_convergence_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('     BBBBB     ', '     BBBBB     ', '     BBBBB     ', '     BBBBB     ', '     BBBBB     ', '     BBBBB     ', '     BBBBB     ', '     BBBBB     ', '     BBBBB     ', '     BBBBB     ', '     BBBBB     ', '      CCC      ', '               ', '               ')
            .aisle(' C BBBBBBBBB C ', ' C BBBDEDBBB C ', ' C BBBDEDBBB C ', ' C BBBDEDBBB C ', ' C BBBDEDBBB C ', ' C  BBDEDBB  C ', ' C BBBDEDBBB C ', ' C BBBDEDBBB C ', ' C BBBDEDBBB C ', ' C BBBDEDBBB C ', ' C BBBDEDBBB C ', '    CCBBBCC    ', '       C       ', '               ')
            .aisle('  BBBBBBBBBBB  ', '  BBED   DEBB  ', '  BBED   DEBB  ', '  BBED   DEBB  ', '  BBED   DEBB  ', '   FED   DEF   ', '  BBED   DEBB  ', '  BBED   DEBB  ', '  BBED   DEBB  ', '  BBED   DEBB  ', '  BBED   DEBB  ', '  CCBBBBBBBCC  ', '       C       ', '               ')
            .aisle(' BBBBBBBBBBBBB ', ' BBD       DBB ', ' BBD   G   DBB ', ' BBD       DBB ', ' BBD       DBB ', '  FD       DF  ', ' BBD   G   DBB ', ' BBD       DBB ', ' BBD       DBB ', ' BBD       DBB ', ' BBD       DBB ', '  CBBBHHHBBBC  ', '   C   C   C   ', '               ')
            .aisle(' BBBBBBBBBBBBB ', ' BE         EB ', ' BE    G    EB ', ' BE         EB ', ' BE   CCC   EB ', ' BE         EB ', ' BE    G    EB ', ' BE         EB ', ' BE   CCC   EB ', ' BE         EB ', ' BE         EB ', ' CBBBHHHHHBBBC ', '    C  C  C    ', '       C       ')
            .aisle('BBBBBBBBBBBBBBB', 'BBD         DBB', 'BBD  CCGCC  DBB', 'BBD         DBB', 'BBD  C I C  DBB', 'BBD         DBB', 'BBD  CCGCC  DBB', 'BBD         DBB', 'BBD  C I C  DBB', 'BBD         DBB', 'BBD         DBB', ' CBBHHHHHHHBBC ', '     C   C     ', '     C C C     ')
            .aisle('BBBBBBBBBBBBBBB', 'BD           DB', 'BD  C  G  C  DB', 'BD           DB', 'BD   C I C   DB', 'BD           DB', 'BD  C  G  C  DB', 'BD           DB', 'BD   C I C   DB', 'BD           DB', 'BD           DB', 'CBBHHHHHHHHHBBC', '               ', '      CCC      ')
            .aisle('BBBBBBBBBBBBBBB', 'BE     I     EB', 'BE  CIIIIIC  EB', 'BE     I     EB', 'BE GGGGIGGGG EB', 'BE     I     EB', 'BE  CIIIIIC  EB', 'BE     I     EB', 'BE GGGGIGGGG EB', 'BE     I     EB', 'BE     I     EB', 'CBBHHHHIHHHHBBC', ' CCCC  I  CCCC ', '    CCCICCC    ')
            .aisle('BBBBBBBBBBBBBBB', 'BD           DB', 'BD  C  G  C  DB', 'BD           DB', 'BD   C I C   DB', 'BD           DB', 'BD  C  G  C  DB', 'BD           DB', 'BD   C I C   DB', 'BD           DB', 'BD           DB', 'CBBHHHHHHHHHBBC', '               ', '      CCC      ')
            .aisle('BBBBBBBBBBBBBBB', 'BBD         DBB', 'BBD  CCGCC  DBB', 'BBD         DBB', 'BBD  C I C  DBB', 'BBD         DBB', 'BBD  CCGCC  DBB', 'BBD         DBB', 'BBD  C I C  DBB', 'BBD         DBB', 'BBD         DBB', ' CBBHHHHHHHBBC ', '     C   C     ', '     C C C     ')
            .aisle(' BBBBBBBBBBBBB ', ' BE         EB ', ' BE    G    EB ', ' BE         EB ', ' BE   CCC   EB ', ' BE         EB ', ' BE    G    EB ', ' BE         EB ', ' BE   CCC   EB ', ' BE         EB ', ' BE         EB ', ' CBBBHHHHHBBBC ', '    C  C  C    ', '       C       ')
            .aisle(' BBBBBBBBBBBBB ', ' BBD       DBB ', ' BBD   G   DBB ', ' BBD       DBB ', ' BBD       DBB ', '  FD       DF  ', ' BBD   G   DBB ', ' BBD       DBB ', ' BBD       DBB ', ' BBD       DBB ', ' BBD       DBB ', '  CBBBHHHBBBC  ', '   C   C   C   ', '               ')
            .aisle('  BBBBBBBBBBB  ', '  BBED   DEBB  ', '  BBED   DEBB  ', '  BBED   DEBB  ', '  BBED   DEBB  ', '   FED   DEF   ', '  BBED   DEBB  ', '  BBED   DEBB  ', '  BBED   DEBB  ', '  BBED   DEBB  ', '  BBED   DEBB  ', '  CCBBBBBBBCC  ', '       C       ', '               ')
            .aisle(' C BBBBBBBBB C ', ' C BBBDEDBBB C ', ' C BBBDEDBBB C ', ' C BBBDEDBBB C ', ' C BBBDEDBBB C ', ' C  BBDEDBB  C ', ' C BBBDEDBBB C ', ' C BBBDEDBBB C ', ' C BBBDEDBBB C ', ' C BBBDEDBBB C ', ' C BBBDEDBBB C ', '    CCBBBCC    ', '       C       ', '               ')
            .aisle('     BBBBB     ', '     BBBBB     ', '     BBBBB     ', '     BBBBB     ', '     BB@BB     ', '     BBBBB     ', '     BBBBB     ', '     BBJBB     ', '     BBBBB     ', '     BBBBB     ', '     BBBBB     ', '      CCC      ', '               ', '               ')
                .where(' ', P.any())
                .where(
                    'B',
                    P.kjsBlock('atomic_convergence_casing')
                        .or(P.ability(PA.itemIn).setPreviewCount(0).setMaxGlobalLimited(20))
                        .or(P.ability(PA.itemOut).setPreviewCount(0).setMaxGlobalLimited(20))
                        .or(P.ability(PA.fluidIn).setPreviewCount(0).setMaxGlobalLimited(20))
                        .or(P.ability(PA.fluidOut).setPreviewCount(0).setMaxGlobalLimited(20))
                        .or(P.ability(PA.parallelHatch, {max:1}))
                        .or(P.ability(PA.euIn).setMaxGlobalLimited(2))
                        .or(P.ability(PA.maintenance, {exact:1}))
                )
                .where('C', P.gtBlock('melastrium_mox_frame'))
                .where('D', P.block('start_core:auxiliary_boosted_fusion_casing_mk2'))
                .where('E', P.kjsBlock('nyanium_engine_intake_casing'))
                .where('F', $StarTThreadingStatBlocks.threadingStatBlocks())
                .where('G', P.kjsBlock('nyanium_pipe_casing'))
                .where('H', P.kjsBlock('draco_resilient_fusion_glass'))
                .where('I', P.kjsBlock('nyanium_gearbox'))
                .where('@', P.controller(definition))
                .where('J', P.block('start_core:threading_controller'))
                .build()
        )
        .workableCasingModel('kubejs:block/casings/threading/atomic_convergence_casing', 'gtceu:block/machines/mixer');
});
