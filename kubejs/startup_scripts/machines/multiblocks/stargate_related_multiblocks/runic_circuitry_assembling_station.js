GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('runic_circuitry_assembling_station')
        .category('gate_construction')
        .setEUIO('in')
        .setMaxIOSize(3, 1, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_CIRCUIT, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('runic_circuitry_assembling_station', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('runic_circuitry_assembling_station')
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('kubejs:lumium_casing'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                '   BBCBB   |   B   B   |   C   C   |           |           |           |   C   C   |   B   B   |   BBCBB   |    BBB    |           ',
                ' BCBDDDBCB | B  DDD  B | C  DED  C |    C C    |           |    C C    | C  DED  C | B  DDD  B | BCBDDDBCB |  BBBFBBB  |           ',
                ' CDDDGDDDC |  DDHHHDD  |  DDIIIDD  |  C III C  |    III    |  C III C  |  DDIIIDD  |  DDHHHDD  | CDDDDDDDC | BBFJEJFBB |    C C    ',
                'BBDDDGDDDBB|B DHKKKHD B|C DI   ID C|   D   D   |   I   I   |   D   D   |C DI   ID C|B DHKKKHD B|BBDDDGDDDBB| BFEBBBEFB |    BBB    ',
                'BDDDGGGDDDB| DHKKKKKHD | DI     ID | CI     IC |  I     I  | CI     IC | DI     ID | DHKKKKKHD |BDDDGGGDDDB|BBJBBLBBJBB|  CBMJMBC  ',
                'CDGGGLGGGDC| DHKKLKKHD | EI     IE |  I  N  I  |  I  O  I  |  I  N  I  | EI     IE | DHKKLKKHD |CDDGGLGGDDC|BFEBLLLBEFB|   BJJJB   ',
                'BDDDGGGDDDB| DHKKKKKHD | DI     ID | CI     IC |  I     I  | CI     IC | DI     ID | DHKKKKKHD |BDDDGGGDDDB|BBJBBLBBJBB|  CBMJMBC  ',
                'BBDDDGDDDBB|B DHKKKHD B|C DI   ID C|   D   D   |   I   I   |   D   D   |C DI   ID C|B DHKKKHD B|BBDDDGDDDBB| BFEBBBEFB |    BBB    ',
                ' CDDDGDDDC |  DDHHHDD  |  DDIIIDD  |  C III C  |    III    |  C III C  |  DDIIIDD  |  DDHHHDD  | CDDDDDDDC | BBFJEJFBB |    C C    ',
                ' BCBDDDBCB | B  D@D  B | C  DED  C |    C C    |           |    C C    | C  DED  C | B  DDD  B | BCBDDDBCB |  BBBFBBB  |           ',
                '   BBCBB   |   B   B   |   C   C   |           |           |           |   C   C   |   B   B   |   BBCBB   |    BBB    |           ',
            ])
                .whereDict({
                    ' ': P.any(),
                    B: P.kjsBlock('enriched_naquadah_machine_casing'),
                    C: P.gtBlock('trinaquadalloy_frame'),
                    D: P.anyOf([
                        P.kjsBlock('lumium_casing'),
                        P.ability(PA.euIn, { max: 2, prev: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                        P.ability(PA.parallelHatch, { max: 1 }),
                        P.ability(PA.itemOut),
                        P.ability(PA.fluidIn),
                        P.ability(PA.itemIn),
                    ]),
                    E: P.kjsBlock('enriched_naquadah_engine_intake_casing'),
                    F: P.kjsBlock('enriched_naquadah_heat_escape_casing'),
                    G: P.gtBlock('advanced_computer_casing'),
                    H: P.kjsBlock('soul_infused_casing'),
                    I: P.gtBlock('fusion_glass'),
                    J: P.gtBlock('naquadah_coil_block'),
                    K: P.gtBlock('assembly_line_grating'),
                    L: P.gtBlock('high_power_casing'),
                    M: P.kjsBlock('enriched_naquadah_pipe_casing'),
                    N: P.block('thermal_extra:dragonsteel_glass'),
                    O: P.kjsBlock('laser_casing'),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/superconductors/casing_lumium',
            'gtceu:block/machines/laser_engraver'
        );
});
