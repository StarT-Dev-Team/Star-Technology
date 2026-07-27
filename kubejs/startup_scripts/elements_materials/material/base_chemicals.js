GTCEuStartupEvents.registry('gtceu:material', (event) => {
    const MH = global.materialHelpers(event);

    const { noDecomp } = FLAGS;

    MH.compLiquid('perchloric_acid', ['1x hydrogen', '1x chlorine', '4x oxygen'], 0xffe6e6, []);

    MH.compDust('calcium_perchlorate', ['1x calcium', '2x chlorine', '8x oxygen'], 0xffff99, []);

    MH.compLiquid('silica_gel', ['1x chlorine', '1x hydrogen', '6x oxygen', '1x silicon'], 0xe6e6e6, [noDecomp]);

    MH.compDust('calcium_sulfate', ['1x calcium', '1x sulfur', '4x oxygen'], 0xffbf80, []);

    MH.compDust('sodium_oxide', ['2x sodium', '1x oxygen'], 0x6666ff, []);

    MH.compDust('strontium_oxide', ['1x strontium', '1x oxygen'], 0xffcc99, []);

    MH.compDust('titanium_oxide', ['1x titanium', '2x oxygen'], 0xff66cc, []);

    MH.compDust('strontium_titanium_oxide', ['1x strontium', '1x titanium', '3x oxygen'], 0xff0000, []);

    MH.compDust('copper_chloride', ['1x copper', '1x chlorine'], 0xfff9e8, []);

    MH.compLiquid('cupric_chloride_solution', ['1x copper_chloride', '1x hydrochloric_acid'], 0x336600, []);

    MH.compLiquid('hydroiodic_acid', ['1x hydrogen', '1x iodine'], 0x906ad6, [noDecomp]);
});
