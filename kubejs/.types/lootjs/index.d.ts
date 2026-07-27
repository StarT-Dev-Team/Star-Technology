declare namespace internal.com.almostreliable.lootjs.core {
    interface LootEntry extends $object<'com.almostreliable.lootjs.core.LootEntry'> {}
}

declare namespace internal.com.almostreliable.lootjs.loot {
    interface LootFunctionsContainer<
        B extends LootFunctionsContainer<any>,
    > extends $object<'com.almostreliable.lootjs.loot.LootFunctionsContainer'> {
        // enchantRandomly(): B;
        // enchantRandomly(Enchantment[] enchantments): B;
        // enchantWithLevels(NumberProvider numberProvider): B;
        // enchantWithLevels(NumberProvider numberProvider, boolean allowTreasure): B;
        // applyLootingBonus(NumberProvider numberProvider): B;
        // applyBinomialDistributionBonus(Enchantment enchantment, float probability, int n): B;
        // applyOreBonus(Enchantment enchantment): B;
        // applyBonus(Enchantment enchantment, int multiplier): B;
        // simulateExplosionDecay(): B;
        // smeltLoot(): B;
        // damage(NumberProvider numberProvider): B;
        // addPotion(Potion potion): B;
        // addAttributes(Consumer<AddAttributesFunction.Builder> action): B;
        // limitCount(@Nullable NumberProvider numberProviderMin, @Nullable NumberProvider numberProviderMax): B;
        // limitCount(NumberProvider numberProvider): B;
        // addLore(Component... components): B;
        // replaceLore(Component... components): B;
        // setName(Component component): B;
        // addNBT(CompoundTag tag): B;
        // addNbt(CompoundTag tag): B;
        // customFunction(JsonObject json): B;
        // functions(ItemFilter filter, Consumer<LootFunctionsContainer<F>> action): B;
        // addFunction(LootItemFunction.Builder builder): B;
    }

    import LootEntry = core.LootEntry;

    interface LootActionsContainer<
        B extends LootActionsContainer<any>,
    > extends $object<'com.almostreliable.lootjs.loot.LootActionsContainer'> {
        addLoot(...entries: $wrapped<LootEntry>[]): B;
        // addAlternativesLoot(LootEntry... entries): B;
        // addSequenceLoot(LootEntry... entries): B;
        // addWeightedLoot(NumberProvider numberProvider, boolean allowDuplicateLoot, LootEntry[] poolEntries): B;
        // addWeightedLoot(NumberProvider numberProvider, LootEntry[] poolEntries): B;
        // addWeightedLoot(LootEntry[] poolEntries): B;
        // removeLoot(ItemFilter filter): B;
        // replaceLoot(ItemFilter filter, LootEntry lootEntry): B;
        // replaceLoot(ItemFilter filter, LootEntry lootEntry, boolean preserveCount): B;
        // modifyLoot(ItemFilter filter, ModifyLootAction.Callback callback): B;
        // triggerExplosion(float radius, boolean destroy, boolean fire): B;
        // triggerExplosion(float radius, Explosion.BlockInteraction mode, boolean fire): B;
        // triggerLightningStrike(boolean shouldDamage): B;
        // dropExperience(int amount): B;
    }
}
declare namespace internal.com.almostreliable.lootjs.kube {
    import EventJS = dev.latvian.mods.kubejs.event.EventJS;
    import ResourceLocationFilter = builder.ResourceLocationFilter;
    import LootActionsBuilderJS = builder.LootActionsBuilderJS;

