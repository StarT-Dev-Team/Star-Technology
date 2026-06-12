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
                .where(' ', Predicates.any())
                .where('B', Predicates.blocks('kubejs:enriched_naquadah_machine_casing'))
                .where('C', Predicates.blocks('gtceu:trinaquadalloy_frame'))
                .where(
                    'D',
                    Predicates.blocks('kubejs:lumium_casing')
                        .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                        .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(0))
                        .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(0))
                )
                .where('E', Predicates.blocks('kubejs:enriched_naquadah_engine_intake_casing'))
                .where('F', Predicates.blocks('kubejs:enriched_naquadah_heat_escape_casing'))
                .where('G', Predicates.blocks('gtceu:advanced_computer_casing'))
                .where('H', Predicates.blocks('kubejs:soul_infused_casing'))
                .where('I', Predicates.blocks('gtceu:fusion_glass'))
                .where('J', Predicates.blocks('gtceu:naquadah_coil_block'))
                .where('K', Predicates.blocks('gtceu:assembly_line_grating'))
                .where('L', Predicates.blocks('gtceu:high_power_casing'))
                .where('M', Predicates.blocks('kubejs:enriched_naquadah_pipe_casing'))
                .where('N', Predicates.blocks('thermal_extra:dragonsteel_glass'))
                .where('O', Predicates.blocks('kubejs:laser_casing'))
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/superconductors/casing_lumium',
            'gtceu:block/machines/laser_engraver'
        );
});
