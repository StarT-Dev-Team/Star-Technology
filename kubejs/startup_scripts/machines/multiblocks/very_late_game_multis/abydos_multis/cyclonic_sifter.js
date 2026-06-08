GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('cyclonic_sifter')
        .category('ultimate')
        .setEUIO('in')
        .setMaxIOSize(2, 6, 2, 3)
        .setSound(GTSoundEntries.CENTRIFUGE)
        .setProgressBar(GuiTextures.PROGRESS_BAR_SIFT, FillDirection.LEFT_TO_RIGHT);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    // prettier-ignore
    event
        .create('cyclonic_sifter', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('cyclonic_sifter')
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('kubejs:quake_proof_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("         ", "         ", "         ", "         ", "   BBB   ", "   CCC   ", "   BBB   ", "         ", "         ", "         ", "         ", "         ")
            .aisle("   DDD   ", "    D    ", "    D    ", "   BBB   ", " BBBBBBB ", " CCEEECC ", " BB F BB ", "    D    ", "    D    ", "    D    ", "    D    ", "  DDDDD  ")
            .aisle("  D   D  ", "  D   D  ", "  D   D  ", "  BBBBB  ", " BBGBGBB ", " CE F EC ", " B  F  B ", "    F    ", "         ", "    D    ", "         ", " D     D ")
            .aisle(" D     D ", "         ", "         ", " BBGGGBB ", "BBGGGGGBB", "CE     EC", "B       B", "         ", "         ", "    D    ", "         ", " D     D ")
            .aisle(" D     D ", " D     D ", " D     D ", " BBGGGBB ", "BBBGGGBBB", "CEF   FEC", "BFF   FFB", " DF   FD ", " D     D ", " DDDDDDD ", " D     D ", " D     D ")
            .aisle(" D     D ", "         ", "         ", " BBGGGBB ", "BBGGGGGBB", "CE     EC", "B       B", "         ", "         ", "    D    ", "         ", " D     D ")
            .aisle("  D   D  ", "  D   D  ", "  D   D  ", "  BBBBB  ", " BBGBGBB ", " CE F EC ", " B  F  B ", "    F    ", "         ", "    D    ", "         ", " D     D ")
            .aisle("   DDD   ", "    D    ", "    D    ", "   BBB   ", " BBBBBBB ", " CCEEECC ", " BB F BB ", "    D    ", "    D    ", "    D    ", "    D    ", "  DDDDD  ")
            .aisle("         ", "         ", "         ", "         ", "   BBB   ", "   C@C   ", "   BBB   ", "         ", "         ", "         ", "         ", "         ")
            .where(" ", Predicates.any())
            .where("B", Predicates.blocks("kubejs:quake_proof_casing"))
            .where('C', Predicates.blocks('gtceu:fusion_glass')
                        .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                        .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                        .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                )
                .where('D', Predicates.blocks('gtceu:thacoloy_nq_42x_frame'))
                .where('E', Predicates.blocks('gtceu:uv_machine_casing'))
                .where('F', Predicates.blocks('gtceu:vibration_safe_casing'))
                .where('G', Predicates.blocks('gtceu:assembly_line_grating'))
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .build()
        )
        .workableCasingModel('kubejs:block/casings/abydos_multis/quake_proof_casing', 'gtceu:block/machines/sifter');
});
