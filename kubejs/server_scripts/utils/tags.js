// priority: 1

ServerEvents.tags('item', (event) => {
    const isModLoaded = global.withModsLoaded;

    event.add('gtceu:circuits/uv', 'kubejs:runic_processor_assembly');
    event.add('gtceu:circuits/zpm', 'kubejs:runic_processor');
    event.add('gtceu:circuits/uhv', 'kubejs:runic_processor_computer');
    event.add('gtceu:circuits/uev', 'kubejs:runic_processor_mainframe');
    event.add('gtceu:circuits/zpm', 'kubejs:draconic_microchip_processor');
    event.add('gtceu:circuits/uv', 'kubejs:draconic_processor');
    event.add('gtceu:circuits/uhv', 'kubejs:draconic_processor_assembly');
    event.add('gtceu:circuits/uev', 'kubejs:draconic_processor_computer');
    event.add('gtceu:circuits/uiv', 'kubejs:draconic_processor_mainframe');
    event.add('gtceu:circuits/uhv', 'kubejs:abyssal_processor');
    event.add('gtceu:circuits/uev', 'kubejs:abyssal_processor_assembly');
    event.add('gtceu:circuits/uiv', 'kubejs:abyssal_processor_computer');
    event.add('gtceu:circuits/uxv', 'kubejs:abyssal_processor_mainframe');
    event.remove('minecraft:planks', 'gtceu:treated_wood_planks');
    event.remove('minecraft:wooden_slabs', 'gtceu:treated_wood_slab');

    event.add('start_core:komaru/filaments/tier_1', 'kubejs:komaru_filament_t1');
    event.add('start_core:komaru/filaments/tier_2', 'kubejs:komaru_filament_t2');

    isModLoaded('farmersdelight', () => {
        const knifeTagRemove = ['netherite', 'flint', 'iron', 'diamond', 'golden'];
        knifeTagRemove.forEach((item) => {
            event.remove('forge:tools/knives', `farmersdelight:${item}_knife`);
        });
    });

    isModLoaded('exnihilosequentia', () => {
        event.add('exnihilosequentia:mesh', 'exnihilosequentia:string_mesh');
        event.add('exnihilosequentia:mesh', 'exnihilosequentia:flint_mesh');
        event.add('exnihilosequentia:mesh', 'exnihilosequentia:iron_mesh');
        event.add('exnihilosequentia:mesh', 'exnihilosequentia:diamond_mesh');
        event.add('exnihilosequentia:mesh', 'exnihilosequentia:emerald_mesh');
        event.add('exnihilosequentia:mesh', 'exnihilosequentia:netherite_mesh');
    });

    [
        'diamond',
        'emerald',
        'ruby',
        'sapphire',
        'quartzite',
        'topaz',
        'spessartine',
        'certus_quartz',
        'green_sapphire',
        'blue_topaz',
        'apatite',
        'monazite',
        'realgar',
    ].forEach((type) => {
        event.add('gtceu:geode', `kubejs:${type}_geode`);
        // event.add('gtceu:cracked_geode', `kubejs:cracked_${type}_geode`);
    });

    event.add('gtceu:coal_dusts', 'gtceu:charcoal_dust');
    event.add('gtceu:coal_dusts', 'gtceu:coal_dust');
    event.add('gtceu:coal_blocks', 'minecraft:coal_block');
    event.add('gtceu:coal_blocks', 'gtceu:charcoal_block');

    isModLoaded('curios', () => {
        event.add('curios:charm', 'kubejs:abydos_talisman');
        event.add('curios:head', 'kubejs:nether_talisman');
        event.add('curios:back', 'kubejs:end_talisman');
    });

    isModLoaded('functionalstorage', () => {
        ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'crimson', 'warped', 'mangrove', 'cherry'].forEach(
            (type) => {
                event.add('functionalstorage:drawer_size_1', `functionalstorage:${type}_1`);
                event.add('functionalstorage:drawer_size_2', `functionalstorage:${type}_2`);
                event.add('functionalstorage:drawer_size_4', `functionalstorage:${type}_4`);
            }
        );
    });

    isModLoaded('vintage', () => {
        ['vanadium', 'sulfur'].forEach((type) => {
            const nuggetSuffix = type === 'sulfur' ? 'chunk' : 'nugget';
            event.remove(`forge:storage_blocks/${type}`, `vintage:${type}_block`);
            event.remove('forge:storage_blocks', `vintage:${type}_block`);
            event.remove(`forge:nuggets/${type}`, `vintage:${type}_${nuggetSuffix}`);
            event.remove('forge:nuggets', `vintage:${type}_${nuggetSuffix}`);
            event.remove('balm:nuggets', `vintage:${type}_${nuggetSuffix}`);
        });

        event.remove('balm:gems', 'vintage:sulfur');
        event.remove('forge:gems', 'vintage:sulfur');
        event.remove('forge:gems/sulfur', 'vintage:sulfur');
        event.remove('balm:ingots', 'vintage:vanadium_ingot');
        event.remove('forge:ingots', 'vintage:vanadium_ingot');
        event.remove('forge:ingots/vanadium', 'vintage:vanadium_ingot');
        event.remove('minecraft:beacon_payment_items', 'vintage:vanadium_ingot');
        event.remove('minecraft:trim_materials', 'vintage:vanadium_ingot');
    });
});

