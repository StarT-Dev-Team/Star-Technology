const id = global.id;

/*
 * Originally, TheLarkInn added a tag system based on RPM.
 * Since STM removed the Create Ccompatability, there is no point in these tags.
 * General structure remains from their PR
 */

const oreProcessableTiers = {
    primitive: [
        { material: 'iron', secondary: 'nickel', tertiary: 'tin' },
        { material: 'magnetite', secondary: 'gold', tertiary: 'gold' },
        { material: 'copper', secondary: 'gold', tertiary: 'nickel' },
        { material: 'tin', secondary: 'iron', tertiary: 'zinc' },
        { material: 'sphalerite', secondary: 'gallium', tertiary: 'sulfur' },
        { material: 'galena', secondary: 'silver', tertiary: 'sulfur' },
        { material: 'stibnite', secondary: 'antimony', tertiary: 'sulfur' },
    ],

    lv: [
        { material: 'coal', secondary: 'carbon', tertiary: 'thorium', quaternary: 'graphite' }, // check
        {
            material: 'sodalite',
            secondary: 'lazurite',
            tertiary: 'lapis',
            quaternary: 'kyanite',
        }, // check
        {
            material: 'realgar',
            secondary: 'sulfur',
            tertiary: 'antimony',
            quaternary: 'barite',
        }, // check
        {
            material: 'pentlandite',
            secondary: 'cobalt',
            tertiary: 'iron',
            quaternary: 'sulfur',
        },
        { material: 'silver', secondary: 'gold', tertiary: 'lead', quaternary: 'sulfur' },
        { material: 'gold', secondary: 'silver', tertiary: 'copper', quaternary: 'nickel' },
        {
            material: 'diamond',
            secondary: 'carbon',
            tertiary: 'graphite',
            quaternary: 'graphite',
        }, // check
        {
            material: 'emerald',
            secondary: 'beryllium',
            tertiary: 'aluminium',
            quaternary: 'aluminium',
        }, // check
        {
            material: 'ruby',
            secondary: 'chromium',
            tertiary: 'red_garnet',
            quaternary: 'cinnabar',
        }, // check
        {
            material: 'green_sapphire',
            secondary: 'aluminium',
            tertiary: 'sapphire',
            quaternary: 'almandine',
        }, // check
        {
            material: 'sapphire',
            secondary: 'aluminium',
            tertiary: 'green_sapphire',
            quaternary: 'almandine',
        }, // check
        {
            material: 'quartzite',
            secondary: 'certus_quartz',
            tertiary: 'opal',
            quaternary: 'barite',
        }, // check
        {
            material: 'certus_quartz',
            secondary: 'quartzite',
            tertiary: 'opal',
            quaternary: 'barite',
        }, // check
        { material: 'rock_salt', secondary: 'salt', tertiary: 'salt', quaternary: 'borax' },
        {
            material: 'saltpeter',
            secondary: 'salt',
            tertiary: 'potassium',
            quaternary: 'alunite',
        }, // check
        // mystical agriculture
        {
            material: 'salt',
            secondary: 'rock_salt',
            tertiary: 'rock_salt',
            quaternary: 'borax',
        },
        {
            material: 'amethyst',
            secondary: 'amethyst',
            tertiary: 'amethyst',
            quaternary: 'amethyst',
        },
        { material: 'sulfur', secondary: 'sulfur', tertiary: 'sulfur', quaternary: 'sulfur' },
        // { material: 'redstone', secondary: 'cinnabar', tertiary: 'rare_earth', quaternary: 'ruby' }, // not gonna rewrite entire thing just for an MA ore (is minecraft:redstone not gtceu:redstone_dust)
        {
            material: 'lapis',
            secondary: 'lazurite',
            tertiary: 'sodalite',
            quaternary: 'pyrite',
        },
        {
            material: 'nether_quartz',
            secondary: 'quartzite',
            tertiary: 'quartzite',
            quaternary: 'quartzite',
        },
    ],

    mv: [
        {
            material: 'blue_topaz',
            secondary: 'bastnasite',
            tertiary: 'topaz',
            quaternary: 'topaz',
        }, // check
        {
            material: 'topaz',
            secondary: 'bastnasite',
            tertiary: 'blue_topaz',
            quaternary: 'blue_topaz',
        }, // check
        {
            material: 'spessartine',
            secondary: 'manganese',
            tertiary: 'red_garnet',
            quaternary: 'asbestos',
        }, // check
        {
            material: 'monazite',
            secondary: 'thorium',
            tertiary: 'thorium',
            quaternary: 'neodymium',
        },
        {
            material: 'apatite',
            secondary: 'tricalcium_phosphate',
            tertiary: 'tricalcium_phosphate',
            quaternary: 'phosphate',
        },
        {
            material: 'lepidolite',
            secondary: 'lithium',
            tertiary: 'lithium',
            quaternary: 'caesium',
        },
        {
            material: 'pyrochlore',
            secondary: 'apatite',
            tertiary: 'apatite',
            quaternary: 'calcium',
        },
        {
            material: 'pyrolusite',
            secondary: 'manganese',
            tertiary: 'manganese',
            quaternary: 'tantalite',
        },
        {
            material: 'magnesite',
            secondary: 'magnesium',
            tertiary: 'magnesium',
            quaternary: 'cobaltite',
        },
        // mystical agriculture
        {
            material: 'red_garnet',
            secondary: 'spessartine',
            tertiary: 'pyrope',
            quaternary: 'almandine',
        },
        {
            material: 'yellow_garnet',
            secondary: 'andradite',
            tertiary: 'grossular',
            quaternary: 'uvarovite',
        },
        {
            material: 'garnet_sand',
            secondary: 'red_garnet',
            tertiary: 'yellow_garnet',
            quaternary: 'yellow_garnet',
        },
    ],

    hv: [
        {
            material: 'beryllium',
            secondary: 'emerald',
            tertiary: 'emerald',
            quaternary: 'beryllium',
        },
        {
            material: 'chalcopyrite',
            secondary: 'gold',
            tertiary: 'pyrite',
            quaternary: 'cobalt',
        },
        { material: 'bornite', secondary: 'gold', tertiary: 'cadmium', quaternary: 'cobalt' },
        {
            material: 'barite',
            secondary: 'pyrite',
            tertiary: 'pyrite',
            quaternary: 'chalcopyrite',
        }, // check
        { material: 'cassiterite', secondary: 'tin', tertiary: 'tin', quaternary: 'bismuth' },
        {
            material: 'tantalite',
            secondary: 'manganese',
            tertiary: 'niobium',
            quaternary: 'niobium',
        },
        {
            material: 'pollucite',
            secondary: 'caesium',
            tertiary: 'aluminium',
            quaternary: 'aluminium',
        },
        {
            material: 'zavaritskite',
            secondary: 'topaz',
            tertiary: 'blue_topaz',
            quaternary: 'bismuth',
        },
    ],

    ev: [
        {
            material: 'cooperite',
            secondary: 'palladium',
            tertiary: 'nickel',
            quaternary: 'nickel',
        },
        {
            material: 'bastnasite',
            secondary: 'neodymium',
            tertiary: 'neodymium',
            quaternary: 'rare_earth',
        },
        {
            material: 'tungstate',
            secondary: 'silver',
            tertiary: 'manganese',
            quaternary: 'lithium',
        },
        {
            material: 'bauxite',
            secondary: 'gallium',
            tertiary: 'grossular',
            quaternary: 'rutile',
        },
        {
            material: 'pitchblende',
            secondary: 'thorium',
            tertiary: 'thorium',
            quaternary: 'uraninite',
        },
        { material: 'ilmenite', secondary: 'iron', tertiary: 'iron', quaternary: 'rutile' },
        {
            material: 'molybdenite',
            secondary: 'molybdenum',
            tertiary: 'sulfur',
            quaternary: 'molybdenum',
        },
        {
            material: 'scheelite',
            secondary: 'manganese',
            tertiary: 'manganese',
            quaternary: 'molybdenum',
        },
        // mystical agriculture
        {
            material: 'cobaltite',
            secondary: 'cobalt',
            tertiary: 'sulfur',
            quaternary: 'cobalt',
        },
        { material: 'chromite', secondary: 'iron', tertiary: 'magnesium', quaternary: 'iron' },
    ],

    iv: [
        {
            material: 'naquadah',
            secondary: 'barium',
            tertiary: 'sulfur',
            quaternary: 'enriched_naquadah',
            quinary: 'enriched_naquadah',
        },
        {
            material: 'titanite',
            secondary: 'rutile',
            tertiary: 'xenotime',
            quaternary: 'calcite',
            quinary: 'pyrite',
        },
        {
            material: 'xenotime',
            secondary: 'monazite',
            tertiary: 'rare_earth',
            quaternary: 'yttrium',
            quinary: 'phosphate',
        },
        {
            material: 'zapolite',
            secondary: 'lautarite',
            tertiary: 'crookesite',
            quaternary: 'kitkaite',
            quinary: 'bauxite',
        },
        {
            material: 'lautarite',
            secondary: 'zapolite',
            tertiary: 'kitkaite',
            quaternary: 'crookesite',
            quinary: 'calcium',
        },
        // { material: 'iodargyrite', secondary: 'lautarite', tertiary: 'galena', quaternary: 'tungstate', quinary: 'iodargyrite' },
        // { material: 'clausthalite', secondary: 'tiemannite', tertiary: 'klockmannite', quaternary: 'berzelianite', quinary: 'stibiopalladinite' },
        {
            material: 'crookesite',
            secondary: 'kitkaite',
            tertiary: 'zapolite',
            quaternary: 'lautarite',
            quinary: 'bornite',
        },
        {
            material: 'kitkaite',
            secondary: 'crookesite',
            tertiary: 'lautarite',
            quaternary: 'zapolite',
            quinary: 'nickel',
        },
        // { material: 'calaverite', secondary: 'sylvanite', tertiary: 'clausthalite', quaternary: 'lautarite', quinary: 'calaverite' },
        // { material: 'sylvanite', secondary: 'calaverite', tertiary: 'clausthalite', quaternary: 'bauxite', quinary: 'sylvanite' },
        // { material: 'tiemannite', secondary: 'clausthalite', tertiary: 'klockmannite', quaternary: 'berzelianite', quinary: 'tiemannite' },
        // { material: 'klockmannite', secondary: 'clausthalite', tertiary: 'tiemannite', quaternary: 'stibiopalladinite', quinary: 'klockmannite' },
        // { material: 'stibiopalladinite', secondary: 'clausthalite', tertiary: 'berzelianite', quaternary: 'tiemannite', quinary: 'stibiopalladinite' },
        // { material: 'berzelianite', secondary: 'umangite', tertiary: 'aguilarite', quaternary: 'polybasite', quinary: 'berzelianite' },
        // { material: 'umangite', secondary: 'berzelianite', tertiary: 'aguilarite', quaternary: 'polybasite', quinary: 'umangite' },
        // { material: 'aguilarite', secondary: 'berzelianite', tertiary: 'umangite', quaternary: 'polybasite', quinary: 'aguilarite' },
        {
            material: 'strontianite',
            secondary: 'celestine',
            tertiary: 'gypsum',
            quaternary: 'calcite',
            quinary: 'calcium',
        },
        {
            material: 'celestine',
            secondary: 'strontianite',
            tertiary: 'calcite',
            quaternary: 'gypsum',
            quinary: 'calcium',
        },
        {
            material: 'naquadite',
            secondary: 'magnesite',
            tertiary: 'chromite',
            quaternary: 'naquadah',
            quinary: 'magnetite',
        },
    ],
};

