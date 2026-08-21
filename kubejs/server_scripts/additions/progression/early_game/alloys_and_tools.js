ServerEvents.recipes((event) => {
    const isModLoaded = global.withModsLoaded;

    isModLoaded('exnihilosequentia', () => {
        const hammers = {
            wooden: '#minecraft:planks',
            stone: '#forge:cobblestone',
            iron: 'minecraft:iron_ingot',
            diamond: 'minecraft:diamond',
            andesite: 'minecraft:andesite',
            diorite: 'minecraft:diorite',
            granite: 'minecraft:granite',
        };

        Object.entries(hammers).forEach(([type, input]) => {
            event
                .shaped(Item.of(`exnihilosequentia:${type}_hammer`, '{Damage:0}'), [' I ', ' SI', 'S  '], {
                    I: input,
                    S: 'minecraft:stick',
                })
                .id(`start:shaped/${type}_hammer`);
        });
    });

    const alloyBlends = [
        {
            result: 'bronze',
            amount: 3,
            ingredients: ['3x gtceu:copper', 'gtceu:tin'],
        },
        {
            result: 'red_alloy',
            amount: 1,
            ingredients: ['gtceu:copper', '4x minecraft:redstone'],
        },
        {
            result: 'brass',
            amount: 3,
            ingredients: ['3x gtceu:copper', 'gtceu:zinc'],
        },
        {
            result: 'invar',
            amount: 2,
            ingredients: ['2x gtceu:iron', 'gtceu:nickel'],
        },
        {
            result: 'tin_alloy',
            amount: 1,
            ingredients: ['gtceu:tin', 'gtceu:iron'],
        },
    ];

    isModLoaded('thermal_extra', () =>
        alloyBlends.push({
            result: 'soul_infused',
            amount: 1,
            ingredients: ['2x thermal_extra:soul_sand', 'gtceu:invar'],
        })
    );

    alloyBlends.forEach((alloy) => {
        const { result, amount, ingredients } = alloy;

        let resultStack = `${amount !== 1 ? `${amount}x ` : ''}gtceu:${result}`;
        /** @type {string[]} */
        let dustIngredients = [];
        /** @type {string[]} */
        let ingotIngredients = [];

        ingredients.forEach((ingredient) => {
            dustIngredients.push(`${ingredient}${ingredient.endsWith('redstone') ? '' : '_dust'}`);
            if (ingredient.endsWith('copper') || ingredient.endsWith('iron'))
                ingredient = ingredient.replace('gtceu', 'minecraft');
            ingotIngredients.push(
                `${ingredient}${ingredient.endsWith('redstone') ? '' : ingredient.endsWith('soul_sand') ? '_dust' : '_ingot'}`
            );
        });

        isModLoaded('kubejs_create', () => {
            event.recipes.create
                .mixing(`${resultStack}_ingot`, ingotIngredients)
                .heatRequirement('lowheated')
                .id(`start:create_mixing/${result}`);

            event.recipes.create
                .mixing(`${resultStack}_ingot`, dustIngredients)
                .heatRequirement('lowheated')
                .id(`start:create_mixing/${result}_with_dust`);
        });

        event.shapeless(`${resultStack}_dust`, dustIngredients).id(`start:shapeless/${result}_dust`);
    });
});
