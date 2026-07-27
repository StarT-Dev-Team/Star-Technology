GTCEuStartupEvents.registry('gtceu:material', (event) => {
    const MH = global.materialHelpers(event);

    const { noDecomp, foil, plates } = FLAGS;

    MH.compLiquid('linoleic_acid', ['18x carbon', '31x hydrogen', '2x oxygen'], 0xdbdcdb, [noDecomp]);
    MH.compDust('sodium_linoleate', ['18x carbon', '31x hydrogen', '2x oxygen', 'sodium'], 0xe3ffff, [noDecomp]);
    MH.noCompFluid('aerogel_solvent_mixture', 0x9de4db);
    MH.compLiquid('silicon_tetrachloride', ['silicon', '4x chlorine'], 0xdcdbdb, [noDecomp]);
    MH.compLiquid('tetraethyl_orthosilicate', ['silicon', '8x carbon', '20x hydrogen', '4x oxygen'], 0xdbdbdb, [
        noDecomp,
    ]);
    MH.noCompFluid('aerogel_precursor_solution', 0xaebbbf);

    event
        .create('aerogel')
        .components('1x air')
        .polymer()
        .ingot()
        .color(0x9fcad9)
        .secondaryColor(0xe5f1ee)
        .flags(foil, plates);
});
