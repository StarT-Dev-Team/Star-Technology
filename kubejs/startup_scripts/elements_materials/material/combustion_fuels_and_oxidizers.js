GTCEuStartupEvents.registry('gtceu:material', (event) => {
    const MH = global.materialHelpers(event);

    const { noDecomp } = FLAGS;

    MH.compLiquid('kerosene', ['12x carbon', '26x hydrogen'], 0xe8d44d, [noDecomp]);
    MH.compLiquid('hydrofined_kerosene', ['12x carbon', '26x hydrogen'], 0xf2ec9a, [noDecomp]);
    MH.compLiquid('rp_1', ['12x carbon', '26x hydrogen'], 0xf2ec9a, [noDecomp]);
    MH.compLiquidTemp('liquid_fluorine', 85, ['2x fluorine'], 0xb5e0ff, [noDecomp]);
    MH.compLiquidTemp('dioxygen_difluoride', 110, ['2x oxygen', '2x fluorine'], 0xe8f1ff, [noDecomp]);
    MH.compLiquid('white_fuming_nitric_acid', ['1x hydrogen', '1x nitrogen', '3x oxygen'], 0xfdfefc, [noDecomp]);
    MH.compLiquid('red_fuming_nitric_acid', ['1x hydrogen', '1x nitrogen', '3x oxygen'], 0xff0000, [noDecomp]);
    MH.compLiquid('monomethylhydrazine', ['1x carbon', '6x hydrogen', '2x nitrogen'], 0x9e9e9e, [noDecomp]);
    MH.compLiquid(
        'sorbitol_hypergolic_fuel',
        ['6x carbon', '20x hydrogen', '6x oxygen', '1x nitrogen', '1x boron'],
        0xf5f5f5,
        [noDecomp]
    );
    MH.compLiquid(
        'ferrocenium_superoxide',
        ['15x carbon', '5x hydrogen', '15x fluorine', '1x iron', '2x oxygen'],
        0xb87333,
        [noDecomp]
    );
    MH.compLiquid('fuming_nitric_acid', ['1x hydrogen', '1x nitrogen', '3x oxygen'], 0xf0f0f0, [noDecomp]);
    MH.compLiquid('hydrazine', ['2x nitrogen', '4x hydrogen'], 0xc8c8c8, [noDecomp]);
    MH.compDust('ammonia_borane', ['1x nitrogen', '1x boron', '6x hydrogen'], 0xffffff, [noDecomp]);
    MH.compLiquid('ferrocene', ['10x carbon', '10x hydrogen', '1x iron'], 0xff8c00, [noDecomp]);
    MH.compLiquid('hexafluorophosphoric_acid', ['1x hydrogen', '1x phosphorus', '6x fluorine'], 0xe8e8ff, [noDecomp]);
    MH.compLiquid(
        'iron_cyclopentadienyl_dichlorobenzene',
        ['16x carbon', '14x hydrogen', '1x iron', '2x chlorine', '1x phosphorus', '6x fluorine'],
        0xcc6600,
        [noDecomp]
    );
    MH.compLiquid('fluorinated_ferrocene', ['15x carbon', '5x hydrogen', '15x fluorine', '1x iron'], 0x00aa00, [
        noDecomp,
    ]);
});
