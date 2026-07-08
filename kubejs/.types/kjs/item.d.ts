declare namespace internal.dev.latvian.mods.kubejs.item {
    import EventJS = event.EventJS;
    import Ingredient = net.minecraft.world.item.crafting.Ingredient;
    import ItemStack = net.minecraft.world.item.ItemStack;
    import Component = net.minecraft.network.chat.Component;
    import MutableComponent = net.minecraft.network.chat.MutableComponent;
    import List = java.util.List;

    interface ItemTooltipEventJS extends $object<'dev.latvian.mods.kubejs.item.ItemTooltipEventJS', EventJS> {
        add(item: $wrapped<Ingredient>, text: $wrapped<MutableComponent> | $wrapped<MutableComponent>[]): void;
        addToAll(text: $wrapped<MutableComponent> | $wrapped<MutableComponent>[]): void;
        addAdvanced(item: $wrapped<Ingredient>, handler: $wrapped<StaticTooltipHandlerFromJS>): void;
    }

    interface StaticTooltipHandlerFromJS extends $object<{
        name: 'dev.latvian.mods.kubejs.item.StaticTooltipHandlerFromJS';
        functionalInterface: 'accept';
    }> {
        accept(stack: ItemStack, advanced: boolean, text: List<Component>): void;
    }

    import Item = net.minecraft.world.item.Item;
    import BuilderBase__Blueprint = registry.BuilderBase__Blueprint;
    import ResourceLocation = net.minecraft.resources.ResourceLocation;
    import UseAnim = net.minecraft.world.item.UseAnim;
    import Consumer = java.util.function_.Consumer;
    import Rarity = net.minecraft.world.item.Rarity;

    interface ItemBuilder extends $object<
        'dev.latvian.mods.kubejs.item.ItemBuilder',
        BuilderBase__Blueprint<Item, ItemBuilder>
    > {
        maxStackSize(maxStackSize: number): this;
        unstackable(): this;
        maxDamage(maxDamage: number): this;
        burnTime(burnTime: number): this;
        containerItem(containerItem: $wrapped<ResourceLocation>): this;
        // subtypes(fn: Function<ItemStack, Collection<ItemStack>> )
        rarity(rarity: $wrapped<Rarity>): this;
        glow(glow: boolean): this;
        tooltip(tooltip: $wrapped<Component>): this;
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
        food(food: $wrapped<Consumer<FoodBuilder>>): this;
        // fireResistant(boolean isFireResistant)
        // fireResistant()
        // modifyAttribute(ResourceLocation attribute, String identifier, double d, AttributeModifier.Operation operation)
        useAnimation(animation: $wrapped<UseAnim>): this;
        // useDuration(ToIntFunction<ItemStack> useDuration)
        // use(UseCallback use)
        // finishUsing(FinishUsingCallback finishUsing)
        // releaseUsing(ReleaseUsingCallback releaseUsing)
        // hurtEnemy(Predicate<HurtEnemyContext> context)
    }

    import MobEffect = net.minecraft.world.effect.MobEffect;

    class FoodBuilder {
        hunger(h: number): this;
        saturation(s: number): this;
        meat(meta: boolean): this;
        meat(): this;
        alwaysEdible(alwaysEdible: boolean): this;
        alwaysEdible(): this;
        fastToEat(fastToEat: boolean): this;
        fastToEat(): this;
        effect(mobEffectId: $wrapped<ResourceLocation>, duration: number, amplifier: number, probability: number): this;
        removeEffect(mobEffect: $wrapped<MobEffect>): this;
        eaten(e: $wrapped<Consumer<FoodEatenEventJS>>): this;
    }

    import Entity = net.minecraft.world.entity.Entity;
    import EntityEventJS = entity.EntityEventJS;

    interface FoodEatenEventJS extends $object<'dev.latvian.mods.kubejs.item.FoodEatenEventJS', EntityEventJS> {
        getEntity(): Entity;
        get entity(): Entity;
        getItem(): ItemStack;
        get item(): ItemStack;
    }

    import ArmorMaterial = net.minecraft.world.item.ArmorMaterial;
    import SoundEvent = net.minecraft.sounds.SoundEvent;

    interface MutableArmorTier extends $object<'dev.latvian.mods.kubejs.item.MutableArmorTier', ArmorMaterial> {
        setDurabilityMultiplier(durabilityMultiplier: number): this;
        set durabilityMultiplier(durabilityMultiplier: number);
        setSlotProtections(setSlotProtections: number[]): this;
        set slotProtections(setSlotProtections: number[]);
        setEnchantmentValue(enchantmentValue: number): this;
        set enchantmentValue(enchantmentValue: number);
        setEquipSound(soundEvent: $wrapped<SoundEvent>): this;
        set equipSound(soundEvent: $wrapped<SoundEvent>);
        setRepairIngredient(Ingredient: $wrapped<Ingredient>): this;
        set repairIngredient(Ingredient: $wrapped<Ingredient>);
        setName(name: string): this;
        set name(name: string);
        setToughness(toughness: number): this;
        set toughness(toughness: number);
        setKnockbackResistance(knockbackResistance: number): this;
        set knockbackResistance(knockbackResistance: number);
    }

    import IngredientSupplierKJS = core.IngredientSupplierKJS;

    interface InputItem extends $object<'dev.latvian.mods.kubejs.item.InputItem', IngredientSupplierKJS> {}

    const InputItem: $class<InputItem> & {
        of(ingredient: $wrapped<Ingredient>, count: number): InputItem;
    };

    interface OutputItem extends $object<'dev.latvian.mods.kubejs.item.OutputItem'> {}

    import Iterable = java.lang.Iterable;

    interface ItemStackSet extends Iterable<ItemStack> {}
    class ItemStackSet implements Iterable<ItemStack> {}

    import PlayerEventJS = player.PlayerEventJS;

    interface ItemClickedEventJS extends $object<'dev.latvian.mods.kubejs.item.ItemClickedEventJS', PlayerEventJS> {}

    type test = [ItemClickedEventJS['exit']];
}

