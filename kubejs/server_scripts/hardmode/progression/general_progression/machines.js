ServerEvents.recipes((event) => {
    const id = global.id;

    const Tiers = ['lv', 'mv', 'hv', 'ev', 'iv', 'luv', 'zpm', 'uv'];

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

    const MachineTypes = [
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

    Tiers.forEach((tier) => {
        MachineTypes.forEach((machine) => {
            event.remove({ output: `gtceu:${tier}_${machine}` });
            if (machine == 'energy_input_hatch') {
                if (tier !== 'lv' || 'mv' || 'hv') {
                    event.remove({ output: `gtceu:${tier}_${machine}_4a` });
                    event.remove({ output: `gtceu:${tier}_${machine}_16a` });
                }
                if (tier == 'uv' || 'zpm') {
                    let priorTier = tier == 'uv' ? 'zpm' : 'luv';
                    event.remove({ id: `gtceu:research_station/1_x_gtceu_${priorTier}_${machine}` });
                }
            }
            if (machine == 'energy_output_hatch') {
                if (tier !== 'lv' || 'mv' || 'hv') {
                    event.remove({ output: `gtceu:${tier}_${machine}_4a` });
                    event.remove({ output: `gtceu:${tier}_${machine}_16a` });
                }
                if (tier == 'uv' || 'zpm') {
                    let priorTier = tier == 'uv' ? 'zpm' : 'luv';
                    event.remove({ id: `gtceu:research_station/1_x_gtceu_${priorTier}_${machine}` });
                }
            }
        });
        if (tier !== 'lv' || 'mv' || 'hv') {
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
        if (tier == 'lv' || 'mv' || 'hv' || 'ev') {
            event.remove({ output: `gtceu:${tier}_super_chest` });
            event.remove({ output: `gtceu:${tier}_super_tank` });
        }
        if (tier !== 'lv' || 'mv' || 'hv' || 'ev') {
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

    const TierMaterials = (
        tier,
        wire,
        cable,
        cable1up,
        chip,
        rubber,
        Head,
        ewire,
        material,
        magnetic,
        Glass,
        Buzzsaw,
        pipe,
        rotor,
        storageI,
        storageF,
        eu,
        lubricant,
        solder,
        componentMaterial
    ) => {
        const Circuit = `#gtceu:circuits/${tier}`;
        const Arm = `gtceu:${tier}_robot_arm`;
        const Conveyor = `gtceu:${tier}_conveyor_module`;
        const Motor = `gtceu:${tier}_electric_motor`;
        const Pump = `gtceu:${tier}_electric_pump`;
        const Piston = `gtceu:${tier}_electric_piston`;
        const Emitter = `gtceu:${tier}_emitter`;
        const Sensor = `gtceu:${tier}_sensor`;
        const EWire1x = `gtceu:${ewire}_single_wire`;
        const Wire2x = `gtceu:${wire}_double_wire`;
        const Wire4x = `gtceu:${wire}_quadruple_wire`;
        const Hull = `gtceu:${tier}_machine_hull`;
        const Cable1x = `gtceu:${cable}_single_cable`;
        const Cable4x = `gtceu:${cable}_quadruple_cable`;
        const PWire2x = `gtceu:${cable}_double_wire`;
        const PWire4x = `gtceu:${cable}_quadruple_wire`;
        const Plate = `gtceu:${material}_plate`;
        const Rod = `gtceu:${material}_rod`;
        const Gear = `gtceu:${material}_gear`;
        const SmGear = `gtceu:small_${material}_gear`;
        const RodM = `gtceu:${magnetic}_rod`;
        const Spring = `gtceu:${wire}_spring`;
        const SmSpring = `gtceu:small_${wire}_spring`;
        const Rotor = `gtceu:${rotor}_rotor`;
        const PipeNormal = `gtceu:${pipe}_normal_fluid_pipe`;
        const Chest = `gtceu:${storageI}`;
        const Tank = `gtceu:${storageF}`;
        const RubberF = `gtceu:${rubber}`;
        const Solder = `gtceu:${solder}`;
        const Lubricant = `gtceu:${lubricant}`;

        const AllTierMachine = (type, inputs, fluids) => {
            event.recipes.gtceu
                .simple_machine_facility(id(`${tier}_${type}`))
                .itemInputs(inputs)
                .inputFluids(fluids)
                .itemOutputs(`gtceu:${tier}_${type}`)
                .duration(100)
                .EUt(eu);
        };

        AllTierMachine(
            'electric_furnace',
            [Hull, '2x ' + Circuit, '4x ' + Wire2x, '2x ' + Cable1x, 'minecraft:furnace'],
            [Solder + ' 144']
        );
        AllTierMachine(
            'alloy_smelter',
            [Hull, '2x ' + Circuit, '4x ' + Wire4x, '2x ' + Cable1x, 'minecraft:blast_furnace'],
            [Solder + ' 144']
        );
        AllTierMachine(
            'arc_furnace',
            [Hull, '2x ' + Circuit, 'gtceu:graphite_dust', '3x ' + Plate, '2x ' + Cable4x],
            [Solder + ' 144']
        );
        AllTierMachine(
            'assembler',
            [Hull, '2x ' + Arm, '2x ' + Conveyor, '2x ' + Circuit, '2x ' + Cable1x],
            [Solder + ' 72', Lubricant + ' 500']
        );
        AllTierMachine(
            'autoclave',
            [Hull, '4x ' + Plate, Glass, '2x ' + Circuit, Pump],
            [Solder + ' 72', RubberF + ' 288']
        );
        AllTierMachine(
            'bender',
            [Hull, '2x ' + Piston, Plate, '2x ' + Circuit, '2x ' + Motor, Cable1x],
            [Solder + ' 72', Lubricant + ' 500']
        );
        AllTierMachine(
            'brewery',
            [Hull, '2x ' + Glass, '2x ' + Circuit, Pump, '2x ' + SmSpring, '2x ' + Cable1x],
            [Solder + ' 72', RubberF + ' 288']
        );
        AllTierMachine(
            'canner',
            [Hull, '3x ' + Glass, '2x ' + Circuit, Pump, '2x ' + Cable1x, Tank],
            [Solder + ' 144']
        );
        AllTierMachine(
            'centrifuge',
            [Hull, '4x ' + Circuit, '2x ' + Motor, '2x ' + Cable1x, `gtceu:long_${material}_rod`],
            [Solder + ' 72', RubberF + ' 288']
        );
        AllTierMachine(
            'chemical_bath',
            [Hull, '2x ' + Glass, '2x ' + Conveyor, '2x ' + Circuit, Pump, Cable1x],
            [Solder + ' 72', RubberF + ' 288']
        );
        AllTierMachine(
            'chemical_reactor',
            [Hull, '2x ' + Glass, '2x ' + Circuit, Rotor, Motor, '2x ' + Cable1x, `gtceu:${rotor}_plate`],
            [Solder + ' 72', RubberF + ' 288']
        );
        AllTierMachine(
            'compressor',
            [Hull, '2x ' + Plate, '2x ' + Piston, '2x ' + Circuit, '2x ' + Cable4x],
            [Solder + ' 72', Lubricant + ' 500']
        );
        AllTierMachine(
            'cutter',
            [Hull, Glass, Conveyor, Buzzsaw, '2x ' + Circuit, Motor, '2x ' + Cable1x],
            [Solder + ' 72', Lubricant + ' 500']
        );
        AllTierMachine(
            'distillery',
            [Hull, '2x ' + Glass, '2x ' + Pump, '2x ' + Circuit, Spring, Cable1x],
            [Solder + ' 72', RubberF + ' 288']
        );
        AllTierMachine(
            'electrolyzer',
            [Hull, Motor, '4x ' + EWire1x, Glass, '2x ' + Circuit, '2x ' + Cable1x],
            [Solder + ' 144']
        );
        AllTierMachine(
            'electromagnetic_separator',
            [Hull, '2x ' + Wire2x, Conveyor, Circuit, '2x ' + RodM, '2x ' + Cable1x],
            [Solder + ' 144']
        );
        AllTierMachine(
            'extractor',
            [Hull, '2x ' + Glass, Piston, Pump, '2x ' + Circuit, '2x ' + Cable1x],
            [Solder + ' 72', RubberF + ' 288']
        );
        AllTierMachine('extruder', [Hull, '4x ' + Wire4x, Piston, '2x ' + Circuit, PipeNormal], [Solder + ' 144']);
        AllTierMachine(
            'fermenter',
            [Hull, '2x ' + Glass, Circuit, Pump, '4x ' + Cable1x, `gtceu:${rotor}_ring`],
            [Solder + ' 72', RubberF + ' 288']
        );
        AllTierMachine(
            'fluid_heater',
            [Hull, '2x ' + Pump, '2x ' + Wire4x, Glass, Circuit, '2x ' + Cable1x],
            [Solder + ' 72', RubberF + ' 288']
        );
        AllTierMachine(
            'fluid_solidifier',
            [Hull, '2x ' + Pump, Glass, '2x ' + Circuit, Chest, '2x ' + Cable1x],
            [Solder + ' 72', RubberF + ' 288']
        );
        AllTierMachine(
            'forge_hammer',
            [Hull, '2x ' + Piston, '2x ' + Circuit, 'minecraft:anvil', '3x ' + Cable1x],
            [Solder + ' 144']
        );
        AllTierMachine(
            'forming_press',
            [Hull, '2x ' + Piston, '2x ' + Circuit, '4x ' + Cable4x, `gtceu:${material}_ring`],
            [Solder + ' 144']
        );
        AllTierMachine(
            'lathe',
            [Hull, '2x ' + Circuit, Motor, Head, Piston, '2x ' + Cable1x],
            [Solder + ' 72', Lubricant + ' 500']
        );
        AllTierMachine('scanner', [Hull, '4x ' + Circuit, Emitter, Sensor, '2x ' + Cable1x], [Solder + ' 144']);
        AllTierMachine(
            'mixer',
            [Hull, '4x ' + Glass, Rotor, Motor, '2x ' + Circuit, `2x gtceu:${rotor}_rod`],
            [Solder + ' 72', RubberF + ' 288']
        );
        AllTierMachine(
            'ore_washer',
            [Hull, '2x ' + Rotor, Glass, '2x ' + Circuit, Motor, '2x ' + Cable1x, 'minecraft:bucket'],
            [Solder + ' 72', RubberF + ' 288']
        );
        AllTierMachine(
            'packer',
            [Hull, '2x ' + Chest, Arm, Conveyor, '2x ' + Circuit, '2x ' + Cable1x],
            [Solder + ' 144']
        );
        AllTierMachine('polarizer', [Hull, '4x ' + PWire2x, '2x ' + RodM, '2x ' + Cable1x], [Solder + ' 144']);
        AllTierMachine(
            'laser_engraver',
            [Hull, '2x ' + Piston, Emitter, 'gtceu:glass_lens', '3x ' + Circuit, '2x ' + Cable1x],
            [Solder + ' 144', 'gtceu:distilled_water 1000']
        );
        AllTierMachine(
            'sifter',
            [Hull, '2x ' + Piston, '2x ' + 'gtceu:item_filter', '2x ' + Circuit, '2x ' + Cable1x],
            [Solder + ' 144']
        );
        AllTierMachine(
            'thermal_centrifuge',
            [Hull, '2x ' + Motor, '2x ' + Circuit, '2x ' + Wire4x, '2x ' + Cable1x],
            [Solder + ' 144']
        );
        AllTierMachine(
            'wiremill',
            [Hull, '4x ' + Motor, '2x ' + Circuit, '2x ' + Cable1x, '2x ' + Rod],
            [Solder + ' 72', Lubricant + ' 500']
        );
        AllTierMachine('macerator', [Hull, Piston, Motor, Head, Gear, '2x ' + Circuit], [Solder + ' 144']);
        AllTierMachine(
            'gas_collector',
            [Hull, '4x ' + Rod, '2x ' + Pump, 'gtceu:fluid_filter', Circuit],
            [Solder + ' 72', RubberF + ' 288']
        );
        AllTierMachine('rock_crusher', [Hull, Piston, Motor, Head, '3x ' + Glass, '2x ' + Cable1x], [Solder + ' 144']);
        AllTierMachine(
            'fisher',
            [Hull, '2x ' + Piston, '3x ' + Motor, '2x ' + Circuit, Pump, '32x #forge:string'],
            [Solder + ' 72', RubberF + ' 288']
        );
        AllTierMachine('charger_4x', [Hull, '4x ' + PWire4x, Chest, Circuit, '2x ' + Cable1x], [Solder + ' 144']);
        AllTierMachine(
            'muffler_hatch',
            [Hull, Motor, Rotor, '2x ' + Cable1x, `gtceu:${rotor}_rod`, `gtceu:${rotor}_ring`],
            [Solder + ' 144']
        );
        if (tier === 'lv' || 'mv' || 'hv' || 'ev') {
            AllTierMachine(
                'item_collector',
                [Hull, '3x ' + Rotor, Chest, '2x ' + Motor, '2x ' + Circuit, Cable1x],
                [Solder + ' 144']
            );
            if (tier !== 'ev') {
                AllTierMachine('buffer', [Hull, Pump, Circuit, Conveyor, Tank, Chest], [Solder + ' 144']);
                AllTierMachine(
                    'combustion',
                    [Hull, '2x ' + Piston, '2x ' + Motor, '2x ' + Gear, Circuit, Cable1x],
                    [Solder + ' 144']
                );
                AllTierMachine(
                    'steam_turbine',
                    [Hull, '2x ' + PipeNormal, '2x ' + Rotor, '2x ' + Motor, Circuit, Cable1x],
                    [Solder + ' 144']
                );
                AllTierMachine(
                    'gas_turbine',
                    [Hull, '2x ' + Rotor, '2x ' + Motor, Circuit, Pump, '2x ' + Cable1x],
                    [Solder + ' 144']
                );
            }
        }
        AllTierMachine(
            'battery_buffer_4x',
            [Hull, Chest, `4x gtceu:${cable}_quadruple_wire`, Circuit],
            [Solder + ' 144']
        );
        AllTierMachine('battery_buffer_8x', [Hull, Chest, `4x gtceu:${cable}_octal_wire`, Circuit], [Solder + ' 144']);
        AllTierMachine('battery_buffer_16x', [Hull, Chest, `4x gtceu:${cable}_hex_wire`, Circuit], [Solder + ' 144']);
        AllTierMachine(
            'me_assembler',
            [Hull, '2x ' + Arm, '2x ' + Circuit, Emitter, Conveyor, Motor, '3x ' + Cable1x],
            [Solder + ' 144']
        );

        const Transformers = (amps, cableSize) => {
            if (chip !== null) {
                AllTierMachine(
                    `transformer_${amps}a`,
                    [
                        Hull,
                        `4x gtceu:${cable}_${cableSize}_cable`,
                        `1x gtceu:${cable1up}_${cableSize}_cable`,
                        Circuit,
                        `4x ${chip}`,
                    ],
                    [Solder + ` ${144 * amps}`]
                );
            } else {
                AllTierMachine(
                    `transformer_${amps}a`,
                    [Hull, `4x gtceu:${cable}_${cableSize}_cable`, `1x gtceu:${cable1up}_${cableSize}_cable`, Circuit],
                    [Solder + ` ${144 * amps}`]
                );
            }
        };
        Transformers(1, 'single');
        Transformers(2, 'double');
        Transformers(4, 'quadruple');
        Transformers(16, 'hex');

        //Assembler
        ['input', 'output'].forEach((hatchType) => {
            const SpringCable = hatchType == 'input' ? 'single_cable' : 'spring';
            if (tier === 'lv') {
                event.recipes.gtceu
                    .assembler(id(`${tier}_energy_${hatchType}_hatch`))
                    .itemInputs(
                        `gtceu:${tier}_machine_hull`,
                        `1x #gtceu:circuits/${tier}`,
                        `4x gtceu:${cable}_${SpringCable}`,
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
                        `4x gtceu:${cable}_${SpringCable}`,
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
                        `4x gtceu:${cable}_${SpringCable}`,
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
                        `4x gtceu:${cable}_${SpringCable}`,
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
                        `6x gtceu:${cable}_${SpringCable}`,
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
                        `12x gtceu:${cable}_${SpringCable}`,
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
            let SupQuant = tier == 'lv' || 'mv' || 'hv' || 'ev' ? 'super' : 'quantum';
            let plating = SupQuant == 'super' ? 'double' : 'dense';
            AllTierMachine(
                `${SupQuant}_tank`,
                [
                    Hull,
                    `gtceu:${tier}_hermetic_casing`,
                    Emitter,
                    '4x ' + Circuit,
                    `5x gtceu:${plating}_${material}_plate`,
                    Glass,
                ],
                [Solder + ' 144', RubberF + ' 72']
            );
            AllTierMachine(
                `${SupQuant}_chest`,
                [Hull, Chest, Sensor, '4x ' + Circuit, `5x gtceu:${plating}_${material}_plate`, Glass],
                [Solder + ' 144', RubberF + ' 72']
            );
        }
    };
    TierMaterials(
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
    TierMaterials(
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
    TierMaterials(
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
    TierMaterials(
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
        const HatchParts = meHatchType == 'bus' ? 'conveyor_module' : 'electric_pump';
        ['input', 'output'].forEach((IOtype) => {
            let HatchCircuit = IOtype == 'input' ? 1 : 2;
            event.recipes.gtceu
                .assembler(id(`me_${IOtype}_${meHatchType}`))
                .itemInputs(
                    `gtceu:ev_${IOtype}_${meHatchType}`,
                    `expatternprovider:oversize_interface`,
                    '2x #gtceu:circuits/ev',
                    `2x gtceu:ev_${HatchParts}`,
                    '4x #ae2:glass_cable'
                )
                .inputFluids('gtceu:polytetrafluoroethylene 432')
                .itemOutputs(`gtceu:me_${IOtype}_${meHatchType}`)
                .circuit(HatchCircuit)
                .duration(500)
                .EUt(1920);
        });
    });

    const Converter = (tier, superconductor, tierScaler, polymer) => {
        const polymerScaler = polymer == 'glue' ? 144 : 72;
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
            .EUt(3.75 * Math.pow(4, tierScaler));
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
            .EUt(3.75 * Math.pow(4, tierScaler));
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
            .EUt(3.75 * Math.pow(4, tierScaler));
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
            .EUt(3.75 * Math.pow(4, tierScaler));
    };
    Converter('lv', 'soul_infused', 1, 'glue');
    Converter('mv', 'signalum', 2, 'polyethylene');
    Converter('hv', 'lumium', 3, 'polyethylene');
    Converter('ev', 'enderium', 4, 'polytetrafluoroethylene');
    // Converter('iv', 'shellite', 5, 'polytetrafluoroethylene');
    // Converter('luv', 'twinite', 6, 'polybenzamidazole');
    // Converter('zpm', 'dragonsteel', 7, 'polybenzamidazole');
    // Converter('uv', 'prismalium', 8, 'polyether_ether_ketone');
    // Converter('uhv', 'stellarium', 9, 'polyether_ether_ketone');
    // Converter('uev', 'ancient_runicalium', 10, 'poly_34_ethylenedioxythiophene_polystyrene_sulfate');
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

    const MachineAssembly = (type, inputs, fluids, EUt, Duration) => {
        event.recipes.gtceu
            .advanced_machine_facility(id(type))
            .itemInputs(inputs)
            .inputFluids(fluids)
            .itemOutputs(`gtceu:${type}`)
            .duration(Duration)
            .EUt(EUt);
    };

    const MachineAssemblyScanner = (type, inputs, fluids, EUt, Duration, Scanned, ScannerEUt, ScannerDuration) => {
        let ScannerID = `${Scanned.replace(':', '_')}`;
        event.recipes.gtceu
            .advanced_machine_facility(id(type))
            .itemInputs(inputs)
            .inputFluids(fluids)
            .itemOutputs(`gtceu:${type}`)
            .duration(Duration)
            .EUt(EUt)
            .scannerResearch(Scanned);
        event.recipes.gtceu
            .scanner(id(`1_x_${ScannerID}`))
            .itemInputs('gtceu:data_stick')
            .itemInputs(Scanned)
            .itemOutputs(
                Item.of(
                    `gtceu:data_stick`,
                    `{assembly_line_research:{research_id:"${'1x_' + ScannerID}",research_type:"gtceu:advanced_machine_facility"}}`
                )
            )
            .duration(ScannerDuration)
            .EUt(ScannerEUt);
    };

    MachineAssembly(
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
    MachineAssemblyScanner(
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
    MachineAssemblyScanner(
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
    MachineAssembly(
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
    MachineAssembly(
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
    MachineAssemblyScanner(
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
    MachineAssemblyScanner(
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
    MachineAssemblyScanner(
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
    MachineAssembly(
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
    MachineAssemblyScanner(
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
    MachineAssemblyScanner(
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
    MachineAssemblyScanner(
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

    MachineAssembly(
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
    MachineAssembly(
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
    MachineAssemblyScanner(
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
    MachineAssembly(
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
    MachineAssembly(
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
    MachineAssembly(
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

    const Kubes = (type, inputsTLarge, fluidsTLarge) => {
        MachineAssemblyScanner(
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
    Kubes(
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
    Kubes(
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
    Kubes(
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
    Kubes(
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
    Kubes(
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
    Kubes(
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
    Kubes(
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
    Kubes(
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
    Kubes(
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
    Kubes(
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
    Kubes(
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
    Kubes(
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
    Kubes(
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
    MachineAssemblyScanner(
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
