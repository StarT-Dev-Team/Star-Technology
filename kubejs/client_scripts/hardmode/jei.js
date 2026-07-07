JEIEvents.hideItems((event) => {
    ['pickaxe', 'axe', 'hoe', 'shovel', 'sword', 'knife', 'mortar'].forEach((tool) =>
        event.hide('gtceu:flint_' + tool)
    );
});
