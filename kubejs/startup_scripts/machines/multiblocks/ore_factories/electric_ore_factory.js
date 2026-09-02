GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('electric_ore_factory', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('ore_factory')
        .recipeModifiers([
            GTRecipeModifiers.OC_NON_PERFECT,
            GTRecipeModifiers.BATCH_MODE,
        ])

        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern((definition) =>
            newFactoryBlockPattern([
                ' AAA | FFF | FFF |  F  |     |     |     ',
                'AFFFA|FG GF|F   F| F F | FFF |  F  |  B  ',
                'AFFFA|F P F|F P F|F P F| FPF | FMF | B B ',
                'AFFFA|FG GF|F   F| F F | FFF |  F  |  B  ',
                ' AAA | FCF | FFF |  F  |     |     |     ',
            ])
                .whereDict({
                    C: P.controller(definition),
                    F: P.anyOf([
                        P.block(GTBlocks.CASING_STEEL_SOLID.get()), //All Hatches have a max
                        P.ability(PA.itemIn, { max: 2, view: 1 }),
                        P.ability(PA.itemOut, { max: 2, view: 1 }),
                        P.ability(PA.fluidIn, { max: 2, view: 1 }),
                        P.ability(PA.euIn, { min: 1, max: 2 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                    ]),
                    M: P.ability(PA.muffler),
                    P: P.block(GTBlocks.CASING_STEEL_PIPE.get()),
                    G: P.block(GTBlocks.CASING_STEEL_GEARBOX.get()),
                    A: P.block(GTBlocks.FIREBOX_STEEL.get()),
                    B: P.gtBlock('bronze_machine_casing'),
                    ' ': P.any(),
                })
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_solid_steel',
            'kubejs:block/multiblock/primitive_blast_furnace'
        );
});