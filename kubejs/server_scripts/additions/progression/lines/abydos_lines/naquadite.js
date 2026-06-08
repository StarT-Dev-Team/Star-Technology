ServerEvents.recipes((event) => {
    const id = global.id;

    event.recipes.gtceu
        .large_chemical_reactor(id('hydrogen_iodide'))
        .itemInputs('gtceu:iodine_dust')
        .inputFluids('gtceu:hydrogen 1000')
        .outputFluids('gtceu:hydrogen_iodide 1000')
        .duration(275)
        .EUt(GTValues.VHA[GTValues.HV]);

    event.recipes.gtceu
        .mixer(id('hydroiodic_acid'))
        .inputFluids('gtceu:hydrogen_iodide 4000', 'minecraft:water 1000')
        .outputFluids('gtceu:hydroiodic_acid 5000')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.LuV]);

    event.recipes.gtceu
        .chemical_bath(id('naquadite_solution'))
        .itemInputs('3x gtceu:naquadite_dust')
        .inputFluids('gtceu:hydroiodic_acid 500')
        .outputFluids('gtceu:naquadite_solution 1000')
        .duration(600)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu
        .centrifuge(id('naquadah_from_naquadite'))
        .inputFluids('gtceu:naquadite_solution 1000')
        .itemOutputs('4x gtceu:naquadah_dust', 'gtceu:magnesite_dust', 'gtceu:magnesia_dust')
        .duration(120)
        .EUt(GTValues.VA[GTValues.ZPM]);
});
