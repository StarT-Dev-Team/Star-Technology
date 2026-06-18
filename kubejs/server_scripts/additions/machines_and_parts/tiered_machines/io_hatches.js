ServerEvents.recipes((event) => {
    const id = global.id;

    const components = global.componentMaterials;

    //UV/UHV Regular IO, No UEV or higher as they all scale the same as UHV as of current

    function tierIOHatches(tierKey) {
        const tierData = components[tierKey];

        if (!tierData) return;

        const {
            tiers: { tier },
            materials: { tierMaterial, plastic, pipeMaterial, fluidStorage, itemStorage },
            scaling: { scaler },
        } = tierData;

        [
            { typeIO: 'input', circ: '1' },
            { typeIO: 'output', circ: '2' },
        ].forEach((ioData) => {
            event.remove({ output: `gtceu:${tier}_${ioData.typeIO}_hatch` });
            event.remove({ output: `gtceu:${tier}_dual_${ioData.typeIO}_hatch` });
            event.remove({ output: `gtceu:${tier}_${ioData.typeIO}_bus` });

            event.recipes.gtceu
                .assembler(id(`${tier}_${ioData.typeIO}_bus`))
                .itemInputs(`gtceu:${tier}_machine_hull`, itemStorage)
                .inputFluids(`gtceu:${plastic} ${216 + scaler * 36}`)
                .itemOutputs(`gtceu:${tier}_${ioData.typeIO}_bus`)
                .duration(300)
                .EUt(GTValues.VA[GTValues.IV] * Math.pow(4, scaler))
                .circuit(ioData.circ);

            event.recipes.gtceu
                .assembler(id(`${tier}_${ioData.typeIO}_hatch`))
                .itemInputs(`gtceu:${tier}_machine_hull`, fluidStorage)
                .inputFluids(`gtceu:${plastic} ${216 + scaler * 36}`)
                .itemOutputs(`gtceu:${tier}_${ioData.typeIO}_hatch`)
                .duration(300)
                .EUt(GTValues.VA[GTValues.IV] * Math.pow(4, scaler))
                .circuit(ioData.circ);

            event.recipes.gtceu
                .assembler(id(`${tier}_dual_${ioData.typeIO}_hatch`))
                .itemInputs(
                    `gtceu:${tier}_${ioData.typeIO}_bus`,
                    `gtceu:${tier}_${ioData.typeIO}_hatch`,
                    `gtceu:${pipeMaterial}_nonuple_fluid_pipe`,
                    `3x gtceu:${tierMaterial}_frame`
                )
                .inputFluids(`gtceu:${plastic} ${864 + scaler * 144}`)
                .itemOutputs(`gtceu:${tier}_dual_${ioData.typeIO}_hatch`)
                .duration(300)
                .EUt(GTValues.VA[GTValues.IV] * Math.pow(4, scaler))
                .circuit(ioData.circ);
        });

        event
            .shaped(Item.of(`gtceu:${tier}_dual_input_hatch`), ['S', 'H'], {
                S: '#forge:tools/screwdrivers',
                H: `gtceu:${tier}_dual_output_hatch`,
            })
            .id(`start:shaped/${tier}_dual_input_hatch_flip`);

        event
            .shaped(Item.of(`gtceu:${tier}_dual_output_hatch`), ['S', 'H'], {
                S: '#forge:tools/screwdrivers',
                H: `gtceu:${tier}_dual_input_hatch`,
            })
            .id(`start:shaped/${tier}_dual_output_hatch_flip`);

        event
            .shaped(Item.of(`gtceu:${tier}_input_hatch`), ['S', 'H'], {
                S: '#forge:tools/screwdrivers',
                H: `gtceu:${tier}_output_hatch`,
            })
            .id(`start:shaped/${tier}_input_hatch`);

        event
            .shaped(Item.of(`gtceu:${tier}_output_hatch`), ['S', 'H'], {
                S: '#forge:tools/screwdrivers',
                H: `gtceu:${tier}_input_hatch`,
            })
            .id(`start:shaped/${tier}_output_hatch`);

        event
            .shaped(Item.of(`gtceu:${tier}_input_bus`), ['S', 'H'], {
                S: '#forge:tools/screwdrivers',
                H: `gtceu:${tier}_output_bus`,
            })
            .id(`start:shaped/${tier}_input_bus`);

        event
            .shaped(Item.of(`gtceu:${tier}_output_bus`), ['S', 'H'], {
                S: '#forge:tools/screwdrivers',
                H: `gtceu:${tier}_input_bus`,
            })
            .id(`start:shaped/${tier}_output_bus`);
    }

    tierIOHatches('luv');
    tierIOHatches('zpm');
    tierIOHatches('uv');
    tierIOHatches('uhv');

    [
        { type: '4x', pipe: 'quadruple' },
        { type: '9x', pipe: 'nonuple' },
    ].forEach((hatchScaleData) => {
        event
            .shaped(Item.of(`gtceu:uhv_input_hatch_${hatchScaleData.type}`), ['P', 'H'], {
                H: `gtceu:uhv_input_hatch`,
                P: `gtceu:zapolgium_${hatchScaleData.pipe}_fluid_pipe`,
            })
            .id(`start:shaped/uhv_input_hatch_${hatchScaleData.type}`);

        event
            .shaped(Item.of(`gtceu:uhv_input_hatch_${hatchScaleData.type}`), ['S', 'H'], {
                S: `#forge:tools/screwdrivers`,
                H: `gtceu:uhv_output_hatch_${hatchScaleData.type}`,
            })
            .id(`start:shaped/uhv_input_hatch_${hatchScaleData.type}_flip`);

        event
            .shaped(Item.of(`gtceu:uhv_output_hatch_${hatchScaleData.type}`), ['H', 'P'], {
                H: `gtceu:uhv_output_hatch`,
                P: `gtceu:zapolgium_${hatchScaleData.pipe}_fluid_pipe`,
            })
            .id(`start:shaped/uhv_output_hatch_${hatchScaleData.type}`);

        event
            .shaped(Item.of(`gtceu:uhv_output_hatch_${hatchScaleData.type}`), ['S', 'H'], {
                S: `#forge:tools/screwdrivers`,
                H: `gtceu:uhv_input_hatch_${hatchScaleData.type}`,
            })
            .id(`start:shaped/uhv_output_hatch_${hatchScaleData.type}_flip`);
    });
});
