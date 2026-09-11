declare namespace internal.com.mojang.brigadier {
    import CommandContext = context.CommandContext;

    interface Command<S> extends $object<{ name: 'com.mojang.brigadier.Command'; functionalInterface: 'run' }> {
        run(context: CommandContext<S>): number;
    }
}

declare namespace internal.com.mojang.brigadier.context {
    interface CommandContext<S> extends $object<'com.mojang.brigadier.context.CommandContext'> {
        getChild(): CommandContext<S>;
        get child(): CommandContext<S>;
        getLastChild(): CommandContext<S>;
        get lastChild(): CommandContext<S>;
        getCommand(): CommandContext<S>;
        get command(): Command<S>;
        getLastChild(): Command<S>;
        get source(): S;
        getSource(): S;
    }
}

declare namespace internal.com.mojang.brigadier.builder {
    import CommandNode = tree.CommandNode;

    interface ArgumentBuilder<
        S,
        T extends ArgumentBuilder<S, T>,
    > extends $object<'com.mojang.brigadier.builder.ArgumentBuilder'> {
        then(argument: ArgumentBuilder<S, any>): T;
        then(argument: CommandNode<S>): T;
        executes(command: $wrapped<Command<S>>): T;
    }

    interface LiteralArgumentBuilder<S> extends $object<
        'com.mojang.brigadier.builder.LiteralArgumentBuilder',
        ArgumentBuilder<S, LiteralArgumentBuilder<S>>
    > {}

    interface RequiredArgumentBuilder<S, T> extends $object<
        'com.mojang.brigadier.builder.RequiredArgumentBuilder',
        ArgumentBuilder<S, RequiredArgumentBuilder<S, T>>
    > {}
}

declare namespace internal.com.mojang.brigadier.tree {
    import Comparable = java.lang.Comparable;

    interface CommandNode<S> extends Comparable<CommandNode<S>> {}

    interface LiteralCommandNode<S> extends $object<'com.mojang.brigadier.tree.LiteralCommandNode', CommandNode<S>> {}
}

declare namespace internal.com.mojang.brigadier.arguments {
    interface ArgumentType<S> extends $object<'com.mojang.brigadier.arguments.ArgumentType'> {}
}
