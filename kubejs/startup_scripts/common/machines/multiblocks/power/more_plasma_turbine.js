GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('supreme_plasma_turbine', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('plasma_generator')
        .generator(true)
        .machine((holder) => new $BoostedPlasmaTurbine(holder, GTValues.UHV))
        .regressWhenWaiting(false)
        .recipeModifiers([$StarTRecipeModifiers.BOOSTED_PLASMA_TURBINE])
        .appearanceBlock(() => Block.getBlock('kubejs:enriched_naquadah_machine_casing'))
        .pattern((definition) => FactoryBlockPattern.start()
            .aisle('         ', 'FCC      ', 'FFCHH  CC', 'FCC      ', '         ')
            .aisle('FCC      ', '  FECCXX ', '  FECEEF ', '  FECCXX ', 'FCC      ')
            .aisle('FFCHH  CC', '  FECEEF ', '  RGGGGL ', '  FECEEF ', 'FFCHH  CC')
            .aisle('FCC      ', '  FECCXX ', '  FECEEF ', '  FECCXX ', 'FCC      ')
            .aisle('         ', 'FCC      ', 'FFCH@  CC', 'FCC      ', '         ')
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .where('H', Predicates.blocks('kubejs:enriched_naquadah_machine_casing')
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setPreviewCount(1)))
            .where('F', Predicates.blocks('gtceu:void_frame'))
            .where('C', Predicates.blocks('kubejs:enriched_naquadah_machine_casing'))
            .where('E', Predicates.blocks('kubejs:enriched_naquadah_engine_intake_casing'))
            .where('X', Predicates.blocks('kubejs:enriched_naquadah_heat_escape_casing'))
            .where('G', Predicates.blocks('kubejs:enriched_naquadah_gearbox'))
            .where('L', Predicates.abilities(PartAbility.OUTPUT_LASER))
            .where('R', Predicates.abilities(PartAbility.ROTOR_HOLDER))
            .where(' ', Predicates.any())
            .build())
        .paginatedTooltips(
            [
                Text.translate("block.gtceu.supreme_plasma_turbine.p1.1"),
                Text.translate("block.gtceu.supreme_plasma_turbine.p1.2"),
                Text.translate("block.start_core.breaker_line"),
                Text.translate("block.gtceu.supreme_plasma_turbine.p1.3")
            ],
            [
                Text.translate("block.gtceu.supreme_plasma_turbine.p2.1"),
                Text.translate("block.start_core.breaker_line"),
                Text.translate("block.gtceu.supreme_plasma_turbine.p2.2"),
                Text.translate("block.gtceu.supreme_plasma_turbine.p2.3")
            ]
        )
        .bottomTooltips(
            Text.translate("block.start_core.breaker_line"),
            Text.translate("block.gtceu.supreme_plasma_turbine.bottom")
        )
        .workableCasingModel('kubejs:block/casings/naquadah/casing',
            'gtceu:block/multiblock/generator/large_plasma_turbine');

    event.create('nyinsane_plasma_turbine', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('plasma_generator')
        .generator(true)
        .machine((holder) => new $BoostedPlasmaTurbine(holder, GTValues.UIV))
        .regressWhenWaiting(false)
        .recipeModifiers([$StarTRecipeModifiers.BOOSTED_PLASMA_TURBINE])
        .appearanceBlock(() => Block.getBlock('kubejs:nyanium_machine_casing'))
        .pattern((definition) => FactoryBlockPattern.start()
            .aisle('         ', 'FCC      ', 'FFCHH  CC', 'FCC      ', '         ')
            .aisle('FCC      ', '  FECCXX ', '  FECEEF ', '  FECCXX ', 'FCC      ')
            .aisle('FFCHH  CC', '  FECEEF ', '  RGGGGL ', '  FECEEF ', 'FFCHH  CC')
            .aisle('FCC      ', '  FECCXX ', '  FECEEF ', '  FECCXX ', 'FCC      ')
            .aisle('         ', 'FCC      ', 'FFCH@  CC', 'FCC      ', '         ')
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .where('H', Predicates.blocks('kubejs:nyanium_machine_casing')
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setPreviewCount(1)))
            .where('F', Predicates.blocks('gtceu:draconyallium_frame'))
            .where('C', Predicates.blocks('kubejs:nyanium_machine_casing'))
            .where('E', Predicates.blocks('kubejs:nyanium_engine_intake_casing'))
            .where('X', Predicates.blocks('kubejs:nyanium_heat_escape_casing'))
            .where('G', Predicates.blocks('kubejs:nyanium_gearbox'))
            .where('L', Predicates.abilities(PartAbility.OUTPUT_LASER))
            .where('R', Predicates.abilities(PartAbility.ROTOR_HOLDER))
            .where(' ', Predicates.any())
            .build())
        .paginatedTooltips(
            [
                Text.translate("block.gtceu.supreme_plasma_turbine.p1.1"),
                Text.translate("block.gtceu.supreme_plasma_turbine.p1.2"),
                Text.translate("block.start_core.breaker_line"),
                Text.translate("block.gtceu.nyinsane_plasma_turbine.p1.3")
            ],
            [
                Text.translate("block.gtceu.nyinsane_plasma_turbine.p2.1"),
                Text.translate("block.start_core.breaker_line"),
                Text.translate("block.gtceu.nyinsane_plasma_turbine.p2.2"),
                Text.translate("block.gtceu.nyinsane_plasma_turbine.p2.3")
            ]
        )
        .bottomTooltips(
            Text.translate("block.start_core.breaker_line"),
            Text.translate("block.gtceu.nyinsane_plasma_turbine.bottom")
        )
        .workableCasingModel('kubejs:block/casings/nyanium/casing',
            'gtceu:block/multiblock/generator/large_plasma_turbine');

});