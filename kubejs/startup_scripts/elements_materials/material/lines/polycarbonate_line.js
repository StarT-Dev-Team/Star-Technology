GTCEuStartupEvents.registry('gtceu:material', (event) => {
    const MH = global.materialHelpers(event);

    const { noDecomp, foil, plates } = FLAGS;

    MH.compDust('sodium_diphenoxide', ['2x sodium', '2x oxygen', '15x carbon', '16x hydrogen'], 0xfefefe, [noDecomp]);
    MH.compLiquid('phosgene', ['carbon', 'oxygen', '2x chlorine'], 0xfdfefc, [noDecomp]);
    MH.polymerFluidPipe(
        'polycarbonate',
        ['3x oxygen', '16x carbon', '16x hydrogen'],
        0x202020,
        [388, 300, true, true, false, false],
        [noDecomp, foil, plates]
    );
});
