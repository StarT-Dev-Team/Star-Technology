ServerEvents.recipes((event) => {
    const id = global.id;

    const components = global.componentMaterials;

    /** @type {const} */ (['lv', 'mv', 'hv', 'ev', 'iv', 'luv', 'zpm', 'uv', 'uhv', 'uev', 'uiv']).forEach(
        (voltage) => {
            const tierComponents = components[voltage].materials;

            event.recipes.gtceu
                .shaped(`start_core:${voltage}_gcrop_breeder`, ['ABC', 'DEC', 'AFA'], {
                    A: `gtceu:${tierComponents.cable}_single_cable`,
                    B: `gtceu:${voltage}_electric_motor`,
                    C: `#gtceu:circuits/${voltage}`,
                    D: `gtceu:${voltage}_robot_arm`,
                    E: `gtceu:${voltage}_machine_hull`,
                    F: `gtceu:${voltage}_electric_conveyor`,
                })
                .id(id(`shaped/${voltage}_gcrop_breeder`))
                .addMaterialInfo();

            event.recipes.gtceu
                .shaped(`start_core:${voltage}_gcrop_mutator`, ['ABA', 'ACD', 'EFG'], {
                    A: `gtceu:${tierComponents.cable}_single_cable`,
                    B: `gtceu:${voltage}_field_generator`,
                    C: `gtceu:${voltage}_machine_hull`,
                    D: `gtceu:${voltage}_electric_pump`,
                    E: `gtceu:${voltage}_electric_motor`,
                    F: `#gtceu:circuits/${voltage}`,
                    G: `gtceu:${voltage}_electric_conveyor`,
                })
                .id(id(`shaped/${voltage}_gcrop_mutator`))
                .addMaterialInfo();

            event.recipes.gtceu
                .shaped(`start_core:${voltage}_gcrop_harvester`, ['AAB', 'CDC', 'BEB'], {
                    A: `#gtceu:circuits/${voltage}`,
                    B: `gtceu:${tierComponents.cable}_single_cable`,
                    C: `gtceu:${voltage}_robot_arm`,
                    D: `gtceu:${voltage}_machine_hull`,
                    E: `gtceu:${voltage}_electric_conveyor`,
                })
                .id(id(`shaped/${voltage}_gcrop_harvester`))
                .addMaterialInfo();
        }
    );

    event.recipes.gtceu
        .shaped('start_core:gcrop_breeder', ['ABC', 'ADE', 'FAF'], {
            A: 'gtceu:double_tantalum_plate',
            B: 'gtceu:aluminium_single_cable',
            C: 'gtceu:ev_robot_arm',
            D: 'start_core:ev_gcrop_breeder',
            E: '#gtceu:circuits/iv',
            F: 'gtceu:double_titanium_tungsten_carbide_plate',
        })
        .id(id('shaped/gcrop_breeder'))
        .addMaterialInfo();

    event.recipes.gtceu
        .shaped('start_core:gcrop_mutator', ['ABA', 'CDE', 'AFA'], {
            A: 'gtceu:double_tungsten_steel_plate',
            B: 'gtceu:ev_sensor',
            C: 'gtceu:ev_conveyor_module',
            D: 'start_core:ev_grcop_mutator',
            E: 'gtceu:ev_electric_pump',
            F: '#gtceu:circuits/iv',
        })
        .id(id('shaped/gcrop_mutator'))
        .addMaterialInfo();

    event.recipes.gtceu
        .shaped('start_core:gcrop_harvester', ['ABC', 'DEF', 'AGG'], {
            A: '#gtceu:circuits/iv',
            B: 'gtceu:ev_field_generator',
            C: 'gtceu:ev_emitter',
            D: 'gtceu:ev_robot_arm',
            E: 'start_core:ev_gcrop_harvester',
            F: 'gtceu:aluminium_single_cable',
        })
        .id(id('shaped/gcrop_harvester'))
        .addMaterialInfo();
});
