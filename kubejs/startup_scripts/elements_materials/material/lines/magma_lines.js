GTCEuStartupEvents.registry('gtceu:material', (event) => {
    const MH = global.materialHelpers(event);

    const { noDecomp } = FLAGS;

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
        ['1x mystery', '1x adamantine', '1x mystery', '1x enriched_estalt', '1x mystery', '1x mythril', '1x mystery'],
        0xf26b87,
        [noDecomp]
    );
});