const crushedOre = (mat, amount) => {
    return `${amount}x gtceu:crushed_${mat}_ore`;
};
const dust = (mat, amount) => {
    return `${amount}x gtceu:${mat}_dust`;
};
const fluids = {
    water: 'minecraft:water 100',
    water5x: 'minecraft:water 500',
    distilledWater: 'gtceu:distilled_water 100',
    distilledWater5x: 'gtceu:distilled_water 500',
    sodiumPersulfate: 'gtceu:sodium_persulfate 100',
    sodiumPersulfate5x: 'gtceu:sodium_persulfate 500',
    sodiumPersulfate25x: 'gtceu:sodium_persulfate 2500',
};

/*
 * Fuel based ore processing.
 * Blocks 10x the recipe while only 9x the duration.
 */

const primitiveProcessing = (event, materialObj) => {
    [
        { item: '2x #minecraft:coals', id: 'coals' },
        { item: '2x #gtceu:coal_dusts', id: 'coal_dusts' },
    ].forEach((fuel) => {
        event.recipes.gtceu
            .primitive_ore_processing(id(`${materialObj.material}/${fuel.id}`))
            .itemInputs(crushedOre(materialObj.material, 1), fuel.item)
            .inputFluids(fluids.water)
            .itemOutputs(dust(materialObj.material, 1))
            .chancedOutput(dust(materialObj.material, 1), 5000, 0)
            .chancedOutput(dust(materialObj.secondary, 1), 2500, 0)
            .chancedOutput(dust(materialObj.tertiary, 1), 1250, 0)
            .duration(320);
    });

    event.recipes.gtceu
        .primitive_ore_processing(id(`${materialObj.material}/coal_blocks`))
        .itemInputs(crushedOre(materialObj.material, 10), '2x #gtceu:coal_blocks')
        .inputFluids(fluids.water)
        .itemOutputs(dust(materialObj.material, 10))
        .itemOutputs(dust(materialObj.material, 5))
        .itemOutputs(dust(materialObj.secondary, 3))
        .itemOutputs(dust(materialObj.tertiary, 1))
        .duration(2880);

    event.recipes.gtceu
        .steam_ore_processing(id(`${materialObj.material}`))
        .itemInputs(crushedOre(materialObj.material, 1))
        .inputFluids(fluids.water)
        .itemOutputs(dust(materialObj.material, 1))
        .chancedOutput(dust(materialObj.material, 1), 5000, 0)
        .chancedOutput(dust(materialObj.secondary, 1), 2500, 0)
        .chancedOutput(dust(materialObj.tertiary, 1), 1250, 0)
        .duration(320)
        .EUt(GTValues.VA[GTValues.LV]);
};

