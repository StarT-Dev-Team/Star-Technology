/* eslint-disable no-unused-vars */
// priority 10000

const $IngotProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty');
const $DustProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty');
const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty');
const $BlastProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty');

const $FluidPipeProperties = Java.loadClass(
    'com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidPipeProperties'
);

const ICONSETS = {
    dull: GTMaterialIconSet.DULL,
    metallic: GTMaterialIconSet.METALLIC,
    magnetic: GTMaterialIconSet.MAGNETIC,
    shiny: GTMaterialIconSet.SHINY,
    bright: GTMaterialIconSet.BRIGHT,
    diamond: GTMaterialIconSet.DIAMOND,
    emerald: GTMaterialIconSet.EMERALD,
    gemHorizontal: GTMaterialIconSet.GEM_HORIZONTAL,
    gemVertical: GTMaterialIconSet.GEM_VERTICAL,
    ruby: GTMaterialIconSet.RUBY,
    opal: GTMaterialIconSet.OPAL,
    glass: GTMaterialIconSet.GLASS,
    netherstar: GTMaterialIconSet.NETHERSTAR,
    fine: GTMaterialIconSet.FINE,
    sand: GTMaterialIconSet.SAND,
    wood: GTMaterialIconSet.WOOD,
    rough: GTMaterialIconSet.ROUGH,
    flint: GTMaterialIconSet.FLINT,
    lignite: GTMaterialIconSet.LIGNITE,
    quartz: GTMaterialIconSet.QUARTZ,
    certus: GTMaterialIconSet.CERTUS,
    lapis: GTMaterialIconSet.LAPIS,
    fluid: GTMaterialIconSet.FLUID,
    radioactive: GTMaterialIconSet.RADIOACTIVE,
};

const FLAGS = {
    // Generic flags
    noUnify: GTMaterialFlags.NO_UNIFICATION,
    electrolyze: GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING,
    centrifuge: GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING,
    noDecomp: GTMaterialFlags.DISABLE_DECOMPOSITION,
    explosive: GTMaterialFlags.EXPLOSIVE,
    flammable: GTMaterialFlags.FLAMMABLE,
    sticky: GTMaterialFlags.STICKY,
    phosphorescent: GTMaterialFlags.PHOSPHORESCENT,

    // Generation Flags
    plates: GTMaterialFlags.GENERATE_PLATE,
    densePlate: GTMaterialFlags.GENERATE_DENSE,
    rod: GTMaterialFlags.GENERATE_ROD,
    boltAndScrew: GTMaterialFlags.GENERATE_BOLT_SCREW,
    frame: GTMaterialFlags.GENERATE_FRAME,
    gear: GTMaterialFlags.GENERATE_GEAR,
    longRod: GTMaterialFlags.GENERATE_LONG_ROD,
    block: GTMaterialFlags.FORCE_GENERATE_BLOCK,

    // Ingot Flags
    foil: GTMaterialFlags.GENERATE_FOIL,
    ring: GTMaterialFlags.GENERATE_RING,
    spring: GTMaterialFlags.GENERATE_SPRING,
    smallSpring: GTMaterialFlags.GENERATE_SPRING_SMALL,
    smallGear: GTMaterialFlags.GENERATE_SMALL_GEAR,
    fineWire: GTMaterialFlags.GENERATE_FINE_WIRE,
    rotor: GTMaterialFlags.GENERATE_ROTOR,
    round: GTMaterialFlags.GENERATE_ROUND,
    magnetic: GTMaterialFlags.IS_MAGNETIC,

    // Gem Flags
    crystallizable: GTMaterialFlags.CRYSTALLIZABLE,
    lens: GTMaterialFlags.GENERATE_LENS,

    // Fluid Flags
    solderMat: GTMaterialFlags.SOLDER_MATERIAL,
    solderMatBad: GTMaterialFlags.SOLDER_MATERIAL_BAD,
    solderMatGood: GTMaterialFlags.SOLDER_MATERIAL_GOOD,

    // Ore Flags
    moreSifter: GTMaterialFlags.HIGH_SIFTER_OUTPUT,

    // Misc
    noBlockCraft: GTMaterialFlags.EXCLUDE_BLOCK_CRAFTING_RECIPES,
    noPlateCompressorCraft: GTMaterialFlags.EXCLUDE_PLATE_COMPRESSOR_RECIPE,
    noHandCraft: GTMaterialFlags.EXCLUDE_BLOCK_CRAFTING_BY_HAND_RECIPES,
    mortarGrind: GTMaterialFlags.MORTAR_GRINDABLE,
    noWorking: GTMaterialFlags.NO_WORKING,
    noSmashing: GTMaterialFlags.NO_SMASHING,
    noSmelt: GTMaterialFlags.NO_SMELTING,
    blastFurnaceDouble: GTMaterialFlags.BLAST_FURNACE_CALCITE_DOUBLE,
    blastFurnaceTriple: GTMaterialFlags.BLAST_FURNACE_CALCITE_TRIPLE,
    noABSRecipe: GTMaterialFlags.DISABLE_ALLOY_BLAST,
    notAlloy: GTMaterialFlags.DISABLE_ALLOY_PROPERTY,
};

