ServerEvents.recipes(event => {
    const id = global.id;

    // === Controllers ===
    const wirelessControllers = (type, inputs, fluids, research, cwu, eu) => {
    event.recipes.gtceu.assembly_line(id(type))
        .itemInputs(inputs)
        .inputFluids(fluids)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(research)
                .EUt(eu / 2)
                .CWUt(cwu)
        )
        .itemOutputs(`start_core:${type}`)
        .duration(600)
        .EUt(eu);
    }
    wirelessControllers('dream_link_node', ['gtceu:uv_machine_hull', '8x #gtceu:circuits/uhv', '12x gtceu:uv_field_generator','4x gtceu:dense_darmstadtium_plate','8x gtceu:uv_emitter',
        '8x gtceu:enriched_naquadah_trinium_europium_duranide_quadruple_wire','64x gtceu:fine_melodium_wire','64x gtceu:uhpic_chip','64x gtceu:uhpic_chip','32x gtceu:uhpic_chip'],
        ['gtceu:polyether_ether_ketone 12800', 'gtceu:indium_tin_lead_cadmium_soldering_alloy 14400', 'gtceu:naquadria 6400'],'gtceu:active_transformer', 128, GTValues.VHA[GTValues.UHV]);
    wirelessControllers('oneiric_relay', ['gtceu:uhv_machine_hull', '8x #gtceu:circuits/uev', '12x gtceu:uhv_field_generator','4x gtceu:dense_neutronium_plate','8x gtceu:uhv_emitter',
        '8x gtceu:ruthenium_trinium_americium_neutronate_quadruple_wire','64x gtceu:fine_stellarium_wire','64x kubejs:uepic_chip','64x kubejs:uepic_chip','32x kubejs:uepic_chip'], 
        ['gtceu:polyether_ether_ketone 25600', 'gtceu:indium_tin_lead_cadmium_soldering_alloy 14400', 'gtceu:naquadria 12800'],'start_core:dream_link_node', 160, GTValues.VHA[GTValues.UEV]);
    wirelessControllers('daydream_spire', ['gtceu:uev_machine_hull', '8x #gtceu:circuits/uiv', '12x gtceu:uev_field_generator','4x gtceu:dense_mythrolic_alloy_plate','8x gtceu:uev_emitter',
        '8x gtceu:seaborgium_palladium_enriched_estalt_flerovium_alloy_quadruple_wire','64x gtceu:fine_ancient_runicalium_wire','64x kubejs:uepic_chip','64x kubejs:uepic_chip','64x kubejs:uepic_chip','64x kubejs:uepic_chip','64x kubejs:uepic_chip'], 
        ['gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 25600', 'gtceu:naquadated_soldering_alloy 14400', 'gtceu:isovol 12800'], 'start_core:oneiric_relay', 192, GTValues.VHA[GTValues.UIV]);

    // === Hatches & Covers ===
    
    const WirelessTiers = (tier, chip, cable, material, solder, fluid, eu, cwu, scaler) => {
        let coilID = (tier === 'uv') ? 'gtceu' : 'kubejs';
        event.recipes.gtceu.assembler(id(`${tier}_2a_dream_link_cover_item`))
            .itemInputs('gtceu:computer_monitor_cover', `1x ${coilID}:${tier}_voltage_coil`, `2x gtceu:${material}_foil`, `1x gtceu:${tier}_sensor`, `2x gtceu:${cable}_single_cable`)
            .inputFluids(`gtceu:${solder} 192`)
            .itemOutputs(`start_core:${tier}_2a_dream_link_cover_item`)
            .circuit(3)
            .duration(400)
            .EUt(eu);

        const WirelessVariants = (type, typeUnder, num) => {

            let uvMod = (tier === 'uv') ? 1 : 2;
            let TypeUnder = (typeUnder === 'cover') ? '2a_dream_link_cover_item' : `${typeUnder}_dream_link_energy_hatch`;
            let hatch = (type === 2) ? `gtceu:${tier}_energy_input_hatch` : (type === 64) ? `gtceu:${tier}_substation_input_hatch_64a` : `gtceu:${tier}_energy_input_hatch_${type}a`;
            let fluids = (type === 64) ? [`gtceu:sodium_potassium ${type * scaler * 250}`, `gtceu:${solder} ${type * scaler * 144}`, `gtceu:${fluid} ${uvMod * type * 36}`] : [`gtceu:sodium_potassium ${type * scaler * 250}`, `gtceu:${solder} ${type * scaler * 144}`];
            
            event.recipes.gtceu.assembly_line(id(`${tier}_${type}a_dream_link_energy_hatch`))
                .itemInputs(hatch, `${type/2}x start_core:${tier}_2a_dream_link_cover_item`, `${num}x #gtceu:circuits/${tier}`, `${num}x ${chip}`, `${2 * num}x gtceu:${cable}_single_cable`)
                .inputFluids(fluids)
                .itemOutputs(`start_core:${tier}_${type}a_dream_link_energy_hatch`)
                .stationResearch(
                    researchRecipeBuilder => researchRecipeBuilder
                        .researchStack(`start_core:${tier}_${TypeUnder}`)
                        .EUt(eu / 2)
                        .CWUt(cwu)
                )
                .duration(600)
                .EUt(eu * 3);

        };

    WirelessVariants(2, 'cover', 1);
    WirelessVariants(4, '2a', 2);
    WirelessVariants(16, '4a', 4);
    WirelessVariants(64, '16a', 8);

    };
    WirelessTiers('uv', 'gtceu:uhpic_chip', 'yttrium_barium_cuprate', 'darmstadtium', 'indium_tin_lead_cadmium_soldering_alloy', 'naquadria', GTValues.VHA[GTValues.UV], 96, 3);
    WirelessTiers('uhv', 'gtceu:uhpic_chip', 'europium', 'neutronium', 'indium_tin_lead_cadmium_soldering_alloy', 'naquadria', GTValues.VHA[GTValues.UHV], 144, 4);
    WirelessTiers('uev', 'kubejs:uepic_chip', 'cerium_tritelluride', 'mythrolic_alloy', 'indium_tin_lead_cadmium_soldering_alloy', 'isovol', GTValues.VHA[GTValues.UEV], 192, 5);
    WirelessTiers('uiv', 'kubejs:uepic_chip', 'polonium_bismide', 'chaotixic_alloy', 'naquadated_soldering_alloy', 'calamatium', GTValues.VHA[GTValues.UIV], 224, 6);
    // UXV Tier
    // OpV Tier
    // MAX Tier

    // === Data Item ===
    event.recipes.gtceu.circuit_assembler(id('lucinducer'))
        .itemInputs('gtceu:neuro_processing_unit','2x gtceu:crystal_cpu', '4x gtceu:nano_cpu_chip', '48x kubejs:qram_chip', '32x gtceu:fine_europium_wire','8x gtceu:polybenzimidazole_plate')
        .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 576')
        .itemOutputs('start_core:lucinducer')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UV])
        .cleanroom(CleanroomType.STERILE_CLEANROOM);

});