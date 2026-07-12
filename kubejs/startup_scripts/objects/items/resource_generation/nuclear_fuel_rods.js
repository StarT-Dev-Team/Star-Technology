StartupEvents.registry('item', (event) => {
    /**
     * @param {string} type
     * @param {GTTier} tier
     * @param {string} composition
     * @param {string} depeletedComposition
     * @param {boolean} boolsumption
     */
    const nuclearRod = (type, tier, composition, depeletedComposition, boolsumption) => {
        let activeRod = event
            .create(`${type}_fuel_rod`)
            .tooltip(Text.translate('item.kubejs.nuclear_rod_composition.tooltip'))
            .tooltip(composition)
            .textureJson({
                layer0: `kubejs:item/resource_gen/nuclear_rods/${type}`,
                layer1: 'kubejs:item/resource_gen/nuclear_rods/enriched',
            });

        if (boolsumption) {
            activeRod.tooltip(Text.translate('item.kubejs.consume.tooltip')).food((f) => {
                f.effect('kubejs:uranium_fever', 400, 0, 1)
                    .effect('kubejs:radiation_poisoning', 300, 0, 1)
                    .alwaysEdible();
            });
        }

        event
            .create(`depleted_${type}_fuel_rod`)
            .tooltip(Text.translate('item.kubejs.nuclear_rod_composition.tooltip'))
            .tooltip('§k' + depeletedComposition)
            .textureJson({
                layer0: `kubejs:item/resource_gen/nuclear_rods/dep_${type}`,
                layer1: 'kubejs:item/resource_gen/nuclear_rods/depleted',
            });
    };

    nuclearRod('thr', 'ev', '96% §eTh²³⁰', '96% U²³⁵', false);

    nuclearRod('leu238', 'ev', '96% §eU²³⁸', '48% Pu²⁴⁴ | 48% Np²³⁷', false);

    nuclearRod('heu', 'iv', '96% §eU²³⁵', '72% Pu²⁴¹ | 24% ?', true);

    nuclearRod('plu', 'iv', '96% §ePu²⁴⁴', '48% Pu²³⁹ | 24% Pu²⁴¹ | 24% Am²⁴¹', false);

    nuclearRod('mox239', 'iv', '48% §eU²³⁸ §7|§f 48% §ePu²³⁹', '48% Am²⁴¹ | 24% Pu²⁴¹ | 24% ?', false);

    nuclearRod('amr', 'luv', '96% §eAm²⁴¹', '48% Cm²⁴⁴ | 24% Pu²³⁸ | 24% Np²³⁷', false);

    nuclearRod('nep', 'luv', '96% §eNp²³⁷', '48% Pu²³⁸ | 24% Pu²³⁹ | 24% ?', false);

    nuclearRod('crm', 'zpm', '96% §eCm²⁴⁴', '48% Cf²⁵² | 48% Pu²³⁹', false);

    nuclearRod('mox241', 'zpm', '48% §eU²³⁸ §7|§r 48%  §ePu²⁴¹', '72% Pu²³⁹ | 24% Am²⁴¹', false);

    nuclearRod('tpu', 'zpm', '48% §eTh²³⁰ §7|§f 48% §ePu²³⁹', '72% U²³³ | 24% Am²⁴¹', false);

    nuclearRod('mox238', 'zpm', '72% §ePu²³⁸ §7|§f 24% §eCf²⁵²', '72% Cm²⁴⁴ | 24% Pu²³⁹', false);

    nuclearRod('caf', 'uv', '96% §eCf²⁵²', '48% Fm²⁵⁷ | 48% Pu²⁴¹', false);

    nuclearRod('etu', 'uv', '48% §eCm²⁴⁴ §7|§f 24% §eCf²⁵² §7|§f 24% §eAm²⁴¹', '48% Pu²³⁸ | 48% Es²⁵³', false);

    nuclearRod('leu233', 'uv', '96% §eU²³³', '48% Pu²³⁹ | 24% Cf²⁵² | 24% ?', false);

    nuclearRod('nqe', 'uhv', '48% §eNq⁴⁰⁴ §7|§f 48% §eEs²⁵³', '48% Ec⁴⁰⁴ | 24% Nq⁴⁰² | 24% ?', false);

    //Th²³⁰ - thorium
    //U²³³ - uranium_233
    //U²³⁵ - uranium_235
    //U²³⁸ - uranium
    //Np²³⁷ - neptunium
    //Pu²³⁸ - plutonium_238
    //Pu²³⁹ - plutonium
    //Pu²⁴¹ - plutonium_241
    //Pu²⁴⁴ - plutonium_244
    //Am²⁴¹ - americium_241
    //Cm²⁴⁴ - curium_244
    //Cf²⁵² - californium_252
    //Es²⁵³ - einsteinium_253
    //Fm²⁵⁷ - fermium
    //Nq⁴⁰² - naquadria
    //Nq⁴⁰⁴ - purified_naquadah
    //Ec⁴⁰⁴ - echo
});
