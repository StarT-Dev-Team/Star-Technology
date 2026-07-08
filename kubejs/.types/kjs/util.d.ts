declare namespace internal.dev.latvian.mods.kubejs.util {
    interface ScheduledEvents$ScheduledEvent extends $object<'dev.latvian.mods.kubejs.util.ScheduledEvents$ScheduledEvent'> {}

    interface ScheduledEvents$Callback extends $object<{
        name: 'dev.latvian.mods.kubejs.util.ScheduledEvents$Callback';
        functionalInterface: 'onCallback';
    }> {
        onCallback(event: ScheduledEvents$ScheduledEvent): void;
    }

    import ConsoleLine = dev.latvian.mods.kubejs.script.ConsoleLine;
    // import Pattern = java.util.regex.Pattern;
    // import Throwable = java.lang.Throwable;

    interface ConsoleJS extends $object<'dev.latvian.mods.kubejs.util.ConsoleJS'> {
        log(...message: any[]): void;
        info(message: any): void;
        infof(message: string, ...args: any[]): void;
        warn(message: any): ConsoleLine;
        // warn(message: string, error: Throwable, exitPattern: Pattern | null): ConsoleLine;
        // warn(message: string, error: Throwable): ConsoleLine;
        warnf(message: string, ...args: any[]): void;
        error(message: any): ConsoleLine;
        // error(message: string, error: Throwable, exitPattern: Pattern | null): ConsoleLine;
        // error(message: string, error: Throwable): ConsoleLine;
        errorf(message: string, ...args: any[]): void;
        debug(message: any): ConsoleLine;
        debugf(message: any, ...args: any[]): ConsoleLine;
    }

    import Object = java.lang.Object;

    interface UtilsJS extends $object<'dev.latvian.mods.kubejs.util.UtilsJS'> {}

    import BlockPos = net.minecraft.core.BlockPos;

    const UtilsJS: $class<UtilsJS> & {
        blockPosOf(o: $wrapped<BlockPos>): BlockPos;
    };
}

declare namespace internal.kjs {
    interface LoadableClasses {
        'dev.latvian.mods.kubejs.util.UtilsJS': typeof internal.dev.latvian.mods.kubejs.util.UtilsJS;
    }
}
