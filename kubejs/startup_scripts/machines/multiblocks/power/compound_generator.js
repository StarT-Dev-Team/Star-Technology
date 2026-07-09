GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    [
        {
            tier: GTValues.LV,
            voltage: 'lv',
            casing: 'bronze_casing',
            frame: 'steel',
            pipe: 'bronze_pipe_casing',
        },
        {
            tier: GTValues.MV,
            voltage: 'mv',
            casing: 'solid_steel_casing',
            frame: 'aluminium',
            pipe: 'steel_pipe_casing',
        },
        {
            tier: GTValues.HV,
            voltage: 'hv',
            casing: 'clean_stainless_steel_casing',
            frame: 'stainless_steel',
            pipe: 'steel_pipe_casing',
        },
    ].forEach((generator) => {
        event
            .create(`${generator.voltage}_compound_generator`, 'multiblock')
            .rotationState(RotationState.ALL)
            .recipeTypes([GTRecipeTypes.COMBUSTION])
            .machine((holder) => new $CompoundGeneratorMachine(holder, generator.tier))
            .recipeModifiers($StarTRecipeModifiers.COMPOUND_GENERATOR)
            .appearanceBlock(() => Block.getBlock(`gtceu:${generator.casing}`))
            .pattern((definition) =>
                newFactoryBlockPatternWithDirections(
                    $RelativeDirection.DOWN,
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
                        K: P.anyOf([P.gtBlock('solid_steel_casing'), P.ability(PA.euIn, { max: 1, prev: 1 })]),
                        F: P.frame(GTMaterials.get(generator.frame)),
                        M: P.ability(PA.muffler),
                        P: P.gtBlock(generator.pipe),
                        '@': P.controller(definition),
                        ' ': P.any(),
                    })
                    .build()
            )
            .workableCasingModel(
                'gtceu:block/casings/solid/machine_casing_solid_steel',
                'gtceu:block/multiblock/implosion_compressor'
            );
    });
});
