// packmode: hard

// Coarse Dirt Scavenging

const damageTool = (event) => {
    const { player, block, item, level } = event;

    if (player.creative) return;

    item.damageValue++;
    if (item.damageValue >= item.maxDamage) {
        item.count--;
        level.playSound(null, block.pos, 'minecraft:entity.item.break', 'blocks');
    }
};

BlockEvents.rightClicked('minecraft:coarse_dirt', (event) => {
    const { player, block, item, level } = event;

    const popUp = (item, chance) => Math.random() < chance && block.popItemFromFace(item, 'up');

    const dig = () => {
        level.playSound(null, block.pos, 'minecraft:block.composter.fill', 'blocks');
        player.swing();
    };

    if (player.getMainHandItem() === null && player.getOffHandItem() === null && player.isCrouching()) {
        popUp('kubejs:flint_shard', 0.25);
        popUp('kubejs:flint_shard', 0.25);
        popUp('minecraft:cookie', 0.002);
        player.addExhaustion(0.03);
        dig();
    }

    if (item.id === 'kubejs:basic_scavenging_rod') {
        popUp('kubejs:flint_shard', 0.5);
        popUp('minecraft:flint', 0.2);
        popUp('kubejs:flint_shard', 0.5);
        popUp('minecraft:flint', 0.2);
        popUp('minecraft:cookie', 0.003);

        damageTool(event);
        dig();
    }

    if (item.id === 'kubejs:scavenging_rod') {
        popUp('kubejs:flint_shard', 0.5);
        popUp('minecraft:flint', 0.5);
        popUp('kubejs:flint_shard', 0.5);
        popUp('minecraft:flint', 0.5);
        popUp('exnihilosequentia:stone_pebble', 0.2);
        popUp('minecraft:cookie', 0.004);

        damageTool(event);
        dig();
    }
});

BlockEvents.rightClicked('minecraft:grass_block', (event) => {
    const { player, block, item, level } = event;

    const popUp = (item, chance) => Math.random() < chance && block.popItemFromFace(item, 'up');

    const dig = () => {
        level.playSound(null, block.pos, 'minecraft:block.composter.fill', 'blocks');
        player.swing();
    };

    if (item.id === 'kubejs:basic_scavenging_rod') {
        popUp('exnihilosequentia:stone_pebble', 0.02);
        popUp('exnihilosequentia:andesite_pebble', 0.06);
        popUp('exnihilosequentia:basalt_pebble', 0.06);
        popUp('exnihilosequentia:blackstone_pebble', 0.06);
        popUp('exnihilosequentia:deepslate_pebble', 0.06);
        popUp('exnihilosequentia:diorite_pebble', 0.06);
        popUp('exnihilosequentia:granite_pebble', 0.06);
        popUp('exnihilosequentia:tuff_pebble', 0.06);
        popUp('exnihilosequentia:calcite_pebble', 0.06);
        popUp('exnihilosequentia:dripstone_pebble', 0.06);
        popUp('minecraft:cookie', 0.005);
        player.addExhaustion(0.03);

        damageTool(event);
        dig();
    }

    if (item.id === 'kubejs:scavenging_rod') {
        popUp('exnihilosequentia:stone_pebble', 0.04);
        popUp('exnihilosequentia:andesite_pebble', 0.1);
        popUp('exnihilosequentia:basalt_pebble', 0.1);
        popUp('exnihilosequentia:blackstone_pebble', 0.1);
        popUp('exnihilosequentia:deepslate_pebble', 0.1);
        popUp('exnihilosequentia:diorite_pebble', 0.1);
        popUp('exnihilosequentia:granite_pebble', 0.1);
        popUp('exnihilosequentia:tuff_pebble', 0.1);
        popUp('exnihilosequentia:calcite_pebble', 0.1);
        popUp('exnihilosequentia:dripstone_pebble', 0.1);
        popUp('minecraft:cookie', 0.008);
        player.addExhaustion(0.02);

        damageTool(event);
        dig();
    }
});

// In-world recipes for Crucible and Crafting Table

