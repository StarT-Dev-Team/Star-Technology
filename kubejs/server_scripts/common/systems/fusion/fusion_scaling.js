ServerEvents.recipes((event) => {
    const id = global.id;

    // Fusion
    event.remove({ type: 'gtceu:fusion_reactor' });

    const Fusion = (
        reflectorTier,
        type,
        outputQuant,
        input1,
        input1Quant,
        input2,
        input2Quant,
        EUt,
        DurationSeconds,
        StartMEU
    ) => {
        event.recipes.gtceu
            .reflector_fusion_reactor(id(`${type}_from_${input1}_and_${input2}`))
            .inputFluids(`gtceu:${input1} ${input1Quant}`, `gtceu:${input2} ${input2Quant}`)
            .outputFluids(`gtceu:${type} ${outputQuant}`)
            .duration(DurationSeconds * 20)
            .fusionStartEU(StartMEU * 1000000)
            .addData('reflector_tier', reflectorTier)
            .EUt(EUt);
    };

    Fusion(1, 'helium_plasma', 1000, 'deuterium', 1000, 'tritium', 1000, 4096, 7.2, 40);
    Fusion(1, 'europium', 144, 'neodymium', 144, 'hydrogen', 3000, 24576, 28.8, 150);
    Fusion(3, 'nickel_plasma', 144, 'potassium', 144, 'fluorine', 1000, 30720, 7.2, 480);
    Fusion(3, 'tritanium', 144, 'titanium', 288, 'duranium', 144, 30720, 21.6, 200);
    Fusion(2, 'nitrogen_plasma', 1000, 'beryllium', 144, 'deuterium', 3000, 16384, 7.2, 280);
    Fusion(2, 'darmstadtium', 144, 'arsenic', 288, 'ruthenium', 144, 30720, 28.8, 200);
    Fusion(1, 'radon', 1000, 'gold', 144, 'mercury', 100, 30720, 28.8, 200);
    Fusion(2, 'duranium', 144, 'gallium', 144, 'radon', 1000, 16384, 28.8, 170);
    Fusion(2, 'oxygen_plasma', 1000, 'carbon', 144, 'helium_3', 1000, 4096, 12.8, 180);
    Fusion(3, 'iron_plasma', 144, 'silicon', 144, 'magnesium', 144, 7680, 10.8, 360);
    Fusion(3, 'americium', 144, 'lutetium', 144, 'chromium', 144, 49152, 14.4, 200);
    Fusion(3, 'neutronium', 144, 'americium', 216, 'naquadria', 288, 117964, 72, 600);
    Fusion(1, 'lutetium', 144, 'lanthanum', 144, 'silicon', 144, 7680, 7.2, 80);
    Fusion(2, 'argon_plasma', 1000, 'carbon', 144, 'magnesium', 144, 24576, 7.2, 180);
    Fusion(4, 'americium_plasma', 144, 'plutonium_238', 144, 'hydrogen', 3500, 98304, 15.6, 760);
    Fusion(2, 'tin_plasma', 144, 'silver', 144, 'helium_3', 1500, 24576, 7.2, 280);
    Fusion(5, 'aurourium', 144, 'nether_star_concentrate', 396, 'seaborgium', 108, 884736, 19.2, 888);
    Fusion(6, 'paradox_plasma', 144, 'chaos_centric_void', 200, 'order_centric_void', 200, 294912, 16.2, 900);
    Fusion(5, 'magmatic_plasma', 144, 'infernal_concentrate', 500, 'iron_plasma', 288, 66666, 12.8, 720);
    Fusion(6, 'voidic_plasma', 144, 'echo_r', 432, 'void', 144, 344064, 19.2, 1040);
    Fusion(6, 'preon_plasma', 144, 'utopian_akreyrium', 500, 'dragon_breath', 50, 688128, 9.6, 1160);
    Fusion(5, 'borealic_concentrate', 144, 'stellarium', 135, 'aurourium', 9, 1023948, 3.6, 1200);
    Fusion(5, 'oganesson_plasma', 1500, 'fermium', 144, 'selenium', 360, 61440, 7.2, 800);
});
