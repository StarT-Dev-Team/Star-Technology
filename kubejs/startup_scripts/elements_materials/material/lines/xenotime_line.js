GTCEuStartupEvents.registry('gtceu:material', (event) => {
    const MH = global.materialHelpers(event);

    const { noDecomp } = FLAGS;

    MH.compLiquid('rare_earth_sulfate_solution', ['2x mystery', '3x sulfate'], 0xc6c2a8, [noDecomp]);

    MH.compLiquid('rare_earth_leach_mixture', ['3x mystery', '3x sulfate'], 0xafad9f, [noDecomp]);

    MH.compLiquid('rare_earth_concentrate', ['1x mystery', '1x sulfur', '4x oxygen'], 0x8c8a7e, [noDecomp]);

    MH.compDust('rich_rare_earth', ['1x mystery'], 0xb5ac90, [noDecomp]);
});
