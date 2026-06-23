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
            FactoryBlockPattern.start()
                .aisle('AAABB     ', 'C   C     ', 'C   C     ', 'C   C     ', 'AAABB     ')
                .aisle('ABBBB     ', ' DDD      ', ' DDD      ', ' DDD      ', 'ABBBB     ')
                .aisle('ABBBBBBBCC', ' DDD   BBC', ' E D    BB', ' DDD   BBC', 'ABBBBBBBCC')
                .aisle('ABBBBBBBBC', ' DDDDFDD  ', ' E DDFDD  ', ' DDDDFDD  ', 'ABBBBBBBBC')
                .aisle('ABBBBBBBBB', ' DDDDDDD  ', ' EGGGGGH  ', ' DGDDDGD  ', 'ABIIIIIBBB')
                .aisle('ABBBBBBBBC', ' DDDDFDD  ', ' E DDFDD  ', ' DDDDFDD  ', 'ABBBBBBBBC')
                .aisle('ABBBBBBBCC', ' DDD   BBC', ' E D    BB', ' DDD   BBC', 'ABBBBBBBCC')
                .aisle('ABBBB     ', ' DDD      ', ' DDD      ', ' DDD      ', 'ABBBB     ')
                .aisle('AAABB     ', 'CBBBC     ', 'CB@BC     ', 'CBBBC     ', 'AAABB     ')
                .where('A', P.kjsBlock('pallaridium_firebox_casing'))
                .where(
                    'B',
                    P.gtBlock('palladium_substation')
                        .or(P.ability(PA.fluidIn).setMaxGlobalLimited(8).setPreviewCount(0))
                        .or(P.ability(PA.fluidOut).setMaxGlobalLimited(2).setPreviewCount(0))
                        .or(P.ability(PA.itemIn).setMaxGlobalLimited(2).setPreviewCount(0))
                        .or(P.ability(PA.itemOut).setMaxGlobalLimited(2).setPreviewCount(0))
                        .or(P.ability(PA.euIn).setMaxGlobalLimited(2).setMinGlobalLimited(1))
                        .or(P.ability(PA.maintenance, { exact: 1 }))
                        .or(P.ability($StarTPartAbility.REDSTONE_INTERFACE).setMaxGlobalLimited(4).setPreviewCount(0))
                )
                .where(' ', P.any())
                .where('C', P.gtBlock('tungsten_carbide_frame'))
                .where('D', P.kjsBlock('polycarbonate_casing'))
                .where('E', P.gtBlock('fusion_glass'))
                .where('F', P.gtBlock('molybdenum_disilicide_coil_block'))
                .where('G', P.kjsBlock('pallaridium_pipe_casing'))
                .where('H', $StarTVacuumPumpPredicates.vacuumPumps())
                .where('I', P.kjsBlock('pallaridium_engine_intake_casing'))
                .where('@', P.controller(definition))
                .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_palladium_substation',
            'gtceu:block/machines/chemical_reactor'
        );
});
