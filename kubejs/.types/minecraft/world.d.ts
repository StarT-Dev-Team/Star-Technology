declare namespace internal.net.minecraft.world {
    interface Container extends $object<'net.minecraft.world.Container'> {}
}

declare namespace internal.net.minecraft.world.level {
    import BlockPos = core.BlockPos;
    import Player = entity.player.Player;
    import SoundEvent = sounds.SoundEvent;
    import SoundSource = sounds.SoundSource;

    interface LevelAccessor__overloads$playSound {
        (
            player: Player | null,
            pos: $wrapped<BlockPos>,
            sound: $wrapped<SoundEvent>,
            source: $wrapped<SoundSource>
        ): void;
        (
            player: Player | null,
            pos: $wrapped<BlockPos>,
            sound: $wrapped<SoundEvent>,
            source: $wrapped<SoundSource>,
            volume: number,
            pitch: number
        ): void;
    }

    import Entity = entity.Entity;

    interface Level__overloads$playSound extends LevelAccessor__overloads$playSound {
        (
            player: Player | null,
            pos: $wrapped<BlockPos>,
            sound: $wrapped<SoundEvent>,
            category: $wrapped<SoundSource>,
            volume: number,
            pitch: number
        ): void;
        (
            player: Player | null,
            x: number,
            y: number,
            z: number,
            sound: $wrapped<SoundEvent>,
            category: $wrapped<SoundSource>,
            volume: number,
            pitch: number
        ): void;
        (
            player: Player | null,
            entity: Entity,
            event: $wrapped<SoundEvent>,
            category: $wrapped<SoundSource>,
            volume: number,
            pitch: number
        ): void;
    }

    interface LevelAccessor extends $object<'net.minecraft.world.level.LevelAccessor'> {
        playSound: LevelAccessor__overloads$playSound;
    }

    interface Level extends $object<'net.minecraft.world.level.Level', LevelAccessor> {
        playSound: Level__overloads$playSound;
    }

    const Level: $class<Level> & {};

    interface ChunkPos extends $object<'net.minecraft.world.level.ChunkPos'> {}

    const ChunkPos: $class<ChunkPos> & {};

    import Item = item.Item;

    interface ItemLike {
        readonly __net_minecraft_world_level_ItemLike: unique symbol;
        asItem(): Item;
    }
}

declare namespace internal.kjs {
    interface LoadableClasses {
        'net.minecraft.world.level.ChunkPos': typeof internal.net.minecraft.world.level.ChunkPos;
    }
}

declare namespace internal.net.minecraft.world.level.block {
    import ResourceLocation = resources.ResourceLocation;

    interface Block extends $object<{ name: 'net.minecraft.world.level.block.Block'; registryEntry: true }> {}

    const Block: $class<Block> & {
        getBlock(resourceLocation: $wrapped<ResourceLocation>): Block;
    };

    interface EntityBlock {
        readonly __net_minecraft_world_level_block_EntityBlock: unique symbol;
    }

    import Enum = java.lang.Enum;

    interface SoundType extends $object<
        { name: 'net.minecraft.world.level.block.SoundType'; enumClass: typeof SoundType },
        Enum
    > {}

