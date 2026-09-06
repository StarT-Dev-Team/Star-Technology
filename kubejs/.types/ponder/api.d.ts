declare namespace internal.net.createmod.ponder.api {
    import Enum = java.lang.Enum;
    import Color = net.createmod.catnip.theme.Color;

    interface PonderPalette extends $object<
        { name: 'net.createmod.ponder.api.PonderPalette'; enumClass: typeof PonderPalette },
        Enum<PonderPalette>
    > {
        getColor(): number;
        getColorObject(): Color;
    }

    const PonderPalette: $class<PonderPalette> & {
        WHITE: PonderPalette;
        BLACK: PonderPalette;
        RED: PonderPalette;
        GREEN: PonderPalette;
        BLUE: PonderPalette;
        SLOW: PonderPalette;
        MEDIUM: PonderPalette;
        FAST: PonderPalette;
        INPUT: PonderPalette;
        OUTPUT: PonderPalette;
    };
}

declare namespace internal.net.createmod.ponder.api.level {
    import SchematicLevel = net.createmod.catnip.levelWrappers.SchematicLevel;

    interface PonderLevel extends $object<'net.createmod.ponder.api.level.PonderLevel', SchematicLevel> {}
}

declare namespace internal.net.createmod.ponder.api.scene {
    interface PonderStoryBoard extends $object<{
        name: 'net.createmod.ponder.api.scene.PonderStoryBoard';
        functionalInterface: 'program';
    }> {
        program(builder: SceneBuilder, util: SceneBuildingUtil): void;
    }

    import Consumer = java.util.function_.Consumer;
    import PonderScene = foundation.PonderScene;
    import PonderInstruction = foundation.instruction.PonderInstruction;

    interface SceneBuilder extends $object<'net.createmod.ponder.api.scene.SceneBuilder'> {
        overlay(): OverlayInstructions;
        world(): WorldInstructions;
        // debug(): DebugInstructions;
        // effects(): EffectInstructions;
        // special(): SpecialInstructions;
        getScene(): PonderScene;
        get scene(): PonderScene;
        title(sceneId: string, title: string): void;
        configureBasePlate(xOffset: number, zOffset: number, basePlateSize: number): void;
        scaleSceneView(factor: number): void;
        removeShadow(): void;
        setSceneOffsetY(yOffset: number): void;
        showBasePlate(): void;
        addInstruction(instruction: PonderInstruction): void;
        addInstruction(callback: $wrapped<Consumer<PonderScene>>): void;
        idle(ticks: number): void;
        idleSeconds(seconds: number): void;
        markAsFinished(): void;
        setNextUpEnabled(isEnabled: boolean): void;
        rotateCameraY(degrees: number): void;
        addKeyframe(): void;
        addLazyKeyframe(): void;
    }

    import InputElementBuilder = element.InputElementBuilder;
    import TextElementBuilder = element.TextElementBuilder;
    import Pointing = catnip.math.Pointing;
    import AABB = net.minecraft.world.phys.AABB;

    interface OverlayInstructions extends $object<'net.createmod.ponder.api.scene.OverlayInstructions'> {
        showText(duration: number): TextElementBuilder;
        showOutlineWithText(selection: $wrapped<Selection>, duration: number): TextElementBuilder;
        showControls(screenSpace: $wrapped<Vec3>, direction: $wrapped<Pointing>, duration: number): InputElementBuilder;
        chaseBoundingBoxOutline(
            color: PonderPalette,
            slot: Object,
            boundingBox: $wrapped<AABB>,
            duration: number
        ): void;
        showCenteredScrollInput(pos: $wrapped<BlockPos>, side: $wrapped<Direction>, duration: number): void;
        showScrollInput(location: Vec3, side: $wrapped<Direction>, duration: number): void;
        showRepeaterScrollInput(pos: $wrapped<BlockPos>, duration: number): void;
        showFilterSlotInput(location: Vec3, duration: number): void;
        showFilterSlotInput(location: Vec3, side: $wrapped<Direction>, duration: number): void;
        showLine(color: PonderPalette, start: Vec3, end: Vec3, duration: number): void;
        showBigLine(color: PonderPalette, start: Vec3, end: Vec3, duration: number): void;
        showOutline(color: PonderPalette, slot: Object, selection: $wrapped<Selection>, duration: number): void;
    }

