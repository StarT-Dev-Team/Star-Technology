ServerEvents.recipes(event => {
    const id = global.id;
    const toRemoveOutput = ['thermal:machine_furnace', 'thermal:machine_sawmill',
        'thermal:machine_pulverizer', 'thermal:machine_insolator', 'thermal:machine_centrifuge', 'thermal:machine_crucible', 'thermal:machine_chiller', 'thermal:machine_refinery',
        'thermal:machine_pyrolyzer', 'thermal:machine_bottler', 'thermal:machine_brewer', 'thermal:machine_crystallizer', 'thermal:machine_crafter', 'thermal:machine_smelter',
        'thermal:machine_press', 'exnihilosequentia:flint_mesh', 'exnihilosequentia:iron_mesh', 'exnihilosequentia:diamond_mesh', 'exnihilosequentia:emerald_mesh',
        'exnihilosequentia:netherite_mesh', 'thermal:obsidian_glass', 'thermal:signalum_glass', 'thermal:lumium_glass', 'thermal:enderium_glass', 'thermal_extra:soul_infused_glass',
        'thermal_extra:shellite_glass', 'thermal_extra:twinite_glass', 'thermal_extra:dragonsteel_glass', 'thermal:machine_frame', 'thermal:fluid_cell_frame',
        'thermal:energy_cell_frame', 'thermal:earth_charge', 'thermal:ice_charge', 'thermal:lightning_charge', 'thermal:fluid_cell', 'thermal:energy_cell', 
        'fluxnetworks:flux_dust', 'exnihilosequentia:end_cake', 'systeams:steam_dynamo', 'systeams:stirling_boiler',
        'systeams:lapidary_boiler', 'systeams:magmatic_boiler', 'systeams:numismatic_boiler', 'systeams:compression_boiler', 'systeams:disenchantment_boiler',
        'systeams:gourmand_boiler', 'systeams:boiler_pipe', 'thermal:energy_duct', 'itemcollectors:basic_collector', 'itemcollectors:advanced_collector', 'create_new_age:heat_pipe',
        'create_new_age:heat_pump', 'create_new_age:heater', 'create_new_age:stirling_engine', 'create_new_age:reactor_casing', 'create_new_age:reactor_rod',
        'create_new_age:reactor_glass', 'create_new_age:reactor_fuel_acceptor', 'create_new_age:reactor_heat_vent', 'create_new_age:basic_solar_heating_plate',
        'create_new_age:advanced_solar_heating_plate', 'create_new_age:nuclear_fuel', 'create_new_age:blank_circuit', 'create_new_age:copper_circuit', 'create_new_age:thorium',
        'create_new_age:radioactive_thorium', 'createdieselgenerators:kelp_handle', 'createdieselgenerators:distillation_controller', 'createdieselgenerators:',
        'createdieselgenerators:lighter', 'createdieselgenerators:chemical_sprayer', 'createdieselgenerators:oil_detector', 'createdieselgenerators:pumpjack_bearing',
        'createdieselgenerators:pumpjack_head', 'createdieselgenerators:pumpjack_crank', 'createdieselgenerators:canister', 'createdieselgenerators:oil_barrel',
        'createdieselgenerators:asphalt', 'createdieselgenerators:asphalt_slab', 'createdieselgenerators:asphalt_stairs', 'createdieselgenerators:diesel',
        'createdieselgenerators:gasoline', 'createdieselgenerators:pumpjack_hole', 'exmachinis:item_buffer', 'exnihilosequentia:mechanical_sieve', 'exnihilosequentia:mechanical_hammer',
        'systeams:frost_boiler', 'exnihilosequentia:golden_mesh', 'minecraft:mycelium', 'thermal:gunpowder_4', 'thermal:dirt_crafting', '#thermal:rockwool', 'create:brass_block', 'create:zinc_block',
        'createdieselgenerators:wire_cutters', 'createdieselgenerators:hammer', 'createdieselgenerators:pumpjack_hole', 'createdieselgenerators:bulk_fermenter',
        'createdieselgenerators:chemical_turret', 'create:andesite_alloy',
        // Following 2 to be removed for Zeta/Eta due to exploits and bugs
        'gtceu:me_pattern_buffer_proxy', 'gtceu:me_pattern_buffer',
        // Boilers removed for Eta since they keep exploding on load
        'gtceu:bronze_large_boiler','gtceu:steel_large_boiler','gtceu:titanium_large_boiler','gtceu:tungstensteel_large_boiler',
    ];
    const toRemoveId = ['thermal:slime_mushroom_spores', 'thermal_extra:sticky_ball_to_paper', 'farmersdelight:paper_from_tree_bark', 'create:pressing/sugar_cane',
        'exnihilo:fluid_item/ens_slime', 'gtceu:shaped/good_circuit_board', 'thermal:rubber_from_vine', 'thermal:rubber_from_dandelion', 'thermal:smelting/cured_rubber_from_smelting',
        'thermal:rf_coil', 'create:haunting/crimson_fungus', 'create:haunting/warped_fungus', 'create:milling/compat/ae2/sky_stone_block', 'create:milling/compat/ae2/fluix_crystal',
        'create:milling/compat/ae2/ender_pearl', 'create:milling/compat/ae2/certus_quartz', 'create:crushing/raw_platinum_ore', 'create:crushing/raw_platinum_block',
        'create:crushing/raw_uranium_ore', 'create:crushing/raw_uranium_block', 'create:crafting/appliances/slime_ball', 'minecraft:fire_charge', 'gtceu:shapeless/dust_bronze',
        'gtceu:shapeless/dust_brass', 'create:mixing/brass_ingot', 'minecraft:ender_eye', 'create_new_age:shaped/carbon_brushes', 'create_new_age:shaped/basic_motor_extension',
        'create_new_age:advanced_motor_extension', 'create_new_age:shaped/redstone_magnet', 'createdieselgenerators:basin_fermenting/magma_cream',
        'gtceu:research_station/1_x_gtceu_uv_energy_input_hatch', 'gtceu:research_station/1_x_gtceu_uv_energy_output_hatch', 'toms_storage:adv_wireless_terminal',
        'megacells:mega_crafting_unit', 'gtceu:shaped/resistor_wire', 'gtceu:shaped/resistor_wire_fine', 'gtceu:shaped/resistor_wire_fine_carbon', 'gtceu:shaped/resistor_wire_carbon',
        'gtceu:shaped/resistor_wire_charcoal', 'create:crushing/diorite_recycling', 'create:milling/charcoal', 'gtceu:macerator/macerate_sculk', 'thermal:gunpowder_4',
        'gtceu:shaped/block_compress_marble', 'gtceu:shapeless/block_decompress_marble', 'createdieselgenerators:basin_fermenting/golden_apple', 'gtceu:arc_furnace/arc_mega_vacuum_freezer',
        'gtceu:macerator/macerate_mega_vacuum_freezer', 'gtceu:arc_furnace/arc_mega_blast_furnace', 'gtceu:macerator/macerate_mega_blast_furnace'
    ];

    const toRemoveType = ['thermal:sawmill', 'thermal:pulverizer', 'thermal:insolator', 'thermal:centrifuge', 'thermal:crucible', 'thermal:chiller', 'thermal:refinery',
        'thermal:pyrolyzer', 'thermal:crystallizer', 'thermal:press', 'thermal:smelter', 'exnihilosequentia:precipitate', 'exnihilosequentia:compost', 'exnihilosequentia:solidifying',
        'exnihilosequentia:transition', 'expatternprovider:cutter', 'ae2:inscriber', 'ae2:charger', 'createdieselgenerators:bulk_fermenting', 'createdieselgenerators:compression_molding',
        'createdieselgenerators:casting'
    ];

    toRemoveOutput.forEach(element => {
        event.remove({ output: element});
    });

    toRemoveId.forEach(element => {
        event.remove({ id: element});
    });

    toRemoveType.forEach(element => {
        event.remove({ type: element});
    });

    event.remove({ input: 'minecraft:fire_charge'});

    event.remove({ type: 'exnihilosequentia:sifting', input: '#forge:gravel'});
    event.remove({ type: 'exnihilosequentia:sifting', input: 'exnihilosequentia:crushed_netherrack'});
    event.remove({ type: 'exnihilosequentia:sifting', input: '#minecraft:sand'});
    event.remove({ type: 'exnihilosequentia:sifting', input: 'minecraft:sand'});
    event.remove({ type: 'exnihilosequentia:sifting', input: 'exnihilosequentia:dust'});
    event.remove({ type: 'exnihilosequentia:sifting', input: 'minecraft:soul_sand'});
    event.remove({ type: 'exnihilosequentia:sifting', input: 'minecraft:dirt'});
    event.remove({ type: 'exnihilosequentia:sifting', input: 'minecraft:mud'});
    event.remove({ type: 'exnihilosequentia:sifting', input: 'exnihilosequentia:crushed_end_stone'});
    event.remove({ output: /exnihilosequentia:.*doll/});
  
    event.remove({ input: 'minecraft:fire_charge'});
    event.remove({ input: 'thermal:earth_charge'});
    event.remove({ mod: 'mysticalagriculture'});
    event.remove({ mod: 'mysticalagradditions'});
    event.remove({ mod: 'mysticaladaptations'});
    event.remove({ mod: 'sgjourney'});
    event.remove({ mod: 'jetboots'});

    event.remove({ input: 'minecraft:netherite_scrap'});
    event.remove({ output: 'minecraft:netherite_scrap'});
    event.remove({ input: 'minecraft:ancient_debris'});
    event.remove({ output: 'minecraft:netherite_ingot'});

    event.remove({ output: /manyideas_core:saw.*/});
    event.remove({ output: /create:.*_sheet/});
    event.remove({ output: /create:.*_ingot/});
    event.remove({ output: /create:.*_plate/});
    event.replaceInput({input: 'create:copper_sheet'}, 'create:copper_sheet', 'gtceu:copper_plate');
    event.replaceInput({input: 'create:zinc_ingot'}, 'create:zinc_ingot', 'gtceu:zinc_ingot');
    event.remove({ output: /thermal:.*_ingot/});
    event.remove({ input: /thermal:.*_ingot/});
    event.remove({ output: /exnihilosequentia:.*_ingot/});
    event.remove({ input: /exnihilosequentia:.*_ingot/});
    event.remove({ output: /thermal:.*_nugget/});
    event.remove({ input: /thermal:.*_nugget/});
    event.remove({ output: /exnihilosequentia:.*_nugget/});
    event.remove({ input: /exnihilosequentia:.*_nugget/});
    event.remove({ input: Item.of('createdieselgenerators:mold')});
    event.remove({ output: 'createdieselgenerators:mold'});

    //Pattern Buffer Research Removals
    event.remove({ id: 'gtceu:scanner/1_x_gtceu_luv_dual_input_hatch' });
    event.remove({ id: 'gtceu:research_station/1_x_gtceu_me_pattern_buffer' });
});