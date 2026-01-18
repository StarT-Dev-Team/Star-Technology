StartupEvents.registry('item', event => {

    [{type: 'Fire', color: 'c'}, {type: 'Ice', color: 'b'}, {type: 'Earth', color: '8'}, {type: 'Lightning', color: 'e'}].forEach(shard => {
        const { type, color } = shard;
        event.create(`${type.toLowerCase()}_infused_shard`)
            .tooltip(`§${color}?§e✧§${color}?`)
            .texture(`kubejs:item/resource_gen/lines/netherstar/${type.toLowerCase()}_infused_shard`)
            .glow(true);
    });

    event.create('star_casting_mold')
        .texture('kubejs:item/resource_gen/lines/netherstar/star_casting_mold');
    
    event.create('impure_nether_star')
        .tooltip('§e✧-')
        .texture('kubejs:item/resource_gen/lines/netherstar/impure_nether_star');

    event.create('nether_star_shard')
        .tooltip('§e✧')
        .texture('kubejs:item/resource_gen/lines/netherstar/nether_star_shard');
        
    event.create('energized_nether_star_shard')
        .tooltip('§e✧+')
        .texture('kubejs:item/resource_gen/lines/netherstar/energized_nether_star_shard')
        .glow(true);

    event.create('nether_tempered_shard')
        .tooltip('§e✧++')
        .texture('kubejs:item/resource_gen/lines/netherstar/nether_tempered_shard')
        .glow(true);
    
});