    import BlockState = net.minecraft.world.level.block.state.BlockState;
    import ElementLink = element.ElementLink;
    import EntityElement = element.EntityElement;
    import WorldSectionElement = element.WorldSectionElement;
    import UnaryOperator = java.util.function_.UnaryOperator;
    import Function = java.util.function_.Function;
    import Property = net.minecraft.world.level.block.state.properties.Property;
    import Entity = net.minecraft.world.entity.Entity;
    import Class = java.lang.Class;
    import Level = net.minecraft.world.level.Level;
    import BlockEntity = net.minecraft.world.level.block.entity.BlockEntity;
    import ItemStack = net.minecraft.world.item.ItemStack;
    import CompoundTag = net.minecraft.nbt.CompoundTag;

    interface WorldInstructions extends $object<'net.createmod.ponder.api.scene.WorldInstructions'> {
        incrementBlockBreakingProgress(pos: $wrapped<BlockPos>): void;

        showSection(selection: $wrapped<Selection>, fadeInDirection: $wrapped<Direction>): void;

        showSectionAndMerge(
            selection: $wrapped<Selection>,
            fadeInDirection: $wrapped<Direction>,
            link: ElementLink<WorldSectionElement>
        ): void;

        glueBlockOnto(
            position: $wrapped<BlockPos>,
            fadeInDirection: $wrapped<Direction>,
            link: ElementLink<WorldSectionElement>
        ): void;

        showIndependentSection(
            selection: $wrapped<Selection>,
            fadeInDirection: $wrapped<Direction>
        ): ElementLink<WorldSectionElement>;

        showIndependentSectionImmediately(selection: $wrapped<Selection>): ElementLink<WorldSectionElement>;

        hideSection(selection: $wrapped<Selection>, fadeOutDirection: $wrapped<Direction>): void;

        hideIndependentSection(link: ElementLink<WorldSectionElement>, fadeOutDirection: $wrapped<Direction>): void;

        restoreBlocks(selection: $wrapped<Selection>): void;

        makeSectionIndependent(selection: $wrapped<Selection>): ElementLink<WorldSectionElement>;

        rotateSection(
            link: ElementLink<WorldSectionElement>,
            xRotation: number,
            yRotation: number,
            zRotation: number,
            duration: number
        ): void;

        configureCenterOfRotation(link: ElementLink<WorldSectionElement>, anchor: $wrapped<Vec3>): void;

        configureStabilization(link: ElementLink<WorldSectionElement>, anchor: $wrapped<Vec3>): void;

        moveSection(link: ElementLink<WorldSectionElement>, offset: $wrapped<Vec3>, duration: number): void;

        setBlocks(selection: $wrapped<Selection>, state: $wrapped<BlockState>, spawnParticles: boolean): void;

        destroyBlock(pos: $wrapped<BlockPos>): void;

        setBlock(pos: $wrapped<BlockPos>, state: $wrapped<BlockState>, spawnParticles: boolean): void;

        replaceBlocks(selection: $wrapped<Selection>, state: $wrapped<BlockState>, spawnParticles: boolean): void;

        modifyBlock(
            pos: $wrapped<BlockPos>,
            stateFunc: $wrapped<UnaryOperator<BlockState>>,
            spawnParticles: boolean
        ): void;

        cycleBlockProperty(pos: $wrapped<BlockPos>, property: Property<any>): void;

        modifyBlocks(
            selection: $wrapped<Selection>,
            stateFunc: $wrapped<UnaryOperator<BlockState>>,
            spawnParticles: boolean
        ): void;

        toggleRedstonePower(selection: $wrapped<Selection>): void;

        modifyEntities<T extends Entity>(entityClass: Class<T>, entityCallBack: $wrapped<Consumer<T>>): void;

        modifyEntitiesInside<T extends Entity>(
            entityClass: Class<T>,
            area: $wrapped<Selection>,
            entityCallBack: $wrapped<Consumer<T>>
        ): void;

