declare namespace internal.net.minecraft.world {
    interface Container extends $object<'net.minecraft.world.Container'> {}
}

declare namespace internal.net.minecraft.world.phys {
    import Position = net.minecraft.core.Position;

    interface Vec3 extends $object<'net.minecraft.world.phys.Vec3', Position> {
        vectorTo(vec: Vec3): Vec3;
        normalize(): Vec3;
        dot(vec: Vec3): number;
        cross(vec: Vec3): Vec3;
        subtract(vec: Vec3): Vec3;
        subtract(x: number, y: number, z: number): Vec3;
        add(vec: Vec3): Vec3;
        add(x: number, y: number, z: number): Vec3;
        closerThan(pos: Position, distance: number): boolean;
        distanceTo(vec: Vec3): number;
        distanceToSqr(vec: Vec3): number;
        distanceToSqr(x: number, y: number, z: number): number;
    }

    interface Vec2 extends $object<'net.minecraft.world.phys.Vec2'> {
        get x(): number;
        get y(): number;
    }

    interface HitResult extends $object<'net.minecraft.world.phys.HitResult'> {}

    interface BlockHitResult extends $object<'net.minecraft.world.phys.BlockHitResult', HitResult> {}

    interface AABB extends $object<'net.minecraft.world.phys.AABB'> {}
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

    interface EntityGetter extends $object<'net.minecraft.world.level.EntityGetter'> {}

    interface LevelHeightAccessor extends $object<'net.minecraft.world.level.LevelHeightAccessor'> {
        getHeight(): number;
        get height(): number;
        getMinBuildHeight(): number;
        get minBuildHeight(): number;
        getMinSection(): number;
        get minSection(): number;
    }

    import BlockEntity = block.entity.BlockEntity;

    interface BlockGetter extends $object<
        'net.minecraft.world.level.BlockGetter',
        LevelHeightAccessor
        // IForgeBlockGetter
    > {
        getBlockEntity(pos: $wrapped<BlockPos>): BlockEntity | null;
    }

    interface BlockAndTintGetter extends $object<
        'net.minecraft.world.level.BlockAndTintGetter',
        BlockGetter
        // IForgeBlockAndTintGetter
    > {}

    import RegistryAccess = core.RegistryAccess;
    import ChunkAccess = world.level.chunk.ChunkAccess;

    interface LevelReader extends $object<
        'net.minecraft.world.level.LevelReader',
        BlockAndTintGetter
        // CollisionGetter,
        // SignalGetter,
        // BiomeManager.NoiseBiomeSource
    > {
        registryAccess(): RegistryAccess;
        getChunk(pos: $wrapped<BlockPos>): ChunkAccess;
        getChunk(chunkX: number, chunkZ: number): ChunkAccess;
        // getChunk(int chunkX, int chunkZ, ChunkStatus requiredStatus)
    }

    interface LevelSimulatedReader extends $object<'net.minecraft.world.level.LevelSimulatedReader'> {}

    import BlockState = block.state.BlockState;

    interface LevelWriter extends $object<'net.minecraft.world.level.LevelWriter'> {
        setBlock(var1: $wrapped<BlockPos>, var2: $wrapped<BlockState>, var3: number, var4: number): boolean;
        setBlock(pos: $wrapped<BlockPos>, newState: $wrapped<BlockState>, flags: number): boolean;
    }

    interface LevelSimulatedRW extends $object<
        'net.minecraft.world.level.LevelSimulatedRW',
        LevelSimulatedReader,
        LevelWriter
    > {}

    interface CommonLevelAccessor extends $object<
        'net.minecraft.world.level.CommonLevelAccessor',
        EntityGetter,
        LevelReader,
        LevelSimulatedRW
    > {}

    import ChunkSource = chunk.ChunkSource;

    interface LevelAccessor extends $object<'net.minecraft.world.level.LevelAccessor', CommonLevelAccessor> {
        playSound: LevelAccessor__overloads$playSound;
        getChunkSource(): ChunkSource;
    }

