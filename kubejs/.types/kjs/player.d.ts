declare namespace internal.dev.latvian.mods.kubejs.player {
    import LivingEntityEventJS = entity.LivingEntityEventJS;
    import Player = net.minecraft.world.entity.player.Player;

    interface PlayerEventJS extends $object<'dev.latvian.mods.kubejs.player.PlayerEventJS', LivingEntityEventJS> {
        getEntity(): Player;
        get entity(): Player;
        getPlayer(): Player;
        get player(): Player;
        hasGameStage(stage: string): boolean;
        addGameStage(stage: string): void;
        removeGameStage(stage: string): void;
    }

    interface SimplePlayerEventJS extends $object<
        'dev.latvian.mods.kubejs.player.SimplePlayerEventJS',
        PlayerEventJS
    > {}

    interface PlayerChatDecorateEventJS extends $object<
        'dev.latvian.mods.kubejs.player.PlayerChatDecorateEventJS',
        PlayerEventJS
    > {
        getMessage(): string;
        get message(): string;
    }

    const PlayerChatDecorateEventJS: $class<PlayerChatDecorateEventJS> & {};
}
