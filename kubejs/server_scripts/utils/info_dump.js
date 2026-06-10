() => {
    const config = {
        creativeTabs: false,
    };

    if (config.creativeTabs) {
        console.log('========================[Creative tabs]========================');

        console.log(Utils.getRegistryIds('creative_mode_tab'));
    }
};
