declare namespace internal.net.minecraft.network.chat {
    interface Component extends $object<'net.minecraft.network.chat.Component'> {
        getString(): string;
        getString(maxLength: number): string;
    }

    const Component: $class<Component> & {};

    interface MutableComponent extends $object<'net.minecraft.network.chat.MutableComponent', Component> {}

    const MutableComponent: $class<MutableComponent> & {};
}
