ServerEvents.recipes((event) => {
    const id = global.id;

    const dust1 = 'mysticalagriculture:inferium_essence';
    const dust2 = 'mysticalagriculture:prudentium_essence';
    const dust3 = 'mysticalagriculture:tertium_essence';
    const dust4 = 'mysticalagriculture:imperium_essence';
    const dust5 = 'mysticalagriculture:supremium_essence';
    const dust6 = 'mysticalagriculture:awakened_supremium_essence';

    /**
     * @param {string} type
     * @param {string} dust
     */
    function greenHouseGrowing(type, dust) {
        const eut =
            {
                'mysticalagriculture:inferium_essence': 20,
                'mysticalagriculture:prudentium_essence': 80,
                'mysticalagriculture:tertium_essence': 400,
                'mysticalagriculture:imperium_essence': 1024,
                'mysticalagriculture:supremium_essence': 6400,
                'mysticalagriculture:awakened_supremium_essence': 16000,
                'mysticalagriculture:insanium_essence': 100000,
            }[dust] || 1;

        event.recipes.gtceu
            .greenhouse_growing(id(`${type}_essence_growing`))
            .notConsumable(`mysticalagriculture:${type}_seeds`)
            .chancedInput(dust, 1000, 0)
            .chancedOutput(`mysticalagriculture:${type}_essence`, 7500, 500)
            .inputFluids('minecraft:water 100')
            .duration(400)
            .EUt(eut);
    }

    const tier1 = ['air', 'earth', 'fire', 'water', 'wood', 'stone', 'dirt', 'ice', 'nature', 'dye', 'coal'];

    tier1.forEach((element) => {
        greenHouseGrowing(element, dust1);
    });

    const tier2 = [
        'iron',
        'copper',
        'tin',
        'nickel',
        'lead',
        'zinc',
        'gold',
        'diamond',
        'redstone',
        'glowstone',
        'life',
        'nether_quartz',
        'lapis_lazuli',
        'sulfur',
        'amethyst',
        'silver',
    ];

    tier2.forEach((element) => {
        greenHouseGrowing(element, dust2);
    });

    const tier3 = [
        'emerald',
        'certus_quartz',
        'ruby',
        'saltpeter',
        'salts',
        'garnet',
        'apatite',
        'sapphire',
        'topaz',
        'enderman',
        'slime',
        'prismarine',
        'realgar',
        'lepidolite',
        'cobaltite',
        'antimony',
        'aluminum',
    ];

    tier3.forEach((element) => {
        greenHouseGrowing(element, dust3);
    });

    const tier4 = [
        'monazite',
        'uranium',
        'chrome',
        'molybdenum',
        'tantalum',
        'manganese',
        'platinum',
        'titanium',
        'caesium',
        'blaze',
        'blizz',
        'blitz',
        'basalz',
        'cerium',
        'chalcopyrite',
        'niobium',
    ];

    tier4.forEach((element) => {
        greenHouseGrowing(element, dust4);
    });

    const tier5 = ['tungsten', 'barium'];

    tier5.forEach((element) => {
        greenHouseGrowing(element, dust5);
    });

    greenHouseGrowing('naquadah', dust6);
});
