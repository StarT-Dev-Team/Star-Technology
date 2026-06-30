namespace internal.dev.latvian.mods.kubejs.level {
    import Level = net.minecraft.world.level.Level;
    import BlockPos = net.minecraft.core.BlockPos;
    import CompoundTag__Wrapper = net.minecraft.nbt.CompoundTag__Wrapper;

    class BlockContainerJS {
        readonly __dev_latvian_mods_kubejs_level_BlockContainerJS: unique symbol;

        get minecraftLevel(): Level;

        getLevel(): Level;
        get level(): Level;
        getPos(): BlockPos;
        get pos(): BlockPos;
        getId(): string;
        get id(): string;
        mergeEntityData(tag: CompoundTag__Wrapper | null): void;
    }
}
