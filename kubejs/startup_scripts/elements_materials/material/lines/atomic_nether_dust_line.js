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
});
