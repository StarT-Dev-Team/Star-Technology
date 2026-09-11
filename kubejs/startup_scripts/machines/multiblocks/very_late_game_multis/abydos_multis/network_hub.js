GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    const HUB_SLICES_COUNT = 8;

    event
        .create('network_hub', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .machine((holder) => new $NetworkSwitchMachine(holder))
        .appearanceBlock(() => Block.getBlock('start_core:runic_computer_casing'))
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
            )([
                ' CRC |C   C|R   R|C   C| CRC ',
                'CFRFC|FRRRF|RR@RR|FRRRF|CFRFC',
                'F   F| GXG | XPX | GXG |F   F',
                blockPatternRepeatable(1, HUB_SLICES_COUNT),
                'CFRFC|FRRRF|RRCRR|FRRRF|CFRFC',
                ' CRC |C   C|R   R|C   C| CRC ',
            ])
                .whereDict({
                    '@': P.controller(definition),
                    C: P.gtBlock('computer_casing'),
                    P: P.coreBlock('runic_high_power_casing'),
                    F: P.frame(GTMaterials.SterlingSilver),
                    G: P.gtBlock('fusion_glass'),
                    R: P.anyOf([
                        P.coreBlock('runic_computer_casing'),
                        P.ability(PA.euIn, { min: 1, max: 2, view: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                    ]),
                    X: P.anyOf([
                        P.ability(PA.compIn, { view: 1 }),
                        P.ability(PA.compOut, { view: 1 }),
                        P.coreBlock('runic_computer_casing'),
                    ]),
                })
                .build()
        )
        .sidedWorkableCasingModel(
            'start_core:block/casings/hpca/runic_computer_casing',
            'gtceu:block/multiblock/data_bank'
        );
});
