ServerEvents.recipes((event) => {
    const id = global.id;

    const COMPONENTS = global.componentMaterials;

    const componentMaterials = (tierKey) => {
        const data = COMPONENTS[tierKey];
        if (!data) return;

        const {
            tiers: { tier, tier1, tier2 },
            materials: {
                primMaterial,
                supMaterial,
                wireMechanical,
                tierFluid,
                solder,
                lubricant,
                cable,
                pipeMaterial,
                superconductor,
                catalyst,
                primMagnet,
                miscMaterial,
            },
            scaling: { scaler, EU },
        } = data;

        const componentTypesNexus = (type, inputs, fluids) => {
            let nexusRecipe = event.recipes.gtceu
                .component_nexus(id(`${tier}_${type}`))
                .itemInputs(inputs)
                .inputFluids(fluids)
                .itemOutputs(`gtceu:${tier}_${type}`)
                .duration(600 * 0.5)
                .cleanroom(CleanroomType.getByName('stabilized'))
                .EUt(EU);

            if (tier === 'uv') {
                nexusRecipe.inputFluids(`gtceu:${tierFluid} 576`);
            }
        };

        componentTypesNexus(
            'electric_motor',
            [
                `1x gtceu:long_magnetic_${primMagnet}_rod`,
                `4x gtceu:long_${primMaterial}_rod`,
                `4x gtceu:${primMaterial}_ring`,
                `8x gtceu:${primMaterial}_round`,
                `64x gtceu:fine_${wireMechanical}_wire`,
                `2x gtceu:${cable}_single_cable`,
            ],
            [`gtceu:${solder} ${72 * Math.pow(2, scaler)}`, `gtceu:${lubricant} ${125 * Math.pow(2, scaler)}`]
        );

        componentTypesNexus(
            'electric_pump',
            [
                `1x gtceu:${tier}_electric_motor`,
                `1x gtceu:${pipeMaterial}_normal_fluid_pipe`,
                `2x gtceu:${primMaterial}_plate`,
                `8x gtceu:${primMaterial}_screw`,
                `${2 * (scaler + 1)}x gtceu:silicone_rubber_ring`,
                `1x gtceu:${supMaterial}_rotor`,
                `2x gtceu:${cable}_single_cable`,
            ],
            [`gtceu:${solder} ${72 * Math.pow(2, scaler)}`, `gtceu:${lubricant} ${125 * Math.pow(2, scaler)}`]
        );

        componentTypesNexus(
            'conveyor_module',
            [
                `2x gtceu:${tier}_electric_motor`,
                `2x gtceu:${primMaterial}_plate`,
                `4x gtceu:${primMaterial}_ring`,
                `16x gtceu:${primMaterial}_round`,
                `4x gtceu:${primMaterial}_screw`,
                `2x gtceu:${cable}_single_cable`,
            ],
            [
                `gtceu:${solder} ${72 * Math.pow(2, scaler)}`,
                `gtceu:${lubricant} ${125 * Math.pow(2, scaler)}`,
                `gtceu:styrene_butadiene_rubber ${scaler * 1152}`,
            ]
        );

        componentTypesNexus(
            'electric_piston',
            [
                `1x gtceu:${tier}_electric_motor`,
                `4x gtceu:${primMaterial}_plate`,
                `4x gtceu:${primMaterial}_ring`,
                `16x gtceu:${primMaterial}_round`,
                `4x gtceu:${primMaterial}_rod`,
                `1x gtceu:${supMaterial}_gear`,
                `2x gtceu:small_${supMaterial}_gear`,
                `2x gtceu:${cable}_single_cable`,
            ],
            [`gtceu:${solder} ${72 * Math.pow(2, scaler)}`, `gtceu:${lubricant} ${125 * Math.pow(2, scaler)}`]
        );

        componentTypesNexus(
            'robot_arm',
            [
                `4x gtceu:long_${primMaterial}_rod`,
                `1x gtceu:${primMaterial}_gear`,
                `3x gtceu:small_${primMaterial}_gear`,
                `2x gtceu:${tier}_electric_motor`,
                `1x gtceu:${tier}_electric_piston`,
                `1x #gtceu:circuits/${tier}`,
                `2x #gtceu:circuits/${tier1}`,
                `4x #gtceu:circuits/${tier2}`,
                `4x gtceu:${cable}_single_cable`,
            ],
            [`gtceu:${solder} ${288 * scaler}`, `gtceu:${lubricant} ${125 * Math.pow(2, scaler)}`]
        );

        componentTypesNexus(
            'field_generator',
            [
                `1x gtceu:${primMaterial}_frame`,
                `6x gtceu:${primMaterial}_plate`,
                catalyst,
                `2x gtceu:${tier}_emitter`,
                `2x #gtceu:circuits/${tier}`,
                `128x gtceu:fine_${superconductor}_wire`,
                `4x gtceu:${cable}_single_cable`,
            ],
            [`gtceu:${solder} ${288 * Math.pow(2, scaler)}`]
        );

        componentTypesNexus(
            'emitter',
            [
                `1x gtceu:${primMaterial}_frame`,
                `1x gtceu:${tier}_electric_motor`,
                `4x gtceu:long_${primMaterial}_rod`,
                catalyst,
                `2x #gtceu:circuits/${tier}`,
                `96x gtceu:${miscMaterial}_foil`,
                `4x gtceu:${cable}_single_cable`,
            ],
            [`gtceu:${solder} ${144 * Math.pow(2, scaler)}`]
        );

        componentTypesNexus(
            'sensor',
            [
                `1x gtceu:${primMaterial}_frame`,
                `1x gtceu:${tier}_electric_motor`,
                `4x gtceu:${primMaterial}_plate`,
                catalyst,
                `2x #gtceu:circuits/${tier}`,
                `96x gtceu:${miscMaterial}_foil`,
                `4x gtceu:${cable}_single_cable`,
            ],
            [`gtceu:${solder} ${144 * Math.pow(2, scaler)}`]
        );
    };

    componentMaterials('luv');
    componentMaterials('zpm');
    componentMaterials('uv');
});
