ServerEvents.recipes(event => {
    const id = global.id;

    const casing = (type,material,casing_id) => {

        event.shaped(Item.of(`2x ${casing_id}:${type}_casing`), [
            'PHP',
            'PFP',
            'PWP'
        ], {
            P: `gtceu:${material}_plate`,
            F: `gtceu:${material}_frame`,
            H: '#forge:tools/hammers',
            W: '#forge:tools/wrenches'
        }).id(`start:shaped/${type}_casing`);

        event.recipes.gtceu.assembler(id(`${type}_casing`))
            .itemInputs(`6x gtceu:${material}_plate`, `gtceu:${material}_frame`)
            .itemOutputs(`2x ${casing_id}:${type}_casing`)
            .duration(50)
            .EUt(16)
            .circuit(6);

    };

    casing('soul_infused','soul_infused' ,'kubejs');
    casing('signalum','signalum' ,'kubejs');
    casing('lumium','lumium' ,'kubejs');
    casing('enderium','enderium' ,'kubejs');
    casing('shellite','shellite' ,'kubejs');
    casing('twinite','twinite' ,'kubejs');
    casing('dragonsteel','dragonsteel' ,'kubejs');
    casing('prismalium','prismalium' ,'kubejs');
    casing('melodium','melodium' ,'kubejs');
    casing('stellarium','stellarium' ,'kubejs');
    casing('ancient_runicalium','ancient_runicalium' ,'kubejs');
    casing('austenitic_stainless_steel_304','austenitic_stainless_steel_304' ,'kubejs');
    casing('inconel_625','inconel_625' ,'kubejs');
    casing('birmabright','birmabright' ,'kubejs');
    casing('duralumin','duralumin' ,'kubejs');
    casing('hydronalium','hydronalium' ,'kubejs');
    casing('beryllium_aluminium_alloy','beryllium_aluminium_alloy' ,'kubejs');
    casing('elgiloy','elgiloy' ,'kubejs');
    casing('beryllium_bronze','beryllium_bronze' ,'kubejs');
    casing('silicon_bronze','silicon_bronze' ,'kubejs');
    casing('kovar','kovar' ,'kubejs');
    casing('zamak','zamak' ,'kubejs');
    casing('tumbaga','tumbaga' ,'kubejs');
    casing('sterling_silver','sterling_silver' ,'kubejs');
    casing('blue_steel','blue_steel' ,'kubejs');
    casing('red_steel','red_steel' ,'kubejs');
    casing('enriched_naquadah_machine','enriched_naquadah' ,'kubejs');
    casing('fluix_steel','fluix_steel' ,'kubejs');
    casing('black_steel', 'black_steel', 'kubejs');
    casing('manganin', 'manganin', 'kubejs');
    casing('galvanized_steel', 'galvanized_steel', 'kubejs');

    const casingDouble = (type,material,casing_id) => {

        event.shaped(Item.of(`${casing_id}:${type}_casing`,2), [
            'PHP',
            'PFP',
            'PWP'
        ], {
            P: `gtceu:double_${material}_plate`,
            F: `gtceu:${material}_frame`,
            H: '#forge:tools/hammers',
            W: '#forge:tools/wrenches'
        }).id(`start:shaped/${type}_casing`);

        event.recipes.gtceu.assembler(id(`${type}_casing`))
            .itemInputs(`6x gtceu:double_${material}_plate`, `gtceu:${material}_frame`)
            .itemOutputs(`2x ${casing_id}:${type}_casing`)
            .duration(50)
            .EUt(16)
            .circuit(6);

    };

    casingDouble('atomic','trinaquadalloy','gtceu');
    casingDouble('noble_mixing','astrenalloy_nx','kubejs');
    casingDouble('quake_proof','thacoloy_nq_42x','kubejs');
    casingDouble('superalloy','lepton_coalescing_superalloy','kubejs');
    casingDouble('nyanium_machine','nyanium' ,'kubejs');

    event.recipes.gtceu.assembler(id('silicone_rubber_casing'))
        .itemInputs('gtceu:solid_machine_casing')
        .inputFluids('gtceu:silicone_rubber 216')
        .itemOutputs('kubejs:silicone_rubber_casing')
        .duration(50)
        .EUt(GTValues.VH[GTValues.MV])
        .circuit(6);

    const turbine = (type,material,casing_id) => {

        event.shaped(Item.of(`${casing_id}:${type}_turbine_casing`,2), [
            'PHP',
            'PFP',
            'PWP'
        ], {
            P: `gtceu:${material}_plate`,
            F: `gtceu:steel_turbine_casing`,
            H: '#forge:tools/hammers',
            W: '#forge:tools/wrenches'
        }).id(`start:shaped/${type}_turbine_casing`);

        event.recipes.gtceu.assembler(id(`${type}_turbine_casing`))
            .itemInputs(`6x gtceu:${material}_plate`, `gtceu:steel_turbine_casing`)
            .itemOutputs(`2x ${casing_id}:${type}_turbine_casing`)
            .duration(50)
            .EUt(16)
            .circuit(6);

    };

    turbine('pallaridium','palladium','kubejs');
    turbine('enriched_naquadah','enriched_naquadah','kubejs');
    turbine('nyanium','nyanium','kubejs')

    const firebox = (type,material,frame,casing_id) => {

        event.shaped(`2x ${casing_id}:${type}_firebox_casing`, [
            'PRP',
            'RFR',
            'PRP'
        ], {
            P: `gtceu:${material}_plate`,
            F: `gtceu:${frame}_frame`,
            R: `gtceu:${material}_rod`
        }).id(`${casing_id}:${type}_firebox_casing`);

    };

    firebox('pallaridium','palladium','iridium','kubejs');
    firebox('enriched_naquadah','enriched_naquadah','enriched_naquadah','kubejs');
    firebox('nyanium','nyanium','nyanium','kubejs')

    const heat_escape = (type,material,frame,casing_id) => {

        event.shaped(`2x ${casing_id}:${type}_heat_escape_casing`, [
            'PTP',
            'RFR',
            'PTP'
        ], {
            T:  `gtceu:${material}_rotor`,
            P: `gtceu:${material}_plate`,
            F: `gtceu:${frame}_frame`,
            R: `gtceu:${material}_rod`
        }).id(`${casing_id}:${type}_heat_escape_casing`);

    };

    heat_escape('enriched_naquadah','enriched_naquadah','enriched_naquadah','kubejs');
    heat_escape('nyanium','nyanium','nyanium','kubejs')

    const gearbox = (type,material,frame,casing_id) => {

        event.shaped(`2x ${casing_id}:${type}_gearbox`, [
            'PHP',
            'GFG',
            'PWP'
        ], {
            P:  `gtceu:${material}_plate`,
            F:  `gtceu:${frame}_frame`,
            G:  `gtceu:${frame}_gear`,
            H: '#forge:tools/hammers',
            W: '#forge:tools/wrenches'
        }).id(`${casing_id}:${type}_gearbox`);

        event.recipes.gtceu.assembler(id(`${material}_gearbox`))
            .itemInputs(`4x gtceu:${material}_plate`,`2x gtceu:${frame}_gear`,`gtceu:${frame}_frame`)
            .itemOutputs(`2x ${casing_id}:${type}_gearbox`)
            .duration(50)
            .EUt(16)
            .circuit(4);

    };

    gearbox('pallaridium','palladium','iridium','kubejs');
    gearbox('enriched_naquadah','enriched_naquadah','enriched_naquadah','kubejs');
    gearbox('nyanium','nyanium','nyanium','kubejs');

    const pipe = (type,material,pipe,casing_id) => {

        event.shaped(`2x ${casing_id}:${type}_pipe_casing`, [
            'PLP',
            'LFL',
            'PLP'
        ], {
            P:  `gtceu:${material}_plate`,
            F:  `gtceu:${pipe}_frame`,
            L:  `gtceu:${pipe}_normal_fluid_pipe`
        }).id(`${casing_id}:${type}_pipe_casing`);

        event.recipes.gtceu.assembler(id(`${type}_pipe_casing`))
            .itemInputs(`4x gtceu:${material}_plate`, `1x gtceu:${pipe}_frame`, `4x gtceu:${pipe}_normal_fluid_pipe`)
            .itemOutputs(`2x ${casing_id}:${type}_pipe_casing`)
            .duration(50)
            .EUt(GTValues.VH[GTValues.LV])
            .circuit(9);
    };

    pipe('pallaridium','palladium','iridium','kubejs');
    pipe('enriched_naquadah','enriched_naquadah','enriched_naquadah','kubejs');
    pipe('nyanium','nyanium','nyanium','kubejs');

    const engine_intake = (type,material,pipe,casing_id,used_casing) => {

        event.shaped(`2x ${casing_id}:${type}_engine_intake_casing`, [
            'PHP',
            'RFR',
            'PWP'
        ], {
            P:  `gtceu:${pipe}_normal_fluid_pipe`,
            F:  `${used_casing}`,
            R:  `gtceu:${material}_rotor`,
            H: '#forge:tools/hammers',
            W: '#forge:tools/wrenches'
        }).id(`${casing_id}:${type}_engine_intake_casing`);

        event.recipes.gtceu.assembler(id( `${type}_engine_intake_casing`))
            .itemInputs(`2x gtceu:${material}_rotor`,`4x gtceu:${pipe}_normal_fluid_pipe`,`${used_casing}`)
            .itemOutputs(`2x ${casing_id}:${type}_engine_intake_casing`)
            .duration(50)
            .EUt(16);

    };

    engine_intake('pallaridium','palladium','iridium','kubejs','gtceu:palladium_substation');
    engine_intake('enriched_naquadah','enriched_naquadah','enriched_naquadah','kubejs','kubejs:enriched_naquadah_machine_casing');
    engine_intake('nyanium','nyanium','nyanium','kubejs','kubejs:nyanium_machine_casing');

    event.recipes.gtceu.assembler(id('extreme_temperature_smelting_casing'))
        .itemInputs('4x gtceu:calamatium_plate', '2x gtceu:astatium_bioselex_carbonite_plate', 'gtceu:enriched_estalt_frame')
        .itemOutputs('2x kubejs:extreme_temperature_smelting_casing')
        .circuit(6)
        .duration(50)
        .EUt(16);

    event.recipes.gtceu.assembler(id('subzero_casing'))
        .itemInputs('4x gtceu:aluminium_plate', '2x gtceu:pure_netherite_plate', 'gtceu:void_frame')
        .itemOutputs('2x kubejs:subzero_casing')
        .circuit(6)
        .duration(50)
        .EUt(16);

    event.recipes.gtceu.assembler(id('draneko_casing'))
        .itemInputs('gtceu:nyanium_frame', '4x gtceu:double_isovol_plate', '2x gtceu:double_nyanium_plate', '6x kubejs:draconic_scale_cells')
        .inputFluids('gtceu:dragon_breath 1750')
        .itemOutputs('2x kubejs:draneko_casing')
        .circuit(8)
        .duration(50)
        .EUt(16);

    const ultimate_casing = (nameCasing,plate,frameMat) => {
        event.recipes.gtceu.assembler(id(`${nameCasing}_casing`))
            .itemInputs(`6x gtceu:double_${plate}_plate`, `gtceu:${frameMat}_frame`)
            .itemOutputs(`2x kubejs:${nameCasing}_casing`)
            .circuit(6)
            .duration(50)
            .EUt(16);
    };

    ultimate_casing('advanced_assembly', 'expetidalloy_d_17', 'isovol');
    ultimate_casing('superdense_machine', 'neutronium', 'zircalloy_4');
    ultimate_casing('aurouric_resilient', 'borealic_steel', 'stellarium');
    ultimate_casing('inoculated_nuclei_seperation', 'ultispestalloy_cmsh', 'zeroidic_trinate_steel');
    ultimate_casing('ionic_engraving', 'trikoductive_neutro_steel', 'expetidalloy_d_17');
    ultimate_casing('atomic_convergence', 'melastrium_mox', 'vastaqalloy_cr_4200x');
    ultimate_casing('gravitationally_strained_stabilization', 'hvga_steel', 'draco_abyssal');
    ultimate_casing('subatomically_secure', 'mythrotight_carbide_steel', 'aerorelient_steel');
    ultimate_casing('quantumly_resistant', 'aerorelient_steel', 'mythrotight_carbide_steel');
    ultimate_casing('absolute_annihilation', 'zeroidic_trinate_steel', 'ultispestalloy_cmsh');
    ultimate_casing('tectonic_defiance', 'vastaqalloy_cr_4200x', 'melastrium_mox');
    ultimate_casing('true_revitilization', 'soul_ascendant_cuperite', 'soul_infused');

    const special_ultimate_casing = (nameCasing,inputs,fluids,researched) => {
        event.recipes.gtceu.assembly_line(id(`${nameCasing}`))
            .itemInputs(inputs)
            .inputFluids(fluids)
            .itemOutputs(`2x kubejs:${nameCasing}`)
            .duration(400)
            .stationResearch(
                researchRecipeBuilder => researchRecipeBuilder
                    .researchStack(Item.of(researched))
                    .EUt(GTValues.VA[GTValues.UEV])
                    .CWUt(216)
                )
            .EUt(GTValues.VHA[GTValues.UIV]);
    };

    special_ultimate_casing('aurouric_polarization_cell',['kubejs:aurouric_resilient_casing', '6x kubejs:uiv_super_magnetic_core', '4x #gtceu:circuits/uiv', 'kubejs:uiv_micropower_router'], ['gtceu:polyether_ether_ketone 5844', 'gtceu:naquadated_soldering_alloy 4780', 'gtceu:draco_abyssal 288'], 'gtceu:electrolytic_cell');
    special_ultimate_casing('absolute_annihilators',['kubejs:absolute_annihilation_casing', '4x gtceu:melastrium_mox_gear', '6x gtceu:small_hvga_steel_gear', '2x gtceu:uiv_electric_motor'], ['gtceu:tungsten_disulfide 5844', 'gtceu:naquadated_soldering_alloy 4780', 'gtceu:starium_alloy 432'], 'gtceu:crushing_wheels');
    special_ultimate_casing('nuclei_seperators',['kubejs:inoculated_nuclei_seperation_casing', '6x gtceu:hvga_steel_plate', '4x gtceu:trikoductive_neutro_steel_gear', '1x gtceu:uiv_electric_motor'], ['gtceu:tungsten_disulfide 5844', 'gtceu:naquadated_soldering_alloy 4780', 'gtceu:mythrolic_alloy 432'], 'gtceu:slicing_blades');

    special_ultimate_casing('draco_assembly_grating',['gtceu:void_frame', '5x gtceu:aerorelient_steel_rotor', '2x gtceu:uev_electric_motor', '12x gtceu:void_foil'], ['gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 1008', 'gtceu:dragon_breath 1750'], 'gtceu:assembly_line_grating');
    special_ultimate_casing('draco_ware_casing',['gtceu:trikoductive_neutro_steel_frame', '6x kubejs:draconic_brain_matter_cells', '2x #gtceu:circuits/uev', 'gtceu:uev_sensor', '32x gtceu:fine_aurourium_wire', '32x gtceu:fine_magmada_alloy_wire'], ['gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 1008', 'gtceu:dragon_breath 2250'], 'gtceu:high_power_casing');
    special_ultimate_casing('draco_resilient_fusion_glass',['kubejs:reinforced_fusion_glass', '12x kubejs:draconic_scale_cells', '1x gtceu:uhv_field_generator', '6x kubejs:borealic_neutron_reflector'], ['gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 1008', 'gtceu:dragon_breath 1250'], 'gtceu:fusion_glass');
    special_ultimate_casing('abyssal_inductor_hull',['gtceu:abyssal_alloy_frame', '2x kubejs:abyssal_inductor', 'kubejs:uiv_microfluidic_flow_valve', '2x kubejs:voidic_reinforced_mesh', '#gtceu:circuits/uiv', '8x gtceu:polonium_bismide_single_cable'], ['gtceu:naquadated_soldering_alloy 864', 'gtceu:dragon_breath 400'], 'kubejs:abyssal_inductor');

    special_ultimate_casing('abyssal_inductor',['gtceu:uiv_emitter', '3x gtceu:lepton_resonant_thallium_antimonide_spring', '6x gtceu:draco_abyssal_screw', '6x gtceu:polonium_bismide_single_cable'], ['gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 720', 'gtceu:borealic_concentrate 576'], 'gtceu:blacklight');

    special_ultimate_casing('primordial_assembly_grating',['gtceu:draco_abyssal_frame', '5x gtceu:abyssal_alloy_rotor', '2x gtceu:uiv_electric_motor', '12x gtceu:draconyallium_foil'], ['gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 3024', 'gtceu:pure_dragon_breath 875'], 'kubejs:draco_assembly_grating');
    special_ultimate_casing('primordial_ware_casing',['gtceu:draconyallium_frame', '16x kubejs:draconic_brain_matter_cells', '2x #gtceu:circuits/uiv', 'gtceu:uiv_sensor', '32x gtceu:fine_rhenate_w_wire', '32x gtceu:fine_draco_abyssal_wire'], ['gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 3024', 'gtceu:dragon_breath 1000'], 'kubejs:draco_ware_casing');
    
    event.recipes.gtceu.assembler(id('tritanic_blasting_casing'))
        .itemInputs('6x gtceu:tritan_steel_plate', 'gtceu:naquadah_alloy_frame')
        .itemOutputs('2x kubejs:tritanic_blasting_casing')
        .circuit(6)
        .duration(50)
        .EUt(16);

    event.recipes.gtceu.assembler(id('aberration_casing'))
        .itemInputs('6x gtceu:double_borealic_steel_plate', 'gtceu:draconyallium_frame')
        .itemOutputs('2x kubejs:aberration_casing')
        .circuit(6)
        .duration(50)
        .EUt(16);

    event.recipes.gtceu.assembler(id('infernally_reinforced_casing'))
        .itemInputs('6x gtceu:double_draconyallium_plate', 'gtceu:ultispestalloy_cmsh_frame')
        .itemOutputs('2x kubejs:infernally_reinforced_casing')
        .circuit(6)
        .duration(50)
        .EUt(16);

    event.recipes.gtceu.assembler(id('absolute_temperature_smelting_casing'))
        .itemInputs('4x gtceu:hvga_steel_plate', '2x gtceu:double_zeroidic_trinate_steel_plate', 'gtceu:draco_abyssal_frame')
        .itemOutputs('2x kubejs:absolute_temperature_smelting_casing')
        .circuit(6)
        .duration(50)
        .EUt(16);

    event.shaped('2x kubejs:superdense_assembly_control_casing', [
        `PGP`,
        `AFA`,
        `PGP`
    ], {
        P: 'gtceu:double_neutronium_plate',
        G: 'gtceu:pure_netherite_gear',
        A: 'gtceu:uhv_robot_arm',
        F: 'gtceu:zircalloy_4_frame'
    });

    event.shaped('2x kubejs:superdense_assembly_machine_casing', [
        `CUC`,
        `SFE`,
        `CMC`
    ], {
        C: '#gtceu:circuits/uv',
        U: 'gtceu:uhpic_chip',
        S: 'gtceu:uhv_sensor',
        E: 'gtceu:uhv_emitter',
        M: 'gtceu:uhv_electric_motor',
        F: 'gtceu:zircalloy_4_frame'
    });

    event.recipes.gtceu.compressor(id('reinforced_brimstone_casing'))
        .itemInputs('16x kubejs:brimstone')
        .itemOutputs('kubejs:reinforced_brimstone_casing')
        .duration(320)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.compressor(id('reinforced_cryostone_casing'))
        .itemInputs('16x kubejs:cryostone')
        .itemOutputs('kubejs:reinforced_cryostone_casing')
        .duration(320)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.assembler(id(`polycarbonate_casing`))
        .itemInputs(`gtceu:clean_machine_casing`)
        .inputFluids(`gtceu:polycarbonate 216`)
        .itemOutputs(`kubejs:polycarbonate_casing`)
        .duration(200)
        .EUt(GTValues.VHA[GTValues.LuV]);

    event.shaped(Item.of(`2x gtceu:palladium_substation`), [
            'PHP',
            'PFP',
            'PWP'
        ], {
            P: `gtceu:palladium_plate`,
            F: `gtceu:iridium_frame`,
            H: '#forge:tools/hammers',
            W: '#forge:tools/wrenches'
        }).id(`start:shaped/palladium_substation`);

    const hermeticCasing = (tier) => {
        const casingMaterial = global.componentMaterials[tier].materials.tierMaterial;
        const pipeMaterial = global.componentMaterials[tier].materials.pipeMaterial;
        const toRemoveList = ['luv', 'zpm', 'uv'];
        const isGt = ['lv', 'mv', 'hv', 'ev', 'iv', 'luv', 'zpm', 'uv', 'uhv'];
        const prefix = (isGt.includes(tier)) ? 'gtceu:' : 'kubejs:';

        if (toRemoveList.includes(tier)) {
            event.remove({ output: `gtceu:${tier}_hermetic_casing` })
        }

        event.shaped(`${prefix + tier}_hermetic_casing`, [
            'PPP',
            'PHP',
            'PPP'
        ], {
            P: `gtceu:${casingMaterial}_plate`,
            H: `gtceu:${pipeMaterial}_large_fluid_pipe`
        }).id(id(`${tier}_hermetic_casing`));

        event.recipes.gtceu.assembler(id(`${tier}_hermetic_casing`))
            .itemInputs(`8x gtceu:${casingMaterial}_plate`, `1x gtceu:${pipeMaterial}_large_fluid_pipe`)
            .itemOutputs(`${prefix + tier}_hermetic_casing`)
            .circuit(10)
            .duration(50)
            .EUt(GTValues.VH[GTValues.LV]);
    }

    [
        'luv', 'zpm', 'uv', 'uhv'
    ].forEach(tier => {
        hermeticCasing(tier);
    })

    event.recipes.gtceu.assembler(id('peek_casing'))
        .itemInputs('gtceu:robust_machine_casing')
        .inputFluids('gtceu:polyether_ether_ketone 216')
        .circuit(6)
        .itemOutputs('kubejs:peek_casing')
        .duration(600)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.assembler(id('cattomolymer_casing'))
        .itemInputs('kubejs:nyanium_machine_casing')
        .inputFluids('gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 216')
        .circuit(6)
        .itemOutputs('kubejs:cattomolymer_casing')
        .EUt(GTValues.VHA[GTValues.UHV])
        .duration(750);

    event.recipes.gtceu.assembler(id('rhenotax_coil'))
        .itemInputs('gtceu:astrenalloy_nx_frame', '8x gtceu:rhenate_w_double_wire', '16x gtceu:tantalum_carbide_foil',
            '32x gtceu:hafnide_ito_ceramic_ring', '64x gtceu:neutronium_silicon_carbide_foil')
        .inputFluids('gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 432')
        .itemOutputs('kubejs:rhenotax_coil')
        .EUt(GTValues.VHA[GTValues.UIV])
        .duration(1200);

});