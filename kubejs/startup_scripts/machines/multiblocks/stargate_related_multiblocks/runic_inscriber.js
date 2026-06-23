GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('runic_inscribe_manipulate')
        .category('gate_construction')
        .setEUIO('in')
        .setMaxIOSize(2, 1, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_REPLICATOR, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('runic_inscribe_manipulate', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('runic_inscribe_manipulate')
        .recipeModifier(GTRecipeModifiers.OC_PERFECT)
        .appearanceBlock(() => Block.getBlock('kubejs:stellarium_casing'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                '    BBBBBBB    |     B   B     |     B   B     |     B   B     |     C   C     |               |               |               |               |               |     C   C     |     B   B     |     B   B     |     B   B     |     B   B     ',
                ' BBBBDDBDDBBBB |     DEDED     |               |     DEDED     |     CCCCC     |               |               |               |               |               |     CCCCC     |     DEDED     |               |     DEDED     |     B   B     ',
                ' BDDDDDBDDDDDB |  BDEDFDFDEDB  |  B  FGFGF  B  |  BDEDFDFDEDB  |  C C     C C  |               |      BBB      |     BBHBB     |      BBB      |               |  C C     C C  |  BDEDFDFDEDB  |  B  FGFGF  B  |  BDEDFDFDEDB  |  B  BBBBB  B  ',
                ' BDDDDBBBDDDDB |  DDFIIIIIFDD  |   FG     GF   |  DDF     FDD  |   C       C   |               |               |   BB     BB   |               |               |   C       C   |  DDF     FDD  |   FG     GF   |  DDFIIIIIFDD  |   BBDDFDDBB   ',
                'BBDDDDDBDDDDDBB|  EFIIIIIIIFE  |   G       G   |  EF       FE  |  C         C  |               |               |   B       B   |               |               |  C         C  |  EF       FE  |   G       G   |  EFIIIIIIIFE  |   BDDDGDDDB   ',
                'BDDDDBDDDBDDDDB|BDDIIIDFDIIIDDB|B F    E    F B|BDD   DFD   DDB|CC           CC|               |               |  B         B  |               |               |CC           CC|BDD   DFD   DDB|B F    E    F B|BDDIIIDFDIIIDDB|BBBDDGFEFGDDBBB',
                'BDDBDDDBDDDBDDB| EFIIDDDDDIIFE |  G   HJH   G  | EF  DDHDD  FE | C           C |               |  B         B  |  B         B  |  B         B  |               | C           C | EF  DDHDD  FE |  G   HJH   G  | EFIIDDDDDIIFE |  BDDFDGDFDDB  ',
                'BBBBBDBBBDBBBBB| DDIIFDDDFIIDD |  F  EJJJE  F  | DD  FHHHF  DD | C           C |       K       |  B         B  |  H    L    H  |  B         B  |       K       | C           C | DD  FHHHF  DD |  F  EJJJE  F  | DDIIFDFDFIIDD |  BFGEGFGEGFB  ',
                'BDDBDDDBDDDBDDB| EFIIDDDDDIIFE |  G   HJH   G  | EF  DDHDD  FE | C           C |               |  B         B  |  B         B  |  B         B  |               | C           C | EF  DDHDD  FE |  G   HJH   G  | EFIIDDDDDIIFE |  BDDFDGDFDDB  ',
                'BDDDDBDDDBDDDDB|BDDIIIDFDIIIDDB|B F    E    F B|BDD   DFD   DDB|CC           CC|               |               |  B         B  |               |               |CC           CC|BDD   DFD   DDB|B F    E    F B|BDDIIIDFDIIIDDB|BBBDDGFEFGDDBBB',
                'BBDDDDDBDDDDDBB|  EFIIIIIIIFE  |   G       G   |  EF       FE  |  C         C  |               |               |   B       B   |               |               |  C         C  |  EF       FE  |   G       G   |  EFIIIIIIIFE  |   BDDDGDDDB   ',
                ' BDDDDBBBDDDDB |  DDFIIIIIFDD  |   FG     GF   |  DDF     FDD  |   C       C   |               |               |   BB     BB   |               |               |   C       C   |  DDF     FDD  |   FG     GF   |  DDFIIIIIFDD  |   BBDDFDDBB   ',
                ' BDDDDDBDDDDDB |  BDEDFDFDEDB  |  B  FGFGF  B  |  BDEDFDFDEDB  |  C C     C C  |               |      BBB      |     BBHBB     |      BBB      |               |  C C     C C  |  BDEDFDFDEDB  |  B  FGFGF  B  |  BDEDFDFDEDB  |  B  BBBBB  B  ',
                ' BBBBDDBDDBBBB |     DEDED     |               |     DEDED     |     CCCCC     |               |               |               |               |               |     CCCCC     |     DEDED     |               |     DEDED     |     B   B     ',
                '    BBB@BBB    |     B   B     |     B   B     |     B   B     |     C   C     |               |               |               |               |               |     C   C     |     B   B     |     B   B     |     B   B     |     B   B     ',
            ])
                .whereDict({
                    A: P.block('minecraft:stone'),
                    ' ': P.any(),
                    B: P.anyOf([
                        P.kjsBlock('stellarium_casing'),
                        P.ability(PA.itemIn, { max: 2, view: 1 }),
                        P.ability(PA.itemOut, { max: 1, view: 1 }),
                        P.ability(PA.fluidIn, { max: 1, view: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                        P.ability(PA.euIn, { max: 2 }),
                    ]),
                    C: P.gtBlock('void_frame'),
                    D: P.kjsBlock('enriched_naquadah_machine_casing'),
                    E: P.kjsBlock('enriched_naquadah_engine_intake_casing'),
                    F: P.kjsBlock('enriched_naquadah_pipe_casing'),
                    G: P.kjsBlock('enriched_naquadah_heat_escape_casing'),
                    H: P.kjsBlock('reinforced_fusion_glass'),
                    I: P.kjsBlock('ancient_runicalium_casing'),
                    J: P.gtBlock('fusion_coil'),
                    K: P.block('thermal_extra:dragonsteel_glass'),
                    L: P.kjsBlock('inscribe_casing'),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/superconductors/casing_stellarium',
            'gtceu:block/machines/laser_engraver'
        );
});
