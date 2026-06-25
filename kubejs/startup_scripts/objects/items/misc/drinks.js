const potions = [
    {
        id: 'sweetcorn_beer',
        color: 0xe3c16f,
        effect: { id: 'minecraft:haste', duration: 2400, amplifier: 0 },
    },
    {
        id: 'apple_cider',
        color: 0xd4a373,
        effect: { id: 'minecraft:slow_falling', duration: 2400, amplifier: 0 },
    },
    {
        id: 'carrot_ale',
        color: 0xe58e26,
        effect: { id: 'minecraft:night_vision', duration: 2400, amplifier: 0 },
    },
    {
        id: 'berry_wine',
        color: 0x8b1a3a,
        effect: { id: 'minecraft:speed', duration: 2400, amplifier: 0 },
    },
    {
        id: 'wheat_kvass',
        color: 0xc2a878,
        effect: { id: 'minecraft:jump_boost', duration: 2400, amplifier: 0 },
    },
    { id: 'sake', color: 0xf5f5e6, effect: { id: 'kubejs:reach', duration: 2400, amplifier: 0 } },
];

StartupEvents.registry('item', (event) => {
    /**
     * @param {string} itemID
     * @param {{ id: string, duration: number, amplifier: number }} effect
     */
    const potionItem = (itemID, effect) => {
        event
            .create(itemID)
            .maxStackSize(16)
            .useAnimation('drink')
            .food((food) => {
                food.effect(effect.id, effect.duration, effect.amplifier, 1) // effect (id), duration (ticks), amplifier (array count), probability
                    .alwaysEdible()
                    .eaten((ctx) => {
                        ctx.player.give('minecraft:glass_bottle');
                    });
            })
            .tag('create:upright_on_belt')
            .tag('create:deployable_drink')
            .texture(`kubejs:item/misc/drinks/${itemID}`)
            .tooltip(Text.translate(`item.kubejs.${itemID}.tooltip`));
    };

    potions.forEach((potion) => {
        potionItem(potion.id, potion.effect);
    });
});

StartupEvents.registry('fluid', (event) => {
    const potionFluid = (fluidID, color) => {
        event.create(fluidID).thinTexture(color).noBlock();
    };

    potions.forEach((potion) => {
        potionFluid(potion.id, potion.color);
    });
});
