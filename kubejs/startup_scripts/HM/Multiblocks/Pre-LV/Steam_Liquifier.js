GTCEuStartupEvents.registry('gtceu:machine', event => {
	event.create('steam_liquifier', 'multiblock')
		.rotationState(RotationState.NON_Y_AXIS)
		.recipeType('extractor')
		.machine((holder) => new $SteamMulti(holder, 4))
        .recipeModifier((machine, recipe) => $SteamMulti.recipeModifier(machine, recipe), true)
        .appearanceBlock(GCYMBlocks.CASING_INDUSTRIAL_STEAM)
		.pattern(definition => FactoryBlockPattern.start()
            .aisle('ABBBA', 'ACCCA', '#CDC#', '#CCC#', '#####') 
            .aisle('BCCCB', 'CAEAC', 'CAEAC', 'CA AC', '#CCC#') 
            .aisle('BCCCB', 'CE EC', 'DE ED', 'C   C', '#CFC#') 
            .aisle('BCCCB', 'CAEAC', 'CAEAC', 'CA AC', '#CCC#') 
            .aisle('ABBBA', 'ACCCA', '#C@C#', '#CCC#', '#####') 
            .where('A', Predicates.blocks('gtceu:bronze_frame'))
            .where('B', Predicates.blocks('gtceu:bronze_firebox_casing'))
            .where('C', Predicates.blocks('gtceu:industrial_steam_casing')
                .or(Predicates.abilities(PartAbility.STEAM_IMPORT_ITEMS).setPreviewCount(1).setMaxGlobalLimited(2))
                .or(Predicates.blocks('gtceu:ulv_fluid_output').setPreviewCount(1).setMaxGlobalLimited(2))
                .or(Predicates.abilities(PartAbility.STEAM_EXPORT_ITEMS).setPreviewCount(1).setMaxGlobalLimited(2)))
            .where('#', Predicates.any())
            .where('D', Predicates.blocks('gtceu:tempered_glass'))
            .where('E', Predicates.blocks('gtceu:bronze_pipe_casing'))
            .where('F', Predicates.abilities(PartAbility.STEAM).setExactLimit(1))
            .where(' ', Predicates.blocks('minecraft:air'))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
			.build())
		.workableCasingRenderer('gtceu:block/casings/gcym/industrial_steam_casing', 'gtceu:block/machines/extractor', false)
		
});