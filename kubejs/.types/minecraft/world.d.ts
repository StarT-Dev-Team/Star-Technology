namespace internal.net.minecraft.world.level.block {
    import ResourceLocation__Wrapper = resources.ResourceLocation__Wrapper;

    class Block {
        static getBlock(resourceLocation: ResourceLocation__Wrapper): Block;
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

    type SoundType__Entries = keyof {
        [K in keyof typeof SoundType as K extends 'prototype'
            ? never
            : (typeof SoundType)[K] extends SoundType
              ? K
              : never]: K;
    };

    type SoundType__Wrapper = SoundType | SoundType__Entries | Lowercase<SoundType__Entries>;
}

namespace internal.net.minecraft.world.item {
    import ResourceLocation__Wrapper = resources.ResourceLocation__Wrapper;

    class ItemStack {
        isEmpty(): boolean;
        getItem(): Item;
        getCount(): number;
        setCount(count: number): void;
    }

    type ItemStack__WrapperString = '' | '-' | `#${string}` | `@${string}` | `%${string}` | string;
    type ItemStack__WrapperStringWithCount = `${number}x ${ItemStack__WrapperString}`;
    type ItemStack__Wrapper = ItemStack | ResourceLocation__Wrapper | RegExp | ItemStack__WrapperStringWithCount;
}

namespace internal.net.minecraft.world.item.crafting {
    class Ingredient {
        getItems(): ItemStack[];
    }

    type Ingredient__WrapperBase = Ingredient | ItemStack__Wrapper | { item: string } | { tag: string };
    type Ingredient__Wrapper = Ingredient__WrapperBase | Ingredient__WrapperBase[];
}

namespace internal.net.minecraft.world.level.block.entity {
    abstract class BlockEntity {}
}

namespace internal.net.minecraft.world.level.block.state {
    class BlockState {}
}

namespace internal.net.minecraft.world.level.block.state.properties {
    // T extends Comparable<T>
    abstract class Property<T> {}

    class BooleanProperty extends Property<boolean> {}

    import Enum = java.lang.Enum;

    class EnumProperty<T extends Enum> extends Property<Enum> {}
}

namespace internal.net.minecraft.world.level.material {
    abstract class Fluid {}
}