[
    {
        hit: 'minecraft:stripped_jungle_log',
        tool: 'forge:tools/knives',
        get: 'kubejs:crucible_stage_1',
    },
    { hit: 'kubejs:crucible_stage_1', tool: 'forge:tools/axes', get: 'kubejs:crucible_stage_2' },
    { hit: 'kubejs:crucible_stage_2', tool: 'forge:tools/saws', get: 'kubejs:crucible_stage_3' },
    {
        hit: 'kubejs:crucible_stage_3',
        tool: 'forge:tools/knives',
        get: 'exnihilosequentia:jungle_crucible',
    },
].forEach((crucible) => {
    const { hit, tool, get } = crucible;

    BlockEvents.rightClicked(hit, (event) => {
        const { player, block, level } = event;

        if (!player.getMainHandItem().hasTag(tool)) return;
        if (player.getOffHandItem() !== null) return;

        block.set(get);
        player.addItem(Item.of('gtceu:wood_dust'));

        damageTool(event);

        level.playSound(null, block.pos, 'minecraft:block.wood.break', 'blocks');
        player.swing();
    });
});

[
    { hit: 'minecraft:jungle_log', tool: 'forge:tools/saws', get: 'kubejs:crafting_stage_1' },
    { hit: 'kubejs:crafting_stage_1', tool: 'forge:tools/axes', get: 'kubejs:crafting_stage_2' },
    { hit: 'kubejs:crafting_stage_2', tool: 'forge:tools/knives', get: 'kubejs:crafting_stage_3' },
    {
        hit: 'kubejs:crafting_stage_3',
        tool: 'farmersdelight:canvas',
        get: 'minecraft:crafting_table',
    },
].forEach((table) => {
    const { hit, tool, get } = table;

    BlockEvents.rightClicked(hit, (event) => {
        const { player, block, level, item } = event;

        if (!item.hasTag(tool) && item.id !== 'farmersdelight:canvas') return;

        if (item.id === 'farmersdelight:canvas') item.count--;
        if (item.hasTag(tool)) damageTool(event);

        block.set(get);
        level.playSound(null, block.pos, 'minecraft:block.wood.break', 'blocks');
        player.swing();
    });
});

// Crafting Recipes

