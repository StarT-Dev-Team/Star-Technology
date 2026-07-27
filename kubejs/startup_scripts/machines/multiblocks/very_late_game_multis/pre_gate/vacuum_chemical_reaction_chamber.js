// made by Scarlet and n1
GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('vacuum_chemical_reaction_chamber', 'multiblock')
        .machine((holder) => new $VacuumChemicalReactorMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .tooltips([Text.translate('block.start_core.breaker_line')])
        .paginatedTooltips([
            [
                Text.translate('block.gtceu.vacuum_chemical_reaction_chamber.p1.0'),
                Text.translate('block.gtceu.vacuum_chemical_reaction_chamber.p1.1'),
                Text.translate('block.gtceu.vacuum_chemical_reaction_chamber.p1.2'),
                Text.translate('block.gtceu.vacuum_chemical_reaction_chamber.p1.3'),
                Text.translate('block.gtceu.vacuum_chemical_reaction_chamber.p1.4'),
                Text.translate('block.start_core.breaker_line'),
                Text.translate('block.gtceu.vacuum_chemical_reaction_chamber.p1.5'),
            ],
        ])
        .recipeType('vacuum_chemical_reaction_chamber')
        .recipeModifiers([
            GTRecipeModifiers.OC_NON_PERFECT,
            $StarTRecipeModifiers.VACUUM_CHEMICAL_REACTION_CHAMBER,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('gtceu:palladium_substation'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                'AAABB     |C   C     |C   C     |C   C     |AAABB     ',
                'ABBBB     | DDD      | DDD      | DDD      |ABBBB     ',
                'ABBBBBBBCC| DDD   BBC| E D    BB| DDD   BBC|ABBBBBBBCC',
                'ABBBBBBBBC| DDDDFDD  | E DDFDD  | DDDDFDD  |ABBBBBBBBC',
                'ABBBBBBBBB| DDDDDDD  | EGGGGGH  | DGDDDGD  |ABIIIIIBBB',
                'ABBBBBBBBC| DDDDFDD  | E DDFDD  | DDDDFDD  |ABBBBBBBBC',
                'ABBBBBBBCC| DDD   BBC| E D    BB| DDD   BBC|ABBBBBBBCC',
                'ABBBB     | DDD      | DDD      | DDD      |ABBBB     ',
                'AAABB     |CBBBC     |CB@BC     |CBBBC     |AAABB     ',
            ])
                .whereDict({
                    A: P.kjsBlock('pallaridium_firebox_casing'),
                    B: P.anyOf([
                        P.gtBlock('palladium_substation'),
                        P.ability(PA.fluidIn, { max: 8, view: 0 }),
                        P.ability(PA.fluidOut, { max: 2, view: 1 }),
                        P.ability(PA.itemIn, { max: 2, view: 0 }),
                        P.ability(PA.itemOut, { max: 2, view: 1 }),
                        P.ability(PA.euIn, { max: 2, view: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                        P.ability(PA.variadicsInterface, { max: 4, view: 1 }),
                    ]),
                    ' ': P.any(),
                    C: P.gtBlock('tungsten_carbide_frame'),
                    D: P.kjsBlock('polycarbonate_casing'),
                    E: P.gtBlock('fusion_glass'),
                    F: P.gtBlock('molybdenum_disilicide_coil_block'),
                    G: P.kjsBlock('pallaridium_pipe_casing'),
                    H: P.vacuumPumps(),
                    I: P.kjsBlock('pallaridium_engine_intake_casing'),
                    '@': P.controller(definition),
                })
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_palladium_substation',
            'gtceu:block/machines/chemical_reactor'
        );
});
