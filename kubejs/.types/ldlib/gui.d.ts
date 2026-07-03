declare namespace internal.com.lowdragmc.lowdraglib.gui.texture {
    import GuiGraphics = net.minecraft.client.gui.IGuiGraphics;

    interface IGuiTexture extends $object<'com.lowdragmc.lowdraglib.gui.texture.IGuiTexture'> {
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

    interface TransformTexture extends IGuiTexture {
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

    interface ResourceTexture extends $object<
        'com.lowdragmc.lowdraglib.gui.texture.ResourceTexture',
        TransformTexture
    > {
        getSubTexture(offsetX: number, offsetY: number, width: number, height: number): ResourceTexture;
    }

    interface ResourceBorderTexture extends $object<
        'com.lowdragmc.lowdraglib.gui.texture.ResourceBorderTexture',
        ResourceTexture
    > {}

    interface ProgressTexture extends $object<
        'com.lowdragmc.lowdraglib.gui.texture.ProgressTexture',
        TransformTexture
    > {}

    interface GuiTextureGroup extends $object<
        'com.lowdragmc.lowdraglib.gui.texture.GuiTextureGroup',
        TransformTexture
    > {}

    const GuiTextureGroup: $class<GuiTextureGroup> & {
        new (): GuiTextureGroup;
        new (textures: IGuiTexture[]): GuiTextureGroup;
        new (...textures: IGuiTexture[]): GuiTextureGroup;
    };

    import Enum = java.lang.Enum;

    interface ProgressTexture$FillDirection extends $object<
        {
            name: 'com.lowdragmc.lowdraglib.gui.texture.ProgressTexture$FillDirection';
            enumClass: ProgressTexture$FillDirection;
        },
        Enum
    > {}

    const ProgressTexture$FillDirection: $class<ProgressTexture$FillDirection> & {
        LEFT_TO_RIGHT: ProgressTexture$FillDirection;
        RIGHT_TO_LEFT: ProgressTexture$FillDirection;
        UP_TO_DOWN: ProgressTexture$FillDirection;
        DOWN_TO_UP: ProgressTexture$FillDirection;
        ALWAYS_FULL: ProgressTexture$FillDirection;
    };
}
