GTCEuStartupEvents.registry('gtceu:material', (event) => {
    const MH = global.materialHelpers(event);

    const { noDecomp } = FLAGS;

    MH.compLiquid('riftion_extract', ['999x mystery', '1x riftic', '999x mystery'], 0x8f5d8c, [noDecomp]);
    MH.compPlasma('riftion', 999989999, ['1x riftion_extract', '1x neutronium'], 0xf0fbff, [noDecomp]);
    MH.compLiquid('highly_unstable_rift_source', ['1x riftic', '1x excited'], 0x5e1c5b, [noDecomp]);
    MH.compLiquid('destabilized_rift_source', ['1x riftic', '1x mystery'], 0x854181, [noDecomp]);
    MH.compLiquid('ascension_rift_slurry', ['1x riftic', '1x mystery'], 0xedb2ea, [noDecomp]);
    MH.compLiquid('abyssal_rift_slurry', ['1x riftic', '1x mystery'], 0x3c265c, [noDecomp]);
    MH.compLiquid('rimula_t_foundation', ['1x riftic', '1x mystery'], 0xe5d1eb, [noDecomp]);
    MH.compLiquid('rimula_s_foundation', ['1x riftic', '1x mystery'], 0x230145, [noDecomp]);
    MH.compLiquid('true_rimula_foundation', ['1x riftic', '1x mystery'], 0x9e22bd, [noDecomp]);

    MH.compLiquid('primordial_extract', ['1x riftic', '1x voidic', '1x mystery'], 0x504985, [noDecomp]);
    MH.compLiquid('primordial_residue', ['1x riftic', '1x voidic'], 0x2b2080, [noDecomp]);
    MH.compLiquid('condensed_rimula', ['8x riftic', '1x mystery'], 0xa16296, [noDecomp]);
    MH.compLiquid('riftic_concentrate', ['8x riftic'], 0xb5109a, [noDecomp]);
    MH.compLiquid('faetic_extract', ['1x riftic', '1x faetic', '1x mystery'], 0x7da7b0, [noDecomp]);
    MH.compLiquid('prismatic_hypergurmalium', ['1x riftic', '1x faetic'], 0x4fdfff, [noDecomp]);
});
