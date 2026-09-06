// priority: 1201

GTCEuStartupEvents.registry('gtceu:material', (event) => {
    const MH = global.materialHelpers(event);

    const { bright, dull, shiny, gemVertical } = ICONSETS;
    const {
        plates,
        rod,
        frame,
        longRod,
        gear,
        smallGear,
        ring,
        foil,
        densePlate,
        boltAndScrew,
        round,
        fineWire,
        noDecomp,
        noABSRecipe,
        noSmelt,
        spring,
        smallSpring,
        rotor,
    } = FLAGS;

    event.create('latex').polymer().color(0xcfbdac).flags(plates, noDecomp);

    MH.compIngotLiquid(
        'osthendah',
        ['1x osmium', '1x ruthenium', '2x naquadah'],
        0x9279a3,
        bright,
        [7050, 'higher', GTValues.VA[LuV], 1200],
        [plates, frame, rod, boltAndScrew, round, longRod, gear, smallGear, ring, foil, densePlate]
    );

    MH.compIngot(
        'neutronium_silicon_carbide',
        ['2x neutronium', '7x silicon_carbide', '3x niobium_nitride', '3x graphene'],
        0xcfcab8,
        dull,
        [5000, 'highest', GTValues.VA[UHV], 1800],
        [foil, noDecomp, noABSRecipe]
    );

    MH.compLiquid('nether_star_concentrate', ['1x excited', '1x star', '1x excited'], 0xeeeeee, [noDecomp]);

    MH.compLiquid('dissipated_hellish_concentrate', ['1x mystery'], 0x8da589, [noDecomp]);

    MH.compLiquid('hellish_concentrate', ['1x mystery'], 0x66a574, [noDecomp]);

    MH.elemLiquidSecColor('aurourium', 0x5d44de, 0xde44ce, ICONSETS.shiny, null, [noDecomp, fineWire, noSmelt]);

    MH.compLiquidStill('borealic_concentrate', ['1x aurourium', '15x stellarium'], [noDecomp]);

    MH.compIngotPlasmaSecColor(
        'borealic_steel',
        [
            '2x prismalium',
            '4x rose_gold',
            '8x aurourium',
            '2x tritan_steel',
            '1x ancient_netherite',
            '3x borealic_concentrate',
        ],
        0x8f7090,
        0x70907c,
        shiny,
        [18880, 'highest', GTValues.VA[UXV], 600],
        [plates, frame, rod, boltAndScrew, densePlate, longRod, gear, smallGear, noDecomp, noABSRecipe]
    );

    MH.conductor(
        'cerium_tritelluride',
        ['1x cerium', '3x tellurium'],
        0x6d8b5d,
        dull,
        [11699, 'highest', GTValues.VHA[UHV], 1800],
        [GTValues.V[UEV], 6, 16, false],
        [boltAndScrew, spring, smallSpring]
    );

    MH.compLiquidTemp('bec_og', 0.0001, ['1x oganesson'], 0xbfacff, [noDecomp]);

    MH.compLiquidTemp('superstate_helium_3', 2, ['1x helium_3'], 0xedfaf5, [noDecomp]);

    event
        .create('mythrolic_alloy')
        .components('5x mythril', '4x hsss', '2x darmstadtium')
        .ingot()
        .fluid()
        .plasma()
        .color(0x30956c)
        .blastTemp(18550, 'highest', GTValues.VA[UEV], 600)
        .iconSet(shiny)
        .fluidPipeProperties(120000, 6000, true, true, true, true)
        .flags(
            plates,
            densePlate,
            frame,
            rod,
            boltAndScrew,
            round,
            longRod,
            gear,
            smallGear,
            rotor,
            ring,
            foil,
            noDecomp,
            noABSRecipe
        );

    MH.compIngotPlasma(
        'starium_alloy',
        ['4x nether_star_concentrate', '2x trinaquadalloy', '2x estalt'],
        0x2253d2,
        shiny,
        [18200, 'highest', GTValues.VA[UEV], 600],
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
            noABSRecipe,
            foil,
            densePlate,
        ]
    );

    MH.conductorPlasma(
        'enriched_pallarovium_alloy',
        ['2x seaborgium', '8x palladium', '3x enriched_estalt', '4x flerovium'],
        0x73022b,
        dull,
        [17950, 'highest', GTValues.VA[UEV], 600],
        [GTValues.V[UEV], 32, 0, true],
        [noDecomp, noABSRecipe, fineWire, frame]
    );

    MH.conductor(
        'astatium_bioselex_carbonite',
        ['1x astatine', '2x bismuth', '3x selenium', '2x thallium', '4x sulfur', '1x carbon'],
        0x305f84,
        dull,
        [13475, 'highest', GTValues.VA[UV], 3500],
        [GTValues.V[UEV], 3, 16, false],
        [spring, noDecomp]
    );

    MH.conductor(
        'polonium_bismide',
        ['1x polonium', '1x bismuth'],
        0x016038,
        dull,
        [14400, 'highest', GTValues.VHA[UEV], 1800],
        [GTValues.V[UIV], 5, 24, false],
        [fineWire, boltAndScrew, spring, smallSpring]
    );

    MH.compIngot('diamane', ['1x carbon'], 0x62777a, null, [4000, 'low', GTValues.VA[LV], 1], [noDecomp]);

    MH.compDust('iridium_iv_oxide', ['1x iridium', '2x oxygen'], 0xbeded9, [noDecomp]);

    MH.compDust('bismuth_iii_oxide', ['2x bismuth', '3x oxygen'], 0xd5e5dc, [noDecomp]);

    MH.compIngot(
        'bismuth_iridate',
        ['2x bismuth', '2x iridium', '7x oxygen'],
        0x68cf93,
        null,
        [8600, 'high', GTValues.VA[ZPM], 1080],
        [foil, noDecomp, noABSRecipe]
    );

    MH.compLiquidStill('dragon_breath', ['1x dragon'], [noDecomp]);

    MH.compLiquidStill('pure_dragon_breath', ['1x excited', '1x dragon', '1x excited'], [noDecomp]);

    MH.compDust('indium_tin_oxide', ['2x indium', '2x tin', '3x oxygen'], 0xa1c1e0, [noDecomp]);

    MH.conductor(
        'hafnide_ito_ceramic',
        ['4x hafnium', '5x tantalum', '5x carbon', '2x indium', '2x tin', '3x oxygen'],
        0x798ca5,
        dull,
        [14520, 'highest', GTValues.VA[UHV], 3200],
        [GTValues.V[UIV], 2, 36, false],
        [spring, noDecomp, noABSRecipe, ring]
    );

    MH.conductorPlasma(
        'rhenium_super_composite_alloy',
        [
            '4x rhenium',
            '2x weapon_grade_naquadah',
            '7x mercury_barium_calcium_cuprate',
            '2x titanium_carbide',
            '1x samarium',
        ],
        0xa78b72,
        dull,
        [18850, 'highest', GTValues.VA[UXV], 600],
        [GTValues.V[UIV], 40, 0, true],
        [noDecomp, noABSRecipe, fineWire, boltAndScrew]
    );

    event
        .create('abyssal_alloy')
        .components('5x xeproda', '3x blue_alloy', '4x void', '1x flerovium', '1x zapolgium')
        .ingot()
        .fluid()
        .plasma()
        .color(0x1c0932)
        .iconSet(shiny)
        .blastTemp(18685, 'highest', GTValues.VA[UIV], 600)
        .cableProperties(GTValues.V[UEV], 2, 4, false)
        .flags(plates, frame, rod, boltAndScrew, round, longRod, gear, smallGear, ring, noDecomp, rotor, noABSRecipe);

    event
        .create('chaotixic_alloy')
        .components('6x rhexis', '2x stellite_100', '1x hafnium', '12x electrum', '3x vanadium_steel')
        .ingot()
        .fluid()
        .plasma()
        .color(0xa09265)
        .blastTemp(18795, 'highest', GTValues.VA[UIV], 600)
        .iconSet(shiny)
        .fluidPipeProperties(250000, 30, true, true, true, true)
        .flags(
            plates,
            frame,
            rod,
            boltAndScrew,
            round,
            longRod,
            gear,
            smallGear,
            rotor,
            ring,
            foil,
            noDecomp,
            noABSRecipe
        );

    MH.compIngotPlasma(
        'ohmderblux_alloy',
        ['5x chalyblux', '2x maraging_steel_300', '4x zirconium', '9x glowstone', '3x ultimet'],
        0xd0b660,
        shiny,
        [18590, 'highest', GTValues.VA[UIV], 600],
        [plates, frame, rod, boltAndScrew, round, longRod, gear, smallGear, ring, noDecomp, noABSRecipe, densePlate]
    );

    event.create('draconic_enrichment_serum').fluid().color(0xac97c5);

    event
        .create('draconyallium')
        .components('1x dragon', '68x duranium', '20x silver', '94x oxygen', '76x nitrogen', '1x dragon')
        .ingot()
        .fluid()
        .plasma()
        .color(0x5e0b75)
        .secondaryColor(0x7817ec)
        .blastTemp(18880, 'highest', GTValues.VA[UXV], 600)
        .iconSet(shiny)
        .flags(plates, frame, rod, densePlate, longRod, gear, foil, smallGear, rotor, noDecomp, noABSRecipe);

    MH.compDustLiquid('netherite_triselex_oxide', ['4x netherite', '3x selenium', '8x oxygen'], 0xcfd9a3, [noDecomp]);

    MH.compIngotLiquid(
        'neutrindium_soldering_alloy',
        [
            '2x neutronium',
            '51x indium',
            '6x tin',
            '4x darmstadtium',
            '5x cadmium',
            '4x enriched_naquadah',
            '2x hafnium',
        ],
        0xf8f2fa,
        null,
        null,
        []
    );

    MH.compDust('thallium_antimonide', ['1x thallium', '1x antimony'], 0xadc5e3, []);

    MH.compLiquidStill('lepton_dense_akreyrium', ['1x utopian_akreyrium', '1x mystery'], [noDecomp]);

    MH.conductor(
        'lepton_resonant_thallium_antimonide',
        ['1x thallium', '1x antimony', '1x mystery'],
        0x74638f,
        dull,
        [18250, 'highest', GTValues.VHA[UIV], 1800],
        [GTValues.V[UXV], 7, 48, false],
        [boltAndScrew, spring, smallSpring, noABSRecipe, noDecomp, fineWire]
    );

    event
        .create('raging_rimulatia') //Shadowyrm
        .components('1x draco_abyssal', '1x riftic')
        .ingot()
        .fluid()
        .color(0xe357f2)
        .secondaryColor(0x163f5e)
        .iconSet(shiny)
        .flags(plates, frame, rod, boltAndScrew, densePlate, longRod, gear, smallGear, noDecomp, fineWire)
        .rotorStats(14400, 560, 100, 96000);

    event
        .create('primordially_stellarized_weapon_grade_naquadah')
        .components('1x voidic', '157x stellarized_weapon_grade_naquadah', '1x voidic')
        .ingot()
        .fluid()
        .plasma()
        .color(0x9881de)
        .secondaryColor(0x489957)
        .blastTemp(18880, 'highest', GTValues.VA[UXV], 600)
        .iconSet(shiny)
        .flags(plates, frame, rod, densePlate, longRod, gear, foil, smallGear, rotor, fineWire, noDecomp, noABSRecipe);

    MH.compGem(
        'aquariadic_rimuli_dragonix',
        ['5x pure_dragon_breath', '7x akreyriadic_runixium', '4x raging_rimulatia'],
        0x16269e,
        gemVertical,
        [noDecomp]
    );

    event
        .create('nyanium')
        .components('7x aurourium', '4x uranium_rhodium_dinaquadide', '1x magnesium_nitride', '2x pure_netherite')
        .ingot()
        .fluid()
        .plasma()
        .color(0xe4c6eb)
        .secondaryColor(0xa45ef5)
        .blastTemp(17290, 'highest', GTValues.VA[UEV], 600)
        .iconSet(ICONSETS.shiny) // Will Have Own in Theta? but that is a LOT of work
        .fluidPipeProperties(78500, 2500, true, true, true, true)
        .flags(plates, frame, rod, densePlate, longRod, gear, foil, smallGear, rotor, noDecomp, noABSRecipe);
});
