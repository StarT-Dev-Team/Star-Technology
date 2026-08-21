// priority: 2000
GTCEuStartupEvents.registry('gtceu:material', (event) => {
    const MH = global.materialHelpers(event);

    const { noDecomp } = FLAGS;

    MH.compDust('sodium_borohydride', ['1x sodium', '1x boron', '4x hydrogen'], 0xe3dec8, [noDecomp]);

    MH.compDust('bismuth_3_nitrate', ['1x bismuth', '3x nitrate'], 0xdedbcd, [noDecomp]);

    MH.compDust('sodium_nitrate', ['1x sodium', '1x nitrogen', '3x oxygen'], 0xe6e5e5, []);

    MH.compGas('diborane', ['2x boron', '6x hydrogen'], 0xfdffe1, []);

    MH.compDust('silicon_carbide', ['1x silicon', '1x carbon'], 0xb79f8d, []);

    MH.compDust(
        'silicon_carbide_over_bismuth_tritelluride',
        ['1x silicon_carbide', '1x bismuth_tritelluride'],
        0x86c455,
        []
    );
});
