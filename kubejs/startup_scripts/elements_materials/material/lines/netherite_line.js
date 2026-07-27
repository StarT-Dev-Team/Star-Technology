GTCEuStartupEvents.registry('gtceu:material', (event) => {
    const MH = global.materialHelpers(event);

    const { noDecomp, plates, rod, densePlate, frame, longRod, foil } = FLAGS;

    MH.elemDustFluid('debris', 0x804000, [noDecomp]);

    MH.compDust('purified_debris', ['debris'], 0xcc0000, []);

    MH.compLiquid('chlorine_trifluoride', ['1x chlorine', '3x fluorine'], 0xb3ff99, []);

    MH.compLiquid('tetrachloroethylene', ['2x carbon', '4x chlorine'], 0xd966ff, []);

    MH.compDustLiquid('ancient_debris', ['1x mystery'], 0x603d1a, [noDecomp]);

    MH.elemIngotFluid(
        'ancient_netherite',
        0x46271b,
        ICONSETS.dull,
        [12349, 'low', GTValues.VA[UEV], 1200],
        [plates, rod, noDecomp, densePlate, frame, longRod, foil]
    );
});
