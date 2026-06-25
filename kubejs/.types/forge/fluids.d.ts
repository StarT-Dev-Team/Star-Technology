namespace internal.net.minecraftforge.fluids {
    import Fluid = net.minecraft.world.level.material.Fluid;
    import CompoundTag = net.minecraft.nbt.CompoundTag;

    class FluidStack {
        static EMPTY: FluidStack;

        constructor(fluid: Fluid, amount: number);
        constructor(fluid: Fluid, amount: number, nbt: CompoundTag);
        constructor(stack: FluidStack, amount: number);

        getFluid(): Fluid;
        getRawFluid(): Fluid;
        isEmpty(): boolean;
        getAmount(): number;
        setAmount(amount: number): void;
        grow(amount: number): void;
        shrink(amount: number): void;
        copy(): FluidStack;
    }
}
