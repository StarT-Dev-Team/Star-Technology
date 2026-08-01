ServerEvents.recipes((event) => {
    const TIERS = ['uv', 'uhv', 'uev', 'uiv'];

    const arcRecipe = (tier) => {
        const id = global.id;
        const calculateDuration = global.calculateRecyclingDuration;
        const getFinalOutputs = global.getFinalRecycleOutputs;
        const componentRecycles = global.componentRecycleMaterials;
        const casingMaterials = global.casingMaterials;
        const materialTypes =
            tier === 'uev' || tier === 'uiv'
                ? ['prim', 'cable', 'sec', 'tert']
                : tier === 'uhv'
                  ? ['casing', 'prim', 'cable', 'sec', 'tert']
                  : ['casing', 'prim', 'cable', 'wire', 'foil'];
        let materials = {};

        materialTypes.forEach((type) => {
            if (type === 'casing') {
                materials[type + 'Material'] = casingMaterials[tier];
            } else {
                materials[type + 'Material'] = componentRecycles[tier][type + 'Material'];
            }
        });

        const coverCounts =
            tier === 'uv'
                ? global.LUV_TO_UV_COMPONENT_RECYCLING_COUNTS.dreamlink_cover
                : global.UHV_PLUS_COMPONENT_RECYCLE_COUNTS.dreamlink_cover;
        const tertMaterial = tier === 'uv' ? materials.foilMaterial : materials.tertMaterial;
        const tertCount = tier === 'uv' ? coverCounts.foilCount : coverCounts.tertCount;

        const coverOutputs = getFinalOutputs(
            [
                `${coverCounts.primCount}x ${materials.primMaterial}`,
                `${coverCounts.cableCount}x ${materials.cableMaterial}`,
                `${tertCount}x ${tertMaterial}`,
                false,
                false,
                false,
                false,
            ],
            'singleblock',
            false,
            false
        );

        event.recipes.gtceu
            .arc_furnace(id(`arc_${tier}_2a_dream_link_cover_item`))
            .itemInputs(`start_core:${tier}_2a_dream_link_cover_item`)
            .itemOutputs(coverOutputs)
            .duration(calculateDuration(coverOutputs))
            .EUtVA(LV)
            .category(GTRecipeCategories.ARC_FURNACE_RECYCLING);
    };

    const macRecipe = (tier) => {
        const id = global.id;
        const calculateDuration = global.calculateRecyclingDuration;
        const calculateVoltageMultiplier = global.calculateRecyclingVoltageMultiplier;
        const getFinalOutputs = global.getFinalRecycleOutputs;
        const componentRecycles = global.componentRecycleMaterials;
        const casingMaterials = global.casingMaterials;
        const materialTypes =
            tier === 'uev' || tier === 'uiv'
                ? ['prim', 'cable', 'sec', 'tert']
                : tier === 'uhv'
                  ? ['casing', 'prim', 'cable', 'sec', 'tert']
                  : ['casing', 'prim', 'cable', 'wire', 'foil'];
        let materials = {};

        materialTypes.forEach((type) => {
            if (type === 'casing') {
                materials[type + 'Material'] = casingMaterials[tier];
            } else {
                materials[type + 'Material'] = componentRecycles[tier][type + 'Material'];
            }
        });

        const coverCounts =
            tier === 'uv'
                ? global.LUV_TO_UV_COMPONENT_RECYCLING_COUNTS.dreamlink_cover
                : global.UHV_PLUS_COMPONENT_RECYCLE_COUNTS.dreamlink_cover;
        const tertMaterial = tier === 'uv' ? materials.foilMaterial : materials.tertMaterial;
        const tertCount = tier === 'uv' ? coverCounts.foilCount : coverCounts.tertCount;

        const coverOutputs = getFinalOutputs(
            [
                `${coverCounts.primCount}x ${materials.primMaterial}`,
                `${coverCounts.cableCount}x ${materials.cableMaterial}`,
                `${tertCount}x ${tertMaterial}`,
                false,
                false,
                false,
                false,
            ],
            'singleblock',
            true,
            false
        );

        event.recipes.gtceu
            .macerator(id(`macerate_${tier}_2a_dream_link_cover_item`))
            .itemInputs(`start_core:${tier}_2a_dream_link_cover_item`)
            .itemOutputs(coverOutputs)
            .duration(calculateDuration(coverOutputs))
            .EUt(2 * calculateVoltageMultiplier(coverOutputs))
            .category(GTRecipeCategories.MACERATOR_RECYCLING);
    };

    TIERS.forEach((tier) => {
        arcRecipe(tier);
        macRecipe(tier);
    });
});
