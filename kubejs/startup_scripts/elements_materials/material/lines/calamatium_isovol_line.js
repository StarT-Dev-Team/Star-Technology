GTCEuStartupEvents.registry('gtceu:material', (event) => {
    const MH = global.materialHelpers(event);

    const { noDecomp } = FLAGS;

    MH.compLiquid('impure_calamatium_solution', [], 0x990000, []);

    MH.compLiquid('impure_isovol_solution', [], 0x000066, []);

    MH.compLiquid('calamatium_solution', [], 0xe60000, []);

    MH.compLiquid('isovol_solution', [], 0x6600cc, []);

    MH.compDust('calamatium_fluoride', ['1x calamatium', '2x fluorine'], 0xcc0066, [noDecomp]);

    MH.compDust('isovol_fluoride', ['1x isovol', '2x fluorine'], 0x9900ff, [noDecomp]);
});
