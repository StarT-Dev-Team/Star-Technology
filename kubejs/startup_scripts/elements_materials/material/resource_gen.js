GTCEuStartupEvents.registry('gtceu:material', (event) => {
    const MH = global.materialHelpers(event);

    const { noDecomp } = FLAGS;

    MH.compLiquid('iron_mixture', ['1x mystery'], 0xc42626, [noDecomp]);

    MH.compLiquid('copper_mixture', ['1x mystery'], 0xc86524, [noDecomp]);

    MH.compLiquid('quartz_mixture', ['1x mystery'], 0xabc5e0, [noDecomp]);

    MH.compLiquid('rare_ore_residue', ['1x mystery'], 0x556278, [noDecomp]);

    MH.compDust('chromite_sludge', ['2x chromite', '1x mystery'], 0x4c3c4c, [noDecomp]);

    MH.compDust('rare_sludge', ['1x mystery'], 0xceec94, [noDecomp]);

    MH.compDust('vanadium_magnetite_sludge', ['2x vanadium_magnetite', '1x mystery'], 0x1c1c2c, [noDecomp]);

    MH.compDust('cobaltite_sludge', ['2x cobaltite', '1x mystery'], 0x6186bb, [noDecomp]);

    MH.compDust('rare_metallic_residue', ['1x silver', '2x calcite'], 0x515755, [noDecomp]);

    MH.compLiquid('raw_ore_slurry', ['1x mystery'], 0x7b8087, [noDecomp]);

    MH.compLiquid('mixed_mineral_residue', ['1x mystery'], 0x566e6e, [noDecomp]);

    MH.compLiquid('sulfuric_mineral_mixture', ['1x mystery'], 0xe34f1e, [noDecomp]);

    MH.compLiquid('oxygenous_mineral_mixture', ['1x mystery'], 0x359696, [noDecomp]);

    //molten ores
    MH.compLiquidTemp('molten_ore_mixture', 1273, ['1x mystery'], 0x575050, [noDecomp]);

    MH.compLiquidTemp('molten_bauxite_ore', 1160, ['1x bauxite'], 0xb5b69a, [noDecomp]);

    MH.compLiquidTemp('molten_pitchblende_ore', 1160, ['1x pitchblende'], 0xafc585, [noDecomp]);

    MH.compLiquidTemp('molten_molybdenite_ore', 1160, ['1x molybdenite'], 0xc1d0a4, [noDecomp]);

    MH.compLiquidTemp('molten_ilmenite_ore', 1160, ['1x ilmenite'], 0xcba88f, [noDecomp]);

    MH.compLiquidTemp('molten_tungstate_ore', 1160, ['1x tungstate'], 0x9cacb1, [noDecomp]);

    MH.compLiquidTemp('molten_bastnasite_ore', 1160, ['1x bastnasite'], 0x988e84, [noDecomp]);

    MH.compLiquidTemp('molten_cooperite_ore', 1160, ['1x cooperite'], 0xa4a38b, [noDecomp]);
});
