GTCEuStartupEvents.registry('gtceu:material', (event) => {
    const MH = global.materialHelpers(event);

    const {
        plates,
        rod,
        frame,
        longRod,
        gear,
        smallGear,
        ring,
        densePlate,
        boltAndScrew,
        round,
        fineWire,
        spring,
        rotor,
        noDecomp,
        foil,
    } = FLAGS;

    const { metallic, dull } = ICONSETS;

    MH.conductor(
        'zalloy',
        ['3x zapolgium', '4x duranium', '2x europium'],
        0xff66ff,
        metallic,
        [10799, 'highest', GTValues.VHA[ZPM], 3000],
        [GTValues.V[UV], 2, 4, false],
        [plates, frame, rod, boltAndScrew, round, longRod, gear, smallGear, ring, densePlate]
    );

    MH.conductor(
        'zirconium_selenide_diiodide',
        ['1x zirconium', '1x selenium', '2x iodine'],
        0x6600cc,
        dull,
        [9600, 'higher', GTValues.VA[LuV], 3600],
        [GTValues.V[UHV], 8, 16, false],
        [spring]
    );

    MH.compIngotLiquid(
        'zircalloy_4',
        ['251x zirconium', '3x tin', '2x chromium', '1x iron'],
        0xff9999,
        dull,
        [9100, 'higher', GTValues.VA[LuV], 1800],
        [gear, smallGear, rotor, round, frame]
    );

    MH.compIngotLiquid(
        'thorium_plut_duranide_241',
        ['4x thorium', '1x duranium', '3x plutonium_241'],
        0xec342a,
        null,
        [10199, 'highest', GTValues.VA[UV], 850],
        [fineWire, noDecomp, foil]
    );
});
