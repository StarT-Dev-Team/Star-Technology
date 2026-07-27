/**
 * @param {string} talisman
 * @param { {id: string, amplifier: number}[] } effectList
 */
const talismanBuff = (talisman, effectList) => {
    PlayerEvents.tick((event) => {
        const { player } = event;
        if (player.age % 200 === 0) {
            let hasCurio = global.checkCurios(event, [talisman]);
            if (!hasCurio) return;

            effectList.forEach((effect) => {
                player.potionEffects.add(effect.id, 1200, effect.amplifier, false, false);
            });
        }
    });
};

talismanBuff('kubejs:abydos_talisman', [{ id: 'minecraft:speed', amplifier: 2 }]);
talismanBuff('kubejs:nether_talisman', [{ id: 'minecraft:fire_resistance', amplifier: 0 }]);
talismanBuff('kubejs:end_talisman', [{ id: 'minecraft:jump_boost', amplifier: 1 }]);

/**
 * @param {string} armor
 * @param { {id: string, amplifier: number}[] } effectList
 */
const armorBuff = (armor, effectList) => {
    PlayerEvents.tick((event) => {
        const { player } = event;
        if (player.age % 200 === 0) {
            let hasArmor = global.checkArmor(event, armor);
            if (!hasArmor) return;

            effectList.forEach((effect) => {
                player.potionEffects.add(effect.id, 1200, effect.amplifier, false, false);
            });
        }
    });
};

armorBuff('gtceu:quarktech', [
    { id: 'minecraft:speed', amplifier: 2 },
    { id: 'kubejs:reach', amplifier: 0 },
]);
armorBuff('kubejs:nether', [
    { id: 'minecraft:fire_resistance', amplifier: 0 },
    { id: 'kubejs:reach', amplifier: 0 },
]);
armorBuff('kubejs:end', [
    { id: 'minecraft:jump_boost', amplifier: 1 },
    { id: 'kubejs:reach', amplifier: 0 },
]);
