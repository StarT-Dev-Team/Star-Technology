GTCEuStartupEvents.registry('gtceu:material', (event) => {
    const MH = global.materialHelpers(event);

    const { noDecomp } = FLAGS;

    MH.compLiquid('enriched_mythrillic_mixture', ['1x mystery', '1x mythril', '1x mystery'], 0x238213, [noDecomp]);

    MH.compLiquidTemp('molten_mythrillic_mixture', 3100, ['1x mystery', '1x mythril', '1x mystery'], 0x238342, [
        noDecomp,
    ]);

    MH.compDustLiquid('mythrillic', ['1x mystery', '1x mythril', '1x mystery'], 0x238362, [noDecomp]);

    MH.compDust('mythrillic_hydride', ['1x mythril', '2x hydrogen'], 0x238338, [noDecomp]);
});
