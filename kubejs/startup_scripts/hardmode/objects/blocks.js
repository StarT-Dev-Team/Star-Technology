StartupEvents.registry('block', (event) => {
    // === Staged Blocks ===
    ['1', '2', '3'].forEach((num) => {
        event
            .create(`crucible_stage_${num}`)
            .hardness(1)
            .resistance(2)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/axe')
            .tagBlock('minecraft:needs_stone_tool');

        event
            .create(`crafting_stage_${num}`)
            .hardness(1)
            .resistance(2)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/axe')
            .tagBlock('minecraft:needs_stone_tool');
    });

    // === Sediments ===
    event
        .create('refined_sand', 'falling')
        .hardness(1)
        .resistance(1)
        .soundType('sand')
        .requiresTool(false)
        .tagBlock('mineable/shovel')
        .textureAll('kubejs:block/hardmode/refined_sand');

    event
        .create('refined_dust', 'falling')
        .hardness(1)
        .resistance(1)
        .soundType('sand')
        .requiresTool(false)
        .tagBlock('mineable/shovel')
        .textureAll('kubejs:block/hardmode/refined_dust');

    // === Casings ===
    event
        .create('reinforced_stone_bricks')
        .hardness(5)
        .resistance(1)
        .soundType('stone')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_stone_tool')
        .textureAll('kubejs:block/hardmode/reinforced_stone_bricks');
});
