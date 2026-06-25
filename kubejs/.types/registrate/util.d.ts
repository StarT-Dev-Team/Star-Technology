declare namespace internal.com.tterrag.registrate.util.entry {
    import Block = internal.net.minecraft.world.level.block.Block;

    class RegistryEntry<T> implements internal.java.util.function_.Suppler<T> {
        get(): T;
    }

    class ItemProviderEntry<T extends ItemLike> extends RegistryEntry<T> {}

    class BlockEntry<T extends Block> extends ItemProviderEntry<T> {}
}
