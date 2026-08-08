declare namespace internal.com.mojang.brigadier {
    interface Command<S> extends $object<'com.mojang.brigadier.Command'> {}
}

declare namespace internal.com.mojang.brigadier.builder {
    import Commands = internal.net.minecraft.commands.Commands;

    interface ArgumentBuilder<S, T> extends $object<'com.mojang.brigadier.builder.LiteralArgumentBuilder'> {
        then(dispatcher: unknown): ArgumentBuilder<S, S>;
        executes(contextFunction: number): Commands;
    }

    interface LiteralArgumentBuilder<S> extends $object<
        'com.mojang.brigadier.builder.LiteralArgumentBuilder',
        ArgumentBuilder<S, S>
    > {}

    interface RequiredArgumentBuilder<S, T> extends $object<'com.mojang.brigadier.builder.RequiredArgumentBuilder'> {}
}

declare namespace internal.com.mojang.brigadier.arguments {
    interface ArgumentType<S> extends $object<'com.mojang.brigadier.arguments.ArgumentType'> {}
}
