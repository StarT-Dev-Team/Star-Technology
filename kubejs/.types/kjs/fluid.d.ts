namespace internal.dev.latvian.mods.kubejs.fluid {
    import FluidStack = architectury.fluid.FluidStack;
    import ResourceLocation = net.minecraft.resources.ResourceLocation;
    import ResourceLocation__Wrapper = net.minecraft.resources.ResourceLocation__Wrapper;
    import Fluid = net.minecraft.world.level.material.Fluid;

    abstract class FluidStackJS {
        getId(): string;
        getTags(): Collection<ResourceLocation>;
        getFluidStack(): FluidStack;
    }

    type FluidStackJS__Wrapper =
        | FluidStackJS
        | FluidStack
        | Fluid
        | ResourceLocation__Wrapper
        | { fluid: string; amount?: number; count?: number; nbt?: unknown };
}
