GTCEuStartupEvents.registry('gtceu:material', (event) => {
    const MH = global.materialHelpers(event);

    MH.compLiquid('naquadite_solution', ['1x naquadite', '1x mystery'], 0x524848, [FLAGS.noDecomp]);
});
