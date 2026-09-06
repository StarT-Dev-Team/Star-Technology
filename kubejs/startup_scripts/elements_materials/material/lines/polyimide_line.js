GTCEuStartupEvents.registry('gtceu:material', (event) => {
    const MH = global.materialHelpers(event);

    const { noDecomp, foil, plates, rod } = FLAGS;

    MH.compLiquid('azanide', ['1x nitrogen', '2x hydrogen'], 0xbfc7e5, [noDecomp]); //Hide in JEI

    MH.compLiquid('benzophenone', ['13x carbon', '10x hydrogen', '1x oxygen'], 0xe5d3b5, [noDecomp]);

    MH.compLiquid('methylamine', ['1x carbon', '3x hydrogen', '1x nitrogen', '2x hydrogen'], 0xd8d8e5, [noDecomp]);

    MH.compDust('benzophenone_3344_tetracarboxylic_dianhydride', ['17x carbon', '6x hydrogen', '7x oxygen'], 0xd1b9a3, [
        noDecomp,
    ]);

    MH.compLiquid('y_butyrolactone', ['4x carbon', '6x hydrogen', '2x oxygen'], 0xd6e2e2, [noDecomp]);

    MH.compLiquid('m_phelyenediamine', ['6x carbon', '4x hydrogen', '2x azanide'], 0xe2bfc0, [noDecomp]);

    MH.compDust('n_methyl_2_pyrrolidone', ['5x carbon', '9x hydrogen', '1x nitrogen', '1x oxygen'], 0xbdc8d8, [
        noDecomp,
    ]);

    MH.compLiquid('polyamic_acid', ['17x carbon', '12x hydrogen', '2x nitrogen', '6x oxygen'], 0xcbbfa3, [noDecomp]);

    MH.polymerFluid('polyimide', ['17x carbon', '10x hydrogen', '2x nitrogen', '4x oxygen'], 0xd6a970, [
        foil,
        plates,
        plates,
        rod,
        noDecomp,
    ]);
});
