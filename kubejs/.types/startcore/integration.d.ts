declare namespace internal.com.startechnology.start_core.integration.kjs {
    import BlockBuilder__Blueprint = dev.latvian.mods.kubejs.block.BlockBuilder__Blueprint;
    import Supplier = java.util.function_.Supplier;

    interface FusionReflectorBlockBuilder extends $object<
        'com.startechnology.start_core.integration.kjs.FusionReflectorBlockBuilder',
        BlockBuilder__Blueprint<FusionReflectorBlockBuilder>
    > {
        tier(tier: number): this;
        material(material: $wrapped<Supplier<unknown>>): this;
        texture(texture: string): this;
        reflectorMaterial(material: $wrapped<Supplier<unknown>>): this;
    }
}

declare namespace internal.com.startechnology.start_core.integration.ponder {
    import EventJS = dev.latvian.mods.kubejs.event.EventJS;

    import Ingredient = net.minecraft.world.item.crafting.Ingredient;

    interface PonderRegistryEventJS extends $object<
        'com.startechnology.start_core.integration.ponder.PonderRegistryEventJS',
        EventJS
    > {
        create(ingredient: $wrapped<Ingredient>): PonderRegistryEventJS$Builder;
    }

    import ResourceLocation = net.minecraft.resources.ResourceLocation;
    import PonderStoryBoard = net.createmod.ponder.api.scene.PonderStoryBoard;

    interface PonderRegistryEventJS$Builder extends $object<'com.startechnology.start_core.integration.ponder.PonderRegistryEventJS$Builder'> {
        tag(...tags: $wrapped<ResourceLocation>[]): this;
        tag(tags: $wrapped<ResourceLocation>[]): this;
        scene(name: string, title: string, board: $wrapped<PonderStoryBoard>): this;
        scene(
            name: string,
            title: string,
            structure: $wrapped<ResourceLocation>,
            board: $wrapped<PonderStoryBoard>,
            ...tags: $wrapped<ResourceLocation>[]
        ): this;
        scene(
            name: string,
            title: string,
            structure: $wrapped<ResourceLocation>,
            board: $wrapped<PonderStoryBoard>,
            tags: $wrapped<ResourceLocation>[]
        ): this;
    }

    import Consumer = java.util.function_.Consumer;
    import Item = net.minecraft.world.item.Item;

    interface PonderItemTagEventJS extends $object<
        'com.startechnology.start_core.integration.ponder.PonderItemTagEventJS',
        EventJS
    > {
        createTag(name: string, onCreate: $wrapped<Consumer<PonderItemTagEventJS$Builder>>): void;
        createTag(
            id: string,
            displayItem: $wrapped<Item>,
            title: string,
            description: string,
            ingredient: $wrapped<Ingredient> | null
        ): void;
        createTag(id: string, displayItem: $wrapped<Item>, title: string, description: string): void;
    }

    interface PonderItemTagEventJS$Builder extends $object<'com.startechnology.start_core.integration.ponder.PonderItemTagEventJS$Builder'> {}

    import Function = java.util.function_.Function;
    import BlockIDPredicate = dev.latvian.mods.kubejs.block.predicate.BlockIDPredicate;
    import BlockState = net.minecraft.world.level.block.state.BlockState;

    interface BlockStateFunction extends $object<
        'com.startechnology.start_core.integration.ponder.BlockStateFunction',
        Function<BlockIDPredicate, BlockState>
    > {}

    import PonderScene = net.createmod.ponder.foundation.PonderScene;
    import TickingInstruction = net.createmod.ponder.foundation.instruction.TickingInstruction;
    import SafeConsumer = kjs.SafeConsumer;

    interface PonderTickingInstruction extends $object<
        'com.startechnology.start_core.integration.ponder.PonderTickingInstruction',
        TickingInstruction
    > {
        onTick(consumer: $wrapped<SafeConsumer<PonderScene>>): this;
        onFirstTick(consumer: $wrapped<SafeConsumer<PonderScene>>): this;
    }

    const PonderTickingInstruction: $class<PonderTickingInstruction> & {
        new (duration: number): PonderTickingInstruction;
        new (blocking: boolean, duration: number): PonderTickingInstruction;
    };

    import AnimatedOverlayElementBase = net.createmod.ponder.foundation.element.AnimatedOverlayElementBase;

    interface PonderCustomOverlayElement extends $object<
        'com.startechnology.start_core.integration.ponder.PonderCustomOverlayElement',
        AnimatedOverlayElementBase
    > {
        onRender(onRender: $wrapped<SafeConsumer<PonderCustomOverlayElement$RenderContext>>): this;
        onWhileSkipping(onWhileSkipping: $wrapped<SafeConsumer<PonderCustomOverlayElement$ActionContext>>): this;
        onTick(onTick: $wrapped<SafeConsumer<PonderCustomOverlayElement$ActionContext>>): this;
        onReset(onReset: $wrapped<SafeConsumer<PonderCustomOverlayElement$ActionContext>>): this;
    }

    import PonderElement = net.createmod.ponder.api.element.PonderElement;
    import PonderUI = net.createmod.ponder.foundation.ui.PonderUI;
    import GuiGraphics = net.minecraft.client.gui.GuiGraphics;

    interface PonderCustomOverlayElement$RenderContext extends $object<'com.startechnology.start_core.integration.ponder.PonderCustomOverlayElement$RenderContext'> {
        getElement(): PonderElement;
        get element(): PonderElement;
        getScene(): PonderScene;
        get scene(): PonderScene;
        getScreen(): PonderUI;
        get screen(): PonderUI;
        getGraphics(): GuiGraphics;
        get graphics(): GuiGraphics;
        getPartialTicks(): number;
        get partialTicks(): number;
        getFade(): number;
        get fade(): number;
    }

    interface PonderCustomOverlayElement$ActionContext extends $object<'com.startechnology.start_core.integration.ponder.PonderCustomOverlayElement$ActionContext'> {
        getElement(): PonderElement;
        get element(): PonderElement;
        getScene(): PonderScene;
        get scene(): PonderScene;
    }

    interface OverlayInstructionsExtension {
        addElement(ticks: number): PonderCustomOverlayElement;
        addElement(): PonderCustomOverlayElement;
    }
}

declare namespace internal.com.startechnology.start_core.integration.kjs {
    interface SafeConsumer<T> extends $object<{
        name: 'com.startechnology.start_core.integration.kjs.SafeConsumer';
        functionalInterface: 'accept';
    }> {
        accept(t: T): void;
        safeAccept(t: T): void;
    }
}
