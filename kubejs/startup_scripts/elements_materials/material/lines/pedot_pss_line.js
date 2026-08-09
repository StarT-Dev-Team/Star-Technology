GTCEuStartupEvents.registry('gtceu:material', (event) => {
    const MH = global.materialHelpers(event);

    const { noDecomp, foil, plates, ring } = FLAGS;

    MH.compLiquid('maleic_anhydride', ['4x carbon', '2x hydrogen', '3x oxygen'], 0xaaa099, [noDecomp]);

    MH.compLiquid('dimethyl_maleate', ['6x carbon', '10x hydrogen', '4x oxygen'], 0xc2bfb7, [noDecomp]);

    MH.compLiquid('dimethyl_succinate', ['4x carbon', '10x hydrogen', '3x oxygen'], 0xd0ccc4, [noDecomp]);

    MH.compLiquid('14_butanediol', ['4x carbon', '10x hydrogen', '2x oxygen'], 0xb8c4c4, [noDecomp]);

    MH.compDust('thiophene', ['4x carbon', '4x hydrogen', '1x sulfur'], 0xc8b680, [noDecomp]);

    MH.compLiquid('12_dibromoethane', ['2x carbon', '4x hydrogen', '2x bromine'], 0xb0a6cc, [noDecomp]);

    MH.compGas('dimethylformamide', ['3x carbon', '7x hydrogen', '1x nitrogen', '1x oxygen'], 0xa3b0b7, [noDecomp]); // DMF

    MH.compLiquid('34_ethylenedioxythiophene', ['6x carbon', '6x hydrogen', '2x oxygen', '1x sulfur'], 0x8a9a86, [
        noDecomp,
    ]); // EDOT

    MH.compDust('potassium_bromide', ['1x potassium', '1x bromine'], 0xd0d0d0, []);

    MH.compDust('benzoyl_peroxide', ['14x carbon', '10x hydrogen', '4x oxygen'], 0xc6a8a8, [noDecomp]);

    MH.compGas('hydrogen_chloride', ['1x hydrogen', '1x chlorine'], 0xa8ccc2, []);

    MH.compLiquid('chlorosulfonic_acid', ['1x hydrogen', '1x sulfur', '3x oxygen', '1x chlorine'], 0xa84e4e, [
        noDecomp,
    ]);

    MH.compLiquid('polystyrene_sulfonate', ['8x carbon', '8x hydrogen', '3x oxygen', '1x sulfur'], 0xd8c6f0, [
        noDecomp,
    ]); // PSS

    MH.compDust('ferric_nitrate', ['1x iron', '3x nitrate'], 0xaf5f5f, [noDecomp]);

    MH.compLiquid('poly_34_ethylenedioxythiophene', ['6x carbon', '4x hydrogen', '2x oxygen', '1x sulfur'], 0x7c8fb2, [
        noDecomp,
    ]); //PEDOT

    MH.compLiquid('sorbitol', ['6x carbon', '14x hydrogen', '6x oxygen'], 0xf8f0e8, [noDecomp]); //gotten from bacteria

    MH.compLiquid('sorbitan', ['6x carbon', '12x hydrogen', '5x oxygen'], 0xe8d6c6, [noDecomp]); //losses a water to steam

    MH.compLiquid('sorbitan_monoester', ['24x carbon', '46x hydrogen', '6x oxygen'], 0xd9cbb3, [noDecomp]);

    MH.compLiquid('polysorbate_20', ['1x sorbitan_monoester', '20x ethylene_glycol'], 0xa0d7dd, [noDecomp]);

    MH.compDust(
        'poly_34_ethylenedioxythiophene_polystyrene_sulfonate_paste',
        ['9x carbon', '7x hydrogen', '1x sulfur', '3x oxygen'],
        0x5d5a85,
        [noDecomp]
    );

    MH.compLiquid(
        'poly_34_ethylenedioxythiophene_polystyrene_sulfonate_solution',
        ['1x poly_34_ethylenedioxythiophene_polystyrene_sulfonate_paste', '2x water'],
        0x6c7fb0,
        [noDecomp]
    );

    MH.polymerFluidPipe(
        'poly_34_ethylenedioxythiophene_polystyrene_sulfonate',
        ['8x carbon', '7x hydrogen', '1x sulfur', '3x oxygen'],
        0x26396d,
        [675, 800, true, true, true, false],
        [foil, plates, ring, noDecomp]
    ); //PEDOT
});