/*
 * Copies the recipes from primitive ore processing, but without fuels.
 * Much faster than using coke fuel and generates more products per second than using blocks.
 * Chances are bossted.
 */
const electricPrimitiveProcessing = (event, materialObj) => {
    event.recipes.gtceu
        .electric_ore_processing(id(`${materialObj.material}`))
        .itemInputs(crushedOre(materialObj.material, 1))
        .inputFluids(fluids.water)
        .itemOutputs(dust(materialObj.material, 1))
        .chancedOutput(dust(materialObj.material, 1), 7500, 0)
        .chancedOutput(dust(materialObj.secondary, 1), 4500, 0)
        .chancedOutput(dust(materialObj.tertiary, 1), 3250, 0)
        .duration(160)
        .EUt(GTValues.VA[GTValues.LV]);
};

/*
 * Energy based ore processing.
 * Needs distilled water or sodium persulfate.
 */
const electricProcessing = (event, materialObj, tier) => {
    const voltages = {
        lv: GTValues.VA[GTValues.LV],
        mv: GTValues.VA[GTValues.MV],
        hv: GTValues.VA[GTValues.HV],
        ev: GTValues.VA[GTValues.EV],
    };
    const fluid = tier === 'lv' || tier === 'mv' ? fluids.distilledWater : fluids.sodiumPersulfate;
    event.recipes.gtceu
        .electric_ore_processing(id(`${materialObj.material}`))
        .itemInputs(crushedOre(materialObj.material, 1))
        .inputFluids(fluid)
        .itemOutputs(dust(materialObj.material, 1))
        .chancedOutput(dust(materialObj.material, 1), 5000, 0)
        .chancedOutput(dust(materialObj.secondary, 1), 2500, 100)
        .chancedOutput(dust(materialObj.tertiary, 1), 1250, 50)
        .chancedOutput(dust(materialObj.quaternary, 1), 750, 100)
        .duration(320)
        .EUt(voltages[tier]);
};

