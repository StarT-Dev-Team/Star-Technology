// priority: 900
GTCEuStartupEvents.registry('gtceu:material', (event) => {
    const MH = global.materialHelpers(event);

    const { noDecomp } = FLAGS;

    MH.compDust('sulfate', ['1x sulfur', '4x oxygen'], 0xd5ba23, []);

    MH.compDust('silicate', ['1x silicon', '4x oxygen'], 0xc0ba97, [noDecomp]);

    MH.compDust('pyrophosphate', ['2x phosphorus', '7x oxygen'], 0xc08b63, []);

    MH.compLiquid('hydroxide', ['1x oxygen', '1x hydrogen'], 0xc0d4dd, []);
});
