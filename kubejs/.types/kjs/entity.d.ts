declare namespace internal.dev.latvian.mods.kubejs.entity {
    import LevelEventJS = level.LevelEventJS;
    import Entity = net.minecraft.world.entity.Entity;
    import Player = net.minecraft.world.entity.player.Player;

    interface EntityEventJS extends LevelEventJS {
        readonly __dev_latvian_mods_kubejs_entity_EntityEventJS: unique symbol;
    }

    class EntityEventJS extends LevelEventJS {
        getEntity(): Entity;
        get entity(): Entity;
        getPlayer(): Player | null;
        get player(): Player | null;
    }

    import LivingEntity = net.minecraft.world.entity.LivingEntity;

    interface LivingEntityEventJS extends EntityEventJS {
        readonly __dev_latvian_mods_kubejs_entity_LivingEntityEventJS: unique symbol;
    }

    class LivingEntityEventJS extends EntityEventJS {
        getEntity(): LivingEntity;
        get entity(): LivingEntity;
    }
}
