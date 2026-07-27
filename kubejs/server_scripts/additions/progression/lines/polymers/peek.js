ServerEvents.recipes((event) => {
    const id = global.id;

    event.remove('gtceu:electrolyzer/decomposition_electrolyzing_sodium_bicarbonate');

    // 1B C7H8 + 3B Cl => 1B C7H5Cl3 + 3B H
    event.recipes.gtceu
        .large_chemical_reactor(id('benzotrichloride_process'))
        .inputFluids('gtceu:toluene 1000', 'gtceu:chlorine 3000')
        .outputFluids('gtceu:benzotrichloride 1000', 'gtceu:hydrogen 3000')
        .duration(50)
        .EUtVHA(ZPM);

    // 1B C7H5Cl3 + 1B H2O => 1B C7H5ClO + 2B HCl
    event.recipes.gtceu
        .large_chemical_reactor(id('benzoyl_chloride_process'))
        .inputFluids('gtceu:benzotrichloride 1000', 'minecraft:water 1000')
        .outputFluids('gtceu:benzoyl_chloride 1000', 'gtceu:hydrochloric_acid 2000')
        .duration(150)
        .EUtVA(LuV);

    event.recipes.gtceu
        .large_chemical_reactor(id('4_fluorobenzoyl_chloride_process'))
        .inputFluids('gtceu:benzoyl_chloride 1000', 'gtceu:fluorine 1000')
        .outputFluids('gtceu:4_fluorobenzoyl_chloride 1000', 'gtceu:hydrogen 1000')
        .duration(250)
        .EUtVA(LuV);

    event.recipes.gtceu
        .large_chemical_reactor(id('fluorobenzene_process'))
        .inputFluids('gtceu:benzene 1000', 'gtceu:fluorine 2000')
        .outputFluids('gtceu:fluorobenzene 1000', 'gtceu:hydrofluoric_acid 1000')
        .duration(100)
        .EUtVA(LuV);

    event.recipes.gtceu
        .large_chemical_reactor(id('44_difluorobenzophenone_process'))
        .inputFluids('gtceu:fluorobenzene 1000', 'gtceu:4_fluorobenzoyl_chloride 1000')
        .outputFluids('gtceu:hydrochloric_acid 1000')
        .itemOutputs('24x gtceu:44_difluorobenzophenone_dust')
        .duration(120)
        .EUtVA(LuV);

    event.recipes.gtceu
        .large_chemical_reactor(id('hydroquinone_process'))
        .inputFluids('gtceu:benzene 1000', 'gtceu:propene 1000', 'gtceu:oxygen 1000')
        .outputFluids('gtceu:acetone 1000')
        .itemOutputs('14x gtceu:hydroquinone_dust')
        .duration(160)
        .circuit(2)
        .EUtVA(ZPM);

    event.recipes.gtceu
        .large_chemical_reactor(id('disodium_salt_of_hydroquinone_process'))
        .itemInputs('6x gtceu:soda_ash_dust', '14x gtceu:hydroquinone_dust')
        .outputFluids('gtceu:carbon_acid 1000')
        .itemOutputs('14x gtceu:disodium_salt_of_hydroquinone_dust')
        .duration(120)
        .EUtVA(IV);

    event.recipes.gtceu
        .large_chemical_reactor(id('carbon_acid_to_sodium_bicarbonate_dust'))
        .itemInputs('gtceu:sodium_dust')
        .inputFluids('gtceu:carbon_acid 1000')
        .outputFluids('gtceu:hydrogen 1000')
        .itemOutputs('6x gtceu:sodium_bicarbonate_dust')
        .duration(120)
        .EUtVA(HV);

    event.recipes.gtceu
        .electrolyzer(id('sodium_bicarbonate_to_soda_ash_dust'))
        .itemInputs('12x gtceu:sodium_bicarbonate_dust')
        .outputFluids('gtceu:hydrogen 2000')
        .itemOutputs('6x gtceu:soda_ash_dust')
        .duration(120)
        .EUtVA(HV);

    event.recipes.gtceu
        .large_chemical_reactor(id('peek_process'))
        .itemInputs('12x gtceu:44_difluorobenzophenone_dust', '7x gtceu:disodium_salt_of_hydroquinone_dust')
        .outputFluids('gtceu:polyether_ether_ketone 2448')
        .itemOutputs('2x gtceu:sodium_fluoride_dust')
        .duration(250)
        .EUtVA(LuV);
});
