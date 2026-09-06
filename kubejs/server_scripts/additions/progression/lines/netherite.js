ServerEvents.recipes((event) => {
    const id = global.id;

    event.recipes.gtceu
        .electric_blast_furnace(id('netherite'))
        .itemInputs('gtceu:debris_dust', 'minecraft:gold_ingot')
        .inputFluids('gtceu:argon 100')
        .itemOutputs('minecraft:netherite_ingot')
        .blastFurnaceTemp(3300)
        .duration(6000)
        .EUt(1890);

    event.remove({ id: 'gtceu:centrifuge/netherrack_separation' });

    event.recipes.gtceu
        .centrifuge(id('netherrack_centrifuging'))
        .itemInputs('gtceu:netherrack_dust')
        .chancedOutput('minecraft:redstone', 6250, 95)
        .chancedOutput('gtceu:gold_dust', 70, 15)
        .chancedOutput('gtceu:sulfur_dust', 2475, 25)
        .chancedOutput('gtceu:coal_dust', 625, 95)
        .chancedOutput('gtceu:small_debris_dust', 50, 50)
        .EUt(20)
        .duration(160);

    event.recipes.gtceu
        .large_chemical_reactor(id('purified_debris_dust'))
        .itemInputs('2x gtceu:debris_dust')
        .inputFluids('gtceu:chlorine_trifluoride 250', 'gtceu:hydrogen_sulfide 125')
        .itemOutputs('2x gtceu:purified_debris_dust', '2x gtceu:small_titanium_trifluoride_dust')
        .outputFluids('gtceu:sulfur_dichloride 125', 'gtceu:hydrofluoric_acid 250', 'gtceu:fluorine 125')
        .chancedOutput('2x gtceu:small_purified_debris_dust', 2800, 900)
        .duration(400)
        .EUt(6500);

    event.recipes.gtceu
        .chemical_bath(id('pure_netherite'))
        .itemInputs('gtceu:purified_debris_dust')
        .inputFluids('gtceu:tetrachloroethylene 100')
        .itemOutputs('gtceu:pure_netherite_dust')
        .duration(200)
        .EUt(20450);

    event.recipes.gtceu
        .chemical_reactor(id('chlorine_trifluoride'))
        .inputFluids('gtceu:chlorine 1000', 'gtceu:fluorine 3000')
        .outputFluids('gtceu:chlorine_trifluoride 1000')
        .duration(800)
        .EUt(22);

    event.recipes.gtceu
        .large_chemical_reactor(id('chlorine_trifluoride'))
        .inputFluids('gtceu:chlorine 1000', 'gtceu:fluorine 3000')
        .outputFluids('gtceu:chlorine_trifluoride 1000')
        .duration(800)
        .EUt(22);

    event.recipes.gtceu
        .chemical_reactor(id('dichloroethane'))
        .inputFluids('gtceu:ethane 1000', 'gtceu:chlorine 4000')
        .outputFluids('gtceu:dichloroethane 1000', 'gtceu:hydrochloric_acid 2000')
        .duration(200)
        .EUt(120)
        .circuit(1);

    event.recipes.gtceu
        .large_chemical_reactor(id('dichloroethane'))
        .inputFluids('gtceu:ethane 1000', 'gtceu:chlorine 4000')
        .outputFluids('gtceu:dichloroethane 1000', 'gtceu:hydrochloric_acid 2000')
        .duration(200)
        .EUt(120)
        .circuit(1);

    event.recipes.gtceu
        .chemical_reactor(id('tetrachloroetylene'))
        .inputFluids('gtceu:dichloroethane', 'gtceu:chlorine 6000')
        .outputFluids('gtceu:tetrachloroethylene 1000', 'gtceu:hydrochloric_acid 4000')
        .duration(600)
        .EUt(200);

    event.recipes.gtceu
        .large_chemical_reactor(id('tetrachloroetylene'))
        .inputFluids('gtceu:dichloroethane', 'gtceu:chlorine 6000')
        .outputFluids('gtceu:tetrachloroethylene 1000', 'gtceu:hydrochloric_acid 4000')
        .duration(600)
        .EUt(200);
});
