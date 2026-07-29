GTCEuStartupEvents.registry('gtceu:material', (event) => {
    const MH = global.materialHelpers(event);

    const { noDecomp } = FLAGS;

    MH.compDustOre('titanite', ['1x calcium', '1x titanium', '1x silicon', '5x oxygen'], 0x66ffff, [noDecomp]);

    MH.compDustOre('zapolite', ['2x zapolgium', '4x iodine', '2x aluminium', '5x oxygen'], 0xcc0099, [noDecomp]);

    MH.compGemOre('xenotime', ['1x yttrium', '1x sulfate'], 0x948446, ICONSETS.gemVertical, [noDecomp]);

    MH.compDustOre('lautarite', ['1x calcium', '2x iodine', '6x oxygen'], 0x6666ff, []);

    MH.compDustOre('crookesite', ['7x copper', '1x thallium', '4x selenium'], 0x00ff99, []);

    MH.compDustOre('kitkaite', ['1x nickel', '1x tellurium', '1x selenium'], 0xe6ead3, []);

    MH.compDustOre('strontianite', ['1x strontium', '1x carbon', '3x oxygen'], 0xe6ffff, []);

    MH.compDustOre('celestine', ['1x strontium', '1x carbon', '4x oxygen'], 0xe6ffff, []);

    MH.compDustOre('zavaritskite', ['1x bismuth', '1x oxygen', '1x fluorine'], 0xe7d795, []);

    MH.compDustOre('naquadite', ['2x naquadah', '1x magnesia', '1x magnetite'], 0x272424, [noDecomp]);

    MH.compLiquidTemp('abydos_naquadite_dense_magma', 5120, ['1x mystery', '1x naquadite', '1x mystery'], 0x272424, [
        noDecomp,
    ]);

    MH.compLiquidTemp('naquadite_dense_residue', 2560, ['1x mystery', '1x naquadite', '1x mystery'], 0x524848, [
        noDecomp,
    ]);

    MH.compLiquidTemp(
        'abydos_refractory_dense_magma',
        4520,
        ['1x mystery', '1x titanite', '1x xenotime', '1x monazite', '1x scheelite', '1x mystery'],
        0xe65c00,
        [noDecomp]
    );

    MH.compLiquidTemp(
        'abydos_reactive_dense_magma',
        4980,
        ['1x mystery', '1x zapolite', '1x crookesite', '1x kitkaite', '1x lautarite', '1x mystery'],
        0xff471a,
        [noDecomp]
    );

    MH.compDust('abydos_magma_slag', ['1x mystery'], 0x8a726d, [noDecomp]);

    MH.compLiquidTemp(
        'refractory_dense_residue',
        2370,
        ['1x mystery', '1x titanite', '1x xenotime', '1x monazite', '1x scheelite', '1x mystery'],
        0xb85513,
        [noDecomp]
    );

    MH.compLiquidTemp(
        'reactive_dense_residue',
        2450,
        ['1x mystery', '1x zapolite', '1x crookesite', '1x kitkaite', '1x lautarite', '1x mystery'],
        0xad2705,
        [noDecomp]
    );
});
