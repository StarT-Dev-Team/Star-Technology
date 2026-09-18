//requires: modularrouters
ServerEvents.recipes((event) => {
    const id = global.id;

    event.replaceInput({ id: 'modularrouters:speed_upgrade' }, 'minecraft:gold_ingot', 'gtceu:electrum_plate');
    event.replaceInput({ id: 'modularrouters:speed_upgrade' }, 'minecraft:blaze_rod', 'minecraft:sugar');
    event.replaceInput({ id: 'modularrouters:speed_upgrade' }, 'minecraft:gold_ingot', 'gtceu:electrum_plate');
    event.replaceInput({ id: 'modularrouters:speed_upgrade' }, 'minecraft:blaze_rod', 'minecraft:sugar');

    event.remove([
        { id: 'modularrouters:modular_router' },
        { id: 'modularrouters:augment_core' },
        { id: 'modularrouters:blank_upgrade' },
        { id: 'modularrouters:blank_module' },
    ]);

    event.recipes.gtceu
        .shaped('4x modularrouters:modular_router', ['SGS', 'GFG', 'SGS'], {
            S: 'minecraft:smooth_stone',
            G: 'gtceu:small_iron_gear',
            F: 'gtceu:fine_gold_wire',
        })
        .addMaterialInfo()
        .id(id('modular_router'));

    event.recipes.gtceu
        .shaped('8x modularrouters:augment_core', ['WFB', 'FLB', 'SFB'], {
            B: 'gtceu:gold_bolt',
            F: 'gtceu:iron_foil',
            L: 'minecraft:lapis_lazuli',
            W: '#forge:tools/wrenches',
            S: '#forge:tools/screwdrivers',
        })
        .addMaterialInfo()
        .id(id('augment_core'));

    event.recipes.gtceu
        .assembler(id('mr_augment_core'))
        .itemInputs('gtceu:gold_bolt', 'gtceu:iron_foil', 'minecraft:lapis_lazuli')
        .itemOutputs('8x modularrouters:augment_core')
        .duration(320)
        .EUtVHA(LV);

    event.recipes.gtceu
        .shaped('8x modularrouters:blank_upgrade', ['BFB', 'WGS', 'BFB'], {
            B: 'gtceu:gold_bolt',
            F: 'gtceu:iron_foil',
            G: 'minecraft:glowstone_dust',
            W: '#forge:tools/wrenches',
            S: '#forge:tools/screwdrivers',
        })
        .addMaterialInfo()
        .id(id('blank_upgrade'));

    event.recipes.gtceu
        .assembler(id('mr_blank_upgrade'))
        .itemInputs('gtceu:gold_bolt', 'gtceu:iron_foil', 'minecraft:glowstone_dust')
        .itemOutputs('8x modularrouters:blank_upgrade')
        .duration(320)
        .EUtVHA(LV);

    event.recipes.gtceu
        .shaped('8x modularrouters:blank_module', ['WFS', 'FRF', 'BBB'], {
            B: 'gtceu:gold_bolt',
            F: 'gtceu:iron_foil',
            R: 'minecraft:redstone',
            W: '#forge:tools/wrenches',
            S: '#forge:tools/screwdrivers',
        })
        .addMaterialInfo()
        .id(id('blank_module'));

    event.recipes.gtceu
        .assembler(id('mr_blank_module'))
        .itemInputs('gtceu:gold_bolt', 'gtceu:iron_foil', 'minecraft:redstone')
        .itemOutputs('8x modularrouters:blank_module')
        .duration(320)
        .EUtVHA(LV);
});