/** @typedef {'ulv' | 'lv' | 'mv' | 'hv' | 'ev' | 'iv' | 'luv' | 'zpm' | 'uv' | 'uhv' | 'uev' | 'uiv' | 'uxv' | 'opv' | 'max'} GTTier */

/** @type {Record<GTTier, number>} */
global.v = {
    ulv: GTValues.V[ULV],
    lv: GTValues.V[LV],
    mv: GTValues.V[MV],
    hv: GTValues.V[HV],
    ev: GTValues.V[EV],
    iv: GTValues.V[IV],
    luv: GTValues.V[LuV],
    zpm: GTValues.V[ZPM],
    uv: GTValues.V[UV],
    uhv: GTValues.V[UHV],
    uev: GTValues.V[UEV],
    uiv: GTValues.V[UIV],
    uxv: GTValues.V[UXV],
    opv: GTValues.V[OpV],
    max: GTValues.V[MAX],
};

/** @type {Record<GTTier, number>} */
global.va = {
    ulv: GTValues.VA[ULV],
    lv: GTValues.VA[LV],
    mv: GTValues.VA[MV],
    hv: GTValues.VA[HV],
    ev: GTValues.VA[EV],
    iv: GTValues.VA[IV],
    luv: GTValues.VA[LuV],
    zpm: GTValues.VA[ZPM],
    uv: GTValues.VA[UV],
    uhv: GTValues.VA[UHV],
    uev: GTValues.VA[UEV],
    uiv: GTValues.VA[UIV],
    uxv: GTValues.VA[UXV],
    opv: GTValues.VA[OpV],
    max: GTValues.VA[MAX],
};

/** @type {Record<GTTier, number>} */
global.vh = {
    ulv: GTValues.VH[ULV],
    lv: GTValues.VH[LV],
    mv: GTValues.VH[MV],
    hv: GTValues.VH[HV],
    ev: GTValues.VH[EV],
    iv: GTValues.VH[IV],
    luv: GTValues.VH[LuV],
    zpm: GTValues.VH[ZPM],
    uv: GTValues.VH[UV],
    uhv: GTValues.VH[UHV],
    uev: GTValues.VH[UEV],
    uiv: GTValues.VH[UIV],
    uxv: GTValues.VH[UXV],
    opv: GTValues.VH[OpV],
    max: GTValues.VH[MAX],
};

/** @type {Record<GTTier, number>} */
global.vha = {
    ulv: GTValues.VHA[ULV],
    lv: GTValues.VHA[LV],
    mv: GTValues.VHA[MV],
    hv: GTValues.VHA[HV],
    ev: GTValues.VHA[EV],
    iv: GTValues.VHA[IV],
    luv: GTValues.VHA[LuV],
    zpm: GTValues.VHA[ZPM],
    uv: GTValues.VHA[UV],
    uhv: GTValues.VHA[UHV],
    uev: GTValues.VHA[UEV],
    uiv: GTValues.VHA[UIV],
    uxv: GTValues.VHA[UXV],
    opv: GTValues.VHA[OpV],
    max: GTValues.VHA[MAX],
};

/**
 * @param {string} material
 * @param {'ingot' | 'dust' | 'fluid' | 'gas' | 'plasma' | 'molten' | 'gas_plasma'} type
 */
