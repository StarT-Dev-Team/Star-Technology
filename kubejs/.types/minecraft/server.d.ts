namespace internal.net.minecraft.server {
    class MinecraftServer {
        readonly __net_minecraft_server_MinecraftServer: unique symbol;
    }
}

namespace internal.net.minecraft.server.level {
    import Level = world.level.Level;

    class ServerLevel extends Level {
        readonly __net_minecraft_server_level_ServerLevel: unique symbol;
    }
}

namespace internal.kjs {
    interface LoadableClasses {
        'net.minecraft.server.level.ServerLevel': typeof internal.net.minecraft.server.level.ServerLevel;
    }
}
