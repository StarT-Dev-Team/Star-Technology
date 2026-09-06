ServerEvents.recipes((event) => {
    const id = global.id;

    event.recipes.gtceu
        .electric_blast_furnace(id('silicon_carbide'))
        .itemInputs('3x gtceu:silicon_dioxide_dust', '2x gtceu:activated_carbon_dust')
        .itemOutputs('gtceu:silicon_carbide_dust')
        .outputFluids('gtceu:carbon_dioxide')
        .blastFurnaceTemp(2000)
        .duration(500)
        .EUtVHA(HV);

    event.recipes.gtceu
        .large_chemical_reactor(id('sicbite_1'))
        .itemInputs('23x gtceu:borax_dust', '4x gtceu:sodium_dust')
        .inputFluids('gtceu:hydrogen 28000')
        .itemOutputs('24x gtceu:sodium_borohydride_dust', '3x gtceu:sodium_oxide_dust')
        .outputFluids('minecraft:water 16000')
        .duration(1280)
        .EUtVHA(IV);

    event.recipes.gtceu
        .large_chemical_reactor(id('bismuth_3_nitrate_dust'))
        .itemInputs('gtceu:bismuth_dust')
        .inputFluids('gtceu:nitric_acid 4000')
        .itemOutputs('13x gtceu:bismuth_3_nitrate_dust')
        .outputFluids('minecraft:water 2000', 'gtceu:nitrogen 1000', 'gtceu:oxygen 1000')
        .duration(400)
        .EUtVHA(LuV);

    event.recipes.gtceu
        .ordered_chemistry(id('sicbite_2'))
        .layeredRecipe((layers) =>
            layers
                .itemInputs('2x gtceu:bismuth_dust', '2x gtceu:silicon_carbide_dust')
                .inputFluids('gtceu:nitric_acid 8000')
                .next()
                .itemInputs('3x gtceu:tellurium_dust', '36x gtceu:sodium_borohydride_dust')
        )
        .itemOutputs('7x gtceu:silicon_carbide_over_bismuth_tritelluride_dust', '30x gtceu:sodium_nitrate_dust')
        .outputFluids('gtceu:ammonia 2000', 'gtceu:diborane 3000', 'gtceu:oxygen 2000')
        .duration(250)
        .EUtVHA(ZPM);

    event.remove({
        id: 'gtceu:electrolyzer/decomposition_electrolyzing_silicon_carbide_over_bismuth_tritelluride',
    });
    event.recipes.gtceu
        .electrolyzer(id('sicbite_decompostition'))
        .itemInputs('7x gtceu:silicon_carbide_over_bismuth_tritelluride_dust')
        .itemOutputs('2x gtceu:silicon_carbide_dust', '5x gtceu:bismuth_tritelluride_dust')
        .duration(156)
        .EUt(30);
});
