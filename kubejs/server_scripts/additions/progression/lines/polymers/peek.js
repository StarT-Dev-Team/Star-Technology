ServerEvents.recipes((event) => {
    const id = global.id;

    event.remove('gtceu:electrolyzer/decomposition_electrolyzing_sodium_bicarbonate');

    event.recipes.gtceu
        .large_chemical_reactor(id('benzotrichloride_process'))
        .inputFluids('gtceu:toluene 1000', 'gtceu:chlorine 3000')
        .outputFluids('gtceu:benzotrichloride 1000', 'gtceu:hydrogen 3000')
        .duration(50)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    event.recipes.gtceu
        .large_chemical_reactor(id('benzoyl_chloride_process'))
        .inputFluids('gtceu:benzotrichloride 1000', 'minecraft:water 1000')
        .outputFluids('gtceu:benzoyl_chloride 1000', 'gtceu:hydrochloric_acid 2000')
        .duration(150)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu
        .large_chemical_reactor(id('4_fluorobenzoyl_chloride_process'))
        .inputFluids('gtceu:benzoyl_chloride 1000', 'gtceu:fluorine 1000')
        .outputFluids('gtceu:4_fluorobenzoyl_chloride 1000', 'gtceu:hydrogen 1000')
        .duration(250)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu
        .large_chemical_reactor(id('fluorobenzene_process'))
        .inputFluids('gtceu:benzene 1000', 'gtceu:fluorine 2000')
        .outputFluids('gtceu:fluorobenzene 1000', 'gtceu:hydrofluoric_acid 1000')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu
        .large_chemical_reactor(id('44_difluorobenzophenone_process'))
        .inputFluids('gtceu:fluorobenzene 500', 'gtceu:4_fluorobenzoyl_chloride 500')
        .outputFluids('gtceu:hydrochloric_acid 500')
        .itemOutputs('12x gtceu:44_difluorobenzophenone_dust')
        .duration(120)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu
        .large_chemical_reactor(id('hydroquinone_process'))
        .inputFluids('gtceu:benzene 500', 'gtceu:propene 500', 'gtceu:oxygen 500')
        .outputFluids('gtceu:acetone 500')
        .itemOutputs('7x gtceu:hydroquinone_dust')
        .duration(160)
        .circuit(2)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu
        .large_chemical_reactor(id('disodium_salt_of_hydroquinone_process'))
        .itemInputs('3x gtceu:soda_ash_dust', '7x gtceu:hydroquinone_dust')
        .outputFluids('gtceu:carbon_acid 500')
        .itemOutputs('7x gtceu:disodium_salt_of_hydroquinone_dust')
        .duration(120)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu
        .large_chemical_reactor(id('carbon_acid_to_sodium_bicarbonate_dust'))
        .itemInputs('gtceu:sodium_dust')
        .inputFluids('gtceu:carbon_acid 1000')
        .outputFluids('gtceu:hydrogen 1000')
        .itemOutputs('6x gtceu:sodium_bicarbonate_dust')
        .duration(120)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu
        .electrolyzer(id('sodium_bicarbonate_to_soda_ash_dust'))
        .itemInputs('12x gtceu:sodium_bicarbonate_dust')
        .outputFluids('gtceu:hydrogen 2000')
        .itemOutputs('6x gtceu:soda_ash_dust')
        .duration(120)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu
        .large_chemical_reactor(id('peek_process'))
        .itemInputs('12x gtceu:44_difluorobenzophenone_dust', '7x gtceu:disodium_salt_of_hydroquinone_dust')
        .outputFluids('gtceu:polyether_ether_ketone 2448')
        .itemOutputs('2x gtceu:sodium_fluoride_dust')
        .duration(250)
        .EUt(GTValues.VA[GTValues.LuV]);
});
