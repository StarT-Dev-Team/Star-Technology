import IGuiTexture = internal.com.lowdragmc.lowdraglib2.gui.texture.IGuiTexture;
import SpriteTexture = internal.com.lowdragmc.lowdraglib2.gui.texture.SpriteTexture;

interface UIBuilderParams {
    group: string;
    name: string;
    size: [number, number];
    background: IGuiTexture;
    progress: {
        pos: [number, number];
        size: [number, number];
        texture: SpriteTexture;
    };
    inputs: {
        type: 'item' | 'fluid';
        index: number;
        pos: [number, number];
        texture: IGuiTexture;
    }[];
    outputs: {
        type: 'item' | 'fluid';
        index: number;
        pos: [number, number];
        texture: IGuiTexture;
    }[];
}
