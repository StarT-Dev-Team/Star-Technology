ServerEvents.recipes( event => {
	function dyed_create_stone(dye_tag, result_id){
		return event.shaped(
			Item.of(result_id, 8),
			[
				'AAA',
				'ABA',
				'AAA'
			],
			{
				'A': "create:scoria", //scoria has a recipe from smelting soulsand
				'B': dye_tag //and scorchia is obtained by dying it black (so this seems sensible)
			}
		)
	}

	dyed_create_stone("#forge:dyes/blue", "create:asurine")
	dyed_create_stone("#forge:dyes/red", "create:crimsite")
	dyed_create_stone("#forge:dyes/white", "create:limestone")
	dyed_create_stone("#forge:dyes/yellow", "create:ochrum")
	dyed_create_stone("#forge:dyes/green", "create:veridium")

	// unused
	event.remove({ output: 'create:crushed_raw_gold' })
	event.remove({ output: 'create:crushed_raw_copper' })
	event.remove({ output: 'create:crushed_raw_iron' })
	event.remove({ output: 'create:crushed_raw_zinc' })

})
