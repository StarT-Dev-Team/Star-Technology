namespace internal.com.tterrag.registrate.util.entry {
    import Block = net.minecraft.world.level.block.Block;
    import Supplier = java.util.function_.Supplier;

    interface RegistryEntry<T> extends Supplier<T> {
        getUnchecked(): T | null;
        is(entry: T): boolean;
    }

    class RegistryEntry<T> implements Supplier<T> {}

    class ItemProviderEntry<T extends ItemLike> extends RegistryEntry<T> {}

    class BlockEntry<T extends Block> extends ItemProviderEntry<T> {}
}
