// packmode: hard

ServerEvents.recipes((event) => {
    const id = global.id;

    // Sifting

    // Primitive

    const primSifter = (input, mesh, output, scaler) => {
        event.recipes.gtceu
            .primitive_sifter(id(`${output.split(':')[1]}`))
            .itemInputs(`64x ${input}`)
            .chancedInput(`exnihilosequentia:${mesh}_mesh`, 10, 0)
            .itemOutputs(`${scaler}x ${output}`)
            .duration(1600)
            .EUt(30);
    };
    primSifter('minecraft:sand', 'string', 'minecraft:lapis_lazuli', 10);
    primSifter('minecraft:sand', 'flint', 'minecraft:amethyst_shard', 5);
    primSifter('minecraft:sand', 'iron', 'minecraft:diamond', 3);
    primSifter('exnihilosequentia:dust', 'string', 'minecraft:coal', 10);
    primSifter('exnihilosequentia:dust', 'flint', 'minecraft:redstone', 5);
    primSifter('exnihilosequentia:dust', 'iron', 'minecraft:ender_pearl', 3);

    // Refined Sediment Refinement

    const sedimentRefining = (modId, type) => {
        event.recipes.gtceu
            .sifter(id(`refined_${type}`))
            .itemInputs(`${modId}:${type}`)
            .chancedOutput(`kubejs:refined_${type}`, 9000, 0)
            .chancedOutput(`${modId}:${type}`, 800, 0)
            .chancedOutput('gtceu:quartz_sand_dust', 200, 0)
            .duration(60)
            .EUt(GTValues.VHA[GTValues.LV]);
    };

    sedimentRefining('minecraft', 'sand');
    sedimentRefining('exnihilosequentia', 'dust');

    // Processing

    const sedimentProcessing = (type, outputs) => {
        event.recipes.gtceu
            .electric_sifter(id(`refined_${type}_processing`))
            .itemInputs(`32x kubejs:refined_${type}`)
            .chancedInput('exnihilosequentia:iron_mesh', 10, 0)
            .itemOutputs(outputs)
            .duration(1120)
            .EUt(GTValues.VA[GTValues.LV]);
    };

    sedimentProcessing('sand', [
        '16x minecraft:quartz',
        '12x minecraft:lapis_lazuli',
        '8x minecraft:amethyst_shard',
        '4x minecraft:diamond',
    ]);
    sedimentProcessing('dust', [
        '16x minecraft:glowstone_dust',
        '12x minecraft:redstone',
        '8x gtceu:sulfur_dust',
        '4x minecraft:ender_pearl',
    ]);

    // Sieving

    const mechanicalSieving = (input, output1, output2, output3) => {
        event.recipes.gtceu
            .mechanical_sieve(id(`crushed_${input}_mechanical_sieve`))
            .itemInputs(`32x exnihilosequentia:crushed_${input}`)
            .chancedInput('exnihilosequentia:iron_mesh', 10, 0)
            .itemOutputs(
                `16x gtceu:crushed_${output1}_ore`,
                `8x gtceu:crushed_${output2}_ore`,
                `4x gtceu:crushed_${output3}_ore`
            )
            .duration(960)
            .EUt(GTValues.VA[GTValues.LV]);
    };

    mechanicalSieving('andesite', 'sphalerite', 'cassiterite', 'magnetite');
    mechanicalSieving('diorite', 'chalcopyrite', 'galena', 'hematite');
    mechanicalSieving('granite', 'cassiterite', 'magnetite', 'pyrite');
    mechanicalSieving('basalt', 'pyrite', 'hematite', 'sphalerite');
    mechanicalSieving('tuff', 'hematite', 'chalcopyrite', 'galena');
    mechanicalSieving('blackstone', 'magnetite', 'sphalerite', 'chalcopyrite');
    mechanicalSieving('deepslate', 'galena', 'pyrite', 'cassiterite');
});
