declare namespace internal.net.minecraft.world.level {
    import BlockPos__Wrapper = core.BlockPos;
    import Player = entity.player.Player;
    import SoundEvent__Wrapper = sounds.SoundEvent__Wrapper;
    import SoundSource__Wrapper = sounds.SoundSource__Wrapper;

    interface LevelAccessor__overloads$playSound {
        (player: Player | null, pos: BlockPos__Wrapper, sound: SoundEvent__Wrapper, source: SoundSource__Wrapper): void;
        (
            player: Player | null,
            pos: BlockPos__Wrapper,
            sound: SoundEvent__Wrapper,
            source: SoundSource__Wrapper,
            volume: number,
            pitch: number
        ): void;
    }

    interface LevelAccessor {
        readonly __net_minecraft_world_level_LevelAccessor: unique symbol;
        playSound: LevelAccessor__overloads$playSound;
    }

    import Entity = entity.Entity;

    interface Level__overloads$playSound extends LevelAccessor__overloads$playSound {
        (
            player: Player | null,
            pos: BlockPos__Wrapper,
            sound: SoundEvent__Wrapper,
            category: SoundSource__Wrapper,
            volume: number,
            pitch: number
        ): void;
        (
            player: Player | null,
            x: number,
            y: number,
            z: number,
            sound: SoundEvent__Wrapper,
            category: SoundSource__Wrapper,
            volume: number,
            pitch: number
        ): void;
        (
            player: Player | null,
            entity: Entity,
            event: SoundEvent__Wrapper,
            category: SoundSource__Wrapper,
            volume: number,
            pitch: number
        ): void;
    }

    interface Level extends LevelAccessor {
        readonly __net_minecraft_world_level_Level: unique symbol;
    }

    class Level implements LevelAccessor {
        playSound: Level__overloads$playSound;
    }

    interface ChunkPos {
        readonly __net_minecraft_world_level_ChunkPos: unique symbol;
    }

    class ChunkPos {}

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
    import ResourceLocation__Wrapper = resources.ResourceLocation__Wrapper;

    interface Block {
        readonly __net_minecraft_world_level_block_Block: unique symbol;
    }

    class Block {
        static getBlock(resourceLocation: ResourceLocation__Wrapper): Block;
    }

    type Block__Wrapper = Block | string;

    interface EntityBlock {
        readonly __net_minecraft_world_level_block_EntityBlock: unique symbol;
    }

    interface SoundType {
        readonly __net_minecraft_world_level_block_SoundType: unique symbol;
    }

