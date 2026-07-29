ServerEvents.recipes((event) => {
    const id = global.id;

    event.recipes.gtceu
        .assembly_line(id('exotic_gas_siphon'))
        .itemInputs(
            '1x gtceu:uhv_gas_collector',
            '64x kubejs:uepic_chip',
            '32x gtceu:filter_casing',
            '16x gtceu:sterilizing_filter_casing',
            '32x gtceu:naquadah_nonuple_fluid_pipe',
            '16x kubejs:uhv_microfluidic_flow_valve',
            '8x gtceu:uhv_electric_pump',
            '4x gtceu:uhv_fluid_regulator',
            '4x gtceu:pure_netherite_rotor',
            '8x #gtceu:circuits/uhv',
            '16x kubejs:netherite_reinforced_mesh'
        )
        .inputFluids(
            'gtceu:indium_tin_lead_cadmium_soldering_alloy 1624',
            'gtceu:polytetrafluoroethylene 4496',
            'gtceu:naquadria 1248',
            'gtceu:styrene_butadiene_rubber 4496'
        )
        .itemOutputs('gtceu:exotic_gas_siphon')
        .duration(2400)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder.researchStack(Item.of('gtceu:uhv_gas_collector')).EUt(GTValues.VHA[UHV]).CWUt(144)
        )
        .EUtVHA(UEV);

    event.recipes.gtceu
        .exotic_gas_siphon(id('overworld'))
        .circuit(1)
        .outputFluids('gtceu:nitrogen 140000')
        .outputFluids('gtceu:oxygen 44000')
        .outputFluids('gtceu:carbon_dioxide 10000')
        .outputFluids('gtceu:helium 4000')
        .outputFluids('gtceu:argon 2000')
        .dimension('minecraft:overworld')
        .duration(1000)
        .EUtVA(ZPM);

    event.recipes.gtceu
        .exotic_gas_siphon(id('abydos'))
        .circuit(2)
        .outputFluids('gtceu:helium_3 32000')
        .outputFluids('gtceu:argon 1500')
        .outputFluids('gtceu:nitrous_oxide 150000')
        .outputFluids('gtceu:neon 750')
        .outputFluids('gtceu:radon 750')
        .outputFluids('gtceu:tritium 4500')
        .outputFluids('gtceu:krypton 750')
        .outputFluids('gtceu:xenon 750')
        .outputFluids('gtceu:deuterium 9000')
        .dimension('sgjourney:abydos')
        .duration(1000)
        .EUtVA(ZPM);

    event.recipes.gtceu
        .exotic_gas_siphon(id('nether'))
        .circuit(3)
        .outputFluids('gtceu:sulfur_dioxide 15000')
        .outputFluids('gtceu:helium_3 5000')
        .outputFluids('gtceu:neon 1000')
        .outputFluids('gtceu:carbon_monoxide 144000')
        .outputFluids('gtceu:coal_gas 20000')
        .outputFluids('gtceu:hydrogen_sulfide 15000')
        .dimension('minecraft:the_nether')
        .duration(1000)
        .EUtVA(ZPM);

    event.recipes.gtceu
        .exotic_gas_siphon(id('end'))
        .circuit(4)
        .outputFluids('gtceu:radon 1000')
        .outputFluids('gtceu:tritium 10000')
        .outputFluids('gtceu:krypton 1000')
        .outputFluids('gtceu:xenon 1000')
        .outputFluids('gtceu:nitrogen_dioxide 122000')
        .outputFluids('gtceu:deuterium 50000')
        .outputFluids('gtceu:helium 15000')
        .dimension('minecraft:the_end')
        .duration(1000)
        .EUtVA(ZPM);
});
