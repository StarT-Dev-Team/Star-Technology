GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    [
        {
            tier: GTValues.LV,
            voltage: 'lv',
            casing: 'steam_machine_casing',
            frame: 'steel',
            pipe: 'bronze_pipe_casing',
            base: 'machine_casing_bronze_plated_bricks',
        },
        {
            tier: GTValues.MV,
            voltage: 'mv',
            casing: 'solid_machine_casing',
            frame: 'aluminium',
            pipe: 'steel_pipe_casing',
            base: 'machine_casing_solid_steel',
        },
        {
            tier: GTValues.HV,
            voltage: 'hv',
            casing: 'clean_machine_casing',
            frame: 'stainless_steel',
            pipe: 'steel_pipe_casing',
            base: 'machine_casing_clean_stainless_steel',
        },
    ].forEach((generator) => {
        event
            .create(`${generator.voltage}_compound_generator`, 'multiblock')
            .rotationState(RotationState.ALL)
            .recipeTypes(['combustion_generator', 'gas_turbine', 'steam_turbine'])
            .machine((holder) => new $CompoundGeneratorMachine(holder, generator.tier))
            .recipeModifiers([$StarTRecipeModifiers.COMPOUND_GENERATOR])
            .appearanceBlock(() => Block.getBlock(`gtceu:${generator.casing}`))
            .generator()
            .pattern((definition) =>
                newFactoryBlockPatternWithDirections(
                    $RelativeDirection.BACK,
                    $RelativeDirection.UP,
                    $RelativeDirection.RIGHT
                )(['CCC|C@C| C ', 'FKF|KPK|FKF', blockPatternRepeatable(1, 8), 'CCC|CMC| C '])
                    // todo
                    .whereDict({
                        C: P.anyOf([
                            P.gtBlock(generator.casing),
                            P.ability(PA.fluidIn, { max: 2, prev: 1 }),
                            P.ability(PA.fluidOut, { max: 2, prev: 1 }),
                        ]),
                        K: P.anyOf([
                            P.gtBlock(generator.casing),
                            P.gtBlock(`${generator.voltage}_energy_output_hatch`, { max: 1, prev: 1 }),
                        ]),
                        F: P.frame(GTMaterials.get(generator.frame)),
                        M: P.ability(PA.muffler),
                        P: P.gtBlock(generator.pipe),
                        '@': P.controller(definition),
                        ' ': P.any(),
                    })
                    .build()
            )
            .workableCasingModel(`gtceu:block/casings/solid/${generator.base}`, 'gtceu:block/machines/alloy_smelter');
    });
});
