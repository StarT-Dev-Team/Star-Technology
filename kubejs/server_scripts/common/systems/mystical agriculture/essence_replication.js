ServerEvents.recipes((event) => {
    const id = global.id;

    const dust1 = 'mysticalagriculture:inferium_essence';
    const dust2 = 'mysticalagriculture:prudentium_essence';
    const dust3 = 'mysticalagriculture:tertium_essence';
    const dust4 = 'mysticalagriculture:imperium_essence';
    const dust5 = 'mysticalagriculture:supremium_essence';
    const dust6 = 'mysticalagriculture:awakened_supremium_essence';

    event.recipes.gtceu
        .essence_replication(id('inferium'))
        .notConsumable(dust1)
        .chancedOutput(dust1, 7500, 400)
        .duration(2500)
        .EUt(20);

    event.recipes.gtceu
        .essence_replication(id('prudentium_a'))
        .notConsumable(dust2)
        .inputFluids('gtceu:12_crown_4_li 10')
        .chancedOutput(dust2, 6000, 500)
        .outputFluids('gtceu:12_crown_4 10')
        .duration(2500)
        .EUt(80);

    event.recipes.gtceu
        .essence_replication(id('prudentium_b'))
        .notConsumable(dust2)
        .inputFluids('gtceu:cryptand_na 1')
        .chancedOutput(dust2, 7500, 1000)
        .outputFluids('gtceu:cryptand 1')
        .duration(2500)
        .EUt(80);

    event.recipes.gtceu
        .essence_replication(id('tertium_a'))
        .notConsumable(dust3)
        .inputFluids('gtceu:12_crown_4_li 10')
        .chancedOutput(dust3, 4000, 400)
        .outputFluids('gtceu:12_crown_4 10')
        .duration(2500)
        .EUt(400);

    event.recipes.gtceu
        .essence_replication(id('tertium_b'))
        .notConsumable(dust3)
        .inputFluids('gtceu:cryptand_li 1')
        .chancedOutput(dust3, 5500, 1000)
        .outputFluids('gtceu:cryptand 1')
        .duration(2500)
        .EUt(400);

    event.recipes.gtceu
        .essence_replication(id('imperium_a'))
        .notConsumable(dust4)
        .inputFluids('gtceu:15_crown_5_na 10')
        .chancedOutput(dust4, 3000, 400)
        .outputFluids('gtceu:15_crown_5 10')
        .duration(2500)
        .EUt(1024);

    event.recipes.gtceu
        .essence_replication(id('imperium_b'))
        .notConsumable(dust4)
        .inputFluids('gtceu:cryptand_na 1')
        .chancedOutput(dust4, 4500, 1000)
        .outputFluids('gtceu:cryptand 1')
        .duration(2500)
        .EUt(1024);

    event.recipes.gtceu
        .essence_replication(id('supremium_a'))
        .notConsumable(dust5)
        .inputFluids('gtceu:15_crown_5_na 10')
        .chancedOutput(dust5, 2000, 400)
        .outputFluids('gtceu:15_crown_5 10')
        .duration(2500)
        .EUt(6400);

    event.recipes.gtceu
        .essence_replication(id('supremium_b'))
        .notConsumable(dust5)
        .inputFluids('gtceu:cryptand_na 1')
        .chancedOutput(dust5, 3500, 1000)
        .outputFluids('gtceu:cryptand 1')
        .duration(2500)
        .EUt(6400);

    event.recipes.gtceu
        .essence_replication(id('awakened_supremium_a'))
        .notConsumable(dust6)
        .inputFluids('gtceu:18_crown_6_k 10')
        .chancedOutput(dust6, 1000, 400)
        .outputFluids('gtceu:18_crown_6 10')
        .duration(2500)
        .EUt(15000);

    event.recipes.gtceu
        .essence_replication(id('awakened_supremium_b'))
        .notConsumable(dust6)
        .inputFluids('gtceu:cryptand_k 1')
        .chancedOutput(dust6, 2500, 1000)
        .outputFluids('gtceu:cryptand 1')
        .duration(2500)
        .EUt(15000);
});
