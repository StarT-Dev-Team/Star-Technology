namespace internal.com.google.gson {
    class JsonElement {
        __com_google_gson_JsonElement: unique symbol;
    }

    import CompoundTag = net.minecraft.nbt.CompoundTag;
    import JsonSerializable = dev.latvian.mods.rhino.mod.util.JsonSerializable;

    type JsonElement__Wrapper =
        | JsonElement
        | CompoundTag
        | { [P in string]: JsonElement__Wrapper }
        | JsonSerializable
        | string
        | boolean
        | number
        | null;

    class JsonObject extends JsonElement {
        __com_google_gson_JsonObject: unique symbol;

        constructor();
        add(property: string, value: JsonElement__Wrapper): void;
        remove(property: string): JsonElement;
    }
}

namespace internal.kjs {
    interface LoadableClasses {
        'com.google.gson.JsonObject': typeof internal.com.google.gson.JsonObject;
    }
}
