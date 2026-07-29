GTCEuStartupEvents.registry('gtceu:material', (event) => {
    const MH = global.materialHelpers(event);

    const { noDecomp } = FLAGS;

    MH.compLiquid('titanite_slurry', ['1x titanite', '1x mystery'], 0x862d2d, [noDecomp]);

    MH.compLiquid('titanite_slurry_residue', ['1x rutile', '1x mystery'], 0xbf4040, [noDecomp]);

    MH.compLiquid(
        'hydroxo_dioxo_titanite_mixture',
        ['2x sodium', '1x rutile', '2x oxygen', '2x hydrogen', '1x mystery'],
        0xd27979,
        [noDecomp]
    );

    MH.compLiquid('titanite_residue', ['1x rutile', '1x mystery'], 0xe6004c, [noDecomp]);

    MH.compLiquid('titanium_tetrachloride_mixture', ['1x titanium_tetrachloride', '1x mystery'], 0xff1a66, [noDecomp]);

    MH.compDust('zirconium_tetrachloride', ['1x zirconium', '4x chlorine'], 0xffad33, [noDecomp]);
});
