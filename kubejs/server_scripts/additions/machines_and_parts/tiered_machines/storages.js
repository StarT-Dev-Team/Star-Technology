ServerEvents.recipes((event) => {
    const id = global.id;

    // UHV Containers
    event
        .shaped('gtceu:uhv_quantum_chest', ['CPC', 'PHP', 'CFC'], {
            C: '#gtceu:circuits/uhv',
            P: 'gtceu:dense_neutronium_plate',
            H: 'gtceu:uhv_machine_hull',
            F: 'gtceu:zpm_field_generator',
        })
        .id(id('uhv_quantum_chest'));

    event
        .shaped('gtceu:uhv_quantum_tank', ['CFC', 'PHP', 'CMC'], {
            C: '#gtceu:circuits/uhv',
            P: 'gtceu:dense_neutronium_plate',
            H: 'gtceu:uhv_hermetic_casing',
            F: 'gtceu:zpm_field_generator',
            M: 'gtceu:uhv_electric_pump',
        })
        .id(id('uhv_quantum_tank'));
});
