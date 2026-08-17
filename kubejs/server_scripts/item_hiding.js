ServerEvents.tags('item', (event) => {
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
