
global.with_projectred(() => {
ServerEvents.recipes(event => {

    const core = (id) => `projectred_core:${id}`;
    const transmission = (id) => `projectred_transmission:${id}`;

    ['electrotine_generator', 'red_ingot', 'electrotine_ingot', 'sand_coal_comp', 'red_iron_comp', 'electrotine_iron_comp', 'boule', 'silicon', 'red_silicon_comp',
        'glow_silicon_comp', 'electrotine_silicon_comp', 'infused_silicon', 'energized_silicon', 'electrotine_silicon', 'copper_coil', 'iron_coil', 'gold_coil', 'motor',
        'woven_cloth', 'sail', 'draw_plate', 'multimeter'
    ].forEach(item => {
        event.remove({output: core(item)});
    });

    event.replaceInput({id: core('silicon_chip')}, core('infused_silicon'), 'gtceu:fine_red_alloy_wire');
    event.replaceInput({id: core('energized_silicon_chip')}, core('energized_silicon'), 'minecraft:glowstone_dust');
    event.replaceInput({id: transmission('low_load_power_wire')}, core('electrotine_ingot'), 'gtceu:blue_alloy_ingot');

});

ServerEvents.tags('item', event => {

    event.remove('forge:ingots/red_alloy', 'projectred_core:red_ingot');
    event.remove('forge:ingots/electrotine', 'projectred_core:electrotine_ingot');
    event.remove('forge:dusts/electrotine', 'projectred_core:electrotine_dust');
    event.add('c:logic_gates', /projectred_integration:.*_gate/);

});
});