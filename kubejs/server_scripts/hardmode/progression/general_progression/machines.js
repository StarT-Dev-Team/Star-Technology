// packmode: hard

ServerEvents.recipes((event) => {
    const id = global.id;

    const tiers = ['lv', 'mv', 'hv', 'ev', 'iv', 'luv', 'zpm', 'uv'];

    event.remove({ output: /gtceu:arc_furnace\/arc_lv.*/ });
    event.remove({ output: /gtceu:macerate\/macerate_lv.*/ });
    event.remove({ output: /gtceu:arc_furnace\/arc_mv.*/ });
    event.remove({ output: /gtceu:macerate\/macerate_mv.*/ });
    event.remove({ output: /gtceu:arc_furnace\/arc_hv.*/ });
    event.remove({ output: /gtceu:macerate\/macerate_hv.*/ });
    event.remove({ output: /gtceu:arc_furnace\/arc_ev.*/ });
    event.remove({ output: /gtceu:macerate\/macerate_ev.*/ });
    event.remove({ output: /gtceu:arc_furnace\/arc_iv.*/ });
    event.remove({ output: /gtceu:macerate\/macerate_iv.*/ });
    event.remove({ output: /gtceu:arc_furnace\/arc_luv.*/ });
    event.remove({ output: /gtceu:macerate\/macerate_luv.*/ });
    event.remove({ output: /gtceu:arc_furnace\/arc_zpm.*/ });
    event.remove({ output: /gtceu:macerate\/macerate_zpm.*/ });
    event.remove({ output: /gtceu:arc_furnace\/arc_uv.*/ });
    event.remove({ output: /gtceu:macerate\/macerate_uv.*/ });

    const machineTypes = [
        'electric_furnace',
        'alloy_smelter',
        'arc_furnace',
        'assembler',
        'autoclave',
        'bender',
        'brewery',
        'canner',
        'centrifuge',
        'chemical_bath',
        'chemical_reactor',
        'compressor',
        'cutter',
        'distillery',
        'electrolyzer',
        'electromagnetic_separator',
        'extractor',
        'extruder',
        'fermenter',
        'fluid_heater',
        'fluid_solidifier',
        'forge_hammer',
        'forming_press',
        'lathe',
        'scanner',
        'mixer',
        'ore_washer',
        'packer',
        'polarizer',
        'laser_engraver',
        'sifter',
        'thermal_centrifuge',
        'wiremill',
        'circuit_assembler',
        'macerator',
        'gas_collector',
        'rock_crusher',
        'air_scrubber',
        'steam_turbine',
        'combustion',
        'gas_turbine',
        'pump',
        'fisher',
        'block_breaker',
        'miner',
        'world_accelerator',
        'item_collector',
        'buffer',
        'diode',
        'muffler_hatch',
        'hermetic_casing',
        'charger_4x',
        'machine_hull',
        'machine_casing',
        'energy_input_hatch',
        'energy_output_hatch',
    ];

    tiers.forEach((tier) => {
        machineTypes.forEach((machine) => {
            event.remove({ output: `gtceu:${tier}_${machine}` });
            if (machine === 'energy_input_hatch') {
                if (tier !== 'lv' && tier !== 'mv' && tier !== 'hv') {
                    event.remove({ output: `gtceu:${tier}_${machine}_4a` });
                    event.remove({ output: `gtceu:${tier}_${machine}_16a` });
                }
                if (tier === 'uv' || tier === 'zpm') {
                    let priorTier = tier === 'uv' ? 'zpm' : 'luv';
                    event.remove({
                        id: `gtceu:research_station/1_x_gtceu_${priorTier}_${machine}`,
                    });
                }
            }
            if (machine === 'energy_output_hatch') {
                if (tier !== 'lv' && tier !== 'mv' && tier !== 'hv') {
                    event.remove({ output: `gtceu:${tier}_${machine}_4a` });
                    event.remove({ output: `gtceu:${tier}_${machine}_16a` });
                }
                if (tier === 'uv' || tier === 'zpm') {
                    let priorTier = tier === 'uv' ? 'zpm' : 'luv';
                    event.remove({
                        id: `gtceu:research_station/1_x_gtceu_${priorTier}_${machine}`,
                    });
                }
            }
        });
        if (tier !== 'lv' && tier !== 'mv' && tier !== 'hv') {
            event.remove({ output: `gtceu:${tier}_substation_input_hatch_64a` }); // wont get recipes in Eta
            event.remove({ output: `gtceu:${tier}_substation_output_hatch_64a` }); // wont get recipes in Eta
            if (tier !== 'ev') {
                [256, 1024, 4096].forEach((amps) => {
                    ['target', 'source'].forEach((type) => {
                        event.remove({ output: `gtceu:${tier}_${amps}a_laser_${type}_hatch` }); // wont get recipes in Eta
                    });
                });
            }
        }
        [1, 2, 4, 16].forEach((transformerAmps) => {
            event.remove({ output: `gtceu:${tier}_transformer_${transformerAmps}a` });
        });
        [4, 8, 16].forEach((bufferSize) => {
            event.remove({ output: `gtceu:${tier}_battery_buffer_${bufferSize}x` });
        });
        if (tier === 'lv' || tier === 'mv' || tier === 'hv' || tier === 'ev') {
            event.remove({ output: `gtceu:${tier}_super_chest` });
            event.remove({ output: `gtceu:${tier}_super_tank` });
        }
        if (tier !== 'lv' && tier !== 'mv' && tier !== 'hv' && tier !== 'ev') {
            event.remove({ output: `gtceu:${tier}_quantum_chest` });
            event.remove({ output: `gtceu:${tier}_quantum_tank` });
            event.remove({ output: `gtceu:${tier}_parallel_hatch` }); // wont get recipes in Eta
        }
    });
    event.remove({ id: `gtceu:scanner/1_x_gtceu_iv_energy_input_hatch` });

    event.remove({ output: `gtceu:hv_item_passthrough_hatch` }); // wont get recipe
    event.remove({ output: `gtceu:hv_fluid_passthrough_hatch` }); // wont get recipe
    event.remove({ id: `gtceu:assembler/me_stocking_import_hatch` });
    event.remove({ id: `gtceu:assembler/me_stocking_import_bus` });
    // ME Pattern Buffer blanket diabled and ME I/O is in AE-Machinery as a Packmode determinate

    event.recipes.gtceu
        .assembler(id(`machine_facility`))
        .itemInputs(
            'gtceu:ulv_assembler',
            '6x gtceu:ulv_robot_arm',
            '4x #gtceu:circuits/lv',
            '2x gtceu:ulv_conveyor_module',
            '2x kubejs:ulv_emitter',
            '2x gtceu:ulv_electric_pump',
            '2x gtceu:steel_gear',
            '2x gtceu:small_damascus_steel_gear'
        )
        .inputFluids('gtceu:tin 864')
        .itemOutputs(`gtceu:machine_facility`)
        .duration(3000)
        .circuit(2)
        .EUt(8);

    const tierMaterials = (
        tier,
        wire,
        cable,
        cable1up,
        chip,
        rubber,
        head,
        ewire,
        material,
        magnetic,
        glass,
        buzzsaw,
        pipe,
        rotorM,
        storageI,
        storageF,
        eu,
        lubricantM,
        solderM,
        componentMaterial
    ) => {
        const circuit = `#gtceu:circuits/${tier}`;
        const arm = `gtceu:${tier}_robot_arm`;
        const conveyor = `gtceu:${tier}_conveyor_module`;
        const motor = `gtceu:${tier}_electric_motor`;
        const pump = `gtceu:${tier}_electric_pump`;
        const piston = `gtceu:${tier}_electric_piston`;
        const emitter = `gtceu:${tier}_emitter`;
        const sensor = `gtceu:${tier}_sensor`;
        const eWire1x = `gtceu:${ewire}_single_wire`;
        const wire2x = `gtceu:${wire}_double_wire`;
        const wire4x = `gtceu:${wire}_quadruple_wire`;
        const hull = `gtceu:${tier}_machine_hull`;
        const cable1x = `gtceu:${cable}_single_cable`;
        const cable4x = `gtceu:${cable}_quadruple_cable`;
        const pWire2x = `gtceu:${cable}_double_wire`;
        const pWire4x = `gtceu:${cable}_quadruple_wire`;
        const plate = `gtceu:${material}_plate`;
        const rod = `gtceu:${material}_rod`;
        const gear = `gtceu:${material}_gear`;
        const smGear = `gtceu:small_${material}_gear`;
        const rodM = `gtceu:${magnetic}_rod`;
        const spring = `gtceu:${wire}_spring`;
        const smSpring = `gtceu:small_${wire}_spring`;
        const rotor = `gtceu:${rotorM}_rotor`;
        const pipeNormal = `gtceu:${pipe}_normal_fluid_pipe`;
        const chest = `gtceu:${storageI}`;
        const tank = `gtceu:${storageF}`;
        const rubberF = `gtceu:${rubber}`;
        const solder = `gtceu:${solderM}`;
        const lubricant = `gtceu:${lubricantM}`;

        const allTierMachine = (type, inputs, fluids) => {
            event.recipes.gtceu
                .simple_machine_facility(id(`${tier}_${type}`))
                .itemInputs(inputs)
                .inputFluids(fluids)
                .itemOutputs(`gtceu:${tier}_${type}`)
                .duration(100)
                .EUt(eu);
        };

        allTierMachine(
            'electric_furnace',
            [hull, '2x ' + circuit, '4x ' + wire2x, '2x ' + cable1x, 'minecraft:furnace'],
            [solder + ' 144']
        );
        allTierMachine(
            'alloy_smelter',
            [hull, '2x ' + circuit, '4x ' + wire4x, '2x ' + cable1x, 'minecraft:blast_furnace'],
            [solder + ' 144']
        );
        allTierMachine(
            'arc_furnace',
            [hull, '2x ' + circuit, 'gtceu:graphite_dust', '3x ' + plate, '2x ' + cable4x],
            [solder + ' 144']
        );
        allTierMachine(
            'assembler',
            [hull, '2x ' + arm, '2x ' + conveyor, '2x ' + circuit, '2x ' + cable1x],
            [solder + ' 72', lubricant + ' 500']
        );
        allTierMachine(
            'autoclave',
            [hull, '4x ' + plate, glass, '2x ' + circuit, pump],
            [solder + ' 72', rubberF + ' 288']
        );
        allTierMachine(
            'bender',
            [hull, '2x ' + piston, plate, '2x ' + circuit, '2x ' + motor, cable1x],
            [solder + ' 72', lubricant + ' 500']
        );
        allTierMachine(
            'brewery',
            [hull, '2x ' + glass, '2x ' + circuit, pump, '2x ' + smSpring, '2x ' + cable1x],
            [solder + ' 72', rubberF + ' 288']
        );
        allTierMachine(
            'canner',
            [hull, '3x ' + glass, '2x ' + circuit, pump, '2x ' + cable1x, tank],
            [solder + ' 144']
        );
        allTierMachine(
            'centrifuge',
            [hull, '4x ' + circuit, '2x ' + motor, '2x ' + cable1x, `gtceu:long_${material}_rod`],
            [solder + ' 72', rubberF + ' 288']
        );
        allTierMachine(
            'chemical_bath',
            [hull, '2x ' + glass, '2x ' + conveyor, '2x ' + circuit, pump, cable1x],
            [solder + ' 72', rubberF + ' 288']
        );
        allTierMachine(
            'chemical_reactor',
            [hull, '2x ' + glass, '2x ' + circuit, rotor, motor, '2x ' + cable1x, `gtceu:${rotor}_plate`],
            [solder + ' 72', rubberF + ' 288']
        );
        allTierMachine(
            'compressor',
            [hull, '2x ' + plate, '2x ' + piston, '2x ' + circuit, '2x ' + cable4x],
            [solder + ' 72', lubricant + ' 500']
        );
        allTierMachine(
            'cutter',
            [hull, glass, conveyor, buzzsaw, '2x ' + circuit, motor, '2x ' + cable1x],
            [solder + ' 72', lubricant + ' 500']
        );
        allTierMachine(
            'distillery',
            [hull, '2x ' + glass, '2x ' + pump, '2x ' + circuit, smSpring, cable1x],
            [solder + ' 72', rubberF + ' 288']
        );
        allTierMachine(
            'electrolyzer',
            [hull, motor, '4x ' + eWire1x, glass, '2x ' + circuit, '2x ' + cable1x],
            [solder + ' 144']
        );
        allTierMachine(
            'electromagnetic_separator',
            [hull, '2x ' + wire2x, conveyor, circuit, '2x ' + rodM, '2x ' + cable1x],
            [solder + ' 144']
        );
        allTierMachine(
            'extractor',
            [hull, '2x ' + glass, piston, pump, '2x ' + circuit, '2x ' + cable1x],
            [solder + ' 72', rubberF + ' 288']
        );
        allTierMachine('extruder', [hull, '4x ' + wire4x, piston, '2x ' + circuit, pipeNormal], [solder + ' 144']);
        allTierMachine(
            'fermenter',
            [hull, '2x ' + glass, circuit, pump, '4x ' + cable1x, `gtceu:${rotor}_ring`],
            [solder + ' 72', rubberF + ' 288']
        );
        allTierMachine(
            'fluid_heater',
            [hull, '2x ' + pump, '2x ' + wire4x, glass, circuit, '2x ' + cable1x],
            [solder + ' 72', rubberF + ' 288']
        );
        allTierMachine(
            'fluid_solidifier',
            [hull, '2x ' + pump, glass, '2x ' + circuit, chest, '2x ' + cable1x],
            [solder + ' 72', rubberF + ' 288']
        );
        allTierMachine(
            'forge_hammer',
            [hull, '2x ' + piston, '2x ' + circuit, 'minecraft:anvil', '3x ' + cable1x],
            [solder + ' 144']
        );
        allTierMachine(
            'forming_press',
            [hull, '2x ' + piston, '2x ' + circuit, '4x ' + cable4x, `gtceu:${material}_ring`],
            [solder + ' 144']
        );
        allTierMachine(
            'lathe',
            [hull, '2x ' + circuit, motor, head, piston, '2x ' + cable1x],
            [solder + ' 72', lubricant + ' 500']
        );
        allTierMachine('scanner', [hull, '4x ' + circuit, emitter, sensor, '2x ' + cable1x], [solder + ' 144']);
        allTierMachine(
            'mixer',
            [hull, '4x ' + glass, rotor, motor, '2x ' + circuit, `2x gtceu:${rotor}_rod`],
            [solder + ' 72', rubberF + ' 288']
        );
        allTierMachine(
            'ore_washer',
            [hull, '2x ' + rotor, glass, '2x ' + circuit, motor, '2x ' + cable1x, 'minecraft:bucket'],
            [solder + ' 72', rubberF + ' 288']
        );
        allTierMachine(
            'packer',
            [hull, '2x ' + chest, arm, conveyor, '2x ' + circuit, '2x ' + cable1x],
            [solder + ' 144']
        );
        allTierMachine('polarizer', [hull, '4x ' + pWire2x, '2x ' + rodM, '2x ' + cable1x], [solder + ' 144']);
        allTierMachine(
            'laser_engraver',
            [hull, '2x ' + piston, emitter, 'gtceu:glass_lens', '3x ' + circuit, '2x ' + cable1x],
            [solder + ' 144', 'gtceu:distilled_water 1000']
        );
        allTierMachine(
            'sifter',
            [hull, '2x ' + piston, '2x ' + 'gtceu:item_filter', '2x ' + circuit, '2x ' + cable1x],
            [solder + ' 144']
        );
        allTierMachine(
            'thermal_centrifuge',
            [hull, '2x ' + motor, '2x ' + circuit, '2x ' + wire4x, '2x ' + cable1x],
            [solder + ' 144']
        );
        allTierMachine(
            'wiremill',
            [hull, '4x ' + motor, '2x ' + circuit, '2x ' + cable1x, '2x ' + rod],
            [solder + ' 72', lubricant + ' 500']
        );
        allTierMachine('macerator', [hull, piston, motor, head, gear, '2x ' + circuit], [solder + ' 144']);
        allTierMachine(
            'gas_collector',
            [hull, '4x ' + rod, '2x ' + pump, 'gtceu:fluid_filter', circuit],
            [solder + ' 72', rubberF + ' 288']
        );
        allTierMachine('rock_crusher', [hull, piston, motor, head, '3x ' + glass, '2x ' + cable1x], [solder + ' 144']);
        allTierMachine(
            'fisher',
            [hull, '2x ' + piston, '3x ' + motor, '2x ' + circuit, pump, '32x #forge:string'],
            [solder + ' 72', rubberF + ' 288']
        );
        allTierMachine('charger_4x', [hull, '4x ' + pWire4x, chest, circuit, '2x ' + cable1x], [solder + ' 144']);
        allTierMachine(
            'muffler_hatch',
            [hull, motor, rotor, '2x ' + cable1x, `gtceu:${rotor}_rod`, `gtceu:${rotor}_ring`],
            [solder + ' 144']
        );
        if (tier === 'lv' || tier === 'mv' || tier === 'hv' || tier === 'ev') {
            allTierMachine(
                'item_collector',
                [hull, '3x ' + rotor, chest, '2x ' + motor, '2x ' + circuit, cable1x],
                [solder + ' 144']
            );
            if (tier !== 'ev') {
                allTierMachine('buffer', [hull, pump, circuit, conveyor, tank, chest], [solder + ' 144']);
                allTierMachine(
                    'combustion',
                    [hull, '2x ' + piston, '2x ' + motor, '2x ' + gear, circuit, cable1x],
                    [solder + ' 144']
                );
                allTierMachine(
                    'steam_turbine',
                    [hull, '2x ' + pipeNormal, '2x ' + rotor, '2x ' + motor, circuit, cable1x],
                    [solder + ' 144']
                );
                allTierMachine(
                    'gas_turbine',
                    [hull, '2x ' + rotor, '2x ' + motor, circuit, pump, '2x ' + cable1x],
                    [solder + ' 144']
                );
            }
        }
        allTierMachine(
            'battery_buffer_4x',
            [hull, chest, `4x gtceu:${cable}_quadruple_wire`, circuit],
            [solder + ' 144']
        );
        allTierMachine('battery_buffer_8x', [hull, chest, `4x gtceu:${cable}_octal_wire`, circuit], [solder + ' 144']);
        allTierMachine('battery_buffer_16x', [hull, chest, `4x gtceu:${cable}_hex_wire`, circuit], [solder + ' 144']);
        allTierMachine(
            'me_assembler',
            [hull, '2x ' + arm, '2x ' + circuit, emitter, conveyor, motor, '3x ' + cable1x],
            [solder + ' 144']
        );

        const transformers = (amps, cableSize) => {
            if (chip !== null) {
                allTierMachine(
                    `transformer_${amps}a`,
                    [
                        hull,
                        `4x gtceu:${cable}_${cableSize}_cable`,
                        `1x gtceu:${cable1up}_${cableSize}_cable`,
                        circuit,
                        `4x ${chip}`,
                    ],
                    [solder + ` ${144 * amps}`]
                );
            } else {
                allTierMachine(
                    `transformer_${amps}a`,
                    [hull, `4x gtceu:${cable}_${cableSize}_cable`, `1x gtceu:${cable1up}_${cableSize}_cable`, circuit],
                    [solder + ` ${144 * amps}`]
                );
            }
        };
        transformers(1, 'single');
        transformers(2, 'double');
        transformers(4, 'quadruple');
        transformers(16, 'hex');

        //Assembler
        ['input', 'output'].forEach((hatchType) => {
            const springCable = hatchType === 'input' ? 'single_cable' : 'spring';
            if (tier === 'lv') {
                event.recipes.gtceu
                    .assembler(id(`${tier}_energy_${hatchType}_hatch`))
                    .itemInputs(
                        `gtceu:${tier}_machine_hull`,
                        `1x #gtceu:circuits/${tier}`,
                        `4x gtceu:${cable}_${springCable}`,
                        `1x gtceu:${tier}_voltage_coil`
                    )
                    .inputFluids(`gtceu:sodium_potassium 1000`)
                    .itemOutputs(`gtceu:${tier}_energy_${hatchType}_hatch`)
                    .duration(300)
                    .EUt(eu);
            } else if (tier === 'mv') {
                event.recipes.gtceu
                    .assembler(id(`${tier}_energy_${hatchType}_hatch`))
                    .itemInputs(
                        `gtceu:${tier}_machine_hull`,
                        `1x #gtceu:circuits/${tier}`,
                        `4x gtceu:${cable}_${springCable}`,
                        `4x ${chip}`,
                        `1x gtceu:${tier}_voltage_coil`
                    )
                    .inputFluids(`gtceu:sodium_potassium 2500`)
                    .itemOutputs(`gtceu:${tier}_energy_${hatchType}_hatch`)
                    .duration(300)
                    .EUt(eu);
            } else if (tier === 'hv') {
                event.recipes.gtceu
                    .assembler(id(`${tier}_energy_${hatchType}_hatch`))
                    .itemInputs(
                        `gtceu:${tier}_machine_hull`,
                        `2x #gtceu:circuits/${tier}`,
                        `4x gtceu:${cable}_${springCable}`,
                        `4x ${chip}`,
                        `1x gtceu:${tier}_voltage_coil`
                    )
                    .inputFluids(`gtceu:sodium_potassium 5000`)
                    .itemOutputs(`gtceu:${tier}_energy_${hatchType}_hatch`)
                    .duration(300)
                    .EUt(eu)
                    .cleanroom(CleanroomType.CLEANROOM);
            } else if (tier === 'ev') {
                event.recipes.gtceu
                    .assembler(id(`${tier}_energy_${hatchType}_hatch`))
                    .itemInputs(
                        `gtceu:${tier}_machine_hull`,
                        `2x #gtceu:circuits/${tier}`,
                        `4x gtceu:${cable}_${springCable}`,
                        `4x ${chip}`,
                        `1x gtceu:${tier}_voltage_coil`
                    )
                    .inputFluids(`gtceu:sodium_potassium 10000`)
                    .itemOutputs(`gtceu:${tier}_energy_${hatchType}_hatch`)
                    .duration(300)
                    .EUt(eu)
                    .cleanroom(CleanroomType.CLEANROOM);
                event.recipes.gtceu
                    .assembler(id(`${tier}_energy_${hatchType}_hatch_4a`))
                    .itemInputs(
                        `gtceu:${tier}_energy_${hatchType}_hatch`,
                        `gtceu:${tier}_transformer_1a`,
                        `2x #gtceu:circuits/ev`,
                        `6x gtceu:${cable}_${springCable}`,
                        `6x ${chip}`,
                        `2x gtceu:${tier}_voltage_coil`
                    )
                    .inputFluids(`gtceu:sodium_potassium 2000`)
                    .itemOutputs(`gtceu:${tier}_energy_${hatchType}_hatch_4a`)
                    .duration(400)
                    .EUt(eu)
                    .cleanroom(CleanroomType.CLEANROOM);
                event.recipes.gtceu
                    .assembler(id(`${tier}_energy_${hatchType}_hatch_16a`))
                    .itemInputs(
                        `gtceu:${tier}_energy_${hatchType}_hatch_4a`,
                        `gtceu:${tier}_transformer_4a`,
                        `2x #gtceu:circuits/iv`,
                        `12x gtceu:${cable}_${springCable}`,
                        `12x ${chip}`,
                        `4x gtceu:${tier}_voltage_coil`
                    )
                    .inputFluids(`gtceu:sodium_potassium 4000`)
                    .itemOutputs(`gtceu:${tier}_energy_${hatchType}_hatch_16a`)
                    .duration(800)
                    .EUt(eu)
                    .cleanroom(CleanroomType.CLEANROOM);
            }
            // IV+ Energy Hatches to be in MAL same with 4a and 16a vars
        });

        {
            let supQuant = tier === 'lv' || tier === 'mv' || tier === 'hv' || tier === 'ev' ? 'super' : 'quantum';
            let plating = supQuant === 'super' ? 'double' : 'dense';
            allTierMachine(
                `${supQuant}_tank`,
                [
                    hull,
                    `gtceu:${tier}_hermetic_casing`,
                    emitter,
                    '4x ' + circuit,
                    `5x gtceu:${plating}_${material}_plate`,
                    glass,
                ],
                [solder + ' 144', rubberF + ' 72']
            );
            allTierMachine(
                `${supQuant}_chest`,
                [hull, chest, sensor, '4x ' + circuit, `5x gtceu:${plating}_${material}_plate`, glass],
                [solder + ' 144', rubberF + ' 72']
            );
        }
    };
    tierMaterials(
        'lv',
        'copper',
        'tin',
        'copper',
        null,
        'rubber',
        'minecraft:diamond',
        'gold',
        'steel',
        'steel',
        '#forge:glass',
        'gtceu:cobalt_brass_buzz_saw_blade',
        'bronze',
        'tin',
        'wood_crate',
        'wood_drum',
        30,
        'lubricant',
        'soldering_alloy',
        'damascus_steel'
    );
    tierMaterials(
        'mv',
        'cupronickel',
        'copper',
        'gold',
        'gtceu:ulpic_chip',
        'rubber',
        'minecraft:diamond',
        'electrum',
        'aluminium',
        'steel',
        'gtceu:tempered_glass',
        'gtceu:vanadium_steel_buzz_saw_blade',
        'steel',
        'steel',
        'bronze_crate',
        'bronze_drum',
        120,
        'lubricant',
        'soldering_alloy',
        'magnalium'
    );
    tierMaterials(
        'hv',
        'kanthal',
        'gold',
        'aluminium',
        'gtceu:lpic_chip',
        'silicone_rubber',
        'gtceu:diamond_grinding_head',
        'blue_alloy',
        'stainless_steel',
        'neodymium',
        'gtceu:tempered_glass',
        'gtceu:red_steel_buzz_saw_blade',
        'stainless_steel',
        'black_steel',
        'steel_crate',
        'steel_drum',
        480,
        'lubricant',
        'soldering_alloy',
        'black_steel'
    );
    tierMaterials(
        'ev',
        'nichrome',
        'aluminium',
        'platinum',
        'gtceu:mpic_chip',
        'silicone_rubber',
        'gtceu:diamond_grinding_head',
        'platinum',
        'titanium',
        'neodymium',
        'gtceu:tempered_glass',
        'gtceu:red_steel_buzz_saw_blade',
        'titanium',
        'hsla_steel',
        'aluminium_crate',
        'aluminium_drum',
        1920,
        'lubricant',
        'soldering_alloy',
        'ultimet'
    );

    // ME IO
    ['hatch', 'bus'].forEach((meHatchType) => {
        const hatchParts = meHatchType === 'bus' ? 'conveyor_module' : 'electric_pump';
        ['input', 'output'].forEach((IOtype) => {
            let hatchCircuit = IOtype === 'input' ? 1 : 2;
            event.recipes.gtceu
                .assembler(id(`me_${IOtype}_${meHatchType}`))
                .itemInputs(
                    `gtceu:ev_${IOtype}_${meHatchType}`,
                    `expatternprovider:oversize_interface`,
                    '2x #gtceu:circuits/ev',
                    `2x gtceu:ev_${hatchParts}`,
                    '4x #ae2:glass_cable'
                )
                .inputFluids('gtceu:polytetrafluoroethylene 432')
                .itemOutputs(`gtceu:me_${IOtype}_${meHatchType}`)
                .circuit(hatchCircuit)
                .duration(500)
                .EUt(1920);
        });
    });

    const converter = (tier, superconductor, tierScaler, polymer) => {
        const polymerScaler = polymer === 'glue' ? 144 : 72;
        event.recipes.gtceu
            .simple_machine_facility(id(`${tier}_1a_energy_converter`))
            .itemInputs(
                `gtceu:${tier}_machine_hull`,
                `4x gtceu:${superconductor}_single_wire`,
                `2x #gtceu:circuits/${tier}`,
                `2x gtceu:fine_${superconductor}_wire`
            )
            .inputFluids(`gtceu:${polymer} ${1 * polymerScaler}`)
            .itemOutputs(`gtceu:${tier}_1a_energy_converter`)
            .duration(200)
            .EUt(3.75 * 4 ** tierScaler);
        event.recipes.gtceu
            .simple_machine_facility(id(`${tier}_4a_energy_converter`))
            .itemInputs(
                `gtceu:${tier}_machine_hull`,
                `4x gtceu:${superconductor}_quadruple_wire`,
                `2x #gtceu:circuits/${tier}`,
                `8x gtceu:fine_${superconductor}_wire`
            )
            .inputFluids(`gtceu:${polymer} ${4 * polymerScaler}`)
            .itemOutputs(`gtceu:${tier}_4a_energy_converter`)
            .duration(200)
            .EUt(3.75 * 4 ** tierScaler);
        event.recipes.gtceu
            .simple_machine_facility(id(`${tier}_8a_energy_converter`))
            .itemInputs(
                `gtceu:${tier}_machine_hull`,
                `4x gtceu:${superconductor}_octal_wire`,
                `2x #gtceu:circuits/${tier}`,
                `16x gtceu:fine_${superconductor}_wire`
            )
            .inputFluids(`gtceu:${polymer} ${8 * polymerScaler}`)
            .itemOutputs(`gtceu:${tier}_8a_energy_converter`)
            .duration(200)
            .EUt(3.75 * 4 ** tierScaler);
        event.recipes.gtceu
            .simple_machine_facility(id(`${tier}_16a_energy_converter`))
            .itemInputs(
                `gtceu:${tier}_machine_hull`,
                `4x gtceu:${superconductor}_hex_wire`,
                `2x #gtceu:circuits/${tier}`,
                `32x gtceu:fine_${superconductor}_wire`
            )
            .inputFluids(`gtceu:${polymer} ${16 * polymerScaler}`)
            .itemOutputs(`gtceu:${tier}_16a_energy_converter`)
            .duration(200)
            .EUt(3.75 * 4 ** tierScaler);
    };
    converter('lv', 'soul_infused', 1, 'glue');
    converter('mv', 'signalum', 2, 'polyethylene');
    converter('hv', 'lumium', 3, 'polyethylene');
    converter('ev', 'enderium', 4, 'polytetrafluoroethylene');
    // converter('iv', 'shellite', 5, 'polytetrafluoroethylene');
    // converter('luv', 'twinite', 6, 'polybenzamidazole');
    // converter('zpm', 'dragonsteel', 7, 'polybenzamidazole');
    // converter('uv', 'prismalium', 8, 'polyether_ether_ketone');
    // converter('uhv', 'stellarium', 9, 'polyether_ether_ketone');
    // converter('uev', 'ancient_runicalium', 10, 'poly_34_ethylenedioxythiophene_polystyrene_sulfate');
    // Will add 64a converters in Theta

    // Base Machines (assemblyLine,mk1,mk2,mk3,transformer,substation,fluidDrills,largeMiners,bedrockMiners all Theta+)
    [
        'electric_blast_furnace',
        'large_chemical_reactor',
        'implosion_compressor',
        'pyrolyse_oven',
        'multi_smelter',
        'cracker',
        'distillation_tower',
        'vacuum_freezer',
        'assembly_line',
        'luv_fusion_reactor',
        'zpm_fusion_reactor',
        'uv_fusion_reactor',
        'mv_fluid_drilling_rig',
        'hv_fluid_drilling_rig',
        'ev_fluid_drilling_rig',
        'ev_large_miner',
        'iv_large_miner',
        'luv_large_miner',
        'cleanroom',
        'filter_casing',
        'sterilizing_filter_casing',
        'large_combustion_engine',
        'extreme_combustion_engine',
        'steam_large_turbine',
        'gas_large_turbine',
        'plasma_large_turbine',
        'active_transformer',
        'power_substation',
        'mv_bedrock_ore_miner',
        'hv_bedrock_ore_miner',
        'ev_bedrock_ore_miner',
    ].forEach((gtMachine) => {
        event.remove({ output: `gtceu:${gtMachine}` });
    });

    // GCYM (all in Theta+) (large circuit never)
    [
        'large_maceration_tower',
        'large_chemical_bath',
        'large_centrifuge',
        'large_mixer',
        'large_electrolyzer',
        'large_electromagnet',
        'large_packer',
        'large_assembler',
        'large_circuit_assembler',
        'large_arc_smelter',
        'large_engraving_laser',
        'large_sifting_funnel',
        'alloy_blast_smelter',
        'large_autoclave',
        'large_material_press',
        'large_brewer',
        'large_cutter',
        'large_distillery',
        'large_extractor',
        'large_extruder',
        'large_solidifer',
        'large_wiremill',
        'mega_blast_furnace',
        'mega_vacuum_freezer',
    ].forEach((gcymMachine) => {
        event.remove({ output: `gtceu:${gcymMachine}` });
    });

    // Research Machines (data access needs recipe in Eta rest in Theta+)
    [
        'research_station',
        'object_holder',
        'data_bank',
        'network_switch',
        'high_performance_computation_array',
        'computation_transmitter_hatch',
        'computation_receiver_hatch',
        'data_transmitter_hatch',
        'data_receiver_hatch',
        'data_access_hatch',
        'advanced_data_access_hatch',
        'hpca_empty_component',
        'hpca_computation_component',
        'hpca_advanced_computation_component',
        'hpca_heat_sink_component',
        'hpca_active_cooler_component',
        'hpca_bridge_component',
    ].forEach((GTresearchMachine) => {
        event.remove({ output: `gtceu:${GTresearchMachine}` });
    });

    // Gate (Not Eta)
    // large_quantum_compressor, dimensional_finder, runic_circuitry_assembling_station, gate_assembly, runic_inscriber_manipulate, large_rotor_machine, stargate_component_assembly

    // Adv Non-Gate (Not Eta)
    // folding_akreyrium_stabiliser, uhv_auxiliary_boosted_fusion_reactor, auxiliary_boosted_fusion_casing_mk1, auxiliary_fusion_coil_mk1, bacterial_breeding_vat, bacterial_runic_mutator,
    // bacterial_hydrocarbon_harvester, chemical_plant, mega_abs, super_compact_heat_chamber, component_part_assembly, heat_chamber, super_pressure_heat_chamber,
    // cryostate_quantum_chiller, exotic_gas_siphon, cyclonic_sifter, draco_circuit_assembler, draco_infusion, super_compact_heat_chamber, injection_mixer, manifold_centrifuge, bulk_ore_processing_array,
    // hellforge, molten_destabiliser, vibration_laser_engraver, hpca_nanofluidic_heat_sink_component, sterile_cleaning_maintenance_hatch, redstone_variadic_interface, wireless

    const machineAssembly = (type, inputs, fluids, EUt, Duration) => {
        event.recipes.gtceu
            .advanced_machine_facility(id(type))
            .itemInputs(inputs)
            .inputFluids(fluids)
            .itemOutputs(`gtceu:${type}`)
            .duration(Duration)
            .EUt(EUt);
    };

    const machineAssemblyScanner = (type, inputs, fluids, eut, duration, scanned, scannerEUt, scannerDuration) => {
        let scannerID = `${scanned.replace(':', '_')}`;
        event.recipes.gtceu
            .advanced_machine_facility(id(type))
            .itemInputs(inputs)
            .inputFluids(fluids)
            .itemOutputs(`gtceu:${type}`)
            .duration(duration)
            .EUt(eut)
            .scannerResearch(scanned);
        event.recipes.gtceu
            .scanner(id(`1_x_${scannerID}`))
            .itemInputs('gtceu:data_stick')
            .itemInputs(scanned)
            .itemOutputs(
                Item.of(
                    `gtceu:data_stick`,
                    `{assembly_line_research:{research_id:"${'1x_' + scannerID}",research_type:"gtceu:advanced_machine_facility"}}`
                )
            )
            .duration(scannerDuration)
            .EUt(scannerEUt);
    };

    machineAssembly(
        'electric_blast_furnace',
        [
            'gtceu:invar_frame',
            '3x gtceu:reinforced_blast_furnace',
            '2x gtceu:lv_emitter',
            '6x #gtceu:circuits/mv',
            '2x gtceu:lv_fluid_regulator',
            '18x gtceu:invar_plate',
            '4x gtceu:lv_electric_motor',
            '6x gtceu:tin_quadruple_cable',
        ],
        ['gtceu:soldering_alloy 1152'],
        120,
        1500
    );
    machineAssemblyScanner(
        'large_chemical_reactor',
        [
            'gtceu:polytetrafluoroethylene_frame',
            '4x gtceu:hv_electric_pump',
            '2x gtceu:polytetrafluoroethylene_nonuple_fluid_pipe',
            '2x gtceu:black_steel_rotor',
            '6x gtceu:dense_steel_plate',
            '6x #gtceu:circuits/ev',
            '2x gtceu:small_platinum_spring',
            '12x gtceu:gold_single_cable',
        ],
        ['gtceu:polytetrafluoroethylene 1152', 'gtceu:silicone_rubber 720'],
        480,
        3600,
        'gtceu:hv_chemical_reactor',
        480,
        2400
    );
    machineAssemblyScanner(
        'implosion_compressor',
        [
            'gtceu:steel_frame',
            '6x gtceu:dense_obsidian_plate',
            '2x gtceu:hv_electric_piston',
            '4x #gtceu:circuits/hv',
            '2x gtceu:black_steel_gear',
            '6x gtceu:steel_foil',
            '3x gtceu:small_black_steel_gear',
            '8x gtceu:gold_double_cable',
        ],
        ['gtceu:soldering_alloy 1008', 'gtceu:polyethylene 432'],
        480,
        1200,
        'gtceu:industrial_tnt',
        120,
        1200
    );
    machineAssembly(
        'pyrolyse_oven',
        [
            'gtceu:wrought_iron_frame',
            'gtceu:aluminium_nonuple_fluid_pipe',
            '6x gtceu:double_wrought_iron_plate',
            '2x gtceu:cupronickel_coil_block',
            '4x gtceu:mv_electric_piston',
            '4x #gtceu:circuits/mv',
            '2x gtceu:mv_electric_pump',
            '4x gtceu:annealed_copper_double_cable',
        ],
        ['gtceu:soldering_alloy 864', 'gtceu:polyethylene 720'],
        120,
        1800
    );
    machineAssembly(
        'multi_smelter',
        [
            'gtceu:stainless_steel_frame',
            'gtceu:hv_electric_furnace',
            'gtceu:hv_alloy_smelter',
            '18x gtceu:double_invar_plate',
            '8x gtceu:kanthal_coil_block',
            '2x gtceu:hv_robot_arm',
            '4x #gtceu:circuits/hv',
            '4x gtceu:gold_double_cable',
        ],
        ['gtceu:soldering_alloy 2304', 'gtceu:polytetrafluoroethylene 432'],
        480,
        800
    );
    machineAssemblyScanner(
        'cracker',
        [
            'gtceu:stainless_steel_frame',
            '16x gtceu:cupronickel_coil_block',
            '6x gtceu:hv_electric_pump',
            'gtceu:black_steel_rotor',
            '2x gtceu:hv_electric_piston',
            '4x #gtceu:circuits/hv',
            '6x gtceu:stainless_steel_foil',
            '2x gtceu:gold_octal_cable',
        ],
        ['gtceu:polyethylene 864', 'gtceu:steam 5000', 'gtceu:hydrogen 5000'],
        480,
        1500,
        'gtceu:cupronickel_coil_block',
        120,
        1800
    );
    machineAssemblyScanner(
        'distillation_tower',
        [
            'gtceu:stainless_steel_frame',
            '2x gtceu:stainless_steel_huge_fluid_pipe',
            '4x #gtceu:circuits/ev',
            '8x gtceu:kanthal_spring',
            '6x gtceu:hv_electric_pump',
            '16x gtceu:tempered_glass',
            '4x gtceu:small_black_steel_gear',
            '4x gtceu:gold_quadruple_cable',
        ],
        ['gtceu:soldering_alloy 2592', 'gtceu:silicone_rubber 1584', 'gtceu:polytetrafluoroethylene 720'],
        1920,
        900,
        'gtceu:hv_distillery',
        240,
        1800
    );
    machineAssemblyScanner(
        'vacuum_freezer',
        [
            'gtceu:blue_steel_frame',
            '6x gtceu:hv_electric_pump',
            '4x #gtceu:circuits/ev',
            '6x gtceu:aluminium_single_cable',
            '8x gtceu:double_aluminium_plate',
            '2x gtceu:hv_conveyor_module',
            '2x gtceu:stainless_steel_gear',
            '4x gtceu:blue_steel_screw',
        ],
        ['gtceu:soldering_alloy 1152', 'gtceu:polyethylene 576', 'gtceu:silicone_rubber 432'],
        1920,
        600,
        'gtceu:hv_chemical_bath',
        120,
        2400
    );
    // 'assembly_line',
    // 'luv_fusion_reactor',
    // 'zpm_fusion_reactor',
    // 'uv_fusion_reactor',
    // 'mv_fluid_drilling_rig',
    // 'hv_fluid_drilling_rig',
    // 'ev_fluid_drilling_rig',
    // 'ev_large_miner',
    // 'iv_large_miner',
    // 'luv_large_miner',
    machineAssembly(
        'cleanroom',
        [
            '4x gtceu:filter_casing',
            '6x gtceu:steel_plate',
            '6x #gtceu:circuits/hv',
            '12x gtceu:item_filter',
            '4x gtceu:hv_electric_motor',
            '2x gtceu:black_steel_rotor',
            'gtceu:long_stainless_steel_rod',
            '6x gtceu:gold_double_cable',
        ],
        ['gtceu:soldering_alloy 1152', 'gtceu:construction_foam 25000'],
        480,
        2400
    );
    machineAssemblyScanner(
        'large_combustion_engine',
        [
            'gtceu:titanium_frame',
            '2x gtceu:ev_electric_piston',
            '6x gtceu:double_stainless_steel_plate',
            '4x #gtceu:circuits/ev',
            '4x gtceu:hsla_steel_rotor',
            '6x gtceu:ev_electric_motor',
            '4x gtceu:small_titanium_gear',
            '12x gtceu:aluminium_single_cable',
        ],
        ['gtceu:soldering_alloy 1152', 'gtceu:silicone_rubber 432'],
        1920,
        1500,
        'gtceu:hv_combustion',
        480,
        1200
    );
    // 'extreme_qcombustion_engine',
    machineAssemblyScanner(
        'steam_large_turbine',
        [
            'gtceu:stainless_steel_frame',
            '2x gtceu:hv_electric_pump',
            '6x gtceu:double_magnalium_plate',
            '4x #gtceu:circuits/hv',
            '4x gtceu:black_steel_rotor',
            '6x gtceu:hv_electric_motor',
            '4x gtceu:small_damascus_steel_gear',
            '12x gtceu:gold_single_cable',
        ],
        ['gtceu:soldering_alloy 1152', 'gtceu:silicone_rubber 432'],
        480,
        960,
        'gtceu:hv_steam_turbine',
        120,
        1200
    );
    machineAssemblyScanner(
        'gas_large_turbine',
        [
            'gtceu:titanium_frame',
            '2x gtceu:ev_electric_pump',
            '6x gtceu:double_stainless_steel_plate',
            '4x #gtceu:circuits/ev',
            '4x gtceu:hsla_steel_rotor',
            '6x gtceu:ev_electric_motor',
            '4x gtceu:small_titanium_gear',
            '12x gtceu:aluminium_single_cable',
        ],
        ['gtceu:soldering_alloy 1152', 'gtceu:silicone_rubber 432'],
        1920,
        1800,
        'gtceu:hv_gas_turbine',
        480,
        1200
    );
    // 'plasma_large_turbine',
    // 'active_transformer',
    // 'power_substation',
    // 'mv_bedrock_ore_miner',
    // 'hv_bedrock_ore_miner',
    // 'ev_bedrock_ore_miner'

    machineAssembly(
        'void_extractor',
        [
            'gtceu:lv_gas_collector',
            '4x gtceu:damascus_steel_gear',
            '4x gtceu:lv_electric_pump',
            '3x gtceu:lv_robot_arm',
            '6x #gtceu:circuits/lv',
            '2x gtceu:lv_emitter',
            '2x gtceu:lv_sensor',
            '6x gtceu:tin_single_cable',
        ],
        ['gtceu:soldering_alloy 864', 'gtceu:rubber 288'],
        120,
        900
    );
    machineAssembly(
        'greenhouse',
        [
            'gtceu:large_farm',
            '4x gtceu:mv_conveyor_module',
            '4x #gtceu:circuits/mv',
            '8x gtceu:fertilizer',
            '2x gtceu:dense_steel_plate',
            '4x gtceu:mv_electric_motor',
            '2x gtceu:cobalt_brass_buzz_saw_blade',
            '6x gtceu:copper_single_cable',
        ],
        ['gtceu:soldering_alloy 2160', 'gtceu:polyethylene 432'],
        120,
        1200
    );
    machineAssemblyScanner(
        'industrial_barrel',
        [
            'gtceu:stainless_steel_frame',
            'gtceu:large_stone_barrel',
            'gtceu:large_barrel',
            '12x gtceu:kanthal_spring',
            '4x gtceu:hv_conveyor_module',
            '8x gtceu:hv_electric_pump',
            '4x #gtceu:circuits/hv',
            '8x gtceu:gold_single_cable',
        ],
        ['gtceu:soldering_alloy 1152', 'gtceu:polytetrafluoroethylene 432', 'gtceu:silicone_rubber 288'],
        480,
        3600,
        'gtceu:laminated_glass',
        480,
        1200
    );
    machineAssembly(
        'mechanical_sieve',
        [
            'gtceu:lv_machine_hull',
            '6x #gtceu:circuits/lv',
            '2x exnihilosequentia:iron_mesh',
            '6x gtceu:lv_electric_motor',
            '4x gtceu:lv_electric_piston',
            '4x gtceu:damascus_steel_gear',
            '2x gtceu:small_steel_gear',
            '4x gtceu:tin_single_cable',
        ],
        ['gtceu:soldering_alloy 432', 'gtceu:lubricant 2500'],
        120,
        1440
    );
    machineAssembly(
        'electric_sifter',
        [
            'gtceu:high_pressure_steam_sifter',
            '6x #gtceu:circuits/lv',
            '2x exnihilosequentia:iron_mesh',
            '6x gtceu:lv_electric_motor',
            '4x gtceu:lv_electric_piston',
            '4x gtceu:damascus_steel_gear',
            '2x gtceu:small_steel_gear',
            '4x gtceu:tin_single_cable',
        ],
        ['gtceu:soldering_alloy 432', 'gtceu:lubricant 2500'],
        120,
        1440
    );
    machineAssembly(
        'rock_filtrator',
        [
            'gtceu:lv_rock_crusher',
            '6x gtceu:lv_electric_piston',
            '6x gtceu:glass_vial',
            'gtceu:lv_electric_pump',
            '4x #gtceu:circuits/lv',
            '2x gtceu:lv_electric_motor',
            '4x gtceu:small_damascus_steel_gear',
            '6x gtceu:tin_single_cable',
        ],
        ['gtceu:soldering_alloy 864', 'gtceu:lubricant 2500', 'gtceu:rubber 288'],
        120,
        900
    );
    // 'electric_ore_factory',
    // 'ore_processing_plant',
    // MachineAssemblyScanner('nuclear_reactor',['gtceu:ev_assembler'],['gtceu:soldering_alloy 864', 'gtceu:polyethylene 576', 'gtceu:rubber 432'],1920,1200,'gtceu:ev_fluid_heater',2400,480);
    // dimensional_destabiliser,
    // rock_sifter,
    // large_sieve,
    // void_excavator,
    // cobbleworks,

    // 'alloy_blast_smelter',

    event.recipes.gtceu
        .assembler(id('multiblock_upgrade_kit'))
        .itemInputs(
            '1x thermal:enderium_glass',
            '2x #gtceu:circuits/ev',
            '1x gtceu:rtm_alloy_single_cable',
            'gtceu:double_blue_steel_plate',
            'gtceu:double_red_steel_plate'
        )
        .inputFluids('gtceu:soldering_alloy 720')
        .itemOutputs('kubejs:multiblock_upgrade_kit')
        .duration(360)
        .EUt(GTValues.VHA[GTValues.EV]);

    const kubes = (type, inputsTLarge, fluidsTLarge) => {
        machineAssemblyScanner(
            `t_large_${type}`,
            inputsTLarge,
            fluidsTLarge,
            GTValues.VA[GTValues.EV],
            600,
            `gtceu:ev_${type}`,
            1800,
            480
        );
    };
    kubes(
        'autoclave',
        [
            'gtceu:titanium_frame',
            '6x gtceu:titanium_plate',
            '2x gtceu:tempered_glass',
            '3x #gtceu:circuits/ev',
            '1x gtceu:ev_electric_pump',
            '3x gtceu:aluminium_single_cable',
            '6x gtceu:silicone_rubber_plate',
            'kubejs:multiblock_upgrade_kit',
        ],
        ['gtceu:soldering_alloy 720', 'gtceu:silicone_rubber 576', 'gtceu:polytetrafluoroethylene 432']
    );
    kubes(
        'bender',
        [
            'gtceu:titanium_frame',
            '3x gtceu:ev_electric_piston',
            '1x gtceu:titanium_plate',
            '3x #gtceu:circuits/ev',
            '3x gtceu:ev_electric_motor',
            '6x gtceu:aluminium_single_cable',
            '6x gtceu:birmabright_plate',
            'kubejs:multiblock_upgrade_kit',
        ],
        ['gtceu:soldering_alloy 720', 'gtceu:lubricant 1000', 'gtceu:polytetrafluoroethylene 432']
    );
    kubes(
        'centrifuge',
        [
            'gtceu:titanium_frame',
            '6x #gtceu:circuits/ev',
            '3x gtceu:ev_electric_motor',
            '6x gtceu:aluminium_single_cable',
            '6x gtceu:tumbaga_plate',
            'kubejs:multiblock_upgrade_kit',
        ],
        ['gtceu:soldering_alloy 720', 'gtceu:silicone_rubber 576', 'gtceu:polytetrafluoroethylene 432']
    );
    kubes(
        'electrolyzer',
        [
            'gtceu:titanium_frame',
            '1x gtceu:ev_electric_motor',
            '6x gtceu:aluminium_single_cable',
            '2x gtceu:tempered_glass',
            '3x #gtceu:circuits/ev',
            '6x gtceu:duralumin_plate',
            'kubejs:multiblock_upgrade_kit',
        ],
        ['gtceu:soldering_alloy 1440', 'gtceu:polytetrafluoroethylene 432']
    );
    kubes(
        'extruder',
        [
            'gtceu:titanium_frame',
            '6x gtceu:aluminium_quadruple_cable',
            '1x gtceu:ev_electric_piston',
            '3x #gtceu:circuits/ev',
            '1x gtceu:titanium_normal_fluid_pipe',
            '3x gtceu:aluminium_single_cable',
            '6x gtceu:beryllium_aluminium_alloy_plate',
            'kubejs:multiblock_upgrade_kit',
        ],
        ['gtceu:soldering_alloy 1440', 'gtceu:polytetrafluoroethylene 432']
    );
    kubes(
        'forming_press',
        [
            'gtceu:titanium_frame',
            '3x gtceu:ev_electric_piston',
            '3x #gtceu:circuits/ev',
            '6x gtceu:aluminium_single_cable',
            '6x gtceu:elgiloy_plate',
            'kubejs:multiblock_upgrade_kit',
        ],
        ['gtceu:soldering_alloy 1440', 'gtceu:polytetrafluoroethylene 432']
    );
    kubes(
        'lathe',
        [
            'gtceu:titanium_frame',
            '3x #gtceu:circuits/ev',
            '1x gtceu:ev_electric_motor',
            '1x gtceu:diamond_grinding_head',
            '1x gtceu:ev_electric_piston',
            '6x gtceu:aluminium_single_cable',
            '6x gtceu:beryllium_bronze_plate',
            'kubejs:multiblock_upgrade_kit',
        ],
        ['gtceu:soldering_alloy 720', 'gtceu:lubricant 1000', 'gtceu:polytetrafluoroethylene 432']
    );
    kubes(
        'macerator',
        [
            'gtceu:titanium_frame',
            '1x gtceu:ev_electric_piston',
            '1x gtceu:ev_electric_motor',
            '1x gtceu:diamond_grinding_head',
            '2x gtceu:titanium_gear',
            '3x #gtceu:circuits/ev',
            '6x gtceu:aluminium_single_cable',
            '6x gtceu:blue_steel_plate',
            'kubejs:multiblock_upgrade_kit',
        ],
        ['gtceu:soldering_alloy 1440', 'gtceu:polytetrafluoroethylene 432']
    );
    kubes(
        'mixer',
        [
            'gtceu:titanium_frame',
            '6x gtceu:tempered_glass',
            '1x gtceu:hsla_steel_rotor',
            '1x gtceu:ev_electric_motor',
            '3x #gtceu:circuits/ev',
            '3x gtceu:aluminium_single_cable',
            '6x gtceu:kovar_plate',
            'kubejs:multiblock_upgrade_kit',
        ],
        ['gtceu:soldering_alloy 720', 'gtceu:silicone_rubber 576', 'gtceu:polytetrafluoroethylene 432']
    );
    kubes(
        'ore_washer',
        [
            'gtceu:titanium_frame',
            '3x gtceu:hsla_steel_rotor',
            '2x gtceu:tempered_glass',
            '3x #gtceu:circuits/ev',
            '1x gtceu:ev_electric_motor',
            '6x gtceu:aluminium_single_cable',
            '6x gtceu:hydronalium_plate',
            'kubejs:multiblock_upgrade_kit',
        ],
        ['gtceu:soldering_alloy 720', 'gtceu:silicone_rubber 576', 'gtceu:polytetrafluoroethylene 432']
    );
    kubes(
        'sifter',
        [
            'gtceu:titanium_frame',
            '3x gtceu:ev_electric_piston',
            '2x gtceu:item_filter',
            '3x #gtceu:circuits/ev',
            '6x gtceu:aluminium_single_cable',
            '6x gtceu:zamak_plate',
            'kubejs:multiblock_upgrade_kit',
        ],
        ['gtceu:soldering_alloy 1440', 'gtceu:polytetrafluoroethylene 432']
    );
    kubes(
        'thermal_centrifuge',
        [
            'gtceu:titanium_frame',
            '3x gtceu:ev_electric_motor',
            '3x #gtceu:circuits/ev',
            '3x gtceu:aluminium_quadruple_cable',
            '6x gtceu:aluminium_single_cable',
            '6x gtceu:silicon_bronze_plate',
            'kubejs:multiblock_upgrade_kit',
        ],
        ['gtceu:soldering_alloy 1440', 'gtceu:polytetrafluoroethylene 432']
    );
    kubes(
        'wiremill',
        [
            'gtceu:titanium_frame',
            '6x gtceu:ev_electric_motor',
            '3x #gtceu:circuits/ev',
            '6x gtceu:aluminium_single_cable',
            '6x gtceu:sterling_silver_plate',
            'kubejs:multiblock_upgrade_kit',
        ],
        ['gtceu:soldering_alloy 720', 'gtceu:lubricant 1000', 'gtceu:polytetrafluoroethylene 432']
    );
    machineAssemblyScanner(
        'large_rock_crusher',
        [
            'gtceu:titanium_frame',
            '1x gtceu:ev_electric_piston',
            '1x gtceu:ev_electric_motor',
            '1x gtceu:diamond_grinding_head',
            '5x gtceu:tempered_glass',
            '6x gtceu:aluminium_single_cable',
            '6x gtceu:red_steel_plate',
            'kubejs:multiblock_upgrade_kit',
        ],
        ['gtceu:soldering_alloy 1440', 'gtceu:polytetrafluoroethylene 432'],
        GTValues.VA[GTValues.EV],
        600,
        `gtceu:ev_rock_crusher`,
        1800,
        480
    );

    // Coil Changes

    event.remove({ output: /gtceu:.*coil_block/ });

    event.recipes.gtceu
        .assembler(id('cupronickel_coil_block'))
        .itemInputs(
            'gtceu:cast_iron_frame',
            '8x gtceu:cupronickel_double_wire',
            '8x gtceu:bronze_foil',
            '32x minecraft:paper'
        )
        .inputFluids('gtceu:tin_alloy 144')
        .itemOutputs('gtceu:cupronickel_coil_block')
        .duration(200)
        .EUt(30);

    event.recipes.gtceu
        .assembler(id('kanthal_coil_block'))
        .itemInputs(
            'gtceu:steel_frame',
            '8x gtceu:kanthal_double_wire',
            '8x gtceu:aluminium_foil',
            '16x gtceu:borosilicate_glass_foil'
        )
        .inputFluids('gtceu:copper 144')
        .itemOutputs('gtceu:kanthal_coil_block')
        .duration(300)
        .EUt(120);

    event.recipes.gtceu
        .assembler(id('nichrome_coil_block'))
        .itemInputs(
            'gtceu:red_steel_frame',
            '8x gtceu:nichrome_double_wire',
            '8x gtceu:stainless_steel_foil',
            '32x gtceu:borosilicate_glass_foil'
        )
        .inputFluids('gtceu:aluminium 144')
        .itemOutputs('gtceu:nichrome_coil_block')
        .duration(400)
        .EUt(480);
});
