GTCEuStartupEvents.registry('gtceu:material', (event) => {
    const MH = global.materialHelpers(event);

    const { noDecomp } = FLAGS;

    MH.compLiquid('raw_silkworm_oil', [], 0x8b5a2b, [noDecomp]);
    MH.compLiquid('refined_silkworm_oil', [], 0xf5de93, [noDecomp]);
    MH.compLiquid('silkworm_gel', [], 0xcdbe86, [noDecomp]);

    MH.compLiquid(
        'nutrient_rich_fertilizer_solution',
        ['1x phosphate', '1x bone', '9x water', '1x npk_solution'],
        0xb5b9c1,
        [noDecomp]
    );

    MH.compLiquid('seaweed_oil', ['1x carbon'], 0x3fbf3f, [noDecomp]);
    MH.compLiquid('liquefied_nutrient_paste', [], 0x8a8e96, [noDecomp]);
    MH.compLiquid(
        'biostimulating_mixture',
        ['2x silicic_acid', '4x seaweed_oil', '5x liquefied_nutrient_paste', '1x mutagen', '3x glycerol'],
        0x72a677,
        [noDecomp]
    );
});
