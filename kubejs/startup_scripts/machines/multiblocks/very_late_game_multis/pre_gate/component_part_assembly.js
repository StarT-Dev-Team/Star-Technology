GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('component_part_assembly')
        .category('highly_advanced')
        .setEUIO('in')
        .setMaxIOSize(6, 1, 2, 0)
        .setHasResearchSlot(true)
        .setSound(GTSoundEntries.ASSEMBLER)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
        .setMaxTooltips(4);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('component_part_assembly', 'multiblock')
        .machine((holder) => new $AssemblyLineMulti(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('component_part_assembly')
        .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT_SUBTICK, GTRecipeModifiers.BATCH_MODE])
        .appearanceBlock(() => Block.getBlock('kubejs:enriched_naquadah_machine_casing'))
        .pattern((definition) =>
            newFactoryBlockPatternWithDirections(
                $RelativeDirection.BACK,
                $RelativeDirection.UP,
                $RelativeDirection.RIGHT
            )([
                'SSISS|@SSSS| SSS ',
                'HAIAH|GLCLG| GSG ',
                'HAIAH|GCCCG| GSG ',
                'SSISS|SCLCS| SSS ',
                'HAIAH|GCCCG| GSG ',
                'HAIAH|GLCLG| GSG ',
                'SSOSS|SSSSS| SSS ',
            ])
                .whereDict({
                    '@': P.controller(definition),
                    S: P.anyOf([
                        P.kjsBlock('enriched_naquadah_machine_casing'),
                        P.ability(PA.fluidIn, { max: 3, prev: 1 }),
                        P.ability(PA.euIn, { max: 2, prev: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                        P.ability(PA.optIn, { exact: 1 }),
                    ]),
                    G: P.gtBlock('fusion_glass'),
                    I: P.gtBlock('ulv_input_bus'),
                    O: P.ability(PA.itemOut).addTooltips(
                        Component.translatable('gtceu.multiblock.pattern.location_end')
                    ),
                    H: P.gtBlock('sturdy_machine_casing'),
                    A: P.gtBlock('assembly_line_grating'),
                    L: P.gtBlock('assembly_line_unit'),
                    C: P.gtBlock('fusion_coil'),
                    ' ': P.any(),
                })
                .build()
        )
        ['partSorter(java.util.function.Function)']((mc) => $AssemblyLineMulti.partSorter(mc))
        .workableCasingModel('kubejs:block/casings/naquadah/casing', 'gtceu:block/multiblock/implosion_compressor');
});
