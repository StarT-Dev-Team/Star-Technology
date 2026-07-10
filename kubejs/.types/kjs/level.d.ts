declare namespace internal.dev.latvian.mods.kubejs.level {
    import Level = net.minecraft.world.level.Level;
    import BlockPos = net.minecraft.core.BlockPos;
    import CompoundTag = net.minecraft.nbt.CompoundTag;
    import ItemStack = net.minecraft.world.item.ItemStack;
    import Direction = net.minecraft.core.Direction;

    interface BlockContainerJS extends $object<'dev.latvian.mods.kubejs.level.BlockContainerJS'> {
        get minecraftLevel(): Level;

        getLevel(): Level;
        get level(): Level;
        getPos(): BlockPos;
        get pos(): BlockPos;
        getId(): string;
        get id(): string;
        mergeEntityData(tag: $wrapped<CompoundTag> | null): void;
        popItemFromFace(item: $wrapped<ItemStack>, direction: $wrapped<Direction>): void;
    }

    import EventJS = event.EventJS;
    import MinecraftServer = net.minecraft.server.MinecraftServer;

    interface LevelEventJS extends $object<'dev.latvian.mods.kubejs.level.LevelEventJS', EventJS> {
        getLevel(): Level;
        get level(): Level;
        getServer(): MinecraftServer;
        get server(): MinecraftServer;
    }
}
