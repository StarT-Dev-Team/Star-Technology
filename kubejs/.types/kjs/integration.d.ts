namespace internal.dev.latvian.mods.kubejs.integration.forge.jei {
    import EventJS = event.EventJS;
    import Ingredient__Wrapper = net.minecraft.world.item.crafting.Ingredient__Wrapper;
    import FluidStackJS__Wrapper = fluid.FluidStackJS__Wrapper;

    class InformationJEIEventJS extends EventJS {
        addItem(item: Ingredient__Wrapper, s: Component[]): void;
        addFluid(fluid: FluidStackJS__Wrapper, s: Component[]): void;
        addForType(type: IIngredientType<T>, o: Object, s: Component[]): void;
    }

    class HideJEIEventJS<T, E> extends EventJS {
        getAllIngredients(): T[];
        hideAll(): void;
        hide(o: E): void;
    }
}
