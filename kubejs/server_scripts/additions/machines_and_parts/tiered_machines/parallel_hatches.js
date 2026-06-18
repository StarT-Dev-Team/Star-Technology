ServerEvents.recipes((event) => {
    const id = global.id;

    const components = global.componentMaterials;

    function postUVMachines(tierKey, chip) {
        const tierData = components[tierKey];

        if (!tierData) return;

        const {
            tiers: { tier, tier0 },
            materials: { tierFluid, cable },
        } = tierData;

        // Parallel Hatches
        event
            .shaped(Item.of(`start_core:${tier}_parallel_hatch`), ['SCE', 'CHC', 'BCB'], {
                S: `gtceu:${tier}_sensor`,
                E: `gtceu:${tier}_emitter`,
                C: `#gtceu:circuits/${tier0}`,
                H: `gtceu:${tier}_machine_hull`,
                B: `gtceu:${cable}_double_cable`,
            })
            .id(`start:shaped/${tier}_parallel_hatch`);

        event.recipes.gtceu
            .assembler(id(`${tier}_absolute_parallel_hatch`))
            .itemInputs(
                `start_core:${tier}_parallel_hatch`,
                `4x gtceu:${tier}_sensor`,
                `4x gtceu:${tier}_emitter`,
                `2x #gtceu:circuits/${tier0}`,
                `4x ${chip}`
            )
            .inputFluids(`gtceu:${tierFluid} 576`)
            .itemOutputs(`start_core:${tier}_absolute_parallel_hatch`)
            .duration(320)
            .EUt(GTValues.VA[GTValues[tier.toUpperCase()]]);
    }

    postUVMachines('uhv', 'kubejs:uepic_chip');
    postUVMachines('uev', 'kubejs:uepic_chip');
    postUVMachines('uiv', 'kubejs:uipic_chip');
});
