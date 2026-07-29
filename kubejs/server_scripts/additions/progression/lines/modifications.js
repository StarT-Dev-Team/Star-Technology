ServerEvents.recipes((event) => {
    const id = global.id;

    const idRemoval = [
        // Indium Line
        'gtceu:mixer/indium_concentrate',
        'gtceu:chemical_reactor/indium_concentrate_separation',
        'gtceu:large_chemical_reactor/indium_concentrate_separation',
        'gtceu:chemical_reactor/indium_concentrate_separation_4x',
        'gtceu:large_chemical_reactor/indium_concentrate_separation_4x',
        // Ilmenite
        'gtceu:electric_blast_furnace/rutile_from_ilmenite',
        // Vinyl Chloride
        'gtceu:chemical_reactor/vinyl_chloride_from_ethane',
        'gtceu:large_chemical_reactor/vinyl_chloride_from_ethane',
        // RE
        'gtceu:centrifuge/rare_earth_separation',
        // Styrene
        'gtceu:chemical_reactor/styrene_from_benzene',
        'gtceu:large_chemical_reactor/styrene_from_benzene',
        // Maint Steel Dupe Fix
        'gtceu:arc_furnace/arc_maintenance_hatch',
        'gtceu:macerator/macerate_maintenance_hatch',
    ];

    idRemoval.forEach((RecipeId) => {
        event.remove({ id: RecipeId });
    });

    // === Indium Line Fix ===
    event.recipes.gtceu
        .mixer(id('indium_concentrate_fix'))
        .itemInputs('gtceu:purified_sphalerite_ore', 'gtceu:purified_galena_ore')
        .inputFluids('gtceu:sulfuric_acid 2000')
        .outputFluids('gtceu:indium_concentrate 1000')
        .duration(60)
        .EUt(150);

    event.recipes.gtceu
        .chemical_reactor(id('indium_concentrate_separation_fix'))
        .itemInputs('2x gtceu:aluminium_dust')
        .inputFluids('gtceu:indium_concentrate 2000', 'gtceu:oxygen 6000')
        .itemOutputs('5x gtceu:indium_oxide_dust', '14x gtceu:aluminium_sulfite_dust')
        .outputFluids('gtceu:lead_zinc_solution 1000', 'gtceu:diluted_sulfuric_acid 1000')
        .duration(240)
        .EUt(600);

    // === Rutile Fix ===
    event.recipes.gtceu
        .electric_blast_furnace(id('rutile_from_ilmenite_fix'))
        .itemInputs('10x gtceu:ilmenite_dust', '2x gtceu:carbon_dust')
        .itemOutputs('2x gtceu:wrought_iron_ingot', '2x gtceu:rutile_dust')
        .outputFluids('gtceu:carbon_monoxide 2000')
        .blastFurnaceTemp(1700)
        .duration(1600)
        .EUt(480);

    //Recipe conflict fix: ethane+chlorine
    event.recipes.gtceu
        .chemical_reactor(id('vinyl_chloride_from_ethane_fix')) //Autogens LCR var
        .inputFluids('gtceu:chlorine 4000', 'gtceu:ethane 1000')
        .outputFluids('gtceu:vinyl_chloride 1000', 'gtceu:hydrochloric_acid 3000')
        .duration(160)
        .EUt(30)
        .circuit(2);

    // === Rare Earth Centrifuging Fix ===
    event.recipes.gtceu
        .centrifuge(id('rare_earth_speraration_fix'))
        .itemInputs('1x gtceu:rare_earth_dust')
        .chancedOutput('1x gtceu:small_neodymium_dust', 2500, 200)
        .chancedOutput('1x gtceu:small_samarium_dust', 2500, 200)
        .chancedOutput('1x gtceu:small_cerium_dust', 2500, 200)
        .chancedOutput('1x gtceu:small_yttrium_dust', 2500, 200)
        .chancedOutput('1x gtceu:small_lanthanum_dust', 2500, 200)
        .duration(12)
        .EUt(80);

    //carbon acid fixes
    event.recipes.gtceu
        .electrolyzer(id('carbon_acid_fix'))
        .inputFluids('gtceu:carbon_acid 1000')
        .outputFluids('minecraft:water 1000', 'gtceu:carbon_dioxide')
        .duration(60)
        .EUt(60);

    event.recipes.gtceu
        .large_chemical_reactor(id('carbon_acid_fix'))
        .itemInputs('3x gtceu:potassium_carbonate_dust')
        .inputFluids('gtceu:hydrogen 1000')
        .itemOutputs('3x gtceu:potassium_dust')
        .outputFluids('gtceu:carbon_acid 500')
        .duration(100)
        .EUtVHA(IV);

    // Styrene from Benzene fix
    event.recipes.gtceu
        .chemical_reactor(id('styrene_from_benzene_fix')) //Autogens LCR var
        .inputFluids('gtceu:ethylene 1000', 'gtceu:benzene 1000')
        .outputFluids('gtceu:hydrogen 2000', 'gtceu:styrene 1000')
        .duration(120)
        .circuit(3)
        .EUtVA(LV);

    // Maint Decomp
    event.recipes.gtceu
        .arc_furnace(id('maint_decomp_fix'))
        .itemInputs('gtceu:maintenance_hatch')
        .inputFluids('gtceu:oxygen 569')
        .itemOutputs('8x gtceu:steel_ingot', 'gtceu:tin_ingot', 'gtceu:small_ash_dust')
        .duration(569)
        .EUt(30)
        .category(GTRecipeCategories.ARC_FURNACE_RECYCLING);

    event.recipes.gtceu
        .macerator(id('maint_decomp_fix'))
        .itemInputs('gtceu:maintenance_hatch')
        .itemOutputs('8x gtceu:steel_dust', 'gtceu:tin_dust', 'gtceu:rubber_dust')
        .duration(576)
        .EUt(30)
        .category(GTRecipeCategories.MACERATOR_RECYCLING);
});
