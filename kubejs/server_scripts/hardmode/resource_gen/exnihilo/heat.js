// packmode: hard

ServerEvents.recipes((event) => {
    //btw this and melting reload best by starting up again
    event.remove({ id: /exnihilosequentia:heat.*/ });

    event.recipes.exnihilosequentia.heat('minecraft:campfire', 2, { lit: 'true' });
    event.recipes.exnihilosequentia.heat('minecraft:furnace', 4, { lit: 'true' });
    event.recipes.exnihilosequentia.heat('minecraft:fire', 3);
    event.recipes.exnihilosequentia.heat('minecraft:lava', 5);
});
