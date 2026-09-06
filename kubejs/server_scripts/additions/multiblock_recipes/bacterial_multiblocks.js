ServerEvents.recipes((event) => {
    const id = global.id;

    event.recipes.gtceu
        .assembly_line(id('bacterial_runic_mutator'))
        .itemInputs(
            'gtceu:uv_machine_hull',
            '4x gtceu:uv_electric_motor',
            'gtceu:melodium_gear',
            '6x gtceu:zpm_emitter',
            '4x #gtceu:circuits/uv'
        )
        .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 1872', 'gtceu:naquadria 576')
        .itemOutputs('start_core:bacterial_runic_mutator')
        .duration(1200)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder.researchStack(Item.of('gtceu:zpm_fermenter')).EUt(GTValues.VHA[ZPM]).CWUt(32)
        )
        .EUtVHA(ZPM)
        .addMaterialInfo(true, true);

    event.recipes.gtceu
        .assembly_line(id('bacterial_breeding_vat'))
        .itemInputs(
            'gtceu:uv_machine_hull',
            '4x gtceu:uv_electric_pump',
            '4x gtceu:melodium_rotor',
            '2x gtceu:uv_fluid_regulator',
            '4x #gtceu:circuits/uv'
        )
        .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 1872', 'gtceu:naquadria 576')
        .itemOutputs('start_core:bacterial_breeding_vat')
        .duration(1200)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder.researchStack(Item.of('gtceu:zpm_brewery')).EUt(GTValues.VHA[ZPM]).CWUt(32)
        )
        .EUtVHA(ZPM)
        .addMaterialInfo(true, true);

    event.recipes.gtceu
        .assembly_line(id('bacterial_hydrocarbon_harvester'))
        .itemInputs(
            'gtceu:uv_machine_hull',
            '4x gtceu:uv_electric_pump',
            'gtceu:melodium_rotor',
            '6x gtceu:zpm_field_generator',
            '8x #gtceu:circuits/uv'
        )
        .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 1872', 'gtceu:naquadria 1158')
        .itemOutputs('start_core:bacterial_hydrocarbon_harvester')
        .duration(1200)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder.researchStack(Item.of('gtceu:zpm_distillery')).EUt(GTValues.VHA[ZPM]).CWUt(32)
        )
        .EUtVHA(ZPM)
        .addMaterialInfo(true, true);
});
