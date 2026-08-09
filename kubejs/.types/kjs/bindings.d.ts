declare namespace internal.dev.latvian.mods.kubejs.bindings {
    import Component = internal.net.minecraft.network.chat.Component;
    import MutableComponent = internal.net.minecraft.network.chat.MutableComponent;

    const TextWrapper: {
        of(o: any): MutableComponent;
        ofString(s: string): MutableComponent;
        isEmpty(component: Component): boolean;
        empty(): MutableComponent;
        join(...texts: Component[]): MutableComponent;
        join(texts: Component[]): MutableComponent;
        string(text: string): MutableComponent;
        literal(text: string): MutableComponent;
        translate(key: string): MutableComponent;
        translate(key: string, ...objects: any[]): MutableComponent;
        translate(key: string, objects: any[]): MutableComponent;
        translatable(key: string): MutableComponent;
        translatable(key: string, ...objects: any[]): MutableComponent;
        translatable(key: string, objects: any[]): MutableComponent;
        keybind(keybind: string): MutableComponent;
        score(selector: string, objective: string): MutableComponent;
        selector(selector: string): MutableComponent;
        selector(selector: string, separator: Component): MutableComponent;
        black(text: any): MutableComponent;
        darkBlue(text: any): MutableComponent;
        darkGreen(text: any): MutableComponent;
        darkAqua(text: any): MutableComponent;
        darkRed(text: any): MutableComponent;
        darkPurple(text: any): MutableComponent;
        gold(text: any): MutableComponent;
        gray(text: any): MutableComponent;
        darkGray(text: any): MutableComponent;
        blue(text: any): MutableComponent;
        green(text: any): MutableComponent;
        aqua(text: any): MutableComponent;
        red(text: any): MutableComponent;
        lightPurple(text: any): MutableComponent;
        yellow(text: any): MutableComponent;
        white(text: any): MutableComponent;
    };

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

    interface UtilsWrapper extends $object<'dev.latvian.mods.kubejs.bindings.UtilsWrapper'> {}

    import ResourceLocation = net.minecraft.resources.ResourceLocation;
    import MinecraftServer = net.minecraft.server.MinecraftServer;

    const UtilsWrapper: $class<UtilsWrapper> & {
        getRegistryIds(id: $wrapped<ResourceLocation>): ResourceLocation[];
        getServer(): MinecraftServer;
        get server(): MinecraftServer;
    };
}
