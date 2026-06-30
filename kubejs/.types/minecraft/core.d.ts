namespace internal.net.minecraft.core {
    import Enum = java.lang.Enum;

    type Direction__EnumKeys = 'DOWN' | 'UP' | 'NORTH' | 'SOUTH' | 'WEST' | 'EAST';

    class Direction extends Enum {
        static DOWN: Direction;
        static UP: Direction;
        static NORTH: Direction;
        static SOUTH: Direction;
        static WEST: Direction;
        static EAST: Direction;
    }

    type Direction__Wrapper = Direction | Direction__EnumKeys | Lowercase<Direction__EnumKeys>;

    class BlockPos {
        readonly __net_minecraft_core_BlockPos: unique symbol;
    }
}
