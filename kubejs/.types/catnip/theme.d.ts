declare namespace internal.net.createmod.catnip.theme {
    interface Color extends $object<'net.createmod.catnip.theme.Color'> {
        getBlue(): number;
        get blue(): number;
        getAlpha(): number;
        get alpha(): number;
        getRedAsFloat(): number;
        get redAsFloat(): number;
        getGreenAsFloat(): number;
        get greenAsFloat(): number;
        getBlueAsFloat(): number;
        get blueAsFloat(): number;
        getAlphaAsFloat(): number;
        get alphaAsFloat(): number;
        getRGB(): number;
        get rGB(): number;
        scaleAlpha(factor: number): Color;
        scaleAlphaForText(factor: number): Color;
    }
}
