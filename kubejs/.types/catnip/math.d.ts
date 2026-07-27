declare namespace internal.net.createmod.catnip.math {
    interface Pointing extends $object<{ name: 'net.createmod.catnip.math.Pointing'; enumClass: typeof Pointing }> {}

    const Pointing: $class<Pointing> & {
        UP: Pointing;
        LEFT: Pointing;
        DOWN: Pointing;
        RIGHT: Pointing;
    };
}
