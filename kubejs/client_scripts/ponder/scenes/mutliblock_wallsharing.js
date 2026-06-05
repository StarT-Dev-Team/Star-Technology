(() => {
    let {
        computeMultiData,
        resetScene,
        defineScene,
        javaReflectionGetMethod,
        moveMulti,
        showSectionImmediately,
        sortStrategy,
        breakBlocksAndHide,
        revealBlocks,
        block,
    } = ponderUtils;
    let { cokeOven } = ponderMultis;

    defineScene('multiblock_wallsharing', (scene, util) => {
        resetScene(scene, 9, true);

        // create first coke oven
        let oven = computeMultiData(util, cokeOven(), [4, 2, 3]);
        for (let block of oven.blocks) {
            scene.world().setBlock(block.pos, block.state, false);
        }

        // show
        scene.idle(10);
        scene.world().showSection(oven.cuboid, Direction.DOWN);

        scene.overlay().showText(40).text('One of the most useful hidden features of Multiblocks is Wall Sharing');

        scene.idle(60);
        scene.addKeyframe();

        // move coke oven and recreate in new position
        oven = moveMulti(scene, oven, [2, 0, 0], 20);

        // create temporary coke oven
        let cokeOvenTemp = computeMultiData(util, cokeOven(), [2, 2, 3]);
        for (let block of cokeOvenTemp.blocks) {
            scene.world().setBlock(block.pos, block.state, false);
        }
        scene.world().showSection(cokeOvenTemp.cuboid, Direction.DOWN);

        scene
            .overlay()
            .showText(80)
            .text(
                'When you want to build multiples of the same Multiblocks (or even different ones!) you can share some blocks between them, if their structure allows it'
            );

        scene.idle(120);
        scene.addKeyframe();

        // break temporary coke oven
        sortStrategy.spyral(util, cokeOvenTemp.controller, cokeOvenTemp.blocks).forEach((step) => {
            step.forEach((block) => scene.world().setBlock(block.pos, 'minecraft:air', true));
            scene.idle(3);
        });
        scene.addInstruction((scene) => {
            scene.baseWorldSection.erase(cokeOvenTemp.cuboid);
        });
        scene.idle(10);

        // move coke oven again and recreate in new position
        oven = moveMulti(scene, oven, [-1, 0, 0], 20);
        scene.idle(10);

        // build wall shared coke oven
        let cokeOven2 = computeMultiData(util, cokeOven(), [3, 2, 3]);
        showSectionImmediately(scene, cokeOven2.cuboid);
        sortStrategy
            .spyral(util, cokeOven2.controller, cokeOven2.blocks)
            .map((g) => g[0])
            .filter((b) => b.pos.x <= 3)
            .reverse()
            .forEach((block) => {
                scene.world().setBlock(block.pos, block.state, true);
                scene.idle(2);
            });

        scene.idle(10);
        scene
            .overlay()
            .showOutlineWithText([4, 1, 3, 4, 3, 5], 60)
            .text('These blocks are now shared between both Multiblocks')
            .placeNearTarget();

        scene.idle(80);
        scene.addKeyframe();

        scene.overlay().showText(60).text("Please note that some Parts can't be shared.");

        scene.idle(40);

        let showMultiStatus = (position, formed, duration) =>
            addTooltipInstruction(
                scene,
                util.vector().blockSurface(position, Direction.NORTH).add(0, 0.5, 0),
                PonderPointing.DOWN,
                formed
                    ? Component.literal('§aStructure Formed§r') // gtceu.top.valid_structure
                    : Component.literal('§cStructure Incomplete§r'), // gtceu.top.invalid_structure
                duration | 30
            );

        showMultiStatus([5, 2, 3], true, 30);
        showMultiStatus([3, 2, 3], true, 30);
        scene.idle(40);

        breakBlocksAndHide(scene, [[4, 2, 3]]); // idle 10
        revealBlocks(scene, [{ pos: [4, 2, 3], state: block('gtceu:coke_oven_hatch') }], Direction.SOUTH);
        scene.idle(30);

        showMultiStatus([5, 2, 3], true, 30);
        showMultiStatus([3, 2, 3], false, 30);
        scene.idle(40);

        breakBlocksAndHide(scene, [[4, 2, 3]]);
        revealBlocks(scene, [{ pos: [4, 2, 3], state: block('gtceu:coke_oven_bricks') }], Direction.SOUTH);
        scene.idle(20);

        breakBlocksAndHide(scene, [
            [6, 2, 3],
            [2, 2, 3],
        ]);
        revealBlocks(
            scene,
            [
                { pos: [6, 2, 3], state: block('gtceu:coke_oven_hatch') },
                { pos: [2, 2, 3], state: block('gtceu:coke_oven_hatch') },
            ],
            Direction.SOUTH
        );
        scene.idle(30);

        showMultiStatus([5, 2, 3], true, 30);
        showMultiStatus([3, 2, 3], true, 30);
        scene.idle(40);
        scene.addKeyframe();

        // build two other coke ovens
        let cokeOven3 = computeMultiData(util, cokeOven(), [5, 4, 3]);
        showSectionImmediately(scene, cokeOven3.cuboid);
        sortStrategy
            .spyral(util, cokeOven3.controller, cokeOven3.blocks)
            .map((g) => g[0])
            .filter((b) => b.pos.y >= 4)
            .reverse()
            .forEach((b) => {
                let state = b.state;
                if (b.pos.equals(util.grid().at(6, 4, 3))) state = block('gtceu:coke_oven_hatch');
                scene.world().setBlock(b.pos, state, true);
                scene.idle(2);
            });

        scene.idle(10);

        let cokeOven4 = computeMultiData(util, cokeOven(), [3, 4, 3]);
        showSectionImmediately(scene, cokeOven4.cuboid);
        sortStrategy
            .spyral(util, cokeOven4.controller, cokeOven4.blocks)
            .map((g) => g[0])
            .filter((b) => b.pos.y >= 4 && b.pos.x <= 3)
            .reverse()
            .forEach((b) => {
                let state = b.state;
                if (b.pos.equals(util.grid().at(2, 4, 3))) state = block('gtceu:coke_oven_hatch');
                scene.world().setBlock(b.pos, state, true);
                scene.idle(2);
            });

        scene.overlay().showText(80).text('Now we only need 572 more Coke Ovens.');

        scene.idle(100);
        scene.markAsFinished();
    });

    // TODO: move to Java

    /**
     * @param {Internal.SceneBuilder} scene
     * @param {Vec3d} sceneSpace
     * @param {PonderPointing} direction
     * @param {Internal.Component} text
     * @param {number} duration
     */
    function addTooltipInstruction(scene, sceneSpace, direction, text, duration) {
        let $PonderUI = Java.loadClass('net.createmod.ponder.foundation.ui.PonderUI');
        let $Float = Java.loadClass('java.lang.Float');
        let $Integer = Java.loadClass('java.lang.Integer');
        let $Boolean = Java.loadClass('java.lang.Boolean');

        let fontFontWidth = javaReflectionGetMethod(
            'net.minecraft.client.gui.Font',
            ['net.minecraft.util.FormattedCharSequence'],
            'int'
        );

        let graphicsDrawString = javaReflectionGetMethod(
            'net.minecraft.client.gui.GuiGraphics',
            [
                'net.minecraft.client.gui.Font',
                'net.minecraft.util.FormattedCharSequence',
                'float',
                'float',
                'int',
                'boolean',
            ],
            'int'
        );

        scene
            .overlay()
            .addElement(duration)
            .onRender((ctx) => {
                let { scene, screen, graphics, partialTicks, fade } = ctx;
                let font = screen.getFontRenderer();

                let sceneToScreen = scene.getTransform().sceneToScreen(sceneSpace, partialTicks);

                let textWidth = fontFontWidth.invoke(font, text.getVisualOrderText());
                let width = textWidth + 4;
                let height = 12;

                let xFade = direction === PonderPointing.RIGHT ? -1 : direction === PonderPointing.LEFT ? 1 : 0;
                let yFade = direction === PonderPointing.DOWN ? -1 : direction === PonderPointing.UP ? 1 : 0;
                xFade *= 10 * (1 - fade);
                yFade *= 10 * (1 - fade);

                let poseStack = graphics.pose();
                poseStack.pushPose();
                poseStack.translate(sceneToScreen.x + xFade, sceneToScreen.y + yFade, 400);
                poseStack.scale(0.7, 0.7, 1);

                $PonderUI.renderSpeechBox(graphics, 0, 0, width, height, false, direction, true);

                poseStack.translate((width - textWidth) / 2, (height - font.lineHeight) / 2, 100);
                graphicsDrawString.invoke(
                    graphics,
                    font,
                    text.getVisualOrderText(),
                    $Float.valueOf(0),
                    $Float.valueOf(0),
                    // eslint-disable-next-line id-match, no-undef
                    $Integer.valueOf(PonderPalette.WHITE.getColorObject().scaleAlpha(fade).getRGB()),
                    $Boolean.valueOf(false)
                );

                poseStack.popPose();
            });
    }
})();
