GTCEuStartupEvents.registry('gtceu:material', (event) => {
    const MH = global.materialHelpers(event);

    const { noDecomp } = FLAGS;

    MH.compDust('zapolgium_aluminium_oxide', ['1x zapolgium', '2x iodine', '2x aluminium', '4x oxygen'], 0x6666ff, [
        noDecomp,
    ]);

    MH.compDust('zapolgium_diiodide_dioxide', ['1x zapolgium', '2x iodine', '2x oxygen'], 0x660066, [noDecomp]);

    MH.compDust('zapolgium_diiodide_oxide', ['1x zapolgium', '2x iodine', '1x oxygen'], 0xff66ff, [noDecomp]);

    MH.compDust('zapolgium_oxide', ['1x zapolgium', '1x oxygen'], 0xff9933, [noDecomp]);

    MH.compDust('zapolgium_chloride', ['1x zapolgium', '2x chlorine'], 0x99ff33, [noDecomp]);

    MH.compDust('zapolgium_hydroxide', ['1x zapolgium', '2x oxygen', '2x hydrogen'], 0x00ff99, [noDecomp]);
});
