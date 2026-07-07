(() => {
    let { computeMultiData, resetScene, formMultiblock, defineScene } = ponderUtils;
    let { coke_oven, electric_blast_furnace, large_chemical_reactor } = ponderMultis;

    defineScene('multiblock_introduction', (scene, util) => {
        resetScene(scene, 13, true);
        scene.scaleSceneView(0.8);

        let cokeOven = computeMultiData(util, coke_oven(), [10, 2, 5]);
        for (let block of cokeOven.blocks) {
            scene.world().setBlock(block.pos, block.state, true);
        }
        formMultiblock(scene, cokeOven.controller);

        let ebf = computeMultiData(util, electric_blast_furnace(), [6, 1, 5]);
        for (let block of ebf.blocks) {
            scene.world().setBlock(block.pos, block.state, true);
        }
        formMultiblock(scene, ebf.controller);

        let lcr = computeMultiData(util, large_chemical_reactor(), [2, 2, 5]);
        for (let block of lcr.blocks) {
            scene.world().setBlock(block.pos, block.state, true);
        }
        formMultiblock(scene, lcr.controller);

        scene.idle(10);
        scene.world().showSection(cokeOven.cuboid, Direction.DOWN);
        scene.idle(10);
        scene.world().showSection(ebf.cuboid, Direction.DOWN);
        scene.idle(10);
        scene.world().showSection(lcr.cuboid, Direction.DOWN);
        scene.idle(10);

        scene
            .overlay()
            .showOutlineWithText(ebf.cuboid.add(lcr.cuboid).add(cokeOven.cuboid), 80)
            .text(
                'While playing GregTech you will find yourself needing to build machines that are structures of many blocks, commonly called Multiblocks'
            )
            .placeNearTarget();
        scene.idle(100);

        scene.overlay().showText(40).text("Let's go over some useful informations about them");
        scene.idle(60);
    });
})();
