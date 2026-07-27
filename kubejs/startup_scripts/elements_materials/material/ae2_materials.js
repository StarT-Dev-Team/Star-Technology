GTCEuStartupEvents.registry('gtceu:material', (event) => {
    const MH = global.materialHelpers(event);

    const { lens, noDecomp, plates, rod, frame, foil } = FLAGS;

    MH.elemFluid('skystone', 'skystone', 0x414445, []);

    event.create('fluix').element(GTElements.get('fluix')).flags(lens).iconSet('fluix');

    MH.compIngotLiquid(
        'sky_steel',
        ['1x skystone', '2x steel'],
        0xccffcc,
        ICONSETS.metallic,
        [1600, 'low', GTValues.VA[MV], 400],
        [noDecomp, plates, rod, frame]
    );

    /**
     * @param {string} material
     * @param {number} color
     * @param {MaterialIconSet} icon
     */
    const skystoneAlloys = (material, color, icon) => {
        event
            .create(`${material}_skystone_alloy`)
            .ingot()
            .fluid()
            .components('1x skystone', `2x ${material}`)
            .color(color)
            .secondaryColor(0x414445)
            .iconSet(icon)
            .blastTemp(1600, 'low', GTValues.VA[MV], 200)
            .flags(noDecomp, plates);
    };

    skystoneAlloys('gold', 0xcfbe38, 'METALLIC');
    skystoneAlloys('diamond', 0x9bd6d8, 'SHINY');
    skystoneAlloys('certus_quartz', 0x67d6db, 'DULL');

    MH.compIngotLiquid(
        'fluix_steel',
        ['1x fluix', '2x steel'],
        0x8f5ccb,
        ICONSETS.metallic,
        [1900, 'mid', GTValues.VA[MV], 400],
        [noDecomp, plates, rod, frame, foil]
    );

    /**
     * @param {string} material
     * @param {number} color
     * @param {MaterialIconSet} icon
     */
    const netheriteSkystoneAlloys = (material, color, icon) => {
        event
            .create(`netherite_${material}_skystone_alloy`)
            .ingot()
            .fluid()
            .components('4x netherite', '2x diamond_skystone_alloy', `${material}_skystone_alloy`)
            .color(color)
            .secondaryColor(0x0d0702)
            .iconSet(icon)
            .flags(noDecomp, plates, rod, frame)
            .blastTemp(4000, 'high', GTValues.VA[IV], 800);
    };

    netheriteSkystoneAlloys('gold', 0x978b2d, ICONSETS.metallic);
    netheriteSkystoneAlloys('certus_quartz', 0x396a6c, ICONSETS.dull);
});
