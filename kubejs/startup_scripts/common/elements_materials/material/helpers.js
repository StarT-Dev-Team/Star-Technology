// priority 1000

const IngotProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty');
const DustProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty');
const FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty');
const BlastProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty');
const FluidPipeProperties = Java.loadClass(
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
    gem_horizontal: GTMaterialIconSet.GEM_HORIZONTAL,
    gem_vertical: GTMaterialIconSet.GEM_VERTICAL,
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
    no_unify: GTMaterialFlags.NO_UNIFICATION,
    electrolyze: GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING,
    centrifuge: GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING,
    no_decomp: GTMaterialFlags.DISABLE_DECOMPOSITION,
    explosive: GTMaterialFlags.EXPLOSIVE,
    flammable: GTMaterialFlags.FLAMMABLE,
    sticky: GTMaterialFlags.STICKY,
    phosphorescent: GTMaterialFlags.PHOSPHORESCENT,

    // Generation Flags
    plates: GTMaterialFlags.GENERATE_PLATE,
    dense_plate: GTMaterialFlags.GENERATE_DENSE,
    rod: GTMaterialFlags.GENERATE_ROD,
    bolt_and_screw: GTMaterialFlags.GENERATE_BOLT_SCREW,
    frame: GTMaterialFlags.GENERATE_FRAME,
    gear: GTMaterialFlags.GENERATE_GEAR,
    long_rod: GTMaterialFlags.GENERATE_LONG_ROD,
    block: GTMaterialFlags.FORCE_GENERATE_BLOCK,

    // Ingot Flags
    foil: GTMaterialFlags.GENERATE_FOIL,
    ring: GTMaterialFlags.GENERATE_RING,
    spring: GTMaterialFlags.GENERATE_SPRING,
    small_spring: GTMaterialFlags.GENERATE_SPRING_SMALL,
    small_gear: GTMaterialFlags.GENERATE_SMALL_GEAR,
    fine_wire: GTMaterialFlags.GENERATE_FINE_WIRE,
    rotor: GTMaterialFlags.GENERATE_ROTOR,
    round: GTMaterialFlags.GENERATE_ROUND,
    magnetic: GTMaterialFlags.IS_MAGNETIC,

    // Gem Flags
    crystallizable: GTMaterialFlags.CRYSTALLIZABLE,
    lens: GTMaterialFlags.GENERATE_LENS,

    // Fluid Flags
    solder_mat: GTMaterialFlags.SOLDER_MATERIAL,
    solder_mat_bad: GTMaterialFlags.SOLDER_MATERIAL_BAD,
    solder_mat_good: GTMaterialFlags.SOLDER_MATERIAL_GOOD,

    // Ore Flags
    more_sifter: GTMaterialFlags.HIGH_SIFTER_OUTPUT,

    // Misc
    no_block_craft: GTMaterialFlags.EXCLUDE_BLOCK_CRAFTING_RECIPES,
    no_plate_compressor_craft: GTMaterialFlags.EXCLUDE_PLATE_COMPRESSOR_RECIPE,
    no_hand_craft: GTMaterialFlags.EXCLUDE_BLOCK_CRAFTING_BY_HAND_RECIPES,
    mortar_grind: GTMaterialFlags.MORTAR_GRINDABLE,
    no_working: GTMaterialFlags.NO_WORKING,
    no_smashing: GTMaterialFlags.NO_SMASHING,
    no_smelt: GTMaterialFlags.NO_SMELTING,
    blast_furnace_double: GTMaterialFlags.BLAST_FURNACE_CALCITE_DOUBLE,
    blast_furnace_triple: GTMaterialFlags.BLAST_FURNACE_CALCITE_TRIPLE,
    no_abs_recipe: GTMaterialFlags.DISABLE_ALLOY_BLAST,
    not_alloy: GTMaterialFlags.DISABLE_ALLOY_PROPERTY,
};

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

global.periodicTableElement = (material, type) => {
    let mat = GTMaterials.get(material);
    switch (type) {
        case 'ingot':
            mat.setProperty(PropertyKey.INGOT, new IngotProperty());
            break;
        case 'dust':
            mat.setProperty(PropertyKey.DUST, new DustProperty());
            break;
        case 'fluid':
        case 'gas':
        case 'plasma':
        case 'molten':
        case 'gas_plasma': {
            let prop = new FluidProperty();
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

global.blastProperty = (material, temperature, gasTier, voltage, duration) => {
    let mat = GTMaterials.get(material);
    mat.setProperty(PropertyKey.BLAST, new BlastProperty(temperature, gasTier, voltage, duration, -1, -1));
};
