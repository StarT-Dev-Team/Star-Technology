StartupEvents.registry('item', (event) => {
    //MISC
    event
        .create('naquadic_netherite_fibers')
        .rarity('rare')
        .tooltip(Text.translate('item.kubejs.naquadic_netherite_fibers.tooltip'))
        .texture('kubejs:item/misc/extra/naquadic_netherite_fibers');

    event
        .create('coin')
        .rarity('epic')
        .tooltip(Text.translate('item.kubejs.coin.tooltip'))
        .texture('kubejs:item/misc/extra/coin');

    event.create('zalloyic_empty_mold').texture('kubejs:item/misc/extra/zalloyic_empty_mold');

    event.create('zalloyic_fluid_mold').texture('kubejs:item/misc/extra/zalloyic_fluid_mold');

    event
        .create('compass_of_the_flame')
        .tooltip(Text.translate('item.kubejs.compass_of_the_flame.tooltip'))
        .texture('kubejs:item/misc/extra/compass_of_the_flame')
        .maxStackSize(1);

    event.create('moss_ball').texture('kubejs:item/misc/extra/moss_ball').maxStackSize(16);

    //Tier Multiblocks
    event
        .create('multiblock_upgrade_kit')
        .tooltip(Text.translate('item.kubejs.multiblock_upgrade_kit.tooltip'))
        .texture('kubejs:item/misc/extra/upgrade_kit');
});
