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

    //all items => upgrade kits
    const upgradeKit = (tier) => {
        event
            .create(`${tier}_upgrade_kit`)
            .tooltip(Text.translate(`item.kubejs.${tier}_upgrade_kit.tooltip`))
            .texture(`kubejs:item/misc/thermal_augments/upgrade_kits/${tier}_kit`);
    };

    //dynamo's => auxiliary reaction kits
    const arcKit = (tier) => {
        event
            .create(`${tier}_arc_kit`)
            .tooltip(Text.translate(`item.kubejs.${tier}_arc_kit.tooltip`))
            .texture(`kubejs:item/misc/thermal_augments/arc_kits/${tier}_arc_kit`);
    };

    //dynamo's => multi-cycle injectors kits
    const mciKit = (tier) => {
        event
            .create(`${tier}_mci_kit`)
            .tooltip(Text.translate(`item.kubejs.${tier}_mci_kit.tooltip`))
            .texture(`kubejs:item/misc/thermal_augments/mci_kits/${tier}_mci_kit`);
    };

    ['lv', 'mv', 'hv', 'ev'].forEach((tier) => {
        upgradeKit(tier);
        arcKit(tier);
        mciKit(tier);
    });

    //fluid cells => storage upgrade kits
    const flsKit = (tier) => {
        event
            .create(`${tier}_fls_kit`)
            .tooltip(Text.translate(`item.kubejs.${tier}_fls_kit.tooltip`))
            .texture(`kubejs:item/misc/thermal_augments/fls_kits/${tier}_fls_kit`);
    };

    //rf cells => general upgrade kits
    const rfcKit = (tier) => {
        event
            .create(`${tier}_rfc_kit`)
            .tooltip(Text.translate(`item.kubejs.${tier}_rfc_kit.tooltip`))
            .texture(`kubejs:item/misc/thermal_augments/rfc_kits/${tier}_rfc_kit`);
    };

    //rf cells => storage upgrade kits
    const rfsKit = (tier) => {
        event
            .create(`${tier}_rfs_kit`)
            .tooltip(Text.translate(`item.kubejs.${tier}_rfs_kit.tooltip`))
            .texture(`kubejs:item/misc/thermal_augments/rfs_kits/${tier}_rfs_kit`);
    };

    //rf cells => transfer upgrade kits
    const rftKit = (tier) => {
        event
            .create(`${tier}_rft_kit`)
            .tooltip(Text.translate(`item.kubejs.${tier}_rft_kit.tooltip`))
            .texture(`kubejs:item/misc/thermal_augments/rft_kits/${tier}_rft_kit`);
    };

    ['ulv', 'lv', 'mv', 'hv', 'ev', 'iv'].forEach((tier) => {
        flsKit(tier);
        rfcKit(tier);
        rfsKit(tier);
        rftKit(tier);
    });
});
