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
                .whereDict({
                    C: P.controller(definition),
                    P: P.anyOf([
                        P.block(GTBlocks.TREATED_WOOD_PLANK.get()),
                        P.ability(PA.itemIn, { max: 2, prev: 1 }),
                        P.ability(PA.itemOut, { max: 2, prev: 1 }),
                    ]),
                    D: P.block('minecraft:farmland'),
                    F: P.gtBlock('gtceu:treated_wood_frame'),
                    W: P.fluid('minecraft:water'),
                    ' ': P.any(),
                })
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
