// priority: 20000

/* eslint-disable no-unused-vars */
// @ts-ignore
/** @global */ const ULV = 0;
/** @global */ const LV = 1;
/** @global */ const MV = 2;
/** @global */ const HV = 3;
/** @global */ const EV = 4;
/** @global */ const IV = 5;
// eslint-disable-next-line id-match
/** @global */ const LuV = 6;
/** @global */ const ZPM = 7;
/** @global */ const UV = 8;
/** @global */ const UHV = 9;
/** @global */ const UEV = 10;
/** @global */ const UIV = 11;
/** @global */ const UXV = 12;
// eslint-disable-next-line id-match
/** @global */ const OpV = 13;
/** @global */ const MAX = 14;
/* eslint-enable no-unused-vars */

/** @param {internal.$wrapped<internal.net.minecraft.world.item.ItemStack>} item */
global.getGtMaterial = (item) => {
    // eslint-disable-next-line id-match, no-undef
    const ms = ChemicalHelper['getMaterialStack(net.minecraft.world.item.ItemStack)'](Item.of(item));
    if (!ms || ms.isEmpty()) return null;
    return ms;
};

/** @typedef {(pattern: internal.com.gregtechceu.gtceu.api.pattern.FactoryBlockPattern) => void} FactoryBlockPatternConsumer */

/**
 * @param {number} min
 * @param {number | undefined} max
 * @returns {FactoryBlockPatternConsumer}
 * @global
 */
// eslint-disable-next-line no-unused-vars
const blockPatternRepeatable = (min, max) => {
    if (max) return (pattern) => pattern.setRepeatable(min, max);
    return (pattern) => pattern.setRepeatable(min);
};

/**
 * @param {internal.InstanceType<typeof $RelativeDirection>} charDir
 * @param {internal.InstanceType<typeof $RelativeDirection>} stringDir
 * @param {internal.InstanceType<typeof $RelativeDirection>} aisleDir
 * @returns {typeof newFactoryBlockPattern}
 * @global
 */
const newFactoryBlockPatternWithDirections = (charDir, stringDir, aisleDir) => {
    return (pattern, divider) => {
        divider = divider || '|';
        let ret = FactoryBlockPattern.start(charDir, stringDir, aisleDir);
        for (let aisle of pattern) {
            if (typeof aisle === 'string') {
                let aisleParts = aisle.split(divider);
                ret = ret.aisle.apply(ret, aisleParts);
            } else {
                aisle(ret);
            }
        }
        return ret;
    };
};

/**
 * @param {(string | FactoryBlockPatternConsumer)[]} pattern
 * @param {string} [divider]
 * @returns {internal.com.gregtechceu.gtceu.api.pattern.FactoryBlockPattern}
 * @global
 */
// eslint-disable-next-line no-unused-vars
const newFactoryBlockPattern = (pattern, divider) => {
    return newFactoryBlockPatternWithDirections(
        $RelativeDirection.LEFT,
        $RelativeDirection.UP,
        $RelativeDirection.FRONT
    )(pattern, divider);
};
