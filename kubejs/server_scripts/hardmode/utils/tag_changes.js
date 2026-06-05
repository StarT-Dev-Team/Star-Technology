// packmode: hard

ServerEvents.tags('block', (event) => {
    ['oak', 'birch', 'acacia', 'cherry', 'dark_oak', 'jungle', 'mangrove', 'spruce'].forEach((log) => {
        event.add('minecraft:needs_stone_tool', `minecraft:stripped_${log}_log`);
        event.add('minecraft:needs_stone_tool', `minecraft:stripped_${log}_wood`);
        event.add('minecraft:needs_iron_tool', `minecraft:${log}_wood`);
        event.add('minecraft:needs_iron_tool', `minecraft:${log}_log`);
    });
    event.remove('create_new_age:magnets/strength_4', 'minecraft:respawn_anchor');
});

ServerEvents.tags('item', (event) => {
    event.add('forge:string', 'kubejs:plant_fibers');
    event.remove('forge:tools/mortars', 'gtceu:flint_mortar');
    event.add('forge:tools/axes', /gtceu:.*axe/);
    event.add('createlowheated:burner_starters', 'gtceu:matches');
    event.add('minecraft:poor_coals', 'kubejs:charcoal_pellet');

    event.add('kubejs:ingot_casting_mold', 'kubejs:ingot_ceramic_casting_mold');
    event.add('kubejs:ingot_casting_mold', 'gtceu:ingot_casting_mold');
    event.add('kubejs:ball_casting_mold', 'kubejs:ball_ceramic_casting_mold');
    event.add('kubejs:ball_casting_mold', 'gtceu:ball_casting_mold');
});

ServerEvents.tags('fluid', (event) => {
    event.remove('create:bottomless/allow', 'minecraft:lava');
    event.remove('create:bottomless/allow', 'minecraft:water');
    event.remove('forge:redstone', 'thermal:redstone');
});
