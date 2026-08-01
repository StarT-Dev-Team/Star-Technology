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

/**
 * @param {internal.com.gregtechceu.gtceu.api.machine.feature.multiblock.IMultiController} controller
 * @param {internal.java.util.List<internal.net.minecraft.network.chat.Component>} components
 */
global.coilMachineTempDisplay = (controller, components) => {
    if (controller instanceof $CoiledMulti && controller.isFormed()) {
        components.add(
            Component.translatable(
                'gtceu.multiblock.blast_furnace.max_temperature',
                Component.literal(
                    `§c${$FormattingUtil.formatNumbers(controller.coilType.coilTemperature + 100 * Math.max(0, controller.tier - GTValues.MV))}K§r`
                )
            )
        );
    }
};

/**
 * @param {internal.com.gregtechceu.gtceu.api.machine.feature.multiblock.IMultiController} controller
 * @param {internal.java.util.List<internal.net.minecraft.network.chat.Component>} components
 */
global.multiSmelterParallelDisplay = (controller, components) => {
    if (controller instanceof $CoiledMulti && controller.isFormed()) {
        components.add(
            Component.translatable('gtceu.multiblock.multi_furnace.heating_coil_level', controller.coilType.level)
        );
        components.add(
            Component.translatable(
                'gtceu.multiblock.multi_furnace.heating_coil_discount',
                controller.coilType.energyDiscount
            )
        );
    }
};

/**
 * @param {internal.com.gregtechceu.gtceu.api.machine.feature.multiblock.IMultiController} controller
 * @param {internal.java.util.List<internal.net.minecraft.network.chat.Component>} components
 */
global.crackerOverclockDisplay = (controller, components) => {
    if (controller instanceof $CoiledMulti && controller.isFormed()) {
        const coilTier = controller.getCoilTier();
        const discount = coilTier > 9 ? 0.9 + (coilTier - 9) * 0.025 : coilTier * 0.1;

        components.add(
            Component.translatable(
                'gtceu.multiblock.cracking_unit.energy',
                $FormattingUtil.DECIMAL_FORMAT_0F.format((1.0 - discount) * 100.0)
            )
        );
    }
};

/**
 * @param {internal.com.gregtechceu.gtceu.api.machine.feature.multiblock.IMultiController} controller
 * @param {internal.java.util.List<internal.net.minecraft.network.chat.Component>} components
 */
global.pyrolyseOvenOverclockDisplay = (controller, components) => {
    if (controller instanceof $CoiledMulti && controller.isFormed()) {
        components.add(
            Component.translatable(
                'gtceu.multiblock.pyrolyse_oven.speed',
                controller.coilTier === 0 ? 75 : 50 * (controller.coilTier + 1)
            )
        );
    }
};

/**
 * @param {internal.com.gregtechceu.gtceu.api.machine.feature.multiblock.IMultiController} controller
 * @param {internal.java.util.List<internal.net.minecraft.network.chat.Component>} components
 */
global.chemicalOverclockDisplay = (controller, components) => {
    if (controller instanceof $CoiledMulti && controller.isFormed()) {
        const coilTier = controller.coilTier;
        components.add(Component.translatable('gtceu.multiblock.chemical_reactor.speed', 75 + coilTier * 25));
        components.add(Component.translatable('gtceu.multiblock.chemical_reactor.energy', 100 - 5 * coilTier));
    }
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