ServerEvents.recipes((event) => {
    const id = global.id;
    event
        .shaped(Item.of('minecraft:flint'), ['SS', 'SS'], {
            S: 'kubejs:flint_shard',
        })
        .id('start:shaped/flint');

    event.remove({ id: 'minecraft:coarse_dirt' });
    event
        .shaped(Item.of('minecraft:coarse_dirt', 2), ['DF', 'FD'], {
            F: 'minecraft:flint',
            D: 'minecraft:dirt',
        })
        .id('start:shaped/coarse_dirt');

    event.recipes.create
        .mixing('2x minecraft:rooted_dirt', ['2x minecraft:dirt', '1x minecraft:mangrove_roots'])
        .id('start:create_mixer/rooted_dirt');
    event.recipes.gtceu
        .mixer(id('rooted_dirt_hm'))
        .itemInputs('minecraft:dirt', 'minecraft:mangrove_roots')
        .itemOutputs('2x minecraft:rooted_dirt')
        .duration(100)
        .EUt(4);

    event.recipes.create
        .mixing('3x minecraft:coarse_dirt', ['3x minecraft:dirt', '2x minecraft:flint'])
        .id('start:create_mixer/coarse_dirt_flint');

    const stones = [
        'andesite',
        'basalt',
        'blackstone',
        'deepslate',
        'diorite',
        'granite',
        'tuff',
        'calcite',
        'dripstone',
    ];

    stones.forEach((stone) => {
        event
            .shaped(Item.of(`exnihilosequentia:crushed_${stone}`), ['PP', 'PP'], {
                P: `exnihilosequentia:${stone}_pebble`,
            })
            .id(`start:shaped/crushed${stone}`);
    });

    event
        .shaped(Item.of('minecraft:cobblestone'), ['PP', 'PP'], {
            P: 'exnihilosequentia:stone_pebble',
        })
        .id('start:shaped/cobblestone');

    event.recipes.gtceu
        .stone_barrel(id('stone_pebble'))
        .circuit(0)
        .inputFluids('minecraft:lava 10', 'minecraft:water 490')
        .itemOutputs('4x exnihilosequentia:stone_pebble')
        .duration(10);

    event.recipes.gtceu
        .stone_barrel(id('obsidian'))
        .circuit(10)
        .inputFluids('minecraft:lava 1000', 'minecraft:water 1000')
        .itemOutputs('minecraft:obsidian')
        .duration(600);

    const primitiveProcessing = [
        { primary: 'hematite', secondary: 'magnetite', tertiary: 'nickel' },
        { primary: 'chalcopyrite', secondary: 'pyrite', tertiary: 'gold' },
        { primary: 'sphalerite', secondary: 'copper', tertiary: 'gallium' },
        { primary: 'cassiterite', secondary: 'tin', tertiary: 'bismuth' },
        { primary: 'galena', secondary: 'sulfur', tertiary: 'silver' },
        { primary: 'magnetite', secondary: 'gold', tertiary: 'iron' },
        { primary: 'pyrite', secondary: 'sulfur', tertiary: 'antimony' },
    ];

    primitiveProcessing.forEach((material) => {
        event.recipes.gtceu
            .primitive_ore_processing(id(`crushed_${material.primary}_ore`))
            .itemInputs(`gtceu:crushed_${material.primary}_ore`, '2x #minecraft:coals')
            .inputFluids('minecraft:water 500')
            .itemOutputs(`gtceu:${material.primary}_dust`)
            .chancedOutput(`gtceu:${material.primary}_dust`, 5000, 0)
            .chancedOutput(`gtceu:${material.secondary}_dust`, 2500, 0)
            .chancedOutput(`gtceu:${material.tertiary}_dust`, 1250, 0)
            .duration(400);
        event.recipes.gtceu
            .steam_ore_processing(id(`crushed_${material.primary}_ore`))
            .itemInputs(`gtceu:crushed_${material.primary}_ore`)
            .inputFluids('minecraft:water 500')
            .itemOutputs(`gtceu:${material.primary}_dust`)
            .chancedOutput(`gtceu:${material.primary}_dust`, 5000, 0)
            .chancedOutput(`gtceu:${material.secondary}_dust`, 2500, 0)
            .chancedOutput(`gtceu:${material.tertiary}_dust`, 1250, 0)
            .duration(320)
            .EUt(GTValues.VA[GTValues.LV]);

        // Chunk Processing
        event.recipes.gtceu
            .primitive_ore_processing(id(`${material.primary}_crushed_ore_chunk`))
            .itemInputs(`3x kubejs:${material.primary}_crushed_ore_chunk`, '2x #minecraft:coals')
            .inputFluids('minecraft:water 500')
            .chancedOutput(`gtceu:${material.primary}_dust`, 9000, 0)
            .chancedOutput(`gtceu:${material.secondary}_dust`, 1500, 0)
            .chancedOutput(`gtceu:${material.tertiary}_dust`, 750, 0)
            .duration(480);
    });

    event.recipes.gtceu
        .barrel(id('slitake'))
        .notConsumable('thermal:slime_mushroom_spores')
        .inputFluids('exnihilosequentia:witch_water 200')
        .chancedOutput('thermal:slime_mushroom_spores', 7000, 0)
        .duration(240);

    event.recipes.gtceu
        .barrel_transformation(id('soul_sand'))
        .itemInputs('minecraft:sand')
        .inputFluids('exnihilosequentia:witch_water 1000')
        .itemOutputs('minecraft:soul_sand')
        .duration(600);

    event.recipes.gtceu
        .barrel_transformation(id('witch_water'))
        .chancedInput('exnihilosequentia:mycelium_spores', 1000, 0)
        .inputFluids('minecraft:water 1000')
        .outputFluids('exnihilosequentia:witch_water 1000')
        .duration(800);

    event.recipes.gtceu
        .barrel_composting(id('dirt'))
        .itemInputs('4x #minecraft:leaves')
        .itemOutputs('1x minecraft:dirt')
        .duration(160);

    event.recipes.gtceu
        .latex_plantation(id(`latex`))
        .chancedInput(`minecraft:bone_meal`, 2500, 0)
        .notConsumable('gtceu:wood_screw')
        .outputFluids(`thermal:latex 25`)
        .duration(400);
    const latexType = [
        { fuel: 'minecraft:bone_meal', circ: '1' },
        { fuel: 'thermal:compost', circ: '2' },
        { fuel: 'gtceu:fertilizer', circ: '3' },
    ];
    latexType.forEach((latex) => {
        event.recipes.gtceu
            .latex_plantation(id(`latex_${latex.circ}`))
            .chancedInput(`${latex.fuel}`, 2500, 0)
            .notConsumable('gtceu:iron_screw')
            .circuit(latex.circ)
            .outputFluids(`thermal:latex ${25 + 25 * latex.circ}`)
            .duration(400);
    });

    [0, 1, 2, 3, 4].forEach((tier) => {
        let pumpTier = tier === 0 ? 'ulv' : tier === 1 ? 'lv' : tier === 2 ? 'mv' : tier === 3 ? 'hv' : 'ev';
        event.recipes.gtceu
            .industrial_pump(id(`water_${tier}`))
            .notConsumable(`gtceu:${pumpTier}_electric_pump`)
            .outputFluids(`minecraft:water ${3000 * Math.pow(2, tier)}`)
            .duration(20);
    });

    event.recipes.gtceu
        .assembler(id('industrial_pump'))
        .itemInputs(
            '1x gtceu:primitive_pump',
            '6x gtceu:double_steel_plate',
            '2x gtceu:ulv_electric_pump',
            '2x #gtceu:circuits/ulv',
            '4x gtceu:rubber_ring'
        )
        .circuit(3)
        .inputFluids('gtceu:rubber 288')
        .itemOutputs('gtceu:industrial_pump')
        .duration(800)
        .EUt(8);
});