declare namespace internal.dev.latvian.mods.kubejs.item.custom {
    import Item = net.minecraft.world.item.Item;

    interface BasicItemJS extends $object<'dev.latvian.mods.kubejs.item.custom.BasicItemJS', Item> {}

    interface BasicItemJS$Builder extends $object<
        'dev.latvian.mods.kubejs.item.custom.BasicItemJS$Builder',
        ItemBuilder
    > {}

    import StartupEventJS = event.StartupEventJS;
    import Consumer = java.util.function_.Consumer;
    import ArmorMaterial = net.minecraft.world.item.ArmorMaterial;

    interface ItemArmorTierRegistryEventJS extends $object<
        'dev.latvian.mods.kubejs.item.custom.ItemArmorTierRegistryEventJS',
        StartupEventJS
    > {
        add(id: string, parent: string, tier: $wrapped<Consumer<MutableArmorTier>>): this;
        add(id: string, tier: $wrapped<Consumer<MutableArmorTier>>): this;
    }

    interface ArmorItemBuilder extends $object<'dev.latvian.mods.kubejs.item.custom.ArmorItemBuilder', ItemBuilder> {
        tier(tier: $wrapped<ArmorMaterial>): this;
        modifyTier(tier: $wrapped<Consumer<MutableArmorTier>>): this;
    }

    interface ArmorItemBuilder$Helmet extends $object<
        'dev.latvian.mods.kubejs.item.custom.ArmorItemBuilder$Helmet',
        ArmorItemBuilder
    > {}

    interface ArmorItemBuilder$Chestplate extends $object<
        'ArmorItemBuilder$dev.latvian.mods.kubejs.item.custom.Chestplate',
        ArmorItemBuilder
    > {}

    interface ArmorItemBuilder$Leggings extends $object<
        'ArmorItemBuilderdev.latvian.mods.kubejs.item.custom.$Leggings',
        ArmorItemBuilder
    > {}

    interface ArmorItemBuilder$Boots extends $object<
        'dev.latvian.mods.kubejs.item.custom.ArmorItemBuilder$Boots',
        ArmorItemBuilder
    > {}
}

declare namespace internal.dev.latvian.mods.kubejs.item.creativetab {
    import EventJS = event.EventJS;
    import Ingredient = net.minecraft.world.item.crafting.Ingredient;

    interface CreativeTabEvent extends $object<'dev.latvian.mods.kubejs.item.creativetab.CreativeTabEvent', EventJS> {
        remove(ingredient: $wrapped<Ingredient>): void;
    }
}
