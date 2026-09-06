GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('compact_assembly_line', 'multiblock')
        .machine((holder) => new $AssemblyLineMulti(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .tooltips([Text.translate('block.start_core.gap'), Text.translate('gtceu.multiblock.exact_hatch_1.tooltip')])
        .recipeType('assembly_line')
        .recipeModifiers([
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            $StarTRecipeModifiers.THROUGHPUT_BOOSTING,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('kubejs:superdense_machine_casing'))
        .pattern((definition) =>
            newFactoryBlockPatternWithDirections(
                $RelativeDirection.BACK,
                $RelativeDirection.UP,
                $RelativeDirection.RIGHT
            )(['SSISS|@SDSS|SSSSS', 'TSIST|GRDRG|TSCST', blockPatternRepeatable(3, 15), 'SSOSS|SSDSS|SSSSS'])
                .whereDict({
                    '@': P.controller(definition),
                    S: P.anyOf([
                        P.kjsBlock('superdense_machine_casing'),
                        P.ability(PA.fluidIn, { max: 4, view: 1 }),
                        P.ability(PA.euIn, { max: 1, view: 1 }),
                        P.ability(PA.optIn, { exact: 1 }),
                    ]),
                    G: P.gtBlock('fusion_glass'),
                    D: P.kjsBlock('superdense_assembly_machine_casing'),
                    R: P.kjsBlock('superdense_assembly_control_casing'),
                    C: P.gtBlock('superconducting_coil'),
                    I: P.ability(PA.itemIn),
                    O: P.ability(PA.itemOut).addTooltips(
                        Component.translatable('gtceu.multiblock.pattern.location_end')
                    ),
                    T: P.gtBlock('assembly_line_grating'),
                    ' ': P.any(),
                })
                .build()
        )
        ['partSorter(java.util.function.Function)']((mc) => $AssemblyLineMulti.partSorter(mc))
        .workableCasingModel(
            'kubejs:block/casings/abydos_multis/superdense_machine_casing',
            'gtceu:block/multiblock/assembly_line'
        );
});
