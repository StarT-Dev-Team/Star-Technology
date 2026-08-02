GTCEuStartupEvents.registry('gtceu:material', (event) => {
    const MH = global.materialHelpers(event);

    MH.conductorSuper(
        'soul_infused',
        ['1x invar', '2x soul'],
        0xcc9966,
        null,
        [GTValues.V[LV], 4, 0, true],
        [150, 120, 2, 3000]
    );
    MH.conductorSuper(
        'signalum',
        ['1x silver', '3x copper', '4x redstone'],
        0xff3300,
        [1700, 'low', GTValues.VA[MV], 800],
        [GTValues.V[MV], 16, 0, true],
        [190, 140, 3, 4000]
    );
    MH.conductorSuper(
        'lumium',
        ['1x silver', '3x tin', '2x glowstone'],
        0xffffb3,
        [1700, 'low', GTValues.VA[HV], 1000],
        [GTValues.V[HV], 16, 0, true],
        [220, 160, 4, 5500]
    );
    MH.conductorSuper(
        'enderium',
        ['3x lead', '1x diamond', '2x ender_pearl'],
        0x006666,
        [3500, 'low', GTValues.VA[EV], 1200],
        [GTValues.V[EV], 32, 0, true],
        [300, 180, 5, 7500]
    );
    MH.conductorSuper(
        'shellite',
        ['1x black_bronze', '3x signalum'],
        0x9933ff,
        [4400, 'mid', GTValues.VA[IV], 1400],
        [GTValues.V[IV], 64, 0, true],
        [450, 200, 6, 10000]
    );
    MH.conductorSuper(
        'twinite',
        ['3x manganese_phosphide', '2x amethyst', '1x lumium'],
        0xf66999,
        [5300, 'mid', GTValues.VA[LuV], 1600],
        [GTValues.V[LuV], 64, 0, true],
        [700, 220, 7, 13000]
    );
    MH.conductorSuper(
        'dragonsteel',
        ['4x tungsten', '8x magnesium_diboride', '2x cadmium'],
        0x3333cc,
        [7100, 'high', GTValues.VA[ZPM], 1800],
        [GTValues.V[ZPM], 96, 0, true],
        [1100, 240, 8, 16500]
    );
    MH.conductorSuper(
        'prismalium',
        ['8x naquadah', '4x mercury_barium_calcium_cuprate', '7x tungsten_carbide'],
        0x66ffff,
        [9000, 'high', GTValues.VA[ZPM], 1800],
        [GTValues.V[UV], 48, 0, true],
        [1600, 260, 9, 20500]
    );
    MH.conductorSuper(
        'melodium',
        ['2x uranium_triplatinum', '14x electrum', '3x amethyst', '4x darmstadtium', '7x europium'],
        0xd9b3ff,
        [10000, 'higher', GTValues.VA[UV], 2200],
        [GTValues.V[UV], 128, 0, true],
        [2000, 280, 10, 26000]
    );
    MH.conductorSuper(
        'stellarium',
        ['12x neutronium', '4x melodium', '1x samarium_iron_arsenic_oxide'],
        0xccffff,
        [10799, 'highest', GTValues.VA[UHV], 2400],
        [GTValues.V[UHV], 192, 0, true],
        [3200, 300, 12, 32000]
    );
    MH.conductorSuper(
        'ancient_runicalium',
        ['5x zapolgium', '18x stellarium', '8x zirconium'],
        0xfab922,
        [11749, 'highest', GTValues.V[UEV], 3000],
        [GTValues.V[UEV], 256, 0, true],
        [6400, 320, 15, 38500]
    );
});
