declare namespace internal.dev.latvian.mods.kubejs.bindings {
    import Component = internal.net.minecraft.network.chat.Component;
    import MutableComponent = internal.net.minecraft.network.chat.MutableComponent;

    class TextWrapper {
        static of(o: any): MutableComponent;
        static ofString(s: string): MutableComponent;
        static isEmpty(component: Component): boolean;
        static empty(): MutableComponent;
        static join(...texts: Component[]): MutableComponent;
        static string(text: string): MutableComponent;
        static literal(text: string): MutableComponent;
        static translate(key: string): MutableComponent;
        static translate(key: string, ...objects: any[]): MutableComponent;
        static translatable(key: string): MutableComponent;
        static translatable(key: string, ...objects: any[]): MutableComponent;
        static keybind(keybind: string): MutableComponent;
        static score(selector: string, objective: string): MutableComponent;
        static selector(selector: string): MutableComponent;
        static selector(selector: string, separator: Component): MutableComponent;
        static black(text: any): MutableComponent;
        static darkBlue(text: any): MutableComponent;
        static darkGreen(text: any): MutableComponent;
        static darkAqua(text: any): MutableComponent;
        static darkRed(text: any): MutableComponent;
        static darkPurple(text: any): MutableComponent;
        static gold(text: any): MutableComponent;
        static gray(text: any): MutableComponent;
        static darkGray(text: any): MutableComponent;
        static blue(text: any): MutableComponent;
        static green(text: any): MutableComponent;
        static aqua(text: any): MutableComponent;
        static red(text: any): MutableComponent;
        static lightPurple(text: any): MutableComponent;
        static yellow(text: any): MutableComponent;
        static white(text: any): MutableComponent;
    }

    import ItemStack = net.minecraft.world.item.ItemStack;
    import ItemStack__Wrapper = net.minecraft.world.item.ItemStack__Wrapper;
    import CompoundTag = net.minecraft.nbt.CompoundTag;

    const ItemWrapper: {
        of(in_: ItemStack__Wrapper): ItemStack;
        of(in_: ItemStack__Wrapper, count: number): ItemStack;
        of(in_: ItemStack__Wrapper, tag: CompoundTag): ItemStack;
        of(in_: ItemStack__Wrapper, count: number, tag: CompoundTag): ItemStack;
        withNBT(in_: ItemStack__Wrapper, nbt: CompoundTag): ItemStack;
        getList(): ItemStack[];
    };
}
