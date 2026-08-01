GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    let versions = [
        {
            casing: 'steam_machine_casing',
            frame: 'steel',
            pipe: 'bronze_pipe_casing',
            base: 'machine_casing_bronze_plated_bricks',
        },
        {
            casing: 'solid_machine_casing',
            frame: 'aluminium',
            pipe: 'steel_pipe_casing',
            base: 'machine_casing_solid_steel',
        },
        {
            casing: 'clean_machine_casing',
            frame: 'stainless_steel',
            pipe: 'steel_pipe_casing',
            base: 'machine_casing_clean_stainless_steel',
        },
    ];

    event
        .create('compound_generator', 'tiered_multiblock')
        .tiers(LV, MV, HV)
        .machine((holder, tier) => new $CompoundGeneratorMachine(holder, tier))
        .definition((tier, definition) => {
            let generator = versions[tier - 1];
            let slices = 8;

            definition
                .rotationState(RotationState.ALL)
                .recipeTypes(['combustion_generator', 'gas_turbine', 'steam_turbine'])
                .recipeModifiers([$StarTRecipeModifiers.COMPOUND_GENERATOR])
                .appearanceBlock(() => Block.getBlock(`gtceu:${generator.casing}`))
                .tooltips([
                    Text.translate('block.gtceu.compound_generator.desc'),
                    Text.translate('block.gtceu.compound_generator.max_generation', `${GTValues.V[tier] * 2 * slices}`),
                ])
                .regressWhenWaiting(false)
                .generator(true)
                .pattern((definition) =>
                    newFactoryBlockPatternWithDirections(
                        $RelativeDirection.LEFT,
                        $RelativeDirection.UP,
                        $RelativeDirection.BACK
                    )(['CCC|C@C| C ', 'FKF|KPK|FKF', blockPatternRepeatable(1, slices), 'CCC|CMC| C '])
                        // todo
                        .whereDict({
                            C: P.anyOf([
                                P.gtBlock(generator.casing),
                                P.ability(PA.fluidIn, { max: 2, view: 1 }),
                                P.ability(PA.fluidOut, { max: 2, view: 1 }),
                            ]),
                            K: P.anyOf([
                                P.gtBlock(generator.casing),
                                P.block(GTMachines.ENERGY_OUTPUT_HATCH[tier].block, { minLayer: 1, maxLayer: 1 }),
                            ]),
                            F: P.frame(GTMaterials.get(generator.frame)),
                            M: P.ability(PA.muffler),
                            P: P.gtBlock(generator.pipe),
                            '@': P.controller(definition),
                            ' ': P.any(),
                        })
                        .build()
                )
                .workableCasingModel(
                    `gtceu:block/casings/solid/${generator.base}`,
                    'gtceu:block/machines/alloy_smelter'
                );
        });
});
