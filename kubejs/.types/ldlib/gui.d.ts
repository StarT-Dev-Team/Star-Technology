declare namespace internal.com.lowdragmc.lowdraglib.gui.texture {
    import GuiGraphics = net.minecraft.client.gui.GuiGraphics;

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
        Enum<ProgressTexture$FillDirection>
    > {}

    const ProgressTexture$FillDirection: $class<ProgressTexture$FillDirection> & {
        LEFT_TO_RIGHT: ProgressTexture$FillDirection;
        RIGHT_TO_LEFT: ProgressTexture$FillDirection;
        UP_TO_DOWN: ProgressTexture$FillDirection;
        DOWN_TO_UP: ProgressTexture$FillDirection;
        ALWAYS_FULL: ProgressTexture$FillDirection;
    };
}

declare namespace internal.com.lowdragmc.lowdraglib.gui.widget {
    import IGuiTexture = texture.IGuiTexture;

    interface Widget extends $object<'com.lowdragmc.lowdraglib.gui.widget.Widget'> {
        setSize(width: number, height: number): void;
        setSizeWidth(height: number): void;
        setSizeHeight(height: number): void;
        setBackground(...backgroundTexture: IGuiTexture[]): Widget;
        setBackground(backgroundTexture: IGuiTexture[]): Widget;
    }

    interface WidgetGroup extends $object<
        'com.lowdragmc.lowdraglib.gui.widget.WidgetGroup',
        Widget /* IGhostIngredientTarget, IIngredientSlot, IConfigurableWidgetGroup */
    > {
        addWidget(widget: Widget): WidgetGroup;
        addWidgets(...widgets: Widget[]): WidgetGroup;
        addWidgets(widgets: Widget[]): WidgetGroup;
    }

    const WidgetGroup: $class<WidgetGroup> & {
        new (): WidgetGroup;
    };

    interface ProgressWidget extends $object<
        'com.lowdragmc.lowdraglib.gui.widget.ProgressWidget',
        Widget /* IConfigurableWidget */
    > {}

    interface SlotWidget extends $object<
        'com.lowdragmc.lowdraglib.gui.widget.SlotWidget',
        Widget /* IRecipeIngredientSlot, IConfigurableWidget */
    > {}

    import DoubleSupplier = java.util.function_.DoubleSupplier;
    import ResourceTexture = texture.ResourceTexture;
    import ProgressTexture = texture.ProgressTexture;

    const ProgressWidget: $class<ProgressWidget> & {
        new (): ProgressWidget;
        new (
            progressSupplier: $wrapped<DoubleSupplier>,
            x: number,
            y: number,
            width: number,
            height: number,
            fullImage: ResourceTexture
        ): ProgressWidget;
        new (
            progressSupplier: $wrapped<DoubleSupplier>,
            x: number,
            y: number,
            width: number,
            height: number,
            progressBar: ProgressTexture
        ): ProgressWidget;
    };
}
