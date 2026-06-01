// packmode: hard

// DO NOT TOUCH 73 IM LOOKING AT YOU

ServerEvents.recipes((event) => {
    // btw this and melting reload best by starting up again

    // type = 'wood' or 'fired'

    event.remove({ id: /exnihilosequentia:melting.*/ });

    event.recipes.exnihilosequentia.melting('#minecraft:leaves', 'wood', Fluid.of('minecraft:water', 200));
    event.recipes.exnihilosequentia.melting('#minecraft:saplings', 'wood', Fluid.of('minecraft:water', 150));
    event.recipes.exnihilosequentia.melting('gtceu:wood_dust', 'wood', Fluid.of('minecraft:water', 125));
    event.recipes.exnihilosequentia.melting('kubejs:plant_fibers', 'wood', Fluid.of('minecraft:water', 50));
});
