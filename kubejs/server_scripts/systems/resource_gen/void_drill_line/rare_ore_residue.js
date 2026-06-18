ServerEvents.recipes((event) => {
    const id = global.id;

    event.recipes.gtceu
        .electrolyzer(id('rare_ore_residue'))
        .inputFluids('gtceu:rare_ore_residue 1000')
        .itemOutputs(
            'gtceu:chromite_sludge_dust',
            'gtceu:rare_sludge_dust',
            'gtceu:vanadium_magnetite_sludge_dust',
            'gtceu:cobaltite_sludge_dust'
        )
        .outputFluids('gtceu:raw_ore_slurry 250')
        .duration(120)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu
        .centrifuge(id('cobaltite_sludge'))
        .itemInputs('gtceu:cobaltite_sludge_dust')
        .itemOutputs('2x gtceu:cobaltite_dust', 'gtceu:rare_metallic_residue_dust')
        .duration(50)
        .EUt(GTValues.VHA[GTValues.MV]);

    event.recipes.gtceu
        .centrifuge(id('chromite_sludge'))
        .itemInputs('gtceu:chromite_sludge_dust')
        .itemOutputs('2x gtceu:chromite_dust', 'gtceu:rare_metallic_residue_dust')
        .duration(50)
        .EUt(GTValues.VHA[GTValues.MV]);

    event.recipes.gtceu
        .centrifuge(id('rare_sludge'))
        .itemInputs('gtceu:rare_sludge_dust')
        .itemOutputs('2x gtceu:rare_earth_dust', 'gtceu:rare_metallic_residue_dust')
        .duration(50)
        .EUt(GTValues.VHA[GTValues.MV]);

    event.recipes.gtceu
        .centrifuge(id('vanadium_magnetite_sludge'))
        .itemInputs('gtceu:vanadium_magnetite_sludge_dust')
        .itemOutputs('2x gtceu:vanadium_magnetite_dust', 'gtceu:rare_metallic_residue_dust')
        .duration(50)
        .EUt(GTValues.VHA[GTValues.MV]);

    event.recipes.gtceu
        .electrolyzer(id('rare_metallic_residue'))
        .itemInputs('gtceu:rare_metallic_residue_dust')
        .itemOutputs('2x gtceu:calcite_dust', 'gtceu:silver_dust')
        .duration(50)
        .EUt(GTValues.VA[GTValues.MV]);
});
