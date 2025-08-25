ServerEvents.recipes(event => {
    const id = global.id;

    //Input Loaders
        const DrCirBoard = 'kubejs:draconic_wetware_printed_circuit_board';
        const DrCPU = 'kubejs:draconic_neuro_processing_unit';
        const AwDrCirBoard = 'kubejs:awakened_draconic_wetware_printed_circuit_board';
        const Tra = 'kubejs:draconic_qmd_transistor';
        const Res = 'kubejs:draconic_qmd_resistor';
        const Cap = 'kubejs:draconic_qmd_capacitor';
        const Dio = 'kubejs:draconic_qmd_diode';
        const Ind = 'kubejs:draconic_qmd_inductor';
        const Solder = 'gtceu:indium_tin_lead_cadmium_soldering_alloy';
        const SGM = 'gtceu:sterilized_growth_medium';
        const DES = 'gtceu:draconic_enrichment_serum';
        const PEEK = 'gtceu:polyether_ether_ketone';
        const PEDOT_PSS = 'gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate'

    // === Controller ===

    event.recipes.gtceu.assembly_line(id('draco_circuit_assembler'))
        .itemInputs(
            'gtceu:void_frame','6x kubejs:draco_ware_casing','6x kubejs:uev_computational_matrix','4x gtceu:uev_sensor','8x gtceu:uev_robot_arm',
            '4x gtceu:uev_conveyor_module', '32x gtceu:fine_seaborgium_palladium_enriched_estalt_flerovium_alloy_wire','8x gtceu:calamatium_screw'
        )
        .inputFluids(
            `${Solder} 125000`,
            `${PEDOT_PSS} 75000`,
            `${SGM} 50000`,
            `gtceu:isovol 28800`
        )
        .itemOutputs('gtceu:draco_circuit_assembler')
        .duration(4800)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of('gtceu:large_circuit_assembler'))
                .EUt(GTValues.VA[GTValues.UEV])
                .CWUt(192)
            )
        .EUt(GTValues.VHA[GTValues.UIV]); 

    // === Draconic Circuits ===

    event.recipes.gtceu.circuit_assembler(id('draconic_wetware_circuit_board'))
        .itemInputs('32x gtceu:wetware_circuit_board', '4x gtceu:petri_dish', 'gtceu:uhv_electric_pump', 'gtceu:uhv_sensor', '2x #gtceu:circuits/zpm', '4x gtceu:stellarium_foil')
        .inputFluids('gtceu:sterilized_growth_medium 6000')
        .itemOutputs('32x kubejs:draconic_wetware_circuit_board')
        .duration(1200)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.circuit_assembler(id('draconic_neuro_processing_unit'))
        .itemInputs('kubejs:draconic_wetware_printed_circuit_board', '2x kubejs:draconic_brain_matter_cells', '8x gtceu:polyether_ether_ketone_small_fluid_pipe', '16x gtceu:platinum_plate', '32x gtceu:silicone_rubber_foil', '16x gtceu:tritanium_bolt')
        .inputFluids('gtceu:sterilized_growth_medium 750')
        .itemOutputs('1x kubejs:draconic_neuro_processing_unit')
        .duration(600)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.circuit_assembler(id('awakened_draconic_wetware_circuit_board'))
        .itemInputs('64x kubejs:draconic_wetware_circuit_board', 'kubejs:blank_injection_catalyst', 'gtceu:uev_electric_pump', 'gtceu:uev_sensor', '8x kubejs:draconic_brain_matter_cells', '16x gtceu:draconyallium_foil')
        .inputFluids('gtceu:draconic_enrichment_serum 8000')
        .itemOutputs('64x kubejs:awakened_draconic_wetware_circuit_board')
        .duration(1200)
        .cleanroom($StarTAbyssalContainmentMachine.ABYSSAL_CONTAINMENT_ROOM)
        .EUt(GTValues.VHA[GTValues.UEV]);    

    const DracoCircuitAssembler = (type,output,ItemIn,FluidIn,Dur,eu,researchItem,cwu) => {
        
    event.recipes.gtceu.draco_circuit_assembler(id(type))
        .itemInputs(ItemIn).inputFluids(FluidIn).itemOutputs(output)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of(`${researchItem}`))
                .EUt(eu * .5)
                .CWUt(cwu)
            )
        .duration(Dur).EUt(eu);  

    let researchBaseID = `${researchItem.replace(':','_')}`;
    let researchRecipeID = `1_x_${researchBaseID}`;
    let researchNBT = `1x_${researchBaseID}`;
    let dataItem = (cwu > 0 && cwu < 32) ? 'gtceu:data_orb' : (cwu < 160) ? 'gtceu:data_module' : 'start_core:data_dna_disk';
    let recipeType = 'gtceu:draco_circuit_assembler';
    
        event.recipes.gtceu.research_station(researchRecipeID)
            .itemInputs(dataItem)
            .itemInputs(researchItem)
            .itemOutputs(Item.of(`${dataItem}`, `{assembly_line_research:{research_id:"${researchNBT}",research_type:"${recipeType}"}}`))
            .CWUt(cwu)
            .totalCWU(((Dur + 1600)/2) ** 2)
            .EUt(eu * .5);
    
    }

    // Draconic Wetware
    DracoCircuitAssembler('draconic_wetware_microchip_processor','4x kubejs:draconic_wetware_microchip_processor',[DrCirBoard, 'gtceu:crystal_cpu', `4x ${Res}`, `4x ${Cap}`, `4x ${Tra}`, '4x gtceu:fine_europium_wire'], [`${Solder} 72`, `${SGM} 50`], 400, GTValues.VHA[GTValues.UHV], 'gtceu:void_screw', 144);
    DracoCircuitAssembler('draconic_wetware_processor','2x kubejs:draconic_wetware_processor',[DrCPU, 'kubejs:draconic_wetware_microchip_processor', 'gtceu:qbit_cpu_chip', `6x ${Res}`, `6x ${Cap}`, `6x ${Tra}`, '8x gtceu:fine_polonium_bismide_wire'], [`${Solder} 144`, `${SGM} 125`], 400, GTValues.VHA[GTValues.UHV], 'kubejs:draconic_wetware_microchip_processor', 144);
    DracoCircuitAssembler('draconic_wetware_processor_assembly','2x kubejs:draconic_wetware_processor_assembly',[DrCirBoard, '2x kubejs:draconic_wetware_processor', '4x gtceu:void_bolt', '12x kubejs:qram_chip', `6x ${Ind}`, `12x ${Cap}`, '16x gtceu:fine_polonium_bismide_wire', 'gtceu:void_plate'], [`${Solder} 288`, `${PEEK} 216`, `${SGM} 200`], 800, GTValues.VA[GTValues.UHV], 'kubejs:draconic_wetware_processor', 160);
    DracoCircuitAssembler('draconic_wetware_processor_computer','kubejs:draconic_wetware_processor_computer',[DrCirBoard, '2x kubejs:draconic_wetware_processor_assembly', `8x ${Dio}`, '24x kubejs:qram_chip', `8x kubejs:3d_nor_chip`, `16x kubejs:3d_nand_chip`, '16x gtceu:fine_polonium_bismide_wire', `32x ${PEEK}_foil`, '4x gtceu:neutronium_tiny_fluid_pipe', '2x gtceu:void_plate'], [`${Solder} 1152`,  `${PEEK} 576`, `${SGM} 500`], 1200, GTValues.VA[GTValues.UHV], 'kubejs:draconic_wetware_processor_assembly', 176);
    DracoCircuitAssembler('draconic_wetware_processor_mainframe','kubejs:draconic_wetware_processor_mainframe',['2x gtceu:void_frame', '2x kubejs:draconic_wetware_processor_computer', '32x kubejs:qram_chip', '2x kubejs:uepic_chip', `24x ${Ind}`, `32x ${Cap}`, `24x ${Dio}`, `24x ${Res}`, `24x ${Tra}`, '32x gtceu:polonium_bismide_single_wire', `64x ${PEEK}_foil`, '4x gtceu:void_plate'], [`${Solder} 2304`,  `${PEEK} 1152`, `${SGM} 1000`], 1800, GTValues.VA[GTValues.UEV], 'kubejs:draconic_wetware_processor_computer', 192);
    DracoCircuitAssembler('cheap_draconic_wetware_microchip_processor','8x kubejs:draconic_wetware_microchip_processor',[DrCirBoard, 'kubejs:draco_advanced_soc', '4x gtceu:fine_europium_wire', '4x gtceu:yttrium_barium_cuprate_bolt'], [`${Solder} 72`, `${SGM} 50`], 100, GTValues.VHA[GTValues.UEV] * 1.2, 'kubejs:draco_advanced_soc', 160);
    DracoCircuitAssembler('cheap_draconic_wetware_processor','4x kubejs:draconic_wetware_processor',[DrCPU, 'kubejs:draco_advanced_soc', '4x gtceu:fine_polonium_bismide_wire', '4x gtceu:europium_bolt'], [`${Solder} 144`, `${SGM} 125`], 100, GTValues.VHA[GTValues.UIV] * 1.2, 'kubejs:draco_advanced_soc_wafer', 160);
    // Awakened Draconic Wetware
    DracoCircuitAssembler('awakened_draconic_wetware_processor_assembly','kubejs:awakened_draconic_wetware_processor_assembly',[AwDrCirBoard, 'kubejs:draconic_wetware_processor_assembly', '4x gtceu:draconyallium_bolt', '16x kubejs:qram_chip', `4x ${Ind}`, `8x ${Cap}`, '24x gtceu:fine_lepton_resonant_thallium_antimonide_wire', 'gtceu:draconyallium_plate'], [`${Solder} 288`, `${PEDOT_PSS} 216`, `${DES} 250`], 800, GTValues.VA[GTValues.UEV], 'gtceu:draconyallium_screw', 208);
    DracoCircuitAssembler('awakened_draconic_wetware_processor_computer','kubejs:awakened_draconic_wetware_processor_computer',[AwDrCirBoard, '2x kubejs:awakened_draconic_wetware_processor_assembly', `16x ${Dio}`, '48x kubejs:qram_chip', `16x kubejs:3d_nor_chip`, `32x kubejs:3d_nand_chip`, '48x gtceu:fine_lepton_resonant_thallium_antimonide_wire', `48x ${PEDOT_PSS}_foil`, '6x gtceu:nyanium_tiny_fluid_pipe', '2x gtceu:draconyallium_plate'], [`${Solder} 1152`,  `${PEDOT_PSS} 576`, `${DES} 500`], 1200, GTValues.VA[GTValues.UEV], 'kubejs:awakened_draconic_wetware_processor_assembly', 224);
    DracoCircuitAssembler('awakened_draconic_wetware_processor_mainframe','kubejs:awakened_draconic_wetware_processor_mainframe',['2x gtceu:draconyallium_frame', '2x kubejs:awakened_draconic_wetware_processor_computer', '64x kubejs:qram_chip', '4x kubejs:uepic_chip', `48x ${Ind}`, `64x ${Cap}`, `48x ${Dio}`, `48x ${Res}`, `48x ${Tra}`, '48x gtceu:lepton_resonant_thallium_antimonide_single_wire', `64x ${PEDOT_PSS}_foil`, `32x ${PEDOT_PSS}_foil`, 'kubejs:dragonic_eye', '4x gtceu:draconyallium_plate'], [`${Solder} 2304`,  `${PEDOT_PSS} 1152`, `${DES} 1000`], 1800, GTValues.VA[GTValues.UIV], 'kubejs:awakened_draconic_wetware_processor_computer', 256);
    
    // Circuit Packs // - Being Re-evaluated
    // const BulkCiruits = (tier, quantity, board, soc, smd, wire, bolt, scale, UniEUt, UniCWU) => {
    // DracoCircuitAssembler(`${tier}_universal_circuit`, `${quantity}x kubejs:${tier}_universal_circuit`, [`gtceu:${board}_printed_circuit_board`, `gtceu:${soc}soc`, `${smd}capacitor`, `${smd}transistor`, `${2 * scale}x gtceu:fine_${wire}_wire`, `${scale}x gtceu:${bolt}_bolt`], `${Solder} ${scale * 24}`, 100, UniEUt, `kubejs:${tier}_universal_circuit`, UniCWU);
    // }
    // BulkCiruits('ulv', 72, 'plastic', 'simple_', '1x gtceu:', 'tin', 'red_alloy', 1, GTValues.VHA[GTValues.HV], 48);
    // BulkCiruits('lv', 36, 'plastic', '', '2x gtceu:', 'copper', 'tin', 1, GTValues.VHA[GTValues.EV], 64);
    // BulkCiruits('mv', 24, 'plastic', '', '1x gtceu:smd_', 'red_alloy', 'annealed_copper', 2, GTValues.VHA[GTValues.IV], 80);
    // BulkCiruits('hv', 24, 'epoxy', 'advanced_', '2x gtceu:smd_', 'electrum', 'platinum', 2, GTValues.VHA[GTValues.LuV], 96);
    // BulkCiruits('ev', 24, 'fiber_reinforced', 'advanced_', '1x gtceu:advanced_smd_', 'platinum', 'niobium_titanium', 3, GTValues.VHA[GTValues.ZPM], 112);
    // BulkCiruits('iv', 24, 'multilayer_fiber_reinforced', 'crystal_', '2x gtceu:advanced_smd_', 'niobium_titanium', 'yttrium_barium_cuprate', 3, GTValues.VHA[GTValues.UV], 128);
    // BulkCiruits('luv', 24, 'wetware', 'highly_advanced_', '1x kubejs:draconic_qmd_', 'yttrium_barium_cuprate', 'naquadah', 4, GTValues.VHA[GTValues.UHV], 144);

});