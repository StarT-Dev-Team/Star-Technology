StartupEvents.registry('item', (event) => {
    event
        .create('uhv_voltage_coil')
        .tooltip(Text.translate('item.kubejs.uhv_voltage_coil.tooltip'))
        .texture('kubejs:item/circuits_and_components/voltage_coils/uhv_voltage_coil');

    event
        .create('uev_voltage_coil')
        .tooltip(Text.translate('item.kubejs.uev_voltage_coil.tooltip'))
        .texture('kubejs:item/circuits_and_components/voltage_coils/uev_voltage_coil');

    event
        .create('uiv_voltage_coil')
        .tooltip(Text.translate('item.kubejs.uiv_voltage_coil.tooltip'))
        .texture('kubejs:item/circuits_and_components/voltage_coils/uiv_voltage_coil');

    /*event.create('uxv_voltage_coil')
        .texture('kubejs:item/circuits_and_components/voltage_coils/uxv_voltage_coil')
        .displayName('Ultra Extreme Voltage Coil')
        .tooltip('Supreme+ Coil');
        
    event.create('opv_voltage_coil')
        .texture('kubejs:item/circuits_and_components/voltage_coils/opv_voltage_coil')
        .displayName('Overpowered Voltage Coil')
        .tooltip('Godly Coil');*/
});
