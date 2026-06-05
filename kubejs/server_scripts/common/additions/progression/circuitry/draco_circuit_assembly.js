ServerEvents.recipes((event) => {
    const id = global.id;

    //Input Loaders
    const DrCirBoard = 'kubejs:draconic_printed_circuit_board';
    const DrCPU = 'kubejs:draconic_processing_unit';
    const AbCirBoard = 'kubejs:abyssal_printed_circuit_board';
    const AbCPU = 'kubejs:abyssal_processing_unit';
    const Tra = 'kubejs:draconic_qmd_transistor';
    const Res = 'kubejs:draconic_qmd_resistor';
    const Cap = 'kubejs:draconic_qmd_capacitor';
    const Dio = 'kubejs:draconic_qmd_diode';
    const Ind = 'kubejs:draconic_qmd_inductor';
    const Solder = 'gtceu:naquadated_soldering_alloy';
    const SGM = 'gtceu:sterilized_growth_medium';
    const DES = 'gtceu:draconic_enrichment_serum';
    const DB = 'gtceu:dragon_breath';
    const PEDOT_PSS = 'gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate';

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
            `gtceu:indium_tin_lead_cadmium_soldering_alloy 125000`,
            `${PEDOT_PSS} 75000`,
            `${SGM} 50000`,
            `gtceu:isovol 28800`
        )
        .itemOutputs('gtceu:draco_circuit_assembler')
        .duration(4800)
        .stationResearch((researchRecipeBuilder) =>
            researchRecipeBuilder
                .researchStack(Item.of('gtceu:large_circuit_assembler'))
                .EUt(GTValues.VA[GTValues.UEV])
                .CWUt(192)
        )
        .EUt(GTValues.VHA[GTValues.UIV]);

    // === Draconic Circuits ===

    const DracoCircuitAssembler = (type, output, ItemIn, FluidIn, Dur, eu, researchItem, cwu) => {
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

    DracoCircuitAssembler(
        'draconic_microchip_processor',
        '4x kubejs:draconic_microchip_processor',
        [DrCirBoard, 'gtceu:crystal_soc', `4x ${Res}`, `4x ${Cap}`, `4x ${Tra}`, '4x gtceu:fine_europium_wire'],
        [`${Solder} 72`, `${PEDOT_PSS} 36`, `${DB} 50`],
        400,
        GTValues.VHA[GTValues.UHV],
        DrCirBoard,
        144
    );
    DracoCircuitAssembler(
        'draconic_processor',
        '2x kubejs:draconic_processor',
        [
            DrCPU,
            'kubejs:draconic_microchip_processor',
            'gtceu:highly_advanced_soc',
            `6x ${Res}`,
            `6x ${Cap}`,
            `6x ${Tra}`,
            '8x gtceu:fine_polonium_bismide_wire',
        ],
        [`${Solder} 144`, `${PEDOT_PSS} 72`, `${DB} 75`],
        400,
        GTValues.VHA[GTValues.UHV],
        'kubejs:draconic_microchip_processor',
        144
    );
    DracoCircuitAssembler(
        'draconic_processor_assembly',
        '2x kubejs:draconic_processor_assembly',
        [
            DrCirBoard,
            '2x kubejs:draconic_processor',
            '4x gtceu:void_bolt',
            '32x kubejs:qram_chip',
            `6x ${Ind}`,
            `12x ${Cap}`,
            '16x gtceu:fine_polonium_bismide_wire',
            'gtceu:aurourium_plate',
        ],
        [`${Solder} 288`, `${PEDOT_PSS} 144`, `${DB} 125`],
        800,
        GTValues.VA[GTValues.UHV],
        'kubejs:draconic_processor',
        160
    );
    DracoCircuitAssembler(
        'draconic_processor_computer',
        'kubejs:draconic_processor_computer',
        [
            DrCirBoard,
            '2x kubejs:draconic_processor_assembly',
            `8x ${Dio}`,
            '48x kubejs:qram_chip',
            `16x kubejs:hyper_nor_memory_chip`,
            `32x kubejs:hyper_nand_memory_chip`,
            '16x gtceu:void_foil',
            '4x gtceu:neutronium_tiny_fluid_pipe',
            `32x ${PEDOT_PSS}_foil`,
            '32x gtceu:fine_polonium_bismide_wire',
            '2x gtceu:aurourium_plate',
        ],
        [`${Solder} 1152`, `${PEDOT_PSS} 576`, `${DB} 250`],
        1200,
        GTValues.VA[GTValues.UHV],
        'kubejs:draconic_processor_assembly',
        176
    );
    DracoCircuitAssembler(
        'draconic_processor_mainframe',
        'kubejs:draconic_processor_mainframe',
        [
            '2x gtceu:void_frame',
            '2x kubejs:draconic_processor_computer',
            '64x kubejs:qram_chip',
            '2x kubejs:uepic_chip',
            `24x ${Ind}`,
            `32x ${Cap}`,
            `24x ${Dio}`,
            `24x ${Res}`,
            `24x ${Tra}`,
            `32x gtceu:void_foil`,
            '1x gtceu:energy_module',
            `64x gtceu:aerogel_foil`,
            '32x gtceu:polonium_bismide_single_wire',
            '4x gtceu:aurourium_plate',
        ],
        [`${Solder} 2304`, `${PEDOT_PSS} 1152`, `${DB} 500`],
        1800,
        GTValues.VA[GTValues.UEV],
        'kubejs:draconic_processor_computer',
        192
    );
    DracoCircuitAssembler(
        'cheap_draconic_microchip_processor',
        '8x kubejs:draconic_microchip_processor',
        [
            DrCirBoard,
            'kubejs:draco_advanced_soc',
            '4x gtceu:fine_europium_wire',
            '4x gtceu:yttrium_barium_cuprate_bolt',
        ],
        [`${Solder} 72`, `${PEDOT_PSS} 18`, `${DB} 25`],
        100,
        GTValues.VHA[GTValues.UEV] * 1.2,
        'kubejs:draco_advanced_soc',
        160
    );
    DracoCircuitAssembler(
        'cheap_draconic_processor',
        '4x kubejs:draconic_processor',
        [DrCPU, 'kubejs:draco_advanced_soc', '4x gtceu:fine_polonium_bismide_wire', '4x gtceu:europium_bolt'],
        [`${Solder} 72`, `${PEDOT_PSS} 36`, `${DB} 50`],
        100,
        GTValues.VHA[GTValues.UIV] * 1.2,
        'kubejs:draco_advanced_soc_wafer',
        160
    );

    // === Abyssal Circuits ===

    DracoCircuitAssembler(
        'abyssal_processor',
        '2x kubejs:abyssal_processor',
        [
            AbCPU,
            '1x gtceu:crystal_soc',
            '1x gtceu:highly_advanced_soc',
            '2x gtceu:qbit_cpu_chip',
            `12x ${Res}`,
            `12x ${Cap}`,
            `12x ${Tra}`,
            '8x gtceu:fine_lepton_resonant_thallium_antimonide_wire',
        ],
        [`${Solder} 576`, `${PEDOT_PSS} 288`, `${DES} 125`],
        800,
        GTValues.VA[GTValues.UEV],
        AbCirBoard,
        200
    );
    DracoCircuitAssembler(
        'abyssal_processor_assembly',
        '2x kubejs:abyssal_processor_assembly',
        [
            AbCirBoard,
            '2x kubejs:abyssal_processor',
            '4x gtceu:hvga_steel_bolt',
            '16x kubejs:stellar_ram_chip',
            `12x ${Ind}`,
            `24x ${Cap}`,
            '16x gtceu:fine_lepton_resonant_thallium_antimonide_wire',
            'gtceu:draco_abyssal_plate',
        ],
        [`${Solder} 1152`, `${PEDOT_PSS} 576`, `${DES} 250`],
        800,
        GTValues.VA[GTValues.UEV],
        'kubejs:abyssal_processor',
        216
    );
    DracoCircuitAssembler(
        'abyssal_processor_computer',
        'kubejs:abyssal_processor_computer',
        [
            AbCirBoard,
            '2x kubejs:abyssal_processor_assembly',
            `16x ${Dio}`,
            '24x kubejs:stellar_ram_chip',
            `32x kubejs:hyper_nor_memory_chip`,
            `64x kubejs:hyper_nand_memory_chip`,
            '8x gtceu:hvga_steel_bolt',
            '32x gtceu:draconyallium_foil',
            '4x gtceu:nyanium_tiny_fluid_pipe',
            `64x ${PEDOT_PSS}_foil`,
            '32x gtceu:fine_lepton_resonant_thallium_antimonide_wire',
            '2x gtceu:draco_abyssal_plate',
        ],
        [`${Solder} 2304`, `${PEDOT_PSS} 1152`, `${DES} 500`],
        1200,
        GTValues.VA[GTValues.UEV],
        'kubejs:abyssal_processor_assembly',
        240
    );
    DracoCircuitAssembler(
        'abyssal_processor_mainframe',
        'kubejs:abyssal_processor_mainframe',
        [
            '2x gtceu:draco_abyssal_frame',
            '2x kubejs:abyssal_processor_computer',
            '32x kubejs:stellar_ram_chip',
            '4x kubejs:uepic_chip',
            `48x ${Ind}`,
            `64x ${Cap}`,
            `48x ${Dio}`,
            `48x ${Res}`,
            `48x ${Tra}`,
            '64x gtceu:draconyallium_foil',
            '1x gtceu:energy_cluster',
            `128x ${PEDOT_PSS}_foil`,
            '1x kubejs:dragonic_eye',
            '16x gtceu:hvga_steel_foil',
            '48x gtceu:fine_lepton_resonant_thallium_antimonide_wire',
            '2x gtceu:draco_abyssal_plate',
        ],
        [`${Solder} 4608`, `${PEDOT_PSS} 2304`, `${DES} 1000`],
        1800,
        GTValues.VA[GTValues.UIV],
        'kubejs:abyssal_processor_computer',
        256
    );
    DracoCircuitAssembler(
        'cheap_abyssal_processor',
        '4x kubejs:abyssal_processor',
        [
            AbCPU,
            'kubejs:rift_infused_soc',
            '4x gtceu:fine_lepton_resonant_thallium_antimonide_wire',
            '4x gtceu:polonium_bismide_bolt',
        ],
        [`${Solder} 432`, `${PEDOT_PSS} 216`, `${DES} 75`],
        100,
        GTValues.VHA[GTValues.UIV] * 1.2,
        'kubejs:rift_infused_soc',
        216
    );

    // === Bulk Circuits ===

    const DracoBulkCircuiter = (quant, output, ItemIn, FluidIn, Dur, eu, cwu) => {
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

    DracoBulkCircuiter(
        24,
        'kubejs:ulv_universal_circuit',
        [
            'gtceu:plastic_printed_circuit_board',
            'gtceu:simple_soc',
            '2x gtceu:red_alloy_bolt',
            '2x gtceu:fine_tin_wire',
        ],
        'gtceu:soldering_alloy 72',
        200,
        GTValues.VA[GTValues.HV] / 3.5,
        4
    );
    DracoBulkCircuiter(
        12,
        'kubejs:lv_universal_circuit',
        ['gtceu:plastic_printed_circuit_board', 'gtceu:soc', '2x gtceu:fine_copper_wire', '2x gtceu:tin_bolt'],
        'gtceu:soldering_alloy 72',
        25,
        GTValues.VA[GTValues.IV] / 3.5,
        12
    );
    DracoBulkCircuiter(
        8,
        'kubejs:mv_universal_circuit',
        [
            'gtceu:plastic_printed_circuit_board',
            'gtceu:soc',
            '4x gtceu:fine_red_alloy_wire',
            '4x gtceu:annealed_copper_bolt',
        ],
        'gtceu:soldering_alloy 72',
        25,
        GTValues.VA[GTValues.LuV] / 3.5,
        24
    );
    DracoBulkCircuiter(
        8,
        'kubejs:hv_universal_circuit',
        [
            'gtceu:epoxy_printed_circuit_board',
            'gtceu:advanced_soc',
            '4x gtceu:fine_electrum_wire',
            '4x gtceu:platinum_bolt',
        ],
        'gtceu:soldering_alloy 72',
        25,
        GTValues.VA[GTValues.ZPM] / 3.5,
        64
    );
    DracoBulkCircuiter(
        8,
        'kubejs:ev_universal_circuit',
        [
            'gtceu:fiber_reinforced_printed_circuit_board',
            'gtceu:advanced_soc',
            '12x gtceu:fine_platinum_wire',
            '8x gtceu:niobium_titanium_bolt',
        ],
        'gtceu:soldering_alloy 72',
        25,
        GTValues.VA[GTValues.UV] / 3.5,
        96
    );
    DracoBulkCircuiter(
        8,
        'kubejs:iv_universal_circuit',
        [
            'gtceu:multilayer_fiber_reinforced_printed_circuit_board',
            'gtceu:crystal_soc',
            '8x gtceu:fine_niobium_titanium_wire',
            '8x gtceu:yttrium_barium_cuprate_bolt',
        ],
        'gtceu:soldering_alloy 72',
        50,
        GTValues.VA[GTValues.UV] / 3.5,
        128
    );
    DracoBulkCircuiter(
        8,
        'kubejs:luv_universal_circuit',
        [
            'gtceu:neuro_processing_unit',
            'gtceu:highly_advanced_soc',
            '8x gtceu:fine_yttrium_barium_cuprate_wire',
            '8x gtceu:naquadah_bolt',
        ],
        'gtceu:soldering_alloy 72',
        50,
        GTValues.VA[GTValues.UHV] / 3.5,
        144
    );
});
