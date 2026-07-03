// priority 1000

const $IngotProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty');
const $DustProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty');
const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty');
const $BlastProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty');
// eslint-disable-next-line no-unused-vars
const $FluidPipeProperties = Java.loadClass(
    'com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidPipeProperties'
);

global.iconSets = {
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

global.flags = {
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
    ulv: GTValues.V[GTValues.ULV],
    lv: GTValues.V[GTValues.LV],
    mv: GTValues.V[GTValues.MV],
    hv: GTValues.V[GTValues.HV],
    ev: GTValues.V[GTValues.EV],
    iv: GTValues.V[GTValues.IV],
    luv: GTValues.V[GTValues.LuV],
    zpm: GTValues.V[GTValues.ZPM],
    uv: GTValues.V[GTValues.UV],
    uhv: GTValues.V[GTValues.UHV],
    uev: GTValues.V[GTValues.UEV],
    uiv: GTValues.V[GTValues.UIV],
    uxv: GTValues.V[GTValues.UXV],
    opv: GTValues.V[GTValues.OpV],
    max: GTValues.V[GTValues.MAX],
};

/** @type {Record<GTTier, number>} */
global.va = {
    ulv: GTValues.VA[GTValues.ULV],
    lv: GTValues.VA[GTValues.LV],
    mv: GTValues.VA[GTValues.MV],
    hv: GTValues.VA[GTValues.HV],
    ev: GTValues.VA[GTValues.EV],
    iv: GTValues.VA[GTValues.IV],
    luv: GTValues.VA[GTValues.LuV],
    zpm: GTValues.VA[GTValues.ZPM],
    uv: GTValues.VA[GTValues.UV],
    uhv: GTValues.VA[GTValues.UHV],
    uev: GTValues.VA[GTValues.UEV],
    uiv: GTValues.VA[GTValues.UIV],
    uxv: GTValues.VA[GTValues.UXV],
    opv: GTValues.VA[GTValues.OpV],
    max: GTValues.VA[GTValues.MAX],
};

/** @type {Record<GTTier, number>} */
global.vh = {
    ulv: GTValues.VH[GTValues.ULV],
    lv: GTValues.VH[GTValues.LV],
    mv: GTValues.VH[GTValues.MV],
    hv: GTValues.VH[GTValues.HV],
    ev: GTValues.VH[GTValues.EV],
    iv: GTValues.VH[GTValues.IV],
    luv: GTValues.VH[GTValues.LuV],
    zpm: GTValues.VH[GTValues.ZPM],
    uv: GTValues.VH[GTValues.UV],
    uhv: GTValues.VH[GTValues.UHV],
    uev: GTValues.VH[GTValues.UEV],
    uiv: GTValues.VH[GTValues.UIV],
    uxv: GTValues.VH[GTValues.UXV],
    opv: GTValues.VH[GTValues.OpV],
    max: GTValues.VH[GTValues.MAX],
};

/** @type {Record<GTTier, number>} */
global.vha = {
    ulv: GTValues.VHA[GTValues.ULV],
    lv: GTValues.VHA[GTValues.LV],
    mv: GTValues.VHA[GTValues.MV],
    hv: GTValues.VHA[GTValues.HV],
    ev: GTValues.VHA[GTValues.EV],
    iv: GTValues.VHA[GTValues.IV],
    luv: GTValues.VHA[GTValues.LuV],
    zpm: GTValues.VHA[GTValues.ZPM],
    uv: GTValues.VHA[GTValues.UV],
    uhv: GTValues.VHA[GTValues.UHV],
    uev: GTValues.VHA[GTValues.UEV],
    uiv: GTValues.VHA[GTValues.UIV],
    uxv: GTValues.VHA[GTValues.UXV],
    opv: GTValues.VHA[GTValues.OpV],
    max: GTValues.VHA[GTValues.MAX],
};

/**
 * @param {string} material
 * @param {'ingot' | 'dust' | 'fluid' | 'gas' | 'plasma' | 'molten' | 'gas_plasma'} type
 */
global.periodicTableElement = (material, type) => {
    let mat = GTMaterials.get(material);
    switch (type) {
        case 'ingot':
            mat.setProperty(PropertyKey.INGOT, new $IngotProperty());
            break;
        case 'dust':
            mat.setProperty(PropertyKey.DUST, new $DustProperty());
            break;
        case 'fluid':
        case 'gas':
        case 'plasma':
        case 'molten':
        case 'gas_plasma': {
            let prop = new $FluidProperty();
            switch (type) {
                case 'fluid':
                    prop.getStorage().enqueueRegistration(GTFluidStorageKeys.LIQUID, new GTFluidBuilder());
                    break;
                case 'gas':
                    prop.getStorage().enqueueRegistration(GTFluidStorageKeys.GAS, new GTFluidBuilder());
                    break;
                case 'plasma':
                    prop.getStorage().enqueueRegistration(GTFluidStorageKeys.PLASMA, new GTFluidBuilder());
                    break;
                case 'molten':
                    prop.getStorage().enqueueRegistration(GTFluidStorageKeys.MOLTEN, new GTFluidBuilder());
                    break;
                case 'gas_plasma': {
                    prop.getStorage().enqueueRegistration(GTFluidStorageKeys.GAS, new GTFluidBuilder());
                    prop.getStorage().enqueueRegistration(GTFluidStorageKeys.PLASMA, new GTFluidBuilder());
                    break;
                }
            }
            mat.setProperty(PropertyKey.FLUID, prop);
            break;
        }
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