global.periodicTableElement = (material, type) => {
    const mat = GTMaterials.get(material);
    const setFluidProperty = (
        /** @type {internal.com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey[]} */ keys
    ) => {
        const prop = new $FluidProperty();
        keys.forEach((key) => {
            prop.getStorage().enqueueRegistration(key, new GTFluidBuilder());
        });
        mat.setProperty(PropertyKey.FLUID, prop);
    };

    switch (type) {
        case 'ingot':
            mat.setProperty(PropertyKey.INGOT, new $IngotProperty());
            break;
        case 'dust':
            mat.setProperty(PropertyKey.DUST, new $DustProperty());
            break;
        case 'fluid':
            setFluidProperty([GTFluidStorageKeys.LIQUID]);
            break;
        case 'gas':
            setFluidProperty([GTFluidStorageKeys.GAS]);
            break;
        case 'plasma':
            setFluidProperty([GTFluidStorageKeys.PLASMA]);
            break;
        case 'molten':
            setFluidProperty([GTFluidStorageKeys.MOLTEN]);
            break;
        case 'gas_plasma':
            setFluidProperty([GTFluidStorageKeys.GAS, GTFluidStorageKeys.PLASMA]);
            break;
    }
};

/**
 * @param {string} material
 * @param {number} temperature
 * @param {internal.$wrapped<internal.com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty$GasTier>} gasTier
 * @param {number} voltage
 * @param {number} duration
 */
global.blastProperty = (material, temperature, gasTier, voltage, duration) => {
    let mat = GTMaterials.get(material);
    mat.setProperty(PropertyKey.BLAST, new $BlastProperty(temperature, gasTier, voltage, duration, -1, -1));
};

/** @typedef {internal.$wrapped<internal.com.gregtechceu.gtceu.api.data.chemical.material.info.MaterialFlag>} MaterialFlag */
/** @typedef {internal.$wrapped<internal.com.gregtechceu.gtceu.api.data.chemical.material.info.MaterialIconSet>} MaterialIconSet */
/** @typedef {OverloadedParameters<internal.com.gregtechceu.gtceu.api.data.chemical.material.Material$Builder["fluidPipeProperties"]>} ParamFluidPipeProperties */
/** @typedef {OverloadedParameters<internal.com.gregtechceu.gtceu.api.data.chemical.material.Material$Builder["blastTemp"]>} ParamBlastTemp */
/** @typedef {OverloadedParameters<internal.com.gregtechceu.gtceu.api.data.chemical.material.Material$Builder["cableProperties"]>} ParamCableProperties */
/** @typedef {OverloadedParameters<internal.com.gregtechceu.gtceu.api.data.chemical.material.Material$Builder["rotorStats"]>} ParamRotorStats */
/** @typedef {internal.kjs.gtceu.MaterialRegistryEvent} MaterialRegistryEvent */

/**
 * @param {MaterialRegistryEvent} event
 * @param {string} name
 * @param {(string | Material)[]} elements
 * @param {number} color
 * @param {MaterialIconSet | null} icon
 * @param {ParamBlastTemp | null | undefined} blasting
 * @param {MaterialFlag[]} flags
 */
const compIngot = (event, name, elements, color, icon, blasting, flags) => {
    let builder = event.create(name).ingot().components(elements).color(color).iconSet(icon).flags(flags);
    if (blasting) {
        builder = builder.blastTemp.apply(builder, /** @type {any} */ (blasting));
    } else {
        builder = builder.fluid();
    }
    return builder;
};

/**
 * @param {MaterialRegistryEvent} event
 * @param {string} name
 * @param {string} element
 * @param {number} color
 * @param {MaterialIconSet} icon
 * @param {ParamBlastTemp | null | undefined} blasting
 * @param {MaterialFlag[]} flags
 */
const elemIngot = (event, name, element, color, icon, blasting, flags) => {
    let builder = event.create(name).ingot().element(GTElements.get(element)).color(color).iconSet(icon).flags(flags);
    if (blasting) {
        builder = builder.blastTemp.apply(builder, /** @type {any} */ (blasting));
    } else {
        builder = builder.fluid();
    }
    return builder;
};

/**
 * @param {MaterialRegistryEvent} event
 * @param {string} name
 * @param {(string | Material)[]} elements
 * @param {number} color
 * @param {MaterialIconSet | null} icon
 * @param {ParamBlastTemp | null | undefined} blasting
 * @param {MaterialFlag[]} flags
 */
const compIngotLiquid = (event, name, elements, color, icon, blasting, flags) => {
    let builder = event.create(name).ingot().fluid().components(elements).color(color).iconSet(icon).flags(flags);
    if (blasting) {
        builder.blastTemp.apply(builder, /** @type {any} */ (blasting));
    }
    return builder;
};

/**
 * @param {MaterialRegistryEvent} event
 * @param {string} name
 * @param {(string | Material)[]} elements
 * @param {number} color1
 * @param {number} color2
 * @param {MaterialIconSet} icon
 * @param {ParamBlastTemp | null | undefined} blasting
 * @param {MaterialFlag[]} flags
 */
