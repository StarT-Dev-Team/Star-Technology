namespace internal.dev.latvian.mods.rhino.mod.util {
    interface JsonSerializable {
        __dev_latvian_mods_rhino_mod_util_JsonSerializable: unique symbol;
        toJson(): JsonElement;
    }
}
namespace internal.dev.latvian.mods.rhino.mod.util.color {
    const __Color: unique symbol;
    interface Color {
        [__Color]: 0;
    }

    type Color__Wrapper = Color | string | number;
}
