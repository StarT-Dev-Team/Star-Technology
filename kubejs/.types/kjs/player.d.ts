namespace internal.dev.latvian.mods.kubejs.player {
    import EntityEventJS = entity.EntityEventJS;

    class PlayerEventJS extends EntityEventJS {
        readonly __dev_latvian_mods_kubejs_player_PlayerEventJS: unique symbol;
        getEntity(): Player;
        get entity(): Player;
        getPlayer(): Player;
        get player(): Player;
        hasGameStage(stage: string): boolean;
        addGameStage(stage: string): void;
        removeGameStage(stage: string): void;
    }
}
