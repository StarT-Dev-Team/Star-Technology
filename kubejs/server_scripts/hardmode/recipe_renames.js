// priority: -1

ServerEvents.recipes((event) => {
    event.forEachRecipe([{ type: 'minecraft:smelting' }, { type: 'minecraft:blasting' }], (recipe) => {
        event.remove({ id: recipe.getId() });
        event.custom(recipe.json).id(recipe.getId() + '_manual_only');
    });
});
