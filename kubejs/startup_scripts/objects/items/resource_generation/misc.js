StartupEvents.registry('item', (event) => {
    // === Mycelium Leather ===
    event.create('compressed_mycelium').texture('kubejs:item/resource_gen/misc/compressed_mycelium');

    event.create('smoked_mycelium').texture('kubejs:item/resource_gen/misc/smoked_mycelium');

    event.create('mycelium_growth').texture('kubejs:item/resource_gen/misc/mycelium_growth');

    // === Meshes === ; Might be moved to a material Flag
    event
        .create('ancient_netherite_reinforced_mesh')
        .texture('kubejs:item/resource_gen/misc/ancient_netherite_reinforced_mesh');

    event.create('netherite_reinforced_mesh').texture('kubejs:item/resource_gen/misc/netherite_reinforced_mesh');

    event.create('voidic_reinforced_mesh').texture('kubejs:item/resource_gen/misc/voidic_reinforced_mesh');

    // === Fishing ===
    event.create('dried_silkworm_dough').texture('kubejs:item/resource_gen/misc/dried_silkworm_dough');

    event.create('silkworm_oil_pellet').texture('kubejs:item/resource_gen/misc/silkworm_oil_pellet');
});
