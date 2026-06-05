StartupEvents.registry('item', (event) => {
    event.create('crystalline_akreyrium').texture('kubejs:item/resource_gen/lines/akreyrium/crystalline_akreyrium');

    event.create('amorphous_akreyrium').texture('kubejs:item/resource_gen/lines/akreyrium/amorphous_akreyrium');

    event
        .create('blank_injection_catalyst')
        .texture('kubejs:item/resource_gen/lines/akreyrium/blank_injection_catalyst');

    event
        .create('electron_injection_catalyst')
        .texture('kubejs:item/resource_gen/lines/akreyrium/electron_injection_catalyst');

    event.create('tau_injection_catalyst').texture('kubejs:item/resource_gen/lines/akreyrium/tau_injection_catalyst');

    event.create('aspect_of_weight').texture('kubejs:item/resource_gen/lines/akreyrium/aspect_of_weight');

    event.create('muon_injection_catalyst').texture('kubejs:item/resource_gen/lines/akreyrium/muon_injection_catalyst');

    event
        .create('damaged_injection_catalyst')
        .texture('kubejs:item/resource_gen/lines/akreyrium/damaged_injection_catalyst');

    event
        .create('leptonic_akreyrium_catalyst')
        .texture('kubejs:item/resource_gen/lines/akreyrium/leptonic_akreyrium_catalyst');
});
