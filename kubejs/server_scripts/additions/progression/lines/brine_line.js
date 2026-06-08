ServerEvents.recipes((event) => {
    const id = global.id;

    event.recipes.gtceu
        .fluid_heater(id('brines'))
        .inputFluids('gtceu:salt_water 100000')
        .outputFluids('gtceu:raw_brine 4500', 'gtceu:hot_brine 500')
        .duration(6000)
        .EUt(GTValues.VHA[GTValues.HV]);

    event.recipes.gtceu
        .fluid_heater(id('hot_brine'))
        .inputFluids('gtceu:raw_brine 1000')
        .outputFluids('gtceu:hot_brine 1000')
        .duration(1500)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu
        .chemical_reactor(id('brine_chlorination'))
        .inputFluids('gtceu:hot_brine 1000', 'gtceu:chlorine 1000')
        .outputFluids('gtceu:hot_chlorinated_brominated_brine 2000')
        .duration(100)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu
        .large_chemical_reactor(id('brine_chlorination'))
        .inputFluids('gtceu:hot_brine 1000', 'gtceu:chlorine 1000')
        .outputFluids('gtceu:hot_chlorinated_brominated_brine 2000')
        .duration(100)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu
        .chemical_reactor(id('brine_filtration'))
        .inputFluids('gtceu:hot_chlorinated_brominated_brine 1000', 'gtceu:chlorine 1000', 'gtceu:steam 1000')
        .outputFluids('gtceu:hot_alkaline_debrominated_brine 1000', 'gtceu:brominated_chlorine_vapor 2000')
        .duration(300)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu
        .large_chemical_reactor(id('brine_filtration'))
        .inputFluids('gtceu:hot_chlorinated_brominated_brine 1000', 'gtceu:chlorine 1000', 'gtceu:steam 1000')
        .outputFluids('gtceu:hot_alkaline_debrominated_brine 1000', 'gtceu:brominated_chlorine_vapor 2000')
        .duration(300)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu
        .chemical_reactor(id('brominated_chlorine_vapor_condensation'))
        .inputFluids('gtceu:brominated_chlorine_vapor 1000', 'minecraft:water 1000')
        .outputFluids('gtceu:acidic_bromine_solution 1000', 'minecraft:water 1000')
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu
        .large_chemical_reactor(id('brominated_chlorine_vapor_condensation'))
        .inputFluids('gtceu:brominated_chlorine_vapor 1000', 'minecraft:water 1000')
        .outputFluids('gtceu:acidic_bromine_solution 1000', 'minecraft:water 1000')
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu
        .chemical_reactor(id('bromine_vapor_concentration'))
        .inputFluids('gtceu:acidic_bromine_solution 1000', 'gtceu:steam 1000')
        .outputFluids('gtceu:concentrated_bromine_solution 1000', 'gtceu:acidic_bromine_exhaust 1000')
        .duration(100)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu
        .large_chemical_reactor(id('bromine_vapor_concentration'))
        .inputFluids('gtceu:acidic_bromine_solution 1000', 'gtceu:steam 1000')
        .outputFluids('gtceu:concentrated_bromine_solution 1000', 'gtceu:acidic_bromine_exhaust 1000')
        .duration(100)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu
        .distillation_tower(id('bromine_distillation'))
        .inputFluids('gtceu:concentrated_bromine_solution 1000')
        .outputFluids('gtceu:chlorine 500', 'gtceu:bromine 1000')
        .duration(500)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu
        .chemical_reactor(id('brine_neutralization'))
        .inputFluids('gtceu:hot_alkaline_debrominated_brine 3000')
        .itemInputs('gtceu:potassium_dust')
        .outputFluids('gtceu:hot_debrominated_brine 2000')
        .itemOutputs('2x gtceu:rock_salt_dust')
        .duration(100)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu
        .large_chemical_reactor(id('brine_neutralization'))
        .inputFluids('gtceu:hot_alkaline_debrominated_brine 3000')
        .itemInputs('gtceu:potassium_dust')
        .outputFluids('gtceu:hot_debrominated_brine 2000')
        .itemOutputs('2x gtceu:rock_salt_dust')
        .duration(100)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu
        .chemical_reactor(id('debrominated_brine_raw_brine_mixing'))
        .inputFluids('gtceu:raw_brine 1000', 'gtceu:hot_debrominated_brine 1000')
        .outputFluids('gtceu:hot_brine 1000', 'gtceu:debrominated_brine 1000')
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu
        .large_chemical_reactor(id('debrominated_brine_raw_brine_mixing'))
        .inputFluids('gtceu:raw_brine 1000', 'gtceu:hot_debrominated_brine 1000')
        .outputFluids('gtceu:hot_brine 1000', 'gtceu:debrominated_brine 1000')
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu
        .chemical_reactor(id('acidic_bromine_exhaust_heating'))
        .inputFluids('gtceu:acidic_bromine_exhaust 1000', 'gtceu:hot_brine 1000')
        .outputFluids('gtceu:hot_chlorinated_brominated_brine 1000', 'gtceu:steam 3000')
        .duration(100)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu
        .large_chemical_reactor(id('acidic_bromine_exhaust_heating'))
        .inputFluids('gtceu:acidic_bromine_exhaust 1000', 'gtceu:hot_brine 1000')
        .outputFluids('gtceu:hot_chlorinated_brominated_brine 1000', 'gtceu:steam 3000')
        .duration(100)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu
        .centrifuge(id('debrominated_brine_decomposition'))
        .inputFluids('gtceu:debrominated_brine 2000')
        .outputFluids('gtceu:salt_water 1000')
        .duration(60)
        .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu
        .chemical_reactor(id('brine_acidification'))
        .inputFluids('gtceu:hot_brine 2000', 'gtceu:hydrochloric_acid 1000')
        .outputFluids('gtceu:hot_alkaline_debrominated_brine 2000', 'gtceu:hydrogen_iodide 1000')
        .duration(100)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu
        .large_chemical_reactor(id('brine_acidification'))
        .inputFluids('gtceu:hot_brine 2000', 'gtceu:hydrochloric_acid 1000')
        .outputFluids('gtceu:hot_alkaline_debrominated_brine 2000', 'gtceu:hydrogen_iodide 1000')
        .duration(100)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu
        .chemical_reactor(id('iodine'))
        .inputFluids('gtceu:hydrogen_iodide 2000', 'gtceu:oxygen 1000')
        .itemOutputs('gtceu:iodine_dust')
        .outputFluids('minecraft:water 1000')
        .duration(1000)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu
        .large_chemical_reactor(id('iodine'))
        .inputFluids('gtceu:hydrogen_iodide 2000', 'gtceu:oxygen 1000')
        .itemOutputs('gtceu:iodine_dust')
        .outputFluids('minecraft:water 1000')
        .duration(1000)
        .EUt(GTValues.VA[GTValues.HV]);
});
