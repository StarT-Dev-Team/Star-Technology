declare namespace internal.com.lowdragmc.lowdraglib2.gui.texture {
    import GuiGraphics = net.minecraft.client.gui.GuiGraphics;

    interface IGuiTexture extends $object<'com.lowdragmc.lowdraglib2.gui.texture.IGuiTexture'> {
        draw(
            graphics: GuiGraphics,
            mouseX: number,
            mouseY: number,
            x: number,
            y: number,
            width: number,
            height: number,
            partialTicks: number
        ): void;
    }

    interface TransformTexture extends $object<'com.lowdragmc.lowdraglib2.gui.texture.TransformTexture', IGuiTexture> {}

    interface SpriteTexture extends $object<'com.lowdragmc.lowdraglib2.gui.texture.SpriteTexture', TransformTexture> {
        copy(): SpriteTexture;
        setSprite(x: number, y: number, width: number, height: number): SpriteTexture;
    }

    interface GuiTextureGroup extends $object<
        'com.lowdragmc.lowdraglib2.gui.texture.GuiTextureGroup',
        TransformTexture
    > {}

    const GuiTextureGroup: $class<GuiTextureGroup> & {
        new (...textures: IGuiTexture[]): GuiTextureGroup;
    };
}

declare namespace internal.com.lowdragmc.lowdraglib2.gui.ui.data {
    import Enum = java.lang.Enum;

    interface FillDirection extends $object<
        { name: 'com.lowdragmc.lowdraglib2.gui.ui.data.FillDirection'; enumClass: FillDirection },
        Enum<FillDirection>
    > {}

    const FillDirection: $class<FillDirection> & {
        LEFT_TO_RIGHT: FillDirection;
        RIGHT_TO_LEFT: FillDirection;
        UP_TO_DOWN: FillDirection;
        DOWN_TO_UP: FillDirection;
        ALWAYS_FULL: FillDirection;
    };
}

declare namespace internal.com.lowdragmc.lowdraglib2.gui.ui.style {
    import IGuiTexture = texture.IGuiTexture;
    import TaffyPosition = dev.vfyjxf.taffy.style.TaffyPosition;

    interface BasicStyle extends $object<'com.lowdragmc.lowdraglib2.gui.ui.style.BasicStyle'> {
        backgroundTexture(backgroundTexture: IGuiTexture): this;
        background(backgroundTexture: IGuiTexture): this;
    }

    interface LayoutStyle extends $object<'com.lowdragmc.lowdraglib2.gui.ui.style.LayoutStyle'> {
        width(width: number): this;
        height(height: number): this;
        positionType(positionType: TaffyPosition): this;
        left(position: number): this;
        top(position: number): this;
    }
}

declare namespace internal.com.lowdragmc.lowdraglib2.gui.ui.event {
    interface UIEvent extends $object<'com.lowdragmc.lowdraglib2.gui.ui.event.UIEvent'> {}

    interface UIEventListener extends $object<{
        name: 'com.lowdragmc.lowdraglib2.gui.ui.event.UIEventListener';
        functionalInterface: 'handleEvent';
    }> {
        handleEvent(event: UIEvent): void;
    }
}

declare namespace internal.com.lowdragmc.lowdraglib2.gui.ui {
    import Consumer = java.util.function_.Consumer;
    import BasicStyle = style.BasicStyle;
    import LayoutStyle = style.LayoutStyle;
    import UIEventListener = event.UIEventListener;

    interface UIElement extends $object<'com.lowdragmc.lowdraglib2.gui.ui.UIElement'> {
        layout(layout: $wrapped<Consumer<LayoutStyle>>): this;
        style(style: $wrapped<Consumer<BasicStyle>>): this;
        addChild(child: UIElement): this;
        addChildren(...children: UIElement[]): this;
        setId(id: string): this;
        addEventListener(eventType: string, listener: $wrapped<UIEventListener>): this;
    }

    const UIElement: $class<UIElement> & {
        new (): UIElement;
    };
}

declare namespace internal.com.lowdragmc.lowdraglib2.gui.sync.bindings {
    import Consumer = java.util.function_.Consumer;

    interface IDataProvider<T> extends $object<'com.lowdragmc.lowdraglib2.gui.sync.bindings.IDataProvider'> {
        getValue(): T;
        registerListener(listener: $wrapped<Consumer<T>>): unknown;
    }
}

declare namespace internal.com.lowdragmc.lowdraglib2.gui.ui.elements {
    import Consumer = java.util.function_.Consumer;
    import Slot = net.minecraft.world.inventory.Slot;
    import UIElement = ui.UIElement;
    import FillDirection = ui.data.FillDirection;
    import IDataProvider = sync.bindings.IDataProvider;
    import IItemHandlerModifiable = net.minecraftforge.items.IItemHandlerModifiable;
    import IFluidHandler = net.minecraftforge.fluids.capability.IFluidHandler;

