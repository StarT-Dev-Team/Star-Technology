GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('large_rotor_machine')
        .category('gate_construction')
        .setEUIO('in')
        .setMaxIOSize(4, 1, 2, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_EXTRUDER, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.METAL_PIPE)
        .setLayered();
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('large_rotor_machine', 'multiblock')
        .machine((holder) => new $LayeredWorkableElectricMultiblockMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('large_rotor_machine')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
        .appearanceBlock(() => Block.getBlock('kubejs:enriched_naquadah_machine_casing'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                '       |B     B|       ',
                'C B B C|BDB BDB|       ',
                'BDBBBDB|BEFBFEB|C BBB C',
                'BBBBBBB|BGHIHGB|BBJBKBB',
                'BBBBBBB|LFGIGFL|BELMLEB',
                'BBBBBBB|NGHIHGN|BBKBJBB',
                'BBBBBBB|FFGIGFF|BELMLEB',
                'BBBBBBB|NGHIHGN|BBJBKBB',
                'BBBBBBB|LFGIGFL|BELMLEB',
                'BBBBBBB|BGHIHGB|BBKBJBB',
                'BDBBBDB|BEF@FEB|C BBB C',
                'C B B C|BDB BDB|       ',
                '       |B     B|       ',
            ])
                .whereDict({
                    ' ': P.any(),
                    B: P.anyOf([
                        P.kjsBlock('enriched_naquadah_machine_casing'),
                        P.ability(PA.itemIn, { max: 2, view: 1 }),
                        P.ability(PA.fluidIn, { max: 2, view: 1 }),
                        P.ability(PA.itemOut, { max: 1, view: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                        P.ability(PA.euIn, { max: 2, view: 1 }),
                        P.ability(PA.parallelHatch, { max: 1 }),
                    ]),
                    C: P.gtBlock('trinaquadalloy_frame'),
                    D: P.gtBlock('assembly_line_grating'),
                    E: P.kjsBlock('enriched_naquadah_heat_escape_casing'),
                    F: P.kjsBlock('enriched_naquadah_pipe_casing'),
                    G: P.kjsBlock('enriched_naquadah_gearbox'),
                    H: P.gtBlock('assembly_line_unit'),
                    I: P.gtBlock('assembly_line_casing'),
                    J: P.kjsBlock('lumium_casing'),
                    K: P.kjsBlock('twinite_casing'),
                    L: P.kjsBlock('enriched_naquadah_engine_intake_casing'),
                    M: P.kjsBlock('shellite_casing'),
                    N: P.kjsBlock('enriched_naquadah_firebox_casing'),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel('kubejs:block/casings/naquadah/casing', 'gtceu:block/machines/lathe');
});
