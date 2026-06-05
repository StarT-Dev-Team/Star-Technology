// packmode: hard

ServerEvents.recipes((event) => {
    [
        /^gtceu:.*flisnt.*/,
        /^gtceu:shapeless.*_planks/,
        /^exnihilosequentia:crushing.*/,
        /^gtceu:shaped.plate/,
        // [^(?!^rubber$)] <- rubber sheet recipe is kjs and other rubbers is solidifier and bender only, wood is compressor for treated and crafting for regular
        /^gtceu:shaped.ring.*[^(?!^rubber$)]/,
        /^gtceu:shaped.stick.*[^(?!^.*_rubber_.*$)]/,
        // poly rubbers and other rubbers are being wierd but you have solidifier by the time you get to pvc/ptfe so :3
        /^gtceu:shaped\/.*_wire_single/,
        /^gtceu:shapeless.fine.*/,
        /^gtceu:shaped.screw_.*/,
        /^gtceu:shaped.*gear.*/,
        /^gtceu:shaped.bolt.*/,
        /^gtceu:shaped.rotor.*/,
        /^gtceu:shaped.spring.*/,
        /^gtceu:shaped.*pipe.*/,
        /^gtceu:shaped.foil.*/,
        /^gtceu:shapeless.*cable.*/,
        /^gtceu:shaped.buzzsaw.*/,
        /^gtceu:shaped.round.*/,
        // plates -> single and double, stick -> long and short rod, gear -> both small and normal, pipe -> exclusion of quad and non dont work, all pipes + constricting, cable-> just a sweep on all cable crafting table recipie
        /^farmersdelight:.*knife/,
        /^create:crafting.*cogwheel.*/,
        'create:crafting/kinetics/shaft',
        'create:crafting/kinetics/belt_connector',
        'create:crafting/kinetics/mechanical_piston',
        'gtceu:shaped/iron_wire_single',
        'create:splashing/soul_sand',
        'minecraft:cookie',
        'create:crafting/appliances/chain_from_zinc',
        'minecraft:target',
    ].forEach((id) => event.remove({ id: id }));

    ['#minecraft:leaves', 'exnihilosequentia:infested_leaves'].forEach((input) =>
        event.remove({ type: 'exnihilosequentia:harvest', input: input })
    );

    [
        'exnihilosequentia:silkworm',
        'exnihilosequentia:stone_barrel',
        '#exnihilosequentia:crook',
        '#exnihilosequentia:hammer',
        'create:zinc_ingot',
    ].forEach((output) => event.remove({ output: output }));

    ['minecraft:enchantment', 'exnihilosequentia:sifting'].forEach((type) => event.remove({ type: type }));

    event.remove({ input: /^exnihilosequentia:.*_pebble/ });
    event.remove({ output: 'exnihilosequentia:unfired_crucible' });
    event.remove({ mod: 'colossalchests' });
    event.remove({ mod: 'pipez' });

    event.replaceInput({ input: 'minecraft:string' }, 'minecraft:string', '#forge:string');

    ['iron', 'gold', 'copper', 'tin', 'lead', 'platinum', 'aluminum'].forEach((ore) => {
        let GT_id = ore === 'aluminum' ? 'aluminium' : ore;
        event.replaceOutput(
            { output: `create:crushed_raw_${ore}` },
            `create:crushed_raw_${ore}`,
            `gtceu:crushed_${GT_id}_ore`
        );
    });

    event.remove({ type: 'create:cutting' });
});
