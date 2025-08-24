ServerEvents.recipes(event => {
    const id = global.id;

    event.remove({output: 'create:andesite_alloy'});
    if (global.packmode !== 'hard'){(() => {

    event.shapeless('2x create:andesite_alloy', ['2x minecraft:iron_nugget', '2x exnihilosequentia:andesite_pebble']).id(id('shapeless/andesite_alloy_pebble'));
    event.shapeless('16x create:andesite_alloy', ['4x minecraft:andesite', '5x minecraft:iron_nugget']).id(id('shapeless/andesite_alloy_block'));
    
    event.shaped('create:precision_mechanism', [
        'NBN',
        'SPS',
        'NBN'
    ], {
        N: 'minecraft:iron_nugget',
        B: 'create:large_cogwheel',
        S: 'create:cogwheel',
        P: 'gtceu:gold_plate'
    }).id(id('shaped/precision_mechanism'));
    
    })()}

    event.shapeless('9x create:andesite_alloy', ['create:andesite_alloy_block']).id('start:shapeless/andesite_alloy_block_decomp');
});