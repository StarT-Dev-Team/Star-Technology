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

    import BuilderBase = registry.BuilderBase;
    import ResourceLocation__Wrapper = net.minecraft.resources.ResourceLocation__Wrapper;
    import Component__Wrapper = net.minecraft.network.chat.Component__Wrapper;
    import UseAnim__Wrapper = net.minecraft.world.item.UseAnim__Wrapper;
    import Consumer__Wrapper = java.util.function_.Consumer__Wrapper;
    import Rarity__Wrapper = net.minecraft.world.item.Rarity__Wrapper;

    class ItemBuilder extends BuilderBase<Item> {
        maxStackSize(v: number): this;
        unstackable(): this;
        maxDamage(v: number): this;
        burnTime(v: number): this;
        containerItem(id: ResourceLocation__Wrapper): this;
        // subtypes(fn: Function<ItemStack, Collection<ItemStack>> )
        rarity(v: Rarity__Wrapper): this;
        // glow(boolean v)
        tooltip(text: Component__Wrapper): this;
        // group(@Nullable String g)
        // color(int index, ItemTintFunction color)
        // color(ItemTintFunction callback)
        texture(tex: string): this;
        texture(key: string, tex: string): this;
        // textureJson(JsonObject json)
        // modelJson(JsonObject json)
        // parentModel(String m)
        // barColor(Function<ItemStack, Color> barColor)
        // barWidth(ToIntFunction<ItemStack> barWidth)
        // name(NameCallback name)
        food(b: Consumer__Wrapper<FoodBuilder>): this;
        // fireResistant(boolean isFireResistant)
        // fireResistant()
        // modifyAttribute(ResourceLocation attribute, String identifier, double d, AttributeModifier.Operation operation)
        useAnimation(animation: UseAnim__Wrapper): this;
        // useDuration(ToIntFunction<ItemStack> useDuration)
        // use(UseCallback use)
        // finishUsing(FinishUsingCallback finishUsing)
        // releaseUsing(ReleaseUsingCallback releaseUsing)
        // hurtEnemy(Predicate<HurtEnemyContext> context)
    }

    import MobEffect__Wrapper = net.minecraft.world.effect.MobEffect;

    class FoodBuilder {
        hunger(h: number): this;
        saturation(s: number): this;
        meat(meta: boolean): this;
        meat(): this;
        alwaysEdible(alwaysEdible: boolean): this;
        alwaysEdible(): this;
        fastToEat(fastToEat: boolean): this;
        fastToEat(): this;
        effect(mobEffectId: ResourceLocation__Wrapper, duration: number, amplifier: number, probability: number): this;
        removeEffect(mobEffect: MobEffect): this;
        eaten(e: Consumer__Wrapper<FoodEatenEventJS>): this;
    }

    import ItemStack = net.minecraft.world.item.ItemStack;
    import EntityEventJS = entity.EntityEventJS;

    class FoodEatenEventJS extends EntityEventJS {
        getEntity(): Entity;
        get entity(): Entity;
        getItem(): ItemStack;
        get item(): ItemStack;
    }
}

module internal.dev.latvian.mods.kubejs.item.custom {
    import Item = net.minecraft.world.item.Item;

    class BasicItemJS extends Item {}

    class BasicItemJS$Builder extends ItemBuilder {}
}
