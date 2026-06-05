// packmode: hard

ServerEvents.recipes((event) => {
    const id = global.id;

    event.replaceInput({ id: 'minecraft:blast_furnace' }, 'minecraft:iron_ingot', 'gtceu:iron_plate');
    event.replaceInput({ id: 'minecraft:blast_furnace' }, 'minecraft:smooth_stone', 'kubejs:reinforced_stone_bricks');
    event.remove({ id: 'gtceu:shapeless/potin_dust' });
    const noSmeltDustToIngot = (output) => {
        event.remove({ id: `gtceu:smelting/smelt_dust_${output}_to_ingot` });
    };
    noSmeltDustToIngot('potin');
    noSmeltDustToIngot('red_alloy');
    noSmeltDustToIngot('tin_alloy');

    const createMixing = (output, inputs, heat) => {
        const idOutput = String(output);
        const idConst = idOutput.split(':')[1];
        event.recipes.create
            .mixing(output, inputs)
            .heatRequirement(`${heat}`)
            .id(`start:create_mixer/${idConst.split(',')[0]}`);
    };
    createMixing('2x gtceu:pig_iron_dust', ['2x gtceu:iron_dust', 'gtceu:charcoal_dust'], 'lowheated');
    createMixing(
        Fluid.of('gtceu:cast_iron', 288),
        ['2x gtceu:crude_cast_iron_dust', 'gtceu:tiny_bismuth_dust', '2x gtceu:tiny_copper_dust'],
        'superheated'
    );
    createMixing('9x gtceu:potin_dust', ['6x gtceu:copper_dust', '2x gtceu:tin_dust', 'gtceu:lead_dust'], 'lowheated');
    createMixing('2x gtceu:tin_alloy_dust', ['gtceu:iron_dust', 'gtceu:tin_dust'], 'lowheated');
    createMixing(
        Fluid.of('gtceu:crude_wrought_iron', 288),
        ['2x gtceu:pig_iron_ingot', 'gtceu:charcoal_dust'],
        'superheated'
    );
    createMixing(Fluid.of('gtceu:red_alloy', 144), ['gtceu:copper_dust', '4x minecraft:redstone'], 'superheated');

    ['brass', 'bronze', 'pig_iron', 'tin_alloy'].forEach((dust) => {
        event.blasting(`gtceu:${dust}_ingot`, `gtceu:${dust}_dust`).id(`start:blasting/${dust}_dust_manual_only`);
        // event.recipes.gtceu
        // 	.electric_vanilla_blast_furnace(id(`${dust}_from_dust`))
        //     .itemInputs(`gtceu:${dust}_dust`)
        //     .itemOutputs(`gtceu:${dust}_ingot`)
        //     .duration(100)
        //     .EUt(8);
    });

    // event.forEachRecipe({type:'minecraft:blasting'}, BlastParse => {
    //     let ParseBlast = JSON.parse(BlastParse.json);
    //         let InItem = ParseBlast.inputs.item[0].content;
    //         let OutItem = ParseBlast.outputs.item[0].content;

    //     event.recipes.gtceu.electric_vanilla_blast_furnace(id(`smelt_${OutItem.value.item}_from_${InItem.value.item}`))
    //         .itemInputs(InItem.ingredient.item)
    //         .itemOutputs(OutItem.ingredient.item)
    //         .duration(100)
    //         .EUt(8);
    // });

    event.remove({ output: 'gtceu:primitive_blast_furnace' });
    event.recipes.create
        .mechanical_crafting('gtceu:primitive_blast_furnace', ['BPB', 'RFR', 'SBS'], {
            R: 'gtceu:iron_rod',
            S: 'gtceu:iron_screw',
            P: 'gtceu:iron_plate',
            B: 'gtceu:firebricks',
            F: 'minecraft:blast_furnace',
        })
        .id('start:shaped/primitive_blast_furnace');

    event.recipes.create
        .mechanical_crafting('gtceu:steeled_blast_furnace', ['WPW', 'GFG', 'WPW'], {
            G: 'gtceu:small_cast_iron_gear',
            W: 'gtceu:wrought_iron_plate',
            P: 'gtceu:potin_screw',
            F: 'gtceu:primitive_blast_furnace',
        })
        .id('start:shaped/steeled_blast_furnace');

    event.recipes.gtceu
        .assembler(id('reinforced_blast_furnace'))
        .itemInputs(
            'gtceu:steeled_blast_furnace',
            '4x dustrial_decor:cinder_bricks',
            '6x gtceu:double_wrought_iron_plate',
            '2x gtceu:cast_iron_gear',
            'createlowheated:basic_burner',
            '8x gtceu:wrought_iron_screw'
        )
        .inputFluids('gtceu:concrete 3000')
        .itemOutputs('gtceu:reinforced_blast_furnace')
        .duration(300)
        .EUt(6);

    event.recipes.gtceu
        .assembler(id('solid_blast_furnace'))
        .itemInputs(
            'gtceu:rugged_alloyer',
            '2x gtceu:double_steel_plate',
            '2x gtceu:steel_gear',
            '2x #gtceu:circuits/ulv',
            'gtceu:ulv_conveyor_module',
            'gtceu:ulv_robot_arm'
        )
        .inputFluids('gtceu:tin_alloy 432')
        .itemOutputs('gtceu:solid_blast_furnace')
        .duration(300)
        .EUt(7);

    event.recipes.gtceu
        .assembler(id('bessemer_forgery'))
        .itemInputs(
            'gtceu:lv_machine_hull',
            '4x gtceu:long_steel_rod',
            '4x #gtceu:circuits/lv',
            'create:basin',
            '2x gtceu:potin_gear',
            '4x gtceu:small_steel_gear',
            '4x gtceu:ulv_robot_arm',
            '3x gtceu:ulv_electric_pump'
        )
        .inputFluids('gtceu:tin_alloy 1152')
        .itemOutputs('gtceu:bessemer_forgery')
        .duration(400)
        .EUt(8);

    event.remove({ type: 'gtceu:primitive_blast_furnace' });

    const primBlasting = (
        input,
        output,
        duration,
        fuelID,
        fuelType,
        ashType,
        fuelIDBlock,
        fuelTypeBlock,
        inputType
    ) => {
        if (inputType === 'dust')
            event.recipes.gtceu
                .primitive_blast_furnace(id(`${output.split(':')[1]}_${fuelType}`))
                .itemInputs(input + '_dust', `${fuelID}:${fuelType}`)
                .itemOutputs(output + '_ingot', `gtceu:tiny_${ashType}ash_dust`)
                .duration(duration);
        else
            event.recipes.gtceu
                .primitive_blast_furnace(id(`${output.split(':')[1]}_${fuelType}`))
                .itemInputs(input + '_ingot', `${fuelID}:${fuelType}`)
                .itemOutputs(output + '_ingot', `gtceu:tiny_${ashType}ash_dust`)
                .duration(duration);
        if (inputType === 'ingot')
            event.recipes.gtceu
                .primitive_blast_furnace(id(`${output.split(':')[1]}_block_${fuelTypeBlock}`))
                .itemInputs(input + '_block', `${fuelIDBlock}:${fuelTypeBlock}`)
                .itemOutputs(output + '_block', `gtceu:${ashType}ash_dust`)
                .duration(9 * duration);
    };
    primBlasting(
        'gtceu:pig_iron',
        'gtceu:crude_cast_iron',
        400,
        '#minecraft',
        'coals',
        '',
        '#gtceu',
        'coal_blocks',
        'ingot'
    );
    primBlasting(
        'gtceu:pig_iron',
        'gtceu:wrought_iron',
        480,
        'gtceu',
        'coke_gem',
        'dark_',
        'gtceu',
        'coke_block',
        'ingot'
    );
    primBlasting(
        'gtceu:crude_wrought_iron',
        'gtceu:wrought_iron',
        600,
        '#minecraft',
        'coals',
        '',
        '#gtceu',
        'coal_blocks',
        'ingot'
    );
    primBlasting('gtceu:potin', 'gtceu:potin', 240, '#minecraft', 'coals', '', '#gtceu', 'coal_blocks', 'dust');
    primBlasting('gtceu:potin', 'gtceu:potin', 160, 'gtceu', 'coke_gem', 'dark_', 'gtceu', 'coke_block', 'dust');

    const coalType = (id2, type, ash, blockID, blockType, durationMultiplier, amount) => {
        event.recipes.gtceu
            .reinforced_blast_furnace(id(`steel_ingot_${type}`))
            .itemInputs('gtceu:wrought_iron_ingot', `${amount}x ${id2}:${type}`)
            .itemOutputs('gtceu:steel_ingot', `${amount}x gtceu:tiny_${ash}ash_dust`)
            .duration(600 * durationMultiplier);
        event.recipes.gtceu
            .reinforced_blast_furnace(id(`steel_block_${blockType}`))
            .itemInputs('gtceu:wrought_iron_block', `${amount}x ${blockID}:${blockType}`)
            .itemOutputs('gtceu:steel_block', `${amount}x gtceu:${ash}ash_dust`)
            .duration(9 * 600 * durationMultiplier);
        event.recipes.gtceu
            .primitive_blast_furnace(id(`steel_ingot_${type}`))
            .itemInputs('minecraft:glass', `${amount}x ${id2}:${type}`)
            .itemOutputs('gtceu:tempered_glass', `${amount}x gtceu:tiny_${ash}ash_dust`)
            .duration(400 * durationMultiplier);
    };
    coalType('#minecraft', 'coals', '', '#gtceu', 'coal_blocks', 1.25, 2);
    coalType('gtceu', 'coke_gem', 'dark_', 'gtceu', 'coke_block', 1, 1);

    event.recipes.gtceu
        .electric_blast_furnace(id('potin'))
        .itemInputs('gtceu:potin_dust')
        .itemOutputs('gtceu:potin_ingot')
        .duration(160)
        .blastFurnaceTemp(1000)
        .EUt(100);

    event.remove({ type: 'gtceu:electric_blast_furnace', output: 'gtceu:steel_ingot' });
    [
        { ferriteMulti: 0.6, type: 'iron', eut: 100, id: 'minecraft' },
        { ferriteMulti: 1, type: 'wrought_iron', eut: 30, id: 'gtceu' },
    ].forEach((ferrite) => {
        event.recipes.gtceu
            .bessemer_forge(id(`bulk_steel_from_${ferrite.type}_boosted`))
            .itemInputs(`${ferrite.id}:${ferrite.type}_block`)
            .outputFluids('gtceu:steel 1296')
            .duration(8.5 * 800 * ferrite.ferriteMulti)
            .EUt(ferrite.eut);

        event.recipes.gtceu
            .bessemer_forge(id(`steel_from_${ferrite.type}_boosted`))
            .itemInputs(`#forge:ingots/${ferrite.type}`)
            .outputFluids('gtceu:steel 144')
            .duration(800 * ferrite.ferriteMulti)
            .EUt(ferrite.eut);
    });

    // Damascus Steel

    event.remove({ type: 'gtceu:electric_blast_furnace', output: 'gtceu:damascus_steel_ingot' });

    event.recipes.gtceu
        .reinforced_blast_furnace(id(`damascus_steel_coke`))
        .itemInputs(`1x gtceu:steel_ingot`, `1x gtceu:carbon_dust`, `1x gtceu:coke_gem`)
        .itemOutputs('gtceu:damascus_steel_ingot', `2x gtceu:tiny_dark_ash_dust`)
        .duration(1440);

    event.recipes.gtceu
        .reinforced_blast_furnace(id(`damascus_steel_coals`))
        .itemInputs(`1x gtceu:steel_ingot`, `1x gtceu:carbon_dust`, `1x #minecraft:coals`)
        .itemOutputs('gtceu:damascus_steel_ingot', `1x gtceu:tiny_dark_ash_dust`)
        .duration(1800);

    event.recipes.gtceu
        .reinforced_blast_furnace(id(`damascus_steel_block_coke`))
        .itemInputs(`1x gtceu:steel_block`, `9x gtceu:carbon_dust`, `1x gtceu:coke_block`)
        .itemOutputs('gtceu:damascus_steel_block', `2x gtceu:dark_ash_dust`)
        .duration(1440 * 9);

    event.recipes.gtceu
        .reinforced_blast_furnace(id(`damascus_steel_block_coals`))
        .itemInputs(`1x gtceu:steel_block`, `9x gtceu:carbon_dust`, `1x #gtceu:coal_blocks`)
        .itemOutputs('gtceu:damascus_steel_block', `1x gtceu:dark_ash_dust`)
        .duration(1800 * 9);

    event.recipes.gtceu
        .bessemer_forge(id(`damascus_steel`))
        .itemInputs(`1x gtceu:carbon_dust`, `gtceu:steel_ingot`)
        .outputFluids(`gtceu:damascus_steel 144`)
        .duration(1080)
        .EUt(GTValues.VHA[GTValues.MV]);

    event.recipes.gtceu
        .bessemer_forge(id(`damascus_steel_block`))
        .itemInputs(`9x gtceu:carbon_dust`, `gtceu:steel_block`)
        .outputFluids(`gtceu:damascus_steel 1296`)
        .duration(9120)
        .EUt(GTValues.VHA[GTValues.MV]);

    const burnable = (amount, BurnID, typeBurnable, duraChange, ash) => {
        const solidBlast = (mainOutput, outputSolid, inputSolid, dura) => {
            event.recipes.gtceu
                .solid_blast_furnace(id(`${mainOutput}_${typeBurnable}`))
                .itemInputs(inputSolid[0], inputSolid[1], `${amount}x ${BurnID}:${typeBurnable}`)
                .itemOutputs(outputSolid[0], outputSolid[1], `${amount}x gtceu:tiny_${ash}ash_dust`)
                .duration(dura * duraChange);
        };
        solidBlast(
            'andesite_alloy',
            ['20x create:andesite_alloy', 'gtceu:sulfur_dust'],
            ['8x exnihilosequentia:crushed_andesite', '2x gtceu:sphalerite_dust'],
            400
        );
        solidBlast(
            'rose_quartz',
            ['1x create:rose_quartz', 'gtceu:tiny_redstone_dust'],
            ['xycraft_world:xychorium_gem_red', 'minecraft:redstone'],
            80
        );
        solidBlast(
            'blank_gem',
            ['xycraft_world:xychorium_gem_light', 'gtceu:tiny_glass_dust'],
            ['minecraft:quartz', 'gtceu:glass_dust'],
            200
        );
    };
    burnable(2, '#minecraft', 'coals', 1, '');
    burnable(1, 'gtceu', 'coke_gem', 0.8, 'dark_');
});
