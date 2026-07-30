declare namespace internal.net.minecraft.network.chat {
    import FormattedCharSequence = net.minecraft.util.FormattedCharSequence;

    interface Component extends $object<'net.minecraft.network.chat.Component'> {
        getString(): string;
        getString(maxLength: number): string;
        getVisualOrderText(): FormattedCharSequence;
        get visualOrderText(): FormattedCharSequence;
    }

    const Component: $class<Component> & {};

    interface MutableComponent extends $object<'net.minecraft.network.chat.MutableComponent', Component> {
        withStyle(style: any): MutableComponent;
        append(component: Component): MutableComponent;
    }

    const MutableComponent: $class<MutableComponent> & {};

    interface Style extends $object<'net.minecraft.network.chat.Style'> {}

    const Style: $class<Style> & {};
}
