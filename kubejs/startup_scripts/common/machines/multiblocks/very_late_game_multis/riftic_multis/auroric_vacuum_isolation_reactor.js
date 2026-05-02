GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('auroric_vacuum_isolation_reactor', 'multiblock')
        .machine((holder) => new $VacuumChemicalReactorMachine(holder))
        .rotationState(RotationState.ALL)
        .tooltips([
            Text.translate("block.start_core.breaker_line")
        ])
        .paginatedTooltips([[
            Text.translate("block.gtceu.vacuum_chemical_reaction_chamber.p1.0"),
            Text.translate("block.gtceu.vacuum_chemical_reaction_chamber.p1.1"),
            Text.translate("block.gtceu.vacuum_chemical_reaction_chamber.p1.2"),
            Text.translate("block.gtceu.vacuum_chemical_reaction_chamber.p1.3"),
            Text.translate("block.gtceu.vacuum_chemical_reaction_chamber.p1.4"),
            Text.translate("block.start_core.breaker_line"),
            Text.translate("block.gtceu.vacuum_chemical_reaction_chamber.p1.5"),
            Text.translate("block.start_core.breaker_line"),
            Text.translate("block.gtceu.dual_chambered_vacuum_complex.p1.1")
        ]])
        .recipeType('vacuum_chemical_reaction_chamber')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT, $StarTRecipeModifiers.VACUUM_CHEMICAL_REACTION_CHAMBER, GTRecipeModifiers.BATCH_MODE])
        .appearanceBlock(() => Block.getBlock('kubejs:absolute_annihilation_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('abbba abbba abbba abbba b bbbbb b', 'b   b b   b b   b b   b b bbbbb b', 'b   b b   b b   b b   b bbbbbbbbb', 'b   b b   b b   b b   b a b   b a', 'abbba abbba abbba abbba a b   b a', '                        a b   b a', '                        bbbbbbbbb', '                          b   b  ', '                          b   b  ', '                          b   b  ', '                          bbbbb  ', '                          b   b  ', '                          b   b  ', '                          b   b  ', '                         bbbbbbb ')
            .aisle('abbba abbba abbba abbba bdbbbbbdb', 'b   b b   b b   b b   b bddbbbddb', 'b   b b   b b   b b   b bbdddddbb', 'b   b b   b b   b b   b  ddddddd ', 'abbba abbba abbba abbba  ddddddd ', 'a   a a   a a   a a   a  ddddddd ', 'a   a a   a a   a a   a bdddddddb', 'a   a a   a a   a a   a  bdeeedb ', 'a   a a   a a   a a   a  bdeeedb ', 'a   a a   a a   a a   a  bdeeedb ', 'bbbbb bbbbb bbbbb bbbbb  bdddddb ', '                         bdddddb ', '                         bbdfdbb ', ' bbb   bbb   bbb   bbb   bbdddbb ', '                         bgggggb ')
            .aisle('bbbbb bbbbb bbbbb bbbbb bbbbbbbbb', 'bdddbdbdddbdbdddbdbdddbdddddddddb', 'bdhdbdbdhdbdbdhdbdbdhdbdddd   ddb', 'bdddbdbdddbdbdddbdbdddbdddd   ddb', 'bbbbb bbbbb bbbbb bbbbb  dd   ddb', ' ddd   ddd   ddd   ddd   dd   ddb', ' ded   ded   ded   ded  bdd   ddb', ' ded   ded   ded   ded   bd   db ', ' ded   ded   ded   ded   bd   db ', ' ddd   ddd   ddd   ddd   bd   db ', 'bbbbb bbbbb bbbbb bbbbb  bdbbbdb ', ' did   did   did   did    d   d  ', ' did   did   did   did    d   d  ', 'bgggb bgggb bgggb bgggb   d   d  ', '                         bgggggb ')
            .aisle('bbbbb bbbbb bbbbb bbbbb bbbbbbbbb', 'bbbbbdbbbbbdbbbbbdbbbbbdddddjdddb', 'bbbbb bbbbb bbbbb bbbbb  dd j ddb', 'bbbbbdbbbbbdbbbbbdbbbbbdddd j dd ', 'bbbbb bbbbb bbbbb bbbbb  dd j dd ', ' ddd   ddd   ddd   ddd   dd j dd ', ' e e   e e   e e   e e  bdd j ddb', ' e e   e e   e e   e e   bd j db ', ' e e   e e   e e   e e   bd j db ', ' djd   djd   djd   djd   bd j db ', 'bbjbb bbjbb bbjbb bbjbb  bdbjbdb ', ' djd   djd   djd   djd    d   d  ', ' djjjjjjjjjjjjjjjjjjjjjjjjjjj f  ', 'bgkgb bgkgb bgkgb bgkgb   d j d  ', '                         bggkggb ')
            .aisle('bbbbb bbbbb bbbbb bbbbb bbbbbbbbb', 'bdddbdbdddbdbdddbdbdddbdddddddddb', 'bdhdbdbdhdbdbdhdbdbdhdbdddd   ddb', 'bdddbdbdddbdbdddbdbdddbdddd   ddb', 'bbbbb bbbbb bbbbb bbbbb  dd   ddb', ' ddd   ddd   ddd   ddd   dd   ddb', ' ded   ded   ded   ded  bdd   ddb', ' ded   ded   ded   ded   bd   db ', ' ded   ded   ded   ded   bd   db ', ' ddd   ddd   ddd   ddd   bd   db ', 'bbbbb bbbbb bbbbb bbbbb  bdbbbdb ', ' did   did   did   did    d   d  ', ' did   did   did   did    d   d  ', 'bgggb bgggb bgggb bgggb   d   d  ', '                         bgggggb ')
            .aisle('abbba abbba abbba abbba bdbbbbbdb', 'b   b b   b b   b b   b bddbbbddb', 'b   b b   b b   b b   b bbdddddbb', 'b   b b   b b   b b   b  ddddddd ', 'abbba abbba abbba abbba  dddlddd ', 'a   a a   a a   a a   a  ddddddd ', 'a   a a   a a   a a   a bdddddddb', 'a   a a   a a   a a   a  bdeeedb ', 'a   a a   a a   a a   a  bdeeedb ', 'a   a a   a a   a a   a  bdeeedb ', 'bbbbb bbbbb bbbbb bbbbb  bdddddb ', '                         bdddddb ', '                         bbdfdbb ', ' bbb   bbb   bbb   bbb   bbdddbb ', '                         bgggggb ')
            .aisle('abbba abbba abbba abbba b bbbbb b', 'b   b b   b b   b b   b b bbbbb b', 'b   b b   b b   b b   b bbbbbbbbb', 'b   b b   b b   b b   b a b   b a', 'abbba abbba abbba abbba a b   b a', '                        a b   b a', '                        bbbbbbbbb', '                          b   b  ', '                          b   b  ', '                          b   b  ', '                          bbbbb  ', '                          b   b  ', '                          b   b  ', '                          b   b  ', '                         bbbbbbb ')
            .where('a', Predicates.blocks('gtceu:draco_abyssal_frame'))
            .where('b', Predicates.blocks('kubejs:aberration_casing'))
            .where('c', Predicates.any())
            .where('d', Predicates.blocks('kubejs:absolute_annihilation_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(8).setPreviewCount(0))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(0))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(0))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(0))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setMinGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                .or(Predicates.abilities($StarTPartAbility.REDSTONE_INTERFACE).setMaxGlobalLimited(4).setPreviewCount(0)))
            .where('e', Predicates.blocks('kubejs:draco_resilient_fusion_glass'))
            .where('f', Predicates.blocks('kubejs:nyanium_heat_escape_casing'))
            .where('g', Predicates.blocks('kubejs:nyanium_machine_casing'))
            .where('h', $StarTVacuumPumpPredicates.vacuumPumps())
            .where('i', Predicates.blocks('kubejs:rhenotax_coil'))
            .where('j', Predicates.blocks('kubejs:nyanium_pipe_casing'))
            .where('k', Predicates.blocks('kubejs:nyanium_engine_intake_casing'))
            .where('l', Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingModel('kubejs:block/casings/threading/absolute_annihilation_casing', 'gtceu:block/machines/chemical_reactor');

});