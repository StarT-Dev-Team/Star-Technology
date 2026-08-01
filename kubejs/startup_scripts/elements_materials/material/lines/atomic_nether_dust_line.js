GTCEuStartupEvents.registry('gtceu:material', (event) => {
    const MH = global.materialHelpers(event);

    const { noDecomp } = FLAGS;

    MH.compDustIcon(
        'atomic_nether_sludge',
        ['1x mystery', '1x mystery', '1x mystery', '1x mystery'],
        0x883039,
        ICONSETS.radioactive,
        [noDecomp]
    );

    MH.compDust('deactivated_nether', ['1x mystery', '1x mystery'], 0x664c4c, [noDecomp]);

    MH.compDust('activated_nether', ['1x mystery', '1x mystery'], 0xa01819, [noDecomp]);

    MH.compDust('hafnastide_rich_sludge', ['1x mystery', '1x hafnium', '1x astatine', '1x mystery'], 0xa8798a, [
        noDecomp,
    ]);

    MH.compDust('flerovium_rich_re_sludge', ['1x mystery', '1x flerovium', '1x mystery', '1x mystery'], 0x798579, [
        noDecomp,
    ]);

    MH.compDust('pologium_rich_sludge', ['1x mystery', '1x polonium', '1x seaborgium', '1x mystery'], 0x576b62, [
        noDecomp,
    ]);
});
