// packmode: hard

GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('electric_sifter')
        .category('resource_gen')
        .setEUIO('in')
        .setMaxIOSize(2, 6, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('electric_sifter', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('electric_sifter')
        .appearanceBlock(() => Block.getBlock('kubejs:treatedwood_casing'))
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle('A   A', 'ABBBA', 'ABBBA', 'ABBBA', 'ABBBA', 'ABBBA', ' AAA ')
                .aisle('     ', 'BBBBB', 'BCCCB', 'BDDDB', 'BDDDB', 'B   B', 'A A A')
                .aisle('     ', 'BBBBB', 'BCCCB', 'BDDDB', 'BDDDB', 'B   B', 'AAAAA')
                .aisle('     ', 'BBBBB', 'BCCCB', 'BDDDB', 'BDDDB', 'B   B', 'A A A')
                .aisle('A   A', 'ABBBA', 'AB@BA', 'ABBBA', 'ABBBA', 'ABBBA', ' AAA ')
                .where('A', Predicates.blocks('gtceu:treated_wood_frame'))
                .where(' ', Predicates.any())
                .where(
                    'B',
                    Predicates.blocks('kubejs:treatedwood_casing')
                        .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(3).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(6).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setExactLimit(1))
                )
                .where('C', Predicates.blocks('gtceu:steel_pipe_casing'))
                .where('D', Predicates.blocks('kubejs:meshblock'))
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .build()
        )
        .workableCasingModel('kubejs:block/casings/basic/casing_wood', 'gtceu:block/machines/sifter');
});
