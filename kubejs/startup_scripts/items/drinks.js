const potions = [
    {id: 'sweetcord_beer', color: 0xE3C16F, effect: ['minecraft:haste', 2400, 0]},
    {id: 'apple_cidar', color: 0xD4A373, effect: ['minecraft:slow_falling', 2400, 0]},
    {id: 'carrot_ale', color: 0xE58E26, effect: ['minecraft:night_vision', 2400, 0]},
    {id: 'berry_wine', color: 0x8B1A3A, effect: ['minecraft:speed', 2400, 0]},
    {id: 'wheat_kvas', color: 0xC2A878, effect: ['minecraft:jump_boost', 2400, 0]},
    {id: 'sake', color: 0xF5F5E6, effect: ['minecraft:haste', 2400, 0]}
];

StartupEvents.registry('item', event => {

    const potionItem = (itemID, effect) => {
        event.create(itemID)
            .maxStackSize(16)
            .food(food => {food
                .effect(effect[0], effect[1], effect[2], 1)// effect (id), duration (ticks), amplifier (array count), probability
                .alwaysEdible()
                .eaten(ctx => {
                    ctx.player.give('minecraft:glass_bottle')
                })
            })
            .texture(`kubejs:item/drinks/${itemID}`);
    };

    potions.forEach(potion => {
        potionItem(potion.id, potion.effect);
    });

});

StartupEvents.registry('fluid', event => {
    
    const potionFluid = (fluidID, color) => {
        event.create(fluidID)
            .thinTexture(color)
            .noBucket()
            .noBlock() 
    };

    potions.forEach(potion => {
        potionFluid(potion.id, potion.color);
    });


});