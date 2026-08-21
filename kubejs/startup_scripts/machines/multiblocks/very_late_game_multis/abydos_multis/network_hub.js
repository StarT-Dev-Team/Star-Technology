GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('network_hub', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .machine((holder) => new $NetworkSwitchMachine(holder))
        .appearanceBlock(GTBlocks.COMPUTER_CASING)
        .recipeType('dummy')
        .tooltips([
            Component.translatable('gtceu.machine.network_switch.tooltip.0'),
            Component.translatable('gtceu.machine.network_switch.tooltip.1'),
            Component.translatable('gtceu.machine.network_hub.extension_tooltip'),
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
                $RelativeDirection.BACK
            )(['CCC|CSC|CCC', 'XXX|XAX|XXX', blockPatternRepeatable(1, 8), 'CCC|CCC|CCC'])
                .whereDict({
                    S: P.controller(definition),
                    A: P.gtBlock('advanced_computer_casing'),
                    C: P.anyOf([
                        P.gtBlock('computer_casing'),
                        P.ability(PA.euIn, { min: 1, max: 2, view: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                    ]),
                    X: P.anyOf([
                        P.ability(PA.compIn, { minLayer: 1, view: 1 }),
                        P.ability(PA.compOut, { view: 1 }),
                        P.gtBlock('computer_casing', { minLayer: 4 }),
                    ]),
                })
                .build()
        )
        .workableCasingModel('gtceu:block/casings/hpca/high_power_casing', 'gtceu:block/multiblock/data_bank');
});