const compIngotLiquidSecColor = (event, name, elements, color1, color2, icon, blasting, flags) => {
    let builder = event
        .create(name)
        .ingot()
        .fluid()
        .components(elements)
        .color(color1)
        .secondaryColor(color2)
        .iconSet(icon)
        .flags(flags);
    if (blasting) {
        builder = builder.blastTemp.apply(builder, /** @type {any} */ (blasting));
    }
    return builder;
};

/**
 * @param {MaterialRegistryEvent} event
 * @param {string} name
 * @param {number} color1
 * @param {number} color2
 * @param {MaterialIconSet} icon
 * @param {ParamBlastTemp | null | undefined} blasting
 * @param {MaterialFlag[]} flags
 */
const elemLiquidSecColor = (event, name, color1, color2, icon, blasting, flags) => {
    let builder = event
        .create(name)
        .ingot()
        .fluid()
        .element(GTElements.get(name))
        .color(color1)
        .secondaryColor(color2)
        .iconSet(icon)
        .flags(flags);
    if (blasting) {
        builder = builder.blastTemp.apply(builder, /** @type {any} */ (blasting));
    }
    return builder;
};

/**
 * @param {MaterialRegistryEvent} event
 * @param {string} name
 * @param {number} color
 * @param {MaterialIconSet} icon
 * @param {ParamBlastTemp | null | undefined} blasting
 * @param {MaterialFlag[]} flags
 */
const elemIngotFluid = (event, name, color, icon, blasting, flags) => {
    let builder = event
        .create(name)
        .ingot()
        .fluid()
        .element(GTElements.get(name))
        .color(color)
        .iconSet(icon)
        .flags(flags);
    if (blasting) {
        builder = builder.blastTemp.apply(builder, /** @type {any} */ (blasting));
    }
    return builder;
};

/**
 * @param {MaterialRegistryEvent} event
 * @param {string} name
 * @param {(string | Material)[]} elements
 * @param {number} color
 * @param {MaterialFlag[]} flags
 */
const compLiquid = (event, name, elements, color, flags) => {
    return event.create(name).fluid().components(elements).color(color).flags(flags);
};

/**
 * @param {MaterialRegistryEvent} event
 * @param {string} name
 * @param {string} element
 * @param {number} color
 * @param {MaterialFlag[]} flags
 */
const elemFluid = (event, name, element, color, flags) => {
    return event.create(name).fluid().element(GTElements.get(element)).color(color).flags(flags);
};

/**
 * @param {MaterialRegistryEvent} event
 * @param {string} name
 * @param {number} heat
 * @param {(string | Material)[]} elements
 * @param {number} color
 * @param {MaterialFlag[]} flags
 */
const compLiquidTemp = (event, name, heat, elements, color, flags) => {
    return event
        .create(name)
        .liquid(new GTFluidBuilder().temperature(heat))
        .components(elements)
        .color(color)
        .flags(flags);
};

/**
 * @param {MaterialRegistryEvent} event
 * @param {string} name
 * @param {(string | Material)[]} elements
 * @param {MaterialFlag[]} flags
 */
const compLiquidStill = (event, name, elements, flags) => {
    return event
        .create(name)
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .components(elements)
        .flags(flags);
};

/**
 * @param {MaterialRegistryEvent} event
 * @param {string} name
 * @param {(string | Material)[]} elements
 * @param {number} color
 * @param {MaterialFlag[]} flags
 */
const compDustLiquid = (event, name, elements, color, flags) => {
    return event.create(name).dust().fluid().components(elements).color(color).flags(flags);
};

/**
 * @param {MaterialRegistryEvent} event
 * @param {string} name
 * @param {number} color
 * @param {MaterialFlag[]} flags
 */
const elemDustFluid = (event, name, color, flags) => {
    return event.create(name).dust().fluid().element(GTElements.get(name)).color(color).flags(flags);
};

/**
 * @param {MaterialRegistryEvent} event
 * @param {string} name
 * @param {(string | Material)[]} elements
 * @param {number} color
 * @param {MaterialFlag[]} flags
 */
const compDust = (event, name, elements, color, flags) => {
    return event.create(name).dust().components(elements).color(color).flags(flags);
};

/**
 * @param {MaterialRegistryEvent} event
 * @param {string} name
 * @param {(string | Material)[]} elements
 * @param {number} color
 * @param {MaterialIconSet} icon
 * @param {MaterialFlag[]} flags
 */
const compDustIcon = (event, name, elements, color, icon, flags) => {
    return event.create(name).dust().components(elements).color(color).iconSet(icon).flags(flags);
};

