GTCEuStartupEvents.registry('gtceu:material', (event) => {
    const MH = global.materialHelpers(event);

    const { noDecomp, foil, plates, ring, rod } = FLAGS;

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
        .flags(foil, plates, ring, rod, noDecomp)
        .toolStats(
            ToolProperty.Builder.of(1, 1, 65535, 1, [GTToolType.SOFT_MALLET, GTToolType.PLUNGER]).unbreakable().build()
        );
});
