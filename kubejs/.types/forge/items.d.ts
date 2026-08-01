declare namespace internal.net.minecraftforge.items {
    import ItemStack = net.minecraft.world.item.ItemStack;

    interface IItemHandler extends $object<'net.minecraftforge.items.IItemHandler'> {
        getSlots(): number;
        get slots(): number;
        getStackInSlot(slot: number): ItemStack;
        insertItem(slot: number, itemStack: $wrapped<ItemStack>, simulate: boolean): ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): ItemStack;
        getSlotLimit(slot: number): number;
        isItemValid(slot: number, itemStack: $wrapped<ItemStack>): boolean;
    }

    interface IItemHandlerModifiable extends $object<'net.minecraftforge.items.IItemHandlerModifiable', IItemHandler> {
        setStackInSlot(slot: number, stack: $wrapped<ItemStack>): void;
    }

    interface ItemStackHandler extends $object<
        'net.minecraftforge.items.ItemStackHandler',
        IItemHandler,
        IItemHandlerModifiable
        // INBTSerializable<CompoundTag>
    > {}
}
