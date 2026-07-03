GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('lv_compound_generator', 'multiblock')
        .rotationState(RotationState.ALL)
        .recipeType(GTRecipeTypes.COMBUSTION)
        .machine((holder) => new $CompoundGeneratorMachine(holder, GTValues.LV))
        .recipeModifiers($StarTRecipeModifiers.COMPOUND_GENERATOR)
        .appearanceBlock(GTBlocks.SOLID_STEEL_CASING)
        .pattern((definition) =>
            newFactoryBlockPatternWithDirections(
                $RelativeDirection.DOWN,
                $RelativeDirection.UP,
                $RelativeDirection.RIGHT
            )(['CCC|C@C| C ', 'FKF|KPK|FKF', blockPatternRepeatable(1, 8), 'CCC|CMC| C '])
                // todo
                .whereDict({
                    C: P.anyOf([
                        P.block(GTBlocks.SOLID_STEEL_CASING.get()),
                        P.ability(PA.fluidIn, { max: 2, prev: 1 }),
                        P.ability(PA.fluidOut, { max: 2, prev: 1 }),
                    ]),
                    K: P.anyOf([P.kjsBlock('solid_steel_casing'), P.ability(PA.euIn, { max: 1, prev: 1 })]),
                    F: P.frame(GTMaterials.get('bronze')),
                    M: P.ability(PA.muffler),
                    P: P.block(GTBlocks.CASING_STEEL_PIPE.get()),
                    '@': P.controller(definition),
                    ' ': P.any(),
                })
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_solid_steel',
            'kubejs:block/multiblock/primitive_blast_furnace'
        );
});
