module internal.dev.latvian.mods.kubejs.item {
    import EventJS = event.EventJS;
    import Ingredient__Wrapper = net.minecraft.world.item.crafting.Ingredient__Wrapper;
    import ItemStack = net.minecraft.world.item.ItemStack;
    import Component = net.minecraft.network.chat.Component;
    import MutableComponent__Wrapper = net.minecraft.network.chat.MutableComponent__Wrapper;
    import List = java.util.List;

    class ItemTooltipEventJS extends EventJS {
        add(item: Ingredient__Wrapper, text: MutableComponent__Wrapper | MutableComponent__Wrapper[]): void;
        addToAll(text: MutableComponent__Wrapper | MutableComponent__Wrapper[]): void;
        addAdvanced(item: Ingredient__Wrapper, handler: StaticTooltipHandlerFromJS__Wrapper);
    }

    const __StaticTooltipHandlerFromJS: unique symbol;
    interface StaticTooltipHandlerFromJS {
        [__StaticTooltipHandlerFromJS]: 0;
        accept(stack: ItemStack, advanced: boolean, text: List<Component>): void;
    }

    type StaticTooltipHandlerFromJS__Wrapper = StaticTooltipHandlerFromJS | StaticTooltipHandlerFromJS['accept'];
}
