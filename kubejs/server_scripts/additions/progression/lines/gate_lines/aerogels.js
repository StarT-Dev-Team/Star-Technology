ServerEvents.recipes((event) => {
    const id = global.id;

    //dust removal
    event.remove({ output: 'gtceu:aerogel_dust' });
    event.remove({ input: 'gtceu:aerogel_dust' });

    event.recipes.gtceu
        .large_chemical_reactor(id('linoleic_acid_seed'))
        .inputFluids('gtceu:seed_oil 1000', 'gtceu:steam 3000')
        .outputFluids('gtceu:glycerol 1000', 'gtceu:linoleic_acid 3000')
        .duration(800)
        .EUtVA(EV);

    event.recipes.gtceu
        .large_chemical_reactor(id('linoleic_acid_fish'))
        .inputFluids('gtceu:fish_oil 1000', 'gtceu:steam 3000')
        .outputFluids('gtceu:linoleic_acid 3000', 'gtceu:glycerol 1000')
        .duration(800)
        .EUtVA(EV);

    event.recipes.gtceu
        .large_chemical_reactor(id('sodium_linoleate_dust'))
        .itemInputs('gtceu:sodium_hydroxide_dust')
        .inputFluids('gtceu:linoleic_acid 1000')
        .itemOutputs('gtceu:sodium_linoleate_dust')
        .duration(840)
        .EUtVA(IV);

    event.recipes.gtceu
        .large_chemical_reactor(id('aerogel_solvent_mixture'))
        .itemInputs('gtceu:small_sodium_linoleate_dust')
        .inputFluids('gtceu:ethanol 6000', 'minecraft:water 2000')
        .outputFluids('gtceu:aerogel_solvent_mixture 4000')
        .duration(960)
        .EUtVA(IV);

    event.recipes.gtceu
        .large_chemical_reactor(id('silicon_tetrachloride'))
        .itemInputs('gtceu:silicon_dust')
        .inputFluids('gtceu:chlorine 4000')
        .outputFluids('gtceu:silicon_tetrachloride 1000')
        .duration(160)
        .circuit(0)
        .EUtVA(LuV);

    event.recipes.gtceu
        .large_chemical_reactor(id('tetraethyl_orthosilicate'))
        .inputFluids('gtceu:ethanol 4000', 'gtceu:silicon_tetrachloride 1000')
        .outputFluids('gtceu:tetraethyl_orthosilicate 1000')
        .duration(480)
        .EUtVA(LuV);

    event.recipes.gtceu
        .large_chemical_reactor(id('aerogel_precursor_solution'))
        .inputFluids(
            'gtceu:aerogel_solvent_mixture 3000',
            'gtceu:tetraethyl_orthosilicate 1000',
            'gtceu:hydrochloric_acid 1000'
        )
        .outputFluids('gtceu:aerogel_precursor_solution 1728', 'gtceu:diluted_hydrochloric_acid 1000')
        .duration(240)
        .EUtVHA(ZPM);

    event.recipes.gtceu
        .fluid_solidifier(id('wet_aerogel_ingot'))
        .notConsumable('gtceu:ingot_casting_mold')
        .inputFluids('gtceu:aerogel_precursor_solution 144')
        .itemOutputs('kubejs:wet_aerogel_ingot')
        .duration(20)
        .EUt(7);

    event.recipes.gtceu
        .vacuum_chemical_reaction_chamber(id('aerogel_ingot'))
        .itemInputs('kubejs:wet_aerogel_ingot')
        .inputFluids('gtceu:air 5000')
        .outputFluids('gtceu:ethanol 50', 'minecraft:water 500')
        .itemOutputs('gtceu:aerogel_ingot')
        .duration(240)
        .EUtVHA(LuV)
        .vacuumLevel(80);
});
