// requires: ae2
ServerEvents.recipes((event) => {
    const id = global.id;

    //greg compat
    event.recipes.gtceu
        .wiremill(id('quartz_fiber_cables'))
        .itemInputs('minecraft:quartz')
        .itemOutputs('3x ae2:quartz_fiber')
        .duration(80)
        .EUt(16);

    event.recipes.gtceu
        .macerator(id('fluix_dust'))
        .itemInputs('ae2:fluix_crystal')
        .itemOutputs('ae2:fluix_dust')
        .duration(88)
        .EUt(2);

    event.recipes.gtceu
        .macerator(id('sky_dust'))
        .itemInputs('ae2:sky_stone_block')
        .itemOutputs('ae2:sky_dust')
        .duration(88)
        .EUt(2);

    event.recipes.gtceu
        .chemical_bath(id('fluix_steel_cool_down'))
        .itemInputs('gtceu:hot_fluix_steel_ingot')
        .inputFluids('minecraft:water 100')
        .itemOutputs('gtceu:fluix_steel_ingot')
        .duration(400)
        .EUt(120);

    event.recipes.gtceu
        .chemical_bath(id('fluix_steel_cool_down_distilled_water'))
        .itemInputs('gtceu:hot_fluix_steel_ingot')
        .inputFluids('gtceu:distilled_water 100')
        .itemOutputs('gtceu:fluix_steel_ingot')
        .duration(250)
        .EUt(120);

    [
        { filter: '#forge:dusts/certus_quartz', replacement: 'gtceu:certus_quartz_dust' },
        { filter: '#forge:gems/certus_quartz', replacement: 'ae2:certus_quartz_crystal' },
    ].forEach((type) => {
        event.replaceInput({ input: type.filter }, type.filter, type.replacement);

        event.replaceOutput({ output: type.filter }, type.filter, type.replacement);
    });

    event.replaceOutput({ type: 'gtceu:cutter' }, 'ae2:certus_quartz_crystal', '2x ae2:certus_quartz_crystal');

    event.recipes.gtceu
        .polarizer(id('charged_certus'))
        .itemInputs('ae2:certus_quartz_crystal')
        .itemOutputs('ae2:charged_certus_quartz_crystal')
        .duration(200)
        .EUt(10);

    event.recipes.gtceu
        .mixer(id('fluix_crystal'))
        .itemInputs('ae2:charged_certus_quartz_crystal', 'minecraft:redstone', 'minecraft:quartz')
        .inputFluids('minecraft:water 250')
        .itemOutputs('2x ae2:fluix_crystal')
        .duration(200)
        .EUt(65);
});
