//requires: create_new_age
ServerEvents.recipes((event) => {
    const id = global.id;

    /**
     * @param {string} input
     * @param {string} output
     * @param {number} duration
     * @param {number} eu
     * @param {string} recipeID
     */
    const polarizer = (input, output, duration, eu, recipeID) => {
        event.recipes.gtceu
            .polarizer(id(recipeID))
            .itemInputs(input)
            .itemOutputs(output)
            .duration(duration)
            .EUt(eu)
            .addMaterialInfo(true);
    };

    polarizer('minecraft:gold_ingot', 'create_new_age:overcharged_gold', 32, 16, 'energized_gold');
    polarizer('gtceu:magnetic_iron_ingot', 'create_new_age:overcharged_iron', 16, 16, 'energized_iron');
    polarizer('minecraft:diamond', 'create_new_age:overcharged_diamond', 160, 16, 'energized_diamond');

    /**
     * @param {string} input
     * @param {string} output
     * @param {number} duration
     * @param {number} eu
     * @param {string} recipeID
     */
    const bender = (input, output, duration, eu, recipeID) => {
        event.recipes.gtceu
            .bender(id(recipeID))
            .itemInputs(input)
            .itemOutputs(output)
            .duration(duration)
            .EUt(eu)
            .addMaterialInfo(true);
    };

    bender(
        'create_new_age:overcharged_iron',
        'create_new_age:overcharged_iron_sheet',
        48,
        24,
        'overcharged_iron_plate'
    );
    bender(
        'create_new_age:overcharged_gold',
        'create_new_age:overcharged_golden_sheet',
        196,
        24,
        'overcharged_gold_plate'
    );

    /**
     * @param {string} input
     * @param {string} output
     * @param {number} duration
     * @param {number} eu
     * @param {string} recipeID
     */
    const wiremill = (input, output, duration, eu, recipeID) => {
        event.recipes.gtceu
            .wiremill(id(recipeID))
            .itemInputs(input)
            .itemOutputs(output)
            .duration(duration)
            .EUt(eu)
            .addMaterialInfo(true);
    };

    wiremill('gtceu:copper_plate', '4x create_new_age:copper_wire', 189, 7, 'copper_wire');
    wiremill('create_new_age:overcharged_iron_sheet', '4x create_new_age:overcharged_iron_wire', 321, 7, 'iron_wire');
    wiremill(
        'create_new_age:overcharged_golden_sheet',
        '4x create_new_age:overcharged_golden_wire',
        588,
        7,
        'gold_wire'
    );
    wiremill(
        'create_new_age:overcharged_diamond',
        '4x create_new_age:overcharged_diamond_wire',
        764,
        7,
        'diamond_wire'
    );

    event.recipes.gtceu
        .shaped(Item.of('create_new_age:carbon_brushes'), ['SCS', 'KsK', 'SSS'], {
            S: 'gtceu:steel_plate',
            C: '#gtceu:circuits/lv',
            K: 'minecraft:charcoal',
            s: 'create:shaft',
        })
        .addMaterialInfo()
        .id('start:shaped/carbon_brushes');

    event.recipes.gtceu
        .shaped(Item.of('create_new_age:magnetite_block'), ['SMS', 'MSM', 'SMS'], {
            S: 'minecraft:stone',
            M: 'gtceu:magnetite_dust',
        })
        .addMaterialInfo()
        .id('start:shaped/magnetite_block');

    event.recipes.gtceu
        .shaped(Item.of('create_new_age:redstone_magnet'), ['MRM', 'RBR', 'MRM'], {
            B: 'create_new_age:magnetite_block',
            R: 'gtceu:red_alloy_ingot',
            M: 'gtceu:magnetite_dust',
        })
        .addMaterialInfo()
        .id('start:shaped/redstone_magnet');

    event.recipes.gtceu
        .shaped(Item.of('create_new_age:layered_magnet'), ['MRM', 'RBR', 'MRM'], {
            B: 'create_new_age:redstone_magnet',
            R: 'create_new_age:overcharged_golden_sheet',
            M: 'create_new_age:overcharged_iron_sheet',
        })
        .addMaterialInfo()
        .id('start:shaped/layered_magnet');

    event.recipes.gtceu
        .shaped(Item.of('2x create_new_age:fluxuated_magnetite'), ['RMR', 'DBD', 'RMR'], {
            B: 'create_new_age:layered_magnet',
            R: 'create_new_age:overcharged_golden_sheet',
            M: 'create_new_age:magnetite_block',
            D: 'create_new_age:overcharged_diamond',
        })
        .addMaterialInfo()
        .id('start:shaped/fluxated_magnetite_magnet');

    event.recipes.gtceu
        .shaped(Item.of('2x create_new_age:netherite_magnet'), ['MNM', 'NEN', 'MNM'], {
            M: 'create_new_age:fluxuated_magnetite',
            N: 'gtceu:neodymium_ingot',
            E: 'gtceu:energium_dust',
        })
        .addMaterialInfo()
        .id('start:shaped/neodymium_magnet');
});