/**
 * @param {MaterialRegistryEvent} event
 * @param {string} name
 * @param {number} color
 * @param {MaterialFlag[]} flags
 */
const elemDust = (event, name, color, flags) => {
    return event.create(name).dust().element(GTElements.get(name)).color(color).flags(flags);
};

/**
 * @param {MaterialRegistryEvent} event
 * @param {string} name
 * @param {(string | Material)[]} elements
 * @param {number} color
 * @param {MaterialIconSet} icon
 * @param {MaterialFlag[]} flags
 */
const compGem = (event, name, elements, color, icon, flags) => {
    return event.create(name).gem().components(elements).color(color).iconSet(icon).flags(flags);
};

/**
 * @param {MaterialRegistryEvent} event
 * @param {string} name
 * @param {number} color
 * @param {MaterialIconSet | null} icon
 * @param {MaterialFlag[]} flags
 */
const elemGem = (event, name, color, icon, flags) => {
    return event.create(name).gem().element(GTElements.get(name)).iconSet(icon).color(color).flags(flags);
};

/**
 * @param {MaterialRegistryEvent} event
 * @param {string} name
 * @param {(string | Material)[]} elements
 * @param {number} color
 * @param {MaterialFlag[]} flags
 */
const compGas = (event, name, elements, color, flags) => {
    return event.create(name).gas().components(elements).color(color).flags(flags);
};

/**
 * @param {MaterialRegistryEvent} event
 * @param {string} name
 * @param {number} color
 * @param {MaterialFlag[]} flags
 */
const elemGas = (event, name, color, flags) => {
    return event.create(name).gas().element(GTElements.get(name)).color(color).flags(flags);
};

/**
 * @param {MaterialRegistryEvent} event
 * @param {string} name
 * @param {(string | Material)[]} elements
 * @param {number} color
 * @param {ParamFluidPipeProperties} pipe
 * @param {MaterialFlag[]} flags
 */
const polymerFluidPipe = (event, name, elements, color, pipe, flags) => {
    let builder = event.create(name).polymer().fluid().components(elements).color(color).flags(flags);
    builder = builder.fluidPipeProperties.apply(builder, /** @type {any} */ (pipe));
    return builder;
};

/**
 * @param {MaterialRegistryEvent} event
 * @param {string} name
 * @param {(string | Material)[]} elements
 * @param {number} color
 * @param {MaterialFlag[]} flags
 */
const polymerFluid = (event, name, elements, color, flags) => {
    return event.create(name).polymer().fluid().components(elements).color(color).flags(flags);
};

/**
 * @param {MaterialRegistryEvent} event
 * @param {string} name
 * @param {(string | Material)[]} elements
 * @param {number} color
 * @param {MaterialIconSet} icon
 * @param {ParamBlastTemp} blasting
 * @param {ParamCableProperties} cable
 * @param {MaterialFlag[]} flags
 */
const conductor = (event, name, elements, color, icon, blasting, cable, flags) => {
    let builder = event.create(name).ingot().fluid().components(elements).color(color).iconSet(icon).flags(flags);
    builder = builder.blastTemp.apply(builder, /** @type {any} */ (blasting));
    builder = builder.cableProperties.apply(builder, /** @type {any} */ (cable));
    return builder;
};

/**
 * @param {MaterialRegistryEvent} event
 * @param {string} name
 * @param {(string | Material)[]} elements
 * @param {number} color
 * @param {ParamBlastTemp | null | undefined} blasting
 * @param {ParamCableProperties} cable
 * @param {ParamRotorStats} rotorstat
 */
const conductorSuper = (event, name, elements, color, blasting, cable, rotorstat) => {
    let builder = event
        .create(name)
        .ingot()
        .fluid()
        .components(elements)
        .color(color)
        .iconSet(ICONSETS.shiny)
        .flags(
            FLAGS.foil,
            FLAGS.gear,
            FLAGS.longRod,
            FLAGS.plates,
            FLAGS.rod,
            FLAGS.rotor,
            FLAGS.smallGear,
            FLAGS.ring,
            FLAGS.frame,
            FLAGS.fineWire
        );

    if (blasting) {
        builder = builder.blastTemp.apply(builder, /** @type {any} */ (blasting));
    }
    builder = builder.cableProperties.apply(builder, /** @type {any} */ (cable));
    builder = builder.rotorStats.apply(builder, rotorstat);
    return builder;
};

