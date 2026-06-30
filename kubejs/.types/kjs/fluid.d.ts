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

    import BuilderBase = registry.BuilderBase;
    import FlowingFluid = net.minecraft.world.level.material.FlowingFluid;
    import Rarity__Wrapper = net.minecraft.world.item.Rarity__Wrapper;
    import Color__Wrapper = rhino.mod.util.color;

    class FluidBuilder extends BuilderBase<FlowingFluid> {
        color(color: Color__Wrapper): this;
        bucketColor(bucketColor: Color__Wrapper): this;
        builtinTextures(): this;
        stillTexture(id: ResourceLocation__Wrapper): this;
        flowingTexture(id: ResourceLocation__Wrapper): this;
        renderType(l: string): this;
        translucent(): this;
        thickTexture(color: Color__Wrapper): this;
        thinTexture(color: Color__Wrapper): this;
        luminosity(luminosity: number);
        density(density: number);
        temperature(temperature: number);
        viscosity(viscosity: number);
        gaseous(): this;
        rarity(rarity: Rarity__Wrapper);
        noBucket(): this;
        noBlock(): this;
    }
}
