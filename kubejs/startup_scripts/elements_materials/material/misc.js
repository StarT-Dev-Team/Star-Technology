GTCEuStartupEvents.registry('gtceu:material', (event) => {
    const MH = global.materialHelpers(event);

    const { noDecomp, noSmelt } = FLAGS;

    MH.compLiquid('nuclear_steam', ['1x steam', '1x mystery'], 0xcccccc, [noDecomp]);

    MH.compLiquid('hot_sodium_potassium', ['1x sodium_potassium', '1x mystery'], 0x82fcc3, [noDecomp]);

    MH.compLiquid('hot_pcb_coolant', ['1x pcb_coolant', '1x mystery'], 0xc9ca81, [noDecomp]);

    MH.compGem('diatron', [], 0x6699ff, ICONSETS.lapis, [noDecomp]);

    MH.compLiquid(
        'npk_solution',
        ['15x apatite', '5x potassium', '1x sulfur_trioxide', '1x nitrogen', '2x water'],
        0xb8c3f5,
        []
    );

    MH.elemGem('purified_naquadah', 0x000807, null, [noDecomp]);

    event.create('warped').dust().color(0x4fbb85).flags([noSmelt]);

    MH.compDust('hellfire_ash', ['1x mystery'], 0x5e4646, [noSmelt, noDecomp]);
});
