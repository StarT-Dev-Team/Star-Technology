declare namespace internal.kjs {
    interface LoadableClasses {}

    // TODO: maybe move?
    type IngredientWrapperBase =
        | net.minecraft.world.item.ItemStack
        | TypeWrappers['net.minecraft.world.item.ItemStack']
        | { item: string }
        | { tag: string };

    type BlockStatePredicateWrapperBase =
        | dev.latvian.mods.kubejs.block.state.BlockStatePredicate
        | dev.latvian.mods.kubejs.block.state.BlockStatePredicate$Simple
        | impl.EnumKeys<typeof dev.latvian.mods.kubejs.block.state.BlockStatePredicate$Simple>
        | null
        | { or: BlockStatePredicateWrapperBase }
        | { not: BlockStatePredicateWrapperBase }
        | net.minecraft.world.level.block.Block
        | net.minecraft.world.level.block.state.BlockState
        | net.minecraft.tags.TagKey<net.minecraft.world.level.block.Block>
        | RegExp
        | string
        | BlockStatePredicateWrapperBase[];

    type RecipeFilterWrapper =
        | dev.latvian.mods.kubejs.recipe.filter.RecipeFilter
        | string
        | RegExp
        | RecipeFilterWrapper[]
        | {
              or?: RecipeFilterWrapper;
              not?: RecipeFilterWrapper;
              id?: net.minecraft.resources.ResourceLocation | string | RegExp;
              type?: net.minecraft.resources.ResourceLocation | string;
              group?: string;
              mod?: string;
              input?:
                  | dev.latvian.mods.kubejs.recipe.ReplacementMatch
                  | TypeWrappers['dev.latvian.mods.kubejs.recipe.ReplacementMatch'];
              output?:
                  | dev.latvian.mods.kubejs.recipe.ReplacementMatch
                  | TypeWrappers['dev.latvian.mods.kubejs.recipe.ReplacementMatch'];
          };

    // TODO: move ClickEventAction
    type ClickEventAction =
        | 'open_url'
        | 'open_file'
        | 'run_command'
        | 'suggest_command'
        | 'change_page'
        | 'copy_to_clipboard';

    type ComponentJsonAttributes = {
        color?: $wrapped<dev.latvian.mods.rhino.mod.util.color.Color>;
        bold?: boolean;
        italic?: boolean;
        underlined?: boolean;
        strikethrough?: boolean;
        obfuscated?: boolean;
        insertion?: string;
        font?: string;
        click?: { action: ClickEventAction; value: string } | `${ClickEventAction}:${string}`;
        hover?: ComponentWrapper;
        extra?: ComponentWrapper[];
    };

    type ComponentWrapper =
        | net.minecraft.network.chat.Component
        | net.minecraft.network.chat.MutableComponent
        | null
        | string
        | number
        | java.lang.Enum<unknown>
        | ({ text: string } & ComponentJsonAttributes)
        | ({ translate: string; with?: unknown[] } & ComponentJsonAttributes)
        | ComponentWrapper[];

    interface ReverseTypeWrappers {
        'net.minecraft.nbt.CompoundTag': JsonObjectLike;
        'net.minecraft.nbt.CollectionTag': JsonArrayLike;
    }

    type IntBoundsWrapper =
        | number
        | [number, number]
        | { bounds: [number, number] }
        | { min: number; max: number }
        | { min_inclusive: number; max_inclusive: number }
        | { value: number };

    interface TypeWrappers {
        // Java / Minecraft
        // typeWrappers.registerSimple(String.class, String::valueOf);
        // typeWrappers.registerSimple(CharSequence.class, String::valueOf);
        'java.util.UUID': string;
        'java.util.regex.Pattern': RegExp | string;
        'com.google.gson.JsonObject': string | JsonObjectLike;
        'com.google.gson.JsonArray': string | JsonArrayLike;
        'com.google.gson.JsonElement': JsonLike;
        'com.google.gson.JsonPrimitive': string | boolean | number;
        // typeWrappers.registerSimple(Path.class, UtilsJS::getPath);
        // typeWrappers.registerSimple(File.class, UtilsJS::getFileFromPath);
        // typeWrappers.register(Unit.class, Painter.INSTANCE::unitOf);
        // typeWrappers.registerSimple(TemporalAmount.class, UtilsJS::getTemporalAmount);
        // typeWrappers.registerSimple(Duration.class, UtilsJS::getDuration);

        'net.minecraft.resources.ResourceLocation': string;
        'net.minecraft.nbt.CompoundTag': string | JsonObjectLike;
        'net.minecraft.nbt.CollectionTag': string | JsonArrayLike;
        'net.minecraft.nbt.ListTag': string | JsonArrayLike;
        'net.minecraft.nbt.Tag': string | JsonLike;

        'net.minecraft.core.BlockPos': [number, number, number] | dev.latvian.mods.kubejs.level.BlockContainerJS;
        'net.minecraft.world.phys.Vec3':
            | net.minecraft.world.entity.Entity
            | [number, number, number]
            | net.minecraft.core.BlockPos
            | dev.latvian.mods.kubejs.level.BlockContainerJS;

        'net.minecraft.world.item.Item': TypeWrappers['net.minecraft.world.item.ItemStack'];
        // typeWrappers.register(ItemLike.class, ItemStackJS::getRawItem);
        // typeWrappers.registerSimple(MobCategory.class, o -> o == null ? null : UtilsJS.mobCategoryByName(o.toString()));

        'net.minecraft.world.phys.AABB':
            | net.minecraft.core.BlockPos
            | []
            | [number, number, number]
            | [number, number, number, number, number, number];
        'net.minecraft.util.valueproviders.IntProvider':
            | IntBoundsWrapper
            | { clamped: IntBoundsWrapper }
            | { clamped_normal: IntBoundsWrapper; mean: number; deviation: number };
        // typeWrappers.registerSimple(NumberProvider.class, UtilsJS::numberProviderOf);
        // typeWrappers.registerSimple(LootContext.EntityTarget.class, o -> o == null ? null : LootContext.EntityTarget.getByName(o.toString().toLowerCase()));
        // typeWrappers.registerSimple(CopyNameFunction.NameSource.class, o -> o == null ? null : CopyNameFunction.NameSource.getByName(o.toString().toLowerCase()));
        // typeWrappers.register(FoodProperties.class, FoodBuilder::of);

        // KubeJS //
        // typeWrappers.registerSimple(Map.class, MapJS::of);
        // typeWrappers.registerSimple(List.class, ListJS::of);
        // typeWrappers.registerSimple(Iterable.class, ListJS::of);
        // typeWrappers.registerSimple(Collection.class, ListJS::of);
        // typeWrappers.registerSimple(Set.class, ListJS::ofSet);
        'net.minecraft.world.item.ItemStack': net.minecraft.resources.ResourceLocation | RegExp | string;
        'net.minecraft.world.item.crafting.Ingredient':
            | IngredientWrapperBase
            | (IngredientWrapperBase | net.minecraft.world.item.crafting.Ingredient)[];
        'dev.latvian.mods.kubejs.recipe.InputReplacement':
            | dev.latvian.mods.kubejs.item.InputItem
            | TypeWrappers['dev.latvian.mods.kubejs.item.InputItem'];
        'dev.latvian.mods.kubejs.recipe.OutputReplacement':
            | dev.latvian.mods.kubejs.item.OutputItem
            | TypeWrappers['dev.latvian.mods.kubejs.item.OutputItem'];
        'dev.latvian.mods.kubejs.item.InputItem':
            | net.minecraft.world.item.ItemStack
            | net.minecraft.world.item.crafting.Ingredient
            | TypeWrappers['net.minecraft.world.item.crafting.Ingredient'];
        'dev.latvian.mods.kubejs.item.OutputItem':
            | net.minecraft.world.item.ItemStack
            | net.minecraft.world.item.crafting.Ingredient
            | TypeWrappers['net.minecraft.world.item.crafting.Ingredient'];
        'dev.latvian.mods.kubejs.block.state.BlockStatePredicate': BlockStatePredicateWrapperBase;
        'net.minecraft.world.level.levelgen.structure.templatesystem.RuleTest':
            | dev.latvian.mods.kubejs.block.state.BlockStatePredicate
            | TypeWrappers['dev.latvian.mods.kubejs.block.state.BlockStatePredicate'];
        // typeWrappers.register(BiomeFilter.class, BiomeFilter::of);
        // typeWrappers.register(MobFilter.class, MobFilter::of);
        'dev.latvian.mods.kubejs.fluid.FluidStackJS':
            | dev.latvian.mods.kubejs.fluid.FluidStackJS
            | dev.architectury.fluid.FluidStack
            | net.minecraft.world.level.material.Fluid
            | net.minecraft.resources.ResourceLocation
            | string
            | com.google.gson.JsonElement
            | { fluid: string; amount?: number; count?: number; nbt?: unknown };
        // typeWrappers.register(RecipeFilter.class, RecipeFilter::of);
        'dev.latvian.mods.kubejs.recipe.filter.RecipeFilter': RecipeFilterWrapper;
        'dev.latvian.mods.kubejs.recipe.ingredientaction.IngredientActionFilter':
            | number
            | string
            | net.minecraft.world.item.crafting.Ingredient
            | TypeWrappers['net.minecraft.world.item.crafting.Ingredient']
            | {
                  item?:
                      | net.minecraft.world.item.crafting.Ingredient
                      | TypeWrappers['net.minecraft.world.item.crafting.Ingredient'];
                  index?: number;
              };
        // typeWrappers.registerSimple(Tier.class, ItemBuilder::toToolTier);
        // typeWrappers.registerSimple(ArmorMaterial.class, ItemBuilder::toArmorMaterial);
        // typeWrappers.registerSimple(PlayerSelector.class, PlayerSelector::of);
        // typeWrappers.registerSimple(EntitySelector.class, UtilsJS::entitySelector);
        'dev.latvian.mods.kubejs.recipe.ReplacementMatch':
            | null
            | net.minecraft.world.item.crafting.Ingredient
            | TypeWrappers['net.minecraft.world.item.crafting.Ingredient'];
        // typeWrappers.registerSimple(Stat.class, PlayerStatsJS::statOf);
        // typeWrappers.register(NotificationBuilder.class, NotificationBuilder::of);
        // typeWrappers.registerSimple(MapColor.class, MapColorHelper::of);
        // typeWrappers.register(SoundType.class, SoundTypeWrapper.INSTANCE);
        // typeWrappers.registerSimple(ParticleOptions.class, UtilsWrapper::particleOptions);
        // typeWrappers.register(ItemTintFunction.class, ItemTintFunction::of);
        // typeWrappers.register(BlockTintFunction.class, BlockTintFunction::of);

        // components //
        'net.minecraft.network.chat.Component': ComponentWrapper;
        'net.minecraft.network.chat.MutableComponent': ComponentWrapper;
        // typeWrappers.registerSimple(Color.class, ColorWrapper::of);
        // typeWrappers.registerSimple(TextColor.class, o -> ColorWrapper.of(o).createTextColorJS());
        // typeWrappers.registerSimple(ClickEvent.class, TextWrapper::clickEventOf);

        'net.minecraftforge.fluids.FluidStack': TypeWrappers['dev.latvian.mods.kubejs.fluid.FluidStackJS'];
    }

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
    import InputItem = dev.latvian.mods.kubejs.item.InputItem;
    import OutputItem = dev.latvian.mods.kubejs.item.OutputItem;

    interface RecipeFunctions_minecraft {
        crafting_shaped: (
            result: $wrapped<OutputItem>,
            pattern: string[],
            key: Record<string, $wrapped<InputItem>>
        ) => ShapedRecipeJS;
        // shaped: constructor((recipe, schemaType, keys, from) -> ((ShapedRecipeJS) recipe).set2DValues(from), RESULT, INGREDIENTS)
        crafting_shapeless: (
            result: $wrapped<OutputItem>,
            ingredients: $wrapped<InputItem> | $wrapped<InputItem>[]
        ) => ShapedRecipeJS;
        smelting: (
            result: $wrapped<OutputItem>,
            ingredient: $wrapped<InputItem>,
            xp?: number,
            cookingTime?: number
        ) => CookingRecipeSchema__Impl;
        blasting: (
            result: $wrapped<OutputItem>,
            ingredient: $wrapped<InputItem>,
            xp?: number,
            cookingTime?: number
        ) => CookingRecipeSchema__Impl;
        smoking: (
            result: $wrapped<OutputItem>,
            ingredient: $wrapped<InputItem>,
            xp?: number,
            cookingTime?: number
        ) => CookingRecipeSchema__Impl;
        campfire_cooking: (
            result: $wrapped<OutputItem>,
            ingredient: $wrapped<InputItem>,
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

declare namespace internal.kjs.kubejs {
    import InformationJEIEventJS = dev.latvian.mods.kubejs.integration.forge.jei.InformationJEIEventJS;
    import HideJEIEventJS = dev.latvian.mods.kubejs.integration.forge.jei.HideJEIEventJS;
    import ItemStack = net.minecraft.world.item.ItemStack;

    interface JEIEvents {
        information(callback: (event: InformationJEIEventJS) => void): void;
        hideItems(callback: (event: HideJEIEventJS<ItemStack, $wrapped<ItemStack>>) => void): void;
    }

    import ItemTooltipEventJS = dev.latvian.mods.kubejs.item.ItemTooltipEventJS;
    import ItemArmorTierRegistryEventJS = dev.latvian.mods.kubejs.item.custom.ItemArmorTierRegistryEventJS;
    import ItemClickedEventJS = dev.latvian.mods.kubejs.item.ItemClickedEventJS;
    import ItemLike = net.minecraft.world.level.ItemLike;

    interface ItemEvents {
        tooltip(callback: (event: ItemTooltipEventJS) => void): void;
        armorTierRegistry(callback: (event: ItemArmorTierRegistryEventJS) => void): void;
        rightClicked(item: ItemLike | $wrapped<ResourceLocation>, callback: (event: ItemClickedEventJS) => void): void;
    }

    import RegistryEventJS = dev.latvian.mods.kubejs.registry.RegistryEventJS;
    import Item = net.minecraft.world.item.Item;
    import FlowingFluid = net.minecraft.world.level.material.FlowingFluid;
    import ResourceLocation = net.minecraft.resources.ResourceLocation;
    import CreativeTabEvent = dev.latvian.mods.kubejs.item.creativetab.CreativeTabEvent;

    import Block = net.minecraft.world.level.block.Block;
    type BlockTypeRegistryEvent = RegistryEventJS<Block, BlockTypeRegistry>;

    import MobEffect = net.minecraft.world.effect.MobEffect;

    interface StartupEvents {
        registry(key: 'block', callback: (event: RegistryEventJS<Block, BlockTypeRegistry>) => void): void;
        registry(key: 'mob_effect', callback: (event: RegistryEventJS<MobEffect, MobEffectRegistry>) => void): void;
        registry(key: 'item', callback: (event: RegistryEventJS<Item, ItemRegistry>) => void): void;
        registry(key: 'fluid', callback: (event: RegistryEventJS<FlowingFluid, FluidRegistry>) => void): void;
        modifyCreativeTab(id: $wrapped<ResourceLocation>, callback: (event: CreativeTabEvent) => void): void;
    }

    import RecipesEventJS = dev.latvian.mods.kubejs.recipe.RecipesEventJS;
    import TagEventJS = dev.latvian.mods.kubejs.server.tag.TagEventJS;

    interface ServerEvents {
        recipes(callback: (event: RecipesEventJS) => void): void;
        tags(key: 'item' | 'block' | 'fluid', callback: (event: TagEventJS) => void): void;
    }

    import BlockModificationEventJS = dev.latvian.mods.kubejs.block.BlockModificationEventJS;
    import BlockPlacedEventJS = dev.latvian.mods.kubejs.block.BlockPlacedEventJS;
    import BlockRightClickedEventJS = dev.latvian.mods.kubejs.block.BlockRightClickedEventJS;

    type ExtraSupportsBlock = null | Block | $wrapped<ResourceLocation>;

    interface BlockEvents {
        modification(callback: (event: BlockModificationEventJS) => void): void;
        modification(block: ExtraSupportsBlock, callback: (event: BlockModificationEventJS) => void): void;
        placed(callback: (event: BlockPlacedEventJS) => void): void;
        placed(block: ExtraSupportsBlock, callback: (event: BlockPlacedEventJS) => void): void;
        rightClicked(callback: (event: BlockRightClickedEventJS) => void): void;
        rightClicked(block: ExtraSupportsBlock, callback: (event: BlockRightClickedEventJS) => void): void;
    }

    import SimplePlayerEventJS = dev.latvian.mods.kubejs.player.SimplePlayerEventJS;
    import PlayerChatDecorateEventJS = dev.latvian.mods.kubejs.player.PlayerChatDecorateEventJS;

    interface PlayerEvents {
        tick(callback: (event: SimplePlayerEventJS) => void): void;
        chat(callback: (event: PlayerChatDecorateEventJS) => void): void;
    }
}

declare namespace internal.kjs.rhino {
    type JavaAdapter__ConstructorParams<T, TObject> = T extends new (...args: infer TParams) => TObject ? TParams : [];

    type JavaAdapter__Methods<T> = {
        [K in keyof T]: T[K] extends (...args: any[]) => any ? T[K] : never;
    };

    interface JavaAdapter {
        new <T extends $class<any>>(
            base: T,
            impl: Partial<JavaAdapter__Methods<T extends $class<infer TObject> ? TObject : never>>,
            ...args: JavaAdapter__ConstructorParams<T, T extends $class<infer TObject> ? TObject : never>
        ): $object<'__java__adapter', T extends $class<infer TObject> ? TObject : never>;
    }
}

// TODO: move to JavaWrapper
declare const Java: {
    loadClass: { <K extends keyof internal.kjs.LoadableClasses>(name: K): internal.kjs.LoadableClasses[K] };
};

declare const console: internal.dev.latvian.mods.kubejs.util.ConsoleJS;
declare const Platform: typeof internal.dev.latvian.mods.kubejs.script.PlatformWrapper;
declare const JavaMath: typeof internal.java.lang.Math;
declare const Utils: typeof internal.dev.latvian.mods.kubejs.bindings.UtilsWrapper;

declare const Item: typeof internal.dev.latvian.mods.kubejs.bindings.ItemWrapper;
declare const Ingredient: typeof internal.dev.latvian.mods.kubejs.bindings.IngredientWrapper;
declare const Fluid: typeof internal.dev.latvian.mods.kubejs.bindings.FluidWrapper;

declare const StartupEvents: internal.kjs.kubejs.StartupEvents;
declare const ServerEvents: internal.kjs.kubejs.ServerEvents;
declare const ItemEvents: internal.kjs.kubejs.ItemEvents;
declare const JEIEvents: internal.kjs.kubejs.JEIEvents;
declare const BlockEvents: internal.kjs.kubejs.BlockEvents;
declare const PlayerEvents: internal.kjs.kubejs.PlayerEvents;

declare const BlockProperties: typeof internal.net.minecraft.world.level.block.state.properties.BlockStateProperties;
declare const Direction: typeof internal.net.minecraft.core.Direction;

declare const JavaAdapter: internal.kjs.rhino.JavaAdapter;
