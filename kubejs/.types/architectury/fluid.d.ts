declare namespace internal.dev.architectury.fluid {
    import ForgeFluidStack = net.minecraftforge.fluids.FluidStack;

    interface FluidStack extends $object<'dev.architectury.fluid.FluidStack'> {
        getValue(): ForgeFluidStack;
    }
}
