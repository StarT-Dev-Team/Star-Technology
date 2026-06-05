StartupEvents.registry('item', (event) => {
    [
        'diamond',
        'emerald',
        'ruby',
        'sapphire',
        'green_sapphire',
        'quartzite',
        'topaz',
        'blue_topaz',
        'spessartine',
        'certus_quartz',
        'apatite',
        'monazite',
        'realgar',
    ].forEach((geode) => {
        event
            .create(`${geode}_geode`)
            .tooltip(Text.translate(`item.kubejs.${geode}_geode.tooltip`))
            .texture(`kubejs:item/resource_gen/geodes/cracked_${geode}_geode`);
    });
});
