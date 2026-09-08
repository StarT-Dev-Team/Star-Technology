// requires: toms_storage
ServerEvents.recipes((event) => {
    /** @type {(id: string) => string} */
    let rid = (id) => global.id(`toms_${id}`);
    /** @type {(id: string) => string} */
    let tom = (id) => `toms_storage:ts.${id}`;

    event.remove({ mod: 'toms_storage' });

    event.recipes.gtceu
        .shaped(Item.of(`6x ${tom('inventory_connector')}`), ['SPS', 'ITI', 'SPS'], {
            P: 'gtceu:wood_plate',
            S: 'minecraft:stick',
            T: tom('trim'),
            I: tom('inventory_cable'),
        })
        .addMaterialInfo()
        .id(rid('inventory_connector'));

    event.recipes.gtceu
        .shaped(Item.of(tom('storage_terminal')), ['PCP', 'SgS', 'PGP'], {
            P: 'gtceu:wood_plate',
            C: 'minecraft:comparator',
            G: 'minecraft:glowstone',
            g: '#forge:glass',
            S: 'gtceu:wood_screw',
        })
        .addMaterialInfo()
        .id(rid('storage_terminal'));

    event.recipes.gtceu
        .shaped(Item.of(tom('trim')), ['PSP', 'SFS', 'PSP'], {
            P: 'gtceu:wood_plate',
            S: 'minecraft:stick',
            F: 'gtceu:wood_frame',
        })
        .addMaterialInfo()
        .id(rid('trim'));

    event.recipes.gtceu
        .shaped(Item.of(tom('open_crate')), ['PSP', 'PFP', 'PTP'], {
            P: 'gtceu:wood_plate',
            F: 'gtceu:wood_frame',
            S: 'minecraft:stick',
            T: '#minecraft:trapdoors',
        })
        .addMaterialInfo()
        .id(rid('open_crate'));

    event
        .shapeless(Item.of(tom('painted_trim')), [Item.of(tom('painted_trim')), Item.of('minecraft:water_bucket')])
        .id(rid('trim_clean'));

    event.recipes.gtceu
        .shaped(Item.of(tom('inventory_cable')), ['SPS', 'SIS', 'SPS'], {
            P: 'gtceu:wood_plate',
            S: 'minecraft:stick',
            I: 'gtceu:tin_small_pipe',
        })
        .addMaterialInfo()
        .id(rid('inventory_cable'));

    event.recipes.gtceu
        .shaped(Item.of(tom('inventory_cable_framed')), ['S S', ' C ', 'S S'], {
            C: tom('inventory_cable'),
            S: 'minecraft:stick',
        })
        .addMaterialInfo()
        .id(rid('inventory_cable_framed'));

    event.recipes.gtceu
        .shaped(Item.of(tom('inventory_cable_connector')), [' qP', 'CcE', ' WP'], {
            P: 'gtceu:wood_plate',
            c: '#forge:chests/wooden',
            W: 'gtceu:wrought_iron_plate',
            C: tom('inventory_cable'),
            E: 'minecraft:ender_pearl',
            q: 'minecraft:quartz',
        })
        .addMaterialInfo()
        .id(rid('inventory_cable_connector'));

    event.recipes.gtceu
        .shaped(Item.of(tom('inventory_cable_connector_filtered')), [' q ', 'pcp', ' q '], {
            q: 'minecraft:quartz',
            p: 'minecraft:paper',
            c: tom('inventory_cable_connector'),
        })
        .addMaterialInfo()
        .id(rid('inventory_cable_connector_filtered'));

    event.recipes.gtceu
        .shaped(Item.of(tom('inventory_cable_connector_framed')), ['S S', ' C ', 'S S'], {
            C: tom('inventory_cable_connector'),
            S: 'minecraft:stick',
        })
        .addMaterialInfo()
        .id(rid('inventory_cable_connector_framed'));

    event.recipes.gtceu
        .shaped(Item.of(tom('inventory_proxy')), ['PWP', 'WFW', 'PWP'], {
            P: 'gtceu:wood_plate',
            F: 'gtceu:wood_frame',
            W: 'gtceu:wrought_iron_plate',
        })
        .addMaterialInfo()
        .id(rid('inventory_proxy'));

    event.recipes.gtceu
        .shaped(Item.of(tom('crafting_terminal')), ['cdc', 'dtd', 'cdc'], {
            d: 'gtceu:brass_plate',
            c: 'minecraft:crafting_table',
            t: tom('storage_terminal'),
        })
        .addMaterialInfo()
        .id(rid('crafting_terminal'));

    event.recipes.gtceu
        .shaped(Item.of(tom('inventory_hopper_basic')), ['PcP', ' H '], {
            P: 'gtceu:wood_plate',
            c: tom('inventory_cable'),
            H: 'minecraft:hopper',
        })
        .addMaterialInfo()
        .id(rid('inventory_hopper_basic'));

    event.recipes.gtceu
        .shaped(Item.of(tom('level_emitter')), [' t ', 'PcP', ' H '], {
            P: 'gtceu:wood_plate',
            c: tom('inventory_cable'),
            H: 'minecraft:comparator',
            t: 'minecraft:redstone_torch',
        })
        .addMaterialInfo()
        .id(rid('level_emitter'));

    event.recipes.gtceu
        .shaped(Item.of(tom('paint_kit')), ['RGB', 'iaW', 'bS '], {
            b: 'minecraft:water_bucket',
            a: 'minecraft:bucket',
            R: '#forge:dyes/red',
            G: '#forge:dyes/green',
            B: '#forge:dyes/blue',
            W: '#minecraft:wool',
            S: 'minecraft:stick',
            i: '#forge:dyes/black',
        })
        .addMaterialInfo()
        .id(rid('paint_kit'));

    event.recipes.gtceu
        .shaped(Item.of(tom('wireless_terminal')), ['PCP', 'aGg', 'PEP'], {
            P: 'gtceu:wood_plate',
            a: 'gtceu:gold_plate',
            C: 'minecraft:comparator',
            E: 'minecraft:ender_pearl',
            G: 'minecraft:glowstone',
            g: '#forge:glass',
        })
        .addMaterialInfo()
        .id(rid('wireless_terminal'));

    event.recipes.gtceu
        .shaped(Item.of(tom('item_filter')), ['RSR', 'SWS', 'RSR'], {
            R: 'minecraft:redstone',
            W: 'minecraft:wool',
            S: 'minecraft:stick',
        })
        .addMaterialInfo()
        .id(rid('item_filter'));

    event
        .shapeless(Item.of(tom('polymorphic_item_filter')), [
            Item.of(tom('item_filter')),
            Item.of('minecraft:comparator'),
            Item.of('gtceu:zinc_foil'),
        ])
        .id(rid('polymorphic_item_filter'));

    event
        .shapeless(Item.of(tom('tag_item_filter')), [
            Item.of(tom('item_filter')),
            Item.of('minecraft:comparator'),
            Item.of('minecraft:lapis_lazuli'),
        ])
        .id(rid('tag_item_filter'));

    event.recipes.gtceu
        .shaped(Item.of(tom('adv_wireless_terminal')), [' P ', 'PTP', ' P '], {
            P: 'gtceu:steel_plate',
            T: tom('wireless_terminal'),
        })
        .addMaterialInfo()
        .id(rid('advanced_wireless_terminal'));
});
