/*ServerEvents.recipes(event => {
    const id = global.id;
  
  //stone dusts
  function crush(output, input){
    event.shapeless(Item.of(output, 1),[input, '#forge:tools/hammers'])
  };

  crush('gtceu:granite_dust','exnihilosequentia:crushed_granite');
  crush('gtceu:andesite_dust','exnihilosequentia:crushed_andesite');
  crush('gtceu:diorite_dust','exnihilosequentia:crushed_diorite');

  //stone barrel
  //mixing
  event.custom({
      "type": "exnihilosequentia:transition",
      "catalyst": {
        "item": "gtceu:granite_dust"
      },
      "fluidInTank": ('minecraft:lava 1000')
      ,
      "result": ("gtceu:iron_mixture 1000")
  });

  event.custom({
      "type": "exnihilosequentia:transition",
      "catalyst": {
        "item": "gtceu:andesite_dust"
      },
      "fluidInTank": ('minecraft:lava 1000')
      ,
      "result": ("gtceu:copper_mixture 1000")
  });

  event.custom({
      "type": "exnihilosequentia:transition",
      "catalyst": {
        "item": "gtceu:diorite_dust"
      },
      "fluidInTank": ('minecraft:lava 1000')
      ,
      "result": ("gtceu:quartz_mixture 1000")
  });

  //drying
  event.custom({
    "type": "exnihilosequentia:precipitate",
    "fluid": ('gtceu:iron_mixture 1000'),
    "input": {
        "item": "exnihilosequentia:dust"},
    "result": 'kubejs:coagulated_iron_mixture'
  });

  event.custom({
    "type": "exnihilosequentia:precipitate",
    "fluid": ('gtceu:copper_mixture 1000'),
    "input": {
        "item": "exnihilosequentia:dust"},
    "result": 'kubejs:coagulated_copper_mixture'
  });

  event.custom({
    "type": "exnihilosequentia:precipitate",
    "fluid": ('gtceu:quartz_mixture 1000'),
    "input": {
        "item": "exnihilosequentia:dust"},
    "result": 'kubejs:coagulated_quartz_mixture'
  });

  event.custom({
    "type": "exnihilosequentia:precipitate",
    "fluid": ('minecraft:lava 1000'),
    "input": {
        "item": "exnihilosequentia:dust"},
    "result": 'kubejs:coagulated_lava'
  });

  //large stone barrel
  //mixing
  event.recipes.gtceu.large_stone_barrel(id('iron_mixture'))
    .inputFluids('minecraft:lava 2000')
    .itemInputs('4x gtceu:granite_dust')
    .outputFluids('gtceu:iron_mixture 3000')
    .circuit(1)
    .duration(20);
  
  event.recipes.gtceu.large_stone_barrel(id('copper_mixture'))
    .inputFluids('minecraft:lava 2000')
    .itemInputs('4x gtceu:andesite_dust')
    .outputFluids('gtceu:copper_mixture 3000')
    .circuit(2)
    .duration(20);

  event.recipes.gtceu.large_stone_barrel(id('quartz_mixture'))
    .inputFluids('minecraft:lava 2000')
    .itemInputs('4x gtceu:diorite_dust')
    .outputFluids('gtceu:quartz_mixture 3000')
    .circuit(3)
    .duration(20);

  //drying
  event.recipes.gtceu.large_stone_barrel(id('coagulated_iron_mixture'))
    .inputFluids('gtceu:iron_mixture 1000')
    .itemInputs('minecraft:sand')
    .itemOutputs('kubejs:coagulated_iron_mixture')
    .circuit(1)
    .duration(20);
  
  event.recipes.gtceu.large_stone_barrel(id('coagulated_copper_mixture'))
    .inputFluids('gtceu:copper_mixture 1000')
    .itemInputs('minecraft:sand')
    .itemOutputs('kubejs:coagulated_copper_mixture')
    .circuit(2)
    .duration(20);

  event.recipes.gtceu.large_stone_barrel(id('coagulated_quartz_mixture'))
    .inputFluids('gtceu:quartz_mixture 1000')
    .itemInputs('minecraft:sand')
    .itemOutputs('kubejs:coagulated_quartz_mixture')
    .circuit(3)
    .duration(20);

  event.recipes.gtceu.large_stone_barrel(id('coagulated_lava'))
    .inputFluids('minecraft:lava 1000')
    .itemInputs('minecraft:sand')
    .itemOutputs('kubejs:coagulated_lava')
    .circuit(3)
    .duration(20);

  //crushing
  //hammer 
  function hammer(input, output, chance){
    event.custom({
        "type": "exnihilosequentia:crushing",
        "input": {
          "item": input},
        "results": [{
          "chance": chance,
          "count": 1,
          "item":output}]
  })};

  hammer('kubejs:coagulated_iron_mixture', 'gtceu:crushed_iron_ore', 1.0);
  hammer('kubejs:coagulated_iron_mixture', 'gtceu:crushed_tin_ore', 0.3);
  hammer('kubejs:coagulated_copper_mixture', 'gtceu:crushed_copper_ore', 1.0);
  hammer('kubejs:coagulated_quartz_mixture', 'minecraft:quartz', 1.0);
  hammer('kubejs:coagulated_quartz_mixture', 'minecraft:diamond', 0.075);
  hammer('kubejs:coagulated_lava', 'gtceu:sulfur_dust', 1.0);
  hammer('kubejs:coagulated_lava', 'gtceu:crushed_sphalerite_ore', 0.3);

  //macerator
  function macerator(input, output){
      event.recipes.gtceu.macerator(input)
      .itemInputs(`kubejs:${input}`)
      .itemOutputs(output)
      .duration(100)
      .EUt(6)
  };

  macerator('coagulated_copper_mixture', 'gtceu:crushed_copper_ore');

  function maceratorby(input, output1, output2, chance, increase){
      event.recipes.gtceu.macerator(input)
      .itemInputs(`kubejs:${input}`)
      .itemOutputs(output1)
      .chancedOutput(output2, chance, increase)
      .duration(100)
      .EUt(6)
  };

  maceratorby('coagulated_iron_mixture', 'gtceu:crushed_iron_ore', 'gtceu:crushed_tin_ore', 3000, 500)
  maceratorby('coagulated_quartz_mixture', 'minecraft:quartz', 'minecraft:diamond', 750, 100)
  maceratorby('coagulated_lava', 'gtceu:sulfur_dust', 'gtceu:crushed_sphalerite_ore', 3000, 500)

});*/
