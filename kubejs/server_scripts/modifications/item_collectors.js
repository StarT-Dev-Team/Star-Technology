//requires: itemcollectors

ServerEvents.recipes((event) => {
    event
        .shaped(Item.of('itemcollectors:basic_collector'), [' P ', ' S ', 'SSS'], {
            P: 'minecraft:ender_pearl',
            S: 'gtceu:steel_plate',
        })
        .id('start:shaped/basic_collector');

    event
        .shaped(Item.of('itemcollectors:advanced_collector'), [' P ', ' C ', 'BBB'], {
            P: 'minecraft:ender_pearl',
            C: 'itemcollectors:basic_collector',
            B: 'gtceu:black_bronze_plate',
        })
        .id('start:shaped/advanced_collectors');
});