    interface Level extends $object<'net.minecraft.world.level.Level', LevelAccessor> {
        playSound: Level__overloads$playSound;
    }

    const Level: $class<Level> & {};

    interface ChunkPos extends $object<'net.minecraft.world.level.ChunkPos'> {
        getX(): number;
        get x(): number;
        getZ(): number;
        get z(): number;
    }

    const ChunkPos: $class<ChunkPos> & {
        new (x: number, y: number): ChunkPos;
        new (pos: $wrapped<BlockPos>): ChunkPos;
    };

    import Item = item.Item;

    interface ItemLike extends $object<'net.minecraft.world.level.ItemLike'> {
        asItem(): Item;
    }
}

declare namespace internal.kjs {
    interface LoadableClasses {
        'net.minecraft.world.level.ChunkPos': typeof internal.net.minecraft.world.level.ChunkPos;
    }
}

declare namespace internal.net.minecraft.world.level.chunk {
    interface ChunkSource extends $object<'net.minecraft.world.level.chunk.ChunkSource'> {}

    import ServerLevel = server.level.ServerLevel;
    import HolderSet = core.HolderSet;
    import Holder = core.Holder;
    import BlockPos = core.BlockPos;
    import Structure = world.level.levelgen.structure.Structure;
    import Pair = com.mojang.datafixers.util.Pair;

    interface ChunkGenerator extends $object<'net.minecraft.world.level.chunk.ChunkGenerator'> {
        findNearestMapStructure(
            level: ServerLevel,
            structure: HolderSet<Structure>,
            pos: $wrapped<BlockPos>,
            searchRadius: number,
            skipKnownStructures: boolean
        ): Pair<BlockPos, Holder<Structure>> | null;
    }

    interface ChunkAccess extends $object<
        'net.minecraft.world.level.chunk.ChunkAccess',
        BlockGetter,
        // BiomeManager.NoiseBiomeSource, LightChunk
        StructureAccess
    > {}

    interface StructureAccess extends $object<'net.minecraft.world.level.chunk.StructureAccess'> {}
}

declare namespace internal.net.minecraft.world.level.block {
    import ResourceLocation = resources.ResourceLocation;
    import BlockState = state.BlockState;

    interface Block extends $object<{ name: 'net.minecraft.world.level.block.Block'; registryEntry: true }, ItemLike> {
        defaultBlockState(): BlockState;
    }

    const Block: $class<Block> & {
        getBlock(resourceLocation: $wrapped<ResourceLocation>): Block;
    };

    interface EntityBlock extends $object<'net.minecraft.world.level.block.EntityBlock'> {}

    import Enum = java.lang.Enum;

    interface SoundType extends $object<
        { name: 'net.minecraft.world.level.block.SoundType'; enumClass: typeof SoundType },
        Enum<SoundType>
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

    const ItemStack: $class<ItemStack> & {};

    import Enum = java.lang.Enum;

    interface UseAnim extends $object<
        { name: 'net.minecraft.world.item.UseAnim'; enumClass: typeof UseAnim },
        Enum<UseAnim>
    > {}

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

    interface Rarity extends $object<
        { name: 'net.minecraft.world.item.Rarity'; enumClass: typeof Rarity },
        Enum<Rarity>
    > {}

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
    interface BlockEntity extends $object<'net.minecraft.world.level.block.entity.BlockEntity'> {}
}

declare namespace internal.net.minecraft.world.level.block.state {
    interface BlockState extends $object<
        'net.minecraft.world.level.block.state.BlockState',
        BlockBehaviour$BlockStateBase
    > {}

    import Comparable = java.lang.Comparable;
    import Property = properties.Property;
    import Optional = java.util.Optional;

