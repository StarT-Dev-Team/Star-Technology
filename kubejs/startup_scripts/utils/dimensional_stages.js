(() => {
    ForgeEvents.onEvent('net.minecraftforge.event.entity.EntityTravelToDimensionEvent', (event) => {
        onDimensionChangeMethod(event);
    });

    const cooldown = 20 * 10;

    const onDimensionChangeMethod = (event) => {
        const { entity, dimension } = event;
        if (!entity.isPlayer()) return;

        for (let data of dimensionData) {
            let { dimensionNamespace, dimensionId, color, lang } = data;

            if (
                dimension !==
                `${dimensionNamespace}:${dimensionNamespace === 'minecraft' ? `the_${dimensionId}` : dimensionId}`
            )
                continue;

            if (entity.stages.has(`access_${dimensionId}`)) continue;

            event.setCanceled(true);

            let currentAge = entity.age;

            let oldAge = entity.persistentData.getInt(`${dimensionId}_attempt_age`);

            if (oldAge > currentAge) {
                entity.persistentData.putInt(`${dimensionId}_attempt_age`, Number(currentAge - cooldown));
                continue;
            }

            // 10s cooldown on title text
            if (oldAge !== 0 && currentAge - cooldown < oldAge) continue;

            entity.persistentData.putInt(`${dimensionId}_attempt_age`, Number(currentAge));

            let subtitle = Text.translate(`effects.dimensions.subtitle.${lang}`).getString();
            let title = Text.translate(`effects.dimensions.title.${lang}`).getString();

            Utils.server.runCommandSilent(
                `title ${entity.username} subtitle {"text":"${subtitle}","color":"gray","italic":true}`
            );
            Utils.server.runCommandSilent(`title ${entity.username} title {"text":"${title}","color":"${color}"}`);
        }
    };

    const dimensionData = [
        {
            dimensionNamespace: 'sgjourney',
            dimensionId: 'abydos',
            color: 'yellow',
            lang: 'abydos',
        },
        {
            dimensionNamespace: 'minecraft',
            dimensionId: 'nether',
            color: 'red',
            lang: 'nether',
        },
        {
            dimensionNamespace: 'minecraft',
            dimensionId: 'end',
            color: 'dark_purple',
            lang: 'end',
        },
        {
            dimensionNamespace: 'sgjourney',
            dimensionId: 'cavum_tenebrae',
            color: 'dark_gray',
            lang: 'inaccesible',
        },
        {
            dimensionNamespace: 'sgjourney',
            dimensionId: 'lantea',
            color: 'dark_gray',
            lang: 'inaccesible',
        },
        {
            dimensionNamespace: 'sgjourney',
            dimensionId: 'chulak',
            color: 'dark_gray',
            lang: 'inaccesible',
        },
        {
            dimensionNamespace: 'sgjourney',
            dimensionId: 'rima',
            color: 'dark_gray',
            lang: 'inaccesible',
        },
        {
            dimensionNamespace: 'sgjourney',
            dimensionId: 'athos',
            color: 'dark_gray',
            lang: 'inaccesible',
        },
        {
            dimensionNamespace: 'sgjourney',
            dimensionId: 'unitas',
            color: 'dark_gray',
            lang: 'inaccesible',
        },
    ];
})();
