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