    interface StateHolder<O, S> extends $object<'net.minecraft.world.level.block.state.StateHolder'> {
        getValue<T extends Comparable<T>>(property: Property<T>): T;
        getOptionalValue<T extends Comparable<T>>(property: Property<T>): Optional<T>;
        setValue<T extends Comparable<T>, V extends T>(property: Property<T>, value: V): S;
        trySetValue<T extends Comparable<T>, V extends T>(property: Property<T>, value: V): S;
    }

    interface BlockBehaviour$BlockStateBase extends $object<
        'net.minecraft.world.level.block.state.BlockBehaviour$BlockStateBase',
        StateHolder<Block, BlockState>
    > {
        getBlock(): Block;
        get block(): Block;
        isAir(): boolean;
        ignitedByLava(): boolean;
    }
}

declare namespace internal.net.minecraft.world.level.block.state.properties {
    import Comparable = java.lang.Comparable;

    interface Property<
        T extends Comparable<T>,
    > extends $object<'net.minecraft.world.level.block.state.properties.Property'> {
        getName(value: T): string;
    }

    import Boolean = java.lang.Boolean;

    interface BooleanProperty extends $object<
        'net.minecraft.world.level.block.state.properties.BooleanProperty',
        Property<Boolean>
    > {}

    import Enum = java.lang.Enum;

    interface EnumProperty<T extends Enum<T>> extends $object<
        'net.minecraft.world.level.block.state.properties.EnumProperty',
        Property<T>
    > {}

    import Direction = core.Direction;

    interface DirectionProperty extends $object<
        'net.minecraft.world.level.block.state.properties.DirectionProperty',
        EnumProperty<Direction>
    > {}

    interface BlockStateProperties extends $object<'net.minecraft.world.level.block.state.properties.BlockStateProperties'> {}

    const BlockStateProperties: $class<BlockStateProperties> & {
        FACING: DirectionProperty;
        FACING_HOPPER: DirectionProperty;
        HORIZONTAL_FACING: DirectionProperty;
        UP: BooleanProperty;
        DOWN: BooleanProperty;
        NORTH: BooleanProperty;
        EAST: BooleanProperty;
        SOUTH: BooleanProperty;
        WEST: BooleanProperty;
    };
}

declare namespace internal.net.minecraft.world.level.material {
    interface Fluid extends $object<{ name: 'net.minecraft.world.level.material.Fluid'; registryEntry: true }> {}

    interface FlowingFluid extends $object<'net.minecraft.world.level.material.FlowingFluid', Fluid> {}
}

declare namespace internal.net.minecraft.world.level.levelgen.structure {
    interface BoundingBox extends $object<'net.minecraft.world.level.levelgen.structure.BoundingBox'> {}

    interface Structure extends $object<'net.minecraft.world.level.levelgen.structure.Structure'> {}

    interface StructureStart extends $object<'net.minecraft.world.level.levelgen.structure.StructureStart'> {
        isValid(): boolean;
        getPieces(): StructurePiece[];
        get pieces(): StructurePiece[];
    }

    import BlockPos = core.BlockPos;

    interface StructurePiece extends $object<'net.minecraft.world.level.levelgen.structure.StructurePiece'> {
        getLocatorPosition(): BlockPos;
        get locatorPosition(): BlockPos;
    }
}

declare namespace internal.net.minecraft.world.level.levelgen.structure.templatesystem {
    interface RuleTest extends $object<'net.minecraft.world.level.levelgen.structure.templatesystem.RuleTest'> {}
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
        getBlockX(): number;
        get blockX(): number;
        getX(): number;
        get x(): number;
        getBlockY(): number;
        get blockY(): number;
        getY(): number;
        get y(): number;
        getBlockZ(): number;
        get blockZ(): number;
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
        Enum<AttributeModifier$Operation>
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

declare namespace internal.kjs {
    interface LoadableClasses {
        'net.minecraft.world.level.block.state.properties.BlockStateProperties': typeof internal.net.minecraft.world.level.block.state.properties.BlockStateProperties;
    }
}
