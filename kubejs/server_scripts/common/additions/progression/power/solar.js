ServerEvents.recipes(event => {
    const id = global.id;
    const getRecipeTier = global.getRecipeTier;

    const assembler = event.recipes.gtceu.assembler;
    const polarizer = event.recipes.gtceu.polarizer;
    const assline = event.recipes.gtceu.assembly_line;

    ['smd', 'advanced_smd', 'living_smd'].forEach(smdType => {

        let count = (smdType == 'living_smd') ? 16 : (smdType == 'advanced_smd') ? 4 : 1;
        let prefix = (smdType == 'living_smd') ? 'kubejs:' : 'gtceu:';

        //EV Solar Cores
        assembler(id(`ev_energy_core_from_${smdType}`))
            .itemInputs('3x gtceu:iron_foil', `2x ${prefix + smdType}_diode`, `2x ${prefix + smdType}_capacitor`)
            .inputFluids('gtceu:glass 288')
            .itemOutputs(`${count}x kubejs:ev_energy_core`)
            .circuit(3)
            .duration(400)
            .EUt(GTValues.VHA[GTValues.HV] * count);

        });

    const COMPONENTS = global.componentMaterials

    const solar = (tierKey,panelType) => {
        const data = COMPONENTS[tierKey]
        if (!data) return

        const {
            tiers: { tier, tier1 },
            materials: {
                wireMechanical,
                tierMaterial,
                solder,
                lubricant,
                cable,
                battery
            },
            scaling: {
                scaler,
                EU
            }
        } = data;

        if(tier != 'ev'){
            //Other Cores
            polarizer(id(`${tier}_energy_core`))
                .itemInputs(`kubejs:${tier1}_energy_core`)
                .itemOutputs(`kubejs:${tier}_energy_core`)
                .duration(300)
                .EUt(EU);
        }

        //Solar Cells
        assembler(id(`${tier}_solar_cell`))
            .itemInputs(`2x kubejs:${tier}_photovoltaic_cell`, `gtceu:${tierMaterial}_frame`, `2x gtceu:${cable}_double_cable`)
            .inputFluids(`gtceu:epoxy ${scaler * 144}`)
            .itemOutputs(`2x start_core:${tier}_solar_cell`)
            .duration(600)
            .EUt(EU * 2);
        
        //Photovoltaic Cells
        assembler(id(`${tier}_photovoltaic_cell`))
            .itemInputs(`gtceu:double_${tierMaterial}_plate`,`kubejs:${tier}_energy_core`,`#gtceu:circuits/${tier}`)
            .inputFluids(`gtceu:${solder} 576`)
            .itemOutputs(`kubejs:${tier}_photovoltaic_cell`)
            .duration(400)
            .EUt(EU * 4);

        if (panelType == 'panel') {

            assembler(id(`${tier}_solar_panel`))
                .itemInputs(`1x gtceu:${tierMaterial}_frame`, Item.of(`gtceu:${battery}`), `16x gtceu:${cable}_double_cable`,
                    `4x gtceu:${tier}_emitter`, `2x gtceu:${tier}_sensor`, `2x #gtceu:circuits/${tier}`)
                .inputFluids(`gtceu:${lubricant} 4000`)
                .itemOutputs(`start_core:${tier}_solar_panel`)
                .duration(600)
                .EUt(EU * 2);

        } 

        if (panelType == 'array') {

            let researchItem = (tier == 'uhv') ? 'start_core:uv_solar_array' : 'start_core:luv_solar_panel';
            let cwu = (tier == 'uhv') ? 160 : 128;

            assline(id(`${tier}_solar_array`))
                .itemInputs(`2x gtceu:${tierMaterial}_frame`, Item.of(`gtceu:${battery}`), `2x #gtceu:circuits/${tier}`,
                    `8x gtceu:${tier}_emitter`, `8x gtceu:${tier}_sensor`, `64x gtceu:fine_${wireMechanical}_wire`, 
                    `64x gtceu:fine_${wireMechanical}_wire`, `24x gtceu:${cable}_double_cable`)
                .inputFluids(`gtceu:${solder} 2880`,`gtceu:${lubricant} 7200`, `gtceu:deionized_water ${7500 * 2 * (scaler - 2)}`)
                .itemOutputs(`start_core:${tier}_solar_array`)
                .duration(600)
                .stationResearch(
                    researchRecipeBuilder => researchRecipeBuilder
                        .researchStack(Item.of(researchItem))
                        .EUt(EU)
                        .CWUt(cwu)
                )
                .EUt(EU * 2);
        }
        
    }
    solar('ev','panel')
    solar('iv','panel')
    solar('luv','panel')
    solar('zpm','')
    solar('uv','array')
    solar('uhv','array')

});