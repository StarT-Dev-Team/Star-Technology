ServerEvents.recipes(event => {
    const id = global.id;
    const MCSF_Scaler = 64; //Should be 16n variant (cap64)

    // === Fixing LuV - UV Scaling ===

    [
        'assembly_line/electric_motor_uv', 'research_station/1_x_gtceu_zpm_electric_motor',
        'assembly_line/electric_motor_zpm', 'scanner/1_x_gtceu_luv_electric_motor',
        'assembly_line/electric_motor_luv', 'scanner/1_x_gtceu_iv_electric_motor',
        'assembly_line/electric_pump_uv', 'research_station/1_x_gtceu_zpm_electric_motor',
        'assembly_line/electric_pump_zpm', 'scanner/1_x_gtceu_luv_electric_pump',
        'assembly_line/electric_pump_luv', 'scanner/1_x_gtceu_iv_electric_pump'
    ].forEach(removalID => {
        event.remove({ id: `gtceu:${removalID}` });
    });

    const uvComponent = (type, inputs, fluids) => {

        event.recipes.gtceu.assembly_line(id(`${type}_uv`))
            .itemInputs(inputs)
            .inputFluids(fluids)
            .itemOutputs(`gtceu:uv_${type}`)
            .stationResearch(
                researchRecipeBuilder => researchRecipeBuilder
                    .researchStack(Item.of(`gtceu:zpm_${type}`))
                    .EUt(122880)
                    .CWUt(32)
            )
            .duration(600)
            .EUt(100000);

    };

    uvComponent('electric_motor', ['gtceu:long_magnetic_samarium_rod', '4x gtceu:long_tritanium_rod', '4x gtceu:tritanium_ring', '8x gtceu:tritanium_round', '64x gtceu:fine_americium_wire', '2x gtceu:yttrium_barium_cuprate_single_cable'], ['gtceu:soldering_alloy 576', 'gtceu:lubricant 1000', 'gtceu:naquadria 576']);
    uvComponent('electric_pump', ['gtceu:uv_electric_motor', 'gtceu:naquadah_normal_fluid_pipe', '2x gtceu:tritanium_plate', '8x gtceu:tritanium_screw', '8x gtceu:silicone_rubber_ring', 'gtceu:naquadah_alloy_rotor', '2x gtceu:yttrium_barium_cuprate_single_cable'], ['gtceu:soldering_alloy 576', 'gtceu:lubricant 1000', 'gtceu:naquadria 576']);

    const subUVcomponent = (tier, tier1, type, inputs, fluids) => {

        event.recipes.gtceu.assembly_line(id(`${type}_${tier}`))
            .itemInputs(inputs)
            .inputFluids(fluids)
            .itemOutputs(`gtceu:${tier}_${type}`)
        ["scannerResearch(java.util.function.UnaryOperator)"](
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of(`gtceu:${tier1}_${type}`))
                .duration(900)
                .EUt(1920)
        )
            .duration(600)
            .EUt(6000);

    };

    subUVcomponent('zpm', 'luv', 'electric_motor', ['gtceu:long_magnetic_samarium_rod', '4x gtceu:long_osmiridium_rod', '4x gtceu:osmiridium_ring', '8x gtceu:osmiridium_round', '64x gtceu:fine_europium_wire', '2x gtceu:vanadium_gallium_single_cable'], ['gtceu:soldering_alloy 288', 'gtceu:lubricant 500']);
    subUVcomponent('zpm', 'luv', 'electric_pump', ['gtceu:zpm_electric_motor', 'gtceu:polybenzimidazole_normal_fluid_pipe', '2x gtceu:osmiridium_plate', '8x gtceu:osmiridium_screw', '6x gtceu:silicone_rubber_ring', 'gtceu:osmiridium_rotor', '2x gtceu:vanadium_gallium_single_cable'], ['gtceu:soldering_alloy 288', 'gtceu:lubricant 500']);
    subUVcomponent('luv', 'iv', 'electric_motor', ['gtceu:long_magnetic_samarium_rod', '4x gtceu:long_hsss_rod', '4x gtceu:hsss_ring', '8x gtceu:hsss_round', '64x gtceu:fine_ruridit_wire', '2x gtceu:niobium_titanium_single_cable'], ['gtceu:soldering_alloy 144', 'gtceu:lubricant 250']);
    subUVcomponent('luv', 'iv', 'electric_pump', ['gtceu:luv_electric_motor', 'gtceu:niobium_titanium_normal_fluid_pipe', '2x gtceu:hsss_plate', '8x gtceu:hsss_screw', '4x gtceu:silicone_rubber_ring', 'gtceu:hsss_rotor', '2x gtceu:niobium_titanium_single_cable'], ['gtceu:soldering_alloy 144', 'gtceu:lubricant 250']);


    // === Controller Blocks === 
    event.recipes.gtceu.assembly_line(id('component_part_assembly'))
        .itemInputs('gtceu:uv_assembler', '8x gtceu:uv_robot_arm', '8x gtceu:uv_conveyor_module',
            '8x gtceu:uv_electric_pump', '4x #gtceu:circuits/uhv', '6x #gtceu:circuits/uv', '8x #gtceu:circuits/zpm')
        .inputFluids('gtceu:soldering_alloy 12528', 'gtceu:lubricant 2500')
        .itemOutputs('gtceu:component_part_assembly')
        .duration(1800)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of('gtceu:uv_assembler'))
                .EUt(GTValues.VHA[GTValues.UV])
                .CWUt(96)
        )
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.assembly_line(id('component_part_hub'))
        .itemInputs('8x gtceu:component_part_assembly', '6x kubejs:uev_computational_matrix', '4x kubejs:draco_ware_casing', '8x kubejs:uev_high_strength_panel',
            '4x gtceu:uev_robot_arm', '4x gtceu:uev_field_generator', '24x gtceu:void_screw', '64x kubejs:uepic_chip')
        .inputFluids('gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 14400', 'gtceu:utopian_akreyrium 10000', 'gtceu:tungsten_disulfide 7200', 'gtceu:indium_tin_lead_cadmium_soldering_alloy 5600')
        .itemOutputs('gtceu:component_part_hub')
        .duration(2400)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of('gtceu:component_part_assembly'))
                .EUt(GTValues.VHA[GTValues.UEV])
                .CWUt(192)
        )
        .EUt(GTValues.VHA[GTValues.UIV]);

    // === Draco-QMDs ===
    const DracoQMD = (nameType, type, quantity, inputs, polymerAmount, cwu) => {

        event.recipes.gtceu.component_part_assembly(id(`draconic_qmd_${nameType}`))
            .itemInputs(inputs)
            .inputFluids(`gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate ${polymerAmount}`)
            .itemOutputs(`${quantity}x kubejs:draconic_qmd_${type}`)
            .duration(15 * quantity)
            .stationResearch(
                researchRecipeBuilder => researchRecipeBuilder
                    .researchStack(Item.of(`gtceu:advanced_smd_${type}`))
                    .EUt(GTValues.VHA[GTValues.UHV] * .8)
                    .CWUt(cwu)
            )
            .EUt(GTValues.VHA[GTValues.UHV]);

        let dataItem = (cwu > 0 && cwu < 32) ? 'gtceu:data_orb' : (cwu < 160) ? 'gtceu:data_module' : 'start_core:data_dna_disk';

        event.recipes.gtceu.research_station(`1_x_gtceu_advanced_smd_${nameType}`)
            .itemInputs(dataItem)
            .itemInputs(`gtceu:advanced_smd_${type}`)
            .itemOutputs(Item.of(`${dataItem}`, `{assembly_line_research:{research_id:"1x_gtceu_advanced_smd_${type}",research_type:"gtceu:component_part_assembly"}}`))
            .CWUt(cwu)
            .totalCWU(cwu * 120 * 20)
            .EUt(GTValues.VHA[GTValues.UHV] / 4);

        if (nameType != 'diode_nt') {

            event.recipes.gtceu.stocking_component_part_assembly(id(`draconic_qmd_${nameType}`))
                .itemInputs(inputs)
                .inputFluids(`gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate ${polymerAmount}`)
                .itemOutputs(`${quantity}x kubejs:draconic_qmd_${type}`)
                .duration(15 * quantity)
                .EUt(GTValues.VHA[GTValues.UHV])
                .scannerResearch(`kubejs:draconic_qmd_${type}`)
                .cleanroom(CleanroomType.getByName('stabilized'));

            event.recipes.gtceu.scanner(id(`1_x_kubejs_draconic_qmd_${type}_scpa`))
                .itemInputs('gtceu:data_stick')
                .itemInputs(`kubejs:draconic_qmd_${type}`)
                .chancedOutput(Item.of(`gtceu:data_stick`, `{assembly_line_research:{research_id:"1x_kubejs_draconic_qmd_${type}",research_type:"gtceu:stocking_component_part_assembly"}}`), 5000, 0)
                .duration(20 * 120)
                .EUt(GTValues.VHA[GTValues.UEV]);

        }
    };

    DracoQMD('inductor', 'inductor', 16, ['1x gtceu:neutronium_ring', '4x gtceu:fine_naquadria_wire', '1x gtceu:ferrosilite_dust'], 144, 180);
    DracoQMD('transistor', 'transistor', 16, ['1x gtceu:pure_netherite_foil', '8x gtceu:fine_tritanium_wire', '1x gtceu:aurourium_foil'], 144, 180);
    DracoQMD('capacitor', 'capacitor', 16, ['2x gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate_foil', '2x gtceu:zalloy_foil', '1x gtceu:cerium_tritelluride_foil'], 108, 180);
    DracoQMD('resistor', 'resistor', 16, ['1x gtceu:diamane_dust', '6x gtceu:fine_yttrium_barium_cuprate_wire', '4x gtceu:bismuth_iridate_foil'], 144, 180);
    DracoQMD('diode_nt', 'diode', 24, ['2x gtceu:silicon_carbide_over_bismuth_tritelluride_dust', '1x kubejs:neutronium_chip', '8x gtceu:fine_stellarium_wire'], 288, 156);
    DracoQMD('diode_dr', 'diode', 32, ['2x gtceu:silicon_carbide_over_bismuth_tritelluride_dust', '1x kubejs:draco_chip', '8x gtceu:fine_stellarium_wire'], 288, 180);

    const MCSF_DracoQMD = (type, outQuant, inputs, fluids, duration, drac) => {

        event.recipes.gtceu.component_part_synthesis_forge(id(`${type}`))
            .itemInputs(inputs)
            .inputFluids(fluids)
            .itemOutputs(`${MCSF_Scaler * outQuant}x kubejs:${type}`)
            .duration(MCSF_Scaler * duration)
            .stationResearch(
                researchRecipeBuilder => researchRecipeBuilder
                    .researchStack(Item.of(`kubejs:${type}`))
                    .EUt(GTValues.VHA[GTValues.UHV])
                    .CWUt(320)
            )
            .EUt(GTValues.VHA[GTValues.UHV])
            .cleanroom(CleanroomType.getByName('stabilized'));

        event.recipes.gtceu.research_station(`1_x_kubejs_${type}`)
            .itemInputs('start_core:component_data_core')
            .itemInputs(`kubejs:${type}`)
            .itemOutputs(Item.of(`start_core:component_data_core`, `{assembly_line_research:{research_id:"1x_kubejs_${type}",research_type:"gtceu:component_part_synthesis_forge"}}`))
            .CWUt(320)
            .totalCWU(320 * 60 * 20)
            .EUt(GTValues.VHA[GTValues.UHV]);

    }

    MCSF_DracoQMD('draconic_qmd_inductor', 16, [`${MCSF_Scaler * .75}x gtceu:neutronium_ring`, `${MCSF_Scaler * .75 * 4}x gtceu:fine_naquadria_wire`, `${MCSF_Scaler * .75}x gtceu:ferrosilite_dust`],
        [`gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate ${MCSF_Scaler * .75 * 144}`], 240, true);

    MCSF_DracoQMD(`draconic_qmd_transistor`, 16, [`${MCSF_Scaler * .75}x gtceu:pure_netherite_foil`, `${MCSF_Scaler * .75 * 8}x gtceu:fine_tritanium_wire`, `${MCSF_Scaler * .75}x gtceu:aurourium_foil`],
        [`gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate ${MCSF_Scaler * .75 * 144}`], 240, true);

    MCSF_DracoQMD(`draconic_qmd_capacitor`, 16, [`${MCSF_Scaler * .75 * 2}x gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate_foil`, `${MCSF_Scaler * .75 * 2}x gtceu:zalloy_foil`, `${MCSF_Scaler * .75}x gtceu:cerium_tritelluride_foil`],
        [`gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate ${MCSF_Scaler * .75 * 108}`], 240, true);

    MCSF_DracoQMD(`draconic_qmd_resistor`, 16, [`${MCSF_Scaler * .75}x gtceu:diamane_dust`, `${MCSF_Scaler * .75 * 6}x gtceu:fine_yttrium_barium_cuprate_wire`, `${MCSF_Scaler * .75 * 4}x gtceu:bismuth_iridate_foil`],
        [`gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate ${MCSF_Scaler * .75 * 144}`], 240, true);

    MCSF_DracoQMD(`draconic_qmd_diode`, 32, [`${MCSF_Scaler * .75 * 2}x gtceu:silicon_carbide_over_bismuth_tritelluride_dust`, `${MCSF_Scaler * .75}x kubejs:draco_chip`, `${MCSF_Scaler * .75 * 8}x gtceu:fine_stellarium_wire`],
        [`gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate ${MCSF_Scaler * .75 * 288}`], 480, true);

    [
        'computational_matrix', 'transmission_assembly', 'precision_drive_mechanism', 'microfluidic_flow_valve',
        'super_magnetic_core', 'catalyst_core', 'high_strength_panel', 'micropower_router'
    ].forEach(type => {

        event.recipes.gtceu.assembler(`ruined_${type}_duplication`)
            .itemInputs(`kubejs:ruined_${type}`, '4x gtceu:dense_enriched_naquadah_plate', '16x gtceu:fine_ancient_runicalium_wire') //Yes I know dense stacks to 7, but multis exist
            .inputFluids('gtceu:naquadria 1440')
            .itemOutputs(`2x kubejs:ruined_${type}`)
            .duration(1200)
            .EUt(GTValues.VA[GTValues.UHV]);

    });

    // === Material List Loader ===    
    const materialList = (Tier, Tier1, Tier2, Primary, Support, Material, RubberR, RubberF, Plastic, Lubricant, Solder, WireTypeComputational, WireTypeMechanical, CableType, GlassType, CatalystType, PrimaryMagnet, SecondaryMagnet, Fluid, VoltageCoil, eut, Scaler, Coolant, SuperConductor, cwu) => {

        // === Component Parts ===
        const componentParts = (type, inputs, fluids, duration, researched) => {
            event.recipes.gtceu.component_part_assembly(id(`${Tier}_${type}`))
                .itemInputs(inputs)
                .inputFluids(fluids)
                .itemOutputs(`kubejs:${Tier}_${type}`)
                .duration(duration)
                .stationResearch(
                    researchRecipeBuilder => researchRecipeBuilder
                        .researchStack(Item.of(researched))
                        .EUt(eut / 4)
                        .CWUt(cwu)
                )
                .EUt(eut);
            let dataItem = (cwu > 0 && cwu < 32) ? 'gtceu:data_orb' : (cwu < 160) ? 'gtceu:data_module' : 'start_core:data_dna_disk';
            event.recipes.gtceu.research_station(`1_x_${researched.replace(':', '_')}_cpa`)
                .itemInputs(dataItem)
                .itemInputs(researched)
                .itemOutputs(Item.of(`${dataItem}`, `{assembly_line_research:{research_id:"1x_${researched.replace(':', '_')}",research_type:"gtceu:component_part_assembly"}}`))
                .CWUt(cwu)
                .totalCWU(cwu * (Scaler * 30 + 120) * 20)
                .EUt(eut / 4);

            event.recipes.gtceu.stocking_component_part_assembly(id(`${Tier}_${type}`))
                .itemInputs(inputs)
                .inputFluids(fluids)
                .itemOutputs(`kubejs:${Tier}_${type}`)
                .duration(duration)
                .EUt(eut)
                .scannerResearch(`kubejs:${Tier}_${type}`)
                .cleanroom(CleanroomType.getByName('stabilized')); //Cleanroom has to be AFTER research

            event.recipes.gtceu.scanner(id(`1_x_kubejs_${Tier}_${type}_scpa`))
                .itemInputs('gtceu:data_stick')
                .itemInputs(`kubejs:${Tier}_${type}`)
                .chancedOutput(Item.of(`gtceu:data_stick`, `{assembly_line_research:{research_id:"1x_kubejs_${Tier}_${type}",research_type:"gtceu:stocking_component_part_assembly"}}`), 2000, 0)
                .duration(duration * 6)
                .EUt(eut / 4);
        };
        {
            let CoilMod = (Tier == 'uhv') ? 'gtceu' : 'kubejs';
            componentParts('voltage_coil', [`gtceu:${Material}_tiny_fluid_pipe`, `gtceu:long_magnetic_${PrimaryMagnet}_rod`, `32x gtceu:fine_${VoltageCoil}_wire`],
                [`gtceu:${Coolant} 1000`], 200, `${CoilMod}:${Tier1}_voltage_coil`);
        };
        {
            let PriorTier = (Tier == 'uhv') ? 'ruined' : Tier1;
            componentParts('computational_matrix', [`gtceu:${Primary}_frame`, `1x #gtceu:circuits/${Tier}`, `2x #gtceu:circuits/${Tier1}`, `3x #gtceu:circuits/${Tier2}`, `4x gtceu:fine_${WireTypeComputational}_wire`, `${2 * (2 ** Scaler)}x kubejs:qram_chip`],
                [`gtceu:sterilized_growth_medium ${250 + Scaler * 250}`, `gtceu:${Solder} ${72 + Scaler * 72}`], 400, `kubejs:${PriorTier}_computational_matrix`);

            componentParts('transmission_assembly', [`gtceu:${Material}_frame`, `gtceu:${Tier1}_electric_motor`, `2x gtceu:${Primary}_rod`, `2x gtceu:${Primary}_ring`, `4x gtceu:${Primary}_round`, `16x gtceu:fine_${WireTypeMechanical}_wire`],
                [`gtceu:${Lubricant} ${250 + Scaler * 250}`], 320, `kubejs:${PriorTier}_transmission_assembly`);

            componentParts('precision_drive_mechanism', [`gtceu:${Primary}_frame`, `gtceu:${Tier1}_electric_motor`, `#gtceu:circuits/${Tier1}`, `gtceu:${Support}_gear`, `gtceu:small_${Primary}_gear`, `8x gtceu:${Primary}_round`],
                [`gtceu:${Lubricant} ${250 + Scaler * 250}`, `gtceu:${RubberF} 1728`], 480, `kubejs:${PriorTier}_precision_drive_mechanism`);

            componentParts('microfluidic_flow_valve', [`gtceu:${Tier1}_fluid_regulator`, `gtceu:${Material}_small_fluid_pipe`, `2x gtceu:${Primary}_plate`, `4x gtceu:${Primary}_round`, `4x gtceu:${RubberR}_ring`, `2x gtceu:${Primary}_ring`],
                [`gtceu:${Plastic} ${396 + Scaler * 36}`], 320, `kubejs:${PriorTier}_microfluidic_flow_valve`);

            componentParts('super_magnetic_core', [`gtceu:long_magnetic_${PrimaryMagnet}_rod`, `2x gtceu:magnetic_${SecondaryMagnet}_rod`, `3x gtceu:${Primary}_rod`, `24x gtceu:fine_${WireTypeMechanical}_wire`, `2x gtceu:${Material}_tiny_fluid_pipe`],
                [`gtceu:${Coolant} 2500`], 300, `kubejs:${PriorTier}_super_magnetic_core`);

            componentParts('catalyst_core', [`4x gtceu:${Primary}_rod`, `${GlassType}`, `${CatalystType}`, `32x gtceu:fine_${SuperConductor}_wire`, `gtceu:${Tier1}_emitter`, `4x gtceu:${Support}_ring`],
                [`gtceu:${Fluid} 576`], 480, `kubejs:${PriorTier}_catalyst_core`);

            componentParts('high_strength_panel', [`gtceu:dense_${Primary}_plate`, `#gtceu:circuits/${Tier1}`, `4x gtceu:${Support}_screw`],
                [`gtceu:${Material} 288`, `gtceu:${Plastic} ${396 + Scaler * 36}`], 200, `kubejs:${PriorTier}_high_strength_panel`);

            componentParts('micropower_router', [`gtceu:${CableType}_double_cable`, `4x gtceu:${CableType}_single_cable`, `2x gtceu:${Primary}_plate`, `32x gtceu:fine_${WireTypeComputational}_wire`],
                [`gtceu:${RubberF} 720`], 240, `kubejs:${PriorTier}_micropower_router`);
        };
        // === Components ===
        const components = (type, inputs, fluids, duration) => {

            event.recipes.gtceu.assembly_line(id(`${Tier}_${type}`))
                .itemInputs(inputs)
                .inputFluids(fluids)
                .itemOutputs(`gtceu:${Tier}_${type}`)
                .stationResearch(
                    researchRecipeBuilder => researchRecipeBuilder
                        .researchStack(Item.of(`gtceu:${Tier1}_${type}`))
                        .EUt(eut / 4)
                        .CWUt(cwu)
                )
                .duration(duration)
                .EUt(eut);

        };

        components('electric_motor', [`kubejs:${Tier}_super_magnetic_core`, `2x gtceu:long_${Primary}_rod`, `kubejs:${Tier}_transmission_assembly`, `kubejs:${Tier}_micropower_router`, `64x gtceu:fine_${WireTypeMechanical}_wire`],
            [`gtceu:${Solder} ${288 * (2 ** Scaler)}`, `gtceu:${Lubricant} ${500 + Scaler * 500}`, `gtceu:${Fluid} 576`], 600);

        components('electric_pump', [`gtceu:${Tier}_electric_motor`, `gtceu:${Material}_normal_fluid_pipe`, `kubejs:${Tier}_microfluidic_flow_valve`, `kubejs:${Tier}_micropower_router`, `8x gtceu:${RubberR}_ring`, `gtceu:${Support}_rotor`],
            [`gtceu:${Solder} ${288 * (2 ** Scaler)}`, `gtceu:${Lubricant} ${500 + Scaler * 500}`, `gtceu:${Fluid} 576`], 600);

        components('conveyor_module', [`2x gtceu:${Tier}_electric_motor`, `kubejs:${Tier}_high_strength_panel`, `kubejs:${Tier}_precision_drive_mechanism`, `4x gtceu:${Primary}_ring`, `kubejs:${Tier}_micropower_router`],
            [`gtceu:${Solder} ${288 * (2 ** Scaler)}`, `gtceu:${Lubricant} ${500 + Scaler * 500}`, `gtceu:${RubberF} 3456`, `gtceu:${Fluid} 576`], 600);

        components('electric_piston', [`gtceu:${Tier}_electric_motor`, `2x kubejs:${Tier}_high_strength_panel`, `1x kubejs:${Tier}_transmission_assembly`, `kubejs:${Tier}_micropower_router`, `gtceu:${Support}_gear`, `gtceu:small_${Primary}_gear`],
            [`gtceu:${Solder} ${288 * (2 ** Scaler)}`, `gtceu:${Lubricant} ${500 + Scaler * 500}`, `gtceu:${Fluid} 576`], 600);

        components('robot_arm', [`4x gtceu:long_${Primary}_rod`, `kubejs:${Tier}_precision_drive_mechanism`, `kubejs:${Tier}_transmission_assembly`, `gtceu:${Tier}_electric_motor`, `gtceu:${Tier}_electric_piston`, `2x kubejs:${Tier}_computational_matrix`, `2x kubejs:${Tier}_micropower_router`],
            [`gtceu:${Solder} ${864 * (2 ** Scaler)}`, `gtceu:${Lubricant} ${500 + Scaler * 500}`, `gtceu:${Fluid} 576`], 600);

        components('field_generator', [`gtceu:${Primary}_frame`, `2x kubejs:${Tier}_high_strength_panel`, `kubejs:${Tier}_catalyst_core`, `2x gtceu:${Tier}_emitter`, `1x kubejs:${Tier}_computational_matrix`, `64x gtceu:fine_${SuperConductor}_wire`, `2x kubejs:${Tier}_micropower_router`],
            [`gtceu:${Solder} ${864 * (2 ** Scaler)}`, `gtceu:${Fluid} 576`], 600);

        components('emitter', [`gtceu:${Primary}_frame`, `gtceu:${Tier}_electric_motor`, `4x gtceu:long_${Primary}_rod`, `1x kubejs:${Tier}_catalyst_core`, `1x kubejs:${Tier}_computational_matrix`, `64x gtceu:${Material}_foil`, `1x kubejs:${Tier}_micropower_router`],
            [`gtceu:${Solder} ${288 * (2 ** Scaler)}`, `gtceu:${Lubricant} ${500 + Scaler * 500}`, `gtceu:${Fluid} 576`], 600);

        components('sensor', [`gtceu:${Primary}_frame`, `gtceu:${Tier}_electric_motor`, `4x gtceu:${Primary}_plate`, `1x kubejs:${Tier}_catalyst_core`, `1x kubejs:${Tier}_computational_matrix`, `64x gtceu:${Material}_foil`, `1x kubejs:${Tier}_micropower_router`],
            [`gtceu:${Solder} ${288 * (2 ** Scaler)}`, `gtceu:${Lubricant} ${500 + Scaler * 500}`, `gtceu:${Fluid} 576`], 600);

        event.recipes.gtceu.assembler(id(`${Tier}_fluid_regulator`))
            .itemInputs(`gtceu:${Tier}_electric_pump`, `2x #gtceu:circuits/${Tier}`)
            .itemOutputs(`gtceu:${Tier}_fluid_regulator`)
            .duration(50)
            .EUt(eut)
            .circuit(1);

        //Multi-Threaded UHV+
        const MCSF_Components = (type, inputs, fluids, duration, circuit) => {

            event.recipes.gtceu.component_synthesis_forge(id(`${Tier}_${type}`))
                .itemInputs(inputs)
                .inputFluids(fluids)
                .itemOutputs(`${MCSF_Scaler}x gtceu:${Tier}_${type}`)
                .duration(MCSF_Scaler * duration)
                .stationResearch(
                    researchRecipeBuilder => researchRecipeBuilder
                        .researchStack(Item.of(`gtceu:${Tier}_${type}`))
                        .EUt(eut)
                        .CWUt(320)
                )
                .EUt(eut)
                .cleanroom(CleanroomType.getByName('stabilized'));

            event.recipes.gtceu.research_station(`1_x_gtceu_${Tier}_${type}_mcsf`)
                .itemInputs('start_core:component_data_core')
                .itemInputs(`gtceu:${Tier}_${type}`)
                .itemOutputs(Item.of(`start_core:component_data_core`, `{assembly_line_research:{research_id:"1x_gtceu_${Tier}_${type}",research_type:"gtceu:component_synthesis_forge"}}`))
                .CWUt(320)
                .totalCWU(320 * 60 * 20)
                .EUt(eut);

        };

        MCSF_Components('electric_motor', [`${MCSF_Scaler * .75}x kubejs:${Tier}_super_magnetic_core`, `${2 * MCSF_Scaler * .75}x gtceu:long_${Primary}_rod`, `${MCSF_Scaler * .75}x kubejs:${Tier}_transmission_assembly`, `${MCSF_Scaler * .75}x kubejs:${Tier}_micropower_router`, `${16 * MCSF_Scaler * .75}x gtceu:fine_${WireTypeMechanical}_wire`, `${16 * MCSF_Scaler * .75}x gtceu:fine_${WireTypeMechanical}_wire`, `${16 * MCSF_Scaler * .75}x gtceu:fine_${WireTypeMechanical}_wire`, `${16 * MCSF_Scaler * .75}x gtceu:fine_${WireTypeMechanical}_wire`],
            [`gtceu:${Solder} ${MCSF_Scaler * .75 * 288 * (2 ** Scaler)}`, `gtceu:${Lubricant} ${MCSF_Scaler * .75 * (500 + Scaler * 500)}`, `gtceu:${Fluid} ${MCSF_Scaler * .75 * 576}`], 600, 0);

        MCSF_Components('electric_pump', [`${MCSF_Scaler * .75}x gtceu:${Tier}_electric_motor`, `${MCSF_Scaler * .75}x gtceu:${Material}_normal_fluid_pipe`, `${MCSF_Scaler * .75}x kubejs:${Tier}_microfluidic_flow_valve`, `${MCSF_Scaler * .75}x kubejs:${Tier}_micropower_router`, `${8 * MCSF_Scaler * .75}x gtceu:${RubberR}_ring`, `${MCSF_Scaler * .75}x gtceu:${Support}_rotor`],
            [`gtceu:${Solder} ${MCSF_Scaler * .75 * 288 * (2 ** Scaler)}`, `gtceu:${Lubricant} ${MCSF_Scaler * .75 * (500 + Scaler * 500)}`, `gtceu:${Fluid} ${MCSF_Scaler * .75 * 576}`], 600, 1);

        MCSF_Components('conveyor_module', [`${2 * MCSF_Scaler * .75}x gtceu:${Tier}_electric_motor`, `${MCSF_Scaler * .75}x kubejs:${Tier}_high_strength_panel`, `${MCSF_Scaler * .75}x kubejs:${Tier}_precision_drive_mechanism`, `${4 * MCSF_Scaler * .75}x gtceu:${Primary}_ring`, `${MCSF_Scaler * .75}x kubejs:${Tier}_micropower_router`],
            [`gtceu:${Solder} ${MCSF_Scaler * .75 * 288 * (2 ** Scaler)}`, `gtceu:${Lubricant} ${MCSF_Scaler * .75 * (500 + Scaler * 500)}`, `gtceu:${RubberF} ${MCSF_Scaler * .75 * 3456}`, `gtceu:${Fluid} ${MCSF_Scaler * .75 * 576}`], 600, 2);

        MCSF_Components('electric_piston', [`${MCSF_Scaler * .75}x gtceu:${Tier}_electric_motor`, `${2 * MCSF_Scaler * .75}x kubejs:${Tier}_high_strength_panel`, `${MCSF_Scaler * .75}x kubejs:${Tier}_transmission_assembly`, `${MCSF_Scaler * .75}x kubejs:${Tier}_micropower_router`, `${MCSF_Scaler * .75}x gtceu:${Support}_gear`, `${MCSF_Scaler * .75}x gtceu:small_${Primary}_gear`],
            [`gtceu:${Solder} ${MCSF_Scaler * .75 * 288 * (2 ** Scaler)}`, `gtceu:${Lubricant} ${MCSF_Scaler * .75 * (500 + Scaler * 500)}`, `gtceu:${Fluid} ${MCSF_Scaler * .75 * 576}`], 600, 3);

        MCSF_Components('robot_arm', [`${4 * MCSF_Scaler * .75}x gtceu:long_${Primary}_rod`, `${MCSF_Scaler * .75}x kubejs:${Tier}_precision_drive_mechanism`, `${MCSF_Scaler * .75}x kubejs:${Tier}_transmission_assembly`, `${MCSF_Scaler * .75}x gtceu:${Tier}_electric_motor`, `${MCSF_Scaler * .75}x gtceu:${Tier}_electric_piston`, `${2 * MCSF_Scaler * .75}x kubejs:${Tier}_computational_matrix`, `${2 * MCSF_Scaler * .75}x kubejs:${Tier}_micropower_router`],
            [`gtceu:${Solder} ${MCSF_Scaler * .75 * 864 * (2 ** Scaler)}`, `gtceu:${Lubricant} ${MCSF_Scaler * .75 * (500 + Scaler * 500)}`, `gtceu:${Fluid} ${MCSF_Scaler * .75 * 576}`], 600, 4);

        MCSF_Components('field_generator', [`${MCSF_Scaler * .75}x gtceu:${Primary}_frame`, `${2 * MCSF_Scaler * .75}x kubejs:${Tier}_high_strength_panel`, `${MCSF_Scaler * .75}x kubejs:${Tier}_catalyst_core`, `${2 * MCSF_Scaler * .75}x gtceu:${Tier}_emitter`, `${MCSF_Scaler * .75}x kubejs:${Tier}_computational_matrix`, `${16 * MCSF_Scaler * .75}x gtceu:fine_${SuperConductor}_wire`, `${16 * MCSF_Scaler * .75}x gtceu:fine_${SuperConductor}_wire`, `${16 * MCSF_Scaler * .75}x gtceu:fine_${SuperConductor}_wire`, `${16 * MCSF_Scaler * .75}x gtceu:fine_${SuperConductor}_wire`, `${2 * MCSF_Scaler * .75}x kubejs:${Tier}_micropower_router`],
            [`gtceu:${Solder} ${MCSF_Scaler * .75 * 864 * (2 ** Scaler)}`, `gtceu:${Fluid} ${MCSF_Scaler * .75 * 576}`], 600, 5);

        MCSF_Components('emitter', [`${MCSF_Scaler * .75}x gtceu:${Primary}_frame`, `${MCSF_Scaler * .75}x gtceu:${Tier}_electric_motor`, `${4 * MCSF_Scaler * .75}x gtceu:long_${Primary}_rod`, `${MCSF_Scaler * .75}x kubejs:${Tier}_catalyst_core`, `${MCSF_Scaler * .75}x kubejs:${Tier}_computational_matrix`, `${16 * MCSF_Scaler * .75}x gtceu:${Material}_foil`, `${16 * MCSF_Scaler * .75}x gtceu:${Material}_foil`, `${16 * MCSF_Scaler * .75}x gtceu:${Material}_foil`, `${16 * MCSF_Scaler * .75}x gtceu:${Material}_foil`, `${MCSF_Scaler * .75}x kubejs:${Tier}_micropower_router`],
            [`gtceu:${Solder} ${MCSF_Scaler * .75 * 288 * (2 ** Scaler)}`, `gtceu:${Lubricant} ${MCSF_Scaler * .75 * (500 + Scaler * 500)}`, `gtceu:${Fluid} ${MCSF_Scaler * .75 * 576}`], 600, 6);

        MCSF_Components('sensor', [`${MCSF_Scaler * .75}x gtceu:${Primary}_frame`, `${MCSF_Scaler * .75}x gtceu:${Tier}_electric_motor`, `${4 * MCSF_Scaler * .75}x gtceu:${Primary}_plate`, `${MCSF_Scaler * .75}x kubejs:${Tier}_catalyst_core`, `${MCSF_Scaler * .75}x kubejs:${Tier}_computational_matrix`, `${16 * MCSF_Scaler * .75}x gtceu:${Material}_foil`, `${16 * MCSF_Scaler * .75}x gtceu:${Material}_foil`, `${16 * MCSF_Scaler * .75}x gtceu:${Material}_foil`, `${16 * MCSF_Scaler * .75}x gtceu:${Material}_foil`, `${MCSF_Scaler * .75}x kubejs:${Tier}_micropower_router`],
            [`gtceu:${Solder} ${MCSF_Scaler * .75 * 288 * (2 ** Scaler)}`, `gtceu:${Lubricant} ${MCSF_Scaler * .75 * (500 + Scaler * 500)}`, `gtceu:${Fluid} ${MCSF_Scaler * .75 * 576}`], 600, 7);

        //Multi-Threaded UHV+ Parts
        const MCSF_Component_Parts = (type, outQuant, inputs, fluids, duration, drac) => {

            event.recipes.gtceu.component_part_synthesis_forge(id(`${Tier}_${type}`))
                .itemInputs(inputs)
                .inputFluids(fluids)
                .itemOutputs(`${MCSF_Scaler * outQuant}x kubejs:${Tier}_${type}`)
                .duration(MCSF_Scaler * duration)
                .stationResearch(
                    researchRecipeBuilder => researchRecipeBuilder
                        .researchStack(Item.of(`kubejs:${Tier}_${type}`))
                        .EUt(eut)
                        .CWUt(320)
                )
                .EUt(eut)
                .cleanroom(CleanroomType.getByName('stabilized'));

            event.recipes.gtceu.research_station(`1_x_kubejs_${Tier}_${type}_mcsf`)
                .itemInputs('start_core:component_data_core')
                .itemInputs(`kubejs:${Tier}_${type}`)
                .itemOutputs(Item.of(`start_core:component_data_core`, `{assembly_line_research:{research_id:"1x_kubejs_${Tier}_${type}",research_type:"gtceu:component_part_synthesis_forge"}}`))
                .CWUt(320)
                .totalCWU(320 * 60 * 20)
                .EUt(eut);

        };

        MCSF_Component_Parts('voltage_coil', 1, [`${MCSF_Scaler * .75}x gtceu:${Material}_tiny_fluid_pipe`, `${MCSF_Scaler * .75}x gtceu:long_magnetic_${PrimaryMagnet}_rod`, `${16 * MCSF_Scaler * .75}x gtceu:fine_${VoltageCoil}_wire`, `${16 * MCSF_Scaler * .75}x gtceu:fine_${VoltageCoil}_wire`],
            [`gtceu:${Coolant} ${MCSF_Scaler * .75 * 1000}`], 200, false);

        MCSF_Component_Parts('computational_matrix', 1, [`${MCSF_Scaler * .75}x gtceu:${Primary}_frame`, `${MCSF_Scaler * .75}x #gtceu:circuits/${Tier}`, `${2 * MCSF_Scaler * .75}x #gtceu:circuits/${Tier1}`, `${3 * MCSF_Scaler * .75}x #gtceu:circuits/${Tier2}`, `${4 * MCSF_Scaler * .75}x gtceu:fine_${WireTypeComputational}_wire`, `${MCSF_Scaler * .75 * (2 ** Scaler)}x kubejs:qram_chip`, `${MCSF_Scaler * .75 * (2 ** Scaler)}x kubejs:qram_chip`],
            [`gtceu:sterilized_growth_medium ${MCSF_Scaler * .75 * (250 + Scaler * 250)}`, `gtceu:${Solder} ${MCSF_Scaler * .75 * (72 + Scaler * 72)}`], 400, false);

        MCSF_Component_Parts('transmission_assembly', 1, [`${MCSF_Scaler * .75}x gtceu:${Material}_frame`, `${MCSF_Scaler * .75}x gtceu:${Tier1}_electric_motor`, `${2 * MCSF_Scaler * .75}x gtceu:${Primary}_rod`, `${2 * MCSF_Scaler * .75}x gtceu:${Primary}_ring`, `${4 * MCSF_Scaler * .75}x gtceu:${Primary}_round`, `${16 * MCSF_Scaler * .75}x gtceu:fine_${WireTypeMechanical}_wire`],
            [`gtceu:${Lubricant} ${MCSF_Scaler * .75 * (250 + Scaler * 250)}`], 320, false);

        MCSF_Component_Parts('precision_drive_mechanism', 1, [`${MCSF_Scaler * .75}x gtceu:${Primary}_frame`, `${MCSF_Scaler * .75}x gtceu:${Tier1}_electric_motor`, `${MCSF_Scaler * .75}x #gtceu:circuits/${Tier1}`, `${MCSF_Scaler * .75}x gtceu:${Support}_gear`, `${MCSF_Scaler * .75}x gtceu:small_${Primary}_gear`, `${8 * MCSF_Scaler * .75}x gtceu:${Primary}_round`],
            [`gtceu:${Lubricant} ${MCSF_Scaler * .75 * (250 + Scaler * 250)}`, `gtceu:${RubberF} ${MCSF_Scaler * .75 * 1728}`], 480, false);

        MCSF_Component_Parts('microfluidic_flow_valve', 1, [`${MCSF_Scaler * .75}x gtceu:${Tier1}_fluid_regulator`, `${MCSF_Scaler * .75}x gtceu:${Material}_small_fluid_pipe`, `${2 * MCSF_Scaler * .75}x gtceu:${Primary}_plate`, `${4 * MCSF_Scaler * .75}x gtceu:${Primary}_round`, `${4 * MCSF_Scaler * .75}x gtceu:${RubberR}_ring`, `${2 * MCSF_Scaler * .75}x gtceu:${Primary}_ring`],
            [`gtceu:${Plastic} ${MCSF_Scaler * .75 * (396 + Scaler * 36)}`], 320, false);

        MCSF_Component_Parts('super_magnetic_core', 1, [`${MCSF_Scaler * .75}x gtceu:long_magnetic_${PrimaryMagnet}_rod`, `${2 * MCSF_Scaler * .75}x gtceu:magnetic_${SecondaryMagnet}_rod`, `${3 * MCSF_Scaler * .75}x gtceu:${Primary}_rod`, `${12 * MCSF_Scaler * .75}x gtceu:fine_${WireTypeMechanical}_wire`, `${12 * MCSF_Scaler * .75}x gtceu:fine_${WireTypeMechanical}_wire`, `${2 * MCSF_Scaler * .75}x gtceu:${Material}_tiny_fluid_pipe`],
            [`gtceu:${Coolant} ${MCSF_Scaler * .75 * 2500}`], 300, false);

        MCSF_Component_Parts('catalyst_core', 1, [`${4 * MCSF_Scaler * .75}x gtceu:${Primary}_rod`, `${MCSF_Scaler * .75}x ${GlassType}`, `${MCSF_Scaler * .75 * CatalystType[0]}x ${CatalystType.split(" ")[1]}`, `${16 * MCSF_Scaler * .75}x gtceu:fine_${SuperConductor}_wire`, `${16 * MCSF_Scaler * .75}x gtceu:fine_${SuperConductor}_wire`, `${MCSF_Scaler * .75}x gtceu:${Tier1}_emitter`, `${4 * MCSF_Scaler * .75}x gtceu:${Support}_ring`],
            [`gtceu:${Fluid} ${MCSF_Scaler * .75 * 576}`], 480, false);

        MCSF_Component_Parts('high_strength_panel', 1, [`${MCSF_Scaler * .75}x gtceu:dense_${Primary}_plate`, `${MCSF_Scaler * .75}x #gtceu:circuits/${Tier1}`, `${4 * MCSF_Scaler * .75}x gtceu:${Support}_screw`],
            [`gtceu:${Material} ${MCSF_Scaler * .75 * 288}`, `gtceu:${Plastic} ${MCSF_Scaler * .75 * (396 + Scaler * 36)}`], 200, false);

        MCSF_Component_Parts('micropower_router', 1, [`${MCSF_Scaler * .75}x gtceu:${CableType}_double_cable`, `${4 * MCSF_Scaler * .75}x gtceu:${CableType}_single_cable`, `${2 * MCSF_Scaler * .75}x gtceu:${Primary}_plate`, `${16 * MCSF_Scaler * .75}x gtceu:fine_${WireTypeComputational}_wire`, `${16 * MCSF_Scaler * .75}x gtceu:fine_${WireTypeComputational}_wire`],
            [`gtceu:${RubberF} ${MCSF_Scaler * .75 * 720}`], 240, false);

    };

    materialList('uhv', 'uv', 'zpm', 'zalloy', 'zircalloy_4', 'neutronium', 'styrene_butadiene_rubber', 'perfluoroelastomer_rubber', 'polyether_ether_ketone', 'lubricant', 'indium_tin_lead_cadmium_soldering_alloy', 'iron_selenide_over_strontium_titanium_oxide', 'zirconium', 'zirconium_selenide_diiodide', 'gtceu:fusion_glass', '2x gtceu:gravi_star', 'pure_netherite', 'samarium', 'naquadria', 'thorium_plut_duranide_241', GTValues.VHA[GTValues.UHV], 1, 'liquid_helium', 'ruthenium_trinium_americium_neutronate', 128);
    materialList('uev', 'uhv', 'uv', 'starium_alloy', 'magmada_alloy', 'mythrolic_alloy', 'styrene_butadiene_rubber', 'perfluoroelastomer_rubber', 'polyether_ether_ketone', 'tungsten_disulfide', 'indium_tin_lead_cadmium_soldering_alloy', 'astatine_bis_tritelluride_cobo_selenium_over_iron_titanium_oxide', 'adamantine', 'astatium_bioselex_carbonite', 'gtceu:fusion_glass', '2x kubejs:helish_star', 'zapolgium', 'pure_netherite', 'isovol', 'aurourium', GTValues.VHA[GTValues.UEV], 2, 'superstate_helium_3', 'seaborgium_palladium_enriched_estalt_flerovium_alloy', 160);
    materialList('uiv', 'uev', 'uhv', 'ohmderblux_alloy', 'abyssal_alloy', 'chaotixic_alloy', 'perfluoroelastomer_rubber', 'perfluoroelastomer_rubber', 'poly_34_ethylenedioxythiophene_polystyrene_sulfate', 'tungsten_disulfide', 'naquadated_soldering_alloy', 'polonium_flux', 'xeproda', 'hafnide_ito_ceramic', 'kubejs:draco_resilient_fusion_glass', '1x kubejs:dragonic_eye', 'zapolgium', 'pure_netherite', 'calamatium', 'magmada_alloy', GTValues.VHA[GTValues.UIV], 3, 'superstate_helium_3', 'rhenium_super_composite_alloy', 192);

    const preUHVmaterialList = (scale, Tier, Tier1, Tier2, Primary, Secondary, MechanicalWire, Cable, Pipe, SuperConductor, Catalyst, SenMat, SenFoil, Frame, eut) => {

        const MCSF_Components_PreUHV = (type, inputs, fluids, circuit) => {

            if (Tier == 'uv') {
                event.recipes.gtceu.component_synthesis_forge(id(`${Tier}_${type}`))
                    .itemInputs(inputs)
                    .inputFluids(fluids)
                    .inputFluids(`gtceu:naquadria ${MCSF_Scaler * .75 * 576}`)
                    .itemOutputs(`${MCSF_Scaler}x gtceu:${Tier}_${type}`)
                    .duration(MCSF_Scaler * 600)
                    .stationResearch(
                        researchRecipeBuilder => researchRecipeBuilder
                            .researchStack(Item.of(`gtceu:${Tier}_${type}`))
                            .EUt(eut)
                            .CWUt(320)
                    )
                    .EUt(eut)
                    .cleanroom(CleanroomType.getByName('stabilized'));
            } else {
                event.recipes.gtceu.component_synthesis_forge(id(`${Tier}_${type}`))
                    .itemInputs(inputs)
                    .inputFluids(fluids)
                    .itemOutputs(`${MCSF_Scaler}x gtceu:${Tier}_${type}`)
                    .duration(MCSF_Scaler * 600)
                    .stationResearch(
                        researchRecipeBuilder => researchRecipeBuilder
                            .researchStack(Item.of(`gtceu:${Tier}_${type}`))
                            .EUt(eut)
                            .CWUt(320)
                    )
                    .EUt(eut)
                    .cleanroom(CleanroomType.getByName('stabilized'));
            }
            event.recipes.gtceu.research_station(`1_x_gtceu_${Tier}_${type}_mcsf`)
                .itemInputs('start_core:component_data_core')
                .itemInputs(`gtceu:${Tier}_${type}`)
                .itemOutputs(Item.of(`start_core:component_data_core`, `{assembly_line_research:{research_id:"1x_gtceu_${Tier}_${type}",research_type:"gtceu:component_synthesis_forge"}}`))
                .CWUt(320)
                .totalCWU(320 * 60 * 20)
                .EUt(eut * 4);

        };

        MCSF_Components_PreUHV('electric_motor', [`${MCSF_Scaler * .75}x gtceu:long_magnetic_samarium_rod`, `${4 * MCSF_Scaler * .75}x gtceu:long_${Primary}_rod`, `${4 * MCSF_Scaler * .75}x gtceu:${Primary}_ring`, `${8 * MCSF_Scaler * .75}x gtceu:${Primary}_round`, `${16 * MCSF_Scaler * .75}x gtceu:fine_${MechanicalWire}_wire`, `${16 * MCSF_Scaler * .75}x gtceu:fine_${MechanicalWire}_wire`, `${16 * MCSF_Scaler * .75}x gtceu:fine_${MechanicalWire}_wire`, `${16 * MCSF_Scaler * .75}x gtceu:fine_${MechanicalWire}_wire`, `${2 * MCSF_Scaler * .75}x gtceu:${Cable}_single_cable`],
            [`gtceu:soldering_alloy ${MCSF_Scaler * .75 * 72 * (2 ** scale)}`, `gtceu:lubricant ${MCSF_Scaler * .75 * 125 * (2 ** scale)}`], 0);

        MCSF_Components_PreUHV('electric_pump', [`${MCSF_Scaler * .75}x gtceu:${Tier}_electric_motor`, `${MCSF_Scaler * .75}x gtceu:${Pipe}_normal_fluid_pipe`, `${2 * MCSF_Scaler * .75}x gtceu:${Primary}_plate`, `${8 * MCSF_Scaler * .75}x gtceu:${Primary}_screw`, `${MCSF_Scaler * .75 * 2 * (scale + 1)}x gtceu:silicone_rubber_ring`, `${MCSF_Scaler * .75}x gtceu:${Secondary}_rotor`, `${2 * MCSF_Scaler * .75}x gtceu:${Cable}_single_cable`],
            [`gtceu:soldering_alloy ${MCSF_Scaler * .75 * 72 * (2 ** scale)}`, `gtceu:lubricant ${MCSF_Scaler * .75 * 125 * (2 ** scale)}`], 1);

        MCSF_Components_PreUHV('conveyor_module', [`${2 * MCSF_Scaler * .75}x gtceu:${Tier}_electric_motor`, `${2 * MCSF_Scaler * .75}x gtceu:${Primary}_plate`, `${4 * MCSF_Scaler * .75}x gtceu:${Primary}_ring`, `${16 * MCSF_Scaler * .75}x gtceu:${Primary}_round`, `${4 * MCSF_Scaler * .75}x gtceu:${Primary}_screw`, `${2 * MCSF_Scaler * .75}x gtceu:${Cable}_single_cable`],
            [`gtceu:soldering_alloy ${MCSF_Scaler * .75 * 72 * (2 ** scale)}`, `gtceu:lubricant ${MCSF_Scaler * .75 * 125 * (2 ** scale)}`, `gtceu:styrene_butadiene_rubber ${MCSF_Scaler * .75 * scale * 1152}`], 2);

        MCSF_Components_PreUHV('electric_piston', [`${MCSF_Scaler * .75}x gtceu:${Tier}_electric_motor`, `${4 * MCSF_Scaler * .75}x gtceu:${Primary}_plate`, `${4 * MCSF_Scaler * .75}x gtceu:${Primary}_ring`, `${16 * MCSF_Scaler * .75}x gtceu:${Primary}_round`, `${4 * MCSF_Scaler * .75}x gtceu:${Primary}_rod`, `${MCSF_Scaler * .75}x gtceu:${Secondary}_gear`, `${2 * MCSF_Scaler * .75}x gtceu:small_${Secondary}_gear`, `${2 * MCSF_Scaler * .75}x gtceu:${Cable}_single_cable`],
            [`gtceu:soldering_alloy ${MCSF_Scaler * .75 * 72 * (2 ** scale)}`, `gtceu:lubricant ${MCSF_Scaler * .75 * 125 * (2 ** scale)}`], 3);

        MCSF_Components_PreUHV('robot_arm', [`${4 * MCSF_Scaler * .75}x gtceu:long_${Primary}_rod`, `${MCSF_Scaler * .75}x gtceu:${Primary}_gear`, `${3 * MCSF_Scaler * .75}x gtceu:small_${Primary}_gear`, `${2 * MCSF_Scaler * .75}x gtceu:${Tier}_electric_motor`, `${MCSF_Scaler * .75}x gtceu:${Tier}_electric_piston`, `${MCSF_Scaler * .75}x #gtceu:circuits/${Tier}`, `${2 * MCSF_Scaler * .75}x #gtceu:circuits/${Tier1}`, `${4 * MCSF_Scaler * .75}x #gtceu:circuits/${Tier2}`, `${4 * MCSF_Scaler * .75}x gtceu:${Cable}_single_cable`],
            [`gtceu:soldering_alloy ${MCSF_Scaler * .75 * 576 * scale}`, `gtceu:lubricant ${MCSF_Scaler * .75 * 125 * (2 ** scale)}`], 4);

        MCSF_Components_PreUHV('field_generator', [`${MCSF_Scaler * .75}x gtceu:${Frame}_frame`, `${6 * MCSF_Scaler * .75}x gtceu:${Frame}_plate`, `${MCSF_Scaler * .75}x gtceu:${Catalyst}`, `${2 * MCSF_Scaler * .75}x gtceu:${Tier}_emitter`, `${2 * MCSF_Scaler * .75}x #gtceu:circuits/${Tier}`, `${16 * MCSF_Scaler * .75}x gtceu:fine_${SuperConductor}_wire`, `${16 * MCSF_Scaler * .75}x gtceu:fine_${SuperConductor}_wire`, `${16 * MCSF_Scaler * .75}x gtceu:fine_${SuperConductor}_wire`, `${16 * MCSF_Scaler * .75}x gtceu:fine_${SuperConductor}_wire`, `${16 * MCSF_Scaler * .75}x gtceu:fine_${SuperConductor}_wire`, `${16 * MCSF_Scaler * .75}x gtceu:fine_${SuperConductor}_wire`, `${16 * MCSF_Scaler * .75}x gtceu:fine_${SuperConductor}_wire`, `${16 * MCSF_Scaler * .75}x gtceu:fine_${SuperConductor}_wire`, `${4 * MCSF_Scaler * .75}x gtceu:${Cable}_single_cable`],
            [`gtceu:soldering_alloy ${MCSF_Scaler * .75 * 576 * scale}`], 5);

        if (Tier === "zpm") {
            MCSF_Components_PreUHV('emitter', [`${MCSF_Scaler * .75}x gtceu:${Frame}_frame`, `${MCSF_Scaler * .75}x gtceu:${Tier}_electric_motor`, `${4 * MCSF_Scaler * .75}x gtceu:long_${SenMat}_rod`, `${MCSF_Scaler * 2 * .75}x gtceu:${Catalyst}`, `${2 * MCSF_Scaler * .75}x #gtceu:circuits/${Tier}`, `${16 * MCSF_Scaler * .75}x gtceu:${SenFoil}_foil`, `${16 * MCSF_Scaler * .75}x gtceu:${SenFoil}_foil`, `${16 * MCSF_Scaler * .75}x gtceu:${SenFoil}_foil`, `${16 * MCSF_Scaler * .75}x gtceu:${SenFoil}_foil`, `${16 * MCSF_Scaler * .75}x gtceu:${SenFoil}_foil`, `${16 * MCSF_Scaler * .75}x gtceu:${SenFoil}_foil`, `${4 * MCSF_Scaler * .75}x gtceu:${Cable}_single_cable`],
                [`gtceu:soldering_alloy ${MCSF_Scaler * .75 * 144 * (2 ** scale)}`], 6);

            MCSF_Components_PreUHV('sensor', [`${MCSF_Scaler * .75}x gtceu:${Frame}_frame`, `${MCSF_Scaler * .75}x gtceu:${Tier}_electric_motor`, `${4 * MCSF_Scaler * .75}x gtceu:${SenMat}_plate`, `${MCSF_Scaler * 2 * .75}x gtceu:${Catalyst}`, `${2 * MCSF_Scaler * .75}x #gtceu:circuits/${Tier}`, `${16 * MCSF_Scaler * .75}x gtceu:${SenFoil}_foil`, `${16 * MCSF_Scaler * .75}x gtceu:${SenFoil}_foil`, `${16 * MCSF_Scaler * .75}x gtceu:${SenFoil}_foil`, `${16 * MCSF_Scaler * .75}x gtceu:${SenFoil}_foil`, `${16 * MCSF_Scaler * .75}x gtceu:${SenFoil}_foil`, `${16 * MCSF_Scaler * .75}x gtceu:${SenFoil}_foil`, `${4 * MCSF_Scaler * .75}x gtceu:${Cable}_single_cable`],
                [`gtceu:soldering_alloy ${MCSF_Scaler * .75 * 144 * (2 ** scale)}`], 7);
        } else {
            MCSF_Components_PreUHV('emitter', [`${MCSF_Scaler * .75}x gtceu:${Frame}_frame`, `${MCSF_Scaler * .75}x gtceu:${Tier}_electric_motor`, `${4 * MCSF_Scaler * .75}x gtceu:long_${SenMat}_rod`, `${MCSF_Scaler * .75}x gtceu:${Catalyst}`, `${2 * MCSF_Scaler * .75}x #gtceu:circuits/${Tier}`, `${16 * MCSF_Scaler * .75}x gtceu:${SenFoil}_foil`, `${16 * MCSF_Scaler * .75}x gtceu:${SenFoil}_foil`, `${16 * MCSF_Scaler * .75}x gtceu:${SenFoil}_foil`, `${16 * MCSF_Scaler * .75}x gtceu:${SenFoil}_foil`, `${16 * MCSF_Scaler * .75}x gtceu:${SenFoil}_foil`, `${16 * MCSF_Scaler * .75}x gtceu:${SenFoil}_foil`, `${4 * MCSF_Scaler * .75}x gtceu:${Cable}_single_cable`],
                [`gtceu:soldering_alloy ${MCSF_Scaler * .75 * 144 * (2 ** scale)}`], 6);

            MCSF_Components_PreUHV('sensor', [`${MCSF_Scaler * .75}x gtceu:${Frame}_frame`, `${MCSF_Scaler * .75}x gtceu:${Tier}_electric_motor`, `${4 * MCSF_Scaler * .75}x gtceu:${SenMat}_plate`, `${MCSF_Scaler * .75}x gtceu:${Catalyst}`, `${2 * MCSF_Scaler * .75}x #gtceu:circuits/${Tier}`, `${16 * MCSF_Scaler * .75}x gtceu:${SenFoil}_foil`, `${16 * MCSF_Scaler * .75}x gtceu:${SenFoil}_foil`, `${16 * MCSF_Scaler * .75}x gtceu:${SenFoil}_foil`, `${16 * MCSF_Scaler * .75}x gtceu:${SenFoil}_foil`, `${16 * MCSF_Scaler * .75}x gtceu:${SenFoil}_foil`, `${16 * MCSF_Scaler * .75}x gtceu:${SenFoil}_foil`, `${4 * MCSF_Scaler * .75}x gtceu:${Cable}_single_cable`],
                [`gtceu:soldering_alloy ${MCSF_Scaler * .75 * 144 * (2 ** scale)}`], 7);
        }

    }

    preUHVmaterialList(1, 'luv', 'iv', 'ev', 'hsss', 'hsss', 'ruridit', 'niobium_titanium', 'niobium_titanium', 'indium_tin_barium_titanium_cuprate', 'quantum_star', 'ruridit', 'palladium', 'hsss', 6000);
    preUHVmaterialList(2, 'zpm', 'luv', 'iv', 'osmiridium', 'osmiridium', 'europium', 'vanadium_gallium', 'polybenzimidazole', 'uranium_rhodium_dinaquadide', 'quantum_star', 'osmiridium', 'trinium', 'naquadah_alloy', 24000);
    preUHVmaterialList(3, 'uv', 'zpm', 'luv', 'tritanium', 'naquadah_alloy', 'americium', 'yttrium_barium_cuprate', 'naquadah', 'enriched_naquadah_trinium_europium_duranide', 'gravi_star', 'tritanium', 'naquadria', 'tritanium', 100000);

});
