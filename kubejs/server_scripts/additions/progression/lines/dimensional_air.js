ServerEvents.recipes((event) => {
    const id = global.id;

    event.recipes.gtceu
        .large_chemical_reactor(id('easy_netherrack'))
        .itemInputs('16x minecraft:redstone')
        .inputFluids('minecraft:lava 32000')
        .itemOutputs('32x minecraft:netherrack')
        .duration(2400)
        .EUt(20)
        .circuit(0);

    event.recipes.gtceu
        .large_chemical_reactor(id('easy_endstone'))
        .itemInputs('16x minecraft:glowstone_dust')
        .inputFluids('minecraft:lava 32000')
        .itemOutputs('32x minecraft:end_stone')
        .duration(2400)
        .EUt(20)
        .circuit(0);

    event.recipes.gtceu
        .extractor(id('nether_agglomeration'))
        .itemInputs('gtceu:netherrack_dust')
        .itemOutputs('mysticalagriculture:nether_agglomeratio')
        .duration(120)
        .EUt(80);

    event.recipes.gtceu
        .extractor(id('end_agglomeration'))
        .itemInputs('gtceu:endstone_dust')
        .itemOutputs('mysticalagriculture:end_agglomeratio')
        .duration(120)
        .EUt(80);

    event.recipes.gtceu
        .mixer(id('nether_air_mix'))
        .itemInputs('3x gtceu:netherrack_dust')
        .inputFluids('gtceu:air 32000')
        .outputFluids('gtceu:nether_air 24000')
        .duration(1200)
        .EUtVHA(HV);

    event.recipes.gtceu
        .mixer(id('ender_air_mix'))
        .itemInputs('3x gtceu:endstone_dust')
        .inputFluids('gtceu:nether_air 32000')
        .outputFluids('gtceu:ender_air 24000')
        .duration(1200)
        .EUtVHA(HV);
});
