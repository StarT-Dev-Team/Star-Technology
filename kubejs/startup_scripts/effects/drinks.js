StartupEvents.registry('mob_effect', event => {

    event.create('reach')
        .color(0x000000)
        .beneficial()
        .modifyAttribute('minecraft:block_interaction_range', 'f88c30a3-5478-4000-a056-933f8d57fc99', 10, "addition");

});

/*
[13Aug2025 16:52:18.956] [Render thread/WARN] [net.minecraftforge.registries.ForgeRegistry/REGISTRIES]: Registry minecraft:mob_effect: Object did not get ID it asked for.
    Name: kubejs:reach Expected: 54 Got: 55
*/