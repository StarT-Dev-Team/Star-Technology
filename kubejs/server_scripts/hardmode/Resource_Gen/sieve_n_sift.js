ServerEvents.recipes((event) => {
    const id = global.id;

    // Sifting

    // Primitive

    const PrimSifter = (input, mesh, output, scaler) => {
        event.recipes.gtceu
            .primitive_sifter(id(`${output.split(':')[1]}`))
            .itemInputs(`64x ${input}`)
            .chancedInput(`exnihilosequentia:${mesh}_mesh`, 10, 0)
            .itemOutputs(`${scaler}x ${output}`)
            .duration(1600)
            .EUt(30);
    };
    PrimSifter('minecraft:sand', 'string', 'minecraft:lapis_lazuli', 10);
    PrimSifter('minecraft:sand', 'flint', 'minecraft:amethyst_shard', 5);
    PrimSifter('minecraft:sand', 'iron', 'minecraft:diamond', 3);
    PrimSifter('exnihilosequentia:dust', 'string', 'minecraft:coal', 10);
    PrimSifter('exnihilosequentia:dust', 'flint', 'minecraft:redstone', 5);
    PrimSifter('exnihilosequentia:dust', 'iron', 'minecraft:ender_pearl', 3);

    // Refined Sediment Refinement

    const SedimentRefining = (mod_id, type) => {
        event.recipes.gtceu
            .sifter(id(`refined_${type}`))
            .itemInputs(`${mod_id}:${type}`)
            .chancedOutput(`kubejs:refined_${type}`, 9000, 0)
            .chancedOutput(`${mod_id}:${type}`, 800, 0)
            .chancedOutput('gtceu:quartz_sand_dust', 200, 0)
            .duration(60)
            .EUt(GTValues.VHA[GTValues.LV]);
    };

    SedimentRefining('minecraft', 'sand');
    SedimentRefining('exnihilosequentia', 'dust');

    // Processing

    const SedimentProcessing = (type, outputs) => {
        event.recipes.gtceu
            .electric_sifter(id(`refined_${type}_processing`))
            .itemInputs(`32x kubejs:refined_${type}`)
            .chancedInput('exnihilosequentia:iron_mesh', 10, 0)
            .itemOutputs(outputs)
            .duration(1120)
            .EUt(GTValues.VA[GTValues.LV]);
    };

    SedimentProcessing('sand', [
        '16x minecraft:quartz',
        '12x minecraft:lapis_lazuli',
        '8x minecraft:amethyst_shard',
        '4x minecraft:diamond',
    ]);
    SedimentProcessing('dust', [
        '16x minecraft:glowstone_dust',
        '12x minecraft:redstone',
        '8x gtceu:sulfur_dust',
        '4x minecraft:ender_pearl',
    ]);

    // Sieving

    const MechanicalSieving = (input, output1, output2, output3) => {
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

    MechanicalSieving('andesite', 'sphalerite', 'cassiterite', 'magnetite');
    MechanicalSieving('diorite', 'chalcopyrite', 'galena', 'hematite');
    MechanicalSieving('granite', 'cassiterite', 'magnetite', 'pyrite');
    MechanicalSieving('basalt', 'pyrite', 'hematite', 'sphalerite');
    MechanicalSieving('tuff', 'hematite', 'chalcopyrite', 'galena');
    MechanicalSieving('blackstone', 'magnetite', 'sphalerite', 'chalcopyrite');
    MechanicalSieving('deepslate', 'galena', 'pyrite', 'cassiterite');
});
