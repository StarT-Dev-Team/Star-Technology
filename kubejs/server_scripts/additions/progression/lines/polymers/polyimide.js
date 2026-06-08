ServerEvents.recipes((event) => {
    const id = global.id;

    event.recipes.gtceu
        .large_chemical_reactor(id('benzophenone'))
        .inputFluids('gtceu:benzene 1000', 'gtceu:benzoyl_chloride 1000')
        .notConsumable('1x gtceu:aluminium_dust')
        .outputFluids('gtceu:benzophenone 1000', 'gtceu:hydrogen_chloride 1000')
        .circuit(0)
        .duration(589)
        .EUt(GTValues.VHA[GTValues.LuV]);

    event.recipes.gtceu
        .large_chemical_reactor(id('btda'))
        .inputFluids(
            'gtceu:benzophenone 400',
            'gtceu:maleic_anhydride 200',
            'gtceu:acetic_acid 400',
            'gtceu:oxygen 2800'
        )
        .itemOutputs('12x gtceu:benzophenone_3344_tetracarboxylic_dianhydride_dust')
        .outputFluids('minecraft:water 1800')
        .circuit(1)
        .duration(624)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    const crType = [event.recipes.gtceu.large_chemical_reactor, event.recipes.gtceu.chemical_reactor];
    crType.forEach((CR) => {
        CR(id('methylamine'))
            .inputFluids('gtceu:ammonia 1000', 'gtceu:methanol 1000')
            .outputFluids('gtceu:methylamine 1000', 'minecraft:water 1000')
            .duration(892)
            .EUt(GTValues.VA[GTValues.HV])
            .circuit(1);
    });

    event.recipes.gtceu
        .large_chemical_reactor(id('y_butyrolactone'))
        .inputFluids('gtceu:14_butanediol 1000', 'gtceu:oxygen 2000')
        .outputFluids('gtceu:y_butyrolactone 1000', 'minecraft:water 2000')
        .duration(372)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu
        .large_chemical_reactor(id('nmp'))
        .inputFluids('gtceu:y_butyrolactone 1000', 'gtceu:methylamine 1000')
        .outputFluids('minecraft:water 1000')
        .itemOutputs('16x gtceu:n_methyl_2_pyrrolidone_dust')
        .duration(434)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu
        .large_chemical_reactor(id('m_phelyenediamine'))
        .inputFluids('gtceu:nitrobenzene 900', 'gtceu:hydrogen 7800', 'gtceu:ammonia 300')
        .outputFluids('minecraft:water 1800', 'gtceu:m_phelyenediamine 900')
        .notConsumable('gtceu:nickel_dust')
        .duration(713)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu
        .large_chemical_reactor(id('polyamic_acid'))
        .itemInputs(
            '15x gtceu:benzophenone_3344_tetracarboxylic_dianhydride_dust',
            '4x gtceu:n_methyl_2_pyrrolidone_dust'
        )
        .inputFluids('gtceu:m_phelyenediamine 500', 'gtceu:nitric_acid 250')
        .outputFluids('gtceu:polyamic_acid 750', 'gtceu:hydrogen 500')
        .duration(652)
        .EUt(GTValues.VA[GTValues.UV]);

    event.recipes.gtceu
        .large_chemical_reactor(id('polyimide'))
        .inputFluids('gtceu:polyamic_acid 1000', 'gtceu:ammonia 500')
        .outputFluids('gtceu:polyimide 1008', 'minecraft:water 1750', 'gtceu:nitrous_oxide 250')
        .duration(247)
        .EUt(GTValues.VA[GTValues.UV]);
});
