namespace internal.dev.latvian.mods.kubejs.misc {
    import BuilderBase = registry.BuilderBase;
    import MobEffect = net.minecraft.world.effect.MobEffect;
    import MobEffectCategory__Wrapper = net.minecraft.world.effect.MobEffectCategory__Wrapper;
    import ResourceLocation__Wrapper = net.minecraft.resources.ResourceLocation__Wrapper;
    import AttributeModifier$Operation__Wrapper = net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation__Wrapper;
    import Color__Wrapper = rhino.mod.util.color;

    class MobEffectBuilder extends BuilderBase<MobEffect> {
        modifyAttribute(
            attribute: ResourceLocation__Wrapper,
            identifier: string,
            d: number,
            operation: AttributeModifier$Operation__Wrapper
        ): this;
        category(c: MobEffectCategory__Wrapper): this;
        harmful(): this;
        beneficial(): this;
        effectTick(effectTick: MobEffectBuilder$EffectTickCallback__Wrapper): this;
        color(color: Color__Wrapper): this;
    }

    const __MobEffectBuilder$EffectTickCallback: unique symbol;
    interface MobEffectBuilder$EffectTickCallback {
        [__MobEffectBuilder$EffectTickCallback]: 0;
        applyEffectTick(livingEntity: LivingEntity, level: number): void;
    }

    type MobEffectBuilder$EffectTickCallback__Wrapper =
        | MobEffectBuilder$EffectTickCallback
        | MobEffectBuilder$EffectTickCallback['applyEffectTick'];

    class BasicMobEffect$Builder extends MobEffectBuilder {}
}
