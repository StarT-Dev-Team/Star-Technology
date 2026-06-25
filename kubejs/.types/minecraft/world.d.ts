namespace internal.net.minecraft.world.level.block {
    import ResourceLocation__Wrapper = resources.ResourceLocation__Wrapper;

    class Block {
        static getBlock(resourceLocation: ResourceLocation__Wrapper): Block;
    }
}

namespace internal.net.minecraft.world.item {
    import ResourceLocation = resources.ResourceLocation;

    class ItemStack {
        isEmpty(): boolean;
        getItem(): Item;
        getCount(): number;
        setCount(count: number): void;
    }

    type ItemStack__WrapperString = '' | '-' | `#${string}` | `@${string}` | `%${string}` | string;
    type ItemStack__WrapperStringWithCount = `${number}x ${ItemStack__WrapperString}`;

    type ItemStack__Wrapper =
        | ItemStack
        | internal.net.minecraft.resources.ResourceLocation
        | RegExp
        | ItemStack__WrapperStringWithCount;
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