    interface LootModificationEventJS extends $object<
        'com.almostreliable.lootjs.kube.LootModificationEventJS',
        EventJS
    > {
        enableLogging(): void;
        disableLootModification(...filters: $wrapped<ResourceLocationFilter>[]): void;
        addLootTableModifier(...filters: $wrapped<ResourceLocationFilter>[]): LootActionsBuilderJS;
        // addLootTypeModifier(LootContextType... types): LootActionsBuilderJS;
        // addBlockLootModifier(Object o): LootActionsBuilderJS;
        // addEntityLootModifier(EntityType<?>... entities): LootActionsBuilderJS;
        disableWitherStarDrop(): void;
        disableCreeperHeadDrop(): void;
        disableSkeletonHeadDrop(): void;
        disableZombieHeadDrop(): void;
    }

    interface LootConditionsContainer<
        B extends LootConditionsContainer<any>,
    > extends $object<'com.almostreliable.lootjs.kube.LootConditionsContainer'> {
        // matchLoot(ItemFilter filter): B;
        // matchLoot(ItemFilter filter, boolean exact): B;
        // matchMainHand(ItemFilter filter): B;
        // matchOffHand(ItemFilter filter): B;
        // matchEquip(EquipmentSlot slot, ItemFilter filter): B;
        // survivesExplosion(): B;
        // timeCheck(long period, int min, int max): B;
        // timeCheck(int min, int max): B;
        // weatherCheck(Map<String, Boolean> map): B;
        randomChance(value: number): B;
        randomChanceWithLooting(value: number, looting: number): B;
        // randomChanceWithEnchantment(@Nullable Enchantment enchantment, float[] chances): B;
        // randomTableBonus(Enchantment enchantment, float[] chances): B;
        // biome(Resolver... resolvers): B;
        // anyBiome(Resolver... resolvers): B;
        // anyDimension(ResourceLocation... dimensions): B;
        // anyStructure(String[] idOrTags, boolean exact): B;
        // lightLevel(int min, int max): B;
        // killedByPlayer(): B;
        // matchBlockState(Block block, Map<String, String> propertyMap): B;
        // matchFluid(Resolver resolver): B;
        // matchEntity(Consumer<EntityPredicateBuilderJS> action): B;
        // matchKiller(Consumer<EntityPredicateBuilderJS> action): B;
        // matchDirectKiller(Consumer<EntityPredicateBuilderJS> action): B;
        // matchPlayer(Consumer<EntityPredicateBuilderJS> action): B;
        // matchDamageSource(Consumer<DamageSourcePredicateBuilderJS> action): B;
        // distanceToKiller(MinMaxBounds.Doubles bounds): B;
        // customDistanceToPlayer(Consumer<DistancePredicateBuilder> action): B;
        // playerPredicate(Predicate<ServerPlayer> predicate): B;
        // entityPredicate(Predicate<Entity> predicate): B;
        // killerPredicate(Predicate<Entity> predicate): B;
        // directKillerPredicate(Predicate<Entity> predicate): B;
        // blockEntityPredicate(Predicate<BlockEntity> predicate): B;
        // hasAnyStage(String... stages): B;
        // not(Consumer<LootConditionsContainer<B>> action): B;
        // or(Consumer<LootConditionsContainer<B>> action): B;
        // and(Consumer<LootConditionsContainer<B>> action): B;
        // customCondition(JsonObject json): B;
        // addCondition(LootItemCondition.Builder builder): B;
    }
}

declare namespace internal.com.almostreliable.lootjs.kube.builder {
    import Predicate = java.util.function_.Predicate;
    import ResourceLocation = net.minecraft.resources.ResourceLocation;
    import LootFunctionsContainer = loot.LootFunctionsContainer;
    import LootActionsContainer = loot.LootActionsContainer;

    interface ResourceLocationFilter extends $object<
        'com.almostreliable.lootjs.kube.builder.ResourceLocationFilter',
        Predicate<ResourceLocation>
    > {}

    interface LootActionsBuilderJS extends $object<
        'com.almostreliable.lootjs.kube.builder.LootActionsBuilderJS',
        LootConditionsContainer<LootActionsBuilderJS>,
        LootFunctionsContainer<LootActionsBuilderJS>,
        LootActionsContainer<LootActionsBuilderJS>
    > {}
}
