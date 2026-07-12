StartupEvents.registry('item', (event) => {
    /** @param {string} tier */
    const partTiers = (tier) => {
        event
            .create(`${tier}_computational_matrix`)
            .texture(`kubejs:item/circuits_and_components/component_part/${tier}/computational_matrix`);

        event
            .create(`${tier}_transmission_assembly`)
            .texture(`kubejs:item/circuits_and_components/component_part/${tier}/transmission_assembly`);

        event
            .create(`${tier}_precision_drive_mechanism`)
            .texture(`kubejs:item/circuits_and_components/component_part/${tier}/precision_drive_mechanism`);

        event
            .create(`${tier}_microfluidic_flow_valve`)
            .texture(`kubejs:item/circuits_and_components/component_part/${tier}/microfluidic_flow_valve`);

        event
            .create(`${tier}_super_magnetic_core`)
            .texture(`kubejs:item/circuits_and_components/component_part/${tier}/super_magnetic_core`);

        event
            .create(`${tier}_catalyst_core`)
            .texture(`kubejs:item/circuits_and_components/component_part/${tier}/catalyst_core`);

        event
            .create(`${tier}_high_strength_panel`)
            .texture(`kubejs:item/circuits_and_components/component_part/${tier}/high_strength_panel`);

        event
            .create(`${tier}_micropower_router`)
            .texture(`kubejs:item/circuits_and_components/component_part/${tier}/micropower_router`);
    };

    partTiers('ruined');
    partTiers('uhv');
    partTiers('uev');
    partTiers('uiv');
    // partTiers('uxv','e','UXV');
    // partTiers('opv','9§l','OpV');
});
