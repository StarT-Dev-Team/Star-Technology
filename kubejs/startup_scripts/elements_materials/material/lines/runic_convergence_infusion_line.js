GTCEuStartupEvents.registry('gtceu:material', (event) => {
    const MH = global.materialHelpers(event);

    const { noDecomp } = FLAGS;

    MH.compLiquid(
        'netherite_trisulfate_complex',
        ['1x pure_netherite', '3x sulfur', '12x oxygen', '2x hydroxide'],
        0x660033,
        [noDecomp]
    );
    MH.compDust(
        'netherite_hexammine_sulfate',
        ['1x pure_netherite', '6x ammonia', '1x sulfur', '4x oxygen'],
        0x400080,
        [noDecomp]
    );
    MH.compLiquid('voidic_nitride', ['2x pure_netherite', '3x nitrogen', '4x oxygen'], 0x000066, [noDecomp]);
    MH.compDust('netherite_tetrahydroxide', ['1x pure_netherite', '4x hydroxide'], 0x8b8b8b, [noDecomp]);
    MH.compLiquid('astral_fluorosilicate', ['1x pure_netherite', '1x fluorine', '2x silicon', '4x oxygen'], 0x333300, [
        noDecomp,
    ]);
    MH.compLiquid(
        'primordial_nitrosilicate',
        ['3x pure_netherite', '3x nitrogen', '2x silicon', '8x oxygen', '1x fluorine'],
        0x990099,
        [noDecomp]
    );
    MH.compLiquid('magnesium_nitride', ['3x magnesium', '2x nitrogen'], 0xcc66ff, []);
    MH.compLiquid(
        'runic_convergence_infusion',
        ['3x pure_netherite', '6x magnesium', '7x nitrogen', '2x silicon', '8x oxygen', '1x fluorine'],
        0xcc0099,
        [noDecomp]
    );
});
