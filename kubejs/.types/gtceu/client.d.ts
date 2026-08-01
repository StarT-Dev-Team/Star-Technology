declare namespace internal.com.gregtechceu.gtceu.client {}

declare namespace internal.com.gregtechceu.gtceu.client.util {
    import UnaryOperator = java.util.function_.UnaryOperator;
    import Style = net.minecraft.network.chat.Style;
    import ChatFormatting = net.minecraft.ChatFormatting;
    import MutableComponent = net.minecraft.network.chat.MutableComponent;

    interface TooltipHelper extends $object<'com.gregtechceu.gtceu.client.util.TooltipHelper'> {}

    const TooltipHelper: $class<TooltipHelper> & {
        RAINBOW_HSL: UnaryOperator<Style>;
        RAINBOW_HSL_SLOW: UnaryOperator<Style>;
        RAINBOW_HSL_FAST: UnaryOperator<Style>;
        RAINBOW_FAST: GTFormattingCode;
        RAINBOW: GTFormattingCode;
        RAINBOW_SLOW: GTFormattingCode;
        BLINKING_CYAN: GTFormattingCode;
        BLINKING_RED: GTFormattingCode;
        BLINKING_ORANGE: GTFormattingCode;
        BLINKING_GRAY: GTFormattingCode;
        createNewCode(rate: number, codes: ChatFormatting[]): GTFormattingCode;
        onClientTick(): void;
        rainbowify(component: MutableComponent): MutableComponent;
    };

    interface GTFormattingCode extends $object<'com.gregtechceu.gtceu.client.util.TooltipHelper$GTFormattingCode'> {}

    const GTFormattingCode: $class<GTFormattingCode> & {};
}

declare namespace internal.kjs {
    interface LoadableClasses {
        'com.gregtechceu.gtceu.client.util.TooltipHelper': typeof internal.com.gregtechceu.gtceu.client.util.TooltipHelper;
    }
}
