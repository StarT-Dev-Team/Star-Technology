ServerEvents.recipes(event => {
    const id = global.id;

    ['sky', 'fluix'].forEach(alloy => {
        event.recipes.gtceu.mixer(id(`${alloy}_steel`))
            .itemInputs(`ae2:${alloy}_dust`, '2x gtceu:steel_dust')
            .itemOutputs(`3x gtceu:${alloy}_steel_dust`)
            .duration(160)
            .EUt(56);
    });

    event.remove({ id: `gtceu:alloy_blast_smelter/sky_steel`});
    event.remove({ id: `gtceu:alloy_blast_smelter/sky_steel_gas`});
    [
        {metal: 'sky', gas: 'nitrogen 1000', temper: 1600, molten: false},
        {metal: 'fluix', gas: 'helium 300', temper: 1900, molten: true}
    ].forEach(abs => {
        const fluid = abs.molten ? `molten_${abs.metal}` : abs.metal;
        event.recipes.gtceu.alloy_blast_smelter(id(`${abs.metal}_steel`))
            .itemInputs(`ae2:${abs.metal}_dust`, '2x gtceu:steel_dust')
            .outputFluids(`gtceu:${fluid}_steel 432`)
            .blastFurnaceTemp(abs.temper)
            .circuit(3)
            .duration(900)
            .EUt(120);

        event.recipes.gtceu.alloy_blast_smelter(id(`${abs.metal}_steel_gas`))
            .itemInputs(`ae2:${abs.metal}_dust`, '2x gtceu:steel_dust')
            .inputFluids(`gtceu:${abs.gas}`)
            .outputFluids(`gtceu:${fluid}_steel 432`)
            .blastFurnaceTemp(abs.temper)
            .circuit(13)
            .duration(600)
            .EUt(120);
    });

    ['gold', 'certus_quartz'].forEach(mat => {
        event.recipes.gtceu.mixer(id(`netherite_${mat}_skystone_alloy`))
            .itemInputs('4x gtceu:netherite_dust', '2x gtceu:diamond_skystone_alloy_dust', `gtceu:${mat}_skystone_alloy_dust`)
            .itemOutputs(`7x gtceu:netherite_${mat}_skystone_alloy_dust`)
            .duration(160)
            .EUt(2048);
    });

    event.recipes.gtceu.extractor(id('skystone'))
        .itemInputs('ae2:sky_dust')
        .outputFluids('gtceu:skystone 144')
        .duration(200)
        .EUt(128);

    event.recipes.gtceu.rock_breaker(id(`sky_stone`))
        .notConsumable(`ae2:sky_dust`)
        .itemOutputs(`ae2:sky_stone_block`)
        .duration(48)
        .EUt(84)
        .addDataString('fluidA', 'minecraft:lava')
        .addDataString('fluidB', 'thermal:ender');
    
    event.recipes.gtceu.large_rock_crusher(id(`sky_stone_block`))
        .notConsumable(`ae2:sky_dust`)
        .notConsumableFluid('thermal:ender 1000')
        .notConsumableFluid('minecraft:lava 1000')
        .itemOutputs(`ae2:sky_stone_block`)
        .duration(48)
        .EUt(84);

    event.recipes.gtceu.dimensional_destabiliser(id('sky_stone_mining'))
        .itemInputs('kubejs:earth_infused_shard')
        .inputFluids('gtceu:pcb_coolant 8000')
        .itemOutputs('256x ae2:sky_stone_block','256x ae2:sky_stone_block')
        .chancedOutput('gtceu:tiny_nether_star_dust', 8000, 0)
        .outputFluids('gtceu:skystone 19200', 'gtceu:hot_pcb_coolant 9600')
        .duration(1800)
        .EUt(4096);

    event.recipes.gtceu.mixer(id('sky_dust'))
        .itemInputs('6x gtceu:stone_dust', '4x gtceu:ender_pearl_dust', '1x minecraft:redstone', '1x minecraft:glowstone_dust')
        .itemOutputs('ae2:sky_dust') //keep at low output
        .circuit(4)
        .duration(360)
        .EUt(112);

    [
        {chip: 'silicon', voltage: 'mv', n: 1, dura: 200},
        {chip: 'phosphorus', voltage: 'hv', n: 4, dura: 160},
        {chip: 'naquadah', voltage: 'ev', n: 8, dura: 120},
        {chip: 'neutronium', voltage: 'iv', n: 16, dura: 80},
        {chip: 'draco', voltage: 'uv', n: 64, dura: 60}
    ].forEach(tier => {
        let modID = (tier.chip !== 'draco') ? 'gtceu' : 'kubejs' ;
        event.recipes.gtceu.cutter(id(`${tier.chip}_chip`))
            .itemInputs(`${modID}:${tier.chip}_wafer`)
            .itemOutputs(`8x kubejs:${tier.chip}_chip`)
            .duration(900)
            .EUt(global.va[tier.voltage]);

        ['logic', 'engineering', 'calculation'].forEach(type => {
            event.recipes.gtceu.me_assembler(id(`${type}_processor_${tier.chip}`))
                .itemInputs(`kubejs:${tier.chip}_chip`, `ae2:printed_${type}_processor`, 'ae2:printed_silicon')
                .inputFluids('gtceu:soldering_alloy 144')
                .itemOutputs(`${tier.n}x ae2:${type}_processor`)
                .duration(tier.dura)
                .EUt(global.va[tier.voltage]);
        });
    
    });

    [
        {circuit: 'logic', material: 'gold'},
        {circuit: 'engineering', material: 'diamond'},
        {circuit: 'calculation', material: 'certus_quartz'}
    ].forEach(type => {
        event.recipes.gtceu.mixer(id(`${type.material}_skystone_alloy`))
            .itemInputs(`2x gtceu:${type.material}_dust`)
            .inputFluids('gtceu:skystone 144')
            .itemOutputs(`3x gtceu:${type.material}_skystone_alloy_dust`)
            .duration(400)
            .EUt(global.va['mv']);

        event.remove({id:`gtceu:alloy_blast_smelter/${type.material}_skystone_alloy_gas`});
        event.remove({id:`gtceu:alloy_blast_smelter/${type.material}_skystone_alloy`});
        event.recipes.gtceu.alloy_blast_smelter(id(`${type.material}_skystone_alloy`))
            .itemInputs(`2x gtceu:${type.material}_dust`)
            .inputFluids('gtceu:skystone 144')
            .outputFluids(`gtceu:${type.material}_skystone_alloy 432`)
            .circuit(2)
            .blastFurnaceTemp(1600)
            .duration(450)
            .EUt(120);

        event.recipes.gtceu.alloy_blast_smelter(id(`${type.material}_skystone_alloy_gas`))
            .itemInputs(`2x gtceu:${type.material}_dust`)
            .inputFluids('gtceu:skystone 144','gtceu:nitrogen 3000')
            .outputFluids(`gtceu:${type.material}_skystone_alloy 432`)
            .circuit(12)
            .blastFurnaceTemp(1600)
            .duration(302)
            .EUt(120);

        event.recipes.gtceu.forming_press(id(`${type.circuit}_press`))
            .itemInputs('gtceu:double_sky_steel_plate', `gtceu:${type.material}_dust`)
            .itemOutputs(`ae2:${type.circuit}_processor_press`)
            .duration(600)
            .EUt(65);

        event.recipes.gtceu.forming_press(id(`printed_${type.circuit}_processor`))
            .itemInputs(`gtceu:${type.material}_skystone_alloy_plate`)
            .notConsumable(`ae2:${type.circuit}_processor_press`)
            .itemOutputs(`ae2:printed_${type.circuit}_processor`)
            .duration(200)
            .EUt(global.va['mv']);
    });

    event.recipes.gtceu.forming_press(id('silicon_press'))
        .itemInputs('gtceu:double_sky_steel_plate', 'gtceu:silicon_dust')
        .itemOutputs('ae2:silicon_press')
        .duration(600)
        .EUt(65);

    event.recipes.gtceu.forming_press(id('printed_silicon_processor'))
        .itemInputs('gtceu:silicon_plate')
        .notConsumable('ae2:silicon_press')
        .itemOutputs('ae2:printed_silicon')
        .duration(200)
        .EUt(global.va['mv']);


    [
        {type: 'formation', catalyst: 'ae2:certus_quartz_crystal'},
        {type: 'annihilation', catalyst: 'minecraft:quartz'}
    ].forEach(tier => {
        event.recipes.gtceu.me_assembler(id(`${tier.type}_core`))
            .itemInputs('ae2:logic_processor', `${tier.catalyst}`, '6x gtceu:fluix_steel_foil')
            .itemOutputs(`4x ae2:${tier.type}_core`)
            .duration(300)
            .EUt(128);
    });

    [// free lenses: white, l_gray, lime, magenta
        {type: 'naquadah', n: 1, time: 900, voltage: 'ev'},
        {type: 'neutronium', n: 2, time: 500, voltage: 'iv'},
        {type: 'draco', n: 8, time: 200, voltage: 'luv'}
    ].forEach(wafer => {
        const { type, n, time, voltage} = wafer
        event.recipes.gtceu.laser_engraver(id(`engrave_ae2_soc_${type}`))
            .itemInputs(`${(type == 'naquadah' || type == 'neutronium') ? 'gtceu' : 'kubejs'}:${type}_wafer`)
            .notConsumable('gtceu:fluix_lens')
            .itemOutputs(`${n}x kubejs:ae2_soc_wafer`)
            .duration(time)
            .EUt(global.va[voltage]);
    });

    event.recipes.gtceu.cutter(id('ae2_soc_chip'))
        .itemInputs('kubejs:ae2_soc_wafer')
        .itemOutputs('6x kubejs:ae2_soc_chip')
        .duration(900)
        .EUt(global.va['ev']);

    event.recipes.gtceu.chemical_bath(id('fluix_lens'))
        .itemInputs('gtceu:sapphire_lens')
        .inputFluids('gtceu:fluix_steel 144')
        .itemOutputs('gtceu:fluix_lens')
        .duration(900)
        .EUt(global.va['ev']);

    // [
    //     {circuit: 'logic', material: 'gold'},
    //     {circuit: 'engineering', material: 'diamond'},
    //     {circuit: 'calculation', material: 'certus_quartz'}
    // ].forEach(type => {
    //     event.recipes.gtceu.precise_me_assembler(id(`${type.circuit}_processor_soc`))
    //         .notConsumable(`ae2:${type.circuit}_processor_press`)
    //         .itemInputs('kubejs:ae2_soc', `gtceu:${type.material}_skystone_alloy_plate`)
    //         .inputFluids('gtceu:sky_steel 288')
    //         .itemOutputs(`8x ae2:${type.circuit}_processor`)
    //         .duration(400)
    //         .EUt(global.va['iv']);
    // });

    event.replaceInput({id: 'ae2:network/wireless_part'},'minecraft:iron_ingot','gtceu:diamond_skystone_alloy_plate');

});