    const SoundType: $class<SoundType> & {
        EMPTY: SoundType;
        WOOD: SoundType;
        GRAVEL: SoundType;
        GRASS: SoundType;
        LILY_PAD: SoundType;
        STONE: SoundType;
        METAL: SoundType;
        GLASS: SoundType;
        WOOL: SoundType;
        SAND: SoundType;
        SNOW: SoundType;
        POWDER_SNOW: SoundType;
        LADDER: SoundType;
        ANVIL: SoundType;
        SLIME_BLOCK: SoundType;
        HONEY_BLOCK: SoundType;
        WET_GRASS: SoundType;
        CORAL_BLOCK: SoundType;
        BAMBOO: SoundType;
        BAMBOO_SAPLING: SoundType;
        SCAFFOLDING: SoundType;
        SWEET_BERRY_BUSH: SoundType;
        CROP: SoundType;
        HARD_CROP: SoundType;
        VINE: SoundType;
        NETHER_WART: SoundType;
        LANTERN: SoundType;
        STEM: SoundType;
        NYLIUM: SoundType;
        FUNGUS: SoundType;
        ROOTS: SoundType;
        SHROOMLIGHT: SoundType;
        WEEPING_VINES: SoundType;
        TWISTING_VINES: SoundType;
        SOUL_SAND: SoundType;
        SOUL_SOIL: SoundType;
        BASALT: SoundType;
        WART_BLOCK: SoundType;
        NETHERRACK: SoundType;
        NETHER_BRICKS: SoundType;
        NETHER_SPROUTS: SoundType;
        NETHER_ORE: SoundType;
        BONE_BLOCK: SoundType;
        NETHERITE_BLOCK: SoundType;
        ANCIENT_DEBRIS: SoundType;
        LODESTONE: SoundType;
        CHAIN: SoundType;
        NETHER_GOLD_ORE: SoundType;
        GILDED_BLACKSTONE: SoundType;
        CANDLE: SoundType;
        AMETHYST: SoundType;
        AMETHYST_CLUSTER: SoundType;
        SMALL_AMETHYST_BUD: SoundType;
        MEDIUM_AMETHYST_BUD: SoundType;
        LARGE_AMETHYST_BUD: SoundType;
        TUFF: SoundType;
        CALCITE: SoundType;
        DRIPSTONE_BLOCK: SoundType;
        POINTED_DRIPSTONE: SoundType;
        COPPER: SoundType;
        CAVE_VINES: SoundType;
        SPORE_BLOSSOM: SoundType;
        AZALEA: SoundType;
        FLOWERING_AZALEA: SoundType;
        MOSS_CARPET: SoundType;
        PINK_PETALS: SoundType;
        MOSS: SoundType;
        BIG_DRIPLEAF: SoundType;
        SMALL_DRIPLEAF: SoundType;
        ROOTED_DIRT: SoundType;
        HANGING_ROOTS: SoundType;
        AZALEA_LEAVES: SoundType;
        SCULK_SENSOR: SoundType;
        SCULK_CATALYST: SoundType;
        SCULK: SoundType;
        SCULK_VEIN: SoundType;
        SCULK_SHRIEKER: SoundType;
        GLOW_LICHEN: SoundType;
        DEEPSLATE: SoundType;
        DEEPSLATE_BRICKS: SoundType;
        DEEPSLATE_TILES: SoundType;
        POLISHED_DEEPSLATE: SoundType;
        FROGLIGHT: SoundType;
        FROGSPAWN: SoundType;
        MANGROVE_ROOTS: SoundType;
        MUDDY_MANGROVE_ROOTS: SoundType;
        MUD: SoundType;
        MUD_BRICKS: SoundType;
        PACKED_MUD: SoundType;
        HANGING_SIGN: SoundType;
        NETHER_WOOD_HANGING_SIGN: SoundType;
        BAMBOO_WOOD_HANGING_SIGN: SoundType;
        BAMBOO_WOOD: SoundType;
        NETHER_WOOD: SoundType;
        CHERRY_WOOD: SoundType;
        CHERRY_SAPLING: SoundType;
        CHERRY_LEAVES: SoundType;
        CHERRY_WOOD_HANGING_SIGN: SoundType;
        CHISELED_BOOKSHELF: SoundType;
        SUSPICIOUS_SAND: SoundType;
        SUSPICIOUS_GRAVEL: SoundType;
        DECORATED_POT: SoundType;
        DECORATED_POT_CRACKED: SoundType;
    };
}

declare namespace internal.net.minecraft.world.item {
    import ResourceLocation = resources.ResourceLocation;

    interface Item extends $object<'net.minecraft.world.item.Item'> {}

    const Item: $class<Item> & {
        getId(item: $wrapped<Item>): number;
        byId(id: number): Item;
    };

    import OutputItem = dev.latvian.mods.kubejs.item.OutputItem;
    import Ingredient = crafting.Ingredient;

    interface ItemStack extends $object<'net.minecraft.world.item.ItemStack'> {
        isEmpty(): boolean;

        getItem(): Item;
        get item(): Item;
        getCount(): number;
        get count(): number;
        setCount(count: number): void;
        set count(count: number);

        weakNBT(): Ingredient;
        strongNBT(): Ingredient;
        withChance(chance: number): OutputItem;
    }

    import Enum = java.lang.Enum;

    interface UseAnim extends $object<{ name: 'net.minecraft.world.item.UseAnim'; enumClass: typeof UseAnim }, Enum> {}

    const UseAnim: $class<UseAnim> & {
        NONE: UseAnim;
        EAT: UseAnim;
        DRINK: UseAnim;
        BLOCK: UseAnim;
        BOW: UseAnim;
        SPEAR: UseAnim;
        CROSSBOW: UseAnim;
        SPYGLASS: UseAnim;
        TOOT_HORN: UseAnim;
        BRUSH: UseAnim;
        CUSTOM: UseAnim;
    };

