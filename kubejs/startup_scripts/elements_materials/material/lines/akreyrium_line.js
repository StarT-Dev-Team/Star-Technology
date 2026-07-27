GTCEuStartupEvents.registry('gtceu:material', (event) => {
    const MH = global.materialHelpers(event);

    const { noDecomp, plates, rod, frame, foil } = FLAGS;
    const { magnetic, dull } = ICONSETS;

    MH.elemFluid('utopian_akreyrium', 'akreyrium', 0xffffff, []);

    MH.compIngotLiquid(
        'lepton_coalescing_superalloy',
        ['4x thallium_tungstate', '2x nickel', '4x graphene', '3x niobium', '4x bismuth'],
        0x80d1c8,
        dull,
        [5300, 'high', GTValues.VA[LuV], 1400],
        [plates, rod, frame, foil]
    );

    MH.compLiquid('lepton_sparse_akreyrium', ['1x utopian_akreyrium', '1x mystery'], 0x6e6e87, [noDecomp]);

    MH.compLiquid(
        'lepton_flux_akreyrium',
        ['1x utopian_akreyrium', '6x lepton_coalescing_superalloy', '1x mystery'],
        0xaca2ba,
        [noDecomp]
    );

    MH.compLiquid('gritty_akreyrium', ['1x utopian_akreyrium', '1x mystery'], 0x464655, [noDecomp]);

    MH.compLiquid(
        'akreyrium_pcb_graphite_nanoparticle_coolant',
        ['5x pcb_coolant', '2x utopian_akreyrium', '32x graphite'],
        0x676763,
        [noDecomp]
    );

    // Akreyrium Variants
    MH.compLiquid('lepton_flavour_foundational_flux', ['6x lepton_coalescing_superalloy', '1x mystery'], 0xe5cee1, [
        noDecomp,
    ]);

    // Tau
    MH.compLiquid('light_tau_infusion_flux', ['1x mystery'], 0xe5cee1, [noDecomp]);

    MH.compLiquid('heavy_tau_infusion_flux', ['1x light_tau_infusion_flux'], 0xdfdae9, [noDecomp]);

    MH.compLiquid('superlight_tau_infusion_flux', ['1x light_tau_infusion_flux'], 0xd9e7f0, [noDecomp]);

    MH.compLiquid('superheavy_tau_infusion_flux', ['1x heavy_tau_infusion_flux'], 0xccffff, [noDecomp]);

    MH.compLiquid(
        'ethereal_tau_infusion_flux',
        ['2x superheavy_tau_infusion_flux', '2x superlight_tau_infusion_flux'],
        0x99ccff,
        [noDecomp]
    );

    MH.compLiquidStill('sparse_tau_akreyrium', ['1x utopian_akreyrium', '1x mystery'], [noDecomp]);

    MH.compLiquidStill(
        'dense_tau_akreyrium',
        ['1x utopian_akreyrium', '1x mystery', '1x ethereal_tau_infusion_flux'],
        [noDecomp]
    );

    // Muon
    MH.compLiquid('twinkling_muon_infusion_flux', ['1x mystery'], 0xddd8dc, [noDecomp]);

    MH.compLiquid('glowing_muon_infusion_flux', ['1x mystery'], 0xd5e1d6, [noDecomp]);

    MH.compLiquid('shining_muon_infusion_flux', ['1x mystery'], 0xcdebd1, [noDecomp]);

    MH.compLiquid('radiant_muon_infusion_flux', ['1x mystery'], 0xc5f4cb, [noDecomp]);

    MH.compLiquid('brilliant_muon_infusion_flux', ['1x mystery'], 0xbdfec6, [noDecomp]);

    MH.compLiquidStill('sparse_muon_akreyrium', ['1x utopian_akreyrium', '1x mystery'], [noDecomp]);

    MH.compLiquidStill(
        'dense_muon_akreyrium',
        ['1x utopian_akreyrium', '1x mystery', 'brilliant_muon_infusion_flux'],
        [noDecomp]
    );

    // Electron
    MH.compLiquid('mono_phase_electron_infusion_flux', ['1x mystery'], 0xe0c5f6, [noDecomp]);

    MH.compDust('di_phase_electron_infusion_agent', ['1x mystery'], 0xe0bded, [noDecomp]);

    MH.compDustIcon('tri_phase_electron_infusion_agent', ['1x mystery'], 0xdfb6e4, magnetic, [noDecomp]);

    MH.compDustIcon('weak_gamma_phase_electron_infusion_agent', ['1x mystery'], 0x856783, magnetic, [noDecomp]);

    MH.compDustIcon('weak_beta_phase_electron_infusion_agent', ['1x mystery'], 0x6b4f66, magnetic, [noDecomp]);

    MH.compDustIcon('gamma_phase_electron_infusion_agent', ['1x mystery'], 0xdeafdc, magnetic, [noDecomp]);

    MH.compDustIcon('beta_phase_electron_infusion_agent', ['1x mystery'], 0xdda8d3, magnetic, [noDecomp]);

    MH.compDustIcon('alpha_phase_electron_infusion_agent', ['1x mystery'], 0xdc99c1, magnetic, [noDecomp]);

    MH.compLiquid('alternating_phase_electron_infusion_flux', ['1x mystery'], 0xdeadb3, [noDecomp]);

    MH.compLiquidStill('sparse_electron_akreyrium', ['1x utopian_akreyrium', '1x mystery'], [noDecomp]);

    MH.compLiquidStill('dense_electron_akreyrium', ['1x utopian_akreyrium', '1x mystery'], [noDecomp]);
});
