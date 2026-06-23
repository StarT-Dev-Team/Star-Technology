ServerEvents.recipes((event) => {
    const id = global.id;

    event.recipes.create
        .mechanical_crafting(
            'start_core:komaru',
            [
                '   G G   ',
                '  GGFGG  ',
                ' Gg1m2bG ',
                '  s345a  ',
                'R  FPF  R',
                'PPFPPPFPP',
                '  fFPFf  ',
                'RfFPPPFfR',
                'PPPPPPPPP',
            ],
            {
                G: 'kubejs:komaru_gravitational_stabilisers',
                F: 'gtceu:hvga_steel_frame',
                f: 'gtceu:draco_abyssal_frame',
                P: 'kubejs:komaru_plating',
                R: 'kubejs:komaru_rift_caller',
                g: 'gtceu:gravitational_compression_chamber',
                b: 'gtceu:byteforce_unified_incomparable_logistics_depot',
                m: 'gtceu:multithreaded_component_synthesis_forge',
                s: 'gtceu:superior_particulate_isolation_nexus',
                a: 'gtceu:ascendant_engraving_matrix',
                1: 'placeablemaxwell:mars',
                2: 'placeablemaxwell:vasilisa',
                3: 'placeablemaxwell:valenok',
                4: 'placeablemaxwell:maxwell',
                5: 'placeablemaxwell:poomba',
            }
        )
        .id('start:shaped/komaru_frame');

    const researchBuilder = global.researchBuilder;
    // global.researchBuilder = (machineType, recId, inputsI, inputsF, outputsI, duration, cwuT, totalCWU, euT, researched)
    const riftAss = 'riftic_infusion_assembly';

    researchBuilder(
        riftAss,
        'komaru_frame_test',
        [
            '3x gtceu:hvga_steel_frame',
            'gtceu:multithreaded_component_synthesis_forge',
            'gtceu:byteforce_unified_incomparable_logistics_depot',
            'gtceu:superior_particulate_isolation_nexus',
            'gtceu:ascendant_engraving_matrix',
            'gtceu:gravitational_compression_chamber',
            '8x kubejs:komaru_gravitational_stabilisers',
            '4x kubejs:komaru_rift_caller',
            '21x kubejs:komaru_plating',
            'placeablemaxwell:maxwell',
            'placeablemaxwell:poomba',
            'placeablemaxwell:mars',
            'placeablemaxwell:vasilisa',
            'placeablemaxwell:valenok',
        ],
        ['gtceu:neutrindium_soldering_alloy 2304', 'gtceu:hvga_steel 2160', 'gtceu:draco_abyssal 1152'],
        ['start_core:komaru'],
        1200,
        444,
        444 * 1200,
        GTValues.VA[GTValues.UIV],
        'kubejs:komaru_plating'
    );

    event.recipes.gtceu
        .assembly_line(id('komaru_gravitational_stabilisers'))
        .itemInputs(
            '6x gtceu:nyanium_frame',
            '12x gtceu:uiv_field_generator',
            '2x #gtceu:circuits/uxv',
            '4x gtceu:uiv_sensor',
            '12x gtceu:draco_abyssal_plate',
            '24x gtceu:hvga_steel_screw'
        )
        .inputFluids('gtceu:neutrindium_soldering_alloy 4608', 'gtceu:netherite_triselex_oxide 9792')
        .itemOutputs('kubejs:komaru_gravitational_stabilisers')
        .duration(1500)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder.researchStack('komarumod:komaru_powder').EUt(GTValues.VA[GTValues.UIV]).CWUt(444)
        )
        .EUt(GTValues.VA[GTValues.UIV]);

    event.recipes.gtceu
        .assembly_line(id('komaru_plating'))
        .itemInputs(
            '8x gtceu:nyanium_ultradense_plate',
            '16x gtceu:uiv_electric_piston',
            '2x #gtceu:circuits/uxv',
            '4x gtceu:uiv_robot_arm',
            '12x gtceu:draco_abyssal_plate',
            '24x gtceu:hvga_steel_screw'
        )
        .inputFluids('gtceu:neutrindium_soldering_alloy 4608', 'gtceu:netherite_triselex_oxide 9792')
        .itemOutputs('kubejs:komaru_plating')
        .duration(1500)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder.researchStack('komarumod:komaru_powder').EUt(GTValues.VA[GTValues.UIV]).CWUt(444)
        )
        .EUt(GTValues.VA[GTValues.UIV]);

    event.recipes.gtceu
        .assembly_line(id('komaru_rift_caller'))
        .itemInputs(
            '3x gtceu:nyanium_foil_ream',
            '16x gtceu:uiv_emitter',
            '2x #gtceu:circuits/uxv',
            '4x gtceu:uiv_conveyor_module',
            '12x gtceu:draco_abyssal_plate',
            '24x gtceu:hvga_steel_screw'
        )
        .inputFluids('gtceu:neutrindium_soldering_alloy 4608', 'gtceu:netherite_triselex_oxide 9792')
        .itemOutputs('kubejs:komaru_rift_caller')
        .duration(1500)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder.researchStack('komarumod:komaru_powder').EUt(GTValues.VA[GTValues.UIV]).CWUt(444)
        )
        .EUt(GTValues.VA[GTValues.UIV]);
});
