ServerEvents.recipes((event) => {
    const dirt = 'minecraft:dirt';
    const gravel = 'minecraft:gravel';
    const cdirt = 'minecraft:coarse_dirt';
    const sand = 'minecraft:sand';
    const dust = 'exnihilosequentia:dust';
    const cDrip = 'exnihilosequentia:crushed_dripstone';
    const cCalc = 'exnihilosequentia:crushed_calcite';
    const mud = 'minecraft:mud';
    const rDirt = 'minecraft:rooted_dirt';

    const sieve = (mesh, chance, input, result, wlog) => {
        event.custom({
            type: `exnihilosequentia:sifting`,
            input: input,
            result: result,
            rolls: [
                {
                    chance: chance,
                    mesh: mesh,
                },
            ],
            waterlogged: wlog,
        });
    };

    // Crushed Rocks
    [
        { Crushed: 'exnihilosequentia:crushed_andesite', OreType: 'sphalerite' },
        { Crushed: 'exnihilosequentia:crushed_basalt', OreType: 'pyrite' },
        { Crushed: 'exnihilosequentia:crushed_blackstone', OreType: 'magnetite' },
        { Crushed: 'exnihilosequentia:crushed_deepslate', OreType: 'galena' },
        { Crushed: 'exnihilosequentia:crushed_tuff', OreType: 'hematite' },
        { Crushed: 'exnihilosequentia:crushed_granite', OreType: 'cassiterite' },
        { Crushed: 'exnihilosequentia:crushed_diorite', OreType: 'chalcopyrite' },
    ].forEach((c) => {
        sieve('string', 0.6, c.Crushed, `kubejs:${c.OreType}_crushed_ore_chunk`, false);
        sieve('string', 0.1, c.Crushed, `gtceu:stone_dust`, false);
        sieve('flint', 0.2, c.Crushed, `gtceu:crushed_${c.OreType}_ore`, false);
        sieve('flint', 0.05, c.Crushed, `gtceu:small_stone_dust`, false);
        sieve('iron', 0.15, gravel, `gtceu:crushed_${c.OreType}_ore`, false);
    });

    // Dirt
    sieve('string', 1, cdirt, dirt, false);
    sieve('string', 0.15, cdirt, dirt, false);
    sieve('string', 0.75, cdirt, 'exnihilosequentia:stone_pebble', false);
    sieve('string', 0.75, cdirt, 'exnihilosequentia:stone_pebble', false);
    sieve('string', 0.75, cdirt, 'exnihilosequentia:stone_pebble', false);
    sieve('string', 0.15, cdirt, 'minecraft:flint', false);

    sieve('flint', 1, cdirt, dirt, false);
    sieve('flint', 0.25, cdirt, dirt, false);
    sieve('flint', 0.25, cdirt, gravel, false);

    // Gravel
    ['andesite', 'basalt', 'blackstone', 'deepslate', 'diorite', 'granite', 'tuff'].forEach((pebble) => {
        sieve('string', 0.6, gravel, `exnihilosequentia:${pebble}_pebble`, false);
        sieve('string', 0.6, gravel, `exnihilosequentia:${pebble}_pebble`, false);
        sieve('flint', 0.4, gravel, `exnihilosequentia:crushed_${pebble}`, false);
    });
    //Iron in crushed to get ores

    // Sand
    sieve('string', 0.6, sand, 'exnihilosequentia:calcite_pebble', false);
    sieve('string', 0.6, sand, 'exnihilosequentia:dripstone_pebble', false);
    sieve('string', 0.6, sand, 'exnihilosequentia:calcite_pebble', false);
    sieve('string', 0.6, sand, 'exnihilosequentia:dripstone_pebble', false);
    sieve('flint', 0.4, sand, 'exnihilosequentia:crushed_calcite', false);
    sieve('flint', 0.4, sand, 'exnihilosequentia:crushed_dripstone', false);

    // Other Crushed
    sieve('string', 0.6, cCalc, 'gtceu:small_calcite_dust', false);
    sieve('string', 0.25, cCalc, 'gtceu:tiny_sulfur_dust', false);
    sieve('flint', 0.25, cCalc, 'gtceu:calcite_dust', false);
    sieve('flint', 0.15, cCalc, 'gtceu:small_sulfur_dust', false);

    sieve('string', 0.6, cDrip, 'gtceu:small_gypsum_dust', false);
    sieve('string', 0.1, cDrip, 'minecraft:clay_ball', false);
    sieve('flint', 0.25, cDrip, 'gtceu:gypsum_dust', false);
    sieve('flint', 0.25, cDrip, 'minecraft:clay_ball', false);

    // Dust
    sieve('string', 0.35, dust, 'gtceu:small_redstone_dust', false);
    sieve('string', 0.08, dust, 'minecraft:quartz', false);
    sieve('flint', 0.15, dust, 'minecraft:redstone', false);
    sieve('flint', 0.12, dust, 'minecraft:quartz', false);

    // Mud (temp)
    sieve('flint', 0.1, mud, 'thermal:slime_mushroom_spores', false);
    sieve('flint', 0.08, mud, 'exnihilosequentia:mycelium_spores', false);
    sieve('flint', 0.04, mud, 'minecraft:mangrove_propagule', false);
    sieve('flint', 0.01, mud, 'minecraft:sugar_cane', false);

    // Saplings
    ['acacia', 'birch', 'cherry', 'dark_oak', 'jungle', 'oak', 'spruce'].forEach((sapling) => {
        sieve('flint', 0.1, 'architects_palette:twisted_leaves', `minecraft:${sapling}_sapling`, false);
    });

    // Rooted Dirt
    ['carrot', 'potato', 'melon_seeds', 'pumpkin_seeds', 'beetroot_seeds', 'bamboo'].forEach((Crop) => {
        sieve('flint', 0.15, rDirt, `minecraft:${Crop}`, false);
    });
    sieve('flint', 0.1, rDirt, 'exnihilosequentia:grass_seeds', false);
});
