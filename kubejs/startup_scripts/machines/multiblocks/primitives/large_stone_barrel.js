GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    event
        .create('large_stone_barrel')
        .category('primitive')
        .setMaxIOSize(2, 1, 2, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_BATH, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH);
});

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('large_stone_barrel', 'primitive')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('large_stone_barrel')
        .appearanceBlock(GTBlocks.TREATED_WOOD_PLANK)
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle('DDD', 'PPP', 'PPP', 'PPP')
                .aisle('DDD', 'P P', 'P P', 'P P')
                .aisle('DDD', 'PCP', 'PPP', 'PPP')
                .whereDict({
                    C: P.controller(definition),
                    P: P.anyOf([
                        P.block('minecraft:stone'),
                        P.ability(PA.itemIn, { max: 2, view: 1 }),
                        P.ability(PA.itemOut, { max: 2, view: 1 }),
                        P.ability(PA.fluidIn, { max: 2, view: 1 }),
                        P.ability(PA.fluidOut, { max: 2, view: 1 }),
                    ]),
                    D: P.block('minecraft:stone_bricks'),
                    ' ': P.air(),
                })
                .build()
        )
        .workableCasingModel('minecraft:block/stone', 'kubejs:block/multiblock/primitive_blast_furnace')
        .editableUI(
            global.uiBuilder({
                group: 'primitive',
                name: 'large_stone_barrel',
                size: [166, 76],
                background: GuiTextures.PRIMITIVE_BACKGROUND,
                progress: {
                    pos: [74, 29],
                    size: [20, 20],
                    texture: GuiTextures.PROGRESS_BAR_BATH,
                },
                inputs: [
                    { type: 'item', index: 0, pos: [42, 20], texture: GuiTextures.PRIMITIVE_SLOT },
                    { type: 'item', index: 1, pos: [42, 38], texture: GuiTextures.PRIMITIVE_SLOT },
                    {
                        type: 'fluid',
                        index: 0,
                        pos: [24, 20],
                        texture: new GuiTextureGroup(
                            GuiTextures.PRIMITIVE_SLOT,
                            GuiTextures.PRIMITIVE_LARGE_FLUID_TANK_OVERLAY.getSubTexture(0, 0.04, 1, 0.22)
                        ),
                    },
                    {
                        type: 'fluid',
                        index: 1,
                        pos: [24, 38],
                        texture: new GuiTextureGroup(
                            GuiTextures.PRIMITIVE_SLOT,
                            GuiTextures.PRIMITIVE_LARGE_FLUID_TANK_OVERLAY.getSubTexture(0, 0.04, 1, 0.22)
                        ),
                    },
                ],
                outputs: [
                    { type: 'item', index: 0, pos: [114, 20], texture: GuiTextures.PRIMITIVE_SLOT },
                    {
                        type: 'fluid',
                        index: 0,
                        pos: [114, 38],
                        texture: new GuiTextureGroup(
                            GuiTextures.PRIMITIVE_SLOT,
                            GuiTextures.PRIMITIVE_LARGE_FLUID_TANK_OVERLAY.getSubTexture(0, 0.04, 1, 0.22)
                        ),
                    },
                ],
            })
        );
});
