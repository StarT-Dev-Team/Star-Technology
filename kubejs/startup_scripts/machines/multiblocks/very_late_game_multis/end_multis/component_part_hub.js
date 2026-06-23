GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('component_part_hub', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .tooltips([Text.translate('block.start_core.gap'), Text.translate('gtceu.multiblock.exact_hatch_1.tooltip')])
        .recipeType('component_part_assembly')
        .recipeModifiers([
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            $StarTRecipeModifiers.THROUGHPUT_BOOSTING,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('kubejs:advanced_assembly_casing'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                ' BBBBB   BBBBB | BBBBB   BBBBB |  BBB     BBB  ',
                ' CDEDC   CDEDC | FGHGF   FGHGF |  FIF     FIF  ',
                ' CDEDC   CDEDC | FJHJF   FJHJF |  FIF     FIF  ',
                ' CDEDC   CDEDC | FGHGF   FGHGF |  FIF     FIF  ',
                'BBEEEBBBBBEEEBB|BBHHHBBKBBHHHBB| BBBBBBBBBBBBB ',
                'BEEDEEEEEEEDEEB|BHHJHHHHHHHJHHB| BLLLBLLLBLLLB ',
                'BBEEEBBBBBEEEBB|BBHHHBB@BBHHHBB| BBBBBBBBBBBBB ',
                ' CDEDC   CDEDC | FGHGF   FGHGF |  FIF     FIF  ',
                ' CDEDC   CDEDC | FJHJF   FJHJF |  FIF     FIF  ',
                ' CDEDC   CDEDC | FGHGF   FGHGF |  FIF     FIF  ',
                ' BBBBB   BBBBB | BBBBB   BBBBB |  BBB     BBB  ',
            ])
                .whereDict({
                    B: P.anyOf([
                        P.kjsBlock('advanced_assembly_casing'),
                        P.ability(PA.fluidIn, { max: 4, prev: 1 }),
                        P.ability(PA.itemIn, { max: 8, prev: 1 }),
                        P.ability(PA.itemOut, { max: 1, prev: 1 }),
                        P.ability(PA.euIn, { max: 1, prev: 1 }),
                        P.ability(PA.optIn, { exact: 1 }),
                        P.gtBlock('uhv_stabilization_module', { exact: 1 }),
                    ]),
                    ' ': P.any(),
                    C: P.kjsBlock('nyanium_firebox_casing'),
                    D: P.kjsBlock('draco_assembly_grating'),
                    E: P.kjsBlock('draco_ware_casing'),
                    F: P.kjsBlock('draco_resilient_fusion_glass'),
                    G: P.block('start_core:advanced_fusion_coil'),
                    H: P.kjsBlock('superdense_assembly_machine_casing'),
                    I: P.kjsBlock('nyanium_machine_casing'),
                    J: P.kjsBlock('superdense_assembly_control_casing'),
                    K: P.gtBlock('uhv_rotor_holder'),
                    L: P.gtBlock('trinium_coil_block'),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/threading/advanced_assembly_casing',
            'gtceu:block/machines/assembler'
        );
});
