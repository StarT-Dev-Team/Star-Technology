ServerEvents.recipes((event) => {
    const id = global.id;

    event.recipes.gtceu
        .assembly_line(id('component_part_assembly'))
        .itemInputs(
            'gtceu:zpm_assembler',
            '8x gtceu:zpm_robot_arm',
            '8x gtceu:zpm_conveyor_module',
            '8x gtceu:zpm_electric_pump',
            '4x #gtceu:circuits/uv',
            '6x #gtceu:circuits/zpm',
            '8x #gtceu:circuits/luv'
        )
        .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 12528', 'gtceu:lubricant 2500')
        .itemOutputs('gtceu:component_part_assembly')
        .duration(1800)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder.researchStack(Item.of('gtceu:zpm_assembler')).EUt(GTValues.VHA[ZPM]).CWUt(16)
        )
        .EUtVHA(ZPM)
        .addMaterialInfo(true, true);

    event.recipes.gtceu
        .assembly_line(id('heat_chamber'))
        .itemInputs(
            'gtceu:europium_frame',
            '4x #gtceu:circuits/uv',
            'gtceu:double_trinaquadalloy_plate',
            'gtceu:double_duranium_plate',
            'gtceu:zpm_field_generator',
            '64x gtceu:uhpic_chip',
            '32x gtceu:uhpic_chip',
            '48x gtceu:dragonsteel_single_wire'
        )
        .inputFluids('gtceu:hsss 6912', 'gtceu:niobium_nitride 1728')
        .itemOutputs('gtceu:heat_chamber')
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder.researchStack(Item.of('gtceu:zpm_electric_furnace')).EUt(GTValues.VHA[ZPM]).CWUt(16)
        )
        .duration(2400)
        .EUtVHA(ZPM)
        .addMaterialInfo(true, true);
});
