ItemEvents.modification((event) => {
    event.modify('minecraft:cocoa_beans', (item) => {
        item.overrideFood((food) => {
            food.hunger(1);
            food.saturation(1);
            food.effect('minecraft:slowness', 80, 2, 1);
            food.effect('minecraft:hunger', 80, 1, 0.1);
            food.effect('minecraft:blindness', 20, 1, 0.05);
            food.fastToEat(true);
        });
    });
});
