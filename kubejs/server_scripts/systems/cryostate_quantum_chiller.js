ServerEvents.recipes((event) => {
    const id = global.id;

    // Misc

    event.recipes.gtceu
        .bender(id('zalloyic_empty_mold'))
        .circuit(4)
        .itemInputs('16x gtceu:dense_zalloy_plate')
        .itemOutputs('kubejs:zalloyic_empty_mold')
        .duration(900)
        .EUt(GTValues.VA[GTValues.UV]);

    event.recipes.gtceu
        .forming_press(id('zalloyic_fluid_mold'))
        .notConsumable('gtceu:cylinder_casting_mold')
        .itemInputs('kubejs:zalloyic_empty_mold')
        .itemOutputs('kubejs:zalloyic_fluid_mold')
        .duration(480)
        .EUt(GTValues.VA[GTValues.ZPM]);

    // VF Recipe Pull
    event.forEachRecipe({ type: 'gtceu:vacuum_freezer' }, (vacParse) => {
        let bulkVac = JSON.parse(vacParse.json);
        let duration = bulkVac.duration;
        let eut = bulkVac.tickInputs.eu[0].content;
        let inItem = false;
        let inFluid1 = false;
        let inFluid2 = false;
        let outFluid = false;
        let outItem = false;
        if (bulkVac.inputs.item?.length === 1) {
            inItem = bulkVac.inputs.item[0].content;
        }
        if (bulkVac.inputs.fluid?.length >= 1) {
            inFluid1 = bulkVac.inputs.fluid[0].content;
        }
        if (bulkVac.inputs.fluid?.length === 2) {
            inFluid2 = bulkVac.inputs.fluid[1].content;
        }
        if (bulkVac.outputs.fluid?.length === 1) {
            outFluid = bulkVac.outputs.fluid[0].content;
        }
        if (bulkVac.outputs.item?.length === 1) {
            // eslint-disable-next-line no-unused-vars
            outItem = bulkVac.outputs.item[0].content;
        }

        if (inItem) {
            // Cooling Molten to Liquid
            if (inItem.ingredient.item === 'gtceu:ingot_casting_mold') {
                if (!inFluid2) {
                    // Cooled Without Fluid
                    event.recipes.gtceu
                        .vacuum_freezer(id(`liquid_${inFluid1.value[0].tag.slice(13)}`))
                        .notConsumable('kubejs:zalloyic_fluid_mold')
                        .inputFluids(Fluid.of(`gtceu:${inFluid1.value[0].tag.slice(6)}`, inFluid1.amount))
                        .outputFluids(Fluid.of(`gtceu:${inFluid1.value[0].tag.slice(13)}`, inFluid1.amount))
                        .duration(duration * 1.05)
                        .EUt(eut);
                } else {
                    // Cooled With Fluid
                    event.recipes.gtceu
                        .vacuum_freezer(id(`liquid_${inFluid1.value[0].tag.slice(13)}`))
                        .notConsumable('kubejs:zalloyic_fluid_mold')
                        .inputFluids(Fluid.of(`gtceu:${inFluid1.value[0].tag.slice(6)}`, inFluid1.amount))
                        .inputFluids(Fluid.of(`gtceu:${inFluid2.value[0].tag.slice(6)}`, inFluid2.amount))
                        .outputFluids(Fluid.of(`gtceu:${inFluid1.value[0].tag.slice(13)}`, inFluid1.amount))
                        .outputFluids(Fluid.of(outFluid.value[0].fluid, outFluid.amount))
                        .duration(duration * 1.05)
                        .EUt(eut);
                }
            }
        }
    });

    //Quantum Cooling
    event.recipes.gtceu
        .quantum_cooling(id('oganesson'))
        .inputFluids('gtceu:oganesson_plasma 500')
        .inputFluids('gtceu:liquid_helium 5000')
        .outputFluids('gtceu:oganesson 500')
        .outputFluids('gtceu:helium 2500')
        .duration(80)
        .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu
        .quantum_cooling(id('bec_og'))
        .inputFluids('gtceu:oganesson 500')
        .inputFluids('gtceu:superstate_helium_3 7500')
        .outputFluids('gtceu:bec_og 500')
        .outputFluids('gtceu:helium_3 5000')
        .duration(320)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu
        .quantum_cooling(id('superstate_helium_3'))
        .inputFluids('gtceu:helium_3 5000')
        .inputFluids('gtceu:liquid_helium 5000')
        .outputFluids('gtceu:superstate_helium_3 5000')
        .outputFluids('gtceu:helium 2500')
        .duration(400)
        .EUt(GTValues.VA[GTValues.UV]);

    // >15000K Cooling
    const material15000PlusAlloy = (type, dur) => {
        event.remove({ id: `gtceu:vacuum_freezer/${type}` });
        event.recipes.gtceu
            .vacuum_freezer(id(`${type}_from_molten`))
            .inputFluids(`gtceu:molten_${type} 144`)
            .inputFluids('gtceu:superstate_helium_3 500')
            .notConsumable('gtceu:ingot_casting_mold')
            .itemOutputs(`gtceu:${type}_ingot`)
            .outputFluids('gtceu:helium_3 250')
            .duration(dur * 20)
            .EUt(GTValues.VA[GTValues.UV]);

        event.recipes.gtceu
            .vacuum_freezer(id(`liquid_${type}_from_molten`))
            .inputFluids(`gtceu:molten_${type} 144`)
            .inputFluids('gtceu:superstate_helium_3 500')
            .notConsumable('kubejs:zalloyic_fluid_mold')
            .outputFluids(`gtceu:${type} 144`)
            .outputFluids('gtceu:helium_3 250')
            .duration(dur * 20 * 1.05)
            .EUt(GTValues.VA[GTValues.UV]);

        event.recipes.gtceu
            .quantum_cooling(id(`${type}`))
            .inputFluids(`gtceu:${type}_plasma 144`)
            .inputFluids('gtceu:bec_og 250')
            .outputFluids(`gtceu:molten_${type} 144`)
            .outputFluids('gtceu:oganesson 200')
            .duration(dur * 6)
            .EUt(GTValues.VHA[GTValues.UEV]);
    };

    material15000PlusAlloy('mythrolic_alloy', 36.9);
    material15000PlusAlloy('magmada_alloy', 49.2);
    material15000PlusAlloy('starium_alloy', 29.55);
    material15000PlusAlloy('enriched_pallarovium_alloy', 31.5);
    material15000PlusAlloy('nyanium', 49.35);
    material15000PlusAlloy('rhenium_super_composite_alloy', 16.5);
    material15000PlusAlloy('abyssal_alloy', 61.5);
    material15000PlusAlloy('chaotixic_alloy', 29.25);
    material15000PlusAlloy('ohmderblux_alloy', 22.95);
    material15000PlusAlloy('draconyallium', 12.45);
    material15000PlusAlloy('draco_abyssal', 76.8);
    material15000PlusAlloy('expetidalloy_d_17', 12);
    material15000PlusAlloy('rhenate_w', 28.8);
    material15000PlusAlloy('borealic_steel', 54.3);
    material15000PlusAlloy('ultispestalloy_cmsh', 13.35);
    material15000PlusAlloy('trikoductive_neutro_steel', 38.25);
    material15000PlusAlloy('melastrium_mox', 23.85);
    material15000PlusAlloy('hvga_steel', 18.75);
    material15000PlusAlloy('mythrotight_carbide_steel', 13.5);
    material15000PlusAlloy('aerorelient_steel', 10.8);
    material15000PlusAlloy('zeroidic_trinate_steel', 32.85);
    material15000PlusAlloy('vastaqalloy_cr_4200x', 16.5);
    material15000PlusAlloy('soul_ascendant_cuperite', 4.35);
    material15000PlusAlloy('primordially_stellarized_weapon_grade_naquadah', 63);
});
