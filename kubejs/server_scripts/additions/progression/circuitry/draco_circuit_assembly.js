ServerEvents.recipes((event) => {
    const id = global.id;

    //Input Loaders
    const drCirBoard = 'kubejs:draconic_printed_circuit_board';
    const drCPU = 'kubejs:draconic_processing_unit';
    const abCirBoard = 'kubejs:abyssal_printed_circuit_board';
    const abCPU = 'kubejs:abyssal_processing_unit';
    const tra = 'kubejs:draconic_qmd_transistor';
    const res = 'kubejs:draconic_qmd_resistor';
    const cap = 'kubejs:draconic_qmd_capacitor';
    const dio = 'kubejs:draconic_qmd_diode';
    const ind = 'kubejs:draconic_qmd_inductor';
    const solder = 'gtceu:naquadated_soldering_alloy';
    const SGM = 'gtceu:sterilized_growth_medium';
    const DES = 'gtceu:draconic_enrichment_serum';
    const DB = 'gtceu:dragon_breath';
    const PEDOT_PSS = 'gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfonate';

    // === Controller ===

    event.recipes.gtceu
        .assembly_line(id('draco_circuit_assembler'))
        .itemInputs(
            'gtceu:void_frame',
            '6x kubejs:draco_ware_casing',
            '6x kubejs:uev_computational_matrix',
            '4x gtceu:uev_sensor',
            '8x gtceu:uev_robot_arm',
            '4x gtceu:uev_conveyor_module',
            '32x gtceu:fine_enriched_pallarovium_alloy_wire',
            '8x gtceu:calamatium_screw'
        )
        .inputFluids(
            'gtceu:indium_tin_lead_cadmium_soldering_alloy 125000',
            `${PEDOT_PSS} 75000`,
            `${SGM} 50000`,
            'gtceu:isovol 28800'
        )
        .itemOutputs('gtceu:draco_circuit_assembler')
        .duration(4800)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder
                .researchStack(Item.of('gtceu:large_circuit_assembler'))
                .EUt(GTValues.VA[UEV])
                .CWUt(192)
        )
        .EUtVHA(UIV);

    // === Draconic Circuits ===

    /**
     *
     * @param {string} type
     * @param {string} output
     * @param {string[]} ItemIn
     * @param {string[]} FluidIn
     * @param {number} Dur
     * @param {number} eu
     * @param {string} researchItem
     * @param {number} cwu
     */
    const dracoCircuitAssembler = (type, output, ItemIn, FluidIn, Dur, eu, researchItem, cwu) => {
        event.recipes.gtceu
            .draco_circuit_assembler(id(type))
            .itemInputs(ItemIn)
            .inputFluids(FluidIn)
            .itemOutputs(output)
            .stationResearch((researchRecipeBuilder) =>
                researchRecipeBuilder
                    .researchStack(Item.of(`${researchItem}`))
                    .EUt(eu / 2)
                    .CWUt(cwu)
            )
            .duration(Dur)
            .EUt(eu);

        let researchBaseID = `${researchItem.replace(':', '_')}`;
        let researchRecipeID = `1_x_${researchBaseID}`;
        let researchNBT = `1x_${researchBaseID}`;
        let dataItem =
            cwu > 0 && cwu < 32 ? 'gtceu:data_orb' : cwu < 160 ? 'gtceu:data_module' : 'start_core:data_dna_disk';
        let recipeType = 'gtceu:draco_circuit_assembler';

        event.recipes.gtceu
            .research_station(researchRecipeID)
            .itemInputs(dataItem)
            .itemInputs(researchItem)
            .itemOutputs(
                Item.of(
                    `${dataItem}`,
                    `{assembly_line_research:{research_id:"${researchNBT}",research_type:"${recipeType}"}}`
                )
            )
            .CWUt(cwu)
            .totalCWU(Dur * cwu * 3)
            .EUt(eu / 2);
    };

    // === Draconic Circuits ===

    dracoCircuitAssembler(
        'draconic_microchip_processor',
        '4x kubejs:draconic_microchip_processor',
        [drCirBoard, 'gtceu:crystal_soc', `4x ${res}`, `4x ${cap}`, `4x ${tra}`, '4x gtceu:fine_europium_wire'],
        [`${solder} 72`, `${PEDOT_PSS} 36`, `${DB} 50`],
        400,
        GTValues.VHA[UHV],
        drCirBoard,
        144
    );
    dracoCircuitAssembler(
        'draconic_processor',
        '2x kubejs:draconic_processor',
        [
            drCPU,
            'kubejs:draconic_microchip_processor',
            'gtceu:highly_advanced_soc',
            `6x ${res}`,
            `6x ${cap}`,
            `6x ${tra}`,
            '8x gtceu:fine_polonium_bismide_wire',
        ],
        [`${solder} 144`, `${PEDOT_PSS} 72`, `${DB} 75`],
        400,
        GTValues.VHA[UHV],
        'kubejs:draconic_microchip_processor',
        144
    );
    dracoCircuitAssembler(
        'draconic_processor_assembly',
        '2x kubejs:draconic_processor_assembly',
        [
            drCirBoard,
            '2x kubejs:draconic_processor',
            '4x gtceu:void_bolt',
            '32x kubejs:qram_chip',
            `6x ${ind}`,
            `12x ${cap}`,
            '16x gtceu:fine_polonium_bismide_wire',
            'gtceu:aurourium_plate',
        ],
        [`${solder} 288`, `${PEDOT_PSS} 144`, `${DB} 125`],
        800,
        GTValues.VA[UHV],
        'kubejs:draconic_processor',
        160
    );
    dracoCircuitAssembler(
        'draconic_processor_computer',
        'kubejs:draconic_processor_computer',
        [
            drCirBoard,
            '2x kubejs:draconic_processor_assembly',
            `8x ${dio}`,
            '48x kubejs:qram_chip',
            '16x kubejs:hyper_nor_memory_chip',
            '32x kubejs:hyper_nand_memory_chip',
            '16x gtceu:void_foil',
            '4x gtceu:neutronium_tiny_fluid_pipe',
            `32x ${PEDOT_PSS}_foil`,
            '32x gtceu:fine_polonium_bismide_wire',
            '2x gtceu:aurourium_plate',
        ],
        [`${solder} 1152`, `${PEDOT_PSS} 576`, `${DB} 250`],
        1200,
        GTValues.VA[UHV],
        'kubejs:draconic_processor_assembly',
        176
    );
    dracoCircuitAssembler(
        'draconic_processor_mainframe',
        'kubejs:draconic_processor_mainframe',
        [
            '2x gtceu:void_frame',
            '2x kubejs:draconic_processor_computer',
            '64x kubejs:qram_chip',
            '2x kubejs:uepic_chip',
            `24x ${ind}`,
            `32x ${cap}`,
            `24x ${dio}`,
            `24x ${res}`,
            `24x ${tra}`,
            '32x gtceu:void_foil',
            '1x gtceu:energy_module',
            '64x gtceu:aerogel_foil',
            '32x gtceu:polonium_bismide_single_wire',
            '4x gtceu:aurourium_plate',
        ],
        [`${solder} 2304`, `${PEDOT_PSS} 1152`, `${DB} 500`],
        1800,
        GTValues.VA[UEV],
        'kubejs:draconic_processor_computer',
        192
    );
    dracoCircuitAssembler(
        'cheap_draconic_microchip_processor',
        '8x kubejs:draconic_microchip_processor',
        [
            drCirBoard,
            'kubejs:draco_advanced_soc',
            '4x gtceu:fine_europium_wire',
            '4x gtceu:yttrium_barium_cuprate_bolt',
        ],
        [`${solder} 72`, `${PEDOT_PSS} 18`, `${DB} 25`],
        100,
        GTValues.VHA[UEV] * 1.2,
        'kubejs:draco_advanced_soc',
        160
    );
    dracoCircuitAssembler(
        'cheap_draconic_processor',
        '4x kubejs:draconic_processor',
        [drCPU, 'kubejs:draco_advanced_soc', '4x gtceu:fine_polonium_bismide_wire', '4x gtceu:europium_bolt'],
        [`${solder} 72`, `${PEDOT_PSS} 36`, `${DB} 50`],
        100,
        GTValues.VHA[UIV] * 1.2,
        'kubejs:draco_advanced_soc_wafer',
        160
    );

    // === Abyssal Circuits ===

    dracoCircuitAssembler(
        'abyssal_processor',
        '2x kubejs:abyssal_processor',
        [
            abCPU,
            '1x gtceu:crystal_soc',
            '1x gtceu:highly_advanced_soc',
            '2x gtceu:qbit_cpu_chip',
            `12x ${res}`,
            `12x ${cap}`,
            `12x ${tra}`,
            '8x gtceu:fine_lepton_resonant_thallium_antimonide_wire',
        ],
        [`${solder} 576`, `${PEDOT_PSS} 288`, `${DES} 125`],
        800,
        GTValues.VA[UEV],
        abCirBoard,
        200
    );
    dracoCircuitAssembler(
        'abyssal_processor_assembly',
        '2x kubejs:abyssal_processor_assembly',
        [
            abCirBoard,
            '2x kubejs:abyssal_processor',
            '4x gtceu:hvga_steel_bolt',
            '16x kubejs:stellar_ram_chip',
            `12x ${ind}`,
            `24x ${cap}`,
            '16x gtceu:fine_lepton_resonant_thallium_antimonide_wire',
            'gtceu:draco_abyssal_plate',
        ],
        [`${solder} 1152`, `${PEDOT_PSS} 576`, `${DES} 250`],
        800,
        GTValues.VA[UEV],
        'kubejs:abyssal_processor',
        216
    );
    dracoCircuitAssembler(
        'abyssal_processor_computer',
        'kubejs:abyssal_processor_computer',
        [
            abCirBoard,
            '2x kubejs:abyssal_processor_assembly',
            `16x ${dio}`,
            '24x kubejs:stellar_ram_chip',
            '32x kubejs:hyper_nor_memory_chip',
            '64x kubejs:hyper_nand_memory_chip',
            '8x gtceu:hvga_steel_bolt',
            '32x gtceu:draconyallium_foil',
            '4x gtceu:nyanium_tiny_fluid_pipe',
            `64x ${PEDOT_PSS}_foil`,
            '32x gtceu:fine_lepton_resonant_thallium_antimonide_wire',
            '2x gtceu:draco_abyssal_plate',
        ],
        [`${solder} 2304`, `${PEDOT_PSS} 1152`, `${DES} 500`],
        1200,
        GTValues.VA[UEV],
        'kubejs:abyssal_processor_assembly',
        240
    );
    dracoCircuitAssembler(
        'abyssal_processor_mainframe',
        'kubejs:abyssal_processor_mainframe',
        [
            '2x gtceu:draco_abyssal_frame',
            '2x kubejs:abyssal_processor_computer',
            '32x kubejs:stellar_ram_chip',
            '4x kubejs:uepic_chip',
            `48x ${ind}`,
            `64x ${cap}`,
            `48x ${dio}`,
            `48x ${res}`,
            `48x ${tra}`,
            '64x gtceu:draconyallium_foil',
            '1x gtceu:energy_cluster',
            `128x ${PEDOT_PSS}_foil`,
            '1x kubejs:draconic_eye',
            '16x gtceu:hvga_steel_foil',
            '48x gtceu:fine_lepton_resonant_thallium_antimonide_wire',
            '2x gtceu:draco_abyssal_plate',
        ],
        [`${solder} 4608`, `${PEDOT_PSS} 2304`, `${DES} 1000`],
        1800,
        GTValues.VA[UIV],
        'kubejs:abyssal_processor_computer',
        256
    );
    dracoCircuitAssembler(
        'cheap_abyssal_processor',
        '4x kubejs:abyssal_processor',
        [
            abCPU,
            'kubejs:rift_infused_soc',
            '4x gtceu:fine_lepton_resonant_thallium_antimonide_wire',
            '4x gtceu:polonium_bismide_bolt',
        ],
        [`${solder} 432`, `${PEDOT_PSS} 216`, `${DES} 75`],
        100,
        GTValues.VHA[UIV] * 1.2,
        'kubejs:rift_infused_soc',
        216
    );

    // === Bulk Circuits ===

    /**
     * @param {number} quant
     * @param {string} output
     * @param {string[]} ItemIn
     * @param {string[]} FluidIn
     * @param {number} Dur
     * @param {number} eu
     * @param {number} cwu
     */
    const dracoBulkCircuiter = (quant, output, ItemIn, FluidIn, Dur, eu, cwu) => {
        event.recipes.gtceu
            .draco_bulk_circuiter(id(output.split(':')[1]))
            .itemInputs(ItemIn)
            .inputFluids(FluidIn)
            .itemOutputs(quant + 'x ' + output)
            .stationResearch((researchRecipeBuilder) =>
                researchRecipeBuilder
                    .researchStack(Item.of(`${output}`))
                    .EUt(eu / 2)
                    .CWUt(cwu)
            )
            .duration(Dur)
            .EUt(eu);

        let researchBaseID = `${output.replace(':', '_')}`;
        let researchRecipeID = `1_x_${researchBaseID}`;
        let researchNBT = `1x_${researchBaseID}`;
        let dataItem =
            cwu > 0 && cwu < 32 ? 'gtceu:data_orb' : cwu < 160 ? 'gtceu:data_module' : 'start_core:data_dna_disk';
        let recipeType = 'gtceu:draco_bulk_circuiter';

        event.recipes.gtceu
            .research_station(researchRecipeID)
            .itemInputs(dataItem)
            .itemInputs(output)
            .itemOutputs(
                Item.of(
                    `${dataItem}`,
                    `{assembly_line_research:{research_id:"${researchNBT}",research_type:"${recipeType}"}}`
                )
            )
            .CWUt(cwu)
            .totalCWU(Dur * cwu)
            .EUt(eu / 2);
    };

    dracoBulkCircuiter(
        24,
        'kubejs:ulv_universal_circuit',
        [
            'gtceu:plastic_printed_circuit_board',
            'gtceu:simple_soc',
            '2x gtceu:red_alloy_bolt',
            '2x gtceu:fine_tin_wire',
        ],
        ['gtceu:soldering_alloy 72'],
        200,
        GTValues.VA[HV] / 3.5,
        4
    );
    dracoBulkCircuiter(
        12,
        'kubejs:lv_universal_circuit',
        ['gtceu:plastic_printed_circuit_board', 'gtceu:soc', '2x gtceu:fine_copper_wire', '2x gtceu:tin_bolt'],
        ['gtceu:soldering_alloy 72'],
        25,
        GTValues.VA[IV] / 3.5,
        12
    );
    dracoBulkCircuiter(
        8,
        'kubejs:mv_universal_circuit',
        [
            'gtceu:plastic_printed_circuit_board',
            'gtceu:soc',
            '4x gtceu:fine_red_alloy_wire',
            '4x gtceu:annealed_copper_bolt',
        ],
        ['gtceu:soldering_alloy 72'],
        25,
        GTValues.VA[LuV] / 3.5,
        24
    );
    dracoBulkCircuiter(
        8,
        'kubejs:hv_universal_circuit',
        [
            'gtceu:epoxy_printed_circuit_board',
            'gtceu:advanced_soc',
            '4x gtceu:fine_electrum_wire',
            '4x gtceu:platinum_bolt',
        ],
        ['gtceu:soldering_alloy 72'],
        25,
        GTValues.VA[ZPM] / 3.5,
        64
    );
    dracoBulkCircuiter(
        8,
        'kubejs:ev_universal_circuit',
        [
            'gtceu:fiber_reinforced_printed_circuit_board',
            'gtceu:advanced_soc',
            '12x gtceu:fine_platinum_wire',
            '8x gtceu:niobium_titanium_bolt',
        ],
        ['gtceu:soldering_alloy 72'],
        25,
        GTValues.VA[UV] / 3.5,
        96
    );
    dracoBulkCircuiter(
        8,
        'kubejs:iv_universal_circuit',
        [
            'gtceu:multilayer_fiber_reinforced_printed_circuit_board',
            'gtceu:crystal_soc',
            '8x gtceu:fine_niobium_titanium_wire',
            '8x gtceu:yttrium_barium_cuprate_bolt',
        ],
        ['gtceu:soldering_alloy 72'],
        50,
        GTValues.VA[UV] / 3.5,
        128
    );
    dracoBulkCircuiter(
        8,
        'kubejs:luv_universal_circuit',
        [
            'gtceu:neuro_processing_unit',
            'gtceu:highly_advanced_soc',
            '8x gtceu:fine_yttrium_barium_cuprate_wire',
            '8x gtceu:naquadah_bolt',
        ],
        ['gtceu:soldering_alloy 72'],
        50,
        GTValues.VA[UHV] / 3.5,
        144
    );
});
