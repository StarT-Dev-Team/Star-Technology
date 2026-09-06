GTCEuStartupEvents.registry('gtceu:material', (event) => {
    const MH = global.materialHelpers(event);

    const { centrifuge } = FLAGS;

    const $U238 = 'uranium';
    const $Pu239 = 'plutonium';
    const $Cf252 = 'californium_252';

    MH.compDust('mox239_blend', [`2x ${$U238}`, `2x ${$Pu239}`], 0x289a0a, [centrifuge]);
    MH.compDust('mox241_blend', [`2x ${$U238}`, '2x plutonium_241'], 0x587c13, [centrifuge]);
    MH.compDust('tpu_blend', ['2x thorium', `2x ${$Pu239}`], 0x36aa18, [centrifuge]);
    MH.compDust('mox238_blend', ['3x plutonium_238', `1x ${$Cf252}`], 0x4f2f04, [centrifuge]);
    MH.compDust('etu_blend', ['2x curium_244', `1x ${$Cf252}`, '1x americium_241'], 0x3d5434, [centrifuge]);
    MH.compDust('nqe_blend', ['2x purified_naquadah', '2x einsteinium_253'], 0x3f3c18, [centrifuge]);
});