// Jungle Wood Stripping (Bark + Resin)

BlockEvents.rightClicked('minecraft:jungle_log', (event) => {
    const { player, item } = event;

    if (!item.hasTag('minecraft:axes')) return;

    player.addItem(Item.of('farmersdelight:tree_bark'));
    if (Math.random() < 0.1) player.addItem(Item.of('gtceu:sticky_resin'));
});

// Dead Bush -> Jungle Sapling

BlockEvents.rightClicked('minecraft:dead_bush', (event) => {
    const { player, block, item, hand, level } = event;

    if (item.id !== 'kubejs:water_bowl') return;

    block.set('minecraft:jungle_sapling');
    player.setItemInHand(hand, Item.of('minecraft:bowl'));

    level.spawnParticles(
        'minecraft:happy_villager',
        false,
        block.x + 0.5,
        block.y + 0.5,
        block.z + 0.5,
        0.25,
        0.25,
        0.25,
        10,
        0.01
    );
    level.playSound(null, block.pos, 'minecraft:item.bone_meal.use', 'blocks');
    player.swing();
});

// Water Bowls

BlockEvents.rightClicked('exnihilosequentia:jungle_crucible', (event) => {
    const { player, block, item, hand, level } = event;
    const { FluidName: fluid, Amount: amount } = block.entityData.tank;

    if (item.id !== 'minecraft:bowl') return;
    if (fluid !== 'minecraft:water' || amount < 250) return;

    /* eslint-disable */
    block.mergeEntityData({ tank: { FluidName: 'minecraft:water', Amount: amount - 250 } });
    /* eslint-enable */

    if (item.count > 1) {
        player.give(Item.of('kubejs:water_bowl'));
        item.count--;
    } else {
        player.setItemInHand(hand, Item.of('kubejs:water_bowl'));
    }

    level.playSound(null, block.pos, 'minecraft:item.bucket.fill', 'blocks');
    player.swing();
});

BlockEvents.rightClicked('exnihilosequentia:jungle_crucible', (event) => {
    const { player, block, item, hand, level } = event;
    const { FluidName: fluid, Amount: amount } = block.entityData.tank;

    if (item.id !== 'kubejs:water_bowl') return;
    if (fluid !== 'minecraft:water' || amount > 3750) return;

    /* eslint-disable */
    block.mergeEntityData({ tank: { FluidName: 'minecraft:water', Amount: amount + 250 } });
    /* eslint-enable */
    player.setItemInHand(hand, Item.of('minecraft:bowl'));

    level.playSound(null, block.pos, 'minecraft:item.bucket.empty', 'blocks');
    player.swing();
});

// Mud and Clay In-world Recipes

BlockEvents.rightClicked('minecraft:dirt', (event) => {
    const { player, block, item, hand, level } = event;

    if (item.id !== 'kubejs:water_bowl') return;

    block.set('minecraft:mud');
    player.setItemInHand(hand, Item.of('minecraft:bowl'));

    level.playSound(null, block.pos, 'minecraft:item.bucket.fill', 'blocks');
    player.swing();
});

