(() => {
    const config = {
        creativeTabs: false,
        mods: false,
    };

    if (config.creativeTabs) {
        console.log('========================[Creative tabs]========================');
        console.log(Utils.getRegistryIds('creative_mode_tab'));
    }

    if (config.mods) {
        console.log('========================[Mods]========================');
        let modArray = ['minecraft'];
        Ingredient.all.stacks.forEach((item) => {
            let namespace = item.id.split(':')[0];
            if (!modArray.includes(namespace)) modArray.push(namespace);
        });
        console.log(modArray);
        console.log(`'${modArray.join("' | '")}'`);
    }
})();
