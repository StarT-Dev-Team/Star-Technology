ServerEvents.recipes((event) => {
    const id = global.id;

    global.notHardmode(() => {
        const components = global.componentMaterials;

        ['lv', 'mv', 'hv', 'ev', 'iv', 'luv', 'zpm', 'uv', 'uhv', 'uev', 'uiv'].forEach((voltage) => {
            const tierComponents = components[voltage].materials;

            // === AE ===
            event
                .shaped(`gtceu:${voltage}_me_assembler`, ['ABC', 'DED', 'FFG'], {
                    A: `gtceu:${voltage}_emitter`,
                    B: `gtceu:${voltage}_conveyor_module`,
                    C: `#gtceu:circuits/${voltage}`,
                    D: `gtceu:${voltage}_robot_arm`,
                    E: `gtceu:${voltage}_machine_hull`,
                    F: `gtceu:${tierComponents.cable}_single_cable`,
                    G: `gtceu:${voltage}_electric_motor`,
                })
                .id(`start:shaped/${voltage}_me_assembler`);

            // === MA ===
            event
                .shaped(`gtceu:${voltage}_mystical_greenhouse`, ['CGE', 'PHP', 'cMc'], {
                    C: `#gtceu:circuits/${voltage}`,
                    G: tierComponents.glass,
                    E: `gtceu:${voltage}_emitter`,
                    P: `gtceu:${tierComponents.tierMaterial}_plate`,
                    H: `gtceu:${voltage}_machine_hull`,
                    M: `gtceu:${voltage}_electric_pump`,
                    c: `gtceu:${tierComponents.cable}_single_cable`,
                })
                .id(`start:shaped/${voltage}_mystical_greenhouse`);

            event
                .shaped(`gtceu:${voltage}_essence_burner`, ['CRE', 'GHG', 'cPc'], {
                    C: `#gtceu:circuits/${voltage}`,
                    R: `gtceu:${tierComponents.rotorMaterial}_rotor`,
                    G: tierComponents.glass,
                    E: `gtceu:${voltage}_emitter`,
                    H: `gtceu:${voltage}_machine_hull`,
                    P: `gtceu:${voltage}_electric_pump`,
                    c: `gtceu:${tierComponents.cable}_single_cable`,
                })
                .id(`start:shaped/${voltage}_essence_burner`);

            // === Pulverizer ===
            event
                .shaped(`gtceu:${voltage}_pulverizer`, ['ABC', 'DEF', 'AGH'], {
                    A: `gtceu:${tierComponents.cable}_single_cable`,
                    B: `gtceu:${voltage}_electric_piston`,
                    C: `gtceu:${voltage}_electric_motor`,
                    D: `gtceu:${tierComponents.wire}_quadruple_wire`,
                    E: `gtceu:${voltage}_machine_hull`,
                    F: tierComponents.grind,
                    G: 'minecraft:anvil',
                    H: `#gtceu:circuits/${voltage}`,
                })
                .id(`start:shaped/${voltage}_pulverizer`);
        });

        function assembler(id1, output, input, eu) {
            event.recipes.gtceu
                .assembler(id(`${id1}`))
                .itemInputs(input)
                .inputFluids('gtceu:soldering_alloy 144')
                .itemOutputs(`${output}`)
                .duration(400)
                .EUt(eu);
        }

        ['input_bus', 'output_bus', 'input_hatch', 'output_hatch'].forEach((type) => {
            assembler(
                `me_${type}`,
                `gtceu:me_${type}`,
                [`gtceu:ev_${type}`, '#gtceu:circuits/iv', 'ae2:fluix_smart_cable'],
                2048
            );
        });
    });
});
