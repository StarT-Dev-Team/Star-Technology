GTCEuStartupEvents.registry('gtceu:material', (event) => {
    const MH = global.materialHelpers(event);

    const { noDecomp } = FLAGS;

    MH.compLiquid('nuclear_steam', ['1x steam', '1x mystery'], 0xcccccc, [noDecomp]);

    MH.compLiquid('hot_sodium_potassium', ['1x sodium_potassium', '1x mystery'], 0x82fcc3, [noDecomp]);

    MH.compLiquid('hot_pcb_coolant', ['1x pcb_coolant', '1x mystery'], 0xc9ca81, [noDecomp]);

    MH.compGem('diatron', [], 0x6699ff, ICONSETS.lapis, [noDecomp]);
});
