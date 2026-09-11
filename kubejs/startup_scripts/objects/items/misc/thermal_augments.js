// requires: kubejs_thermal
StartupEvents.registry('item', (event) => {
    /*
    definitions:
    arc = auxiliary reaction
    mci = multi-cycle injector
    fls = fluid storage
    rfc = redstone flux coil
    rfs = redstone flux storage
    rft = redstone flux transfer
    */

    /**
     * Creates general upgrade kits for all thermal machines
     * @param {string} tier
     * @param {number} index
     */
    const upgradeKit = (tier, index) => {
        event
            .create(`${tier}_upgrade_kit`, 'thermal_augment')
            .tooltip(Text.translate(`item.kubejs.${tier}_upgrade_kit.tooltip`))
            .texture(`kubejs:item/misc/thermal_augments/upgrade_kits/${tier}_kit`)
            .augmentType('Upgrade')
            .baseMod(((2 ** index + 1) / 2) * 6);
    };

    /**
     * Creates burn speed upgrade kits for dynamos
     * @param {string} tier
     * @param {number} index
     */
    // DE: 0.95, 0.9, 0.85, 0.8
    // DP: 0.5, 1, 2, 3
    const arcKit = (tier, index) => {
        event
            .create(`${tier}_arc_kit`, 'thermal_augment')
            .tooltip(Text.translate(`item.kubejs.${tier}_arc_kit.tooltip`))
            .texture(`kubejs:item/misc/thermal_augments/arc_kits/${tier}_arc_kit`)
            .augmentType('Dynamo')
            .thermalMod('DynamoEnergy', 0.95 - 0.05 * index)
            .thermalMod('DynamoPower', index === 0 ? 0.5 : index);
    };

    /**
     * Creates efficiency upgrade kits for dynamos
     * @param {string} tier
     * @param {number} index
     */
    // DE: 1.15, 1.3, 1.45, 1.6
    const mciKit = (tier, index) => {
        event
            .create(`${tier}_mci_kit`, 'thermal_augment')
            .tooltip(Text.translate(`item.kubejs.${tier}_mci_kit.tooltip`))
            .texture(`kubejs:item/misc/thermal_augments/mci_kits/${tier}_mci_kit`)
            .augmentType('Dynamo')
            .thermalMod('DynamoEnergy', 1.15 + 0.15 * index);
    };

    ['lv', 'mv', 'hv', 'ev'].forEach((tier, index) => {
        upgradeKit(tier, index);
        arcKit(tier, index);
        mciKit(tier, index);
    });

    /**
     * Creates storage upgrade kits for fluid cells
     * @param {string} tier
     * @param {number} index
     */
    const flsKit = (tier, index) => {
        event
            .create(`${tier}_fls_kit`, 'thermal_augment')
            .tooltip(Text.translate(`item.kubejs.${tier}_fls_kit.tooltip`))
            .texture(`kubejs:item/misc/thermal_augments/fls_kits/${tier}_fls_kit`)
            .augmentType('Fluid')
            .thermalMod('FluidMax', 4 + 4 * index);
    };

    /**
     * Creates general upgrade kits for rf cells
     * @param {string} tier
     * @param {number} index
     */
    const rfcKit = (tier, index) => {
        event
            .create(`${tier}_rfc_kit`, 'thermal_augment')
            .tooltip(Text.translate(`item.kubejs.${tier}_rfc_kit.tooltip`))
            .texture(`kubejs:item/misc/thermal_augments/rfc_kits/${tier}_rfc_kit`)
            .augmentType('RF')
            .thermalMod('RFMax', 4 + 4 * index)
            .thermalMod('RFXfer', 4 + 4 * index);
    };

    /**
     * Creates storage upgrade kits for rf cells
     * @param {string} tier
     * @param {number} index
     */
    const rfsKit = (tier, index) => {
        event
            .create(`${tier}_rfs_kit`, 'thermal_augment')
            .tooltip(Text.translate(`item.kubejs.${tier}_rfs_kit.tooltip`))
            .texture(`kubejs:item/misc/thermal_augments/rfs_kits/${tier}_rfs_kit`)
            .augmentType('RF')
            .thermalMod('RFMax', 6 + 4 * index)
            .thermalMod('RFXfer', 2 + 2 * index);
    };

    /**
     * Creates throughput upgrade kits for rf cells
     * @param {string} tier
     * @param {number} index
     */
    const rftKit = (tier, index) => {
        event
            .create(`${tier}_rft_kit`, 'thermal_augment')
            .tooltip(Text.translate(`item.kubejs.${tier}_rft_kit.tooltip`))
            .texture(`kubejs:item/misc/thermal_augments/rft_kits/${tier}_rft_kit`)
            .augmentType('RF')
            .thermalMod('RFMax', 2 + 2 * index)
            .thermalMod('RFXfer', 6 + 4 * index);
    };

    ['ulv', 'lv', 'mv', 'hv', 'ev', 'iv'].forEach((tier, index) => {
        flsKit(tier, index);
        rfcKit(tier, index);
        rfsKit(tier, index);
        rftKit(tier, index);
    });
});
