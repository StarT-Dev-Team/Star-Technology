declare namespace internal.dev.latvian.mods.kubejs.player {
    import LivingEntityEventJS = entity.LivingEntityEventJS;
    import Player = net.minecraft.world.entity.player.Player;

    interface PlayerEventJS extends LivingEntityEventJS {
        readonly __dev_latvian_mods_kubejs_player_PlayerEventJS: unique symbol;
    }

    class PlayerEventJS extends LivingEntityEventJS {
        getEntity(): Player;
        get entity(): Player;
        getPlayer(): Player;
        get player(): Player;
        hasGameStage(stage: string): boolean;
        addGameStage(stage: string): void;
        removeGameStage(stage: string): void;
    }
}
