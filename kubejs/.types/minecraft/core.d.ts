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

    const BlockPos: $class<BlockPos> & {};

    interface Position extends $object<'net.minecraft.core.Position'> {
        x(): number;
        y(): number;
        z(): number;
    }

    const Position: $class<Position> & {};

    import ResourceKey = resources.ResourceKey;

    interface Registry<T> extends $object<'net.minecraft.core.Registry'> {
        key(): ResourceKey<Registry<T>>;
    }
}

declare namespace internal.kjs {
    interface LoadableClasses {
        'net.minecraft.core.BlockPos': typeof internal.net.minecraft.core.BlockPos;
    }
}
