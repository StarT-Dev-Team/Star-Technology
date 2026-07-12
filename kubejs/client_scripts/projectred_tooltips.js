ItemEvents.tooltip((event) => {
    /** @param {string} id */
    const integration = (id) => `projectred_integration:${id}`;
    /** @param {string} id */
    const core = (id) => `projectred_core:${id}`;
    /** @param {string} id */
    const gate = (id) => integration(`${id}_gate`);

    event.add(core('screwdriver'), Component.translatable('item.projectred_core.screwdriver.tooltip'));

    event.add(gate('or'), Component.translatable('item.projectred_integration.or_gate.tooltip'));
    event.add(gate('nor'), Component.translatable('item.projectred_integration.nor_gate.tooltip'));
    event.add(gate('not'), Component.translatable('item.projectred_integration.not_gate.tooltip'));
    event.add(gate('and'), Component.translatable('item.projectred_integration.and_gate.tooltip'));
    event.add(gate('nand'), Component.translatable('item.projectred_integration.nand_gate.tooltip'));
    event.add(gate('xor'), Component.translatable('item.projectred_integration.xor_gate.tooltip'));
    event.add(gate('xnor'), Component.translatable('item.projectred_integration.xnor_gate.tooltip'));

    event.add(gate('buffer'), Component.translatable('item.projectred_integration.buffer_gate.tooltip'));
    event.add(gate('multiplexer'), Component.translatable('item.projectred_integration.multiplexer_gate.tooltip'));
    event.add(gate('pulse'), Component.translatable('item.projectred_integration.pulse_gate.tooltip'));
    event.add(gate('repeater'), Component.translatable('item.projectred_integration.repeater_gate.tooltip'));
    event.add(gate('randomizer'), Component.translatable('item.projectred_integration.randomizer_gate.tooltip'));
    event.add(gate('sr_latch'), Component.translatable('item.projectred_integration.sr_latch_gate.tooltip'));
    event.add(gate('toggle_latch'), Component.translatable('item.projectred_integration.toggle_latch_gate.tooltip'));

    event.add(
        gate('transparent_latch'),
        Component.translatable('item.projectred_integration.transparent_latch_gate.tooltip')
    );
    event.add(gate('light_sensor'), Component.translatable('item.projectred_integration.light_sensor_gate.tooltip'));
    event.add(gate('rain_sensor'), Component.translatable('item.projectred_integration.rain_sensor_gate.tooltip'));
    event.add(gate('timer'), Component.translatable('item.projectred_integration.timer_gate.tooltip'));
    event.add(gate('sequencer'), Component.translatable('item.projectred_integration.sequencer_gate.tooltip'));
    event.add(gate('counter'), Component.translatable('item.projectred_integration.counter_gate.tooltip'));
    event.add(gate('state_cell'), Component.translatable('item.projectred_integration.state_cell_gate.tooltip'));

    event.add(gate('synchronizer'), Component.translatable('item.projectred_integration.synchronizer_gate.tooltip'));
    event.add(
        gate('bus_transceiver'),
        Component.translatable('item.projectred_integration.bus_transciever_gate.tooltip')
    );
    event.add(gate('null_cell'), Component.translatable('item.projectred_integration.null_cell_gate.tooltip'));
    event.add(gate('invert_cell'), Component.translatable('item.projectred_integration.inverter_cell_gate.tooltip'));
    event.add(gate('buffer_cell'), Component.translatable('item.projectred_integration.buffer_cell_gate.tooltip'));
    event.add(gate('comparator'), Component.translatable('item.projectred_integration.comparator_gate.tooltip'));
    event.add(gate('and_cell'), Component.translatable('item.projectred_integration.and_cell_gate.tooltip'));
    event.add(
        gate('bus_randomizer'),
        Component.translatable('item.projectred_integration.bus_randomizer_gate.tooltip')
    );
    event.add(gate('bus_converter'), Component.translatable('item.projectred_integration.bus_converter_gate.tooltip'));
    event.add(
        gate('bus_input_panel'),
        Component.translatable('item.projectred_integration.bus_input_panel_gate.tooltip')
    );
    event.add(
        gate('segment_display'),
        Component.translatable('item.projectred_integration.segment_display_gate.tooltip')
    );
    event.add(
        gate('dec_randomizer'),
        Component.translatable('item.projectred_integration.dec_randomizer_gate.tooltip')
    );
    event.add(
        gate('stacking_latch'),
        Component.translatable('item.projectred_integration.stacking_latch_gate.tooltip')
    );
});
