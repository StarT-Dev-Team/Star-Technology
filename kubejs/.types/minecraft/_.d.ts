declare namespace internal.kjs {
    interface LoadableClasses {
        'net.minecraft.world.item.ItemStack': typeof net.minecraft.world.item.ItemStack;
    }
}

declare namespace internal.net.minecraft {
    interface ChatFormatting extends $object<'net.minecraft.ChatFormatting'> {}

    const ChatFormatting: $class<ChatFormatting> & {
        BLACK: ChatFormatting;
        DARK_BLUE: ChatFormatting;
        DARK_GREEN: ChatFormatting;
        DARK_AQUA: ChatFormatting;
        DARK_RED: ChatFormatting;
        DARK_PURPLE: ChatFormatting;
        GOLD: ChatFormatting;
        GRAY: ChatFormatting;
        DARK_GRAY: ChatFormatting;
        BLUE: ChatFormatting;
        GREEN: ChatFormatting;
        AQUA: ChatFormatting;
        RED: ChatFormatting;
        LIGHT_PURPLE: ChatFormatting;
        YELLOW: ChatFormatting;
        WHITE: ChatFormatting;
        OBFUSCATED: ChatFormatting;
        BOLD: ChatFormatting;
        STRIKETHROUGH: ChatFormatting;
        UNDERLINE: ChatFormatting;
        ITALIC: ChatFormatting;
        RESET: ChatFormatting;
    };
}

declare const Block: typeof internal.net.minecraft.world.level.block.Block;
declare const Text: typeof internal.dev.latvian.mods.kubejs.bindings.TextWrapper;
declare const Component: typeof internal.dev.latvian.mods.kubejs.bindings.TextWrapper;
