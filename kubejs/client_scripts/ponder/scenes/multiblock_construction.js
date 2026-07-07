(() => {
    let {
        computeMultiData,
        resetScene,
        sortStrategy,
        revealBlocks,
        breakBlocksAndHide,
        defineScene,
        animatedCircuitConfiguration,
        animateMufflerHatch,
        setMultiblockActiveState,
        block,
        setPipeConnections,
        sectionFromPositions,
        formMultiblock,
    } = ponderUtils;
    let { electric_blast_furnace } = ponderMultis;

    defineScene('multiblock_construction', (scene, util) => {
        resetScene(scene, 5, true);

        let ebf = computeMultiData(util, electric_blast_furnace(true), [2, 1, 1]);
        const steps = sortStrategy['controller_then_layers'](util, ebf.controller, ebf.blocks);

        revealBlocks(scene, steps[0]);
        scene.idle(25);

        scene
            .overlay()
            .showOutlineWithText(util.select().position(ebf.controller), 40)
            .text('Every Multiblock has a Controller, the brain of the machine')
            .placeNearTarget();

        scene.idle(60);
        scene.addKeyframe();

        scene
            .overlay()
            .showText(40)
            .text('You will then need to assemble the correct structure of the Multiblock')
            .pointAt(util.vector().topOf([2, 1, 2]))
            .placeNearTarget();

        scene.idle(10);
        revealBlocks(scene, steps[1]);
        scene.idle(50);

        revealBlocks(scene, steps[2]);
        scene.idle(20);
        revealBlocks(scene, steps[3]);
        scene.idle(20);
        revealBlocks(scene, steps[4]);
        scene.idle(20);

        scene.addKeyframe();

        scene
            .overlay()
            .showText(40)
            .text('Some Multiblocks require specific blocks to be special Parts')
            .pointAt(util.vector().topOf([2, 4, 2]))
            .placeNearTarget();

        scene.idle(60);

        breakBlocksAndHide(scene, [[2, 4, 2]]);
        revealBlocks(
            scene,
            [
                {
                    pos: [2, 4, 2],
                    state: block('gtceu:lv_muffler_hatch', Direction.UP),
                },
            ],
            Direction.DOWN
        );

        scene.idle(20);

        scene
            .overlay()
            .showText(40)
            .text('Or they may require that a Part is present in the Multiblock')
            .pointAt(util.vector().topOf([2, 4, 1]))
            .placeNearTarget();

        scene.idle(60);

        breakBlocksAndHide(scene, [[2, 4, 1]]);
        revealBlocks(scene, [{ pos: [2, 4, 1], state: block('gtceu:maintenance_hatch') }], Direction.SOUTH);
        scene.idle(20);

        scene.rotateCameraY(-90);
        scene.idle(60);
        scene.addKeyframe();

        scene
            .overlay()
            .showText(40)
            .text('Electric Multiblocks always require an energy input')
            .pointAt(util.vector().blockSurface([3, 1, 3], Direction.SOUTH))
            .placeNearTarget();

        scene.idle(60);

        breakBlocksAndHide(scene, [
            [2, 1, 3],
            [3, 1, 3],
        ]);
        revealBlocks(
            scene,
            [
                {
                    pos: [2, 1, 3],
                    state: block('gtceu:lv_energy_input_hatch', Direction.SOUTH),
                },
                {
                    pos: [3, 1, 3],
                    state: block('gtceu:lv_energy_input_hatch', Direction.SOUTH),
                },
            ],
            Direction.NORTH
        );
        scene.idle(20);

        let wires = [
            {
                pos: [2, 1, 4],
                state: block('gtceu:soul_infused_single_wire'),
                onPlace: (scene, pos) => setPipeConnections(scene, pos, [Direction.EAST, Direction.NORTH]),
            },
            {
                pos: [3, 1, 4],
                state: block('gtceu:soul_infused_single_wire'),
                onPlace: (scene, pos) =>
                    setPipeConnections(scene, pos, [Direction.EAST, Direction.WEST, Direction.NORTH]),
            },
            {
                pos: [4, 1, 4],
                state: block('gtceu:soul_infused_single_wire'),
                onPlace: (scene, pos) => setPipeConnections(scene, pos, [Direction.EAST, Direction.WEST]),
            },
        ];
        revealBlocks(scene, wires);

        scene.idle(20);

        scene.rotateCameraY(90);
        scene.idle(60);
        scene.addKeyframe();

        scene
            .overlay()
            .showOutlineWithText(ebf.cuboid, 80)
            .text(
                "When the requirements are matched the various Parts will take the texture of the Multiblock casing, and the controller will tell you it's formed."
            )
            .pointAt(ebf.controller)
            .placeNearTarget();

        scene.idle(20);
        formMultiblock(scene, ebf.controller);

        // TODO: reimplement particles
        // scene.particles.simple(20, "glow", [1, 1, 1]).density(100).area([4, 5, 4]);

        scene.idle(80);
        scene.addKeyframe();

        breakBlocksAndHide(scene, [
            [3, 1, 1],
            [1, 1, 1],
        ]);
        revealBlocks(
            scene,
            [
                { pos: [3, 1, 1], state: block('gtceu:lv_input_bus', Direction.NORTH) },
                {
                    pos: [1, 1, 1],
                    state: block('gtceu:lv_output_bus', Direction.NORTH),
                },
            ],
            Direction.SOUTH
        );
        scene.idle(20);
        formMultiblock(scene, ebf.controller);

        scene
            .overlay()
            .showOutlineWithText(
                util
                    .select()
                    .position(3, 1, 1)
                    .add(util.select().position(1, 1, 1)),
                60
            )
            .text('Item input and output must be handled via Input Buses and Output Buses')
            .placeNearTarget();

        scene.idle(80);
        scene.addKeyframe();

        scene
            .overlay()
            .showText(80)
            .text(
                'Some recipes require a specific programmed circuit setting to run, you can configure it from the input bus.'
            );
        scene.idle(20);

        animatedCircuitConfiguration(
            scene,
            util.vector().blockSurface([3, 1, 1], Direction.NORTH),
            PonderPointing.RIGHT,
            0,
            2,
            60
        );

        scene.idle(10);
        scene.addKeyframe();

        breakBlocksAndHide(scene, [
            [1, 1, 2],
            [1, 1, 3],
        ]);
        revealBlocks(
            scene,
            [
                {
                    pos: [1, 1, 2],
                    state: block('gtceu:lv_input_hatch', Direction.WEST),
                },
                {
                    pos: [1, 1, 3],
                    state: block('gtceu:lv_output_hatch', Direction.WEST),
                },
            ],
            Direction.EAST
        );
        scene.idle(20);
        formMultiblock(scene, ebf.controller);

        scene
            .overlay()
            .showOutlineWithText(
                util
                    .select()
                    .position(1, 1, 3)
                    .add(util.select().position(1, 1, 2)),
                60
            )
            .text('Fluid input and output must be handled via Input Hatches and Output Hatches')
            .pointAt(util.vector().blockSurface([1, 1, 2], Direction.WEST))
            .placeNearTarget();

        scene.idle(80);
        scene.addKeyframe();

        revealBlocks(scene, [{ pos: [3, 1, 0], state: block('minecraft:chest') }]);
        revealBlocks(scene, [{ pos: [0, 1, 2], state: block('gtceu:bronze_drum') }]);

        scene.idle(30);

        scene
            .overlay()
            .showOutlineWithText(
                util
                    .select()
                    .position(3, 1, 0)
                    .add(util.select().position(0, 1, 2)),
                60
            )
            .text('Input Buses and Input Hatches automatically pull items and fluids from adjacent inventories')
            .placeNearTarget();

        scene.idle(80);
        scene.addKeyframe();

        scene
            .overlay()
            .showControls(util.vector().blockSurface([3, 1, 0], Direction.UP), PonderPointing.DOWN, 20)
            .withItem('gtceu:aluminium_dust');

        scene
            .overlay()
            .showControls(util.vector().blockSurface([0, 1, 2], Direction.UP), PonderPointing.DOWN, 20)
            .withItem('gtceu:nitrogen_bucket');

        scene.idle(40);

        setMultiblockActiveState(scene, ebf.controller, true);
        animateMufflerHatch(scene, [2, 4, 2], 80);
        scene.idle(80);
        setMultiblockActiveState(scene, ebf.controller, false);
        scene.idle(10);

        scene.addKeyframe();

        revealBlocks(scene, [{ pos: [1, 1, 0], state: block('minecraft:chest') }]);
        scene.idle(30);

        scene
            .overlay()
            .showOutlineWithText(util.select().position(1, 1, 0), 60)
            .text('Output Buses and Output Hatches automatically push their contents into adjacent inventories')
            .placeNearTarget();

        scene.idle(20);

        scene
            .overlay()
            .showControls(util.vector().blockSurface([1, 1, 0], Direction.UP), PonderPointing.DOWN, 20)
            .withItem('gtceu:aluminium_ingot');

        scene.idle(40);

        scene.world().hideSection(util.select().position([3, 1, 0]).add([0, 1, 2]).add([1, 1, 0]), Direction.UP);

        scene.idle(40);
        scene
            .world()
            .replaceBlocks(util.select().position([3, 1, 0]).add([0, 1, 2]).add([1, 1, 0]), 'minecraft:air', false);

        scene.addKeyframe();

        scene.overlay().showText(40).text('The more you progress the more you can upgrade some Multiblocks');
        scene.idle(60);

        scene.rotateCameraY(-90);
        scene.idle(60);
        scene.addKeyframe();

        scene.overlay().showText(40).text('To allow overclocking (running at higher voltages)');
        scene.idle(20);

        let wiresSection = sectionFromPositions(
            scene,
            wires.map((b) => b.pos)
        );
        scene.world().hideSection(wiresSection, Direction.UP);
        scene.idle(20);
        scene.world().replaceBlocks(wiresSection, 'minecraft:air', false);

        breakBlocksAndHide(scene, [
            [2, 1, 3],
            [3, 1, 3],
        ]);

        revealBlocks(
            scene,
            [
                {
                    pos: [2, 1, 3],
                    state: block('gtceu:mv_energy_input_hatch', Direction.SOUTH),
                },
                {
                    pos: [3, 1, 3],
                    state: block('gtceu:mv_energy_input_hatch', Direction.SOUTH),
                },
            ],
            Direction.NORTH
        );
        formMultiblock(scene, ebf.controller);
        scene.idle(20);

        revealBlocks(
            scene,
            wires.map((w) => ({
                pos: w.pos,
                state: block('gtceu:signalum_single_wire'),
                onPlace: w.onPlace,
            }))
        );
        scene.idle(60);

        scene.rotateCameraY(90);
        scene.idle(60);
        scene.addKeyframe();

        scene
            .overlay()
            .showText(40)
            .text('Or in this specific case, upgrading the coils to an higher tier to smelt at higher temperatures');
        scene.idle(20);

        breakBlocksAndHide(scene, steps[2].map((b) => b.pos).concat(steps[3].map((b) => b.pos)));
        revealBlocks(
            scene,
            steps[2].concat(steps[3]).map((b) => ({
                pos: b.pos,
                state: block('gtceu:nichrome_coil_block'),
            })),
            Direction.NORTH
        );
        scene.idle(20);
        formMultiblock(scene, ebf.controller);

        scene.idle(80);
    });
})();
