ServerEvents.recipes((event) => {
    const id = global.id;

    event.recipes.gtceu
        .assembly_line(id('zpm_fluid_drilling_rig'))
        .itemInputs(
            'gtceu:uv_machine_hull',
            '4x gtceu:enriched_naquadah_frame',
            '4x #gtceu:circuits/uv',
            '4x gtceu:uv_electric_motor',
            '4x gtceu:uv_electric_pump',
            '4x gtceu:naquadah_alloy_gear'
        )
        .fluidInputs('gtceu:soldering_alloy 1872')
        .itemOutputs('start_core:zpm_fluid_drilling_rig')
        .duration(400)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder
                .researchStack(Item.of('gtceu:ev_fluid_drilling_rig'))
                .EUt(GTValues.VHA[GTValues.UV])
                .CWUt(144)
        )
        .EUt(GTValues.VHA[GTValues.UV]);
});