/*
 * Improved energy based primitive ore processing.
 * Uses less energy and is quicker.
 * Chances are boosted.
 */
const plantPrimitiveProcessing = (event, materialObj) => {
    event.recipes.gtceu
        .plant_ore_processing(id(`${materialObj.material}`))
        .itemInputs(crushedOre(materialObj.material, 1))
        .inputFluids(fluids.water)
        .itemOutputs(dust(materialObj.material, 1))
        .chancedOutput(dust(materialObj.material, 1), 9500, 0)
        .chancedOutput(dust(materialObj.secondary, 1), 6500, 0)
        .chancedOutput(dust(materialObj.tertiary, 1), 5250, 0)
        .duration(240)
        .EUt(GTValues.VHA[GTValues.LV]);

    event.recipes.gtceu
        .bulk_ore_processing_array(id(`${materialObj.material}`))
        .itemInputs(crushedOre(materialObj.material, 10))
        .inputFluids(fluids.water5x)
        .itemOutputs(dust(materialObj.material, 10))
        .itemOutputs(dust(materialObj.material, 10))
        .itemOutputs(dust(materialObj.secondary, 8))
        .itemOutputs(dust(materialObj.tertiary, 6))
        .duration(2400)
        .EUt(GTValues.VHA[GTValues.LV]);
};

