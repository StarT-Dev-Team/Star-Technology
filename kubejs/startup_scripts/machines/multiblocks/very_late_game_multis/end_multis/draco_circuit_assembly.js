GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('draco_circuit_assembler')
        .category('extremely_advanced')
        .setEUIO('in')
        .setMaxIOSize(16, 1, 3, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER)
        .setMaxTooltips(4)
        .setHasResearchSlot(true);

    event
        .create('draco_bulk_circuiter')
        .category('extremely_advanced')
        .setEUIO('in')
        .setMaxIOSize(4, 1, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER)
        .setMaxTooltips(4)
        .setHasResearchSlot(true);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('draco_circuit_assembler', 'multiblock')
        .machine((holder) => new $AssemblyLineMulti(holder))
        .recipeTypes(['draco_circuit_assembler', 'draco_bulk_circuiter'])
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('kubejs:enriched_naquadah_machine_casing'))
        .pattern((definition) =>
            newFactoryBlockPatternWithDirections(
                $RelativeDirection.BACK,
                $RelativeDirection.UP,
                $RelativeDirection.RIGHT
            )([
                'SSISS|SSDSS|@SSSS| SSS ',
                'SSISS|GCDCG|RACAR| SGS ',
                blockPatternRepeatable(3, 15),
                'SSOSS|SSDSS|SSSSS| SSS ',
            ])
                .whereDict({
                    '@': P.controller(definition),
                    S: P.anyOf([
                        P.kjsBlock('enriched_naquadah_machine_casing'),
                        P.ability(PA.fluidIn, { max: 3, view: 1 }),
                        P.ability(PA.euIn, { max: 2, view: 1 }),
                        P.ability(PA.optIn, { exact: 1 }),
                        P.ability(PA.parallelHatch, { max: 1 }),
                    ]),
                    G: P.kjsBlock('draco_resilient_fusion_glass'),
                    A: P.kjsBlock('superdense_assembly_machine_casing'),
                    C: P.kjsBlock('superdense_assembly_control_casing'),
                    D: P.kjsBlock('draco_ware_casing'),
                    I: P.ability(PA.itemIn),

                    O: P.ability(PA.itemOut).addTooltips(
                        Component.translatable('gtceu.multiblock.pattern.location_end')
                    ),
                    R: P.kjsBlock('draco_assembly_grating'),
                    ' ': P.any(),
                })
                .build()
        )
        ['partSorter(java.util.function.Function)']((mc) => $AssemblyLineMulti.partSorter(mc))
        .workableCasingModel('kubejs:block/casings/naquadah/casing', 'gtceu:block/multiblock/assembly_line');
});
