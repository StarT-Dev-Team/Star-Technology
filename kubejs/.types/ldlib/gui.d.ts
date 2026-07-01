declare namespace internal.com.lowdragmc.lowdraglib.gui.texture {
    interface IGuiTexture {
        readonly __com_lowdragmc_lowdraglib_gui_texture_IGuiTexture: unique symbol;

        draw(
            var1: GuiGraphics,
            var2: number,
            var3: number,
            var4: number,
            var5: number,
            var6: number,
            var7: number
        ): void;
    }

    abstract class TransformTexture implements IGuiTexture {
        draw(
            var1: GuiGraphics,
            var2: number,
            var3: number,
            var4: number,
            var5: number,
            var6: number,
            var7: number
        ): void;

        drawInternal(
            var1: GuiGraphics,
            var2: number,
            var3: number,
            var4: number,
            var5: number,
            var6: number,
            var7: number
        ): void;
    }

    class ResourceTexture extends TransformTexture {
        getSubTexture(offsetX: number, offsetY: number, width: number, height: number): ResourceTexture;
    }

    class ResourceBorderTexture extends ResourceTexture {}

    class ProgressTexture extends TransformTexture {}

    class GuiTextureGroup extends TransformTexture {
        constructor();
        constructor(textures: IGuiTexture[]);
        constructor(...textures: IGuiTexture[]);
    }

    import Enum = java.lang.Enum;

    class ProgressTexture$FillDirection extends Enum {
        static LEFT_TO_RIGHT: ProgressTexture$FillDirection;
        static RIGHT_TO_LEFT: ProgressTexture$FillDirection;
        static UP_TO_DOWN: ProgressTexture$FillDirection;
        static DOWN_TO_UP: ProgressTexture$FillDirection;
        static ALWAYS_FULL: ProgressTexture$FillDirection;
    }

    type ProgressTexture$FillDirection__Wrapper =
        | ProgressTexture$FillDirection
        | EnumKeys<typeof ProgressTexture$FillDirection>;
}
