// priority = 10
// debugMode = false //comment out when not being used

global.devLogger = (message) => {
    if (debugMode) {
        console.log(message);
    }
}

global.checkArmor = (event, type) => {
    global.devLogger('Checking Armor');
    let armorCheck = false

    const helmet = event.player.headArmorItem.id;
    const chestplate = event.player.chestArmorItem.id;
    const leggings = event.player.legsArmorItem.id;
    const boots = event.player.feetArmorItem.id;
    
    if (helmet == `${type}_helmet` &&
        chestplate == `${type}_chestplate` &&
        leggings == `${type}_leggings` &&
        boots == `${type}_boots`) armorCheck = true

    if (type == 'gtceu:quarktech') {
        if (helmet == 'gtceu:quarktech_helmet' &&
            chestplate == 'gtceu:advanced_quarktech_chestplate' &&
            leggings == 'gtceu:quarktech_leggings' &&
            boots == 'gtceu:quarktech_boots') armorCheck = true}
    return armorCheck
};

global.checkImmunity = (event, list) => {
    global.devLogger('Checking Inventory');
    let key = false;
    list.forEach(target => {
        if (event.player.inventory.find(target) == -1) return false
        else key = true;
    });
    return key
};

global.checkCurios = (event, curiosList) => {
    global.devLogger('Checking Curios');
    let curios = event.player.nbt.ForgeCaps['curios:inventory']
    let key = false;
    curiosList.forEach(curio => {
        if (curios.toString().contains(curio)) {
            key = true;
        }
    })
    return key
}