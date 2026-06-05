// packmode: hard

ServerEvents.recipes((event) => {
    const id = global.id;

    let tiers = ['lv', 'mv', 'hv', 'ev', 'iv', 'luv', 'zpm', 'uv'];
    let compTypes = [
        'electric_motor',
        'electric_pump',
        'robot_arm',
        'electric_piston',
        'conveyor_module',
        'emitter',
        'sensor',
        'field_generator',
    ];

    compTypes.forEach((component) => {
        tiers.forEach((tier) => {
            event.remove({ output: `gtceu:${tier}_${component}` });
            if (tier === 'uv') {
                event.remove({ id: `gtceu:research_station/1_x_gtceu_zpm_${component}` });
            }
            if (tier === 'zpm' || tier === 'luv') {
                let priorTier = tier === 'zpm' ? 'luv' : 'iv';
                event.remove({ id: `gtceu:scanner/1_x_gtceu_${priorTier}_${component}` });
            }
        });
    });

    event.remove({ output: /gtceu:.*voltage_coil/ });

    const voltageCoil = (type, magnet, wire, power) => {
        event.recipes.gtceu
            .assembler(id(`${type}_voltage_coil`))
            .itemInputs(`gtceu:magnetic_${magnet}_rod`, `16x gtceu:fine_${wire}_wire`)
            .itemOutputs(`gtceu:${type}_voltage_coil`)
            .duration(320)
            .EUt(power);
    };
    voltageCoil('ulv', 'iron', 'lead', 7);
    voltageCoil('lv', 'steel', 'damascus_steel', 30);
    voltageCoil('mv', 'steel', 'aluminium', 120);
    voltageCoil('hv', 'neodymium', 'black_steel', 480);
    voltageCoil('ev', 'neodymium', 'platinum', 1920);

    // Will Require CAL - To change post Theta
    // voltageCoil('iv','samarium','iridium',0,false);
    // voltageCoil('luv','samarium','osmiridium',0,false);
    // voltageCoil('zpm','holmium','europium',0,false);
    // voltageCoil('uv','holmium','tritanium',0,false);

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

    let hmComponents = (
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
        pipe,
        rotor,
        eut
    ) => {
        if (tier === 'lv') {
            let assemblerComponentType = (type, inputs) => {
                if (type === 'conveyor_module') {
                    event.recipes.gtceu
                        .assembler(id(`lv_${type}`))
                        .itemInputs(inputs)
                        .inputFluids('gtceu:rubber 864')
                        .circuit(1)
                        .itemOutputs(`gtceu:lv_${type}`)
                        .duration(400)
                        .EUt(eut);
                } else if (type === 'emitter') {
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
            assemblerComponentType('electric_motor', [
                `2x gtceu:${cable}_single_cable`,
                `2x gtceu:${material}_rod`,
                `1x gtceu:magnetic_${magnet}_rod`,
                `4x gtceu:${wire}_single_wire`,
            ]);
            assemblerComponentType('electric_pump', [
                `1x gtceu:${cable}_single_cable`,
                `1x gtceu:${pipe}_normal_fluid_pipe`,
                `1x gtceu:${rotor}_screw`,
                `1x gtceu:${rotor}_rotor`,
                `2x gtceu:${rubber}rubber_ring`,
                `1x gtceu:${tier}_electric_motor`,
            ]);
            assemblerComponentType('electric_piston', [
                `2x gtceu:${material}_rod`,
                `2x gtceu:${cable}_single_cable`,
                `3x gtceu:${material}_plate`,
                `1x gtceu:small_${material}_gear`,
                `1x gtceu:${tier}_electric_motor`,
            ]);
            assemblerComponentType('conveyor_module', [
                `1x gtceu:${cable}_single_cable`,
                `2x gtceu:${tier}_electric_motor`,
            ]);
            assemblerComponentType('robot_arm', [
                `3x gtceu:${cable}_single_cable`,
                `2x gtceu:${material}_rod`,
                `2x gtceu:${tier}_electric_motor`,
                `1x gtceu:${tier}_electric_piston`,
                `#gtceu:circuits/${tier}`,
            ]);
            assemblerComponentType('emitter', [
                `1x gtceu:${tier}_electric_motor`,
                `4x gtceu:${subFieldSupport}_rod`,
                `2x gtceu:${cable}_single_cable`,
                `2x #gtceu:circuits/${tier}`,
                `1x ${subFieldCore}`,
            ]);
            assemblerComponentType('sensor', [
                `1x gtceu:${tier}_electric_motor`,
                `4x gtceu:${subFieldSupport}_plate`,
                `2x gtceu:${cable}_single_cable`,
                `1x #gtceu:circuits/${tier}`,
                `1x ${subFieldCore}`,
            ]);
            assemblerComponentType('field_generator', [
                `2x gtceu:${material}_plate`,
                `1x ${fieldCore}`,
                `1x gtceu:${tier}_emitter`,
                `1x #gtceu:circuits/${tier}`,
                `4x gtceu:${superconductor}_quadruple_wire`,
            ]);
        } else if (tier === 'mv' || tier === 'hv' || tier === 'ev') {
            let chamberComponentType = (type, inputs) => {
                if (type === 'conveyor_module') {
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
            chamberComponentType('electric_motor', [
                `2x gtceu:${cable}_double_cable`,
                `2x gtceu:${material}_rod`,
                `1x gtceu:magnetic_${magnet}_rod`,
                `4x gtceu:${wire}_double_wire`,
            ]);
            chamberComponentType('electric_pump', [
                `1x gtceu:${cable}_single_cable`,
                `1x gtceu:${pipe}_normal_fluid_pipe`,
                `1x gtceu:${rotor}_screw`,
                `1x gtceu:${rotor}_rotor`,
                `2x gtceu:${rubber}rubber_ring`,
                `1x gtceu:${tier}_electric_motor`,
            ]);
            chamberComponentType('electric_piston', [
                `2x gtceu:${material}_rod`,
                `2x gtceu:${cable}_single_cable`,
                `3x gtceu:${material}_plate`,
                `1x gtceu:small_${material}_gear`,
                `1x gtceu:${tier}_electric_motor`,
            ]);
            chamberComponentType('conveyor_module', [
                `1x gtceu:${cable}_single_cable`,
                `2x gtceu:${tier}_electric_motor`,
                `2x gtceu:${cable}_single_wire`,
            ]);
            chamberComponentType('robot_arm', [
                `3x gtceu:${cable}_single_cable`,
                `2x gtceu:${material}_rod`,
                `2x gtceu:${tier}_electric_motor`,
                `1x gtceu:${tier}_electric_piston`,
                `#gtceu:circuits/${tier}`,
                `#gtceu:circuits/${tierPrior}`,
            ]);
            chamberComponentType('emitter', [
                `1x gtceu:${tier}_electric_motor`,
                `4x gtceu:${subFieldSupport}_rod`,
                `2x gtceu:${cable}_single_cable`,
                `2x #gtceu:circuits/${tier}`,
                `1x ${subFieldCore}`,
            ]);
            chamberComponentType('sensor', [
                `1x gtceu:${tier}_electric_motor`,
                `4x gtceu:${subFieldSupport}_plate`,
                `2x gtceu:${cable}_single_cable`,
                `1x #gtceu:circuits/${tier}`,
                `1x ${subFieldCore}`,
            ]);
            chamberComponentType('field_generator', [
                `2x gtceu:double_${material}_plate`,
                `1x ${fieldCore}`,
                `1x gtceu:${tier}_emitter`,
                `1x #gtceu:circuits/${tier}`,
                `4x gtceu:${superconductor}_quadruple_wire`,
            ]);
        }
    };

    hmComponents(
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
    hmComponents(
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
    hmComponents(
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
    hmComponents(
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
