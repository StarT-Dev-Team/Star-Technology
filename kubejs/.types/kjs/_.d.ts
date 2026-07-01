namespace internal.kjs {
    interface LoadableClasses {}

    import BasicBlockJS$Builder = dev.latvian.mods.kubejs.block.custom.BasicBlockJS$Builder;

    interface BlockTypeRegistry {
        _default: BasicBlockJS$Builder;
        basic: BasicBlockJS$Builder;
    }

    import BasicMobEffect$Builder = dev.latvian.mods.kubejs.misc.BasicMobEffect$Builder;

    interface MobEffectRegistry {
        _default: BasicMobEffect$Builder;
        basic: BasicMobEffect$Builder;
    }

    import BasicItemJS$Builder = dev.latvian.mods.kubejs.item.custom.BasicItemJS$Builder;
    import ArmorItemBuilder$Helmet = dev.latvian.mods.kubejs.item.custom.ArmorItemBuilder$Helmet;
    import ArmorItemBuilder$Chestplate = dev.latvian.mods.kubejs.item.custom.ArmorItemBuilder$Chestplate;
    import ArmorItemBuilder$Leggings = dev.latvian.mods.kubejs.item.custom.ArmorItemBuilder$Leggings;
    import ArmorItemBuilder$Boots = dev.latvian.mods.kubejs.item.custom.ArmorItemBuilder$Boots;

    interface ItemRegistry {
        _default: BasicItemJS$Builder;
        basic: BasicItemJS$Builder;
        helmet: ArmorItemBuilder$Helmet;
        chestplate: ArmorItemBuilder$Chestplate;
        leggings: ArmorItemBuilder$Leggings;
        boots: ArmorItemBuilder$Boots;
    }

    import FluidBuilder = dev.latvian.mods.kubejs.fluid.FluidBuilder;

    interface FluidRegistry {
        _default: FluidBuilder;
        basic: FluidBuilder;
    }

    import CookingRecipeSchema__Impl = dev.latvian.mods.kubejs.recipe.schema.minecraft.CookingRecipeSchema__Impl;
    import ShapedRecipeJS = dev.latvian.mods.kubejs.recipe.schema.minecraft.ShapedRecipeSchema$ShapedRecipeJS;
    import InputItem__Wrapper = dev.latvian.mods.kubejs.item.InputItem__Wrapper;
    import OutputItem__Wrapper = dev.latvian.mods.kubejs.item.OutputItem__Wrapper;

    interface RecipeFunctions_minecraft {
        crafting_shaped: (
            result: OutputItem__Wrapper,
            pattern: string[],
            key: Record<string, InputItem__Wrapper>
        ) => ShapedRecipeJS;
        // shaped: constructor((recipe, schemaType, keys, from) -> ((ShapedRecipeJS) recipe).set2DValues(from), RESULT, INGREDIENTS)
        crafting_shapeless: (
            result: OutputItem__Wrapper,
            ingredients: InputItem__Wrapper | InputItem__Wrapper[]
        ) => ShapedRecipeJS;
        smelting: (
            result: OutputItem__Wrapper,
            ingredient: InputItem__Wrapper,
            xp?: number,
            cookingTime?: number
        ) => CookingRecipeSchema__Impl;
        blasting: (
            result: OutputItem__Wrapper,
            ingredient: InputItem__Wrapper,
            xp?: number,
            cookingTime?: number
        ) => CookingRecipeSchema__Impl;
        smoking: (
            result: OutputItem__Wrapper,
            ingredient: InputItem__Wrapper,
            xp?: number,
            cookingTime?: number
        ) => CookingRecipeSchema__Impl;
        campfire_cooking: (
            result: OutputItem__Wrapper,
            ingredient: InputItem__Wrapper,
            xp?: number,
            cookingTime?: number
        ) => CookingRecipeSchema__Impl;
    }

    interface RecipeFunctions_kubejs {
        shaped: RecipeFunctions_minecraft['crafting_shaped'];
        shapeless: RecipeFunctions_minecraft['crafting_shapeless'];
    }

    interface RecipeFunctions {
        kubejs: RecipeFunctions_kubejs;
        minecraft: RecipeFunctions_minecraft;
        shaped: RecipeFunctions_minecraft['crafting_shaped'];
        shapeless: RecipeFunctions_minecraft['crafting_shapeless'];
    }
}

