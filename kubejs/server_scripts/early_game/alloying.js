if (global.packmode !== 'hard'){
    (() => {   

ServerEvents.recipes(event => {
   const id = global.id;
    
    event.recipes.create.mixing('3x gtceu:bronze_ingot', ['3x minecraft:copper_ingot', '#forge:ingots/tin']).heatRequirement('lowheated').id('start:create_mixing/bronze');
    event.shapeless('3x gtceu:bronze_dust', ['gtceu:copper_dust', 'gtceu:copper_dust', 'gtceu:copper_dust', 'gtceu:tin_dust']).id('start:shapeless/bronze_dust');

    event.recipes.create.mixing('1x gtceu:red_alloy_ingot', ['minecraft:copper_ingot', '4x minecraft:redstone']).heatRequirement('lowheated').id('start:create_mixing/red_alloy');
    event.shapeless('1x gtceu:red_alloy_dust', ['gtceu:copper_dust', 'minecraft:redstone', 'minecraft:redstone', 'minecraft:redstone', 'minecraft:redstone']).id('start:shapeless/red_alloy_dust');

    event.recipes.create.mixing('3x gtceu:brass_ingot', ['3x minecraft:copper_ingot', '#forge:ingots/zinc']).heatRequirement('lowheated').id('start:create_mixing/brass');
    event.shapeless('3x gtceu:brass_dust', ['gtceu:copper_dust', 'gtceu:copper_dust', 'gtceu:copper_dust', 'gtceu:zinc_dust']).id('start:shapeless/brass_dust');

    event.recipes.create.mixing('2x gtceu:invar_ingot', ['2x minecraft:iron_ingot', '#forge:ingots/nickel']).heatRequirement('lowheated').id('start:create_mixing/invar');
    event.shapeless('2x gtceu:invar_dust', ['gtceu:iron_dust', 'gtceu:iron_dust', 'gtceu:nickel_dust']).id('start:shapeless/invar_dust');

    event.recipes.create.mixing('1x gtceu:soul_infused_ingot', ['2x thermal_extra:soul_sand_dust', '#forge:ingots/invar']).heatRequirement('lowheated').id('start:create_mixing/soul_infused');
    event.shapeless('1x gtceu:soul_infused_dust', ['thermal_extra:soul_sand_dust', 'thermal_extra:soul_sand_dust', 'gtceu:invar_dust']).id('start:shapeless/soul_infused_dust');

});
})()
}