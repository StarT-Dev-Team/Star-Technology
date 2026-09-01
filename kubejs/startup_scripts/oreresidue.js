StartupEvents.registry('fluid', (event) => {
    const materialsByTier = {
        primitive: [
            'iron',
            'magnetite',
            'copper',
            'tin',
            'sphalerite',
            'galena',
            'stibnite'
        ],
        lv: [
            'coal',
            'sodalite',
            'realgar',
            'pentlandite',
            'silver',
            'gold',
            'diamond',
            'emerald',
            'ruby',
            'green_sapphire',
            'sapphire',
            'quartzite',
            'certus_quartz',
            'rock_salt',
            'saltpeter',
            'salt',
            'amethyst',
            'sulfur',
            'lapis',
            'nether_quartz',
        ],
        mv: [
            'blue_topaz',
            'topaz',
            'spessartine',
            'monazite',
            'apatite',
            'lepidolite',
            'pyrochlore',
            'pyrolusite',
            'magnesite',
            'red_garnet',
            'yellow_garnet',
            'garnet_sand',
        ],
        hv: [
            'beryllium',
            'chalcopyrite',
            'bornite',
            'barite',
            'cassiterite',
            'tantalite',
            'pollucite',
            'zavaritskite'
        ],
        ev: [
            'cooperite',
            'bastnasite',
            'tungstate',
            'bauxite',
            'pitchblende',
            'ilmenite',
            'molybdenite',
            'scheelite',
            'cobaltite',
            'chromite'],
        iv: [
            'naquadah',
            'titanite',
            'xenotime',
            'zapolite',
            'lautarite',
            'crookesite',
            'kitkaite',
            'strontianite',
            'celestine',
            'naquadite',
        ],
    };

    /** @type {(keyof typeof materialsByTier)[]} */
    (Object.keys(materialsByTier)).forEach((tier) => {
        materialsByTier[tier].forEach((material) => {
            event
                .create(`${material}_residue`, 'basic')
                .stillTexture('minecraft:block/water_still')
                .flowingTexture('minecraft:block/water_flow');
        });
    });
});