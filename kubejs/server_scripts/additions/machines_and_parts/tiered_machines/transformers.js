ServerEvents.recipes((event) => {
    const id = global.id;

    const components = global.componentMaterials;

    function tierTransformer(tierKey) {
        const tierData = components[tierKey];

        if (!tierData) return;

        const {
            tiers: { tier },
            materials: { cable, cable1, chip },
        } = tierData;

        [
            { amps: '1a', cableThickness: 'single', prior: '' },
            { amps: '2a', cableThickness: 'double', prior: '1a' },
            { amps: '4a', cableThickness: 'quadruple', prior: '2a' },
            { amps: '16a', cableThickness: 'hex', prior: '4a' },
        ].forEach((transformerData) => {
            event.remove({ output: `gtceu:${tier}_transformer_${transformerData.amps}` });
            event.remove({
                not: { output: 'gtceu:active_transformer' },
                input: `gtceu:${tier}_transformer_${transformerData.amps}`,
            }); //maybe add to recycler helper?

            let priorMachine = transformerData.amps === '1a' ? 'machine_hull' : `transformer_${transformerData.prior}`;

            if (chip) {
                event
                    .shaped(Item.of(`gtceu:${tier}_transformer_${transformerData.amps}`), ['CLL', 'UH ', 'CLL'], {
                        H: `gtceu:${tier}_${priorMachine}`,
                        L: `gtceu:${cable}_${transformerData.cableThickness}_cable`,
                        U: `gtceu:${cable1}_${transformerData.cableThickness}_cable`,
                        C: `${chip}_chip`,
                    })
                    .id(`start:shaped/${tier}_transformer_${transformerData.amps}`);

                event.recipes.gtceu
                    .assembler(id(`${tier}_transformer_${transformerData.amps}`))
                    .itemInputs(
                        `gtceu:${tier}_${priorMachine}`,
                        `gtceu:${cable1}_${transformerData.cableThickness}_cable`,
                        `4x gtceu:${cable}_${transformerData.cableThickness}_cable`,
                        `2x ${chip}_chip`
                    )
                    .itemOutputs(`gtceu:${tier}_transformer_${transformerData.amps}`)
                    .duration(5)
                    .EUt(30);
            } else {
                event
                    .shaped(Item.of(`gtceu:${tier}_transformer_${transformerData.amps}`), [' LL', 'UH ', ' LL'], {
                        H: `gtceu:${tier}_${priorMachine}`,
                        L: `gtceu:${cable}_${transformerData.cableThickness}_cable`,
                        U: `gtceu:${cable1}_${transformerData.cableThickness}_cable`,
                    })
                    .id(`start:shaped/${tier}_transformer_${transformerData.amps}`);

                event.recipes.gtceu
                    .assembler(id(`${tier}_transformer_${transformerData.amps}`))
                    .itemInputs(
                        `gtceu:${tier}_${priorMachine}`,
                        `gtceu:${cable1}_${transformerData.cableThickness}_cable`,
                        `4x gtceu:${cable}_${transformerData.cableThickness}_cable`
                    )
                    .itemOutputs(`gtceu:${tier}_transformer_${transformerData.amps}`)
                    .duration(5)
                    .EUt(30);
            }
        });
    }
    tierTransformer('ulv');
    tierTransformer('lv');
    tierTransformer('mv');
    tierTransformer('hv');
    tierTransformer('ev');
    tierTransformer('iv');
    tierTransformer('luv');
    tierTransformer('zpm');
    tierTransformer('uv');
    tierTransformer('uhv');
    tierTransformer('uev');
    tierTransformer('uiv');
});
