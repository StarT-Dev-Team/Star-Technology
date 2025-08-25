ServerEvents.recipes(event => {
    const id = global.id;
    
    // Hell Forge Machine
    event.recipes.gtceu.assembly_line(id('heart_of_the_flame'))
        .itemInputs(
            'kubejs:husk_brick', '2x kubejs:hell_core', '6x gtceu:dense_ancient_netherite_plate', '24x gtceu:pure_netherite_screw'
        )
        .inputFluids(
            'start_core:flamewake_solvent 500000'
        )
        .itemOutputs('kubejs:heart_of_the_flame')
        .duration(6000)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of('kubejs:husk_of_the_flame'))
                .EUt(GTValues.VHA[GTValues.UHV])
                .CWUt(192)
            )
        .EUt(GTValues.VHA[GTValues.UEV]);

    event.recipes.gtceu.assembly_line(id('hellforge'))
        .itemInputs(
            'gtceu:calamatium_frame', '12x #gtceu:circuits/uev', '32x kubejs:uhv_high_strength_panel', '8x gtceu:neutronium_huge_fluid_pipe',
            '32x gtceu:uhv_field_generator', '24x gtceu:uhv_electric_pump', '4x gtceu:calamatium_rotor', '32x gtceu:isovol_screw'
        )
        .inputFluids(
            'start_core:flamewake_solvent 240000',
            'gtceu:utopian_akreyrium 60000'
        )
        .itemOutputs('start_core:hellforge')
        .duration(2800)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of('gtceu:mega_blast_furnace'))
                .EUt(GTValues.VA[GTValues.UHV])
                .CWUt(192)
            )
        .EUt(GTValues.VA[GTValues.UEV]);

    //Hell Forge Recipes
    const HellForgeMat = (type,IngQuant,inputs,plasma,HeatMK,eut,SecDurPerIng) => {

        if (inputs.length == 3){
        event.recipes.gtceu.hellforge(id(`${type}`))
            .inputFluids(`gtceu:${plasma}_plasma ${IngQuant * 144}`, inputs[0], inputs[1], inputs[2])
            .blastFurnaceTemp(HeatMK)
            .duration(SecDurPerIng * 20 * IngQuant)
            .outputFluids(`gtceu:${type}_plasma ${IngQuant * 144}`)
            .EUt(eut);
        } if (inputs.length == 4){
        event.recipes.gtceu.hellforge(id(`${type}`))
            .inputFluids(`gtceu:${plasma}_plasma ${IngQuant * 144}`, inputs[0], inputs[1], inputs[2], inputs[3])
            .blastFurnaceTemp(HeatMK)
            .duration(SecDurPerIng * 20 * IngQuant)
            .outputFluids(`gtceu:${type}_plasma ${IngQuant * 144}`)
            .EUt(eut);
        } if (inputs.length == 5){
        event.recipes.gtceu.hellforge(id(`${type}`))
            .inputFluids(`gtceu:${plasma}_plasma ${IngQuant * 144}`, inputs[0], inputs[1], inputs[2], inputs[3], inputs[4])
            .blastFurnaceTemp(HeatMK)
            .duration(SecDurPerIng * 20 * IngQuant)
            .outputFluids(`gtceu:${type}_plasma ${IngQuant * 144}`)
            .EUt(eut);
        } if (inputs.length == 6){
        event.recipes.gtceu.hellforge(id(`${type}`))
            .inputFluids(`gtceu:${plasma}_plasma ${IngQuant * 144}`, inputs[0], inputs[1], inputs[2], inputs[3], inputs[4], inputs[5])
            .blastFurnaceTemp(HeatMK)
            .duration(SecDurPerIng * 20 * IngQuant)
            .outputFluids(`gtceu:${type}_plasma ${IngQuant * 144}`)
            .EUt(eut);
        }

    // Quantum Cooling
        event.recipes.gtceu.quantum_cooling(id(`${type}`))
            .inputFluids(`gtceu:${type}_plasma 144`)
            .inputFluids('gtceu:bec_og 250')
            .outputFluids(`gtceu:molten_${type} 144`)
            .outputFluids('gtceu:oganesson 200')
            .duration(SecDurPerIng * 20 * .28325)
            .EUt(eut / 2);

    // EBF Gas Swap
        if(HeatMK < 1800){
            event.replaceInput({id: `gtceu:electric_blast_furnace/blast_${type}_gas`},
                Fluid.of('gtceu:krypton 10'),
                Fluid.of('gtceu:xenon 10')
            );
        }
    }
    HellForgeMat('mythrolic_alloy', 11, ['gtceu:mythril 720', 'gtceu:hsss 576', 'gtceu:darmstadtium 288'], 'argon', 786, GTValues.VHA[GTValues.UEV], 43.6);
    HellForgeMat('magmada_alloy', 8, ['gtceu:adamantine 576', 'gtceu:neutronium 144', 'gtceu:rtm_alloy 432'], 'magmatic', 812, GTValues.VHA[GTValues.UEV], 52.4);
    HellForgeMat('starium_alloy', 8, ['gtceu:nether_star_concentrate 576', 'gtceu:trinaquadalloy 288', 'gtceu:estalt 288'], 'oxygen', 843, GTValues.VHA[GTValues.UEV], 39.8);
    HellForgeMat('seaborgium_palladium_enriched_estalt_flerovium_alloy', 17, ['gtceu:seaborgium 288', 'gtceu:palladium 1152', 'gtceu:enriched_estalt 432', 'gtceu:flerovium 576'], 'nickel', 878, GTValues.VHA[GTValues.UIV], 47.4);
    HellForgeMat('nyanium', 14, ['gtceu:aurourium 1008', 'gtceu:uranium_rhodium_dinaquadide 576', 'gtceu:magnesium_nitride 144', 'gtceu:pure_netherite 288'], 'nitrogen', 444, GTValues.VA[GTValues.UHV], 76.8);
    HellForgeMat('rhenium_super_composite_alloy', 16, ['gtceu:rhenium 576', 'gtceu:weapon_grade_naquadah 288', 'gtceu:mercury_barium_calcium_cuprate 1008', 'gtceu:titanium_carbide 288', 'gtceu:samarium 144'], 'preon', 1456, GTValues.VHA[GTValues.UXV], 51.1);
    HellForgeMat('abyssal_alloy', 14, ['gtceu:xeproda 720', 'gtceu:blue_alloy 432', 'gtceu:void 576', 'gtceu:flerovium 144', 'gtceu:zapolgium 144'], 'voidic', 1576, GTValues.VHA[GTValues.UIV], 38.5);
    HellForgeMat('chaotixic_alloy', 24, ['gtceu:rhexis 864', 'gtceu:stellite_100 288', 'gtceu:hafnium 144', 'gtceu:electrum 1728', 'gtceu:vanadium_steel 432'], 'paradox', 1234, GTValues.VHA[GTValues.UIV], 43.7);
    HellForgeMat('ohmderblux_alloy', 23, ['gtceu:chalyblux 720', 'gtceu:maraging_steel_300 288', 'gtceu:zirconium 576', 'gtceu:glowstone 1296', 'gtceu:ultimet 432'], 'paradox', 1151, GTValues.VHA[GTValues.UIV], 46.9);
    HellForgeMat('draconyallium', 258, ['gtceu:duranium 9792', 'gtceu:silver 2880', 'gtceu:oxygen_plasma 94000', 'gtceu:nitrogen_plasma 76000', 'gtceu:dragon_breath 25800'], 'voidic', 1258, GTValues.VHA[GTValues.UXV], 15.8);
    HellForgeMat('draco_abyssal', 9, ['gtceu:draconyallium 144', 'gtceu:abyssal_alloy 432', 'gtceu:void 288', 'gtceu:ancient_runicalium 432'], 'voidic', 1104, GTValues.VA[GTValues.UXV], 39.4);

    // Heating Fluids
    event.recipes.gtceu.cyclonic_sifter(id('infernal_concentrate_refinement'))
        .inputFluids('gtceu:crude_infernal_concentrate 50000')
        .chancedInput('kubejs:ancient_netherite_reinforced_mesh', 750, -125)
        .outputFluids('gtceu:infernal_concentrate 10000')
        .duration(1150)
        .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu.heat_chamber(id('superheated_infernal_concentrate'))
        .inputFluids('gtceu:infernal_concentrate 950', 'gtceu:utopian_akreyrium 50')
        .outputFluids('gtceu:superheated_infernal_concentrate 1000')
        .duration(640)
        .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu.fusion_reactor(id('sub_stellar_infernal_concentrate'))
        .inputFluids('gtceu:superheated_infernal_concentrate 1500', 'gtceu:stellarium 18')
        .outputFluids('gtceu:sub_stellar_infernal_concentrate 1000')
        .duration(640)
        .EUt(255987)
        .fusionStartEU(1200000000);  
        
    // Super Stellar Recipe

    // Hyper Stellar Recipe

    const HellforgeHeater = (type,origin,scaler) => {
        event.recipes.gtceu.pressure_heat_chamber(id(type))
            .inputFluids(`gtceu:${origin} 50000`)
            .outputFluids(`start_core:${type} 5000`)
            .duration(1500)
            .EUt(GTValues.VA[GTValues.UV] * ( 4 ** scaler ));   
    };
    HellforgeHeater('flamewake_solvent','superheated_infernal_concentrate',1)
    HellforgeHeater('emberheart_nectar','sub_stellar_infernal_concentrate',2)

    event.recipes.gtceu.manifold_centrifuge(id('infernal_tar_decomposition'))
        .inputFluids('start_core:infernal_tar 100')
        .chancedOutput('gtceu:basaltic_mineral_sand_dust',1500,120)
        .chancedOutput('gtceu:deactivated_nether_dust',250,30)
        .chancedOutput('gtceu:netherrack_dust',500,100)
        .chancedOutput('gtceu:thorium_nugget',300,60)
        .chancedOutput('gtceu:red_garnet_dust',425,75)
        .chancedOutput('gtceu:tetrahedrite_dust',225,45)
        .duration(80)
        .EUt(GTValues.VHA[GTValues.UV]);

    });