        modifyEntity(link: ElementLink<EntityElement>, entityCallBack: $wrapped<Consumer<Entity>>): void;

        createEntity(factory: $wrapped<Function<Level, Entity>>): ElementLink<EntityElement>;

        createItemEntity(
            location: $wrapped<Vec3>,
            motion: $wrapped<Vec3>,
            stack: $wrapped<ItemStack>
        ): ElementLink<EntityElement>;

        modifyBlockEntityNBT(
            selection: $wrapped<Selection>,
            beType: Class<BlockEntity>,
            consumer: $wrapped<Consumer<CompoundTag>>
        ): void;

        modifyBlockEntity<T extends BlockEntity>(
            position: $wrapped<BlockPos>,
            beType: Class<T>,
            consumer: $wrapped<Consumer<T>>
        ): void;

        modifyBlockEntityNBT(
            selection: $wrapped<Selection>,
            teType: Class<BlockEntity>,
            consumer: $wrapped<Consumer<CompoundTag>>,
            reDrawBlocks: boolean
        ): void;
    }

    interface DebugInstructions extends $object<'net.createmod.ponder.api.scene.DebugInstructions'> {}

    interface EffectInstructions extends $object<'net.createmod.ponder.api.scene.EffectInstructions'> {}

    interface SpecialInstructions extends $object<'net.createmod.ponder.api.scene.SpecialInstructions'> {}

    interface SceneBuildingUtil extends $object<'net.createmod.ponder.api.scene.SceneBuildingUtil'> {
        select(): SelectionUtil;
        vector(): VectorUtil;
        grid(): PositionUtil;
    }

    import Iterable = java.lang.Iterable;
    import Predicate = java.util.function_.Predicate;
    import Vec3 = net.minecraft.world.phys.Vec3;

    interface Selection extends $object<
        'net.createmod.ponder.api.scene.Selection',
        Iterable<BlockPos>,
        Predicate<BlockPos>
    > {
        add(other: $wrapped<Selection>): Selection;
        substract(other: $wrapped<Selection>): Selection;
        copy(): Selection;
        getCenter(): Vec3;
    }

    import BlockPos = net.minecraft.core.BlockPos;
    import Vec3i = net.minecraft.core.Vec3i;

    interface SelectionUtil extends $object<'net.createmod.ponder.api.scene.SelectionUtil'> {
        everywhere(): Selection;
        position(x: number, y: number, z: number): Selection;
        position(pos: $wrapped<BlockPos>): Selection;
        fromTo(x: number, y: number, z: number, x1: number, y1: number, z1: number): Selection;
        fromTo(pos1: $wrapped<BlockPos>, pos2: $wrapped<BlockPos>): Selection;
        column(x: number, z: number): Selection;
        layer(y: number): Selection;
        layersFrom(y: number): Selection;
        layers(y: number, height: number): Selection;
        cuboid(origin: $wrapped<BlockPos>, size: Vec3i): Selection;
    }

    import Direction = net.minecraft.core.Direction;

    interface VectorUtil extends $object<'net.createmod.ponder.api.scene.VectorUtil'> {
        centerOf(x: number, y: number, z: number): Vec3;
        centerOf(pos: $wrapped<BlockPos>): Vec3;
        topOf(x: number, y: number, z: number): Vec3;
        topOf(pos: $wrapped<BlockPos>): Vec3;
        blockSurface(pos: $wrapped<BlockPos>, face: $wrapped<Direction>): Vec3;
        blockSurface(pos: $wrapped<BlockPos>, face: $wrapped<Direction>, margin: number): Vec3;
        of(x: number, y: number, z: number): Vec3;
    }

    interface PositionUtil extends $object<'net.createmod.ponder.api.scene.PositionUtil'> {
        at(x: number, y: number, z: number): BlockPos;
        zero(): BlockPos;
    }
}

declare namespace internal.net.createmod.ponder.api.element {
    interface PonderElement extends $object<'net.createmod.ponder.api.element.PonderElement'> {}

    import UUID = java.util.UUID;

