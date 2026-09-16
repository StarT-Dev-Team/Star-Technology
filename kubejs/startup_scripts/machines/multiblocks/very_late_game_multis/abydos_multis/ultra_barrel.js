GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('ultra_barrel', 'multiblock')
        .machine((holder) => new $BulkingMulti(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes(['industrial_barrel_aqueous', 'industrial_barrel_magmatic'])
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT_SUBTICK,
            $StarTRecipeModifiers.THROUGHPUT_BOOSTING,
            $StarTRecipeModifiers.BULKING,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('kubejs:enriched_naquadah_machine_casing'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                '    BBB    |           |           |           |           |           |    BBB    ',
                '  CBBBBBC  |  B     B  |           |           |           |  B     B  |  CBBBBBC  ',
                ' CCBBBBBCC | BBDDDDDBB |  BD   DB  |  BE   EB  |  BD   DB  | BBDDDDDBB | CCBBBBBCC ',
                ' BBBBBBBBB |  BD   DB  |  DDDDDDD  |  EEFFFEE  |  DDDDDDD  |  BD   DB  | BBBBBBBBB ',
                'BBBBBBBBBBB|  D  M  D  |   D   D   |   F   F   |   D   D   |  D  M  D  |BBBBBBBBBBB',
                'BBBBBBBBBBB|  D MMM D  |   D M D   |   F M F   |   D M D   |  D MMM D  |BBBBBBBBBBB',
                'BBBBBBBBBBB|  D  M  D  |   D   D   |   F   F   |   D   D   |  D  M  D  |BBBBBBBBBBB',
                ' BBBBBBBBB |  BD   DB  |  DDDDDDD  |  EEFFFEE  |  DDDDDDD  |  BD   DB  | BBBBBBBBB ',
                ' CCBBBBBCC | BBDDDDDBB |  BD   DB  |  BE   EB  |  BD   DB  | BBDDDDDBB | CCBBBBBCC ',
                '  CBBBBBC  |  B     B  |           |           |           |  B     B  |  CBBBBBC  ',
                '    B@B    |           |           |           |           |           |    BBB    ',
            ])
                .whereDict({
                    D: P.anyOf([
                        P.kjsBlock('polycarbonate_casing', { min: 10 }),
                        P.ability(PA.itemIn, { view: 1 }),
                        P.ability(PA.itemOut, { view: 1 }),
                        P.ability(PA.fluidIn, { view: 1 }),
                        P.ability(PA.fluidOut, { view: 1 }),
                        P.ability(PA.parallelHatch, { max: 1 }),
                        P.ability(PA.euIn, { max: 2 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                    ]),
                    ' ': P.any(),
                    B: P.kjsBlock('enriched_naquadah_machine_casing'),
                    C: P.kjsBlock('enriched_naquadah_firebox_casing'),
                    E: P.gtBlock('sterilizing_filter_casing'),
                    F: P.kjsBlock('reinforced_fusion_glass'),
                    M: P.kjsBlock('enriched_naquadah_pipe_casing'),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel('kubejs:block/casings/naquadah/casing', 'kubejs:block/multiblock/primitive_blast_furnace');
});
