// In server events
GTCEuServerEvents.fluidVeins((event) => {
    const fluidVeinRemoved = [
        'heavy_oil_deposit',
        'light_oil_deposit',
        'natural_gas_deposit',
        'oil_deposit',
        'raw_oil_deposit',
        'salt_water_deposit',
        'lava_deposit',
        'nether_natural_gas_deposit',
    ]; // Remove All doesnt exist for fluids

    fluidVeinRemoved.forEach((vein) => {
        event.remove(`gtceu:${vein}`);
    });

    // === Abydos Veins ===
    event.add('start:abydos_refractory_dense_magma_deposit', (vein) => {
        vein.dimensions('sgjourney:abydos');
        vein.fluid(() => Fluid.of('gtceu:abydos_refractory_dense_magma').fluid);
        vein.weight(28);
        vein.minimumYield(400);
        vein.maximumYield(540);
        vein.depletionAmount(2);
        vein.depletionChance(1);
        vein.depletedYield(380);
    });

    event.add('start:abydos_reactive_dense_magma_deposit', (vein) => {
        vein.dimensions('sgjourney:abydos');
        vein.fluid(() => Fluid.of('gtceu:abydos_reactive_dense_magma').fluid);
        vein.weight(25);
        vein.minimumYield(400);
        vein.maximumYield(540);
        vein.depletionAmount(2);
        vein.depletionChance(1);
        vein.depletedYield(380);
    });

    event.add('start:gritty_akreyrium', (vein) => {
        vein.dimensions('sgjourney:abydos');
        vein.fluid(() => Fluid.of('gtceu:gritty_akreyrium').fluid);
        vein.weight(19);
        vein.minimumYield(360);
        vein.maximumYield(640);
        vein.depletionAmount(2);
        vein.depletionChance(1);
        vein.depletedYield(320);
    });

    event.add('start:abydos_naquadite_dense_magma', (vein) => {
        vein.dimensions('sgjourney:abydos');
        vein.fluid(() => Fluid.of('gtceu:abydos_naquadite_dense_magma').fluid);
        vein.weight(28);
        vein.minimumYield(400);
        vein.maximumYield(540);
        vein.depletionAmount(2);
        vein.depletionChance(1);
        vein.depletedYield(380);
    });

    // === Nether Veins ===
    event.add('start:highly_unstable_nether_magma_deposit', (vein) => {
        vein.dimensions('minecraft:the_nether');
        vein.fluid(() => Fluid.of('gtceu:highly_unstable_nether_magma').fluid);
        vein.weight(15);
        vein.minimumYield(960);
        vein.maximumYield(1280);
        vein.depletionAmount(2);
        vein.depletionChance(1);
        vein.depletedYield(720);
    });

    event.add('start:debris_rich_nether_magma_deposit', (vein) => {
        vein.dimensions('minecraft:the_nether');
        vein.fluid(() => Fluid.of('gtceu:debris_rich_nether_magma').fluid);
        vein.weight(25);
        vein.minimumYield(240);
        vein.maximumYield(720);
        vein.depletionAmount(2);
        vein.depletionChance(1);
        vein.depletedYield(180);
    });

    event.add('start:lava_dense', (vein) => {
        vein.dimensions('minecraft:the_nether');
        vein.fluid(() => Fluid.of('minecraft:lava').fluid);
        vein.weight(50);
        vein.minimumYield(16000);
        vein.maximumYield(24000);
        vein.depletionAmount(2);
        vein.depletionChance(1);
        vein.depletedYield(12000);
    });

    event.add('start:crude_infernal_concentrate', (vein) => {
        vein.dimensions('minecraft:the_nether');
        vein.fluid(() => Fluid.of('gtceu:crude_infernal_concentrate').fluid);
        vein.weight(10);
        vein.minimumYield(360);
        vein.maximumYield(640);
        vein.depletionAmount(2);
        vein.depletionChance(1);
        vein.depletedYield(320);
    });
});
