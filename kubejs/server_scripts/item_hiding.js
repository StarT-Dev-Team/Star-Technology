ServerEvents.tags('item', (event) => {
    Ingredient.of('@vintage').stacks.forEach((item) => {
        const materialRegex = /(.*_(spring|rod|wire|sheet|nugget|ingot|block|sulfate))|sulfur.*/;
        if (materialRegex.test(item.toString())) {
            event.add('c:hidden_from_recipe_viewers', item.id);
        }
    });
});
