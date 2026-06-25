declare namespace internal.com.lowdragmc.lowdraglib.gui.texture {
    interface IGuiTexture {
        draw(var1: GuiGraphics, var2: number, var3: number, var4: float, var5: float, var6: number, var7: number): void;
    }

    abstract class TransformTexture implements IGuiTexture {
        draw(var1: GuiGraphics, var2: number, var3: number, var4: float, var5: float, var6: number, var7: number): void;

        drawInternal(
            var1: GuiGraphics,
            var2: number,
            var3: number,
            var4: float,
            var5: float,
            var6: number,
            var7: number
        ): void;
    }

    class ResourceTexture extends TransformTexture {
        getSubTexture(offsetX: float, offsetY: float, width: float, height: float): ResourceTexture;
    }

    class ResourceBorderTexture extends ResourceTexture {}

    class ProgressTexture extends TransformTexture {}

    class GuiTextureGroup extends TransformTexture {
        constructor();
        constructor(textures: IGuiTexture[]);
        constructor(...textures: IGuiTexture[]);
    }

    class ProgressTexture$FillDirection extends internal.java.lang.Enum<
        ['LEFT_TO_RIGHT', 'RIGHT_TO_LEFT', 'UP_TO_DOWN', 'DOWN_TO_UP', 'ALWAYS_FULL']
    > {
        static LEFT_TO_RIGHT: ProgressTexture$FillDirection;
        static RIGHT_TO_LEFT: ProgressTexture$FillDirection;
        static UP_TO_DOWN: ProgressTexture$FillDirection;
        static DOWN_TO_UP: ProgressTexture$FillDirection;
        static ALWAYS_FULL: ProgressTexture$FillDirection;
    }
}
