ServerEvents.recipes(event => {
    const id = global.id;

    global.not_hardmode(() => {
        const components = global.componentMaterials;
        const registerScrapRecyclingRecipe = global.registerScrapRecyclingRecipe;
        const registerPlasmaRecyclingRecipe = global.registerPlasmaRecyclingRecipe;
        const getPrefixByTier = global.getPrefixByTier;

        function postIVHatchRecycling(tierKey) {
            const tierData = components[tierKey];

            if (!tierData) return;

            const {
                materials: {
                    primMaterial,
                    cable,
                    tierMaterial
                }
            } = tierData;

            registerScrapRecyclingRecipe(event, `${getPrefixByTier(tierKey, true)}:${tierKey}_parallel_hatch`,
                [`18x gtceu:${primMaterial}_dust`, '16x gtceu:rubber_dust', `9x gtceu:${cable}_dust`, `8x gtceu:${tierMaterial}_dust`]);

            registerPlasmaRecyclingRecipe(event, `${getPrefixByTier(tierKey, true)}:${tierKey}_parallel_hatch`,
                [`18x gtceu:${primMaterial}_ingot`, `9x gtceu:${cable}_ingot`, `8x gtceu:${tierMaterial}_ingot`, '16x gtceu:tiny_ash_dust']);
        }

        function postUVMachines(tierKey,chip) {
            const tierData = components[tierKey];

            if (!tierData) return;

            const {
                tiers: { tier, tier0 },
                materials: {
                    primMaterial,
                    tierMaterial,
                    tierFluid, 
                    cable
                }
            } = tierData;

            // Parallel Hatches
            event.shaped(Item.of(`start_core:${tier}_parallel_hatch`), [
                'SCE',
                'CHC',
                'BCB'
            ], {
                S: `gtceu:${tier}_sensor`,
                E: `gtceu:${tier}_emitter`,
                C: `#gtceu:circuits/${tier0}`,
                H: `gtceu:${tier}_machine_hull`,
                B: `gtceu:${cable}_double_cable`
            }).id(`start:shaped/${tier}_parallel_hatch`);

            event.recipes.gtceu.assembler(id(`${tier}_absolute_parallel_hatch`))
                .itemInputs(
                    `start_core:${tier}_parallel_hatch`,
                    `4x gtceu:${tier}_sensor`,
                    `4x gtceu:${tier}_emitter`,
                    `2x #gtceu:circuits/${tier0}`,
                    `4x ${chip}`)
                .inputFluids(`gtceu:${tierFluid} 576`)
                .itemOutputs(`start_core:${tier}_absolute_parallel_hatch`)
                .duration(320)
                .EUt(GTValues.VA[GTValues[tier.toUpperCase()]]);

            // normal hatch recycling
            postIVHatchRecycling(tierKey);

            // absolute hatch recycling
            registerScrapRecyclingRecipe(event, `start_core:${tier}_absolute_parallel_hatch`,
                [`64x gtceu:${primMaterial}_dust`, `26x gtceu:${primMaterial}_dust`, '64x gtceu:rubber_dust',
                    `33x gtceu:${cable}_dust`, `8x gtceu:${tierMaterial}_dust`]);

            registerPlasmaRecyclingRecipe(event, `start_core:${tier}_absolute_parallel_hatch`,
                [`64x gtceu:${primMaterial}_ingot`, `26x gtceu:${primMaterial}_ingot`, `33x gtceu:${cable}_ingot`,
                    `8x gtceu:${tierMaterial}_ingot`, '64x gtceu:tiny_ash_dust']);
        }

        // add recycling recipes to all hatches
        // iv hatches are slightly cheaper than the rest because they are not made using assline components
        registerScrapRecyclingRecipe(event, `gtceu:iv_parallel_hatch`,
            ['12x gtceu:tungsten_steel_dust', '6x gtceu:rubber_dust', '3x gtceu:platinum_dust', '10x gtceu:small_iridium_dust']);

        registerPlasmaRecyclingRecipe(event, `gtceu:iv_parallel_hatch`,
            ['12x gtceu:tungsten_steel_ingot', '3x gtceu:platinum_ingot', '22x gtceu:iridium_nugget','6x gtceu:tiny_ash_dust']);

        postIVHatchRecycling('luv');
        postIVHatchRecycling('zpm');
        postIVHatchRecycling('uv');

        // add additional custom hatches
        postUVMachines('uhv','kubejs:uepic_chip');
        postUVMachines('uev','kubejs:uepic_chip');
        postUVMachines('uiv','kubejs:uipic_chip');
    });
});