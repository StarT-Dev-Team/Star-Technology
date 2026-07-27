ServerEvents.recipes((event) => {
    const id = global.id;

    [
        'gtceu:circuit_assembler/quantum_mainframe_zpm',
        'gtceu:circuit_assembler/quantum_mainframe_zpm_soldering_alloy',
        'gtceu:circuit_assembler/quantum_mainframe_zpm_asmd',
        'gtceu:circuit_assembler/quantum_mainframe_zpm_asmd_soldering_alloy',
        'gtceu:circuit_assembler/crystal_computer_zpm',
        'gtceu:circuit_assembler/crystal_computer_zpm_soldering_alloy',
        'gtceu:assembly_line/crystal_mainframe_uv',
        'gtceu:research_station/1_x_gtceu_crystal_processor_computer',
        'gtceu:assembly_line/wetware_super_computer_uv',
        'gtceu:research_station/1_x_gtceu_wetware_processor_assembly',
        'gtceu:assembly_line/wetware_mainframe_uhv',
        'gtceu:research_station/1_x_gtceu_wetware_processor_computer',
        'gtceu:circuit_assembler/wetware_board',
    ].forEach((idRemoved) => {
        event.remove({ id: idRemoved });
    });

    const asmdDiode = 'gtceu:advanced_smd_diode';
    const asmdInductor = 'gtceu:advanced_smd_inductor';
    const asmdTransistor = 'gtceu:advanced_smd_transistor';
    // const asmdResistor = 'gtceu:advanced_smd_resistor';
    const asmdCapacitor = 'gtceu:advanced_smd_capacitor';

    const lsmdDiode = 'kubejs:living_smd_diode';
    const lsmdInductor = 'kubejs:living_smd_inductor';
    const lsmdTransistor = 'kubejs:living_smd_transistor';
    const lsmdResistor = 'kubejs:living_smd_resistor';
    const lsmdCapacitor = 'kubejs:living_smd_capacitor';

    /**
     * @param {number} quant
     * @param {string} type
     * @param {string} mod
     * @param {string[]} inputs
     * @param {number} eu
     * @param {number} dura
     * @param {internal.com.gregtechceu.gtceu.api.machine.multiblock.CleanroomType | null} clean
     */
    const circuitAssembler = (quant, type, mod, inputs, eu, dura, clean) => {
        event.recipes.gtceu
            .circuit_assembler(id(type))
            .itemInputs(inputs)
            .itemOutputs(`${quant}x ${mod}:${type}`)
            .duration(dura)
            .cleanroom(clean)
            .EUt(eu);
    };

    /**
     * @param {string} type
     * @param {string} mod
     * @param {string[]} inputs
     * @param {string[]} fluids
     * @param {number} eut
     * @param {number} dura
     * @param {string} toScan
     */
    const assemblyLineCircuitNoRS = (type, mod, inputs, fluids, eut, dura, toScan) => {
        $(
            event.recipes.gtceu
                .assembly_line(id(type))
                .itemInputs(inputs)
                .inputFluids(fluids)
                .itemOutputs(`${mod}:${type}`)
                .duration(dura)
                .EUt(eut)
        ).scannerResearch((researchRecipeBuilder) =>
            researchRecipeBuilder
                .researchStack(Item.of(toScan))
                .duration(dura * 2)
                .EUt(eut / 4)
        );
    };

    /**
     * @param {number} quant
     * @param {string} type
     * @param {string} mod
     * @param {string[]} inputs
     * @param {string[]} fluids
     * @param {number} eut
     * @param {number} dura
     * @param {string} from
     * @param {number} cwu
     * @param {number} eutFrom
     */
    const assemblyLineCircuitRS = (quant, type, mod, inputs, fluids, eut, dura, from, cwu, eutFrom) => {
        event.recipes.gtceu
            .assembly_line(id(type))
            .itemInputs(inputs)
            .inputFluids(fluids)
            .itemOutputs(`${quant}x ${mod}:${type}`)
            .duration(dura)
            .stationResearch((researchRecipeBuilder) =>
                researchRecipeBuilder.researchStack(from).EUt(eutFrom).CWUt(cwu)
            )
            .EUt(eut);
    };

    //Rebalancing
    assemblyLineCircuitNoRS(
        'quantum_processor_mainframe',
        'gtceu',
        [
            '2x gtceu:hssg_frame',
            '2x gtceu:quantum_processor_computer',
            '24x gtceu:ram_chip',
            '2x gtceu:hpic_chip',
            `8x ${asmdInductor}`,
            `16x ${asmdCapacitor}`,
            `8x ${asmdDiode}`,
            '8x gtceu:platinum_single_wire',
        ],
        ['gtceu:soldering_alloy 576'],
        30720,
        600,
        'gtceu:quantum_processor_computer'
    );

    assemblyLineCircuitNoRS(
        'crystal_processor_computer',
        'gtceu',
        [
            'gtceu:multilayer_fiber_reinforced_printed_circuit_board',
            '2x gtceu:crystal_processor_assembly',
            `4x ${asmdDiode}`,
            '24x gtceu:ram_chip',
            '16x gtceu:nor_memory_chip',
            '32x gtceu:nand_memory_chip',
            '24x gtceu:fine_niobium_titanium_wire',
        ],
        ['gtceu:soldering_alloy 576'],
        30720,
        400,
        'gtceu:crystal_processor_assembly'
    );

    assemblyLineCircuitRS(
        1,
        'crystal_processor_mainframe',
        'gtceu',
        [
            '2x gtceu:hsse_frame',
            '2x gtceu:crystal_processor_computer',
            '32x gtceu:ram_chip',
            '4x gtceu:hpic_chip',
            `12x ${asmdInductor}`,
            `24x ${asmdCapacitor}`,
            `12x ${asmdDiode}`,
            `16x ${asmdTransistor}`,
            '12x gtceu:niobium_titanium_single_wire',
            '4x gtceu:yttrium_barium_cuprate_plate',
        ],
        ['gtceu:soldering_alloy 1152'],
        61440,
        1000,
        'gtceu:crystal_processor_computer',
        16,
        38400
    );

    circuitAssembler(
        2,
        'wetware_processor',
        'gtceu',
        [
            'gtceu:neuro_processing_unit',
            'gtceu:crystal_cpu',
            'gtceu:nano_cpu_chip',
            `4x ${lsmdCapacitor}`,
            `4x ${lsmdTransistor}`,
            '8x gtceu:fine_yttrium_barium_cuprate_wire',
        ],
        38400,
        100,
        CleanroomType.CLEANROOM
    );

    circuitAssembler(
        2,
        'wetware_processor_assembly',
        'gtceu',
        [
            'gtceu:wetware_printed_circuit_board',
            '2x gtceu:wetware_processor',
            `3x ${lsmdInductor}`,
            `6x ${lsmdCapacitor}`,
            '6x kubejs:qram_chip',
            '16x gtceu:fine_yttrium_barium_cuprate_wire',
        ],
        38400,
        200,
        CleanroomType.CLEANROOM
    );

    assemblyLineCircuitRS(
        1,
        'wetware_processor_computer',
        'gtceu',
        [
            'gtceu:wetware_printed_circuit_board',
            '2x gtceu:wetware_processor_assembly',
            `4x ${lsmdDiode}`,
            '12x kubejs:qram_chip',
            '24x gtceu:nor_memory_chip',
            '48x gtceu:nand_memory_chip',
            '32x gtceu:fine_yttrium_barium_cuprate_wire',
            '2x gtceu:europium_plate',
        ],
        ['gtceu:indium_tin_lead_cadmium_soldering_alloy 864', 'gtceu:polybenzimidazole 576'],
        64000,
        600,
        'gtceu:wetware_processor_assembly',
        64,
        38400
    );

    assemblyLineCircuitRS(
        1,
        'wetware_processor_mainframe',
        'gtceu',
        [
            '2x gtceu:tritanium_frame',
            '2x gtceu:wetware_processor_computer',
            '24x kubejs:qram_chip',
            '2x gtceu:uhpic_chip',
            `12x ${lsmdInductor}`,
            `16x ${lsmdCapacitor}`,
            `12x ${lsmdDiode}`,
            `12x ${lsmdResistor}`,
            `12x ${lsmdTransistor}`,
            '16x gtceu:yttrium_barium_cuprate_single_wire',
            '4x gtceu:europium_plate',
        ],
        ['gtceu:indium_tin_lead_cadmium_soldering_alloy 1728', 'gtceu:polybenzimidazole 1152'],
        300000,
        1400,
        'gtceu:wetware_processor_computer',
        96,
        64000
    );

    //Runics
    circuitAssembler(
        3,
        'runic_processor',
        'kubejs',
        [
            'kubejs:runic_convergence_processing_unit',
            'gtceu:crystal_soc',
            'gtceu:advanced_soc',
            `8x ${lsmdCapacitor}`,
            `8x ${lsmdTransistor}`,
            '8x gtceu:fine_europium_wire',
        ],
        120000,
        200,
        CleanroomType.CLEANROOM
    );

    assemblyLineCircuitRS(
        2,
        'runic_processor_assembly',
        'kubejs',
        [
            'kubejs:runic_printed_circuit_board',
            '2x kubejs:runic_processor',
            '4x gtceu:ancient_runicalium_bolt',
            `6x ${lsmdInductor}`,
            `12x ${lsmdCapacitor}`,
            '16x kubejs:qram_chip',
            '16x gtceu:fine_europium_wire',
        ],
        [
            'gtceu:indium_tin_lead_cadmium_soldering_alloy 576',
            'gtceu:polyether_ether_ketone 216',
            'gtceu:runic_convergence_infusion 500',
        ],
        240000,
        400,
        'kubejs:runic_processor',
        128,
        120000
    );

    assemblyLineCircuitRS(
        1,
        'runic_processor_computer',
        'kubejs',
        [
            'kubejs:runic_printed_circuit_board',
            '2x kubejs:runic_processor_assembly',
            `8x ${lsmdDiode}`,
            '24x kubejs:qram_chip',
            '8x kubejs:hyper_nor_memory_chip',
            '16x kubejs:hyper_nand_memory_chip',
            '32x gtceu:fine_europium_wire',
            '32x gtceu:polyether_ether_ketone_foil',
            '4x gtceu:enriched_naquadah_tiny_fluid_pipe',
            '2x gtceu:naquadah_alloy_plate',
        ],
        [
            'gtceu:indium_tin_lead_cadmium_soldering_alloy 1152',
            'gtceu:polyether_ether_ketone 576',
            'gtceu:runic_convergence_infusion 750',
        ],
        240000,
        800,
        'kubejs:runic_processor_assembly',
        128,
        160000
    );

    assemblyLineCircuitRS(
        1,
        'runic_processor_mainframe',
        'kubejs',
        [
            '2x gtceu:ancient_runicalium_frame',
            '2x kubejs:runic_processor_computer',
            '32x kubejs:qram_chip',
            '4x gtceu:uhpic_chip',
            `24x ${lsmdInductor}`,
            `32x ${lsmdCapacitor}`,
            `24x ${lsmdDiode}`,
            `24x ${lsmdResistor}`,
            `24x ${lsmdTransistor}`,
            '24x gtceu:europium_single_wire',
            '64x gtceu:polyether_ether_ketone_foil',
            '4x gtceu:trinaquadalloy_plate',
        ],
        [
            'gtceu:indium_tin_lead_cadmium_soldering_alloy 2304',
            'gtceu:polyether_ether_ketone 864',
            'gtceu:runic_convergence_infusion 1000',
        ],
        600000,
        1800,
        'kubejs:runic_processor_computer',
        160,
        400000
    );

    // === Misc ===
    event.recipes.gtceu
        .mixer(id('raw_growth_medium_boosted'))
        .itemInputs(
            '4x gtceu:meat_dust',
            '4x gtceu:salt_dust',
            '3x gtceu:calcium_dust',
            '4x gtceu:agar_dust',
            '1x gtceu:strontium_dust'
        )
        .inputFluids('gtceu:mutagen 4000')
        .outputFluids('gtceu:raw_growth_medium 7500')
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
        .duration(1500)
        .EUtVA(IV);

    // === Boards and PUs ===
    event.recipes.gtceu
        .circuit_assembler(id('wetware_circuit_board'))
        .itemInputs(
            '16x gtceu:multilayer_fiber_reinforced_circuit_board',
            'gtceu:petri_dish',
            'gtceu:luv_electric_pump',
            'gtceu:luv_sensor',
            '2x #gtceu:circuits/iv',
            '16x gtceu:osmiridium_foil'
        )
        .inputFluids('gtceu:sterilized_growth_medium 4000')
        .itemOutputs('16x gtceu:wetware_circuit_board')
        .duration(1200)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUtVA(LuV);

    event.recipes.gtceu
        .circuit_assembler(id('runic_circuit_board'))
        .itemInputs(
            '32x gtceu:wetware_circuit_board',
            '1x start_core:enriched_naquadah_fluid_cell',
            'gtceu:zpm_electric_pump',
            'gtceu:zpm_sensor',
            '2x #gtceu:circuits/luv',
            '16x gtceu:naquadah_alloy_foil'
        )
        .inputFluids('gtceu:runic_convergence_infusion 7500')
        .itemOutputs('32x kubejs:runic_circuit_board')
        .duration(1200)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUtVA(ZPM);

    event.recipes.gtceu
        .circuit_assembler(id('runic_convergence_processing_unit'))
        .itemInputs(
            '1x kubejs:runic_printed_circuit_board',
            '4x gtceu:uhpic_chip',
            '8x gtceu:polyether_ether_ketone_small_fluid_pipe',
            '8x gtceu:trinaquadalloy_plate',
            '16x gtceu:polybenzimidazole_foil',
            '8x gtceu:zircalloy_4_bolt'
        )
        .inputFluids('gtceu:runic_convergence_infusion 250')
        .itemOutputs('1x kubejs:runic_convergence_processing_unit')
        .duration(600)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUtVA(UV);

    event.recipes.gtceu
        .circuit_assembler(id('draconic_circuit_board'))
        .itemInputs(
            '48x kubejs:runic_circuit_board',
            '1x start_core:neutronium_drum',
            'gtceu:uv_electric_pump',
            '1x gtceu:uv_sensor',
            '2x #gtceu:circuits/zpm',
            '16x gtceu:aurourium_foil'
        )
        .inputFluids('gtceu:dragon_breath 2000')
        .itemOutputs('48x kubejs:draconic_circuit_board')
        .duration(1200)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUtVA(UV);

    event.recipes.gtceu
        .circuit_assembler(id('draconic_processing_unit'))
        .itemInputs(
            '1x kubejs:draconic_printed_circuit_board',
            '4x kubejs:draconic_brain_matter_cells',
            '8x gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate_small_fluid_pipe',
            '8x gtceu:void_plate',
            '16x gtceu:polyimide_foil',
            '8x gtceu:tritan_steel_bolt'
        )
        .inputFluids('gtceu:dragon_breath 75')
        .itemOutputs('1x kubejs:draconic_processing_unit')
        .duration(600)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUtVHA(UHV);

    event.recipes.gtceu
        .circuit_assembler(id('abyssal_circuit_board'))
        .itemInputs(
            '64x kubejs:draconic_circuit_board',
            '1x kubejs:blank_injection_catalyst',
            'gtceu:uhv_electric_pump',
            '1x gtceu:uhv_sensor',
            '2x #gtceu:circuits/uv',
            '16x gtceu:draco_abyssal_foil'
        )
        .inputFluids('gtceu:draconic_enrichment_serum 6000')
        .itemOutputs('64x kubejs:abyssal_circuit_board')
        .duration(1200)
        .cleanroom($StarTAbyssalContainmentMachine.ABYSSAL_CONTAINMENT_ROOM)
        .EUtVHA(UEV);

    event.recipes.gtceu
        .circuit_assembler(id('abyssal_processing_unit'))
        .itemInputs(
            '1x kubejs:abyssal_printed_circuit_board',
            '16x kubejs:draconic_brain_matter_cells',
            '8x gtceu:nyanium_small_fluid_pipe',
            '8x gtceu:abyssal_alloy_plate',
            '16x gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate_foil',
            '8x gtceu:hvga_steel_bolt'
        )
        .inputFluids('gtceu:draconic_enrichment_serum 200')
        .itemOutputs('1x kubejs:abyssal_processing_unit')
        .duration(1200)
        .cleanroom($StarTAbyssalContainmentMachine.ABYSSAL_CONTAINMENT_ROOM)
        .EUtVHA(UEV);

    // === Wafers and Chips ===

    event.recipes.gtceu
        .chemical_reactor(id('uepic_wafer'))
        .itemInputs('gtceu:uhpic_wafer', '4x gtceu:silicon_carbide_over_bismuth_tritelluride_dust')
        .inputFluids('gtceu:neutronium 576')
        .itemOutputs('kubejs:uepic_wafer')
        .duration(1200)
        .EUtVA(ZPM)
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu
        .cutter(id('uepic_chip'))
        .itemInputs('kubejs:uepic_wafer')
        .itemOutputs('2x kubejs:uepic_chip')
        .duration(900)
        .EUtVA(ZPM)
        .cleanroom(CleanroomType.STERILE_CLEANROOM);

    event.recipes.gtceu
        .draco_infusion(id('uipic_wafer'))
        .itemInputs(
            'kubejs:uepic_wafer',
            '1x gtceu:draconyallium_foil',
            '16x gtceu:silicon_carbide_over_bismuth_tritelluride_dust',
            'gtceu:naquadah_foil',
            'gtceu:neutronium_foil',
            '4x kubejs:draconic_stem_cells',
            'gtceu:vanadium_gallium_foil'
        )
        .inputFluids('gtceu:pure_dragon_breath 2000')
        .itemOutputs('kubejs:uipic_wafer')
        .duration(3600)
        .EUtVA(UV);

    event.recipes.gtceu
        .cutter(id('uipic_chip'))
        .itemInputs('kubejs:uipic_wafer')
        .itemOutputs('2x kubejs:uipic_chip')
        .duration(900)
        .EUtVA(UV)
        .cleanroom(CleanroomType.STERILE_CLEANROOM);

    event.recipes.gtceu
        .cutter(id('draco_soc'))
        .itemInputs('kubejs:draco_advanced_soc_wafer')
        .itemOutputs('6x kubejs:draco_advanced_soc')
        .duration(1800)
        .EUtVA(UV)
        .cleanroom(CleanroomType.STERILE_CLEANROOM);

    event.recipes.gtceu
        .cutter(id('draco_wafer'))
        .itemInputs('kubejs:draco_boule')
        .itemOutputs('64x kubejs:draco_wafer', '64x kubejs:draco_wafer')
        .duration(3200)
        .EUtVA(ZPM)
        .cleanroom(CleanroomType.STERILE_CLEANROOM);

    event.recipes.gtceu
        .chemical_reactor(id('hyper_nand_memory_wafer'))
        .itemInputs('gtceu:nand_memory_wafer', '2x gtceu:strontium_titanium_oxide_dust')
        .inputFluids('gtceu:carbon 500')
        .itemOutputs('kubejs:hyper_nand_memory_wafer')
        .duration(1200)
        .EUtVHA(LuV)
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu
        .cutter(id('hyper_nand_memory_chip'))
        .itemInputs('kubejs:hyper_nand_memory_wafer')
        .itemOutputs('12x kubejs:hyper_nand_memory_chip')
        .duration(900)
        .EUtVA(IV)
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu
        .chemical_reactor(id('hyper_hyper_nor_memory_wafer'))
        .itemInputs('gtceu:nor_memory_wafer', '2x gtceu:strontium_titanium_oxide_dust')
        .inputFluids('gtceu:carbon 500')
        .itemOutputs('kubejs:hyper_nor_memory_wafer')
        .duration(1200)
        .EUtVHA(LuV)
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu
        .cutter(id('hyper_nor_memory_chip'))
        .itemInputs('kubejs:hyper_nor_memory_wafer')
        .itemOutputs('6x kubejs:hyper_nor_memory_chip')
        .duration(900)
        .EUtVA(IV)
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu
        .chemical_reactor(id('qram_wafer'))
        .itemInputs('gtceu:ram_wafer', '2x gtceu:silicon_carbide_over_bismuth_tritelluride_dust')
        .inputFluids('gtceu:radon 500')
        .itemOutputs('kubejs:qram_wafer')
        .duration(1200)
        .EUtVHA(ZPM)
        .cleanroom(CleanroomType.STERILE_CLEANROOM);

    event.recipes.gtceu
        .cutter(id('qram_chip'))
        .itemInputs('kubejs:qram_wafer')
        .itemOutputs('12x kubejs:qram_chip')
        .duration(900)
        .EUtVA(LuV)
        .cleanroom(CleanroomType.STERILE_CLEANROOM);

    event.recipes.gtceu
        .chemical_reactor(id('stellar_ram_wafer'))
        .itemInputs('kubejs:qram_wafer', '2x gtceu:void_dust')
        .inputFluids('gtceu:borealic_concentrate 432')
        .itemOutputs('kubejs:stellar_ram_wafer')
        .duration(1200)
        .EUtVHA(UHV)
        .cleanroom($StarTAbyssalContainmentMachine.ABYSSAL_CONTAINMENT_ROOM);

    event.recipes.gtceu
        .cutter(id('stellar_ram_chip'))
        .itemInputs('kubejs:stellar_ram_wafer')
        .itemOutputs('8x kubejs:stellar_ram_chip')
        .duration(900)
        .EUtVA(UV)
        .cleanroom($StarTAbyssalContainmentMachine.ABYSSAL_CONTAINMENT_ROOM);

    // === Wafer Engraving ===

    const WAFER_DURATION = {
        silicon: 20,
        phosphorous: 50,
        naquadah: 200,
        neutronium: 500,
        draconic: 900,
    };

    const WAFER_QUANTITY = {
        silicon: 64,
        phosphorous: 32,
        naquadah: 8,
        neutronium: 4,
        draconic: 1,
    };

    /**
     * @param {string} modID
     * @param {string} output
     * @param {keyof typeof WAFER_DURATION} waferTier
     * @param {string} lens
     * @param {boolean} lensIsTag
     */
    const dracoWaferEngraving = (modID, output, waferTier, lens, lensIsTag) => {
        let duration = WAFER_DURATION[waferTier];
        let quantity = WAFER_QUANTITY[waferTier];

        event.recipes.gtceu
            .laser_engraver(id(`engrave_${output}_draco`))
            .itemInputs('kubejs:draco_wafer')
            .notConsumable(lensIsTag ? `#forge:lenses/${lens}` : `gtceu:${lens}_lens`)
            .itemOutputs(`${quantity}x ${modID}:${output}_wafer`)
            .duration(duration)
            .EUtVA(LuV)
            .cleanroom(CleanroomType.CLEANROOM);
    };

    dracoWaferEngraving('gtceu', 'cpu', 'silicon', 'light_blue', true);
    dracoWaferEngraving('gtceu', 'ram', 'silicon', 'green', true);
    dracoWaferEngraving('gtceu', 'ilc', 'silicon', 'red', true);
    dracoWaferEngraving('gtceu', 'simple_soc', 'silicon', 'cyan_glass', false);
    dracoWaferEngraving('gtceu', 'soc', 'phosphorous', 'yellow_glass', false);
    dracoWaferEngraving('gtceu', 'advanced_soc', 'naquadah', 'purple', true);
    dracoWaferEngraving('gtceu', 'highly_advanced_soc', 'neutronium', 'black_glass', false);
    dracoWaferEngraving('gtceu', 'nand_memory', 'phosphorous', 'gray_glass', false);
    dracoWaferEngraving('gtceu', 'nor_memory', 'phosphorous', 'pink_glass', false);
    dracoWaferEngraving('gtceu', 'ulpic', 'silicon', 'blue', true);
    dracoWaferEngraving('gtceu', 'lpic', 'silicon', 'orange_glass', false);
    dracoWaferEngraving('gtceu', 'mpic', 'phosphorous', 'brown_glass', false);
    dracoWaferEngraving('kubejs', 'draco_advanced_soc', 'draconic', 'echo_shard', false);
});
