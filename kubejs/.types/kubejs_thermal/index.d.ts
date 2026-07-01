namespace internal.dev.latvian.mods.kubejs.thermal {
    import ItemBuilder = item.ItemBuilder;

    class ThermalAugmentItemBuilder extends ItemBuilder {
        augmentType(type: 'RF'): ThermalAugmentItemBuilder__RF;
        augmentType(type: 'Dynamo'): ThermalAugmentItemBuilder__Dynamo;
        augmentType(type: 'Fluid'): ThermalAugmentItemBuilder__Fluid;
        augmentType(type: 'Upgrade'): ThermalAugmentItemBuilder__Upgrade;
    }

    interface ThermalAugmentItemBuilder__RF extends Omit<ThermalAugmentItemBuilder, 'augmentType'> {
        thermalMod(key: 'RFMax', value: number): this;
        thermalMod(key: 'RFXfer', value: number): this;
    }

    interface ThermalAugmentItemBuilder__Dynamo extends Omit<ThermalAugmentItemBuilder, 'augmentType'> {
        thermalMod(key: 'DynamoEnergy', value: number): this;
        thermalMod(key: 'DynamoPower', value: number): this;
    }

    interface ThermalAugmentItemBuilder__Fluid extends Omit<ThermalAugmentItemBuilder, 'augmentType'> {
        thermalMod(key: 'FluidMax', value: number): this;
    }

    interface ThermalAugmentItemBuilder__Upgrade extends Omit<ThermalAugmentItemBuilder, 'augmentType'> {
        baseMod(value: number): this;
    }

    import RecipeJS = recipe.RecipeJS;

    class ThermalRecipeJS extends RecipeJS {
        readonly __dev_latvian_mods_kubejs_thermal_ThermalRecipeJS: unique symbol;
    }
}
