GTCEuServerEvents.oreVeins((event) => {
    event.removeAll();

    // === Abydos Veins ===
    event.add('start:abydos_refractory_metals_vein', (vein) => {
        vein.weight(98);
        vein.clusterSize(18);
        vein.density(0.15);
        vein.discardChanceOnAirExposure(0);
        vein.layer('abydos');
        vein.heightRangeUniform(10, 70);
        vein.layeredVeinGenerator((generator) =>
            generator.buildLayerPattern((pattern) =>
                pattern
                    .layer((l) => l.weight(3).mat(GTMaterials.get('titanite')).size(2, 4))
                    .layer((l) => l.weight(3).mat(GTMaterials.get('xenotime')).size(2, 4))
                    .layer((l) => l.weight(2).mat(GTMaterials.get('monazite')).size(2, 3))
                    .layer((l) => l.weight(1).mat(GTMaterials.get('scheelite')).size(1, 2))
            )
        );
        vein.surfaceIndicatorGenerator((indicator) =>
            indicator.surfaceRock(GTMaterials.get('monazite')).placement('above').density(0.4).radius(5)
        );
    });

    event.add('start:abydos_activation_metals_vein', (vein) => {
        vein.weight(68);
        vein.clusterSize(21);
        vein.density(0.15);
        vein.discardChanceOnAirExposure(0);
        vein.layer('abydos');
        vein.heightRangeUniform(10, 70);
        vein.layeredVeinGenerator((generator) =>
            generator.buildLayerPattern((pattern) =>
                pattern
                    .layer((l) => l.weight(3).mat(GTMaterials.get('zapolite')).size(2, 3))
                    .layer((l) => l.weight(2).mat(GTMaterials.get('crookesite')).size(2, 4))
                    .layer((l) => l.weight(2).mat(GTMaterials.get('kitkaite')).size(2, 4))
                    .layer((l) => l.weight(1).mat(GTMaterials.get('lautarite')).size(1, 2))
            )
        );
        vein.surfaceIndicatorGenerator((indicator) =>
            indicator.surfaceRock(GTMaterials.get('kitkaite')).placement('above').density(0.4).radius(5)
        );
    });

    event.add('start:abydos_alkaline_sediment_vein', (vein) => {
        vein.weight(51);
        vein.clusterSize(15);
        vein.density(0.15);
        vein.discardChanceOnAirExposure(0);
        vein.layer('abydos');
        vein.heightRangeUniform(10, 70);
        vein.layeredVeinGenerator((generator) =>
            generator.buildLayerPattern((pattern) =>
                pattern
                    .layer((l) => l.weight(2).mat(GTMaterials.get('strontianite')).size(2, 4))
                    .layer((l) => l.weight(2).mat(GTMaterials.get('celestine')).size(2, 4))
                    .layer((l) => l.weight(1).mat(GTMaterials.get('gypsum')).size(1, 2))
                    .layer((l) => l.weight(1).mat(GTMaterials.get('calcite')).size(1, 2))
            )
        );
        vein.surfaceIndicatorGenerator((indicator) =>
            indicator.surfaceRock(GTMaterials.get('strontianite')).placement('above').density(0.4).radius(5)
        );
    });

    event.add('start:naquadite_vein', (vein) => {
        vein.weight(68);
        vein.clusterSize(21);
        vein.density(0.15);
        vein.discardChanceOnAirExposure(0);
        vein.layer('abydos');
        vein.heightRangeUniform(10, 70);
        vein.layeredVeinGenerator((generator) =>
            generator.buildLayerPattern((pattern) =>
                pattern
                    .layer((l) => l.weight(3).mat(GTMaterials.get('naquadite')).size(2, 3))
                    .layer((l) => l.weight(2).mat(GTMaterials.get('magnesite')).size(2, 4))
                    .layer((l) => l.weight(2).mat(GTMaterials.get('chromite')).size(2, 4))
                    .layer((l) => l.weight(1).mat(GTMaterials.get('magnetite')).size(1, 2))
            )
        );
        vein.surfaceIndicatorGenerator((indicator) =>
            indicator.surfaceRock(GTMaterials.get('naquadite')).placement('above').density(0.4).radius(5)
        );
    });

    // === Nether Veins ===
    event.add('start:brimstone_patch', (vein) => {
        vein.weight(100);
        vein.clusterSize(20);
        vein.density(0.15);
        vein.layer('netherrack');
        vein.dimensions('minecraft:the_nether');
        vein.heightRangeUniform(10, 120);
        vein.layeredVeinGenerator((generator) =>
            generator.buildLayerPattern((pattern) =>
                pattern
                    .layer((l) =>
                        l
                            .weight(3)
                            .block(() => Block.getBlock('kubejs:brimstone'))
                            .size(16, 32)
                    )
                    .layer((l) => l.weight(2).mat(GTMaterials.get('plutonium')).size(2, 3))
                    .layer((l) => l.weight(1).mat(GTMaterials.get('thorium')).size(1, 3))
            )
        );
        vein.surfaceIndicatorGenerator((indicator) =>
            indicator.surfaceRock(GTMaterials.get('plutonium')).placement('above').density(0.4).radius(5)
        );
    });
    event.add('start:cryostone_patch', (vein) => {
        vein.weight(100);
        vein.clusterSize(20);
        vein.density(0.15);
        vein.layer('netherrack');
        vein.dimensions('minecraft:the_nether');
        vein.heightRangeUniform(10, 120);
        vein.layeredVeinGenerator((generator) =>
            generator.buildLayerPattern((pattern) =>
                pattern
                    .layer((l) =>
                        l
                            .weight(3)
                            .block(() => Block.getBlock('kubejs:cryostone'))
                            .size(16, 32)
                    )
                    .layer((l) => l.weight(2).mat(GTMaterials.get('cobaltite')).size(2, 3))
                    .layer((l) => l.weight(1).mat(GTMaterials.get('electrotine')).size(1, 3))
            )
        );
        vein.surfaceIndicatorGenerator((indicator) =>
            indicator.surfaceRock(GTMaterials.get('cobaltite')).placement('above').density(0.4).radius(5)
        );
    });
});
