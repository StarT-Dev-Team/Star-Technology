// priority: 100
/* eslint-disable no-unused-vars  */

(() => {
    // Icon Sets
    const DULL = 'dull';
    const METALLIC = 'metallic';
    const MAGNETIC = 'magnetic';
    const SHINY = 'shiny';
    const BRIGHT = 'bright';
    const DIAMOND = 'diamond';
    const EMERALD = 'emerald';
    const GEM_HORIZONTAL = 'gem_horizontal';
    const GEM_VERTICAL = 'gem_vertical';
    const RUBY = 'ruby';
    const OPAL = 'opal';
    const GLASS = 'glass';
    const NETHERSTAR = 'netherstar';
    const FINE = 'fine';
    const SAND = 'sand';
    const WOOD = 'wood';
    const ROUGH = 'rough';
    const FLINT = 'flint';
    const LIGNITE = 'lignite';
    const QUARTZ = 'quartz';
    const CERTUS = 'certus';
    const LAPIS = 'lapis';
    const FLUID = 'fluid';
    const RADIOACTIVE = 'radioactive';

    // Flags
    // Generic flags
    const noUnify = FLAGS.noUnify;
    const electrolyze = FLAGS.electrolyze;
    const centrifuge = FLAGS.centrifuge;
    const noDecomp = FLAGS.noDecomp;
    const explosive = FLAGS.explosive;
    const flammable = FLAGS.flammable;
    const sticky = FLAGS.sticky;
    const phosphorescent = FLAGS.phosphorescent;
    // Generation Flags
    // Dust Flags
    const plates = FLAGS.plates;
    const densePlate = FLAGS.densePlate;
    const rod = FLAGS.rod;
    const boltAndScrew = FLAGS.boltAndScrew;
    const frame = FLAGS.frame;
    const gear = FLAGS.gear;
    const longRod = FLAGS.longRod;
    const block = FLAGS.block;
    // Ingot Flags
    const foil = FLAGS.foil;
    const ring = FLAGS.ring;
    const spring = FLAGS.spring;
    const smallSpring = FLAGS.smallSpring;
    const smallGear = FLAGS.smallGear;
    const fineWire = FLAGS.fineWire;
    const rotor = FLAGS.rotor;
    const round = FLAGS.round;
    const magnetic = FLAGS.magnetic;
    // Gem Flags
    const crystallizable = FLAGS.crystallizable;
    const lens = FLAGS.lens;
    // Fluid Flags
    const solderMat = FLAGS.solderMat;
    const solderMatBad = FLAGS.solderMatBad;
    const solderMatGood = FLAGS.solderMatGood;
    // Ore Flags
    const moreSifter = FLAGS.moreSifter;
    // Misc
    const noBlockCraft = FLAGS.noBlockCraft;
    const noPlateCompressorCraft = FLAGS.noPlateCompressorCraft;
    const noHandCraft = FLAGS.noHandCraft;
    const mortarGrind = FLAGS.mortarGrind;
    const noWorking = FLAGS.noWorking;
    const noSmashing = FLAGS.noSmashing;
    const noSmelt = FLAGS.noSmashing;
    const blastFurnaceDouble = FLAGS.blastFurnaceDouble;
    const blastFurnaceTriple = FLAGS.blastFurnaceTriple;
    const noABSRecipe = FLAGS.noABSRecipe;
    const notAlloy = FLAGS.notAlloy;

    // Useful functions
    /** @param {GTTier} voltage */
    const V = (voltage) => {
        return global.v[voltage];
    };

    /** @param {GTTier} voltage */
    const VA = (voltage) => {
        return global.va[voltage];
    };

    /** @param {GTTier} voltage */
    const VH = (voltage) => {
        return global.vh[voltage];
    };

    /** @param {GTTier} voltage */
    const VHA = (voltage) => {
        return global.vha[voltage];
    };

    // Moving all of this ( ^ ) to helpers is ideal

    GTCEuStartupEvents.registry('gtceu:material', (event) => {
        const MH = global.materialHelpers(event);

        // Materials

        /*

        MH.elemDust('uranium_233', 0x4fbb4f, [noSmelt]);

        MH.elemDustFluid('plutonium_238', 0xc13d3d, [noSmelt]);

        MH.elemDust('plutonium_244', 0x951f1f, [noSmelt]);

        MH.elemDust('americium_241', 0x1e492f, [noSmelt]);

        MH.elemDust('curium_244', 0x6f4c46, [noSmelt]);

        MH.elemDust('californium_252', 0xa38783, [noSmelt]);

        MH.elemDust('einsteinium_253', 0xddbc4d, [noSmelt]);

        MH.elemIngotFluid('xeproda', 0x1a0d00, DULL, [15499, 'highest', VA('uev'), 2700], [fineWire]);

        MH.elemIngotFluid('rhexis', 0x330000, DULL, [15499, 'highest', VHA('uiv'), 2700], []);

        MH.elemIngotFluid('chalyblux', 0xffcccc, DULL, [15499, 'highest', VA('uev'), 2575], []);

        MH.elemIngotFluid(
            'mythril',
            0x006666,
            METALLIC,
            [11299, 'highest', VA('uhv'), 2400],
            [foil, gear, longRod, plates, rod, rotor, smallGear, ring, frame]
        );

        MH.elemIngotFluid(
            'adamantine',
            0xe99700,
            METALLIC,
            [13299, 'highest', VHA('uev'), 2300],
            [foil, gear, longRod, plates, rod, rotor, smallGear, ring, frame, fineWire]
        );

        MH.elemIngotFluid(
            'estalt',
            0xff5050,
            DULL,
            [12299, 'highest', VA('uhv'), 2200],
            [foil, gear, longRod, plates, rod, rotor, smallGear, ring, frame]
        );

        MH.elemIngotFluid(
            'enriched_estalt',
            0xe76c6c,
            RADIOACTIVE,
            [12899, 'highest', VA('uhv'), 2500],
            [foil, gear, longRod, plates, rod, rotor, smallGear, ring, frame]
        );

        MH.elemIngotFluid(
            'calamatium',
            0x660000,
            DULL,
            [13199, 'highest', VA('uhv'), 2400],
            [foil, gear, longRod, plates, rod, rotor, smallGear, ring, frame]
        );

        MH.elemIngotFluid(
            'isovol',
            0x290066,
            DULL,
            [12999, 'highest', VA('uhv'), 2400],
            [foil, gear, longRod, plates, rod, rotor, smallGear, ring, frame]
        );

        event
            .create('zapolgium')
            .ingot()
            .fluid()
            .element(GTElements.get('zapolgium'))
            .color(0xcc00cc)
            .iconSet(DULL)
            .blastTemp(10799, 'highest', VA('uhv'), 1600)
            .flags(plates, rod, frame, longRod)
            .fluidPipeProperties(18000, 7200, true, true, true, true);

        event
            .create('magnetic_zapolgium')
            .ingot()
            .components('1x zapolgium')
            .color(0xcc00cc)
            .iconSet(MAGNETIC)
            .flags(longRod)
            .arcSmeltInto('zapolgium')
            .ingotSmeltInto('zapolgium');

        event
            .create('magnetic_dysprosium')
            .ingot()
            .components('1x dysprosium')
            .color(0x6a664b)
            .secondaryColor(0x423307)
            .iconSet(MAGNETIC)
            .flags(longRod)
            .arcSmeltInto('dysprosium')
            .ingotSmeltInto('dysprosium');
        
        */

        // Thermal Superconductors
        /*
        MH.conductorSuper(
            'soul_infused',
            ['1x invar', '2x soul'],
            0xcc9966,
            null,
            [V('lv'), 4, 0, true],
            [150, 120, 2, 3000]
        );
        MH.conductorSuper(
            'signalum',
            ['1x silver', '3x copper', '4x redstone'],
            0xff3300,
            [1700, 'low', VA('mv'), 800],
            [V('mv'), 16, 0, true],
            [190, 140, 3, 4000]
        );
        MH.conductorSuper(
            'lumium',
            ['1x silver', '3x tin', '2x glowstone'],
            0xffffb3,
            [1700, 'low', VA('hv'), 1000],
            [V('hv'), 16, 0, true],
            [220, 160, 4, 5500]
        );
        MH.conductorSuper(
            'enderium',
            ['3x lead', '1x diamond', '2x ender_pearl'],
            0x006666,
            [3500, 'low', VA('ev'), 1200],
            [V('ev'), 32, 0, true],
            [300, 180, 5, 7500]
        );
        MH.conductorSuper(
            'shellite',
            ['1x black_bronze', '3x signalum'],
            0x9933ff,
            [4400, 'mid', VA('iv'), 1400],
            [V('iv'), 64, 0, true],
            [450, 200, 6, 10000]
        );
        MH.conductorSuper(
            'twinite',
            ['3x manganese_phosphide', '2x amethyst', '1x lumium'],
            0xf66999,
            [5300, 'mid', VA('luv'), 1600],
            [V('luv'), 64, 0, true],
            [700, 220, 7, 13000]
        );
        MH.conductorSuper(
            'dragonsteel',
            ['4x tungsten', '8x magnesium_diboride', '2x cadmium'],
            0x3333cc,
            [7100, 'high', VA('zpm'), 1800],
            [V('zpm'), 96, 0, true],
            [1100, 240, 8, 16500]
        );
        MH.conductorSuper(
            'prismalium',
            ['8x naquadah', '4x mercury_barium_calcium_cuprate', '7x tungsten_carbide'],
            0x66ffff,
            [9000, 'high', VA('zpm'), 1800],
            [V('uv'), 48, 0, true],
            [1600, 260, 9, 20500]
        );
        MH.conductorSuper(
            'melodium',
            ['2x uranium_triplatinum', '14x electrum', '3x amethyst', '4x darmstadtium', '7x europium'],
            0xd9b3ff,
            [10000, 'higher', VA('uv'), 2200],
            [V('uv'), 128, 0, true],
            [2000, 280, 10, 26000]
        );
        MH.conductorSuper(
            'stellarium',
            ['12x neutronium', '4x melodium', '1x samarium_iron_arsenic_oxide'],
            0xccffff,
            [10799, 'highest', VA('uhv'), 2400],
            [V('uhv'), 192, 0, true],
            [3200, 300, 12, 32000]
        );
        MH.conductorSuper(
            'ancient_runicalium',
            ['5x zapolgium', '18x stellarium', '8x zirconium'],
            0xfab922,
            [11749, 'highest', V('uhv') + 1, 3000],
            [V('uev'), 256, 0, true],
            [6400, 320, 15, 38500]
        );
        */

        // Nuclear Reactor Materials
        /*
        MH.compIngot(
            'austenitic_stainless_steel_304',
            ['35x steel', '10x chromium', '4x nickel', '1x manganese', '1x silicon'],
            0x800040,
            METALLIC,
            [3500, 'low', VA('ev'), 1500],
            [plates, rod, frame]
        );

        MH.compIngot(
            'inconel_625',
            ['7x nickel', '2x chromium', '1x steel'],
            0xa3a375,
            SHINY,
            [3500, 'low', VA('ev'), 1500],
            [plates, rod, frame]
        );
        */

        /*
        MH.compLiquid('nuclear_steam', ['1x steam', '1x mystery'], 0xcccccc, [noDecomp]);

        MH.compLiquid('hot_sodium_potassium', ['1x sodium_potassium', '1x mystery'], 0x82fcc3, [noDecomp]);

        MH.compLiquid('hot_pcb_coolant', ['1x pcb_coolant', '1x mystery'], 0xc9ca81, [noDecomp]);
        */

        // Netherite Line
        /*
        MH.elemDustFluid('debris', 0x804000, [noDecomp]);

        MH.compDust('purified_debris', ['debris'], 0xcc0000, []);

        MH.compLiquid('chlorine_trifluoride', ['1x chlorine', '3x fluorine'], 0xb3ff99, []);

        MH.compLiquid('tetrachloroethylene', ['2x carbon', '4x chlorine'], 0xd966ff, []);
        */

        // Crown Ethers
        /*
        MH.compLiquid('sulfur_dichloride', ['1x sulfur', '2x chlorine'], 0xcc0000, []);

        MH.compLiquid('thionyl_chloride', ['1x sulfur', '1x oxygen', '2x chlorine'], 0xffffcc, [noDecomp]);

        MH.compLiquid('sulfuryl_chloride', ['1x sulfur', '2x oxygen', '2x chlorine'], 0xffffcc, []);

        MH.compLiquid('triglycol_dichloride', ['6x carbon', '12x hydrogen', '2x oxygen', '2x chlorine'], 0xffffcc, []);

        MH.compLiquid('ethylene_glycol', ['2x carbon', '6x hydrogen', '2x oxygen'], 0xf2f2f2, []);

        MH.compLiquid('diethylene_glycol', ['4x carbon', '10x hydrogen', '3x oxygen'], 0xf2f2f2, []);

        MH.compLiquid('triethylene_glycol', ['6x carbon', '14x hydrogen', '4x oxygen'], 0xf2f2f2, []);

        MH.compLiquid('ethylene_oxide', ['2x carbon', '4x hydrogen', '1x oxygen'], 0xd9d9d9, []);

        MH.compDust('lithium_perchlorate', ['1x lithium', '1x chlorine', '4x oxygen'], 0xe6f2ff, []);

        MH.compDust('sodium_perchlorate', ['1x sodium', '1x chlorine', '4x oxygen'], 0xccf2ff, []);

        MH.compDust('sodium_chlorate', ['1x sodium', '1x chlorine', '3x oxygen'], 0xccf2ff, []);

        MH.compDust('silver_oxide', ['2x silver', '1x oxygen'], 0xe3e3e3, []);

        MH.compLiquid('12_crown_4', ['8x carbon', '16x hydrogen', '4x oxygen'], 0xcc6699, []);

        MH.compLiquid('15_crown_5', ['10x carbon', '20x hydrogen', '5x oxygen'], 0x0099cc, []);

        MH.compLiquid('18_crown_6', ['12x carbon', '24x hydrogen', '6x oxygen'], 0x99ff33, []);

        MH.compLiquid('12_crown_4_li', ['1x lithium', '8x carbon', '16x hydrogen', '4x oxygen'], 0x993366, [noDecomp]);

        MH.compLiquid('15_crown_5_na', ['1x sodium', '10x carbon', '20x hydrogen', '5x oxygen'], 0x006080, [noDecomp]);

        MH.compLiquid('18_crown_6_k', ['1x potassium', '12x carbon', '24x hydrogen', '6x oxygen'], 0x4d9900, [
            noDecomp,
        ]);

        MH.compDust(
            '4_toluenesulfonyl_chloride',
            ['7x carbon', '7x hydrogen', '2x chlorine', '2x oxygen', '1x sulfur'],
            0xffccc,
            [noDecomp]
        );

        MH.compDust(
            'triethylene_glycol_ditosylate',
            ['20x carbon', '26x hydrogen', '8x oxygen', '2x sulfur'],
            0xb8b894,
            [noDecomp]
        );

        MH.compDust('sodium_azide', ['1x sodium', '3x nitrogen'], 0xcc6699, []);

        MH.compDust('palladium_on_carbon', ['1x palladium', '1x carbon'], 0xff9900, []);

        MH.compDust(
            'sodium_p_toluenesulfonate',
            ['7x carbon', '7x hydrogen', '1x sodium', '3x oxygen', '1x sulfur'],
            0x00cc00,
            [noDecomp]
        );

        MH.compDust('triethylene_glycol_diazide', ['6x carbon', '12x hydrogen', '2x oxygen', '6x nitrogen'], 0x6666ff, [
            noDecomp,
        ]);

        MH.compDust('triethylene_glycol_diamine', ['6x carbon', '16x hydrogen', '2x oxygen', '2x nitrogen'], 0xcc00cc, [
            noDecomp,
        ]);

        MH.compLiquid('cryptand', ['18x carbon', '36x hydrogen', '6x oxygen', '2x nitrogen'], 0x993333, [noDecomp]);

        MH.compLiquid(
            'cryptand_k',
            ['1x potassium', '18x carbon', '36x hydrogen', '6x oxygen', '2x nitrogen'],
            0x602020,
            [noDecomp]
        );

        MH.compLiquid(
            'cryptand_na',
            ['1x sodium', '18x carbon', '36x hydrogen', '6x oxygen', '2x nitrogen'],
            0x602020,
            [noDecomp]
        );

        MH.compLiquid(
            'cryptand_li',
            ['1x lithium', '18x carbon', '36x hydrogen', '6x oxygen', '2x nitrogen'],
            0x602020,
            [noDecomp]
        );
        */

        // Mystical Agriculture Alloys
        // [
        //     {tier: 'inferium', color: 0x66ff33},
        //     {tier: 'prudentium', color: 0x336600},
        //     {tier: 'tertium', color: 0xff6600},
        //     {tier: 'imperium', color: 0x0099ff},
        //     {tier: 'supremium', color: 0xff0000},
        //     {tier: 'awakened_supremium', color: 0xff3300},
        //     {tier: 'insanium', color: 0x9900cc},
        // ].forEach(essence => {
        //     compIngot(`${essence.tier}_steel`, ['1x steel', '1x mystery'], essence.color, DULL, [], [plates, rod, noDecomp]);
        // })

        // Diatrons
        //MH.compGem('diatron', [], 0x6699ff, LAPIS, [noDecomp]);

        // Echo/Void Line
        /*
        MH.elemFluid('echo_r', 'echo_r', 0x003333, []);

        MH.compIngot('raw_void', ['1x echo_r', '1x neutronium'], 0x006666, DULL, null, [noDecomp]);

        MH.compIngotLiquid(
            'void',
            ['1x echo_r', '1x neutronium'],
            0x001a1a,
            DULL,
            [10000, 'highest', VA('uiv'), 8000],
            [rod, foil, plates, longRod, frame, noDecomp, noABSRecipe, boltAndScrew, ring]
        );
        */

        //Extended Sculk
        // compDustIcon('ionized_sculk', [], 0x061A0D, RADIOACTIVE, [noDecomp]);

        // compDust('sodium_over_sculk', ['1x sodium','1x mystery'], 0x071A22, [noDecomp]);

        // Extras
        // MH.compDust('sulfate', ['1x sulfur', '4x oxygen'], 0xd5ba23, []);

        /*
        MH.compIngotLiquid(
            'osthendah',
            ['1x osmium', '1x ruthenium', '2x naquadah'],
            0x9279a3,
            BRIGHT,
            [7050, 'higher', VA('luv'), 1200],
            [plates, frame, rod, boltAndScrew, round, longRod, gear, smallGear, ring, foil, densePlate]
        );

        MH.compIngotLiquid(
            'trinaquadalloy',
            ['5x trinium', '3x naquadah', '2x carbon'],
            0x281832,
            BRIGHT,
            [8750, 'higher', VA('zpm'), 1000],
            [plates, rod, frame, fineWire, foil, densePlate]
        );
        */

        /*
        MH.compLiquid('perchloric_acid', ['1x hydrogen', '1x chlorine', '4x oxygen'], 0xffe6e6, []);

        MH.compDust('calcium_perchlorate', ['1x calcium', '2x chlorine', '8x oxygen'], 0xffff99, []);

        MH.compLiquid('silica_gel', ['1x chlorine', '1x hydrogen', '6x oxygen', '1x silicon'], 0xe6e6e6, [noDecomp]);

        MH.compDust('calcium_sulfate', ['1x calcium', '1x sulfur', '4x oxygen'], 0xffbf80, []);

        MH.compDust('sodium_oxide', ['2x sodium', '1x oxygen'], 0x6666ff, []);

        MH.compDust('strontium_oxide', ['1x strontium', '1x oxygen'], 0xffcc99, []);

        MH.compDust('titanium_oxide', ['1x titanium', '2x oxygen'], 0xff66cc, []);

        MH.compDust('strontium_titanium_oxide', ['1x strontium', '1x titanium', '3x oxygen'], 0xff0000, []);

        MH.compDust('copper_chloride', ['1x copper', '1x chlorine'], 0xfff9e8, []);
        */

        /*
        MH.compLiquid(
            'npk_solution',
            ['15x apatite', '5x potassium', '1x sulfur_trioxide', '1x nitrogen', '2x water'],
            0xb8c3f5,
            []
        );
        */

        // MH.compLiquid('cupric_chloride_solution', ['1x copper_chloride', '1x hydrochloric_acid'], 0x336600, []);

        // Netherite Derivatives/Alloys
        /*
        MH.elemIngotFluid(
            'pure_netherite',
            0x1a0d00,
            DULL,
            [5000, 'low', VA('iv'), 1200],
            [foil, gear, longRod, plates, rod, rotor, smallGear, ring]
        );

        MH.compGem(
            'naquadic_netherite',
            ['3x naquadah', '5x pure_netherite', '2x caesium', '5x cerium', '12x fluorine', '32x oxygen'],
            0xffd966,
            DIAMOND,
            []
        );

        MH.compIngotLiquid(
            'weapon_grade_naquadah',
            ['7x naquadria', '4x pure_netherite', '6x trinaquadalloy', '12x fluorine'],
            0xccff33,
            DULL,
            [9001, 'highest', VA('zpm'), 2400],
            [foil, plates, rod, frame]
        );

        MH.compIngotLiquid(
            'stellarized_weapon_grade_naquadah',
            ['1x void', '8x weapon_grade_naquadah', '4x stellarium'],
            0x57ab6b,
            SHINY,
            [12049, 'highest', VA('uhv'), 3600],
            [foil, plates, rod, frame]
        );

        MH.compGem(
            'runic_laser_source_base',
            ['6x naquadic_netherite', '6x neptunium', '5x trinium'],
            0x00ff00,
            OPAL,
            []
        );
        */

        // Ores and bedrock fluids
        /*
        MH.compDustOre('titanite', ['1x calcium', '1x titanium', '1x silicon', '5x oxygen'], 0x66ffff, [noDecomp]);

        MH.compDustOre('zapolite', ['2x zapolgium', '4x iodine', '2x aluminium', '5x oxygen'], 0xcc0099, [noDecomp]);

        MH.compGemOre('xenotime', ['1x yttrium', '1x sulfate'], 0x948446, GEM_VERTICAL, [noDecomp]);

        MH.compDustOre('lautarite', ['1x calcium', '2x iodine', '6x oxygen'], 0x6666ff, []);

        // compDustLiquidOre('iodargyrite', ['1x silver', '1x iodine'], 0x8080ff, [noDecomp]);

        // compDustLiquidOre('clausthalite', ['1x lead', '1x selenium'], 0x666633, [noDecomp]);

        MH.compDustOre('crookesite', ['7x copper', '1x thallium', '4x selenium'], 0x00ff99, []);

        MH.compDustOre('kitkaite', ['1x nickel', '1x tellurium', '1x selenium'], 0xe6ead3, []);

        // compDustLiquidOre('calaverite', ['1x gold', '2x tellurium'], 0xcc9900, [noDecomp]);

        // compDustLiquidOre('sylvanite', ['1x silver', '2x tellurium'], 0xff5050, [noDecomp]);

        // compDustLiquidOre('tiemannite', ['1x mercury', '1x selenium'], 0xcc0066, [noDecomp]);

        // compDustOre('klockmannite', ['1x copper', '1x selenium'], 0x009999, [noDecomp]);

        // compDustOre('stibiopalladinite', ['5x palladium', '2x antimony'], 0x333399, [noDecomp]);

        // compDustOre('berzelianite', ['2x copper', '1x selenium'], 0x990000, [noDecomp]);

        // compDustOre('umangite', ['3x copper', '2x selenium'], 0x006699, [noDecomp]);

        // compDustOre('aguilarite', ['3x silver', '1x selenium', '1x sulfur'], 0xff5050, [noDecomp]);

        MH.compDustOre('strontianite', ['1x strontium', '1x carbon', '3x oxygen'], 0xe6ffff, []);

        MH.compDustOre('celestine', ['1x strontium', '1x carbon', '4x oxygen'], 0xe6ffff, []);

        // compDust('polybasite', ['12x silver', '4x copper', '2x arsenic', '13x sulfur'], 0xcc6600, []);

        MH.compDustOre('zavaritskite', ['1x bismuth', '1x oxygen', '1x fluorine'], 0xe7d795, []);

        MH.compDustOre('naquadite', ['2x naquadah', '1x magnesia', '1x magnetite'], 0x272424, [noDecomp]);

        MH.compLiquidTemp(
            'abydos_naquadite_dense_magma',
            5120,
            ['1x mystery', '1x naquadite', '1x mystery'],
            0x272424,
            [noDecomp]
        );

        MH.compLiquidTemp('naquadite_dense_residue', 2560, ['1x mystery', '1x naquadite', '1x mystery'], 0x524848, [
            noDecomp,
        ]);

        MH.compLiquidTemp(
            'abydos_refractory_dense_magma',
            4520,
            ['1x mystery', '1x titanite', '1x xenotime', '1x monazite', '1x scheelite', '1x mystery'],
            0xe65c00,
            [noDecomp]
        );

        MH.compLiquidTemp(
            'abydos_reactive_dense_magma',
            4980,
            ['1x mystery', '1x zapolite', '1x crookesite', '1x kitkaite', '1x lautarite', '1x mystery'],
            0xff471a,
            [noDecomp]
        );

        MH.compDust('abydos_magma_slag', ['1x mystery'], 0x8a726d, [noDecomp]);

        MH.compLiquidTemp(
            'refractory_dense_residue',
            2370,
            ['1x mystery', '1x titanite', '1x xenotime', '1x monazite', '1x scheelite', '1x mystery'],
            0xb85513,
            [noDecomp]
        );

        MH.compLiquidTemp(
            'reactive_dense_residue',
            2450,
            ['1x mystery', '1x zapolite', '1x crookesite', '1x kitkaite', '1x lautarite', '1x mystery'],
            0xad2705,
            [noDecomp]
        );
        */

        // Nether

        //Extended Debris
        MH.compDustLiquid('ancient_debris', ['1x mystery'], 0x603d1a, [noDecomp]);

        MH.elemIngotFluid(
            'ancient_netherite',
            0x46271b,
            DULL,
            [12349, 'low', VA('uev'), 1200],
            [plates, rod, noDecomp, densePlate, frame, longRod, foil]
        );

        //Atomic Nether Dust Line
        MH.compDustIcon(
            'atomic_nether_sludge',
            ['1x mystery', '1x mystery', '1x mystery', '1x mystery'],
            0x883039,
            RADIOACTIVE,
            [noDecomp]
        );

        MH.compDust('deactivated_nether', ['1x mystery', '1x mystery'], 0x664c4c, [noDecomp]);

        MH.compDust('activated_nether', ['1x mystery', '1x mystery'], 0xa01819, [noDecomp]);

        //Estalt Line
        MH.compLiquidTemp('molten_estaltadyne_mixture', 3500, ['1x mystery', '1x estalt', '1x mystery'], 0x8e0505, [
            noDecomp,
        ]);

        MH.compDustLiquid('estaltadyne', ['1x mystery', '1x estalt', '1x mystery'], 0x8e0535, [noDecomp]);

        // compDust('metmalic_estaltadyne', ['4x estalt','3x titanium','2x aluminium','5x sulfur'], 0x8E0560, [noDecomp]);
        // compDust('magnemalic_estaltadyne', ['4x estalt','3x titanium','5x sulfur'], 0x8E0480, [noDecomp]);
        // compDust('tytite_estaltadyne', ['4x estalt','3x titanium'], 0x8E0340, [noDecomp]);

        MH.compDust('estaltadyne_hydride', ['4x estalt', '9x hydrogen'], 0x8e0505, [noDecomp]);

        //Enriched Estalt Line
        MH.compLiquid('enriched_estaltadyne_mixture', ['1x mystery', '1x enriched_estalt', '1x mystery'], 0xbe4747, [
            noDecomp,
        ]);

        MH.compLiquid('enriched_estaltadyne_solution', ['1x mystery', '1x enriched_estalt', '1x mystery'], 0xbe4717, [
            noDecomp,
        ]);

        // Partial Line Deprication
        // compLiquid('enriched_estaltadyne_slurry', ['1x mystery','1x enriched_estalt','1x mystery'], 0xBE4777, [noDecomp]);
        // compLiquid('enriched_estaltadyne_naquide_slurry_mixture', ['1x mystery','1x enriched_estalt','1x enriched_naquadah','1x mystery'], 0xBE4697, [noDecomp]);
        // compLiquid('hyper_enriched_estaltadyne_slurry_mixture', ['1x mystery','2x enriched_estalt'], 0xBE4697, [noDecomp]);
        // compLiquid('hyper_enriched_estaltadyne_slurry_residue', ['1x mystery','2x enriched_estalt'],0xBE4677, [noDecomp]);
        // compLiquid('sodium_hyper_enriched_estaltadyne_sludge', ['2x sodium','1x mystery','2x enriched_estalt'], 0xBE4697, [noDecomp]);
        // compLiquid('hyper_enriched_estaltadyne_concentrate', ['2x enriched_estalt','1x mystery'], 0xBE4587, [noDecomp]);

        //Adamantine Line
        MH.compLiquid('enriched_adamantamite_mixture', ['1x mystery', '1x adamantine', '1x mystery'], 0x866e4b, [
            noDecomp,
        ]);

        MH.compLiquidTemp(
            'molten_adamantamite_mixture',
            3700,
            ['1x mystery', '1x adamantine', '1x mystery'],
            0x866e7b,
            [noDecomp]
        );

        MH.compDustLiquid('adamantamite', ['1x mystery', '1x adamantine', '1x mystery'], 0x825f2b, [noDecomp]);

        // compDust('adamantamite_metaltide', ['5x adamantine','4x titanium','2x iron','6x nitrogen'], 0x8F611E, [noDecomp]);
        // compDust('adamantamite_magnide', ['5x adamantine','4x titanium','2x iron'], 0x744D13, [noDecomp]);
        // compDust('adamantamite_titite', ['5x adamantine','4x titanium'], 0xB68E52, [noDecomp]);
        // compDust('adamantine_5', ['5x adamantine'], 0xCB9D58, [noDecomp]);

        MH.compDust('adamantine_hydroxide', ['1x adamantine', '3x hydrogen', '3x oxygen'], 0xcb8858, [noDecomp]);

        //Mythril Line
        MH.compLiquid('enriched_mythrillic_mixture', ['1x mystery', '1x mythril', '1x mystery'], 0x238213, [noDecomp]);

        MH.compLiquidTemp('molten_mythrillic_mixture', 3100, ['1x mystery', '1x mythril', '1x mystery'], 0x238342, [
            noDecomp,
        ]);

        MH.compDustLiquid('mythrillic', ['1x mystery', '1x mythril', '1x mystery'], 0x238362, [noDecomp]);

        // compDust('mythrillic_carbinide', ['6x mythril','6x carbon','3x zirconium','2x vanadium'], 0x238441, [noDecomp]);
        // compDust('mythrillic_metlide', ['6x mythril','3x zirconium','2x vanadium'], 0x238451, [noDecomp]);
        // compDust('mythrillic_metnide', ['6x mythril','3x zirconium'], 0x238432, [noDecomp]);

        MH.compDust('mythrillic_hydride', ['1x mythril', '2x hydrogen'], 0x238338, [noDecomp]);

        // Calamatium/Isovol Line
        MH.compLiquid('impure_calamatium_solution', [], 0x990000, []);

        MH.compLiquid('impure_isovol_solution', [], 0x000066, []);

        MH.compLiquid('calamatium_solution', [], 0xe60000, []);

        MH.compLiquid('isovol_solution', [], 0x6600cc, []);

        MH.compDust('calamatium_fluoride', ['1x calamatium', '2x fluorine'], 0xcc0066, [noDecomp]);

        MH.compDust('isovol_fluoride', ['1x isovol', '2x fluorine'], 0x9900ff, [noDecomp]);

        // Magmas
        MH.compLiquidTemp('highly_unstable_nether_magma', 9001, ['1x mystery'], 0xffa025, [noDecomp]);

        MH.compLiquidTemp('debris_rich_nether_magma', 7600, ['1x mystery'], 0x6c3628, [noDecomp]);

        MH.compLiquidTemp('mythrillic_nether_magma', 9299, ['1x mystery', '1x mythril', '1x mystery'], 0x238383, [
            noDecomp,
        ]);

        MH.compLiquidTemp('adamantamite_nether_magma', 11299, ['1x mystery', '1x adamantine', '1x mystery'], 0x826944, [
            noDecomp,
        ]);

        MH.compLiquidTemp('estaltadyne_nether_magma', 10299, ['1x mystery', '1x estalt', '1x mystery'], 0xa92323, [
            noDecomp,
        ]);

        MH.compLiquidTemp(
            'mystical_nether_magma',
            11600,
            ['1x mystery', '1x adamantine', '1x mystery', '1x estalt', '1x mystery', '1x mythril', '1x mystery'],
            0xf26b87,
            [noDecomp]
        );

        MH.compLiquidTemp(
            'enriched_mystical_concentrate',
            1260,
            [
                '1x mystery',
                '1x adamantine',
                '1x mystery',
                '1x enriched_estalt',
                '1x mystery',
                '1x mythril',
                '1x mystery',
            ],
            0xf26b87,
            [noDecomp]
        );

        // End

        // Abydos
        // Titanite(Zirconium) Line
        MH.compLiquid('titanite_slurry', ['1x titanite', '1x mystery'], 0x862d2d, [noDecomp]);

        MH.compLiquid('titanite_slurry_residue', ['1x rutile', '1x mystery'], 0xbf4040, [noDecomp]);

        MH.compLiquid(
            'hydroxo_dioxo_titanite_mixture',
            ['2x sodium', '1x rutile', '2x oxygen', '2x hydrogen', '1x mystery'],
            0xd27979,
            [noDecomp]
        );

        MH.compLiquid('titanite_residue', ['1x rutile', '1x mystery'], 0xe6004c, [noDecomp]);

        MH.compLiquid('titanium_tetrachloride_mixture', ['1x titanium_tetrachloride', '1x mystery'], 0xff1a66, [
            noDecomp,
        ]);

        MH.compDust('zirconium_tetrachloride', ['1x zirconium', '4x chlorine'], 0xffad33, [noDecomp]);

        // Zapolite(Zapolgium) line
        MH.compDust('zapolgium_aluminium_oxide', ['1x zapolgium', '2x iodine', '2x aluminium', '4x oxygen'], 0x6666ff, [
            noDecomp,
        ]);

        MH.compDust('zapolgium_diiodide_dioxide', ['1x zapolgium', '2x iodine', '2x oxygen'], 0x660066, [noDecomp]);

        MH.compDust('zapolgium_diiodide_oxide', ['1x zapolgium', '2x iodine', '1x oxygen'], 0xff66ff, [noDecomp]);

        MH.compDust('zapolgium_oxide', ['1x zapolgium', '1x oxygen'], 0xff9933, [noDecomp]);

        MH.compDust('zapolgium_chloride', ['1x zapolgium', '2x chlorine'], 0x99ff33, [noDecomp]);

        MH.compDust('zapolgium_hydroxide', ['1x zapolgium', '2x oxygen', '2x hydrogen'], 0x00ff99, [noDecomp]);

        // Xenotime RE line
        MH.compLiquid('rare_earth_sulfate_solution', ['2x mystery', '3x sulfate'], 0xc6c2a8, [noDecomp]);

        MH.compLiquid('rare_earth_leach_mixture', ['3x mystery', '3x sulfate'], 0xafad9f, [noDecomp]);

        MH.compLiquid('rare_earth_concentrate', ['1x mystery', '1x sulfur', '4x oxygen'], 0x8c8a7e, [noDecomp]);

        MH.compDust('rich_rare_earth', ['1x mystery'], 0xb5ac90, [noDecomp]);

        // Naquadite Line
        MH.compLiquid('hydroiodic_acid', ['1x hydrogen', '1x iodine'], 0x906ad6, [noDecomp]);

        MH.compLiquid('naquadite_solution', ['1x naquadite', '1x mystery'], 0x524848, [noDecomp]);

        // Alloys and other compounds
        MH.conductor(
            'zalloy',
            ['3x zapolgium', '4x duranium', '2x europium'],
            0xff66ff,
            METALLIC,
            [10799, 'highest', VHA('zpm'), 3000],
            [V('uv'), 2, 4, false],
            [plates, frame, rod, boltAndScrew, round, longRod, gear, smallGear, ring, densePlate]
        );

        MH.conductor(
            'zirconium_selenide_diiodide',
            ['1x zirconium', '1x selenium', '2x iodine'],
            0x6600cc,
            DULL,
            [9600, 'higher', VA('luv'), 3600],
            [V('uhv'), 8, 16, false],
            [spring]
        );

        MH.compIngotLiquid(
            'zircalloy_4',
            ['251x zirconium', '3x tin', '2x chromium', '1x iron'],
            0xff9999,
            DULL,
            [9100, 'higher', VA('luv'), 1800],
            [gear, smallGear, rotor, round, frame]
        );

        // Misc
        MH.compIngotLiquid(
            'indium_tin_lead_cadmium_soldering_alloy',
            ['14x indium', '3x tin', '2x lead', '1x cadmium'],
            0xa6a6a6,
            null,
            null,
            []
        );

        MH.compIngotLiquid(
            'naquadated_soldering_alloy',
            ['3x tin', '18x indium', '6x silver', '4x lutetium', '3x cerium', '3x naquadah', '1x trinium', '2x lead'],
            0x8790a1,
            null,
            null,
            []
        );

        MH.compIngotLiquid(
            'thorium_plut_duranide_241',
            ['4x thorium', '1x duranium', '3x plutonium_241'],
            0xec342a,
            null,
            [10199, 'highest', VA('uv'), 850],
            [fineWire, noDecomp, foil]
        );

        // AE2 (constants left due to sec color components)
        MH.elemFluid('skystone', 'skystone', 0x414445, []);

        event.create('fluix').element(GTElements.get('fluix')).flags(lens).iconSet('fluix');

        MH.compIngotLiquid(
            'sky_steel',
            ['1x skystone', '2x steel'],
            0xccffcc,
            METALLIC,
            [1600, 'low', VA('mv'), 400],
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
                .blastTemp(1600, 'low', VA('mv'), 200)
                .flags(noDecomp, plates);
        };

        skystoneAlloys('gold', 0xcfbe38, 'METALLIC');
        skystoneAlloys('diamond', 0x9bd6d8, 'SHINY');
        skystoneAlloys('certus_quartz', 0x67d6db, 'DULL');

        MH.compIngotLiquid(
            'fluix_steel',
            ['1x fluix', '2x steel'],
            0x8f5ccb,
            METALLIC,
            [1900, 'mid', VA('mv'), 400],
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
                .blastTemp(4000, 'high', VA('iv'), 800);
        };

        netheriteSkystoneAlloys('gold', 0x978b2d, 'METALLIC');
        netheriteSkystoneAlloys('certus_quartz', 0x396a6c, 'DULL');

        // PEEK plastic Line
        MH.compDust('disodium_salt_of_hydroquinone', ['6x carbon', '4x hydrogen', '2x oxygen', '2x sodium'], 0xeaeaf9, [
            noDecomp,
        ]);

        MH.compDust('hydroquinone', ['6x carbon', '6x hydrogen', '2x oxygen'], 0xf9f9ff, [noDecomp]);

        MH.compDust('sodium_fluoride', ['1x sodium', '1x fluorine'], 0xdedee2, []);

        MH.compGas('carbon_acid', ['2x hydrogen', '1x carbon', '3x oxygen'], 0x333333, [noDecomp]);

        MH.compLiquid('fluorobenzene', ['6x carbon', '5x hydrogen', '1x fluorine'], 0xffffff, [noDecomp]);

        MH.compLiquid(
            '4_fluorobenzoyl_chloride',
            ['7x carbon', '4x hydrogen', '1x chlorine', '1x fluorine', '1x oxygen'],
            0xfffff0,
            [noDecomp]
        );

        MH.compLiquid('benzoyl_chloride', ['7x carbon', '5x hydrogen', '1x chlorine', '1x oxygen'], 0xfffadf, [
            noDecomp,
        ]);

        MH.compLiquid('benzotrichloride', ['7x carbon', '5x hydrogen', '3x chlorine'], 0xddd8bc, [noDecomp]);

        MH.compDust('44_difluorobenzophenone', ['13x carbon', '8x hydrogen', '1x oxygen', '2x fluorine'], 0xeee1c9, [
            noDecomp,
        ]); //naming like this: 4_4_di... will make kubejs go error to annoy you :)

        MH.polymerFluidPipe(
            'polyether_ether_ketone',
            ['19x carbon', '12x hydrogen', '3x oxygen'],
            0xccbba7,
            [550, 600, true, true, true, false],
            [foil, plates, ring, noDecomp]
        );

        // SiC/Bi2Te3 Line
        MH.compDust('sodium_borohydride', ['1x sodium', '1x boron', '4x hydrogen'], 0xe3dec8, [noDecomp]);

        MH.compGas('nitrate', ['1x nitrogen', '3x oxygen'], 0xdbc365, [noDecomp]); //Hide in JEI

        MH.compDust('bismuth_3_nitrate', ['1x bismuth', '3x nitrate'], 0xdedbcd, [noDecomp]);

        MH.compDust('sodium_nitrate', ['1x sodium', '1x nitrogen', '3x oxygen'], 0xe6e5e5, []);

        MH.compGas('diborane', ['2x boron', '6x hydrogen'], 0xfdffe1, []);

        MH.compDust('silicon_carbide', ['1x silicon', '1x carbon'], 0xb79f8d, []);

        MH.compDust('bismuth_tritelluride', ['2x bismuth', '3x tellurium'], 0xdeb18e, [noDecomp]); //Hide in JEI

        MH.compDust(
            'silicon_carbide_over_bismuth_tritelluride',
            ['1x silicon_carbide', '1x bismuth_tritelluride'],
            0x86c455,
            []
        );

        //Hexafluorobromic Acid
        MH.compDustIcon('nickel_fluoride', ['1x nickel', '2x fluorine'], 0xa7a9a8, METALLIC, []);

        MH.compDustIcon('caesium_fluoride', ['1x caesium', '1x fluorine'], 0x969d9b, DULL, []);

        MH.compLiquid('bromine_pentafluoride', ['1x bromine', '5x fluorine'], 0x8e6565, []);

        MH.compLiquid('hexafluorobromine', ['1x bromine', '6x fluorine'], 0x000000, [noDecomp]);

        MH.compLiquid('caesium_hexafluorobromine', ['1x caesium', '1x hexafluorobromine'], 0x988585, [noDecomp]);

        MH.compLiquid('hexafluorobromic_acid', ['1x hydrogen', '1x hexafluorobromine'], 0xa15e5e, [noDecomp]);

        //ANSD Line
        // compLiquid('oganesson_rich_sludge_concentrate', ['1x mystery','1x oganesson','1x mystery'], 0xFFFFFF, [noDecomp]);

        MH.compDust('hafnastide_rich_sludge', ['1x mystery', '1x hafnium', '1x astatine', '1x mystery'], 0xa8798a, [
            noDecomp,
        ]);

        MH.compDust('flerovium_rich_re_sludge', ['1x mystery', '1x flerovium', '1x mystery', '1x mystery'], 0x798579, [
            noDecomp,
        ]);

        MH.compDust('pologium_rich_sludge', ['1x mystery', '1x polonium', '1x seaborgium', '1x mystery'], 0x576b62, [
            noDecomp,
        ]);

        MH.compDust('silicate', ['1x silicon', '4x oxygen'], 0xc0ba97, [noDecomp]);

        MH.compDust('pyrophosphate', ['2x phosphorus', '7x oxygen'], 0xc08b63, []);

        MH.compDust('sulfur_hexafluoride', ['1x sulfur', '6x fluorine'], 0xc0ba63, [noDecomp]);

        // compDust('plutonium_octofluoride', ['2x plutonium', '8x fluorine'], 0x000000, [noDecomp]);
        // compLiquid('uranium_tetrafluoride', ['1x uranium', '4x fluorine'], 0x6CAB3F, [noDecomp]);

        MH.compLiquid('hydroxide', ['1x oxygen', '1x hydrogen'], 0xc0d4dd, []); //Hide in JEI

        // compLiquid('caesium_oganesson_hexanitrate', ['2x caesium', '1x oganesson', '6x nitrate'], 0x769192, [noDecomp]);
        // compLiquid('caesium_oganesson_trioxide', ['2x caesium', '1x oganesson', '3x oxygen'], 0x4E7577, [noDecomp]);
        // compLiquid('caesium_nitrate', ['1x caesium', '1x nitrogen', '3x oxygen'], 0x7C8A8B, []);

        // compLiquid('oganesson_tetranitrate', ['1x oganesson', '4x nitrate'], 0x948FAD, [noDecomp]);

        MH.compDust('magnesium_hydroxide', ['1x magnesium', '2x hydroxide'], 0x766b73, [noDecomp]);

        // compDust('hafnium_thorium_iron_2_hydroxide_potassium_disilicate', ['1x hafnium', '1x thorium', '1x iron', '2x hydroxide', '4x potassium', '2x silicate'], 0x618782, [noDecomp]);

        MH.compDust('iron_2_hydroxide', ['1x iron', '2x hydroxide'], 0x929a98, [noDecomp]);

        // compDust('hafnium_thorium_octachloride', ['1x hafnium', '1x thorium', '8x chlorine'], 0x637770, [noDecomp]);
        // compDust('thorium_dioxide', ['1x thorium', '2x oxygen'], 0x384F47, [noDecomp]);
        // compDust('hafnium_dioxide', ['1x hafnium', '2x oxygen'], 0x88A1A0, [noDecomp]);
        // compDust('sodium_hafnate', ['2x sodium', '1x hafnium', '3x oxygen'], 0x8894A1, [noDecomp]);
        // compDust('barium_diastatide', ['1x barium', '2x astatine'], 0x665058, [noDecomp]);

        // compDust('barium_hydroxide', ['1x barium', '2x hydroxide'], 0xB5AC9B, [noDecomp]);

        // compDust('barium_carbonate', ['1x barium', '1x carbon', '3x oxygen'], 0x9B8F77, []);

        MH.compDust('sodium_astatide', ['1x sodium', '1x astatine'], 0x5f5076, [noDecomp]);

        // compLiquid('hydroastatic_acid', ['1x hydrogen', '1x astatine'], 0xB56C5B, [noDecomp]);

        MH.compLiquid('silicic_acid', ['4x hydrogen', '1x silicate'], 0xb4bbbe, [noDecomp]);

        // compDust('seaborgium_cerium_tricarbon_octasulfate', ['1x seaborgium', '1x cerium', '3x carbon', '8x sulfate'], 0x75A99E, [noDecomp]);
        // compDust('cerium_4_sulfate', ['1x cerium', '2x sulfate'], 0x828685, [noDecomp]);
        // compDust('chromium_sulfate', ['2x chromium', '3x sulfur', '12x oxygen'], 0xEEE9DB, []);
        // compDust('cerium_dioxide', ['1x cerium', '2x oxygen'], 0xB9CFDB, []);
        // compDust('seaborgium_trisulfate', ['1x seaborgium', '3x sulfate'], 0x8AA89B, [noDecomp]);
        // compDust('seaborgium_trioxide', ['1x seaborgium', '3x oxygen'], 0x4B827B, [noDecomp]);
        // compDust('sodium_seaborgate', ['2x sodium', '1x seaborgium', '4x oxygen'], 0x298B80, [noDecomp]);

        MH.compDust('seaborgium_dioxide', ['1x seaborgium', '2x oxygen'], 0x12a190, [noDecomp]);

        MH.compDust('hafnium_hexachloride', ['1x hafnium', '6x chlorine'], 0xa0a8a6, [noDecomp]);

        // compDust('hafnium_thorium_iron_magnesium_disilicate_monosulfate', ['1x hafnium', '1x thorium', '1x iron', '2x magnesium', '2x silicate', '1x sulfate'], 0x98B4B0, [noDecomp]);
        // compDust('seaborgium_cerium_tricarbon_tetrakis_orthosilicate', ['1x seaborgium', '1x cerium', '3x carbon', '4x silicate'], 0x268075, [noDecomp]);
        // compDust('iron_2_barium_diastatide_trisulfate', ['2x iron', '1x barium', '2x astatine', '3x sulfate'], 0x9EB286, [noDecomp]);
        // compDust('dipolonium_diplatinum_tris_pyrophosphate', ['2x polonium', '2x platinum', '3x pyrophosphate'], 0xA0664D, [noDecomp]);
        // compDust('flerovium_hexadecafluoride_di_sulfur_trioxide', ['1x flerovium', '2x sulfur_trioxide', '16x fluorine'], 0x36413F, [noDecomp]);

        MH.compDust('silver_sulfate', ['2x silver', '1x sulfur', '4x oxygen'], 0xd4cf91, []);

        // compDust('flerovium_hexadecafluoride', ['1x flerovium', '16x fluorine'], 0x5A6759, [noDecomp]);

        MH.compDust('flerovium_tetrafluoride', ['1x flerovium', '4x fluorine'], 0x254722, [noDecomp]);

        // compDust('polonium_pyrophosphate', ['1x polonium', '1x pyrophosphate'], 0x356231, [noDecomp]);

        MH.compLiquid('pyrophosphoric_acid', ['4x hydrogen', '1x pyrophosphate'], 0xb3a36d, []);

        // compLiquid('orthophosphoric_acid', ['3x hydrogen', '1x phosphorus', '4x oxygen'], 0xD5C385, [noDecomp]);

        // compDust('sodium_phosphate', ['3x sodium', '1x phosphorus', '4x oxygen'], 0x819BC8, []);

        // compDust('polonium_tetrachloride', ['1x polonium', '4x chlorine'], 0x357C44, [noDecomp]);
        // compDust('polonium_hydroxide', ['1x polonium', '4x hydroxide'], 0x0E5A1F, [noDecomp]);

        MH.compDust('polonium_carbonate', ['1x polonium', '1x carbon', '3x oxygen'], 0x2f5637, [noDecomp]);

        // compDust('flerovium_hexaoxide_octafluorosulfatoplutonate', ['1x flerovium', '6x oxygen', '2x sulfur_hexafluoride', '2x plutonium_octofluoride'], 0x582914, [noDecomp]);
        // compLiquid('caesium_oganesson_hexanitrate_tetrafluorouranate', ['2x caesium', '1x oganesson', '6x nitrate', '2x uranium_tetrafluoride'], 0x427A21, [noDecomp]);
        // compDust('hafnium_thorium_iron_magnesium_disilicate_monosulfate_bonded_iron_2_barium_diastatide_trisulfate', ['1x hafnium_thorium_iron_magnesium_disilicate_monosulfate', '1x iron_2_barium_diastatide_trisulfate'], 0x6A8B9A, [noDecomp]);
        // compDust('seaborgium_cerium_tricarbon_tetrakis_orthosilicate_linked_dipolonium_diplatinum_tris_pyrophosphate', ['1x seaborgium_cerium_tricarbon_tetrakis_orthosilicate', '1x dipolonium_diplatinum_tris_pyrophosphate'], 0x526A48, [noDecomp]);
        // compDust('flerovium_hexaoxide_octafluorosulfatoplutonate_enriched_rare_earth', ['4x flerovium_hexaoxide_octafluorosulfatoplutonate', '3x mystery'], 0x6A4852, [noDecomp]);

        // PEDOT:PSS plastic Line
        MH.compLiquid('maleic_anhydride', ['4x carbon', '2x hydrogen', '3x oxygen'], 0xaaa099, [noDecomp]);

        MH.compLiquid('dimethyl_maleate', ['6x carbon', '10x hydrogen', '4x oxygen'], 0xc2bfb7, [noDecomp]);

        MH.compLiquid('dimethyl_succinate', ['4x carbon', '10x hydrogen', '3x oxygen'], 0xd0ccc4, [noDecomp]);

        MH.compLiquid('14_butanediol', ['4x carbon', '10x hydrogen', '2x oxygen'], 0xb8c4c4, [noDecomp]);

        MH.compDust('thiophene', ['4x carbon', '4x hydrogen', '1x sulfur'], 0xc8b680, [noDecomp]);

        MH.compLiquid('12_dibromoethane', ['2x carbon', '4x hydrogen', '2x bromine'], 0xb0a6cc, [noDecomp]);

        MH.compGas('dimethylformamide', ['3x carbon', '7x hydrogen', '1x nitrogen', '1x oxygen'], 0xa3b0b7, [noDecomp]); // DMF

        MH.compLiquid('34_ethylenedioxythiophene', ['6x carbon', '6x hydrogen', '2x oxygen', '1x sulfur'], 0x8a9a86, [
            noDecomp,
        ]); // EDOT

        MH.compDust('potassium_bromide', ['1x potassium', '1x bromine'], 0xd0d0d0, []);

        MH.compDust('benzoyl_peroxide', ['14x carbon', '10x hydrogen', '4x oxygen'], 0xc6a8a8, [noDecomp]);

        MH.compGas('hydrogen_chloride', ['1x hydrogen', '1x chlorine'], 0xa8ccc2, []);

        MH.compLiquid('chlorosulfonic_acid', ['1x hydrogen', '1x sulfur', '3x oxygen', '1x chlorine'], 0xa84e4e, [
            noDecomp,
        ]);

        MH.compLiquid('polystyrene_sulfate', ['8x carbon', '8x hydrogen', '3x oxygen', '1x sulfur'], 0xd8c6f0, [
            noDecomp,
        ]); // PSS

        MH.compDust('ferric_nitrate', ['1x iron', '3x nitrate'], 0xaf5f5f, [noDecomp]);

        MH.compLiquid(
            'poly_34_ethylenedioxythiophene',
            ['6x carbon', '4x hydrogen', '2x oxygen', '1x sulfur'],
            0x7c8fb2,
            [noDecomp]
        ); //PEDOT

        MH.compLiquid('sorbitol', ['6x carbon', '14x hydrogen', '6x oxygen'], 0xf8f0e8, [noDecomp]); //gotten from bacteria

        MH.compLiquid('sorbitan', ['6x carbon', '12x hydrogen', '5x oxygen'], 0xe8d6c6, [noDecomp]); //losses a water to steam

        MH.compLiquid('sorbitan_monoester', ['24x carbon', '46x hydrogen', '6x oxygen'], 0xd9cbb3, [noDecomp]);

        MH.compLiquid('polysorbate_20', ['1x sorbitan_monoester', '20x ethylene_glycol'], 0xa0d7dd, [noDecomp]);

        MH.compDust(
            'poly_34_ethylenedioxythiophene_polystyrene_sulfate_paste',
            ['9x carbon', '7x hydrogen', '1x sulfur', '3x oxygen'],
            0x5d5a85,
            [noDecomp]
        );

        MH.compLiquid(
            'poly_34_ethylenedioxythiophene_polystyrene_sulfate_solution',
            ['1x poly_34_ethylenedioxythiophene_polystyrene_sulfate_paste', '2x water'],
            0x6c7fb0,
            [noDecomp]
        );

        MH.polymerFluidPipe(
            'poly_34_ethylenedioxythiophene_polystyrene_sulfate',
            ['8x carbon', '7x hydrogen', '1x sulfur', '3x oxygen'],
            0x26396d,
            [675, 800, true, true, true, false],
            [foil, plates, ring, plates, noDecomp]
        ); //PEDOT

        //FFKM Line [Rubber After SBR]
        MH.compLiquid('perfluoromethyl_vinyl_ether', ['3x carbon', '6x fluorine', '1x oxygen'], 0xd0e5e5, [noDecomp]);

        MH.compLiquid('hexafluorobutadiene', ['4x carbon', '6x fluorine'], 0xb8d2d9, [noDecomp]);

        MH.compDust(
            'raw_perfluoroelastomer_rubber',
            ['3x tetrafluoroethylene', '1x perfluoromethyl_vinyl_ether', '1x hexafluorobutadiene'],
            0xb0cccc,
            [noDecomp]
        );

        event
            .create('perfluoroelastomer_rubber')
            .polymer()
            .fluid()
            .components('1x raw_perfluoroelastomer_rubber')
            .color(0x536767)
            .flags(foil, plates, ring, plates, rod, noDecomp)
            .toolStats(
                ToolProperty.Builder.of(1, 1, 65535, 1, [GTToolType.SOFT_MALLET, GTToolType.PLUNGER])
                    .unbreakable()
                    .build()
            );

        //Polyimide Line [Insulator UHV+]
        MH.compLiquid('azanide', ['1x nitrogen', '2x hydrogen'], 0xbfc7e5, [noDecomp]); //Hide in JEI

        MH.compLiquid('benzophenone', ['13x carbon', '10x hydrogen', '1x oxygen'], 0xe5d3b5, [noDecomp]);

        MH.compLiquid('methylamine', ['1x carbon', '3x hydrogen', '1x nitrogen', '2x hydrogen'], 0xd8d8e5, [noDecomp]);

        MH.compDust(
            'benzophenone_3344_tetracarboxylic_dianhydride',
            ['17x carbon', '6x hydrogen', '7x oxygen'],
            0xd1b9a3,
            [noDecomp]
        );

        MH.compLiquid('y_butyrolactone', ['4x carbon', '6x hydrogen', '2x oxygen'], 0xd6e2e2, [noDecomp]);

        MH.compLiquid('m_phelyenediamine', ['6x carbon', '4x hydrogen', '2x azanide'], 0xe2bfc0, [noDecomp]);

        MH.compDust('n_methyl_2_pyrrolidone', ['5x carbon', '9x hydrogen', '1x nitrogen', '1x oxygen'], 0xbdc8d8, [
            noDecomp,
        ]);

        MH.compLiquid('polyamic_acid', ['17x carbon', '12x hydrogen', '2x nitrogen', '6x oxygen'], 0xcbbfa3, [
            noDecomp,
        ]);

        MH.polymerFluid('polyimide', ['17x carbon', '10x hydrogen', '2x nitrogen', '4x oxygen'], 0xd6a970, [
            foil,
            plates,
            plates,
            rod,
            noDecomp,
        ]);

        // Large Multis

        /**
         * @param {string} name
         * @param {(Material | string)[]} components
         * @param {number} color
         */
        const largeMulti = (name, components, color) => {
            MH.compIngot(name, components, color, DULL, [2200, 'low', VA('mv'), 1500], [plates, frame, rod]);
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
        MH.compDustIcon('thallium_tungstate', ['2x thallium', '1x tungsten', '4x oxygen'], 0xe3d18a, DULL, []);

        MH.compDustIcon('tungsten_trioxide', ['1x tungsten', '3x oxygen'], 0xadb426, DULL, []);

        // Boron Nitride and intermediates
        MH.compDustIcon('boron_nitride', ['1x boron', '1x nitrogen'], 0xd4c4a0, DULL, []);

        MH.compDustIcon('boron_trioxide', ['2x boron', '3x oxygen'], 0xdacabb, DULL, []);

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
            SHINY,
            [8650, 'highest', VHA('zpm'), 2100],
            [plates, rod, frame]
        );

        MH.compIngotLiquid(
            'thacoloy_nq_42x',
            [
                '6x incoloy_ma_956',
                '4x enriched_naquadah',
                '2x niobium_titanium',
                '4x osmiridium',
                '4x thallium_tungstate',
            ],
            0x467624,
            SHINY,
            [8800, 'highest', VHA('zpm'), 1800],
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
            METALLIC,
            [8990, 'highest', VHA('uv'), 2400],
            [plates, rod, frame, smallGear, gear, round, ring, boltAndScrew, longRod, foil, densePlate]
        );

        // Akreyium Line
        MH.elemFluid('utopian_akreyrium', 'akreyrium', 0xffffff, []);

        MH.compIngotLiquid(
            'lepton_coalescing_superalloy',
            ['4x thallium_tungstate', '2x nickel', '4x graphene', '3x niobium', '4x bismuth'],
            0x80d1c8,
            DULL,
            [5300, 'high', VA('luv'), 1400],
            [plates, rod, frame, foil]
        );

        MH.compLiquid('lepton_sparse_akreyrium', ['1x utopian_akreyrium', '1x mystery'], 0x6e6e87, [noDecomp]);

        MH.compLiquid(
            'lepton_flux_akreyrium',
            ['1x utopian_akreyrium', '6x lepton_coalescing_superalloy', '1x mystery'],
            0xaca2ba,
            [noDecomp]
        );

        MH.compLiquid('gritty_akreyrium', ['1x utopian_akreyrium', '1x mystery'], 0x464655, [noDecomp]);

        MH.compLiquid(
            'akreyrium_pcb_graphite_nanoparticle_coolant',
            ['5x pcb_coolant', '2x utopian_akreyrium', '32x graphite'],
            0x676763,
            [noDecomp]
        );

        // Akreyrium Variants
        MH.compLiquid('lepton_flavour_foundational_flux', ['6x lepton_coalescing_superalloy', '1x mystery'], 0xe5cee1, [
            noDecomp,
        ]);

        // Tau
        MH.compLiquid('light_tau_infusion_flux', ['1x mystery'], 0xe5cee1, [noDecomp]);

        MH.compLiquid('heavy_tau_infusion_flux', ['1x light_tau_infusion_flux'], 0xdfdae9, [noDecomp]);

        MH.compLiquid('superlight_tau_infusion_flux', ['1x light_tau_infusion_flux'], 0xd9e7f0, [noDecomp]);

        MH.compLiquid('superheavy_tau_infusion_flux', ['1x heavy_tau_infusion_flux'], 0xccffff, [noDecomp]);

        MH.compLiquid(
            'ethereal_tau_infusion_flux',
            ['2x superheavy_tau_infusion_flux', '2x superlight_tau_infusion_flux'],
            0x99ccff,
            [noDecomp]
        );

        MH.compLiquidStill('sparse_tau_akreyrium', ['1x utopian_akreyrium', '1x mystery'], [noDecomp]);

        MH.compLiquidStill(
            'dense_tau_akreyrium',
            ['1x utopian_akreyrium', '1x mystery', '1x ethereal_tau_infusion_flux'],
            [noDecomp]
        );

        // Muon
        MH.compLiquid('twinkling_muon_infusion_flux', ['1x mystery'], 0xddd8dc, [noDecomp]);

        MH.compLiquid('glowing_muon_infusion_flux', ['1x mystery'], 0xd5e1d6, [noDecomp]);

        MH.compLiquid('shining_muon_infusion_flux', ['1x mystery'], 0xcdebd1, [noDecomp]);

        MH.compLiquid('radiant_muon_infusion_flux', ['1x mystery'], 0xc5f4cb, [noDecomp]);

        MH.compLiquid('brilliant_muon_infusion_flux', ['1x mystery'], 0xbdfec6, [noDecomp]);

        MH.compLiquidStill('sparse_muon_akreyrium', ['1x utopian_akreyrium', '1x mystery'], [noDecomp]);

        MH.compLiquidStill(
            'dense_muon_akreyrium',
            ['1x utopian_akreyrium', '1x mystery', 'brilliant_muon_infusion_flux'],
            [noDecomp]
        );

        // Electron
        MH.compLiquid('mono_phase_electron_infusion_flux', ['1x mystery'], 0xe0c5f6, [noDecomp]);

        MH.compDust('di_phase_electron_infusion_agent', ['1x mystery'], 0xe0bded, [noDecomp]);

        MH.compDustIcon('tri_phase_electron_infusion_agent', ['1x mystery'], 0xdfb6e4, MAGNETIC, [noDecomp]);

        MH.compDustIcon('weak_gamma_phase_electron_infusion_agent', ['1x mystery'], 0x856783, MAGNETIC, [noDecomp]);

        MH.compDustIcon('weak_beta_phase_electron_infusion_agent', ['1x mystery'], 0x6b4f66, MAGNETIC, [noDecomp]);

        MH.compDustIcon('gamma_phase_electron_infusion_agent', ['1x mystery'], 0xdeafdc, MAGNETIC, [noDecomp]);

        MH.compDustIcon('beta_phase_electron_infusion_agent', ['1x mystery'], 0xdda8d3, MAGNETIC, [noDecomp]);

        MH.compDustIcon('alpha_phase_electron_infusion_agent', ['1x mystery'], 0xdc99c1, MAGNETIC, [noDecomp]);

        MH.compLiquid('alternating_phase_electron_infusion_flux', ['1x mystery'], 0xdeadb3, [noDecomp]);

        MH.compLiquidStill('sparse_electron_akreyrium', ['1x utopian_akreyrium', '1x mystery'], [noDecomp]);

        MH.compLiquidStill('dense_electron_akreyrium', ['1x utopian_akreyrium', '1x mystery'], [noDecomp]);

        // Resource Gen
        // compLiquid('brackish_water', ['1x water', '1x mystery'], 0x459ea4, [noDecomp]);

        MH.compLiquid('iron_mixture', ['1x mystery'], 0xc42626, [noDecomp]);

        MH.compLiquid('copper_mixture', ['1x mystery'], 0xc86524, [noDecomp]);

        MH.compLiquid('quartz_mixture', ['1x mystery'], 0xabc5e0, [noDecomp]);

        /*/reflective metal
    event.create('reflective_metal')
        .ingot()
        .components('5x aluminium', '3x steel', '2x glowstone')
        .color(0xA1ABBC)
        .flags(plates, rod, frame)
        .iconSet(DULL)
        .blastTemp(2000, 'low', VA('mv'), 600);*/

        MH.compLiquid('rare_ore_residue', ['1x mystery'], 0x556278, [noDecomp]);

        MH.compDust('chromite_sludge', ['2x chromite', '1x mystery'], 0x4c3c4c, [noDecomp]);

        MH.compDust('rare_sludge', ['1x mystery'], 0xceec94, [noDecomp]);

        MH.compDust('vanadium_magnetite_sludge', ['2x vanadium_magnetite', '1x mystery'], 0x1c1c2c, [noDecomp]);

        MH.compDust('cobaltite_sludge', ['2x cobaltite', '1x mystery'], 0x6186bb, [noDecomp]);

        MH.compDust('rare_metallic_residue', ['1x silver', '2x calcite'], 0x515755, [noDecomp]);

        MH.compLiquid('raw_ore_slurry', ['1x mystery'], 0x7b8087, [noDecomp]);

        MH.compLiquid('mixed_mineral_residue', ['1x mystery'], 0x566e6e, [noDecomp]);

        MH.compLiquid('sulfuric_mineral_mixture', ['1x mystery'], 0xe34f1e, [noDecomp]);

        MH.compLiquid('oxygenous_mineral_mixture', ['1x mystery'], 0x359696, [noDecomp]);

        //molten ores
        MH.compLiquidTemp('molten_ore_mixture', 1273, ['1x mystery'], 0x575050, [noDecomp]);

        MH.compLiquidTemp('molten_bauxite_ore', 1160, ['1x bauxite'], 0xb5b69a, [noDecomp]);

        MH.compLiquidTemp('molten_pitchblende_ore', 1160, ['1x pitchblende'], 0xafc585, [noDecomp]);

        MH.compLiquidTemp('molten_molybdenite_ore', 1160, ['1x molybdenite'], 0xc1d0a4, [noDecomp]);

        MH.compLiquidTemp('molten_ilmenite_ore', 1160, ['1x ilmenite'], 0xcba88f, [noDecomp]);

        MH.compLiquidTemp('molten_tungstate_ore', 1160, ['1x tungstate'], 0x9cacb1, [noDecomp]);

        MH.compLiquidTemp('molten_bastnasite_ore', 1160, ['1x bastnasite'], 0x988e84, [noDecomp]);

        MH.compLiquidTemp('molten_cooperite_ore', 1160, ['1x cooperite'], 0xa4a38b, [noDecomp]);

        MH.elemGem('purified_naquadah', 0x000807, null, [noDecomp]);

        MH.compDust('indium_oxide', ['2x indium', '3x oxygen'], 0xe3d28e, []);

        //nether star line essences
        MH.compLiquid('blitz', ['1x mystery'], 0xfdf3c4, [noDecomp]);

        MH.compLiquid('blizz', ['1x mystery'], 0xb4effa, [noDecomp]);

        MH.compLiquid('basalz', ['1x mystery'], 0x6f190e, [noDecomp]);

        MH.compLiquid('energized_blaze', ['1x mystery'], 0xffcd1a, [noDecomp]);

        MH.compLiquid('energized_blitz', ['1x mystery'], 0xfdf5ce, [noDecomp]);

        MH.compLiquid('energized_blizz', ['1x mystery'], 0xb7f0fa, [noDecomp]);

        MH.compLiquid('energized_basalz', ['1x mystery'], 0x881f11, [noDecomp]);

        MH.compLiquid('nether_tempered_blaze', ['1x mystery'], 0xffd333, [noDecomp]);

        MH.compLiquid('nether_tempered_blitz', ['1x mystery'], 0xfefae7, [noDecomp]);

        MH.compLiquid('nether_tempered_blizz', ['1x mystery'], 0xcff5fc, [noDecomp]);

        MH.compLiquid('nether_tempered_basalz', ['1x mystery'], 0x9f2414, [noDecomp]);

        // Quantrum Comporessor Infusions
        // noCompFluid('intangibility_infusion', 0x00AAAA);

        // noCompFluid('paradoxicity_infusion', 0xAA00AA);

        // noCompFluid('causality_infusion', 0xFFAA00);
        // will return post DSG with probability lines

        // Runic Convergence Infusion
        /*
        *Nr*(SO₄)₃(OH)₂ - Netherite Trisulfate Complex
        [*Nr*(NH₃)₆]SO₄ - Netherite Hexammine Sulfate
        *Nr*₂N₃O₄ - Voidic Nitride
        *Nr*(OH)₄ - Netherite Tetrahydroxide
        *Nr*FSi₂O₄ - Astral Fluorosilicate
        *Nr*₃N₃Si₂O8F - Primordial Nitrosilicate
        2Mg₃N₂ - Magnesium Nitride
        *Nr*₃Mg₆N₇Si₂O8F - Runic Convergence Infusion
    */
        MH.compLiquid(
            'netherite_trisulfate_complex',
            ['1x pure_netherite', '3x sulfur', '12x oxygen', '2x hydroxide'],
            0x660033,
            [noDecomp]
        );
        MH.compDust(
            'netherite_hexammine_sulfate',
            ['1x pure_netherite', '6x ammonia', '1x sulfur', '4x oxygen'],
            0x400080,
            [noDecomp]
        );
        MH.compLiquid('voidic_nitride', ['2x pure_netherite', '3x nitrogen', '4x oxygen'], 0x000066, [noDecomp]);
        MH.compDust('netherite_tetrahydroxide', ['1x pure_netherite', '4x hydroxide'], 0x8b8b8b, [noDecomp]);
        MH.compLiquid(
            'astral_fluorosilicate',
            ['1x pure_netherite', '1x fluorine', '2x silicon', '4x oxygen'],
            0x333300,
            [noDecomp]
        );
        MH.compLiquid(
            'primordial_nitrosilicate',
            ['3x pure_netherite', '3x nitrogen', '2x silicon', '8x oxygen', '1x fluorine'],
            0x990099,
            [noDecomp]
        );
        MH.compLiquid('magnesium_nitride', ['3x magnesium', '2x nitrogen'], 0xcc66ff, []);
        MH.compLiquid(
            'runic_convergence_infusion',
            ['3x pure_netherite', '6x magnesium', '7x nitrogen', '2x silicon', '8x oxygen', '1x fluorine'],
            0xcc0099,
            [noDecomp]
        );

        MH.compIngot(
            'neutronium_silicon_carbide',
            ['2x neutronium', '7x silicon_carbide', '3x niobium_nitride', '3x graphene'],
            0xcfcab8,
            DULL,
            [5000, 'highest', VA('uhv'), 1800],
            [foil, noDecomp, noABSRecipe]
        );

        MH.compGem(
            'akreyriadic_runixium',
            ['7x runic_laser_source_base', '4x ancient_runicalium', '2x strontium_titanium_oxide', '5x akreyrium'],
            0xffba75,
            OPAL,
            []
        );

        //Abyss Harvesting
        MH.compLiquidTemp('low_saturation_voidic_excression', 19999, ['1x mystery'], 0x0a0a0a, [noDecomp]);

        MH.compLiquidTemp('moderate_saturation_voidic_excression', 19999, ['1x mystery'], 0x111111, [noDecomp]);

        MH.compLiquidTemp('high_saturation_voidic_excression', 19999, ['1x mystery'], 0x1a0e12, [noDecomp]);

        MH.compLiquidTemp('lethargic_voidic_slurry', 14999, ['1x mystery'], 0x7a7a7a, [noDecomp]);

        MH.compLiquidTemp('tempered_voidic_slurry', 14999, ['1x mystery'], 0x666666, [noDecomp]);

        MH.compLiquidTemp('vibrant_voidic_slurry', 14999, ['1x mystery'], 0x4c4c4c, [noDecomp]);

        MH.compLiquidTemp('alpha_state_void_sludge', 12500, ['1x mystery'], 0x4a294a, [noDecomp]);

        MH.compLiquidTemp('beta_state_void_sludge', 25000, ['1x mystery'], 0x39504a, [noDecomp]);

        MH.compLiquidTemp('gamma_state_void_sludge', 37500, ['1x mystery'], 0x3a3f5a, [noDecomp]);

        MH.compLiquidTemp('delta_state_void_sludge', 50000, ['1x mystery'], 0x4d3b2e, [noDecomp]);

        MH.compLiquidTemp('epsilon_state_void_sludge', 62500, ['1x mystery'], 0x2e4d3b, [noDecomp]);

        MH.compLiquidTemp('zeta_state_void_sludge', 75000, ['1x mystery'], 0x3f2e4d, [noDecomp]);

        MH.compLiquidTemp('alpha_state_void_residue', 12500, ['1x mystery'], 0x652165, [noDecomp]);

        MH.compLiquidTemp('beta_state_void_residue', 25000, ['1x mystery'], 0x486053, [noDecomp]);

        MH.compLiquidTemp('gamma_state_void_residue', 37500, ['1x mystery'], 0x464a66, [noDecomp]);

        MH.compLiquidTemp('delta_state_void_residue', 50000, ['1x mystery'], 0x5a4638, [noDecomp]);

        MH.compLiquidTemp('epsilon_state_void_residue', 62500, ['1x mystery'], 0x365a46, [noDecomp]);

        MH.compLiquidTemp('zeta_state_void_residue', 75000, ['1x mystery'], 0x54386a, [noDecomp]);

        MH.compLiquidTemp('order_centric_void', 80000, ['1x mystery'], 0xf0e060, [noDecomp]);

        MH.compLiquidTemp('chaos_centric_void', 80000, ['1x mystery'], 0xc040f0, [noDecomp]);

        MH.compLiquidTemp('voidic_waste_residue', 10000, ['1x mystery'], 0x6b4a2f, [noDecomp]);

        //Infernal Concentrates

        MH.compLiquidTemp('crude_infernal_concentrate', 40000, ['1x mystery'], 0x6e1a00, [noDecomp]);

        MH.compLiquidTemp('infernal_concentrate', 45000, ['1x mystery'], 0xb02e00, [noDecomp]);

        MH.compLiquidTemp('superheated_infernal_concentrate', 50000, ['1x mystery'], 0xff6b00, [noDecomp]);

        MH.compLiquidTemp('sub_stellar_infernal_concentrate', 75000, ['1x mystery'], 0xfefbc6, [noDecomp]);

        MH.compLiquidTemp('super_stellar_infernal_concentrate', 100000, ['1x mystery'], 0xf4faff, [noDecomp]);

        MH.compLiquidTemp('hyper_stellar_infernal_concentrate', 125000, ['1x mystery'], 0x9cd7ff, [noDecomp]);

        //Plasmas
        event
            .create('magmatic')
            .components('1x mystery', '1x excited', '1x iron', '1x excited', '1x mystery')
            .liquid(new GTFluidBuilder().temperature(14600))
            .plasma()
            .color(0xffd39a)
            .flags(noDecomp);

        event
            .create('voidic')
            .plasma()
            .liquid(new GTFluidBuilder().temperature(25000))
            .element(GTElements.get('voidic'))
            .color(0x0f0233)
            .flags(noDecomp);

        event
            .create('preon')
            .components('1x mystery')
            .liquid(new GTFluidBuilder().temperature(48000))
            .plasma()
            .color(0xcfb7fd)
            .flags(noDecomp);

        event
            .create('paradox')
            .components('1x mystery')
            .liquid(new GTFluidBuilder().temperature(50000))
            .plasma()
            .color(0xefe987)
            .flags(noDecomp);

        //UEV Materials
        MH.compDustLiquid('tungsten_disulfide', ['1x tungsten', '2x sulfur'], 0x928897, [noDecomp]);

        event.create('warped').dust().color(0x4fbb85).flags([noSmelt]);

        MH.compDust('hellfire_ash', ['1x mystery'], 0x5e4646, [noSmelt, noDecomp]);

        MH.compLiquid('nether_star_concentrate', ['1x excited', '1x star', '1x excited'], 0xeeeeee, [noDecomp]);

        MH.compLiquid('dissipated_helish_concentrate', ['1x mystery'], 0x8da589, [noDecomp]);

        MH.compLiquid('helish_concentrate', ['1x mystery'], 0x66a574, [noDecomp]);

        MH.elemLiquidSecColor('aurourium', 0x5d44de, 0xde44ce, SHINY, null, [noDecomp, fineWire, noSmelt]);

        MH.conductor(
            'cerium_tritelluride',
            ['1x cerium', '3x tellurium'],
            0x6d8b5d,
            DULL,
            [11699, 'highest', VHA('uhv'), 1800],
            [V('uev'), 6, 16, false],
            [boltAndScrew, spring, smallSpring]
        );

        MH.compLiquidTemp('bec_og', 0.0001, ['1x oganesson'], 0xbfacff, [noDecomp]);

        MH.compLiquidTemp('superstate_helium_3', 2, ['1x helium_3'], 0xedfaf5, [noDecomp]);

        MH.conductorPlasma(
            'magmada_alloy',
            ['4x adamantine', '1x neutronium', '3x rtm_alloy'],
            0xda8607,
            SHINY,
            [17890, 'highest', VA('uev'), 600],
            [V('uhv'), 1, 3, false],
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

        event
            .create('mythrolic_alloy')
            .components('5x mythril', '4x hsss', '2x darmstadtium')
            .ingot()
            .fluid()
            .plasma()
            .color(0x30956c)
            .blastTemp(18550, 'highest', VA('uev'), 600)
            .iconSet(SHINY)
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

        event
            .create('nyanium')
            .components('7x aurourium', '4x uranium_rhodium_dinaquadide', '1x magnesium_nitride', '2x pure_netherite')
            .ingot()
            .fluid()
            .plasma()
            .color(0xe4c6eb)
            .secondaryColor(0xa45ef5)
            .blastTemp(17290, 'highest', VA('uev'), 600)
            .iconSet(SHINY) // Will Have Own in Theta? but that is a LOT of work
            .fluidPipeProperties(78500, 2500, true, true, true, true)
            .flags(plates, frame, rod, densePlate, longRod, gear, foil, smallGear, rotor, noDecomp, noABSRecipe);

        MH.compIngotPlasma(
            'starium_alloy',
            ['4x nether_star_concentrate', '2x trinaquadalloy', '2x estalt'],
            0x2253d2,
            SHINY,
            [18200, 'highest', VA('uev'), 600],
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
            DULL,
            [17950, 'highest', VA('uev'), 600],
            [V('uev'), 32, 0, true],
            [noDecomp, noABSRecipe, fineWire, frame]
        );

        MH.compDust('iron_titanium_oxide', ['3x iron', '2x titanium', '7x oxygen'], 0x82229b, [noDecomp]);

        MH.conductor(
            'astatium_bioselex_carbonite',
            ['1x astatine', '2x bismuth', '3x selenium', '2x thallium', '4x sulfur', '1x carbon'],
            0x305f84,
            DULL,
            [13475, 'highest', VA('uv'), 3500],
            [V('uev'), 3, 16, false],
            [spring, noDecomp]
        );

        MH.compLiquidStill('borealic_concentrate', ['1x aurourium', '15x stellarium'], [noDecomp]);

        //UIV Materials
        MH.conductor(
            'polonium_bismide',
            ['1x polonium', '1x bismuth'],
            0x016038,
            DULL,
            [14400, 'highest', VHA('uev'), 1800],
            [V('uiv'), 5, 24, false],
            [fineWire, boltAndScrew, spring, smallSpring]
        );

        MH.compIngot('diamane', ['1x carbon'], 0x62777a, null, [4000, 'low', VA('lv'), 1], [noDecomp]);

        MH.compDust('iridium_iv_oxide', ['1x iridium', '2x oxygen'], 0xbeded9, [noDecomp]);

        MH.compDust('bismuth_iii_oxide', ['2x bismuth', '3x oxygen'], 0xd5e5dc, [noDecomp]);

        MH.compIngot(
            'bismuth_iridate',
            ['2x bismuth', '2x iridium', '7x oxygen'],
            0x68cf93,
            null,
            [8600, 'high', VA('zpm'), 1080],
            [foil, noDecomp, noABSRecipe]
        );

        MH.compLiquidStill('dragon_breath', ['1x dragon'], [noDecomp]);

        MH.compLiquidStill('pure_dragon_breath', ['1x excited', '1x dragon', '1x excited'], [noDecomp]);

        MH.compIngotLiquid(
            'hafnide_ceramic_base',
            ['4x hafnium', '5x tantalum_carbide'],
            0x4f4f4f,
            DULL,
            [12900, 'highest', VA('uv'), 970],
            [noDecomp]
        );

        MH.compDust('indium_tin_oxide', ['2x indium', '2x tin', '3x oxygen'], 0xa1c1e0, [noDecomp]);

        MH.conductor(
            'hafnide_ito_ceramic',
            ['4x hafnium', '5x tantalum', '5x carbon', '2x indium', '2x tin', '3x oxygen'],
            0x798ca5,
            DULL,
            [14520, 'highest', VA('uhv'), 3200],
            [V('uiv'), 2, 36, false],
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
            DULL,
            [18850, 'highest', VA('uxv'), 600],
            [V('uiv'), 40, 0, true],
            [noDecomp, noABSRecipe, fineWire, boltAndScrew]
        );

        event
            .create('abyssal_alloy')
            .components('5x xeproda', '3x blue_alloy', '4x void', '1x flerovium', '1x zapolgium')
            .ingot()
            .fluid()
            .plasma()
            .color(0x1c0932)
            .iconSet(SHINY)
            .blastTemp(18685, 'highest', VA('uiv'), 600)
            .cableProperties(V('uev'), 2, 4, false)
            .flags(
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
                noABSRecipe
            );

        event
            .create('chaotixic_alloy')
            .components('6x rhexis', '2x stellite_100', '1x hafnium', '12x electrum', '3x vanadium_steel')
            .ingot()
            .fluid()
            .plasma()
            .color(0xa09265)
            .blastTemp(18795, 'highest', VA('uiv'), 600)
            .iconSet(SHINY)
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
            SHINY,
            [18590, 'highest', VA('uiv'), 600],
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
            .blastTemp(18880, 'highest', VA('uxv'), 600)
            .iconSet(SHINY)
            .flags(plates, frame, rod, densePlate, longRod, gear, foil, smallGear, rotor, noDecomp, noABSRecipe);

        event
            .create('draco_abyssal') //Shadowyrm
            .components('1x dragon', '1x voidic', '1x dragon')
            .ingot()
            .fluid()
            .plasma()
            .color(0x401e6d)
            .secondaryColor(0x340e4d)
            .blastTemp(18880, 'highest', VA('uxv'), 600)
            .iconSet(SHINY)
            .flags(
                plates,
                frame,
                rod,
                densePlate,
                longRod,
                gear,
                foil,
                smallGear,
                rotor,
                fineWire,
                noDecomp,
                noABSRecipe
            )
            .rotorStats(12800, 400, 50, 45000);

        //Threaded
        MH.compIngotPlasmaSecColor(
            'expetidalloy_d_17',
            ['2x hafnide_ceramic_base', '11x hastelloy_c_276', '3x dragonsteel', '1x rhodium_plated_palladium'],
            0xa78e99,
            0x948da6,
            SHINY,
            [18880, 'highest', VA('uxv'), 600],
            [plates, frame, rod, boltAndScrew, densePlate, longRod, gear, smallGear, noDecomp, noABSRecipe]
        );

        MH.conductorPlasma(
            'rhenate_w',
            ['2x rhenium', '5x tungsten', '1x neutronium', '18x rose_gold', '7x neodymium'],
            0x87bcd0,
            SHINY,
            [18880, 'highest', VA('uxv'), 600],
            [V('uiv'), 1, 192, false],
            [noDecomp, noABSRecipe, fineWire]
        );

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
            SHINY,
            [18880, 'highest', VA('uxv'), 600],
            [plates, frame, rod, boltAndScrew, densePlate, longRod, gear, smallGear, noDecomp, noABSRecipe]
        );

        MH.compIngotPlasmaSecColor(
            'hvga_steel',
            ['1x signalum', '3x hssg', '1x draco_abyssal', '8x hsla_steel', '3x tritan_steel'],
            0x280c6c,
            0x2561b7,
            SHINY,
            [18880, 'highest', VA('uxv'), 600],
            [plates, frame, rod, boltAndScrew, densePlate, longRod, gear, smallGear, noDecomp, noABSRecipe, foil]
        );

        MH.compIngotPlasmaSecColor(
            'melastrium_mox',
            ['2x osmiridium', '7x astrenalloy_nx', '3x melodium', '1x potin'],
            0x7d486d,
            0x4c487d,
            SHINY,
            [18880, 'highest', VA('uxv'), 600],
            [plates, frame, rod, boltAndScrew, densePlate, longRod, gear, smallGear, noDecomp, noABSRecipe]
        );

        MH.compIngotPlasmaSecColor(
            'trikoductive_neutro_steel',
            ['6x isovol', '5x tritan_steel', '1x estalt', '3x ruthenium_trinium_americium_neutronate', '2x twinite'],
            0x908080,
            0x6a3f3f,
            SHINY,
            [18880, 'highest', VA('uxv'), 600],
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
            SHINY,
            [18880, 'highest', VA('uxv'), 600],
            [plates, frame, rod, boltAndScrew, densePlate, longRod, gear, smallGear, noDecomp, noABSRecipe]
        );

        MH.compIngotPlasmaSecColor(
            'mythrotight_carbide_steel',
            [
                '8x watertight_steel',
                '2x mythril',
                '5x samarium_iron_arsenic_oxide',
                '3x tungsten_carbide',
                '1x kanthal',
            ],
            0x2b4951,
            0x37265e,
            SHINY,
            [18880, 'highest', VA('uxv'), 600],
            [plates, frame, rod, boltAndScrew, densePlate, longRod, gear, smallGear, noDecomp, noABSRecipe]
        );

        MH.compIngotPlasmaSecColor(
            'aerorelient_steel',
            ['3x cobalt_brass', '6x red_steel', '2x watertight_steel', '5x hsse', '1x indium'],
            0x6e644d,
            0x50583e,
            SHINY,
            [18880, 'highest', VA('uxv'), 600],
            [plates, frame, rod, boltAndScrew, densePlate, longRod, gear, smallGear, rotor, noDecomp, noABSRecipe]
        );

        MH.compIngotPlasmaSecColor(
            'vastaqalloy_cr_4200x',
            ['5x thacoloy_nq_42x', '4x stellite_100', '2x vanadium_gallium', '3x tungsten_steel', '1x chromium'],
            0x6f7343,
            0x534531,
            SHINY,
            [18880, 'highest', VA('uxv'), 600],
            [plates, frame, rod, boltAndScrew, densePlate, longRod, gear, smallGear, noDecomp, noABSRecipe]
        );

        MH.compIngotPlasmaSecColor(
            'ultispestalloy_cmsh',
            ['2x magmada_alloy', '3x shellite', '15x ultimet', '6x hastelloy_c_276', '1x hafnium'],
            0x684e6f,
            0x4b1146,
            SHINY,
            [18880, 'highest', VA('uxv'), 600],
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
            SHINY,
            [18880, 'highest', VA('uxv'), 600],
            [plates, frame, rod, boltAndScrew, densePlate, longRod, gear, smallGear, noDecomp, noABSRecipe]
        );

        //DES + PBD Line
        MH.noCompFluid('draconic_hormone_residue', 0x6c4d6e);

        MH.noCompFluid('drac_endrocritic_medium', 0x75577a);

        MH.noCompFluid('drac_aurouric_endrocrinal_medium', 0x6678a6);

        MH.noCompFluid('precursor_serum', 0x8c6fa3);

        MH.noCompFluid('abyssal_nutrient_blend', 0x4a3b33);

        MH.noCompFluid('condensed_abyssal_nutrient_blend', 0x5c4038);

        MH.noCompFluid('amino_primed_medium', 0x705a64);

        MH.noCompFluid('drac_peptide_amino_residue', 0x7a5c82);

        MH.noCompFluid('voidrenin', 0x1a1a1a);

        MH.noCompFluid('terrathroxin', 0x3f5a3f);

        MH.noCompFluid('stormcallin', 0x4a6c82);

        MH.noCompFluid('cryokinase', 0x7ba6b3);

        MH.noCompFluid('ignisferin', 0xa6533a);

        MH.noCompFluid('breath_hormone_complex', 0x8c7080);

        MH.noCompFluid('hemavyrin', 0x6b2a2a);

        MH.noCompFluid('aethermetin', 0x7a6f9e);

        MH.noCompFluid('metavorexin', 0x5c3a73);

        MH.noCompFluid('dracotropin', 0x4d6a59);

        MH.noCompFluid('pyrothyin', 0x8c4d3a);

        MH.noCompFluid('growth_hormone_complex', 0x756b7d);

        //UXV Materials
        MH.compDustLiquid('netherite_triselex_oxide', ['4x netherite', '3x selenium', '8x oxygen'], 0xcfd9a3, [
            noDecomp,
        ]);

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
            DULL,
            [18250, 'highest', VHA('uiv'), 1800],
            [V('uxv'), 7, 48, false],
            [boltAndScrew, spring, smallSpring, noABSRecipe, noDecomp, fineWire]
        );

        //Agriculture
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

        //Bromine Line
        event
            .create('acidic_bromine_solution')
            .liquid()
            .color(0xc49b52)
            .components('1x chlorine', '1x bromine')
            .flags(noDecomp);

        event
            .create('concentrated_bromine_solution')
            .liquid()
            .color(0x91481e)
            .components('2x bromine', '1x chlorine')
            .flags(noDecomp);

        event.create('hydrogen_iodide').gas().color(0x8187a6).components('1x hydrogen', '1x iodine').flags(noDecomp);

        event.create('hot_brine').liquid(320).color(0xbe6026);

        event
            .create('hot_chlorinated_brominated_brine')
            .liquid(320)
            .color(0xab765d)
            .components('1x hot_brine', '1x chlorine')
            .flags(noDecomp);

        event.create('hot_debrominated_brine').liquid(320).color(0xab896d);

        event
            .create('hot_alkaline_debrominated_brine')
            .liquid(320)
            .color(0xbe8938)
            .components('2x hot_debrominated_brine', '1x chlorine')
            .flags(noDecomp);

        event.create('raw_brine').liquid().color(0x9f6b26);

        event.create('debrominated_brine').liquid().color(0xab8c6d);

        event
            .create('brominated_chlorine_vapor')
            .gas()
            .color(0xbb9b72)
            .components('1x chlorine', '1x bromine', '1x steam')
            .flags(noDecomp);

        event.create('acidic_bromine_exhaust').gas().color(0x8f681e).components('3x steam', '1x chlorine');

        //aerogel line
        MH.compLiquid('linoleic_acid', ['18x carbon', '31x hydrogen', '2x oxygen'], 0xdbdcdb, [noDecomp]);
        MH.compDust('sodium_linoleate', ['18x carbon', '31x hydrogen', '2x oxygen', 'sodium'], 0xe3ffff, [noDecomp]);
        MH.noCompFluid('aerogel_solvent_mixture', 0x9de4db);
        MH.compLiquid('silicon_tetrachloride', ['silicon', '4x chlorine'], 0xdcdbdb, [noDecomp]);
        MH.compLiquid('tetraethyl_orthosilicate', ['silicon', '8x carbon', '20x hydrogen', '4x oxygen'], 0xdbdbdb, [
            noDecomp,
        ]);
        MH.noCompFluid('aerogel_precursor_solution', 0xaebbbf);

        event
            .create('aerogel')
            .components('1x air')
            .polymer()
            .ingot()
            .color(0x9fcad9)
            .secondaryColor(0xe5f1ee)
            .flags(foil, plates);

        //Polycarbonate Line
        MH.compDust('sodium_diphenoxide', ['2x sodium', '2x oxygen', '15x carbon', '16x hydrogen'], 0xfefefe, [
            noDecomp,
        ]);
        MH.compLiquid('phosgene', ['carbon', 'oxygen', '2x chlorine'], 0xfdfefc, [noDecomp]);
        MH.polymerFluidPipe(
            'polycarbonate',
            ['3x oxygen', '16x carbon', '16x hydrogen'],
            0x202020,
            [388, 300, true, true, false, false],
            [noDecomp, foil, plates]
        );

        //De-Ionized Water Line
        MH.compLiquid('purified_water', ['2x hydrogen', 'oxygen'], 0x4a94ff, [noDecomp]);
        MH.compLiquid('acidic_water', ['2x hydrogen', 'oxygen'], 0x2e85ff, [noDecomp]);
        MH.compLiquid('divinylbenzene', ['10x carbon', '10x hydrogen'], 0x9fb1b8, [noDecomp]);
        MH.compLiquid('deionized_water', ['2x hydrogen', 'oxygen'], 0x006aff, [noDecomp]);

        //Faematter + Filaments
        MH.compLiquid('impure_faematter', ['1x mystery', '1x faetic', '1x mystery'], 0xe8bce7, [noDecomp]);
        MH.compLiquid('faematter', ['1x faetic'], 0xf593f3, [noDecomp]);

        MH.compLiquid(
            'stabilization_mixture_base',
            [
                '5x poly_34_ethylenedioxythiophene_polystyrene_sulfate',
                '17x runic_convergence_infusion',
                '10x utopian_akreyrium',
            ],
            0xb6b4c2,
            [noDecomp]
        );
        MH.compLiquid(
            'infernal_stabilization_mixture',
            ['24x stabilization_mixture_base', '1x magmada_alloy'],
            0xbd4444,
            [noDecomp]
        );
        MH.compLiquid(
            'abyssal_stabilization_mixture',
            ['24x stabilization_mixture_base', '1x abyssal_alloy'],
            0x7e44bd,
            [noDecomp]
        );
        MH.compLiquid(
            'draconic_stabilization_mixture',
            ['1x abyssal_stabilization_mixture', '1x infernal_stabilization_mixture'],
            0x302185,
            [noDecomp]
        );

        MH.compLiquid('kaleidoscope_agitation_serum', ['1x mystery'], 0x9afc88, [noDecomp]);

        //Riftions + Rift Line
        MH.compLiquid('riftion_extract', ['999x mystery', '1x riftic', '999x mystery'], 0x8f5d8c, [noDecomp]);
        MH.compPlasma('riftion', 999989999, ['1x riftion_extract', '1x neutronium'], 0xf0fbff, [noDecomp]);
        MH.compLiquid('highly_unstable_rift_source', ['1x riftic', '1x excited'], 0x5e1c5b, [noDecomp]);
        MH.compLiquid('destabilized_rift_source', ['1x riftic', '1x mystery'], 0x854181, [noDecomp]);
        MH.compLiquid('ascension_rift_slurry', ['1x riftic', '1x mystery'], 0xedb2ea, [noDecomp]);
        MH.compLiquid('abyssal_rift_slurry', ['1x riftic', '1x mystery'], 0x3c265c, [noDecomp]);
        MH.compLiquid('rimula_t_foundation', ['1x riftic', '1x mystery'], 0xe5d1eb, [noDecomp]);
        MH.compLiquid('rimula_s_foundation', ['1x riftic', '1x mystery'], 0x230145, [noDecomp]);
        MH.compLiquid('true_rimula_foundation', ['1x riftic', '1x mystery'], 0x9e22bd, [noDecomp]);

        MH.compLiquid('primordial_extract', ['1x riftic', '1x voidic', '1x mystery'], 0x504985, [noDecomp]);
        MH.compLiquid('primordial_residue', ['1x riftic', '1x voidic'], 0x2b2080, [noDecomp]);
        MH.compLiquid('condensed_rimula', ['8x riftic', '1x mystery'], 0xa16296, [noDecomp]);
        MH.compLiquid('riftic_concentrate', ['8x riftic'], 0xb5109a, [noDecomp]);
        MH.compLiquid('faetic_extract', ['1x riftic', '1x faetic', '1x mystery'], 0x7da7b0, [noDecomp]);
        MH.compLiquid('prismatic_hypergurmalium', ['1x riftic', '1x faetic'], 0x4fdfff, [noDecomp]);

        //DSG
        event
            .create('raging_rimulatia') //Shadowyrm
            .components('1x rifitc', '1x draco_abyssal', '1x riftic')
            .ingot()
            .fluid()
            .color(0xe357f2)
            .secondaryColor(0x163f5e)
            .iconSet(SHINY)
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
            .blastTemp(18880, 'highest', VA('uxv'), 600)
            .iconSet(SHINY)
            .flags(
                plates,
                frame,
                rod,
                densePlate,
                longRod,
                gear,
                foil,
                smallGear,
                rotor,
                fineWire,
                noDecomp,
                noABSRecipe
            );

        MH.compGem(
            'aquariadic_rimuli_dragonix',
            ['5x pure_dragon_breath', '7x akreyriadic_runixium', '4x raging_rimulatia'],
            0x16269e,
            GEM_VERTICAL,
            [noDecomp]
        );

        //Combustion fuels and oxidizers

        MH.compLiquid('kerosene', ['12x carbon', '26x hydrogen'], 0xe8d44d, [noDecomp]);
        MH.compLiquid('hydrofined_kerosene', ['12x carbon', '26x hydrogen'], 0xf2ec9a, [noDecomp]);
        MH.compLiquid('rp_1', ['12x carbon', '26x hydrogen'], 0xf2ec9a, [noDecomp]);
        MH.compLiquidTemp('liquid_fluorine', 85, ['2x fluorine'], 0xb5e0ff, [noDecomp]);
        MH.compLiquidTemp('dioxygen_difluoride', 110, ['2x oxygen', '2x fluorine'], 0xe8f1ff, [noDecomp]);
        MH.compLiquid('white_fuming_nitric_acid', ['1x hydrogen', '1x nitrogen', '3x oxygen'], 0xfdfefc, [noDecomp]);
        MH.compLiquid('red_fuming_nitric_acid', ['1x hydrogen', '1x nitrogen', '3x oxygen'], 0xff0000, [noDecomp]);
        MH.compLiquid('monomethylhydrazine', ['1x carbon', '6x hydrogen', '2x nitrogen'], 0x9e9e9e, [noDecomp]);
        MH.compLiquid(
            'sorbitol_hypergolic_fuel',
            ['6x carbon', '20x hydrogen', '6x oxygen', '1x nitrogen', '1x boron'],
            0xf5f5f5,
            [noDecomp]
        );
        MH.compLiquid(
            'ferrocenium_superoxide',
            ['15x carbon', '5x hydrogen', '15x fluorine', '1x iron', '2x oxygen'],
            0xb87333,
            [noDecomp]
        );
        MH.compLiquid('fuming_nitric_acid', ['1x hydrogen', '1x nitrogen', '3x oxygen'], 0xf0f0f0, [noDecomp]);
        MH.compLiquid('hydrazine', ['2x nitrogen', '4x hydrogen'], 0xc8c8c8, [noDecomp]);
        MH.compDust('ammonia_borane', ['1x nitrogen', '1x boron', '6x hydrogen'], 0xffffff, [noDecomp]);
        MH.compLiquid('ferrocene', ['10x carbon', '10x hydrogen', '1x iron'], 0xff8c00, [noDecomp]);
        MH.compLiquid('hexafluorophosphoric_acid', ['1x hydrogen', '1x phosphorus', '6x fluorine'], 0xe8e8ff, [
            noDecomp,
        ]);
        MH.compLiquid(
            'iron_cyclopentadienyl_dichlorobenzene',
            ['16x carbon', '14x hydrogen', '1x iron', '2x chlorine', '1x phosphorus', '6x fluorine'],
            0xcc6600,
            [noDecomp]
        );
        MH.compLiquid('fluorinated_ferrocene', ['15x carbon', '5x hydrogen', '15x fluorine', '1x iron'], 0x00aa00, [
            noDecomp,
        ]);

        event.create('latex').polymer().color(0xcfbdac).flags(plates, noDecomp);

        // Fuel rod base dusts :D
        const $U238 = 'uranium';
        const $Pu239 = 'plutonium';
        const $Cf252 = 'californium_252';

        MH.compDust('mox239_blend', [`2x ${$U238}`, `2x ${$Pu239}`], 0x289a0a, [centrifuge]);
        MH.compDust('mox241_blend', [`2x ${$U238}`, '2x plutonium_241'], 0x587c13, [centrifuge]);
        MH.compDust('tpu_blend', ['2x thorium', `2x ${$Pu239}`], 0x36aa18, [centrifuge]);
        MH.compDust('mox238_blend', ['3x plutonium_238', `1x ${$Cf252}`], 0x4f2f04, [centrifuge]);
        MH.compDust('etu_blend', ['2x curium_244', `1x ${$Cf252}`, '1x americium_241'], 0x3d5434, [centrifuge]);
        MH.compDust('nqe_blend', ['2x purified_naquadah', '2x einsteinium_253'], 0x3f3c18, [centrifuge]);
    });
})();