    interface ElementLink<T extends PonderElement> extends $object<'net.createmod.ponder.api.element.ElementLink'> {
        getId(): UUID;
        cast(e: PonderElement): T;
    }

    interface PonderSceneElement extends $object<
        'net.createmod.ponder.api.element.PonderSceneElement',
        PonderElement
    > {}

    interface AnimatedSceneElement extends $object<
        'net.createmod.ponder.api.element.AnimatedSceneElement',
        PonderSceneElement
    > {}

    import Selection = api.scene.Selection;
    import PonderLevel = api.level.PonderLevel;
    import BlockPos = net.minecraft.core.BlockPos;
    import Vec3 = net.minecraft.world.phys.Vec3;
    import Pair = net.createmod.catnip.data.Pair;
    import BlockHitResult = net.minecraft.world.phys.BlockHitResult;

    interface WorldSectionElement extends $object<
        'net.createmod.ponder.api.element.WorldSectionElement',
        AnimatedSceneElement
    > {
        mergeOnto(other: WorldSectionElement): void;
        set(selection: $wrapped<Selection>): void;
        add(toAdd: $wrapped<Selection>): void;
        erase(toErase: $wrapped<Selection>): void;
        setCenterOfRotation(center: $wrapped<Vec3>): void;
        stabilizeRotation(anchor: $wrapped<Vec3>): void;
        selectBlock(pos: $wrapped<BlockPos>): void;
        resetSelectedBlock(): void;
        queueRedraw(): void;
        isEmpty(): boolean;
        setEmpty(): void;
        setAnimatedRotation(eulerAngles: $wrapped<Vec3>, force: boolean): void;
        getAnimatedRotation(): $wrapped<Vec3>;
        setAnimatedOffset(offset: $wrapped<Vec3>, force: boolean): void;
        getAnimatedOffset(): $wrapped<Vec3>;
        rayTrace(world: PonderLevel, source: $wrapped<Vec3>, target: $wrapped<Vec3>): Pair<Vec3, BlockHitResult>;
    }

    import Consumer = java.util.function_.Consumer;

    interface TrackedElement<T> extends $object<'net.createmod.ponder.api.element.TrackedElement', PonderSceneElement> {
        ifPresent(func: $wrapped<Consumer<T>>): void;
    }

    import Entity = net.minecraft.world.entity.Entity;

    interface EntityElement extends $object<'net.createmod.ponder.api.element.EntityElement', TrackedElement<Entity>> {}

    import ItemStack = net.minecraft.world.item.ItemStack;
    import ScreenElement = net.createmod.catnip.gui.element.ScreenElement;

    interface InputElementBuilder extends $object<'net.createmod.ponder.api.element.InputElementBuilder'> {
        withItem(item: $wrapped<ItemStack>): this;
        leftClick(): this;
        rightClick(): this;
        scroll(): this;
        showing(element: ScreenElement): this;
        whileSneaking(): this;
        whileCTRL(): this;
    }

    import ResourceLocation = net.minecraft.resources.ResourceLocation;

    interface TextElementBuilder extends $object<'net.createmod.ponder.api.element.TextElementBuilder'> {
        colored(color: PonderPalette): this;
        pointAt(vec: $wrapped<Vec3>): this;
        independent(y: number): this;
        independent(): this;
        text(defaultText: string): this;
        text(defaultText: string, ...params: Object[]): this;
        text(defaultText: string, params: Object[]): this;
        sharedText(key: $wrapped<ResourceLocation>): this;
        sharedText(key: $wrapped<ResourceLocation>, ...params: Object[]): this;
        sharedText(key: $wrapped<ResourceLocation>, params: Object[]): this;
        sharedText(key: string): this;
        sharedText(key: string, ...params: Object[]): this;
        sharedText(key: string, params: Object[]): this;
        placeNearTarget(): this;
        attachKeyFrame(): this;
    }

    interface PonderOverlayElement extends $object<
        'net.createmod.ponder.api.element.PonderOverlayElement',
        PonderElement
    > {}

    interface AnimatedOverlayElement extends $object<
        'net.createmod.ponder.api.element.AnimatedOverlayElement',
        PonderOverlayElement
    > {}
}
