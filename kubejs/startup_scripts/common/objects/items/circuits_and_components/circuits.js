StartupEvents.registry('item', (event) => {
    // === Runic Circuits ===
    event
        .create('runic_circuit_board')
        .tooltip(Text.translate('item.kubejs.runic_circuit_board.tooltip'))
        .texture('kubejs:item/circuits_and_components/circuits/runic/circuit_board');

    event
        .create('runic_printed_circuit_board')
        .tooltip(Text.translate('item.kubejs.runic_printed_circuit_board.tooltip'))
        .texture('kubejs:item/circuits_and_components/circuits/runic/printed_circuit_board');

    event
        .create('runic_convergence_processing_unit')
        .tooltip(Text.translate('item.kubejs.runic_convergence_processing_unit.tooltip'))
        .texture('kubejs:item/circuits_and_components/circuits/runic/processing_unit');

    event
        .create('runic_processor')
        .tooltip(Text.translate('item.kubejs.runic_processor.tooltip.0'))
        .tooltip(Text.translate('item.kubejs.runic_processor.tooltip.1'))
        .texture('kubejs:item/circuits_and_components/circuits/runic/processor');

    event
        .create('runic_processor_assembly')
        .tooltip(Text.translate('item.kubejs.runic_processor_assembly.tooltip.0'))
        .tooltip(Text.translate('item.kubejs.runic_processor_assembly.tooltip.1'))
        .texture('kubejs:item/circuits_and_components/circuits/runic/processor_assembly');

    event
        .create('runic_processor_computer')
        .tooltip(Text.translate('item.kubejs.runic_processor_computer.tooltip.0'))
        .tooltip(Text.translate('item.kubejs.runic_processor_computer.tooltip.1'))
        .texture('kubejs:item/circuits_and_components/circuits/runic/processor_computer');

    event
        .create('runic_processor_mainframe')
        .tooltip(Text.translate('item.kubejs.runic_processor_mainframe.tooltip.0'))
        .tooltip(Text.translate('item.kubejs.runic_processor_mainframe.tooltip.1'))
        .texture('kubejs:item/circuits_and_components/circuits/runic/processor_mainframe');

    // === Draconic Circuits ===
    event
        .create('draconic_circuit_board')
        .tooltip(Text.translate('item.kubejs.draconic_circuit_board.tooltip'))
        .texture('kubejs:item/circuits_and_components/circuits/draconic/circuit_board');

    event
        .create('draconic_printed_circuit_board')
        .tooltip(Text.translate('item.kubejs.draconic_printed_circuit_board.tooltip'))
        .texture('kubejs:item/circuits_and_components/circuits/draconic/printed_circuit_board');

    event
        .create('draconic_processing_unit')
        .tooltip(Text.translate('item.kubejs.draconic_processing_unit.tooltip'))
        .texture('kubejs:item/circuits_and_components/circuits/draconic/processing_unit');

    event
        .create('draconic_microchip_processor')
        .tooltip(Text.translate('item.kubejs.draconic_microchip_processor.tooltip.0'))
        .tooltip(Text.translate('item.kubejs.draconic_microchip_processor.tooltip.1'))
        .texture('kubejs:item/circuits_and_components/circuits/draconic/microchip_processor');

    event
        .create('draconic_processor')
        .tooltip(Text.translate('item.kubejs.draconic_processor.tooltip.0'))
        .tooltip(Text.translate('item.kubejs.draconic_processor.tooltip.1'))
        .texture('kubejs:item/circuits_and_components/circuits/draconic/processor');

    event
        .create('draconic_processor_assembly')
        .tooltip(Text.translate('item.kubejs.draconic_processor_assembly.tooltip.0'))
        .tooltip(Text.translate('item.kubejs.draconic_processor_assembly.tooltip.1'))
        .texture('kubejs:item/circuits_and_components/circuits/draconic/processor_assembly');

    event
        .create('draconic_processor_computer')
        .tooltip(Text.translate('item.kubejs.draconic_processor_computer.tooltip.0'))
        .tooltip(Text.translate('item.kubejs.draconic_processor_computer.tooltip.1'))
        .texture('kubejs:item/circuits_and_components/circuits/draconic/processor_computer');

    event
        .create('draconic_processor_mainframe')
        .tooltip(Text.translate('item.kubejs.draconic_processor_mainframe.tooltip.0'))
        .tooltip(Text.translate('item.kubejs.draconic_processor_mainframe.tooltip.1'))
        .texture('kubejs:item/circuits_and_components/circuits/draconic/processor_mainframe');

    // === Abyssal Circuits ===
    event
        .create('abyssal_circuit_board')
        .tooltip(Text.translate('item.kubejs.abyssal_circuit_board.tooltip'))
        .texture('kubejs:item/circuits_and_components/circuits/abyssal/circuit_board');

    event
        .create('abyssal_printed_circuit_board')
        .tooltip(Text.translate('item.kubejs.abyssal_printed_circuit_board.tooltip'))
        .texture('kubejs:item/circuits_and_components/circuits/abyssal/printed_circuit_board');

    event
        .create('abyssal_processing_unit')
        .tooltip(Text.translate('item.kubejs.abyssal_processing_unit.tooltip'))
        .texture('kubejs:item/circuits_and_components/circuits/abyssal/processing_unit');

    event
        .create('abyssal_processor')
        .tooltip(Text.translate('item.kubejs.abyssal_processor.tooltip.0'))
        .tooltip(Text.translate('item.kubejs.abyssal_processor.tooltip.1'))
        .texture('kubejs:item/circuits_and_components/circuits/abyssal/processor');

    event
        .create('abyssal_processor_assembly')
        .tooltip(Text.translate('item.kubejs.abyssal_processor_assembly.tooltip.0'))
        .tooltip(Text.translate('item.kubejs.abyssal_processor_assembly.tooltip.1'))
        .texture('kubejs:item/circuits_and_components/circuits/abyssal/processor_assembly');

    event
        .create('abyssal_processor_computer')
        .tooltip(Text.translate('item.kubejs.abyssal_processor_computer.tooltip.0'))
        .tooltip(Text.translate('item.kubejs.abyssal_processor_computer.tooltip.1'))
        .texture('kubejs:item/circuits_and_components/circuits/abyssal/processor_computer');

    event
        .create('abyssal_processor_mainframe')
        .tooltip(Text.translate('item.kubejs.abyssal_processor_mainframe.tooltip.0'))
        .tooltip(Text.translate('item.kubejs.abyssal_processor_mainframe.tooltip.1'))
        .textureJson({
            layer0: 'kubejs:item/circuits_and_components/circuits/abyssal/processor_mainframe_layer_0',
            layer1: 'kubejs:item/circuits_and_components/circuits/abyssal/processor_mainframe_layer_1',
        });
});
