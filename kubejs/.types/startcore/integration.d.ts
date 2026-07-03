declare namespace internal.com.startechnology.start_core.integration.kjs {
    import BlockBuilder__Blueprint = dev.latvian.mods.kubejs.block.BlockBuilder__Blueprint;
    import Supplier = java.util.function_.Supplier;

    interface FusionReflectorBlockBuilder extends $object<
        'com.startechnology.start_core.integration.kjs.FusionReflectorBlockBuilder',
        BlockBuilder__Blueprint<FusionReflectorBlockBuilder>
    > {
        tier(tier: number): this;
        material(material: $wrapped<Supplier<unknown>>): this;
        texture(texture: string): this;
        reflectorMaterial(material: $wrapped<Supplier<unknown>>): this;
    }
}
