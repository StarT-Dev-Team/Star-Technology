ServerEvents.tags('item', (event) => {
    Ingredient.of('@vintage').stacks.forEach((item) => {
        const materialRegex = /(.*_(spring|rod|wire|sheet|nugget|ingot|block|sulfate))|sulfur.*/;
        if (materialRegex.test(item.toString())) {
            event.add('c:hidden_from_recipe_viewers', item.id);
        }
    });

    /** @type {string[]} */
    let hiddenItems = JSON.parse(JsonIO.readJson('kubejs/config/item_hiding.json'));
    if (!hiddenItems) {
        console.warn("Config file doesn't exist or is empty");
    } else {
        hiddenItems.forEach((/** @type {string} */ itemId) => {
            itemId.replace('"', '');
            event.add('c:hidden_from_recipe_viewers', itemId);
        });
    }
});
