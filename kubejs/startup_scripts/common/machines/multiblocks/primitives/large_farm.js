GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('large_farm')
        .category('primitive')
        .setMaxIOSize(1, 2, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('large_farm', 'primitive')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('large_farm')
        .appearanceBlock(GTBlocks.TREATED_WOOD_PLANK)
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle('PPPPP', 'F   F', 'F   F', ' FFF ')
                .aisle('PDDDP', '     ', '     ', 'F   F')
                .aisle('PDWDP', '     ', '     ', 'F   F')
                .aisle('PDDDP', '     ', '     ', 'F   F')
                .aisle('PPCPP', 'F   F', 'F   F', ' FFF ')
                .where('C', Predicates.controller(Predicates.blocks(definition.get())))
                .where(
                    'P',
                    Predicates.blocks(GTBlocks.TREATED_WOOD_PLANK.get())
                        .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                )
                .where('D', Predicates.blocks('minecraft:farmland'))
                .where('F', Predicates.blocks('gtceu:treated_wood_frame'))
                .where('W', Predicates.fluids('minecraft:water'))
                .where(' ', Predicates.any())
                .build()
        )
        .workableCasingModel('gtceu:block/treated_wood_planks', 'gtceu:block/machines/cutter')
        .editableUI(
            global.uiBuilder({
                group: 'primitive',
                name: 'large_farm',
                size: [126, 50],
                background: GuiTextures.PRIMITIVE_BACKGROUND,
                progress: {
                    pos: [40, 16],
                    size: [20, 20],
                    texture: GuiTextures.PROGRESS_BAR_ARROW,
                },
                inputs: [{ type: 'item', index: 0, pos: [12, 16], texture: GuiTextures.PRIMITIVE_SLOT }],
                outputs: [
                    { type: 'item', index: 0, pos: [72, 16], texture: GuiTextures.PRIMITIVE_SLOT },
                    { type: 'item', index: 1, pos: [90, 16], texture: GuiTextures.PRIMITIVE_SLOT },
                ],
            })
        );
});