namespace internal.kjs.kubejs {
    import InformationJEIEventJS = dev.latvian.mods.kubejs.integration.forge.jei.InformationJEIEventJS;
    import HideJEIEventJS = dev.latvian.mods.kubejs.integration.forge.jei.HideJEIEventJS;
    import ItemStack = net.minecraft.world.item.ItemStack;
    import ItemStack__Wrapper = net.minecraft.world.item.ItemStack__Wrapper;

    interface JEIEvents {
        information(callback: (event: InformationJEIEventJS) => void): void;
        hideItems(callback: (event: HideJEIEventJS<ItemStack, ItemStack__Wrapper>) => void): void;
    }

    import ItemTooltipEventJS = dev.latvian.mods.kubejs.item.ItemTooltipEventJS;
    import ItemArmorTierRegistryEventJS = dev.latvian.mods.kubejs.item.custom.ItemArmorTierRegistryEventJS;
    import ItemClickedEventJS = dev.latvian.mods.kubejs.item.ItemClickedEventJS;
    import ItemLike = net.minecraft.world.level.ItemLike;

    interface ItemEvents {
        tooltip(callback: (event: ItemTooltipEventJS) => void): void;
        armorTierRegistry(callback: (event: ItemArmorTierRegistryEventJS) => void): void;
        rightClicked(item: ItemLike | ResourceLocation__Wrapper, callback: (event: ItemClickedEventJS) => void): void;
    }

    import RegistryEventJS = dev.latvian.mods.kubejs.registry.RegistryEventJS;
    import Block = net.minecraft.world.level.block.Block;
    import Item = net.minecraft.world.item.Item;
    import FlowingFluid = net.minecraft.world.level.material.FlowingFluid;
    import ResourceLocation__Wrapper = net.minecraft.resources.ResourceLocation__Wrapper;
    import CreativeTabEvent = dev.latvian.mods.kubejs.item.creativetab.CreativeTabEvent;

    interface StartupEvents {
        registry(key: 'block', callback: (event: RegistryEventJS<Block, BlockTypeRegistry>) => void): void;
        registry(key: 'mob_effect', callback: (event: RegistryEventJS<MobEffect, MobEffectRegistry>) => void): void;
        registry(key: 'item', callback: (event: RegistryEventJS<Item, ItemRegistry>) => void): void;
        registry(key: 'fluid', callback: (event: RegistryEventJS<FlowingFluid, FluidRegistry>) => void): void;
        modifyCreativeTab(id: ResourceLocation__Wrapper, callback: (event: CreativeTabEvent) => void): void;
    }

    import RecipesEventJS = dev.latvian.mods.kubejs.recipe.RecipesEventJS;
    import TagEventJS = dev.latvian.mods.kubejs.server.tag.TagEventJS;

    interface ServerEvents {
        recipes(callback: (event: RecipesEventJS) => void): void;
        tags(key: 'item', callback: (event: TagEventJS) => void): void;
    }

    import BlockModificationEventJS = dev.latvian.mods.kubejs.block.BlockModificationEventJS;
    import BlockPlacedEventJS = dev.latvian.mods.kubejs.block.BlockPlacedEventJS;
    import BlockRightClickedEventJS = dev.latvian.mods.kubejs.block.BlockRightClickedEventJS;

    type ExtraSupportsBlock = null | Block | ResourceLocation__Wrapper;

    interface BlockEvents {
        modification(callback: (event: BlockModificationEventJS) => void): void;
        modification(block: ExtraSupportsBlock, callback: (event: BlockModificationEventJS) => void): void;
        placed(callback: (event: BlockPlacedEventJS) => void): void;
        placed(block: ExtraSupportsBlock, callback: (event: BlockPlacedEventJS) => void): void;
        rightClicked(callback: (event: BlockRightClickedEventJS) => void): void;
        rightClicked(block: ExtraSupportsBlock, callback: (event: BlockRightClickedEventJS) => void): void;
    }
}

const Java: {
    loadClass: { <K extends keyof internal.kjs.LoadableClasses>(name: K): internal.kjs.LoadableClasses[K] };
};

const Item: typeof internal.dev.latvian.mods.kubejs.bindings.ItemWrapper;
const Ingredient: typeof internal.dev.latvian.mods.kubejs.bindings.IngredientWrapper;
const Fluid: typeof internal.dev.latvian.mods.kubejs.bindings.FluidWrapper;

const StartupEvents: internal.kjs.kubejs.StartupEvents;
const ServerEvents: internal.kjs.kubejs.ServerEvents;
const ItemEvents: internal.kjs.kubejs.ItemEvents;
const JEIEvents: internal.kjs.kubejs.JEIEvents;
const BlockEvents: internal.kjs.kubejs.BlockEvents;
