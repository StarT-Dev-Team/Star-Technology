GTCEuStartupEvents.registry('gtceu:machine', (event) => {
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
                .where(' ', Predicates.any())
                .where(
                    'B',
                    Predicates.blocks('kubejs:atomic_convergence_casing')
                        .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(0).setMaxGlobalLimited(20))
                        .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(0).setMaxGlobalLimited(20))
                        .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(0).setMaxGlobalLimited(20))
                        .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setPreviewCount(0).setMaxGlobalLimited(20))
                        .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                        .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2))
                        .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                )
                .where('C', Predicates.blocks('gtceu:melastrium_mox_frame'))
                .where('D', Predicates.blocks('start_core:auxiliary_boosted_fusion_casing_mk2'))
                .where('E', Predicates.blocks('kubejs:nyanium_engine_intake_casing'))
                .where('F', $StarTThreadingStatBlocks.threadingStatBlocks())
                .where('G', Predicates.blocks('kubejs:nyanium_pipe_casing'))
                .where('H', Predicates.blocks('kubejs:draco_resilient_fusion_glass'))
                .where('I', Predicates.blocks('kubejs:nyanium_gearbox'))
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .where('J', Predicates.blocks('start_core:threading_controller'))
                .build()
        )
        .workableCasingModel('kubejs:block/casings/threading/atomic_convergence_casing', 'gtceu:block/machines/mixer');
});
