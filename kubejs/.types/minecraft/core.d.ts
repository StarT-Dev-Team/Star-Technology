declare namespace internal.net.minecraft.core {
    import Enum = java.lang.Enum;

    interface Direction extends $object<{ name: 'net.minecraft.core.Direction'; enumClass: typeof Direction }, Enum> {}

    const Direction: $class<Direction> & {
        DOWN: Direction;
        UP: Direction;
        NORTH: Direction;
        SOUTH: Direction;
        WEST: Direction;
        EAST: Direction;
    };

    interface BlockPos extends $object<'net.minecraft.core.BlockPos'> {}

    const BlockPos: $class<BlockPos> & {};
}

declare namespace internal.kjs {
    interface LoadableClasses {
        'net.minecraft.core.BlockPos': typeof internal.net.minecraft.core.BlockPos;
    }
}