    class SoundType {
        static EMPTY: SoundType;
        static WOOD: SoundType;
        static GRAVEL: SoundType;
        static GRASS: SoundType;
        static LILY_PAD: SoundType;
        static STONE: SoundType;
        static METAL: SoundType;
        static GLASS: SoundType;
        static WOOL: SoundType;
        static SAND: SoundType;
        static SNOW: SoundType;
        static POWDER_SNOW: SoundType;
        static LADDER: SoundType;
        static ANVIL: SoundType;
        static SLIME_BLOCK: SoundType;
        static HONEY_BLOCK: SoundType;
        static WET_GRASS: SoundType;
        static CORAL_BLOCK: SoundType;
        static BAMBOO: SoundType;
        static BAMBOO_SAPLING: SoundType;
        static SCAFFOLDING: SoundType;
        static SWEET_BERRY_BUSH: SoundType;
        static CROP: SoundType;
        static HARD_CROP: SoundType;
        static VINE: SoundType;
        static NETHER_WART: SoundType;
        static LANTERN: SoundType;
        static STEM: SoundType;
        static NYLIUM: SoundType;
        static FUNGUS: SoundType;
        static ROOTS: SoundType;
        static SHROOMLIGHT: SoundType;
        static WEEPING_VINES: SoundType;
        static TWISTING_VINES: SoundType;
        static SOUL_SAND: SoundType;
        static SOUL_SOIL: SoundType;
        static BASALT: SoundType;
        static WART_BLOCK: SoundType;
        static NETHERRACK: SoundType;
        static NETHER_BRICKS: SoundType;
        static NETHER_SPROUTS: SoundType;
        static NETHER_ORE: SoundType;
        static BONE_BLOCK: SoundType;
        static NETHERITE_BLOCK: SoundType;
        static ANCIENT_DEBRIS: SoundType;
        static LODESTONE: SoundType;
        static CHAIN: SoundType;
        static NETHER_GOLD_ORE: SoundType;
        static GILDED_BLACKSTONE: SoundType;
        static CANDLE: SoundType;
        static AMETHYST: SoundType;
        static AMETHYST_CLUSTER: SoundType;
        static SMALL_AMETHYST_BUD: SoundType;
        static MEDIUM_AMETHYST_BUD: SoundType;
        static LARGE_AMETHYST_BUD: SoundType;
        static TUFF: SoundType;
        static CALCITE: SoundType;
        static DRIPSTONE_BLOCK: SoundType;
        static POINTED_DRIPSTONE: SoundType;
        static COPPER: SoundType;
        static CAVE_VINES: SoundType;
        static SPORE_BLOSSOM: SoundType;
        static AZALEA: SoundType;
        static FLOWERING_AZALEA: SoundType;
        static MOSS_CARPET: SoundType;
        static PINK_PETALS: SoundType;
        static MOSS: SoundType;
        static BIG_DRIPLEAF: SoundType;
        static SMALL_DRIPLEAF: SoundType;
        static ROOTED_DIRT: SoundType;
        static HANGING_ROOTS: SoundType;
        static AZALEA_LEAVES: SoundType;
        static SCULK_SENSOR: SoundType;
        static SCULK_CATALYST: SoundType;
        static SCULK: SoundType;
        static SCULK_VEIN: SoundType;
        static SCULK_SHRIEKER: SoundType;
        static GLOW_LICHEN: SoundType;
        static DEEPSLATE: SoundType;
        static DEEPSLATE_BRICKS: SoundType;
        static DEEPSLATE_TILES: SoundType;
        static POLISHED_DEEPSLATE: SoundType;
        static FROGLIGHT: SoundType;
        static FROGSPAWN: SoundType;
        static MANGROVE_ROOTS: SoundType;
        static MUDDY_MANGROVE_ROOTS: SoundType;
        static MUD: SoundType;
        static MUD_BRICKS: SoundType;
        static PACKED_MUD: SoundType;
        static HANGING_SIGN: SoundType;
        static NETHER_WOOD_HANGING_SIGN: SoundType;
        static BAMBOO_WOOD_HANGING_SIGN: SoundType;
        static BAMBOO_WOOD: SoundType;
        static NETHER_WOOD: SoundType;
        static CHERRY_WOOD: SoundType;
        static CHERRY_SAPLING: SoundType;
        static CHERRY_LEAVES: SoundType;
        static CHERRY_WOOD_HANGING_SIGN: SoundType;
        static CHISELED_BOOKSHELF: SoundType;
        static SUSPICIOUS_SAND: SoundType;
        static SUSPICIOUS_GRAVEL: SoundType;
        static DECORATED_POT: SoundType;
        static DECORATED_POT_CRACKED: SoundType;
    }

    type SoundType__EnumKeys = EnumKeys<typeof SoundType>;
    type SoundType__Wrapper = SoundType | SoundType__EnumKeys | Lowercase<SoundType__EnumKeys>;
}

declare namespace internal.net.minecraft.world.item {
    import ResourceLocation__Wrapper = resources.ResourceLocation__Wrapper;

    interface Item {
        readonly __net_minecraft_world_item_Item: unique symbol;
    }
    class Item {
        static getId(item: Item__Wrapper): number;
        static byId(id: number): Item;
    }

    type Item__Wrapper = Item;

    import OutputItem = dev.latvian.mods.kubejs.item.OutputItem;
    import Ingredient = crafting.Ingredient;

    interface ItemStack {
        readonly __net_minecraft_world_item_ItemStack: unique symbol;
    }
    class ItemStack {
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

    // type ItemStack__WrapperString = '' | '-' | `#${string}` | `@${string}` | `%${string}` | string;
    // type ItemStack__WrapperStringWithCount = `${number}x ${ItemStack__WrapperString}`;
    type ItemStack__Wrapper = ItemStack | ResourceLocation__Wrapper | RegExp | string;

