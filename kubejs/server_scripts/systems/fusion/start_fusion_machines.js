ServerEvents.recipes((event) => {
    const id = global.id;

    //Controller Blocks
    [
        'gtceu:assembly_line/fusion_reactor_mk1',
        'gtceu:scanner/1_x_gtceu_indium_tin_barium_titanium_cuprate_single_wire',
        'gtceu:assembly_line/fusion_reactor_mk2',
        'gtceu:research_station/1x_gtceu_luv_fusion_reactor',
        'gtceu:assembly_line/fusion_reactor_mk3',
        'gtceu:research_station/1x_gtceu_zpm_fusion_reactor',
    ].forEach((idRemoved) => {
        event.remove({ id: idRemoved });
    });

    $(
        event.recipes.gtceu
            .assembly_line(id('luv_fusion_reactor'))
            .itemInputs(
                'gtceu:superconducting_coil',
                '4x #gtceu:circuits/zpm',
                'gtceu:double_plutonium_241_plate',
                'gtceu:double_osmiridium_plate',
                '2x gtceu:iv_field_generator',
                '64x gtceu:uhpic_chip',
                '32x gtceu:indium_tin_barium_titanium_cuprate_single_wire'
            )
            .inputFluids('gtceu:soldering_alloy 1152', 'gtceu:niobium_titanium 1152')
            .itemOutputs('start_core:luv_fusion_reactor')
            .duration(1200)
            .EUt(GTValues.VA[GTValues.LuV])
    ).scannerResearch((researchRecipeBuilder) =>
        researchRecipeBuilder
            .researchStack(Item.of('gtceu:superconducting_coil'))
            .duration(1200)
            .EUt(GTValues.VA[GTValues.IV])
    );

    event.recipes.gtceu
        .assembly_line(id('zpm_fusion_reactor'))
        .itemInputs(
            'gtceu:fusion_coil',
            '4x #gtceu:circuits/uv',
            'gtceu:double_naquadria_plate',
            'gtceu:double_europium_plate',
            '2x gtceu:luv_field_generator',
            '64x gtceu:uhpic_chip',
            '32x gtceu:uhpic_chip',
            '32x gtceu:uranium_rhodium_dinaquadide_single_wire'
        )
        .inputFluids('gtceu:soldering_alloy 1152', 'gtceu:vanadium_gallium 1152')
        .itemOutputs('start_core:zpm_fusion_reactor')
        .duration(1350)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder
                .researchStack(Item.of('start_core:luv_fusion_reactor'))
                .EUt(GTValues.VHA[GTValues.ZPM])
                .CWUt(16)
        )
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu
        .assembly_line(id('uv_fusion_reactor'))
        .itemInputs(
            'gtceu:fusion_coil',
            '4x #gtceu:circuits/uhv',
            'gtceu:quantum_star',
            'gtceu:double_americium_plate',
            '2x gtceu:zpm_field_generator',
            '64x gtceu:uhpic_chip',
            '64x gtceu:uhpic_chip',
            '32x gtceu:enriched_naquadah_trinium_europium_duranide_single_wire'
        )
        .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 1152', 'gtceu:yttrium_barium_cuprate 1152')
        .itemOutputs('start_core:uv_fusion_reactor')
        .duration(1500)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder
                .researchStack(Item.of('start_core:zpm_fusion_reactor'))
                .EUt(GTValues.VHA[GTValues.UV])
                .CWUt(96)
        )
        .EUt(GTValues.VA[GTValues.UV]);

    event.recipes.gtceu
        .assembly_line(id('uhv_fusion_reactor'))
        .itemInputs(
            'start_core:auxiliary_fusion_coil_mk1',
            '4x #gtceu:circuits/uev',
            'gtceu:gravi_star',
            'gtceu:double_zircalloy_4_plate',
            '2x gtceu:uv_field_generator',
            '64x kubejs:uepic_chip',
            '32x kubejs:uepic_chip',
            '32x gtceu:ruthenium_trinium_americium_neutronate_single_wire'
        )
        .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 1152', 'gtceu:europium 1152')
        .itemOutputs('start_core:uhv_fusion_reactor')
        .duration(1650)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder
                .researchStack(Item.of('start_core:uv_fusion_reactor'))
                .EUt(GTValues.VHA[GTValues.UHV])
                .CWUt(144)
        )
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu
        .assembly_line(id('uev_fusion_reactor'))
        .itemInputs(
            'start_core:advanced_fusion_coil',
            '4x #gtceu:circuits/uiv',
            'kubejs:helish_star',
            'gtceu:double_magmada_alloy_plate',
            '2x gtceu:uhv_field_generator',
            '64x kubejs:uepic_chip',
            '64x kubejs:uepic_chip',
            '32x gtceu:enriched_pallarovium_alloy_single_wire'
        )
        .inputFluids('gtceu:naquadated_soldering_alloy 1152', 'gtceu:cerium_tritelluride 1152')
        .itemOutputs('start_core:uev_fusion_reactor')
        .duration(1800)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder
                .researchStack(Item.of('start_core:uhv_fusion_reactor'))
                .EUt(GTValues.VHA[GTValues.UEV])
                .CWUt(160)
        )
        .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu
        .assembly_line(id('uiv_fusion_reactor'))
        .itemInputs(
            'start_core:auxiliary_fusion_coil_mk2',
            '4x #gtceu:circuits/uxv',
            'kubejs:dragonic_eye',
            'gtceu:double_abyssal_alloy_plate',
            '2x gtceu:uev_field_generator',
            '64x kubejs:uipic_chip',
            '32x kubejs:uipic_chip',
            '32x gtceu:rhenium_super_composite_alloy_single_wire'
        )
        .inputFluids('gtceu:naquadated_soldering_alloy 1152', 'gtceu:polonium_bismide 1152')
        .itemOutputs('start_core:uiv_fusion_reactor')
        .duration(1950)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder
                .researchStack(Item.of('start_core:uev_fusion_reactor'))
                .EUt(GTValues.VHA[GTValues.UIV])
                .CWUt(192)
        )
        .EUt(GTValues.VA[GTValues.UIV]);

    // === Reflector Panels ===
    event.remove({ output: 'gtceu:neutron_reflector' });
    const t1Panel = 'kubejs:basic_neutron_reflector';
    const t2Panel = 'kubejs:advanced_neutron_reflector';
    const t3Panel = 'kubejs:complex_neutron_reflector';
    const t4Panel = 'kubejs:reinforced_neutron_reflector';
    const t5Panel = 'kubejs:borealic_neutron_reflector';
    const t6Panel = 'kubejs:dragonic_neutron_reflector';
    const t7Panel = 'kubejs:prismalic_neutron_reflector';

    const t1Reflector = 'kubejs:basic_reflector_casing';
    const t2Reflector = 'kubejs:advanced_reflector_casing';
    const t3Reflector = 'kubejs:complex_reflector_casing';
    const t4Reflector = 'kubejs:reinforced_reflector_casing';
    const t5Reflector = 'kubejs:borealic_reflector_casing';
    const t6Reflector = 'kubejs:dragonic_reflector_casing';
    const t7Reflector = 'kubejs:prismalic_reflector_casing';

    /**
     * @param {string} output
     * @param {string} primary
     * @param {string} secondary
     * @param {string} backing
     * @param {string} solder
     * @param {number} eut
     * @param {internal.com.gregtechceu.gtceu.api.machine.multiblock.CleanroomType | null} clean
     */
    let reflectorPanel = (output, primary, secondary, backing, solder, eut, clean) => {
        event.recipes.gtceu
            .assembler(id(output.split(':')[1]))
            .itemInputs(`gtceu:${primary}_plate`, `2x gtceu:double_${secondary}_plate`, backing)
            .inputFluids(`gtceu:${solder}`)
            .itemOutputs(output)
            .duration(1000)
            .EUt(eut)
            .cleanroom(clean);
    };

    reflectorPanel(
        t1Panel,
        'ruridit',
        'beryllium',
        'gtceu:double_tungsten_carbide_plate',
        'tin_alloy 2304',
        GTValues.VHA[GTValues.EV],
        CleanroomType.CLEANROOM
    );
    reflectorPanel(
        t2Panel,
        'osmiridium',
        'naquadah',
        t1Panel,
        'soldering_alloy 1152',
        GTValues.VHA[GTValues.IV],
        CleanroomType.CLEANROOM
    );
    reflectorPanel(
        t3Panel,
        'trinaquadalloy',
        'zirconium',
        t2Panel,
        'soldering_alloy 2304',
        GTValues.VHA[GTValues.LuV],
        CleanroomType.CLEANROOM
    );
    reflectorPanel(
        t4Panel,
        'zirconium_selenide_diiodide',
        'tritanium',
        t3Panel,
        'indium_tin_lead_cadmium_soldering_alloy 1152',
        GTValues.VHA[GTValues.ZPM],
        CleanroomType.STERILE_CLEANROOM
    );
    reflectorPanel(
        t5Panel,
        'ancient_netherite',
        'void',
        t4Panel,
        'indium_tin_lead_cadmium_soldering_alloy 2304',
        GTValues.VHA[GTValues.UV],
        CleanroomType.STERILE_CLEANROOM
    );
    reflectorPanel(
        t6Panel,
        'rhenate_w',
        'mythrotight_carbide_steel',
        t5Panel,
        'naquadated_soldering_alloy 1152',
        GTValues.VHA[GTValues.UHV],
        CleanroomType.STERILE_CLEANROOM
    );
    reflectorPanel(
        t7Panel,
        'draco_abyssal',
        'hvga_steel',
        t6Panel,
        'naquadated_soldering_alloy 2304',
        GTValues.VHA[GTValues.UEV],
        $StarTAbyssalContainmentMachine.ABYSSAL_CONTAINMENT_ROOM
    );

    /**
     * @param {string} output
     * @param {string} core
     * @param {string} tierFG
     * @param {string} cable
     * @param {string} plate
     * @param {string} fluid
     * @param {number} tier
     * @param {internal.com.gregtechceu.gtceu.api.machine.multiblock.CleanroomType | null} clean
     */
    let reflectorBlock = (output, core, tierFG, cable, plate, fluid, tier, clean) => {
        let fusionReflectorRecipe = event.recipes.gtceu
            .assembler(id(output.split(':')[1]))
            .itemInputs(
                '2x ' + core,
                `gtceu:${tierFG}_field_generator`,
                '6x ' + plate,
                `4x gtceu:${cable}_single_cable`
            )
            .inputFluids('gtceu:' + fluid)
            .itemOutputs('2x ' + output)
            .duration(400)
            .EUt(GTValues.VA[GTValues.EV] * Math.pow(4, tier))
            .cleanroom(clean);
        if (tier === 1) {
            fusionReflectorRecipe.itemInputs('6x gtceu:trinium_foil');
        } else if (2 <= tier && tier <= 5) {
            fusionReflectorRecipe.itemInputs(`${12 * (tier - 1)}x gtceu:trinium_foil`);
        } else if (tier === 6) {
            fusionReflectorRecipe.itemInputs('64x gtceu:trinium_foil');
        } else if (tier === 7) {
            fusionReflectorRecipe.itemInputs('64x gtceu:trinium_foil', '32x gtceu:trinium_foil');
        }
    };

    reflectorBlock(
        t1Reflector,
        'gtceu:enriched_naquadah_frame',
        'iv',
        'niobium_nitride',
        t1Panel,
        'polybenzimidazole 288',
        1,
        CleanroomType.CLEANROOM
    );
    reflectorBlock(
        t2Reflector,
        t1Reflector,
        'luv',
        'vanadium_gallium',
        t2Panel,
        'polybenzimidazole 576',
        2,
        CleanroomType.CLEANROOM
    );
    reflectorBlock(
        t3Reflector,
        t2Reflector,
        'zpm',
        'yttrium_barium_cuprate',
        t3Panel,
        'polyether_ether_ketone 288',
        3,
        CleanroomType.CLEANROOM
    );
    reflectorBlock(
        t4Reflector,
        t3Reflector,
        'uv',
        'europium',
        t4Panel,
        'polyether_ether_ketone 576',
        4,
        CleanroomType.STERILE_CLEANROOM
    );
    reflectorBlock(
        t5Reflector,
        t4Reflector,
        'uhv',
        'cerium_tritelluride',
        t5Panel,
        'poly_34_ethylenedioxythiophene_polystyrene_sulfate 288',
        5,
        CleanroomType.STERILE_CLEANROOM
    );
    reflectorBlock(
        t6Reflector,
        t5Reflector,
        'uev',
        'polonium_bismide',
        t6Panel,
        'poly_34_ethylenedioxythiophene_polystyrene_sulfate 576',
        6,
        CleanroomType.STERILE_CLEANROOM
    );
    reflectorBlock(
        t7Reflector,
        t6Reflector,
        'uiv',
        'lepton_resonant_thallium_antimonide',
        t7Panel,
        'poly_34_ethylenedioxythiophene_polystyrene_sulfate 1152',
        7,
        $StarTAbyssalContainmentMachine.ABYSSAL_CONTAINMENT_ROOM
    );

    // === Coils ===

    event.remove({ output: 'gtceu:superconducting_coil' });

    /**
     * @param {GTTier} tier
     * @param {string} superCond
     * @param {number} quant
     */
    let superconductingCoil = (tier, superCond, quant) => {
        event.recipes.gtceu
            .assembler(id(`superconducting_coil_${tier}`))
            .itemInputs(
                'gtceu:enriched_naquadah_frame',
                `16x gtceu:${superCond}_double_wire`,
                '32x gtceu:niobium_titanium_foil'
            )
            .inputFluids('gtceu:trinium 1728')
            .itemOutputs(`${Math.pow(2, quant - 1)}x gtceu:superconducting_coil`)
            .duration(100)
            .EUt(GTValues.VA[GTValues.IV] * Math.pow(4, quant));
    };
    superconductingCoil('luv', 'indium_tin_barium_titanium_cuprate', 1);
    superconductingCoil('zpm', 'uranium_rhodium_dinaquadide', 2);
    superconductingCoil('uv', 'enriched_naquadah_trinium_europium_duranide', 3);
    superconductingCoil('uhv', 'ruthenium_trinium_americium_neutronate', 4);
    superconductingCoil('uev', 'enriched_pallarovium_alloy', 5);
    superconductingCoil('uiv', 'rhenium_super_composite_alloy', 6);

    event.remove({ output: 'gtceu:fusion_coil' });

    /**
     * @param {string} output
     * @param {string[]} inputs
     * @param {string} fluid
     * @param {internal.com.gregtechceu.gtceu.api.machine.multiblock.CleanroomType | null} clean
     * @param {number} dura
     * @param {number} eut
     */
    let fusionCoil = (output, inputs, fluid, clean, dura, eut) => {
        event.recipes.gtceu
            .assembler(id(`${output.split(':')[1]}`))
            .itemInputs(inputs)
            .inputFluids(fluid)
            .itemOutputs(output)
            .duration(dura)
            .EUt(eut)
            .cleanroom(clean);
    };
    fusionCoil(
        '1x gtceu:fusion_coil',
        [
            '1x gtceu:superconducting_coil',
            '2x gtceu:iv_field_generator',
            '1x gtceu:iv_electric_pump',
            '4x ' + t1Panel,
            '4x #gtceu:circuits/luv',
            '1x gtceu:naquadah_normal_fluid_pipe',
            '4x gtceu:europium_plate',
        ],
        'gtceu:vanadium_gallium 576',
        CleanroomType.CLEANROOM,
        150,
        GTValues.VA[GTValues.ZPM]
    );
    fusionCoil(
        '3x start_core:auxiliary_fusion_coil_mk1',
        [
            '3x gtceu:superconducting_coil',
            '4x gtceu:zpm_field_generator',
            '2x gtceu:zpm_electric_pump',
            '8x ' + t3Panel,
            '8x #gtceu:circuits/uv',
            '2x gtceu:zapolgium_normal_fluid_pipe',
            '8x gtceu:zircalloy_4_plate',
        ],
        'gtceu:europium 1152',
        CleanroomType.CLEANROOM,
        300,
        GTValues.VA[GTValues.UHV]
    );
    fusionCoil(
        '1x start_core:advanced_fusion_coil',
        [
            '1x gtceu:fusion_coil',
            '2x gtceu:uv_field_generator',
            '1x gtceu:uv_electric_pump',
            '4x ' + t4Panel,
            '4x #gtceu:circuits/uhv',
            '1x gtceu:mythrolic_alloy_normal_fluid_pipe',
            '4x gtceu:magmada_alloy_plate',
        ],
        'gtceu:cerium_tritelluride 576',
        CleanroomType.STERILE_CLEANROOM,
        150,
        GTValues.VA[GTValues.UEV]
    );
    fusionCoil(
        '3x start_core:auxiliary_fusion_coil_mk2',
        [
            '3x start_core:auxiliary_fusion_coil_mk1',
            '4x gtceu:uhv_field_generator',
            '2x gtceu:uhv_electric_pump',
            '8x ' + t5Panel,
            '8x #gtceu:circuits/uev',
            '2x gtceu:nyanium_normal_fluid_pipe',
            '8x gtceu:abyssal_alloy_plate',
        ],
        'gtceu:polonium_bismide 1152',
        CleanroomType.STERILE_CLEANROOM,
        300,
        GTValues.VA[GTValues.UIV]
    );

    // === Casings ===
    event.remove({ output: 'gtceu:fusion_casing' });
    event.remove({ output: 'gtceu:fusion_casing_mk2' });
    event.remove({ output: 'gtceu:fusion_casing_mk3' });

    /**
     *
     * @param {string} output
     * @param {'luv' | 'zpm' | 'uv' | 'uhv' | 'uev' | 'uiv' } tier
     * @param {string} VcoilMod
     * @param {string} reflector
     * @param {string} coil
     * @param {string} fluid
     * @param {internal.com.gregtechceu.gtceu.api.machine.multiblock.CleanroomType | null} clean
     * @param {number} eut
     */
    let fusionCasing = (output, tier, VcoilMod, reflector, coil, fluid, clean, eut) => {
        let tierData = {
            luv: 'iv',
            zpm: 'luv',
            uv: 'zpm',
            uhv: 'uv',
            uev: 'uhv',
            uiv: 'uev',
        };
        let tierUnder = tierData[tier];

        event.recipes.gtceu
            .assembler(id(`${output.split(':')[1]}`))
            .itemInputs(
                `gtceu:${tier}_machine_hull`,
                coil,
                `2x ${VcoilMod}:${tier}_voltage_coil`,
                `gtceu:${tierUnder}_field_generator`,
                '6x ' + reflector
            )
            .inputFluids(fluid)
            .itemOutputs(output)
            .duration(160)
            .EUt(eut)
            .cleanroom(clean);
    };

    fusionCasing(
        '2x gtceu:fusion_casing',
        'luv',
        'gtceu',
        t1Panel,
        'gtceu:superconducting_coil',
        'gtceu:polybenzimidazole 288',
        CleanroomType.CLEANROOM,
        GTValues.VA[GTValues.LuV]
    );
    fusionCasing(
        '2x gtceu:fusion_casing_mk2',
        'zpm',
        'gtceu',
        t2Panel,
        'gtceu:fusion_coil',
        'gtceu:polybenzimidazole 576',
        CleanroomType.CLEANROOM,
        GTValues.VA[GTValues.LuV]
    );
    fusionCasing(
        '2x gtceu:fusion_casing_mk3',
        'uv',
        'gtceu',
        t3Panel,
        'gtceu:fusion_coil',
        'gtceu:polyether_ether_ketone 288',
        CleanroomType.CLEANROOM,
        GTValues.VA[GTValues.LuV]
    );
    fusionCasing(
        '2x start_core:auxiliary_boosted_fusion_casing_mk1',
        'uhv',
        'kubejs',
        t4Panel,
        'start_core:auxiliary_fusion_coil_mk1',
        'gtceu:polyether_ether_ketone 576',
        CleanroomType.CLEANROOM,
        GTValues.VA[GTValues.LuV]
    );
    fusionCasing(
        '2x start_core:fusion_casing_mk4',
        'uev',
        'kubejs',
        t5Panel,
        'start_core:advanced_fusion_coil',
        'gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 288',
        CleanroomType.CLEANROOM,
        GTValues.VA[GTValues.LuV]
    );
    fusionCasing(
        '2x start_core:auxiliary_boosted_fusion_casing_mk2',
        'uiv',
        'kubejs',
        t6Panel,
        'start_core:auxiliary_fusion_coil_mk2',
        'gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 576',
        CleanroomType.CLEANROOM,
        GTValues.VA[GTValues.LuV]
    );

    event.remove({ output: 'gtceu:fusion_glass' });
    event.recipes.gtceu
        .assembler(id('fusion_glass'))
        .itemInputs('gtceu:laminated_glass', '4x gtceu:enriched_naquadah_plate', '6x ' + t1Panel)
        .inputFluids('gtceu:polybenzimidazole 144')
        .itemOutputs('2x gtceu:fusion_glass')
        .duration(50)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu
        .assembler(id('reinforced_fusion_glass'))
        .itemInputs('gtceu:fusion_glass', 'gtceu:zpm_emitter', '6x ' + t3Panel)
        .inputFluids('gtceu:polyether_ether_ketone 432')
        .itemOutputs('2x kubejs:reinforced_fusion_glass')
        .duration(200)
        .EUt(GTValues.VA[GTValues.UV]);
});
