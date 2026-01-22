// const $RockBreakerCondition = Java.loadClass('com.gregtechceu.gtceu.common.recipe.RockBreakerCondition')  

ServerEvents.recipes(event => {
    const id = global.id;

    event.replaceInput({ id: 'gtceu:macerator/macerate_nether_star_lens' }, '#forge:lenses/white', 'gtceu:nether_star_lens');

    event.replaceOutput({ type: 'gtceu:cutter'}, 'ae2:certus_quartz_crystal', '2x ae2:certus_quartz_crystal');

    event.recipes.gtceu.alloy_smelter(id('rubber_sheet_from_thermal'))
        .itemInputs('2x thermal:cured_rubber')
        .notConsumable('gtceu:plate_casting_mold')
        .itemOutputs('gtceu:rubber_plate')
        .duration(10)
        .EUt(7);

    event.recipes.gtceu.extruder(id('rubber_sheet_from_thermal_extruder'))
        .itemInputs('thermal:cured_rubber')
        .notConsumable('gtceu:plate_extruder_mold')
        .itemOutputs('gtceu:rubber_plate')
        .duration(5)
        .EUt(56);

    event.recipes.gtceu.extractor(id('rubber_fluid_from_thermal'))
        .itemInputs('thermal:cured_rubber')
        .outputFluids('gtceu:rubber 144')
        .duration(5)
        .EUt(30);

    ['blackstone','calcite','tuff','dripstone_block'].forEach(stone => {
    event.recipes.gtceu.rock_breaker(id(`${stone}`))
        .notConsumable(`minecraft:${stone}`)
        .itemOutputs(`minecraft:${stone}`)
        .duration(16)
        .EUt(7)
        .addDataString('fluidA', 'minecraft:lava')
        .addDataString('fluidB', 'minecraft:water');
    });

    //Added Tools
    const plungerMats = ['rubber', 'polyethylene', 'polytetrafluoroethylene', 'silicone_rubber', 'styrene_butadiene_rubber', 'polybenzimidazole' ];
    const malletMats = ['perfluoroelastomer_rubber' ];

    //Mallet + Plunger
    plungerMats.forEach(material => {
        event.shaped(Item.of(`gtceu:${material}_plunger`), [
                'WPP',
                ' SP',
                'S F'
            ], {
                W: '#forge:tools/wire_cutters',
                F: '#forge:tools/files',
                P: `gtceu:${material}_plate`,
                S: `#forge:rods`
            }).id(`start:shaped/${material}_plunger`);
    });

    malletMats.forEach(material => {
        event.shaped(Item.of(`gtceu:${material}_mallet`), [
                'II ',
                'IIS',
                'II '
            ], {
                I: `gtceu:${material}_ingot`,
                S: 'minecraft:stick'
            }).id(`start:shaped/${material}_mallet`);
    });

    //B(SiO)7 Foil
    event.recipes.gtceu.bender(id('borosilicate_glas_foil'))
        .itemInputs('gtceu:borosilicate_glass_ingot')
        .itemOutputs('4x gtceu:borosilicate_glas_foil')
        .circuit(10)
        .duration(32)
        .EUt(30);

    ['iron','steel','neodymium','samarium','zapolgium','pure_netherite','holmium'].forEach(Magnetic=>{
    event.remove({id: `gtceu:alloy_smelter/alloy_smelt_magnetic_${Magnetic}_dust_to_block`});
    });

    // Mycelium Leather
    event.recipes.create.pressing('kubejs:compressed_mycelium', 'kubejs:mycelium_growth').id('start:pressing/compressed_mycelium');
    event.smoking('kubejs:smoked_mycelium', 'kubejs:compressed_mycelium').id('start:smoking/smoked_mycelium');
    event.recipes.create.pressing('minecraft:leather', 'kubejs:smoked_mycelium').id('start:pressing/mycelium_leather');

    event.remove({id: 'gtceu:electrolyzer/decomposition_electrolyzing_sodalite'}); //Moves to LV but at same total EU cost
    event.recipes.gtceu.electrolyzer(id('sodalite_decomposition'))
        .itemInputs('11x gtceu:sodalite_dust')
        .itemOutputs('3x gtceu:aluminium_dust','3x gtceu:silicon_dust','4x gtceu:sodium_dust')
        .outputFluids('gtceu:chlorine 1000')
        .duration(13.2 * 20 * 2)
        .EUt(30);

    event.remove({id:'gtceu:compressor/compress_plate_dust_obsidian'});
    event.recipes.gtceu.compressor(id('obsidian_plate'))
        .itemInputs('gtceu:obsidian_dust')
        .itemOutputs('gtceu:obsidian_plate')
        .duration(1600)
        .EUt(30);

    event.recipes.gtceu.circuit_assembler(id('data_dna_disk'))
        .itemInputs('kubejs:runic_printed_circuit_board','2x #gtceu:circuits/uhv','24x kubejs:qram_chip', 
            '16x kubejs:hyper_nor_memory_chip','16x kubejs:hyper_nand_memory_chip','32x gtceu:fine_europium_wire')
        .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 144')
        .itemOutputs('start_core:data_dna_disk')
        .duration(400)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(GTValues.V[GTValues.UHV]);

    event.recipes.gtceu.circuit_assembler(id('component_data_core'))
        .itemInputs('kubejs:abyssal_printed_circuit_board','2x #gtceu:circuits/uiv','56x kubejs:qram_chip', 
            '48x kubejs:hyper_nor_memory_chip','48x kubejs:hyper_nand_memory_chip','32x gtceu:fine_polonium_bismide_wire')
        .inputFluids('gtceu:naquadated_soldering_alloy 1152')
        .itemOutputs('start_core:component_data_core')
        .duration(400)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(GTValues.V[GTValues.UIV]);

    // StarT Core Cell* Emptying
    ['drum','fluid_cell'].forEach(container=>{
        ['enriched_naquadah','neutronium'].forEach(type=>{

            event.shapeless(Item.of(`start_core:${type}_${container}`), [
                Item.of(`start_core:${type}_${container}`)
            ]);

        });
    });

    //NPK Re-add
    event.recipes.gtceu.large_chemical_reactor(id('npk_solution'))
        .itemInputs('15x gtceu:apatite_dust', '5x gtceu:potassium_dust')
        .inputFluids('gtceu:sulfur_trioxide 288', 'gtceu:nitrogen 1000', 'gtceu:distilled_water 2200')
        .circuit(24)
        .outputFluids('gtceu:npk_solution 6400')
        .EUt(280)
        .duration(120);

    //NPK Decomp
    event.remove({ id:'gtceu:electrolyzer/decomposition_electrolyzing_npk_solution' });
    event.recipes.gtceu.electrolyzer(id('npk_solution_decomposition'))
        .inputFluids('gtceu:npk_solution 6400')
        .itemOutputs('15x gtceu:apatite_dust', '5x gtceu:potassium_dust')
        .outputFluids('gtceu:sulfur_trioxide 288', 'gtceu:nitrogen 1000', 'minecraft:water 2200')
        .duration(33.6 * 20)
        .EUt(60);

    // Mushroom Decomp

    event.shapeless(Item.of('3x minecraft:brown_mushroom'), ['minecraft:brown_mushroom_block', '#forge:tools/mortars']).id('start:shapeless/brown_mushroom');
    event.recipes.gtceu.macerator(id('brown_mushrooms'))
        .itemInputs('minecraft:brown_mushroom_block')
        .itemOutputs('3x minecraft:brown_mushroom')
        .chancedOutput('minecraft:brown_mushroom', 2500, 0)
        .duration(45)
        .EUt(8);

    event.shapeless(Item.of('3x minecraft:red_mushroom'), ['minecraft:red_mushroom_block', '#forge:tools/mortars']).id('start:shapeless/red_mushroom');
    event.recipes.gtceu.macerator(id('red_mushrooms'))
        .itemInputs('minecraft:red_mushroom_block')
        .itemOutputs('3x minecraft:red_mushroom')
        .chancedOutput('minecraft:red_mushroom', 2500, 0)
        .duration(45)
        .EUt(8);

    //Treated Wood Fixes/Additions
    event.remove({id: 'gtceu:macerator/macerate_treated_wood_chest_boat'})
    event.recipes.gtceu.macerator(id('treated_wood_chest_boat'))
        .itemInputs('gtceu:treated_wood_chest_boat')
        .itemOutputs('5x gtceu:treated_wood_dust', '8x gtceu:wood_dust')
        .duration(1274)
        .EUt(2);
    event.recipes.gtceu.macerator(id('treated_wood_planks'))
        .itemInputs('gtceu:treated_wood_planks')
        .itemOutputs('gtceu:treated_wood_dust')
        .duration(98)
        .EUt(2);
    event.recipes.create.filling('gtceu:treated_wood_planks', [Fluid.of('gtceu:creosote', 125), '#minecraft:planks']).id('start:filling/treated_wood_planks');

    event.recipes.gtceu.alloy_blast_smelter(id('indium_tin_lead_cadmium_soldering_alloy'))
        .itemInputs('14x gtceu:indium_dust', '3x gtceu:tin_dust', '2x gtceu:lead_dust', '1x gtceu:cadmium_dust')
        .outputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 2880')
        .duration(280)
        .blastFurnaceTemp(3000)
        .EUt(GTValues.VH[GTValues.ZPM])
        .circuit(14);

    event.recipes.gtceu.alloy_blast_smelter(id('naquadated_soldering_alloy'))
        .itemInputs('3x gtceu:tin_dust', '18x gtceu:indium_dust', '6x gtceu:silver_dust',
             '4x gtceu:lutetium_dust', '3x gtceu:cerium_dust', '3x gtceu:naquadah_dust',
             '1x gtceu:trinium_dust', '2x gtceu:lead_dust')
        .outputFluids('gtceu:naquadated_soldering_alloy 5760')
        .duration(2250)
        .blastFurnaceTemp(8980)
        .EUt(GTValues.VH[GTValues.UHV])
        .circuit(8);

    event.remove({ output: 'gtceu:uv_voltage_coil' });
    event.recipes.gtceu.assembler(id('uv_voltage_coil'))
        .itemInputs('gtceu:magnetic_dysprosium_rod', '16x gtceu:fine_tritanium_wire')
        .itemOutputs('gtceu:uv_voltage_coil')
        .circuit(1)
        .duration(200)
        .EUt(GTValues.VA[GTValues.UV]);

    // REMOVING LARGE BOILERS BECAUSE ALL OUR FOOD KEEPS BLOWING UP
    event.remove({ id: /gtceu:.*_large_boiler/});
});