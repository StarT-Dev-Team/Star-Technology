(() => {
    let {
        computeMultiData,
        resetScene,
        block,
        defineScene,
        revealBlocks,
        hideSectionAndRemoveBlocks,
        hideSectionImmediately,
        setPipeConnections,
    } = ponderUtils;
    let { classicStargate } = ponderMultis;

    let $BlockStateProperties = Java.loadClass('net.minecraft.world.level.block.state.properties.BlockStateProperties');
    let $Boolean = Java.loadClass('java.lang.Boolean');
    let $TileFluxPoint = Java.loadClass(/** @type {any} */ ('sonar.fluxnetworks.common.device.TileFluxPoint'));

    defineScene('classic_stargate', (scene, util) => {
        resetScene(scene, 9, true);
        scene.scaleSceneView(0.8);

        scene
            .overlay()
            .showText(60)
            .text('Progression in §5Star Technology§r is scanned by unlocking Stargates and opening them.');

        scene.idle(10);
        placeStargate(scene, 'classic', [4, 1, 6]);
        scene.idle(20);
        placeStargate(scene, 'milky_way', [4, 1, 4]);
        scene.idle(20);
        placeStargate(scene, 'pegasus', [4, 1, 2]);
        scene.idle(40);

        scene
            .overlay()
            .showText(40)
            .text('This guide will show you how to assemble the §eClassic Stargate§r and how to open it.');

        scene.idle(20);

        scene.world().hideSection(util.select().position([4, 1, 6]), Direction.UP);
        scene.world().hideSection(util.select().position([4, 1, 4]), Direction.UP);
        scene.world().hideSection(util.select().position([4, 1, 2]), Direction.UP);
        scene.idle(25);
        scene.world().setBlock([4, 1, 6], 'minecraft:air', false);
        scene.world().setBlock([4, 1, 4], 'minecraft:air', false);
        scene.world().setBlock([4, 1, 2], 'minecraft:air', false);

        scene.idle(20);

        scene.addKeyframe();

        scene.overlay().showText(80).text('After crafting all the required parts, you can place them as shown.');

        scene.idle(5);

        let csg = computeMultiData(util, classicStargate(), [4, 1, 4]);

        const steps = (() => {
            let centerBlock = [4, 4, 4];
            return csg.blocks
                .map((b) => {
                    let startingAngle = JavaMath.PI / 2;
                    let offX = Math.floor(centerBlock[0]) - b.pos.x;
                    let offY = Math.floor(centerBlock[1]) - b.pos.y;
                    let angle = Math.atan2(offY, offX) + JavaMath.PI * 2;
                    angle = (angle - startingAngle) % (2 * JavaMath.PI);
                    return {
                        angle: angle,
                        block: b,
                    };
                })
                .sort((a, b) => a.angle - b.angle)
                .map((g) => [g.block]);
        })();

        for (let step of steps) {
            revealBlocks(scene, step, Direction.NORTH);
            scene.idle(3);
        }

        scene.idle(20);
        scene.addKeyframe();

        scene
            .overlay()
            .showOutlineWithText(util.select().position([4, 1, 4]), 60)
            .text('You can then form the Stargate right clicking the base.')
            .placeNearTarget();

        scene.idle(20);

        scene
            .overlay()
            .showControls(util.vector().blockSurface([4, 1, 4], Direction.NORTH), PonderPointing.DOWN, 20)
            .rightClick();

        scene.idle(10);

        csg.blocks.forEach((b) => scene.world().setBlock(b.pos, 'minecraft:air', false));
        hideSectionImmediately(scene, csg.cuboid);
        revealBlocks(scene, [
            {
                pos: [4, 1, 4],
                state: block('sgjourney:classic_stargate'),
                onPlace: (scene, pos) => {
                    let $ClassicStargateEntity = Java.loadClass(
                        /** @type {any} */ (
                            'net.povstalec.sgjourney.common.block_entities.stargate.ClassicStargateEntity'
                        )
                    );
                    scene.world().modifyBlockEntity(pos, $ClassicStargateEntity, (be) => {
                        /** @type {any} */ (be).symbolInfo().setSymbols('sgjourney:terra');
                    });
                },
            },
        ]);

        scene.idle(60);
        scene.addKeyframe();

        scene
            .overlay()
            .showText(80)
            .text(
                'To dial and enter the Stargate you need a §dAbydos §dInscribed §dCoordinate §dCrystal§r. Sneak and right-click it while looking at the air to absorbe its knowledge.'
            );

        scene.idle(100);

        scene
            .overlay()
            .showText(80)
            .text(
                'Then right-click the base block of the stargate with the crystal be allowed to enter the dimension.'
            );

        scene
            .overlay()
            .showControls(util.vector().blockSurface([4, 1, 4], Direction.UP), PonderPointing.DOWN, 80)
            .withItem('kubejs:abydos_coordinate_crystal')
            .rightClick();

        scene.idle(100);

        scene.idle(20);
        scene.addKeyframe();
        scene.rotateCameraY(-90);
        scene.idle(20);

        scene
            .overlay()
            .showText(60)
            .text('A §eStargate Interface§r is required to provide the power needed to open the Stargate.');

        scene.idle(70);

        let csgInterface = {
            pos: util.grid().at(4, 1, 5),
            state: block('sgjourney:crystal_interface'),
        };

        revealBlocks(scene, [csgInterface]);
        scene.idle(10);

        scene
            .overlay()
            .showOutlineWithText(util.select().position(csgInterface.pos), 60)
            .text(
                "Place it next to the gate and make sure it's §l§coriented correctly§r. The black square should be on the other side of the gate."
            )
            .placeNearTarget();

        scene.idle(80);
        scene.addKeyframe();

        scene
            .overlay()
            .showText(60)
            .text(
                '§eStargate Interface§r(s) are used to transfer power to the Stargate. You can provide either EU energy.'
            );

        scene.idle(20);

        /** @type {import("../types").MachineBlockWrapped[]} */
        let gtWires = Array(5)
            .fill(undefined)
            .map((_, off) => ({
                pos: csgInterface.pos.offset(off + 1, 0, 0),
                state: block('gtceu:dragonsteel_double_wire'),
                onPlace: (scene, pos) => setPipeConnections(scene, pos, [Direction.EAST, Direction.WEST]),
            }));

        revealBlocks(scene, gtWires);

        scene.idle(60);

        hideSectionAndRemoveBlocks(
            scene,
            gtWires.map((b) => b.pos)
        );

        scene.overlay().showText(80).text('Or FE energy.');

        scene.idle(20);

        revealBlocks(scene, [
            {
                pos: csgInterface.pos.offset(-1, 0, 0),
                state: block('fluxnetworks:flux_point'),
            },
        ]);

        scene.idle(20);

        scene
            .world()
            .setBlock(
                csgInterface.pos.offset(-1, 0, 0),
                block('fluxnetworks:flux_point').setValue($BlockStateProperties.EAST, $Boolean.valueOf(true)),
                false
            );

        scene.world().modifyBlockEntity(
            csgInterface.pos.offset(-1, 0, 0),
            $TileFluxPoint,
            /** @param {*} be */
            (be) => {
                be.mClientColor = 0xfe019a;
                be.getTransferHandler().addToBuffer(1000);
            }
        );

        scene.idle(60);
        scene.addKeyframe();

        scene
            .overlay()
            .showOutlineWithText(util.select().position(csgInterface.pos), 80)
            .text('Right click the §eStargate Interface§r to open the UI and configure the target energy amount.')
            .placeNearTarget();

        scene.idle(20);

        scene
            .overlay()
            .showControls(util.vector().blockSurface(csgInterface.pos, Direction.UP), PonderPointing.DOWN, 20)
            .rightClick();

        scene.idle(80);

        scene
            .overlay()
            .showText(80)
            .text("32,000,001 FE are needed to open a Stargate to §5Abydos§r, so make sure it's more than that.");

        scene.idle(60);

        scene.rotateCameraY(90);
        scene.idle(60);
        scene.addKeyframe();

        scene.overlay().showText(60).text('A §eClassic DHD§r is used to dial the destination address.');

        scene.idle(70);

        let csgDHD = {
            pos: util.grid().at(4, 1, 1),
            state: block('sgjourney:classic_dhd'),
        };

        revealBlocks(scene, [csgDHD]);
        scene.idle(10);

        scene
            .overlay()
            .showOutlineWithText(util.select().position(csgDHD.pos), 60)
            .text('It can be placed anywhere up to 16 blocks from the Stargate.')
            .placeNearTarget();

        scene.idle(80);
        scene.addKeyframe();

        scene
            .overlay()
            .showText(120)
            .text(
                'Right-click the §eDHD§r and start dialing in the address you got when you absorbed the crystal knowledge.'
            );

        scene.idle(20);

        scene
            .overlay()
            .showControls(util.vector().blockSurface(csgDHD.pos, Direction.UP), PonderPointing.DOWN, 20)
            .rightClick();

        scene.idle(40);

        let $AbstractStargateEntity = Java.loadClass(
            /** @type {any} */ ('net.povstalec.sgjourney.common.block_entities.stargate.AbstractStargateEntity')
        );
        let $Address = Java.loadClass(/** @type {any} */ ('net.povstalec.sgjourney.common.sgjourney.Address'));

        scene.world().modifyBlockEntity(
            csg.controller,
            $AbstractStargateEntity,
            /** @param {any} be */
            (be) => {
                be.setAddress(new $Address['(java.lang.String)']('-26-'));
            }
        );
        scene.idle(20);
        scene.world().modifyBlockEntity(
            csg.controller,
            $AbstractStargateEntity,
            /** @param {any} be */
            (be) => {
                be.setAddress(new $Address['(java.lang.String)']('-26-6-'));
            }
        );
        scene.idle(20);
        scene.world().modifyBlockEntity(
            csg.controller,
            $AbstractStargateEntity,
            /** @param {any} be */
            (be) => {
                be.setAddress(new $Address['(java.lang.String)']('-26-6-14-'));
            }
        );
        scene.idle(20);
        scene.world().modifyBlockEntity(
            csg.controller,
            $AbstractStargateEntity,
            /** @param {any} be */
            (be) => {
                be.setAddress(new $Address['(java.lang.String)']('-26-6-14-31-'));
            }
        );
        scene.idle(20);
        scene.world().modifyBlockEntity(
            csg.controller,
            $AbstractStargateEntity,
            /** @param {any} be */
            (be) => {
                be.setAddress(new $Address['(java.lang.String)']('-26-6-14-31-11-'));
            }
        );
        scene.idle(20);
        scene.world().modifyBlockEntity(
            csg.controller,
            $AbstractStargateEntity,
            /** @param {any} be */
            (be) => {
                be.setAddress(new $Address['(java.lang.String)']('-26-6-14-31-11-29-'));
            }
        );
        scene.idle(20);

        let tickCount = 0;
        scene.addInstruction(
            new PonderTickingInstruction(false, 120)
                .onFirstTick((scene) => {
                    tickCount = 0;
                    /** @type {any} */
                    let be = scene.world.getBlockEntity(csg.controller);
                    let $State = Java.loadClass(
                        /** @type {any} */ ('net.povstalec.sgjourney.common.sgjourney.StargateConnection$State')
                    );
                    be.setConnectionState($State.OUTGOING_CONNECTION);
                })
                .onTick((scene) => {
                    /** @type {any} */
                    let be = scene.world.getBlockEntity(csg.controller);
                    be.setTickCount(tickCount);
                    be.setKawooshTickCount(Math.min(40, Math.max(0, tickCount - 60)));
                    tickCount += 1;
                })
        );

        scene.idle(100);
        scene.overlay().showText(80).text('Have fun exploring §eAbydos§r!');
        scene.idle(100);
    });

    /**
     * @param {internal.net.createmod.ponder.api.scene.SceneBuilder} scene
     * @param {string} kind
     * @param {internal.$wrapped<internal.net.minecraft.core.BlockPos>} pos
     */
    function placeStargate(scene, kind, pos) {
        revealBlocks(scene, [
            {
                pos: pos,
                state: block(`sgjourney:${kind}_stargate`),
                onPlace: (scene, pos) => {
                    let $AbstractStargateEntity = Java.loadClass(
                        /** @type {any} */ (
                            'net.povstalec.sgjourney.common.block_entities.stargate.AbstractStargateEntity'
                        )
                    );
                    scene.world().modifyBlockEntity(
                        pos,
                        $AbstractStargateEntity,
                        /** @param {any} be */
                        (be) => {
                            be.symbolInfo().setSymbols('sgjourney:terra');
                        }
                    );
                },
            },
        ]);
    }

    // TODO: not working...
    // function playStargateChevronSound(scene, pos, index) {
    //     let $AbstractStargateEntity = Java.loadClass(
    //         'net.povstalec.sgjourney.common.block_entities.stargate.AbstractStargateEntity'
    //     );
    //     let $GenericStargateSound = Java.loadClass('net.povstalec.sgjourney.client.sound.sounds.GenericStargateSound');
    //     let getChevronEngageSound = javaReflectionGetMethodByName(
    //         'net.povstalec.sgjourney.client.sound.SoundAccess',
    //         'getChevronEngageSound'
    //     );
    //     let $Minecraft = Java.loadClass('net.minecraft.client.Minecraft');
    //     let $Short = Java.loadClass('java.lang.Short');

    //     scene.world().modifyBlockEntity(pos, $AbstractStargateEntity, (be) => {
    //         let sound = new $GenericStargateSound(be, getChevronEngageSound(null, be, new $Short(`${index}`)), 0.5);
    //         $Minecraft.instance.soundManager.play(sound);
    //     });
    // }
})();
