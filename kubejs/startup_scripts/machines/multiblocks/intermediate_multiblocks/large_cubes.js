GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    // Large Rock Crusher Recipe Type
    event
        .create('large_rock_crusher')
        .category('resource_production')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 2, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_MACERATE, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.FORGE_HAMMER);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    /**
     * @param {string} type
     * @param {string} casing
     * @param {string=} name
     * @param {string=} recipeType
     */
    const largeCube = (type, casing, name, recipeType) => {
        name = name || `t_large_${type}`;
        recipeType = recipeType || type;

        event
            .create(name, 'multiblock')
            .rotationState(RotationState.NON_Y_AXIS)
            .tooltips([
                Text.translate('block.start_core.gap'),
                Text.translate('block.kubejs.only_one_2a_hatch.tooltip'),
            ])
            .recipeType(recipeType)
            .recipeModifiers([GTRecipeModifiers.OC_PERFECT, GTRecipeModifiers.BATCH_MODE])
            .appearanceBlock(() => Block.getBlock(`kubejs:${casing}_casing`))
            .pattern((definition) =>
                FactoryBlockPattern.start()
                    .aisle('CCC', 'CCC', 'CCC')
                    .aisle('CCC', 'C C', 'CCC')
                    .aisle('CCC', 'CKC', 'CCC')
                    .whereDict({
                        K: P.controller(definition),
                        C: P.anyOf([
                            P.kjsBlock(`${casing}_casing`, { min: 5 }),
                            P.ability(PA.itemIn, { view: 1 }),
                            P.ability(PA.itemOut, { view: 1 }),
                            P.ability(PA.fluidIn, { view: 1 }),
                            P.ability(PA.maintenance, { exact: 1 }),
                            P.ability(PA.euOut2a, { exact: 1 }),
                        ]),
                        ' ': P.air(),
                    })
                    .build()
            )
            .workableCasingModel(`kubejs:block/casings/large_cubes/${casing}_casing`, `gtceu:block/machines/${type}`);
    };

    // Generic Cubes
    largeCube('bender', 'birmabright');
    largeCube('centrifuge', 'tumbaga');
    largeCube('electrolyzer', 'duralumin');
    largeCube('extruder', 'beryllium_aluminium_alloy');
    largeCube('forming_press', 'elgiloy');
    largeCube('lathe', 'beryllium_bronze');
    largeCube('macerator', 'blue_steel');
    largeCube('mixer', 'kovar');
    largeCube('ore_washer', 'hydronalium');
    largeCube('sifter', 'zamak');
    largeCube('thermal_centrifuge', 'silicon_bronze');
    largeCube('wiremill', 'sterling_silver');
    largeCube('autoclave', 'silicone_rubber');
    largeCube('pulverizer', 'galvanized_steel');
    largeCube('arc_furnace', 'black_steel');
    largeCube('electromagnetic_separator', 'manganin');
    largeCube('rock_crusher', 'red_steel', 'large_rock_crusher', 'large_rock_crusher');
});
