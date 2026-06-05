// packmode: hard

ServerEvents.recipes((event) => {
    const id = global.id;

    // Ethanol => Ethane
    ['fermented_spider_eye', 'fermentable'].forEach((type) => {
        event.remove({ id: `createdieselgenerators:basin_fermenting/${type}` });
    });

    event
        .custom({
            type: 'createdieselgenerators:basin_fermenting',
            ingredients: [
                {
                    item: 'minecraft:sugar',
                },
                {
                    item: 'minecraft:sugar',
                },
                {
                    item: 'minecraft:bone_meal',
                },
                {
                    item: 'minecraft:potato',
                },
                {
                    item: 'minecraft:potato',
                },
                {
                    fluid: 'minecraft:water',
                    amount: 250,
                },
            ],
            heatRequirement: 'superheated',
            processingTime: 200,
            results: [
                {
                    fluid: 'createdieselgenerators:ethanol',
                    amount: 100,
                },
            ],
        })
        .id('start:basin_fermenting/ethanol');

    let ethanol = new JSONObject();
    ethanol.add('amount', 1000);
    ethanol.add('value', { tag: 'forge:ethanol' });

    event.recipes.gtceu
        .chemical_reactor(id('ethane_from_ethanol'))
        .notConsumable('gtceu:nickel_dust')
        .inputFluids(FluidIngredientJS.of(ethanol), 'gtceu:hydrogen 2000')
        .outputFluids('gtceu:ethane 1000', 'minecraft:water 1000')
        .circuit(3)
        .duration(3650)
        .EUt(30);

    event.replaceInput({ id: 'gtceu:mixer/rose_gold' }, 'gtceu:copper_dust', 'gtceu:annealed_copper_dust');

    event.recipes.gtceu
        .macerator(id('soul_sand_dust'))
        .itemInputs('minecraft:soul_sand')
        .itemOutputs('thermal_extra:soul_sand_dust')
        .duration(40)
        .EUt(16);
    event.recipes.gtceu
        .mixer(id('soul_infused_dust'))
        .itemInputs('gtceu:invar_dust', '2x thermal_extra:soul_sand_dust')
        .itemOutputs('3x gtceu:soul_infused_dust')
        .duration(300)
        .EUt(16);
    event.recipes.gtceu
        .mixer(id('signalum_dust'))
        .itemInputs('gtceu:silver_dust', '3x gtceu:copper_dust', '4x minecraft:redstone')
        .itemOutputs('8x gtceu:signalum_dust')
        .duration(800)
        .EUt(64)
        .circuit(3);
    event.recipes.gtceu
        .mixer(id('lumium_dust'))
        .itemInputs('gtceu:silver_dust', '3x gtceu:tin_dust', '2x minecraft:glowstone_dust')
        .itemOutputs('6x gtceu:lumium_dust')
        .duration(600)
        .EUt(256);
    event.recipes.gtceu
        .mixer(id('enderium_dust'))
        .itemInputs('3x gtceu:lead_dust', '1x gtceu:diamond_dust', '3x gtceu:ender_pearl_dust')
        .itemOutputs('6x gtceu:enderium_dust')
        .duration(1000)
        .EUt(1024);

    event.recipes.gtceu
        .chemical_bath(id('hot_signalum_cooling_distilled_water'))
        .itemInputs('gtceu:hot_signalum_ingot')
        .inputFluids('gtceu:distilled_water')
        .itemOutputs('gtceu:signalum_ingot')
        .duration(375)
        .EUt(120);
    event.recipes.gtceu
        .chemical_bath(id('hot_signalum_cooling_water'))
        .itemInputs('gtceu:hot_signalum_ingot')
        .inputFluids('minecraft:water')
        .itemOutputs('gtceu:signalum_ingot')
        .duration(600)
        .EUt(120);

    event.remove({ id: 'gtceu:laser_engraver/engrave_cpu_silicon' });
    event.recipes.gtceu
        .laser_engraver(id('engrave_cpu_silicon'))
        .itemInputs('gtceu:silicon_wafer')
        .notConsumable('#forge:lenses/light_blue')
        .itemOutputs('gtceu:cpu_wafer')
        .duration(900)
        .EUt(120)
        .cleanroom(CleanroomType.CLEANROOM);

    event.remove({ id: 'gtceu:centrifuge/endstone_separation' });

    event.remove({ id: 'gtceu:mixer/magnalium' });
    event.remove({ id: 'gtceu:alloy_smelter/magnesium_dust_and_aluminium_dust_into_magnalium' });

    event.remove({ output: 'gtceu:epoxy' }); // Temp for Eta

    event
        .shaped(Item.of('gtceu:cobalt_brass_buzz_saw_blade'), ['HPM', 'PPP', 'WPF'], {
            M: '#forge:tools/mallets',
            W: '#forge:tools/wrenches',
            F: '#forge:tools/files',
            H: '#forge:tools/hammers',
            P: 'gtceu:cobalt_brass_plate',
        })
        .id('start:shaped/cobalt_brass_buzz_saw_blade');

    event.remove({ id: /gtceu:shaped\/shape.*/ });
    event.remove({ id: /gtceu:forming_press\/copy_shape.*/ });
    event.remove({ id: /gtceu:forming_press\/copy_mold.*/ });

    const mold = (type, ex, circuit) => {
        let variant = ex === true ? 'extruder' : 'casting';
        event.recipes.gtceu
            .forming_press(id(`${type}_${variant}_hm`))
            .itemInputs('gtceu:empty_mold')
            .circuit(circuit)
            .itemOutputs(`gtceu:${type}_${variant}_mold`)
            .duration(40)
            .EUt(24);
    };
    mold('block', true, 1);
    mold('block', false, 2);
    mold('ingot', true, 3);
    mold('ingot', false, 4);
    mold('plate', true, 5);
    mold('plate', false, 6);
    mold('gear', true, 7);
    mold('gear', false, 8);
    mold('small_gear', true, 9);
    mold('small_gear', false, 10);
    mold('rotor', true, 11);
    mold('rotor', false, 12);
    mold('bottle', true, 13);
    mold('bottle', false, 14);
    mold('tiny_pipe', true, 15);
    mold('small_pipe', true, 16);
    mold('normal_pipe', true, 17);
    mold('large_pipe', true, 18);
    mold('huge_pipe', true, 19);
    mold('bolt', true, 20);
    mold('ring', true, 21);
    mold('cell', true, 22);
    mold('cylinder', false, 23);
    mold('ball', false, 24);
    mold('pill', false, 25);
    mold('nugget', false, 26);
    mold('anvil', false, 27);
    // mold('credit',false,28);
    mold('name', false, 29);

    event.recipes.gtceu
        .mixer(id('cast_iron_dust'))
        .itemInputs('18x gtceu:crude_cast_iron_dust', '1x gtceu:bismuth_dust', '2x gtceu:copper_dust')
        .itemOutputs('21x gtceu:cast_iron_dust')
        .duration(132)
        .EUt(120);

    event.recipes.gtceu
        .electric_blast_furnace(id('cast_iron_ingot'))
        .itemInputs('gtceu:cast_iron_dust', 'gtceu:carbon_dust')
        .itemOutputs('gtceu:cast_iron_ingot')
        .blastFurnaceTemp(1800)
        .duration(280)
        .EUt(120);

    event.recipes.gtceu
        .assembler(id('data_access_hatch'))
        .itemInputs(
            'gtceu:mv_input_bus',
            '9x gtceu:data_stick',
            '24x gtceu:fine_platinum_wire',
            '4x #gtceu:circuits/ev',
            '4x gtceu:blue_alloy_double_cable'
        )
        .inputFluids('gtceu:silicone_rubber 576')
        .itemOutputs('gtceu:data_access_hatch')
        .duration(1200)
        .EUt(480);

    // Clearing non Certus Outputs
    [
        'centrifuge/centrifuge_quartzite_dirty_dust_to_dust',
        'centrifuge/quartz_sand_separation',
        'macerator/macerate_quartzite_crushed_ore_to_impure_dust',
        'ore_washer/wash_quartzite_crushed_ore_to_purified_ore',
        'ore_washer/wash_quartzite_crushed_ore_to_purified_ore_distilled',
    ].forEach((remove) => {
        event.replaceOutput({ id: `gtceu:${remove}` }, `gtceu:certus_quartz_dust`, `gtceu:nether_quartz_dust`);
    });

    event.remove({ id: 'gtceu:macerator/macerate_raw_quartiz_ore_to_crushed_ore' });
    event.recipes.gtceu
        .macerator(id('macerator/macerate_raw_quartiz_ore_to_crushed_ore'))
        .itemInputs('gtceu:raw_quartzite')
        .itemOutputs('4x gtceu:crushed_quartzite_ore')
        .chancedOutput('minecraft:quartz', 1000, 300)
        .chancedOutput('gtceu:stone_dust', 500, 100)
        .duration(400)
        .EUt(2);
});
