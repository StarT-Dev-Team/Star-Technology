GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('auroric_vacuum_isolation_reactor', 'multiblock')
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
                Text.translate('block.start_core.breaker_line'),
                Text.translate('block.gtceu.dual_chambered_vacuum_complex.p1.1'),
            ],
        ])
        .recipeType('vacuum_chemical_reaction_chamber')
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT,
            $StarTRecipeModifiers.VACUUM_CHEMICAL_REACTION_CHAMBER,
            GTRecipeModifiers.BATCH_MODE,
        ])
        .appearanceBlock(() => Block.getBlock('kubejs:absolute_annihilation_casing'))
        .pattern((definition) =>
            newFactoryBlockPattern([
                'abbba abbba abbba abbba b bbbbb b|b   b b   b b   b b   b b bbbbb b|b   b b   b b   b b   b bbbbbbbbb|b   b b   b b   b b   b a b   b a|abbba abbba abbba abbba a b   b a|                        a b   b a|                        bbbbbbbbb|                          b   b  |                          b   b  |                          b   b  |                          bbbbb  |                          b   b  |                          b   b  |                          b   b  |                         bbbbbbb ',
                'abbba abbba abbba abbba bdbbbbbdb|b   b b   b b   b b   b bddbbbddb|b   b b   b b   b b   b bbdddddbb|b   b b   b b   b b   b  ddddddd |abbba abbba abbba abbba  ddddddd |a   a a   a a   a a   a  ddddddd |a   a a   a a   a a   a bdddddddb|a   a a   a a   a a   a  bdeeedb |a   a a   a a   a a   a  bdeeedb |a   a a   a a   a a   a  bdeeedb |bbbbb bbbbb bbbbb bbbbb  bdddddb |                         bdddddb |                         bbdfdbb | bbb   bbb   bbb   bbb   bbdddbb |                         bgggggb ',
                'bbbbb bbbbb bbbbb bbbbb bbbbbbbbb|bdddbdbdddbdbdddbdbdddbdddddddddb|bdhdbdbdhdbdbdhdbdbdhdbdddd   ddb|bdddbdbdddbdbdddbdbdddbdddd   ddb|bbbbb bbbbb bbbbb bbbbb  dd   ddb| ddd   ddd   ddd   ddd   dd   ddb| ded   ded   ded   ded  bdd   ddb| ded   ded   ded   ded   bd   db | ded   ded   ded   ded   bd   db | ddd   ddd   ddd   ddd   bd   db |bbbbb bbbbb bbbbb bbbbb  bdbbbdb | did   did   did   did    d   d  | did   did   did   did    d   d  |bgggb bgggb bgggb bgggb   d   d  |                         bgggggb ',
                'bbbbb bbbbb bbbbb bbbbb bbbbbbbbb|bbbbbdbbbbbdbbbbbdbbbbbdddddjdddb|bbbbb bbbbb bbbbb bbbbb  dd j ddb|bbbbbdbbbbbdbbbbbdbbbbbdddd j dd |bbbbb bbbbb bbbbb bbbbb  dd j dd | ddd   ddd   ddd   ddd   dd j dd | e e   e e   e e   e e  bdd j ddb| e e   e e   e e   e e   bd j db | e e   e e   e e   e e   bd j db | djd   djd   djd   djd   bd j db |bbjbb bbjbb bbjbb bbjbb  bdbjbdb | djd   djd   djd   djd    d   d  | djjjjjjjjjjjjjjjjjjjjjjjjjjj f  |bgkgb bgkgb bgkgb bgkgb   d j d  |                         bggkggb ',
                'bbbbb bbbbb bbbbb bbbbb bbbbbbbbb|bdddbdbdddbdbdddbdbdddbdddddddddb|bdhdbdbdhdbdbdhdbdbdhdbdddd   ddb|bdddbdbdddbdbdddbdbdddbdddd   ddb|bbbbb bbbbb bbbbb bbbbb  dd   ddb| ddd   ddd   ddd   ddd   dd   ddb| ded   ded   ded   ded  bdd   ddb| ded   ded   ded   ded   bd   db | ded   ded   ded   ded   bd   db | ddd   ddd   ddd   ddd   bd   db |bbbbb bbbbb bbbbb bbbbb  bdbbbdb | did   did   did   did    d   d  | did   did   did   did    d   d  |bgggb bgggb bgggb bgggb   d   d  |                         bgggggb ',
                'abbba abbba abbba abbba bdbbbbbdb|b   b b   b b   b b   b bddbbbddb|b   b b   b b   b b   b bbdddddbb|b   b b   b b   b b   b  ddddddd |abbba abbba abbba abbba  dddlddd |a   a a   a a   a a   a  ddddddd |a   a a   a a   a a   a bdddddddb|a   a a   a a   a a   a  bdeeedb |a   a a   a a   a a   a  bdeeedb |a   a a   a a   a a   a  bdeeedb |bbbbb bbbbb bbbbb bbbbb  bdddddb |                         bdddddb |                         bbdfdbb | bbb   bbb   bbb   bbb   bbdddbb |                         bgggggb ',
                'abbba abbba abbba abbba b bbbbb b|b   b b   b b   b b   b b bbbbb b|b   b b   b b   b b   b bbbbbbbbb|b   b b   b b   b b   b a b   b a|abbba abbba abbba abbba a b   b a|                        a b   b a|                        bbbbbbbbb|                          b   b  |                          b   b  |                          b   b  |                          bbbbb  |                          b   b  |                          b   b  |                          b   b  |                         bbbbbbb ',
            ])
                .whereDict({
                    a: P.gtBlock('draco_abyssal_frame'),
                    b: P.kjsBlock('aberration_casing'),
                    c: P.any(),
                    d: P.anyOf([
                        P.kjsBlock('absolute_annihilation_casing'),
                        P.ability(PA.fluidIn, { max: 8, prev: 1 }),
                        P.ability(PA.fluidOut, { max: 2, prev: 1 }),
                        P.ability(PA.itemIn, { max: 2, prev: 1 }),
                        P.ability(PA.itemOut, { max: 2, prev: 1 }),
                        P.ability(PA.euIn, { max: 2, prev: 1 }),
                        P.ability(PA.maintenance, { exact: 1 }),
                        P.ability(PA.parallelHatch, { max: 1 }),
                        P.ability(PA.variadicsInterface, { max: 4, prev: 1 }),
                    ]),
                    e: P.kjsBlock('draco_resilient_fusion_glass'),
                    f: P.kjsBlock('nyanium_heat_escape_casing'),
                    g: P.kjsBlock('nyanium_machine_casing'),
                    h: P.vacuumPumps(),
                    i: P.kjsBlock('rhenotax_coil'),
                    j: P.kjsBlock('nyanium_pipe_casing'),
                    k: P.kjsBlock('nyanium_engine_intake_casing'),
                    l: P.controller(definition),
                })
                .build()
        )
        .workableCasingModel(
            'kubejs:block/casings/threading/absolute_annihilation_casing',
            'gtceu:block/machines/chemical_reactor'
        );
});
