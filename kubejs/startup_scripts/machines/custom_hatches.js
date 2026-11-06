GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    event
        .create('fluid_input', 'custom')
        .machine((holder, tier) => new $FluidHatchPartMachine(holder, tier, 'in', 2000, 1))
        .tiers(GTValues.ULV)
        .definition((tier, builder) => {
            builder.colorOverlayCasingModel(
                'gtceu:block/casings/gcym/industrial_steam_casing',
                'gtceu:block/multiblock/tank_valve/overlay_front',
                'gtceu:block/void',
                null
            );
        });

    event
        .create('stabilization_module', 'custom')
        .machine(
            // eslint-disable-next-line no-unused-vars
            (holder, tier) => new $CleaningMaintenanceHatchPartMachine(holder, CleanroomType.getByName('stabilized'))
        )
        .tiers(GTValues.UHV)
        .definition((tier, builder) => {
            builder
                .langValue('§bAbsolute Stabilization §rModule')
                .rotationState(RotationState.ALL)
                .abilities(PA.maintenance)
                .modelPropertyBool($GTMachineModelProperties.IS_FORMED, false)
                .workableTieredHullModel('kubejs:block/machines/stabilization_core');
        });
});
