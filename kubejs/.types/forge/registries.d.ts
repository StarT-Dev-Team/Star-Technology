declare namespace internal.net.minecraftforge.registries {
    import Iterable = java.lang.Iterable;
    import ResourceLocation = net.minecraft.resources.ResourceLocation;

    interface IForgeRegistry<V> extends $object<'net.minecraftforge.registries.IForgeRegistry', Iterable<V>> {
        getValue(key: $wrapped<ResourceLocation>): V;
        getKey(value: $wrapped<V>): ResourceLocation;
    }

    interface ForgeRegistries extends $object<'net.minecraftforge.registries.ForgeRegistries'> {}

    import Block = net.minecraft.world.level.block.Block;
    import Fluid = net.minecraft.world.level.material.Fluid;
    import Item = net.minecraft.world.item.Item;
    import MobEffect = net.minecraft.world.effect.MobEffect;
    import SoundEvent = net.minecraft.sounds.SoundEvent;

    const ForgeRegistries: $class<ForgeRegistries> & {
        BLOCKS: IForgeRegistry<Block>;
        FLUIDS: IForgeRegistry<Fluid>;
        ITEMS: IForgeRegistry<Item>;
        MOB_EFFECTS: IForgeRegistry<MobEffect>;
        SOUND_EVENTS: IForgeRegistry<SoundEvent>;
        // POTIONS: IForgeRegistry<Potion>;
        // ENCHANTMENTS: IForgeRegistry<Enchantment>;
        // ENTITY_TYPES: IForgeRegistry<EntityType<?>>;
        // BLOCK_ENTITY_TYPES: IForgeRegistry<BlockEntityType<?>>;
        // PARTICLE_TYPES: IForgeRegistry<ParticleType<?>>;
        // MENU_TYPES: IForgeRegistry<MenuType<?>>;
        // PAINTING_VARIANTS: IForgeRegistry<PaintingVariant>;
        // RECIPE_TYPES: IForgeRegistry<RecipeType<?>>;
        // RECIPE_SERIALIZERS: IForgeRegistry<RecipeSerializer<?>>;
        // ATTRIBUTES: IForgeRegistry<Attribute>;
        // STAT_TYPES: IForgeRegistry<StatType<?>>;
        // COMMAND_ARGUMENT_TYPES: IForgeRegistry<ArgumentTypeInfo<?, ?>>;
        // VILLAGER_PROFESSIONS: IForgeRegistry<VillagerProfession>;
        // POI_TYPES: IForgeRegistry<PoiType>;
        // MEMORY_MODULE_TYPES: IForgeRegistry<MemoryModuleType<?>>;
        // SENSOR_TYPES: IForgeRegistry<SensorType<?>>;
        // SCHEDULES: IForgeRegistry<Schedule>;
        // ACTIVITIES: IForgeRegistry<Activity>;
        // WORLD_CARVERS: IForgeRegistry<WorldCarver<?>>;
        // FEATURES: IForgeRegistry<Feature<?>>;
        // CHUNK_STATUS: IForgeRegistry<ChunkStatus>;
        // BLOCK_STATE_PROVIDER_TYPES: IForgeRegistry<BlockStateProviderType<?>>;
        // FOLIAGE_PLACER_TYPES: IForgeRegistry<FoliagePlacerType<?>>;
        // TREE_DECORATOR_TYPES: IForgeRegistry<TreeDecoratorType<?>>;
        // BIOMES: IForgeRegistry<Biome>;
    };
}

declare namespace internal.kjs {
    interface LoadableClasses {
        'net.minecraftforge.registries.ForgeRegistries': typeof internal.net.minecraftforge.registries.ForgeRegistries;
    }
}
