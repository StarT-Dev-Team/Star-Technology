GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('stargate_display', 'multiblock')
        .recipeType('dummy')
        .pattern((definition) =>
            newFactoryBlockPattern([
                '   D   |       |       |       |       |       |       ',
                '       |       |       |       |       |       |       ',
                '   E   |       |       |       |       |       |       ',
                ' RCBCR |CR   RC|R     R|R  @  R|C     C|RR   RR| CRCRC ',
            ])
                .whereDict({
                    R: P.anyOf([
                        P.block('sgjourney:classic_stargate_ring_block'),
                        P.kjsBlock('ancient_stargate_ring_block'),
                        P.kjsBlock('draconic_stargate_ring_block'),
                    ]),
                    C: P.anyOf([
                        P.block('sgjourney:classic_stargate_chevron_block'),
                        P.kjsBlock('ancient_stargate_chevron_block'),
                        P.kjsBlock('draconic_stargate_chevron_block'),
                    ]),
                    B: P.anyOf([
                        P.block('sgjourney:classic_stargate_base_block'),
                        P.kjsBlock('ancient_stargate_base_block'),
                        P.kjsBlock('draconic_stargate_base_block'),
                    ]),
                    E: P.anyOf([P.block('sgjourney:crystal_interface')]),
                    D: P.anyOf([
                        P.block('sgjourney:classic_dhd'),
                        P.block('sgjourney:milky_way_dhd'),
                        P.block('sgjourney:pegasus_dhd'),
                    ]),
                    '@': P.controller(definition),
                })
                .build()
        )
        .shapeInfos((definition) => {
            let shapeInfo = [];

            /** @typedef {internal.com.gregtechceu.gtceu.api.pattern.MultiblockShapeInfo$ShapeInfoBuilder} ShapeInfoBuilder */

            /** @type ShapeInfoBuilder */
            let builder = MultiblockShapeInfo.builder()
                .aisle('   D   ', '       ', '       ', '       ', '       ', '       ', '       ')
                .aisle('       ', '       ', '       ', '       ', '       ', '       ', '       ')
                .aisle('   E   ', '       ', '       ', '       ', '       ', '       ', '       ')
                .aisle(' RCBCR ', 'CR   RC', 'R     R', 'R  @  R', 'C     C', 'RR   RR', ' CRCRC ')
                .where('@', definition, Direction.NORTH)
                .where('E', Block.getBlock('sgjourney:crystal_interface'));

            shapeInfo.push(
                builder
                    .shallowCopy()
                    .where('R', Block.getBlock('sgjourney:classic_stargate_ring_block'))
                    .where('C', Block.getBlock('sgjourney:classic_stargate_chevron_block'))
                    .where('B', Block.getBlock('sgjourney:classic_stargate_base_block'))
                    .where('D', Block.getBlock('sgjourney:classic_dhd'))
                    .build()
            );

            shapeInfo.push(
                builder
                    .shallowCopy()
                    .where('R', Block.getBlock('kubejs:ancient_stargate_ring_block'))
                    .where('C', Block.getBlock('kubejs:ancient_stargate_chevron_block'))
                    .where('B', Block.getBlock('kubejs:ancient_stargate_base_block'))
                    .where('D', Block.getBlock('sgjourney:milky_way_dhd'))
                    .build()
            );

            shapeInfo.push(
                builder
                    .shallowCopy()
                    .where('R', Block.getBlock('kubejs:draconic_stargate_ring_block'))
                    .where('C', Block.getBlock('kubejs:draconic_stargate_chevron_block'))
                    .where('B', Block.getBlock('kubejs:draconic_stargate_base_block'))
                    .where('D', Block.getBlock('sgjourney:pegasus_dhd'))
                    .build()
            );

            return shapeInfo;
        })
        .workableCasingModel('minecraft:block/smooth_stone', 'gtceu:block/machines/object_holder');
});