ServerEvents.tags('item', (event) => {
    const isModLoaded = global.withModsLoaded;

    isModLoaded('thermal', () => {
        const thermal = [
            /thermal:signalum.*/,
            /thermal:lumium.*/,
            /thermal:enderium.*/,
            /thermal:apatite.*/,
            /thermal:cinnabar.*/,
            /thermal:tin.*/,
            /thermal:lead.*/,
            /thermal:silver.*/,
            /thermal:nickel.*/,
            /thermal:bronze.*/,
            /thermal:electrum.*/,
            /thermal:invar.*/,
            /thermal:ruby.*/,
            /thermal:sapphire.*/,
            /thermal:iron.*/,
            /thermal:gold.*/,
            /thermal:copper.*/,
            /thermal:netherite.*/,
            /thermal:diamond.*/,
            /thermal:emerald.*/,
            /thermal:quartz.*/,
            /thermal:sulfur.*/,
            /thermal:ender_pearl.*/,
        ];
        thermal.forEach((item) => {
            event.removeAllTagsFrom(`${item}`);
        });
    });

    isModLoaded('thermal_extra', () => {
        const thermalExtra = [
            'thermal_extra:obsidian_dust',
            'thermal_extra:amethyst_dust',
            'thermal_extra:soul_infused_dust',
            'thermal_extra:shellite_dust',
            'thermal_extra:twinite_dust',
            'thermal_extra:dragonsteel_dust',
            'thermal_extra:zinc_dust',
            'thermal:sawdust',
            /thermal_extra:.*_nugget/,
            /thermal_extra:.*_ingot/,
            /thermal_extra:.*_block/,
            /thermal_extra:.*_plate/,
            /thermal_extra:.*_rod/,
            /thermal_extra:.*_gear/,
            /thermal_extra:.*_hammer/,
        ];
        thermalExtra.forEach((item) => {
            event.removeAllTagsFrom(`${item}`);
        });
    });

    isModLoaded('exnihilosequentia', () => {
        const exnihilo = [/exnihilosequentia:.*_ingot/, /exnihilosequentia:.*_nugget/];
        exnihilo.forEach((item) => {
            event.removeAllTagsFrom(`${item}`);
        });
    });

    isModLoaded('create', () => {
        const create = [
            /create:zinc_.*/,
            /create:copper.*/,
            /create:iron.*/,
            /create:brass.*/,
            /create:gold.*/,
            'create:powdered_obsidian',
        ];
        create.forEach((item) => {
            event.removeAllTagsFrom(`${item}`);
        });
    });

    isModLoaded('megacells', () => {
        const megacells = [/megacells:sky_steel.*/];
        megacells.forEach((item) => {
            event.removeAllTagsFrom(`${item}`);
        });
    });

    isModLoaded('vintage', () => {
        const vintage = [/vintage:.*_sheet/, /vintage:.*_rod/, /vintage:.*_wire/];
        vintage.forEach((item) => {
            event.removeAllTagsFrom(`${item}`);
        });
    });
});

ServerEvents.tags('block', (event) => {
    const isModLoaded = global.withModsLoaded;

    event.add('minecraft:mineable/pickaxe', /xtonesreworked:glaxx_block_.*/);

    isModLoaded('laserio', () => event.add('forge:mineable/wrench', /^laserio:.*/));
    isModLoaded('create', () => event.add('forge:mineable/wrench', /^create:.*/));
    isModLoaded('pipez', () => event.add('forge:mineable/wrench', /^pipez:.*/));
    isModLoaded('kubejs', () => event.add('forge:mineable/wrench', /^kubejs:.*/));
    isModLoaded('thermal', () => event.add('forge:mineable/wrench', /^thermal:.*/));
    isModLoaded('fluxnetworks', () => event.add('forge:mineable/wrench', /^fluxnetworks:.*/));
    isModLoaded('modularrouters', () => event.add('forge:mineable/wrench', /^modularrouters:.*/));
    isModLoaded('trashcans', () => event.add('forge:mineable/wrench', /^trashcans:.*/));

    event.remove('mineable/pickaxe', ['gtceu:barrel']);

    event.add('mineable/axe', ['gtceu:barrel']);

    isModLoaded('travelanchors', () => event.add('mineable/pickaxe', ['travelanchors:travel_anchor']));

    isModLoaded('vintage', () => {
        ['vanadium', 'sulfur'].forEach((type) => {
            event.remove(`forge:storage_blocks/${type}`, `vintage:${type}_block`);
        });
        event.remove('minecraft:beacon_base_blocks', 'vintage:vanadium_block');
    });
});

ServerEvents.tags('fluid', (event) => {
    const isModLoaded = global.withModsLoaded;

    isModLoaded('create', () => {
        event.remove('create:bottomless/allow', 'minecraft:lava');
    });

    isModLoaded('thermal_extra', () => {
        ['shellite', 'twinite', 'dragonsteel'].forEach((thermalExtraSC) => {
            event.remove(`forge:molten_${thermalExtraSC}`, `thermal_extra:${thermalExtraSC}`);
        });

        event.removeAllTagsFrom(/^thermal_extra:(?!.*_oil$).*/);
    });

    isModLoaded('vintage', () => {
        event.remove('forge:sulfuric_acid', 'vintage:sulfuric_acid');
    });

    event.add('start_core:komaru/faematter', 'gtceu:faematter');
});
