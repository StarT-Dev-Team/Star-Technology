ServerEvents.recipes((event) => {
    const id = global.id;

    const CR = event.recipes.gtceu.large_chemical_reactor;

    CR(id('sodium_diphenoxide_dust'))
        .itemInputs('2x gtceu:sodium_hydroxide_dust')
        .inputFluids('gtceu:bisphenol_a 1000')
        .itemOutputs('1x gtceu:sodium_diphenoxide_dust')
        .outputFluids('minecraft:water 2000')
        .duration(300)
        .circuit(2)
        .EUtVA(LuV);

    CR(id('phosgene'))
        .notConsumable('gtceu:activated_carbon_dust')
        .inputFluids('gtceu:carbon_monoxide 1000', 'gtceu:chlorine 2000')
        .outputFluids('gtceu:phosgene 1000')
        .duration(100)
        .EUtVHA(IV);

    CR(id('polycarbonate'))
        .itemInputs('1x gtceu:sodium_diphenoxide_dust')
        .inputFluids('gtceu:phosgene 1000')
        .itemOutputs('2x gtceu:salt_dust')
        .outputFluids('gtceu:polycarbonate 1000')
        .duration(600)
        .EUtVA(ZPM);
});
