GTCEuStartupEvents.registry('gtceu:material', (event) => {
    const MH = global.materialHelpers(event);

    const { bright } = ICONSETS;
    const { plates, rod, frame, longRod, gear, smallGear, ring, foil, densePlate, boltAndScrew, round, fineWire } =
        FLAGS;

    MH.compIngotLiquid(
        'osthendah',
        ['1x osmium', '1x ruthenium', '2x naquadah'],
        0x9279a3,
        bright,
        [7050, 'higher', GTValues.VA[LuV], 1200],
        [plates, frame, rod, boltAndScrew, round, longRod, gear, smallGear, ring, foil, densePlate]
    );

    MH.compIngotLiquid(
        'trinaquadalloy',
        ['5x trinium', '3x naquadah', '2x carbon'],
        0x281832,
        bright,
        [8750, 'higher', GTValues.VA[ZPM], 1000],
        [plates, rod, frame, fineWire, foil, densePlate]
    );
});
