ServerEvents.recipes((event) => {
    const id = global.id;

    // Upgrade augments
    /** @type {const} */ ([
        {
            tier: 'lv',
            plate: 'silver',
            glass: '_extra:soul_infused',
            gear: 'bronze',
            fluid: 'gtceu:tin 720',
            mod: 6,
        },
        {
            tier: 'mv',
            plate: 'gold',
            glass: ':signalum',
            gear: 'steel',
            fluid: 'gtceu:redstone 720',
            mod: 12,
        },
        {
            tier: 'hv',
            plate: 'electrum',
            glass: ':lumium',
            gear: 'aluminium',
            fluid: 'gtceu:glowstone 720',
            mod: 24,
        },
        {
            tier: 'ev',
            plate: 'blue_alloy',
            glass: ':enderium',
            gear: 'stainless_steel',
            fluid: 'thermal:ender 750',
            mod: 48,
        },
    ]).forEach((tier) => {
        event.recipes.gtceu
            .assembler(id(`${tier.tier}_kit`))
            .itemInputs(
                `4x gtceu:${tier.plate}_plate`,
                `thermal${tier.glass}_glass`,
                `gtceu:${tier.gear}_gear`,
                `#gtceu:circuits/${tier.tier}`
            )
            .itemOutputs(
                Item.of(`kubejs:${tier.tier}_upgrade_kit`, `{AugmentData:{BaseMod:${tier.mod}f,Type: Upgrade}}`)
            )
            .inputFluids(tier.fluid)
            .duration(600)
            .EUt(global.va[tier.tier]);
    });

    // ARC augments
    event.recipes.gtceu
        .assembler(id('lv_arc_augment'))
        .itemInputs('2x gtceu:bronze_plate', '2x gtceu:silver_gear', 'thermal_extra:soul_infused_glass')
        .itemOutputs(Item.of('kubejs:lv_arc_kit', '{AugmentData:{Type: Dynamo, DynamoEnergy:.95f, DynamoPower:0.5f}}'))
        .duration(600)
        .EUt(28);

    // MCI augments
    event.recipes.gtceu
        .assembler(id('lv_mci_augment'))
        .itemInputs('2x gtceu:electrum_plate', '2x gtceu:silver_gear', 'thermal_extra:soul_infused_glass')
        .itemOutputs(Item.of('kubejs:lv_mci_kit', '{AugmentData:{Type: Dynamo, DynamoEnergy:1.15f}}'))
        .duration(600)
        .EUt(28);

    //RFC kits
    event
        .shaped(Item.of('kubejs:ulv_rfc_kit', '{AugmentData:{Type: RF, RFMax:4f, RFXfer:4f}}'), [' G ', 'SCS', ' G '], {
            G: 'gtceu:gold_plate',
            S: 'gtceu:silver_plate',
            C: 'thermal:rf_coil',
        })
        .id('start:shaped/ulv_rfc_kit');

    //RFS
    event
        .shaped(Item.of('kubejs:ulv_rfs_kit', '{AugmentData:{Type: RF, RFMax:6f, RFXfer:2f}}'), [' S ', 'GCG', ' G '], {
            G: 'gtceu:gold_plate',
            S: 'gtceu:silver_plate',
            C: 'thermal:rf_coil',
        })
        .id('start:shaped/ulv_rfs_kit');

    //RFT
    event
        .shaped(Item.of('kubejs:ulv_rft_kit', '{AugmentData:{Type: RF, RFMax:2f, RFXfer:6f}}'), [' S ', 'SCS', ' G '], {
            G: 'gtceu:gold_plate',
            S: 'gtceu:silver_plate',
            C: 'thermal:rf_coil',
        })
        .id('start:shaped/ulv_rft_kit');

    //FLS
    event
        .shaped(Item.of('kubejs:ulv_fls_kit', '{AugmentData:{Type: Fluid, FluidMax:4f}}'), ['RIR', 'IGI', 'RIR'], {
            R: 'gtceu:wrought_iron_plate',
            I: 'gtceu:rubber_plate',
            G: 'gtceu:tempered_glass',
        })
        .id('start:shaped/ulv_fls_kit');

    // ARC's and MCI's
    /** @type {const} */ ([
        {
            tier: 'mv',
            lastTier: 'lv',
            gear: 'gold',
            glass: 'signalum',
            dynEA: 0.9,
            dynP: 1,
            dynEM: 1.3,
            energy: 'mv',
        },
        {
            tier: 'hv',
            lastTier: 'mv',
            gear: 'electrum',
            glass: 'lumium',
            dynEA: 0.85,
            dynP: 2,
            dynEM: 1.45,
            energy: 'hv',
        },
        {
            tier: 'ev',
            lastTier: 'hv',
            gear: 'blue_alloy',
            glass: 'enderium',
            dynEA: 0.8,
            dynP: 3,
            dynEM: 1.6,
            energy: 'ev',
        },
    ]).forEach((tier) => {
        event.recipes.gtceu
            .assembler(id(`arc_augment_${tier.tier}`))
            .itemInputs(`kubejs:${tier.lastTier}_arc_kit`, `2x gtceu:${tier.gear}_gear`, `thermal:${tier.glass}_glass`)
            .itemOutputs(
                Item.of(
                    `kubejs:${tier.tier}_arc_kit`,
                    `{AugmentData:{Type: Dynamo, DynamoEnergy:${tier.dynEA}f, DynamoPower:${tier.dynP}f}}`
                )
            )
            .duration(600)
            .EUt(global.va[tier.energy]);

        event.recipes.gtceu
            .assembler(id(`mci_augment_${tier.tier}`))
            .itemInputs(`kubejs:${tier.lastTier}_mci_kit`, `2x gtceu:${tier.gear}_gear`, `thermal:${tier.glass}_glass`)
            .itemOutputs(
                Item.of(`kubejs:${tier.tier}_mci_kit`, `{AugmentData:{Type: Dynamo, DynamoEnergy:${tier.dynEM}f}}`)
            )
            .duration(600)
            .EUt(global.va[tier.energy]);
    });

    // RFC's, RFS', RFT's and FLS's
    /** @type {const} */ ([
        {
            tier: 'lv',
            lastTier: 'ulv',
            metal: 'soul_infused',
            max: 10,
            avg: 8,
            min: 4,
            energy: 'lv',
        },
        { tier: 'mv', lastTier: 'lv', metal: 'signalum', max: 14, avg: 12, min: 6, energy: 'mv' },
        { tier: 'hv', lastTier: 'mv', metal: 'lumium', max: 18, avg: 16, min: 8, energy: 'hv' },
        { tier: 'ev', lastTier: 'hv', metal: 'enderium', max: 22, avg: 20, min: 10, energy: 'ev' },
        { tier: 'iv', lastTier: 'ev', metal: 'shellite', max: 26, avg: 24, min: 12, energy: 'iv' },
    ]).forEach((foo) => {
        event.recipes.gtceu
            .alloy_smelter(id(`${foo.tier}_rfc_kit`))
            .itemInputs(`kubejs:${foo.lastTier}_rfc_kit`, `2x gtceu:${foo.metal}_gear`)
            .itemOutputs(
                Item.of(`kubejs:${foo.tier}_rfc_kit`, `{AugmentData:{Type: RF, RFMax:${foo.avg}f, RFXfer:${foo.avg}f}}`)
            )
            .duration(600)
            .EUt(global.va[foo.energy]);

        event.recipes.gtceu
            .alloy_smelter(id(`${foo.tier}_rfs_kit`))
            .itemInputs(`kubejs:${foo.lastTier}_rfs_kit`, `2x gtceu:${foo.metal}_gear`)
            .itemOutputs(
                Item.of(`kubejs:${foo.tier}_rfs_kit`, `{AugmentData:{Type: RF, RFMax:${foo.max}f, RFXfer:${foo.min}f}}`)
            )
            .duration(600)
            .EUt(global.va[foo.energy]);

        event.recipes.gtceu
            .alloy_smelter(id(`${foo.tier}_rft_kit`))
            .itemInputs(`kubejs:${foo.lastTier}_rft_kit`, `2x gtceu:${foo.metal}_gear`)
            .itemOutputs(
                Item.of(`kubejs:${foo.tier}_rft_kit`, `{AugmentData:{Type: RF, RFMax:${foo.min}f, RFXfer:${foo.max}f}}`)
            )
            .duration(600)
            .EUt(global.va[foo.energy]);

        event.recipes.gtceu
            .alloy_smelter(id(`${foo.tier}_fls_kit`))
            .itemInputs(`kubejs:${foo.lastTier}_fls_kit`, `2x gtceu:${foo.metal}_gear`)
            .itemOutputs(Item.of(`kubejs:${foo.tier}_fls_kit`, `{AugmentData:{Type: Fluid, FluidMax:${foo.avg}f}}`))
            .duration(600)
            .EUt(global.va[foo.energy]);
    });
});
