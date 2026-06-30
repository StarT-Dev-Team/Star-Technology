namespace internal.dev.latvian.mods.kubejs.core {
    import ItemStackSet = item.ItemStackSet;
    import Ingredient__Wrapper = net.minecraft.world.item.crafting.Ingredient__Wrapper;
    import Ingredient = net.minecraft.world.item.crafting.Ingredient;

    interface IngredientKJS {
        getStacks(): ItemStackSet;
        get stacks(): ItemStackSet;
        getDisplayStacks(): ItemStackSet;
        get displayStacks(): ItemStackSet;
        subtract(other: Ingredient__Wrapper): Ingredient;
    }
}

namespace internal.net.minecraft.world.item.crafting {
    import IngredientKJS = dev.latvian.mods.kubejs.core.IngredientKJS;

    interface Ingredient extends IngredientKJS {}
}
