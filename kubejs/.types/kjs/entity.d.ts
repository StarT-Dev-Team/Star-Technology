namespace internal.dev.latvian.mods.kubejs.entity {
    abstract class EntityEventJS {
        readonly __dev_latvian_mods_kubejs_entity_EntityEventJS: unique symbol;
        getEntity(): Entity;
        get entity(): Entity;
        getPlayer(): Player | null;
        get player(): Player | null;
        getLevel(): Level;
        get level(): Level;
    }

    abstract class LivingEntityEventJS extends EntityEventJS {
        readonly __dev_latvian_mods_kubejs_entity_LivingEntityEventJS: unique symbol;
        getEntity(): LivingEntity;
        get entity(): LivingEntity;
    }
}
