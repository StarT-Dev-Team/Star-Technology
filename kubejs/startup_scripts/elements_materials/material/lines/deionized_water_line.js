GTCEuStartupEvents.registry('gtceu:material', (event) => {
    const MH = global.materialHelpers(event);

    const { noDecomp } = FLAGS;

    MH.compLiquid('purified_water', ['2x hydrogen', 'oxygen'], 0x4a94ff, [noDecomp]);
    MH.compLiquid('acidic_water', ['2x hydrogen', 'oxygen'], 0x2e85ff, [noDecomp]);
    MH.compLiquid('divinylbenzene', ['10x carbon', '10x hydrogen'], 0x9fb1b8, [noDecomp]);
    MH.compLiquid('deionized_water', ['2x hydrogen', 'oxygen'], 0x006aff, [noDecomp]);
});
