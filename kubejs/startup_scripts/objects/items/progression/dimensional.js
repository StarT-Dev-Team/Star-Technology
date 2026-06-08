ItemEvents.armorTierRegistry((event) => {
    event.add('nether', (tier) => {
        tier.durabilityMultiplier = 80; // Each slot will be multiplied with [13, 15, 16, 11]
        tier.slotProtections = [6, 10, 14, 6]; // Slot indicies are [FEET, LEGS, BODY, HEAD]
        tier.enchantmentValue = 12;
        tier.equipSound = 'minecraft:item.armor.equip_netherite';
        tier.repairIngredient = '#forge:ingots/neutronium';
        tier.toughness = 4.0; // diamond has 2.0, netherite 3.0
        tier.knockbackResistance = 1.0;
    });

    event.add('end', (tier) => {
        tier.durabilityMultiplier = 80;
        tier.slotProtections = [6, 10, 14, 6];
        tier.enchantmentValue = 12;
        tier.equipSound = 'minecraft:item.armor.equip_netherite';
        tier.repairIngredient = '#forge:ingots/neutronium';
        tier.toughness = 4.0;
        tier.knockbackResistance = 1.0;
    });
});

StartupEvents.registry('item', (event) => {
    // Abydos
    event.create('abydos_talisman').rarity('epic').texture('kubejs:item/progression/dimensional/abydos_talisman');

    ['nether', 'end'].forEach((dimension) => {
        event
            .create(`${dimension}_talisman`)
            .rarity('epic')
            .texture(`kubejs:item/progression/dimensional/${dimension}_talisman`);

        ['helmet', 'chestplate', 'leggings', 'boots'].forEach((armorPiece) => {
            event
                .create(`${dimension}_${armorPiece}`, `${armorPiece}`)
                .tier(`${dimension}`)
                .texture(`kubejs:item/progression/dimensional/${dimension}_${armorPiece}`);
        });
    });
});
