declare namespace internal.dev.latvian.mods.kubejs.block {
    import BuilderBase__Blueprint = registry.BuilderBase__Blueprint;
    import ResourceLocation = net.minecraft.resources.ResourceLocation;
    import Consumer = java.util.function_.Consumer;
    import Block = net.minecraft.world.level.block.Block;
    import Property = net.minecraft.world.level.block.state.properties.Property;
    import Direction = net.minecraft.core.Direction;
    import SoundType = net.minecraft.world.level.block.SoundType;

    interface BlockBuilder__Blueprint<TSelf> extends $object<
        'dev.latvian.mods.kubejs.block.BlockBuilder',
        Omit<BuilderBase__Blueprint<Block, TSelf>, 'tag'>
    > {
        soundType(soundType: $wrapped<SoundType>): TSelf;
        noSoundType(): TSelf;
        woodSoundType(): TSelf;
        stoneSoundType(): TSelf;
        gravelSoundType(): TSelf;
        grassSoundType(): TSelf;
        sandSoundType(): TSelf;
        cropSoundType(): TSelf;
        glassSoundType(): TSelf;
        // mapColor(m: $wrapped<MapColor>): TSelf;
        // dynamicMapColor(m: $wrapped<Function<BlockState>, $wrapped<MapColor>>): TSelf;
        hardness(h: number): TSelf;
        resistance(r: number): TSelf;
        unbreakable(): TSelf;
        lightLevel(light: number): TSelf;
        opaque(o: boolean): TSelf;
        fullBlock(f: boolean): TSelf;
        requiresTool(f: boolean): TSelf;
        requiresTool(): TSelf;
        renderType(l: string): TSelf;
        // color(index: number, color: $wrapped<BlockTintFunction>): TSelf;
        // color(color: $wrapped<BlockTintFunction>): TSelf;
        textureAll(tex: string): TSelf;
        textureSide(direction: $wrapped<Direction>, tex: string): TSelf;
        texture(id: string, tex: string): TSelf;
        model(m: string): TSelf;
        // item(i: $wrapped<Consumer<BlockItemBuilder>>): TSelf;
        noItem(): TSelf;
        box(x0: number, y0: number, z0: number, x1: number, y1: number, z1: number, scale16: boolean): TSelf;
        box(x0: number, y0: number, z0: number, x1: number, y1: number, z1: number): TSelf;
        noCollision(): TSelf;
        notSolid(): TSelf;
        setWaterlogged(waterlogged: boolean): TSelf;
        waterlogged(): TSelf;
        noDrops(): TSelf;
        slipperiness(f: number): TSelf;
        speedFactor(f: number): TSelf;
        jumpFactor(f: number): TSelf;
        randomTick(randomTickCallback: $wrapped<Consumer<RandomTickCallbackJS>>): TSelf;
        noValidSpawns(b: boolean): TSelf;
        suffocating(b: boolean): TSelf;
        viewBlocking(b: boolean): TSelf;
        redstoneConductor(b: boolean): TSelf;
        transparent(b: boolean): TSelf;
        defaultCutout(): TSelf;
        defaultTranslucent(): TSelf;
        // instrument(i: $wrapped<NoteBlockInstrument>): TSelf;
        tag(tag: $wrapped<ResourceLocation>): TSelf;
        tagBoth(tag: $wrapped<ResourceLocation>): TSelf;
        tagBlock(tag: $wrapped<ResourceLocation>): TSelf;
        tagItem(tag: $wrapped<ResourceLocation>): TSelf;
        // defaultState(callbackJS: $wrapped<Consumer<BlockStateModifyCallbackJS>>): TSelf;
        // placementState(callbackJS: $wrapped<Consumer<BlockStateModifyPlacementCallbackJS>>): TSelf;
        // canBeReplaced(callbackJS: $wrapped<Predicate<CanBeReplacedCallbackJS>>): TSelf;
        // steppedOn(callbackJS: $wrapped<Consumer<EntitySteppedOnBlockCallbackJS>>): TSelf;
        // fallenOn(callbackJS: $wrapped<Consumer<EntityFallenOnBlockCallbackJS>>): TSelf;
        bounciness(bounciness: number): TSelf;
        // afterFallenOn(callbackJS: $wrapped<Consumer<AfterEntityFallenOnBlockCallbackJS>>): TSelf;
        // exploded(callbackJS: $wrapped<Consumer<BlockExplodedCallbackJS>>): TSelf;
        property(property: Property<any>): TSelf;
        // rotateState(callbackJS: $wrapped<Consumer<BlockStateRotateCallbackJS>>): TSelf;
        // mirrorState(callbackJS: $wrapped<Consumer<BlockStateMirrorCallbackJS>>): TSelf;
        rightClick(callbackJS: $wrapped<Consumer<BlockRightClickedEventJS>>): TSelf;
        // blockEntity(callback: $wrapped<Consumer<BlockEntityInfo>>): TSelf;
        // pickBlock(pickBlockCallback: $wrapped<Consumer<PickBlockCallbackJS>>): TSelf;
    }

