ServerEvents.recipes((event) => {
    const id = global.id;

    event.remove({ mod: 'laserio', not: { id: /laserio:.*nbtclear/ } });

    event.recipes.gtceu
        .shaped('8x laserio:logic_chip_raw', ['BFB', 'DQD', 'BFB'], {
            B: 'gtceu:gold_bolt',
            F: 'gtceu:fine_red_alloy_wire',
            D: 'gtceu:clay_dust_block',
            Q: 'minecraft:quartz_block',
        })
        .addMaterialInfo()
        .id(id('logic_chip_raw'));

    event.smelting('laserio:logic_chip_raw', 'laserio:logic_chip', 100).xp(1).id(id('logic_chip'));

    event.recipes.gtceu
        .shaped('laserio:laser_connector', [' P ', 'GCG', 'III'], {
            P: 'minecraft:ender_pearl',
            G: 'forge:glass_panes',
            C: 'laserio:logic_chip',
            I: 'gtceu:iron_plate',
        })
        .addMaterialInfo()
        .id(id('laser_connector'));

    event.recipes.gtceu
        .shaped('laserio:laser_connector_advanced', ['DPD', 'GCG', 'ggg'], {
            P: 'minecraft:ender_pearl',
            D: 'minecraft:diamond',
            G: 'forge:glass_panes',
            C: 'laserio:laser_connector',
            g: 'gtceu:gold_plate',
        })
        .addMaterialInfo()
        .id(id('laser_connector_advanced'));

    event.recipes.gtceu
        .shaped('laserio:laser_node', ['PGP', 'GCG', 'PGP'], {
            P: 'gtceu:iron_plate',
            G: 'forge:glass_panes',
            C: 'laserio:laser_connector',
        })
        .addMaterialInfo()
        .id(id('laser_node'));

    [
        { card: 'card_item', outer: 'minecraft:emerald', inner: 'gtceu:brass_plate' },
        { card: 'card_fluid', outer: 'minecraft:lapis_lazuli', inner: 'minecraft:bucket' },
        { card: 'card_energy', outer: 'minecraft:glowstone_dust', inner: 'gtceu:soul_infused_plate' },
        { card: 'card_redstone', outer: 'minecraft:redstone', inner: 'gtceu:red_alloy_plate' },
    ].forEach((card) => {
        event.recipes.gtceu
            .shaped(`laserio:${card.card}`, ['OIO', 'FCF', 'BfB'], {
                O: card.outer,
                I: card.inner,
                F: 'gtceu:zinc_foil',
                C: 'laserio:laser_connector',
                B: 'gtceu:brass_bolt',
                f: 'gtceu:fine_red_alloy_wire',
            })
            .addMaterialInfo()
            .id(id(card.card));
    });

    event.recipes.gtceu
        .shaped('laserio:filter_basic', ['IGI', 'GQG', 'IGI'], {
            I: 'minecraft:iron_bars',
            G: '#forge:glass_panes',
            Q: 'laserio:logic_chip',
        })
        .addMaterialInfo()
        .id(id('filter_basic'));

    event.recipes.gtceu
        .shaped('laserio:filter_tag', ['FP'], {
            F: 'laserio:filter_basic',
            P: 'minecraft:paper',
        })
        .addMaterialInfo()
        .id(id('filter_tag'));

    event.recipes.gtceu
        .shaped('laserio:filter_mod', ['FB'], {
            F: 'laserio:filter_basic',
            B: 'minecraft:book',
        })
        .addMaterialInfo()
        .id(id('filter_mod'));

    event.recipes.gtceu
        .shaped('laserio:filter_count', ['FO'], {
            F: 'laserio:filter_basic',
            O: 'minecraft:observer',
        })
        .addMaterialInfo()
        .id(id('filter_count'));

    event.recipes.gtceu
        .shaped('laserio:filter_nbt', ['FW'], {
            F: 'laserio:filter_basic',
            W: 'minecraft:white_wool',
        })
        .addMaterialInfo()
        .id(id('filter_nbt'));

    event.recipes.gtceu
        .shaped('laserio:laser_wrench', ['I I', ' B ', ' I '], { I: 'gtceu:iron_plate', B: 'laserio:logic_chip' })
        .id(id('laser_wrench'));

    event.recipes.gtceu
        .shaped('laserio:card_holder', ['I I', 'CBC', 'I I'], {
            I: 'gtceu:iron_plate',
            C: 'minecraft:chest',
            B: 'laserio:logic_chip',
        })
        .addMaterialInfo()
        .id(id('card_holder'));

    event.recipes.gtceu
        .shaped('laserio:card_cloner', ['I I', 'CBC', 'I I'], {
            I: 'gtceu:iron_plate',
            C: 'minecraft:paper',
            B: 'laserio:logic_chip',
        })
        .addMaterialInfo()
        .id(id('card_cloner'));

    event.recipes.gtceu
        .shaped('laserio:overclocker_node', [' G ', 'RPR', 'GCG'], {
            G: 'gtceu:electrum_plate',
            P: 'laserio:logic_chip',
            R: 'minecraft:redstone',
            C: 'gtceu:tin_cable',
        })
        .addMaterialInfo()
        .id(id('overclocker_node'));

    event.recipes.gtceu
        .shaped('laserio:overclocker_card', [' G ', 'RPR', 'GCG'], {
            G: 'gtceu:electrum_plate',
            P: 'laserio:logic_chip',
            R: 'minecraft:redstone',
            C: 'gtceu:tin_cable',
        })
        .addMaterialInfo()
        .id(id('overclocker_card'));
});
