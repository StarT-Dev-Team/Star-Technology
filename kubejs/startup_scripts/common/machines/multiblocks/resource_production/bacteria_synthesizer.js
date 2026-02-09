GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('bacteria_synthesizer')
        .category('resource_production')
        .setMaxIOSize(1, 0, 5, 1)
		.setProgressBar(GuiTextures.PROGRESS_BAR_ASSEMBLER , FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('bacteria_synthesizer', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('bacteria_synthesizer')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
        .appearanceBlock(() => Block.getBlock('kubejs:peek_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle(" ABBBA ", " A   A ", " A   A ", " A   A ", " A   A ", " A   A ", "       ", "       ", "       ", "       ", "       ", "       ") 
            .aisle("ACCCCCA", "ACCCCCA", "ACCDCCA", "ACCDCCA", "ACCDCCA", "ACCCCCA", " ACCCA ", " A C A ", " A   A ", "  AAA  ", "       ", "       ") 
            .aisle("BCCCCCB", " CE EC ", " CE EC ", " CE EC ", " CE EC ", " CE EC ", " CCCCC ", "  CCC  ", "  CCC  ", " AACAA ", "   C   ", "   C   ") 
            .aisle("BCCCCCB", " C F C ", " D F D ", " D F D ", " D F D ", " C F C ", " CCFCC ", " CCFCC ", "  CFC  ", " ACFCA ", "  CFC  ", "  CGC  ") 
            .aisle("BCCCCCB", " CE EC ", " CE EC ", " CE EC ", " CE EC ", " CE EC ", " CCCCC ", "  CCC  ", "  CCC  ", " AACAA ", "   C   ", "   C   ") 
            .aisle("ACCCCCA", "ACC@CCA", "ACCDCCA", "ACCDCCA", "ACCDCCA", "ACCCCCA", " ACCCA ", " A C A ", " A   A ", "  AAA  ", "       ", "       ") 
            .aisle(" ABBBA ", " A   A ", " A   A ", " A   A ", " A   A ", " A   A ", "       ", "       ", "       ", "       ", "       ", "       ") 
            .where(" ", Predicates.any())
            .where("A", Predicates.blocks("gtceu:trinaquadalloy_frame"))
            .where("B", Predicates.blocks("gtceu:heat_vent"))
            .where("C", Predicates.blocks("kubejs:peek_casing")
				.or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(0))
				.or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(0))
				.or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(0))
				.or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
				.or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
				.or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(1)))
            .where("D", Predicates.blocks("gtceu:laminated_glass"))
            .where("E", Predicates.blocks("gtceu:molybdenum_disilicide_coil_block"))
            .where("F", Predicates.blocks("gtceu:tungstensteel_pipe_casing"))
            .where("G", Predicates.blocks("gtceu:extreme_engine_intake_casing"))
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
			.build())
        .workableCasingModel('kubejs:block/casings/basic/machine_casing_peek',
			'gtceu:block/multiblock/fusion_reactor');
});