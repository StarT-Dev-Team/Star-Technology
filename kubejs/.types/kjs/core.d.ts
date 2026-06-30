namespace internal.dev.latvian.mods.kubejs.core {
    import ItemStackSet = item.ItemStackSet;

    interface IngredientKJS {
        getStacks(): ItemStackSet;
        get stacks(): ItemStackSet;
        getDisplayStacks(): ItemStackSet;
        get displayStacks(): ItemStackSet;
    }
}

namespace internal.net.minecraft.world.item.crafting {
    import IngredientKJS = dev.latvian.mods.kubejs.core.IngredientKJS;

    interface Ingredient extends IngredientKJS {}
}
