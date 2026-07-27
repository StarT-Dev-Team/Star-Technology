declare namespace internal.kjs {
    import GTRecipeJS = com.gregtechceu.gtceu.integration.kjs.recipe.GTRecipeSchema$GTRecipeJS;
    import ResourceLocation = net.minecraft.resources.ResourceLocation;

    interface RecipeFunctions_gtceu {
        // Multiblocks -> Large Cubes
        large_rock_crusher(id: $wrapped<ResourceLocation>): GTRecipeJS;
        // Multiblocks -> Ore Factories
        bulk_ore_processing_array(id: $wrapped<ResourceLocation>): GTRecipeJS;
        electric_ore_processing(id: $wrapped<ResourceLocation>): GTRecipeJS;
        plant_ore_processing(id: $wrapped<ResourceLocation>): GTRecipeJS;
        primitive_ore_processing(id: $wrapped<ResourceLocation>): GTRecipeJS;
        steam_ore_processing(id: $wrapped<ResourceLocation>): GTRecipeJS;
        // Multiblocks -> Power
        nuclear_fission(id: $wrapped<ResourceLocation>): GTRecipeJS;
        // Multiblocks -> Primitives
        kiln(id: $wrapped<ResourceLocation>): GTRecipeJS;
        large_barrel(id: $wrapped<ResourceLocation>): GTRecipeJS;
        large_farm(id: $wrapped<ResourceLocation>): GTRecipeJS;
        large_stone_barrel(id: $wrapped<ResourceLocation>): GTRecipeJS;
        arboreal_extractor(id: $wrapped<ResourceLocation>): GTRecipeJS;
        solid_blast_furnace(id: $wrapped<ResourceLocation>): GTRecipeJS;
        steam_kiln(id: $wrapped<ResourceLocation>): GTRecipeJS;
        // Multiblocks -> Resource Production
        bacteria_synthesizer(id: $wrapped<ResourceLocation>): GTRecipeJS;
        dimensional_destabiliser(id: $wrapped<ResourceLocation>): GTRecipeJS;
        exotic_rock_crushing(id: $wrapped<ResourceLocation>): GTRecipeJS;
        industrial_barrel_aqueous(id: $wrapped<ResourceLocation>): GTRecipeJS;
        industrial_barrel_magmatic(id: $wrapped<ResourceLocation>): GTRecipeJS;
        molten_destabilizing(id: $wrapped<ResourceLocation>): GTRecipeJS;
        // Multiblocks -> Resource Production -> Akreyrium
        abyssal_akreyriadix_stabiliser(id: $wrapped<ResourceLocation>): GTRecipeJS;
        folding_akreyrium_stabiliser(id: $wrapped<ResourceLocation>): GTRecipeJS;
        // Multiblocks -> Resource Production -> Geodes
        rock_filtrator(id: $wrapped<ResourceLocation>): GTRecipeJS;
        // Multiblocks -> Resource Production -> Large Sieve
        large_sieve(id: $wrapped<ResourceLocation>): GTRecipeJS;
        mechanical_sieve(id: $wrapped<ResourceLocation>): GTRecipeJS;
        // Multiblocks -> Resource Production -> Miners
        aqueous_void_excavation(id: $wrapped<ResourceLocation>): GTRecipeJS;
        void_excavation(id: $wrapped<ResourceLocation>): GTRecipeJS;
        // Multiblocks -> Resource Production -> Mystical Agriculture
        essence_enchancing(id: $wrapped<ResourceLocation>): GTRecipeJS;
        essence_replication(id: $wrapped<ResourceLocation>): GTRecipeJS;
        // Multiblocks -> Resource Production -> Plants
        composting_factory(id: $wrapped<ResourceLocation>): GTRecipeJS;
        tree_greenhouse(id: $wrapped<ResourceLocation>): GTRecipeJS;
        wild_garden(id: $wrapped<ResourceLocation>): GTRecipeJS;
        crop_greenhouse(id: $wrapped<ResourceLocation>): GTRecipeJS;
        hydroponic_garden(id: $wrapped<ResourceLocation>): GTRecipeJS;
        industrial_fishery(id: $wrapped<ResourceLocation>): GTRecipeJS;
        // Multiblocks -> Stargate Related
        dimensional_finder(id: $wrapped<ResourceLocation>): GTRecipeJS;
        large_rotor_machine(id: $wrapped<ResourceLocation>): GTRecipeJS;
        runic_circuitry_assembling_station(id: $wrapped<ResourceLocation>): GTRecipeJS;
        runic_inscribe_manipulate(id: $wrapped<ResourceLocation>): GTRecipeJS;
        stargate_component_assembly(id: $wrapped<ResourceLocation>): GTRecipeJS;
        // Multiblocks -> VLG -> Abydos
        ordered_chemistry(id: $wrapped<ResourceLocation>): GTRecipeJS;
        chemical_skip(id: $wrapped<ResourceLocation>): GTRecipeJS;
        component_nexus(id: $wrapped<ResourceLocation>): GTRecipeJS;
        cyclonic_sifter(id: $wrapped<ResourceLocation>): GTRecipeJS;
        exotic_gas_siphon(id: $wrapped<ResourceLocation>): GTRecipeJS;
        injection_mixer(id: $wrapped<ResourceLocation>): GTRecipeJS;
        manifold_centrifuge(id: $wrapped<ResourceLocation>): GTRecipeJS;
        pressure_heat_chamber(id: $wrapped<ResourceLocation>): GTRecipeJS;
        // Multiblocks -> VLG -> End
        draco_circuit_assembler(id: $wrapped<ResourceLocation>): GTRecipeJS;
        draco_bulk_circuiter(id: $wrapped<ResourceLocation>): GTRecipeJS;
        draco_infusion(id: $wrapped<ResourceLocation>): GTRecipeJS;
        supreme_chemistry(id: $wrapped<ResourceLocation>): GTRecipeJS;
        // Multiblocks -> VLG -> Nether
        quantum_cooling(id: $wrapped<ResourceLocation>): GTRecipeJS;
        // Multiblocks -> VLG -> Pre Gate
        catto_shrine(id: $wrapped<ResourceLocation>): GTRecipeJS;
        component_part_assembly(id: $wrapped<ResourceLocation>): GTRecipeJS;
        heat_chamber(id: $wrapped<ResourceLocation>): GTRecipeJS;
        // Multiblocks -> VLG -> Riftic
        kaleidoscopic_fractalizer(id: $wrapped<ResourceLocation>): GTRecipeJS;
        magmatic_drill(id: $wrapped<ResourceLocation>): GTRecipeJS;
        voidic_refinement(id: $wrapped<ResourceLocation>): GTRecipeJS;
        riftic_infusion_assembly(id: $wrapped<ResourceLocation>): GTRecipeJS;
        riftic_enhancement(id: $wrapped<ResourceLocation>): GTRecipeJS;
        rimula_extraction(id: $wrapped<ResourceLocation>): GTRecipeJS;
        riftion_accelerator(id: $wrapped<ResourceLocation>): GTRecipeJS;
        riftion_injector(id: $wrapped<ResourceLocation>): GTRecipeJS;
        riftion_slammer(id: $wrapped<ResourceLocation>): GTRecipeJS;
        // Multiblocks -> VLG -> Threaded
        component_synthesis_forge(id: $wrapped<ResourceLocation>): GTRecipeJS;
        component_part_synthesis_forge(id: $wrapped<ResourceLocation>): GTRecipeJS;
        // Single Blocks -> Barrels
        stone_barrel(id: $wrapped<ResourceLocation>): GTRecipeJS;
        barrel(id: $wrapped<ResourceLocation>): GTRecipeJS;
        barrel_composting(id: $wrapped<ResourceLocation>): GTRecipeJS;
        barrel_transformation(id: $wrapped<ResourceLocation>): GTRecipeJS;
        // Single Blocks
        composting(id: $wrapped<ResourceLocation>): GTRecipeJS;
        me_assembler(id: $wrapped<ResourceLocation>): GTRecipeJS;
        fermenting(id: $wrapped<ResourceLocation>): GTRecipeJS;
        greenhouse_growing(id: $wrapped<ResourceLocation>): GTRecipeJS;
        essence_burning(id: $wrapped<ResourceLocation>): GTRecipeJS;
        pulverizer(id: $wrapped<ResourceLocation>): GTRecipeJS;
    }
}
