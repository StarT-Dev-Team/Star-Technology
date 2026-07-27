ServerEvents.recipes((event) => {
    const id = global.id;

    const CR = event.recipes.gtceu.chemical_reactor; //autogens LCR

    CR(id('bromine_pentafluoride'))
        .inputFluids('gtceu:bromine 2000', 'gtceu:fluorine 10000')
        .notConsumable('1x gtceu:nickel_fluoride_dust')
        .outputFluids('gtceu:bromine_pentafluoride 2000')
        .duration(640)
        .EUtV(UV);

    CR(id('caesium_hexafluorobromine'))
        .inputFluids('gtceu:bromine_pentafluoride 1000')
        .itemInputs('1x gtceu:caesium_fluoride_dust')
        .outputFluids('gtceu:caesium_hexafluorobromine 1000')
        .duration(960)
        .EUtVA(ZPM);

    CR(id('hexafluorobromic_acid'))
        .inputFluids('gtceu:caesium_hexafluorobromine 1000', 'gtceu:hydrofluoric_acid 1000')
        .outputFluids('gtceu:hexafluorobromic_acid 1000')
        .itemOutputs('1x gtceu:caesium_fluoride_dust')
        .duration(160)
        .EUtVA(UHV);

    CR(id('nickel_fluoride'))
        .itemInputs('1x gtceu:nickel_dust')
        .inputFluids('gtceu:fluorine 2000')
        .itemOutputs('1x gtceu:nickel_fluoride_dust')
        .duration(400)
        .EUtVHA(HV);

    CR(id('caesium_fluoride'))
        .itemInputs('1x gtceu:caesium_dust')
        .inputFluids('gtceu:fluorine 1000')
        .itemOutputs('1x gtceu:caesium_fluoride_dust')
        .duration(720)
        .EUtVH(LuV);
});
