ServerEvents.recipes(event => {
    const id = global.id;
    
    // === Controller Blocks === 
        event.recipes.gtceu.assembly_line(id('component_part_assembly'))
        .itemInputs('gtceu:uv_assembler','8x gtceu:uv_robot_arm','8x gtceu:uv_conveyor_module',
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

    // === Draco-QMDs ===
    const DracoQMD = (nameType,type,quantity,inputs,polymerAmount,cwu) => {
    event.recipes.gtceu.component_part_assembly(id(`draconic_qmd_${nameType}`))
        .itemInputs(inputs)
        .inputFluids(`gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate ${polymerAmount}`)
        .itemOutputs(`${quantity}x kubejs:draconic_qmd_${type}`)
        .duration(240 * quantity / 16)
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
    }

    DracoQMD('inductor', 'inductor', 16, ['1x gtceu:neutronium_ring', '4x gtceu:fine_naquadria_wire', '1x gtceu:ferrosilite_dust'], 144, 180);
    DracoQMD('transistor', 'transistor', 16, ['1x gtceu:pure_netherite_foil', '8x gtceu:fine_tritanium_wire', '1x gtceu:aurourium_foil'], 144, 180);
    DracoQMD('capacitor', 'capacitor', 16, ['2x gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate_foil', '2x gtceu:zalloy_foil', '1x gtceu:cerium_tritelluride_foil'], 108, 180);
    DracoQMD('resistor', 'resistor', 16, ['1x gtceu:diamane_dust', '6x gtceu:fine_yttrium_barium_cuprate_wire', '4x gtceu:bismuth_iridate_foil'], 144, 180);
    DracoQMD('diode_nt', 'diode', 24, ['2x gtceu:silicon_carbide_over_bismuth_tritelluride_dust', '1x kubejs:neutronium_chip', '8x gtceu:fine_stellarium_wire'], 288, 156);
    DracoQMD('diode_dr', 'diode', 32, ['2x gtceu:silicon_carbide_over_bismuth_tritelluride_dust', '1x kubejs:draco_chip', '8x gtceu:fine_stellarium_wire'], 288, 180);

    // === Material List Loader ===    
        const materialList = (Tier,Tier1,Tier2,Primary,Support,Material,RubberR,RubberF,Plastic,Lubricant,WireTypeComputational,WireTypeMechanical,CableType,GlassType,CatalystType,PrimaryMagnet,SecondaryMagnet,Fluid,VoltageCoil,eut,Scaler,Coolant,SuperConductor,cwu) => {
    
    // === Component Parts ===
        const componentParts = (type,inputs,fluids,duration,researched) => {
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
        event.recipes.gtceu.research_station(`1_x_${researched.replace(':','_')}`)
            .itemInputs(dataItem)
            .itemInputs(researched)
            .itemOutputs(Item.of(`${dataItem}`, `{assembly_line_research:{research_id:"1x_${researched.replace(':','_')}",research_type:"gtceu:component_part_assembly"}}`))
            .CWUt(cwu)
            .totalCWU(cwu * (Scaler * 30 + 120) * 20)
            .EUt(eut / 4);
        }

        {
            let CoilMod = (Tier == 'uhv') ? 'gtceu' : 'kubejs' ;
        componentParts('voltage_coil', [`gtceu:${Material}_tiny_fluid_pipe`, `gtceu:long_magnetic_${PrimaryMagnet}_rod`, `32x gtceu:fine_${VoltageCoil}_wire`],
            [`gtceu:${Coolant} 1000`], 200, `${CoilMod}:${Tier1}_voltage_coil`);
        };
        {
            let PriorTier = (Tier == 'uhv') ? 'ruined' : Tier1 ;
        componentParts('computational_matrix', [`gtceu:${Primary}_frame`, `1x #gtceu:circuits/${Tier}`, `2x #gtceu:circuits/${Tier1}`, `3x #gtceu:circuits/${Tier2}`, `4x gtceu:fine_${WireTypeComputational}_wire`, `${2*(2**Scaler)}x kubejs:qram_chip`],
            [`gtceu:sterilized_growth_medium ${250+Scaler*250}`, `gtceu:indium_tin_lead_cadmium_soldering_alloy ${72+Scaler*72}`], 400, `kubejs:${PriorTier}_computational_matrix`);
        
        componentParts('transmission_assembly', [`gtceu:${Primary}_frame`, `gtceu:${Tier1}_electric_motor`, `2x gtceu:${Primary}_rod`, `2x gtceu:${Primary}_ring`, `8x gtceu:${Primary}_round`, `64x gtceu:fine_${WireTypeMechanical}_wire`],
            [`gtceu:${Lubricant} ${250+Scaler*250}`], 320, `kubejs:${PriorTier}_transmission_assembly`);
        
        componentParts('precision_drive_mechanism', [`gtceu:${Primary}_frame`, `gtceu:${Tier1}_electric_motor`, `#gtceu:circuits/${Tier1}`, `gtceu:${Support}_gear`, `gtceu:small_${Primary}_gear`, `8x gtceu:${Primary}_round`],
            [`gtceu:${Lubricant} ${250+Scaler*250}`, `gtceu:${RubberF} 1728`], 480, `kubejs:${PriorTier}_precision_drive_mechanism`);
        
        componentParts('microfluidic_flow_valve', [`gtceu:${Tier1}_fluid_regulator`, `gtceu:${Material}_small_fluid_pipe`, `2x gtceu:${Primary}_plate`, `6x gtceu:${Primary}_round`, `4x gtceu:${RubberR}_ring`, `6x gtceu:${Primary}_ring`],
            [`gtceu:${Plastic} ${396+Scaler*36}`], 320, `kubejs:${PriorTier}_microfluidic_flow_valve`);
        
        componentParts('super_magnetic_core', [`gtceu:long_magnetic_${PrimaryMagnet}_rod`, `2x gtceu:magnetic_${SecondaryMagnet}_rod`, `3x gtceu:${Primary}_rod`, `24x gtceu:fine_${WireTypeMechanical}_wire`, `2x gtceu:${Material}_tiny_fluid_pipe`],
            [`gtceu:${Coolant} 2500`], 300, `kubejs:${PriorTier}_super_magnetic_core`);
        
        componentParts('catalyst_core', [`4x gtceu:long_${Primary}_rod`, `${GlassType}`, `${CatalystType}`, `32x gtceu:fine_${SuperConductor}_wire`, `gtceu:${Tier1}_emitter`, `4x gtceu:${Support}_ring`],
            [`gtceu:${Fluid} 576`], 480, `kubejs:${PriorTier}_catalyst_core`);
        
        componentParts('high_strength_panel', [`2x gtceu:double_${Primary}_plate`, `#gtceu:circuits/${Tier1}`, `8x gtceu:${Support}_screw`],
            [`gtceu:${Material} 576`, `gtceu:${Plastic} ${396+Scaler*36}`], 200, `kubejs:${PriorTier}_high_strength_panel`);
    
        componentParts('micropower_router', [`gtceu:${CableType}_double_cable`, `4x gtceu:${CableType}_single_cable`, `4x gtceu:${Primary}_plate`, `32x gtceu:fine_${WireTypeComputational}_wire`],
            [`gtceu:${RubberF} 720`], 240, `kubejs:${PriorTier}_micropower_router`);
        };
    // === Components ===
        const components = (type,inputs,fluids,duration) => {
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
    }

        components('electric_motor', [`kubejs:${Tier}_super_magnetic_core`, `2x gtceu:long_${Primary}_rod`, `kubejs:${Tier}_transmission_assembly`, `kubejs:${Tier}_micropower_router`, `64x gtceu:fine_${WireTypeMechanical}_wire`],
            [`gtceu:indium_tin_lead_cadmium_soldering_alloy ${288*(2**Scaler)}`, `gtceu:${Lubricant} ${500+Scaler*500}`, `gtceu:${Fluid} 576`], 600);
        
        components('electric_pump', [`gtceu:${Tier}_electric_motor`, `gtceu:${Material}_large_fluid_pipe`, `kubejs:${Tier}_microfluidic_flow_valve`, `kubejs:${Tier}_micropower_router`, `16x gtceu:${RubberR}_ring`, `gtceu:${Support}_rotor`],
            [`gtceu:indium_tin_lead_cadmium_soldering_alloy ${288*(2**Scaler)}`, `gtceu:${Lubricant} ${500+Scaler*500}`, `gtceu:${Fluid} 576`], 600);
        
        components('conveyor_module', [`2x gtceu:${Tier}_electric_motor`, `kubejs:${Tier}_high_strength_panel`, `kubejs:${Tier}_precision_drive_mechanism`, `kubejs:${Tier}_transmission_assembly`, `kubejs:${Tier}_micropower_router`],
            [`gtceu:indium_tin_lead_cadmium_soldering_alloy ${288*(2**Scaler)}`, `gtceu:${Lubricant} ${500+Scaler*500}`, `gtceu:${RubberF} 3456`, `gtceu:${Fluid} 576`], 600);
        
        components('electric_piston', [`gtceu:${Tier}_electric_motor`, `2x kubejs:${Tier}_high_strength_panel`, `2x kubejs:${Tier}_transmission_assembly`, `kubejs:${Tier}_micropower_router`, `gtceu:${Support}_gear`, `gtceu:small_${Primary}_gear`],
            [`gtceu:indium_tin_lead_cadmium_soldering_alloy ${288*(2**Scaler)}`, `gtceu:${Lubricant} ${500+Scaler*500}`, `gtceu:${Fluid} 576`], 600);
        
        components('robot_arm', [`4x gtceu:long_${Primary}_rod`, `kubejs:${Tier}_precision_drive_mechanism`, `2x kubejs:${Tier}_transmission_assembly`, `2x gtceu:${Tier}_electric_motor`, `gtceu:${Tier}_electric_piston`, `3x kubejs:${Tier}_computational_matrix`, `2x kubejs:${Tier}_micropower_router`],
            [`gtceu:indium_tin_lead_cadmium_soldering_alloy ${864*(2**Scaler)}`, `gtceu:${Lubricant} ${500+Scaler*500}`, `gtceu:${Fluid} 576`], 600);
       
        components('field_generator', [`gtceu:${Primary}_frame`, `2x kubejs:${Tier}_high_strength_panel`, `kubejs:${Tier}_catalyst_core`, `2x gtceu:${Tier}_emitter`, `2x kubejs:${Tier}_computational_matrix`, `64x gtceu:fine_${SuperConductor}_wire`, `2x kubejs:${Tier}_micropower_router`],
            [`gtceu:indium_tin_lead_cadmium_soldering_alloy ${864*(2**Scaler)}`, `gtceu:${Fluid} 576`], 600);
        
        components('emitter', [`gtceu:${Primary}_frame`, `gtceu:${Tier}_electric_motor`, `4x gtceu:long_${Primary}_rod`, `1x kubejs:${Tier}_catalyst_core`, `1x kubejs:${Tier}_computational_matrix`, `64x gtceu:${Material}_foil`, `1x kubejs:${Tier}_micropower_router`],
            [`gtceu:indium_tin_lead_cadmium_soldering_alloy ${288*(2**Scaler)}`, `gtceu:${Lubricant} ${500+Scaler*500}`, `gtceu:${Fluid} 576`], 600);
        
        components('sensor', [`gtceu:${Primary}_frame`, `gtceu:${Tier}_electric_motor`, `4x gtceu:${Primary}_plate`, `1x kubejs:${Tier}_catalyst_core`, `1x kubejs:${Tier}_computational_matrix`, `64x gtceu:${Material}_foil`, `1x kubejs:${Tier}_micropower_router`],
            [`gtceu:indium_tin_lead_cadmium_soldering_alloy ${288*(2**Scaler)}`, `gtceu:${Lubricant} ${500+Scaler*500}`, `gtceu:${Fluid} 576`], 600);

        event.recipes.gtceu.assembler(id(`${Tier}_fluid_regulator`))
            .itemInputs(`gtceu:${Tier}_electric_pump`, `2x #gtceu:circuits/${Tier}`)
            .itemOutputs(`gtceu:${Tier}_fluid_regulator`)
            .duration(50)
            .EUt(eut)
            .circuit(1);

    }

    materialList('uhv', 'uv', 'zpm', 'zalloy', 'zircalloy_4', 'neutronium', 'styrene_butadiene_rubber', 'perfluoroelastomer_rubber', 'polyether_ether_ketone', 'lubricant', 'iron_selenide_over_strontium_titanium_oxide', 'zirconium', 'zirconium_selenide_diiodide', 'gtceu:fusion_glass', 'gtceu:gravi_star', 'pure_netherite', 'samarium', 'naquadria', 'thorium_plut_duranide_241', GTValues.VHA[GTValues.UHV], 1, 'liquid_helium', 'ruthenium_trinium_americium_neutronate', 128);
    materialList('uev', 'uhv', 'uv', 'starium_alloy', 'magmada_alloy', 'mythrolic_alloy', 'styrene_butadiene_rubber', 'perfluoroelastomer_rubber', 'polyether_ether_ketone', 'lubricant', 'astatine_bis_tritelluride_cobo_selenium_over_iron_titanium_oxide', 'adamantine', 'astatium_bioselex_carbonite', 'gtceu:fusion_glass', 'kubejs:helish_star', 'zapolgium', 'pure_netherite', 'isovol', 'aurourium', GTValues.VHA[GTValues.UEV], 2, 'liquid_helium', 'seaborgium_palladium_enriched_estalt_flerovium_alloy', 160);
    materialList('uiv', 'uev', 'uhv', 'ohmderblux_alloy', 'abyssal_alloy', 'chaotixic_alloy', 'perfluoroelastomer_rubber', 'perfluoroelastomer_rubber', 'poly_34_ethylenedioxythiophene_polystyrene_sulfate', 'tungsten_disulfide', 'polonium_flux', 'xeproda', 'hafnide_ito_ceramic', 'kubejs:draco_resilient_fusion_glass', 'kubejs:dragonic_eye', 'zapolgium', 'pure_netherite', 'calamatium', 'magmada_alloy', GTValues.VHA[GTValues.UIV], 3, 'superstate_helium_3', 'rhenium_super_composite_alloy', 192);

});

    