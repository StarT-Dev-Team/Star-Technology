declare namespace internal.com.startechnology.start_core.block.arboreal_extractor {
    import Enum = java.lang.Enum;
    import StringRepresentable = net.minecraft.util.StringRepresentable;

    interface TreeType extends $object<
        { name: 'com.startechnology.start_core.block.arboreal_extractor.TreeType'; enumClass: typeof TreeType },
        Enum<TreeType>,
        StringRepresentable
    > {}

    const TreeType: $class<TreeType> & {
        RESIN_PRODUCING: TreeType;
        LATEX_PRODUCING: TreeType;
        SAP_PRODUCING: TreeType;
    };
}