    interface BlockBuilder extends BlockBuilder__Blueprint<BlockBuilder> {}

    import EventJS = event.EventJS;
    import BlockStatePredicate = block.state.BlockStatePredicate;

    interface BlockModificationEventJS extends $object<
        'dev.latvian.mods.kubejs.block.BlockModificationEventJS',
        EventJS
    > {
        modify(predicate: $wrapped<BlockStatePredicate>, c: $wrapped<Consumer<Block>>): void;
    }

    import BlockContainerJS = level.BlockContainerJS;
    import PlayerEventJS = player.PlayerEventJS;
    import Entity = net.minecraft.world.entity.Entity;

    interface BlockPlacedEventJS extends $object<
        'dev.latvian.mods.kubejs.block.BlockPlacedEventJS',
        Omit<PlayerEventJS, 'getEntity' | 'entity'>
    > {
        getEntity(): Entity;
        get entity(): Entity;
        getBlock(): BlockContainerJS;
        get block(): BlockContainerJS;
    }

    import ItemStack = net.minecraft.world.item.ItemStack;

    interface BlockRightClickedEventJS extends $object<
        'dev.latvian.mods.kubejs.block.BlockRightClickedEventJS',
        PlayerEventJS
    > {
        getBlock(): BlockContainerJS;
        get block(): BlockContainerJS;
        getItem(): ItemStack;
        get item(): ItemStack;
    }

    interface RandomTickCallbackJS extends $object<'dev.latvian.mods.kubejs.block.RandomTickCallbackJS'> {}
}

declare namespace internal.dev.latvian.mods.kubejs.block.custom {
    import Block = net.minecraft.world.level.block.Block;

    interface BasicBlockJS extends $object<'dev.latvian.mods.kubejs.block.custom.BasicBlockJS', Block> {}

    interface BasicBlockJS$Builder extends $object<
        'dev.latvian.mods.kubejs.block.custom.BasicBlockJS$Builder',
        BlockBuilder
    > {}
}

declare namespace internal.dev.latvian.mods.kubejs.block.state {
    import Predicate = java.util.function_.Predicate;
    import Block = net.minecraft.world.level.block.Block;
    import BlockState = net.minecraft.world.level.block.state.BlockState;

    interface BlockStatePredicate extends $object<
        'dev.latvian.mods.kubejs.block.state.BlockStatePredicate',
        Predicate<BlockState>
    > {
        testBlock(block: Block): boolean;
    }

    interface BlockStatePredicate$Simple extends $object<
        {
            name: 'dev.latvian.mods.kubejs.block.state.BlockStatePredicate$Simple';
            enumClass: typeof BlockStatePredicate$Simple;
        },
        BlockStatePredicate
    > {}

    const BlockStatePredicate$Simple: $class<BlockStatePredicate$Simple> & {
        ALL: BlockStatePredicate$Simple;
        NONE: BlockStatePredicate$Simple;
    };
}
declare namespace internal.dev.latvian.mods.kubejs.block.predicate {
    import BlockContainerJS = level.BlockContainerJS;

    interface BlockPredicate extends $object<{
        name: 'dev.latvian.mods.kubejs.block.predicate.BlockPredicate';
        functionalInterface: 'check';
    }> {
        check(block: BlockContainerJS): boolean;
    }

    interface BlockIDPredicate extends $object<
        'dev.latvian.mods.kubejs.block.predicate.BlockIDPredicate',
        BlockPredicate
    > {}
}
