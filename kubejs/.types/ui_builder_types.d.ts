import IGuiTexture = internal.com.lowdragmc.lowdraglib.gui.texture.IGuiTexture;
import ResourceTexture = internal.com.lowdragmc.lowdraglib.gui.texture.ResourceTexture;
import ProgressTexture = internal.com.lowdragmc.lowdraglib.gui.texture.ProgressTexture;

interface UIBuilderParams {
    group: string;
    name: string;
    size: [number, number];
    background: IGuiTexture;
    progress: {
        pos: [number, number];
        size: [number, number];
        texture: ResourceTexture | ProgressTexture;
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
