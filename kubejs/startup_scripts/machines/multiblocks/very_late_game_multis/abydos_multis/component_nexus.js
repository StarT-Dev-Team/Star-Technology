GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('component_nexus')
        .category('highly_advanced')
        .setEUIO('in')
        .setMaxIOSize(10, 1, 4, 0)
        .setSound(GTSoundEntries.ASSEMBLER)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
        .setMaxTooltips(4);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('component_nexus', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .tooltips([Text.translate('block.start_core.gap'), Text.translate('gtceu.multiblock.exact_hatch_1.tooltip')])
        .recipeType('component_nexus')
        .recipeModifiers([
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            $StarTRecipeModifiers.THROUGHPUT_BOOSTING,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('kubejs:superdense_machine_casing'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                'ABBBABBBAAABBBA    |ACCCACCCADACCCA    |        AAA        ',
                'AEEEAEEEFFFEEEA    |AGHGAGHGAIAGHGA    |ACCCACCCAJACCCA    ',
                'AFFFFFFFFEFFFFA    |IIIIIIIIIIIIIII    |AAAAAAAAAJAAAAA    ',
                'AEEEAEEEFFFEEEA    |AGHGAGHGAIAGHGA    |ACCCACCCAJACCCA    ',
                'ABBBABBBAFABBBA    |ACCCACCCAIACCCA    |        AJA        ',
                '        AFA        |        AIA        |        AJA        ',
                '    ABBBAFABBBABBBA|    ACCCAIACCCACCCA|        AJA        ',
                '    AEEEFFFEEEAEEEA|    AGHGAIAGHGAGHGA|    ACCCAJACCCACCCA',
                '    AFFFFEFFFFFFFFA|    IIIIIIIIIIIIIII|    AAAAAJAAAAAAAAA',
                '    AEEEFFFEEEAEEEA|    AGHGAIAGHGAGHGA|    ACCCAJACCCACCCA',
                '    ABBBAAABBBABBBA|    ACCCA@ACCCACCCA|        AAA        ',
            ])
                .whereDict({
                    A: P.anyOf([
                        P.kjsBlock('superdense_machine_casing'),
                        P.ability(PA.fluidIn, { max: 4, view: 1 }),
                        P.ability(PA.itemIn, { max: 8, view: 1 }),
                        P.ability(PA.itemOut, { max: 1, view: 1 }),
                        P.ability(PA.euIn, { max: 1, view: 1 }),
                        P.gtBlock('uhv_stabilization_module', { exact: 1 }),
                    ]),
                    B: P.gtBlock('computer_heat_vent'),
                    ' ': P.any(),
                    C: P.gtBlock('fusion_glass'),
                    D: P.gtBlock('uhv_rotor_holder'),
                    E: P.gtBlock('assembly_line_grating'),
                    F: P.gtBlock('advanced_computer_casing'),
                    G: P.gtBlock('fusion_coil'),
                    H: P.gtBlock('assembly_line_unit'),
                    I: P.kjsBlock('superdense_assembly_machine_casing'),
                    J: P.gtBlock('superconducting_coil'),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/abydos_multis/superdense_machine_casing',
            'gtceu:block/machines/assembler'
        );
});
