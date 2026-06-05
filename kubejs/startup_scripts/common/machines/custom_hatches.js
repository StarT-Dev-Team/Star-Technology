GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('fluid_input', 'custom')
        .machine((holder, tier) => new $FluidHatchPartMachine(holder, tier, 'in', 2000, 1))
        .tiers(GTValues.ULV)
        .definition((tier, builder) => {
            builder
                .modelPropertyBool($GTMachineModelProperties.IS_FORMED, false)
                .workableCasingModel(
                    'gtceu:block/casings/gcym/industrial_steam_casing',
                    'gtceu:block/multiblock/tank_valve'
                ); // cannot be done with current model system
        });

    event
        .create('stabilization_module', 'custom')
        .machine(
            (holder, tier) => new $CleaningMaintenanceHatchPartMachine(holder, CleanroomType.getByName('stabilized'))
        )
        .tiers(GTValues.UHV)
        .definition((tier, builder) => {
            builder
                .langValue('§bAbsolute Stabilization §rModule')
                .rotationState(RotationState.ALL)
                .abilities(PartAbility.MAINTENANCE)
                .modelPropertyBool($GTMachineModelProperties.IS_FORMED, false)
                .workableTieredHullModel('kubejs:block/machines/stabilization_core');
        });
});
