GTCEuStartupEvents.registry('gtceu:material', (event) => {
    const MH = global.materialHelpers(event);

    const { plates, rod, frame } = FLAGS;

    MH.compIngot(
        'austenitic_stainless_steel_304',
        ['35x steel', '10x chromium', '4x nickel', '1x manganese', '1x silicon'],
        0x800040,
        ICONSETS.metallic,
        [3500, 'low', GTValues.VA[EV], 1500],
        [plates, rod, frame]
    );

    MH.compIngot(
        'inconel_625',
        ['7x nickel', '2x chromium', '1x steel'],
        0xa3a375,
        ICONSETS.shiny,
        [3500, 'low', GTValues.VA[EV], 1500],
        [plates, rod, frame]
    );
});
