global.not_hardmode(() => {
ServerEvents.recipes(event => {
    const id = global.id;

    //plates
    [
        {mod: 'gtceu', metals: ['lead','silver','tin','zinc', 'brass','bronze','red_alloy','nickel','invar','soul_infused','cobalt_brass','wrought_iron','potin','tin_alloy']},
        {mod: 'minecraft', metals: ['iron', 'gold', 'copper']}
    ].forEach(type => {
        type.metals.forEach(foo => {
            event.recipes.create.pressing(`gtceu:${foo}_plate`,`${type.mod}:${foo}_ingot`).id(`start:pressing/${foo}_plate`);
        });
    });

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
    
})});