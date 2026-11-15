StartupEvents.registry('item', (event) => {
    event
        .create('reconnaissance_drone')
        .tooltip(Text.translate('item.kubejs.reconnaissance_drone.tooltip'))
        .texture('minecraft:item/firework_rocket');
});
