declare namespace internal.net.minecraftforge.fluids {
    import Fluid = net.minecraft.world.level.material.Fluid;
    import CompoundTag = net.minecraft.nbt.CompoundTag;

    interface FluidStack extends $object<'net.minecraftforge.fluids.FluidStack'> {
        getFluid(): Fluid;
        getRawFluid(): Fluid;
        isEmpty(): boolean;
        getAmount(): number;
        setAmount(amount: number): void;
        grow(amount: number): void;
        shrink(amount: number): void;
        copy(): FluidStack;
    }

    const FluidStack: $class<FluidStack> & {
        EMPTY: FluidStack;
        new (fluid: $wrapped<Fluid>, amount: number): FluidStack;
        new (fluid: $wrapped<Fluid>, amount: number, nbt: $wrapped<CompoundTag>): FluidStack;
        new (stack: $wrapped<FluidStack>, amount: number): FluidStack;
    };

    interface IFluidTank extends $object<'net.minecraftforge.fluids.IFluidTank'> {}
}

declare namespace internal.net.minecraftforge.fluids.capability {
    interface IFluidHandler extends $object<'net.minecraftforge.fluids.capability.IFluidHandler'> {}
}

declare namespace internal.net.minecraftforge.fluids.capability.templates {
    interface FluidTank extends $object<
        'net.minecraftforge.fluids.capability.templates.FluidTank',
        IFluidHandler,
        IFluidTank
    > {}
}
