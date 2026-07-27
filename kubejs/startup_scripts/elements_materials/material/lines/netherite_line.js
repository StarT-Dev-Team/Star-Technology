GTCEuStartupEvents.registry('gtceu:material', (event) => {
    const MH = global.materialHelpers(event);

    const { noDecomp } = FLAGS;

    MH.elemDustFluid('debris', 0x804000, [noDecomp]);

    MH.compDust('purified_debris', ['debris'], 0xcc0000, []);

    MH.compLiquid('chlorine_trifluoride', ['1x chlorine', '3x fluorine'], 0xb3ff99, []);

    MH.compLiquid('tetrachloroethylene', ['2x carbon', '4x chlorine'], 0xd966ff, []);
});
