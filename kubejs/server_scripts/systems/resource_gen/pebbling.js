global.withModsLoaded('exnihilosequentia', () => {
    BlockEvents.rightClicked('minecraft:grass_block', (event) => {
        if (event.player.isCrouching() && event.player.getMainHandItem() === null) {
            if (Math.random() < 0.75) {
                event.block.popItemFromFace(Item.of('exnihilosequentia:stone_pebble'), 'up');
            }
            if (Math.random() < 0.5) {
                event.block.popItemFromFace(Item.of('exnihilosequentia:andesite_pebble'), 'up');
            }
            if (Math.random() < 0.5) {
                event.block.popItemFromFace(Item.of('exnihilosequentia:granite_pebble'), 'up');
            }
            if (Math.random() < 0.5) {
                event.block.popItemFromFace(Item.of('exnihilosequentia:diorite_pebble'), 'up');
            }
        }
    });
});