    interface ProgressBar extends $object<'com.lowdragmc.lowdraglib2.gui.ui.elements.ProgressBar', UIElement> {
        setProgress(value: number): this;
        bindDataSource(dataProvider: $wrapped<IDataProvider<number>>): this;
    }

    interface ItemSlot$SlotStyle extends $object<'com.lowdragmc.lowdraglib2.gui.ui.elements.ItemSlot$SlotStyle'> {}

    interface ItemSlot extends $object<'com.lowdragmc.lowdraglib2.gui.ui.elements.ItemSlot', UIElement> {
        bind(itemHandler: IItemHandlerModifiable, index: number): this;
        bind(slot: Slot): this;
        slotStyle(style: $wrapped<Consumer<ItemSlot$SlotStyle>>): this;
    }

    const ItemSlot: $class<ItemSlot> & {
        new (): ItemSlot;
        new (slot: Slot): ItemSlot;
    };

    interface FluidSlot$SlotStyle extends $object<'com.lowdragmc.lowdraglib2.gui.ui.elements.FluidSlot$SlotStyle'> {
        fillDirection(fillDirection: FillDirection): this;
    }

    interface FluidSlot extends $object<'com.lowdragmc.lowdraglib2.gui.ui.elements.FluidSlot', UIElement> {
        bind(fluidTank: IFluidHandler | null, tankIndex: number): this;
        slotStyle(style: $wrapped<Consumer<FluidSlot$SlotStyle>>): this;
        setAllowClickFilled(allowClickFilled: boolean): this;
        setAllowClickDrained(allowClickDrained: boolean): this;
    }

    const FluidSlot: $class<FluidSlot> & {
        new (): FluidSlot;
    };
}

declare namespace internal.com.lowdragmc.lowdraglib2.gui.slot {
    import Predicate = java.util.function_.Predicate;
    import ItemStack = net.minecraft.world.item.ItemStack;
    import Player = net.minecraft.world.entity.player.Player;
    import Slot = net.minecraft.world.inventory.Slot;
    import IItemHandlerModifiable = net.minecraftforge.items.IItemHandlerModifiable;

    interface ItemHandlerSlot extends $object<'com.lowdragmc.lowdraglib2.gui.slot.ItemHandlerSlot', Slot> {
        setCanPlace(canPlace: $wrapped<Predicate<ItemStack>>): this;
        setCanTake(canTake: $wrapped<Predicate<Player>>): this;
    }

    const ItemHandlerSlot: $class<ItemHandlerSlot> & {
        new (itemHandler: IItemHandlerModifiable, index: number): ItemHandlerSlot;
        new (itemHandler: IItemHandlerModifiable, index: number, x: number, y: number): ItemHandlerSlot;
    };
}

declare namespace internal.net.minecraft.world.inventory {
    interface Slot extends $object<'net.minecraft.world.inventory.Slot'> {}
}

declare namespace internal.dev.vfyjxf.taffy.style {
    import Enum = java.lang.Enum;

    interface TaffyPosition extends $object<
        { name: 'dev.vfyjxf.taffy.style.TaffyPosition'; enumClass: TaffyPosition },
        Enum<TaffyPosition>
    > {}

    const TaffyPosition: $class<TaffyPosition> & {
        RELATIVE: TaffyPosition;
        ABSOLUTE: TaffyPosition;
    };
}

declare namespace internal.kjs {
    interface LoadableClasses {
        'com.lowdragmc.lowdraglib2.gui.texture.GuiTextureGroup': typeof internal.com.lowdragmc.lowdraglib2.gui.texture.GuiTextureGroup;
        'com.lowdragmc.lowdraglib2.gui.ui.data.FillDirection': typeof internal.com.lowdragmc.lowdraglib2.gui.ui.data.FillDirection;
        'com.lowdragmc.lowdraglib2.gui.ui.UIElement': typeof internal.com.lowdragmc.lowdraglib2.gui.ui.UIElement;
        'com.lowdragmc.lowdraglib2.gui.ui.elements.ItemSlot': typeof internal.com.lowdragmc.lowdraglib2.gui.ui.elements.ItemSlot;
        'com.lowdragmc.lowdraglib2.gui.ui.elements.FluidSlot': typeof internal.com.lowdragmc.lowdraglib2.gui.ui.elements.FluidSlot;
        'com.lowdragmc.lowdraglib2.gui.slot.ItemHandlerSlot': typeof internal.com.lowdragmc.lowdraglib2.gui.slot.ItemHandlerSlot;
        'dev.vfyjxf.taffy.style.TaffyPosition': typeof internal.dev.vfyjxf.taffy.style.TaffyPosition;
    }
}
