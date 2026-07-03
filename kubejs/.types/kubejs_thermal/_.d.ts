declare namespace internal.kjs {
    import ThermalAugmentItemBuilder = dev.latvian.mods.kubejs.thermal.ThermalAugmentItemBuilder;

    interface ItemRegistry {
        thermal_augment: ThermalAugmentItemBuilder;
    }

    import ThermalRecipeJS = dev.latvian.mods.kubejs.thermal.ThermalRecipeJS;
    import $InputItemOrFluidArray = dev.latvian.mods.kubejs.recipe.component.$InputItemOrFluidArray;
    import $OutputItemOrFluidArray = dev.latvian.mods.kubejs.recipe.component.$OutputItemOrFluidArray;

    interface RecipeFunctions_thermal {
        compression_fuel(input: $InputItemOrFluidArray, energy: number, energyMod?: number): ThermalRecipeJS;
        lapidary_fuel(input: $InputItemOrFluidArray, energy: number, energyMod?: number): ThermalRecipeJS;
    }

    interface RecipeFunctions {
        thermal: RecipeFunctions_thermal;
    }
}
