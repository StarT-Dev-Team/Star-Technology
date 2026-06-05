// packmode: hard

ServerEvents.recipes((event) => {
    const id = global.id;

    ['lp', 'hp'].forEach((SteamTier) => {
        [
            'solid_boiler',
            'liquid_boiler',
            'solar_boiler',
            'extractor',
            'macerator',
            'compressor',
            'forge_hammer',
            'furnace',
            'alloy_smelter',
            'rock_crusher',
            'miner',
        ].forEach((SteamMachineType) => {
            const steamHMRemovals = [
                'steam_machine_casing',
                `${SteamTier}_steam_${SteamMachineType}`,
                'steam_input_hatch',
                'bronze_machine_casing',
                'steel_machine_casing',
                'bronze_brick_casing',
                'steel_brick_casing',
                'steam_oven',
                'steam_grinder',
                'charcoal_pile_igniter',
            ];
            steamHMRemovals.forEach((remove) => {
                event.remove({ output: `gtceu:${remove}` });
                event.remove({ id: `gtceu:arc_furnace/arc_${remove}` });
                event.remove({ id: `gtceu:macerator/macerate_${remove}` });
            });
        });
    });

    const steamIO = (type, inputs) => {
        event.recipes.create
            .mechanical_crafting(`gtceu:steam_${type}_bus`, ['C', 'B'], {
                B: inputs[0],
                C: inputs[1],
            })
            .id(`start:mechanical_crafter/steam${type}_bus`);
        event.remove({ id: `gtceu:shaped/steam_${type}_bus` });
    };
    steamIO('input', ['gtceu:bronze_machine_casing', 'minecraft:chest']);
    steamIO('output', ['minecraft:chest', 'gtceu:bronze_machine_casing']);

    const steamCasing = (id2, type, core, mat) => {
        if (core === false)
            event.recipes.create
                .mechanical_crafting(Item.of(`${id2}:${type}`, 2), ['PSP', 'DFD', 'PSP'], {
                    P: `gtceu:${mat}_plate`,
                    D: `gtceu:double_${mat}_plate`,
                    S: `gtceu:${mat}_screw`,
                    F: `gtceu:${mat}_frame`,
                })
                .id(`start:shaped/${type}`);
        if (core === false)
            event.recipes.gtceu
                .assembler(id(`${type}`))
                .itemInputs(
                    `gtceu:${mat}_frame`,
                    `4x gtceu:${mat}_plate`,
                    `2x gtceu:double_${mat}_plate`,
                    `2x gtceu:${mat}_screw`
                )
                .itemOutputs(`2x ${id2}:${type}`)
                .circuit(8)
                .duration(50)
                .EUt(4);
        if (core !== false)
            event.recipes.create
                .mechanical_crafting(Item.of(`${id2}:${type}`, 2), ['PSP', 'PCP', 'PSP'], {
                    P: `gtceu:${mat}_plate`,
                    C: `${core}`,
                    S: `gtceu:${mat}_screw`,
                })
                .id(`start:mechanical_crafter/${type}`);
        if (core !== false)
            event.recipes.gtceu
                .assembler(id(`${type}`))
                .itemInputs(`${core}`, `6x gtceu:${mat}_plate`, `2x gtceu:${mat}_screw`)
                .itemOutputs(`2x ${id2}:${type}`)
                .circuit(6)
                .duration(50)
                .EUt(4);
    };
    steamCasing('gtceu', 'steam_machine_casing', 'minecraft:bricks', 'bronze');
    steamCasing('kubejs', 'high_steam_machine_casing', 'gtceu:firebricks', 'cast_iron');
    steamCasing('gtceu', 'industrial_steam_casing', false, 'brass');
    steamCasing('gtceu', 'bronze_machine_casing', false, 'bronze');
    steamCasing('gtceu', 'steel_machine_casing', false, 'cast_iron');

    const brickedCasing = (block, brick) => {
        const material = block === 'steel' ? 'cast_iron' : `${block}`;
        event.recipes.create
            .mechanical_crafting(Item.of(`gtceu:${block}_brick_casing`), ['PPP', 'SBS'], {
                P: `gtceu:${material}_plate`,
                B: `${brick}`,
                S: `gtceu:${material}_screw`,
            })
            .id(`start:mechanical_crafter/${block}_brick_casing`);
        event.recipes.gtceu
            .assembler(id(`${block}_brick_casing`))
            .itemInputs(`${brick}`, `3x gtceu:${material}_plate`, `2x gtceu:${material}_screw`)
            .itemOutputs(`gtceu:${block}_brick_casing`)
            .circuit(2)
            .duration(50)
            .EUt(4);
    };
    brickedCasing('bronze', 'minecraft:bricks');
    brickedCasing('steel', 'gtceu:firebricks');

    const steamMachine = (output, inputs) => {
        event.recipes.create
            .mechanical_crafting(Item.of(`gtceu:${output}`), ['ABC', 'DEF', 'GHI'], {
                A: inputs[0],
                B: inputs[1],
                C: inputs[2],
                D: inputs[3],
                E: inputs[4],
                F: inputs[5],
                G: inputs[6],
                H: inputs[7],
                I: inputs[8],
            })
            .id(`start:mechanical_crafter/${output}`);
    };
    steamMachine('lp_steam_solid_boiler', [
        'gtceu:bronze_plate',
        'gtceu:bronze_plate',
        'gtceu:bronze_plate',
        'gtceu:bronze_small_fluid_pipe',
        'minecraft:furnace',
        'gtceu:bronze_small_fluid_pipe',
        'gtceu:double_bronze_plate',
        'gtceu:bronze_brick_casing',
        'gtceu:double_bronze_plate',
    ]);
    steamMachine('hp_steam_solid_boiler', [
        'gtceu:cast_iron_plate',
        'gtceu:cast_iron_plate',
        'gtceu:cast_iron_plate',
        'gtceu:tin_alloy_small_fluid_pipe',
        'gtceu:lp_steam_solid_boiler',
        'gtceu:tin_alloy_small_fluid_pipe',
        'gtceu:double_cast_iron_plate',
        'gtceu:steel_brick_casing',
        'gtceu:double_cast_iron_plate',
    ]);
    steamMachine('hp_steam_liquid_boiler', [
        'gtceu:tin_alloy_small_fluid_pipe',
        'minecraft:glass',
        'gtceu:tin_alloy_small_fluid_pipe',
        'gtceu:tin_alloy_normal_fluid_pipe',
        'gtceu:hp_steam_solid_boiler',
        'gtceu:tin_alloy_normal_fluid_pipe',
        'gtceu:tin_alloy_small_fluid_pipe',
        'minecraft:glass',
        'gtceu:tin_alloy_small_fluid_pipe',
    ]);
    steamMachine('lp_steam_furnace', [
        'gtceu:bronze_small_fluid_pipe',
        'gtceu:bronze_ring',
        'gtceu:bronze_small_fluid_pipe',
        'gtceu:bronze_small_fluid_pipe',
        'minecraft:furnace',
        'gtceu:bronze_small_fluid_pipe',
        'gtceu:bronze_small_fluid_pipe',
        'gtceu:bronze_brick_casing',
        'gtceu:bronze_small_fluid_pipe',
    ]);
    steamMachine('hp_steam_furnace', [
        'gtceu:tin_alloy_small_fluid_pipe',
        'gtceu:cast_iron_ring',
        'gtceu:tin_alloy_small_fluid_pipe',
        'gtceu:tin_alloy_small_fluid_pipe',
        'gtceu:lp_steam_furnace',
        'gtceu:tin_alloy_small_fluid_pipe',
        'gtceu:tin_alloy_small_fluid_pipe',
        'gtceu:steel_brick_casing',
        'gtceu:tin_alloy_small_fluid_pipe',
    ]);
    steamMachine('lp_steam_extractor', [
        'gtceu:bronze_normal_fluid_pipe',
        'gtceu:bronze_plate',
        'gtceu:bronze_normal_fluid_pipe',
        'minecraft:piston',
        'gtceu:bronze_brick_casing',
        'minecraft:glass',
        'gtceu:bronze_normal_fluid_pipe',
        'gtceu:bronze_plate',
        'gtceu:bronze_normal_fluid_pipe',
    ]);
    steamMachine('hp_steam_extractor', [
        'gtceu:tin_alloy_normal_fluid_pipe',
        'gtceu:cast_iron_plate',
        'gtceu:tin_alloy_normal_fluid_pipe',
        'gtceu:lp_steam_extractor',
        'gtceu:steel_brick_casing',
        'minecraft:glass',
        'gtceu:tin_alloy_normal_fluid_pipe',
        'gtceu:cast_iron_plate',
        'gtceu:tin_alloy_normal_fluid_pipe',
    ]);
    steamMachine('lp_steam_macerator', [
        'gtceu:bronze_gear',
        'gtceu:bronze_small_fluid_pipe',
        'gtceu:bronze_gear',
        'gtceu:bronze_small_fluid_pipe',
        'create:millstone',
        'gtceu:bronze_small_fluid_pipe',
        'gtceu:bronze_gear',
        'gtceu:bronze_brick_casing',
        'gtceu:bronze_gear',
    ]);
    steamMachine('hp_steam_macerator', [
        'gtceu:cast_iron_gear',
        'gtceu:tin_alloy_small_fluid_pipe',
        'gtceu:cast_iron_gear',
        'gtceu:tin_alloy_small_fluid_pipe',
        'gtceu:lp_steam_macerator',
        'gtceu:tin_alloy_small_fluid_pipe',
        'gtceu:cast_iron_gear',
        'gtceu:steel_brick_casing',
        'gtceu:cast_iron_gear',
    ]);
    steamMachine('lp_steam_compressor', [
        'gtceu:bronze_small_fluid_pipe',
        'gtceu:bronze_small_fluid_pipe',
        'gtceu:bronze_small_fluid_pipe',
        'create:mechanical_press',
        'gtceu:bronze_brick_casing',
        'gtceu:double_bronze_plate',
        'gtceu:bronze_small_fluid_pipe',
        'gtceu:bronze_small_fluid_pipe',
        'gtceu:bronze_small_fluid_pipe',
    ]);
    steamMachine('hp_steam_compressor', [
        'gtceu:tin_alloy_small_fluid_pipe',
        'gtceu:tin_alloy_small_fluid_pipe',
        'gtceu:tin_alloy_small_fluid_pipe',
        'gtceu:lp_steam_compressor',
        'gtceu:steel_brick_casing',
        'gtceu:double_cast_iron_plate',
        'gtceu:tin_alloy_small_fluid_pipe',
        'gtceu:tin_alloy_small_fluid_pipe',
        'gtceu:tin_alloy_small_fluid_pipe',
    ]);
    steamMachine('lp_steam_forge_hammer', [
        'gtceu:bronze_small_fluid_pipe',
        'create:mechanical_press',
        'gtceu:bronze_small_fluid_pipe',
        'gtceu:bronze_small_fluid_pipe',
        'gtceu:bronze_brick_casing',
        'gtceu:bronze_small_fluid_pipe',
        'gtceu:bronze_small_fluid_pipe',
        'gtceu:double_bronze_plate',
        'gtceu:bronze_small_fluid_pipe',
    ]);
    steamMachine('hp_steam_forge_hammer', [
        'gtceu:tin_alloy_small_fluid_pipe',
        'gtceu:lp_steam_forge_hammer',
        'gtceu:tin_alloy_small_fluid_pipe',
        'gtceu:tin_alloy_small_fluid_pipe',
        'gtceu:steel_brick_casing',
        'gtceu:tin_alloy_small_fluid_pipe',
        'gtceu:tin_alloy_small_fluid_pipe',
        'gtceu:double_cast_iron_plate',
        'gtceu:tin_alloy_small_fluid_pipe',
    ]);
    steamMachine('hp_steam_blaster', [
        'gtceu:tin_alloy_small_fluid_pipe',
        'gtceu:steel_ring',
        'gtceu:tin_alloy_small_fluid_pipe',
        'gtceu:tin_alloy_small_fluid_pipe',
        'gtceu:hp_steam_furnace',
        'gtceu:tin_alloy_small_fluid_pipe',
        'gtceu:tin_alloy_small_fluid_pipe',
        'gtceu:steel_plate',
        'gtceu:tin_alloy_small_fluid_pipe',
    ]);
    steamMachine('steam_grinder', [
        'gtceu:steam_machine_casing',
        'gtceu:bronze_normal_fluid_pipe',
        'gtceu:steam_machine_casing',
        'gtceu:potin_gear',
        'gtceu:lp_steam_macerator',
        'gtceu:potin_gear',
        'gtceu:steam_machine_casing',
        'gtceu:bronze_normal_fluid_pipe',
        'gtceu:steam_machine_casing',
    ]);
    steamMachine('steam_kiln', [
        'gtceu:steam_machine_casing',
        'gtceu:bronze_ring',
        'gtceu:steam_machine_casing',
        'gtceu:bronze_rod',
        'gtceu:kiln',
        'gtceu:bronze_rod',
        'gtceu:steam_machine_casing',
        'gtceu:bronze_normal_fluid_pipe',
        'gtceu:steam_machine_casing',
    ]);
    steamMachine('steam_oven', [
        'gtceu:steam_machine_casing',
        'gtceu:small_potin_gear',
        'gtceu:steam_machine_casing',
        'gtceu:bronze_firebox_casing',
        'gtceu:lp_steam_furnace',
        'gtceu:bronze_firebox_casing',
        'gtceu:steam_machine_casing',
        'gtceu:bronze_large_fluid_pipe',
        'gtceu:steam_machine_casing',
    ]);
    steamMachine('steam_forge', [
        'kubejs:high_steam_machine_casing',
        'gtceu:small_wrought_iron_gear',
        'kubejs:high_steam_machine_casing',
        'gtceu:steel_firebox_casing',
        'gtceu:hp_steam_blaster',
        'gtceu:steel_firebox_casing',
        'kubejs:high_steam_machine_casing',
        'gtceu:tin_alloy_large_fluid_pipe',
        'kubejs:high_steam_machine_casing',
    ]);
    steamMachine('steam_casting_array', [
        'gtceu:industrial_steam_casing',
        'minecraft:glass',
        'gtceu:industrial_steam_casing',
        'gtceu:bronze_huge_fluid_pipe',
        'create:basin',
        'gtceu:bronze_huge_fluid_pipe',
        'gtceu:industrial_steam_casing',
        'thermal:redstone_servo',
        'gtceu:industrial_steam_casing',
    ]);
    // SteamMachine('steam_liquifier',['gtceu:industrial_steam_casing','gtceu:tempered_glass','gtceu:industrial_steam_casing','gtceu:bronze_huge_fluid_pipe','gtceu:lp_steam_extractor','gtceu:bronze_huge_fluid_pipe','gtceu:industrial_steam_casing','thermal:redstone_servo','gtceu:industrial_steam_casing']);
    // SteamMachine('steam_ore_factory',['kubejs:high_steam_machine_casing','gtceu:potin_gear','kubejs:high_steam_machine_casing','gtceu:tin_alloy_normal_fluid_pipe','gtceu:primitive_ore_factory','gtceu:tin_alloy_normal_fluid_pipe','kubejs:high_steam_machine_casing','createlowheated:basic_burner','kubejs:high_steam_machine_casing']);  //Disabled Until Core Fix
    steamMachine('high_pressure_steam_hammer', [
        'kubejs:high_steam_machine_casing',
        'minecraft:anvil',
        'kubejs:high_steam_machine_casing',
        'gtceu:tin_alloy_normal_fluid_pipe',
        'gtceu:hp_steam_forge_hammer',
        'gtceu:tin_alloy_normal_fluid_pipe',
        'kubejs:high_steam_machine_casing',
        'gtceu:potin_gear',
        'kubejs:high_steam_machine_casing',
    ]);
    steamMachine('high_pressure_steam_sifter', [
        'kubejs:high_steam_machine_casing',
        'exnihilosequentia:flint_mesh',
        'kubejs:high_steam_machine_casing',
        'gtceu:tin_alloy_normal_fluid_pipe',
        'create:basin',
        'gtceu:tin_alloy_normal_fluid_pipe',
        'kubejs:high_steam_machine_casing',
        'thermal:redstone_servo',
        'kubejs:high_steam_machine_casing',
    ]);
    steamMachine('charcoal_pile_igniter', [
        'gtceu:bronze_plate',
        'gtceu:steel_rotor',
        'gtceu:bronze_plate',
        'gtceu:bronze_plate',
        'gtceu:steam_machine_casing',
        'gtceu:bronze_plate',
        'minecraft:flint_and_steel',
        'minecraft:flint_and_steel',
        'minecraft:flint_and_steel',
    ]);

    steamMachine('steam_input_hatch', [
        'gtceu:bronze_plate',
        'gtceu:bronze_large_fluid_pipe',
        'gtceu:bronze_plate',
        'gtceu:double_bronze_plate',
        'gtceu:bronze_rotor',
        'gtceu:double_bronze_plate',
        'gtceu:bronze_plate',
        'gtceu:bronze_large_fluid_pipe',
        'gtceu:bronze_plate',
    ]);

    let inter = 'gtceu:industrial_steam_casing';
    event.recipes.create
        .sequenced_assembly([Item.of(`gtceu:ulv_fluid_input`)], inter, [
            event.recipes.createPressing(inter, inter),
            event.recipes.createDeploying(inter, [inter, `minecraft:bucket`]),
            event.recipes.createDeploying(inter, [inter, `gtceu:rubber_ring`]),
            event.recipes.createPressing(inter, inter),
        ])
        .transitionalItem(inter)
        .loops(1)
        .id('start:sequenced_assembly/ulv_fluid_input');
});
