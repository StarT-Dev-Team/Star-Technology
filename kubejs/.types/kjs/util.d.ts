namespace internal.dev.latvian.mods.kubejs.util {
    class ScheduledEvents$ScheduledEvent {
        readonly __dev_latvian_mods_kubejs_util_ScheduledEvents$ScheduledEvent: unique symbol;
    }

    class ScheduledEvents$Callback {
        readonly __dev_latvian_mods_kubejs_util_ScheduledEvents$Callback: unique symbol;
        onCallback(event: ScheduledEvents$ScheduledEvent): void;
    }

    type ScheduledEvents$Callback__Wrapper = ScheduledEvents$Callback | ScheduledEvents$Callback['onCallback'];
}