    type UseAnim__EnumKeys =
        | 'NONE'
        | 'EAT'
        | 'DRINK'
        | 'BLOCK'
        | 'BOW'
        | 'SPEAR'
        | 'CROSSBOW'
        | 'SPYGLASS'
        | 'TOOT_HORN'
        | 'BRUSH'
        | 'CUSTOM';

    class UseAnim {
        static NONE: UseAnim;
        static EAT: UseAnim;
        static DRINK: UseAnim;
        static BLOCK: UseAnim;
        static BOW: UseAnim;
        static SPEAR: UseAnim;
        static CROSSBOW: UseAnim;
        static SPYGLASS: UseAnim;
        static TOOT_HORN: UseAnim;
        static BRUSH: UseAnim;
        static CUSTOM: UseAnim;
    }

    type UseAnim__Wrapper = UseAnim | UseAnim__EnumKeys | Lowercase<UseAnim__EnumKeys>;

    type Rarity__EnumKeys = 'COMMON' | 'UNCOMMON' | 'RARE' | 'EPIC';

    class Rarity {
        static COMMON: Rarity;
        static UNCOMMON: Rarity;
        static RARE: Rarity;
        static EPIC: Rarity;
    }

    type Rarity__Wrapper = Rarity | Rarity__EnumKeys | Lowercase<Rarity__EnumKeys>;

    class ArmorMaterial {}

    type ArmorMaterial__Wrapper = ArmorMaterial | string;
}

declare namespace internal.net.minecraft.world.item.crafting {
    class Ingredient {
        getItems(): ItemStack[];
    }

    type Ingredient__WrapperBase = Ingredient | ItemStack__Wrapper | { item: string } | { tag: string };
    type Ingredient__Wrapper = Ingredient__WrapperBase | Ingredient__WrapperBase[];
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
    interface Fluid {
        readonly __net_minecraft_world_level_material_Fluid: unique symbol;
    }
    class Fluid {}

    type Fluid__Wrapper = Fluid | string;

    class FlowingFluid extends Fluid {}
}

declare namespace internal.net.minecraft.world.level.levelgen.structure.templatesystem {
    abstract class RuleTest {}

    import BlockStatePredicate = dev.latvian.mods.kubejs.block.state.BlockStatePredicate;

    type RuleTest__Wrapper = RuleTest | BlockStatePredicate | string;
}

declare namespace internal.net.minecraft.world.effect {
    interface MobEffect {
        readonly __net_minecraft_world_effect_MobEffect: unique symbol;
    }
    class MobEffect {}

    type MobEffectCategory__EnumKeys = 'BENEFICIAL' | 'HARMFUL' | 'NEUTRAL';

    interface MobEffectCategory {
        readonly __net_minecraft_world_effect_MobEffectCategory: unique symbol;
    }
    class MobEffectCategory {
        static BENEFICIAL: MobEffectCategory;
        static HARMFUL: MobEffectCategory;
        static NEUTRAL: MobEffectCategory;
    }

    type MobEffectCategory__Wrapper =
        | MobEffectCategory
        | MobEffectCategory__EnumKeys
        | Lowercase<MobEffectCategory__EnumKeys>;
}

declare namespace internal.net.minecraft.world.entity {
    interface Entity {
        readonly __net_minecraft_world_entity_Entity: unique symbol;
    }
    class Entity {
        isCrouching(): boolean;
    }

    interface LivingEntity extends Entity {
        readonly __net_minecraft_world_entity_LivingEntity: unique symbol;
    }
    class LivingEntity extends Entity {}
}

declare namespace internal.net.minecraft.world.entity.ai.attributes {
    type AttributeModifier$Operation__EnumKeys = 'ADDITION' | 'MULTIPLY_BASE' | 'MULTIPLY_TOTAL';

    class AttributeModifier$Operation {
        static ADDITION: AttributeModifier$Operation;
        static MULTIPLY_BASE: AttributeModifier$Operation;
        static MULTIPLY_TOTAL: AttributeModifier$Operation;
    }

    type AttributeModifier$Operation__Wrapper =
        | AttributeModifier$Operation
        | AttributeModifier$Operation__EnumKeys
        | Lowercase<AttributeModifier$Operation__EnumKeys>;
}

declare namespace internal.net.minecraft.world.entity.player {
    interface Player extends LivingEntity {
        readonly __net_minecraft_world_entity_player_Player: unique symbol;
    }
    class Player extends LivingEntity {}
}
