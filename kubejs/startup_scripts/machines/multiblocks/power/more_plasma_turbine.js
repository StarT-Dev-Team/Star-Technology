GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('supreme_plasma_turbine', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .tooltips([
            Text.translate('block.gtceu.supreme_plasma_turbine.top.0'),
            Text.translate('block.gtceu.supreme_plasma_turbine.top.1'),
            Text.translate('block.start_core.gap'),
            Text.translate('block.gtceu.supreme_plasma_turbine.bottom'),
        ])
        .paginatedTooltips([
            [
                Text.translate('block.gtceu.supreme_plasma_turbine.p1.1'),
                Text.translate('block.gtceu.supreme_plasma_turbine.p1.2'),
                Text.translate('block.start_core.breaker_line'),
                Text.translate('block.gtceu.supreme_plasma_turbine.p1.3'),
            ],
            [
                Text.translate('block.gtceu.supreme_plasma_turbine.p2.1'),
                Text.translate('block.start_core.breaker_line'),
                Text.translate('block.gtceu.supreme_plasma_turbine.p2.2'),
                Text.translate('block.gtceu.supreme_plasma_turbine.p2.3'),
            ],
        ])
        .recipeType('plasma_generator')
        .generator(true)
        .machine((holder) => new $BoostedPlasmaTurbine(holder, GTValues.UHV))
        .regressWhenWaiting(false)
        .recipeModifiers([$StarTRecipeModifiers.BOOSTED_PLASMA_TURBINE])
        .appearanceBlock(() => Block.getBlock('kubejs:enriched_naquadah_machine_casing'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                '         |FCC      |FFCHH  CC|FCC      |         ',
                'FCC      |  FECCXX |  FECEEF |  FECCXX |FCC      ',
                'FFCHH  CC|  FECEEF |  RGGGGL |  FECEEF |FFCHH  CC',
                'FCC      |  FECCXX |  FECEEF |  FECCXX |FCC      ',
                '         |FCC      |FFCH@  CC|FCC      |         ',
            ])
                .whereDict({
                    '@': P.controller(definition.get()),
                    H: P.anyOf([
                        P.kjsBlock('enriched_naquadah_machine_casing'),
                        P.ability(PA.maintenance, { exact: 1 }),
                        P.ability(PA.itemIn, { prev: 1 }),
                        P.ability(PA.itemOut, { prev: 1 }),
                    ]),
                    F: P.gtBlock('void_frame'),
                    C: P.kjsBlock('enriched_naquadah_machine_casing'),
                    E: P.kjsBlock('enriched_naquadah_engine_intake_casing'),
                    X: P.kjsBlock('enriched_naquadah_heat_escape_casing'),
                    G: P.kjsBlock('enriched_naquadah_gearbox'),
                    L: P.ability(PA.laserOut),
                    R: P.ability(PA.rotorHolder),
                    ' ': P.any(),
                })
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/naquadah/casing',
            'gtceu:block/multiblock/generator/large_plasma_turbine'
        );

    event
        .create('nyinsane_plasma_turbine', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .tooltips([
            Text.translate('block.gtceu.supreme_plasma_turbine.top.0'),
            Text.translate('block.gtceu.supreme_plasma_turbine.top.1'),
            Text.translate('block.start_core.gap'),
            Text.translate('block.gtceu.supreme_plasma_turbine.bottom'),
        ])
        .paginatedTooltips([
            [
                Text.translate('block.gtceu.supreme_plasma_turbine.p1.1'),
                Text.translate('block.gtceu.supreme_plasma_turbine.p1.2'),
                Text.translate('block.start_core.breaker_line'),
                Text.translate('block.gtceu.nyinsane_plasma_turbine.p1.3'),
            ],
            [
                Text.translate('block.gtceu.nyinsane_plasma_turbine.p2.1'),
                Text.translate('block.start_core.breaker_line'),
                Text.translate('block.gtceu.nyinsane_plasma_turbine.p2.2'),
                Text.translate('block.gtceu.nyinsane_plasma_turbine.p2.3'),
            ],
        ])
        .recipeType('plasma_generator')
        .generator(true)
        .machine((holder) => new $BoostedPlasmaTurbine(holder, GTValues.UIV))
        .regressWhenWaiting(false)
        .recipeModifiers([$StarTRecipeModifiers.BOOSTED_PLASMA_TURBINE])
        .appearanceBlock(() => Block.getBlock('kubejs:nyanium_machine_casing'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                '         |FCC      |FFCHH  CC|FCC      |         ',
                'FCC      |  FECCXX |  FECEEF |  FECCXX |FCC      ',
                'FFCHH  CC|  FECEEF |  RGGGGL |  FECEEF |FFCHH  CC',
                'FCC      |  FECCXX |  FECEEF |  FECCXX |FCC      ',
                '         |FCC      |FFCH@  CC|FCC      |         ',
            ])
                .whereDict({
                    '@': P.controller(definition),
                    H: P.anyOf([
                        P.kjsBlock('nyanium_machine_casing'),
                        P.ability(PA.maintenance, { exact: 1 }),
                        P.ability(PA.fluidIn, { prev: 1 }),
                        P.ability(PA.fluidOut, { prev: 1 }),
                    ]),
                    F: P.gtBlock('draconyallium_frame'),
                    C: P.kjsBlock('nyanium_machine_casing'),
                    E: P.kjsBlock('nyanium_engine_intake_casing'),
                    X: P.kjsBlock('nyanium_heat_escape_casing'),
                    G: P.kjsBlock('nyanium_gearbox'),
                    L: P.ability(PA.laserOut),
                    R: P.ability(PA.rotorHolder),
                    ' ': P.any(),
                })
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/nyanium/casing',
            'gtceu:block/multiblock/generator/large_plasma_turbine'
        );
});
