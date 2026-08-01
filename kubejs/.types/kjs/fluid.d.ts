declare namespace internal.dev.latvian.mods.kubejs.fluid {
    import ReplacementMatch = recipe.ReplacementMatch;

    interface FluidLike extends $object<'dev.latvian.mods.kubejs.fluid.FluidLike', ReplacementMatch> {
        getAmount(): number;
        get amount(): number;
        isEmpty(): boolean;
        copy(): this;
        matches(other: FluidLike): boolean;
    }

    import InputReplacement = recipe.InputReplacement;

    interface InputFluid extends $object<'dev.latvian.mods.kubejs.fluid.InputFluid', FluidLike, InputReplacement> {}

    import OutputReplacement = recipe.OutputReplacement;

    interface OutputFluid extends $object<'dev.latvian.mods.kubejs.fluid.OutputFluid', FluidLike, OutputReplacement> {}

    import FluidStack = architectury.fluid.FluidStack;
    import ResourceLocation = net.minecraft.resources.ResourceLocation;
    import Fluid = net.minecraft.world.level.material.Fluid;

    interface FluidStackJS extends $object<'dev.latvian.mods.kubejs.fluid.FluidStackJS', FluidLike, InputReplacement> {
        getId(): string;
        getTags(): ResourceLocation[];
        getFluidStack(): FluidStack;
        getFluid(): Fluid;
        get fluid(): Fluid;
    }

    import BuilderBase__Blueprint = registry.BuilderBase__Blueprint;
    import FlowingFluid = net.minecraft.world.level.material.FlowingFluid;
    import Rarity = net.minecraft.world.item.Rarity;
    import Color = rhino.mod.util.color.Color;

    interface FluidBuilder extends $object<
        'dev.latvian.mods.kubejs.fluid.FluidBuilder',
        BuilderBase__Blueprint<FlowingFluid, FluidBuilder>
    > {
        color(color: $wrapped<Color>): this;
        bucketColor(bucketColor: $wrapped<Color>): this;
        builtinTextures(): this;
        stillTexture(id: $wrapped<ResourceLocation>): this;
        flowingTexture(id: $wrapped<ResourceLocation>): this;
        renderType(l: string): this;
        translucent(): this;
        thickTexture(color: $wrapped<Color>): this;
        thinTexture(color: $wrapped<Color>): this;
        luminosity(luminosity: number): this;
        density(density: number): this;
        temperature(temperature: number): this;
        viscosity(viscosity: number): this;
        gaseous(): this;
        rarity(rarity: $wrapped<Rarity>): this;
        noBucket(): this;
        noBlock(): this;
    }
}
