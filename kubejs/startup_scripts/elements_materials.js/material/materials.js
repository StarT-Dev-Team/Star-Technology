// priority: 100
// Ignore this
const $IngotProperty = global.IngotProperty;
const $DustProperty = global.DustProperty;
const $FluidProperty = global.FluidProperty;
const $BlastProperty = global.BlastProperty;
const $FluidPipeProperties = global.FluidPipeProperties;

// Icon Sets
const DULL = GTMaterialIconSet.DULL;
const METALLIC = GTMaterialIconSet.METALLIC;
const MAGNETIC = GTMaterialIconSet.MAGNETIC;
const SHINY = GTMaterialIconSet.SHINY;
const BRIGHT = GTMaterialIconSet.BRIGHT;
const DIAMOND = GTMaterialIconSet.DIAMOND;
const EMERALD = GTMaterialIconSet.EMERALD;
const GEM_HORIZONTAL = GTMaterialIconSet.GEM_HORIZONTAL;
const GEM_VERTICAL = GTMaterialIconSet.GEM_VERTICAL;
const RUBY = GTMaterialIconSet.RUBY;
const OPAL = GTMaterialIconSet.OPAL;
const GLASS = GTMaterialIconSet.GLASS;
const NETHERSTAR = GTMaterialIconSet.NETHERSTAR;
const FINE = GTMaterialIconSet.FINE;
const SAND = GTMaterialIconSet.SAND;
const WOOD = GTMaterialIconSet.WOOD;
const ROUGH = GTMaterialIconSet.ROUGH;
const FLINT = GTMaterialIconSet.FLINT;
const LIGNITE = GTMaterialIconSet.LIGNITE;
const QUARTZ = GTMaterialIconSet.QUARTZ;
const CERTUS = GTMaterialIconSet.CERTUS;
const LAPIS = GTMaterialIconSet.LAPIS;
const FLUID = GTMaterialIconSet.FLUID;
const RADIOACTIVE = GTMaterialIconSet.RADIOACTIVE;

// Flags
// Generic flags
const no_unify = GTMaterialFlags.NO_UNIFICATION;
const electrolyze = GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING;
const centrifuge = GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING;
const no_decomp = GTMaterialFlags.DISABLE_DECOMPOSITION;
const explosive = GTMaterialFlags.EXPLOSIVE;
const flammable = GTMaterialFlags.FLAMMABLE;
const sticky = GTMaterialFlags.STICKY;
const phosphorescent = GTMaterialFlags.PHOSPHORESCENT;
// Generation Flags
// Dust Flags
const plates = GTMaterialFlags.GENERATE_PLATE;
const dense_plate = GTMaterialFlags.GENERATE_DENSE;
const rod = GTMaterialFlags.GENERATE_ROD;
const bolt_and_screw = GTMaterialFlags.GENERATE_BOLT_SCREW;
const frame = GTMaterialFlags.GENERATE_FRAME;
const gear = GTMaterialFlags.GENERATE_GEAR;
const long_rod = GTMaterialFlags.GENERATE_LONG_ROD;
const block = GTMaterialFlags.FORCE_GENERATE_BLOCK;
// Ingot Flags
const foil = GTMaterialFlags.GENERATE_FOIL;
const ring = GTMaterialFlags.GENERATE_RING;
const spring = GTMaterialFlags.GENERATE_SPRING;
const small_spring = GTMaterialFlags.GENERATE_SPRING_SMALL;
const small_gear = GTMaterialFlags.GENERATE_SMALL_GEAR;
const fine_wire = GTMaterialFlags.GENERATE_FINE_WIRE;
const rotor = GTMaterialFlags.GENERATE_ROTOR;
const round = GTMaterialFlags.GENERATE_ROUND;
const magnetic = GTMaterialFlags.IS_MAGNETIC;
// Gem Flags
const crystallizable = GTMaterialFlags.CRYSTALLIZABLE;
const lens = GTMaterialFlags.GENERATE_LENS;
// Fluid Flags
const solder_mat = GTMaterialFlags.SOLDER_MATERIAL;
const solder_mat_bad = GTMaterialFlags.SOLDER_MATERIAL_BAD;
const solder_mat_good = GTMaterialFlags.SOLDER_MATERIAL_GOOD;
// Ore Flags
const more_sifter = GTMaterialFlags.HIGH_SIFTER_OUTPUT;
// Misc
const no_block_craft = GTMaterialFlags.EXCLUDE_BLOCK_CRAFTING_RECIPES;
const no_plate_compressor_craft = GTMaterialFlags.EXCLUDE_PLATE_COMPRESSOR_RECIPE;
const no_hand_craft = GTMaterialFlags.EXCLUDE_BLOCK_CRAFTING_BY_HAND_RECIPES;
const mortar_grind = GTMaterialFlags.MORTAR_GRINDABLE;
const no_working = GTMaterialFlags.NO_WORKING;
const no_smashing = GTMaterialFlags.NO_SMASHING;
const no_smelt = GTMaterialFlags.NO_SMELTING;
const blast_furnace_double = GTMaterialFlags.BLAST_FURNACE_CALCITE_DOUBLE;
const blast_furnace_triple = GTMaterialFlags.BLAST_FURNACE_CALCITE_TRIPLE;
const no_abs_recipe = GTMaterialFlags.DISABLE_ALLOY_BLAST;
const not_alloy = GTMaterialFlags.DISABLE_ALLOY_PROPERTY;

// Useful functions
const V = (voltage) => {
    return global.v[voltage];
}

const VA = (voltage) => {
    return global.va[voltage];
}

const VH = (voltage) => {
    return global.vh[voltage];
}

const VHA = (voltage) => {
    return global.vha[voltage];
}

// Moving all of this ( ^ ) to helpers is ideal

/*
    Materials are in-game items or fluids. They can be dusts, ingots, gems, fluids and all their derivatives.
    To make a new material(NOTE: to add a material that is present on the periodic table, but 
        it doesn't have any in-game items/fluids, look below for how to do it),
    write an `event.create()` call in the bellow registering function.
    Write inside the parantheses the name of the material inside '' or "".
    You can change the properties of the material by adding any combination of the following calls:
        .ingot() -> this will make the material have both an ingot and dust form.
        .dust() -> this will make the material have a dust form. Don't use this together with .dust().
        .gem() -> this will make the material have both a gem form and a dust form. Don't use thos together with .dust() or .ingot()
        .fluid() -> this will make the material have a fluid form. 
        .gas() -> this will make the material have a gas(fluid) form with gas properties. 
        .plasma() -> this will make the material have a plasma(fluid) form with plasma properties.
        .polymer() -> this will make the material have a dust form with polymer properties.
            For .ingot(), .dust() and .gem(), optionally you can put inside the parantheses any of these sets of parameters:
                1. harvest level (ex. .ingot(2) will make the material have the harvest level of iron tools)
                2. harvest level, burn time (2x. ingot(2, 2000) will make the material have the harvest level of iron tools and will burn in furnaces as fuel for 2000 ticks or 100 seconds).
        .burnTime(burn time in ticks) -> this will turn the material into a furnace fuel.
        .fluidBurnTime(burn time in ticks) -> how long the fluid of the material will burn.
        .color(color code) -> gives the material a color. The colo must be providen in the following form: 0xNNNNNN, where N are digits.
            To chose a color for your material, you can checkout https://www.w3schools.com/colors/colors_picker.asp
            After you select a color with the above tool, copy the 6 digits that follow the # under the color preview.
        .secondaryColor(color code) -> gives the material a secondary color. If this is not being called, the secondary value will default to white(0xffffff).
        .iconSet(set) -> gives the material an icon set. View line 9 to see the posible icon sets.
        .components(component1, component2, ...) -> describes the composition. The components are a list of elements of the following form: 'Kx material_name', where K is a positive integer.
            Depending on the composition, gt will autogenerate an electrolyzer or centrifuge recipe to decompose the material. You can block that by adding the disable decomposition flag.
        .flags(flag1, flag2, ...) -> flags can be used to select certain properties of the material, like generating gears, or disabling decomposition.
        .element(element) -> similar to .components(), but is used when the material represents an element. 
            See line X for a list of posible flags.
        .rotorStats(power, efficiency, damage, durability) -> this will create a turbine rotor from this material.
        blastTemp() -> this is meant to be paired together with .ingot(). Will generate a EBF recipe(and an ABS recipe) based on the parameters you give it:
            1. temperature -> dictates what coil tier it will require(check the coil tooltips for their max temperature). 
                If the temperature is below 1000, it will also generate a PBF recipe.
                If temperature is above 1750, a hot ingot will be generated, this requiring a Vacuum Freezer.
            2. (optional) gas tier -> can be null for none, 'low' for nitrogen, 'mid' for helium, 'high' for argon, 'higher' for neon or 'highest' for krypton.
            3. (optional) EU per tick -> the recipe voltage
                (USEFUL NOTE: gt has some inbuilt functions to ease chosing the voltages, you can use V('tier') for full amp, VA('tier') for full amp, but adjusted for cable loss, VH('tier) for half an amp or VHA('tier) for half an amp adjusted for cable loss).
            4. (optional) duration in ticks -> how long the recipe should take
        .ore() -> this will create an ore from the material.
            Optionally you can add any of these sets of parameters:
                1. is emissive -> true for emissive textures
                2. ore multiplier and byproduct multiplier -> how many crushed ores will be given from one raw ore and how many byproducts dusts will be given throughout the ore processing
                3. ore multiplier, byproduct multiplier, is emissive
        .washedIn()
        .separatedIn()
        .separatedInto()
        .oreSmeltInto()
        .polarizesInto()
        .arcSmeltInto()
        .maceratesInto()
        .ingotSmeltInto()
        .addOreByproducts()
        .cableProperties() -> generates wires and cables(if material is not a superconducter). The following parameter sets can be given:
            1. Voltage, amperage, loss per block
            2. Voltage, amperage, loss per block, is superconductor -> for a super conductor, set loss as 0 and is super conductor as true
            3. Voltage, amperage, loss per block, is super conductor and critical temperature
        .toolProperties()
        .fluidPipeProperties() ->
            (int maxTemp, int throughput [tiny pipe], boolean gasProof, boolean acidProof, boolean cryoProof, boolean plasmaProof)
        .itemPipeProperties() ->
            (int priority, float stacksPerSec)
        .addDefaultEnchant()
        
*/

/*
event.create('netherite')
        .dust()
        .components('4x debris', '4x gold')
        .color(0x1a0d00)
        .iconSet(DULL)
        .flags(no_decomp);
*/

GTCEuStartupEvents.registry('gtceu:material_icon_set', event => {
    event.create('fluix').parent('certus');
});

GTCEuStartupEvents.materialModification(event => {

    GTMaterials.Netherite.setMaterialARGB(0x1a0d00);
    GTMaterials.Netherite.setMaterialIconSet(DULL);
    GTMaterials.Netherite.addFlags(rod, foil);
    GTMaterials.get('netherite_trisulfate_complex').setFormula('[*Nr*(SO4)3](OH)2');
    GTMaterials.get('netherite_hexammine_sulfate').setFormula('[*Nr*(NH3)6]SO4');
    GTMaterials.get('glowstone').setFormula('(Si(FeS2)5(CrAl2O3)Hg3)Au');
    GTMaterials.get('ohmderblux_alloy').setFormula('Cx5(Fe16TiAlNi4Co2)2Zr4(Si(FeS2)5(CrAl2O3)Hg3)Au)9(Co5Cr2NiMo)3');
    GTMaterials.get('netherite').setFormula('Nr');
    GTMaterials.get('netherite_gold_skystone_alloy').setFormula('Nr4(SkC2)2(Sk(SiAu2)2)');
    GTMaterials.get('netherite_certus_quartz_skystone_alloy').setFormula('Nr4(SkC2)2(Sk(SiO2)2)');
    GTMaterials.get('nether_star').setFormula('✧');
    GTMaterials.get('nether_star_concentrate').setFormula('*✧*');
    GTMaterials.get('aurourium').setFormula('*A*');
    GTMaterials.get('starium_alloy').setFormula('*✧*4(Ke6Nq2C)2El2');
    GTMaterials.get('nyanium').setFormula('*A*7(URhNq2)4(Mg3N2)*Nr*2');
    GTMaterials.get('maxwellium').setFormula('∅(*A*7(URhNq2)4(Mg3N2)*Nr*2)∅')
    GTMaterials.get('low_saturation_voidic_excression').setFormula('[∅-]');
    GTMaterials.get('moderate_saturation_voidic_excression').setFormula('[∅]');
    GTMaterials.get('high_saturation_voidic_excression').setFormula('[∅+]');
    GTMaterials.get('lethargic_voidic_slurry').setFormula('?[∅-]*');
    GTMaterials.get('tempered_voidic_slurry').setFormula('?[∅]*');
    GTMaterials.get('vibrant_voidic_slurry').setFormula('?[∅+]*');
    GTMaterials.get('alpha_state_void_sludge').setFormula('?α∅');
    GTMaterials.get('beta_state_void_sludge').setFormula('?β∅');
    GTMaterials.get('gamma_state_void_sludge').setFormula('?γ∅');
    GTMaterials.get('delta_state_void_sludge').setFormula('?δ∅');
    GTMaterials.get('epsilon_state_void_sludge').setFormula('?ε∅');
    GTMaterials.get('zeta_state_void_sludge').setFormula('?ζ∅');
    GTMaterials.get('alpha_state_void_residue').setFormula('α∅');
    GTMaterials.get('beta_state_void_residue').setFormula('β∅');
    GTMaterials.get('gamma_state_void_residue').setFormula('γ∅');
    GTMaterials.get('delta_state_void_residue').setFormula('δ∅');
    GTMaterials.get('epsilon_state_void_residue').setFormula('ε∅');
    GTMaterials.get('zeta_state_void_residue').setFormula('ζ∅');
    GTMaterials.get('order_centric_void').setFormula('⚖∅');
    GTMaterials.get('chaos_centric_void').setFormula('✹∅');
    GTMaterials.get('voidic_waste_residue').setFormula('?∅?');
    GTMaterials.get('dragon_breath').setFormula('🜍');
    GTMaterials.get('pure_dragon_breath').setFormula('*🜍*');
    GTMaterials.get('voidic').setFormula('∅');
    GTMaterials.get('preon').setFormula('✶');
    GTMaterials.get('paradox').setFormula('☯');
    GTMaterials.get('rare_earth').setFormula('?');
    GTMaterials.get('platinum_group_sludge').setFormula('Pt?');
    GTMaterials.get('draconyallium').setFormula('🜍Dr68Ag20O94N76🜍');
    GTMaterials.get('draco_abyssal').setFormula('🜍∅🜍');
    GTMaterials.get('silver_sulfate').setFormula('Ag2(SO4)');
    GTMaterials.get('chromium_sulfate').setFormula('Cr2(SO4)3');
    GTMaterials.get('sparse_electron_akreyrium').setFormula('Ak(?e?)?');
    GTMaterials.get('dense_electron_akreyrium').setFormula('Ak(e)?');
    GTMaterials.get('sparse_muon_akreyrium').setFormula('Ak(?μ?)?');
    GTMaterials.get('dense_muon_akreyrium').setFormula('Ak(μ)?');
    GTMaterials.get('sparse_tau_akreyrium').setFormula('Ak(?τ?)?');
    GTMaterials.get('dense_tau_akreyrium').setFormula('Ak(τ)?');
    GTMaterials.get('lepton_sparse_akreyrium').setFormula('Ak(?ℓ?)?');
    GTMaterials.get('lepton_dense_akreyrium').setFormula('Ak(ℓ)?');
    GTMaterials.get('echo_shard').setFormula('Ec');
    GTMaterials.get('zavaritskite').setFormula('(BiO)F');

});

