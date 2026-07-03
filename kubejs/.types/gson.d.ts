declare namespace internal.com.google.gson {
    interface JsonElement extends $object<'com.google.gson.JsonElement'> {}

    const JsonElement: $class<JsonElement> & {};

    interface JsonObject extends $object<'com.google.gson.JsonObject', JsonElement> {
        add(property: string, value: $wrapped<JsonElement>): void;
        remove(property: string): JsonElement;
    }

    const JsonObject: $class<JsonObject> & {
        new (): JsonObject;
    };

    interface JsonArray extends $object<'com.google.gson.JsonArray', JsonElement> {}

    interface JsonPrimitive extends $object<'com.google.gson.JsonPrimitive', JsonElement> {}
}

declare namespace internal.kjs {
    interface LoadableClasses {
        'com.google.gson.JsonObject': typeof internal.com.google.gson.JsonObject;
    }
}
