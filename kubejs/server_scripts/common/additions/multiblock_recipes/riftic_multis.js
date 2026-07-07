ServerEvents.recipes((event) => {
    const id = global.id;

    const researchBuilder = global.researchBuilder;
    // global.researchBuilder = (machineType, recId, inputsI, inputsF, outputsI, duration, cwuT, totalCWU, euT, researched)
    const riftAss = 'riftic_infusion_assembly';
    const assLine = 'assembly_line';

    researchBuilder(
        riftAss,
        'fire',
        [
            '3x gtceu:hvga_steel_frame',
            '8x #gtceu:circuits/uxv',
            '24x kubejs:uiv_high_strength_panel',
            '12x gtceu:nyanium_nonuple_fluid_pipe',
            '12x gtceu:uiv_field_generator',
            '8x gtceu:uiv_fluid_regulator',
            '12x gtceu:draco_abyssal_rotor',
            '32x gtceu:hvga_steel_screw',
        ],
        [
            'gtceu:neutrindium_soldering_alloy 17280',
            'gtceu:borealic_concentrate 5400',
            'gtceu:pure_dragon_breath 22500',
            'gtceu:riftic_concentrate 28500',
            'start_core:corefire_nectar 1000000',
        ],
        ['start_core:fornaxs_infernal_rotary_engine'],
        1800,
        500,
        500 * 1200,
        GTValues.VA[GTValues.UIV],
        'start_core:hellforge'
    );

    researchBuilder(
        riftAss,
        'ultimate_abs',
        [
            'gtceu:uiv_alloy_smelter',
            '6x #gtceu:circuits/uxv',
            '4x gtceu:uiv_field_generator',
            '8x gtceu:dense_hvga_steel_plate',
            '3x gtceu:uiv_robot_arm',
            '8x gtceu:uiv_fluid_regulator',
            '16x gtceu:rhenium_super_composite_alloy_quadruple_wire',
            '6x gtceu:draco_abyssal_rotor',
            '6x gtceu:small_lepton_resonant_thallium_antimonide_spring',
            '16x gtceu:draco_abyssal_screw',
        ],
        [
            'gtceu:neutrindium_soldering_alloy 17280',
            'gtceu:borealic_concentrate 5400',
            'gtceu:pure_dragon_breath 22500',
            'gtceu:riftic_concentrate 28500',
            'start_core:corefire_nectar 500000',
        ],
        ['gtceu:ultimate_abs'],
        1200,
        500,
        500 * 1200,
        GTValues.VA[GTValues.UIV],
        'gtceu:mega_abs'
    );

    researchBuilder(
        riftAss,
        'riftion_accelerator',
        [
            '4x start_core:uiv_fusion_reactor',
            '24x gtceu:uiv_fluid_regulator',
            '16x kubejs:runic_wave_generator',
            '128x kubejs:prismalic_neutron_reflector',
        ],
        ['gtceu:neutrindium_soldering_alloy 17280', 'gtceu:pure_dragon_breath 22500'],
        ['gtceu:riftion_accelerator'],
        1200,
        500,
        500 * 1200,
        GTValues.VA[GTValues.UIV],
        'gtceu:neutronium_block'
    );

    researchBuilder(
        riftAss,
        'riftion_slammer',
        [
            '4x gtceu:uiv_compressor',
            '24x gtceu:uiv_electric_piston',
            '16x kubejs:runic_wave_generator',
            '128x kubejs:prismalic_neutron_reflector',
        ],
        ['gtceu:neutrindium_soldering_alloy 17280', 'gtceu:pure_dragon_breath 22500'],
        ['gtceu:riftion_slammer'],
        1200,
        500,
        500 * 1200,
        GTValues.VA[GTValues.UIV],
        'gtceu:titan_forge'
    );

    researchBuilder(
        riftAss,
        'riftion_injector',
        [
            '4x gtceu:uiv_scanner',
            '24x gtceu:uiv_emitter',
            '16x kubejs:runic_wave_generator',
            '128x kubejs:prismalic_neutron_reflector',
        ],
        ['gtceu:neutrindium_soldering_alloy 17280', 'gtceu:pure_dragon_breath 22500'],
        ['gtceu:riftion_injector'],
        1200,
        500,
        500 * 1200,
        GTValues.VA[GTValues.UIV],
        'gtceu:injection_mixer'
    );

    researchBuilder(
        riftAss,
        'kaleidoscopic_fractalizer',
        [
            '4x gtceu:uiv_mixer',
            '24x gtceu:uiv_sensor',
            '16x kubejs:runic_wave_generator',
            '128x kubejs:prismalic_neutron_reflector',
        ],
        ['gtceu:neutrindium_soldering_alloy 17280', 'gtceu:pure_dragon_breath 22500'],
        ['gtceu:kaleidoscopic_fractalizer'],
        1200,
        500,
        500 * 1200,
        GTValues.VA[GTValues.UIV],
        'gtceu:cyclonic_sifter'
    );

    // event.recipes.gtceu.assembly_line(id('particle_rod_holder'))
    //     .itemInputs('gtceu:draco_abyssal_frame', '4x #gtceu:circuits/uxv', '4x gtceu:hvga_steel_ultradense_plate','2x kubejs:runic_wave_generator',
    //         '96x kubejs:uipic_chip','16x gtceu:uiv_field_generator')
    //     .inputFluids('gtceu:neutrindium_soldering_alloy 122688','gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 81792')
    //     .itemOutputs('kubejs:particle_rod_holder')
    //     .stationResearch(
    //         researchRecipeBuilder => researchRecipeBuilder
    //             .researchStack(Item.of('kubejs:laser_casing'))
    //             .EUt(GTValues.VHA[GTValues.UIV])
    //             .CWUt(324)
    //         )
    //     .duration(2400)
    //     .EUt(GTValues.VHA[GTValues.UIV]);

    // event.recipes.gtceu.assembly_line(id('riftion_injection_core'))
    //     .itemInputs('gtceu:hvga_steel_frame', '24x #gtceu:circuits/uiv','4x kubejs:runic_wave_generator','4x gtceu:uiv_field_generator')
    //     .inputFluids('gtceu:neutrindium_soldering_alloy 70848','gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 47232')
    //     .itemOutputs('kubejs:riftion_injection_core')
    //     .stationResearch(
    //         researchRecipeBuilder => researchRecipeBuilder
    //             .researchStack(Item.of('kubejs:inscribe_casing'))
    //             .EUt(GTValues.VHA[GTValues.UIV])
    //             .CWUt(324)
    //         )
    //     .duration(900)
    //     .EUt(GTValues.VHA[GTValues.UIV]);
});
