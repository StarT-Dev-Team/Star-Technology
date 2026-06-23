ServerEvents.recipes((event) => {
    const id = global.id;

    event.recipes.gtceu
        .assembler(id('modular_auto_scaling_node'))
        .itemInputs('gtceu:uiv_energy_input_hatch', '2x #gtceu:circuits/uxv')
        .itemOutputs('start_core:modular_auto_scaling_node')
        .circuit(3)
        .duration(5)
        .EUt(30);

    event.recipes.gtceu
        .assembler(id('modular_auto_scaling_terminal'))
        .itemInputs('gtceu:uiv_energy_output_hatch', '2x #gtceu:circuits/uxv')
        .itemOutputs('start_core:modular_auto_scaling_terminal')
        .circuit(3)
        .duration(5)
        .EUt(30);

    const components = global.componentMaterials;

    function modularHatch(tierKey) {
        const tierData = components[tierKey];

        if (!tierData) return;

        const {
            tiers: { tier },
            materials: { cable },
        } = tierData;

        ['2a', '4a', '16a', '64a'].forEach((amperage) => {
            ['node', 'terminal'].forEach((outputHatch) => {
                let ioType = outputHatch === 'node' ? 'input' : 'output';
                let ioPart = outputHatch === 'node' ? 'sensor' : 'emitter';

                let inputHatch =
                    amperage === '2a'
                        ? `gtceu:${tier}_energy_${ioType}_hatch`
                        : amperage === '64a'
                          ? `gtceu:${tier}_substation_${ioType}_hatch_64a`
                          : `gtceu:${tier}_energy_${ioType}_hatch_${amperage}`;

                event.recipes.gtceu
                    .assembler(id(`${tier}_${amperage}_modular_conduit_${outputHatch}`))
                    .itemInputs(inputHatch, `gtceu:${tier}_${ioPart}`, `2x gtceu:${cable}_single_cable`)
                    .itemOutputs(`start_core:${tier}_${amperage}_modular_conduit_${outputHatch}`)
                    .circuit(2)
                    .duration(5)
                    .EUt(30);
            });
        });
    }
    modularHatch('ev');
    modularHatch('iv');
    modularHatch('luv');
    modularHatch('zpm');
    modularHatch('uv');
    modularHatch('uhv');
    modularHatch('uev');
    modularHatch('uiv');
});
