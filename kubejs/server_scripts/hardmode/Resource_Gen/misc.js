// packmode: hard

ServerEvents.recipes((event) => {
    const id = global.id;

    event.remove({ id: 'gtceu:centrifuge/lava_separation' });
    event.recipes.gtceu
        .centrifuge(id('lava_separation'))
        .inputFluids('minecraft:lava 500')
        .chancedOutput('gtceu:silicon_dioxide_dust', 1750, 100)
        .chancedOutput('gtceu:quicklime_dust', 1500, 75)
        .chancedOutput('gtceu:magnesia_dust', 1350, 60)
        .chancedOutput('gtceu:stone_dust', 1200, 50)
        .chancedOutput('gtceu:pyrolusite_dust', 800, 35)
        .chancedOutput('minecraft:gold_nugget', 350, 25)
        .outputFluids('gtceu:molten_waste 20')
        .duration(400)
        .EUt(30);

    event.remove({ id: 'gtceu:centrifuge/ash_separation' });
    event.recipes.gtceu
        .centrifuge(id('ash_separation'))
        .itemInputs('gtceu:ash_dust')
        .chancedOutput('gtceu:quicklime_dust', 4500, 0)
        .chancedOutput('gtceu:potash_dust', 1800, 0)
        .chancedOutput('gtceu:phosphorus_pentoxide_dust', 850, 0)
        .chancedOutput('gtceu:magnesia_dust', 700, 0)
        .chancedOutput('gtceu:hematite_dust', 450, 0)
        .chancedOutput('gtceu:silicon_dioxide_dust', 200, 0)
        .duration(240)
        .EUt(30);

    event.remove({ type: 'gtceu:electric_blast_furnace', output: 'gtceu:aluminium_nugget' });
    [
        'distillation_tower/distill_fish_oil',
        'distillation_tower/distill_seed_oil',
        'distillation_tower/distill_creosote',
        'distillery/distill_fish_oil_to_lubricant',
        'distillery/distill_seed_oil_to_lubricant',
        'distillery/distill_creosote_to_lubricant',
    ].forEach((gtID) => {
        event.remove({ id: `gtceu:${gtID}` });
    });
    [
        'minecraft:diorite',
        'gtceu:alloy_smelter/diorite',
        'minecraft:granite',
        'gtceu:alloy_smelter/granite',
        'minecraft:andesite',
        'gtceu:alloy_smelter/andesite',
    ].forEach((stoneID) => {
        event.remove({ id: stoneID });
    });

    ['diorite', 'andesite', 'granite'].forEach((stoneType) => {
        event.recipes.create
            .mixing(`1x minecraft:${stoneType}`, [`exnihilosequentia:crushed_${stoneType}`, 'gtceu:stone_dust'])
            .heatRequirement('superheated')
            .id(`start:create_mixer/${stoneType}`);
    });
});
