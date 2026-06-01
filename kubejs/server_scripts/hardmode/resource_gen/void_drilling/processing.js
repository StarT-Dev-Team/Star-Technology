// packmode: hard

ServerEvents.recipes((event) => {
    const id = global.id;

    // Raw Ore Concentrate

    // Electrolyze Metallic Ore Sludge (dust) + Raw Ore Residue (liquid)

    event.recipes.gtceu
        .electrolyzer(id('raw_ore_concentrate_decomp'))
        .inputFluids('gtceu:raw_ore_concentrate 1000')
        .itemOutputs('4x gtceu:metallic_ore_sludge_dust')
        .outputFluids('gtceu:raw_ore_residue 450', 'gtceu:rare_ore_residue 75')
        .duration(170)
        .EUt(GTValues.VHA[GTValues.LV]);

    // EM Separate Metallic Ore Concentrate to Pentalite Dust, Gold Dust, Silver Dust

    event.recipes.gtceu
        .electromagnetic_separator(id('metallic_ore_sludge_decomp'))
        .itemInputs('15x gtceu:metallic_ore_sludge_dust')
        .itemOutputs('8x gtceu:pentlandite_dust', '5x gtceu:gold_dust', '2x gtceu:silver_dust')
        .duration(520)
        .EUt(GTValues.VA[GTValues.LV]);

    // Centrifuge Raw Ore Residue to Raw Coal, Sodalite (low chance), Sand Dust

    event.recipes.gtceu
        .centrifuge(id('raw_ore_residue_decomp'))
        .inputFluids('gtceu:raw_ore_residue 1000')
        .chancedOutput('1x gtceu:raw_coal', 9000, 0)
        .chancedOutput('1x gtceu:sodalite_gem', 3500, 0)
        .itemOutputs('2x gtceu:quartz_sand_dust')
        .duration(350)
        .EUt(GTValues.VHA[GTValues.LV]);

    // Rare Ore Residue

    // Elec Rare Ore Residue to Cobaltite, VanaMag and Chromite Sludge

    event.recipes.gtceu
        .centrifuge(id('rare_ore_residue_decomp'))
        .inputFluids('gtceu:rare_ore_residue 1000')
        .chancedOutput('5x gtceu:cobaltite_sludge_dust', 6000, 0)
        .chancedOutput('5x gtceu:vanadium_magnetite_sludge_dust', 6000, 0)
        .chancedOutput('5x gtceu:chromite_sludge_dust', 6000, 0)
        .outputFluids('gtceu:raw_ore_residue 100')
        .duration(350)
        .EUt(GTValues.VHA[GTValues.MV]);

    // Each Sludge Cent 3 => 2 Dust, 95% Rare Metallic, 5% Rare Sludge

    const sludge = ['cobaltite', 'vanadium_magnetite', 'chromite'];
    sludge.forEach((type) => {
        event.recipes.gtceu
            .centrifuge(id(`${type}_sludge_decomp`))
            .itemInputs(`3x gtceu:${type}_sludge_dust`)
            .itemOutputs(`2x gtceu:${type}_dust`)
            .chancedOutput('1x gtceu:rare_metallic_residue_dust', 9500, 0)
            .chancedOutput('1x gtceu:rare_sludge_dust', 500, 0)
            .duration(150)
            .EUt(GTValues.VA[GTValues.MV]);
    });

    // EM Sep Rare Metallic 3 => Silver, Calcite Dust, Calcite Dust

    event.recipes.gtceu
        .electromagnetic_separator(id('rare_metallic_residue_decomp'))
        .itemInputs('3x gtceu:rare_metallic_residue_dust')
        .itemOutputs('1x gtceu:silver_dust', '2x gtceu:calcite_dust')
        .duration(160)
        .EUt(GTValues.VA[GTValues.MV]);

    // Raw Ore Slurry

    // Centrifuge to Raw Ore Concentrate, Mixed Mineral Residue, Stone Dust

    event.recipes.gtceu
        .centrifuge(id('raw_ore_slurry_decomp'))
        .inputFluids('gtceu:raw_ore_slurry 1000')
        .outputFluids('gtceu:mixed_mineral_residue 800', 'gtceu:raw_ore_concentrate 200')
        .itemOutputs('1x gtceu:stone_dust')
        .duration(120)
        .EUt(GTValues.VHA[GTValues.HV]);

    // Electrolyze Mixed Mineral Residue to Oxygenous and Sulfuric Mixtures

    event.recipes.gtceu
        .electrolyzer(id('mixed_mineral_residue_decomp'))
        .inputFluids('gtceu:mixed_mineral_residue 1000')
        .outputFluids('gtceu:sulfuric_mineral_mixture 500', 'gtceu:oxygenous_mineral_mixture 500')
        .duration(260)
        .EUt(GTValues.VA[GTValues.MV]);

    // Cent Mixtures for Ores + Dist Sulf

    event.recipes.gtceu
        .centrifuge(id('sulfuric_mineral_mixture_decomp'))
        .inputFluids('gtceu:sulfuric_mineral_mixture 1000')
        .chancedOutput('6x gtceu:crushed_barite_ore', 4500, 0)
        .chancedOutput('6x gtceu:crushed_bornite_ore', 4500, 0)
        .outputFluids('gtceu:diluted_sulfuric_acid 200')
        .duration(160)
        .EUt(GTValues.VHA[GTValues.HV]);

    event.recipes.gtceu
        .centrifuge(id('oxygenous_mineral_mixture_decomp'))
        .inputFluids('gtceu:oxygenous_mineral_mixture 1000')
        .chancedOutput('6x gtceu:crushed_pollucite_ore', 4500, 0)
        .chancedOutput('6x gtceu:crushed_tantalite_ore', 4500, 0)
        .outputFluids('minecraft:water 200')
        .duration(160)
        .EUt(GTValues.VHA[GTValues.HV]);

    // Molten Ore Mixture

    //Impure

    event.recipes.gtceu
        .distillation_tower(id('impure_molten_ore_mixture_distilling'))
        .inputFluids('gtceu:impure_molten_ore_mixture 20000')
        .outputFluids(
            'gtceu:molten_waste 8000',
            'gtceu:molten_molybdenite_ore 4000',
            'gtceu:molten_ilmenite_ore 4000',
            'gtceu:molten_bauxite_ore 4000'
        )
        .itemOutputs('2x gtceu:metal_mixture_dust')
        .duration(1120)
        .EUt(GTValues.VHA[GTValues.EV]);

    //Pure

    event.recipes.gtceu
        .distillation_tower(id('pure_molten_ore_mixture_distilling'))
        .inputFluids('gtceu:pure_molten_ore_mixture 24000')
        .outputFluids(
            'gtceu:impure_molten_ore_mixture 8000',
            'gtceu:molten_tungstate_ore 4000',
            'gtceu:molten_cooperite_ore 4000',
            'gtceu:molten_bastnasite_ore 4000',
            'gtceu:molten_pitchblende_ore 4000'
        )
        .itemOutputs('2x gtceu:metal_mixture_dust')
        .duration(1300)
        .EUt(GTValues.VA[GTValues.EV]);

    const heavyOres = ['molybdenite', 'ilmenite', 'bauxite', 'tungstate', 'cooperite', 'bastnasite', 'pitchblende'];

    // Cooling

    event.recipes.gtceu
        .vacuum_freezer(id('molten_waste_cooling'))
        .inputFluids('gtceu:molten_waste 1000')
        .outputFluids('gtceu:cooled_molten_waste 1000')
        .duration(150)
        .EUt(GTValues.VA[GTValues.HV]);

    heavyOres.forEach((ore) => {
        event.recipes.gtceu
            .vacuum_freezer(id(`molten_${ore}_ore_cooling`))
            .inputFluids(`gtceu:molten_${ore}_ore 1000`)
            .outputFluids(`gtceu:cooled_molten_${ore}_ore 1000`)
            .duration(150)
            .EUt(GTValues.VHA[GTValues.EV]);

        // Ores

        event.recipes.gtceu
            .centrifuge(id(`cooled_molten_${ore}_ore_decomp`))
            .inputFluids(`gtceu:cooled_molten_${ore}_ore 1000`)
            .chancedOutput(`8x gtceu:crushed_${ore}_ore`, 7000, 0)
            .chancedOutput(`4x gtceu:crushed_${ore}_ore`, 7000, 0)
            .itemOutputs('1x gtceu:metal_mixture_dust')
            .outputFluids('minecraft:lava 100')
            .duration(360)
            .EUt(GTValues.VA[GTValues.HV]);
    });

    event.recipes.gtceu
        .centrifuge(id(`cooled_molten_waste_decomp`))
        .inputFluids(`gtceu:cooled_molten_waste 1000`)
        .chancedOutput(`7x gtceu:crushed_tetrahedrite_ore`, 6000, 0)
        .chancedOutput(`4x gtceu:crushed_red_garnet_ore`, 6000, 0)
        .chancedOutput(`4x gtceu:crushed_yellow_garnet_ore`, 6000, 0)
        .itemOutputs('1x gtceu:stone_dust')
        .outputFluids('minecraft:lava 100')
        .duration(360)
        .EUt(GTValues.VA[GTValues.HV]);
});
