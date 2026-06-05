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
    event.forEachRecipe({ type: 'gtceu:vacuum_freezer' }, (VacParse) => {
        let BulkVac = JSON.parse(VacParse.json);
        let Duration = BulkVac.duration;
        let EUt = BulkVac.tickInputs.eu[0].content;
        let InItem = false;
        let InFluid1 = false;
        let InFluid2 = false;
        let OutFluid = false;
        let OutItem = false;
        if (BulkVac.inputs.item?.length === 1) {
            InItem = BulkVac.inputs.item[0].content;
        }
        if (BulkVac.inputs.fluid?.length >= 1) {
            InFluid1 = BulkVac.inputs.fluid[0].content;
        }
        if (BulkVac.inputs.fluid?.length === 2) {
            InFluid2 = BulkVac.inputs.fluid[1].content;
        }
        if (BulkVac.outputs.fluid?.length === 1) {
            OutFluid = BulkVac.outputs.fluid[0].content;
        }
        if (BulkVac.outputs.item?.length === 1) {
            OutItem = BulkVac.outputs.item[0].content;
        }

        if (InItem) {
            // Cooling Molten to Liquid
            if (InItem.ingredient.item === 'gtceu:ingot_casting_mold') {
                if (!InFluid2) {
                    // Cooled Without Fluid
                    event.recipes.gtceu
                        .vacuum_freezer(id(`liquid_${InFluid1.value[0].tag.slice(13)}`))
                        .notConsumable('kubejs:zalloyic_fluid_mold')
                        .inputFluids(Fluid.of(`gtceu:${InFluid1.value[0].tag.slice(6)}`, InFluid1.amount))
                        .outputFluids(Fluid.of(`gtceu:${InFluid1.value[0].tag.slice(13)}`, InFluid1.amount))
                        .duration(Duration * 1.05)
                        .EUt(EUt);
                } else {
                    // Cooled With Fluid
                    event.recipes.gtceu
                        .vacuum_freezer(id(`liquid_${InFluid1.value[0].tag.slice(13)}`))
                        .notConsumable('kubejs:zalloyic_fluid_mold')
                        .inputFluids(Fluid.of(`gtceu:${InFluid1.value[0].tag.slice(6)}`, InFluid1.amount))
                        .inputFluids(Fluid.of(`gtceu:${InFluid2.value[0].tag.slice(6)}`, InFluid2.amount))
                        .outputFluids(Fluid.of(`gtceu:${InFluid1.value[0].tag.slice(13)}`, InFluid1.amount))
                        .outputFluids(Fluid.of(OutFluid.value[0].fluid, OutFluid.amount))
                        .duration(Duration * 1.05)
                        .EUt(EUt);
                }
            }
        }
    });

    //Quantum Cooling
    event.recipes.gtceu
        .quantum_cooling(id(`oganesson`))
        .inputFluids(`gtceu:oganesson_plasma 500`)
        .inputFluids('gtceu:liquid_helium 5000')
        .outputFluids(`gtceu:oganesson 500`)
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
    const Material15000PlusAlloy = (type, dur) => {
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

    Material15000PlusAlloy('mythrolic_alloy', 36.9);
    Material15000PlusAlloy('magmada_alloy', 49.2);
    Material15000PlusAlloy('starium_alloy', 29.55);
    Material15000PlusAlloy('enriched_pallarovium_alloy', 31.5);
    Material15000PlusAlloy('nyanium', 49.35);
    Material15000PlusAlloy('rhenium_super_composite_alloy', 16.5);
    Material15000PlusAlloy('abyssal_alloy', 61.5);
    Material15000PlusAlloy('chaotixic_alloy', 29.25);
    Material15000PlusAlloy('ohmderblux_alloy', 22.95);
    Material15000PlusAlloy('draconyallium', 12.45);
    Material15000PlusAlloy('draco_abyssal', 76.8);
    Material15000PlusAlloy('expetidalloy_d_17', 12);
    Material15000PlusAlloy('rhenate_w', 28.8);
    Material15000PlusAlloy('borealic_steel', 54.3);
    Material15000PlusAlloy('ultispestalloy_cmsh', 13.35);
    Material15000PlusAlloy('trikoductive_neutro_steel', 38.25);
    Material15000PlusAlloy('melastrium_mox', 23.85);
    Material15000PlusAlloy('hvga_steel', 18.75);
    Material15000PlusAlloy('mythrotight_carbide_steel', 13.5);
    Material15000PlusAlloy('aerorelient_steel', 10.8);
    Material15000PlusAlloy('zeroidic_trinate_steel', 32.85);
    Material15000PlusAlloy('vastaqalloy_cr_4200x', 16.5);
    Material15000PlusAlloy('soul_ascendant_cuperite', 4.35);
    Material15000PlusAlloy('primordially_stellarized_weapon_grade_naquadah', 63);
});
