ServerEvents.recipes((event) => {
    const id = global.id;

    const dust1 = 'mysticalagriculture:inferium_essence';
    const dust2 = 'mysticalagriculture:prudentium_essence';
    const dust3 = 'mysticalagriculture:tertium_essence';
    const dust4 = 'mysticalagriculture:imperium_essence';
    const dust5 = 'mysticalagriculture:supremium_essence';
    const dust6 = 'mysticalagriculture:awakened_supremium_essence';

    function greenHouseGrowing(type, dust) {
        let eut;
        switch (dust) {
            case 'mysticalagriculture:inferium_essence': {
                eut = 20;
                break;
            }
            case 'mysticalagriculture:prudentium_essence': {
                eut = 80;
                break;
            }
            case 'mysticalagriculture:tertium_essence': {
                eut = 400;
                break;
            }
            case 'mysticalagriculture:imperium_essence': {
                eut = 1024;
                break;
            }
            case 'mysticalagriculture:supremium_essence': {
                eut = 6400;
                break;
            }
            case 'mysticalagriculture:awakened_supremium_essence': {
                eut = 16000;
                break;
            }
            case 'mysticalagriculture:insanium_essence': {
                eut = 100000;
                break;
            }
        }

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
