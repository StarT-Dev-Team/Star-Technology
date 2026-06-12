GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('super_barrel', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .tooltips([Text.translate('block.start_core.gap'), Text.translate('gtceu.multiblock.exact_hatch_1.tooltip')])
        .recipeTypes(['industrial_barrel_aqueous', 'industrial_barrel_magmatic'])
        .recipeModifiers([
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            $StarTRecipeModifiers.THROUGHPUT_BOOSTING,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(GTBlocks.CASING_PALLADIUM_SUBSTATION)
        .pattern((definition) =>
            newFactoryBlockPattern([
                '    BBB    |           |           |           |    BBB    ',
                '  BBBBBBB  |  C BBB C  |  C BDB C  |  C BBB C  |  BBBBBBB  ',
                ' BBBBBBBBB | CEEEEEEEC | CEEEFEEEC | CEEEEEEEC | BBBBBBBBB ',
                ' BBBBBBBBB |  EF   FE  |  E  F  E  |  E     E  | BBGGGGGBB ',
                'BBBBBBBBBBB| BE F F EB | BE  F  EB | BE     EB |BBBGGGGGBBB',
                'BBBBBBBBBBB| BE     EB | DFFFFFFFD | BE     EB |BBBGGGGGBBB',
                'BBBBBBBBBBB| BE F F EB | BE  F  EB | BE     EB |BBBGGGGGBBB',
                ' BBBBBBBBB |  EF   FE  |  E  F  E  |  E     E  | BBGGGGGBB ',
                ' BBBBBBBBB | CEEEEEEEC | CEEEFEEEC | CEEEEEEEC | BBBBBBBBB ',
                '  BBBBBBB  |  C BBB C  |  C B@B C  |  C BBB C  |  BBBBBBB  ',
                '    BBB    |           |           |           |    BBB    ',
            ])
                .where(' ', Predicates.any())
                .where(
                    'B',
                    Predicates.blocks('gtceu:palladium_substation')
                        .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(1).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                        .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                )
                .where('C', Predicates.blocks('gtceu:rhodium_plated_palladium_frame'))
                .where('D', Predicates.blocks('kubejs:pallaridium_engine_intake_casing'))
                .where('E', Predicates.blocks('gtceu:clean_machine_casing'))
                .where('F', Predicates.blocks('kubejs:pallaridium_pipe_casing'))
                .where('G', Predicates.blocks('gtceu:fusion_glass'))
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_palladium_substation',
            'gtceu:block/machines/distillery'
        );
});
