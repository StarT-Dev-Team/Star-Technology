ServerEvents.recipes((event) => {
    const id = global.id;

    const cryptand = 'gtceu:cryptand 1';
    const gem = 'gtceu:12_crown_4_li 100';
    const gemDepleted = 'gtceu:12_crown_4 100';
    const gemCryptand = 'gtceu:cryptand_li 1';
    const metal = 'gtceu:15_crown_5_na 100';
    const metalDepleted = 'gtceu:15_crown_5 100';
    const metalCryptand = 'gtceu:cryptand_na 1';
    const dust = 'gtceu:18_crown_6_k 100';
    const dustDepleted = 'gtceu:18_crown_6 100';
    const dustCryptand = 'gtceu:cryptand_k 1';

    /**
     * @param {string} type
     * @param {number} circ
     * @param {number} eut
     * @param {string} output
     */
    const essenceFluid = (type, circ, eut, output) => {
        event.recipes.gtceu
            .essence_burning(id(`${type}_essence_burning_${circ}`))
            .itemInputs(`mysticalagriculture:${type}_essence`)
            .outputFluids(output)
            .duration(100)
            .EUt(eut)
            .circuit(circ);
    };

    /**
     * @param {string} type
     * @param {number} circ
     * @param {number} eut
     * @param {string} output
     */
    const essenceSolid = (type, circ, eut, output) => {
        event.recipes.gtceu
            .essence_burning(id(`${type}_essence_burning_${circ}`))
            .itemInputs(`mysticalagriculture:${type}_essence`)
            .itemOutputs(output)
            .duration(100)
            .EUt(eut)
            .circuit(circ);
    };

    essenceFluid('water', 0, 20, 'gtceu:distilled_water 2500');
    essenceFluid('water', 1, 20, 'gtceu:salt_water 5000');
    essenceFluid('water', 2, 20, 'exnihilosequentia:witch_water 5000');
    essenceFluid('water', 3, 20, 'exnihilosequentia:sea_water 5000');
    essenceFluid('air', 1, 20, 'gtceu:air 16000');
    essenceFluid('air', 2, 1560, 'gtceu:nether_air 16000');
    essenceFluid('air', 3, 1560, 'gtceu:ender_air 16000');
    essenceFluid('fire', 0, 400, 'minecraft:lava 5000');

    essenceSolid('wood', 0, 20, '32x minecraft:oak_log');
    essenceSolid('wood', 1, 20, '32x minecraft:birch_log');
    essenceSolid('wood', 2, 20, '32x minecraft:spruce_log');
    essenceSolid('wood', 3, 20, '32x minecraft:acacia_log');
    essenceSolid('wood', 4, 20, '32x minecraft:jungle_log');
    essenceSolid('wood', 5, 20, '32x minecraft:dark_oak_log');
    essenceSolid('wood', 6, 20, '32x minecraft:mangrove_log');
    essenceSolid('wood', 7, 20, '32x gtceu:rubber_log');
    essenceSolid('wood', 8, 20, '32x minecraft:cherry_log');

    event.recipes.gtceu
        .essence_burning(id('dirt_essence_burning_0'))
        .itemInputs('mysticalagriculture:dirt_essence')
        .itemOutputs('32x minecraft:dirt')
        .duration(100)
        .EUt(80)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('dirt_essence_burning_1'))
        .itemInputs('mysticalagriculture:dirt_essence')
        .itemOutputs('32x minecraft:coarse_dirt')
        .duration(100)
        .EUt(80)
        .circuit(1);

    event.recipes.gtceu
        .essence_burning(id('dirt_essence_burning_2'))
        .itemInputs('mysticalagriculture:dirt_essence')
        .itemOutputs('32x minecraft:rooted_dirt')
        .duration(100)
        .EUt(80)
        .circuit(2);

    event.recipes.gtceu
        .essence_burning(id('dirt_essence_burning_3'))
        .itemInputs('mysticalagriculture:dirt_essence')
        .itemOutputs('32x minecraft:mud')
        .duration(100)
        .EUt(80)
        .circuit(3);

    event.recipes.gtceu
        .essence_burning(id('ice_essence_burning_0'))
        .itemInputs('mysticalagriculture:ice_essence')
        .itemOutputs('32x minecraft:ice')
        .duration(100)
        .EUt(80)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('ice_essence_burning_1'))
        .itemInputs('mysticalagriculture:ice_essence')
        .itemOutputs('32x minecraft:packed_ice')
        .duration(100)
        .EUt(80)
        .circuit(1);

    event.recipes.gtceu
        .essence_burning(id('ice_essence_burning_2'))
        .itemInputs('mysticalagriculture:ice_essence')
        .itemOutputs('32x minecraft:blue_ice')
        .duration(100)
        .EUt(80)
        .circuit(2);

    event.recipes.gtceu
        .essence_burning(id('coal_essence_burning_0'))
        .itemInputs('mysticalagriculture:coal_essence')
        .itemOutputs('32x minecraft:coal')
        .duration(100)
        .EUt(400)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('coal_essence_burning_1'))
        .itemInputs('mysticalagriculture:coal_essence')
        .itemOutputs('16x gtceu:coke_gem')
        .duration(100)
        .EUt(400)
        .circuit(1);

    const dyes = [
        'minecraft:white_dye',
        'minecraft:orange_dye',
        'minecraft:magenta_dye',
        'minecraft:light_blue_dye',
        'minecraft:yellow_dye',
        'minecraft:lime_dye',
        'minecraft:pink_dye',
        'minecraft:gray_dye',
        'minecraft:light_gray_dye',
        'minecraft:cyan_dye',
        'minecraft:purple_dye',
        'minecraft:blue_dye',
        'minecraft:brown_dye',
        'minecraft:green_dye',
        'minecraft:red_dye',
        'minecraft:black_dye',
    ];

    for (let i = 0; i < dyes.length; i++) {
        event.recipes.gtceu
            .essence_burning(id('dye_essence_burning_' + i))
            .itemInputs('mysticalagriculture:dye_essence')
            .itemOutputs('16x ' + dyes[i])
            .duration(100)
            .EUt(400)
            .circuit(i);
    }

    const crops = [
        'minecraft:wheat',
        'minecraft:carrot',
        'minecraft:potato',
        'minecraft:beetroot',
        'minecraft:melon',
        'minecraft:pumpkin',
        'farmersdelight:cabbage',
        'farmersdelight:tomato',
        'farmersdelight:onion',
        'farmersdelight:rice',
        'thermal:amaranth',
        'thermal:barley',
        'thermal:corn',
        'thermal:flax',
        'thermal:sadiroot',
        'thermal:spinach',
        'thermal:bell_pepper',
        'thermal:eggplant',
        'thermal:green_bean',
        'thermal:peanut',
        'thermal:strawberry',
        'thermal:coffee',
        'thermal:hops',
        'thermal:tea',
        'thermal:frost_melon',
    ];

    for (let i = 0; i < crops.length; i++) {
        event.recipes.gtceu
            .essence_burning(id('nature_essence_burning_' + i))
            .itemInputs('mysticalagriculture:nature_essence')
            .itemOutputs('16x ' + crops[i])
            .duration(100)
            .EUt(20)
            .circuit(i);
    }

    const stone = [
        'minecraft:stone',
        'minecraft:cobblestone',
        'minecraft:diorite',
        'minecraft:granite',
        'minecraft:andesite',
        'minecraft:deepslate',
        'minecraft:tuff',
        'minecraft:calcite',
    ];

    for (let i = 0; i < stone.length; i++) {
        event.recipes.gtceu
            .essence_burning(id('stone_essence_burning_' + i))
            .itemInputs('mysticalagriculture:stone_essence')
            .itemOutputs('16x ' + stone[i])
            .duration(100)
            .EUt(20)
            .circuit(i);
    }

    // tier 2
    event.recipes.gtceu
        .essence_burning(id('iron_essence_burning_0'))
        .itemInputs('mysticalagriculture:iron_essence')
        .itemOutputs('16x minecraft:raw_iron')
        .duration(100)
        .EUt(80)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('copper_essence_burning_0'))
        .itemInputs('mysticalagriculture:copper_essence')
        .itemOutputs('16x minecraft:raw_copper')
        .duration(100)
        .EUt(80)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('gold_essence_burning_0'))
        .itemInputs('mysticalagriculture:gold_essence')
        .itemOutputs('16x minecraft:raw_gold')
        .duration(100)
        .EUt(80)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('nickel_essence_burning_0'))
        .itemInputs('mysticalagriculture:nickel_essence')
        .itemOutputs('16x gtceu:raw_pentlandite')
        .duration(100)
        .EUt(80)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('tin_essence_burning_0'))
        .itemInputs('mysticalagriculture:tin_essence')
        .itemOutputs('16x gtceu:raw_cassiterite')
        .duration(100)
        .EUt(80)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('lead_essence_burning_0'))
        .itemInputs('mysticalagriculture:lead_essence')
        .itemOutputs('16x gtceu:raw_galena')
        .duration(100)
        .EUt(80)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('zinc_essence_burning_0'))
        .itemInputs('mysticalagriculture:zinc_essence')
        .itemOutputs('16x gtceu:raw_sphalerite')
        .duration(100)
        .EUt(80)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('silver_essence_burning_0'))
        .itemInputs('mysticalagriculture:silver_essence')
        .itemOutputs('16x gtceu:raw_silver')
        .duration(100)
        .EUt(80)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('diamond_essence_burning_0'))
        .itemInputs('mysticalagriculture:diamond_essence')
        .itemOutputs('16x gtceu:raw_diamond')
        .duration(100)
        .EUt(80)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('redstone_essence_burning_0'))
        .itemInputs('mysticalagriculture:redstone_essence')
        .itemOutputs('16x gtceu:raw_redstone')
        .duration(100)
        .EUt(80)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('glowstone_essence_burning_0'))
        .itemInputs('mysticalagriculture:glowstone_essence')
        .itemOutputs('16x minecraft:glowstone_dust')
        .duration(100)
        .EUt(80)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('nether_quartz_essence_burning_0'))
        .itemInputs('mysticalagriculture:nether_quartz_essence')
        .itemOutputs('16x gtceu:raw_nether_quartz')
        .duration(100)
        .EUt(80)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('lapis_lazuli_essence_burning_0'))
        .itemInputs('mysticalagriculture:lapis_lazuli_essence')
        .itemOutputs('16x gtceu:raw_lapis')
        .duration(100)
        .EUt(80)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('sulfur_essence_burning_0'))
        .itemInputs('mysticalagriculture:sulfur_essence')
        .itemOutputs('16x gtceu:raw_sulfur')
        .duration(100)
        .EUt(80)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('amethyst_essence_burning_0'))
        .itemInputs('mysticalagriculture:amethyst_essence')
        .itemOutputs('16x gtceu:raw_amethyst')
        .duration(100)
        .EUt(80)
        .circuit(0);

    // Tier 3 (crown ethers)
    event.recipes.gtceu
        .essence_burning(id('enderman_essence_burning_0'))
        .itemInputs('mysticalagriculture:enderman_essence')
        .inputFluids(gem)
        .itemOutputs('16x minecraft:ender_pearl')
        .outputFluids(gemDepleted)
        .duration(100)
        .EUt(400)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('enderman_essence_burning_0_cryptand'))
        .itemInputs('mysticalagriculture:enderman_essence')
        .inputFluids(gemCryptand)
        .itemOutputs('64x minecraft:ender_pearl')
        .outputFluids(cryptand)
        .duration(100)
        .EUt(6400)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('slime_essence_burning_0'))
        .itemInputs('mysticalagriculture:slime_essence')
        .inputFluids(gem)
        .itemOutputs('16x minecraft:slime_ball')
        .outputFluids(gemDepleted)
        .duration(100)
        .EUt(400)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('slime_essence_burning_0_cryptand'))
        .itemInputs('mysticalagriculture:slime_essence')
        .inputFluids(gemCryptand)
        .itemOutputs('64x minecraft:slime_ball')
        .outputFluids(cryptand)
        .duration(100)
        .EUt(6400)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('slime_essence_burning_1'))
        .itemInputs('mysticalagriculture:slime_essence')
        .inputFluids(gem)
        .itemOutputs('16x gtceu:plant_ball')
        .outputFluids(gemDepleted)
        .duration(100)
        .EUt(400)
        .circuit(1);

    event.recipes.gtceu
        .essence_burning(id('slime_essence_burning_1_cryptand'))
        .itemInputs('mysticalagriculture:slime_essence')
        .inputFluids(gemCryptand)
        .itemOutputs('64x gtceu:plant_ball')
        .outputFluids(cryptand)
        .duration(100)
        .EUt(6400)
        .circuit(1);

    event.recipes.gtceu
        .essence_burning(id('prismarine_essence_burning_0'))
        .itemInputs('mysticalagriculture:prismarine_essence')
        .inputFluids(gem)
        .itemOutputs('16x minecraft:prismarine_shard')
        .outputFluids(gemDepleted)
        .duration(100)
        .EUt(400)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('prismarine_essence_burning_0_cryptand'))
        .itemInputs('mysticalagriculture:prismarine_essence')
        .inputFluids(gemCryptand)
        .itemOutputs('64x minecraft:prismarine_shard')
        .outputFluids(cryptand)
        .duration(100)
        .EUt(6400)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('prismarine_essence_burning_1'))
        .itemInputs('mysticalagriculture:prismarine_essence')
        .inputFluids(gem)
        .itemOutputs('16x minecraft:prismarine_crystals')
        .outputFluids(gemDepleted)
        .duration(100)
        .EUt(400)
        .circuit(1);

    event.recipes.gtceu
        .essence_burning(id('prismarine_essence_burning_1_cryptand'))
        .itemInputs('mysticalagriculture:prismarine_essence')
        .inputFluids(gemCryptand)
        .itemOutputs('64x minecraft:prismarine_crystals')
        .outputFluids(cryptand)
        .duration(100)
        .EUt(6400)
        .circuit(1);

    event.recipes.gtceu
        .essence_burning(id('emerald_essence_burning_0'))
        .itemInputs('mysticalagriculture:emerald_essence')
        .inputFluids(gem)
        .itemOutputs('16x gtceu:raw_emerald')
        .outputFluids(gemDepleted)
        .duration(100)
        .EUt(1024)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('emerald_essence_burning_0_cryptand'))
        .itemInputs('mysticalagriculture:emerald_essence')
        .inputFluids(gemCryptand)
        .itemOutputs('64x gtceu:raw_emerald')
        .outputFluids(cryptand)
        .duration(100)
        .EUt(16000)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('certus_quartz_essence_burning_0'))
        .itemInputs('mysticalagriculture:certus_quartz_essence')
        .inputFluids(gem)
        .itemOutputs('16x gtceu:raw_certus_quartz')
        .outputFluids(gemDepleted)
        .duration(100)
        .EUt(1024)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('certus_quartz_essence_burning_0_cryptand'))
        .itemInputs('mysticalagriculture:certus_quartz_essence')
        .inputFluids(gemCryptand)
        .itemOutputs('64x gtceu:raw_certus_quartz')
        .outputFluids(cryptand)
        .duration(100)
        .EUt(16000)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('ruby_essence_burning_0'))
        .itemInputs('mysticalagriculture:ruby_essence')
        .inputFluids(gem)
        .itemOutputs('16x gtceu:raw_ruby')
        .outputFluids(gemDepleted)
        .duration(100)
        .EUt(1024)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('ruby_essence_burning_0_cryptand'))
        .itemInputs('mysticalagriculture:ruby_essence')
        .inputFluids(gemCryptand)
        .itemOutputs('64x gtceu:raw_ruby')
        .outputFluids(cryptand)
        .duration(100)
        .EUt(16000)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('garnet_essence_burning_0'))
        .itemInputs('mysticalagriculture:garnet_essence')
        .inputFluids(gem)
        .itemOutputs('16x gtceu:raw_red_garnet')
        .outputFluids(gemDepleted)
        .duration(100)
        .EUt(1024)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('garnet_essence_burning_0_cryptand'))
        .itemInputs('mysticalagriculture:garnet_essence')
        .inputFluids(gemCryptand)
        .itemOutputs('64x gtceu:raw_red_garnet')
        .outputFluids(cryptand)
        .duration(100)
        .EUt(16000)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('garnet_essence_burning_1'))
        .itemInputs('mysticalagriculture:garnet_essence')
        .inputFluids(gem)
        .itemOutputs('16x gtceu:raw_yellow_garnet')
        .outputFluids(gemDepleted)
        .duration(100)
        .EUt(1024)
        .circuit(1);

    event.recipes.gtceu
        .essence_burning(id('garnet_essence_burning_1_cryptand'))
        .itemInputs('mysticalagriculture:garnet_essence')
        .inputFluids(gemCryptand)
        .itemOutputs('64x gtceu:raw_yellow_garnet')
        .outputFluids(cryptand)
        .duration(100)
        .EUt(16000)
        .circuit(1);

    event.recipes.gtceu
        .essence_burning(id('garnet_essence_burning_2'))
        .itemInputs('mysticalagriculture:garnet_essence')
        .inputFluids(gem)
        .itemOutputs('16x gtceu:raw_garnet_sand')
        .outputFluids(gemDepleted)
        .duration(100)
        .EUt(1024)
        .circuit(2);

    event.recipes.gtceu
        .essence_burning(id('garnet_essence_burning_2_cryptand'))
        .itemInputs('mysticalagriculture:garnet_essence')
        .inputFluids(gemCryptand)
        .itemOutputs('64x gtceu:raw_garnet_sand')
        .outputFluids(cryptand)
        .duration(100)
        .EUt(16000)
        .circuit(2);

    event.recipes.gtceu
        .essence_burning(id('apatite_essence_burning_0'))
        .itemInputs('mysticalagriculture:apatite_essence')
        .inputFluids(gem)
        .itemOutputs('16x gtceu:raw_apatite')
        .outputFluids(gemDepleted)
        .duration(100)
        .EUt(1024)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('apatite_essence_burning_0_cryptand'))
        .itemInputs('mysticalagriculture:apatite_essence')
        .inputFluids(gemCryptand)
        .itemOutputs('64x gtceu:raw_apatite')
        .outputFluids(cryptand)
        .duration(100)
        .EUt(16000)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('sapphire_essence_burning_0'))
        .itemInputs('mysticalagriculture:sapphire_essence')
        .inputFluids(gem)
        .itemOutputs('16x gtceu:raw_sapphire')
        .outputFluids(gemDepleted)
        .duration(100)
        .EUt(1024)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('sapphire_essence_burning_0_cryptand'))
        .itemInputs('mysticalagriculture:sapphire_essence')
        .inputFluids(gemCryptand)
        .itemOutputs('64x gtceu:raw_sapphire')
        .outputFluids(cryptand)
        .duration(100)
        .EUt(16000)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('sapphire_essence_burning_1'))
        .itemInputs('mysticalagriculture:sapphire_essence')
        .inputFluids(gem)
        .itemOutputs('16x gtceu:raw_green_sapphire')
        .outputFluids(gemDepleted)
        .duration(100)
        .EUt(1024)
        .circuit(1);

    event.recipes.gtceu
        .essence_burning(id('sapphire_essence_burning_1_cryptand'))
        .itemInputs('mysticalagriculture:sapphire_essence')
        .inputFluids(gemCryptand)
        .itemOutputs('64x gtceu:raw_green_sapphire')
        .outputFluids(cryptand)
        .duration(100)
        .EUt(16000)
        .circuit(1);

    event.recipes.gtceu
        .essence_burning(id('topaz_essence_burning_0'))
        .itemInputs('mysticalagriculture:topaz_essence')
        .inputFluids(gem)
        .itemOutputs('16x gtceu:raw_topaz')
        .outputFluids(gemDepleted)
        .duration(100)
        .EUt(1024)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('topaz_essence_burning_0_cryptand'))
        .itemInputs('mysticalagriculture:topaz_essence')
        .inputFluids(gemCryptand)
        .itemOutputs('64x gtceu:raw_topaz')
        .outputFluids(cryptand)
        .duration(100)
        .EUt(16000)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('topaz_essence_burning_1'))
        .itemInputs('mysticalagriculture:topaz_essence')
        .inputFluids(gem)
        .itemOutputs('16x gtceu:raw_blue_topaz')
        .outputFluids(gemDepleted)
        .duration(100)
        .EUt(1024)
        .circuit(1);

    event.recipes.gtceu
        .essence_burning(id('topaz_essence_burning_1_cryptand'))
        .itemInputs('mysticalagriculture:topaz_essence')
        .inputFluids(gemCryptand)
        .itemOutputs('64x gtceu:raw_blue_topaz')
        .outputFluids(cryptand)
        .duration(100)
        .EUt(16000)
        .circuit(1);

    event.recipes.gtceu
        .essence_burning(id('realgar_essence_burning_0'))
        .itemInputs('mysticalagriculture:realgar_essence')
        .inputFluids(gem)
        .itemOutputs('16x gtceu:raw_realgar')
        .outputFluids(gemDepleted)
        .duration(100)
        .EUt(1024)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('realgar_essence_burning_0_cryptand'))
        .itemInputs('mysticalagriculture:realgar_essence')
        .inputFluids(gemCryptand)
        .itemOutputs('64x gtceu:raw_realgar')
        .outputFluids(cryptand)
        .duration(100)
        .EUt(16000)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('saltpeter_essence_burning_0'))
        .itemInputs('mysticalagriculture:saltpeter_essence')
        .inputFluids(dust)
        .itemOutputs('16x gtceu:raw_saltpeter')
        .outputFluids(dustDepleted)
        .duration(100)
        .EUt(1024)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('saltpeter_essence_burning_0_cryptand'))
        .itemInputs('mysticalagriculture:saltpeter_essence')
        .inputFluids(dustCryptand)
        .itemOutputs('64x gtceu:raw_saltpeter')
        .outputFluids(cryptand)
        .duration(100)
        .EUt(16000)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('salts_essence_burning_0'))
        .itemInputs('mysticalagriculture:salts_essence')
        .inputFluids(dust)
        .itemOutputs('16x gtceu:raw_salt')
        .outputFluids(dustDepleted)
        .duration(100)
        .EUt(1024)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('salts_essence_burning_0_cryptand'))
        .itemInputs('mysticalagriculture:salts_essence')
        .inputFluids(dustCryptand)
        .itemOutputs('64x gtceu:raw_salt')
        .outputFluids(cryptand)
        .duration(100)
        .EUt(16000)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('salts_essence_burning_1'))
        .itemInputs('mysticalagriculture:salts_essence')
        .inputFluids(dust)
        .itemOutputs('16x gtceu:raw_rock_salt')
        .outputFluids(dustDepleted)
        .duration(100)
        .EUt(1024)
        .circuit(1);

    event.recipes.gtceu
        .essence_burning(id('salts_essence_burning_1_cryptand'))
        .itemInputs('mysticalagriculture:salts_essence')
        .inputFluids(dustCryptand)
        .itemOutputs('64x gtceu:raw_rock_salt')
        .outputFluids(cryptand)
        .duration(100)
        .EUt(16000)
        .circuit(1);

    event.recipes.gtceu
        .essence_burning(id('lepidolite_essence_burning_0'))
        .itemInputs('mysticalagriculture:lepidolite_essence')
        .inputFluids(dust)
        .itemOutputs('16x gtceu:raw_lepidolite')
        .outputFluids(dustDepleted)
        .duration(100)
        .EUt(1024)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('lepidolite_essence_burning_0_cryptand'))
        .itemInputs('mysticalagriculture:lepidolite_essence')
        .inputFluids(dustCryptand)
        .itemOutputs('64x gtceu:raw_lepidolite')
        .outputFluids(cryptand)
        .duration(100)
        .EUt(16000)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('antimony_essence_burning_0'))
        .itemInputs('mysticalagriculture:antimony_essence')
        .inputFluids(metal)
        .itemOutputs('16x gtceu:raw_stibnite')
        .outputFluids(metalDepleted)
        .duration(100)
        .EUt(1024)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('antimony_essence_burning_0_cryptand'))
        .itemInputs('mysticalagriculture:antimony_essence')
        .inputFluids(metalCryptand)
        .itemOutputs('64x gtceu:raw_stibnite')
        .outputFluids(cryptand)
        .duration(100)
        .EUt(16000)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('cobaltite_essence_burning_0'))
        .itemInputs('mysticalagriculture:cobaltite_essence')
        .inputFluids(metal)
        .itemOutputs('16x gtceu:raw_cobaltite')
        .outputFluids(metalDepleted)
        .duration(100)
        .EUt(1024)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('cobaltite_essence_burning_0_cryptand'))
        .itemInputs('mysticalagriculture:cobaltite_essence')
        .inputFluids(metalCryptand)
        .itemOutputs('64x gtceu:raw_cobaltite')
        .outputFluids(cryptand)
        .duration(100)
        .EUt(16000)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('aluminum_essence_burning_0'))
        .itemInputs('mysticalagriculture:aluminum_essence')
        .inputFluids(metal)
        .itemOutputs('16x gtceu:raw_bauxite')
        .outputFluids(metalDepleted)
        .duration(100)
        .EUt(1024)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('aluminum_essence_burning_0_cryptand'))
        .itemInputs('mysticalagriculture:aluminum_essence')
        .inputFluids(metalCryptand)
        .itemOutputs('64x gtceu:raw_bauxite')
        .outputFluids(cryptand)
        .duration(100)
        .EUt(16000)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('monazite_essence_burning_0'))
        .itemInputs('mysticalagriculture:monazite_essence')
        .inputFluids(gem)
        .itemOutputs('16x gtceu:raw_monazite')
        .outputFluids(gemDepleted)
        .duration(100)
        .EUt(6400)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('monazite_essence_burning_0_cryptand'))
        .itemInputs('mysticalagriculture:monazite_essence')
        .inputFluids(gemCryptand)
        .itemOutputs('64x gtceu:raw_monazite')
        .outputFluids(cryptand)
        .duration(100)
        .EUt(100000)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('uranium_essence_burning_0'))
        .itemInputs('mysticalagriculture:uranium_essence')
        .inputFluids(metal)
        .itemOutputs('16x gtceu:raw_pitchblende')
        .outputFluids(metalDepleted)
        .duration(100)
        .EUt(6400)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('uranium_essence_burning_0_cryptand'))
        .itemInputs('mysticalagriculture:uranium_essence')
        .inputFluids(metalCryptand)
        .itemOutputs('64x gtceu:raw_pitchblende')
        .outputFluids(cryptand)
        .duration(100)
        .EUt(100000)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('chrome_essence_burning_0'))
        .itemInputs('mysticalagriculture:chrome_essence')
        .inputFluids(metal)
        .itemOutputs('16x gtceu:raw_chromite')
        .outputFluids(metalDepleted)
        .duration(100)
        .EUt(6400)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('chrome_essence_burning_0_cryptand'))
        .itemInputs('mysticalagriculture:chrome_essence')
        .inputFluids(metalCryptand)
        .itemOutputs('64x gtceu:raw_chromite')
        .outputFluids(cryptand)
        .duration(100)
        .EUt(100000)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('molybdenum_essence_burning_0'))
        .itemInputs('mysticalagriculture:molybdenum_essence')
        .inputFluids(metal)
        .itemOutputs('16x gtceu:raw_molybdenite')
        .outputFluids(metalDepleted)
        .duration(100)
        .EUt(6400)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('molybdenum_essence_burning_0_cryptand'))
        .itemInputs('mysticalagriculture:molybdenum_essence')
        .inputFluids(metalCryptand)
        .itemOutputs('64x gtceu:raw_molybdenite')
        .outputFluids(cryptand)
        .duration(100)
        .EUt(100000)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('tantalum_essence_burning_0'))
        .itemInputs('mysticalagriculture:tantalum_essence')
        .inputFluids(metal)
        .itemOutputs('16x gtceu:raw_tantalite')
        .outputFluids(metalDepleted)
        .duration(100)
        .EUt(6400)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('tantalum_essence_burning_0_cryptand'))
        .itemInputs('mysticalagriculture:tantalum_essence')
        .inputFluids(metalCryptand)
        .itemOutputs('64x gtceu:raw_tantalite')
        .outputFluids(cryptand)
        .duration(100)
        .EUt(100000)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('manganese_essence_burning_0'))
        .itemInputs('mysticalagriculture:manganese_essence')
        .inputFluids(metal)
        .itemOutputs('16x gtceu:raw_pyrolusite')
        .outputFluids(metalDepleted)
        .duration(100)
        .EUt(6400)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('manganese_essence_burning_0_cryptand'))
        .itemInputs('mysticalagriculture:manganese_essence')
        .inputFluids(metalCryptand)
        .itemOutputs('64x gtceu:raw_pyrolusite')
        .outputFluids(cryptand)
        .duration(100)
        .EUt(100000)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('platinum_essence_burning_0'))
        .itemInputs('mysticalagriculture:platinum_essence')
        .inputFluids(metal)
        .itemOutputs('16x gtceu:raw_cooperite')
        .outputFluids(metalDepleted)
        .duration(100)
        .EUt(6400)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('platinum_essence_burning_0_cryptand'))
        .itemInputs('mysticalagriculture:platinum_essence')
        .inputFluids(metalCryptand)
        .itemOutputs('64x gtceu:raw_cooperite')
        .outputFluids(cryptand)
        .duration(100)
        .EUt(100000)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('titanium_essence_burning_0'))
        .itemInputs('mysticalagriculture:titanium_essence')
        .inputFluids(metal)
        .itemOutputs('16x gtceu:raw_ilmenite')
        .outputFluids(metalDepleted)
        .duration(100)
        .EUt(6400)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('titanium_essence_burning_0_cryptand'))
        .itemInputs('mysticalagriculture:titanium_essence')
        .inputFluids(metalCryptand)
        .itemOutputs('64x gtceu:raw_ilmenite')
        .outputFluids(cryptand)
        .duration(100)
        .EUt(100000)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('niobium_essence_burning_0'))
        .itemInputs('mysticalagriculture:niobium_essence')
        .inputFluids(metal)
        .itemOutputs('16x gtceu:raw_pyrochlore')
        .outputFluids(metalDepleted)
        .duration(100)
        .EUt(6400)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('niobium_essence_burning_0_cryptand'))
        .itemInputs('mysticalagriculture:niobium_essence')
        .inputFluids(metalCryptand)
        .itemOutputs('64x gtceu:raw_pyrochlore')
        .outputFluids(cryptand)
        .duration(100)
        .EUt(100000)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('caesium_essence_burning_0'))
        .itemInputs('mysticalagriculture:caesium_essence')
        .inputFluids(dust)
        .itemOutputs('16x gtceu:raw_pollucite')
        .outputFluids(dustDepleted)
        .duration(100)
        .EUt(6400)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('caesium_essence_burning_0_cryptand'))
        .itemInputs('mysticalagriculture:caesium_essence')
        .inputFluids(dustCryptand)
        .itemOutputs('64x gtceu:raw_pollucite')
        .outputFluids(cryptand)
        .duration(100)
        .EUt(100000)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('cerium_essence_burning_0'))
        .itemInputs('mysticalagriculture:cerium_essence')
        .inputFluids(dust)
        .itemOutputs('16x gtceu:raw_bastnasite')
        .outputFluids(dustDepleted)
        .duration(100)
        .EUt(6400)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('cerium_essence_burning_0_cryptand'))
        .itemInputs('mysticalagriculture:cerium_essence')
        .inputFluids(dustCryptand)
        .itemOutputs('64x gtceu:raw_bastnasite')
        .outputFluids(cryptand)
        .duration(100)
        .EUt(100000)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('chalcopyrite_essence_burning_0'))
        .itemInputs('mysticalagriculture:chalcopyrite_essence')
        .inputFluids(dust)
        .itemOutputs('16x gtceu:raw_chalcopyrite')
        .outputFluids(dustDepleted)
        .duration(100)
        .EUt(6400)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('chalcopyrite_essence_burning_0_cryptand'))
        .itemInputs('mysticalagriculture:chalcopyrite_essence')
        .inputFluids(dustCryptand)
        .itemOutputs('64x gtceu:raw_chalcopyrite')
        .outputFluids(cryptand)
        .duration(100)
        .EUt(100000)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('blaze_essence_burning_0'))
        .itemInputs('mysticalagriculture:blaze_essence')
        .inputFluids(gem)
        .itemOutputs('16x minecraft:blaze_rod')
        .outputFluids(gemDepleted)
        .duration(100)
        .EUt(6400)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('blaze_essence_burning_0_cryptand'))
        .itemInputs('mysticalagriculture:blaze_essence')
        .inputFluids(gemCryptand)
        .itemOutputs('64x minecraft:blaze_rod')
        .outputFluids(cryptand)
        .duration(100)
        .EUt(100000)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('blizz_essence_burning_0'))
        .itemInputs('mysticalagriculture:blizz_essence')
        .inputFluids(gem)
        .itemOutputs('16x thermal:blizz_rod')
        .outputFluids(gemDepleted)
        .duration(100)
        .EUt(6400)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('blizz_essence_burning_0_cryptand'))
        .itemInputs('mysticalagriculture:blizz_essence')
        .inputFluids(gemCryptand)
        .itemOutputs('64x thermal:blizz_rod')
        .outputFluids(cryptand)
        .duration(100)
        .EUt(100000)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('blitz_essence_burning_0'))
        .itemInputs('mysticalagriculture:blitz_essence')
        .inputFluids(gem)
        .itemOutputs('16x thermal:blitz_rod')
        .outputFluids(gemDepleted)
        .duration(100)
        .EUt(6400)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('blitz_essence_burning_0_cryptand'))
        .itemInputs('mysticalagriculture:blitz_essence')
        .inputFluids(gemCryptand)
        .itemOutputs('64x thermal:blitz_rod')
        .outputFluids(cryptand)
        .duration(100)
        .EUt(100000)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('basalz_essence_burning_0'))
        .itemInputs('mysticalagriculture:basalz_essence')
        .inputFluids(gem)
        .itemOutputs('16x thermal:basalz_rod')
        .outputFluids(gemDepleted)
        .duration(100)
        .EUt(6400)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('basalz_essence_burning_0_cryptand'))
        .itemInputs('mysticalagriculture:basalz_essence')
        .inputFluids(gemCryptand)
        .itemOutputs('64x thermal:basalz_rod')
        .outputFluids(cryptand)
        .duration(100)
        .EUt(100000)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('tungsten_essence_burning_0_cryptand'))
        .itemInputs('mysticalagriculture:tungsten_essence')
        .inputFluids(metalCryptand)
        .itemOutputs('24x gtceu:raw_tungstate')
        .outputFluids(cryptand)
        .duration(100)
        .EUt(6400)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('tungsten_essence_burning_1_cryptand'))
        .itemInputs('mysticalagriculture:tungsten_essence')
        .inputFluids(metalCryptand)
        .itemOutputs('24x gtceu:raw_scheelite')
        .outputFluids(cryptand)
        .duration(100)
        .EUt(100000)
        .circuit(1);

    event.recipes.gtceu
        .essence_burning(id('barium_essence_burning_0_cryptand'))
        .itemInputs('mysticalagriculture:barium_essence')
        .inputFluids(dustCryptand)
        .itemOutputs('32x gtceu:raw_barite')
        .outputFluids(cryptand)
        .duration(100)
        .EUt(100000)
        .circuit(0);

    event.recipes.gtceu
        .essence_burning(id('naquadah_essence_burning_1_cryptand'))
        .itemInputs('mysticalagriculture:naquadah_essence')
        .inputFluids(metalCryptand)
        .itemOutputs('12x gtceu:raw_naquadah')
        .outputFluids(cryptand)
        .duration(100)
        .EUt(250000)
        .circuit(0);
});
