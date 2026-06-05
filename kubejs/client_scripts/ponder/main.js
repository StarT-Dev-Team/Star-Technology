// priority: -100

(() => {
    let getInitializationData = lazyGetter(() => {
        return {
            gregtechMultiblocks: getGregtechMachines('multiblock'),
            stargateTravel: [
                'sgjourney:classic_stargate',
                'sgjourney:classic_stargate_base_block',
                'sgjourney:classic_stargate_chevron_block',
                'sgjourney:classic_stargate_ring_block',
                'sgjourney:crystal_interface',
                'sgjourney:classic_dhd',
            ],
        };
    });

    Ponder.tags((event) => {
        event.createTag(
            'kubejs:gtceu',
            'gtceu:electric_blast_furnace',
            'GregTech Multiblocks',
            'Informations on how to use GregTech Multiblocks',
            getInitializationData().gregtechMultiblocks
        );

        event.createTag(
            'kubejs:stargate',
            'sgjourney:classic_stargate',
            'Stargate Travel',
            'Informations on how to use the Stargates of this modpack',
            getInitializationData().stargateTravel
        );
    });

    Ponder.registry((event) => {
        event
            .create(getInitializationData().stargateTravel)
            .scene('classic_stargate', 'Classic Stargate', ponderScenes['classic_stargate']);

        event
            .create(getInitializationData().gregtechMultiblocks)
            .scene('multiblock_introduction', 'Multiblock Introduction', ponderScenes['multiblock_introduction'])
            .scene('multiblock_construction', 'Multiblock Construction', ponderScenes['multiblock_construction'])
            .scene('multiblock_wallsharing', 'Multiblock Wall Sharing', ponderScenes['multiblock_wallsharing']);
    });

    /**
     * @template T
     * @param {() => T} init
     * @returns {() => T}
     */
    function lazyGetter(init) {
        let data = null;
        return () => {
            if (!data) data = init();
            return data;
        };
    }

    /**
     * @param {"multiblock"} kind
     * @returns {string[]}
     */
    function getGregtechMachines(kind) {
        let $MultiblockMachineDefinition = Java.loadClass(
            'com.gregtechceu.gtceu.api.machine.MultiblockMachineDefinition'
        );

        let isInstance = (clz, obj) => clz.__javaObject__.isInstance(obj);

        let result = [];
        if (kind === 'multiblock') {
            for (let def of GTRegistries.MACHINES) {
                if (isInstance($MultiblockMachineDefinition, def)) {
                    result.push(def.block.idLocation);
                }
            }
        }

        return result;
    }
})();
