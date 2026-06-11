ServerEvents.recipes((event) => {
    const id = global.id;

    event.recipes.gtceu
        .manifold_centrifuge(id('atomic_nether_sludge_decomp'))
        .itemInputs('gtceu:atomic_nether_sludge_dust')
        .inputFluids('gtceu:hexafluorobromic_acid 2500')
        .chancedOutput('gtceu:flerovium_rich_re_sludge_dust', 2500, 500)
        .chancedOutput('gtceu:hafnastide_rich_sludge_dust', 2500, 500)
        .chancedOutput('gtceu:pologium_rich_sludge_dust', 2500, 500)
        .duration(70)
        .EUt(GTValues.VHA[GTValues.UEV]);

    //Fl Lines

    event.recipes.gtceu
        .ordered_chemistry(id('flerovium_tetrafluoride_dust'))
        .layeredRecipe((layers) =>
            layers
                .itemInputs('7x gtceu:flerovium_rich_re_sludge_dust')
                .inputFluids('gtceu:hydrogen 5000')
                .next()
                .inputFluids('gtceu:hydrochloric_acid 1750', 'gtceu:distilled_water 15000')
                .next()
                .itemInputs('3x gtceu:silver_oxide_dust')
                .inputFluids('gtceu:nitric_acid 875')
        )
        .itemOutputs('4x gtceu:flerovium_tetrafluoride_dust', 'gtceu:rich_rare_earth_dust', '2x gtceu:rare_earth_dust')
        .duration(360)
        .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu
        .electric_blast_furnace(id('flerovium_tetrafluoride_heat_separation'))
        .itemInputs('1x gtceu:flerovium_tetrafluoride_dust')
        .inputFluids('gtceu:hydrogen 4000')
        .outputFluids('gtceu:hydrofluoric_acid 4000')
        .itemOutputs('1x gtceu:hot_flerovium_ingot')
        .duration(1100)
        .blastFurnaceTemp(12200)
        .EUt(GTValues.V[GTValues.UHV]);

    //Sg & Po Lines

    event.recipes.gtceu
        .ordered_chemistry(id('seaborgium_dioxide_and_polonium_carbonate'))
        .layeredRecipe((layers) =>
            layers
                .itemInputs('2x gtceu:pologium_rich_sludge_dust')
                .inputFluids('gtceu:sulfuric_acid 2500')
                .next()
                .itemInputs('4x gtceu:chromium_trioxide_dust')
                .inputFluids('gtceu:hydrochloric_acid 2000')
                .next()
                .itemInputs('3x gtceu:sodium_hydroxide_dust')
                .inputFluids('gtceu:distilled_water 10000')
                .next()
                .itemInputs('1x gtceu:sulfur_dust')
                .inputFluids('gtceu:carbon_monoxide 2000')
        )
        .itemOutputs('1x gtceu:seaborgium_dioxide_dust', '1x gtceu:polonium_carbonate_dust')
        .duration(435)
        .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu
        .centrifuge(id('silicic_acid_decomp'))
        .inputFluids('gtceu:silicic_acid 1000')
        .outputFluids('minecraft:water 1000')
        .itemOutputs('1x gtceu:silicon_dioxide_dust')
        .duration(114)
        .EUt(GTValues.V[GTValues.MV]);

    event.recipes.gtceu
        .electric_blast_furnace(id('seaborgium_dioxide_heating'))
        .itemInputs('1x gtceu:seaborgium_dioxide_dust')
        .inputFluids('gtceu:hydrogen 4000')
        .itemOutputs('1x gtceu:hot_seaborgium_ingot')
        .outputFluids('gtceu:steam 2000')
        .duration(1200)
        .blastFurnaceTemp(12999)
        .EUt(GTValues.VHA[GTValues.UEV]);

    event.recipes.gtceu
        .electric_blast_furnace(id('polonium_carbonate_heating'))
        .itemInputs('1x gtceu:polonium_carbonate_dust', '2x gtceu:calcium_dust')
        .itemOutputs('6x gtceu:calcium_carbonate_dust', '1x gtceu:hot_polonium_ingot')
        .duration(2000)
        .blastFurnaceTemp(13499)
        .EUt(GTValues.VHA[GTValues.UIV] * 0.6);

    //At and Hf lines

    event.recipes.gtceu
        .ordered_chemistry(id('sodium_astatide_and_hafnium_hexachloride'))
        .layeredRecipe((layers) =>
            layers
                .itemInputs('2x gtceu:hafnastide_rich_sludge_dust', '1x gtceu:sodium_hydroxide_dust')
                .next()
                .itemInputs('3x gtceu:potassium_hydroxide_dust')
                .inputFluids('gtceu:hydrochloric_acid 750')
                .next()
                .itemInputs('3x gtceu:carbon_dust')
                .inputFluids('gtceu:distilled_water 2250')
                .next()
                .itemInputs('1x gtceu:sodium_bicarbonate_dust')
                .inputFluids('gtceu:nitrogen 2500')
        )
        .itemOutputs('1x gtceu:sodium_astatide_dust', '1x gtceu:hafnium_hexachloride_dust')
        .duration(380)
        .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu
        .large_chemical_reactor(id('sodium_astatide_nitration'))
        .itemInputs('1x gtceu:sodium_astatide_dust')
        .inputFluids('gtceu:nitrogen_dioxide 1000')
        .itemOutputs('1x gtceu:astatine_dust', '4x gtceu:sodium_nitrite_dust')
        .duration(180)
        .EUt(GTValues.VHA[GTValues.UEV]);

    event.recipes.gtceu
        .electric_blast_furnace(id('hafnium_hexachloride_to_ingot'))
        .itemInputs('1x gtceu:hafnium_hexachloride_dust', '3x gtceu:magnesium_dust')
        .itemOutputs('9x gtceu:magnesium_chloride_dust', '1x gtceu:hot_hafnium_ingot')
        .duration(720)
        .blastFurnaceTemp(11500)
        .EUt(GTValues.VA[GTValues.UV]);
});
