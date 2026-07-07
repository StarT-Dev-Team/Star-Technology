ServerEvents.recipes((event) => {
    const id = global.id;

    event.remove({ id: /thermal:parts.*gear/ });
    event.remove({ id: /thermal_extra:parts.*gear/ });
    event.remove({ id: /thermal_extra:.*dust/ });

    event.remove({ id: /thermal_extra:.*dust.*/ });
    event.remove({ id: /thermal:.*dust.*/ });

    event.remove({ id: /thermal:smelting.*smelting/ });
    event.remove({ id: /thermal:smelting.*blasting/ });
    event.remove({ id: /thermal:smelting.*smelting/ });
    event.remove({ id: /thermal_extra:smelting.*blasting/ });

    event.remove({ output: /thermal:.*attachment/ });

    event.remove({ output: /thermal.*augment.*/ });

    // Dynamo recipes
    event.remove({ output: /thermal:dynamo*/ });

    event.remove({ mod: 'thermal_extra' });

    event
        .shaped(Item.of('thermal:dynamo_stirling'), [' C ', 'PGP', 'SRS'], {
            C: 'thermal:rf_coil',
            P: 'gtceu:iron_plate',
            G: 'gtceu:iron_gear',
            S: 'gtceu:steel_plate',
            R: 'gtceu:lv_machine_hull',
        })
        .id('start:shaped/stirling_dynamo');

    event.recipes.gtceu
        .assembler(id('stirling_dynamo'))
        .itemInputs('thermal:rf_coil', 'gtceu:iron_gear', 'gtceu:lv_machine_hull')
        .itemOutputs('thermal:dynamo_stirling')
        .inputFluids('gtceu:tin_alloy 144')
        .duration(300)
        .EUt(16);

    event.recipes.gtceu
        .assembler(id('lapidary_dynamo'))
        .itemInputs('thermal:rf_coil', 'gtceu:cobalt_brass_gear', 'gtceu:lv_machine_hull')
        .itemOutputs('thermal:dynamo_lapidary')
        .inputFluids('gtceu:tin_alloy 288')
        .duration(300)
        .EUt(30);

    event.recipes.gtceu
        .assembler(id('compression_dynamo'))
        .itemInputs('thermal:rf_coil', 'gtceu:bronze_gear', 'gtceu:lv_machine_hull')
        .itemOutputs('thermal:dynamo_compression')
        .inputFluids('gtceu:tin_alloy 432')
        .duration(300)
        .EUt(30);

    // Dynamo new fuels and fuel recipes
    event.remove({ type: 'thermal:compression_fuel', input: 'thermal:tree_oil' });
    event.remove({ type: 'thermal:compression_fuel', input: 'thermal:refined_fuel' });
    event.recipes.thermal.compression_fuel('gtceu:bio_diesel', 512000);
    event.recipes.thermal.compression_fuel('gtceu:diesel', 960000);
    event.recipes.thermal.compression_fuel('gtceu:cetane_boosted_diesel', 1280000);
    event.recipes.thermal.compression_fuel('gtceu:gasoline', 3200000);
    event.recipes.thermal.compression_fuel('gtceu:high_octane_gasoline', 6400000);
    event.recipes.thermal.compression_fuel('gtceu:naphtha', 480000);

    event.remove({ id: 'gtceu:combustion_generator/naphtha' });
    event.recipes.gtceu.combustion_generator(id('naphtha')).inputFluids('gtceu:naphtha 4').duration(30).EUt(-32);

    /* 
    event.recipes.gtceu.brewery(id('sunflower_oil'))
        .itemInputs('16x minecraft:sunflower')
        .outputFluids('thermal_extra:sunflower_oil 500')
        .duration(400)
        .EUt(28);

    event.recipes.gtceu.mixer(id('crystalized_sunflower_oil'))
        .itemInputs('minecraft:amethyst_shard')
        .inputFluids('thermal_extra:sunflower_oil 1000')
        .outputFluids('thermal_extra:crystallized_sunflower_oil 750')
        .duration(600)
        .EUt(28);

    event.recipes.gtceu.distillery(id('sunflower_oil_refined'))
        .inputFluids('thermal_extra:crystallized_sunflower_oil 1000')
        .outputFluids('thermal_extra:refined_sunflower_oil 600')
        .circuit(0)
        .duration(600)
        .EUt(325);

    event.recipes.gtceu.distillery(id('sunflower_oil_seed'))
        .inputFluids('thermal_extra:crystallized_sunflower_oil 1000')
        .outputFluids('gtceu:seed_oil 400')
        .circuit(1)
        .duration(600)
        .EUt(325);
    */

    event.recipes.thermal.lapidary_fuel('gtceu:diatron_gem', 750000);
    event.recipes.thermal.lapidary_fuel('gtceu:flawless_diatron_gem', 750000 * 2.5);
    event.recipes.thermal.lapidary_fuel('gtceu:exquisite_diatron_gem', 750000 * 6.25);
    event.remove({ type: 'thermal:lapidary_fuel', input: 'minecraft:diamond' });
    event.recipes.thermal.lapidary_fuel('minecraft:diamond', 300000);

    event.remove({ mod: 'systeams' });

    event.custom({
        // So prior worlds dont crash
        type: 'systeams:steam',
        ingredient: {
            fluid: 'systeams:steamietest',
            amount: 1000,
        },
        energy: 1000,
    });

    event.custom({
        type: 'systeams:steam',
        ingredient: {
            fluid_tag: 'forge:steam',
            amount: 1000,
        },
        energy: 1000,
    });

    event.custom({
        type: 'systeams:boiling',
        ingredient: {
            fluid: `minecraft:water`,
            amount: 100,
        },
        result: {
            fluid: `systeams:steam`,
            amount: 400,
        },
    });

    event.custom({
        type: 'systeams:boiling',
        ingredient: {
            fluid_tag: `forge:steam`,
            amount: 50,
        },
        result: {
            fluid: `systeams:steamier`,
            amount: 100,
        },
    });

    let steamToIer = new JSONObject();
    steamToIer.add('amount', 500);
    steamToIer.add('value', { tag: 'forge:steam' });

    event.recipes.gtceu
        .fluid_heater(id(`steam_tag`))
        .inputFluids(FluidIngredientJS.of(steamToIer))
        .outputFluids(`systeams:steamier 1000`)
        .duration(20)
        .EUt(30);

    const SysteamSteams = (type, prior, scale) => {
        event.recipes.gtceu
            .steam_turbine(id(`${type}`))
            .inputFluids(`systeams:${type} 640`)
            .outputFluids(`gtceu:distilled_water ${4 - scale}`)
            .duration(10 + 2 * scale)
            .EUt(-32);

        event.custom({
            type: 'systeams:steam',
            ingredient: {
                fluid: `systeams:${type}`,
                amount: 1000,
            },
            energy: 1000 + 200 * scale,
        });

        if (type !== 'steamier') {
            event.custom({
                type: 'systeams:boiling',
                ingredient: {
                    fluid: `systeams:${prior}`,
                    amount: 50,
                },
                result: {
                    fluid: `systeams:${type}`,
                    amount: 100,
                },
            });
            event.recipes.gtceu
                .fluid_heater(id(`${type}`))
                .inputFluids(`systeams:${prior} 500`)
                .outputFluids(`systeams:${type} 1000`)
                .duration(20)
                .EUt(30);
        }
    };
    SysteamSteams('steamier', 'steam', 1);
    SysteamSteams('steamiest', 'steamier', 2);
    SysteamSteams('steamiester', 'steamiest', 3);

    event.recipes.gtceu
        .mixer(id('diatron_dust'))
        .itemInputs('1x gtceu:energium_dust', '2x gtceu:diamond_dust')
        .itemOutputs('3x gtceu:diatron_dust')
        .duration(120)
        .EUt(480);

    event.recipes.gtceu
        .autoclave(id('diatron_dis_water'))
        .itemInputs('gtceu:diatron_dust')
        .inputFluids('gtceu:distilled_water 50')
        .itemOutputs('gtceu:diatron_gem')
        .duration(600)
        .EUt(24);

    event.recipes.gtceu
        .autoclave(id('diatron_water'))
        .itemInputs('gtceu:diatron_dust')
        .inputFluids('minecraft:water 250')
        .chancedOutput('gtceu:diatron_gem', 7000, 1000)
        .duration(1200)
        .EUt(24);

    event.remove({ id: 'gtceu:laser_engraver/engrave_diatron_flawless_gem_to_gem' });
    event.remove({ id: 'gtceu:laser_engraver/engrave_diatron_exquisite_gem_to_flawless_gem' });
    event.recipes.gtceu
        .laser_engraver(id('engrave_diatron_flawless_gem_to_gem'))
        .itemInputs('2x gtceu:diatron_gem')
        .notConsumable('#forge:lenses/white')
        .itemOutputs('gtceu:flawless_diatron_gem')
        .duration(160)
        .EUt(240);
    event.recipes.gtceu
        .laser_engraver(id('engrave_diatron_exquisite_gem_to_flawless_gem'))
        .itemInputs('2x gtceu:flawless_diatron_gem')
        .notConsumable('#forge:lenses/white')
        .itemOutputs('gtceu:exquisite_diatron_gem')
        .duration(160)
        .EUt(240);

    // === === ===

    event.replaceInput({ id: 'thermal:device_water_gen' }, 'minecraft:copper_ingot', 'gtceu:lead_ingot');
    event.replaceInput({ id: 'thermal:device_water_gen' }, 'minecraft:iron_ingot', 'minecraft:copper_ingot');

    event.remove({ id: 'thermal:redstone_servo' });

    event
        .shaped(Item.of('thermal:rf_coil'), [' RP', 'RBR', 'PR '], {
            R: 'gtceu:gold_rod',
            P: 'gtceu:gold_plate',
            B: 'minecraft:redstone_block',
        })
        .id('start:shaped/rf_coil');

    event.replaceInput({ id: 'thermal:device_fisher' }, '#forge:gears/copper', 'gtceu:bronze_gear');

    event.replaceInput({ id: 'thermal:device_rock_gen' }, '#forge:gears/constantan', 'gtceu:bronze_gear');

    event.replaceInput({ id: 'thermal:device_potion_diffuser' }, '#forge:gears/constantan', 'gtceu:bronze_gear');

    event.recipes.gtceu
        .extractor(id('molten_ender'))
        .itemInputs('minecraft:ender_pearl')
        .outputFluids('thermal:ender 250')
        .duration(600)
        .EUt(28);

    [
        {
            id: 'hardened',
            glass: 'thermal:obsidian',
            base: 'gtceu:tempered',
            fluid: 'minecraft:lava 250',
            voltage: 'ulv',
        },
        {
            id: 'soul_infused',
            glass: 'thermal_extra:soul_infused',
            base: 'gtceu:tempered',
            fluid: 'gtceu:soul_infused 144',
            voltage: 'lv',
        },
        {
            id: 'signalum',
            glass: 'thermal:signalum',
            base: 'gtceu:tempered',
            fluid: 'gtceu:signalum 144',
            voltage: 'mv',
        },
        { id: 'lumium', glass: 'thermal:lumium', base: 'gtceu:tempered', fluid: 'gtceu:lumium 144', voltage: 'hv' },
        {
            id: 'enderium',
            glass: 'thermal:enderium',
            base: 'gtceu:tempered',
            fluid: 'gtceu:enderium 144',
            voltage: 'ev',
        },
        {
            id: 'shellite',
            glass: 'thermal_extra:shellite',
            base: 'gtceu:laminated',
            fluid: 'gtceu:shellite 144',
            voltage: 'iv',
        },
        {
            id: 'twinite',
            glass: 'thermal_extra:twinite',
            base: 'gtceu:laminated',
            fluid: 'gtceu:twinite 144',
            voltage: 'luv',
        },
        {
            id: 'dragonsteel',
            glass: 'thermal_extra:dragonsteel',
            base: 'gtceu:fusion',
            fluid: 'gtceu:dragonsteel 144',
            voltage: 'zpm',
        },
    ].forEach((type) => {
        event.recipes.gtceu
            .fluid_solidifier(id(`${type.id}_glass`))
            .itemInputs(`${type.base}_glass`)
            .inputFluids(type.fluid)
            .itemOutputs(`${type.glass}_glass`)
            .duration(240)
            .EUt(global.va[type.voltage]);
    });

    event
        .shaped(Item.of('thermal:energy_cell_frame'), ['LEL', 'E E', 'LEL'], {
            L: 'gtceu:lead_plate',
            E: 'gtceu:electrum_plate',
        })
        .id('start:shaped/energy_cell_frame');

    event
        .shaped(Item.of('thermal:machine_frame'), ['SSS', 'S S', 'BBB'], {
            S: 'gtceu:double_stainless_steel_plate',
            B: 'gtceu:double_black_steel_plate',
        })
        .id('start:shaped/machine_frame');

    event.recipes.create
        .item_application('thermal:fluid_cell', ['thermal:fluid_cell_frame', 'create:fluid_tank'])
        .id('start:item_application/fluid_cell');

    event.recipes.gtceu
        .alloy_smelter(id('fluid_cell'))
        .itemInputs('thermal:fluid_cell_frame', 'create:fluid_tank')
        .itemOutputs('thermal:fluid_cell')
        .duration(80)
        .EUt(28);

    event.recipes.create
        .item_application('thermal:energy_cell', ['thermal:energy_cell_frame', 'minecraft:redstone_block'])
        .id('start:item_application/energy_cell');

    event.recipes.gtceu
        .alloy_smelter(id('energy_cell'))
        .itemInputs('thermal:energy_cell_frame', 'minecraft:redstone_block')
        .itemOutputs('thermal:energy_cell')
        .duration(80)
        .EUt(28);

    event.recipes.gtceu
        .assembler(id('boiler_pipe'))
        .itemInputs('gtceu:tempered_glass', '3x gtceu:bronze_ring')
        .itemOutputs('systeams:boiler_pipe')
        .duration(120)
        .EUt(112);

    event.recipes.gtceu
        .assembler(id('steam_dynamo'))
        .itemInputs('gtceu:lv_machine_hull', 'systeams:boiler_pipe', 'gtceu:black_steel_gear', 'gtceu:lead_rotor')
        .itemOutputs('systeams:steam_dynamo')
        .duration(320)
        .EUt(112);
});
