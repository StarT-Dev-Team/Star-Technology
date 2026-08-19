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

    interface ServerLevel extends $object<'net.minecraft.server.level.ServerLevel', Level> {
        getChunkSource(): ServerChunkCache;
        structureManager(): StructureManager;
    }

    const ServerLevel: $class<ServerLevel>;

    import ChunkSource = world.level.chunk.ChunkSource;
    import ChunkGenerator = world.level.chunk.ChunkGenerator;

    interface ServerChunkCache extends $object<'net.minecraft.server.level.ServerChunkCache', ChunkSource> {
        getGenerator(): ChunkGenerator;
    }

    import SectionPos = core.SectionPos;
    import Structure = world.level.levelgen.structure.Structure;
    import StructureStart = world.level.levelgen.structure.StructureStart;
    import StructureAccess = world.level.chunk.StructureAccess;

    interface StructureManager extends $object<'net.minecraft.server.level.StructureManager'> {
        getStartForStructure(
            sectionPos: SectionPos,
            structure: Structure,
            structureAccess: StructureAccess
        ): StructureStart | null;
    }

    import Player = world.entity.player.Player;

    interface ServerPlayer extends $object<'net.minecraft.server.ServerPlayer', Player> {}
}

declare namespace internal.kjs {
    interface LoadableClasses {
        'net.minecraft.server.level.ServerLevel': typeof internal.net.minecraft.server.level.ServerLevel;
    }
}
