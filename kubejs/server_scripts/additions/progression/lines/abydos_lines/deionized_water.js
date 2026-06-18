ServerEvents.recipes((event) => {
    const id = global.id;

    let LCR = event.recipes.gtceu.large_chemical_reactor;
    let chemBath = event.recipes.gtceu.chemical_bath;
    let cycSifter = event.recipes.gtceu.cyclonic_sifter;
    let beads = 'ion_exchange_resin_beads';

    LCR(id('divinylbenzene'))
        .inputFluids('gtceu:benzene 1000', 'gtceu:ethylene 2000')
        .outputFluids('gtceu:divinylbenzene 1000', 'gtceu:hydrogen 4000')
        .duration(80)
        .circuit(2)
        .EUt(GTValues.VA[GTValues.LuV]);

    LCR(id(`dry_${beads}`))
        .inputFluids('gtceu:styrene 10000', 'gtceu:oxygen 10000', 'gtceu:divinylbenzene 1000')
        .itemOutputs(`40x kubejs:dry_${beads}`)
        .duration(480)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    chemBath(id(beads))
        .inputFluids('gtceu:distilled_water 1000')
        .itemInputs(`5x kubejs:dry_${beads}`)
        .itemOutputs(`5x kubejs:${beads}`)
        .duration(50)
        .EUt(GTValues.VHA[GTValues.LuV]);

    cycSifter(id('purified_water_carbon'))
        .chancedInput('1x gtceu:carbon_fiber_mesh', 2500, -250)
        .inputFluids('gtceu:distilled_water 40000')
        .outputFluids('gtceu:purified_water 20000')
        .duration(720)
        .EUt(GTValues.VA[GTValues.ZPM]);

    cycSifter(id('purified_water_netherite'))
        .chancedInput('1x kubejs:netherite_reinforced_mesh', 1000, -250)
        .inputFluids('gtceu:distilled_water 60000')
        .outputFluids('gtceu:purified_water 40000')
        .duration(640)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu
        .vacuum_chemical_reaction_chamber(id('acidic_water'))
        .inputFluids('gtceu:purified_water 50000')
        .itemInputs(`20x kubejs:${beads}`)
        .outputFluids('gtceu:acidic_water 50000')
        .itemOutputs(`10x kubejs:dirty_${beads}`)
        .chancedOutput(`10x kubejs:dirty_${beads}`, 6000, 1000)
        .duration(128)
        .EUt(GTValues.VHA[GTValues.UV])
        .vacuumLevel(85);

    event.recipes.gtceu
        .distillation_tower(id('deionized_water'))
        .inputFluids('gtceu:acidic_water 24000')
        .outputFluids('gtceu:deionized_water 18000', 'gtceu:purified_water 4000', 'gtceu:distilled_water 2000')
        .duration(160)
        .disableDistilleryRecipes(true)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    chemBath(id(`dry_${beads}`))
        .inputFluids('gtceu:sulfuric_acid 125')
        .itemInputs(`4x kubejs:dirty_${beads}`)
        .itemOutputs(`4x kubejs:dry_${beads}`)
        .duration(85)
        .EUt(GTValues.VHA[GTValues.LuV]);
});
