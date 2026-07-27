ServerEvents.recipes((event) => {
    const id = global.id;

    event.remove('gtceu:distillation_tower/distill_coal_tar');
    // event.remove('gtceu:mixer/rocket_fuel_from_oxygen');
    // event.remove('gtceu:mixer/rocket_fuel_from_dinitrogen_tetroxide');
    event.remove('gtceu:combustion_generator/rocket_fuel');

    event.recipes.gtceu
        .distillation_tower(id('distill_coal_tar'))
        .inputFluids('gtceu:coal_tar 1000')
        .outputFluids(
            'gtceu:naphthalene 400',
            'gtceu:creosote 200',
            'gtceu:kerosene 175',
            'gtceu:hydrogen_sulfide 125',
            'gtceu:phenol 100'
        )
        .itemOutputs('1x gtceu:coke_dust')
        .duration(80)
        .EUtVA(MV);

    event.recipes.gtceu
        .large_chemical_reactor(id('hydrofined_kerosene'))
        .inputFluids('gtceu:kerosene 1000', 'gtceu:hydrogen 200')
        .outputFluids('gtceu:hydrofined_kerosene 1000', 'gtceu:hydrogen_sulfide 200')
        .duration(80)
        .EUtVA(MV);

    event.recipes.gtceu
        .distillation_tower(id('distill_hydrofined_kerosene'))
        .inputFluids('gtceu:hydrofined_kerosene 500')
        .outputFluids('gtceu:rp_1 350', 'gtceu:light_fuel 100', 'gtceu:refinery_gas 50')
        .duration(100)
        .EUtVA(MV);

    event.recipes.gtceu
        .vacuum_freezer(id('liquid_flourine'))
        .inputFluids('gtceu:fluorine 1000')
        .outputFluids('gtceu:liquid_fluorine 1000')
        .duration(240)
        .EUtVA(EV);

    event.recipes.gtceu
        .mixer(id('dioxygen_difluoride'))
        .inputFluids('gtceu:liquid_oxygen 2000', 'gtceu:liquid_fluorine 2000')
        .outputFluids('gtceu:dioxygen_difluoride 1000')
        .duration(120)
        .EUtVHA(EV);

    event.recipes.gtceu
        .fluid_heater(id('fuming_nitric_acid'))
        .inputFluids('gtceu:nitration_mixture 1000')
        .outputFluids('gtceu:fuming_nitric_acid 1000', 'gtceu:hydrogen_sulfide 1000')
        .duration(160)
        .EUtVA(MV);

    event.recipes.gtceu
        .distillation_tower(id('white_fuming_nitric_acid'))
        .inputFluids('gtceu:fuming_nitric_acid 1000')
        .outputFluids('gtceu:white_fuming_nitric_acid 950', 'gtceu:nitrogen_dioxide 50')
        .duration(120)
        .EUtVA(MV);

    event.recipes.gtceu
        .large_chemical_reactor(id('red_fuming_nitric_acid'))
        .inputFluids('gtceu:white_fuming_nitric_acid 1000', 'gtceu:nitrogen_dioxide 150')
        .outputFluids('gtceu:red_fuming_nitric_acid 1000')
        .duration(160)
        .EUtVA(MV);

    event.recipes.gtceu
        .large_chemical_reactor(id('hydrazine'))
        .inputFluids('gtceu:ammonia 2000', 'gtceu:hydrogen_peroxide 1000')
        .outputFluids('gtceu:hydrazine 1000', 'water 2000')
        .duration(160)
        .EUtVA(MV);

    event.recipes.gtceu
        .large_chemical_reactor(id('monomethylhydrazine'))
        .inputFluids('gtceu:hydrazine 1000', 'gtceu:methylamine 1000')
        .outputFluids('gtceu:monomethylhydrazine 1000', 'gtceu:ammonia 1000')
        .duration(200)
        .EUtVA(MV);

    event.recipes.gtceu
        .chemical_reactor(id('ammonium_chloride'))
        .inputFluids('gtceu:hydrochloric_acid 1000', 'gtceu:ammonia 1000')
        .itemOutputs('2x gtceu:ammonium_chloride_dust')
        .duration(80)
        .EUtVA(LV);

    event.recipes.gtceu
        .chemical_reactor(id('ammonia_borane'))
        .itemInputs('3x gtceu:sodium_borohydride_dust', '3x gtceu:ammonium_chloride_dust')
        .itemOutputs('4x gtceu:ammonia_borane_dust', '1x gtceu:salt_dust')
        .outputFluids('gtceu:hydrogen 1000')
        .duration(120)
        .EUtVA(LV);

    event.recipes.gtceu
        .mixer(id('sorbitol_hypergolic_fuel'))
        .inputFluids('gtceu:sorbitol 6000')
        .itemInputs('1x gtceu:ammonia_borane_dust')
        .outputFluids('gtceu:sorbitol_hypergolic_fuel 6000')
        .duration(80)
        .EUtVA(LV);

    event.recipes.gtceu
        .large_chemical_reactor(id('hexafluorophosphoric_acid'))
        .inputFluids('gtceu:phosphoric_acid 1000', 'gtceu:hydrofluoric_acid 1000', 'gtceu:fluorine 1000')
        .outputFluids('gtceu:hexafluorophosphoric_acid 1000', 'water 2000')
        .duration(160)
        .EUtVA(MV);

    event.recipes.gtceu
        .chemical_reactor(id('ferrocene'))
        .inputFluids('gtceu:iron_ii_chloride 1000', 'gtceu:hydrogen 1000')
        .itemInputs('10x gtceu:carbon_dust')
        .outputFluids('gtceu:ferrocene 1000', 'gtceu:hydrochloric_acid 1000', 'water 1000')
        .duration(160)
        .EUtVA(IV);

    event.recipes.gtceu
        .large_chemical_reactor(id('iron_cyclopentadienyl_dichlorobenzene'))
        .inputFluids('gtceu:ferrocene 1000', 'gtceu:dichlorobenzene 1000', 'gtceu:hexafluorophosphoric_acid 1000')
        .outputFluids('gtceu:iron_cyclopentadienyl_dichlorobenzene 1000', 'gtceu:hydrochloric_acid 1000', 'water 1000')
        .duration(200)
        .EUtVA(LuV);

    event.recipes.gtceu
        .large_chemical_reactor(id('fluorinated_ferrocene'))
        .inputFluids('gtceu:iron_cyclopentadienyl_dichlorobenzene 1000', 'gtceu:fluorine 1000')
        .outputFluids('gtceu:fluorinated_ferrocene 1000', 'gtceu:dichlorobenzene 1000')
        .duration(200)
        .EUtVA(LuV);

    event.recipes.gtceu
        .large_chemical_reactor(id('ferrocenium_superoxide'))
        .inputFluids('gtceu:fluorinated_ferrocene 1000', 'gtceu:oxygen 1000')
        .outputFluids('gtceu:ferrocenium_superoxide 1000')
        .duration(200)
        .EUtVA(ZPM);

    event.recipes.gtceu
        .modular_rocket_module(id('rocket_fuel'))
        .inputFluids('gtceu:rocket_fuel 1')
        .duration(160)
        .EUt(-32);

    event.recipes.gtceu.modular_rocket_module(id('rp_1')).inputFluids('gtceu:rp_1 1').duration(240).EUt(-32);

    event.recipes.gtceu
        .modular_rocket_module(id('monomethylhydrazine'))
        .inputFluids('gtceu:monomethylhydrazine 1')
        .duration(400)
        .EUt(-32);

    event.recipes.gtceu
        .modular_rocket_module(id('sorbitol_hypergolic_fuel'))
        .inputFluids('gtceu:sorbitol_hypergolic_fuel 1')
        .duration(640)
        .EUt(-32);
});
