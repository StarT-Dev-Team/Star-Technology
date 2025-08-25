const dimensionEffect = (dimension, armorType, talismanList, effectList) => {
    PlayerEvents.tick(event => {
        const { player } = event;
        if (player.age % 200 === 0) {
            global.devLogger('Valid Age');
            
            if (player.level.dimension.toString() !== `${dimension}`) return
            global.devLogger('Valid Dimension');
                
            let hasFullSet = global.checkArmor(event, armorType);
            if (hasFullSet) return
            global.devLogger('No Valid Armor');

            let hasCurio = global.checkCurios(event, talismanList);
            if (hasCurio) return
            global.devLogger('No Valid Curio');

            let hasImmunity = global.checkImmunity(event, talismanList);
            if (hasImmunity) return
            global.devLogger('No Valid Talisman');

            if (dimension != 'sgjourney:abydos' && player.headArmorItem.id == 'gtceu:quarktech_helmet') {
                event.server.runCommandSilent(`clear ${player.username} gtceu:quarktech_helmet`);
                player.tell('Your QuarkTech armor suit could not resist the intense environment of this dimension and broke.');
            }
            global.devLogger('Passed QuarkTech Test');

            effectList.forEach(effect => {
                player.potionEffects.add(effect, 300, 0, false, false);
            });
            global.devLogger('Applied Effects');
        }
        
    });
};

dimensionEffect('sgjourney:abydos', 'gtceu:quarktech', ['kubejs:abydos_talisman'], ['kubejs:sand_erosion']);
dimensionEffect('minecraft:the_nether', 'kubejs:nether', ['kubejs:nether_talisman'], ['kubejs:radiation_poisoning', 'kubejs:toxic_atmosphere']);
dimensionEffect('minecraft:the_end', 'kubejs:end', ['kubejs:end_talisman'], ['kubejs:abyssal_drain']);