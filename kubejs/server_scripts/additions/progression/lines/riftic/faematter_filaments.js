ServerEvents.recipes((event) => {
    const id = global.id;

    //Faematter
    event.recipes.gtceu
        .injection_mixer(id('impure_faematter'))
        .inputFluids('gtceu:prismalium 288', 'gtceu:dragon_breath 500', 'gtceu:lepton_coalescing_superalloy 360')
        .outputFluids('gtceu:impure_faematter 5000')
        .cleanroom($StarTAbyssalContainmentMachine.ABYSSAL_CONTAINMENT_ROOM)
        .duration(60)
        .EUt(GTValues.VHA[GTValues.UEV]);

    event.recipes.gtceu
        .pressure_heat_chamber(id('faematter'))
        .inputFluids('gtceu:impure_faematter 12500', 'gtceu:borealic_concentrate 288')
        .outputFluids('gtceu:faematter 8750')
        .itemOutputs('15x gtceu:tiny_stellarium_dust', '1x gtceu:tiny_aurourium_dust')
        .duration(85)
        .EUt(GTValues.VHA[GTValues.UIV]);

    //T1 Filament
    event.recipes.gtceu
        .mixer(id('stabilization_mixture_base'))
        .itemInputs('5x gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate_dust')
        .inputFluids('gtceu:utopian_akreyrium 10000', 'gtceu:runic_convergence_infusion 17000')
        .outputFluids('gtceu:stabilization_mixture_base 32000')
        .cleanroom($StarTAbyssalContainmentMachine.ABYSSAL_CONTAINMENT_ROOM)
        .duration(960)
        .EUt(GTValues.VA[GTValues.UEV] / 3);

    event.recipes.gtceu
        .injection_mixer(id('infernal_stabilization_mixture'))
        .inputFluids('gtceu:stabilization_mixture_base 24000')
        .itemInputs('gtceu:magmada_alloy_dust')
        .outputFluids('gtceu:infernal_stabilization_mixture 25000')
        .duration(90)
        .EUt(GTValues.VA[GTValues.UEV] / 3);

    event.recipes.gtceu
        .injection_mixer(id('abyssal_stabilization_mixture'))
        .inputFluids('gtceu:stabilization_mixture_base 24000')
        .itemInputs('gtceu:abyssal_alloy_dust')
        .outputFluids('gtceu:abyssal_stabilization_mixture 25000')
        .duration(90)
        .EUt(GTValues.VA[GTValues.UEV] / 3);

    event.recipes.gtceu
        .pressure_heat_chamber(id('draconic_stabilization_mixture'))
        .inputFluids('gtceu:abyssal_stabilization_mixture 10000', 'gtceu:infernal_stabilization_mixture 10000')
        .outputFluids('gtceu:draconic_stabilization_mixture 10000')
        .duration(230)
        .EUt(GTValues.VHA[GTValues.UXV] / 3);

    event.recipes.gtceu
        .autoclave(id(`komaru_filament_t1`))
        .itemInputs('2x gtceu:tiny_akreyriadic_runixium_dust')
        .inputFluids(`gtceu:draconic_stabilization_mixture 18`)
        .itemOutputs(`4x kubejs:komaru_filament_t1`)
        .duration(480)
        .EUt(GTValues.VHA[GTValues.UHV] / 3);

    event.recipes.gtceu
        .autoclave(id(`komaru_filament_t2`))
        .itemInputs('2x gtceu:tiny_aquariadic_rimuli_dragonix_dust')
        .inputFluids(`gtceu:draconic_stabilization_mixture 36`)
        .itemOutputs(`4x kubejs:komaru_filament_t2`)
        .duration(420)
        .EUt(GTValues.VA[GTValues.UHV] / 3);
});
