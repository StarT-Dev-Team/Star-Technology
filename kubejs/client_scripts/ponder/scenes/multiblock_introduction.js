(() => {
    let { computeMultiData, resetScene, formMultiblock, defineScene } = ponderUtils;
    let { cokeOven, electricBlastFurnace, largeChemicalReactor } = ponderMultis;

    defineScene('multiblock_introduction', (scene, util) => {
        resetScene(scene, 13, true);
        scene.scaleSceneView(0.8);

        let coke = computeMultiData(util, cokeOven(), [10, 2, 5]);
        for (let block of coke.blocks) {
            scene.world().setBlock(block.pos, block.state, true);
        }
        formMultiblock(scene, coke.controller);

        let ebf = computeMultiData(util, electricBlastFurnace(), [6, 1, 5]);
        for (let block of ebf.blocks) {
            scene.world().setBlock(block.pos, block.state, true);
        }
        formMultiblock(scene, ebf.controller);

        let lcr = computeMultiData(util, largeChemicalReactor(), [2, 2, 5]);
        for (let block of lcr.blocks) {
            scene.world().setBlock(block.pos, block.state, true);
        }
        formMultiblock(scene, lcr.controller);

        scene.idle(10);
        scene.world().showSection(coke.cuboid, Direction.DOWN);
        scene.idle(10);
        scene.world().showSection(ebf.cuboid, Direction.DOWN);
        scene.idle(10);
        scene.world().showSection(lcr.cuboid, Direction.DOWN);
        scene.idle(10);

        scene
            .overlay()
            .showOutlineWithText(ebf.cuboid.add(lcr.cuboid).add(coke.cuboid), 80)
            .text(
                'While playing GregTech you will find yourself needing to build machines that are structures of many blocks, commonly called Multiblocks'
            )
            .placeNearTarget();
        scene.idle(100);

        scene.overlay().showText(40).text("Let's go over some useful informations about them");
        scene.idle(60);
    });
})();
