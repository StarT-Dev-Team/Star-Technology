ServerEvents.recipes((event) => {
    const id = global.id;

    let Tiers = ['lv', 'mv', 'hv', 'ev', 'iv', 'luv', 'zpm', 'uv'];
    let CompTypes = [
        'electric_motor',
        'electric_pump',
        'robot_arm',
        'electric_piston',
        'conveyor_module',
        'emitter',
        'sensor',
        'field_generator',
    ];

    CompTypes.forEach((component) => {
        Tiers.forEach((tier) => {
            event.remove({ output: `gtceu:${tier}_${component}` });
            if (tier == 'uv') {
                event.remove({ id: `gtceu:research_station/1_x_gtceu_zpm_${component}` });
            }
            if (tier == 'zpm' || 'luv') {
                let priorTier = tier == 'zpm' ? 'luv' : 'iv';
                event.remove({ id: `gtceu:scanner/1_x_gtceu_${priorTier}_${component}` });
            }
        });
    });

    event.remove({ output: /gtceu:.*voltage_coil/ });

    const VoltageCoil = (type, magnet, wire, power) => {
        event.recipes.gtceu
            .assembler(id(`${type}_voltage_coil`))
            .itemInputs(`gtceu:magnetic_${magnet}_rod`, `16x gtceu:fine_${wire}_wire`)
            .itemOutputs(`gtceu:${type}_voltage_coil`)
            .duration(320)
            .EUt(power);
    };
    VoltageCoil('ulv', 'iron', 'lead', 7);
    VoltageCoil('lv', 'steel', 'damascus_steel', 30);
    VoltageCoil('mv', 'steel', 'aluminium', 120);
    VoltageCoil('hv', 'neodymium', 'black_steel', 480);
    VoltageCoil('ev', 'neodymium', 'platinum', 1920);

    // Will Require CAL - To change post Theta
    // VoltageCoil('iv','samarium','iridium',0,false);
    // VoltageCoil('luv','samarium','osmiridium',0,false);
    // VoltageCoil('zpm','holmium','europium',0,false);
    // VoltageCoil('uv','holmium','tritanium',0,false);

    // For Components
    // ULV is Seq Ass / Assember
    // LV is Assembler
    // MV,HV,EV is Component Chamber
    // IV,LuV,ZPM,UV is Component Assembly Line (IV/LuV Scanner, ZPM/UV ResearchStation) // Will do with Theta
    // UHV,UEV,UIV adds Component Parts & Component Part Assembly (still made in CAL)
    // UXV,OPV,MAX .... Dont Worry About It

    event.recipes.gtceu
        .advanced_machine_facility(id(`component_chamber`))
        .itemInputs(
            'gtceu:lv_assembler',
            '4x gtceu:lv_robot_arm',
            '2x gtceu:lv_conveyor_module',
            '3x gtceu:lv_electric_pump',
            '8x gtceu:fine_aluminium_wire',
            '4x gtceu:magnalium_gear',
            '6x #gtceu:circuits/mv',
            '2x gtceu:lv_field_generator',
            '2x gtceu:long_magnalium_rod',
            '6x gtceu:copper_double_cable'
        )
        .inputFluids('gtceu:soldering_alloy 864', 'gtceu:polyethylene 576', 'gtceu:rubber 432')
        .itemOutputs(`gtceu:component_chamber`)
        .duration(1200)
        .EUt(120);

    let HM_Components = (
        tier,
        tierPrior,
        magnet,
        material,
        cable,
        rubber,
        wire,
        superconductor,
        fieldCore,
        subFieldCore,
        subFieldSupport,
        Pipe,
        Rotor,
        eut
    ) => {
        if (tier == 'lv') {
            let AssemblerComponentType = (type, inputs) => {
                if (type == 'conveyor_module') {
                    event.recipes.gtceu
                        .assembler(id(`lv_${type}`))
                        .itemInputs(inputs)
                        .inputFluids('gtceu:rubber 864')
                        .circuit(1)
                        .itemOutputs(`gtceu:lv_${type}`)
                        .duration(400)
                        .EUt(eut);
                } else if (type == 'emitter') {
                    event.recipes.gtceu
                        .assembler(id(`lv_${type}`))
                        .itemInputs(inputs)
                        .itemOutputs(`gtceu:lv_${type}`)
                        .circuit(1)
                        .duration(400)
                        .EUt(eut);
                } else {
                    event.recipes.gtceu
                        .assembler(id(`lv_${type}`))
                        .itemInputs(inputs)
                        .itemOutputs(`gtceu:lv_${type}`)
                        .duration(400)
                        .EUt(eut);
                }
            };
            AssemblerComponentType('electric_motor', [
                `2x gtceu:${cable}_single_cable`,
                `2x gtceu:${material}_rod`,
                `1x gtceu:magnetic_${magnet}_rod`,
                `4x gtceu:${wire}_single_wire`,
            ]);
            AssemblerComponentType('electric_pump', [
                `1x gtceu:${cable}_single_cable`,
                `1x gtceu:${Pipe}_normal_fluid_pipe`,
                `1x gtceu:${Rotor}_screw`,
                `1x gtceu:${Rotor}_rotor`,
                `2x gtceu:${rubber}rubber_ring`,
                `1x gtceu:${tier}_electric_motor`,
            ]);
            AssemblerComponentType('electric_piston', [
                `2x gtceu:${material}_rod`,
                `2x gtceu:${cable}_single_cable`,
                `3x gtceu:${material}_plate`,
                `1x gtceu:small_${material}_gear`,
                `1x gtceu:${tier}_electric_motor`,
            ]);
            AssemblerComponentType('conveyor_module', [
                `1x gtceu:${cable}_single_cable`,
                `2x gtceu:${tier}_electric_motor`,
            ]);
            AssemblerComponentType('robot_arm', [
                `3x gtceu:${cable}_single_cable`,
                `2x gtceu:${material}_rod`,
                `2x gtceu:${tier}_electric_motor`,
                `1x gtceu:${tier}_electric_piston`,
                `#gtceu:circuits/${tier}`,
            ]);
            AssemblerComponentType('emitter', [
                `1x gtceu:${tier}_electric_motor`,
                `4x gtceu:${subFieldSupport}_rod`,
                `2x gtceu:${cable}_single_cable`,
                `2x #gtceu:circuits/${tier}`,
                `1x ${subFieldCore}`,
            ]);
            AssemblerComponentType('sensor', [
                `1x gtceu:${tier}_electric_motor`,
                `4x gtceu:${subFieldSupport}_plate`,
                `2x gtceu:${cable}_single_cable`,
                `1x #gtceu:circuits/${tier}`,
                `1x ${subFieldCore}`,
            ]);
            AssemblerComponentType('field_generator', [
                `2x gtceu:${material}_plate`,
                `1x ${fieldCore}`,
                `1x gtceu:${tier}_emitter`,
                `1x #gtceu:circuits/${tier}`,
                `4x gtceu:${superconductor}_quadruple_wire`,
            ]);
        } else if (tier == 'mv' || 'hv' || 'ev') {
            let ChamberComponentType = (type, inputs) => {
                if (type == 'conveyor_module') {
                    event.recipes.gtceu
                        .component_chamber(id(`${tier}_${type}`))
                        .chancedInput(`gtceu:${tierPrior}_${type}`, 1250, 0)
                        .itemInputs(inputs)
                        .inputFluids('gtceu:soldering_alloy 36', 'gtceu:lubricant 50', `gtceu:${rubber}rubber 864`)
                        .itemOutputs(`gtceu:${tier}_${type}`)
                        .duration(400)
                        .EUt(eut);
                } else {
                    event.recipes.gtceu
                        .component_chamber(id(`${tier}_${type}`))
                        .chancedInput(`gtceu:${tierPrior}_${type}`, 1250, 0)
                        .itemInputs(inputs)
                        .inputFluids('gtceu:soldering_alloy 36', 'gtceu:lubricant 50')
                        .itemOutputs(`gtceu:${tier}_${type}`)
                        .duration(400)
                        .EUt(eut);
                }
            };
            ChamberComponentType('electric_motor', [
                `2x gtceu:${cable}_double_cable`,
                `2x gtceu:${material}_rod`,
                `1x gtceu:magnetic_${magnet}_rod`,
                `4x gtceu:${wire}_double_wire`,
            ]);
            ChamberComponentType('electric_pump', [
                `1x gtceu:${cable}_single_cable`,
                `1x gtceu:${Pipe}_normal_fluid_pipe`,
                `1x gtceu:${Rotor}_screw`,
                `1x gtceu:${Rotor}_rotor`,
                `2x gtceu:${rubber}rubber_ring`,
                `1x gtceu:${tier}_electric_motor`,
            ]);
            ChamberComponentType('electric_piston', [
                `2x gtceu:${material}_rod`,
                `2x gtceu:${cable}_single_cable`,
                `3x gtceu:${material}_plate`,
                `1x gtceu:small_${material}_gear`,
                `1x gtceu:${tier}_electric_motor`,
            ]);
            ChamberComponentType('conveyor_module', [
                `1x gtceu:${cable}_single_cable`,
                `2x gtceu:${tier}_electric_motor`,
                `2x gtceu:${cable}_single_wire`,
            ]);
            ChamberComponentType('robot_arm', [
                `3x gtceu:${cable}_single_cable`,
                `2x gtceu:${material}_rod`,
                `2x gtceu:${tier}_electric_motor`,
                `1x gtceu:${tier}_electric_piston`,
                `#gtceu:circuits/${tier}`,
                `#gtceu:circuits/${tierPrior}`,
            ]);
            ChamberComponentType('emitter', [
                `1x gtceu:${tier}_electric_motor`,
                `4x gtceu:${subFieldSupport}_rod`,
                `2x gtceu:${cable}_single_cable`,
                `2x #gtceu:circuits/${tier}`,
                `1x ${subFieldCore}`,
            ]);
            ChamberComponentType('sensor', [
                `1x gtceu:${tier}_electric_motor`,
                `4x gtceu:${subFieldSupport}_plate`,
                `2x gtceu:${cable}_single_cable`,
                `1x #gtceu:circuits/${tier}`,
                `1x ${subFieldCore}`,
            ]);
            ChamberComponentType('field_generator', [
                `2x gtceu:double_${material}_plate`,
                `1x ${fieldCore}`,
                `1x gtceu:${tier}_emitter`,
                `1x #gtceu:circuits/${tier}`,
                `4x gtceu:${superconductor}_quadruple_wire`,
            ]);
        }
    };

    HM_Components(
        'lv',
        'ulv',
        'steel',
        'damascus_steel',
        'tin',
        '',
        'copper',
        'manganese_phosphide',
        'minecraft:ender_pearl',
        'gtceu:quartzite_gem',
        'brass',
        'bronze',
        'tin_alloy',
        7
    );
    HM_Components(
        'mv',
        'lv',
        'steel',
        'magnalium',
        'copper',
        '',
        'cupronickel',
        'magnesium_diboride',
        'minecraft:ender_eye',
        'gtceu:flawless_emerald_gem',
        'electrum',
        'polyethylene',
        'steel',
        30
    );
    HM_Components(
        'hv',
        'mv',
        'neodymium',
        'black_steel',
        'gold',
        'silicone_',
        'electrum',
        'mercury_barium_calcium_cuprate',
        'gtceu:quantum_eye',
        'minecraft:ender_eye',
        'chromium',
        'stainless_steel',
        'black_steel',
        120
    );
    HM_Components(
        'ev',
        'hv',
        'neodymium',
        'ultimet',
        'aluminium',
        'silicone_',
        'kanthal',
        'uranium_triplatinum',
        'minecraft:nether_star',
        'gtceu:quantum_eye',
        'platinum',
        'titanium',
        'hsla_steel',
        480
    );
});
