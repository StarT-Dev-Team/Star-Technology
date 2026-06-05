// packmode: hard

ServerEvents.recipes((event) => {
    const id = global.id;

    // Create Recipes
    event.recipes
        .shaped(Item.of('create:item_vault'), ['SFS', 'FBF', 'SFS'], {
            S: 'gtceu:iron_screw',
            B: 'minecraft:barrel',
            F: 'gtceu:iron_foil',
        })
        .id('start:shaped/item_vault');

    event.recipes.create
        .mechanical_crafting('create:mechanical_arm', ['HAR', ' R ', 'RN ', 'BPB', 'GCG'], {
            G: 'create:cogwheel',
            B: 'gtceu:brass_plate',
            H: 'create:brass_hand',
            R: 'gtceu:brass_rod',
            N: 'gtceu:brass_ring',
            A: 'create:andesite_alloy',
            P: 'create:precision_mechanism',
            C: 'create:brass_casing',
        })
        .id('start:shaped/mechanical_arm');

    event.recipes
        .shaped(Item.of('create:spout'), ['PPP', 'GCG', 'RIR'], {
            G: 'minecraft:glass_pane',
            C: 'create:copper_casing',
            P: 'gtceu:copper_plate',
            R: 'gtceu:rubber_ring',
            I: 'gtceu:copper_normal_fluid_pipe',
        })
        .id('start:shaped/spout');

    event.shapeless('2x create:shaft', ['#forge:tools/files', '3x create:andesite_alloy']).id('start:shapeless/shaft');

    event.recipes
        .shaped(Item.of('create:encased_chain_drive', 2), ['SN ', 'NCN', ' NS'], {
            S: 'create:shaft',
            C: 'create:andesite_casing',
            N: 'gtceu:iron_ring',
        })
        .id('start:shaped/encased_chain_drive');

    event.recipes
        .shaped(Item.of('create:adjustable_chain_gearshift'), ['T', 'C'], {
            C: 'create:encased_chain_drive',
            T: 'create:electron_tube',
        })
        .id('start:shaped/adjustable_chain_gearshift');

    event.recipes
        .shaped(Item.of('create:gearshift'), ['RCG'], {
            R: 'minecraft:redstone_torch',
            C: 'create:andesite_casing',
            G: 'create:cogwheel',
        })
        .id('start:shaped/gearshift');

    event.recipes
        .shaped(Item.of('create:sequenced_gearshift'), ['RCG'], {
            R: 'create:electron_tube',
            C: 'create:brass_casing',
            G: 'create:cogwheel',
        })
        .id('start:shaped/sequenced_gearshift');

    event.recipes
        .shaped(Item.of('create:depot'), ['APA', 'SCS'], {
            P: 'gtceu:iron_plate',
            C: 'create:andesite_casing',
            A: 'create:andesite_alloy',
            S: 'gtceu:iron_screw',
        })
        .id('start:shaped/depot');

    event.recipes
        .shaped(Item.of('create:fluid_tank', 3), ['PGP', 'GCG', 'PGP'], {
            G: 'minecraft:glass_pane',
            C: 'create:copper_casing',
            P: 'gtceu:copper_plate',
        })
        .id('start:shaped/fluid_tank');

    event.recipes
        .shaped(Item.of('create:weighted_ejector'), ['DPA', 'GCS'], {
            G: 'create:cogwheel',
            A: 'create:andesite_alloy',
            P: 'minecraft:stone_pressure_plate',
            C: 'create:depot',
            S: 'create:shaft',
            D: 'gtceu:gold_plate',
        })
        .id('start:shaped/weighted_ejector');

    event.recipes.create
        .mechanical_crafting('create:steam_engine', ['GSG', ' A ', 'PAP', 'PCP'], {
            G: 'gtceu:gold_ring',
            S: 'create:shaft',
            A: 'create:andesite_alloy',
            P: 'gtceu:copper_plate',
            C: 'create:copper_casing',
        })
        .id('start:shaped/steam_engine');

    event
        .shaped(Item.of('create:andesite_casing'), ['PMP', 'AFA', 'PHP'], {
            P: 'gtceu:wood_plate',
            M: '#forge:tools/mallets',
            A: 'create:andesite_alloy',
            F: 'gtceu:wood_frame',
            H: '#forge:tools/hammers',
        })
        .id('start:shaped/andesite_casing');

    event
        .shaped(Item.of('create:copper_casing'), ['PMP', 'RFR', 'PHP'], {
            P: 'gtceu:pig_iron_plate',
            M: '#forge:tools/mallets',
            R: 'create:fluid_pipe',
            F: 'gtceu:pig_iron_frame',
            H: '#forge:tools/hammers',
        })
        .id('start:shaped/copper_casing');

    event
        .shaped(Item.of('create:brass_casing'), ['PMP', 'AFA', 'PHP'], {
            P: 'gtceu:treated_wood_plate',
            M: '#forge:tools/mallets',
            A: 'gtceu:brass_plate',
            F: 'gtceu:treated_wood_frame',
            H: '#forge:tools/hammers',
        })
        .id('start:shaped/brass_casing');

    event
        .shaped(Item.of('create:piston_extension_pole', 3), ['P', 'A', 'P'], {
            P: 'gtceu:wood_plate',
            A: 'create:andesite_alloy',
        })
        .id('start:shaped/piston_extension_pole');

    event
        .shaped(Item.of('create:hand_crank'), [' PA', 'RPM', 'GP '], {
            P: 'gtceu:wood_plate',
            M: '#forge:tools/mallets',
            A: 'create:andesite_alloy',
            R: 'gtceu:sticky_resin',
            G: 'gtceu:wood_gear',
        })
        .id('start:shaped/hand_crank');

    event
        .shaped(Item.of('create:mechanical_press'), ['PLP', 'GCG', 'AVA'], {
            C: 'create:andesite_casing',
            P: 'gtceu:wood_plate',
            A: 'create:andesite_alloy',
            L: 'create:piston_extension_pole',
            G: 'gtceu:wood_gear',
            V: 'minecraft:anvil',
        })
        .id('start:shaped/mechanical_press');

    event
        .shaped(Item.of('create:mechanical_saw'), ['MSW', 'ACA'], {
            M: '#forge:tools/mallets',
            W: '#forge:tools/wrenches',
            S: 'gtceu:iron_buzz_saw_blade',
            C: 'create:andesite_casing',
            A: 'create:andesite_alloy',
        })
        .id('start:shaped/mechanical_saw');

    event
        .shaped(Item.of('create:millstone'), ['WCM', 'GAG', 'SSS'], {
            W: '#forge:tools/wrenches',
            M: '#forge:tools/mallets',
            C: 'create:chute',
            G: 'create:cogwheel',
            A: 'create:andesite_casing',
            S: '#forge:stone',
        })
        .id('start:shaped/millstone');

    event.recipes.create
        .mechanical_crafting('create:crushing_wheel', [' SSS ', 'SAMAS', 'SMFMS', 'SAMAS', ' SSS '], {
            S: '#forge:stone',
            A: 'create:andesite_casing',
            F: 'create:shaft',
            M: 'gtceu:wood_frame',
        })
        .id('start:shaped/crushing_wheel');

    event
        .shaped(Item.of('create:andesite_funnel', 2), ['AIA', 'ARA'], {
            R: 'gtceu:rubber_plate',
            A: 'create:andesite_alloy',
            I: 'gtceu:iron_foil',
        })
        .id('start:shaped/andesite_funnel');

    event
        .shaped(Item.of('create:brass_funnel', 2), ['PEP', 'RBR'], {
            P: 'gtceu:brass_foil',
            R: 'gtceu:brass_rod',
            E: 'create:electron_tube',
            B: 'gtceu:rubber_plate',
        })
        .id('start:shaped/brass_funnel');

    event
        .shaped(Item.of('create:andesite_tunnel', 4), [' FM', 'FCF', 'AF '], {
            F: 'create:andesite_funnel',
            C: 'create:andesite_casing',
            A: 'create:andesite_alloy',
            M: '#forge:tools/mallets',
        })
        .id('start:shaped/andesite_tunnel');

    event
        .shaped(Item.of('create:brass_tunnel', 4), [' FM', 'FCF', 'TF '], {
            F: 'create:brass_funnel',
            C: 'create:brass_casing',
            T: 'create:electron_tube',
            M: '#forge:tools/mallets',
        })
        .id('start:shaped/brass_tunnel');

    let drill = 'gtceu:double_iron_plate';
    event.recipes.create
        .sequenced_assembly([Item.of('thermal:drill_head').withChance(1)], drill, [
            event.recipes.createDeploying(drill, [drill, 'create:andesite_alloy']),
            event.recipes.createDeploying(drill, [drill, 'gtceu:cast_iron_plate']),
            event.recipes.createPressing(drill, drill),
            event.recipes.createDeploying(drill, [drill, 'gtceu:wrought_iron_plate']),
            event.recipes.createCutting(drill, drill),
        ])
        .transitionalItem(drill)
        .loops(2)
        .id('start:sequenced_assembly/drill_head');

    event
        .shaped(Item.of('create:mechanical_drill'), ['MDH', 'ACA', 'ASA'], {
            M: '#forge:tools/mallets',
            H: '#forge:tools/hammers',
            S: 'create:shaft',
            C: 'create:andesite_casing',
            D: 'thermal:drill_head',
            A: 'create:andesite_alloy',
        })
        .id('start:shaped/mechanical_drill');

    event
        .shaped(Item.of('create:brass_hand'), ['BBB', 'PPP', 'ARA'], {
            B: 'gtceu:brass_bolt',
            P: 'gtceu:brass_plate',
            R: 'gtceu:zinc_ring',
            A: 'create:andesite_alloy',
        })
        .id('start:shaped/brass_hand');

    event
        .shaped(Item.of('create:deployer'), ['EPE', 'SCS', 'AHA'], {
            E: 'create:electron_tube',
            P: 'create:piston_extension_pole',
            S: 'create:shaft',
            A: 'create:andesite_alloy',
            C: 'create:andesite_casing',
            H: 'create:brass_hand',
        })
        .id('start:shaped/deployer');

    event
        .shaped(Item.of('create:fluid_pipe', 12), ['PFP', 'FPF'], {
            P: 'gtceu:copper_normal_fluid_pipe',
            F: 'gtceu:copper_foil',
        })
        .id('start:shaped/fluid_pipe');

    event.remove({ id: 'create:crafting/kinetics/vertical_gearbox' });
    event.remove({ id: 'create:crafting/kinetics/gearbox' });

    event
        .shaped(Item.of('create:vertical_gearbox'), [' G ', 'SCS', ' G '], {
            S: 'create:shaft',
            C: 'create:andesite_casing',
            G: 'create:cogwheel',
        })
        .id('start:shaped/vertical_gearbox');

    event
        .shaped(Item.of('create:gearbox'), [' S ', 'GCG', ' S '], {
            S: 'create:shaft',
            C: 'create:andesite_casing',
            G: 'create:cogwheel',
        })
        .id('start:shaped/gearbox');

    event
        .shaped(Item.of('create:chute', 3), ['PCP', 'PHP'], {
            P: 'gtceu:iron_plate',
            C: 'minecraft:chest',
            H: 'minecraft:hopper',
        })
        .id('start:shaped/chute');

    event
        .shaped(Item.of('create:smart_chute'), ['FTF', 'FCF'], {
            F: 'gtceu:brass_foil',
            C: 'create:chute',
            T: 'create:electron_tube',
        })
        .id('start:shaped/smart_chute');

    event
        .shaped(Item.of('create:water_wheel'), ['PPP', 'SCS', 'PPP'], {
            S: 'create:shaft',
            C: 'create:andesite_casing',
            P: 'gtceu:wood_plate',
        })
        .id('start:shaped/water_wheel');

    event.recipes.create
        .mechanical_crafting('create:large_water_wheel', [' PPP ', 'PSSSP', 'PSWSP', 'PSSSP', ' PPP '], {
            S: '#forge:rods/wooden',
            P: 'gtceu:wood_plate',
            W: 'create:water_wheel',
        })
        .id('start:shaped/large_water_wheel');

    event
        .shaped(Item.of('create:whisk'), ['NWN', 'RAR', 'RPR'], {
            W: '#forge:tools/wrenches',
            R: 'gtceu:iron_rod',
            P: 'gtceu:iron_plate',
            A: 'create:andesite_alloy',
            N: 'gtceu:iron_ring',
        })
        .id('start:shaped/whisk');

    event
        .shaped(Item.of('create:cogwheel', 2), [' SM', 'PGP', ' S '], {
            S: 'create:shaft',
            G: 'gtceu:wood_gear',
            P: 'gtceu:wood_plate',
            M: '#forge:tools/mallets',
        })
        .id('start:shaped/cogwheel');

    event
        .shaped(Item.of('create:large_cogwheel', 2), [' SM', 'PGP', ' S '], {
            S: 'create:shaft',
            G: 'create:cogwheel',
            P: 'gtceu:wood_plate',
            M: '#forge:tools/mallets',
        })
        .id('start:shaped/large_cogwheel');

    event
        .shaped(Item.of('create:mechanical_mixer'), ['MLW', 'GCG', 'AHA'], {
            L: 'create:piston_extension_pole',
            M: '#forge:tools/mallets',
            W: '#forge:tools/wrenches',
            G: 'create:cogwheel',
            C: 'create:andesite_casing',
            A: 'create:andesite_alloy',
            H: 'create:whisk',
        })
        .id('start:shaped/mechanical_mixer');

    event
        .shaped(Item.of('create:basin'), ['A A', 'ACA', 'PAP'], {
            A: 'create:andesite_alloy',
            C: 'minecraft:cauldron',
            P: 'gtceu:lead_plate',
        })
        .id('start:shaped/basin');

    event.remove('createlowheated:basic_burner');
    event
        .shaped('createlowheated:basic_burner', ['RRR', 'R R', 'PAP'], {
            A: 'create:andesite_alloy',
            R: 'gtceu:lead_rod',
            P: 'gtceu:lead_plate',
        })
        .id('start:shaped/basic_burner');

    event
        .shaped(Item.of('create:propeller'), ['SAR', 'ZPZ', 'MAS'], {
            P: 'gtceu:pig_iron_rotor',
            A: 'create:andesite_alloy',
            R: '#forge:tools/screwdrivers',
            M: '#forge:tools/mallets',
            Z: 'gtceu:zinc_plate',
            S: 'gtceu:iron_screw',
        })
        .id('start:shaped/propeller');

    event
        .shaped(Item.of('create:encased_fan'), ['RPR', 'SCF', 'RPR'], {
            P: 'gtceu:wood_plate',
            R: 'gtceu:zinc_rod',
            F: 'create:propeller',
            S: 'create:shaft',
            C: 'create:andesite_casing',
        })
        .id('start:shaped/encased_fan');

    event.remove({ output: /^create:.*sand_paper/ });
    const sandType = ['sand', 'red_sand'];
    sandType.forEach((sand) => {
        event.recipes.create
            .mixing(Item.of(`1x create:${sand}_paper`).withChance(0.9), [
                '1x farmersdelight:canvas',
                `1x minecraft:${sand}`,
                'gtceu:sticky_resin',
            ])
            .id(`start:create_mixer/${sand}_paper`);
    });

    event.recipes.create
        .mixing(`create:pulp`, [
            Fluid.of('minecraft:water', 500),
            '2x createdieselgenerators:wood_chip',
            '2x gtceu:small_paper_dust',
            '2x gtceu:small_wood_dust',
        ])
        .id(`start:create_mixer/pulp`);

    event.recipes.create
        .compacting(['create:cardboard', Fluid.of('minecraft:water', 100)], '2x create:pulp')
        .id('start:compacting/cardboard');

    event
        .shaped(Item.of('create:electron_tube'), ['NNN', 'NQN', 'BGB'], {
            G: 'gtceu:iron_ring',
            B: 'gtceu:copper_bolt',
            N: 'minecraft:glass_pane',
            Q: 'create:polished_rose_quartz',
        })
        .id('start:shaped/electron_tube');

    let prec = 'gtceu:double_gold_plate';
    event.recipes.create
        .sequenced_assembly([Item.of(`create:precision_mechanism`)], `gtceu:double_gold_plate`, [
            event.recipes.createDeploying(prec, [prec, `create:cogwheel`]),
            event.recipes.createDeploying(prec, [prec, `create:large_cogwheel`]),
            event.recipes.createPressing(prec, prec),
            event.recipes.createDeploying(prec, [prec, `gtceu:iron_screw`]),
            event.recipes.createPressing(prec, prec),
        ])
        .transitionalItem(prec)
        .loops(4)
        .id('start:sequenced_assembly/precision_mechanism');

    let mech = 'create:brass_casing';
    event.recipes.create
        .sequenced_assembly([Item.of(`create:mechanical_crafter`).withChance(1)], `create:brass_casing`, [
            event.recipes.createDeploying(mech, [mech, `create:cogwheel`]),
            event.recipes.createPressing(mech, mech),
            event.recipes.createDeploying(mech, [mech, `create:precision_mechanism`]),
            event.recipes.createDeploying(mech, [mech, `minecraft:crafting_table`]),
            event.recipes.createPressing(mech, mech),
        ])
        .transitionalItem(mech)
        .loops(1)
        .id('start:sequenced_assembly/mechanical_crafter');

    event.recipes.create
        .mechanical_crafting('8x create:flywheel', [' PPP ', 'PS SP', 'P T P', 'PS SP', ' PPP '], {
            T: 'create:shaft',
            P: 'gtceu:brass_rod',
            S: '#forge:rods/wooden',
        })
        .id('start:mechanical_crafter/flywheel');

    event.remove({ id: 'minecraft:minecart' });

    event.recipes.create
        .mechanical_crafting('create:sticker', ['ASA', 'DRD'], {
            S: 'minecraft:slime_block',
            A: 'create:andesite_alloy',
            D: 'gtceu:double_iron_plate',
            R: 'minecraft:redstone',
        })
        .id('start:mechanical_crafting/sticker');

    event
        .shaped(Item.of('create:nozzle'), ['ASA', 'SSS', 'APA'], {
            A: 'create:andesite_alloy',
            S: '#forge:string',
            P: 'gtceu:iron_plate',
        })
        .id('start:shaped/nozzle');

    event
        .shaped(Item.of('create:white_sail', 2), ['ASC', 'SCS', 'CSA'], {
            A: 'create:andesite_alloy',
            S: '#forge:rods/wooden',
            C: 'farmersdelight:canvas',
        })
        .id('start:shaped/white_sail');

    event
        .shaped(Item.of('create:mechanical_bearing'), ['RPR', 'GCG', 'GSG'], {
            R: 'gtceu:sticky_resin',
            G: 'gtceu:wood_gear',
            S: 'create:shaft',
            C: 'create:andesite_casing',
            P: '#minecraft:wooden_slabs',
        })
        .id('start:shaped/mechanical_bearing');

    event
        .shaped(Item.of('create:windmill_bearing'), ['FRF', 'XBW', 'FSF'], {
            F: 'create:sail_frame',
            R: 'gtceu:sticky_resin',
            X: '#forge:tools/screwdrivers',
            B: 'create:mechanical_bearing',
            W: '#forge:tools/wrench',
            S: 'create:shaft',
        })
        .id('start:shaped/windmill_bearing');

    event
        .shapeless(Item.of('create:clockwork_bearing'), [
            'create:brass_casing',
            'create:mechanical_bearing',
            'create:electron_tube',
        ])
        .id('start:shapeless/clockwork_bearing');

    event.recipes.create
        .mechanical_crafting('create:gantry_carriage', [' R ', 'SPS', 'GCG'], {
            S: 'create:shaft',
            C: 'create:andesite_casing',
            G: 'create:cogwheel',
            P: 'minecraft:piston',
            R: 'gtceu:sticky_resin',
        })
        .id('start:mechanical_crafting/gantry_carriage');

    event.recipes.create
        .mechanical_crafting('create:rotation_speed_controller', ['RGR', 'SMS', 'PCP'], {
            R: 'gtceu:brass_ring',
            G: 'create:cogwheel',
            S: 'create:shaft',
            P: 'gtceu:brass_plate',
            C: 'create:brass_casing',
            M: 'create:precision_mechanism',
        })
        .id('start:mechanical_crafting/rotation_speed_controller');

    event
        .shaped(Item.of('create:gantry_shaft', 2), [' RP', 'RSR', 'PR '], {
            R: 'gtceu:small_redstone_dust',
            P: 'gtceu:wood_plate',
            S: 'create:shaft',
        })
        .id('start:shaped/gantry_shaft');

    event.remove({ output: 'create:super_glue' });
    event.recipes.create
        .mechanical_crafting('create:super_glue', ['  RS', 'NGRP', '  RS'], {
            R: 'gtceu:sticky_resin',
            P: 'gtceu:iron_plate',
            N: 'minecraft:iron_nugget',
            S: '#forge:string',
            G: 'gtceu:rubber_ring',
        })
        .id('start:mechanical_crafting/super_glue');

    event.recipes.create
        .mechanical_crafting(Item.of('create_new_age:carbon_brushes'), ['RWPWR', 'W C W', 'PUsUP', 'W C W', 'RWPWR'], {
            R: 'gtceu:cast_iron_rod',
            W: 'gtceu:fine_copper_wire',
            P: 'gtceu:cast_iron_plate',
            C: '#minecraft:coals',
            U: '#gtceu:circuits/ulv',
            s: 'create:shaft',
        })
        .id('start:mechanical_crafting/carbon_brushes');

    event.recipes.create
        .mechanical_crafting(Item.of('2x create_new_age:electrical_connector'), ['WRW', 'WDW', 'RPR'], {
            W: 'gtceu:fine_copper_wire',
            R: 'gtceu:cast_iron_ring',
            D: 'gtceu:cast_iron_rod',
            P: 'gtceu:cast_iron_plate',
        })
        .id('start:mechanical_crafter/electrical_connector');

    event.recipes.create
        .mechanical_crafting(
            Item.of('2x create_new_age:generator_coil'),
            ['RWWRWWR', 'WCPCPCW', 'WPWWWPW', 'RCWSWCR', 'WPWWWPW', 'WCPCPCW', 'RWWRWWR'],
            {
                R: 'gtceu:cast_iron_ring',
                W: 'gtceu:fine_copper_wire',
                C: 'create_new_age:electrical_connector',
                P: 'gtceu:cast_iron_plate',
                S: 'create:shaft',
            }
        )
        .id('start:mechanical_crafter/generator_coil');

    event.recipes.create
        .compacting('create_new_age:magnetite_block', ['8x gtceu:magnetite_dust', 'gtceu:stone_dust'])
        .id('start:compacting/magnetite_block');

    event.recipes.create
        .mechanical_crafting(Item.of('4x create_new_age:redstone_magnet'), ['BrB', 'rRr', 'BrB'], {
            B: 'create_new_age:magnetite_block',
            R: 'minecraft:redstone',
            r: 'minecraft:redstone_block',
        })
        .id('start:mechanical_crafter/redstone_magnet');

    event.recipes.create
        .mechanical_crafting(Item.of('3x create_new_age:layered_magnet'), ['IGI', 'GIG', 'RRR', 'GIG', 'IGI'], {
            R: 'create_new_age:redstone_magnet',
            G: 'create_new_age:overcharged_gold',
            I: 'create_new_age:overcharged_iron',
        })
        .id('start:mechanical_crafter/layered_magnet');

    event.recipes.create
        .mechanical_crafting(
            Item.of('4x create_new_age:fluxuated_magnetite'),
            ['DMDMD', 'MLMLM', 'DMDMD', 'MLMLM', 'DMDMD'],
            {
                L: 'create_new_age:layered_magnet',
                M: 'gtceu:magnetite_dust',
                D: 'create_new_age:overcharged_diamond',
            }
        )
        .id('start:mechanical_crafter/fluxuated_magnetite');

    event
        .shaped(Item.of('3x create:belt_connector'), ['RRR', 'HSW'], {
            R: 'gtceu:rubber_plate',
            H: '#forge:tools/hammers',
            S: '#forge:tools/screwdrivers',
            W: '#forge:tools/wrenches',
        })
        .id('start:shaped/belt_connector');

    event.recipes.create
        .mechanical_crafting(Item.of('3x create:belt_connector'), ['RRR'], {
            R: 'gtceu:rubber_plate',
        })
        .id('start:mechanical_crafter/belt_connector');

    event.recipes.create
        .mechanical_crafting(Item.of('create:mechanical_piston'), ['SAP', ' C '], {
            S: 'create:piston_extension_pole',
            A: 'create:andesite_casing',
            P: 'minecraft:piston',
            C: 'create:cogwheel',
        })
        .id('start:mechanical_crafter/mechanical_piston');

    const cnaWire = (material, energy, output) => {
        event
            .custom({
                type: 'create_new_age:energising',
                /* eslint-disable */
                energy_needed: energy,
                /* eslint-enable */
                ingredients: [
                    {
                        item: `gtceu:fine_${material}_wire`,
                    },
                ],
                results: [
                    {
                        item: `create_new_age:${output}`,
                    },
                ],
            })
            .id(`start:energising/${output}`);
    };
    cnaWire('copper', 500, 'copper_wire');
    cnaWire('iron', 1000, 'overcharged_iron_wire');
    cnaWire('gold', 2000, 'overcharged_golden_wire');

    const energiser = (tier, material, prior) => {
        event.recipes.create
            .mechanical_crafting(Item.of(`create_new_age:energiser_${tier}`), ['PRP', 'USU', 'PGP', ' N '], {
                R: 'gtceu:cast_iron_rod',
                P: 'gtceu:cast_iron_plate',
                S: prior,
                U: '#gtceu:circuits/ulv',
                G: material,
                N: 'create_new_age:electrical_connector',
            })
            .id(`start:mechanical_crafter/energiser_${tier}`);
    };
    energiser('t1', 'minecraft:lightning_rod', 'create:shaft');
    energiser('t2', 'create_new_age:overcharged_golden_wire', 'create_new_age:energiser_t1');
    energiser('t3', 'create_new_age:overcharged_diamond', 'create_new_age:energiser_t2');

    event.recipes.create
        .mechanical_crafting(Item.of('create_new_age:basic_motor'), ['NRN', 'SMP', 'NRN'], {
            N: 'create_new_age:overcharged_iron_sheet',
            R: 'gtceu:cast_iron_rod',
            S: 'create:shaft',
            M: 'gtceu:ulv_electric_motor',
            P: 'gtceu:cast_iron_plate',
        })
        .id('start:mechanical_crafter/basic_motor');

    event.recipes.create
        .mechanical_crafting(Item.of('create_new_age:advanced_motor'), ['NRN', 'SMP', 'NRN'], {
            N: 'create_new_age:overcharged_golden_sheet',
            R: 'gtceu:cast_iron_rod',
            S: 'gtceu:cast_iron_ring',
            M: 'create_new_age:basic_motor',
            P: 'gtceu:cast_iron_plate',
        })
        .id('start:mechanical_crafter/advanced_motor');

    event.recipes.create
        .mechanical_crafting(Item.of('create_new_age:reinforced_motor'), ['NRRRN', 'SSMFP', 'NRRRN'], {
            N: 'gtceu:cast_iron_screw',
            R: 'gtceu:cast_iron_rod',
            S: 'create:shaft',
            F: 'create_new_age:fluxuated_magnetite',
            M: 'create_new_age:basic_motor',
            P: 'gtceu:double_cast_iron_plate',
        })
        .id('start:mechanical_crafter/reinforced_motor');

    event.recipes.create
        .crushing(
            ['1x createdieselgenerators:wood_chip', Item.of('createdieselgenerators:wood_chip').withChance(0.75)],
            '#minecraft:wooden_slabs'
        )
        .id('start:crushing/wood_chip_slabs');
    event.recipes.create
        .crushing(
            ['2x createdieselgenerators:wood_chip', Item.of('createdieselgenerators:wood_chip').withChance(0.75)],
            '#minecraft:wooden_stairs'
        )
        .id('start:crushing/wood_chip_stairs');
    event.recipes.create
        .crushing(
            ['1x createdieselgenerators:wood_chip', Item.of('createdieselgenerators:wood_chip').withChance(0.75)],
            '#minecraft:wooden_fences'
        )
        .id('start:crushing/wood_chip_fences');
    event.recipes.create
        .crushing(
            ['3x createdieselgenerators:wood_chip', Item.of('createdieselgenerators:wood_chip').withChance(0.75)],
            '#minecraft:planks'
        )
        .id('start:crushing/wood_chip_planks');

    event.remove({ id: 'create:crafting/kinetics/speedometer' });
    event.recipes
        .shaped('create:speedometer', ['RGR', 'SIS', 'ACA'], {
            R: 'minecraft:redstone',
            G: 'minecraft:glass_pane',
            S: 'create:shaft',
            I: 'gtceu:iron_rod',
            C: 'create:andesite_casing',
            A: 'create:andesite_alloy',
        })
        .id('start:shaped/speedometer');

    const betterCasings = (type, primary, secondary) => {
        event.recipes.create
            .mechanical_crafting(Item.of(`create:${type}_casing`, 2), ['PSP', 'SFS', 'PSP'], {
                P: `gtceu:${primary}_plate`,
                F: `gtceu:${primary}_frame`,
                S: secondary,
            })
            .id(`start:mechanical_crafter/${type}_casing`);

        event.recipes.gtceu
            .assembler(id(`${type}_casing`))
            .itemInputs(`1x gtceu:${primary}_frame`, `4x gtceu:${primary}_plate`, `4x ${secondary}`)
            .itemOutputs(`2x create:${type}_casing`)
            .EUt(2)
            .duration(50);
    };
    betterCasings('andesite', 'wood', 'create:andesite_alloy');
    betterCasings('copper', 'pig_iron', 'create:fluid_pipe');
    betterCasings('brass', 'treated_wood', 'gtceu:brass_plate');

    // C:DG
    event.recipes.create
        .mechanical_crafting(Item.of(`createdieselgenerators:engine_piston`, 2), [' BD', 'NRB', 'GN '], {
            D: 'gtceu:double_iron_plate',
            B: 'gtceu:iron_bolt',
            N: 'gtceu:iron_ring',
            R: 'gtceu:iron_rod',
            G: 'gtceu:small_iron_gear',
        })
        .id(`start:mechanical_crafter/engine_piston`);

    event.recipes.create
        .mechanical_crafting(Item.of(`createdieselgenerators:diesel_engine`), ['CLC', 'PSP', 'TTT'], {
            C: 'gtceu:brass_screw',
            L: 'gtceu:brass_plate',
            P: 'createdieselgenerators:engine_piston',
            S: 'create:shaft',
            T: 'gtceu:cast_iron_plate',
        })
        .id(`start:mechanical_crafter/diesel_engine`);

    event.recipes.create
        .mechanical_crafting(Item.of(`createdieselgenerators:large_diesel_engine`), ['PLP', 'SES'], {
            E: 'createdieselgenerators:diesel_engine',
            L: 'gtceu:brass_plate',
            P: 'createdieselgenerators:engine_piston',
            S: 'create:shaft',
        })
        .id(`start:mechanical_crafter/large_diesel_engine`);

    event.recipes.create
        .mechanical_crafting(Item.of(`createdieselgenerators:huge_diesel_engine`), ['PDT R', 'PCOOS', 'PDT R'], {
            D: 'gtceu:double_brass_plate',
            P: 'gtceu:brass_plate',
            T: 'createdieselgenerators:engine_piston',
            S: 'create:shaft',
            C: 'create:fluid_pipe',
            O: 'gtceu:iron_rod',
            R: 'gtceu:cast_iron_ring',
        })
        .id(`start:mechanical_crafter/huge_diesel_engine`);

    event.recipes.create
        .mechanical_crafting(Item.of(`create:chain_conveyor`, 2), ['ACNA', 'CGC ', 'ACNA'], {
            A: 'create:andesite_alloy',
            C: 'create:andesite_casing',
            N: 'gtceu:iron_ring',
            G: 'create:large_cogwheel',
        })
        .id(`start:mechanical_crafter/chain_conveyor`);

    event.recipes.create
        .mechanical_crafting(Item.of(`create:transmitter`, 4), [' E ', 'PPP'], {
            E: 'kubejs:ulv_emitter',
            P: 'gtceu:copper_plate',
        })
        .id(`start:mechanical_crafter/transmitter`);

    event.recipes.create
        .mechanical_crafting(Item.of(`create:display_link`, 2), [' T ', 'GCG'], {
            T: 'create:transmitter',
            C: 'create:brass_casing',
            G: 'gtceu:gold_foil',
        })
        .id(`start:mechanical_crafter/display_link`);

    event.recipes.create
        .mechanical_crafting(Item.of(`create:package_frogport`, 3), [' G G ', 'AFVFA', 'ASSSA', 'OoCoO'], {
            G: 'gtceu:glass_tube',
            A: 'create:andesite_alloy',
            F: 'gtceu:iron_foil',
            V: 'create:item_vault',
            S: 'minecraft:slime_ball',
            O: 'gtceu:iron_gear',
            o: 'gtceu:small_iron_gear',
            C: 'create:andesite_casing',
        })
        .id(`start:mechanical_crafter/package_frogport`);

    event.recipes.create
        .mechanical_crafting(Item.of(`create:packager`), ['NLN', 'AFC', 'RBP'], {
            N: 'gtceu:pig_iron_ring',
            L: 'create:andesite_funnel',
            A: 'gtceu:ulv_robot_arm',
            F: 'gtceu:pig_iron_frame',
            C: 'gtceu:ulv_conveyor_module',
            R: 'xycraft_world:xychorium_gem_red',
            B: 'create:bound_cardboard_block',
            P: 'minecraft:stone_pressure_plate',
        })
        .id(`start:mechanical_crafter/packager`);

    event.recipes.create
        .mechanical_crafting(Item.of(`create:repackager`), ['NLN', 'CFA', 'PBR'], {
            N: 'gtceu:pig_iron_ring',
            L: 'create:andesite_funnel',
            A: 'gtceu:ulv_robot_arm',
            F: 'gtceu:pig_iron_frame',
            C: 'gtceu:ulv_conveyor_module',
            R: 'xycraft_world:xychorium_gem_red',
            B: 'create:bound_cardboard_block',
            P: '#minecraft:wooden_pressure_plates',
        })
        .id(`start:mechanical_crafter/repackager`);

    event.recipes.create
        .mechanical_crafting(Item.of(`create:stock_link`, 2), ['UTR', 'AVA'], {
            U: '#gtceu:circuits/ulv',
            T: 'create:transmitter',
            R: '#gtceu:resistors',
            A: 'create:andesite_alloy',
            V: 'create:item_vault',
        })
        .id(`start:mechanical_crafter/stock_link`);

    event.recipes.create
        .mechanical_crafting(Item.of(`create:stock_ticker`), ['GGG', 'GLG', 'PSP'], {
            G: '#forge:glass_panes',
            L: 'create:stock_link',
            P: 'minecraft:paper',
            S: 'gtceu:gold_spring',
        })
        .id(`start:mechanical_crafter/stock_ticker`);

    event.recipes.create
        .mechanical_crafting(Item.of(`create:factory_gauge`, 4), ['PPP', 'MLM', 'PPP'], {
            M: 'create:precision_mechanism',
            L: 'create:stock_link',
            P: 'minecraft:paper',
        })
        .id(`start:mechanical_crafter/factory_gauge`);

    event.recipes.create
        .mechanical_crafting(Item.of(`create:redstone_requester`), ['LVC', 'PPP'], {
            V: 'create:item_vault',
            L: 'create:stock_link',
            C: 'minecraft:comparator',
            P: 'gtceu:iron_plate',
        })
        .id(`start:mechanical_crafter/redstone_requester`);

    event
        .shaped(Item.of('create:redstone_link', 2), ['T', 'P'], {
            T: 'create:transmitter',
            P: 'gtceu:iron_plate',
        })
        .id(`start:shaped/redstone_link`);

    event
        .shaped(Item.of('create:wrench'), ['FDT', 'WSG', ' PL'], {
            F: '#forge:tools/files',
            D: 'gtceu:double_gold_plate',
            T: 'minecraft:stick',
            W: '#forge:tools/wrenches',
            S: 'create:shaft',
            G: 'create:cogwheel',
            P: 'gtceu:gold_plate',
            L: 'gtceu:long_wood_rod',
        })
        .id(`start:shaped/wrench`);

    event
        .shaped(Item.of('create:item_hatch', 2), ['AT', 'AC'], {
            A: 'create:andesite_alloy',
            T: 'minecraft:iron_trapdoor',
            C: 'create:chute',
        })
        .id(`start:shaped/item_hatch`);

    event
        .shaped(Item.of('create:redstone_contact'), ['B', 'O'], {
            O: 'minecraft:observer',
            B: 'minecraft:stone_button',
        })
        .id(`start:shaped/redstone_contact`);

    event
        .shaped(Item.of('create:schematicannon'), ['SPL', 'PGP', 'ADA'], {
            S: '#forge:string',
            P: '#minecraft:wooden_slabs',
            L: 'gtceu:lead_small_fluid_pipe',
            G: 'gtceu:cast_iron_gear',
            A: 'create:andesite_alloy',
            D: 'minecraft:dispenser',
        })
        .id(`start:shaped/schematicannon`);

    event
        .shaped(Item.of('create:display_board', 3), ['APA', 'CEC', 'APA'], {
            A: 'create:andesite_alloy',
            P: 'minecraft:paper',
            C: 'create:cogwheel',
            E: 'create:electron_tube',
        })
        .id(`start:shaped/display_board`);

    event
        .shaped(Item.of('createdieselgenerators:basin_lid'), [' A ', 'PCP', 'AAA'], {
            A: 'create:andesite_alloy',
            P: 'gtceu:iron_plate',
            C: 'minecraft:clock',
        })
        .id(`start:shaped/basin_lid`);

    event
        .shaped(Item.of('create:brown_toolbox'), ['RTR', 'GCG', 'SSS'], {
            R: 'gtceu:gold_ring',
            T: 'gtceu:treated_wood_rod',
            G: 'create:cogwheel',
            C: 'minecraft:chest',
            S: 'gtceu:treated_wood_slab',
        })
        .id(`start:shaped/brown_toolbox`);

    [
        { type: 'hose', casing: 'copper', base: 'create:fluid_pipe' },
        { type: 'elevator', casing: 'brass', base: 'gtceu:iron_plate' },
    ].forEach((pulley) => {
        event.recipes.create
            .mechanical_crafting(Item.of(`create:${pulley.type}_pulley`), ['RCR', 'SWS', ' B ', ' N '], {
                R: 'gtceu:rubber_plate',
                C: `create:${pulley.casing}_casing`,
                S: 'create:shaft',
                W: '#minecraft:wool',
                B: `${pulley.base}`,
                N: 'gtceu:rubber_ring',
            })
            .id(`start:mechanical_crafter/${pulley.type}_pulley`);
    });

    // Removals
    const createRemoval = [
        'windmill_bearing',
        'spout',
        'fluid_pipe',
        'chute',
        'depot',
        'basin',
        'mechanical_mixer',
        'mechanical_press',
        'hand_crank',
        'millstone',
        'crushing_wheel',
        'smart_chute',
        'fluid_tank',
        'steam_engine',
        'piston_extension_pole',
        'mechanical_bearing',
        'clockwork_bearing',
        'weighted_ejector',
        'encased_fan',
        'large_water_wheel',
        'encased_chain_drive',
        'gearshift',
        'gantry_shaft',
        'gantry_carriage',
        'mechanical_drill',
        'sticker',
        'mechanical_saw',
        'deployer',
        'andesite_casing',
        'brass_casing',
        'mechanical_crafter',
        'copper_casing',
        'sequenced_gearshift',
        'nozzle',
        'adjustable_chain_gearshift',
        'water_wheel',
        'andesite_funnel',
        'mechanical_arm',
        'item_vault',
        'flywheel',
        'brass_hand',
        'whisk',
        'propeller',
        'electron_tube',
        'rotation_speed_controller',
        'brass_tunnel',
        'andesite_tunnel',
        'brass_funnel',
        'white_sail',
        'wrench',
        'hose_pulley',
        'transmitter',
        'pulp',
        'cardboard',
        'item_hatch',
        'elevator_pulley',
        'redstone_contact',
        'schematicannon',
        'display_board',
        'chain_conveyor',
        'redstone_link',
        'package_frogport',
        'display_link',
        'packager',
        'repackager',
        'brown_toolbox',
    ];
    createRemoval.forEach((item) => {
        event.remove({ output: `create:${item}` });
    });
    const createIDRemoval = [
        'crafting/logistics/stock_link',
        'crafting/logistics/stock_ticker',
        'crafting/logistics/redstone_requester',
        'crafting/logistics/factory_gauge',
        'milling/gravel',
    ];
    createIDRemoval.forEach((item) => {
        event.remove({ id: `create:${item}` });
    });
    const createNewAge = [
        'layered_magnet',
        'fluxuated_magnetite',
        'energiser_t1',
        'energiser_t2',
        'energiser_t3',
        'electrical_connector',
        'generator_coil',
        'basic_motor',
        'advanced_motor',
        'reinforced_motor',
    ];
    createNewAge.forEach((removal) => {
        event.remove({ output: `create_new_age:${removal}` });
    });
    const cDiesel = [
        'engine_piston',
        'engine_silencer',
        'engine_turbocharger',
        'diesel_engine',
        'large_diesel_engine',
        'huge_diesel_engine',
        'wood_chip',
        'basin_lid',
    ];
    cDiesel.forEach((removal) => {
        event.remove({ output: `createdieselgenerators:${removal}` });
    });
    event.remove({ id: /^railways:mechanical_crafting\/.*_locometal_boiler/ });
    event.remove({ mod: 'vintage' });
});
