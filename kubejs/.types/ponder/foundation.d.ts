declare namespace internal.net.createmod.ponder.foundation.element {
    import InputElementBuilder = net.createmod.ponder.api.element.InputElementBuilder;

    interface InputWindowElement extends $object<'net.createmod.ponder.foundation.element.InputWindowElement'> {
        builder(): InputElementBuilder;
    }

    import Vec3 = net.minecraft.world.phys.Vec3;
    import Pointing = catnip.math.Pointing;

    const InputWindowElement: $class<InputWindowElement> & {
        new (sceneSpace: $wrapped<Vec3>, direction: $wrapped<Pointing>): InputWindowElement;
    };

    import PonderElement = api.element.PonderElement;

    interface PonderElementBase extends $object<
        'net.createmod.ponder.foundation.element.PonderElementBase',
        PonderElement
    > {}

    import AnimatedOverlayElement = api.element.AnimatedOverlayElement;

    interface AnimatedOverlayElementBase extends $object<
        'net.createmod.ponder.foundation.element.AnimatedOverlayElementBase',
        PonderElementBase,
        AnimatedOverlayElement
    > {}
}

declare namespace internal.net.createmod.ponder.foundation {
    import SceneBuildingUtil = api.scene.SceneBuildingUtil;
    import PonderLevel = api.level.PonderLevel;
    import WorldSectionElement = api.element.WorldSectionElement;
    import PonderElement = api.element.PonderElement;
    import ElementLink = api.element.ElementLink;
    import Optional = java.util.Optional;
    import Consumer = java.util.function_.Consumer;
    import Function = java.util.function_.Function;

    interface PonderScene extends $object<'net.createmod.ponder.foundation.PonderScene'> {
        getSceneBuildingUtil(): SceneBuildingUtil;
        get sceneBuildingUtil(): SceneBuildingUtil;
        getWorld(): PonderLevel;
        get world(): PonderLevel;
        getBaseWorldSection(): WorldSectionElement;
        get baseWorldSection(): WorldSectionElement;
        resolve<E extends PonderElement>(link: ElementLink<E>): E;
        resolveOptional<E extends PonderElement>(link: ElementLink<E>): Optional<E>;
        runWith<E extends PonderElement>(link: ElementLink<E>, callback: $wrapped<Consumer<E>>): void;
        applyTo<E extends PonderElement, F>(link: ElementLink<E>, function_: $wrapped<Function<E, F>>): F;
        getTransform(): PonderScene$SceneTransform;
        get transform(): PonderScene$SceneTransform;
    }

    import Vec3 = net.minecraft.world.phys.Vec3;
    import Vec2 = net.minecraft.world.phys.Vec2;

    interface PonderScene$SceneTransform extends $object<'net.createmod.ponder.foundation.PonderScene$SceneTransform'> {
        sceneToScreen(vec: $wrapped<Vec3>, pt: number): Vec2;
    }
}

declare namespace internal.net.createmod.ponder.foundation.instruction {
    import Consumer = java.util.function_.Consumer;
    import Selection = api.scene.Selection;
    import UnaryOperator = java.util.function_.UnaryOperator;
    import BlockState = net.minecraft.world.level.block.state.BlockState;

    interface PonderInstruction extends $object<'net.createmod.ponder.foundation.instruction.PonderInstruction'> {
        isBlocking(): boolean;
        reset(scene: PonderScene): void;
        isComplete(): boolean;
        onScheduled(scene: PonderScene): void;
        tick(scene: PonderScene): void;
    }

    const PonderInstruction: $class<PonderInstruction> & {
        simple(callback: $wrapped<Consumer<PonderScene>>): PonderInstruction$Simple;
    };

    interface PonderInstruction$Simple extends $object<
        'net.createmod.ponder.foundation.instruction.PonderInstruction$Simple',
        PonderInstruction
    > {}

    interface TickingInstruction extends $object<
        'net.createmod.ponder.foundation.instruction.TickingInstruction',
        PonderInstruction
    > {}

    const TickingInstruction: $class<TickingInstruction> & {};

    interface FadeInOutInstruction extends $object<
        'net.createmod.ponder.foundation.instruction.FadeInOutInstruction',
        TickingInstruction
    > {}

    const FadeInOutInstruction: $class<FadeInOutInstruction> & {};

    interface ShowInputInstruction extends $object<
        'net.createmod.ponder.foundation.instruction.ShowInputInstruction',
        FadeInOutInstruction
    > {}

    import InputWindowElement = net.createmod.ponder.foundation.element.InputWindowElement;

    const ShowInputInstruction: $class<ShowInputInstruction> & {
        new (element: InputWindowElement, ticks: number): ShowInputInstruction;
    };

