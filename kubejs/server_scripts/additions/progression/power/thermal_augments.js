ServerEvents.recipes((event) => {
    const id = global.id;

    // Upgrade augments
    /** @type {const} */ ([
        { tier: 'lv', plate: 'silver', glass: '_extra:soul_infused', gear: 'bronze', fluid: 'gtceu:tin 720' },
        { tier: 'mv', plate: 'gold', glass: ':signalum', gear: 'steel', fluid: 'gtceu:redstone 720' },
        { tier: 'hv', plate: 'electrum', glass: ':lumium', gear: 'aluminium', fluid: 'gtceu:glowstone 720' },
        { tier: 'ev', plate: 'blue_alloy', glass: ':enderium', gear: 'stainless_steel', fluid: 'thermal:ender 750' },
    ]).forEach((tier) => {
        event.recipes.gtceu
            .assembler(id(`${tier.tier}_kit`))
            .itemInputs(
                `4x gtceu:${tier.plate}_plate`,
                `thermal${tier.glass}_glass`,
                `gtceu:${tier.gear}_gear`,
                `#gtceu:circuits/${tier.tier}`
            )
            .itemOutputs(`kubejs:${tier.tier}_upgrade_kit`)
            .inputFluids(tier.fluid)
            .duration(600)
            .EUt(global.va[tier.tier]);
    });

    // ARC augments
    event.recipes.gtceu
        .assembler(id('lv_arc_augment'))
        .itemInputs('2x gtceu:bronze_plate', '2x gtceu:silver_gear', 'thermal_extra:soul_infused_glass')
        .itemOutputs('kubejs:lv_arc_kit')
        .duration(600)
        .EUt(28);

    // MCI augments
    event.recipes.gtceu
        .assembler(id('lv_mci_augment'))
        .itemInputs('2x gtceu:electrum_plate', '2x gtceu:silver_gear', 'thermal_extra:soul_infused_glass')
        .itemOutputs('kubejs:lv_mci_kit')
        .duration(600)
        .EUt(28);

    // ARC's and MCI's
    /** @type {const} */ ([
        { tier: 'mv', lastTier: 'lv', gear: 'gold', glass: 'signalum', energy: 'mv' },
        { tier: 'hv', lastTier: 'mv', gear: 'electrum', glass: 'lumium', energy: 'hv' },
        { tier: 'ev', lastTier: 'hv', gear: 'blue_alloy', glass: 'enderium', energy: 'ev' },
    ]).forEach((tier) => {
        event.recipes.gtceu
            .assembler(id(`arc_augment_${tier.tier}`))
            .itemInputs(`kubejs:${tier.lastTier}_arc_kit`, `2x gtceu:${tier.gear}_gear`, `thermal:${tier.glass}_glass`)
            .itemOutputs(`kubejs:${tier.tier}_arc_kit`)
            .duration(600)
            .EUt(global.va[tier.energy]);

        event.recipes.gtceu
            .assembler(id(`mci_augment_${tier.tier}`))
            .itemInputs(`kubejs:${tier.lastTier}_mci_kit`, `2x gtceu:${tier.gear}_gear`, `thermal:${tier.glass}_glass`)
            .itemOutputs(`kubejs:${tier.tier}_mci_kit`)
            .duration(600)
            .EUt(global.va[tier.energy]);
    });

    //RFC kits
    event
        .shaped('kubejs:ulv_rfc_kit', [' G ', 'SCS', ' G '], {
            G: 'gtceu:gold_plate',
            S: 'gtceu:silver_plate',
            C: 'thermal:rf_coil',
        })
        .id('start:shaped/ulv_rfc_kit');

    //RFS
    event
        .shaped('kubejs:ulv_rfs_kit', [' S ', 'GCG', ' G '], {
            G: 'gtceu:gold_plate',
            S: 'gtceu:silver_plate',
            C: 'thermal:rf_coil',
        })
        .id('start:shaped/ulv_rfs_kit');

    //RFT
    event
        .shaped('kubejs:ulv_rft_kit', [' S ', 'SCS', ' G '], {
            G: 'gtceu:gold_plate',
            S: 'gtceu:silver_plate',
            C: 'thermal:rf_coil',
        })
        .id('start:shaped/ulv_rft_kit');

    //FLS
    event
        .shaped('kubejs:ulv_fls_kit', ['RIR', 'IGI', 'RIR'], {
            R: 'gtceu:wrought_iron_plate',
            I: 'gtceu:rubber_plate',
            G: 'gtceu:tempered_glass',
        })
        .id('start:shaped/ulv_fls_kit');

    // RFC's, RFS', RFT's and FLS's
    /** @type {const} */ ([
        { tier: 'lv', lastTier: 'ulv', metal: 'soul_infused', energy: 'lv' },
        { tier: 'mv', lastTier: 'lv', metal: 'signalum', energy: 'mv' },
        { tier: 'hv', lastTier: 'mv', metal: 'lumium', energy: 'hv' },
        { tier: 'ev', lastTier: 'hv', metal: 'enderium', energy: 'ev' },
        { tier: 'iv', lastTier: 'ev', metal: 'shellite', energy: 'iv' },
    ]).forEach((foo) => {
        event.recipes.gtceu
            .alloy_smelter(id(`${foo.tier}_rfc_kit`))
            .itemInputs(`kubejs:${foo.lastTier}_rfc_kit`, `2x gtceu:${foo.metal}_gear`)
            .itemOutputs(`kubejs:${foo.tier}_rfc_kit`)
            .duration(600)
            .EUt(global.va[foo.energy]);

        event.recipes.gtceu
            .alloy_smelter(id(`${foo.tier}_rfs_kit`))
            .itemInputs(`kubejs:${foo.lastTier}_rfs_kit`, `2x gtceu:${foo.metal}_gear`)
            .itemOutputs(`kubejs:${foo.tier}_rfs_kit`)
            .duration(600)
            .EUt(global.va[foo.energy]);

        event.recipes.gtceu
            .alloy_smelter(id(`${foo.tier}_rft_kit`))
            .itemInputs(`kubejs:${foo.lastTier}_rft_kit`, `2x gtceu:${foo.metal}_gear`)
            .itemOutputs(`kubejs:${foo.tier}_rft_kit`)
            .duration(600)
            .EUt(global.va[foo.energy]);

        event.recipes.gtceu
            .alloy_smelter(id(`${foo.tier}_fls_kit`))
            .itemInputs(`kubejs:${foo.lastTier}_fls_kit`, `2x gtceu:${foo.metal}_gear`)
            .itemOutputs(`kubejs:${foo.tier}_fls_kit`)
            .duration(600)
            .EUt(global.va[foo.energy]);
    });
});
