StartupEvents.registry('item', (event) => {
    // === Living SMDs ===
    event
        .create('living_smd_transistor')
        .tooltip(Text.translate('item.kubejs.living_smd.tooltip'))
        .texture('kubejs:item/circuits_and_components/circuit_components/living_smds/transistor');

    event
        .create('living_smd_resistor')
        .tooltip(Text.translate('item.kubejs.living_smd.tooltip'))
        .texture('kubejs:item/circuits_and_components/circuit_components/living_smds/resistor');

    event
        .create('living_smd_capacitor')
        .tooltip(Text.translate('item.kubejs.living_smd.tooltip'))
        .texture('kubejs:item/circuits_and_components/circuit_components/living_smds/capacitor');

    event
        .create('living_smd_diode')
        .tooltip(Text.translate('item.kubejs.living_smd.tooltip'))
        .texture('kubejs:item/circuits_and_components/circuit_components/living_smds/diode');

    event
        .create('living_smd_inductor')
        .tooltip(Text.translate('item.kubejs.living_smd.tooltip'))
        .texture('kubejs:item/circuits_and_components/circuit_components/living_smds/inductor');

    // === Draconic QMDs ===
    event
        .create('draconic_qmd_transistor')
        .tooltip(Text.translate('item.kubejs.draconic_qmd.tooltip'))
        .texture('kubejs:item/circuits_and_components/circuit_components/draconic_qmds/transistor');

    event
        .create('draconic_qmd_resistor')
        .tooltip(Text.translate('item.kubejs.draconic_qmd.tooltip'))
        .texture('kubejs:item/circuits_and_components/circuit_components/draconic_qmds/resistor');

    event
        .create('draconic_qmd_capacitor')
        .tooltip(Text.translate('item.kubejs.draconic_qmd.tooltip'))
        .texture('kubejs:item/circuits_and_components/circuit_components/draconic_qmds/capacitor');

    event
        .create('draconic_qmd_diode')
        .tooltip(Text.translate('item.kubejs.draconic_qmd.tooltip'))
        .texture('kubejs:item/circuits_and_components/circuit_components/draconic_qmds/diode');

    event
        .create('draconic_qmd_inductor')
        .tooltip(Text.translate('item.kubejs.draconic_qmd.tooltip'))
        .texture('kubejs:item/circuits_and_components/circuit_components/draconic_qmds/inductor');
});
