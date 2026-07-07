// Keep so doesnt bork non-HM
ForgeEvents.onEvent('net.minecraftforge.event.level.BlockEvent$FluidPlaceBlockEvent', (event) => {
    // 	const result = event.getNewState().getBlock();
    // 	let block;

    // 	if (result == Blocks.COBBLESTONE) block = Blocks.CALCITE;
    // 	if (result == Blocks.STONE) block = Blocks.TUFF;
    // 	if (result == Blocks.BASALT) block = Blocks.DEEPSLATE;
    // 	if (result == Blocks.OBSIDIAN) block = Blocks.BEDROCK;

    // 	if (block) event.setNewState(block.defaultBlockState());

    event.setNewState(event.getOriginalState());
});
