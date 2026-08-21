//requires: exnihilosequentia
ServerEvents.recipes((event) => {
    const id = global.id;

    event.remove({ id: 'gtceu:forge_hammer/cobblestone_to_gravel' });

    event.recipes.gtceu
        .forge_hammer(id('stones_to_gravel'))
        .itemInputs(Ingredient.of('#minecraft:stone_crafting_materials').subtract('minecraft:blackstone'))
        .itemOutputs('minecraft:gravel')
        .duration(10)
        .EUt(16);

    event.recipes.gtceu
        .forge_hammer(id('gravel_to_sand'))
        .itemInputs('minecraft:gravel')
        .itemOutputs('minecraft:sand')
        .duration(10)
        .EUt(16);

    event.recipes.gtceu
        .forge_hammer(id('sands_to_dust'))
        .itemInputs('#minecraft:smelts_to_glass')
        .itemOutputs('exnihilosequentia:dust')
        .duration(10)
        .EUt(16);

    event.recipes.gtceu
        .forge_hammer(id('blackstone_crushing'))
        .itemInputs('minecraft:blackstone')
        .itemOutputs('exnihilosequentia:crushed_blackstone')
        .duration(10)
        .EUt(16);

    global.withModsLoaded('kubejs_create', () => {
        event.recipes.create
            .crushing('exnihilosequentia:crushed_blackstone', 'minecraft:blackstone')
            .id(id('crushing/blackstone'));
    });
});
