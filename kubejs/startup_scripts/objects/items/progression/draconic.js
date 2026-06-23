StartupEvents.registry('item', (event) => {
    // === UEV/UIV Component Catalyst ===
    event
        .create('helish_star')
        .tooltip(Text.translate('item.kubejs.helish_star.tooltip'))
        .texture('kubejs:item/progression/draconic/helish_star');

    event.create('dragonic_eye').tooltip(Text.translate('item.kubejs.dragonic_eye.tooltip')).textureJson({
        layer0: 'kubejs:item/progression/draconic/dragonic_eye',
        layer1: 'kubejs:item/progression/draconic/dragonic_eye_overlay',
    });

    // === Hellforge Catalyst ===
    event.create('infernal_catalyst').texture('kubejs:item/progression/draconic/infernal_catalyst');

    event.create('abyssal_catalyst').texture('kubejs:item/progression/draconic/abyssal_catalyst');

    event.create('ascendant_catalyst').texture('kubejs:item/progression/draconic/ascendant_catalyst');

    // === End ===
    event.create('true_absolute_chorus').texture('kubejs:item/progression/draconic/true_absolute_chorus').glow(true);

    event
        .create('abyssal_inductor')
        .tooltip(Text.translate('item.kubejs.abyssal_inductor.tooltip'))
        .texture('kubejs:item/progression/draconic/abyssal_inductor');

    // === Abyss Harvesting ===
    event.create('saturation_core_1').texture('kubejs:item/progression/draconic/saturation_core_1');

    event.create('saturation_core_2').texture('kubejs:item/progression/draconic/saturation_core_2');

    event.create('saturation_core_3').texture('kubejs:item/progression/draconic/saturation_core_3');

    // === Threading ===
    event
        .create('prismalic_helix_core')
        .tooltip(Text.translate('item.kubejs.prismalic_helix_core.tooltip'))
        .texture('kubejs:item/progression/draconic/prismalic_helix_core');

    event
        .create('prisma_helical_nucleus')
        .tooltip(Text.translate('item.kubejs.prisma_helical_nucleus.tooltip'))
        .texture('kubejs:item/progression/draconic/prisma_helical_nucleus');
});
