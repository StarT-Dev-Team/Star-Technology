ServerEvents.recipes(event => {
    const id = global.id;

    // Controllers
    event.recipes.gtceu.assembly_line(id('supreme_plasma_turbine'))
        .itemInputs('gtceu:uhv_machine_hull','6x gtceu:dense_enriched_naquadah_plate','4x gtceu:neutronium_gear','6x gtceu:small_naquadah_alloy_gear',
            '8x gtceu:enriched_naquadah_huge_fluid_pipe','6x #gtceu:circuits/uhv','64x gtceu:fine_ruthenium_trinium_americium_neutronate_wire','64x gtceu:uhpic_chip')
        .inputFluids('gtceu:polyether_ether_ketone 4320', 'gtceu:naquadria 5000', 'gtceu:lubricant 2500')
        .itemOutputs('gtceu:supreme_plasma_turbine')
        .duration(600)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of('gtceu:plasma_large_turbine'))
                .EUt(GTValues.VHA[GTValues.UHV])
                .CWUt(128)
            )
        .EUt(GTValues.VHA[GTValues.UHV]);

    // event.recipes.gtceu.assembly_line(id('nyinsane_plasma_turbine'))
    //     .itemInputs('gtceu:uiv_machine_hull','6x gtceu:dense_nyanium_plate','4x gtceu:chaotixic_gear','6x gtceu:small_nyanium_gear',
    //         '8x gtceu:nyanium_huge_fluid_pipe','6x #gtceu:circuits/uiv','64x gtceu:fine_seaborgium_palladium_enriched_estalt_flerovium_alloy_wire','64x kubejs:uepic_chip',
    //         '64x kubejs:uepic_chip','32x kubejs:uepic_chip')
    //     .inputFluids('gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 4320', 'gtceu:calamatium 5000', 'gtceu:tungsten_disulfide 2500')
    //     .itemOutputs('gtceu:nyinsane_plasma_turbine')
    //     .duration(600)
    //     .stationResearch(
    //         researchRecipeBuilder => researchRecipeBuilder
    //             .researchStack(Item.of('gtceu:supreme_plasma_turbine'))
    //             .EUt(GTValues.VHA[GTValues.UIV])
    //             .CWUt(176)
    //         )
    //     .EUt(GTValues.VHA[GTValues.UIV]);

    // Rotor Holders
    event.remove({output: /gtceu:.*rotor_holder/});

    event.recipes.gtceu.assembler(id('hv_rotor_holder'))
        .itemInputs('gtceu:hv_machine_hull','4x gtceu:black_steel_gear','4x gtceu:small_stainless_steel_gear')
        .inputFluids('gtceu:polyethylene 144')
        .itemOutputs('gtceu:hv_rotor_holder')
        .circuit(3)
        .duration(100)
        .EUt(GTValues.VHA[GTValues.HV]);

    event.recipes.gtceu.assembler(id('ev_rotor_holder'))
        .itemInputs('gtceu:ev_machine_hull','4x gtceu:ultimet_gear','4x gtceu:small_titanium_gear','gtceu:titanium_ring')
        .inputFluids('gtceu:polyethylene 288')
        .itemOutputs('gtceu:ev_rotor_holder')
        .circuit(3)
        .duration(100)
        .EUt(GTValues.VHA[GTValues.EV]);

    event.recipes.gtceu.assembler(id('iv_rotor_holder'))
        .itemInputs('gtceu:iv_machine_hull','4x gtceu:hssg_gear','gtceu:iv_electric_motor','4x gtceu:small_tungsten_steel_gear','gtceu:tungsten_steel_ring')
        .inputFluids('gtceu:polytetrafluoroethylene 144')
        .itemOutputs('gtceu:iv_rotor_holder')
        .circuit(3)
        .duration(100)
        .EUt(GTValues.VHA[GTValues.IV]);

    event.recipes.gtceu.assembler(id('luv_rotor_holder'))
        .itemInputs('gtceu:luv_machine_hull','4x gtceu:hsss_gear','gtceu:luv_electric_motor','4x gtceu:small_rhodium_plated_palladium_gear','6x gtceu:hsss_round','gtceu:rhodium_plated_palladium_ring')
        .inputFluids('gtceu:polytetrafluoroethylene 288')
        .itemOutputs('gtceu:luv_rotor_holder')
        .circuit(3)
        .duration(100)
        .EUt(GTValues.VHA[GTValues.LuV]);

    event.recipes.gtceu.assembler(id('zpm_rotor_holder'))
        .itemInputs('gtceu:zpm_machine_hull','4x gtceu:trinium_gear','gtceu:zpm_electric_motor','4x gtceu:small_naquadah_alloy_gear','6x gtceu:osmiridium_round','gtceu:naquadah_alloy_ring','8x gtceu:fine_europium_wire')
        .inputFluids('gtceu:polybenzimidazole 144')
        .itemOutputs('gtceu:zpm_rotor_holder')
        .circuit(3)
        .duration(100)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    event.recipes.gtceu.assembler(id('uv_rotor_holder'))
        .itemInputs('gtceu:uv_machine_hull','4x gtceu:tritanium_gear','2x gtceu:uv_electric_motor','4x gtceu:small_darmstadtium_gear','6x gtceu:tritanium_round','gtceu:darmstadtium_ring','#gtceu:circuits/uv','8x gtceu:fine_americium_wire')
        .inputFluids('gtceu:polybenzimidazole 288')
        .itemOutputs('gtceu:uv_rotor_holder')
        .circuit(3)
        .duration(100)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.assembly_line(id('uhv_rotor_holder'))
        .itemInputs(
            'gtceu:uhv_machine_hull','4x gtceu:zalloy_gear','2x gtceu:uhv_electric_motor','6x gtceu:small_neutronium_gear',
            '8x gtceu:zircalloy_4_round','gtceu:neutronium_ring','2x kubejs:uhv_transmission_assembly','#gtceu:circuits/uhv',
            '12x gtceu:fine_zirconium_wire'
        )
        .inputFluids('gtceu:polyether_ether_ketone 288','gtceu:lubricant 5000')
        .itemOutputs('gtceu:uhv_rotor_holder')
        .duration(400)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of('gtceu:uv_rotor_holder'))
                .EUt(GTValues.VA[GTValues.UV])
                .CWUt(128)
            )
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.assembly_line(id('uev_rotor_holder'))
        .itemInputs(
            'gtceu:uev_machine_hull','4x gtceu:starium_alloy_gear','2x gtceu:uev_electric_motor','6x gtceu:small_mythrolic_alloy_gear',
            '8x gtceu:magmada_alloy_round','gtceu:mythrolic_alloy_ring','2x kubejs:uev_transmission_assembly','kubejs:uev_precision_drive_mechanism',
            '#gtceu:circuits/uev','12x gtceu:fine_adamantine_wire'
        )
        .inputFluids('gtceu:polyether_ether_ketone 576','gtceu:lubricant 10000')
        .itemOutputs('gtceu:uev_rotor_holder')
        .duration(400)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of('gtceu:uhv_rotor_holder'))
                .EUt(GTValues.VA[GTValues.UHV])
                .CWUt(160)
            )
        .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu.assembly_line(id('uiv_rotor_holder'))
        .itemInputs(
            'gtceu:uiv_machine_hull','4x gtceu:ohmderblux_alloy_gear','2x gtceu:uiv_electric_motor','6x gtceu:small_chaotixic_alloy_gear',
            '8x gtceu:abyssal_alloy_round','gtceu:chaotixic_alloy_ring','2x kubejs:uiv_transmission_assembly','kubejs:uiv_precision_drive_mechanism',
            '#gtceu:circuits/uiv','gtceu:uiv_field_generator','16x gtceu:fine_xeproda_wire'
        )
        .inputFluids('gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 432','gtceu:tungsten_disulfide 5000')
        .itemOutputs('gtceu:uiv_rotor_holder')
        .duration(400)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of('gtceu:uev_rotor_holder'))
                .EUt(GTValues.VA[GTValues.UEV])
                .CWUt(192)
            )
        .EUt(GTValues.VA[GTValues.UIV]);

    // Plasma Turbine Recipes
    event.remove({type: 'gtceu:plasma_generator'});

    const PlasmaTurbine = (type,duration,ifGas) => {
        let Quantity = (ifGas == true) ? 5 : 1 ;
        event.recipes.gtceu.plasma_generator(id(`${type}_from_${type}_plasma`))
            .inputFluids(`gtceu:${type}_plasma ${Quantity}`)
            .outputFluids(`gtceu:${type} ${Quantity}`)
            .duration(duration)
            .EUt(-2048);
    };

    const PlasmaTurbineTemp = (type,duration,ifGas) => {
        let Quantity = (ifGas == true) ? 5 : 1 ;
        event.recipes.gtceu.plasma_generator(id(`${type}_from_${type}_plasma`))
            .inputFluids(`gtceu:${type}_plas_plasma ${Quantity}`)
            .outputFluids(`gtceu:${type} ${Quantity}`)
            .duration(duration)
            .EUt(-2048);
    };

    const PlasmaTurbineUnique = (type,output,duration,ifGas) => {
        let Quantity = (ifGas == true) ? 5 : 1 ;
        event.recipes.gtceu.plasma_generator(id(`${output}_from_${type}_plasma`))
            .inputFluids(`gtceu:${type}_plasma ${Quantity}`)
            .outputFluids(`gtceu:${output} ${Quantity}`)
            .duration(duration)
            .EUt(-2048);
    };

    PlasmaTurbine('nickel',192,false);
    PlasmaTurbine('iron',135,false);
    PlasmaTurbine('oxygen',108,true);
    PlasmaTurbine('nitrogen',108,true);
    PlasmaTurbine('argon',126,true);
    PlasmaTurbine('helium',54,true);
    PlasmaTurbineTemp('americium',676,false);
    PlasmaTurbineTemp('tin',168,false);
    PlasmaTurbineUnique('magmatic','infernal_concentrate',1138,false);

    // Draco-Abyssal Rotor
    ['draco_abyssal','draconyallium','abyssal_alloy'].forEach(type=>{
        event.remove({output: `gtceu:${type}_turbine_blade`});
        event.remove({id: `gtceu:assembler/assemble_${type}_turbine_blade`});
    });
    const TurbineBlade = (type, Fluid) => {
    event.recipes.gtceu.assembler(id(`${type}_turbine_blade`))
        .itemInputs(`5x gtceu:double_${type}_plate`,`8x gtceu:${type}_foil`,`2x gtceu:${type}_screw`)
        .inputFluids(Fluid)
        .itemOutputs(`gtceu:${type}_turbine_blade`)
        .duration(50)
        .EUt(GTValues.VHA[GTValues.UEV]);
    };
    TurbineBlade('abyssal_alloy','gtceu:echo_r 720');
    TurbineBlade('draconyallium','gtceu:dragon_breath 720');
    TurbineBlade('draco_abyssal','gtceu:void 720');

    event.recipes.gtceu.assembly_line(id('draco_abyssal_turbine_rotor'))
        .itemInputs(
            'gtceu:void_frame','gtceu:uiv_electric_motor','gtceu:draco_abyssal_turbine_blade','gtceu:draco_abyssal_turbine_blade',
            'gtceu:abyssal_alloy_turbine_blade','gtceu:draconyallium_turbine_blade','gtceu:abyssal_alloy_turbine_blade','gtceu:draconyallium_turbine_blade',
            'gtceu:abyssal_alloy_turbine_blade','gtceu:draconyallium_turbine_blade','gtceu:abyssal_alloy_turbine_blade','gtceu:draconyallium_turbine_blade'
        )
        .inputFluids('gtceu:tungsten_disulfide 15000','gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 720')
        .itemOutputs(Item.of('gtceu:turbine_rotor', '{GT.PartStats:{Material:"gtceu:draco_abyssal"}}'))
        .duration(600)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of('gtceu:draco_abyssal_rotor'))
                .EUt(GTValues.VA[GTValues.UEV])
                .CWUt(192)
            )
        .EUt(GTValues.VA[GTValues.UEV]);

});