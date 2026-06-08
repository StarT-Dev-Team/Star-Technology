StartupEvents.registry('item', (event) => {
    ['basic', 'advanced', 'complex', 'reinforced', 'borealic', 'dragonic', 'prismalic'].forEach((reflector) => {
        event
            .create(`${reflector}_neutron_reflector`)
            .texture(`kubejs:item/progression/neutron_reflector/${reflector}`)
            .tooltip(Text.translate(`item.kubejs.${reflector}_neutron_reflector.tooltip`));
    });
});
