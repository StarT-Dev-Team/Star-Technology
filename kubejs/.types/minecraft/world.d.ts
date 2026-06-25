declare namespace internal.net.minecraft.world.level.block {
    import ResourceLocation = internal.net.minecraft.resources.ResourceLocation;

    class Block {
        static getBlock(resourceLocation: ResourceLocation): Block;
    }
}

declare namespace internal.net.minecraft.world.item {
    declare class ItemStack {}
}

declare namespace internal.net.minecraft.world.level.block.entity {
    abstract class BlockEntity {}
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
    abstract class Fluid {}
}