BlockEvents.rightClicked('exnihilosequentia:dust', (event) => {
    const { player, block, item, hand, level } = event;

    if (item.id !== 'kubejs:water_bowl') return;

    block.set('minecraft:clay');
    player.setItemInHand(hand, Item.of('minecraft:bowl'));

    level.playSound(null, block.pos, 'minecraft:item.bucket.fill', 'blocks');
    player.swing();
});

BlockEvents.rightClicked('minecraft:gold_block', (event) => {
    const { player, block, item } = event;

    if (item.id !== 'komarumod:komaru_powder') return;
    player.swing();
    block.set('minecraft:cobblestone');

    event.server.runCommandSilent(
        `execute at ${event.player.username} run summon minecraft:lightning_bolt ${Math.floor(event.block.x)} ${Math.floor(event.block.y)} ${Math.floor(event.block.z)}`
    );
    // eslint-disable-next-line no-unused-vars
    event.server.scheduleInTicks(40, (ctx) => {
        event.server.runCommandSilent(
            `execute at ${event.player.username} run summon komarumod:komaru ${Math.floor(event.player.x)} ${Math.floor(event.player.y)} ${Math.floor(event.player.z)}`
        );
        event.server.runCommandSilent(
            `effect give @e[type=komarumod:komaru] minecraft:fire_resistance infinite 1 true`
        );
        event.server.runCommandSilent(`effect give @e[type=komarumod:komaru] minecraft:slow_falling infinite 1 true`);
        event.server.runCommandSilent(`effect give @e[type=komarumod:komaru] minecraft:resistance infinite 5 true`);
        event.server.runCommandSilent(`effect give @e[type=komarumod:komaru] minecraft:regeneration infinite 5 true`);
    });
});

BlockEvents.rightClicked('minecraft:netherite_block', (event) => {
    const { player, block, item } = event;

    if (item.id !== 'komarumod:komaru_powder') return;
    player.swing();
    block.set('minecraft:cobblestone');

    event.server.runCommandSilent(`effect clear @e[type=komarumod:komaru]`);
    event.server.runCommandSilent(
        `execute at ${event.player.username} run tp @e[type=komarumod:komaru] ${Math.floor(event.player.x)} ${Math.floor(event.player.y) + 200} ${Math.floor(event.player.z)}`
    );
    event.server.runCommandSilent(
        `execute at ${event.player.username} run summon minecraft:lightning_bolt ${Math.floor(event.block.x)} ${Math.floor(event.block.y)} ${Math.floor(event.block.z)}`
    );
    event.player.potionEffects.add('minecraft:nausea', 100, 1);
    event.player.tell(`§kTruly§r is not yet pleased with you....`);
    // eslint-disable-next-line no-unused-vars
    event.server.scheduleInTicks(100, (ctx) => {
        event.player.tell(`Now Die`);
        // eslint-disable-next-line no-unused-vars
        event.server.scheduleInTicks(10, (ctx) => {
            // eslint-disable-next-line no-unused-vars
            event.server.scheduleInTicks(3, (ctx) => {
                event.server.runCommandSilent(
                    `execute at ${event.player.username} run summon minecraft:lightning_bolt ${Math.floor(event.player.x)} ${Math.floor(event.player.y)} ${Math.floor(event.player.z)}`
                );
                // eslint-disable-next-line no-unused-vars
                event.server.scheduleInTicks(3, (ctx) => {
                    event.server.runCommandSilent(
                        `execute at ${event.player.username} run summon minecraft:lightning_bolt ${Math.floor(event.player.x)} ${Math.floor(event.player.y)} ${Math.floor(event.player.z)}`
                    );
                    // eslint-disable-next-line no-unused-vars
                    event.server.scheduleInTicks(3, (ctx) => {
                        event.server.runCommandSilent(
                            `execute at ${event.player.username} run summon minecraft:lightning_bolt ${Math.floor(event.player.x)} ${Math.floor(event.player.y)} ${Math.floor(event.player.z)}`
                        );
                        // eslint-disable-next-line no-unused-vars
                        event.server.scheduleInTicks(3, (ctx) => {
                            event.player.potionEffects.add('minecraft:instant_damage', 1, 99);
                        });
                    });
                });
            });
        });
    });
});
