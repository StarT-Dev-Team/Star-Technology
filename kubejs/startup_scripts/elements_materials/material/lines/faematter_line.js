GTCEuStartupEvents.registry('gtceu:material', (event) => {
    const MH = global.materialHelpers(event);

    const { noDecomp } = FLAGS;

    MH.compLiquid('impure_faematter', ['1x mystery', '1x faetic', '1x mystery'], 0xe8bce7, [noDecomp]);
    MH.compLiquid('faematter', ['1x faetic'], 0xf593f3, [noDecomp]);

    MH.compLiquid(
        'stabilization_mixture_base',
        [
            '5x poly_34_ethylenedioxythiophene_polystyrene_sulfate',
            '17x runic_convergence_infusion',
            '10x utopian_akreyrium',
        ],
        0xb6b4c2,
        [noDecomp]
    );
    MH.compLiquid('infernal_stabilization_mixture', ['24x stabilization_mixture_base', '1x magmada_alloy'], 0xbd4444, [
        noDecomp,
    ]);
    MH.compLiquid('abyssal_stabilization_mixture', ['24x stabilization_mixture_base', '1x abyssal_alloy'], 0x7e44bd, [
        noDecomp,
    ]);
    MH.compLiquid(
        'draconic_stabilization_mixture',
        ['1x abyssal_stabilization_mixture', '1x infernal_stabilization_mixture'],
        0x302185,
        [noDecomp]
    );

    MH.compLiquid('kaleidoscope_agitation_serum', ['1x mystery'], 0x9afc88, [noDecomp]);
});
