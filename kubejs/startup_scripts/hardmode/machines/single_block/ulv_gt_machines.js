// packmode: hard

GTCEuStartupEvents.registry('gtceu:machine', (event) => {
    const ulvMachine = (machine) => {
        event
            .create(machine, 'simple')
            .tiers(GTValues.ULV)
            .definition((tier, builder) =>
                builder.recipeType(machine).workableTieredHullModel(`gtceu:block/machines/${machine}`)
            );
    };

    ulvMachine('mixer');
    ulvMachine('centrifuge');
    ulvMachine('assembler');
});
