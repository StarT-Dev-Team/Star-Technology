declare namespace internal.dev.latvian.mods.kubejs.command {
    import EventJS = event.EventJS;
    import Commands = internal.net.minecraft.commands.Commands;
    import CommandSourceStack = internal.net.minecraft.commands.CommandSourceStack;
    import LiteralArgumentBuilder = com.mojang.brigadier.builder.LiteralArgumentBuilder;
    import LiteralCommandNode = com.mojang.brigadier.tree.LiteralCommandNode;

    interface CommandRegistryEventJS extends $object<'dev.latvian.mods.kubejs.server.ServerEventsJS', EventJS> {
        register(command: LiteralArgumentBuilder<CommandSourceStack>): LiteralCommandNode<CommandSourceStack>;
        getCommands(): typeof Commands;
        get commands(): typeof Commands;
        getArguments(): unknown;
        get arguments(): unknown;
    }
}
