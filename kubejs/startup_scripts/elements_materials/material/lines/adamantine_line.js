GTCEuStartupEvents.registry('gtceu:material', (event) => {
    const MH = global.materialHelpers(event);

    const { noDecomp } = FLAGS;

    MH.compLiquid('enriched_adamantamite_mixture', ['1x mystery', '1x adamantine', '1x mystery'], 0x866e4b, [noDecomp]);

    MH.compLiquidTemp('molten_adamantamite_mixture', 3700, ['1x mystery', '1x adamantine', '1x mystery'], 0x866e7b, [
        noDecomp,
    ]);

    MH.compDustLiquid('adamantamite', ['1x mystery', '1x adamantine', '1x mystery'], 0x825f2b, [noDecomp]);

    MH.compDust('adamantine_hydroxide', ['1x adamantine', '3x hydrogen', '3x oxygen'], 0xcb8858, [noDecomp]);
});
