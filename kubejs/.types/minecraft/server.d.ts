declare namespace internal.net.minecraft.server {
    interface MinecraftServer extends $object<'net.minecraft.server.MinecraftServer'> {}

    import RecipeManager = net.minecraft.world.item.crafting.RecipeManager;

    interface ReloadableServerResources extends $object<'net.minecraft.server.ReloadableServerResources'> {
        getRecipeManager(): RecipeManager;
        get recipeManager(): RecipeManager;
    }
}

declare namespace internal.net.minecraft.server.level {
    import Level = world.level.Level;

    interface ServerLevel extends $object<'net.minecraft.server.level.ServerLevel', Level> {}

    const ServerLevel: $class<ServerLevel>;
}

declare namespace internal.kjs {
    interface LoadableClasses {
        'net.minecraft.server.level.ServerLevel': typeof internal.net.minecraft.server.level.ServerLevel;
    }
}
