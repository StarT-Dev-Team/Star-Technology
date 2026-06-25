namespace internal.kjs {
    interface LoadableClasses {}
}

const Java: {
    loadClass: { <K extends keyof internal.kjs.LoadableClasses>(name: K): internal.kjs.LoadableClasses[K] };
};

type EnumWrapper<T extends string[]> = T[number] | Lowercase<T[number]>;

// maybe add all the available item types?
type ItemStackWrapperString = '' | '-' | `#${string}` | `@${string}` | `%${string}` | string;
type ItemStackWrapperStringWithCount = `${number}x ${ItemStackWrapperString}`;

type ItemStackWrapper =
    | internal.net.minecraft.world.item.ItemStack
    | internal.net.minecraft.resources.ResourceLocation
    | RegExp
    | ItemStackWrapperStringWithCount;
// dev.latvian.mods.kubejs.item.OutputItem
// net.minecraft.world.item.crafting.Ingredient
// net.minecraft.world.level.ItemLike

const Item: typeof internal.dev.latvian.mods.kubejs.bindings.ItemWrapper;
