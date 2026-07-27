ServerEvents.recipes((event) => {
    const id = global.id;

    const crType = [event.recipes.gtceu.large_chemical_reactor, event.recipes.gtceu.chemical_reactor];
    crType.forEach((CR) => {
        CR(id('hexafluorobutadiene'))
            .inputFluids('gtceu:butadiene 500', 'gtceu:hydrofluoric_acid 3000')
            .outputFluids('gtceu:hexafluorobutadiene 500', 'gtceu:hydrogen 6000')
            .circuit(1)
            .duration(412)
            .EUtVHA(IV);

        CR(id('perfluoroelastomer_rubber'))
            .itemInputs('9x gtceu:raw_perfluoroelastomer_rubber_dust', '1x gtceu:sulfur_dust')
            .outputFluids('gtceu:perfluoroelastomer_rubber 1296')
            .duration(600)
            .EUtVA(LV);
    });

    event.recipes.gtceu
        .large_chemical_reactor(id('perfluoromethyl_vinyl_ether'))
        .inputFluids('gtceu:fluorine 6000', 'gtceu:vinyl_acetate 2400', 'gtceu:methanol 200')
        .outputFluids(
            'gtceu:perfluoromethyl_vinyl_ether 1000',
            'gtceu:ethylbenzene 8000',
            'minecraft:water 3600',
            'gtceu:oxygen 400'
        )
        .circuit(3)
        .duration(328)
        .EUtVA(LuV);

    event.recipes.gtceu
        .large_chemical_reactor(id('raw_perfluoroelastomer_rubber'))
        .inputFluids(
            'gtceu:tetrafluoroethylene 3000',
            'gtceu:perfluoromethyl_vinyl_ether 1000',
            'gtceu:hexafluorobutadiene 1000'
        )
        .itemOutputs('38x gtceu:raw_perfluoroelastomer_rubber_dust')
        .duration(486)
        .EUtVHA(ZPM);
});
