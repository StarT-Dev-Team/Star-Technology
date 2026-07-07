JEIEvents.information((event) => {
    event.addItem('minecraft:stick', ['Obtained by breaking Dead Bushes.\n']);
    event.addItem('farmersdelight:tree_bark', ['Obtained by stripping Logs.\n']);
    event.addItem('farmersdelight:straw', ['Obtained by breaking leaves with a Flint Scythe or breaking down bark.']);
    event.addItem('gtceu:sticky_resin', ['Early on can sometimes be obtained from stripping logs.\n']);
    event.addItem('kubejs:plant_fibers', ['Obtained by breaking leaves with a Flint Scythe or breaking down straw.\n']);
    event.addItem('kubejs:water_bowl', ['Obtained by getting 250mb out of a crucible.\n']);
    event.addItem('kubejs:flint_shard', ['Obtained by scavenging (shift r-click) through coarse dirt.\n']);
    event.addItem('minecraft:grass_block', ['Scavenging this can give you all the pebbles you are used to.\n']);
    event.addItem('exnihilosequentia:jungle_crucible', [
        'Hollow out a stripped jungle log using the following order: Knife, Axe, Saw, and Finally Knife.\n',
    ]);
    event.addItem('minecraft:crafting_table', [
        'Interact with a barked jungle log using the following order: Saw, Axe, Knife, and Finally Canvas.\n',
    ]);
    event.addItem('minecraft:jungle_sapling', [
        'Rehydrate that dead bush you saved with your water bowl. You saved a sapling right? [Emergency Item go brr]\n',
    ]);

    ['andesite', 'basalt', 'blackstone', 'calcite', 'deepslate', 'diorite', 'dripstone', 'granite', 'tuff'].forEach(
        (pebble) => {
            event.addItem(`exnihilosequentia:${pebble}_pebble`, [
                `Can be obtainined by using any scavenging rod on Grass Block.\n`,
            ]);
        }
    );
    event.addItem(`exnihilosequentia:stone_pebble`, [
        `Can be obtainined by using any scavenging rod on Grass Block or Non-Basic on Coarse Dirt.\n`,
    ]);
});
