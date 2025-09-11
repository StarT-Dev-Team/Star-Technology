//requires: create_new_age
global.not_hardmode(() => {
ServerEvents.recipes(event => {
    const id = global.id;

    const polarizer = (input, output, duration, eu, recipeID) => {
        event.recipes.gtceu.polarizer(id(recipeID))
            .itemInputs(input)
            .itemOutputs(output)
            .duration(duration)
            .EUt(eu);
    };

    polarizer('minecraft:gold_ingot', 'create_new_age:overcharged_gold', 32, 16, 'energized_gold');
    polarizer('gtceu:magnetic_iron_ingot', 'create_new_age:overcharged_iron', 16, 16, 'energized_iron');
    polarizer('minecraft:diamond', 'create_new_age:overcharged_diamond', 160, 16, 'energized_diamond');

    const bender = (input, output, duration, eu, recipeID) => {
        event.recipes.gtceu.bender(id(recipeID))
            .itemInputs(input)
            .itemOutputs(output)
            .duration(duration)
            .EUt(eu);
    };

    bender('create_new_age:overcharged_iron', 'create_new_age:overcharged_iron_sheet', 48, 24, 'overcharged_iron_plate');
    bender('create_new_age:overcharged_gold', 'create_new_age:overcharged_golden_sheet', 196, 24, 'overcharged_gold_plate');

    const wiremill = (input, output, duration, eu, recipeID) => {
        event.recipes.gtceu.wiremill(id(recipeID))
            .itemInputs(input)
            .itemOutputs(output)
            .duration(duration)
            .EUt(eu);
    };

    wiremill('gtceu:copper_plate', '4x create_new_age:copper_wire', 189, 7, 'copper_wire');
    wiremill('create_new_age:overcharged_iron_sheet', '4x create_new_age:overcharged_iron_wire', 321, 7, 'iron_wire');
    wiremill('create_new_age:overcharged_golden_sheet', '4x create_new_age:overcharged_golden_wire', 588, 7, 'gold_wire');
    wiremill('create_new_age:overcharged_diamond', '4x create_new_age:overcharged_diamond_wire', 764, 7, 'diamond_wire');

})});