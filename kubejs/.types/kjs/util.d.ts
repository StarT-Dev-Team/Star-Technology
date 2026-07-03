declare namespace internal.dev.latvian.mods.kubejs.util {
    interface ScheduledEvents$ScheduledEvent extends $object<'dev.latvian.mods.kubejs.util.ScheduledEvents$ScheduledEvent'> {}

    interface ScheduledEvents$Callback extends $object<{
        name: 'dev.latvian.mods.kubejs.util.ScheduledEvents$Callback';
        functionalInterface: 'onCallback';
    }> {
        onCallback(event: ScheduledEvents$ScheduledEvent): void;
    }
}
