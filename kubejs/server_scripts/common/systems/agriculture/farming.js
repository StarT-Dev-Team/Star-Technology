// priority: 10
ServerEvents.recipes(event => {
    const id = global.id;

    global.not_hardmode(() => {
        event.shaped(Item.of('gtceu:large_farm'), [
            'SPS',
            'PBP',
            'SPS'
        ], {
            S: 'gtceu:treated_wood_rod',
            P: 'gtceu:treated_wood_planks',
            B: 'minecraft:bone_meal'
        }).id('start:shaped/large_farm');
    });

    event.shaped(Item.of('gtceu:hydroponic_garden'), [
        'ABB',
        'CDA',
        'CEF'
    ], {
        A: 'gtceu:tungsten_single_cable',
        B: '#gtceu:circuits/iv',
        C: 'gtceu:iv_electric_pump',
        D: 'gtceu:greenhouse',
        E: 'gtceu:iv_field_generator',
        F: 'gtceu:iv_robot_arm'
    }).id('start:shaped/hydroponic_garden');

    // ==================== CROP DEFINITIONS ====================
    // To add a new crop, simply add an entry to this array with the following properties:
    // - name: (required) The crop item ID
    // - seed: (optional) The seed item ID (defaults to crop name if not specified)
    // - fluid: (optional) Custom fluid requirement (defaults to 'minecraft:water' with amounts based on machine)
    // - dimension: (optional) Required dimension for growing
    // - voltage: (optional) Required voltage tier (defaults to 'lv')
    // - skipLargeFarm: (optional) Set to true to skip Large Farm recipes
    
    global.farmCropList = [
        // Vanilla crops with seeds
        { name: 'minecraft:wheat', seed: 'minecraft:wheat_seeds' },
        { name: 'minecraft:pumpkin', seed: 'minecraft:pumpkin_seeds' },
        { name: 'minecraft:melon', seed: 'minecraft:melon_seeds' },
        { name: 'minecraft:beetroot', seed: 'minecraft:beetroot_seeds' },
        { name: 'minecraft:torchflower', seed: 'minecraft:torchflower_seeds' },
        { name: 'minecraft:pitcher_plant', seed: 'minecraft:pitcher_pod' },
        
        // Vanilla crops without separate seeds
        { name: 'minecraft:nether_wart' },
        { name: 'minecraft:carrot' },
        { name: 'minecraft:potato' },
        { name: 'minecraft:cocoa_beans' },
        { name: 'minecraft:glow_berries' },
        { name: 'minecraft:sweet_berries' },
        { name: 'minecraft:bamboo' },
        { name: 'minecraft:kelp' },
        
        // Farmer's Delight crops
        { name: 'farmersdelight:onion' },
        { name: 'farmersdelight:tomato', seed: 'farmersdelight:tomato_seeds' },
        { name: 'farmersdelight:cabbage', seed: 'farmersdelight:cabbage_seeds' },
        { name: 'farmersdelight:rice_panicle', seed: 'farmersdelight:rice' },
        
        // Thermal crops
        { name: 'thermal:amaranth', seed: 'thermal:amaranth_seeds' },
        { name: 'thermal:barley', seed: 'thermal:barley_seeds' },
        { name: 'thermal:corn', seed: 'thermal:corn_seeds' },
        { name: 'thermal:flax', seed: 'thermal:flax_seeds' },
        { name: 'thermal:onion', seed: 'thermal:onion_seeds' },
        { name: 'thermal:radish', seed: 'thermal:radish_seeds' },
        { name: 'thermal:rice', seed: 'thermal:rice_seeds' },
        { name: 'thermal:sadiroot', seed: 'thermal:sadiroot_seeds' },
        { name: 'thermal:spinach', seed: 'thermal:spinach_seeds' },
        { name: 'thermal:bell_pepper', seed: 'thermal:bell_pepper_seeds' },
        { name: 'thermal:eggplant', seed: 'thermal:eggplant_seeds' },
        { name: 'thermal:green_bean', seed: 'thermal:green_bean_seeds' },
        { name: 'thermal:peanut', seed: 'thermal:peanut_seeds' },
        { name: 'thermal:strawberry', seed: 'thermal:strawberry_seeds' },
        { name: 'thermal:tomato', seed: 'thermal:tomato_seeds' },
        { name: 'thermal:coffee', seed: 'thermal:coffee_seeds' },
        { name: 'thermal:hops', seed: 'thermal:hops_seeds' },
        { name: 'thermal:tea', seed: 'thermal:tea_seeds' },
        { name: 'thermal:frost_melon', seed: 'thermal:frost_melon_seeds' },
        
        // Vanilla flowers (small)
        { name: 'minecraft:dandelion' },
        { name: 'minecraft:poppy' },
        { name: 'minecraft:blue_orchid' },
        { name: 'minecraft:allium' },
        { name: 'minecraft:azure_bluet' },
        { name: 'minecraft:red_tulip' },
        { name: 'minecraft:orange_tulip' },
        { name: 'minecraft:white_tulip' },
        { name: 'minecraft:pink_tulip' },
        { name: 'minecraft:oxeye_daisy' },
        { name: 'minecraft:cornflower' },
        { name: 'minecraft:lily_of_the_valley' },
        { name: 'minecraft:wither_rose' },
        { name: 'minecraft:pink_petals' },
        
        // Vanilla flowers (tall)
        { name: 'minecraft:sunflower' },
        { name: 'minecraft:lilac' },
        { name: 'minecraft:rose_bush' },
        { name: 'minecraft:peony' },
        
        // Vanilla special crops
        { name: 'minecraft:sugar_cane' },
        { name: 'minecraft:cactus' },
        { name: 'minecraft:seagrass' },
        { name: 'minecraft:sea_pickle' },
        { name: 'minecraft:lily_pad' },
        
        // Special crops with custom requirements
        { name: 'minecraft:chorus_fruit', seed: 'minecraft:chorus_flower', fluid: 'gtceu:ender_air 250', dimension: 'minecraft:the_end', voltage: 'hv', skipLargeFarm: true }
    ];

    // ==================== HELPER FUNCTIONS ====================
    
    /**
     * Get the seed item for a crop (defaults to crop name if no seed specified)
     */
    function getCropSeed(crop) {
        return crop.seed || crop.name;
    }
    
    /**
     * Get the voltage tier for a crop (defaults to 'lv')
     */
    function getCropVoltage(crop) {
        return crop.voltage || 'lv';
    }
    
    /**
     * Generate a recipe ID from crop name and suffix
     */
    function generateRecipeId(cropName, suffix) {
        const parts = cropName.split(':');
        const namespace = parts[0];
        const itemName = parts[1];
        const prefix = (namespace !== 'minecraft') ? '_' + namespace : '';
        return id(itemName + prefix + suffix);
    }
    
    /**
     * Apply dimension requirement to a recipe if specified in crop config
     */
    function applyDimension(recipe, crop) {
        if (crop.dimension) {
            recipe.dimension(crop.dimension);
        }
    }
    
    /**
     * Get fluid requirement for crop (with default amount)
     * For greenhouse, use the crop fluid or default
     */
    function getCropFluid(crop, defaultFluid) {
        return crop.fluid || defaultFluid;
    }
    
    /**
     * Get fluid requirement for hydroponic garden
     * Doubles the amount if crop has custom fluid
     */
    function getHydroponicFluid(crop) {
        if (crop.fluid) {
            // Parse custom fluid and double the amount
            const fluidParts = crop.fluid.split(' ');
            const fluidName = fluidParts[0];
            const amount = parseInt(fluidParts[1]) * 2;
            return fluidName + ' ' + amount;
        }
        return 'minecraft:water 500';
    }

    // ==================== RECIPE GENERATION ====================
    
    global.farmCropList.forEach(crop => {
        const cropName = crop.name;
        const seed = getCropSeed(crop);
        const voltage = getCropVoltage(crop);
        const euAmount = global.vha[voltage];
        
        // ===== Large Farm Recipe =====
        if (!crop.skipLargeFarm) {
            const largeFarmRecipe = event.recipes.gtceu.large_farm(generateRecipeId(cropName, '_harvest'))
                .notConsumable(`8x ${seed}`)
                .itemOutputs(`16x ${cropName}`)
                .chancedOutput(`8x ${seed}`, 5000, 0)
                .daytime()
                .duration(800);
            
            applyDimension(largeFarmRecipe, crop);
        }
        
        // ===== Crop Greenhouse Recipes =====
        const greenhouseBasic = event.recipes.gtceu.crop_greenhouse(generateRecipeId(cropName, '_harvest_no_fertilizer'))
            .notConsumable(`8x ${seed}`)
            .inputFluids(getCropFluid(crop, 'minecraft:water 100'))
            .itemOutputs(`16x ${cropName}`)
            .chancedOutput(`8x ${seed}`, 5000, 0)
            .duration(600)
            .EUt(euAmount)
            .circuit(0);

        const greenhouseBonemeal = event.recipes.gtceu.crop_greenhouse(generateRecipeId(cropName, '_harvest_bone_meal'))
            .notConsumable(`8x ${seed}`)
            .chancedInput('minecraft:bone_meal', 7500, -500)
            .inputFluids(getCropFluid(crop, 'minecraft:water 100'))
            .itemOutputs(`32x ${cropName}`)
            .chancedOutput(`16x ${seed}`, 5000, 0)
            .duration(600)
            .EUt(euAmount)
            .circuit(1);

        const greenhouseCompost = event.recipes.gtceu.crop_greenhouse(generateRecipeId(cropName, '_harvest_compost'))
            .notConsumable(`8x ${seed}`)
            .chancedInput('thermal:compost', 7500, -500)
            .inputFluids(getCropFluid(crop, 'minecraft:water 100'))
            .itemOutputs(`48x ${cropName}`)
            .chancedOutput(`24x ${seed}`, 5000, 0)
            .duration(600)
            .EUt(euAmount)
            .circuit(2);

        const greenhouseFertilizer = event.recipes.gtceu.crop_greenhouse(generateRecipeId(cropName, '_harvest_fertilizer'))
            .notConsumable(`8x ${seed}`)
            .chancedInput('gtceu:fertilizer', 7500, -500)
            .inputFluids(getCropFluid(crop, 'minecraft:water 100'))
            .itemOutputs(`64x ${cropName}`)
            .chancedOutput(`32x ${seed}`, 5000, 0)
            .duration(600)
            .EUt(euAmount)
            .circuit(3);
        
        // ===== Hydroponic Garden Recipes =====
        const hydroponicNpk = event.recipes.gtceu.hydroponic_garden(generateRecipeId(cropName, '_harvest_npk'))
            .notConsumable(`8x ${seed}`)
            .inputFluids(getHydroponicFluid(crop))
            .itemOutputs(`64x ${cropName}`)
            .itemOutputs(`16x ${seed}`)
            .duration(600)
            .EUt(euAmount)
            .circuit(0);

        const hydroponicNrf = event.recipes.gtceu.hydroponic_garden(generateRecipeId(cropName, '_harvest_nrf'))
            .notConsumable(`8x ${seed}`)
            .inputFluids(getHydroponicFluid(crop), 'gtceu:nutrient_rich_fertilizer_solution 100')
            .itemOutputs(`128x ${cropName}`)
            .itemOutputs(`32x ${seed}`)
            .duration(300)
            .EUt(euAmount)
            .circuit(1);

        const hydroponicBiostimulating = event.recipes.gtceu.hydroponic_garden(generateRecipeId(cropName, '_harvest_biostimulating'))
            .notConsumable(`8x ${seed}`)
            .inputFluids(getHydroponicFluid(crop), 'gtceu:biostimulating_mixture 100')
            .itemOutputs(`256x ${cropName}`)
            .itemOutputs(`64x ${seed}`)
            .duration(150)
            .EUt(euAmount)
            .circuit(2);

        // Apply dimension requirement to all recipes if specified
        applyDimension(greenhouseBasic, crop);
        applyDimension(greenhouseBonemeal, crop);
        applyDimension(greenhouseCompost, crop);
        applyDimension(greenhouseFertilizer, crop);
        applyDimension(hydroponicNpk, crop);
        applyDimension(hydroponicNrf, crop);
        applyDimension(hydroponicBiostimulating, crop);
    });

    // Nutrient Rich Fertilizer Solution (NRF Solution)
    event.recipes.gtceu.large_chemical_reactor(id('nutrient_rich_fertilizer_solution'))
        .itemInputs('gtceu:tiny_phosphate_dust','gtceu:small_bone_dust')
        .inputFluids('minecraft:water 900','gtceu:npk_solution 100')
        .outputFluids('gtceu:nutrient_rich_fertilizer_solution 1000')
        .duration(200)
        .EUt(global.vha['ev']);

    event.recipes.gtceu.large_chemical_reactor(id('nutrient_rich_fertilizer_solution_36x'))
        .itemInputs('4x gtceu:phosphate_dust','9x minecraft:bone_meal')
        .inputFluids('minecraft:water 32400','gtceu:npk_solution 3600')
        .outputFluids('gtceu:nutrient_rich_fertilizer_solution 36000')
        .duration(200 * 36)
        .EUt(global.vha['ev'])

    // Biostimulating Mixture
    event.recipes.gtceu.extractor(id('seaweed_oil'))
        .itemInputs('minecraft:kelp')
        .outputFluids('gtceu:seaweed_oil 36')
        .duration(100)
        .EUt(global.vha['hv']);

    event.recipes.gtceu.distillery(id('distill_nutrient_rich_fertilizer_solution'))
        .inputFluids('gtceu:nutrient_rich_fertilizer_solution 100')
        .outputFluids('gtceu:liquefied_nutrient_paste 80')
        .chancedOutput('gtceu:fertilizer', 5000, 0)
        .duration(300)
        .EUt(global.vha['hv']);

    event.recipes.gtceu.large_chemical_reactor(id('silicic_acid'))
        .itemInputs('gtceu:silicon_dioxide_dust')
        .inputFluids('minecraft:water 1000')
        .outputFluids('gtceu:silicic_acid 1000')
        .duration(247)
        .EUt(global.vha['mv']);

    event.recipes.gtceu.large_chemical_reactor(id('biostimulating_mixture'))
        .inputFluids('gtceu:silicic_acid 150', 'gtceu:seaweed_oil 250', 'gtceu:liquefied_nutrient_paste 325', 'gtceu:fermented_biomass 25', 'gtceu:glycerol 250')
        .outputFluids('gtceu:biostimulating_mixture 1000')
        .duration(160)
        .EUt(global.vha['iv']);

    //Phyto Soil
    event.remove({output: 'thermal:phytosoil'});
    event.shaped('thermal:phytosoil', [
        'CAC',
        'ADA',
        'CAC'
    ], {
        C: 'gtceu:charcoal_dust',
        A: 'gtceu:small_apatite_dust',
        D: 'minecraft:dirt'
    }).id(id('phytosoil'));

});