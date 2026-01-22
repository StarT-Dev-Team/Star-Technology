ServerEvents.recipes(event => {

    // Compat fixes
    event.replaceInput({ input: 'farmersdelight:onion'}, 'farmersdelight:onion', '#forge:crops/onion');
    
    event.replaceInput({ input: 'farmersdelight:onion'}, 'farmersdelight:onion', '#forge:crops/onion');

    ['tiled','framed','horizontal_framed','vertical_framed'].forEach(type => {
        event.remove({ id: `create:smelting/glass_pane_from_${type}_glass_pane`})
    });

    event.replaceInput({id: 'create:crafting/kinetics/goggles'}, '#forge:plates/gold', 'gtceu:copper_plate');

    event.remove({ id: 'create:splashing/stained_glass'});

    const nuggetFixMod = (mod) => {
        event.replaceOutput({output: `${mod}:copper_nugget`},`${mod}:copper_nugget`,`gtceu:copper_nugget`);
        event.replaceOutput({output: `${mod}:zinc_nugget`},`${mod}:zinc_nugget`,`gtceu:zinc_nugget`);
        event.replaceOutput({output: `${mod}:brass_nugget`},`${mod}:brass_nugget`,`gtceu:brass_nugget`);
        event.replaceInput({input: `${mod}:copper_nugget`},`${mod}:copper_nugget`,`gtceu:copper_nugget`);
        event.replaceInput({input: `${mod}:zinc_nugget`},`${mod}:zinc_nugget`,`gtceu:zinc_nugget`);
        event.replaceInput({input: `${mod}:brass_nugget`},`${mod}:brass_nugget`,`gtceu:brass_nugget`);
    }

    nuggetFixMod('create');
    nuggetFixMod('thermal');
    nuggetFixMod('exnihilosequentia');

    // Create
    event.shapeless('9x create:andesite_alloy', ['create:andesite_alloy_block']).id('start:shapeless/andesite_alloy_block_decomp');

    // Drawers
    [1,2,4].forEach(size => {
        event.remove({id: `functionalstorage:oak_drawer_alternate_x${size}`});
    });

    // Enderchest
    event.replaceInput({id: 'enderchests:ender_pouch'}, 'minecraft:leather', 'gtceu:carbon_fiber_plate');

    // Building blocks
    [{input: 'architects_palette:abyssaline_lamp', output: 'architects_palette:hadaline_lamp'},
    {input: 'architects_palette:abyssaline_pillar', output: 'architects_palette:hadaline_pillar'},
    {input: 'architects_palette:abyssaline_bricks', output: 'architects_palette:hadaline_bricks'},
    {input: 'architects_palette:chiseled_abyssaline_bricks', output: 'architects_palette:chiseled_hadaline_bricks'},
    {input: 'architects_palette:sunstone', output: 'architects_palette:moonstone'},
    {input: 'gtceu:steel_ingot', output: 'architects_palette:unobtanium'},
    {input: 'minecraft:granite', output: 'architects_palette:onyx'},
    {input: '#minecraft:logs', output: 'architects_palette:twisted_log'},
    {input: 'architects_palette:abyssaline', output: 'architects_palette:hadaline'},
    {input: 'architects_palette:abyssaline_tiles', output: 'architects_palette:hadaline_tiles'},
    {input: '#minecraft:planks', output: 'architects_palette:twisted_planks'},
    {input: 'minecraft:diorite', output: 'architects_palette:nebulite'},
    {input: 'architects_palette:rotten_flesh_block', output: 'architects_palette:entrails'},
    {input: 'minecraft:polished_blackstone', output: 'architects_palette:craterstone'},
    {input: 'minecraft:andesite', output: 'architects_palette:esoterrack'},
    {input: 'minecraft:polished_blackstone_bricks', output: 'architects_palette:moonshale_bricks'},
    {input: 'minecraft:basalt', output: 'architects_palette:moonshale'},
    {input: '#minecraft:saplings', output: 'architects_palette:twisted_sapling'},
    {input: '#minecraft:leaves', output: 'architects_palette:twisted_leaves'}
    ].forEach(prop => {
        event.recipes.create.haunting(Item.of(prop.output), Item.of(prop.input)).id(`start:haunting/${prop.output.split(':')[1]}`);
    });

    event.replaceInput({id: 'chipped:benches/mechanist_workbench'}, 'minecraft:tnt', 'minecraft:red_concrete');

    //Tom's
    event.shaped('toms_storage:ts.adv_wireless_terminal', [
        ' P ',
        'PTP',
        ' P '
    ], {
        P: 'gtceu:steel_plate',
        T: 'toms_storage:ts.wireless_terminal'
    }).id('start:shaped/advanced_wireless_terminal');

    // Effortless Building Upgrade Accessibility
    const reachUpgrade = (type,mat,dye,core) => {
        event.remove({output: `effortlessbuilding:reach_upgrade${type}`});
        event.shaped(Item.of(`effortlessbuilding:reach_upgrade${type}`), [
            ' D ',
            'MCM',
            ' D '
        ], {
            D: `${dye}`,
            M: `${mat}`,
            C: `${core}`
        }).id(`start:shaped/reach_upgrade${type}`);
    }

    reachUpgrade('1','minecraft:slime_ball','minecraft:lime_dye',`minecraft:ender_pearl`);
    reachUpgrade('2','minecraft:glowstone_dust','minecraft:orange_dye',`effortlessbuilding:reach_upgrade1`);
    reachUpgrade('3','minecraft:amethyst_shard','minecraft:purple_dye',`effortlessbuilding:reach_upgrade2`);

    // Bingus
    event.shaped('bingus:floppa_orb', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: '#minecraft:fishes',
        B: 'minecraft:amethyst_shard',
        C: 'minecraft:emerald'
    }).id('start:shaped/floppa_orb');

    // Vanilla
    event.recipes.create.item_application('minecraft:mycelium', ['minecraft:grass_block', 'exnihilosequentia:mycelium_spores']).id('start:item_application/mycelium');

    event.shaped('2x minecraft:sponge', [
        'CMC',
        'CTC',
        'CMC'
    ], {
        C: 'minecraft:yellow_carpet',
        T: 'kubejs:meshblock',
        M: 'minecraft:string'
    });
});