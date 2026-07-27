declare namespace internal.com.tterrag.registrate.util.entry {
    import Block = net.minecraft.world.level.block.Block;
    import Supplier = java.util.function_.Supplier;
    import ItemLike = net.minecraft.world.level.ItemLike;

    interface RegistryEntry<T> extends $object<'com.tterrag.registrate.util.entry.RegistryEntry', Supplier<T>> {
        getUnchecked(): T | null;
        is(entry: T): boolean;
    }

    interface ItemProviderEntry<T extends ItemLike> extends $object<
        'com.tterrag.registrate.util.entry.ItemProviderEntry',
        RegistryEntry<T>
    > {}

    interface BlockEntry<T extends Block> extends $object<
        'com.tterrag.registrate.util.entry.BlockEntry',
        ItemProviderEntry<T>
    > {}
}
