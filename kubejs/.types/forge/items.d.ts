declare namespace internal.net.minecraftforge.items {
    interface IItemHandler extends $object<'net.minecraftforge.items.IItemHandler'> {}

    interface IItemHandlerModifiable extends $object<'net.minecraftforge.items.IItemHandlerModifiable'> {}

    interface ItemStackHandler extends $object<
        'net.minecraftforge.items.ItemStackHandler',
        IItemHandler,
        IItemHandlerModifiable
        // INBTSerializable<CompoundTag>
    > {}
}
