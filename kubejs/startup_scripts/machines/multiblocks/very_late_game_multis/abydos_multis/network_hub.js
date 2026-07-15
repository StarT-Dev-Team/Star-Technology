GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('network_hub', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        // @ts-ignore
        .machine((holder) => new $NetworkSwitchMachine(holder))
        .appearanceBlock(GTBlocks.COMPUTER_CASING)
        .recipeType('dummy')
        .tooltips([
            Component.translatable('gtceu.machine.network_switch.tooltip.0'),
            Component.translatable('gtceu.machine.network_switch.tooltip.1'),
            Component.translatable('gtceu.machine.network_switch.tooltip.2'),
            Component.translatable(
                'gtceu.machine.network_switch.tooltip.3',
                $FormattingUtil.formatNumbers(GTValues.VA[GTValues.IV])
            ),
        ])
        .pattern((definition) =>
            newFactoryBlockPatternWithDirections(
                $RelativeDirection.LEFT,
                $RelativeDirection.UP,
                $RelativeDirection.FRONT
            )(['XXX|XXX|XXX', 'XXX|XAX|XXX', blockPatternRepeatable(1, 8), 'XXX|XSX|XXX'])
                .whereDict({
                    S: P.controller(definition),
                    A: P.gtBlock('advanced_computer_casing'),
                    V: P.gtBlock('computer_heat_vent'),
                    X: P.ability(PA.fluidIn, { min: 1, max: 2 }),
                    C: P.anyOf([
                        P.gtBlock('computer_casing', { min: 5 }),
                        // @ts-ignore
                        Predicates.autoAbilities(true, false, false),
                    ]),
                })
                .build()
        )
        .workableCasingModel('gtceu:block/casings/hpca/high_power_casing', 'gtceu:block/multiblock/data_bank');
});
