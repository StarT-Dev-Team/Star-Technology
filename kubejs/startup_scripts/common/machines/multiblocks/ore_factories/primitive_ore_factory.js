GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
	event.create('primitive_ore_processing')
		.category('ore_processing')
		.setMaxIOSize(3, 4, 1, 0)
		.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW , FillDirection.LEFT_TO_RIGHT)
		.setSound(GTSoundEntries.FURNACE);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {

	event.create('primitive_ore_factory', 'primitive')
		.rotationState(RotationState.NON_Y_AXIS)
		.recipeType('primitive_ore_processing')
		.appearanceBlock(GTBlocks.CASING_PRIMITIVE_BRICKS)
		.pattern(definition => FactoryBlockPattern.start()
			.aisle(' FFF ', ' FFF ', ' FFF ', '  F  ', '     ', '     ', '     ')
			.aisle('FFFFF', 'FG#GF', 'F###F', ' F#F ', ' FFF ', '  F  ', '  B  ')
			.aisle('FFFFF', 'F###F', 'F###F', 'F###F', ' F#F ', ' F#F ', ' B B ')
			.aisle('FFFFF', 'FG#GF', 'F###F', ' F#F ', ' FFF ', '  F  ', '  B  ')
			.aisle(' FFF ', ' FCF ', ' FFF ', '  F  ', '     ', '     ', '     ')
			.where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('#', Predicates.air())
			.where('F', Predicates.blocks(GTBlocks.CASING_PRIMITIVE_BRICKS.get())
				.or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1)))
			.where('G', Predicates.blocks(GTBlocks.CASING_BRONZE_PIPE.get()))
			.where('B', Predicates.blocks('gtceu:bronze_machine_casing'))
			.where(' ', Predicates.any())
			.build())
		.workableCasingModel("gtceu:block/casings/solid/machine_primitive_bricks", "kubejs:block/multiblock/primitive_blast_furnace")
		.editableUI(
			global.ui_builder({
				group: 'primitive',
				name: 'primitive_ore_factory',
				size: [166, 100],
				background: GuiTextures.PRIMITIVE_BACKGROUND,
				progress: {
					pos: [73, 38],
					size: [20, 18],
					texture: GuiTextures.PRIMITIVE_BLAST_FURNACE_PROGRESS_BAR
				},
				inputs: [
					{ type: 'item', index: 0, pos: [30, 29], texture: GuiTextures.PRIMITIVE_SLOT },
					{ type: 'item', index: 1, pos: [48, 29], texture: GuiTextures.PRIMITIVE_SLOT },
					{ type: 'item', index: 2, pos: [39, 47], texture: GuiTextures.PRIMITIVE_SLOT },
					{ type: 'fluid', index: 0, pos: [73, 62], texture: GuiTextureGroup(GuiTextures.PRIMITIVE_SLOT, GuiTextures.PRIMITIVE_LARGE_FLUID_TANK_OVERLAY.getSubTexture(0, 0.04, 1, 0.22)) },
				],
				outputs: [
					{ type: 'item', index: 0, pos: [100, 29], texture: GuiTextures.PRIMITIVE_SLOT },
					{ type: 'item', index: 1, pos: [118, 29], texture: GuiTextures.PRIMITIVE_SLOT },
					{ type: 'item', index: 2, pos: [118, 47], texture: GuiTextures.PRIMITIVE_SLOT },
					{ type: 'item', index: 3, pos: [100, 47], texture: GuiTextures.PRIMITIVE_SLOT },
				]
			})
		);
});