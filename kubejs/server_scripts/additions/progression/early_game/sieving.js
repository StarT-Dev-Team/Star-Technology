// requires: exnihilosequentia
ServerEvents.recipes((event) => {
    const isModLoaded = global.withModsLoaded;

    // Common sieve inputs
    const csi = {
        dirt: 'minecraft:dirt',
        gravel: 'minecraft:gravel',
        sand: 'minecraft:sand',
        dust: 'exnihilosequentia:dust',
        blackstone: 'exnihilosequentia:crushed_blackstone',
        mud: 'minecraft:mud',
        rootedDirt: 'minecraft:rooted_dirt',
        mycelium: 'minecraft:mycelium',
        gran: 'exnihilosequentia:crushed_granite',
        dior: 'exnihilosequentia:crushed_diorite',
    };

    const SIEVING_RECIPE_HANDLER = {
        currentMesh: 'string',
        isWaterlogged: false,
        /** @type {string | null} */
        currentInput: null,
        /** @type { {input: string, result: string, chance: number, mesh: string, waterlogged: boolean}[] } */
        recipes: [],
        /**
         * Set the mesh type for subsequent recipes.
         * @param {string} type The type of mesh ('string', 'flint', 'iron', 'diamond', 'emerald', 'netherite').
         * @returns {typeof SIEVING_RECIPE_HANDLER} Returns the SievingRecipeHandler for method chaining.
         */
        mesh: (type) => {
            if (!['string', 'flint', 'iron', 'diamond', 'emerald', 'netherite'].includes(type)) {
                console.warn(`Unknown mesh type: ${type}. Defaulting to 'string'.`);
                type = 'string';
            }
            SIEVING_RECIPE_HANDLER.currentMesh = type;
            return SIEVING_RECIPE_HANDLER;
        },
        /**
         * Set whether the sieve is waterlogged for subsequent recipes.
         * @param {boolean} wl - True if waterlogged, false otherwise.
         * @returns {typeof SIEVING_RECIPE_HANDLER} - Returns the SievingRecipeHandler for method chaining.
         */
        waterlogged: (wl) => {
            if (typeof wl !== 'boolean') {
                console.warn(`Invalid waterlogged value: ${wl}. Defaulting to false.`);
                wl = false;
            }
            SIEVING_RECIPE_HANDLER.isWaterlogged = wl;
            return SIEVING_RECIPE_HANDLER;
        },
        /**
         * Set the input block for subsequent recipes.
         * Does not support extra rolls
         * @param {string | null} input The input block identifier. Use null for no input.
         * @returns {typeof SIEVING_RECIPE_HANDLER} Returns the SievingRecipeHandler for method chaining.
         */
        input: (input) => {
            if (!input || typeof input !== 'string') {
                console.warn(`Invalid input value: ${input}. Defaulting to null.`);
                input = null;
            }
            SIEVING_RECIPE_HANDLER.currentInput = input;
            return SIEVING_RECIPE_HANDLER;
        },
        /**
         * Add a sieving result with chance for the current input, mesh, and waterlogged state.
         * @param {string} result - The result item/block identifier.
         * @param {number} chance - The chance (0.0 to 1.0) of obtaining the result.
         * @returns {typeof SIEVING_RECIPE_HANDLER} - Returns the SievingRecipeHandler for method chaining.
         */
        add: (result, chance) => {
            SIEVING_RECIPE_HANDLER.recipes.push({
                input: /** @type {string} */ (SIEVING_RECIPE_HANDLER.currentInput),
                result: result,
                chance: chance,
                mesh: SIEVING_RECIPE_HANDLER.currentMesh,
                waterlogged: SIEVING_RECIPE_HANDLER.isWaterlogged,
            });
            return SIEVING_RECIPE_HANDLER;
        },
        /**
         * Build and register all accumulated sieving recipes.
         * @param {internal.dev.latvian.mods.kubejs.recipe.RecipesEventJS} event - The event object to register recipes with.
         * @returns {void}
         */
        build: (event) => {
            SIEVING_RECIPE_HANDLER.recipes.forEach((recipe) => {
                event.custom({
                    type: 'exnihilosequentia:sifting',
                    input: recipe.input,
                    result: recipe.result,
                    rolls: [
                        {
                            chance: recipe.chance,
                            mesh: recipe.mesh,
                        },
                    ],
                    waterlogged: recipe.waterlogged,
                });
            });
            SIEVING_RECIPE_HANDLER.reset();
        },
        /**
         * Reset the SievingRecipeHandler to its default state.
         * @returns {void}
         */
        reset: () => {
            SIEVING_RECIPE_HANDLER.currentMesh = 'string';
            SIEVING_RECIPE_HANDLER.isWaterlogged = false;
            SIEVING_RECIPE_HANDLER.currentInput = null;
            SIEVING_RECIPE_HANDLER.recipes = [];
        },
    };

    /*
        const id = global.id;
        const dirt = 'minecraft:dirt';
        const gravel = 'minecraft:gravel';
        const cdirt = 'minecraft:coarse_dirt';
        const sand = 'minecraft:sand';
        const dust = 'exnihilosequentia:dust';
        const black = 'exnihilosequentia:crushed_blackstone';
        const mud = 'minecraft:mud';
        const rdirt = 'minecraft:rooted_dirt';
        const myc = 'minecraft:mycelium';
        */

    /*
        const sieve = (mesh, chance, input, result, wlog) => {
            event
                .custom({
                    type: `exnihilosequentia:sifting`,
                    input: input,
                    result: result,
                    rolls: [
                        {
                            chance: chance,
                            mesh: mesh,
                        },
                    ],
                    waterlogged: wlog,
                })
                .id(`start:sifting/${input.split(':')[1]}_${result.split(':')[1]}`); // doesn't work, idk why
        };
        */

    /*
        function hammer(input, result) {
            event.custom({
                type: `exnihilosequentia:hammer`,
                input: input,
                results: [result],
            });
        }
        */

    /*
        function heat(block, heat) {
            event.custom({
                type: `exnihilosequentia:heat`,
                block: block,
                amount: heat,
            });
        }
        */

    SIEVING_RECIPE_HANDLER.mesh('string') // Setting string for the following recipes
        .waterlogged(false)
        // Dirt Sieving
        .input(csi.dirt)
        .add('minecraft:cactus', 0.075)
        .add('minecraft:sunflower', 0.05)
        .add('minecraft:fern', 0.15)
        .add('minecraft:sweet_berries', 0.1)
        .add('minecraft:cocoa_beans', 0.05)
        .add('minecraft:oak_sapling', 0.075)
        .add('minecraft:cherry_sapling', 0.075)
        .add('minecraft:spruce_sapling', 0.075)
        .add('minecraft:birch_sapling', 0.075)
        .add('minecraft:jungle_sapling', 0.075)
        .add('minecraft:acacia_sapling', 0.075)
        .add('minecraft:dark_oak_sapling', 0.075)
        .add('minecraft:rooted_dirt', 0.4)
        // Mud Sieving
        .input(csi.mud)
        .add('minecraft:sugar_cane', 0.1)
        .add('minecraft:mangrove_propagule', 0.15)
        .add('exnihilosequentia:mycelium_spores', 0.2);

    isModLoaded('thermal', () => SIEVING_RECIPE_HANDLER.add('thermal:slime_mushroom_spores', 0.25));

    // Rooted Dirt Sieving
    SIEVING_RECIPE_HANDLER.input(csi.rootedDirt)
        .add('minecraft:potato', 0.15)
        .add('minecraft:carrot', 0.15)
        .add('minecraft:beetroot_seeds', 0.15)
        .add('exnihilosequentia:grass_seeds', 0.15)
        .add('minecraft:bamboo', 0.15)
        .add('minecraft:wheat_seeds', 0.15)
        .add('minecraft:pumpkin_seeds', 0.1)
        .add('minecraft:melon_seeds', 0.1)
        .add('kubejs:moss_ball', 0.05);

    isModLoaded('thermal', () => SIEVING_RECIPE_HANDLER.add('thermal:flax_seeds', 0.15));
    isModLoaded('farmersdelight', () => SIEVING_RECIPE_HANDLER.add('farmersdelight:rice_panicle', 0.05));

    // Waterlogged Sand Sieving
    SIEVING_RECIPE_HANDLER.input(csi.sand)
        .waterlogged(true)
        .add('exnihilosequentia:brain_coral_larva', 0.05)
        .add('exnihilosequentia:tube_coral_larva', 0.05)
        .add('exnihilosequentia:bubble_coral_larva', 0.05)
        .add('exnihilosequentia:horn_coral_larva', 0.05)
        .add('exnihilosequentia:fire_coral_larva', 0.05)
        .add('minecraft:sea_pickle', 0.05)
        .add('minecraft:kelp', 0.15)
        .add('minecraft:seagrass', 0.15)
        // Gravel Sieving
        .input(csi.gravel)
        .waterlogged(false)
        .add('gtceu:crushed_iron_ore', 0.45)
        .add('gtceu:crushed_magnetite_ore', 0.25)
        .add('gtceu:crushed_copper_ore', 0.65)
        .add('gtceu:crushed_tin_ore', 0.3)
        .add('gtceu:crushed_sphalerite_ore', 0.25)
        // Blackstone Sieving
        .input(csi.blackstone)
        .add('gtceu:crushed_galena_ore', 0.4)
        .add('gtceu:crushed_stibnite_ore', 0.3)
        // Sand Sieving
        .input(csi.sand)
        .add('minecraft:diamond', 0.075)
        .add('minecraft:lapis_lazuli', 0.08)
        .add('minecraft:amethyst_shard', 0.1)
        .add('minecraft:emerald', 0.05)
        .add('minecraft:quartz', 0.2)
        // Dust Sieving
        .input(csi.dust)
        .add('minecraft:redstone', 0.4)
        .add('minecraft:glowstone_dust', 0.4)
        .add('gtceu:tiny_sulfur_dust', 0.3)
        .add('minecraft:ender_pearl', 0.05)
        // Mycelium Sieving
        .input(csi.mycelium)
        .add('minecraft:nether_wart', 0.01)
        .add('minecraft:brown_mushroom', 0.05)
        .add('minecraft:red_mushroom', 0.05)
        .add('minecraft:dirt', 0.5)
        .add('exnihilosequentia:mycelium_spores', 0.3)
        // Pebbles
        .input(csi.gran)
        .add('exnihilosequentia:andesite_pebble', 0.05)
        .add('exnihilosequentia:basalt_pebble', 0.05)
        .add('exnihilosequentia:blackstone_pebble', 0.05)
        .add('exnihilosequentia:calcite_pebble', 0.05)
        .add('exnihilosequentia:deepslate_pebble', 0.05)
        .add('exnihilosequentia:diorite_pebble', 0.05)
        .add('exnihilosequentia:dripstone_pebble', 0.05)
        .add('exnihilosequentia:granite_pebble', 0.05)
        .add('exnihilosequentia:stone_pebble', 0.05)
        .add('exnihilosequentia:tuff_pebble', 0.05)
        .input(csi.dior)
        .add('exnihilosequentia:andesite_pebble', 0.05)
        .add('exnihilosequentia:basalt_pebble', 0.05)
        .add('exnihilosequentia:blackstone_pebble', 0.05)
        .add('exnihilosequentia:calcite_pebble', 0.05)
        .add('exnihilosequentia:deepslate_pebble', 0.05)
        .add('exnihilosequentia:diorite_pebble', 0.05)
        .add('exnihilosequentia:dripstone_pebble', 0.05)
        .add('exnihilosequentia:granite_pebble', 0.05)
        .add('exnihilosequentia:stone_pebble', 0.05)
        .add('exnihilosequentia:tuff_pebble', 0.05);

    isModLoaded('xycraft_world', () => {
        // Waterlogged Dust Sieving
        SIEVING_RECIPE_HANDLER.input(csi.dust)
            .waterlogged(true)
            .add('xycraft_world:xychorium_gem_blue', 0.75)
            .add('xycraft_world:xychorium_gem_red', 0.75)
            .add('xycraft_world:xychorium_gem_green', 0.75)
            .add('xycraft_world:xychorium_gem_light', 0.75)
            .add('xycraft_world:xychorium_gem_dark', 0.75);
    });

    SIEVING_RECIPE_HANDLER.build(event);

    //Dirts
    // sieve('string', 0.075, dirt, 'minecraft:cactus', false);
    // sieve('string', 0.05, dirt, 'minecraft:sunflower', false);
    // sieve('string', 0.15, dirt, 'minecraft:fern', false);
    // sieve('string', 0.10, dirt, 'minecraft:sweet_berries', false);
    // sieve('string', 0.05, dirt, 'minecraft:cocoa_beans', false);
    // sieve('string', 0.075, dirt, 'minecraft:oak_sapling', false);
    // sieve('string', 0.075, dirt, 'minecraft:cherry_sapling', false);
    // sieve('string', 0.075, dirt, 'minecraft:spruce_sapling', false);
    // sieve('string', 0.075, dirt, 'minecraft:birch_sapling', false);
    // sieve('string', 0.075, dirt, 'minecraft:jungle_sapling', false);
    // sieve('string', 0.075, dirt, 'minecraft:acacia_sapling', false);
    // sieve('string', 0.075, dirt, 'minecraft:dark_oak_sapling', false);
    // sieve('string', 0.40, dirt, 'minecraft:rooted_dirt', false)

    // sieve('string', 0.1, mud, 'minecraft:sugar_cane', false);
    // sieve('string', 0.25, mud, 'thermal:slime_mushroom_spores', false);
    // sieve('string', 0.15, mud, 'minecraft:mangrove_propagule', false);
    // sieve('string', 0.2, mud, 'exnihilosequentia:mycelium_spores', false);

    // sieve('string', 0.15, rdirt, 'thermal:flax_seeds', false);
    // sieve('string', 0.15, rdirt, 'minecraft:potato', false);
    // sieve('string', 0.15, rdirt, 'minecraft:carrot', false);
    // sieve('string', 0.15, rdirt, 'minecraft:beetroot_seeds', false);
    // sieve('string', 0.15, rdirt, 'exnihilosequentia:grass_seeds', false);
    // sieve('string', 0.15, rdirt, 'minecraft:bamboo', false);
    // sieve('string', 0.15, rdirt, 'minecraft:wheat_seeds', false);
    // sieve('string', 0.05, rdirt, 'farmersdelight:rice_panicle', false);
    // sieve('string', 0.10, rdirt, 'minecraft:pumpkin_seeds', false);
    // sieve('string', 0.10, rdirt, 'minecraft:melon_seeds', false);

    // //Waterlogged
    // sieve('string', 0.05, sand, 'exnihilosequentia:brain_coral_larva', true);
    // sieve('string', 0.05, sand, 'exnihilosequentia:tube_coral_larva', true);
    // sieve('string', 0.05, sand, 'exnihilosequentia:bubble_coral_larva', true);
    // sieve('string', 0.05, sand, 'exnihilosequentia:horn_coral_larva', true);
    // sieve('string', 0.05, sand, 'exnihilosequentia:fire_coral_larva', true);
    // sieve('string', 0.05, sand, 'minecraft:sea_pickle', true);
    // sieve('string', 0.15, sand, 'kelp', true);
    // sieve('string', 0.15, sand, 'minecraft:seagrass', true);

    // sieve('string', 0.75, dust, 'xycraft_world:xychorium_gem_blue', true);
    // sieve('string', 0.75, dust, 'xycraft_world:xychorium_gem_red', true);
    // sieve('string', 0.75, dust, 'xycraft_world:xychorium_gem_green', true);
    // sieve('string', 0.75, dust, 'xycraft_world:xychorium_gem_light', true);
    // sieve('string', 0.75, dust, 'xycraft_world:xychorium_gem_dark', true);

    // //Sand, dust, gravel, and blackstone
    // sieve('string', 0.45, gravel, 'gtceu:crushed_iron_ore', false);
    // sieve('string', 0.25, gravel, 'gtceu:crushed_magnetite_ore', false);
    // sieve('string', 0.65, gravel, 'gtceu:crushed_copper_ore', false);
    // sieve('string', 0.3, gravel, 'gtceu:crushed_tin_ore', false);
    // sieve('string', 0.25, gravel, 'gtceu:crushed_sphalerite_ore', false);

    // sieve('string', 0.4, black, 'gtceu:crushed_galena_ore', false);
    // sieve('string', 0.3, black, 'gtceu:crushed_stibnite_ore', false);

    // sieve('string', 0.075, sand, 'minecraft:diamond', false);
    // sieve('string', 0.08, sand, 'minecraft:lapis_lazuli', false);
    // sieve('string', 0.1, sand, 'minecraft:amethyst_shard', false);
    // sieve('string', 0.05, sand, 'minecraft:emerald', false);
    // sieve('string', 0.2, sand, 'minecraft:quartz', false);

    // sieve('string', 0.4, dust, 'minecraft:redstone', false);
    // sieve('string', 0.4, dust, 'minecraft:glowstone_dust', false);
    // sieve('string', 0.3, dust, 'gtceu:tiny_sulfur_dust', false);
    // sieve('string', 0.05, dust, 'minecraft:ender_pearl', false);

    // //Mycleium go Brr
    // sieve('string', .01, myc, 'minecraft:nether_wart', false);
    // sieve('string', .05, myc, 'minecraft:brown_mushroom', false);
    // sieve('string', .05, myc, 'minecraft:red_mushroom', false);
    // sieve('string', .5, myc, 'minecraft:dirt', false);
    // sieve('string', .3, myc, 'exnihilosequentia:mycelium_spores', false);

    /*
        sieve('flint', 0.1, gravel, 'gtceu:crushed_silver_ore', false);
        sieve('flint', 0.05, gravel, 'gtceu:crushed_gold_ore', false);
        sieve('flint', 0.2, black, 'gtceu:crushed_pentlandite_ore', false);
        sieve('flint', 0.25, gravel, 'gtceu:crushed_chalcopyrite_ore', false);
        sieve('flint', 0.25, black, 'gtceu:crushed_bornite_ore', false);
        sieve('flint', 0.25, gravel, 'gtceu:crushed_cassiterite_ore', false);

        sieve('iron', 0.12, gravel, 'gtceu:crushed_pyrolusite_ore', false);
        sieve('iron', 0.05, gravel, 'gtceu:crushed_lepidolite_ore', false);
        sieve('iron', 0.1, black, 'gtceu:crushed_cobaltite_ore', false);
        sieve('iron', 0.16, black, 'gtceu:crushed_beryllium_ore', false);
        sieve('iron', 0.21, black, 'gtceu:crushed_chromite_ore', false);
        sieve('iron', 0.05, gravel, 'gtceu:crushed_pyrochlore_ore', false);
        sieve('iron', 0.05, gravel, 'gtceu:crushed_vanadium_magnetite_ore', false);

        sieve('diamond', 0.12, black, 'gtceu:crushed_molybdenite_ore', false);
        sieve('diamond', 0.1, black, 'gtceu:crushed_pitchblende_ore', false);
        sieve('diamond', 0.05, gravel, 'gtceu:crushed_tantalite_ore', false);
        sieve('diamond', 0.075, black, 'gtceu:crushed_ilmenite_ore', false);
        sieve('diamond', 0.18, gravel, 'gtceu:crushed_bauxite_ore', false);
        sieve('diamond', 0.02, gravel, 'gtceu:crushed_pollucite_ore', false);

        sieve('emerald', 0.15, gravel, 'gtceu:crushed_tungstate_ore', false);
        sieve('emerald', 0.125, gravel, 'gtceu:crushed_scheelite_ore', false);
        sieve('emerald', 0.35, black, 'gtceu:crushed_bastnasite_ore', false);
        sieve('emerald', 0.25, black, 'gtceu:crushed_cooperite_ore', false);
        sieve('emerald', 0.12, black, 'gtceu:crushed_barite_ore', false);

        sieve('netherite', 0.01, black, 'gtceu:crushed_naquadah_ore', false);
    */
    // sand

    /*
        sieve('flint', 0.075, sand, 'gtceu:crushed_diamond_ore', false);
        sieve('flint', 0.05, sand, 'gtceu:crushed_emerald_ore', false);
        sieve('flint', 0.1, sand, 'gtceu:crushed_green_sapphire_ore', false);
        sieve('flint', 0.1, sand, 'gtceu:crushed_sapphire_ore', false);
        sieve('flint', 0.1, sand, 'gtceu:crushed_ruby_ore', false);
        // sieve('flint', 0.1, sand, 'gtceu:raw_opal', false);
        sieve('flint', 0.1, sand, 'minecraft:coal', false);
        sieve('flint', 0.1, sand, 'gtceu:crushed_quartzite_ore', false);
        sieve('flint', 0.1, sand, 'gtceu:crushed_certus_quartz_ore', false);
        sieve('flint', 0.1, sand, 'gtceu:crushed_salt_ore', false);
        sieve('flint', 0.1, sand, 'gtceu:crushed_rock_salt_ore', false);
        sieve('flint', 0.1, sand, 'gtceu:crushed_saltpeter_ore', false);
        sieve('flint', 0.1, sand, 'gtceu:crushed_realgar_ore', false);

        sieve('iron', 0.14, sand, 'gtceu:crushed_blue_topaz_ore', false);
        sieve('iron', 0.14, sand, 'gtceu:crushed_topaz_ore', false);
        sieve('iron', 0.08, sand, 'gtceu:crushed_yellow_garnet_ore', false);
        sieve('iron', 0.08, sand, 'gtceu:crushed_red_garnet_ore', false);
        sieve('iron', 0.1, sand, 'gtceu:crushed_garnet_sand_ore', false);
        sieve('iron', 0.2, sand, 'gtceu:crushed_apatite_ore', false);
        sieve('iron', 0.15, sand, 'gtceu:crushed_monazite_ore', false);

        //sieve('diamond', 0.01, sand, 'mmt:moonstone', false);
        //sieve('diamond', 0.01, sand, 'mmt:sunstone', false);
    */
    // dust

    //   sieve('netherite', 0.01, dust, 'minecraft:echo_shard', false);
    /*
        sieve('flint', 0.25, dust, 'ae2:sky_dust', false);
    */
});
