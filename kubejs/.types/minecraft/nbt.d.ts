namespace internal.net.minecraft.nbt {
    class CompoundTag {
        readonly __net_minecraft_nbt_CompoundTag: unique symbol;
    }

    type CompoundTag__Json = { [P in string]: CompoundTag__Json } | string | boolean | number;
    type CompoundTag__Wrapper = CompoundTag | CompoundTag__Json;
}
