declare namespace internal.dev.latvian.mods.kubejs.bindings {
    import Component = internal.net.minecraft.network.chat.Component;
    import MutableComponent = internal.net.minecraft.network.chat.MutableComponent;

    class TextWrapper {
        static of(o: any): MutableComponent;
        static ofString(s: string): MutableComponent;
        static isEmpty(component: Component): boolean;
        static empty(): MutableComponent;
        static join(...texts: Component[]): MutableComponent;
        static join(texts: Component[]): MutableComponent;
        static string(text: string): MutableComponent;
        static literal(text: string): MutableComponent;
        static translate(key: string): MutableComponent;
        static translate(key: string, ...objects: any[]): MutableComponent;
        static translate(key: string, objects: any[]): MutableComponent;
        static translatable(key: string): MutableComponent;
        static translatable(key: string, ...objects: any[]): MutableComponent;
        static translatable(key: string, objects: any[]): MutableComponent;
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
    import CompoundTag = net.minecraft.nbt.CompoundTag;

    const ItemWrapper: {
        of(in_: $wrapped<ItemStack>): ItemStack;
        of(in_: $wrapped<ItemStack>, count: number): ItemStack;
        of(in_: $wrapped<ItemStack>, tag: $wrapped<CompoundTag>): ItemStack;
        of(in_: $wrapped<ItemStack>, count: number, tag: $wrapped<CompoundTag>): ItemStack;
        withNBT(in_: $wrapped<ItemStack>, nbt: $wrapped<CompoundTag>): ItemStack;
        getList(): ItemStack[];
    };

    import Ingredient = net.minecraft.world.item.crafting.Ingredient;
    import InputItem = item.InputItem;

    const IngredientWrapper: {
        none: Ingredient;
        all: Ingredient;
        of(ingredient: $wrapped<Ingredient>): Ingredient;
        of(ingredient: $wrapped<Ingredient>, count: number): InputItem;
    };

    import FluidStackJS = fluid.FluidStackJS;

    const FluidWrapper: {
        of(o_: $wrapped<FluidStackJS>): FluidStackJS;
        of(o_: $wrapped<FluidStackJS>, amount: number): FluidStackJS;
        of(o_: $wrapped<FluidStackJS>, nbt: $wrapped<CompoundTag>): FluidStackJS;
        of(o_: $wrapped<FluidStackJS>, amount: $wrapped<CompoundTag>, nbt: $wrapped<CompoundTag>): FluidStackJS;
    };
}