/*
 * Improved energy based ore processing.
 * Uses less energy and is quicker.
 * Chances are boosted.
 */
const plantElectricProcessing = (event, materialObj, tier) => {
    const voltages = {
        lv: GTValues.VHA[GTValues.LV],
        mv: GTValues.VHA[GTValues.MV],
        hv: GTValues.VHA[GTValues.HV],
        ev: GTValues.VHA[GTValues.EV],
    };
    const fluid = tier === 'lv' || tier === 'mv' ? fluids.distilledWater : fluids.sodiumPersulfate;
    const fluid5x = tier === 'lv' || tier === 'mv' ? fluids.distilledWater5x : fluids.sodiumPersulfate5x;
    event.recipes.gtceu
        .plant_ore_processing(id(`${materialObj.material}`))
        .itemInputs(crushedOre(materialObj.material, 1))
        .inputFluids(fluid)
        .itemOutputs(dust(materialObj.material, 1))
        .chancedOutput(dust(materialObj.material, 1), 7500, 0)
        .chancedOutput(dust(materialObj.secondary, 1), 5500, 0)
        .chancedOutput(dust(materialObj.tertiary, 1), 3250, 0)
        .chancedOutput(dust(materialObj.quaternary, 1), 1750, 0)
        .duration(240)
        .EUt(voltages[tier]);

    event.recipes.gtceu
        .bulk_ore_processing_array(id(`${materialObj.material}`))
        .itemInputs(crushedOre(materialObj.material, 10))
        .inputFluids(fluid5x)
        .itemOutputs(dust(materialObj.material, 10))
        .itemOutputs(dust(materialObj.material, 9))
        .itemOutputs(dust(materialObj.secondary, 7))
        .itemOutputs(dust(materialObj.tertiary, 4))
        .itemOutputs(dust(materialObj.quaternary, 3))
        .duration(2400)
        .EUt(voltages[tier]);
};

/*
 * Final form of 1-step ore processing.
 */
const plantOreProcessing = (event, materialObj) => {
    event.recipes.gtceu
        .plant_ore_processing(id(`${materialObj.material}`))
        .itemInputs(crushedOre(materialObj.material, 1))
        .inputFluids(fluids.sodiumPersulfate5x)
        .itemOutputs(dust(materialObj.material, 1))
        .chancedOutput(dust(materialObj.material, 1), 8000, 0)
        .chancedOutput(dust(materialObj.secondary, 1), 6000, 0)
        .chancedOutput(dust(materialObj.tertiary, 1), 3600, 0)
        .chancedOutput(dust(materialObj.quaternary, 1), 2000, 0)
        .chancedOutput(dust(materialObj.quinary, 1), 1000, 0)
        .duration(320)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu
        .bulk_ore_processing_array(id(`${materialObj.material}`))
        .itemInputs(crushedOre(materialObj.material, 10))
        .inputFluids(fluids.sodiumPersulfate25x)
        .itemOutputs(dust(materialObj.material, 10))
        .itemOutputs(dust(materialObj.material, 9))
        .itemOutputs(dust(materialObj.secondary, 7))
        .itemOutputs(dust(materialObj.tertiary, 5))
        .itemOutputs(dust(materialObj.quaternary, 3))
        .itemOutputs(dust(materialObj.quinary, 2))
        .duration(3200)
        .EUt(GTValues.VA[GTValues.IV]);
};

