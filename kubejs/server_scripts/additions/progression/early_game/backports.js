ServerEvents.recipes((event) => {
    const id = global.id;

    event
        .shaped('gtceu:kiln', ['WPW', 'RHR', 'BBB'], {
            W: 'gtceu:wood_plate',
            P: 'gtceu:wrought_iron_plate',
            R: 'gtceu:iron_rod',
            H: '#forge:tools/hammers',
            B: 'minecraft:mud_bricks',
        })
        .id('start:shaped/kiln');

    event
        .shaped('gtceu:steam_kiln', ['WPH', 'RKR', 'BBB'], {
            W: '#forge:tools/wrenches',
            P: 'gtceu:bronze_plate',
            R: 'gtceu:bronze_rod',
            H: '#forge:tools/hammers',
            K: 'gtceu:kiln',
            B: 'gtceu:steam_machine_casing',
        })
        .id('start:shaped/steam_kiln');

    event
        .shaped('gtceu:high_pressure_steam_hammer', ['BGB', 'PFP', 'BGB'], {
            G: 'gtceu:invar_gear',
            P: 'gtceu:potin_normal_fluid_pipe',
            F: 'gtceu:hp_steam_forge_hammer',
            B: 'kubejs:high_steam_machine_casing',
        })
        .id('start:shaped/high_pressure_steam_hammer');

    event
        .shaped('2x kubejs:high_steam_machine_casing', ['PHP', 'PBP', 'PWP'], {
            P: 'gtceu:wrought_iron_plate',
            H: '#forge:tools/hammers',
            W: '#forge:tools/wrenches',
            B: 'gtceu:firebricks',
        })
        .id('start:shaped/high_steam_machine_casing');

    event.recipes.gtceu
        .assembler(id('high_steam_machine_casing'))
        .itemInputs('6x gtceu:wrought_iron_plate', 'gtceu:firebricks')
        .circuit(6)
        .itemOutputs('2x kubejs:high_steam_machine_casing')
        .duration(50)
        .EUt(16);

    const kilnRecipe = (type, input, output, duration) => {
        event.recipes.gtceu.kiln(id(type)).itemInputs(input).itemOutputs(output).duration(duration);
        event.recipes.gtceu.steam_kiln(id(type)).itemInputs(input).itemOutputs(output).duration(duration).EUt(30);
    };

    kilnRecipe('wrought_iron', 'minecraft:iron_ingot', 'gtceu:wrought_iron_ingot', 40);
    kilnRecipe('glass', 'gtceu:glass_dust', 'minecraft:glass', 30);
});
