global.notHardmode(() => {
    ServerEvents.recipes((event) => {
        const id = global.id;

        //mixture
        event.recipes.gtceu
            .centrifuge(id('raw_ore_slurry'))
            .inputFluids('gtceu:raw_ore_slurry 1000')
            .itemOutputs(
                'gtceu:crushed_lepidolite_ore',
                'gtceu:crushed_pyrochlore_ore',
                'gtceu:crushed_pyrolusite_ore',
                'gtceu:crushed_magnesite_ore'
            )
            .outputFluids('gtceu:mixed_mineral_residue 750', 'gtceu:molten_ore_mixture 250')
            .duration(240)
            .EUt(GTValues.VA[GTValues.MV]);

        //dissolving
        event.recipes.gtceu
            .electrolyzer(id('mixed_mineral_residue'))
            .inputFluids('gtceu:mixed_mineral_residue 1000')
            .itemOutputs('gtceu:crushed_beryllium_ore', 'gtceu:crushed_zavaritskite_ore')
            .outputFluids('gtceu:sulfuric_mineral_mixture 400', 'gtceu:oxygenous_mineral_mixture 600')
            .duration(240)
            .EUt(GTValues.VA[GTValues.HV]);

        event.recipes.gtceu
            .centrifuge(id('sulfuric_mineral_mixture'))
            .inputFluids('gtceu:sulfuric_mineral_mixture 500')
            .itemOutputs('gtceu:crushed_barite_ore', 'gtceu:crushed_chalcopyrite_ore', 'gtceu:crushed_bornite_ore')
            .duration(230)
            .EUt(GTValues.VA[GTValues.HV]);

        event.recipes.gtceu
            .centrifuge(id('oxygenous_mineral_mixture'))
            .inputFluids('gtceu:oxygenous_mineral_mixture 500')
            .itemOutputs('gtceu:crushed_tantalite_ore', 'gtceu:crushed_pollucite_ore', 'gtceu:crushed_cassiterite_ore')
            .duration(230)
            .EUt(GTValues.VA[GTValues.HV]);
    });
});