    interface Rarity extends $object<{ name: 'net.minecraft.world.item.Rarity'; enumClass: typeof Rarity }, Enum> {}

    const Rarity: $class<Rarity> & {
        COMMON: Rarity;
        UNCOMMON: Rarity;
        RARE: Rarity;
        EPIC: Rarity;
    };

    interface ArmorMaterial extends $object<{ name: 'net.minecraft.world.item.ArmorMaterial'; registryEntry: true }> {}
}

declare namespace internal.net.minecraft.world.item.crafting {
    import Container = world.Container;

    interface Recipe<C extends Container> extends $object<'net.minecraft.world.item.crafting.Recipe'> {}

    interface Ingredient extends $object<'net.minecraft.world.item.crafting.Ingredient'> {
        getItems(): ItemStack[];
    }

    import ResourceLocation = resources.ResourceLocation;
    import Optional = java.util.Optional;

    interface RecipeManager extends $object<'net.minecraft.world.item.crafting.RecipeManager'> {
        byKey(recipeId: $wrapped<ResourceLocation>): Optional<Recipe<Container>>;
    }
}

declare namespace internal.net.minecraft.world.level.block.entity {
    interface BlockEntity {
        readonly __net_minecraft_world_level_block_entity_BlockEntity: unique symbol;
    }

    class BlockEntity {}
}

declare namespace internal.net.minecraft.world.level.block.state {
    class BlockState {}
}

declare namespace internal.net.minecraft.world.level.block.state.properties {
    // T extends Comparable<T>
    abstract class Property<T> {}

    class BooleanProperty extends Property<boolean> {}

    import Enum = java.lang.Enum;

    class EnumProperty<T extends Enum> extends Property<Enum> {}
}

declare namespace internal.net.minecraft.world.level.material {
    interface Fluid extends $object<{ name: 'net.minecraft.world.level.material.Fluid'; registryEntry: true }> {}

    interface FlowingFluid extends $object<'net.minecraft.world.level.material.FlowingFluid', Fluid> {}
}

declare namespace internal.net.minecraft.world.level.levelgen.structure.templatesystem {
    interface RuleTest extends $object<'net.minecraft.world.level.levelgen.structure.templatesystem.RuleTest'> {}

    import BlockStatePredicate = dev.latvian.mods.kubejs.block.state.BlockStatePredicate;

    type $wrapped<RuleTest> = RuleTest | BlockStatePredicate | string;
}

declare namespace internal.net.minecraft.world.effect {
    interface MobEffect extends $object<{ name: 'net.minecraft.world.effect.MobEffect'; registryEntry: true }> {}

    interface MobEffectCategory extends $object<{
        name: 'net.minecraft.world.effect.MobEffectCategory';
        enumClass: typeof MobEffectCategory;
    }> {}

    const MobEffectCategory: $class<MobEffectCategory> & {
        BENEFICIAL: MobEffectCategory;
        HARMFUL: MobEffectCategory;
        NEUTRAL: MobEffectCategory;
    };
}

declare namespace internal.net.minecraft.world.entity {
    interface Entity extends $object<'net.minecraft.world.entity.Entity'> {
        isCrouching(): boolean;
        getX(): number;
        get x(): number;
        getY(): number;
        get y(): number;
        getZ(): number;
        get z(): number;
    }

    import MobEffect = net.minecraft.world.effect.MobEffect;

    interface LivingEntity extends $object<'net.minecraft.world.entity.LivingEntity', Entity> {
        hasEffect(effect: $wrapped<MobEffect>): boolean;
        getHealth(): number;
        get health(): number;
    }
}

declare namespace internal.net.minecraft.world.entity.ai.attributes {
    import Enum = java.lang.Enum;

    interface AttributeModifier$Operation extends $object<
        {
            name: 'net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation';
            enumClass: typeof AttributeModifier$Operation;
        },
        Enum
    > {}

    const AttributeModifier$Operation: $class<AttributeModifier$Operation> & {
        ADDITION: AttributeModifier$Operation;
        MULTIPLY_BASE: AttributeModifier$Operation;
        MULTIPLY_TOTAL: AttributeModifier$Operation;
    };
}

declare namespace internal.net.minecraft.world.entity.player {
    interface Inventory extends $object<'net.minecraft.world.entity.player.Inventory', java.lang.Object, Container> {}

    interface Player extends $object<'net.minecraft.world.entity.player.Player', LivingEntity> {
        getInventory(): Inventory;
        get inventory(): Inventory;
    }
}
