declare namespace internal.net.createmod.catnip.levelWrappers {
    import Level = net.minecraft.world.level.Level;

    interface WrappedLevel extends $object<'net.createmod.catnip.levelWrappers.WrappedLevel', Level> {}

    interface SchematicLevel extends $object<'net.createmod.catnip.levelWrappers.SchematicLevel', WrappedLevel> {}
}

declare namespace internal.net.createmod.catnip.data {
    interface Pair<F, S> extends $object<'net.createmod.catnip.data.Pair'> {
        getFirst(): F;
        get first(): F;
        getSecond(): S;
        get second(): S;
    }
}
