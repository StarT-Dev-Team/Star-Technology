GTCEuStartupEvents.registry('gtceu:material', (event) => {
    const MH = global.materialHelpers(event);

    const { noDecomp, foil, plates, ring } = FLAGS;

    MH.compDust('disodium_salt_of_hydroquinone', ['6x carbon', '4x hydrogen', '2x oxygen', '2x sodium'], 0xeaeaf9, [
        noDecomp,
    ]);

    MH.compDust('hydroquinone', ['6x carbon', '6x hydrogen', '2x oxygen'], 0xf9f9ff, [noDecomp]);

    MH.compDust('sodium_fluoride', ['1x sodium', '1x fluorine'], 0xdedee2, []);

    MH.compGas('carbon_acid', ['2x hydrogen', '1x carbon', '3x oxygen'], 0x333333, [noDecomp]);

    MH.compLiquid('fluorobenzene', ['6x carbon', '5x hydrogen', '1x fluorine'], 0xffffff, [noDecomp]);

    MH.compLiquid(
        '4_fluorobenzoyl_chloride',
        ['7x carbon', '4x hydrogen', '1x chlorine', '1x fluorine', '1x oxygen'],
        0xfffff0,
        [noDecomp]
    );

    MH.compLiquid('benzoyl_chloride', ['7x carbon', '5x hydrogen', '1x chlorine', '1x oxygen'], 0xfffadf, [noDecomp]);

    MH.compLiquid('benzotrichloride', ['7x carbon', '5x hydrogen', '3x chlorine'], 0xddd8bc, [noDecomp]);

    MH.compDust('44_difluorobenzophenone', ['13x carbon', '8x hydrogen', '1x oxygen', '2x fluorine'], 0xeee1c9, [
        noDecomp,
    ]); //naming like this: 4_4_di... will make kubejs go error to annoy you :)

    MH.polymerFluidPipe(
        'polyether_ether_ketone',
        ['19x carbon', '12x hydrogen', '3x oxygen'],
        0xccbba7,
        [550, 600, true, true, true, false],
        [foil, plates, ring, noDecomp]
    );
});
