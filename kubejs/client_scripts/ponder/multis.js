// priority: 90

/** @global */
let ponderMultis = (() => {
    let { block } = ponderUtils;

    return {
        /**
         * @returns {MultiBlockStructure}
         */
        coke_oven: () => {
            return {
                pattern: [
                    ['XXX', 'XYX', 'XXX'],
                    ['XXX', 'X X', 'XXX'],
                    ['XXX', 'XXX', 'XXX'],
                ],
                controller: 'Y',
                defs: {
                    X: block('gtceu:coke_oven_bricks'),
                    Y: block('gtceu:coke_oven'),
                    ' ': block('minecraft:air'),
                },
            };
        },

        /**
         * @param {boolean} casingsOnly
         * @param {Internal.BlockState | undefined} [coil]
         * @returns {MultiBlockStructure}
         */
        electric_blast_furnace: (casingsOnly, coil) => {
            let casing = block('gtceu:heatproof_machine_casing');
            return {
                pattern: [
                    ['ISO', 'CCC', 'CCC', 'XMX'],
                    ['FXD', 'C C', 'C C', 'XHX'],
                    ['EEX', 'CCC', 'CCC', 'XXX'],
                ],
                controller: 'S',
                defs: {
                    X: casing,
                    S: block('gtceu:electric_blast_furnace'),
                    ' ': block('minecraft:air'),
                    E: casingsOnly ? casing : block('gtceu:lv_energy_input_hatch', Direction.SOUTH),
                    I: casingsOnly ? casing : block('gtceu:lv_input_bus', Direction.NORTH),
                    O: casingsOnly ? casing : block('gtceu:lv_output_bus', Direction.NORTH),
                    F: casingsOnly ? casing : block('gtceu:lv_input_hatch', Direction.WEST),
                    D: casingsOnly ? casing : block('gtceu:lv_output_hatch', Direction.EAST),
                    H: casingsOnly ? casing : block('gtceu:lv_muffler_hatch', Direction.UP),
                    M: casingsOnly ? casing : block('gtceu:maintenance_hatch'),
                    C: coil || block('gtceu:cupronickel_coil_block'),
                },
            };
        },

        /**
         * @returns {MultiBlockStructure}
         */
        large_chemical_reactor: () => {
            return {
                pattern: [
                    ['IXO', 'FSH', 'XMX'],
                    ['XXX', 'XPX', 'XXX'],
                    ['XEX', 'XCX', 'XXX'],
                ],
                controller: 'S',
                defs: {
                    S: block('gtceu:large_chemical_reactor'),
                    X: block('gtceu:inert_machine_casing'),
                    P: block('gtceu:ptfe_pipe_casing'),
                    C: block('gtceu:cupronickel_coil_block'),
                    I: block('gtceu:lv_input_bus', Direction.NORTH),
                    E: block('gtceu:lv_energy_input_hatch', Direction.NORTH),
                    O: block('gtceu:lv_output_bus', Direction.NORTH),
                    F: block('gtceu:lv_input_hatch', Direction.NORTH),
                    M: block('gtceu:maintenance_hatch', Direction.NORTH),
                    H: block('gtceu:lv_output_hatch', Direction.NORTH),
                },
            };
        },

        /**
         * @returns {MultiBlockStructure}
         */
        classic_stargate: () => {
            return {
                pattern: [[' RCBCR ', 'CR   RC', 'R     R', 'R     R', 'C     C', 'RR   RR', ' CRCRC ']],
                controller: 'B',
                defs: {
                    R: block('sgjourney:classic_stargate_ring_block'),
                    C: block('sgjourney:classic_stargate_chevron_block'),
                    B: block('sgjourney:classic_stargate_base_block'),
                    ' ': block('minecraft:air'),
                },
            };
        },
    };
})();
