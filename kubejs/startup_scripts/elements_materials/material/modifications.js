GTCEuStartupEvents.materialModification((_event) => {
    GTMaterials.Glowstone.setFormula('(Si(FeS2)5(CrAl2O3)Hg3)Au');

    GTMaterials.Netherite.setFormula('Nr');
    GTMaterials.Netherite.setMaterialARGB(0x1a0d00);
    GTMaterials.Netherite.setMaterialIconSet(ICONSETS.dull);
    GTMaterials.Netherite.addFlags(FLAGS.rod, FLAGS.foil);

    GTMaterials.NetherStar.setFormula('✧');

    GTMaterials.RareEarth.setFormula('?');

    GTMaterials.Thorium.setFormula('Th²³⁰');
    GTMaterials.Neptunium.setFormula('Np²³⁷');
    GTMaterials.Fermium.setFormula('Fm²⁵⁷');
    GTMaterials.Americium.setFormula('Am²⁴⁵');

    GTMaterials.PlatinumGroupSludge.setFormula('Pt?');

    GTMaterials.EchoShard.setFormula('Ec');

    /**
     * @param {string} material
     * @param {string} formula
     */
    const setFormula = (material, formula) => {
        GTMaterials.get(material).setFormula(formula);
    };

    setFormula('netherite_trisulfate_complex', '[*Nr*(SO4)3](OH)2');
    setFormula('netherite_hexammine_sulfate', '[*Nr*(NH3)6]SO4');
    // setFormula('ohmderblux_alloy', 'Cx5(Fe16TiAlNi4Co2)2Zr4?9(Co5Cr2NiMo)3');
    setFormula('netherite_gold_skystone_alloy', 'Nr4(SkC2)2(Sk(SiAu2)2)');
    setFormula('netherite_certus_quartz_skystone_alloy', 'Nr4(SkC2)2(Sk(SiO2)2)');
    setFormula('dissipated_hellish_concentrate', '⛧-');
    setFormula('hellish_concentrate', '⛧');
    setFormula('hellfire_ash', '🔥-');
    setFormula('nyanium', 'ᗢ');
    // setFormula('maxwellium', 'ᓚᘏᗢ')
    setFormula('low_saturation_voidic_excression', '[∅-]');
    setFormula('moderate_saturation_voidic_excression', '[∅]');
    setFormula('high_saturation_voidic_excression', '[∅+]');
    setFormula('lethargic_voidic_slurry', '?[∅-]*');
    setFormula('tempered_voidic_slurry', '?[∅]*');
    setFormula('vibrant_voidic_slurry', '?[∅+]*');
    setFormula('alpha_state_void_sludge', '?α∅');
    setFormula('beta_state_void_sludge', '?β∅');
    setFormula('gamma_state_void_sludge', '?γ∅');
    setFormula('delta_state_void_sludge', '?δ∅');
    setFormula('epsilon_state_void_sludge', '?ε∅');
    setFormula('zeta_state_void_sludge', '?ζ∅');
    setFormula('alpha_state_void_residue', 'α∅');
    setFormula('beta_state_void_residue', 'β∅');
    setFormula('gamma_state_void_residue', 'γ∅');
    setFormula('delta_state_void_residue', 'δ∅');
    setFormula('epsilon_state_void_residue', 'ε∅');
    setFormula('zeta_state_void_residue', 'ζ∅');
    setFormula('order_centric_void', '⚖∅');
    setFormula('chaos_centric_void', '✹∅');
    setFormula('voidic_waste_residue', '?∅?');
    setFormula('preon', '✶');
    setFormula('paradox', '☯');
    setFormula('draco_abyssal', '🜍∅🜍');
    setFormula('silver_sulfate', 'Ag2(SO4)');
    // setFormula('chromium_sulfate', 'Cr2(SO4)3');
    setFormula('sparse_electron_akreyrium', 'Ak(?e?)?');
    setFormula('dense_electron_akreyrium', 'Ak(e)?');
    setFormula('sparse_muon_akreyrium', 'Ak(?μ?)?');
    setFormula('dense_muon_akreyrium', 'Ak(μ)?');
    setFormula('sparse_tau_akreyrium', 'Ak(?τ?)?');
    setFormula('dense_tau_akreyrium', 'Ak(τ)?');
    setFormula('lepton_sparse_akreyrium', 'Ak(?ℓ?)?');
    setFormula('lepton_dense_akreyrium', 'Ak(ℓ)?');
    setFormula('zavaritskite', '(BiO)F');
    setFormula('acidic_water', 'H2O*');
    setFormula('hydroiodic_acid', 'HI*');
    setFormula('aerogel', 'ᯓ(N78O21Ar9)ᯓ');
    setFormula('thorium', 'Th²³⁰');
    setFormula('neptunium', 'Np²³⁷');
    setFormula('fermium', 'Fm²⁵⁷');
    setFormula('americium', 'Am²⁴⁵');
    setFormula('netherite_triselex_oxide', 'Nr4Se3O2');
    setFormula('lepton_resonant_thallium_antimonide', 'Tl{ℓ}Sb');

    GTMaterials.get('lead').addFlags(FLAGS.gear);
    GTMaterials.get('silver').addFlags(FLAGS.gear);
    GTMaterials.get('naquadah').addFlags(FLAGS.densePlate);
    GTMaterials.get('enriched_naquadah').addFlags(
        FLAGS.densePlate,
        FLAGS.rotor,
        FLAGS.gear,
        FLAGS.smallGear,
        FLAGS.frame,
        FLAGS.longRod
    );
    GTMaterials.get('naquadria').addFlags(FLAGS.densePlate);
    GTMaterials.get('neutronium').addFlags(FLAGS.foil, FLAGS.smallGear, FLAGS.rotor, FLAGS.densePlate);
    GTMaterials.get('europium').addFlags(FLAGS.smallSpring, FLAGS.boltAndScrew);
    GTMaterials.get('zirconium').addFlags(FLAGS.fineWire);
    GTMaterials.get('hafnium').addFlags(FLAGS.fineWire);
    GTMaterials.get('rhenium').addFlags(FLAGS.fineWire);
    GTMaterials.get('red_steel').addFlags(FLAGS.rod, FLAGS.frame);
    GTMaterials.get('sterling_silver').addFlags(FLAGS.rod, FLAGS.frame);
    GTMaterials.get('nether_star').addFlags(FLAGS.foil);
    GTMaterials.get('netherite').addFlags(FLAGS.noDecomp);
    GTMaterials.get('echo_shard').addFlags(FLAGS.lens, FLAGS.foil);
    GTMaterials.get('certus_quartz').addFlags(FLAGS.lens);
    GTMaterials.get('copper').addFlags(FLAGS.gear);
    GTMaterials.get('vanadium_gallium').addFlags(FLAGS.fineWire);
    GTMaterials.get('titanium').addFlags(FLAGS.foil);
    GTMaterials.get('rhodium_plated_palladium').addFlags(FLAGS.frame, FLAGS.foil);
    GTMaterials.get('palladium').addFlags(FLAGS.rotor);
    GTMaterials.get('darmstadtium').addFlags(FLAGS.frame, FLAGS.foil);
    GTMaterials.get('ruthenium_trinium_americium_neutronate').addFlags(FLAGS.fineWire);
    GTMaterials.get('gold').addFlags(FLAGS.gear);
    GTMaterials.get('electrum').addFlags(FLAGS.gear);
    GTMaterials.get('blue_alloy').addFlags(FLAGS.gear);
    GTMaterials.get('cupronickel').addFlags(FLAGS.smallSpring);
    GTMaterials.get('kanthal').addFlags(FLAGS.smallSpring);
    GTMaterials.get('nichrome').addFlags(FLAGS.smallSpring);
    GTMaterials.get('tantalum_carbide').addFlags(FLAGS.foil);
    GTMaterials.get('dysprosium').addFlags(FLAGS.longRod);
    GTMaterials.get('trinium').addFlags(FLAGS.fineWire);
    GTMaterials.get('naquadah_alloy').addFlags(FLAGS.round);
    GTMaterials.get('ruridit').addFlags(FLAGS.smallGear, FLAGS.rotor);
    GTMaterials.get('iridium').addFlags(FLAGS.rotor);
    GTMaterials.get('iron').addFlags(FLAGS.foil);
    GTMaterials.get('wrought_iron').addFlags(FLAGS.frame);
    GTMaterials.get('red_alloy').addFlags(FLAGS.spring);
    GTMaterials.get('netherite').addFlags(FLAGS.noDecomp);
    GTMaterials.get('naquadah').addFlags(FLAGS.frame);
    GTMaterials.get('uranium_triplatinum').addFlags(FLAGS.fineWire);
    GTMaterials.get('samarium_iron_arsenic_oxide').addFlags(FLAGS.fineWire);

    // Blast Properties of periodic table metals
    const blast = global.blastProperty;
    blast('zirconium', 8100, 'higher', global.va.uv, 1200);
    blast('tellurium', 10700, 'higher', global.va.uhv, 900);
    blast('polonium', 13400, 'higher', global.vha.uiv, 1350);
    blast('astatine', 12800, 'higher', global.va.uhv, 1400);
    blast('hafnium', 11900, 'higher', global.va.uv, 750);
    blast('rhenium', 14800, 'highest', global.va.uiv, 1200);
    blast('seaborgium', 13300, 'higher', global.va.uev, 1500);
    blast('flerovium', 12200, 'higher', global.va.uhv, 1200);
    blast('dysprosium', 6200, 'mid', global.vha.luv, 144);
    blast('lutetium', 6600, 'mid', global.va.luv, 120);

    // Fluid Pipes
    // Seems that the Core mod change is prioritized over this
    // if (GTMaterials.NaquadahEnriched.getProperty(PropertyKey.FLUID_PIPE)) {
    //     GTMaterials.NaquadahEnriched.setProperty(
    //         PropertyKey.FLUID_PIPE,
    //         new $FluidPipeProperties(8000, 500, true, true, true, false)
    //     );
    // }

    GTMaterials.Netherite.setComponents('1x debris', '1x gold');
});
