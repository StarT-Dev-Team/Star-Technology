declare namespace internal.dev.latvian.mods.kubejs.integration.forge.jei {
    import EventJS = event.EventJS;
    import Ingredient = net.minecraft.world.item.crafting.Ingredient;
    import Component = net.minecraft.network.chat.Component;
    import FluidStackJS = fluid.FluidStackJS;

    interface InformationJEIEventJS extends $object<
        'dev.latvian.mods.kubejs.integration.forge.jei.InformationJEIEventJS',
        EventJS
    > {
        addItem(item: $wrapped<Ingredient>, s: $wrapped<Component>[]): void;
        addFluid(fluid: $wrapped<FluidStackJS>, s: $wrapped<Component>[]): void;
        // addForType(type: IIngredientType<T>, o: Object, s: $wrapped<Component>[]): void;
    }

    interface HideJEIEventJS<T, E> extends $object<
        'dev.latvian.mods.kubejs.integration.forge.jei.HideJEIEventJS',
        EventJS
    > {
        getAllIngredients(): T[];
        hideAll(): void;
        hide(o: E): void;
    }
}
