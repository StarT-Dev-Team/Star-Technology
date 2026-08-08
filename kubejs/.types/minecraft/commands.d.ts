declare namespace internal.net.minecraft.commands {
    import ArgumentType = com.mojang.brigadier.arguments.ArgumentType;

    import LiteralArgumentBuilder = com.mojang.brigadier.builder.LiteralArgumentBuilder;

    import RequiredArgumentBuilder = com.mojang.brigadier.builder.RequiredArgumentBuilder;

    interface CommandSourceStack extends $object<'net.minecraft.commands.CommandSourceStack'> {}

    interface Commands extends $object<'net.minecraft.commands.Commands'> {
        literal(literal: string): LiteralArgumentBuilder<CommandSourceStack>;
        argument<T>(name: string, type: ArgumentType<T>): RequiredArgumentBuilder<CommandSourceStack, T>;
        executes(): unknown;
    }
}
