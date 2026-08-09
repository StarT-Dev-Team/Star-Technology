ForgeEvents.onEvent('net.minecraftforge.event.entity.EntityTravelToDimensionEvent', (event) => {
    global.onDimensionChangeMethod(event);
});

global.onDimensionChangeMethod = (event) => {
    const { entity, dimension } = event;
    if (!entity.isPlayer()) return;

    for (let data of dimensionData) {
        let { dimensionNamespace, dimensionId, color, title, subtitle } = data;

        if (
            dimension !==
            `${dimensionNamespace}:${dimensionNamespace === 'minecraft' ? `the_${dimensionId}` : dimensionId}`
        )
            continue;

        if (entity.stages.has(`access_${dimensionId}`)) continue;

        event.setCanceled(true);

        let currentAge = entity.age;

        let oldAge = entity.persistentData.getInt(`${dimensionId}_attempt_age`);

        // 10s cooldown on title text
        if (oldAge !== 0 && currentAge - 20 * 10 < oldAge) continue;

        entity.persistentData.putInt(`${dimensionId}_attempt_age`, Number(currentAge));

        if (subtitle !== '') {
            Utils.server.runCommandSilent(
                `title ${entity.username} subtitle {"text":"${subtitle}","color":"gray","italic":true}`
            );
        }
        Utils.server.runCommandSilent(`title ${entity.username} title {"text":"${title}","color":"${color}"}`);
    }
};

const dimensionData = [
    {
        dimensionNamespace: 'sgjourney',
        dimensionId: 'abydos',
        color: 'yellow',
        title: 'You lack comprehension of the Ancient Sands.',
        subtitle: 'Consume an Abydos Coordinate Crystal to enter this area.',
    },
    {
        dimensionNamespace: 'minecraft',
        dimensionId: 'nether',
        color: 'red',
        title: 'You lack comprehension of the Burning Hells.',
        subtitle: 'Consume a Nether Coordinate Crystal to enter this plane.',
    },
    {
        dimensionNamespace: 'minecraft',
        dimensionId: 'end',
        color: 'dark_purple',
        title: 'You lack comprehension of the Draconic Void.',
        subtitle: 'Consume an End Coordinate Crystal to enter this plane.',
    },
    {
        dimensionNamespace: 'sgjourney',
        dimensionId: 'cavum_tenebrae',
        color: 'dark_gray',
        title: 'Content not available.',
        subtitle: 'How did you even try this?',
    },
    {
        dimensionNamespace: 'sgjourney',
        dimensionId: 'lantea',
        color: 'dark_gray',
        title: 'Content not available.',
        subtitle: 'How did you even try this?',
    },
    {
        dimensionNamespace: 'sgjourney',
        dimensionId: 'chulak',
        color: 'dark_gray',
        title: 'Content not available.',
        subtitle: 'How did you even try this?',
    },
    {
        dimensionNamespace: 'sgjourney',
        dimensionId: 'rima',
        color: 'dark_gray',
        title: 'Content not available.',
        subtitle: 'How did you even try this?',
    },
    {
        dimensionNamespace: 'sgjourney',
        dimensionId: 'athos',
        color: 'dark_gray',
        title: 'Content not available.',
        subtitle: 'How did you even try this?',
    },
    {
        dimensionNamespace: 'sgjourney',
        dimensionId: 'unitas',
        color: 'dark_gray',
        title: 'Content not available.',
        subtitle: 'How did you even try this?',
    },
];
