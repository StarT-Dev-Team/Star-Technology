declare namespace internal.dev.latvian.mods.kubejs.block {
    import BuilderBase = registry.BuilderBase;
    import ResourceLocation__Wrapper = net.minecraft.resources.ResourceLocation__Wrapper;
    import Consumer__Wrapper = java.util.function_.Consumer__Wrapper;
    import Block = net.minecraft.world.level.block.Block;
    import Property = net.minecraft.world.level.block.state.properties.Property;
    import Direction__Wrapper = net.minecraft.core.Direction__Wrapper;
    import SoundType__Wrapper = net.minecraft.world.level.block.SoundType;

    interface BlockBuilder extends BuilderBase<Block> {
        readonly __dev_latvian_mods_kubejs_block_BlockBuilder: unique symbol;
    }

    class BlockBuilder extends BuilderBase<Block> {
        soundType(soundType: SoundType__Wrapper): this;
        noSoundType(): this;
        woodSoundType(): this;
        stoneSoundType(): this;
        gravelSoundType(): this;
        grassSoundType(): this;
        sandSoundType(): this;
        cropSoundType(): this;
        glassSoundType(): this;
        // mapColor(m: MapColor__Wrapper): this;
        // dynamicMapColor(m: Function__Wrapper<BlockState, MapColor__Wrapper>): this;
        hardness(h: number): this;
        resistance(r: number): this;
        unbreakable(): this;
        lightLevel(light: number): this;
        opaque(o: boolean): this;
        fullBlock(f: boolean): this;
        requiresTool(f: boolean): this;
        requiresTool(): this;
        renderType(l: string): this;
        // color(index: number, color: BlockTintFunction__Wrapper): this;
        // color(color: BlockTintFunction__Wrapper): this;
        textureAll(tex: string): this;
        textureSide(direction: Direction__Wrapper, tex: string): this;
        texture(id: string, tex: string): this;
        model(m: string): this;
        // item(i: Consumer__Wrapper<BlockItemBuilder>): this;
        noItem(): this;
        box(x0: number, y0: number, z0: number, x1: number, y1: number, z1: number, scale16: boolean): this;
        box(x0: number, y0: number, z0: number, x1: number, y1: number, z1: number): this;
        noCollision(): this;
        notSolid(): this;
        setWaterlogged(waterlogged: boolean): this;
        waterlogged(): this;
        noDrops(): this;
        slipperiness(f: number): this;
        speedFactor(f: number): this;
        jumpFactor(f: number): this;
        randomTick(randomTickCallback: Consumer__Wrapper<RandomTickCallbackJS>): this;
        noValidSpawns(b: boolean): this;
        suffocating(b: boolean): this;
        viewBlocking(b: boolean): this;
        redstoneConductor(b: boolean): this;
        transparent(b: boolean): this;
        defaultCutout(): this;
        defaultTranslucent(): this;
        // instrument(i: NoteBlockInstrument__Wrapper): this;
        tag(tag: ResourceLocation__Wrapper): this;
        tagBoth(tag: ResourceLocation__Wrapper): this;
        tagBlock(tag: ResourceLocation__Wrapper): this;
        tagItem(tag: ResourceLocation__Wrapper): this;
        // defaultState(callbackJS: Consumer__Wrapper<BlockStateModifyCallbackJS>): this;
        // placementState(callbackJS: Consumer__Wrapper<BlockStateModifyPlacementCallbackJS>): this;
        // canBeReplaced(callbackJS: Predicate__Wrapper<CanBeReplacedCallbackJS>): this;
        // steppedOn(callbackJS: Consumer__Wrapper<EntitySteppedOnBlockCallbackJS>): this;
        // fallenOn(callbackJS: Consumer__Wrapper<EntityFallenOnBlockCallbackJS>): this;
        bounciness(bounciness: number): this;
        // afterFallenOn(callbackJS: Consumer__Wrapper<AfterEntityFallenOnBlockCallbackJS>): this;
        // exploded(callbackJS: Consumer__Wrapper<BlockExplodedCallbackJS>): this;
        property(property: Property<unknown>): this;
        // rotateState(callbackJS: Consumer__Wrapper<BlockStateRotateCallbackJS>): this;
        // mirrorState(callbackJS: Consumer__Wrapper<BlockStateMirrorCallbackJS>): this;
        rightClick(callbackJS: Consumer__Wrapper<BlockRightClickedEventJS>): this;
        // blockEntity(callback: Consumer__Wrapper<BlockEntityInfo>): this;
        // pickBlock(pickBlockCallback: Consumer__Wrapper<PickBlockCallbackJS>): this;
    }

    import EventJS = event.EventJS;
    import BlockStatePredicate__Wrapper = block.state.BlockStatePredicate__Wrapper;

    interface BlockModificationEventJS extends EventJS {
        readonly __dev_latvian_mods_kubejs_block_BlockModificationEventJS: unique symbol;
    }

    class BlockModificationEventJS extends EventJS {
        modify(predicate: BlockStatePredicate__Wrapper, c: Consumer__Wrapper<Block>): void;
    }

    import BlockContainerJS = level.BlockContainerJS;
    import PlayerEventJS = player.PlayerEventJS;
    import Entity = net.minecraft.world.entity.Entity;

    interface BlockPlacedEventJS extends Omit<PlayerEventJS, 'getEntity' | 'entity'> {
        readonly __dev_latvian_mods_kubejs_block_BlockPlacedEventJS: unique symbol;
    }

    class BlockPlacedEventJS {
        getEntity(): Entity;
        get entity(): Entity;
        getBlock(): BlockContainerJS;
        get block(): BlockContainerJS;
    }

    import ItemStack = net.minecraft.world.item.ItemStack;

    interface BlockRightClickedEventJS extends PlayerEventJS {
        readonly __dev_latvian_mods_kubejs_block_BlockRightClickedEventJS: unique symbol;
    }

    class BlockRightClickedEventJS extends PlayerEventJS {
        getBlock(): BlockContainerJS;
        get block(): BlockContainerJS;
        getItem(): ItemStack;
        get item(): ItemStack;
    }

    interface RandomTickCallbackJS {
        readonly __dev_latvian_mods_kubejs_block_RandomTickCallbackJS: unique symbol;
    }

    class RandomTickCallbackJS {}
}

