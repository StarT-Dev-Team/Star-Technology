namespace internal.dev.latvian.mods.kubejs.fluid {
    import ReplacementMatch = recipe.ReplacementMatch;

    interface FluidLike extends ReplacementMatch {
        readonly __dev_latvian_mods_kubejs_fluid_FluidLike: unique symbol;
        getAmount(): number;
        get amount(): number;
        isEmpty(): boolean;
        copy(): this;
        matches(other: FluidLike): boolean;
    }

    interface InputFluid extends FluidLike {
        readonly __dev_latvian_mods_kubejs_fluid_InputFluid: unique symbol;
    }

    import FluidStack = architectury.fluid.FluidStack;
    import ResourceLocation = net.minecraft.resources.ResourceLocation;
    import ResourceLocation__Wrapper = net.minecraft.resources.ResourceLocation__Wrapper;
    import Fluid = net.minecraft.world.level.material.Fluid;
    import InputReplacement = recipe.InputReplacement;

    interface FluidStackJS extends FluidLike, InputReplacement {}
    class FluidStackJS implements FluidLike, InputReplacement {
        readonly __dev_latvian_mods_kubejs_fluid_FluidStackJS: unique symbol;
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