const pulverizer = (event, materialObj) => {
    event.recipes.gtceu
        .pulverizer(id(`${materialObj.material}_dust`))
        .itemInputs(crushedOre(materialObj.material, 1))
        .itemOutputs(dust(materialObj.material, 1))
        .chancedOutput(dust(materialObj.material, 1), 2500, 250)
        .circuit(0)
        .duration(300)
        .EUt(GTValues.VA[GTValues.LV]);
};

/* Final Product */
ServerEvents.recipes((event) => {
    // Controllers
    event
        .shaped(Item.of('gtceu:primitive_ore_factory'), ['HRS', 'PBR', 'FRS'], {
            H: '#forge:tools/hammers',
            R: 'gtceu:brass_rod',
            S: 'gtceu:brass_screw',
            P: 'gtceu:brass_plate',
            B: 'gtceu:firebricks',
            F: '#forge:tools/screwdrivers',
        })
        .id('start:shaped/primitive_ore_factory');

    event
        .shaped(Item.of('gtceu:steam_ore_factory'), ['HRS', 'PBR', 'FRS'], {
            H: '#forge:tools/hammers',
            R: 'gtceu:invar_rod',
            S: 'gtceu:invar_screw',
            P: 'gtceu:invar_plate',
            B: 'kubejs:high_steam_machine_casing',
            F: '#forge:tools/screwdrivers',
        })
        .id('start:shaped/steam_ore_factory');

    event
        .shaped(Item.of('gtceu:electric_ore_factory'), ['GCG', 'PLP', 'WPW'], {
            G: 'gtceu:bronze_gear',
            C: '#gtceu:circuits/lv',
            P: 'gtceu:steel_plate',
            L: 'gtceu:lv_machine_hull',
            W: 'gtceu:tin_single_cable',
        })
        .id('start:shaped/electric_ore_factory');

    event
        .shaped(Item.of('gtceu:ore_processing_plant'), ['GCG', 'PLP', 'WPW'], {
            G: 'gtceu:tungsten_carbide_gear',
            C: '#gtceu:circuits/iv',
            P: 'gtceu:tungsten_carbide_plate',
            L: 'gtceu:iv_machine_hull',
            W: 'gtceu:platinum_single_cable',
        })
        .id('start:shaped/ore_processing_plant');

    event.recipes.gtceu
        .assembly_line(id('bulk_processing_array'))
        .itemInputs(
            'gtceu:uhv_machine_hull',
            '18x #gtceu:circuits/uhv',
            '64x kubejs:uepic_chip',
            '8x gtceu:uhv_electric_motor',
            '12x kubejs:uhv_super_magnetic_core',
            '8x kubejs:uhv_microfluidic_flow_valve',
            '6x gtceu:pure_netherite_gear',
            '4x gtceu:small_zircalloy_4_gear'
        )
        .inputFluids('gtceu:polyether_ether_ketone 12000', 'gtceu:utopian_akreyrium 750')
        .itemOutputs('gtceu:bulk_ore_processing_array')
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder
                .researchStack(Item.of('gtceu:ore_processing_plant'))
                .EUt(GTValues.VHA[GTValues.UHV])
                .CWUt(144)
        )
        .duration(3000)
        .EUt(GTValues.VHA[GTValues.UEV]);

    // Iterate over each tier and processable item and register the recipes
    Object.keys(oreProcessableTiers).forEach((tier) => {
        oreProcessableTiers[tier].forEach((item) => {
            pulverizer(event, item);

            if (tier === 'primitive') {
                primitiveProcessing(event, item);
                electricPrimitiveProcessing(event, item);
                plantPrimitiveProcessing(event, item);
            } else if (tier === 'iv') {
                plantOreProcessing(event, item);
            } else {
                electricProcessing(event, item, tier);
                plantElectricProcessing(event, item, tier);
            }
        });
    });
});
