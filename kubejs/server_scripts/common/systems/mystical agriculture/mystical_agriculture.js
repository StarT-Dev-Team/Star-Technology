ServerEvents.recipes((event) => {
    const id = global.id;

    const dust1 = 'mysticalagriculture:inferium_essence';

    // essence recipes (SUBJECT OF CHANGE)
    event.recipes.gtceu
        .mixer(id('inferium_essence'))
        .itemInputs('gtceu:phosphorus_dust', 'gtceu:beryllium_dust')
        .inputFluids('gtceu:glowstone 144')
        .itemOutputs(dust1)
        .duration(200)
        .EUt(80);

    [
        {
            essence: 'wood',
            inputs: [
                '4x mysticalagriculture:air_essence',
                '3x mysticalagriculture:water_essence',
                '8x mysticalagriculture:earth_essence',
            ],
            energy: 400,
            circuit: 0,
        },
        {
            essence: 'stone',
            inputs: [
                '2x mysticalagriculture:air_essence',
                '4x mysticalagriculture:fire_essence',
                '4x mysticalagriculture:earth_essence',
            ],
            energy: 400,
            circuit: 1,
        },
        {
            essence: 'dirt',
            inputs: [
                '2x mysticalagriculture:water_essence',
                '3x mysticalagriculture:fire_essence',
                '6x mysticalagriculture:earth_essence',
            ],
            energy: 400,
            circuit: 2,
        },
        {
            essence: 'ice',
            inputs: ['mysticalagriculture:air_essence', '7x mysticalagriculture:water_essence'],
            energy: 400,
            circuit: 3,
        },
        {
            essence: 'nature',
            inputs: [
                '3x mysticalagriculture:wood_essence',
                '4x mysticalagriculture:earth_essence',
                '2x mysticalagriculture:water_essence',
            ],
            energy: 1024,
            circuit: 4,
        },
        {
            essence: 'dye',
            inputs: [
                '2x mysticalagriculture:dirt_essence',
                '4x mysticalagriculture:fire_essence',
                '2x mysticalagriculture:air_essence',
            ],
            energy: 1024,
            circuit: 5,
        },
        {
            essence: 'coal',
            inputs: ['8x mysticalagriculture:wood_essence', '4x mysticalagriculture:fire_essence'],
            energy: 1024,
            circuit: 6,
        },
        {
            essence: 'iron',
            inputs: [
                '12x mysticalagriculture:stone_essence',
                '7x mysticalagriculture:fire_essence',
                '3x mysticalagriculture:water_essence',
            ],
            energy: 400,
            circuit: 10,
        },
        {
            essence: 'copper',
            inputs: [
                '8x mysticalagriculture:stone_essence',
                '12x mysticalagriculture:fire_essence',
                '6x mysticalagriculture:water_essence',
            ],
            energy: 400,
            circuit: 11,
        },
        {
            essence: 'tin',
            inputs: [
                '10x mysticalagriculture:stone_essence',
                '5x mysticalagriculture:fire_essence',
                '4x mysticalagriculture:water_essence',
            ],
            energy: 400,
            circuit: 12,
        },
        {
            essence: 'nickel',
            inputs: [
                '15x mysticalagriculture:stone_essence',
                '7x mysticalagriculture:fire_essence',
                '7x mysticalagriculture:water_essence',
            ],
            energy: 400,
            circuit: 13,
        },
        {
            essence: 'lead',
            inputs: [
                '17x mysticalagriculture:stone_essence',
                '10x mysticalagriculture:fire_essence',
                '5x mysticalagriculture:water_essence',
            ],
            energy: 400,
            circuit: 14,
        },
        {
            essence: 'zinc',
            inputs: [
                '5x mysticalagriculture:stone_essence',
                '3x mysticalagriculture:fire_essence',
                '2x mysticalagriculture:water_essence',
            ],
            energy: 400,
            circuit: 15,
        },
        {
            essence: 'gold',
            inputs: [
                '21x mysticalagriculture:stone_essence',
                '17x mysticalagriculture:fire_essence',
                '12x mysticalagriculture:water_essence',
            ],
            energy: 400,
            circuit: 16,
        },
        {
            essence: 'silver',
            inputs: [
                '19x mysticalagriculture:stone_essence',
                '15x mysticalagriculture:fire_essence',
                '10x mysticalagriculture:water_essence',
            ],
            energy: 400,
            circuit: 17,
        },
        {
            essence: 'diamond',
            inputs: ['64x mysticalagriculture:coal_essence', '64x mysticalagriculture:fire_essence'],
            energy: 400,
            circuit: 10,
        },
        {
            essence: 'redstone',
            inputs: [
                '11x mysticalagriculture:earth_essence',
                '5x mysticalagriculture:fire_essence',
                '4x mysticalagriculture:dye_essence',
            ],
            energy: 400,
            circuit: 10,
        },
        {
            essence: 'glowstone',
            inputs: [
                '9x mysticalagriculture:earth_essence',
                '8x mysticalagriculture:fire_essence',
                '5x mysticalagriculture:dye_essence',
            ],
            energy: 400,
            circuit: 11,
        },
        {
            essence: 'nether_quartz',
            inputs: [
                '13x mysticalagriculture:earth_essence',
                '16x mysticalagriculture:fire_essence',
                '1x mysticalagriculture:dye_essence',
            ],
            energy: 400,
            circuit: 12,
        },
        {
            essence: 'lapis_lazuli',
            inputs: [
                '7x mysticalagriculture:earth_essence',
                '4x mysticalagriculture:fire_essence',
                '6x mysticalagriculture:dye_essence',
            ],
            energy: 400,
            circuit: 13,
        },
        {
            essence: 'sulfur',
            inputs: [
                '23x mysticalagriculture:earth_essence',
                '15x mysticalagriculture:fire_essence',
                '6x mysticalagriculture:dye_essence',
            ],
            energy: 400,
            circuit: 14,
        },
        {
            essence: 'amethyst',
            inputs: [
                '11x mysticalagriculture:earth_essence',
                '3x mysticalagriculture:fire_essence',
                '8x mysticalagriculture:dye_essence',
            ],
            energy: 400,
            circuit: 15,
        },
        {
            essence: 'aluminum',
            inputs: [
                '32x mysticalagriculture:earth_essence',
                '17x mysticalagriculture:fire_essence',
                '20x mysticalagriculture:water_essence',
            ],
            energy: 1024,
            circuit: 18,
        },
        {
            essence: 'antimony',
            inputs: [
                '29x mysticalagriculture:earth_essence',
                '12x mysticalagriculture:sulfur_essence',
                '10x mysticalagriculture:stone_essence',
            ],
            energy: 1024,
            circuit: 17,
        },
        {
            essence: 'cobaltite',
            inputs: [
                '40x mysticalagriculture:earth_essence',
                '21x mysticalagriculture:dye_essence',
                '15x mysticalagriculture:stone_essence',
            ],
            energy: 1024,
            circuit: 18,
        },
        {
            essence: 'emerald',
            inputs: [
                '5x mysticalagriculture:aluminum_essence',
                '41x mysticalagriculture:dye_essence',
                '43x mysticalagriculture:fire_essence',
            ],
            energy: 1024,
            circuit: 16,
        },
        {
            essence: 'certus_quartz',
            inputs: [
                '12x mysticalagriculture:nether_quartz_essence',
                '1x mysticalagriculture:amethyst_essence',
                '1x mysticalagriculture:diamond_essence',
            ],
            energy: 1024,
            circuit: 17,
        },
        {
            essence: 'ruby',
            inputs: [
                '15x mysticalagriculture:nether_quartz_essence',
                '5x mysticalagriculture:aluminum_essence',
                '45x mysticalagriculture:dye_essence',
            ],
            energy: 1024,
            circuit: 18,
        },
        {
            essence: 'salts',
            inputs: ['32x mysticalagriculture:stone_essence', '32x mysticalagriculture:earth_essence'],
            energy: 1024,
            circuit: 19,
        },
        {
            essence: 'saltpeter',
            inputs: ['32x mysticalagriculture:stone_essence', '32x mysticalagriculture:earth_essence'],
            energy: 1024,
            circuit: 20,
        },
        {
            essence: 'lepidolite',
            inputs: ['2x mysticalagriculture:aluminum_essence', '4x mysticalagriculture:salts_essence'],
            energy: 1024,
            circuit: 21,
        },
        {
            essence: 'realgar',
            inputs: ['13x mysticalagriculture:nether_quartz_essence', '14x mysticalagriculture:sulfur_essence'],
            energy: 1024,
            circuit: 22,
        },
        {
            essence: 'garnet',
            inputs: [
                '15x mysticalagriculture:iron_essence',
                '5x mysticalagriculture:aluminum_essence',
                '15x mysticalagriculture:nether_quartz_essence',
            ],
            energy: 1024,
            circuit: 23,
        },
        {
            essence: 'apatite',
            inputs: [
                '53x mysticalagriculture:stone_essence',
                '10x mysticalagriculture:nether_quartz_essence',
                '24x mysticalagriculture:earth_essence',
            ],
            energy: 1024,
            circuit: 23,
        },
        {
            essence: 'topaz',
            inputs: [
                '61x mysticalagriculture:stone_essence',
                '2x mysticalagriculture:aluminum_essence',
                '53x mysticalagriculture:fire_essence',
            ],
            energy: 1024,
            circuit: 24,
        },
        {
            essence: 'uranium',
            inputs: [
                '64x mysticalagriculture:stone_essence',
                '54x mysticalagriculture:lead_essence',
                '63x mysticalagriculture:nether_quartz_essence',
            ],
            energy: 6400,
            circuit: 25,
        },
        {
            essence: 'molybdenum',
            inputs: [
                '59x mysticalagriculture:stone_essence',
                '31x mysticalagriculture:lead_essence',
                '61x mysticalagriculture:certus_quartz_essence',
            ],
            energy: 6400,
            circuit: 26,
        },
        {
            essence: 'manganese',
            inputs: [
                '12x mysticalagriculture:garnet_essence',
                '45x mysticalagriculture:fire_essence',
                '60x mysticalagriculture:nether_quartz_essence',
            ],
            energy: 6400,
            circuit: 27,
        },
        {
            essence: 'titanium',
            inputs: [
                '60x mysticalagriculture:iron_essence',
                '49x mysticalagriculture:aluminum_essence',
                '64x mysticalagriculture:fire_essence',
            ],
            energy: 6400,
            circuit: 28,
        },
        {
            essence: 'niobium',
            inputs: [
                '64x mysticalagriculture:stone_essence',
                '23x mysticalagriculture:antimony_essence',
                '64x mysticalagriculture:fire_essence',
            ],
            energy: 6400,
            circuit: 29,
        },
        {
            essence: 'platinum',
            inputs: [
                '48x mysticalagriculture:nickel_essence',
                '32x mysticalagriculture:sulfur_essence',
                '64x mysticalagriculture:fire_essence',
            ],
            energy: 6400,
            circuit: 29,
        },
        {
            essence: 'caesium',
            inputs: [
                '24x mysticalagriculture:aluminum_essence',
                '48x mysticalagriculture:nether_quartz_essence',
                '55x mysticalagriculture:earth_essence',
            ],
            energy: 6400,
            circuit: 30,
        },
        {
            essence: 'cerium',
            inputs: [
                '33x mysticalagriculture:topaz_essence',
                '48x mysticalagriculture:coal_essence',
                '59x mysticalagriculture:earth_essence',
            ],
            energy: 6400,
            circuit: 31,
        },
        {
            essence: 'barium',
            inputs: [
                '59x mysticalagriculture:stone_essence',
                '64x mysticalagriculture:sulfur_essence',
                '59x mysticalagriculture:nether_quartz_essence',
            ],
            energy: 6400,
            circuit: 32,
        },
    ].forEach((essence) => {
        event.recipes.gtceu
            .mixer(id(`${essence.essence}_essence_mix`))
            .itemInputs(essence.inputs)
            .itemOutputs(`mysticalagriculture:${essence.essence}_essence`)
            .duration(200)
            .EUt(essence.energy)
            .circuit(essence.circuit);
    });

    [
        { essence: 'life', base: 'nature', odds: 100, energy: 400 },
        { essence: 'sapphire', base: 'aluminum', odds: 1000, energy: 1024 },
        { essence: 'chrome', base: 'ruby', odds: 2000, energy: 6400 },
        { essence: 'monazite', base: 'apatite', odds: 1000, energy: 6400 },
        { essence: 'tantalum', base: 'manganese', odds: 1000, energy: 6400 },
        { essence: 'chalcopyrite', base: 'copper', odds: 3500, energy: 6400 },
        { essence: 'tungsten', base: 'barium', odds: 4000, energy: 16000 },
        { essence: 'naquadah', base: 'tungsten', odds: 950, energy: 100000 },
    ].forEach((essence) => {
        event.recipes.gtceu
            .extractor(id(`${essence.essence}_essence_extraction`))
            .itemInputs(`mysticalagriculture:${essence.base}_essence`)
            .chancedOutput(`mysticalagriculture:${essence.essence}_essence`, essence.odds, 0)
            .duration(200)
            .EUt(essence.energy);
    });

    // Seed recipes
    [
        'air',
        'earth',
        'fire',
        'water',
        'wood',
        'stone',
        'dirt',
        'ice',
        'nature',
        'dye',
        'coal',
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
        'tungsten',
        'barium',
        'naquadah',
    ].forEach((element) => {
        event.recipes.gtceu
            .compressor(id(`${element}_seeds_recipe`))
            .itemInputs(`16x mysticalagriculture:${element}_essence`)
            .itemOutputs(`mysticalagriculture:${element}_seeds`)
            .duration(800)
            .EUt(20);
    });

    // Centrifuging recipes
    event.recipes.gtceu
        .centrifuge(id('elements_from_essence'))
        .itemInputs(dust1)
        .chancedOutput('mysticalagriculture:air_essence', 2500, 0)
        .chancedOutput('mysticalagriculture:earth_essence', 2500, 0)
        .chancedOutput('mysticalagriculture:water_essence', 2500, 0)
        .chancedOutput('mysticalagriculture:fire_essence', 2500, 0)
        .duration(600)
        .EUt(80);

    event.recipes.gtceu
        .centrifuge(id('life_essence_centrifuging_0'))
        .itemInputs('6x mysticalagriculture:life_essence')
        .chancedOutput('mysticalagriculture:enderman_essence', 1500, 500)
        .chancedOutput('mysticalagriculture:slime_essence', 4500, 500)
        .chancedOutput('mysticalagriculture:prismarine_essence', 1500, 500)
        .duration(600)
        .EUt(400)
        .circuit(0);

    event.recipes.gtceu
        .centrifuge(id('life_essence_centrifuging_1'))
        .itemInputs('32x mysticalagriculture:life_essence')
        .chancedOutput('mysticalagriculture:blaze_essence', 6500, 500)
        .chancedOutput('mysticalagriculture:blitz_essence', 1500, 500)
        .chancedOutput('mysticalagriculture:basalz_essence', 4500, 500)
        .chancedOutput('mysticalagriculture:blizz_essence', 1500, 500)
        .duration(600)
        .EUt(6400)
        .circuit(1);

    // Machine recipes
    event.recipes.gtceu
        .chemical_reactor(id('inferium_coal'))
        .itemInputs('minecraft:coal', 'mysticalagriculture:inferium_essence')
        .itemOutputs('mysticalagradditions:inferium_coal')
        .duration(200)
        .EUt(20);

    event.recipes.gtceu
        .large_chemical_reactor(id('inferium_coal'))
        .itemInputs('minecraft:coal', 'mysticalagriculture:inferium_essence')
        .itemOutputs('mysticalagradditions:inferium_coal')
        .duration(200)
        .EUt(20);

    [
        { tier: 'prudentium', lowerTier: 'inferium', energy: 20 },
        { tier: 'tertium', lowerTier: 'prudentium', energy: 80 },
        { tier: 'imperium', lowerTier: 'tertium', energy: 80 },
        { tier: 'supremium', lowerTier: 'imperium', energy: 80 },
    ].forEach((tier) => {
        event.recipes.gtceu
            .chemical_reactor(id(`${tier.tier}_coal`))
            .itemInputs(`mysticalagradditions:${tier.lowerTier}_coal`, `mysticalagriculture:${tier.tier}_essence`)
            .itemOutputs(`mysticalagradditions:${tier.tier}_coal`)
            .duration(200)
            .EUt(tier.energy);

        event.recipes.gtceu
            .large_chemical_reactor(id(`${tier.tier}_coal`))
            .itemInputs(`mysticalagradditions:${tier.lowerTier}_coal`, `mysticalagriculture:${tier.tier}_essence`)
            .itemOutputs(`mysticalagradditions:${tier.tier}_coal`)
            .duration(200)
            .EUt(tier.energy);
    });

    event.recipes.gtceu
        .chemical_reactor(id('insanium_coal'))
        .itemInputs('mysticalagradditions:supremium_coal', 'mysticalagradditions:insanium_essence')
        .itemOutputs('mysticalagradditions:insanium_coal')
        .duration(200)
        .EUt(400);

    event.recipes.gtceu
        .large_chemical_reactor(id('insanium_coal'))
        .itemInputs('mysticalagradditions:supremium_coal', 'mysticalagradditions:insanium_essence')
        .itemOutputs('mysticalagradditions:insanium_coal')
        .duration(200)
        .EUt(400);
});