GTCEuStartupEvents.registry('gtceu:material', event => {

    // Periodic table materials
    const element = global.periodicTableElement;
    // Ingots
    element('zirconium', 'ingot');
    element('tellurium', 'ingot');
    element('polonium', 'ingot');
    element('astatine', 'ingot');
    element('hafnium', 'ingot');
    element('seaborgium', 'ingot');
    element('flerovium', 'ingot');
    element('rhenium', 'ingot');

    // Dusts
    element('selenium', 'dust');
    element('strontium', 'dust');
    element('thallium', 'dust');

    // Liquids
    element('seaborgium', 'fluid');
    element('flerovium', 'fluid');
    element('rhenium', 'fluid');
    element('zirconium', 'fluid');
    element('hafnium', 'fluid');

    // Gasses
    // periodicTableElement('iodine', 'gas');
    element('oganesson', 'gas');

    // Plasmas
    
    // This material is meant to place a ? symbol in a material's chemical formula
    event.create('mystery')
        .element(GTElements.get('mystery'));

    // Material modification
    const matmod = (mat, flag) => {
        GTMaterials.get(mat).addFlags(flag);
    }
    matmod('lead', gear);
    matmod('silver', gear);
    matmod('naquadah', dense_plate);
    matmod('enriched_naquadah', [dense_plate, rotor, gear, small_gear, frame, long_rod]);
    matmod('naquadria', dense_plate);
    matmod('neutronium', [foil, small_gear,rotor, dense_plate]);
    matmod('europium', [small_spring,bolt_and_screw]);
    matmod('zirconium', fine_wire);
    matmod('hafnium', fine_wire);
    matmod('rhenium', fine_wire);
    matmod('red_steel', [rod, frame]);
    matmod('sterling_silver', [rod, frame]);
    matmod('nether_star', foil);
    matmod('netherite', no_decomp);
    matmod('echo_shard', [lens, foil]);
    matmod('copper', gear);
    matmod('vanadium_gallium', fine_wire);
    matmod('titanium', foil);
    matmod('rhodium_plated_palladium', [frame, foil]);
    matmod('darmstadtium', [frame, foil]);
    matmod('ruthenium_trinium_americium_neutronate', fine_wire);
    matmod('gold', gear);
    matmod('electrum', gear);
    matmod('blue_alloy', gear);
    matmod('cupronickel', small_spring);
    matmod('kanthal', small_spring);
    matmod('nichrome', small_spring);
    // matmod('borosilicate_glass', foil); //is force ignored in GT code

    // Blast Properties of periodic table metals
    const blast = global.blastProperty;
    blast('zirconium', 10900, 'higher', VA('uv'), 800);
    blast('tellurium', 11200, 'higher', VA('uhv'), 900);
    blast('polonium', 13400, 'higher', VA('uiv'), 1480);
    blast('astatine', 12800, 'higher', VA('uhv'), 1350);
    blast('hafnium', 11900, 'higher', VA('uv'), 750);
    blast('rhenium', 14800, 'highest', VA('uiv'), 1200);
    blast('seaborgium', 13300, 'higher', VA('uev'), 1500);
    blast('flerovium', 12200, 'higher', VA('uhv'), 1200);

    // Fluid Pipes
    GTMaterials.NaquadahEnriched.setProperty(PropertyKey.FLUID_PIPE, new FluidPipeProperties(8000, 500, true, true, true, false));

    // Materials from elements
    const compIngot = (name, elements, color, icon, blasting, flags) => {
        if (blasting.includes(blasting[0])){
            event.create(name).ingot().components(elements).color(color).iconSet(icon).flags(flags).blastTemp(blasting[0], blasting[1], blasting[2], blasting[3]);
        } else {
            event.create(name).ingot().fluid().components(elements).color(color).iconSet(icon).flags(flags);
        }
    }

    const elemIngot = (name, element, color, icon, blasting, flags) => {
        if (blasting.includes(blasting[0])){
            event.create(name).ingot().element(GTElements.get(element)).color(color).iconSet(icon).flags(flags).blastTemp(blasting[0], blasting[1], blasting[2], blasting[3]);
        } else {
            event.create(name).ingot().fluid().element(GTElements.get(element)).color(color).iconSet(icon).flags(flags);
        }
    }

    const compIngotLiquid = (name, elements, color, icon, blasting, flags) => {
        if (blasting.includes(blasting[0])){
            event.create(name).ingot().fluid().components(elements).color(color).iconSet(icon).flags(flags).blastTemp(blasting[0], blasting[1], blasting[2], blasting[3]);
        } else {
            event.create(name).ingot().fluid().components(elements).color(color).iconSet(icon).flags(flags);
        }
    }

    const compIngotLiquidSeccolor = (name, elements, color1, color2, icon, blasting, flags) => {
        if (blasting.includes(blasting[0])){
            event.create(name).ingot().fluid().components(elements).color(color1).secondaryColor(color2).iconSet(icon).flags(flags).blastTemp(blasting[0], blasting[1], blasting[2], blasting[3]);
        } else {
            event.create(name).ingot().fluid().components(elements).color(color1).secondaryColor(color2).iconSet(icon).flags(flags);
        }
    }

    const elemIngotFluid = (name, color, icon, blasting, flags) => {
        if (blasting.includes(blasting[0])){
            event.create(name).ingot().fluid().element(GTElements.get(name)).color(color).iconSet(icon).flags(flags).blastTemp(blasting[0], blasting[1], blasting[2], blasting[3]);
        } else {
            event.create(name).ingot().fluid().element(GTElements.get(name)).color(color).iconSet(icon).flags(flags);
        }
    }
    
    const compLiquid = (name, elements, color, flags) => {
        event.create(name).fluid().components(elements).color(color).flags(flags);
    }

    const elemFluid = (name, element, color, flags) => {
        event.create(name).fluid().element(GTElements.get(element)).color(color).flags(flags);
    }

    const compLiquidTemp = (name, heat, elements, color, flags) => {
        event.create(name).liquid(new GTFluidBuilder().temperature(heat)).components(elements).color(color).flags(flags);
    }
    
    const compLiquidStill = (name, elements, flags) => {
        event.create(name).liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill()).components(elements).flags(flags);
    }
    
    const compDustLiquid = (name, elements, color, flags) => {
        event.create(name).dust().fluid().components(elements).color(color).flags(flags);
    }

    const elemDustFluid = (name, color, flags) => {
        event.create(name).dust().fluid().element(GTElements.get(name)).color(color).flags(flags);
    }
    
    const compDust = (name, elements, color, flags) => {
        event.create(name).dust().components(elements).color(color).flags(flags);
    }
    
    const compDustIcon = (name, elements, color, icon, flags) => {
        event.create(name).dust().components(elements).color(color).iconSet(icon).flags(flags);
    }

    const elemDust = (name, color, flags) => {
        event.create(name).dust().element(GTElements.get(name)).color(color).flags(flags);
    }
    
    const compGem = (name, elements, color, icon, flags) => {
        event.create(name).gem().components(elements).color(color).iconSet(icon).flags(flags);
    }

    const elemGem = (name, color, icon, flags) => {
        event.create(name).gem().element(GTElements.get(name)).iconSet(icon).color(color).flags(flags);
    }
    
    const compGas = (name, elements, color, flags) => {
        event.create(name).gas().components(elements).color(color).flags(flags);
    }

    const elemGas = (name, color, flags) => {
        event.create(name).gas().element(GTElements.get(name)).color(color).flags(flags);
    }

    const polymerFluidPipe = (name, elements, color, pipe, flags) => {
            event.create(name).polymer().fluid().components(elements).color(color).flags(flags).fluidPipeProperties(pipe[0], pipe[1], pipe[2], pipe[3], pipe[4], pipe[5]);
    }

    const polymerFluid = (name, elements, color, flags) => {
            event.create(name).polymer().fluid().components(elements).color(color).flags(flags);
    }

    const conductor = (name, elements, color, icon, blasting, cable, flags) => {
        event.create(name).ingot().fluid().components(elements).color(color).iconSet(icon).flags(flags).blastTemp(blasting[0], blasting[1], blasting[2], blasting[3]).cableProperties(cable[0], cable[1], cable[2], cable[3]);
    }
    
    const conductorSuper = (name, elements, color, blasting, cable, rotorstat) => {
        if (blasting.includes(blasting[0])){
            event.create(name).ingot().fluid().components(elements).color(color).iconSet(SHINY).flags(foil, gear, long_rod, plates, rod, rotor, small_gear, ring, frame, fine_wire)
                .blastTemp(blasting[0], blasting[1], blasting[2], blasting[3]).cableProperties(cable[0], cable[1], cable[2], cable[3]).rotorStats(rotorstat[0], rotorstat[1], rotorstat[2], rotorstat[3]);
        } else {
            event.create(name).ingot().fluid().components(elements).color(color).iconSet(SHINY).flags(foil, gear, long_rod, plates, rod, rotor, small_gear, ring, frame, fine_wire)
                .cableProperties(cable[0], cable[1], cable[2], cable[3]).rotorStats(rotorstat[0], rotorstat[1], rotorstat[2], rotorstat[3]);
        }
    }

    const compDustLiquidOre = (name, elements, color, flags) => {
        event.create(name).dust().liquid().ore(2, 1).components(elements).color(color).flags(flags);
    }
    
    const compDustOre = (name, elements, color, flags) => {
        event.create(name).dust().ore(2, 1).components(elements).color(color).flags(flags);
    }
    
    const compGemOre = (name, elements, color, icon) => {
        event.create(name).gem().ore(2, 1).components(elements).color(color).iconSet(icon);
    }

    const compIngotPlasma = (name, elements, color, icon, blasting, flags) => {
        event.create(name).ingot().fluid().plasma().components(elements).color(color).iconSet(icon).flags(flags).blastTemp(blasting[0], blasting[1], blasting[2], blasting[3]);
    }

    const conductorPlasma = (name, elements, color, icon, blasting, cable, flags) => {
        event.create(name).ingot().fluid().plasma().components(elements).color(color).iconSet(icon).flags(flags).blastTemp(blasting[0], blasting[1], blasting[2], blasting[3]).cableProperties(cable[0], cable[1], cable[2], cable[3]);
    }

    const noCompFluid = (name, color) => {
        event.create(name).fluid().color(color);
    }

    const compPlasma = (name, temp, elements, color, flags) => {
        event.create(name).liquid(new GTFluidBuilder().temperature(temp)).plasma().components(elements).color(color).flags(flags);
    }

    // Temp

    compPlasma('americium_plas',1449,'americium',0x287869,no_decomp);

    compPlasma('tin_plas',505,'tin',0xfafeff,no_decomp);

    event.create('borosilicate_glas').components('1x boron','7x silicon_dioxide').color(0xFAFAFA).secondaryColor(0xfaf5c0).iconSet(SHINY).flags(no_decomp,not_alloy,foil);

    // Materials

    elemIngot('magnetic_zapolgium', 'zapolgium', 0xcc00cc, MAGNETIC, [], [rod, long_rod, magnetic]);

    elemIngotFluid('xeproda', 0x1a0d00, DULL, [15499, 'highest', VA('uev'), 2700], [fine_wire]);

    elemIngotFluid('rhexis', 0x330000, DULL, [15499, 'highest', VHA('uiv'), 2700], []);

    elemIngotFluid('chalyblux', 0xffcccc, DULL, [15499, 'highest', VA('uev'), 2575], []);

    elemIngotFluid('mythril', 0x006666, METALLIC, [11299, 'highest', VA('uhv'), 2400], [foil, gear, long_rod, plates, rod, rotor, small_gear, ring, frame]);

    elemIngotFluid('adamantine', 0xe99700, METALLIC, [13299, 'highest', VHA('uev'), 2300], [foil, gear, long_rod, plates, rod, rotor, small_gear, ring, frame, fine_wire]);

    elemIngotFluid('estalt', 0xff5050, DULL, [12299, 'highest', VA('uhv'), 2200], [foil, gear, long_rod, plates, rod, rotor, small_gear, ring, frame]);

    elemIngotFluid('enriched_estalt', 0xe76c6c, RADIOACTIVE, [12899, 'highest', VA('uhv'), 2500], [foil, gear, long_rod, plates, rod, rotor, small_gear, ring, frame]);

    elemIngotFluid('calamatium', 0x660000, DULL, [13199, 'highest', VA('uhv'), 2400], [foil, gear, long_rod, plates, rod, rotor, small_gear, ring, frame]);

    elemIngotFluid('isovol', 0x290066, DULL, [12999, 'highest', VA('uhv'), 2400], [foil, gear, long_rod, plates, rod, rotor, small_gear, ring, frame]);

    event.create('zapolgium')
        .ingot()
        .fluid()
        .element(GTElements.get('zapolgium'))
        .color(0xcc00cc)
        .iconSet(DULL)
        .blastTemp(10799, 'highest', VA('uhv'), 1600)
        .flags(plates, rod, frame)
        .fluidPipeProperties(18000, 7200, true,true,true,true);

    // Thermal Superconductors
    if (global.packmode !== 'hard'){(() => { 
    conductorSuper('soul_infused', ['1x invar', '2x mystery'], 0xcc9966, [], [V('lv'), 4, 0, true], [150, 130, 2, 4000]);

    conductorSuper('signalum', ['1x silver', '3x copper', '4x redstone'], 0xff3300, [1700, 'low', VA('mv'), 800], [V('mv'), 16, 0, true], [190, 150, 3, 6000]);

    conductorSuper('lumium', ['1x silver', '3x tin', '2x glowstone'], 0xffffb3, [1700, 'low', VA('hv'), 1000], [V('hv'), 16, 0, true], [220, 170, 4, 8000]);

    conductorSuper('enderium', ['3x lead', '1x diamond', '2x ender_pearl'], 0x006666, [3500, 'low', VA('ev'), 1200], [V('ev'), 32, 0, true], [300, 190, 5, 10000]);

    conductorSuper('shellite', ['1x black_bronze', '3x signalum'], 0x9933ff, [4400, 'mid', VA('iv'), 1400], [V('iv'), 64, 0, true], [450, 220, 6, 12000]);

    conductorSuper('twinite', ['3x manganese_phosphide', '2x amethyst', '1x lumium'], 0xf66999, [5300, 'mid', VA('luv'), 1600], [V('luv'), 64, 0, true], [700, 260, 7, 16000]);

    conductorSuper('dragonsteel', ['4x tungsten', '8x magnesium_diboride', '2x cadmium'], 0x3333cc, [7100, 'high', VA('zpm'), 1800], [V('zpm'), 96, 0, true], [1100, 380, 8, 18000]);

    conductorSuper('prismalium', ['8x naquadah', '4x mercury_barium_calcium_cuprate', '7x tungsten_carbide'], 0x66ffff, [9000, 'high', VA('zpm'), 2000], [V('uv'), 48, 0, true], [1600, 470, 9, 24000]);

    conductorSuper('melodium', ['2x uranium_triplatinum', '14x electrum', '3x amethyst', '4x darmstadtium', '7x europium'], 0xd9b3ff, [10000, 'higher', VA('uv'), 2200], [V('uv'), 128, 0, true], [2000, 550, 10, 32000]);

    conductorSuper('stellarium', ['12x neutronium', '4x melodium', '1x samarium_iron_arsenic_oxide'], 0xccffff, [10799, 'highest', VA('uhv'), 2400], [V('uhv'), 192, 0, true], [3200, 660, 12, 48000]);

    conductorSuper('ancient_runicalium', ['5x zapolgium', '18x stellarium', '8x zirconium'], 0xFAB922, [11749, 'highest', VA('uev'), 3600], [V('uev'), 256, 0, true], [6400, 720, 15, 64000]);
    })()}

    // Nuclear Reactor Materials
    compIngot('austenitic_stainless_steel_304', ['35x steel', '10x chromium', '4x nickel', '1x manganese', '1x silicon'], 0x800040, METALLIC, [3500, 'low', VA('ev'), 1500], [plates, rod, frame]);

    compIngot('inconel_625', ['7x nickel', '2x chromium', '1x steel'], 0xa3a375, SHINY, [3500, 'low', VA('ev'), 1500], [plates, rod, frame]);

    compLiquid('nuclear_steam', ['1x steam', '1x mystery'], 0xcccccc, [no_decomp]);

    compLiquid('hot_sodium_potassium', ['1x sodium_potassium', '1x mystery'], 0x82fcc3, [no_decomp]);

    compLiquid('hot_pcb_coolant', ['1x pcb_coolant', '1x mystery'], 0xc9ca81, [no_decomp]);

    // Netherite Line
    elemDustFluid('debris', 0x804000, [no_decomp]);

    compDust('purified_debris', ['debris'], 0xcc0000, []);

    compLiquid('chlorine_trifluoride', ['1x chlorine', '3x fluorine'], 0xb3ff99, []);

    compLiquid('tetrachloroethylene', ['2x carbon', '4x chlorine'], 0xd966ff, []);
    
    // Netherite Derivatives/Alloys
    elemIngotFluid('pure_netherite', 0x1a0d00, DULL, [5000, 'low', VA('iv'), 1200], [foil, gear, long_rod, plates, rod, rotor, small_gear, ring]);

    elemIngot('magnetic_pure_netherite', 'pure_netherite', 0x1a0d00, MAGNETIC, [], [rod, long_rod, magnetic]);

    compGem('naquadic_netherite', ['3x naquadah', '5x pure_netherite', '2x caesium', '5x cerium', '12x fluorine', '32x oxygen'], 0xffd966, DIAMOND, []);

    compIngotLiquid('weapon_grade_naquadah', ['7x naquadria', '2x pure_netherite', '5x neutronium', '16x fluorine'], 0xccff33, DULL, [10500, 'highest', VHA('uv'), 2500], [foil, gear, long_rod, plates, rod, rotor, small_gear, ring, frame]);

    compGem('runic_laser_source_base', ['2x naquadic_netherite', '10x tritanium', '5x trinium'], 0x00ff00, OPAL, []);

    // Crown Ethers
    compLiquid('sulfur_dichloride', ['1x sulfur', '2x chlorine'], 0xcc0000, []);

    compLiquid('thionyl_chloride', ['1x sulfur', '1x oxygen', '2x chlorine'], 0xffffcc, [no_decomp]);

    compLiquid('sulfuryl_chloride', ['1x sulfur', '2x oxygen', '2x chlorine'], 0xffffcc, []);

    compLiquid('triglycol_dichloride', ['6x carbon', '12x hydrogen', '2x oxygen', '2x chlorine'], 0xffffcc, []);

    compLiquid('ethylene_glycol', ['2x carbon', '6x hydrogen', '2x oxygen'], 0xf2f2f2, []);

    compLiquid('diethylene_glycol', ['4x carbon', '10x hydrogen', '3x oxygen'], 0xf2f2f2, []);

    compLiquid('triethylene_glycol', ['6x carbon', '14x hydrogen', '4x oxygen'], 0xf2f2f2, []);

    compLiquid('ethylene_oxide', ['2x carbon', '4x hydrogen', '1x oxygen'], 0xd9d9d9, []);

    compDust('lithium_perchlorate', ['1x lithium', '1x chlorine', '4x oxygen'], 0xe6f2ff, []);

    compDust('sodium_perchlorate', ['1x sodium', '1x chlorine', '4x oxygen'], 0xccf2ff, []);

    compDust('sodium_chlorate', ['1x sodium', '1x chlorine', '3x oxygen'], 0xccf2ff, []);

    compDust('silver_oxide', ['2x silver', '1x oxygen'], 0xffffff, []);

    compLiquid('12_crown_4', ['8x carbon', '16x hydrogen', '4x oxygen'], 0xcc6699, []);

    compLiquid('15_crown_5', ['10x carbon', '20x hydrogen', '5x oxygen'], 0x0099cc, []);

    compLiquid('18_crown_6', ['12x carbon', '24x hydrogen', '6x oxygen'], 0x99ff33, []);

    compLiquid('12_crown_4_li', ['1x lithium', '8x carbon', '16x hydrogen', '4x oxygen'], 0x993366, [no_decomp]);

    compLiquid('15_crown_5_na', ['1x sodium', '10x carbon', '20x hydrogen', '5x oxygen'], 0x006080, [no_decomp]);

    compLiquid('18_crown_6_k', ['1x potassium', '12x carbon', '24x hydrogen', '6x oxygen'], 0x4d9900, [no_decomp]);

    compDust('4_toluenesulfonyl_chloride', ['7x carbon', '7x hydrogen', '2x chlorine', '2x oxygen', '1x sulfur'], 0xffccc, [no_decomp]);

    compDust('triethylene_glycol_ditosylate', ['20x carbon', '26x hydrogen', '8x oxygen', '2x sulfur'], 0xb8b894, [no_decomp]);

    compDust('sodium_azide', ['1x sodium', '3x nitrogen'], 0xcc6699, []);

    compDust('palladium_on_carbon', ['1x palladium', '1x carbon'], 0xff9900, []);

    compDust('sodium_p_toluenesulfonate', ['7x carbon', '7x hydrogen', '1x sodium', '3x oxygen', '1x sulfur'], 0x00cc00, [no_decomp]);

    compDust('triethylene_glycol_diazide', ['6x carbon', '12x hydrogen', '2x oxygen', '6x nitrogen'], 0x6666ff, [no_decomp]);

    compDust('triethylene_glycol_diamine', ['6x carbon', '16x hydrogen', '2x oxygen', '2x nitrogen'], 0xcc00cc, [no_decomp]);

    compLiquid('cryptand', ['18x carbon', '36x hydrogen', '6x oxygen', '2x nitrogen'], 0x993333, [no_decomp]);

    compLiquid('cryptand_k', ['1x potassium', '18x carbon', '36x hydrogen', '6x oxygen', '2x nitrogen'], 0x602020, [no_decomp]);

    compLiquid('cryptand_na', ['1x sodium', '18x carbon', '36x hydrogen', '6x oxygen', '2x nitrogen'], 0x602020, [no_decomp]);

    compLiquid('cryptand_li', ['1x lithium', '18x carbon', '36x hydrogen', '6x oxygen', '2x nitrogen'], 0x602020, [no_decomp]);

    // Mystical Agriculture Alloys
    [
        {tier: 'inferium', color: 0x66ff33},
        {tier: 'prudentium', color: 0x336600},
        {tier: 'tertium', color: 0xff6600},
        {tier: 'imperium', color: 0x0099ff},
        {tier: 'supremium', color: 0xff0000},
        {tier: 'awakened_supremium', color: 0xff3300},
        {tier: 'insanium', color: 0x9900cc},
    ].forEach(essence => {
        compIngot(`${essence.tier}_steel`, ['1x steel', '1x mystery'], essence.color, DULL, [], [plates, rod, no_decomp]);
    })

    // Diatrons
    compGem('diatron', [], 0x6699ff, LAPIS, [no_decomp]);

    // Echo/Void Line
    elemFluid('echo_r', 'echo_r', 0x003333, []);

    compIngot('raw_void', ['1x echo_r', '1x neutronium'], 0x006666, DULL, [], [no_decomp]);

    compIngotLiquid('void', ['1x echo_r', '1x neutronium'], 0x001a1a, DULL, [10000, 'highest', VA('uiv'), 8000], [rod, foil, plates, long_rod, frame, no_decomp, no_abs_recipe,bolt_and_screw]);
    
    //Extended Sculk
    compDustIcon('ionized_sculk', [], 0x061A0D, RADIOACTIVE, [no_decomp]);

    compDust('sodium_over_sculk', ['1x sodium','1x mystery'], 0x071A22, [no_decomp]);
    
    // Extras
    compIngotLiquid('trinaquadalloy', ['6x trinium', '2x naquadah', '1x carbon'], 0x281832, BRIGHT, [8747, 'higher', VA('zpm'), 1200], [plates, rod, frame, fine_wire, foil, dense_plate]);

    compLiquid('perchloric_acid', ['1x hydrogen', '1x chlorine', '4x oxygen'], 0xffe6e6, []);

    compDust('calcium_perchlorate', ['1x calcium', '2x chlorine', '8x oxygen'], 0xffff99, []);

    compLiquid('silica_gel', ['1x chlorine', '1x hydrogen', '6x oxygen', '1x silicon'], 0xe6e6e6, [no_decomp]);

    compDust('calcium_sulfate', ['1x calcium', '1x sulfur', '4x oxygen'], 0xffbf80, []);

    compDust('sodium_oxide', ['2x sodium', '1x oxygen'], 0x6666ff, []);

    compDust('iron_selenide', ['1x iron', '1x selenium'], 0xb3ff66, []);

    compDust('strontium_oxide', ['1x strontium', '1x oxygen'], 0xffcc99, []);

    compDust('titanium_oxide', ['1x titanium', '2x oxygen'], 0xff66cc, []);

    compDust('strontium_titanium_oxide', ['1x strontium', '1x titanium', '3x oxygen'], 0xff0000, []);

    compDust('copper_chloride', ['1x copper', '1x chlorine'], 0xffffff, []);

    compLiquid('npk_solution', ['15x apatite', '5x potassium', '1x sulfur_trioxide', '1x nitrogen', '2x water'], 0xb8c3f5, []);

    compLiquid('cupric_chloride_solution', ['1x copper_chloride', '1x hydrochloric_acid'], 0x336600, []);

    // Ores and bedrock fluids

    compDustLiquidOre('titanite', ['1x calcium', '1x titanium', '1x silicon', '5x oxygen'], 0x66ffff, [no_decomp]);

    compDustLiquidOre('zapolite', ['2x zapolgium', '4x iodine', '2x aluminium', '5x oxygen'], 0xcc0099, [no_decomp]);

    compDustOre('lautarite', ['1x calcium', '2x iodine', '6x oxygen'], 0x6666ff, [no_decomp]);

    compDustLiquidOre('iodargyrite', ['1x silver', '1x iodine'], 0x8080ff, [no_decomp]);

    compDustLiquidOre('clausthalite', ['1x lead', '1x selenium'], 0x666633, [no_decomp]);

    compDustLiquidOre('crookesite', ['7x copper', '1x thallium', '4x selenium'], 0x00ff99, [no_decomp]);

    compDustLiquidOre('calaverite', ['1x gold', '2x tellurium'], 0xcc9900, [no_decomp]);

    compDustLiquidOre('sylvanite', ['1x silver', '2x tellurium'], 0xff5050, [no_decomp]);

    compDustLiquidOre('tiemannite', ['1x mercury', '1x selenium'], 0xcc0066, [no_decomp]);

    compDustOre('klockmannite', ['1x copper', '1x selenium'], 0x009999, [no_decomp]);

    compDustOre('stibiopalladinite', ['5x palladium', '2x antimony'], 0x333399, [no_decomp]);

    compDustOre('berzelianite', ['2x copper', '1x selenium'], 0x990000, [no_decomp]);

    compDustOre('umangite', ['3x copper', '2x selenium'], 0x006699, [no_decomp]);

    compDustOre('aguilarite', ['3x silver', '1x selenium', '1x sulfur'], 0xff5050, [no_decomp]);

    compDustLiquidOre('strontianite', ['1x strontium', '1x carbon', '3x oxygen'], 0xe6ffff, []);

    compGemOre('celestine', ['1x strontium', '1x carbon', '4x oxygen'], 0xe6ffff, GEM_VERTICAL);

    compDust('polybasite', ['12x silver', '4x copper', '2x arsenic', '13x sulfur'], 0xcc6600, []);

    compDustOre('zavaritskite',['1x bismuth', '1x oxygen', '1x fluorine'], 0xE7D795, []);

    compLiquidTemp('abydos_titanite_rich_magma', 3520, ['6x titanite', '2x calaverite','2x sylvanite', '2x tiemannite', '1x strontianite'], 0xe65c00, [no_decomp]);

    compLiquidTemp('abydos_zapolite_rich_magma', 4980, ['7x zapolite', '3x crookesite', '2x clausthalite', '1x iodargyrite'], 0xff471a, [no_decomp]);
    
    compLiquidTemp('abydos_titanite_poor_magma', 3870, ['6x titanite', '2x calaverite','2x sylvanite', '2x tiemannite', '1x strontianite', '1x mystery'], 0x914410, [no_decomp]);

    compLiquidTemp('abydos_zapolite_poor_magma', 5460, ['7x zapolite', '3x crookesite', '2x clausthalite', '1x iodargyrite', '1x mystery'], 0xB02A09, [no_decomp]);

    // Nether
       
        //Extended Debris
        compDustLiquid('ancient_debris', ['1x mystery'], 0x603d1a, [no_decomp]);

        elemIngotFluid('ancient_netherite', 0x46271b, DULL, [12349, 'low', VA('uev'), 1200], [plates,rod,no_decomp,dense_plate,frame]);

        //Atomic Nether Dust Line
        compDustIcon('atomic_nether_sludge', ['1x mystery','1x mystery','1x mystery','1x mystery'], 0x883039, RADIOACTIVE, [no_decomp]);

        compDust('deactivated_nether', ['1x mystery','1x mystery'], 0x664C4C, [no_decomp]);
        
        compDust('activated_nether', ['1x mystery','1x mystery'], 0xA01819, [no_decomp]);

        //Estalt Line
        compLiquidTemp('molten_estaltadyne_mixture', 3500, ['1x mystery','1x estalt','1x mystery'], 0x8E0505, [no_decomp]);

        compDustLiquid('estaltadyne', ['4x estalt','3x titanium','2x aluminium','5x sulfur','4x oxygen'], 0x8E0535, [no_decomp]);

        compDust('metmalic_estaltadyne', ['4x estalt','3x titanium','2x aluminium','5x sulfur'], 0x8E0560, [no_decomp]);

        compDust('magnemalic_estaltadyne', ['4x estalt','3x titanium','5x sulfur'], 0x8E0480, [no_decomp]);

        compDust('tytite_estaltadyne', ['4x estalt','3x titanium'], 0x8E0340, [no_decomp]);

        compDust('estaltadyne_hydride', ['4x estalt','9x hydrogen'], 0x8E0505, [no_decomp]);
        
        //Enriched Estalt Line
        compLiquid('enriched_estaltadyne_mixture', ['1x mystery','1x enriched_estalt','1x mystery'], 0xBE4747, [no_decomp]);

        compLiquid('enriched_estaltadyne_solution', ['1x mystery','1x enriched_estalt','1x mystery'], 0xBE4717, [no_decomp]);

        compLiquid('enriched_estaltadyne_slurry', ['1x mystery','1x enriched_estalt','1x mystery'], 0xBE4777, [no_decomp]);

        compLiquid('enriched_estaltadyne_naquide_slurry_mixture', ['1x mystery','1x enriched_estalt','1x enriched_naquadah','1x mystery'], 0xBE4697, [no_decomp]);

        compLiquid('hyper_enriched_estaltadyne_slurry_mixture', ['1x mystery','2x enriched_estalt'], 0xBE4697, [no_decomp]);
        
        compLiquid('hyper_enriched_estaltadyne_slurry_residue', ['1x mystery','2x enriched_estalt'],0xBE4677, [no_decomp]);

        compLiquid('sodium_hyper_enriched_estaltadyne_sludge', ['2x sodium','1x mystery','2x enriched_estalt'], 0xBE4697, [no_decomp]);

        compLiquid('hyper_enriched_estaltadyne_concentrate', ['2x enriched_estalt','1x mystery'], 0xBE4587, [no_decomp]);
        
        //Adamantine Line
        compLiquid('enriched_adamantamite_mixture', ['1x mystery','1x adamantine','1x mystery'], 0x866E4B, [no_decomp]);

        compLiquidTemp('molten_adamantamite_mixture', 3700, ['1x mystery','1x adamantine','1x mystery'], 0x866E7B, [no_decomp]);

        compDustLiquid('adamantamite', ['5x adamantine','4x titanium','2x iron','6x nitrogen','12x oxygen'], 0x825F2B, [no_decomp]);

        compDust('adamantamite_metaltide', ['5x adamantine','4x titanium','2x iron','6x nitrogen'], 0x8F611E, [no_decomp]);

        compDust('adamantamite_magnide', ['5x adamantine','4x titanium','2x iron'], 0x744D13, [no_decomp]);

        compDust('adamantamite_titite', ['5x adamantine','4x titanium'], 0xB68E52, [no_decomp]);

        compDust('adamantine_5', ['5x adamantine'], 0xCB9D58, [no_decomp]);

        compDust('adamantine_hydroxide', ['1x adamantine','3x hydrogen','3x oxygen'], 0xCB8858, [no_decomp]);
        
        //Mythril Line
        compLiquid('enriched_mythrillic_mixture', ['1x mystery','1x mythril','1x mystery'], 0x238213, [no_decomp]);
        
        compLiquidTemp('molten_mythrillic_mixture', 3100, ['1x mystery','1x mythril','1x mystery'], 0x238342, [no_decomp]);

        compDustLiquid('mythrillic', ['6x mythril','6x carbon','14x hydrogen','3x zirconium','2x vanadium'], 0x238362, [no_decomp]);

        compDust('mythrillic_carbinide', ['6x mythril','6x carbon','3x zirconium','2x vanadium'], 0x238441, [no_decomp]);

        compDust('mythrillic_metlide', ['6x mythril','3x zirconium','2x vanadium'], 0x238451, [no_decomp]);

        compDust('mythrillic_metnide', ['6x mythril','3x zirconium'], 0x238432, [no_decomp]);

        compDust('mythrillic_hydride', ['1x mythril','2x hydrogen'], 0x238338, [no_decomp]);
        
        // Calamatium/Isovol Line
        compLiquid('impure_calamatium_solution', [], 0x990000, []);

        compLiquid('impure_isovol_solution', [], 0x000066, []);

        compLiquid('calamatium_solution', [], 0xe60000, []);

        compLiquid('isovol_solution', [], 0x6600cc, []);

        compDust('calamatium_fluoride', ['1x calamatium', '2x fluorine'], 0xcc0066, [no_decomp]);

        compDust('isovol_fluoride', ['1x isovol', '2x fluorine'], 0x9900ff, [no_decomp]);

        // Magmas
        compLiquidTemp('highly_unstable_nether_magma', 9001, ['1x mystery'], 0xFFA025, [no_decomp]);

        compLiquidTemp('debris_rich_nether_magma', 7600, ['1x mystery'], 0x6C3628, [no_decomp]);
 
        compLiquidTemp('mythrillic_nether_magma', 9299, ['1x mystery','1x mythril','1x mystery'], 0x238383, [no_decomp]);

        compLiquidTemp('adamantamite_nether_magma', 11299, ['1x mystery','1x adamantine','1x mystery'], 0x826944, [no_decomp]);

        compLiquidTemp('estaltadyne_nether_magma', 10299, ['1x mystery','1x estalt','1x mystery'], 0xA92323, [no_decomp]);

        compLiquidTemp('mystical_nether_magma', 11600, ['1x mystery','1x adamantine','1x mystery','1x estalt','1x mystery','1x mythril','1x mystery'], 0xF26B87 ,[no_decomp]);
        
        compLiquidTemp('enriched_mystical_concentrate', 1260, ['1x mystery','1x adamantine','1x mystery','1x enriched_estalt','1x mystery','1x mythril','1x mystery'], 0xF26B87, [no_decomp]);

    // End

    // Abydos
        // Titanite(Zirconium) Line
        compLiquid('titanite_slurry', ['1x titanite', '1x mystery'], 0x862d2d, [no_decomp]);

        compLiquid('titanite_slurry_residue', ['1x rutile', '1x mystery'], 0xbf4040, [no_decomp]);

        compLiquid('hydroxo_dioxo_titanite_mixture', ['2x sodium', '1x rutile', '2x oxygen', '2x hydrogen', '1x mystery'], 0xd27979, [no_decomp]);

        compLiquid('titanite_residue', ['1x rutile', '1x mystery'], 0xe6004c, [no_decomp]);

        compLiquid('titanium_tetrachloride_mixture', ['1x titanium_tetrachloride', '1x mystery'], 0xff1a66, [no_decomp]);

        compDust('zirconium_tetrachloride', ['1x zirconium', '4x chlorine'], 0xffad33, [no_decomp]);

        // Zapolite(Zapolgium) line
        compDust('zapolgium_aluminium_oxide', ['1x zapolgium', '2x iodine', '2x aluminium', '4x oxygen'], 0x6666ff, [no_decomp]);

        compDust('zapolgium_diiodide_dioxide', ['1x zapolgium', '2x iodine', '2x oxygen'], 0x660066, [no_decomp]);

        compDust('zapolgium_diiodide_oxide', ['1x zapolgium', '2x iodine', '1x oxygen'], 0xff66ff, [no_decomp]);

        compDust('zapolgium_oxide', ['1x zapolgium', '1x oxygen'], 0xff9933, [no_decomp]);

        compDust('zapolgium_chloride', ['1x zapolgium', '2x chlorine'], 0x99ff33, [no_decomp]);

        compDust('zapolgium_hydroxide', ['1x zapolgium', '2x oxygen', '2x hydrogen'], 0x00ff99, [no_decomp]);

        // Alloys and other compounds
        conductor('zalloy', ['3x zapolgium', '4x duranium', '2x europium'], 0xff66ff, METALLIC, [10799, 'highest', VHA('zpm'), 3000], [V('uv'), 2, 4, false], [plates, frame, rod, bolt_and_screw, round, long_rod, gear, small_gear, ring]);

        conductor('zirconium_selenide_diiodide', ['1x zirconium', '1x selenium', '2x iodine'], 0x6600cc, DULL, [8900, 'higher', VA('luv'), 4000], [V('uhv'), 8, 16, false], [spring]);

        compIngotLiquid('zircalloy_4', ['251x zirconium', '3x tin', '2x chromium', '1x iron'], 0xff9999, DULL, [8900, 'higher', VA('luv'), 2000], [gear, small_gear, rotor, round, frame]);

        conductor('iron_selenide_over_strontium_titanium_oxide', ['1x iron_selenide', '1x strontium_titanium_oxide'], 0x66ff33, DULL, [10299, 'highest', VA('uv'), 2500], [V('uhv'), 4, 12, false], [fine_wire, bolt_and_screw]);

    // Misc
    compIngotLiquid('indium_tin_lead_cadmium_soldering_alloy', ['14x indium', '3x tin', '2x lead', '1x cadmium'], 0xa6a6a6, DULL, [], []);

    compIngotLiquid('thorium_plut_duranide_241',  ['4x thorium', '1x duranium', '3x plutonium_241'], 0xEC342A, [], [10199, 'highest', VA('uv'), 850], [fine_wire, no_decomp, foil]);

    // AE2 (constants left due to sec color components)
    elemFluid('skystone', 'skystone', 0x414445, []);

    event.create('fluix')
        .element(GTElements.get('fluix'))
        .flags(lens)
        .iconSet("fluix");

    compIngotLiquid('sky_steel', ['1x skystone', '2x steel'], 0xCCFFCC, METALLIC, [1600, 'low', VA('mv'), 400], [no_decomp, plates, rod, frame]);
    
    const skystone_alloys = (material, color, icon) => {
        event.create(`${material}_skystone_alloy`).ingot().fluid().components('1x skystone', `2x ${material}`).color(color).secondaryColor(0x414445).iconSet(icon).blastTemp(1600, 'low', VA('mv'), 200).flags(no_decomp, plates);
    }
    
    skystone_alloys('gold', 0xCFBE38, 'METALLIC');
    skystone_alloys('diamond', 0x9BD6D8, 'SHINY');
    skystone_alloys('certus_quartz', 0x67D6DB, 'DULL');

    compIngotLiquid('fluix_steel', ['1x fluix', '2x steel'], 0x8F5CCB, METALLIC, [1900, 'mid', VA('mv'), 400], [no_decomp, plates, rod, frame, foil]);

    const netherite_skystone_alloys = (material, color, icon) => {
        event.create(`netherite_${material}_skystone_alloy`).ingot().fluid().components('4x netherite', '2x diamond_skystone_alloy', `${material}_skystone_alloy`)
            .color(color).secondaryColor(0x0D0702).iconSet(icon).flags(no_decomp, plates, rod, frame).blastTemp(4000, 'high', VA('iv'), 800);
    }
    
    netherite_skystone_alloys('gold', 0x978B2D, 'METALLIC');
    netherite_skystone_alloys('certus_quartz', 0x396A6C, 'DULL');

    // PEEK plastic Line
    compDust('disodium_salt_of_hydroquinone', ['6x carbon','4x hydrogen','2x oxygen','2x sodium'], 0xeaeaf9, no_decomp);

    compDust('hydroquinone', ['6x carbon','6x hydrogen','2x oxygen'], 0xf9f9ff, [no_decomp]);

    compDust('sodium_fluoride', ['1x sodium','1x fluorine'], 0xDEDEE2, []);

    compGas('carbon_acid', ['2x hydrogen','1x carbon','3x oxygen'], 0x333333, [no_decomp]);

    compLiquid('fluorobenzene', ['6x carbon','5x hydrogen','1x fluorine'], 0xffffff, [no_decomp]);

    compLiquid('4_fluorobenzoyl_chloride', ['7x carbon','4x hydrogen','1x chlorine','1x fluorine','1x oxygen'], 0xfffff0, [no_decomp]);
    
    compLiquid('benzoyl_chloride', ['7x carbon','5x hydrogen','1x chlorine','1x oxygen'], 0xfffadf, [no_decomp]);

    compLiquid('benzotrichloride', ['7x carbon','5x hydrogen','3x chlorine'], 0xddd8bc, [no_decomp]);

    compDust('44_difluorobenzophenone', ['13x carbon','8x hydrogen','1x oxygen','2x fluorine'], 0xeee1c9 ,[no_decomp]); //naming like this: 4_4_di... will make kubejs go error to annoy you :)
    
    polymerFluidPipe('polyether_ether_ketone', ['19x carbon','12x hydrogen','3x oxygen'], 0xccbba7, [550, 600, true, true, true, false], [foil, plates, ring, plates, no_decomp]);
    
    // SiC/Bi2Te3 Line
    compDust('sodium_borohydride', ['1x sodium','1x boron','4x hydrogen'], 0xE3DEC8, [no_decomp]);

    compGas('nitrate', ['1x nitrogen', '3x oxygen'], 0xDBC365, [no_decomp]); //Hide in JEI

    compDust('bismuth_3_nitrate', ['1x bismuth', '3x nitrate'], 0xDEDBCD, [no_decomp]);

    compDust('sodium_nitrate', ['1x sodium','1x nitrogen','3x oxygen'], 0xE6E5E5, []);

    compGas('diborane', ['2x boron','6x hydrogen'], 0xFDFFE1, []);

    compDust('silicon_carbide', ['1x silicon', '1x carbon'], 0xB79F8D, []);
        
    compDust('bismuth_tritelluride', ['2x bismuth', '3x tellurium'], 0xDEB18E, [no_decomp]); //Hide in JEI

    compDust('silicon_carbide_over_bismuth_tritelluride', ['1x silicon_carbide', '1x bismuth_tritelluride'], 0x86C455, []);

    //Hexafluorobromic Acid
    compDustIcon('nickel_fluoride', ['1x nickel', '2x fluorine'], 0xA7A9A8, METALLIC, []);

    compDustIcon('caesium_fluoride', ['1x caesium', '1x fluorine'], 0x969D9B, DULL, []);

    compLiquid('bromine_pentafluoride', ['1x bromine', '5x fluorine'], 0x8E6565, []);
     
    compLiquid('hexafluorobromine', ['1x bromine', '6x fluorine'], 0x000000, [no_decomp]);

    compLiquid('caesium_hexafluorobromine', ['1x caesium', '1x hexafluorobromine'], 0x988585 ,[no_decomp]);

    compLiquid('hexafluorobromic_acid', ['1x hydrogen', '1x hexafluorobromine'], 0xA15E5E, [no_decomp]);

    //ANSD Line
    compDust('sulfate', ['1x sulfur', '4x oxygen'], 0xD5BA23, []);

    compDust('silicate', ['1x silicon', '4x oxygen'], 0xC0BA97, [no_decomp]);

    compDust('pyrophosphate', ['2x phosphorus', '7x oxygen'], 0xC08B63, [no_decomp]);

    compDust('sulfur_hexafluoride', ['1x sulfur', '6x fluorine'], 0xC0BA63, [no_decomp]);

    compDust('plutonium_octofluoride', ['2x plutonium', '8x fluorine'], 0x000000, [no_decomp]);

    compLiquid('uranium_tetrafluoride', ['1x uranium', '4x fluorine'], 0x6CAB3F, [no_decomp]);

    compLiquid('hydroxide',['1x oxygen','1x hydrogen'],0xC0D4DD, []); //Hide in JEI

    compLiquid('caesium_oganesson_hexanitrate', ['2x caesium', '1x oganesson', '6x nitrate'], 0x769192, [no_decomp]);

    compLiquid('caesium_oganesson_trioxide', ['2x caesium', '1x oganesson', '3x oxygen'], 0x4E7577, [no_decomp]);

    compLiquid('caesium_nitrate', ['1x caesium', '1x nitrogen', '3x oxygen'], 0x7C8A8B, []);

    compLiquid('oganesson_tetranitrate', ['1x oganesson', '4x nitrate'], 0x948FAD, [no_decomp]);

    compDust('magnesium_hydroxide', ['1x magnesium', '2x hydroxide'], 0x766B73, [no_decomp]);

    compDust('hafnium_thorium_iron_2_hydroxide_potassium_disilicate', ['1x hafnium', '1x thorium', '1x iron', '2x hydroxide', '4x potassium', '2x silicate'], 0x618782, [no_decomp]);

    compDust('iron_2_hydroxide', ['1x iron', '2x hydroxide'], 0x929A98, [no_decomp]);

    compDust('hafnium_thorium_octachloride', ['1x hafnium', '1x thorium', '8x chlorine'], 0x637770, [no_decomp]);

    compDust('thorium_dioxide', ['1x thorium', '2x oxygen'], 0x384F47, [no_decomp]);

    compDust('hafnium_dioxide', ['1x hafnium', '2x oxygen'], 0x88A1A0, [no_decomp]);

    compDust('sodium_hafnate', ['2x sodium', '1x hafnium', '3x oxygen'], 0x8894A1, [no_decomp]);

    compDust('barium_diastatide', ['1x barium', '2x astatine'], 0x665058, [no_decomp]);

    compDust('barium_hydroxide', ['1x barium', '2x hydroxide'], 0xB5AC9B, [no_decomp]);

    compDust('barium_carbonate', ['1x barium', '1x carbon', '3x oxygen'], 0x9B8F77, []);

    compDust('sodium_astatide', ['1x sodium', '1x astatine'], 0x5F5076, [no_decomp]);

    compLiquid('hydroastatic_acid', ['1x hydrogen', '1x astatine'], 0xB56C5B, [no_decomp]);

    compLiquid('silicic_acid', ['4x hydrogen', '1x silicate'], 0xB4BBBE, [no_decomp]);

    compDust('seaborgium_cerium_tricarbon_octasulfate', ['1x seaborgium', '1x cerium', '3x carbon', '8x sulfate'], 0x75A99E, [no_decomp]);

    compDust('cerium_4_sulfate', ['1x cerium', '2x sulfate'], 0x828685, [no_decomp]);

    compDust('chromium_sulfate', ['2x chromium', '3x sulfur', '12x oxygen'], 0xEEE9DB, []);

    compDust('cerium_dioxide', ['1x cerium', '2x oxygen'], 0xB9CFDB, []);

    compDust('seaborgium_trisulfate', ['1x seaborgium', '3x sulfate'], 0x8AA89B, [no_decomp]);

    compDust('seaborgium_trioxide', ['1x seaborgium', '3x oxygen'], 0x4B827B, [no_decomp]);

    compDust('sodium_seaborgate', ['2x sodium', '1x seaborgium', '4x oxygen'], 0x298B80, [no_decomp]);

    compDust('seaborgium_dioxide', ['1x seaborgium', '2x oxygen'], 0x12A190, [no_decomp]);

    compDust('hafnium_hexachloride', ['1x hafnium', '6x chlorine'], 0xA0A8A6, [no_decomp]);

    compDust('hafnium_thorium_iron_magnesium_disilicate_monosulfate', ['1x hafnium', '1x thorium', '1x iron', '2x magnesium', '2x silicate', '1x sulfate'], 0x98B4B0, [no_decomp]);

    compDust('seaborgium_cerium_tricarbon_tetrakis_orthosilicate', ['1x seaborgium', '1x cerium', '3x carbon', '4x silicate'], 0x268075, [no_decomp]);

    compDust('iron_2_barium_diastatide_trisulfate', ['2x iron', '1x barium', '2x astatine', '3x sulfate'], 0x9EB286, [no_decomp]);

    compDust('dipolonium_diplatinum_tris_pyrophosphate', ['2x polonium', '2x platinum', '3x pyrophosphate'], 0xA0664D, [no_decomp]);

    compDust('flerovium_hexadecafluoride_di_sulfur_trioxide', ['1x flerovium', '2x sulfur_trioxide', '16x fluorine'], 0x36413F, [no_decomp]);

    compDust('silver_sulfate', ['2x silver', '1x sulfur', '4x oxygen'], 0xD4CF91, []);

    compDust('flerovium_hexadecafluoride', ['1x flerovium', '16x fluorine'], 0x5A6759, [no_decomp]);

    compDust('flerovium_tetrafluoride', ['1x flerovium', '4x fluorine'], 0x254722, [no_decomp]);

    compDust('polonium_pyrophosphate', ['1x polonium', '1x pyrophosphate'], 0x356231, [no_decomp]);

    compLiquid('pyrophosphoric_acid', ['4x hydrogen', '1x pyrophosphate'], 0xB3A36D, [no_decomp]);

    compLiquid('orthophosphoric_acid', ['3x hydrogen', '1x phosphorus', '4x oxygen'], 0xD5C385, [no_decomp]);

    compDust('sodium_phosphate', ['3x sodium', '1x phosphorus', '4x oxygen'], 0x819BC8, []);

    compDust('polonium_tetrachloride', ['1x polonium', '4x chlorine'], 0x357C44, [no_decomp]);

    compDust('polonium_hydroxide', ['1x polonium', '4x hydroxide'], 0x0E5A1F, [no_decomp]);

    compDust('polonium_carbonate', ['1x polonium', '1x carbon', '3x oxygen'], 0x2F5637, [no_decomp]);

    compDust('flerovium_hexaoxide_octafluorosulfatoplutonate', ['1x flerovium', '6x oxygen', '2x sulfur_hexafluoride', '2x plutonium_octofluoride'], 0x582914, [no_decomp]);

    compLiquid('caesium_oganesson_hexanitrate_tetrafluorouranate', ['2x caesium', '1x oganesson', '6x nitrate', '2x uranium_tetrafluoride'], 0x427A21, [no_decomp]);

    compDust('hafnium_thorium_iron_magnesium_disilicate_monosulfate_bonded_iron_2_barium_diastatide_trisulfate', ['1x hafnium_thorium_iron_magnesium_disilicate_monosulfate', '1x iron_2_barium_diastatide_trisulfate'], 0x6A8B9A, [no_decomp]);

    compDust('seaborgium_cerium_tricarbon_tetrakis_orthosilicate_linked_dipolonium_diplatinum_tris_pyrophosphate', ['1x seaborgium_cerium_tricarbon_tetrakis_orthosilicate', '1x dipolonium_diplatinum_tris_pyrophosphate'], 0x526A48, [no_decomp]);

    compDust('flerovium_hexaoxide_octafluorosulfatoplutonate_enriched_rare_earth', ['1x flerovium_hexaoxide_octafluorosulfatoplutonate', '6x mystery'], 0x6A4852, [no_decomp]);
 
    // PEDOT:PSS plastic Line
    compLiquid('maleic_anhydride', ['4x carbon', '2x hydrogen', '3x oxygen'], 0xAAA099, [no_decomp]);

    compLiquid('dimethyl_maleate', ['6x carbon', '10x hydrogen', '4x oxygen'], 0xC2BFB7, [no_decomp]);

    compLiquid('dimethyl_succinate', ['4x carbon', '10x hydrogen', '3x oxygen'], 0xD0CCC4, [no_decomp]);

    compLiquid('14_butanediol', ['4x carbon', '10x hydrogen', '2x oxygen'], 0xB8C4C4, [no_decomp]);

    compDust('thiophene', ['4x carbon', '4x hydrogen', '1x sulfur'], 0xC8B680, [no_decomp]);

    compLiquid('12_dibromoethane', ['2x carbon', '4x hydrogen', '2x bromine'], 0xB0A6CC, [no_decomp]);

    compGas('dimethylformamide', ['3x carbon', '7x hydrogen', '1x nitrogen', '1x oxygen'], 0xA3B0B7, [no_decomp]); // DMF

    compLiquid('34_ethylenedioxythiophene', ['6x carbon', '6x hydrogen', '2x oxygen', '1x sulfur'], 0x8A9A86, [no_decomp]); // EDOT

    compDust('potassium_bromide', ['1x potassium', '1x bromine'], 0xD0D0D0, []);

    compDust('benzoyl_peroxide', ['14x carbon', '10x hydrogen', '4x oxygen'], 0xC6A8A8, [no_decomp]);

    compGas('hydrogen_chloride', ['1x hydrogen', '1x chlorine'], 0xA8CCC2, []);

    compLiquid('chlorosulfonic_acid', ['1x hydrogen', '1x sulfur', '3x oxygen', '1x chlorine'], 0xA84E4E, [no_decomp]);

    compLiquid('polystyrene_sulfate', ['8x carbon', '8x hydrogen', '3x oxygen', '1x sulfur'], 0xD8C6F0, [no_decomp]); // PSS

    compDust('ferric_nitrate', ['1x iron', '3x nitrate'], 0xAF5F5F, [no_decomp]);

    compLiquid('poly_34_ethylenedioxythiophene', ['6x carbon', '4x hydrogen', '2x oxygen', '1x sulfur'], 0x7C8FB2, [no_decomp]); //PEDOT
    
    compLiquid('sorbitol', ['6x carbon', '14x hydrogen', '6x oxygen'], 0xF8F0E8, [no_decomp]); //gotten from bacteria

    compLiquid('sorbitan', ['6x carbon', '12x hydrogen', '5x oxygen'], 0xE8D6C6, [no_decomp]); //losses a water to steam

    compLiquid('sorbitan_monoester', ['24x carbon', '46x hydrogen', '6x oxygen'], 0xD9CBB3, [no_decomp]);
    
    compLiquid('polysorbate_20', ['1x sorbitan_monoester', '20x ethylene_glycol'], 0xA0D7DD, [no_decomp]);

    compDust('poly_34_ethylenedioxythiophene_polystyrene_sulfate_paste', ['9x carbon', '7x hydrogen', '1x sulfur', '3x oxygen'], 0x5D5A85, [no_decomp]);

    compLiquid('poly_34_ethylenedioxythiophene_polystyrene_sulfate_solution', ['1x poly_34_ethylenedioxythiophene_polystyrene_sulfate_paste', '2x water'], 0x6C7FB0, [no_decomp]);

    polymerFluidPipe('poly_34_ethylenedioxythiophene_polystyrene_sulfate', ['8x carbon', '7x hydrogen', '1x sulfur', '3x oxygen'], 0x26396D, [675, 800, true, true, true, false], [foil, plates, ring, plates, no_decomp]); //PEDOT

    //FFKM Line [Rubber After SBR]
    compLiquid('perfluoromethyl_vinyl_ether', ['3x carbon', '6x fluorine', '1x oxygen'], 0xD0E5E5, [no_decomp]);

    compLiquid('hexafluorobutadiene', ['4x carbon', '6x fluorine'], 0xB8D2D9, [no_decomp]);

    compDust('raw_perfluoroelastomer_rubber', ['3x tetrafluoroethylene', '1x perfluoromethyl_vinyl_ether', '1x hexafluorobutadiene'], 0xB0CCCC, [no_decomp]);

    event.create('perfluoroelastomer_rubber')
        .polymer()
        .fluid()
        .components('1x raw_perfluoroelastomer_rubber')
        .color(0x536767)
        .flags(foil, plates, ring, plates, rod, no_decomp)
        .toolStats(ToolProperty.Builder.of(1, 1, 65535, 1, [
			GTToolType.SOFT_MALLET,
            GTToolType.PLUNGER
		]).unbreakable().build());

    //Polyimide Line [Insulator UHV+]
    compLiquid('azanide', ['1x nitrogen', '2x hydrogen'], 0xBFC7E5, [no_decomp]); //Hide in JEI

    compLiquid('benzophenone', ['13x carbon', '10x hydrogen', '1x oxygen'], 0xE5D3B5, [no_decomp]);

    compLiquid('methylamine', ['1x carbon', '3x hydrogen', '1x nitrogen', '2x hydrogen'], 0xD8D8E5, [no_decomp]);

    compDust('benzophenone_3344_tetracarboxylic_dianhydride', ['17x carbon', '6x hydrogen', '7x oxygen'], 0xD1B9A3, [no_decomp]);

    compLiquid('y_butyrolactone', ['4x carbon', '6x hydrogen', '2x oxygen'], 0xD6E2E2, [no_decomp]);

    compLiquid('m_phelyenediamine', ['6x carbon', '4x hydrogen', '2x azanide'], 0xE2BFC0, [no_decomp]);

    compDust('n_methyl_2_pyrrolidone', ['5x carbon', '9x hydrogen', '1x nitrogen', '1x oxygen'], 0xBDC8D8, [no_decomp]);

    compLiquid('polyamic_acid', ['17x carbon', '12x hydrogen', '2x nitrogen', '6x oxygen'], 0xCBBFA3, [no_decomp]);

    polymerFluid('polyimide', ['17x carbon', '10x hydrogen', '2x nitrogen', '4x oxygen'], 0xD6A970, [foil, plates, plates, rod, no_decomp]);

    // Large Multis
    const largeMulti = (name,components,color) => {
        compIngot(name, components, color, DULL, [2200, 'low', VA('mv'), 1500], [plates, frame, rod]);
    }

    largeMulti('birmabright', ['7x aluminium', '2x magnesium', '1x manganese'], 0xbfbfbf);  
    largeMulti('duralumin', ['4x aluminium', '3x copper', '1x magnesium', '1x manganese'], 0x66ccff);  
    largeMulti('hydronalium', ['6x aluminium', '3x magnesium', '1x manganese'], 0x660000);  
    largeMulti('beryllium_aluminium_alloy', ['7x beryllium', '1x aluminium'], 0x006699);  
    largeMulti('elgiloy', ['4x cobalt', '2x chromium', '1x nickel', '1x steel', '1x molybdenum', '1x manganese'], 0xff00ff);  
    largeMulti('beryllium_bronze', ['10x copper', '1x beryllium'], 0x003300);  
    largeMulti('silicon_bronze', ['32x copper', '2x silicon', '1x manganese'], 0x1a1a1a);  
    largeMulti('kovar', ['18x iron', '11x nickel', '6x cobalt'], 0x000080);  
    largeMulti('zamak', ['1x zinc', '4x aluminium', '3x copper'], 0x8c8c8c);  
    largeMulti('tumbaga', ['20x copper', '6x gold', '1x silver'], 0xffdb4d);  

    // Ultimate (Akreyrium-Tier-Start) Multiblocks

    // Thallium-Tungstate and intermediates
    compDustIcon('thallium_tungstate', ['2x thallium', '1x tungsten', '4x oxygen'], 0xe3d18a, DULL, []);

    compDustIcon('tungsten_trioxide', ['1x tungsten', '3x oxygen'], 0xadb426, DULL, []);

    // Boron Nitride and intermediates
    compDustIcon('boron_nitride', ['1x boron', '1x nitrogen'], 0xD4C4A0, DULL, []);

    compDustIcon('boron_trioxide', ['2x boron', '3x oxygen'], 0xDACABB, DULL, []);

    // Hastelloy X Upgrade
    compIngotLiquid('astrenalloy_nx', ['1x hastelloy_x', '4x enriched_naquadah', '3x zirconium', '6x tantalum_carbide', '4x osmiridium', '3x boron_nitride'], 0x63478e, SHINY, [10090, 'highest', VA('uv'), 2800], [plates, rod, frame]);
    
    // Incoloy MA-956 upgrade
    compIngotLiquid('thacoloy_nq_42x', ['6x incoloy_ma_956', '4x enriched_naquadah', '2x niobium_titanium', '4x osmiridium', '4x thallium_tungstate'], 0x467624, SHINY, [10090, 'highest', VA('zpm'), 3400], [plates, rod, frame]);


    // Akreyium Line
    elemFluid('utopian_akreyrium', 'akreyrium', 0xffffff, []);

    compIngotLiquid('lepton_coalescing_superalloy', ['4x thallium_tungstate', '2x nickel', '4x graphene', '3x niobium', '4x bismuth'], 0xe1ccff, DULL ,[5300, 'high', VA('luv'), 1400], [plates, rod, frame, foil]);

    compLiquid('lepton_sparse_akreyrium', ['1x utopian_akreyrium', '1x mystery'], 0x6E6E87, [no_decomp]);

    compLiquid('lepton_flux_akreyrium', ['1x utopian_akreyrium', '6x lepton_coalescing_superalloy', '1x mystery'], 0xaca2ba, [no_decomp]);

    compLiquid('gritty_akreyrium', ['1x utopian_akreyrium', '1x mystery'], 0x464655, [no_decomp]);

    compLiquid('akreyrium_pcb_graphite_nanoparticle_coolant', ['5x pcb_coolant', '2x utopian_akreyrium', '32x graphite'], 0x676763, [no_decomp]);
    
    // Akreyrium Variants
    compLiquid('lepton_flavour_foundational_flux', ['6x lepton_coalescing_superalloy', '1x mystery'], 0xe5cee1, [no_decomp]);
    
    // Tau
    compLiquid('light_tau_infusion_flux', ['1x mystery'], 0xe5cee1, [no_decomp]);

    compLiquid('heavy_tau_infusion_flux', ['1x light_tau_infusion_flux'], 0xdfdae9, [no_decomp]);

    compLiquid('superlight_tau_infusion_flux', ['1x light_tau_infusion_flux'], 0xd9e7f0, [no_decomp]);

    compLiquid('superheavy_tau_infusion_flux', ['1x heavy_tau_infusion_flux'], 0xccffff ,[no_decomp]);

    compLiquid('ethereal_tau_infusion_flux', ['2x superheavy_tau_infusion_flux', '2x superlight_tau_infusion_flux'], 0x99ccff, [no_decomp]);

    compLiquidStill('sparse_tau_akreyrium', ['1x utopian_akreyrium', '1x mystery'], [no_decomp])

    compLiquidStill('dense_tau_akreyrium', ['1x utopian_akreyrium', '1x mystery', '1x ethereal_tau_infusion_flux'], [no_decomp])

    // Muon
    compLiquid('twinkling_muon_infusion_flux', ['1x mystery'], 0xddd8dc, [no_decomp]);

    compLiquid('glowing_muon_infusion_flux', ['1x mystery'], 0xd5e1d6, [no_decomp]);

    compLiquid('shining_muon_infusion_flux', ['1x mystery'], 0xcdebd1, [no_decomp]);

    compLiquid('radiant_muon_infusion_flux', ['1x mystery'], 0xc5f4Cb, [no_decomp]);

    compLiquid('brilliant_muon_infusion_flux', ['1x mystery'], 0xbdfec6, [no_decomp]);

    compLiquidStill('sparse_muon_akreyrium', ['1x utopian_akreyrium', '1x mystery'], [no_decomp])

    compLiquidStill('dense_muon_akreyrium', ['1x utopian_akreyrium', '1x mystery', 'brilliant_muon_infusion_flux'], [no_decomp])

    // Electron
    compLiquid('mono_phase_electron_infusion_flux', ['1x mystery'], 0xe0c5f6, [no_decomp]);

    compDust('di_phase_electron_infusion_agent', ['1x mystery'], 0xe0bded, [no_decomp]);

    compDustIcon('tri_phase_electron_infusion_agent', ['1x mystery'], 0xdfb6e4, MAGNETIC, [no_decomp]);

    compDustIcon('weak_gamma_phase_electron_infusion_agent', ['1x mystery'], 0x856783, MAGNETIC, [no_decomp]);

    compDustIcon('weak_beta_phase_electron_infusion_agent', ['1x mystery'], 0x6b4f66, MAGNETIC, [no_decomp]);

    compDustIcon('gamma_phase_electron_infusion_agent', ['1x mystery'], 0xdeafdc, MAGNETIC, [no_decomp]);

    compDustIcon('beta_phase_electron_infusion_agent', ['1x mystery'], 0xdda8d3, MAGNETIC, [no_decomp]);

    compDustIcon('alpha_phase_electron_infusion_agent', ['1x mystery'], 0xdc99c1, MAGNETIC, [no_decomp]);

    compLiquid('alternating_phase_electron_infusion_flux', ['1x mystery'], 0xdeadb3, [no_decomp]);

    compLiquidStill('sparse_electron_akreyrium', ['1x utopian_akreyrium', '1x mystery'], [no_decomp]);

    compLiquidStill('dense_electron_akreyrium', ['1x utopian_akreyrium', '1x mystery'], [no_decomp]);

    // Resource Gen
    compLiquid('brackish_water', ['1x water', '1x mystery'], 0x459ea4, [no_decomp]);

    compLiquid('iron_mixture', ['1x mystery'], 0xc42626, [no_decomp]);
    
    compLiquid('copper_mixture', ['1x mystery'], 0xc86524, [no_decomp]);
    
    compLiquid('quartz_mixture', ['1x mystery'], 0xabc5e0, [no_decomp]);

    /*/reflective metal
    event.create('reflective_metal')
        .ingot()
        .components('5x aluminium', '3x steel', '2x glowstone')
        .color(0xA1ABBC)
        .flags(plates, rod, frame)
        .iconSet(DULL)
        .blastTemp(2000, 'low', VA('mv'), 600);*/

    compLiquid('rare_ore_residue', ['1x mystery'], 0x556278, [no_decomp]);

    compDust('chromite_sludge', ['2x chromite', '1x mystery'], 0x4c3c4c, [no_decomp]);

    compDust('rare_sludge', ['1x mystery'], 0xceec94, [no_decomp]);

    compDust('vanadium_magnetite_sludge', ['2x vanadium_magnetite', '1x mystery'], 0x1c1c2c, [no_decomp]);

    compDust('cobaltite_sludge', ['2x cobaltite', '1x mystery'], 0x6186bb, [no_decomp]);

    compDust('rare_metallic_residue', ['1x silver', '2x calcite'], 0x515755, [no_decomp])

    compLiquid('raw_ore_slurry', ['1x mystery'], 0x7b8087, [no_decomp]);

    compLiquid('mixed_mineral_residue', ['1x mystery'], 0x566e6e, [no_decomp]);

    compLiquid('sulfuric_mineral_mixture', ['1x mystery'], 0xe34f1e, [no_decomp]);

    compLiquid('oxygenous_mineral_mixture', ['1x mystery'], 0x359696, [no_decomp]);
    
    //molten ores
    compLiquidTemp('molten_ore_mixture', 1273, ['1x mystery'], 0x575050, [no_decomp]);
    
    compLiquidTemp('molten_bauxite_ore', 1160, ['1x bauxite'], 0xB5B69A, [no_decomp]);
    
    compLiquidTemp('molten_pitchblende_ore', 1160, ['1x pitchblende'], 0xAFC585, [no_decomp]);
    
    compLiquidTemp('molten_molybdenite_ore', 1160, ['1x molybdenite'], 0xC1D0A4, [no_decomp]);
    
    compLiquidTemp('molten_ilmenite_ore', 1160, ['1x ilmenite'], 0xCBA88F, [no_decomp]);
    
    compLiquidTemp('molten_tungstate_ore', 1160, ['1x tungstate'], 0x9CACB1, [no_decomp]);
    
    compLiquidTemp('molten_bastnasite_ore', 1160, ['1x bastnasite'],0x988E84, [no_decomp]);
    
    compLiquidTemp('molten_cooperite_ore', 1160, ['1x cooperite'], 0xA4A38B, [no_decomp]);

    elemGem('purified_naquadah', 0x000807, [], [no_decomp]);

    compDust('indium_oxide', ['2x indium', '3x oxygen'], 0xe3d28e, []);

    //nether star line essences
    compLiquid('blitz', ['1x mystery'], 0xfdf3c4, [no_decomp]);
    
    compLiquid('blizz', ['1x mystery'], 0xb4effa, [no_decomp]);
    
    compLiquid('basalz', ['1x mystery'], 0x6f190e, [no_decomp]);

    compLiquid('energized_blaze', ['1x mystery'], 0xffcd1a, [no_decomp]);

    compLiquid('energized_blitz', ['1x mystery'], 0xfdf5ce, [no_decomp]);
    
    compLiquid('energized_blizz', ['1x mystery'], 0xb7f0fa, [no_decomp]);
    
    compLiquid('energized_basalz', ['1x mystery'], 0x881f11, [no_decomp]);

    compLiquid('nether_tempered_blaze', ['1x mystery'], 0xffd333, [no_decomp]);

    compLiquid('nether_tempered_blitz', ['1x mystery'], 0xfefae7, [no_decomp]);
    
    compLiquid('nether_tempered_blizz', ['1x mystery'], 0xcff5fc, [no_decomp]);
    
    compLiquid('nether_tempered_basalz', ['1x mystery'], 0x9f2414, [no_decomp]);

    // Quantrum Comporessor Infusions
    noCompFluid('intangibility_infusion', 0x00AAAA);

    noCompFluid('paradoxicity_infusion', 0xAA00AA);

    noCompFluid('causality_infusion', 0xFFAA00);

    // Runic Convergence Infusion
    /*
        *Nr*(SO₄)₃(OH)₂ - Netherite Trisulfate Complex
        [*Nr*(NH₃)₆]SO₄ - Netherite Hexammine Sulfate
        *Nr*₂N₃O₄ - Voidic Nitride
        *Nr*(OH)₄ - Netherite Tetrahydroxide
        *Nr*FSi₂O₄ - Astral Fluorosilicate
        *Nr*₃N₃Si₂O8F - Primordial Nitrosilicate
        2Mg₃N₂ - Magnesium Nitride
        *Nr*₃Mg₆N₇Si₂O8F - Runic Convergence Infusion
    */
    compLiquid('netherite_trisulfate_complex', ['1x pure_netherite', '3x sulfur', '12x oxygen', '2x hydroxide'], 0x660033, [no_decomp]);
    compDust('netherite_hexammine_sulfate', ['1x pure_netherite', '6x ammonia', '1x sulfur', '4x oxygen'], 0x400080, [no_decomp]);
    compLiquid('voidic_nitride', ['2x pure_netherite', '3x nitrogen', '4x oxygen'], 0x000066, [no_decomp]);
    compDust('netherite_tetrahydroxide', ['1x pure_netherite', '4x hydroxide'], 0x8b8b8b, [no_decomp]);
    compLiquid('astral_fluorosilicate', ['1x pure_netherite', '1x fluorine', '2x silicon', '4x oxygen'], 0x333300, [no_decomp]);
    compLiquid('primordial_nitrosilicate', ['3x pure_netherite', '3x nitrogen', '2x silicon', '8x oxygen', '1x fluorine'], 0x990099, [no_decomp]);
    compLiquid('magnesium_nitride', ['3x magnesium', '2x nitrogen'], 0xcc66ff, []);
    compLiquid('runic_convergence_infusion', ['3x pure_netherite', '6x magnesium', '7x nitrogen', '2x silicon', '8x oxygen', '1x fluorine'], 0xcc0099, [no_decomp]);

    compIngot('neutronium_silicon_carbide', ['2x neutronium','7x silicon_carbide','3x niobium_nitride','3x graphene'],0xCFCAB8,DULL,[5000, 'highest', VA('uhv'), 1800], [foil, no_decomp, no_abs_recipe])

    //Abyss Harvesting
    compLiquidTemp('low_saturation_voidic_excression', 19999, '1x mystery', 0x0A0A0A, [no_decomp]);

    compLiquidTemp('moderate_saturation_voidic_excression', 19999, '1x mystery', 0x111111, [no_decomp]);

    compLiquidTemp('high_saturation_voidic_excression', 19999, '1x mystery', 0x1A0E12, [no_decomp]);

    compLiquidTemp('lethargic_voidic_slurry', 14999, '1x mystery', 0x7A7A7A, [no_decomp]);

    compLiquidTemp('tempered_voidic_slurry', 14999, '1x mystery', 0x666666, [no_decomp]);

    compLiquidTemp('vibrant_voidic_slurry', 14999, '1x mystery', 0x4C4C4C, [no_decomp]);
   
    compLiquidTemp('alpha_state_void_sludge', 12500, '1x mystery', 0x4A294A, [no_decomp]);

    compLiquidTemp('beta_state_void_sludge', 25000, '1x mystery', 0x39504A, [no_decomp]);

    compLiquidTemp('gamma_state_void_sludge', 37500, '1x mystery', 0x3A3F5A, [no_decomp]);

    compLiquidTemp('delta_state_void_sludge', 50000, '1x mystery', 0x4D3B2E, [no_decomp]);

    compLiquidTemp('epsilon_state_void_sludge', 62500, '1x mystery', 0x2E4D3B, [no_decomp]);

    compLiquidTemp('zeta_state_void_sludge', 75000, '1x mystery', 0x3F2E4D, [no_decomp]);

    compLiquidTemp('alpha_state_void_residue', 12500, '1x mystery', 0x652165, [no_decomp]);

    compLiquidTemp('beta_state_void_residue', 25000, '1x mystery', 0x486053, [no_decomp]);

    compLiquidTemp('gamma_state_void_residue', 37500, '1x mystery', 0x464A66, [no_decomp]);

    compLiquidTemp('delta_state_void_residue', 50000, '1x mystery', 0x5A4638, [no_decomp]);

    compLiquidTemp('epsilon_state_void_residue', 62500, '1x mystery', 0x365A46, [no_decomp]);

    compLiquidTemp('zeta_state_void_residue', 75000, '1x mystery', 0x54386A, [no_decomp]);

    compLiquidTemp('order_centric_void', 80000, '1x mystery', 0xF0E060, [no_decomp]);

    compLiquidTemp('chaos_centric_void', 80000, '1x mystery', 0xC040F0, [no_decomp]);

    compLiquidTemp('voidic_waste_residue', 10000, '1x mystery', 0x6B4A2F, [no_decomp]);

    //Infernal Concentrates

    compLiquidTemp('crude_infernal_concentrate', 40000, '1x mystery', 0x6e1a00, [no_decomp]);

    compLiquidTemp('infernal_concentrate', 45000, '1x mystery', 0xb02e00, [no_decomp]);

    compLiquidTemp('superheated_infernal_concentrate', 50000, '1x mystery', 0xff6b00, [no_decomp]); 

    compLiquidTemp('sub_stellar_infernal_concentrate', 75000, '1x mystery', 0xfefbc6, [no_decomp]); 

    compLiquidTemp('super_stellar_infernal_concentrate', 100000, '1x mystery', 0xf4faff, [no_decomp]); 

    compLiquidTemp('hyper_stellar_infernal_concentrate', 125000, '1x mystery', 0x9cd7ff, [no_decomp]);

    //UEV Materials
    event.create('warped').dust().color(0x4FBB85).flags([no_smelt]);

    compLiquid('nether_star_concentrate', ['1x mystery'], 0xeeeeee, [no_decomp]);

    compIngotLiquidSeccolor('aurourium', ['1x mystery'], 0x5d44de, 0xde44ce, SHINY, [], [no_decomp, fine_wire, no_smelt]);
       
    conductor('cerium_tritelluride', ['1x cerium', '3x tellurium'], 0x6d8B5d, DULL, [11699, 'highest', VA('uhv'), 1800], [V('uev'), 6, 16, false], [bolt_and_screw,spring,small_spring]);

    compLiquidTemp('bec_og', 0.0001, ['1x oganesson'], 0xbfacff, [no_decomp]);

    compLiquidTemp('superstate_helium_3', 2, ['1x helium_3'], 0xedfaf5, [no_decomp]);
    
    conductorPlasma('magmada_alloy', ['4x adamantine', '1x neutronium', '3x rtm_alloy'], 0xda8607, SHINY, [17890, 'highest', VA('uev'), 600], [V('uhv'), 1, 3, false], [plates, frame, rod, bolt_and_screw, round, long_rod, gear, small_gear, ring, no_decomp, rotor, fine_wire, no_abs_recipe]);

    event.create('mythrolic_alloy')
        .components('5x mythril', '4x hsss', '2x darmstadtium')
        .ingot()
        .fluid()
        .plasma()
        .color(0x30956c)
        .blastTemp(18550, 'highest', VA('uev'), 600)
        .iconSet(SHINY)
        .fluidPipeProperties(120000, 6000, true,true,true,true)
        .flags(plates, frame, rod, bolt_and_screw, round, long_rod, gear, small_gear, rotor, ring, foil, no_decomp, no_abs_recipe);

    event.create('nyanium')
        .components('7x aurourium', '4x uranium_rhodium_dinaquadide', '1x magnesium_nitride', '2x pure_netherite')
        .ingot()
        .fluid()
        .plasma()
        .color(0xE4C6EB)
        .secondaryColor(0xA45EF5)
        .blastTemp(17290, 'highest', VA('uev'), 600)
        .iconSet(SHINY) // Will Have Own in Theta? but that is a LOT of work
        .fluidPipeProperties(78500, 2500, true,true,true,true)
        .flags(plates, frame, rod, dense_plate, long_rod, gear, foil, small_gear, rotor, no_decomp, no_abs_recipe);

    compIngotPlasma('starium_alloy', ['4x mystery', '2x trinaquadalloy', '2x estalt'], 0x2253d2, SHINY, [18200, 'highest', VA('uev'), 600], [plates, frame, rod, bolt_and_screw, round, long_rod, gear, small_gear, ring, no_decomp, no_abs_recipe, foil]);

    conductorPlasma('seaborgium_palladium_enriched_estalt_flerovium_alloy', ['2x seaborgium', '8x palladium', '3x enriched_estalt', '4x flerovium'], 0x73022b, DULL, [17950, 'highest', VA('uev'), 600], [V('uev'), 32, 0, true], [no_decomp, no_abs_recipe, fine_wire]);

    compDust('iron_titanium_oxide', ['3x iron', '2x titanium', '7x oxygen'], 0x82229b, [no_decomp]);

    compDust('astatine_bis_tritelluride_cobo_selenium', ['1x astatine', '1x bismuth_tritelluride', '4x cobalt', '2x selenium'], 0x123718, [no_decomp]);

    conductor('astatium_bioselex_carbonite', ['1x astatine', '2x bismuth', '3x selenium', '2x thallium', '4x sulfur', '1x carbon'], 0x305f84, DULL, [13475, 'highest', VA('uv'), 3500], [V('uev'), 3, 16, false] ,[spring, no_decomp]);

    conductor('astatine_bis_tritelluride_cobo_selenium_over_iron_titanium_oxide', ['1x astatine_bis_tritelluride_cobo_selenium', 'iron_titanium_oxide'], 0xe61485, DULL, [14799, 'highest', VA('uhv'), 2500], [V('uev'), 2, 12, false], [fine_wire, bolt_and_screw, no_decomp]);

    //UIV Materials
    compDustLiquid('tungsten_disulfide', ['1x tungsten', '2x sulfur'], 0x928897, [no_decomp]);

    conductor('polonium_bismide', ['1x polonium', '1x bismuth'], 0x016038, DULL, [14400, 'highest', VA('uev'), 1800], [V('uiv'), 5, 24, false], [fine_wire, bolt_and_screw,spring,small_spring]);

    compIngot('diamane', ['1x carbon'], 0x62777A, [], [4000, 'low', VA('lv'), 1], [no_decomp]);

    compDust('iridium_iv_oxide', ['1x iridium', '2x oxygen'], 0xBEDED9, [no_decomp]);
        
    compDust('bismuth_iii_oxide', ['2x bismuth', '3x oxygen'], 0xD5E5DC, [no_decomp]);

    compIngot('bismuth_iridate', ['2x bismuth', '2x iridium', '7x oxygen'], 0x68CF93, [], [8600, 'high', VA('zpm'), 1080], [foil, no_decomp, no_abs_recipe]);

    compLiquidStill('dragon_breath', ['1x mystery'], [no_decomp]);

    compLiquidStill('pure_dragon_breath', ['1x mystery'], [no_decomp]);

    compIngotLiquid('hafnide_ceramic_base', ['4x hafnium', '5x tantalum_carbide'], 0x4F4F4F, DULL, [12900, 'highest', VA('uv'), 970], [no_decomp]);

    compDust('indium_tin_oxide', ['2x indium', '2x tin', '3x oxygen'], 0xA1C1E0, [no_decomp]);

    conductor('hafnide_ito_ceramic', ['4x hafnium', '5x tantalum', '5x carbon', '2x indium', '2x tin', '3x oxygen'], 0x798CA5, DULL, [14520, 'highest', VA('uhv'), 3200], [V('uiv'), 2, 36, false], [spring, no_decomp, no_abs_recipe]);

    compLiquid('polonium_iridide_acid', ['1x iridium', '2x polonium', '1x phosphoric_acid'], 0x8F8B73, [no_decomp]);

    compDust('platinum_yttrium_composite', ['3x platinum', '6x carbon', '2x yttrium', '6x copper', '4x barium'], 0x9F99AA, [no_decomp]);

    conductor('polonium_flux', ['2x iridium', '4x polonium', '2x phosphorus', '3x platinum', '6x carbon', '2x yttrium', '6x copper', '4x barium'], 0x948B90, DULL, [17625, 'highest', VA('uev'), 1650], [V('uiv'), 3, 24, false], [fine_wire, bolt_and_screw, no_decomp, no_abs_recipe]);

    conductorPlasma('rhenium_super_composite_alloy', ['4x rhenium', '2x weapon_grade_naquadah', '7x mercury_barium_calcium_cuprate', '2x titanium_carbide', '1x samarium'], 0xA78B72, DULL, [18850, 'highest', VA('uxv'), 600], [V('uiv'), 40, 0, true], [no_decomp, no_abs_recipe, fine_wire]);

    event.create('abyssal_alloy') 
        .components('5x xeproda', '3x blue_alloy', '4x void', '1x flerovium', '1x zapolgium') 
        .ingot()
        .fluid()
        .plasma()
        .color(0x1C0932)
        .iconSet(SHINY) 
        .blastTemp(18685, 'highest', VA('uiv'), 600) 
        .cableProperties(V('uev'), 2, 4, false) 
        .flags(plates, frame, rod, bolt_and_screw, round, long_rod, gear, small_gear, ring, no_decomp, rotor, no_abs_recipe);

    event.create('chaotixic_alloy')
        .components('6x rhexis', '2x stellite_100', '1x hafnium', '12x electrum', '3x vanadium_steel')
        .ingot()
        .fluid()
        .plasma()
        .color(0xA09265)
        .blastTemp(18795, 'highest', VA('uiv'), 600)
        .iconSet(SHINY)
        .fluidPipeProperties(250000, 30, true,true,true,true)
        .flags(plates, frame, rod, bolt_and_screw, round, long_rod, gear, small_gear, rotor, ring, foil, no_decomp, no_abs_recipe);
    
    compIngotPlasma('ohmderblux_alloy', ['5x chalyblux', '2x maraging_steel_300', '4x zirconium', '9x glowstone', '3x ultimet'], 0xD0B660, SHINY, [18590, 'highest', VA('uiv'), 600], [plates, frame, rod, bolt_and_screw, round, long_rod, gear, small_gear, ring, no_decomp, no_abs_recipe]);

    event.create('draconic_enrichment_serum').fluid().color(0xAC97C5);

    event.create('draconyallium')
        .components('68x duranium', '20x silver', '94x oxygen', '76x nitrogen')
        .ingot()
        .fluid()
        .plasma()
        .color(0x5E0B75)
        .secondaryColor(0x7817EC)
        .blastTemp(18880, 'highest', VA('uxv'), 600)
        .iconSet(SHINY)
        .flags(plates, frame, rod, dense_plate, long_rod, gear, foil, small_gear, rotor, no_decomp, no_abs_recipe);
    
    event.create('draco_abyssal')
        .components('1x draconyallium','3x abyssal_alloy','2x void','3x mystery')
        .ingot()
        .fluid()
        .plasma()
        .color(0x401E6D)
        .secondaryColor(0x340E4D)
        .blastTemp(18880, 'highest', VA('uxv'), 600)
        .iconSet(SHINY)
        .flags(plates, frame, rod, dense_plate, long_rod, gear, foil, small_gear, rotor, no_decomp, no_abs_recipe)
        .rotorStats(12800, 750, 50, 96000);

    event.create('expetidalloy_d_17')
        .components('2x hafnide_ceramic_base', '11x hastelloy_c_276', '3x dragonsteel', '1x rhodium_plated_palladium')
        .ingot()
        .fluid()
        .plasma()
        .color(0xA78E99)
        .blastTemp(18880, 'highest', VA('uxv'), 600)
        .iconSet(SHINY)
        .flags(plates, frame, rod, dense_plate, long_rod, gear, foil, small_gear, rotor, no_decomp, no_abs_recipe)
        .rotorStats(10, 20, 25, 250000);

    //DES + PBD Line
    noCompFluid('draconic_hormone_residue',0x6C4D6E);

    noCompFluid('drac_endrocritic_medium',0x75577A);

    noCompFluid('drac_aurouric_endrocrinal_medium',0x6678A6);

    noCompFluid('precursor_serum',0x8C6FA3);

    noCompFluid('abyssal_nutrient_blend',0x4A3B33);

    noCompFluid('condensed_abyssal_nutrient_blend',0x5C4038);

    noCompFluid('amino_primed_medium',0x705A64);

    noCompFluid('drac_peptide_amino_residue',0x7A5C82);

    noCompFluid('voidrenin',0x1A1A1A);

    noCompFluid('terrathroxin',0x3F5A3F);

    noCompFluid('stormcallin',0x4A6C82);

    noCompFluid('cryokinase',0x7BA6B3);

    noCompFluid('ignisferin',0xA6533A);

    noCompFluid('breath_hormone_complex',0x8C7080);

    noCompFluid('hemavyrin',0x6B2A2A);

    noCompFluid('aethermetin',0x7A6F9E);

    noCompFluid('metavorexin',0x5C3A73);

    noCompFluid('dracotropin',0x4D6A59);

    noCompFluid('pyrothyin',0x8C4D3A);

    noCompFluid('growth_hormone_complex',0x756B7D);

    //UXV Materials
    compLiquid('maxwellium','1x mystery',0x37374C,[no_decomp]);

    compDust('thallium_antimonide',['1x thallium','1x antimony'],0xADC5E3,[])
    
    compLiquidStill('lepton_dense_akreyrium', ['1x utopian_akreyrium', '1x mystery'], [no_decomp]);

    conductor('lepton_resonant_thallium_antimonide', ['1x thallium', '1x antimony', '1x mystery'], 0x74638F, DULL, [18250, 'highest', VA('uev'), 1800], [V('uxv'), 7, 48, false], [bolt_and_screw,spring,small_spring, no_abs_recipe, no_decomp, fine_wire]);

    //Plasmas
    event.create('magmatic')
        .components('1x mystery','1x iron','1x mystery')
        .liquid(new GTFluidBuilder().temperature(14600))
        .plasma()
        .color(0xFFD39A)
        .flags(no_decomp);

    event.create('voidic')
        .components('1x mystery')
        .liquid(new GTFluidBuilder().temperature(25000))
        .plasma()
        .color(0x0F0233)
        .flags(no_decomp);

    event.create('preon')
        .components('1x mystery')
        .liquid(new GTFluidBuilder().temperature(48000))
        .plasma()
        .color(0xCFB7FD)
        .flags(no_decomp);

    event.create('paradox')
        .components('1x mystery')
        .liquid(new GTFluidBuilder().temperature(50000))
        .plasma()
        .color(0xEFE987)
        .flags(no_decomp);

    //Agriculture
    compLiquid('raw_silkworm_oil', [], 0x8B5A2B, [no_decomp]);
    compLiquid('refined_silkworm_oil', [], 0xF5DE93, [no_decomp]);
    compLiquid('silkworm_gel', [], 0xCDBE86, [no_decomp]);
    
    compLiquid('nutrient_rich_fertilizer_solution', ['1x phosphate', '1x bone', '9x water', '1x npk_solution'], 0xB5B9C1, [no_decomp]);

    compLiquid('seaweed_oil', ['1x carbon'], 0x3FBF3F, [no_decomp]);
    compLiquid('liquefied_nutrient_paste', [], 0x8A8E96, [no_decomp]);
    compLiquid('biostimulating_mixture', ['2x silicic_acid', '4x seaweed_oil', '5x liquefied_nutrient_paste', '1x mutagen', '3x glycerol'], 0x72A677, [no_decomp]);

});