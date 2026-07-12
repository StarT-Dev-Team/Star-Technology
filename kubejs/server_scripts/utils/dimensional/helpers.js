// priority = 10
const debugMode = false; // don't comment this out, it throws errors in the log, just keep it on false

/** @param {any} message */
global.devLogger = (message) => {
    if (debugMode) {
        console.log(message);
    }
};

/**
 * @param {internal.dev.latvian.mods.kubejs.player.SimplePlayerEventJS} event
 * @param {string} type
 */
global.checkArmor = (event, type) => {
    global.devLogger('Checking Armor');
    let armorCheck = false;

    const helmet = event.player.headArmorItem.id;
    const chestplate = event.player.chestArmorItem.id;
    const leggings = event.player.legsArmorItem.id;
    const boots = event.player.feetArmorItem.id;

    if (
        helmet === `${type}_helmet` &&
        chestplate === `${type}_chestplate` &&
        leggings === `${type}_leggings` &&
        boots === `${type}_boots`
    )
        armorCheck = true;

    if (type === 'gtceu:quarktech') {
        if (
            helmet === 'gtceu:quarktech_helmet' &&
            chestplate === 'gtceu:advanced_quarktech_chestplate' &&
            leggings === 'gtceu:quarktech_leggings' &&
            boots === 'gtceu:quarktech_boots'
        )
            armorCheck = true;
    }
    return armorCheck;
};

/**
 * @param {internal.dev.latvian.mods.kubejs.player.SimplePlayerEventJS} event
 * @param {string[]} list
 */
global.checkImmunity = (event, list) => {
    global.devLogger('Checking Inventory');
    let key = false;
    list.forEach((target) => {
        if (event.player.inventory.find(target) === -1) return false;
        else key = true;
    });
    return key;
};

/**
 * @param {internal.dev.latvian.mods.kubejs.player.SimplePlayerEventJS} event
 * @param {string[]} curiosList
 */
global.checkCurios = (event, curiosList) => {
    global.devLogger('Checking Curios');
    /** @type {any} */
    let nbt = event.player.nbt;
    let curios = nbt.ForgeCaps['curios:inventory'];
    let key = false;
    curiosList.forEach((curio) => {
        if (curios.toString().contains(curio)) {
            key = true;
        }
    });
    return key;
};
