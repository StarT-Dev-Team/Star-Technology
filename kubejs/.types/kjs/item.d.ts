declare namespace internal.dev.latvian.mods.kubejs.item {
    import EventJS = event.EventJS;
    import Ingredient__Wrapper = net.minecraft.world.item.crafting.Ingredient__Wrapper;
    import ItemStack = net.minecraft.world.item.ItemStack;
    import Component = net.minecraft.network.chat.Component;
    import MutableComponent__Wrapper = net.minecraft.network.chat.MutableComponent__Wrapper;
    import List = java.util.List;

    class ItemTooltipEventJS extends EventJS {
        add(item: Ingredient__Wrapper, text: MutableComponent__Wrapper | MutableComponent__Wrapper[]): void;
        addToAll(text: MutableComponent__Wrapper | MutableComponent__Wrapper[]): void;
        addAdvanced(item: Ingredient__Wrapper, handler: StaticTooltipHandlerFromJS__Wrapper): void;
    }

    const __StaticTooltipHandlerFromJS: unique symbol;
    interface StaticTooltipHandlerFromJS {
        [__StaticTooltipHandlerFromJS]: 0;
        accept(stack: ItemStack, advanced: boolean, text: List<Component>): void;
    }

    type StaticTooltipHandlerFromJS__Wrapper = StaticTooltipHandlerFromJS | StaticTooltipHandlerFromJS['accept'];

    import Item = net.minecraft.world.item.Item;
    import BuilderBase = registry.BuilderBase;
    import ResourceLocation__Wrapper = net.minecraft.resources.ResourceLocation__Wrapper;
    import Component__Wrapper = net.minecraft.network.chat.Component__Wrapper;
    import UseAnim__Wrapper = net.minecraft.world.item.UseAnim__Wrapper;
    import Consumer__Wrapper = java.util.function_.Consumer__Wrapper;
    import Rarity__Wrapper = net.minecraft.world.item.Rarity__Wrapper;

    class ItemBuilder extends BuilderBase<Item> {
        maxStackSize(maxStackSize: number): this;
        unstackable(): this;
        maxDamage(maxDamage: number): this;
        burnTime(burnTime: number): this;
        containerItem(containerItem: ResourceLocation__Wrapper): this;
        // subtypes(fn: Function<ItemStack, Collection<ItemStack>> )
        rarity(rarity: Rarity__Wrapper): this;
        glow(glow: boolean): this;
        tooltip(tooltip: Component__Wrapper): this;
        // group(@Nullable String g)
        // color(int index, ItemTintFunction color)
        // color(ItemTintFunction callback)
        texture(texture: string): this;
        texture(key: string, texture: string): this;
        textureJson(texture: object): this;
        modelJson(model: object): this;
        parentModel(parentModel: string): this;
        // barColor(Function<ItemStack, Color> barColor)
        // barWidth(ToIntFunction<ItemStack> barWidth)
        // name(NameCallback name)
        food(food: Consumer__Wrapper<FoodBuilder>): this;
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
        removeEffect(mobEffect: MobEffect__Wrapper): this;
        eaten(e: Consumer__Wrapper<FoodEatenEventJS>): this;
    }

    import Entity = net.minecraft.world.entity.Entity;
    import EntityEventJS = entity.EntityEventJS;

    class FoodEatenEventJS extends EntityEventJS {
        getEntity(): Entity;
        get entity(): Entity;
        getItem(): ItemStack;
        get item(): ItemStack;
    }

    import ArmorMaterial = net.minecraft.world.item.ArmorMaterial;

    class MutableArmorTier extends ArmorMaterial {
        setDurabilityMultiplier(durabilityMultiplier: number): this;
        set durabilityMultiplier(durabilityMultiplier: number);
        setSlotProtections(setSlotProtections: number[]): this;
        set slotProtections(setSlotProtections: number[]);
        setEnchantmentValue(enchantmentValue: number): this;
        set enchantmentValue(enchantmentValue: number);
        // setEquipSound(soundEvent: SoundEvent): this;
        // set equipSound(soundEvent: SoundEvent): void;
        // setRepairIngredient(Ingredient: Ingredient): this;
        // set repairIngredient(Ingredient: Ingredient): void;
        setName(name: string): this;
        set name(name: string);
        setToughness(toughness: number): this;
        set toughness(toughness: number);
        setKnockbackResistance(knockbackResistance: number): this;
        set knockbackResistance(knockbackResistance: number);
    }

    import IngredientSupplierKJS = core.IngredientSupplierKJS;

    interface InputItem extends IngredientSupplierKJS {
        readonly __dev_latvian_mods_kubejs_item_InputItem: unique symbol;
    }

    class InputItem implements IngredientSupplierKJS {
        static of(ingredient: Ingredient__Wrapper, count: number): InputItem;
    }

    type InputItem__Wrapper = InputItem | ItemStack | Ingredient__Wrapper;

    interface OutputItem {
        readonly __dev_latvian_mods_kubejs_item_OutputItem: unique symbol;
    }

    class OutputItem {}

    type OutputItem__Wrapper = OutputItem | ItemStack | Ingredient__Wrapper;

    import Iterable = java.util.Iterable;

    interface ItemStackSet extends Iterable<ItemStack> {}
    class ItemStackSet implements Iterable<ItemStack> {}

    import PlayerEventJS = player.PlayerEventJS;

    interface ItemClickedEventJS extends PlayerEventJS {
        readonly __dev_latvian_mods_kubejs_item_ItemClickedEventJS: unique symbol;
    }

    class ItemClickedEventJS extends PlayerEventJS {}
}

declare namespace internal.dev.latvian.mods.kubejs.item.custom {
    import Item = net.minecraft.world.item.Item;

    class BasicItemJS extends Item {}

    class BasicItemJS$Builder extends ItemBuilder {}

    import StartupEventJS = event.StartupEventJS;
    import Consumer__Wrapper = java.util.function_.Consumer__Wrapper;
    import MutableA = java.util.function_.Consumer__Wrapper;
    import ArmorMaterial__Wrapper = net.minecraft.world.item.ArmorMaterial__Wrapper;

    class ItemArmorTierRegistryEventJS extends StartupEventJS {
        add(id: string, parent: string, tier: Consumer__Wrapper<MutableArmorTier>): this;
        add(id: string, tier: Consumer__Wrapper<MutableArmorTier>): this;
    }

    class ArmorItemBuilder extends ItemBuilder {
        tier(tier: ArmorMaterial__Wrapper): this;
        modifyTier(tier: Consumer__Wrapper<MutableArmorTier>): this;
    }

    class ArmorItemBuilder$Helmet extends ArmorItemBuilder {}

    class ArmorItemBuilder$Chestplate extends ArmorItemBuilder {}

    class ArmorItemBuilder$Leggings extends ArmorItemBuilder {}

    class ArmorItemBuilder$Boots extends ArmorItemBuilder {}
}

declare namespace internal.dev.latvian.mods.kubejs.item.creativetab {
    import EventJS = event.EventJS;
    import Ingredient__Wrapper = net.minecraft.world.item.crafting.Ingredient__Wrapper;

    class CreativeTabEvent extends EventJS {
        remove(ingredient: Ingredient__Wrapper): void;
    }
}
