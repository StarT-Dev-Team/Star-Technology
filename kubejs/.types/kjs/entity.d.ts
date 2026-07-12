declare namespace internal.dev.latvian.mods.kubejs.entity {
    import LevelEventJS = level.LevelEventJS;
    import Entity = net.minecraft.world.entity.Entity;
    import Player = net.minecraft.world.entity.player.Player;

    interface EntityEventJS extends $object<'dev.latvian.mods.kubejs.entity.EntityEventJS', LevelEventJS> {
        getEntity(): Entity;
        get entity(): Entity;
        getPlayer(): Player | null;
        get player(): Player | null;
    }

    import LivingEntity = net.minecraft.world.entity.LivingEntity;

    interface LivingEntityEventJS extends $object<'dev.latvian.mods.kubejs.entity.LivingEntityEventJS', EntityEventJS> {
        getEntity(): LivingEntity;
        get entity(): LivingEntity;
    }

    import MobEffect = net.minecraft.world.effect.MobEffect;

    interface EntityPotionEffectsJS extends $object<'dev.latvian.mods.kubejs.entity.EntityPotionEffectsJS'> {
        add(mobEffect: $wrapped<MobEffect>): void;
        add(mobEffect: $wrapped<MobEffect>, duration: number): void;
        add(mobEffect: $wrapped<MobEffect>, duration: number, amplifier: number): void;
        add(
            mobEffect: $wrapped<MobEffect>,
            duration: number,
            amplifier: number,
            ambient: boolean,
            showParticles: boolean
        ): void;
    }
}
