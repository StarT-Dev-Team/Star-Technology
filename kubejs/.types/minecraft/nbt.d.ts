declare namespace internal.net.minecraft.nbt {
    interface Tag extends $object<'net.minecraft.nbt.Tag'> {}

    interface CompoundTag extends $object<'net.minecraft.nbt.CompoundTag', Tag> {}

    const CompoundTag: $class<CompoundTag> & {};
}
