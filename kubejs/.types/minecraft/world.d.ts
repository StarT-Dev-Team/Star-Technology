declare namespace internal.net.minecraft.world.level.block {
    import ResourceLocation__Wrapper = resources.ResourceLocation__Wrapper;

    class Block {
        static getBlock(resourceLocation: ResourceLocation__Wrapper): Block;
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
