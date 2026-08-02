GTCEuStartupEvents.registry('gtceu:material', (event) => {
    const MH = global.materialHelpers(event);

    const { noDecomp } = FLAGS;

    MH.compLiquidTemp('crude_infernal_concentrate', 40000, ['1x mystery'], 0x6e1a00, [noDecomp]);

    MH.compLiquidTemp('infernal_concentrate', 45000, ['1x mystery'], 0xb02e00, [noDecomp]);

    MH.compLiquidTemp('superheated_infernal_concentrate', 50000, ['1x mystery'], 0xff6b00, [noDecomp]);

    MH.compLiquidTemp('sub_stellar_infernal_concentrate', 75000, ['1x mystery'], 0xfefbc6, [noDecomp]);

    MH.compLiquidTemp('super_stellar_infernal_concentrate', 100000, ['1x mystery'], 0xf4faff, [noDecomp]);

    MH.compLiquidTemp('hyper_stellar_infernal_concentrate', 125000, ['1x mystery'], 0x9cd7ff, [noDecomp]);
});