/**
 * @param {MaterialRegistryEvent} event
 * @param {string} name
 * @param {(string | Material)[]} elements
 * @param {number} color
 * @param {MaterialFlag[]} flags
 */
const compDustLiquidOre = (event, name, elements, color, flags) => {
    event.create(name).dust().liquid().ore(2, 1).components(elements).color(color).flags(flags);
};

/**
 * @param {MaterialRegistryEvent} event
 * @param {string} name
 * @param {(string | Material)[]} elements
 * @param {number} color
 * @param {MaterialFlag[]} flags
 */
const compDustOre = (event, name, elements, color, flags) => {
    event.create(name).dust().ore(2, 1).components(elements).color(color).flags(flags);
};

/**
 * @param {MaterialRegistryEvent} event
 * @param {string} name
 * @param {(string | Material)[]} elements
 * @param {number} color
 * @param {MaterialIconSet} icon
 * @param {MaterialFlag[]} flags
 */
const compGemOre = (event, name, elements, color, icon, flags) => {
    event.create(name).gem().ore(2, 1).components(elements).color(color).iconSet(icon).flags(flags);
};

/**
 * @param {MaterialRegistryEvent} event
 * @param {string} name
 * @param {(string | Material)[]} elements
 * @param {number} color
 * @param {MaterialIconSet} icon
 * @param {ParamBlastTemp} blasting
 * @param {MaterialFlag[]} flags
 */
const compIngotPlasma = (event, name, elements, color, icon, blasting, flags) => {
    let builder = event
        .create(name)
        .ingot()
        .fluid()
        .plasma()
        .components(elements)
        .color(color)
        .iconSet(icon)
        .flags(flags);
    builder = builder.blastTemp.apply(builder, /** @type {any} */ (blasting));
    return builder;
};

/**
 * @param {MaterialRegistryEvent} event
 * @param {string} name
 * @param {(string | Material)[]} elements
 * @param {number} color1
 * @param {number} color2
 * @param {MaterialIconSet} icon
 * @param {ParamBlastTemp} blasting
 * @param {MaterialFlag[]} flags
 */
const compIngotPlasmaSecColor = (event, name, elements, color1, color2, icon, blasting, flags) => {
    let builder = event
        .create(name)
        .ingot()
        .fluid()
        .plasma()
        .components(elements)
        .color(color1)
        .secondaryColor(color2)
        .iconSet(icon)
        .flags(flags);
    builder = builder.blastTemp.apply(builder, /** @type {any} */ (blasting));
    return builder;
};

/**
 * @param {MaterialRegistryEvent} event
 * @param {string} name
 * @param {(string | Material)[]} elements
 * @param {number} color
 * @param {MaterialIconSet} icon
 * @param {ParamBlastTemp} blasting
 * @param {ParamCableProperties} cable
 * @param {MaterialFlag[]} flags
 */
const conductorPlasma = (event, name, elements, color, icon, blasting, cable, flags) => {
    let builder = event
        .create(name)
        .ingot()
        .fluid()
        .plasma()
        .components(elements)
        .color(color)
        .iconSet(icon)
        .flags(flags);
    builder = builder.blastTemp.apply(builder, /** @type {any} */ (blasting));
    builder = builder.cableProperties.apply(builder, /** @type {any} */ (cable));
    return builder;
};

/**
 * @param {MaterialRegistryEvent} event
 * @param {string} name
 * @param {number} color
 */
const noCompFluid = (event, name, color) => {
    event.create(name).fluid().color(color);
};

/**
 * @param {MaterialRegistryEvent} event
 * @param {string} name
 * @param {number} temp
 * @param {(string | Material)[]} elements
 * @param {number} color
 * @param {MaterialFlag[]} flags
 */
const compPlasma = (event, name, temp, elements, color, flags) => {
    event
        .create(name)
        .liquid(new GTFluidBuilder().temperature(temp))
        .plasma()
        .components(elements)
        .color(color)
        .flags(flags);
};

/**
 * @param {MaterialRegistryEvent} event
 */
