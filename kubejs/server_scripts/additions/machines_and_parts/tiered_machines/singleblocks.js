ServerEvents.recipes((event) => {
    const id = global.id;

    event.remove({ not: { output: 'gtceu:uhv_ultimate_battery' }, output: /gtceu:uhv.*/ });
    event.remove({ not: { input: 'gtceu:uhv_ultimate_battery' }, input: /gtceu:uhv.*/ });
    event.remove({ output: /gtceu:uev.*/ });
    event.remove({ input: /gtceu:uev.*/ });
    event.remove({ output: /gtceu:uiv.*/ });
    event.remove({ input: /gtceu:uiv.*/ });
    event.remove({ output: /gtceu:uxv.*/ });
    event.remove({ input: /gtceu:uxv.*/ });
    event.remove({ output: /gtceu:opv.*/ });
    event.remove({ input: /gtceu:opv.*/ });
    event.remove({ not: { output: 'gtceu:max_battery' }, output: /gtceu:max.*/ });
    event.remove({ not: { input: 'gtceu:max_battery' }, input: /gtceu:max.*/ });

    const components = global.componentMaterials;

    /**
     * @param {'uhv' | 'uev' | 'uiv'} tierKey
     */
    function postUVMachines(tierKey) {
        const tierData = components[tierKey];

        const {
            tiers: { tier, tier0, tier1 },
            materials: {
                tierMaterial,
                wire,
                elctrlyzWire,
                plastic,
                cable,
                primMagnet,
                pipeMaterial,
                glass,
                buzz,
                chip,
            },
            scaling: tierScalingData,
        } = tierData;
        const { scaler } = tierScalingData || { scaler: 1 };

        let math = scaler - 3;

        // Machines
        event.recipes.gtceu
            .shaped(Item.of(`gtceu:${tier}_machine_casing`), ['PPP', 'PWP', 'PPP'], {
                P: `gtceu:${tierMaterial}_plate`,
                W: '#forge:tools/wrenches',
            })
            .id(`start:shaped/${tier}_machine_casing`);

        event.recipes.gtceu
            .assembler(id(`${tier}_machine_casing`))
            .itemInputs(`8x gtceu:${tierMaterial}_plate`)
            .circuit(8)
            .itemOutputs(`gtceu:${tier}_machine_casing`)
            .duration(50)
            .EUt(16)
            .addMaterialInfo(true);

        event.recipes.gtceu
            .shaped(Item.of(`gtceu:${tier}_machine_hull`), ['   ', 'LPL', 'CMC'], {
                P: `gtceu:${tierMaterial}_plate`,
                L: `gtceu:${plastic}_plate`,
                C: `gtceu:${cable}_single_cable`,
                M: `gtceu:${tier}_machine_casing`,
            })
            .id(`start:shaped/${tier}_machine_hull`);

        event.recipes.gtceu
            .assembler(id(`${tier}_machine_hull`))
            .itemInputs(`gtceu:${tier}_machine_casing`, `2x gtceu:${cable}_single_cable`)
            .inputFluids(`gtceu:${plastic} 288`)
            .itemOutputs(`gtceu:${tier}_machine_hull`)
            .duration(50)
            .EUt(16)
            .addMaterialInfo(true);

        event.recipes.gtceu
            .shaped(Item.of(`gtceu:${tier}_electric_furnace`), ['IWI', 'WHW', 'CWC'], {
                I: `#gtceu:circuits/${tier}`,
                W: `gtceu:${wire}_double_wire`,
                C: `gtceu:${cable}_single_cable`,
                H: `gtceu:${tier}_machine_hull`,
            })
            .id(`start:shaped/${tier}_electric_furnace`)
            .addMaterialInfo();

        event.recipes.gtceu
            .shaped(Item.of(`gtceu:${tier}_electric_blaster`), ['IDI', 'WHW', 'CQC'], {
                I: `#gtceu:circuits/${tier}`,
                W: `gtceu:${wire}_double_wire`,
                C: `gtceu:${cable}_single_cable`,
                H: `gtceu:${tier}_machine_hull`,
                Q: `gtceu:${wire}_quadruple_wire`,
                D: `gtceu:double_${tierMaterial}_plate`,
            })
            .id(`start:shaped/${tier}_electric_blaster`)
            .addMaterialInfo();

        event.recipes.gtceu
            .shaped(Item.of(`gtceu:${tier}_electric_smoker`), ['ISI', 'WHW', 'CQC'], {
                I: `#gtceu:circuits/${tier}`,
                W: `gtceu:${wire}_double_wire`,
                C: `gtceu:${cable}_single_cable`,
                H: `gtceu:${tier}_machine_hull`,
                Q: `gtceu:${wire}_quadruple_wire`,
                S: `gtceu:${wire}_spring`,
            })
            .id(`start:shaped/${tier}_electric_smoker`)
            .addMaterialInfo();

        event.recipes.gtceu
            .shaped(Item.of(`gtceu:${tier}_alloy_smelter`), ['IWI', 'WHW', 'CWC'], {
                I: `#gtceu:circuits/${tier}`,
                W: `gtceu:${wire}_quadruple_wire`,
                C: `gtceu:${cable}_single_cable`,
                H: `gtceu:${tier}_machine_hull`,
            })
            .id(`start:shaped/${tier}_alloy_smelter`)
            .addMaterialInfo();

        event.recipes.gtceu
            .shaped(Item.of(`gtceu:${tier}_arc_furnace`), ['CGC', 'IHI', 'PPP'], {
                I: `#gtceu:circuits/${tier}`,
                G: 'gtceu:graphite_dust',
                C: `gtceu:${cable}_quadruple_cable`,
                H: `gtceu:${tier}_machine_hull`,
                P: `gtceu:${tierMaterial}_plate`,
            })
            .id(`start:shaped/${tier}_arc_furnace`)
            .addMaterialInfo();

        event.recipes.gtceu
            .shaped(Item.of(`gtceu:${tier}_assembler`), ['AIA', 'VHV', 'CIC'], {
                I: `#gtceu:circuits/${tier}`,
                C: `gtceu:${cable}_single_cable`,
                H: `gtceu:${tier}_machine_hull`,
                A: `gtceu:${tier}_robot_arm`,
                V: `gtceu:${tier}_conveyor_module`,
            })
            .id(`start:shaped/${tier}_assembler`)
            .addMaterialInfo();

        event.recipes.gtceu
            .shaped(Item.of(`gtceu:${tier}_autoclave`), ['PGP', 'PHP', 'IUI'], {
                I: `#gtceu:circuits/${tier}`,
                G: `${glass}`,
                H: `gtceu:${tier}_machine_hull`,
                P: `gtceu:${tierMaterial}_plate`,
                U: `gtceu:${tier}_electric_pump`,
            })
            .id(`start:shaped/${tier}_autoclave`)
            .addMaterialInfo();

        event.recipes.gtceu
            .shaped(Item.of(`gtceu:${tier}_bender`), ['SPS', 'IHI', 'MCM'], {
                I: `#gtceu:circuits/${tier}`,
                H: `gtceu:${tier}_machine_hull`,
                C: `gtceu:${cable}_single_cable`,
                P: `gtceu:${tierMaterial}_plate`,
                M: `gtceu:${tier}_electric_motor`,
                S: `gtceu:${tier}_electric_piston`,
            })
            .id(`start:shaped/${tier}_bender`)
            .addMaterialInfo();

        event.recipes.gtceu
            .shaped(Item.of(`gtceu:${tier}_brewery`), ['GUG', 'CHC', 'ISI'], {
                G: `${glass}`,
                I: `#gtceu:circuits/${tier}`,
                H: `gtceu:${tier}_machine_hull`,
                C: `gtceu:${cable}_single_cable`,
                U: `gtceu:${tier}_electric_pump`,
                S: `gtceu:${wire}_spring`,
            })
            .id(`start:shaped/${tier}_brewery`)
            .addMaterialInfo();

        event.recipes.gtceu
            .shaped(Item.of(`gtceu:${tier}_canner`), ['CUC', 'IHI', 'GGG'], {
                G: `${glass}`,
                I: `#gtceu:circuits/${tier}`,
                H: `gtceu:${tier}_machine_hull`,
                C: `gtceu:${cable}_single_cable`,
                U: `gtceu:${tier}_electric_pump`,
            })
            .id(`start:shaped/${tier}_canner`)
            .addMaterialInfo();

        event.recipes.gtceu
            .shaped(Item.of(`gtceu:${tier}_centrifuge`), ['IMI', 'CHC', 'IMI'], {
                I: `#gtceu:circuits/${tier}`,
                H: `gtceu:${tier}_machine_hull`,
                C: `gtceu:${cable}_single_cable`,
                M: `gtceu:${tier}_electric_motor`,
            })
            .id(`start:shaped/${tier}_centrifuge`)
            .addMaterialInfo();

        event.recipes.gtceu
            .shaped(Item.of(`gtceu:${tier}_chemical_bath`), ['VGC', 'UGV', 'IHI'], {
                I: `#gtceu:circuits/${tier}`,
                H: `gtceu:${tier}_machine_hull`,
                C: `gtceu:${cable}_single_cable`,
                U: `gtceu:${tier}_electric_pump`,
                V: `gtceu:${tier}_conveyor_module`,
                G: `${glass}`,
            })
            .id(`start:shaped/${tier}_chemical_bath`)
            .addMaterialInfo();

        event.recipes.gtceu
            .shaped(Item.of(`gtceu:${tier}_chemical_reactor`), ['ERE', 'CMC', 'IHI'], {
                I: `#gtceu:circuits/${tier}`,
                H: `gtceu:${tier}_machine_hull`,
                C: `gtceu:${cable}_single_cable`,
                E: `gtceu:${plastic}_large_fluid_pipe`,
                R: `gtceu:${tierMaterial}_rotor`,
                M: `gtceu:${tier}_electric_motor`,
            })
            .id(`start:shaped/${tier}_chemical_reactor`)
            .addMaterialInfo();

        event.recipes.gtceu
            .shaped(Item.of(`gtceu:${tier}_compressor`), [' I ', 'SHS', 'CIC'], {
                I: `#gtceu:circuits/${tier}`,
                H: `gtceu:${tier}_machine_hull`,
                C: `gtceu:${cable}_single_cable`,
                S: `gtceu:${tier}_electric_piston`,
            })
            .id(`start:shaped/${tier}_compressor`)
            .addMaterialInfo();

        event.recipes.gtceu
            .shaped(Item.of(`gtceu:${tier}_cutter`), ['CIG', 'VHB', 'ICM'], {
                I: `#gtceu:circuits/${tier}`,
                H: `gtceu:${tier}_machine_hull`,
                C: `gtceu:${cable}_single_cable`,
                V: `gtceu:${tier}_conveyor_module`,
                M: `gtceu:${tier}_electric_motor`,
                G: `${glass}`,
                B: `gtceu:${buzz}_buzz_saw_blade`,
            })
            .id(`start:shaped/${tier}_cutter`)
            .addMaterialInfo();

        event.recipes.gtceu
            .shaped(Item.of(`gtceu:${tier}_distillery`), ['GSG', 'IHI', 'CUC'], {
                I: `#gtceu:circuits/${tier}`,
                H: `gtceu:${tier}_machine_hull`,
                C: `gtceu:${cable}_single_cable`,
                G: `${glass}`,
                S: `gtceu:${wire}_spring`,
                U: `gtceu:${tier}_electric_pump`,
            })
            .id(`start:shaped/${tier}_distillery`)
            .addMaterialInfo();

        event.recipes.gtceu
            .shaped(Item.of(`gtceu:${tier}_electrolyzer`), ['WGW', 'WHW', 'ICI'], {
                I: `#gtceu:circuits/${tier}`,
                H: `gtceu:${tier}_machine_hull`,
                C: `gtceu:${cable}_single_cable`,
                G: `${glass}`,
                W: `gtceu:${elctrlyzWire}_single_wire`,
            })
            .id(`start:shaped/${tier}_electrolyzer`)
            .addMaterialInfo();

        event.recipes.gtceu
            .shaped(Item.of(`gtceu:${tier}_electromagnetic_separator`), ['VCW', 'CHG', 'ICW'], {
                I: `#gtceu:circuits/${tier}`,
                H: `gtceu:${tier}_machine_hull`,
                C: `gtceu:${cable}_single_cable`,
                G: `gtceu:${primMagnet}_rod`,
                W: `gtceu:${cable}_octal_wire`,
                V: `gtceu:${tier}_conveyor_module`,
            })
            .id(`start:shaped/${tier}_electromagnetic_separator`)
            .addMaterialInfo();

        event.recipes.gtceu
            .shaped(Item.of(`gtceu:${tier}_extractor`), ['GIG', 'SHU', 'CIC'], {
                I: `#gtceu:circuits/${tier}`,
                H: `gtceu:${tier}_machine_hull`,
                C: `gtceu:${cable}_single_cable`,
                G: `${glass}`,
                U: `gtceu:${tier}_electric_pump`,
                S: `gtceu:${tier}_electric_piston`,
            })
            .id(`start:shaped/${tier}_extractor`)
            .addMaterialInfo();

        event.recipes.gtceu
            .shaped(Item.of(`gtceu:${tier}_extruder`), ['WWI', 'SHE', 'WWI'], {
                I: `#gtceu:circuits/${tier}`,
                H: `gtceu:${tier}_machine_hull`,
                S: `gtceu:${tier}_electric_piston`,
                W: `gtceu:${wire}_quadruple_wire`,
                E: `gtceu:${pipeMaterial}_normal_fluid_pipe`,
            })
            .id(`start:shaped/${tier}_extruder`)
            .addMaterialInfo();

        event.recipes.gtceu
            .shaped(Item.of(`gtceu:${tier}_fermenter`), ['CUC', 'GHG', 'CIC'], {
                I: `#gtceu:circuits/${tier}`,
                H: `gtceu:${tier}_machine_hull`,
                C: `gtceu:${cable}_single_cable`,
                G: `${glass}`,
                U: `gtceu:${tier}_electric_pump`,
            })
            .id(`start:shaped/${tier}_fermenter`)
            .addMaterialInfo();

        event.recipes.gtceu
            .shaped(Item.of(`gtceu:${tier}_fluid_heater`), ['WGW', 'UHU', 'CIC'], {
                I: `#gtceu:circuits/${tier}`,
                H: `gtceu:${tier}_machine_hull`,
                C: `gtceu:${cable}_single_cable`,
                G: `${glass}`,
                U: `gtceu:${tier}_electric_pump`,
                W: `gtceu:${wire}_quadruple_wire`,
            })
            .id(`start:shaped/${tier}_fluid_heater`)
            .addMaterialInfo();

        event.recipes.gtceu
            .shaped(Item.of(`gtceu:${tier}_fluid_solidifier`), ['UGU', 'CHC', 'IRI'], {
                I: `#gtceu:circuits/${tier}`,
                H: `gtceu:${tier}_machine_hull`,
                C: `gtceu:${cable}_single_cable`,
                G: `${glass}`,
                R: 'minecraft:chest',
                U: `gtceu:${tier}_electric_pump`,
            })
            .id(`start:shaped/${tier}_fluid_solidifier`)
            .addMaterialInfo();

        event.recipes.gtceu
            .shaped(Item.of(`gtceu:${tier}_forge_hammer`), ['CSC', 'IHI', 'CRC'], {
                I: `#gtceu:circuits/${tier}`,
                H: `gtceu:${tier}_machine_hull`,
                C: `gtceu:${cable}_single_cable`,
                S: `gtceu:${tier}_electric_piston`,
                R: 'minecraft:anvil',
            })
            .id(`start:shaped/${tier}_forge_hammer`)
            .addMaterialInfo();

        event.recipes.gtceu
            .shaped(Item.of(`gtceu:${tier}_forming_press`), ['CSC', 'IHI', 'CSC'], {
                I: `#gtceu:circuits/${tier}`,
                H: `gtceu:${tier}_machine_hull`,
                C: `gtceu:${cable}_single_cable`,
                S: `gtceu:${tier}_electric_piston`,
            })
            .id(`start:shaped/${tier}_forming_press`)
            .addMaterialInfo();

        event.recipes.gtceu
            .shaped(Item.of(`gtceu:${tier}_lathe`), ['CIC', 'MHR', 'ICS'], {
                I: `#gtceu:circuits/${tier}`,
                H: `gtceu:${tier}_machine_hull`,
                C: `gtceu:${cable}_single_cable`,
                S: `gtceu:${tier}_electric_piston`,
                M: `gtceu:${tier}_electric_motor`,
                R: 'gtceu:tungsten_grinding_head',
            })
            .id(`start:shaped/${tier}_lathe`)
            .addMaterialInfo();

        event.recipes.gtceu
            .shaped(Item.of(`gtceu:${tier}_scanner`), ['IEI', 'CHC', 'ISI'], {
                I: `#gtceu:circuits/${tier0}`,
                H: `gtceu:${tier}_machine_hull`,
                C: `gtceu:${cable}_single_cable`,
                E: `gtceu:${tier}_emitter`,
                S: `gtceu:${tier}_sensor`,
            })
            .id(`start:shaped/${tier}_scanner`)
            .addMaterialInfo();

        event.recipes.gtceu
            .shaped(Item.of(`gtceu:${tier}_mixer`), ['GRG', 'GMG', 'IHI'], {
                I: `#gtceu:circuits/${tier}`,
                H: `gtceu:${tier}_machine_hull`,
                G: `${glass}`,
                R: `gtceu:${tierMaterial}_rotor`,
                M: `gtceu:${tier}_electric_motor`,
            })
            .id(`start:shaped/${tier}_mixer`)
            .addMaterialInfo();

        event.recipes.gtceu
            .shaped(Item.of(`gtceu:${tier}_ore_washer`), ['RGR', 'IMI', 'CHC'], {
                I: `#gtceu:circuits/${tier}`,
                H: `gtceu:${tier}_machine_hull`,
                C: `gtceu:${cable}_single_cable`,
                G: `${glass}`,
                R: `gtceu:${tierMaterial}_rotor`,
                M: `gtceu:${tier}_electric_motor`,
            })
            .id(`start:shaped/${tier}_ore_washer`)
            .addMaterialInfo();

        event.recipes.gtceu
            .shaped(Item.of(`gtceu:${tier}_packer`), ['RIR', 'AHV', 'CIC'], {
                I: `#gtceu:circuits/${tier}`,
                H: `gtceu:${tier}_machine_hull`,
                C: `gtceu:${cable}_single_cable`,
                A: `gtceu:${tier}_robot_arm`,
                V: `gtceu:${tier}_conveyor_module`,
                R: 'minecraft:chest',
            })
            .id(`start:shaped/${tier}_packer`)
            .addMaterialInfo();

        event.recipes.gtceu
            .shaped(Item.of(`gtceu:${tier}_polarizer`), ['WGW', 'CHC', 'WGW'], {
                H: `gtceu:${tier}_machine_hull`,
                C: `gtceu:${cable}_single_cable`,
                G: `gtceu:${primMagnet}_rod`,
                W: `gtceu:${cable}_octal_wire`,
            })
            .id(`start:shaped/${tier}_polarizer`)
            .addMaterialInfo();

        event.recipes.gtceu
            .shaped(Item.of(`gtceu:${tier}_laser_engraver`), ['SES', 'IHI', 'CIC'], {
                I: `#gtceu:circuits/${tier}`,
                H: `gtceu:${tier}_machine_hull`,
                C: `gtceu:${cable}_single_cable`,
                E: `gtceu:${tier}_emitter`,
                S: `gtceu:${tier}_electric_piston`,
            })
            .id(`start:shaped/${tier}_laser_engraver`)
            .addMaterialInfo();

        event.recipes.gtceu
            .shaped(Item.of(`gtceu:${tier}_sifter`), ['CFC', 'SHS', 'IFI'], {
                I: `#gtceu:circuits/${tier}`,
                H: `gtceu:${tier}_machine_hull`,
                C: `gtceu:${cable}_single_cable`,
                F: 'gtceu:item_filter',
                S: `gtceu:${tier}_electric_piston`,
            })
            .id(`start:shaped/${tier}_sifter`)
            .addMaterialInfo();

        event.recipes.gtceu
            .shaped(Item.of(`gtceu:${tier}_thermal_centrifuge`), ['IMI', 'WHW', 'CMC'], {
                I: `#gtceu:circuits/${tier}`,
                H: `gtceu:${tier}_machine_hull`,
                C: `gtceu:${cable}_single_cable`,
                M: `gtceu:${tier}_electric_motor`,
                W: `gtceu:${wire}_quadruple_wire`,
            })
            .id(`start:shaped/${tier}_thermal_centrifuge`)
            .addMaterialInfo();

        event.recipes.gtceu
            .shaped(Item.of(`gtceu:${tier}_wiremill`), ['MCM', 'IHI', 'MCM'], {
                I: `#gtceu:circuits/${tier}`,
                H: `gtceu:${tier}_machine_hull`,
                C: `gtceu:${cable}_single_cable`,
                M: `gtceu:${tier}_electric_motor`,
            })
            .id(`start:shaped/${tier}_wiremill`)
            .addMaterialInfo();

        event.recipes.gtceu
            .shaped(Item.of(`gtceu:${tier}_circuit_assembler`), ['AIE', 'VHV', 'CIC'], {
                I: `#gtceu:circuits/${tier0}`,
                H: `gtceu:${tier}_machine_hull`,
                C: `gtceu:${cable}_single_cable`,
                A: `gtceu:${tier}_robot_arm`,
                V: `gtceu:${tier}_conveyor_module`,
                E: `gtceu:${tier}_emitter`,
            })
            .id(`start:shaped/${tier}_circuit_assembler`)
            .addMaterialInfo();

        event.recipes.gtceu
            .shaped(Item.of(`gtceu:${tier}_macerator`), ['SMR', 'CCH', 'IIC'], {
                I: `#gtceu:circuits/${tier}`,
                H: `gtceu:${tier}_machine_hull`,
                C: `gtceu:${cable}_single_cable`,
                S: `gtceu:${tier}_electric_piston`,
                M: `gtceu:${tier}_electric_motor`,
                R: 'gtceu:tungsten_grinding_head',
            })
            .id(`start:shaped/${tier}_macerator`)
            .addMaterialInfo();

        event.recipes.gtceu
            .shaped(Item.of(`gtceu:${tier}_gas_collector`), ['BFB', 'UHU', 'BIB'], {
                I: `#gtceu:circuits/${tier}`,
                H: `gtceu:${tier}_machine_hull`,
                U: `gtceu:${tier}_electric_pump`,
                F: 'gtceu:fluid_filter',
                B: 'minecraft:iron_bars',
            })
            .id(`start:shaped/${tier}_gas_collector`)
            .addMaterialInfo();

        event.recipes.gtceu
            .shaped(Item.of(`gtceu:${tier}_rock_crusher`), ['SMR', 'CHC', 'GGG'], {
                H: `gtceu:${tier}_machine_hull`,
                C: `gtceu:${cable}_single_cable`,
                S: `gtceu:${tier}_electric_piston`,
                M: `gtceu:${tier}_electric_motor`,
                R: 'gtceu:tungsten_grinding_head',
                G: `${glass}`,
            })
            .id(`start:shaped/${tier}_rock_crusher`)
            .addMaterialInfo();

        event.recipes.gtceu
            .shaped(Item.of(`gtceu:${tier}_muffler_hatch`), ['HM', 'PR'], {
                H: `gtceu:${tier}_machine_hull`,
                M: `gtceu:${tier}_electric_motor`,
                P: `gtceu:${pipeMaterial}_normal_fluid_pipe`,
                R: `gtceu:${tierMaterial}_rotor`,
            })
            .id(`start:shaped/${tier}_muffler_hatch`)
            .addMaterialInfo();

        [
            { size: '4x', cableThickness: 'quadruple' },
            { size: '8x', cableThickness: 'octal' },
            { size: '16x', cableThickness: 'hex' },
        ].forEach((bufferData) => {
            event.recipes.gtceu
                .shaped(Item.of(`gtceu:${tier}_battery_buffer_${bufferData.size}`), ['   ', 'WCW', 'WHW'], {
                    H: `gtceu:${tier}_machine_hull`,
                    W: `gtceu:${wire}_${bufferData.cableThickness}_wire`,
                    C: 'minecraft:chest',
                })
                .id(`start:shaped/${tier}_battery_buffer_${bufferData.size}`)
                .addMaterialInfo();
        });

        event.recipes.gtceu
            .shaped(Item.of(`gtceu:${tier}_charger_4x`), ['WRW', 'WHW', 'CIC'], {
                H: `gtceu:${tier}_machine_hull`,
                W: `gtceu:${wire}_quadruple_wire`,
                R: 'minecraft:chest',
                I: `#gtceu:circuits/${tier}`,
                C: `gtceu:${cable}_single_cable`,
            })
            .id(`start:shaped/${tier}_charger_4x`)
            .addMaterialInfo();

        [
            { type: 'input', powerTr: 'single_cable' },
            { type: 'output', powerTr: 'spring' },
        ].forEach((energyIOData) => {
            const { type, powerTr } = energyIOData;

            event.recipes.gtceu
                .assembly_line(id(`${tier}_energy_${type}_hatch`))
                .itemInputs(
                    `gtceu:${tier}_machine_hull`,
                    `4x gtceu:${cable}_${powerTr}`,
                    `2x ${chip}_chip`,
                    `#gtceu:circuits/${tier}`,
                    `2x kubejs:${tier}_voltage_coil`
                )
                .inputFluids(
                    `gtceu:sodium_potassium ${math * 4000 + 12000}`,
                    `gtceu:indium_tin_lead_cadmium_soldering_alloy ${1440 * Math.pow(2, math)}`
                )
                .itemOutputs(`gtceu:${tier}_energy_${type}_hatch`)
                .stationResearch((researchRecipeBuilder) =>
                    researchRecipeBuilder
                        .researchStack(Item.of(`gtceu:${tier1}_energy_${type}_hatch`))
                        .EUt(122880 * Math.pow(4, math))
                        .CWUt(math * 64 + 64)
                )
                .duration(800)
                .EUt(491520 * Math.pow(4, math))
                .addMaterialInfo(true, true);
        });

        //multi-amp and laser in large_energy_hatches_file
    }

    postUVMachines('uhv');
    postUVMachines('uev');
    postUVMachines('uiv');

    /**
     * @param {'luv' | 'zpm' | 'uv'} tierKey
     */
    function luvUVMachines(tierKey) {
        const tierData = components[tierKey];

        const {
            tiers: { tier },
            materials: { tierMaterial, plastic, cable },
        } = tierData;

        event.remove({ output: `gtceu:${tier}_machine_hull` });

        event.recipes.gtceu
            .shaped(Item.of(`gtceu:${tier}_machine_hull`), ['   ', 'LPL', 'CMC'], {
                P: `gtceu:${tierMaterial}_plate`,
                L: `gtceu:${plastic}_plate`,
                C: `gtceu:${cable}_single_cable`,
                M: `gtceu:${tier}_machine_casing`,
            })
            .id(`start:shaped/${tier}_machine_hull`);

        event.recipes.gtceu
            .assembler(id(`${tier}_machine_hull`))
            .itemInputs(`gtceu:${tier}_machine_casing`, `2x gtceu:${cable}_single_cable`)
            .inputFluids(`gtceu:${plastic} 288`)
            .itemOutputs(`gtceu:${tier}_machine_hull`)
            .duration(50)
            .EUt(16)
            .addMaterialInfo(true);
    }

    luvUVMachines('luv');
    luvUVMachines('zpm');
    luvUVMachines('uv');
});
