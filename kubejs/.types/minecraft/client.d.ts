declare namespace internal.net.minecraft.client.gui {
    import PoseStack = com.mojang.blaze3d.vertex.PoseStack;

    interface GuiGraphics extends $object<'net.minecraft.client.gui.GuiGraphics'> {
        pose(): PoseStack;
    }

    interface Font extends $object<'net.minecraft.client.gui.Font'> {
        getLineHeight(): number;
        get lineHeight(): number;
    }
}
