declare namespace internal.net.createmod.catnip.gui.element {
    import GuiGraphics = net.minecraft.client.gui.GuiGraphics;

    interface ScreenElement extends $object<'net.createmod.catnip.gui.element.ScreenElement'> {
        render(gui: GuiGraphics, x: number, y: number): void;
    }
}
