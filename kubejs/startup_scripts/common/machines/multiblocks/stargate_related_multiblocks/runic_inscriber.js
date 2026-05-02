GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('runic_inscribe_manipulate')
        .category('gate_construction')
        .setEUIO('in')
        .setMaxIOSize(2, 1, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_REPLICATOR, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('runic_inscribe_manipulate', 'multiblock')
        .rotationState(RotationState.ALL)
        .recipeType('runic_inscribe_manipulate')
        .recipeModifier(GTRecipeModifiers.OC_PERFECT)
        .appearanceBlock(() => Block.getBlock('kubejs:stellarium_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('    BBBBBBB    ', '     B   B     ', '     B   B     ', '     B   B     ', '     C   C     ', '               ', '               ', '               ', '               ', '               ', '     C   C     ', '     B   B     ', '     B   B     ', '     B   B     ', '     B   B     ')
            .aisle(' BBBBDDBDDBBBB ', '     DEDED     ', '               ', '     DEDED     ', '     CCCCC     ', '               ', '               ', '               ', '               ', '               ', '     CCCCC     ', '     DEDED     ', '               ', '     DEDED     ', '     B   B     ')
            .aisle(' BDDDDDBDDDDDB ', '  BDEDFDFDEDB  ', '  B  FGFGF  B  ', '  BDEDFDFDEDB  ', '  C C     C C  ', '               ', '      BBB      ', '     BBHBB     ', '      BBB      ', '               ', '  C C     C C  ', '  BDEDFDFDEDB  ', '  B  FGFGF  B  ', '  BDEDFDFDEDB  ', '  B  BBBBB  B  ')
            .aisle(' BDDDDBBBDDDDB ', '  DDFIIIIIFDD  ', '   FG     GF   ', '  DDF     FDD  ', '   C       C   ', '               ', '               ', '   BB     BB   ', '               ', '               ', '   C       C   ', '  DDF     FDD  ', '   FG     GF   ', '  DDFIIIIIFDD  ', '   BBDDFDDBB   ')
            .aisle('BBDDDDDBDDDDDBB', '  EFIIIIIIIFE  ', '   G       G   ', '  EF       FE  ', '  C         C  ', '               ', '               ', '   B       B   ', '               ', '               ', '  C         C  ', '  EF       FE  ', '   G       G   ', '  EFIIIIIIIFE  ', '   BDDDGDDDB   ')
            .aisle('BDDDDBDDDBDDDDB', 'BDDIIIDFDIIIDDB', 'B F    E    F B', 'BDD   DFD   DDB', 'CC           CC', '               ', '               ', '  B         B  ', '               ', '               ', 'CC           CC', 'BDD   DFD   DDB', 'B F    E    F B', 'BDDIIIDFDIIIDDB', 'BBBDDGFEFGDDBBB')
            .aisle('BDDBDDDBDDDBDDB', ' EFIIDDDDDIIFE ', '  G   HJH   G  ', ' EF  DDHDD  FE ', ' C           C ', '               ', '  B         B  ', '  B         B  ', '  B         B  ', '               ', ' C           C ', ' EF  DDHDD  FE ', '  G   HJH   G  ', ' EFIIDDDDDIIFE ', '  BDDFDGDFDDB  ')
            .aisle('BBBBBDBBBDBBBBB', ' DDIIFDDDFIIDD ', '  F  EJJJE  F  ', ' DD  FHHHF  DD ', ' C           C ', '       K       ', '  B         B  ', '  H    L    H  ', '  B         B  ', '       K       ', ' C           C ', ' DD  FHHHF  DD ', '  F  EJJJE  F  ', ' DDIIFDFDFIIDD ', '  BFGEGFGEGFB  ')
            .aisle('BDDBDDDBDDDBDDB', ' EFIIDDDDDIIFE ', '  G   HJH   G  ', ' EF  DDHDD  FE ', ' C           C ', '               ', '  B         B  ', '  B         B  ', '  B         B  ', '               ', ' C           C ', ' EF  DDHDD  FE ', '  G   HJH   G  ', ' EFIIDDDDDIIFE ', '  BDDFDGDFDDB  ')
            .aisle('BDDDDBDDDBDDDDB', 'BDDIIIDFDIIIDDB', 'B F    E    F B', 'BDD   DFD   DDB', 'CC           CC', '               ', '               ', '  B         B  ', '               ', '               ', 'CC           CC', 'BDD   DFD   DDB', 'B F    E    F B', 'BDDIIIDFDIIIDDB', 'BBBDDGFEFGDDBBB')
            .aisle('BBDDDDDBDDDDDBB', '  EFIIIIIIIFE  ', '   G       G   ', '  EF       FE  ', '  C         C  ', '               ', '               ', '   B       B   ', '               ', '               ', '  C         C  ', '  EF       FE  ', '   G       G   ', '  EFIIIIIIIFE  ', '   BDDDGDDDB   ')
            .aisle(' BDDDDBBBDDDDB ', '  DDFIIIIIFDD  ', '   FG     GF   ', '  DDF     FDD  ', '   C       C   ', '               ', '               ', '   BB     BB   ', '               ', '               ', '   C       C   ', '  DDF     FDD  ', '   FG     GF   ', '  DDFIIIIIFDD  ', '   BBDDFDDBB   ')
            .aisle(' BDDDDDBDDDDDB ', '  BDEDFDFDEDB  ', '  B  FGFGF  B  ', '  BDEDFDFDEDB  ', '  C C     C C  ', '               ', '      BBB      ', '     BBHBB     ', '      BBB      ', '               ', '  C C     C C  ', '  BDEDFDFDEDB  ', '  B  FGFGF  B  ', '  BDEDFDFDEDB  ', '  B  BBBBB  B  ')
            .aisle(' BBBBDDBDDBBBB ', '     DEDED     ', '               ', '     DEDED     ', '     CCCCC     ', '               ', '               ', '               ', '               ', '               ', '     CCCCC     ', '     DEDED     ', '               ', '     DEDED     ', '     B   B     ')
            .aisle('    BBB@BBB    ', '     B   B     ', '     B   B     ', '     B   B     ', '     C   C     ', '               ', '               ', '               ', '               ', '               ', '     C   C     ', '     B   B     ', '     B   B     ', '     B   B     ', '     B   B     ')
            .where('A', Predicates.blocks('minecraft:stone'))
            .where(' ', Predicates.any())
            .where('B', Predicates.blocks('kubejs:stellarium_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(0))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(0))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(1).setPreviewCount(0))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2)))
            .where('C', Predicates.blocks('gtceu:void_frame'))
            .where('D', Predicates.blocks('kubejs:enriched_naquadah_machine_casing'))
            .where('E', Predicates.blocks('kubejs:enriched_naquadah_engine_intake_casing'))
            .where('F', Predicates.blocks('kubejs:enriched_naquadah_pipe_casing'))
            .where('G', Predicates.blocks('kubejs:enriched_naquadah_heat_escape_casing'))
            .where('H', Predicates.blocks('kubejs:reinforced_fusion_glass'))
            .where('I', Predicates.blocks('kubejs:ancient_runicalium_casing'))
            .where('J', Predicates.blocks('gtceu:fusion_coil'))
            .where('K', Predicates.blocks('thermal_extra:dragonsteel_glass'))
            .where('L', Predicates.blocks('kubejs:inscribe_casing'))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingModel('kubejs:block/casings/superconductors/casing_stellarium',
            'gtceu:block/machines/laser_engraver');

});