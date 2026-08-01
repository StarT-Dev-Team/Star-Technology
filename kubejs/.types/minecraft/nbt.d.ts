declare namespace internal.net.minecraft.nbt {
    interface Tag extends $object<'net.minecraft.nbt.Tag'> {}

    interface CompoundTag extends $object<'net.minecraft.nbt.CompoundTag', Tag> {
        put(key: string, value: $wrapped<Tag>): Tag;
        get(key: string): Tag;
        getString(key: string): string;
        getInt(key: string): number;
        getFloat(key: string): number;
        getDouble(key: string): number;
    }

    const CompoundTag: $class<CompoundTag> & {};
}
