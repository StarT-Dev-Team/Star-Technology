//requires: create_hypertube
ServerEvents.recipes((event) => {
    const id = global.id;

    [
        'create_hypertube:hypertube',
        'create_hypertube:hypertube_entrance',
        'create_hypertube:hyper_accelerator_small_cogwheel',
        'create_hypertube:hyper_accelerator_large_cogwheel',
        'create_hypertube:tube_scanner',
        'create_hypertube:hypertube_junction',
        'create_hypertube:sequenced_assembly/tube_scanner',
        'create_hypertube:hypertube_funnel',
    ].forEach((recipeID) => {
        event.remove({ id: recipeID });
    });

    /**
     * @param {string[]} input
     * @param {string} output
     * @param {number} duration
     * @param {number} eu
     * @param {string} recipeID
     */
    const assembler = (input, output, duration, eu, recipeID) => {
        event.recipes.gtceu.assembler(id(recipeID)).itemInputs(input).itemOutputs(output).duration(duration).EUt(eu);
    };

    assembler(
        ['4x minecraft:glass_pane', '4x gtceu:brass_plate'],
        '32x create_hypertube:hypertube',
        100,
        30,
        'hypertube'
    );

    assembler(
        ['create_hypertube:redstone_detector_tube_attachment', '4x gtceu:brass_plate'],
        'create_hypertube:tube_scanner_attachment',
        100,
        30,
        'tube_scanner'
    );
    assembler(
        ['create:smart_chute', 'create_hypertube:hypertube', 'create:cogwheel'],
        'create_hypertube:hypertube_entrance',
        100,
        30,
        'hypertube_entrance'
    );
    assembler(
        ['create_hypertube:hypertube_entrance', 'gtceu:lv_voltage_coil', 'create:cogwheel'],
        'create_hypertube:hypertube_accelerator',
        100,
        30,
        'hypertube_accelerato'
    );

    event
        .shaped('create_hypertube:hypertube_funnel', [' B ', ' H ', ' K '], {
            B: 'gtceu:brass_plate',
            H: 'create_hypertube:hypertube',
            K: 'gtceu:rubber_plate',
        })
        .id('create_hypertube:hypertube_funnel');

    event
        .shaped('create_hypertube:hypertube_junction', ['BTB', 'FHF', ' F '], {
            B: 'gtceu:brass_plate',
            F: 'create_hypertube:hypertube_funnel',
            H: 'create_hypertube:hypertube',
            T: 'create:transmitter',
        })
        .id('create_hypertube:hypertube_junction');

    event
        .shaped('create_hypertube:tube_scanner_attachment', [' B ', 'EAE', ' B '], {
            A: 'create_hypertube:redstone_detector_tube_attachment',
            E: 'create:electron_tube',
            B: 'gtceu:brass_plate',
        })
        .id('create_hypertube:tube_scanner_attachment');
});