declare namespace internal.dev.latvian.mods.kubejs.block.custom {
    import Block = net.minecraft.world.level.block.Block;

    class BasicBlockJS extends Block {}

    class BasicBlockJS$Builder extends BlockBuilder {}
}

declare namespace internal.dev.latvian.mods.kubejs.block.state {
    import Predicate = java.util.function_.Predicate;
    import Block = net.minecraft.world.level.block.Block;
    import BlockState = net.minecraft.world.level.block.state.BlockState;
    import TagKey = net.minecraft.tags.TagKey;

    interface BlockStatePredicate extends Predicate<BlockState> {
        readonly __dev_latvian_mods_kubejs_block_state_BlockStatePredicate: unique symbol;
        testBlock(block: Block): boolean;
    }

    interface BlockStatePredicate$Simple extends BlockStatePredicate {
        readonly __dev_latvian_mods_kubejs_block_state_BlockStatePredicate$Simple: unique symbol;
    }

    class BlockStatePredicate$Simple implements BlockStatePredicate {
        static ALL: BlockStatePredicate;
        static NONE: BlockStatePredicate;
    }

    type BlockStatePredicate$Simple__Wrapper = BlockStatePredicate$Simple | EnumKeys<typeof BlockStatePredicate$Simple>;

    type BlockStatePredicate__Wrapper =
        | BlockStatePredicate
        | BlockStatePredicate$Simple
        | null
        | { or: BlockStatePredicate__Wrapper }
        | { not: BlockStatePredicate__Wrapper }
        | Block
        | BlockState
        | TagKey<Block>
        | RegExp
        | string
        | BlockStatePredicate__Wrapper[];
}
