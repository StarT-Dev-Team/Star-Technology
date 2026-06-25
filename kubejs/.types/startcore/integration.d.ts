namespace internal.com.startechnology.start_core.integration.kjs {
    import BlockBuilder = dev.latvian.mods.kubejs.block.BlockBuilder;
    import Supplier__Wrapper = java.util.function_.Supplier__Wrapper;

    class FusionReflectorBlockBuilder extends BlockBuilder {
        tier(tier: number): this;
        material(material: Supplier__Wrapper): this;
        texture(texture: string): this;
        reflectorMaterial(material: Supplier__Wrapper): this;
    }
}
