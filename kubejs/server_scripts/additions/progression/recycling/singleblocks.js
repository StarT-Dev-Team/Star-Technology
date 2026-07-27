// note: this code is assuming all casing materials from uev+ are the same as the component tertiary material
ServerEvents.recipes((event) => {
    const TIERS = ['luv', 'zpm', 'uv', 'uhv', 'uev', 'uiv'];
    const SINGLEBLOCKS = [
        'electric_furnace',
        'electric_blast_furnace',
        'electric_smoker',
        'alloy_smelter',
        'arc_furnace',
        'electrolyzer',
        'polarizer',
        'charger_4x',
        'assembler',
        'autoclave',
        'bender',
        'brewery',
        'canner',
        'centrifuge',
        'chemical_bath',
        'chemical_reactor',
        'compressor',
        'cutter',
        'distillery',
        'electromagnetic_separator',
        'extractor',
        'extruder',
        'fermenter',
        'fluid_heater',
        'fluid_solidifier',
        'forge_hammer',
        'forming_press',
        'lathe',
        'scanner',
        'mixer',
        'ore_washer',
        'packer',
        'laser_engraver',
        'sifter',
        'thermal_centrifuge',
        'wiremill',
        'circuit_assembler',
        'macerator',
        'gas_collector',
        'rock_crusher',
    ];
    const SINGLEBLOCK_DETAILS = global.singleblockRecyclingDetails;

    function getSingleblockRecycleOutputs(
        arcBool,
        singleblock,
        specialSingleBool,
        tier,
        components /*not read if special*/,
        extraCasings /*0 if special*/,
        extraCables /*0 if special*/
    ) {
        const componentRecycles = global.componentRecycleMaterials;
        const casingMaterials = global.casingMaterials;
        const getComponentTotal = global.getComponentTotal;
        let tierBracket;
        let materialTypes = [];
        let materials = {};
        const graphite = arcBool ? '7x gtceu:tiny_ash_dust' : 'gtceu:graphite_dust';

        if (tier === 'luv' || tier === 'zpm' || tier === 'uv') {
            materialTypes = ['casing', 'prim', 'cable', 'wire', 'elctrlyzWire', 'foil'];
            tierBracket = 'LUVToUV';
        } else if (tier === 'uhv' || tier === 'uev' || tier === 'uiv') {
            materialTypes = ['casing', 'prim', 'cable', 'wire', 'elctrlyzWire', 'sec', 'tert'];
            tierBracket = 'UHVPLUS';
        }

        materialTypes.forEach((type) => {
            if (type === 'casing') {
                materials[type + 'Material'] = casingMaterials[tier];
            } else {
                materials[type + 'Material'] = componentRecycles[tier][type + 'Material'];
            }
        });

        const specialSingleOutputs = {
            // eslint-disable-next-line id-match, camelcase
            electric_furnace: [
                `8x ${materials.casingMaterial}`,
                `4x ${materials.wireMaterial}`,
                `2x ${materials.cableMaterial}`,
                ' ',
                ' ',
                ' ',
            ],
            // eslint-disable-next-line id-match, camelcase
            electric_blast_furnace: [
                `10x ${materials.casingMaterial}`,
                `4x ${materials.wireMaterial}`,
                `2x ${materials.cableMaterial}`,
                ' ',
                ' ',
                ' ',
            ],
            // eslint-disable-next-line id-match, camelcase
            electric_smoker: [
                `8x ${materials.casingMaterial}`,
                `6x ${materials.wireMaterial}`,
                `2x ${materials.cableMaterial}`,
                ' ',
                ' ',
                ' ',
            ],
            // eslint-disable-next-line id-match, camelcase
            alloy_smelter: [
                `8x ${materials.casingMaterial}`,
                `6x ${materials.wireMaterial}`,
                `2x ${materials.cableMaterial}`,
                ' ',
                ' ',
                ' ',
            ],
            // eslint-disable-next-line id-match, camelcase
            arc_furnace: [
                `11x ${materials.casingMaterial}`,
                `5x ${materials.cableMaterial}`,
                `${graphite}`,
                ' ',
                ' ',
                ' ',
            ],
            electrolyzer: [
                `8x ${materials.casingMaterial}`,
                `2x ${materials.elctrlyzWireMaterial}`,
                `1x ${materials.cableMaterial}`,
                ' ',
                ' ',
                ' ',
            ],
            polarizer: [`18x ${materials.cableMaterial}`, `8x ${materials.casingMaterial}`, ' ', ' ', ' ', ' '],
            charger4x: [
                `8x ${materials.casingMaterial}`,
                `8x ${materials.wireMaterial}`,
                `2x ${materials.cableMaterial}`,
                ' ',
                ' ',
                ' ',
            ],
        };
        let casingCount = 8 + extraCasings;
        let recycleOutputs = [];
        let tempTotals;
        let tempObj;

        if (specialSingleBool) {
            recycleOutputs = specialSingleOutputs[singleblock];
        } else {
            // gets and checks the final outputs
            tempTotals = getComponentTotal(components, tierBracket);
            tempTotals.cableCount += extraCables;

            if (tier === 'uev' || tier === 'uiv') {
                // if tertiary material is the same as casing material
                tempTotals.tertCount += casingCount;
                tempObj = global.checkRecyclingCount(tempTotals, `singleblock_${tierBracket}`, false, false, false);
            } else {
                tempTotals.casingCount = casingCount;
                tempObj = global.checkRecyclingCount(tempTotals, `singleblock_${tierBracket}`, false, true, false);
            }

            // sorts the final outputs
            let checkCount = 0;
            let flag = false;
            let flag2;

            while (!flag) {
                flag2 = tier === 'uev' || tier === 'uiv' ? 3 : 4;
                if (checkCount === flag2) {
                    flag = true;
                }
                if (tempObj.totals[tempObj.outputOrder[checkCount] + 'Count'] !== 0) {
                    recycleOutputs.push(
                        `${tempObj.totals[tempObj.outputOrder[checkCount] + 'Count']}x ${materials[tempObj.outputOrder[checkCount] + 'Material']}`
                    );
                }

                checkCount++;
            }
            // sets the blockBools
            for (let n = 0; n < 4; n++) {
                recycleOutputs.push(tempObj.blockBools[tempObj.outputOrder[n] + 'Block']);
            }
        }

        return recycleOutputs;
    }

    const arcRecipe = (singleblock, specialSingleBool, tiers, components, extraCasings, extraCables) => {
        const id = global.id;
        const calculateDuration = global.calculateRecyclingDuration;
        const getFinalOutputs = global.getFinalRecycleOutputs;
        let outputs;

        tiers.forEach((tier) => {
            if (tier === 'luv' || tier === 'zpm' || tier === 'uv') {
                event.remove({
                    input: `gtceu:${tier}_${singleblock}`,
                    type: 'gtceu:arc_furnace',
                });
            }

            outputs = getFinalOutputs(
                getSingleblockRecycleOutputs(
                    true,
                    singleblock,
                    specialSingleBool,
                    tier,
                    components,
                    extraCasings,
                    extraCables
                ),
                'singleblock',
                false,
                specialSingleBool
            );
            event.recipes.gtceu
                .arc_furnace(id(`arc_${tier}_${singleblock}`))
                .itemInputs(`gtceu:${tier}_${singleblock}`)
                .itemOutputs(outputs)
                .duration(calculateDuration(outputs))
                .EUtVA(LV)
                .category(GTRecipeCategories.ARC_FURNACE_RECYCLING);
        });
    };

    const macRecipe = (singleblock, specialSingleBool, tiers, components, extraCasings, extraCables) => {
        const id = global.id;
        const calculateDuration = global.calculateRecyclingDuration;
        const calculateVoltageMultiplier = global.calculateRecyclingVoltageMultiplier;
        const getFinalOutputs = global.getFinalRecycleOutputs;
        let outputs;

        tiers.forEach((tier) => {
            if (tier === 'luv' || tier === 'zpm' || tier === 'uv') {
                event.remove({
                    input: `gtceu:${tier}_${singleblock}`,
                    type: 'gtceu:macerator',
                });
            }

            outputs = getFinalOutputs(
                getSingleblockRecycleOutputs(
                    false,
                    singleblock,
                    specialSingleBool,
                    tier,
                    components,
                    extraCasings,
                    extraCables
                ),
                'singleblock',
                true,
                specialSingleBool
            );
            event.recipes.gtceu
                .macerator(id(`macerate_${tier}_${singleblock}`))
                .itemInputs(`gtceu:${tier}_${singleblock}`)
                .itemOutputs(outputs)
                .duration(calculateDuration(outputs))
                .EUt(2 * calculateVoltageMultiplier(outputs))
                .category(GTRecipeCategories.MACERATOR_RECYCLING);
        });
    };
    const singleblockDetails = (singleblockKey) => {
        const data = SINGLEBLOCK_DETAILS[singleblockKey];
        if (!data) return;

        const { name, specialSingle, components, extraCasings, extraCables } = data;

        arcRecipe(name, specialSingle, TIERS, components, extraCasings, extraCables);
        macRecipe(name, specialSingle, TIERS, components, extraCasings, extraCables);
    };

    SINGLEBLOCKS.forEach((singleblock) => {
        singleblockDetails(singleblock);
    });
});
