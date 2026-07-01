declare namespace internal.dev.latvian.mods.kubejs.level {
    import Level = net.minecraft.world.level.Level;
    import BlockPos = net.minecraft.core.BlockPos;
    import CompoundTag__Wrapper = net.minecraft.nbt.CompoundTag__Wrapper;
    import ItemStack__Wrapper = net.minecraft.world.item.ItemStack__Wrapper;
    import Direction__Wrapper = net.minecraft.core.Direction__Wrapper;

    interface BlockContainerJS {
        readonly __dev_latvian_mods_kubejs_level_BlockContainerJS: unique symbol;
    }

    class BlockContainerJS {
        get minecraftLevel(): Level;

        getLevel(): Level;
        get level(): Level;
        getPos(): BlockPos;
        get pos(): BlockPos;
        getId(): string;
        get id(): string;
        mergeEntityData(tag: CompoundTag__Wrapper | null): void;
        popItemFromFace(item: ItemStack__Wrapper, direction: Direction__Wrapper): void;
    }

    import EventJS = event.EventJS;
    import MinecraftServer = net.minecraft.server.MinecraftServer;

    interface LevelEventJS extends EventJS {
        readonly __dev_latvian_mods_kubejs_level_LevelEventJS: unique symbol;
    }

    abstract class LevelEventJS extends EventJS {
        getLevel(): Level;
        get level(): Level;
        getServer(): MinecraftServer;
        get server(): MinecraftServer;
    }
}
