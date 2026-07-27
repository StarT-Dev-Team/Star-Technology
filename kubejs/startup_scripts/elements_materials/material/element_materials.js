GTCEuStartupEvents.registry('gtceu:material', (event) => {
    // Periodic table materials
    const element = global.periodicTableElement;
    // Ingots
    element('zirconium', 'ingot');
    element('tellurium', 'ingot');
    element('polonium', 'ingot');
    element('astatine', 'ingot');
    element('hafnium', 'ingot');
    element('seaborgium', 'ingot');
    element('flerovium', 'ingot');
    element('rhenium', 'ingot');
    element('dysprosium', 'ingot');

    // Dusts
    element('selenium', 'dust');
    element('strontium', 'dust');
    element('thallium', 'dust');
    element('neptunium', 'dust');
    element('fermium', 'dust');

    // Liquids
    element('seaborgium', 'fluid');
    element('flerovium', 'fluid');
    element('rhenium', 'fluid');
    element('zirconium', 'fluid');
    element('hafnium', 'fluid');
    element('fermium', 'fluid');
    element('selenium', 'fluid');

    // Gasses

    // Plasmas

    // Plasma + Gas
    element('oganesson', 'gas_plasma');

    const MH = global.materialHelpers(event);

    const { noSmelt, fineWire, foil, gear, longRod, plates, rod, rotor, smallGear, ring, frame } = FLAGS;
    const { metallic, radioactive, dull, magnetic } = ICONSETS;

    // Materials

    MH.elemDust('uranium_233', 0x4fbb4f, [noSmelt]);

    MH.elemDustFluid('plutonium_238', 0xc13d3d, [noSmelt]);

    MH.elemDust('plutonium_244', 0x951f1f, [noSmelt]);

    MH.elemDust('americium_241', 0x1e492f, [noSmelt]);

    MH.elemDust('curium_244', 0x6f4c46, [noSmelt]);

    MH.elemDust('californium_252', 0xa38783, [noSmelt]);

    MH.elemDust('einsteinium_253', 0xddbc4d, [noSmelt]);

    MH.elemIngotFluid('xeproda', 0x1a0d00, dull, [15499, 'highest', GTValues.VA[UEV], 2700], [fineWire]);

    MH.elemIngotFluid('rhexis', 0x330000, dull, [15499, 'highest', GTValues.VHA[UIV], 2700], []);

    MH.elemIngotFluid('chalyblux', 0xffcccc, dull, [15499, 'highest', GTValues.VA[UEV], 2575], []);

    MH.elemIngotFluid(
        'mythril',
        0x006666,
        metallic,
        [11299, 'highest', GTValues.VA[UHV], 2400],
        [foil, gear, longRod, plates, rod, rotor, smallGear, ring, frame]
    );

    MH.elemIngotFluid(
        'adamantine',
        0xe99700,
        metallic,
        [13299, 'highest', GTValues.VHA[UEV], 2300],
        [foil, gear, longRod, plates, rod, rotor, smallGear, ring, frame, fineWire]
    );

    MH.elemIngotFluid(
        'estalt',
        0xff5050,
        dull,
        [12299, 'highest', GTValues.VA[UHV], 2200],
        [foil, gear, longRod, plates, rod, rotor, smallGear, ring, frame]
    );

    MH.elemIngotFluid(
        'enriched_estalt',
        0xe76c6c,
        radioactive,
        [12899, 'highest', GTValues.VA[UHV], 2500],
        [foil, gear, longRod, plates, rod, rotor, smallGear, ring, frame]
    );

    MH.elemIngotFluid(
        'calamatium',
        0x660000,
        dull,
        [13199, 'highest', GTValues.VA[UHV], 2400],
        [foil, gear, longRod, plates, rod, rotor, smallGear, ring, frame]
    );

    MH.elemIngotFluid(
        'isovol',
        0x290066,
        dull,
        [12999, 'highest', GTValues.VA[UHV], 2400],
        [foil, gear, longRod, plates, rod, rotor, smallGear, ring, frame]
    );

    event
        .create('zapolgium')
        .ingot()
        .fluid()
        .element(GTElements.get('zapolgium'))
        .color(0xcc00cc)
        .iconSet(dull)
        .blastTemp(10799, 'highest', GTValues.VA[UHV], 1600)
        .flags(plates, rod, frame, longRod)
        .fluidPipeProperties(18000, 7200, true, true, true, true);

    event
        .create('magnetic_zapolgium')
        .ingot()
        .components('1x zapolgium')
        .color(0xcc00cc)
        .iconSet(magnetic)
        .flags(longRod)
        .arcSmeltInto('zapolgium')
        .ingotSmeltInto('zapolgium');

    event
        .create('magnetic_dysprosium')
        .ingot()
        .components('1x dysprosium')
        .color(0x6a664b)
        .secondaryColor(0x423307)
        .iconSet(magnetic)
        .flags(longRod)
        .arcSmeltInto('dysprosium')
        .ingotSmeltInto('dysprosium');
});