global.materialHelpers = (event) => {
    return {
        /**
         * @param {string} name
         * @param {(string | Material)[]} elements
         * @param {number} color
         * @param {MaterialIconSet | null} icon
         * @param {ParamBlastTemp | null | undefined} blasting
         * @param {MaterialFlag[]} flags
         */
        compIngot: (name, elements, color, icon, blasting, flags) =>
            compIngot(event, name, elements, color, icon, blasting, flags),
        /**
         * @param {string} name
         * @param {string} element
         * @param {number} color
         * @param {MaterialIconSet} icon
         * @param {ParamBlastTemp | null | undefined} blasting
         * @param {MaterialFlag[]} flags
         */
        elemIngot: (name, element, color, icon, blasting, flags) =>
            elemIngot(event, name, element, color, icon, blasting, flags),
        /**
         * @param {string} name
         * @param {(string | Material)[]} elements
         * @param {number} color
         * @param {MaterialIconSet | null} icon
         * @param {ParamBlastTemp | null | undefined} blasting
         * @param {MaterialFlag[]} flags
         */
        compIngotLiquid: (name, elements, color, icon, blasting, flags) =>
            compIngotLiquid(event, name, elements, color, icon, blasting, flags),
        /**
         * @param {string} name
         * @param {(string | Material)[]} elements
         * @param {number} color1
         * @param {number} color2
         * @param {MaterialIconSet} icon
         * @param {ParamBlastTemp | null | undefined} blasting
         * @param {MaterialFlag[]} flags
         */
        compIngotLiquidSecColor: (name, elements, color1, color2, icon, blasting, flags) =>
            compIngotLiquidSecColor(event, name, elements, color1, color2, icon, blasting, flags),
        /**
         * @param {string} name
         * @param {number} color1
         * @param {number} color2
         * @param {MaterialIconSet} icon
         * @param {ParamBlastTemp | null | undefined} blasting
         * @param {MaterialFlag[]} flags
         */
        elemLiquidSecColor: (name, color1, color2, icon, blasting, flags) =>
            elemLiquidSecColor(event, name, color1, color2, icon, blasting, flags),
        /**
         * @param {string} name
         * @param {number} color
         * @param {MaterialIconSet} icon
         * @param {ParamBlastTemp | null | undefined} blasting
         * @param {MaterialFlag[]} flags
         */
        elemIngotFluid: (name, color, icon, blasting, flags) =>
            elemIngotFluid(event, name, color, icon, blasting, flags),
        /**
         * @param {string} name
         * @param {(string | Material)[]} elements
         * @param {number} color
         * @param {MaterialFlag[]} flags
         */
        compLiquid: (name, elements, color, flags) => compLiquid(event, name, elements, color, flags),
        /**
         * @param {string} name
         * @param {string} element
         * @param {number} color
         * @param {MaterialFlag[]} flags
         */
        elemFluid: (name, element, color, flags) => elemFluid(event, name, element, color, flags),
        /**
         * @param {string} name
         * @param {number} heat
         * @param {(string | Material)[]} elements
         * @param {number} color
         * @param {MaterialFlag[]} flags
         */
        compLiquidTemp: (name, heat, elements, color, flags) =>
            compLiquidTemp(event, name, heat, elements, color, flags),
        /**
         * @param {string} name
         * @param {(string | Material)[]} elements
         * @param {MaterialFlag[]} flags
         */
        compLiquidStill: (name, elements, flags) => compLiquidStill(event, name, elements, flags),
        /**
         * @param {string} name
         * @param {(string | Material)[]} elements
         * @param {number} color
         * @param {MaterialFlag[]} flags
         */
        compDustLiquid: (name, elements, color, flags) => compDustLiquid(event, name, elements, color, flags),
        /**
         * @param {string} name
         * @param {number} color
         * @param {MaterialFlag[]} flags
         */
        elemDustFluid: (name, color, flags) => elemDustFluid(event, name, color, flags),
        /**
         * @param {string} name
         * @param {(string | Material)[]} elements
         * @param {number} color
         * @param {MaterialFlag[]} flags
         */
        compDust: (name, elements, color, flags) => compDust(event, name, elements, color, flags),
        /**
         * @param {string} name
         * @param {(string | Material)[]} elements
         * @param {number} color
         * @param {MaterialIconSet} icon
         * @param {MaterialFlag[]} flags
         */
        compDustIcon: (name, elements, color, icon, flags) => compDustIcon(event, name, elements, color, icon, flags),
        /**
         * @param {string} name
         * @param {number} color
         * @param {MaterialFlag[]} flags
         */
        elemDust: (name, color, flags) => elemDust(event, name, color, flags),
        /**
         * @param {string} name
         * @param {(string | Material)[]} elements
         * @param {number} color
         * @param {MaterialIconSet} icon
         * @param {MaterialFlag[]} flags
         */
        compGem: (name, elements, color, icon, flags) => compGem(event, name, elements, color, icon, flags),
        /**
         * @param {string} name
         * @param {number} color
         * @param {MaterialIconSet | null} icon
         * @param {MaterialFlag[]} flags
         */
        elemGem: (name, color, icon, flags) => elemGem(event, name, color, icon, flags),
        /**
         * @param {string} name
         * @param {(string | Material)[]} elements
         * @param {number} color
         * @param {MaterialFlag[]} flags
         */
        compGas: (name, elements, color, flags) => compGas(event, name, elements, color, flags),
        /**
         * @param {string} name
         * @param {number} color
         * @param {MaterialFlag[]} flags
         */
        elemGas: (name, color, flags) => elemGas(event, name, color, flags),
        /**
         * @param {string} name
         * @param {(string | Material)[]} elements
         * @param {number} color
         * @param {ParamFluidPipeProperties} pipe
         * @param {MaterialFlag[]} flags
         */
        polymerFluidPipe: (name, elements, color, pipe, flags) =>
            polymerFluidPipe(event, name, elements, color, pipe, flags),
        /**
         * @param {string} name
         * @param {(string | Material)[]} elements
         * @param {number} color
         * @param {MaterialFlag[]} flags
         */
        polymerFluid: (name, elements, color, flags) => polymerFluid(event, name, elements, color, flags),
        /**
         * @param {string} name
         * @param {(string | Material)[]} elements
         * @param {number} color
         * @param {MaterialIconSet} icon
         * @param {ParamBlastTemp} blasting
         * @param {ParamCableProperties} cable
         * @param {MaterialFlag[]} flags
         */
        conductor: (name, elements, color, icon, blasting, cable, flags) =>
            conductor(event, name, elements, color, icon, blasting, cable, flags),
        /**
         * @param {string} name
         * @param {(string | Material)[]} elements
         * @param {number} color
         * @param {ParamBlastTemp | null | undefined} blasting
         * @param {ParamCableProperties} cable
         * @param {ParamRotorStats} rotorstat
         */
        conductorSuper: (name, elements, color, blasting, cable, rotorstat) =>
            conductorSuper(event, name, elements, color, blasting, cable, rotorstat),
        /**
         * @param {string} name
         * @param {(string | Material)[]} elements
         * @param {number} color
         * @param {MaterialFlag[]} flags
         */
        compDustLiquidOre: (name, elements, color, flags) => compDustLiquidOre(event, name, elements, color, flags),
        /**
         * @param {string} name
         * @param {(string | Material)[]} elements
         * @param {number} color
         * @param {MaterialFlag[]} flags
         */
        compDustOre: (name, elements, color, flags) => compDustOre(event, name, elements, color, flags),
        /**
         * @param {string} name
         * @param {(string | Material)[]} elements
         * @param {number} color
         * @param {MaterialIconSet} icon
         * @param {MaterialFlag[]} flags
         */
        compGemOre: (name, elements, color, icon, flags) => compGemOre(event, name, elements, color, icon, flags),
        /**
         * @param {string} name
         * @param {(string | Material)[]} elements
         * @param {number} color
         * @param {MaterialIconSet} icon
         * @param {ParamBlastTemp} blasting
         * @param {MaterialFlag[]} flags
         */
        compIngotPlasma: (name, elements, color, icon, blasting, flags) =>
            compIngotPlasma(event, name, elements, color, icon, blasting, flags),
        /**
         * @param {string} name
         * @param {(string | Material)[]} elements
         * @param {number} color1
         * @param {number} color2
         * @param {MaterialIconSet} icon
         * @param {ParamBlastTemp} blasting
         * @param {MaterialFlag[]} flags
         */
        compIngotPlasmaSecColor: (name, elements, color1, color2, icon, blasting, flags) =>
            compIngotPlasmaSecColor(event, name, elements, color1, color2, icon, blasting, flags),
        /**
         * @param {string} name
         * @param {(string | Material)[]} elements
         * @param {number} color
         * @param {MaterialIconSet} icon
         * @param {ParamBlastTemp} blasting
         * @param {ParamCableProperties} cable
         * @param {MaterialFlag[]} flags
         */
        conductorPlasma: (name, elements, color, icon, blasting, cable, flags) =>
            conductorPlasma(event, name, elements, color, icon, blasting, cable, flags),
        /**
         * @param {string} name
         * @param {number} color
         */
        noCompFluid: (name, color) => noCompFluid(event, name, color),
        /**
         * @param {string} name
         * @param {number} temp
         * @param {(string | Material)[]} elements
         * @param {number} color
         * @param {MaterialFlag[]} flags
         */
        compPlasma: (name, temp, elements, color, flags) => compPlasma(event, name, temp, elements, color, flags),
    };
};