    interface WorldModifyInstruction extends $object<
        'net.createmod.ponder.foundation.instruction.WorldModifyInstruction',
        PonderInstruction
    > {}

    const WorldModifyInstruction: $class<WorldModifyInstruction> & {};

    interface ReplaceBlocksInstruction extends $object<
        'net.createmod.ponder.foundation.instruction.ReplaceBlocksInstruction',
        WorldModifyInstruction
    > {}

    const ReplaceBlocksInstruction: $class<ReplaceBlocksInstruction> & {
        new (
            selection: $wrapped<Selection>,
            stateToUse: $wrapped<UnaryOperator<BlockState>>,
            replaceAir: boolean,
            spawnParticles: boolean
        ): ReplaceBlocksInstruction;
    };

    import AnimatedSceneElement = api.element.AnimatedSceneElement;

    interface FadeOutOfSceneInstruction<T extends AnimatedSceneElement> extends $object<
        'net.createmod.ponder.foundation.instruction.FadeOutOfSceneInstruction',
        TickingInstruction
    > {}

    import ElementLink = api.element.ElementLink;

    const FadeOutOfSceneInstruction: $class<FadeOutOfSceneInstruction<AnimatedSceneElement>> & {
        new <T extends AnimatedSceneElement>(
            fadeOutTicks: number,
            fadeOutTo: $wrapped<Direction>,
            link: ElementLink<T>
        ): FadeOutOfSceneInstruction<T>;
    };

    interface FadeIntoSceneInstruction<T extends AnimatedSceneElement> extends $object<
        'net.createmod.ponder.foundation.instruction.FadeIntoSceneInstruction',
        TickingInstruction
    > {}

    const FadeIntoSceneInstruction: $class<FadeIntoSceneInstruction<AnimatedSceneElement>> & {};

    import WorldSectionElement = api.element.WorldSectionElement;

    interface DisplayWorldSectionInstruction extends $object<
        'net.createmod.ponder.foundation.instruction.DisplayWorldSectionInstruction',
        FadeIntoSceneInstruction<WorldSectionElement>
    > {}

    import Supplier = java.util.function_.Supplier;
    import Direction = net.minecraft.core.Direction;
    import BlockPos = net.minecraft.core.BlockPos;

    const DisplayWorldSectionInstruction: $class<DisplayWorldSectionInstruction> & {
        new (
            fadeInTicks: number,
            fadeInFrom: $wrapped<Direction>,
            selection: $wrapped<Selection>,
            mergeOnto: $wrapped<Supplier<WorldSectionElement>> | null
        ): DisplayWorldSectionInstruction;
        new (
            fadeInTicks: number,
            fadeInFrom: $wrapped<Direction>,
            selection: $wrapped<Selection>,
            mergeOnto: $wrapped<Supplier<WorldSectionElement>> | null,
            glue: $wrapped<BlockPos> | null
        ): DisplayWorldSectionInstruction;
    };
}

declare namespace internal.net.createmod.ponder.foundation.ui {
    import Font = net.minecraft.client.gui.Font;

    interface PonderUI extends $object<'net.createmod.ponder.foundation.ui.PonderUI'> {
        getFontRenderer(): Font;
        get fontRenderer(): Font;
    }

    import GuiGraphics = net.minecraft.client.gui.GuiGraphics;
    import Pointing = catnip.math.Pointing;

    const PonderUI: $class<PonderUI> & {
        renderSpeechBox(
            graphics: GuiGraphics,
            x: number,
            y: number,
            w: number,
            h: number,
            highlighted: boolean,
            pointing: Pointing,
            returnWithLocalTransform: boolean
        ): void;
    };
}

declare namespace internal.kjs {
    interface LoadableClasses {
        'net.createmod.ponder.foundation.element.InputWindowElement': typeof internal.net.createmod.ponder.foundation.element.InputWindowElement;
        'net.createmod.ponder.foundation.instruction.ShowInputInstruction': typeof internal.net.createmod.ponder.foundation.instruction.ShowInputInstruction;
        'net.createmod.ponder.foundation.instruction.ReplaceBlocksInstruction': typeof internal.net.createmod.ponder.foundation.instruction.ReplaceBlocksInstruction;
        'net.createmod.ponder.foundation.instruction.FadeOutOfSceneInstruction': typeof internal.net.createmod.ponder.foundation.instruction.FadeOutOfSceneInstruction;
        'net.createmod.ponder.foundation.instruction.DisplayWorldSectionInstruction': typeof internal.net.createmod.ponder.foundation.instruction.DisplayWorldSectionInstruction;
        'net.createmod.ponder.foundation.ui.PonderUI': typeof internal.net.createmod.ponder.foundation.ui.PonderUI;
    }
}
