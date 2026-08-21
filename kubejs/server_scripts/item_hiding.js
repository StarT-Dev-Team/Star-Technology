/** @type {{items: string[], fluids: string[]}} */
let blacklistConfig = JSON.parse(JsonIO.readJson('kubejs/config/item_hiding.json'));
if (!blacklistConfig) {
    console.warn("Config file doesn't exist or is empty");
}

ServerEvents.tags('item', (event) => {
    const isModLoaded = global.withModsLoaded;

    isModLoaded('vintage', () => {
        Ingredient.of('@vintage').stacks.forEach((item) => {
            const materialRegex = /(.*_(spring|rod|wire|sheet|nugget|ingot|block|sulfate))|sulfur.*/;
            if (materialRegex.test(item.toString())) {
                event.add('c:hidden_from_recipe_viewers', item.id);
            }
        });
    });

    if (blacklistConfig) {
        blacklistConfig.items.forEach((/** @type {string} */ itemId) => {
            event.add('c:hidden_from_recipe_viewers', itemId);
        });

        blacklistConfig.fluids.forEach((/** @type {string} */ fluidId) => {
            event.add('c:hidden_from_recipe_viewers', `${fluidId}_bucket`);
        });
    }
});

ServerEvents.tags('fluid', (event) => {
    if (blacklistConfig) {
        blacklistConfig.fluids.forEach((/** @type {string} */ fluidId) => {
            event.add('c:hidden_from_recipe_viewers', fluidId);
        });
    }
});
