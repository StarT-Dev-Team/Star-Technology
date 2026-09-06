GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('steam_ore_processing')
        .category('ore_processing')
        .setMaxIOSize(1, 4, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.FURNACE);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('steam_ore_factory', 'multiblock')
        .machine((holder) => new $StartSteamMulti(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('steam_ore_processing')
        .appearanceBlock(() => Block.getBlock('kubejs:high_steam_machine_casing'))
        .recipeModifier($StarTRecipeModifiers.START_STEAM_PARALLEL)
        .pattern((definition) =>
            newFactoryBlockPattern([
                ' FFF | FFF | FFF |  F  |     |     |     ',
                'FFFFF|FG#GF|F###F| F#F | FFF |  F  |  B  ',
                'FFFFF|F###F|F###F|F###F| F#F | F#F | B B ',
                'FFFFF|FG#GF|F###F| F#F | FFF |  F  |  B  ',
                ' FFF | FCF | FFF |  F  |     |     |     ',
            ])
                .whereDict({
                    C: P.controller(definition),
                    F: P.anyOf([
                        P.kjsBlock('high_steam_machine_casing', { min: 40 }),
                        P.gtBlock('ulv_fluid_input', { max: 1, view: 1 }), // Needs to be Core: Steam Fluid Input to not steam conflict
                        P.ability(PA.steamIn, { max: 2, view: 1 }),
                        P.ability(PA.steam, { exact: 1 }),
                        P.ability(PA.steamOut, { max: 2, view: 1 }),
                    ]),
                    G: P.block(GTBlocks.CASING_BRONZE_PIPE.get()),
                    '#': P.air(),
                    B: P.block('gtceu:steel_machine_casing'),
                    ' ': P.any(),
                })
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/basic/high_steam_machine_casing',
            'kubejs:block/multiblock/primitive_blast_furnace'
        );
});
