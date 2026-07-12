declare namespace internal.net.minecraft.core {
    import Enum = java.lang.Enum;

    interface Direction extends $object<
        { name: 'net.minecraft.core.Direction'; enumClass: typeof Direction },
        Enum<Direction>
    > {}

    const Direction: $class<Direction> & {
        DOWN: Direction;
        UP: Direction;
        NORTH: Direction;
        SOUTH: Direction;
        WEST: Direction;
        EAST: Direction;
    };

    import Comparable = java.lang.Comparable;

    interface Vec3i extends $object<'net.minecraft.core.Vec3i', Comparable<Vec3i>> {
        getX(): number;
        get x(): number;
        getY(): number;
        get y(): number;
        getZ(): number;
        get z(): number;
        setX(x: number): void;
        set x(x: number);
        setY(y: number): void;
        set y(y: number);
        setZ(z: number): void;
        set z(z: number);
        subtract(vector: Vec3i): Vec3i;
    }

    const Vec3i: $class<Vec3i> & {};

    interface BlockPos extends $object<'net.minecraft.core.BlockPos', Vec3i> {
        subtract(vector: $wrapped<Vec3i>): BlockPos;
        offset(dx: number, dy: number, dz: number): BlockPos;
        offset(vector: $wrapped<Vec3i>): BlockPos;
    }

    const BlockPos: $class<BlockPos> & {
        new (x: number, y: number, z: number): BlockPos;
        new (vector: Vec3i): BlockPos;
    };

    interface SectionPos extends $object<'net.minecraft.core.SectionPos', Vec3i> {}

    import ChunkPos = world.level.ChunkPos;

    const SectionPos: $class<SectionPos> & {
        of(chunkX: number, chunkY: number, chunkZ: number): SectionPos;
        of(blockPos: $wrapped<BlockPos>): SectionPos;
        of(chunkPos: ChunkPos, y: number): SectionPos;
        of(position: Position): SectionPos;
    };

    interface Position extends $object<'net.minecraft.core.Position'> {
        x(): number;
        y(): number;
        z(): number;
    }

    const Position: $class<Position> & {};

    import ResourceKey = resources.ResourceKey;
    import Optional = java.util.Optional;
    import ResourceLocation = resources.ResourceLocation;

    interface Registry<T> extends $object<'net.minecraft.core.Registry'> {
        // Keyable,
        // IdMap<T>
        getKey(value: $wrapped<T>): ResourceLocation | null;
        get(key: ResourceKey<T>): T | null;
        get(key: $wrapped<ResourceLocation>): T | null;
        key(): ResourceKey<Registry<T>>;
        getResourceKey(value: $wrapped<T>): Optional<ResourceKey<T>>;
        getHolderOrThrow(key: ResourceKey<T>): Holder$Reference<T>;
    }

    import Supplier = java.util.function_.Supplier;

    interface Holder<T> extends $object<'net.minecraft.core.Holder', Supplier<T> /* , IReverseTag<T> */> {}

    const Holder: $class<Holder<unknown>> & {};

    interface Holder$Reference<T> extends $object<'net.minecraft.core.Holder$Reference', Holder<T>> {}

    interface HolderLookup$Provider extends $object<'net.minecraft.core.HolderLookup$Provider'> {}

    interface RegistryAccess extends $object<'net.minecraft.core.RegistryAccess', HolderLookup$Provider> {
        registryOrThrow<E>(registryKey: ResourceKey<Registry<E>>): Registry<E>;
    }

    interface HolderSet<T> extends $object<'net.minecraft.core.HolderSet', Iterable<Holder<T>>> {}

    const HolderSet: $class<HolderSet<unknown>> & {
        direct<T>(...contents: Holder<T>[]): HolderSet$Direct<T>;
        direct<T>(contents: Holder<T>[]): HolderSet$Direct<T>;
    };

    interface HolderSet$ListBackend<T> extends $object<'net.minecraft.core.HolderSet$ListBackend', HolderSet<T>> {}

    interface HolderSet$Direct<T> extends $object<'net.minecraft.core.HolderSet$Direct', HolderSet$ListBackend<T>> {}
}

declare namespace internal.net.minecraft.core.registries {
    interface Registries extends $object<'net.minecraft.core.registries.Registries'> {}

    import ResourceKey = resources.ResourceKey;
    import Structure = world.level.levelgen.structure.Structure;

    const Registries: $class<Registries> & {
        STRUCTURE: ResourceKey<Registry<Structure>>;
    };
}
declare namespace internal.kjs {
    interface LoadableClasses {
        'net.minecraft.core.BlockPos': typeof internal.net.minecraft.core.BlockPos;
        'net.minecraft.core.SectionPos': typeof internal.net.minecraft.core.SectionPos;
        'net.minecraft.core.HolderSet': typeof internal.net.minecraft.core.HolderSet;
        'net.minecraft.core.Holder': typeof internal.net.minecraft.core.Holder;
        'net.minecraft.core.registries.Registries': typeof internal.net.minecraft.core.registries.Registries;
    }
}
