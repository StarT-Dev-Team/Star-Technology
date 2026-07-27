ServerEvents.recipes((event) => {
    const id = global.id;

    event.recipes.gtceu
        .assembly_line(id('large_rotor_machine'))
        .itemInputs(
            'gtceu:shellite_frame',
            '4x #gtceu:circuits/uv',
            'gtceu:double_vanadium_gallium_plate',
            'gtceu:double_red_steel_plate',
            '12x gtceu:zpm_field_generator',
            '8x gtceu:zpm_electric_motor',
            '32x gtceu:advanced_power_thruster',
            '4x gtceu:hssg_spring',
            '64x gtceu:uhpic_chip',
            '32x gtceu:uhpic_chip'
        )
        .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 3456', 'gtceu:yttrium_barium_cuprate 5184')
        .itemOutputs('gtceu:large_rotor_machine')
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder.researchStack(Item.of('gtceu:zpm_lathe')).EUt(GTValues.VHA[ZPM]).CWUt(16)
        )
        .duration(3600)
        .EUtVHA(ZPM);

    event.recipes.gtceu
        .assembly_line(id('runic_engraver'))
        .itemInputs(
            'gtceu:lumium_frame',
            '4x #gtceu:circuits/uv',
            'gtceu:double_tantalum_carbide_plate',
            'gtceu:double_titanium_carbide_plate',
            '2x gtceu:zpm_field_generator',
            '4x gtceu:zpm_emitter',
            '48x gtceu:blue_alloy_screw',
            '8x gtceu:quantum_star',
            '64x gtceu:uhpic_chip',
            '64x gtceu:uhpic_chip',
            '64x gtceu:uhpic_chip',
            '64x gtceu:uhpic_chip'
        )
        .inputFluids(
            'gtceu:indium_tin_lead_cadmium_soldering_alloy 5184',
            'gtceu:naquadria 5184',
            'gtceu:duranium 5184'
        )
        .itemOutputs('gtceu:runic_circuitry_assembling_station')
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder.researchStack(Item.of('gtceu:zpm_laser_engraver')).EUt(GTValues.VHA[ZPM]).CWUt(16)
        )
        .duration(6000)
        .EUtVHA(ZPM);

    // event.recipes.gtceu.assembly_line(id('quantum_compressor'))
    //         .itemInputs('gtceu:melodium_frame', '3x #gtceu:circuits/uv', '2x gtceu:double_trinaquadalloy_plate',
    //                 '2x gtceu:zpm_field_generator', '16x gtceu:zpm_electric_piston', '64x gtceu:uhpic_chip',
    //                 '64x gtceu:uhpic_chip', '64x gtceu:uhpic_chip', '64x gtceu:uhpic_chip', '64x gtceu:uhpic_chip',
    //                 '64x gtceu:uhpic_chip', '64x gtceu:uhpic_chip', '32x gtceu:uhpic_chip', '48x gtceu:tritanium_screw')
    //         .inputFluids('gtceu:hsse 5184', 'gtceu:hssg 5184', 'gtceu:hsss 5184')
    //         .itemOutputs('gtceu:large_quantum_compressor')
    //         .stationResearch(
    //             researchRecipeBuilder => researchRecipeBuilder
    //             .researchStack(Item.of('gtceu:zpm_compressor'))
    //             .EUt(GTValues.VHA[GTValues.ZPM])
    //             .CWUt(16)
    //         )
    //         .duration(2400)
    //         .EUt(GTValues.VHA[GTValues.ZPM]);

    event.recipes.gtceu
        .assembly_line(id('stargate_component_assembly'))
        .itemInputs(
            'gtceu:prismalium_frame',
            '16x #gtceu:circuits/uv',
            '12x gtceu:zpm_field_generator',
            '64x gtceu:quantum_star',
            '16x gtceu:zpm_robot_arm',
            '16x gtceu:zpm_electric_motor',
            '16x gtceu:zpm_conveyor_module',
            '16x gtceu:zpm_electric_piston',
            '64x gtceu:uhpic_chip',
            '64x gtceu:uhpic_chip',
            '64x gtceu:uhpic_chip',
            '64x gtceu:uhpic_chip',
            '56x gtceu:dragonsteel_screw',
            '32x gtceu:prismalium_single_wire'
        )
        .inputFluids('gtceu:prismalium 18432', 'gtceu:pcb_coolant 256000', 'gtceu:nether_star_concentrate 3456')
        .itemOutputs('gtceu:stargate_component_assembly')
        .duration(6400)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder
                .researchStack(Item.of('kubejs:activated_stargate_rod'))
                .EUt(GTValues.VHA[ZPM])
                .CWUt(24)
        )
        .EUtVHA(ZPM);

    event.recipes.gtceu
        .assembly_line(id('runic_wave_generator'))
        .itemInputs(
            'gtceu:dragonsteel_frame',
            'gtceu:exquisite_runic_laser_source_base_gem',
            '64x gtceu:energy_module',
            '32x gtceu:energy_module',
            '16x kubejs:advanced_neutron_reflector',
            '8x gtceu:zpm_emitter',
            '16x gtceu:zpm_voltage_coil',
            '32x gtceu:aerogel_plate',
            '64x gtceu:uhpic_wafer',
            '64x gtceu:uhpic_wafer',
            '64x gtceu:uhpic_wafer',
            '64x gtceu:uhpic_wafer'
        )
        .inputFluids(
            'gtceu:polycarbonate 63000',
            'gtceu:polybenzimidazole 36000',
            'gtceu:indium_tin_lead_cadmium_soldering_alloy 26784'
        )
        .itemOutputs('kubejs:runic_wave_generator')
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder
                .researchStack(Item.of('gtceu:exquisite_runic_laser_source_base_gem'))
                .EUt(GTValues.VHA[ZPM])
                .CWUt(24)
        )
        .duration(7200)
        .EUtVHA(ZPM);

    event.recipes.gtceu
        .assembler(id('laser_casing'))
        .itemInputs('6x gtceu:double_prismalium_plate', 'gtceu:prismalium_frame', 'kubejs:runic_wave_generator')
        .itemOutputs('kubejs:laser_casing')
        .duration(6000)
        .EUtVHA(ZPM)
        .circuit(7);

    event.recipes.gtceu
        .assembler(id('inscribe_casing'))
        .itemInputs(
            '6x gtceu:double_ancient_runicalium_plate',
            'gtceu:ancient_runicalium_frame',
            'kubejs:runic_wave_generator'
        )
        .itemOutputs('kubejs:inscribe_casing')
        .duration(8000)
        .EUtVA(UHV)
        .circuit(7);
});

//Gate Energy Resetting
['classic', 'milky_way', 'pegasus'].forEach((gate) => {
    BlockEvents.rightClicked(`sgjourney:${gate}_stargate`, (event) => {
        const { player, block, item, level } = event;

        if (!item.hasTag('forge:tools/mallets')) return;

        // eslint-disable-next-line id-match
        block.mergeEntityData({ Energy: 0 });

        level.playSound(null, block.pos, 'gtceu:computation', 'blocks');
        player.swing();
    });
});
