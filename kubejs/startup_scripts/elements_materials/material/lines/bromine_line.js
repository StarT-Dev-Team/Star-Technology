GTCEuStartupEvents.registry('gtceu:material', (event) => {
    const MH = global.materialHelpers(event);

    const { noDecomp } = FLAGS;

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
});
