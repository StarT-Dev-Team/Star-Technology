GTCEuStartupEvents.registry('gtceu:material', (event) => {
    const MH = global.materialHelpers(event);

    const { plates, rod, frame, smallGear, gear, round, ring, boltAndScrew, longRod, foil, densePlate } = FLAGS;
    const { metallic, shiny, dull } = ICONSETS;

    MH.compIngot(
        'austenitic_stainless_steel_304',
        ['35x steel', '10x chromium', '4x nickel', '1x manganese', '1x silicon'],
        0x800040,
        metallic,
        [3500, 'low', GTValues.VA[EV], 1500],
        [plates, rod, frame]
    );

    MH.compIngot(
        'inconel_625',
        ['7x nickel', '2x chromium', '1x steel'],
        0xa3a375,
        shiny,
        [3500, 'low', GTValues.VA[EV], 1500],
        [plates, rod, frame]
    );

    /**
     * @param {string} name
     * @param {(Material | string)[]} components
     * @param {number} color
     */
    const largeMulti = (name, components, color) => {
        MH.compIngot(name, components, color, dull, [2200, 'low', GTValues.VA[MV], 1500], [plates, frame, rod]);
    };

    largeMulti('birmabright', ['7x aluminium', '2x magnesium', '1x manganese'], 0xbfbfbf);
    largeMulti('duralumin', ['4x aluminium', '3x copper', '1x magnesium', '1x manganese'], 0x66ccff);
    largeMulti('hydronalium', ['6x aluminium', '3x magnesium', '1x manganese'], 0x660000);
    largeMulti('beryllium_aluminium_alloy', ['7x beryllium', '1x aluminium'], 0x006699);
    largeMulti(
        'elgiloy',
        ['4x cobalt', '2x chromium', '1x nickel', '1x steel', '1x molybdenum', '1x manganese'],
        0xff00ff
    );
    largeMulti('beryllium_bronze', ['10x copper', '1x beryllium'], 0x003300);
    largeMulti('silicon_bronze', ['32x copper', '2x silicon', '1x manganese'], 0x1a1a1a);
    largeMulti('kovar', ['18x iron', '11x nickel', '6x cobalt'], 0x000080);
    largeMulti('zamak', ['1x zinc', '4x aluminium', '3x copper'], 0x8c8c8c);
    largeMulti('tumbaga', ['20x copper', '6x gold', '1x silver'], 0xffdb4d);
    largeMulti('manganin', ['20x copper', '6x manganese', '1x nickel'], 0xf8aa92);
    largeMulti('galvanized_steel', ['7x steel', '1x zinc'], 0x999999);

    // Ultimate (Akreyrium-Tier-Start) Multiblocks

    // Thallium-Tungstate and intermediates
    MH.compDustIcon('thallium_tungstate', ['2x thallium', '1x tungsten', '4x oxygen'], 0xe3d18a, dull, []);

    MH.compDustIcon('tungsten_trioxide', ['1x tungsten', '3x oxygen'], 0xadb426, dull, []);

    // Boron Nitride and intermediates
    MH.compDustIcon('boron_nitride', ['1x boron', '1x nitrogen'], 0xd4c4a0, dull, []);

    MH.compDustIcon('boron_trioxide', ['2x boron', '3x oxygen'], 0xdacabb, dull, []);

    // Ultimate Multis
    MH.compIngotLiquid(
        'astrenalloy_nx',
        [
            '1x hastelloy_x',
            '4x enriched_naquadah',
            '3x zirconium',
            '6x tantalum_carbide',
            '4x osmiridium',
            '3x boron_nitride',
        ],
        0x63478e,
        shiny,
        [8650, 'highest', GTValues.VHA[ZPM], 2100],
        [plates, rod, frame]
    );

    MH.compIngotLiquid(
        'thacoloy_nq_42x',
        ['6x incoloy_ma_956', '4x enriched_naquadah', '2x niobium_titanium', '4x osmiridium', '4x thallium_tungstate'],
        0x467624,
        shiny,
        [8800, 'highest', GTValues.VHA[ZPM], 1800],
        [plates, rod, frame]
    );

    MH.compIngotLiquidSecColor(
        'tritan_steel',
        [
            '7x tritanium',
            '3x maraging_steel_300',
            '2x enriched_naquadah',
            '3x titanium_tungsten_carbide',
            '1x boron_nitride',
        ],
        0x9a445d,
        0x2d095a,
        metallic,
        [8990, 'highest', GTValues.VHA[UV], 2400],
        [plates, rod, frame, smallGear, gear, round, ring, boltAndScrew, longRod, foil, densePlate]
    );
});
