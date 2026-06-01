// packmode: hard

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('steam_casting_array', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('fluid_solidifier')
        .machine((holder) => new $StartSteamMulti(holder))
        .recipeModifier($StarTRecipeModifiers.START_STEAM_PARALLEL)
        .appearanceBlock(GCYMBlocks.CASING_INDUSTRIAL_STEAM)
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle('AAAAA', 'AAAAA', 'AAAAA', '#B#B#')
                .aisle('AAAAA', 'ACCCA', 'A###A', 'BBBBB')
                .aisle('AAAAA', 'A###A', 'A###A', '#B#B#')
                .aisle('AAAAA', 'A###A', 'A###A', '#B#B#')
                .aisle('AAAAA', 'ACCCA', 'A###A', 'BBBBB')
                .aisle('AAAAA', 'AA@AA', 'AAAAA', '#B#B#')
                .where(
                    'A',
                    Predicates.blocks('gtceu:industrial_steam_casing')
                        .or(
                            Predicates.abilities(PartAbility.STEAM_IMPORT_ITEMS)
                                .setPreviewCount(1)
                                .setMaxGlobalLimited(2)
                        )
                        .or(Predicates.blocks('gtceu:ulv_fluid_input').setPreviewCount(1).setMaxGlobalLimited(2))
                        .or(Predicates.abilities(PartAbility.STEAM).setExactLimit(1))
                        .or(
                            Predicates.abilities(PartAbility.STEAM_EXPORT_ITEMS)
                                .setPreviewCount(1)
                                .setMaxGlobalLimited(2)
                        )
                )
                .where('#', Predicates.any())
                .where('B', Predicates.blocks('gtceu:bronze_frame'))
                .where('C', Predicates.blocks('gtceu:bronze_pipe_casing'))
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/gcym/industrial_steam_casing',
            'gtceu:block/machines/fluid_solidifier'
        );
});
