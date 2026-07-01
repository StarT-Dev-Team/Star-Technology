declare namespace internal.dev.latvian.mods.kubejs.core {
    import ItemStackSet = item.ItemStackSet;
    import Ingredient__Wrapper = net.minecraft.world.item.crafting.Ingredient__Wrapper;
    import Ingredient = net.minecraft.world.item.crafting.Ingredient;

    interface IngredientKJS {
        getStacks(): ItemStackSet;
        get stacks(): ItemStackSet;
        getDisplayStacks(): ItemStackSet;
        get displayStacks(): ItemStackSet;
        subtract(other: Ingredient__Wrapper): Ingredient;
    }

    interface MinecraftServerKJS extends MinecraftEnvironmentKJS {
        runCommand(command: string): number;
        runCommandSilent(command: string): number;
    }

    import ScheduledEvents$Callback__Wrapper = dev.latvian.mods.kubejs.util.ScheduledEvents$Callback__Wrapper;
    import ScheduledEvents$ScheduledEvent = dev.latvian.mods.kubejs.util.ScheduledEvents$ScheduledEvent;

    interface MinecraftEnvironmentKJS {
        scheduleInTicks(ticks: number, callback: ScheduledEvents$Callback__Wrapper): ScheduledEvents$ScheduledEvent;
    }

    import ResourceLocation__Wrapper = net.minecraft.resources.ResourceLocation__Wrapper;

    interface ItemStackKJS {
        getId(): string;
        get id(): string;
        hasTag(tag: ResourceLocation__Wrapper): boolean;
    }

    import Component__Wrapper = net.minecraft.network.chat.Component__Wrapper;

    interface EntityKJS {
        tell(message: Component__Wrapper): void;
    }

    import ItemStack = net.minecraft.world.item.ItemStack;

    interface LivingEntityKJS {
        swing(): void;
        getMainHandItem(): ItemStack;
        get mainHandItem(): ItemStack;
    }

    import SoundType__Wrapper = net.minecraft.world.level.block.SoundType;
    import Consumer__Wrapper = java.util.function_.Consumer__Wrapper;
    import RandomTickCallbackJS = block.RandomTickCallbackJS;

    interface BlockKJS {
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
        setRandomTickCallback(callback: Consumer__Wrapper<RandomTickCallbackJS>): void;
        set randomTickCallback(callback: Consumer__Wrapper<RandomTickCallbackJS>);
        setSoundType(v: SoundType__Wrapper): void;
        set soundType(v: SoundType__Wrapper);
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
    }

    import LivingEntityKJS = dev.latvian.mods.kubejs.core.LivingEntityKJS;
    interface LivingEntity extends LivingEntityKJS {}
}

declare namespace internal.net.minecraft.world.level.block {
    import BlockKJS = dev.latvian.mods.kubejs.core.BlockKJS;
    interface Block extends BlockKJS {}
}
