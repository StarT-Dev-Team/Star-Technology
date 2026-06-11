GTCEuStartupEvents.registry('gtceu:world_gen_layer', (event) => {
    event
        .create('abydos')
        .targets('#minecraft:stone_ore_replaceables', 'minecraft:stone')
        .dimensions('sgjourney:abydos');

    // event.create('nether')
    //     .targets('minecraft:netherrack')
    //     .dimensions('minecraft:the_nether');
});
