declare namespace internal.dev.latvian.mods.kubejs.misc {
    import BuilderBase = registry.BuilderBase;
    import MobEffect = net.minecraft.world.effect.MobEffect;
    import MobEffectCategory = net.minecraft.world.effect.MobEffectCategory;
    import ResourceLocation = net.minecraft.resources.ResourceLocation;
    import AttributeModifier$Operation = net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation;
    import Color = rhino.mod.util.color.Color;

    interface MobEffectBuilder extends $object<
        'dev.latvian.mods.kubejs.misc.MobEffectBuilder',
        BuilderBase<MobEffect>
    > {
        modifyAttribute(
            attribute: $wrapped<ResourceLocation>,
            identifier: string,
            d: number,
            operation: $wrapped<AttributeModifier$Operation>
        ): this;
        category(c: $wrapped<MobEffectCategory>): this;
        harmful(): this;
        beneficial(): this;
        effectTick(effectTick: $wrapped<MobEffectBuilder$EffectTickCallback>): this;
        color(color: $wrapped<Color>): this;
    }

    import LivingEntity = net.minecraft.world.entity.LivingEntity;

    interface MobEffectBuilder$EffectTickCallback extends $object<{
        name: 'dev.latvian.mods.kubejs.misc.MobEffectBuilder$EffectTickCallback';
        functionalInterface: 'applyEffectTick';
    }> {
        applyEffectTick(livingEntity: LivingEntity, level: number): void;
    }

    interface BasicMobEffect$Builder extends $object<
        'dev.latvian.mods.kubejs.misc.BasicMobEffect$Builder',
        MobEffectBuilder
    > {}
}
