//requires: travelanchors
ServerEvents.recipes((event) => {
    const id = global.id;

    event.remove({ output: 'travelanchors:travel_anchor' });
    event.remove({ output: 'travelanchors:travel_staff' });

    event
        .shaped(Item.of('travelanchors:travel_anchor'), ['DSD', 'SPS', 'DSD'], {
            D: 'gtceu:double_steel_plate',
            S: 'gtceu:steel_plate',
            P: 'minecraft:ender_pearl',
        })
        .id('start:shaped/travel_anchor');

    event
        .shaped(Item.of('travelanchors:travel_staff'), ['  P', ' R ', 'R  '], {
            P: 'minecraft:ender_pearl',
            R: 'gtceu:iron_rod',
        })
        .id('start:shaped/travel_staff');
});
