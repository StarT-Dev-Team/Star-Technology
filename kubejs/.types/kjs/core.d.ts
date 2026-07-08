declare namespace internal.dev.latvian.mods.kubejs.core {
    import ItemStackSet = item.ItemStackSet;
    import Ingredient = net.minecraft.world.item.crafting.Ingredient;

    interface IngredientKJS {
        getStacks(): ItemStackSet;
        get stacks(): ItemStackSet;
        getDisplayStacks(): ItemStackSet;
        get displayStacks(): ItemStackSet;
        subtract(other: $wrapped<Ingredient>): Ingredient;
    }

    interface MinecraftServerKJS extends MinecraftEnvironmentKJS {
        runCommand(command: string): number;
        runCommandSilent(command: string): number;
    }

    import ScheduledEvents$Callback = dev.latvian.mods.kubejs.util.ScheduledEvents$Callback;
    import ScheduledEvents$ScheduledEvent = dev.latvian.mods.kubejs.util.ScheduledEvents$ScheduledEvent;

    interface MinecraftEnvironmentKJS {
        scheduleInTicks(ticks: number, callback: $wrapped<ScheduledEvents$Callback>): ScheduledEvents$ScheduledEvent;
    }

    import ResourceLocation = net.minecraft.resources.ResourceLocation;

    interface ItemStackKJS {
        getId(): string;
        get id(): string;
        hasTag(tag: $wrapped<ResourceLocation>): boolean;
    }

    import Component = net.minecraft.network.chat.Component;
    import EntityPotionEffectsJS = entity.EntityPotionEffectsJS;
    import Level = net.minecraft.world.level.Level;
    import CompoundTag = net.minecraft.nbt.CompoundTag;

    interface EntityKJS {
        tell(message: $wrapped<Component>): void;
        getPotionEffects(): EntityPotionEffectsJS;
        get potionEffects(): EntityPotionEffectsJS;
        getLevel(): Level;
        get level(): Level;
        getNbt(): $reverseWrapped<CompoundTag>;
        get nbt(): $reverseWrapped<CompoundTag>;
    }

    import ItemStack = net.minecraft.world.item.ItemStack;

    interface LivingEntityKJS {
        swing(): void;
        getMainHandItem(): ItemStack;
        get mainHandItem(): ItemStack;
        getOffHandItem(): ItemStack;
        get offHandItem(): ItemStack;
        getHeadArmorItem(): ItemStack;
        get headArmorItem(): ItemStack;
        getChestArmorItem(): ItemStack;
        get chestArmorItem(): ItemStack;
        getLegsArmorItem(): ItemStack;
        get legsArmorItem(): ItemStack;
        getFeetArmorItem(): ItemStack;
        get feetArmorItem(): ItemStack;
    }

    import SoundType = net.minecraft.world.level.block.SoundType;
    import Consumer = java.util.function_.Consumer;
    import RandomTickCallbackJS = block.RandomTickCallbackJS;

    interface BlockKJS {
        get idLocation(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        get id(): string;
        getId(): string;
        get mod(): string;
        getMod(): string;

        setHasCollision(v: boolean): void;
        set hasCollision(v: boolean);
        setExplosionResistance(v: number): void;
        set explosionResistance(v: number);
        setIsRandomlyTicking(v: boolean): void;
        set isRandomlyTicking(v: boolean);
        setRandomTickCallback(callback: $wrapped<Consumer<RandomTickCallbackJS>>): void;
        set randomTickCallback(callback: $wrapped<Consumer<RandomTickCallbackJS>>);
        setSoundType(v: $wrapped<SoundType>): void;
        set soundType(v: $wrapped<SoundType>);
        setFriction(v: number): void;
        set friction(v: number);
        setSpeedFactor(v: number): void;
        set speedFactor(v: number);
        setJumpFactor(v: number): void;
        set jumpFactor(v: number);
        setNameKey(key: String): void;
        set nameKey(key: String);
        setDestroySpeed(v: number): void;
        set destroySpeed(v: number);
        setLightEmission(v: number): void;
        set lightEmission(v: number);
        setRequiresTool(v: boolean): void;
        set requiresTool(v: boolean);
    }

    interface IngredientSupplierKJS {
        asIngredient(): Ingredient;
    }

    import MutableComponent = internal.net.minecraft.network.chat.MutableComponent;

    interface ComponentKJS {
        clickRunCommand(text: string): MutableComponent;
        clickSuggestCommand(text: string): MutableComponent;
        clickCopy(text: string): MutableComponent;
        hover(s: $wrapped<Component> | null): MutableComponent;
    }

    interface InventoryKJS {
        isMutable(): boolean;
        find(): number;
        find(ingredient: $wrapped<Ingredient>): number;
        count(): number;
    }

    interface PlayerKJS {
        give(item: $wrapped<ItemStack>): void;
    }

    interface LevelKJS {
        getName(): Component;
        get name(): Component;
        getDimension(): ResourceLocation;
        get dimension(): ResourceLocation;
        isOverworld(): boolean;
    }
}

declare namespace internal.net.minecraft.world {
    import InventoryKJS = dev.latvian.mods.kubejs.core.InventoryKJS;
    interface Container extends InventoryKJS {}
}

declare namespace internal.net.minecraft.world.item.crafting {
    import IngredientKJS = dev.latvian.mods.kubejs.core.IngredientKJS;
    interface Ingredient extends IngredientKJS {}
}

declare namespace internal.net.minecraft.server {
    import MinecraftServerKJS = dev.latvian.mods.kubejs.core.MinecraftServerKJS;
    interface MinecraftServer extends MinecraftServerKJS {}
}

declare namespace internal.net.minecraft.world.item {
    import ItemStackKJS = dev.latvian.mods.kubejs.core.ItemStackKJS;
    interface ItemStack extends ItemStackKJS {}
}

declare namespace internal.net.minecraft.world.entity {
    import EntityKJS = dev.latvian.mods.kubejs.core.EntityKJS;
    interface Entity extends EntityKJS {
        getUsername(): string;
        get username(): string;
        age: number;
    }

    import LivingEntityKJS = dev.latvian.mods.kubejs.core.LivingEntityKJS;
    interface LivingEntity extends LivingEntityKJS {}
}

declare namespace internal.net.minecraft.world.entity.player {
    import PlayerKJS = dev.latvian.mods.kubejs.core.PlayerKJS;
    interface Player extends PlayerKJS {}
}

declare namespace internal.net.minecraft.world.level {
    import LevelKJS = dev.latvian.mods.kubejs.core.LevelKJS;
    interface Level extends LevelKJS {}
}

declare namespace internal.net.minecraft.world.level.block {
    import BlockKJS = dev.latvian.mods.kubejs.core.BlockKJS;
    interface Block extends BlockKJS {}
}

declare namespace internal.net.minecraft.network.chat {
    import ComponentKJS = dev.latvian.mods.kubejs.core.ComponentKJS;
    interface Component extends ComponentKJS {}
}
