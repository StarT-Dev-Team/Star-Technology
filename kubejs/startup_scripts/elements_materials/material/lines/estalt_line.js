GTCEuStartupEvents.registry('gtceu:material', (event) => {
    const MH = global.materialHelpers(event);

    const { noDecomp } = FLAGS;

    MH.compLiquidTemp('molten_estaltadyne_mixture', 3500, ['1x mystery', '1x estalt', '1x mystery'], 0x8e0505, [
        noDecomp,
    ]);

    MH.compDustLiquid('estaltadyne', ['1x mystery', '1x estalt', '1x mystery'], 0x8e0535, [noDecomp]);

    MH.compDust('estaltadyne_hydride', ['4x estalt', '9x hydrogen'], 0x8e0505, [noDecomp]);

    MH.compLiquid('enriched_estaltadyne_mixture', ['1x mystery', '1x enriched_estalt', '1x mystery'], 0xbe4747, [
        noDecomp,
    ]);

    MH.compLiquid('enriched_estaltadyne_solution', ['1x mystery', '1x enriched_estalt', '1x mystery'], 0xbe4717, [
        noDecomp,
    ]);
});
