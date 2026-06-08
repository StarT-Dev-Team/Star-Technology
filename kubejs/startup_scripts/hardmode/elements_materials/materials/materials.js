// packmode: hard

GTCEuStartupEvents.registry('gtceu:material', (event) => {
    /* eslint-disable no-undef */
    // === Helpers ===
    // eslint-disable-next-line no-unused-vars
    const elemDustFluid = (name, color, flags) => {
        event.create(name).dust().fluid().element(GTElements.get(name)).color(color).flags(flags);
    };
    const elemIngot = (name, element, color, icon, blasting, flags) => {
        if (blasting.includes(blasting[0])) {
            event
                .create(name)
                .ingot()
                .element(GTElements.get(element))
                .color(color)
                .iconSet(icon)
                .flags(flags)
                .blastTemp(blasting[0], blasting[1], blasting[2], blasting[3]);
        } else {
            event.create(name).ingot().fluid().element(GTElements.get(element)).color(color).iconSet(icon).flags(flags);
        }
    };
    // eslint-disable-next-line no-unused-vars
    const elemIngotFluid = (name, color, icon, blasting, flags) => {
        if (blasting.includes(blasting[0])) {
            event
                .create(name)
                .ingot()
                .fluid()
                .element(GTElements.get(name))
                .color(color)
                .iconSet(icon)
                .flags(flags)
                .blastTemp(blasting[0], blasting[1], blasting[2], blasting[3]);
        } else {
            event.create(name).ingot().fluid().element(GTElements.get(name)).color(color).iconSet(icon).flags(flags);
        }
    };
    const compIngot = (name, elements, color, icon, blasting, flags) => {
        if (blasting.includes(blasting[0])) {
            event
                .create(name)
                .ingot()
                .components(elements)
                .color(color)
                .iconSet(icon)
                .flags(flags)
                .blastTemp(blasting[0], blasting[1], blasting[2], blasting[3]);
        } else {
            event.create(name).ingot().fluid().components(elements).color(color).iconSet(icon).flags(flags);
        }
    };
    const compDustIcon = (name, elements, color, icon, flags) => {
        event.create(name).dust().components(elements).color(color).iconSet(icon).flags(flags);
    };
    const compDust = (name, elements, color, flags) => {
        event.create(name).dust().components(elements).color(color).flags(flags);
    };
    // eslint-disable-next-line no-unused-vars
    const dustNoComp = (name, color, flags) => {
        event.create(name).dust().color(color).flags(flags);
    };
    const liquidNoComp = (name, color, flags) => {
        event.create(name).fluid().color(color).flags(flags);
    };
    const compLiquid = (name, elements, color, flags) => {
        event.create(name).fluid().components(elements).color(color).flags(flags);
    };
    const compLiquidTemp = (name, heat, elements, color, flags) => {
        event
            .create(name)
            .liquid(new GTFluidBuilder().temperature(heat))
            .components(elements)
            .color(color)
            .flags(flags);
    };
    const compGem = (name, elements, color, icon, flags) => {
        event.create(name).gem().components(elements).color(color).iconSet(icon).flags(flags);
    };
    // eslint-disable-next-line no-unused-vars
    const conductorSuper = (name, elements, color, blasting, cable, rotorstat) => {
        event
            .create(name)
            .ingot()
            .fluid()
            .components(elements)
            .color(color)
            .iconSet(SHINY)
            .flags(foil, gear, long_rod, plates, rod, rotor, small_gear, ring, frame, fine_wire)
            .blastTemp(blasting[0], blasting[1], blasting[2], blasting[3])
            .cableProperties(cable[0], cable[1], cable[2], cable[3])
            .rotorStats(rotorstat[0], rotorstat[1], rotorstat[2], rotorstat[3]);
    };

    // === Early Game ===
    compIngot(
        'pig_iron',
        '1x iron',
        0x8e8385,
        DULL,
        [],
        [foil, gear, longRod, plates, rod, rotor, smallGear, ring, frame, boltAndScrew, noDecomp, noSmelt]
    );

    event
        .create('flisnt')
        .color(0x888b8c)
        .toolStats(
            ToolProperty.Builder.of(1, 1, 96, 1, [
                GTToolType.SAW,
                GTToolType.HARD_HAMMER,
                GTToolType.PICKAXE,
                GTToolType.SHOVEL,
                GTToolType.AXE,
                GTToolType.SWORD,
                GTToolType.KNIFE,
                GTToolType.FILE,
                GTToolType.SCYTHE,
            ]).build()
        );

    event.create('coke_clay').dust().color(0xd7d2aa).secondaryColor(0xa09c78);

    compIngot('crude_cast_iron', '1x pig_iron', 0x3d413f, DULL, [], [noDecomp, noSmelt]);

    event
        .create('crude_wrought_iron')
        .ingot()
        .liquid(new GTFluidBuilder().temperature(1700))
        .components('1x wrought_iron')
        .color(0x7a6e69)
        .iconSet(DULL)
        .flags(no_decomp, no_smelt);

    event
        .create('cast_iron')
        .ingot(1)
        .liquid()
        .components('18x crude_cast_iron', '1x bismuth', '2x copper')
        .color(0x696e6c)
        .secondaryColor(0x4c5052)
        .iconSet(METALLIC)
        .blastTemp(1450, 'low', VA('mv'), 1200)
        .flags(
            not_alloy,
            foil,
            gear,
            long_rod,
            plates,
            rod,
            rotor,
            small_gear,
            ring,
            frame,
            bolt_and_screw,
            no_decomp,
            no_smelt
        );

    // === Resource Gen Extension ===
    compDustIcon('metallic_ore_sludge', ['8x pentlandite', '5x gold', '2x silver'], 0xa4ac72, METALLIC, no_decomp);
    liquidNoComp('raw_ore_concentrate', 0x7c8478, no_decomp);
    liquidNoComp('raw_ore_residue', 0x908784, no_decomp);
    liquidNoComp('diluted_drilling_formula', 0xdfd2a0, no_decomp);
    liquidNoComp('concentrate_drilling_formula', 0xeddc9e, no_decomp);
    liquidNoComp('residue_drilling_formula', 0xe2cf84, no_decomp);
    liquidNoComp('slurry_drilling_formula', 0xdcd0a0, no_decomp);
    liquidNoComp('poor_mixture_drilling_formula', 0xccc29c, no_decomp);
    liquidNoComp('rich_mixture_drilling_formula', 0xb9b08b, no_decomp);
    compLiquidTemp('molten_waste', 1170, 'mystery', 0x806861, no_decomp);
    compLiquidTemp('cooled_molten_waste', 515, 'mystery', 0x6d5852, no_decomp);
    compLiquidTemp('impure_molten_ore_mixture', 2190, 'mystery', 0x746e6d, no_decomp);
    compLiquidTemp('pure_molten_ore_mixture', 2635, 'mystery', 0x5c5451, no_decomp);
    compLiquidTemp('cooled_molten_bauxite_ore', 480, ['1x bauxite'], 0x9b9b83, [noDecomp]);
    compLiquidTemp('cooled_molten_pitchblende_ore', 480, ['1x pitchblende'], 0x95a96f, [noDecomp]);
    compLiquidTemp('cooled_molten_molybdenite_ore', 480, ['1x molybdenite'], 0xa6b38d, [noDecomp]);
    compLiquidTemp('cooled_molten_ilmenite_ore', 480, ['1x ilmenite'], 0xae9279, [noDecomp]);
    compLiquidTemp('cooled_molten_tungstate_ore', 480, ['1x tungstate'], 0x848e97, [noDecomp]);
    compLiquidTemp('cooled_molten_bastnasite_ore', 480, ['1x bastnasite'], 0x80766f, [noDecomp]);
    compLiquidTemp('cooled_molten_cooperite_ore', 480, ['1x cooperite'], 0x8b8a76, [noDecomp]);

    // === Rare Earth Line Extension ===
    compLiquid('acid_leached_rare_earth_sludge', '1x mystery', 0x7d4e41, no_decomp);
    compLiquid('fractionated_rare_earth_slurry', '1x mystery', 0x938376, no_decomp);
    compLiquid('low_density_rare_earth_residue', '1x mystery', 0x7a6c57, no_decomp);
    compLiquid('moderate_density_rare_earth_residue', '1x mystery', 0x7a6442, no_decomp);
    compLiquid('high_density_rare_earth_residue', '1x mystery', 0x5a4524, no_decomp);
    compLiquid('rare_earth_waste_residue', '1x mystery', 0x83716f, no_decomp);
    compDust('unrefined_neodymium', ['1x neodymium', '1x mystery'], 0x5e5661, no_decomp);
    compDust('neodymium_iii_oxide', ['2x neodymium', '3x oxygen'], 0x6d6673, no_decomp);
    compDust('unrefined_lanthanum', ['1x lanthanum', '1x mystery'], 0x907b6f, no_decomp);
    compDust('lanthanum_oxide', ['2x lanthanum', '3x oxygen'], 0xb59482, no_decomp);
    compDust('lanthanum_iii_chloride', ['1x lanthanum', '3x chlorine'], 0xbc9f84, no_decomp);
    compDust('unrefined_samarium', ['1x samarium', '1x mystery'], 0x828066, no_decomp);
    compDust('samarium_iii_chloride', ['1x samarium', '3x chlorine'], 0x959374, no_decomp);
    compDust('unrefined_promethium', ['1x promethium', '1x mystery'], 0x7f7184, no_decomp);
    compDust('promethium_iii_oxide', ['2x promethium', '3x oxygen'], 0x8f7f94, no_decomp);
    compDust('unrefined_holmium', ['1x holmium', '1x mystery'], 0x81868c, no_decomp);
    compDust('holmium_iii_fluoride', ['1x holmium', '3x fluorine'], 0x99966e, no_decomp);
    elemIngot('magnetic_holmium', 'holmium', 0xcec870, MAGNETIC, [], [rod, longRod, magnetic]);
    compDust('unrefined_yttrium', ['1x yttrium', '1x mystery'], 0x404143, no_decomp);
    compDust('yttrium_carbonate', ['2x yttrium', '3x carbon', '9x oxygen'], 0x48504d, no_decomp);
    compDust('yttrium_chloride', ['1x yttrium', '3x chlorine'], 0x393c3b, no_decomp);
    compDust('unrefined_dysprosium', ['1x dysprosium', '1x mystery'], 0x6b6f73, no_decomp);
    compDust('dysprosium_iii_fluoride', ['1x dysprosium', '3x fluorine'], 0x54585c, no_decomp);

    // === Plat Line Extension ===
    compLiquid('platinum_group_leach_liquor', '1x mystery', 0x6f96a0, no_decomp);
    compLiquid('platinum_group_acid_residue', '1x mystery', 0x555555, no_decomp);
    compDust('platinum_group_leach_residue', '1x mystery', 0x444444, no_decomp);
    compDust('platinum_chloride', ['1x platinum', '6x chlorine'], 0xb4c6cf, no_decomp);
    compDust('palladium_chloride', ['1x palladium', '4x chlorine'], 0xc8a9ad, no_decomp);
    compGem('platinum_salt', ['4x nitrogen', '12x hydrogen', '1x platinum', '6x chlorine'], 0xe3e3cd, RUBY, no_decomp);
    compGem(
        'palladium_salt',
        ['5x nitrogen', '15x hydrogen', '1x palladium', '4x chlorine'],
        0xd6b3bb,
        RUBY,
        no_decomp
    );
    compDust('mixed_inert_metal_ash', ['1x rhodium', '1x ruthenium', '1x mystery'], 0x9982a2, no_decomp);
    compLiquid('ruthenium_sulfate', ['1x ruthenium', '6x sulfate'], 0x5cb8f6, no_decomp);
    compLiquid('inert_metal_sulfate_solution', ['1x rhodium_sulfate', '1x ruthenium_sulfate'], 0xa985bf, no_decomp);
    compDust('rhodium_iii_hydroxide', ['1x rhodium', '3x hydroxide'], 0xd174b6, no_decomp);
    compDust('rhodium_iii_oxide', ['2x rhodium', '3x oxygen'], 0xce498f, no_decomp);
    compDust('ruthenium_complex', ['1x ruthenium', '6x ammonia'], 0x88d2fc, no_decomp);
    compDust('impure_ruthenium', ['1x ruthenium', '1x mystery'], 0x63c0f4, no_decomp);
    compLiquid('rarest_metal_slurry', ['1x iridium', '1x osmium', '1x mystery'], 0x3a78b0, no_decomp);
    event
        .create('sodium_osmate')
        .gem()
        .fluid()
        .components(['2x sodium', '1x osmium', '4x oxygen'])
        .color(0x4f70d9)
        .iconSet(GEM_HORIZONTAL)
        .flags(no_decomp);
    compDust('osmium_iv_hydroxide', ['1x osmium', '4x hydroxide'], 0x4866c9, no_decomp);
    compDust('osmium_dioxide', ['1x osmium', '2x oxygen'], 0x2c49aa, no_decomp);
    compDust('iridium_rich_residue', ['1x iridium', '1x mystery', '1x oxygen'], 0x418875, no_decomp);
    compDust('iridium_iv_chloride', ['1x iridium', '4x chlorine'], 0x46a593, no_decomp);
    compDust('iridium_hydroxide', ['1x iridium', '3x hydroxide'], 0x50b7a4, no_decomp);
    compDust('iridium_oxide', ['1x iridium', '2x oxygen'], 0x3c9d88, no_decomp);
});
