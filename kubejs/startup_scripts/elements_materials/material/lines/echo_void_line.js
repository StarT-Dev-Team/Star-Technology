// priority: 5000
GTCEuStartupEvents.registry('gtceu:material', (event) => {
    const MH = global.materialHelpers(event);

    const { noDecomp } = FLAGS;
    const { dull } = ICONSETS;

    MH.elemFluid('echo_r', 'echo_r', 0x003333, []);

    MH.compIngot('raw_void', ['1x echo_r', '1x neutronium'], 0x006666, dull, null, [noDecomp]);

    MH.compIngotLiquid(
        'void',
        ['1x echo_r', '1x neutronium'],
        0x001a1a,
        dull,
        [10000, 'highest', GTValues.VA[UIV], 8000],
        [
            FLAGS.rod,
            FLAGS.foil,
            FLAGS.plates,
            FLAGS.longRod,
            FLAGS.frame,
            noDecomp,
            FLAGS.noABSRecipe,
            FLAGS.boltAndScrew,
            FLAGS.ring,
        ]
    );
});
