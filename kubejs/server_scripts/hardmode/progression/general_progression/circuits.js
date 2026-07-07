ServerEvents.recipes((event) => {
    // to be revamped post-theta
    const id = global.id;

    // Removals

    event.remove({ output: 'gtceu:data_stick', type: 'gtceu:circuit_assembler' });
    event.remove({ output: /^gtceu:.*electronic_circuit/ });
    event.remove({ output: /^gtceu:.*integrated_circuit/ });
    event.remove({ output: 'gtceu:nand_chip' });
    event.remove({ output: /^gtceu:micro.*/, type: 'gtceu:circuit_assembler' });
    event.remove({ output: 'gtceu:resistor' });
    event.remove({ output: 'gtceu:diode' });
    event.remove({ output: 'gtceu:transistor' });
    event.remove({ output: 'gtceu:inductor' });
    event.remove({ output: 'gtceu:capacitor' });
    event.remove({ output: 'gtceu:resin_printed_circuit_board' });
    event.remove({ output: 'gtceu:resin_circuit_board' });
    event.remove({ output: 'gtceu:phenolic_printed_circuit_board' });
    event.remove({ output: 'gtceu:phenolic_circuit_board' });
    event.remove({ output: 'gtceu:plastic_printed_circuit_board' });
    event.remove({ output: 'gtceu:plastic_circuit_board' });
    event.remove({ output: 'gtceu:smd_capacitor' });
    event.remove({ output: 'gtceu:smd_diode' });
    event.remove({ output: 'gtceu:smd_transistor' });
    event.remove({ output: 'gtceu:smd_resistor' });
    event.remove({ output: 'gtceu:smd_inductor' });

    // Manufacturing Facility Controller
    event.recipes.gtceu
        .assembler(id('circuit_manufacturing_facility'))
        .itemInputs(
            '1x gtceu:lv_machine_hull',
            '6x #gtceu:circuits/ulv',
            '6x gtceu:ulv_robot_arm',
            '3x gtceu:ulv_conveyor_module',
            '4x gtceu:steel_gear',
            '2x gtceu:ulv_electric_motor',
            '2x kubejs:ulv_emitter',
            '4x gtceu:tin_single_cable'
        )
        .inputFluids('gtceu:tin 576')
        .itemOutputs('gtceu:circuit_manufacturing_facility')
        .duration(2400)
        .circuit(4)
        .EUt(8);

    const CircuitFacilityRecipe = (output, recipeID, inputs, fluids, duration, EUt) => {
        event.recipes.gtceu
            .circuit_facility(id(recipeID))
            .itemInputs(inputs)
            .inputFluids(fluids)
            .itemOutputs(output)
            .duration(duration)
            .EUt(EUt);
    };
    const CircuitFacilityRecipeCleanroom = (output, recipeID, inputs, fluids, duration, EUt) => {
        event.recipes.gtceu
            .circuit_facility(id(recipeID))
            .itemInputs(inputs)
            .inputFluids(fluids)
            .itemOutputs(output)
            .duration(duration)
            .EUt(EUt)
            .cleanroom(CleanroomType.CLEANROOM);
    };
    // Misc
    CircuitFacilityRecipeCleanroom(
        '1x gtceu:data_stick',
        'data_stick',
        [
            'gtceu:plastic_printed_circuit_board',
            '#gtceu:circuits/mv',
            '2x gtceu:cpu_chip',
            '6x gtceu:polyethylene_plate',
            '32x gtceu:nand_memory_chip',
            '4x gtceu:ram_chip',
            '16x gtceu:fine_annealed_copper_wire',
            '4x gtceu:silicone_rubber_foil',
        ],
        ['gtceu:soldering_alloy 216'],
        800,
        480
    );

    // Electronic Circuits Line
    CircuitFacilityRecipe(
        '3x gtceu:vacuum_tube',
        'ulv_electronic_circuit',
        [
            'thermal:redstone_servo',
            '6x gtceu:wrought_iron_foil',
            '3x create:electron_tube',
            '2x gtceu:fine_red_alloy_wire',
            '2x gtceu:copper_bolt',
        ],
        ['gtceu:tin 216'],
        400,
        7
    );
    CircuitFacilityRecipe(
        '2x gtceu:basic_electronic_circuit',
        'lv_electronic_circuit',
        [
            'gtceu:resin_printed_circuit_board',
            '3x gtceu:steel_plate',
            '6x gtceu:resistor',
            '4x gtceu:vacuum_tube',
            '4x gtceu:red_alloy_single_cable',
            '8x gtceu:copper_bolt',
        ],
        ['gtceu:tin 432'],
        600,
        30
    );
    CircuitFacilityRecipe(
        '2x gtceu:good_electronic_circuit',
        'mv_electronic_circuit',
        [
            'gtceu:resin_printed_circuit_board',
            '3x gtceu:double_steel_plate',
            '6x gtceu:resistor',
            '4x gtceu:diode',
            '4x gtceu:basic_electronic_circuit',
            '4x gtceu:tin_single_cable',
            '10x gtceu:copper_bolt',
        ],
        ['gtceu:tin 576'],
        600,
        120
    );

    // Integrated Circuits Line
    CircuitFacilityRecipe(
        '2x gtceu:basic_integrated_circuit',
        'lv_integrated_circuit',
        [
            'gtceu:phenolic_printed_circuit_board',
            'gtceu:ilc_chip',
            '3x gtceu:diode',
            '3x gtceu:resistor',
            '4x gtceu:fine_copper_wire',
            '8x gtceu:annealed_copper_bolt',
        ],
        ['gtceu:soldering_alloy 144'],
        400,
        30
    );
    CircuitFacilityRecipe(
        '2x gtceu:good_integrated_circuit',
        'mv_integrated_circuit',
        [
            'gtceu:phenolic_printed_circuit_board',
            '2x gtceu:basic_integrated_circuit',
            'gtceu:ilc_chip',
            '8x gtceu:fine_annealed_copper_wire',
            '4x gtceu:resistor',
            '4x gtceu:diode',
            '8x gtceu:rose_gold_bolt',
        ],
        ['gtceu:soldering_alloy 216'],
        400,
        120
    );
    CircuitFacilityRecipe(
        '1x gtceu:advanced_integrated_circuit',
        'hv_integrated_circuit',
        [
            '2x gtceu:good_integrated_circuit',
            '2x gtceu:ilc_chip',
            '6x gtceu:fine_gold_wire',
            '4x gtceu:ram_chip',
            '6x gtceu:transistor',
            '2x gtceu:resistor',
            '2x gtceu:diode',
            '10x gtceu:gold_bolt',
        ],
        ['gtceu:soldering_alloy 288', 'gtceu:polyethylene 72'],
        400,
        480
    );

    // Micro Cirucits Line
    CircuitFacilityRecipeCleanroom(
        '8x gtceu:nand_chip',
        'ulv_micro_circuit',
        [
            'gtceu:plastic_printed_circuit_board',
            'gtceu:simple_soc',
            '2x #gtceu:capacitors',
            '#gtceu:transistors',
            '4x gtceu:fine_tin_wire',
            '2x gtceu:red_alloy_bolt',
        ],
        ['gtceu:soldering_alloy 72'],
        100,
        120
    );
    CircuitFacilityRecipeCleanroom(
        '3x gtceu:microchip_processor',
        'lv_micro_circuit',
        [
            'gtceu:plastic_printed_circuit_board',
            '2x gtceu:nand_chip',
            'gtceu:cpu_chip',
            '2x gtceu:smd_resistor',
            '2x gtceu:smd_capacitor',
            '2x gtceu:smd_transistor',
            '6x gtceu:fine_annealed_copper_wire',
            '2x gtceu:silicone_rubber_foil',
            '4x gtceu:copper_bolt',
        ],
        ['gtceu:soldering_alloy 144', 'gtceu:polyethylene 36'],
        300,
        120
    );
    CircuitFacilityRecipeCleanroom(
        '2x gtceu:micro_processor',
        'mv_micro_circuit',
        [
            'gtceu:plastic_printed_circuit_board',
            '2x gtceu:microchip_processor',
            '2x gtceu:cpu_chip',
            '3x gtceu:smd_resistor',
            '3x gtceu:smd_capacitor',
            '3x gtceu:smd_transistor',
            '2x gtceu:polyethylene_plate',
            '8x gtceu:fine_gold_wire',
            '4x gtceu:silicone_rubber_foil',
            '6x gtceu:rose_gold_bolt',
        ],
        ['gtceu:soldering_alloy 216', 'gtceu:polyethylene 72'],
        300,
        120
    );
    CircuitFacilityRecipeCleanroom(
        '2x gtceu:micro_processor_assembly',
        'hv_micro_circuit',
        [
            'gtceu:plastic_printed_circuit_board',
            '2x gtceu:micro_processor',
            '4x gtceu:smd_inductor',
            '6x gtceu:smd_capacitor',
            '4x gtceu:smd_transistor',
            '6x gtceu:ram_chip',
            '4x gtceu:polyethylene_plate',
            '6x gtceu:fine_electrum_wire',
            '6x gtceu:silicone_rubber_foil',
            '6x gtceu:gold_bolt',
        ],
        ['gtceu:soldering_alloy 288', 'gtceu:polyethylene 108'],
        400,
        480
    );
    CircuitFacilityRecipeCleanroom(
        'gtceu:micro_processor_computer',
        'ev_micro_circuit',
        [
            'gtceu:plastic_printed_circuit_board',
            '2x gtceu:micro_processor_assembly',
            '6x gtceu:smd_diode',
            '8x gtceu:ram_chip',
            '4x gtceu:nand_memory_chip',
            '2x gtceu:nor_memory_chip',
            '8x gtceu:polyethylene_plate',
            '8x gtceu:fine_blue_alloy_wire',
            '8x gtceu:silicone_rubber_foil',
            '8x gtceu:electrum_bolt',
        ],
        ['gtceu:soldering_alloy 576', 'gtceu:polyethylene 216', 'gtceu:silicone_rubber 144'],
        600,
        1920
    );
    CircuitFacilityRecipeCleanroom(
        'gtceu:micro_processor_mainframe',
        'iv_micro_circuit',
        [
            '2x gtceu:aluminium_frame',
            '3x gtceu:micro_processor_computer',
            '8x gtceu:smd_inductor',
            '8x gtceu:smd_capacitor',
            '8x gtceu:smd_resistor',
            '8x gtceu:smd_transistor',
            '8x gtceu:smd_diode',
            '24x gtceu:ram_chip',
            '12x gtceu:polyethylene_plate',
            '32x gtceu:fine_platinum_wire',
            '12x gtceu:silicone_rubber_foil',
            '16x gtceu:blue_alloy_bolt',
        ],
        ['gtceu:soldering_alloy 1152', 'gtceu:polyethylene 432', 'gtceu:silicone_rubber 216'],
        1200,
        7680
    );

    // Parts
    const PartsAssemblerFluids = (output, recipeID, inputs, fluid, duration, EUt) => {
        event.recipes.gtceu
            .assembler(id(recipeID))
            .itemInputs(inputs)
            .inputFluids(fluid)
            .itemOutputs(output)
            .duration(duration)
            .EUt(EUt);
    };
    // Pre-Machine Assembly
    PartsAssemblerFluids(
        '2x thermal:redstone_servo',
        'redstone_servo',
        ['4x create:electron_tube', '2x gtceu:steel_plate', '2x gtceu:red_alloy_bolt'],
        'gtceu:tin 72',
        400,
        6
    );
    PartsAssemblerFluids(
        '3x create:electron_tube',
        'electron_tube',
        ['gtceu:glass_tube', 'create:polished_rose_quartz', 'gtceu:red_alloy_bolt', 'gtceu:steel_ring'],
        'gtceu:tin 72',
        400,
        4
    );
    // Pre-SMD
    PartsAssemblerFluids(
        '2x gtceu:resistor',
        'resistor_coke',
        ['4x minecraft:paper', 'gtceu:coke_dust', '4x gtceu:fine_copper_wire'],
        'gtceu:glue 100',
        400,
        7
    );
    PartsAssemblerFluids(
        '2x gtceu:resistor',
        'resistor_carbon',
        ['4x minecraft:paper', 'gtceu:carbon_dust', '4x gtceu:fine_copper_wire'],
        'gtceu:glue 100',
        300,
        7
    );
    PartsAssemblerFluids(
        '3x gtceu:resistor',
        'resistor_carbon_annealed',
        ['4x minecraft:paper', 'gtceu:carbon_dust', '4x gtceu:fine_annealed_copper_wire'],
        'gtceu:glue 100',
        300,
        7
    );
    PartsAssemblerFluids(
        '2x gtceu:diode',
        'diode_copper',
        ['6x gtceu:fine_copper_wire', '2x gtceu:small_gallium_arsenide_dust', 'gtceu:glass_tube'],
        'gtceu:polyethylene 144',
        400,
        30
    );
    PartsAssemblerFluids(
        '3x gtceu:diode',
        'diode_annealed',
        ['6x gtceu:fine_annealed_copper_wire', '2x gtceu:small_gallium_arsenide_dust', 'gtceu:glass_tube'],
        'gtceu:polyethylene 144',
        400,
        30
    );
    PartsAssemblerFluids(
        '6x gtceu:transistor',
        'transistor',
        ['4x gtceu:silicon_foil', '3x gtceu:fine_tin_wire', '3x gtceu:fine_silver_wire'],
        'gtceu:polyethylene 216',
        240,
        120
    );
    PartsAssemblerFluids(
        '6x gtceu:capacitor',
        'capacitor',
        ['1x gtceu:polyethylene_foil', '2x gtceu:aluminium_foil', '2x gtceu:silver_bolt'],
        'gtceu:polyethylene 144',
        360,
        120
    );
    // SMD
    PartsAssemblerFluids(
        '32x gtceu:smd_capacitor',
        'smd_capacitor',
        ['8x gtceu:capacitor', '3x gtceu:tantalum_foil', '2x gtceu:polyvinyl_chloride_foil'],
        'gtceu:polyethylene 144',
        320,
        480
    );
    PartsAssemblerFluids(
        '32x gtceu:smd_diode',
        'smd_diode',
        ['2x gtceu:gallium_arsenide_dust', '8x gtceu:platinum_foil', 'kubejs:silicon_chip'],
        'gtceu:polyethylene 288',
        400,
        480
    );
    PartsAssemblerFluids(
        '32x gtceu:smd_transistor',
        'smd_transistor',
        ['3x gtceu:gallium_foil', '8x gtceu:fine_tantalum_wire', '4x gtceu:fine_cupronickel_wire'],
        'gtceu:polyethylene 216',
        320,
        480
    );
    PartsAssemblerFluids(
        '32x gtceu:smd_resistor',
        'smd_resistor',
        ['1x gtceu:graphene_dust', '10x gtceu:fine_tantalum_wire', '4x gtceu:silicone_rubber_foil'],
        'gtceu:polyethylene 144',
        360,
        480
    );
    PartsAssemblerFluids(
        '32x gtceu:smd_inductor',
        'smd_inductor',
        ['3x gtceu:nickel_zinc_ferrite_ring', '4x gtceu:fine_tantalum_wire', '2x gtceu:silicon_dust'],
        'gtceu:polyethylene 216',
        440,
        480
    );

    // Boards
    const BoardsAssemblerFluids = (output, recipeID, inputs, fluid, duration, EUt) => {
        event.recipes.gtceu
            .assembler(id(recipeID))
            .itemInputs(inputs)
            .inputFluids(fluid)
            .itemOutputs(output)
            .duration(duration)
            .EUt(EUt);
    };
    const BoardsChemicalReactor = (output, recipeID, inputs, fluids, duration, EUt) => {
        event.recipes.gtceu
            .chemical_reactor(id(recipeID))
            .itemInputs(inputs)
            .inputFluids(fluids)
            .itemOutputs(output)
            .duration(duration)
            .EUt(EUt);
        event.recipes.gtceu
            .large_chemical_reactor(id(recipeID))
            .itemInputs(inputs)
            .inputFluids(fluids)
            .itemOutputs(output)
            .duration(duration)
            .EUt(EUt);
    };
    BoardsAssemblerFluids(
        'gtceu:resin_circuit_board',
        'resin_circuit_board',
        ['gtceu:wood_plate', '2x gtceu:copper_foil'],
        'gtceu:glue 250',
        200,
        4
    );
    BoardsAssemblerFluids(
        'gtceu:resin_printed_circuit_board',
        'resin_printed_circuit_board',
        ['gtceu:resin_circuit_board', '8x gtceu:fine_copper_wire'],
        'gtceu:glue 100',
        200,
        4
    );
    BoardsAssemblerFluids(
        'gtceu:phenolic_circuit_board',
        'phenolic_circuit_board',
        ['gtceu:wood_plate', '2x gtceu:silver_foil'],
        'gtceu:phenol 50',
        100,
        60
    );
    BoardsChemicalReactor(
        'gtceu:phenolic_printed_circuit_board',
        'phenolic_printed_circuit_board',
        ['gtceu:phenolic_circuit_board', '12x gtceu:fine_silver_wire'],
        'gtceu:sodium_persulfate 300',
        300,
        120
    );
    BoardsChemicalReactor(
        '2x gtceu:plastic_circuit_board',
        'plastic_circuit_board_ptfe',
        ['gtceu:polytetrafluoroethylene_plate', '6x gtceu:gold_foil'],
        'gtceu:sulfuric_acid 250',
        240,
        240
    );
    BoardsChemicalReactor(
        '4x gtceu:plastic_circuit_board',
        'plastic_circuit_board_pbi',
        ['gtceu:polybenzimidazole_plate', '6x gtceu:gold_foil'],
        'gtceu:sulfuric_acid 250',
        240,
        240
    );
    BoardsChemicalReactor(
        '12x gtceu:plastic_circuit_board',
        'plastic_circuit_board_peek',
        ['gtceu:polyether_ether_ketone_plate', '6x gtceu:gold_foil'],
        'gtceu:sulfuric_acid 250',
        240,
        240
    );
    BoardsChemicalReactor(
        'gtceu:plastic_printed_circuit_board',
        'plastic_circuit_board',
        ['gtceu:plastic_circuit_board', '8x gtceu:fine_gold_wire'],
        'gtceu:iron_iii_chloride 375',
        300,
        120
    );
});
