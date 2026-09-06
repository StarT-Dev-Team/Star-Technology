// priority: 1600
GTCEuStartupEvents.registry('gtceu:material', (event) => {
    const MH = global.materialHelpers(event);

    const {
        plates,
        rod,
        frame,
        smallGear,
        gear,
        round,
        ring,
        boltAndScrew,
        longRod,
        foil,
        densePlate,
        noDecomp,
        noABSRecipe,
        fineWire,
        rotor,
    } = FLAGS;
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

    MH.compIngotLiquid(
        'hafnide_ceramic_base',
        ['4x hafnium', '5x tantalum_carbide'],
        0x4f4f4f,
        dull,
        [12900, 'highest', GTValues.VA[UV], 970],
        [noDecomp]
    );

    MH.compIngotPlasmaSecColor(
        'expetidalloy_d_17',
        ['2x hafnide_ceramic_base', '11x hastelloy_c_276', '3x dragonsteel', '1x rhodium_plated_palladium'],
        0xa78e99,
        0x948da6,
        shiny,
        [18880, 'highest', GTValues.VA[UXV], 600],
        [plates, frame, rod, boltAndScrew, densePlate, longRod, gear, smallGear, noDecomp, noABSRecipe]
    );

    MH.conductorPlasma(
        'rhenate_w',
        ['2x rhenium', '5x tungsten', '1x neutronium', '18x rose_gold', '7x neodymium'],
        0x87bcd0,
        shiny,
        [18880, 'highest', GTValues.VA[UXV], 600],
        [GTValues.V[UIV], 1, 192, false],
        [noDecomp, noABSRecipe, fineWire]
    );

    event
        .create('draco_abyssal') //Shadowyrm
        .components('1x dragon', '1x voidic', '1x dragon')
        .ingot()
        .fluid()
        .plasma()
        .color(0x401e6d)
        .secondaryColor(0x340e4d)
        .blastTemp(18880, 'highest', GTValues.VA[UXV], 600)
        .iconSet(shiny)
        .flags(plates, frame, rod, densePlate, longRod, gear, foil, smallGear, rotor, fineWire, noDecomp, noABSRecipe)
        .rotorStats(12800, 400, 50, 45000);

    MH.compIngotPlasmaSecColor(
        'hvga_steel',
        ['1x signalum', '3x hssg', '1x draco_abyssal', '8x hsla_steel', '3x tritan_steel'],
        0x280c6c,
        0x2561b7,
        shiny,
        [18880, 'highest', GTValues.VA[UXV], 600],
        [plates, frame, rod, boltAndScrew, densePlate, longRod, gear, smallGear, noDecomp, noABSRecipe, foil]
    );

    MH.compIngotPlasmaSecColor(
        'melastrium_mox',
        ['2x osmiridium', '7x astrenalloy_nx', '3x melodium', '1x potin'],
        0x7d486d,
        0x4c487d,
        shiny,
        [18880, 'highest', GTValues.VA[UXV], 600],
        [plates, frame, rod, boltAndScrew, densePlate, longRod, gear, smallGear, noDecomp, noABSRecipe]
    );

    MH.compIngotPlasmaSecColor(
        'trikoductive_neutro_steel',
        ['6x isovol', '5x tritan_steel', '1x estalt', '3x ruthenium_trinium_americium_neutronate', '2x twinite'],
        0x908080,
        0x6a3f3f,
        shiny,
        [18880, 'highest', GTValues.VA[UXV], 600],
        [plates, frame, rod, boltAndScrew, densePlate, longRod, gear, smallGear, noDecomp, noABSRecipe]
    );

    MH.compIngotPlasmaSecColor(
        'soul_ascendant_cuperite',
        [
            '12x soul_infused',
            '3x nickel_zinc_ferrite',
            '6x magnalium',
            '5x niobium_nitride',
            '1x mercury_barium_calcium_cuprate',
        ],
        0x9ca58b,
        0x83805a,
        shiny,
        [18880, 'highest', GTValues.VA[UXV], 600],
        [plates, frame, rod, boltAndScrew, densePlate, longRod, gear, smallGear, noDecomp, noABSRecipe]
    );

    MH.compIngotPlasmaSecColor(
        'mythrotight_carbide_steel',
        ['8x watertight_steel', '2x mythril', '5x samarium_iron_arsenic_oxide', '3x tungsten_carbide', '1x kanthal'],
        0x2b4951,
        0x37265e,
        shiny,
        [18880, 'highest', GTValues.VA[UXV], 600],
        [plates, frame, rod, boltAndScrew, densePlate, longRod, gear, smallGear, noDecomp, noABSRecipe]
    );

    MH.compIngotPlasmaSecColor(
        'aerorelient_steel',
        ['3x cobalt_brass', '6x red_steel', '2x watertight_steel', '5x hsse', '1x indium'],
        0x6e644d,
        0x50583e,
        shiny,
        [18880, 'highest', GTValues.VA[UXV], 600],
        [plates, frame, rod, boltAndScrew, densePlate, longRod, gear, smallGear, rotor, noDecomp, noABSRecipe]
    );

    MH.compIngotPlasmaSecColor(
        'vastaqalloy_cr_4200x',
        ['5x thacoloy_nq_42x', '4x stellite_100', '2x vanadium_gallium', '3x tungsten_steel', '1x chromium'],
        0x6f7343,
        0x534531,
        shiny,
        [18880, 'highest', GTValues.VA[UXV], 600],
        [plates, frame, rod, boltAndScrew, densePlate, longRod, gear, smallGear, noDecomp, noABSRecipe]
    );

    MH.conductorPlasma(
        'magmada_alloy',
        ['4x adamantine', '1x neutronium', '3x rtm_alloy'],
        0xda8607,
        shiny,
        [17890, 'highest', GTValues.VA[UEV], 600],
        [GTValues.V[UHV], 1, 3, false],
        [
            plates,
            frame,
            rod,
            boltAndScrew,
            round,
            longRod,
            gear,
            smallGear,
            ring,
            noDecomp,
            rotor,
            fineWire,
            noABSRecipe,
        ]
    );

    MH.compIngotPlasmaSecColor(
        'ultispestalloy_cmsh',
        ['2x magmada_alloy', '3x shellite', '15x ultimet', '6x hastelloy_c_276', '1x hafnium'],
        0x684e6f,
        0x4b1146,
        shiny,
        [18880, 'highest', GTValues.VA[UXV], 600],
        [plates, frame, rod, boltAndScrew, densePlate, longRod, gear, smallGear, noDecomp, noABSRecipe]
    );

    MH.compIngotPlasmaSecColor(
        'zeroidic_trinate_steel',
        [
            '3x enriched_naquadah_trinium_europium_duranide',
            '7x zeron_100',
            '1x xeproda',
            '2x tritan_steel',
            '4x calamatium',
        ],
        0x77686f,
        0x3d075c,
        shiny,
        [18880, 'highest', GTValues.VA[UXV], 600],
        [plates, frame, rod, boltAndScrew, densePlate, longRod, gear, smallGear, noDecomp, noABSRecipe]
    );
});
