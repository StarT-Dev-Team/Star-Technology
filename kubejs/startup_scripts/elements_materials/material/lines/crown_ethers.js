// priority: 100
GTCEuStartupEvents.registry('gtceu:material', (event) => {
    const MH = global.materialHelpers(event);

    const { noDecomp } = FLAGS;

    MH.compLiquid('sulfur_dichloride', ['1x sulfur', '2x chlorine'], 0xcc0000, []);

    MH.compLiquid('thionyl_chloride', ['1x sulfur', '1x oxygen', '2x chlorine'], 0xffffcc, [noDecomp]);

    MH.compLiquid('sulfuryl_chloride', ['1x sulfur', '2x oxygen', '2x chlorine'], 0xffffcc, []);

    MH.compLiquid('triglycol_dichloride', ['6x carbon', '12x hydrogen', '2x oxygen', '2x chlorine'], 0xffffcc, []);

    MH.compLiquid('ethylene_glycol', ['2x carbon', '6x hydrogen', '2x oxygen'], 0xf2f2f2, []);

    MH.compLiquid('diethylene_glycol', ['4x carbon', '10x hydrogen', '3x oxygen'], 0xf2f2f2, []);

    MH.compLiquid('triethylene_glycol', ['6x carbon', '14x hydrogen', '4x oxygen'], 0xf2f2f2, []);

    MH.compLiquid('ethylene_oxide', ['2x carbon', '4x hydrogen', '1x oxygen'], 0xd9d9d9, []);

    MH.compDust('lithium_perchlorate', ['1x lithium', '1x chlorine', '4x oxygen'], 0xe6f2ff, []);

    MH.compDust('sodium_perchlorate', ['1x sodium', '1x chlorine', '4x oxygen'], 0xccf2ff, []);

    MH.compDust('sodium_chlorate', ['1x sodium', '1x chlorine', '3x oxygen'], 0xccf2ff, []);

    MH.compDust('silver_oxide', ['2x silver', '1x oxygen'], 0xe3e3e3, []);

    MH.compLiquid('12_crown_4', ['8x carbon', '16x hydrogen', '4x oxygen'], 0xcc6699, []);

    MH.compLiquid('15_crown_5', ['10x carbon', '20x hydrogen', '5x oxygen'], 0x0099cc, []);

    MH.compLiquid('18_crown_6', ['12x carbon', '24x hydrogen', '6x oxygen'], 0x99ff33, []);

    MH.compLiquid('12_crown_4_li', ['1x lithium', '8x carbon', '16x hydrogen', '4x oxygen'], 0x993366, [noDecomp]);

    MH.compLiquid('15_crown_5_na', ['1x sodium', '10x carbon', '20x hydrogen', '5x oxygen'], 0x006080, [noDecomp]);

    MH.compLiquid('18_crown_6_k', ['1x potassium', '12x carbon', '24x hydrogen', '6x oxygen'], 0x4d9900, [noDecomp]);

    MH.compDust(
        '4_toluenesulfonyl_chloride',
        ['7x carbon', '7x hydrogen', '2x chlorine', '2x oxygen', '1x sulfur'],
        0xffccc,
        [noDecomp]
    );

    MH.compDust('triethylene_glycol_ditosylate', ['20x carbon', '26x hydrogen', '8x oxygen', '2x sulfur'], 0xb8b894, [
        noDecomp,
    ]);

    MH.compDust('sodium_azide', ['1x sodium', '3x nitrogen'], 0xcc6699, []);

    MH.compDust('palladium_on_carbon', ['1x palladium', '1x carbon'], 0xff9900, []);

    MH.compDust(
        'sodium_p_toluenesulfonate',
        ['7x carbon', '7x hydrogen', '1x sodium', '3x oxygen', '1x sulfur'],
        0x00cc00,
        [noDecomp]
    );

    MH.compDust('triethylene_glycol_diazide', ['6x carbon', '12x hydrogen', '2x oxygen', '6x nitrogen'], 0x6666ff, [
        noDecomp,
    ]);

    MH.compDust('triethylene_glycol_diamine', ['6x carbon', '16x hydrogen', '2x oxygen', '2x nitrogen'], 0xcc00cc, [
        noDecomp,
    ]);

    MH.compLiquid('cryptand', ['18x carbon', '36x hydrogen', '6x oxygen', '2x nitrogen'], 0x993333, [noDecomp]);

    MH.compLiquid('cryptand_k', ['1x potassium', '18x carbon', '36x hydrogen', '6x oxygen', '2x nitrogen'], 0x602020, [
        noDecomp,
    ]);

    MH.compLiquid('cryptand_na', ['1x sodium', '18x carbon', '36x hydrogen', '6x oxygen', '2x nitrogen'], 0x602020, [
        noDecomp,
    ]);

    MH.compLiquid('cryptand_li', ['1x lithium', '18x carbon', '36x hydrogen', '6x oxygen', '2x nitrogen'], 0x602020, [
        noDecomp,
    ]);
});
