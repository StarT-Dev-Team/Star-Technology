declare namespace internal.net.minecraft.core {
    import Enum = java.lang.Enum;

    interface Direction {
        readonly __net_minecraft_core_Direction: unique symbol;
    }

    class Direction extends Enum {
        static DOWN: Direction;
        static UP: Direction;
        static NORTH: Direction;
        static SOUTH: Direction;
        static WEST: Direction;
        static EAST: Direction;
    }

    type Direction__Wrapper = Direction | EnumKeys<typeof Direction>;

    interface BlockPos {
        readonly __net_minecraft_core_BlockPos: unique symbol;
    }

    class BlockPos {}

    import BlockContainerJS = dev.latvian.mods.kubejs.level.BlockContainerJS;

    type BlockPos__Wrapper = BlockPos | [number, number, number] | BlockContainerJS;
}

declare namespace internal.kjs {
    interface LoadableClasses {
        'net.minecraft.core.BlockPos': typeof internal.net.minecraft.core.BlockPos;
    }
}
