ServerEvents.recipes((event) => {
    const id = global.id;

    event.remove({ output: /gtceu:.*hatch_4a/ });
    event.remove({ output: /gtceu:.*hatch_16a/ });
    event.remove({ output: /gtceu:.*hatch_64a/ });
    event.remove({ output: /gtceu:.*_256a_laser.*/ });
    event.remove({ output: /gtceu:.*_1024a_laser.*/ });
    event.remove({ output: /gtceu:.*_4096a_laser.*/ });

    const components = global.componentMaterials;

    /**
     * @param {'ev' | 'iv' | 'luv' | 'zpm' | 'uv' | 'uhv' | 'uev' | 'uiv'} tierKey
     * @param {'gtceu' | 'kubejs'} coilMod
     */
    function highAmphatches(tierKey, coilMod) {
        const tierData = components[tierKey];
        if (!tierData) return;

        const {
            tiers: { tier },
            materials: { tierMaterial, cable, solder },
            scaling: { scaler, EU },
        } = tierData;

        [
            { type: 'input', laserType: 'target', laserPart: 'sensor' },
            { type: 'output', laserType: 'source', laserPart: 'emitter' },
        ].forEach((energyIOData) => {
            const { type, laserType, laserPart } = energyIOData;

            event.recipes.gtceu
                .assembler(id(`${tier}_energy_${type}_hatch_4a`))
                .itemInputs(
                    `gtceu:${tier}_transformer_1a`,
                    `gtceu:${tier}_energy_${type}_hatch`,
                    `2x gtceu:${cable}_quadruple_wire`,
                    `1x ${coilMod}:${tier}_voltage_coil`,
                    `2x gtceu:${tierMaterial}_plate`
                )
                .inputFluids(`gtceu:${solder} ${scaler * 144}`)
                .itemOutputs(`gtceu:${tier}_energy_${type}_hatch_4a`)
                .duration(100)
                .EUt(EU * 2);

            event.recipes.gtceu
                .assembler(id(`${tier}_energy_${type}_hatch_16a`))
                .itemInputs(
                    `gtceu:${tier}_transformer_4a`,
                    `gtceu:${tier}_energy_${type}_hatch_4a`,
                    `2x gtceu:${cable}_quadruple_wire`,
                    `2x ${coilMod}:${tier}_voltage_coil`,
                    `4x gtceu:${tierMaterial}_plate`
                )
                .inputFluids(`gtceu:${solder} ${scaler * 288}`)
                .itemOutputs(`gtceu:${tier}_energy_${type}_hatch_16a`)
                .duration(200)
                .EUt(EU * 3);

            event.recipes.gtceu
                .assembler(id(`${tier}_substation_${type}_hatch_64a`))
                .itemInputs(
                    `gtceu:${tier}_transformer_16a`,
                    `gtceu:${tier}_energy_${type}_hatch_16a`,
                    `2x gtceu:${cable}_hex_wire`,
                    `3x ${coilMod}:${tier}_voltage_coil`,
                    `6x gtceu:${tierMaterial}_plate`
                )
                .inputFluids(`gtceu:${solder} ${scaler * 432}`)
                .itemOutputs(`gtceu:${tier}_substation_${type}_hatch_64a`)
                .duration(400)
                .EUt(EU * 4);

            if (tier !== 'ev') {
                event.recipes.gtceu
                    .assembler(id(`${tier}_256a_laser_${laserType}_hatch`))
                    .itemInputs(
                        `gtceu:${tier}_substation_${type}_hatch_64a`,
                        'gtceu:diamond_lens',
                        `gtceu:${tier}_${laserPart}`,
                        `gtceu:${tier}_electric_pump`,
                        `4x gtceu:${cable}_single_cable`
                    )
                    .inputFluids(`gtceu:${solder} ${scaler * 576}`)
                    .itemOutputs(`gtceu:${tier}_256a_laser_${laserType}_hatch`)
                    .duration(600)
                    .EUt(EU * 4);

                event.recipes.gtceu
                    .assembler(id(`${tier}_1024a_laser_${laserType}_hatch`))
                    .itemInputs(
                        `gtceu:${tier}_256a_laser_${laserType}_hatch`,
                        '2x gtceu:diamond_lens',
                        `2x gtceu:${tier}_${laserPart}`,
                        `2x gtceu:${tier}_electric_pump`,
                        `4x gtceu:${cable}_double_cable`
                    )
                    .inputFluids(`gtceu:${solder} ${scaler * 720}`)
                    .itemOutputs(`gtceu:${tier}_1024a_laser_${laserType}_hatch`)
                    .duration(900)
                    .EUt(EU * 4);

                event.recipes.gtceu
                    .assembler(id(`${tier}_4096a_laser_${laserType}_hatch`))
                    .itemInputs(
                        `gtceu:${tier}_1024a_laser_${laserType}_hatch`,
                        '4x gtceu:diamond_lens',
                        `4x gtceu:${tier}_${laserPart}`,
                        `4x gtceu:${tier}_electric_pump`,
                        `4x gtceu:${cable}_quadruple_cable`
                    )
                    .inputFluids(`gtceu:${solder} ${scaler * 864}`)
                    .itemOutputs(`gtceu:${tier}_4096a_laser_${laserType}_hatch`)
                    .duration(1200)
                    .EUt(EU * 4);
            }
        });
    }

    highAmphatches('ev', 'gtceu');
    highAmphatches('iv', 'gtceu');
    highAmphatches('luv', 'gtceu');
    highAmphatches('zpm', 'gtceu');
    highAmphatches('uv', 'gtceu');
    highAmphatches('uhv', 'kubejs');
    highAmphatches('uev', 'kubejs');
    highAmphatches('uiv', 'kubejs');
});
