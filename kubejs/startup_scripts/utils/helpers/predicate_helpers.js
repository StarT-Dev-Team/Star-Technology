// priority: 10000

/**
 * @typedef {Object} PredicateSettings
 * @property {number} [min] - Minimum global limit for the predicate (calls `setMinGlobalLimited`)
 * @property {number} [max] - Maximum global limit for the predicate (calls `setMaxGlobalLimited`)
 * @property {number} [exact] - Exact required count for the predicate (calls `setExactLimit`)
 * @property {number} [view] - How many to show in the structure preview (calls `setPreviewCount`)
 */

/**
 * Applies optional min/max/exact/preview settings to a predicate instance.
 *
 * @param {object} predicate - The TracebilityPredicate object to configure.
 * @param {PredicateSettings} [settings] - Optional constraint settings.
 * @returns {TracebilityPredicate} The configured predicate.
 */
function applySettings(predicate, settings) {
    if (settings === undefined) return;
    if (settings.min) predicate = predicate.setMinGlobalLimited(settings.min);
    if (settings.max) predicate = predicate.setMaxGlobalLimited(settings.max);
    if (settings.exact) predicate = predicate.setExactLimit(settings.exact);
    if (settings.view) predicate = predicate.setPreviewCount(settings.view);
    return predicate;
}

/**
 * A collection of factory helpers for building multiblock structure predicates.
 * Wraps `Predicates.*` methods with shorthand methods and an `anyOf` combinator.
 *
 * @example
 * // Single predicate with limits
 * P.ability(PA.fluidIn, { min: 3, max: 10, view: 5 })
 *
 * @example
 * // Combine multiple predicates
 * P.anyOf([
 *   P.ability(PA.maintenance, { min: 1, max: 2 }),
 *   P.ability(PA.muffler, { exact: 1 }),
 *   P.block('gtceu:hv_machine_hull'),
 * ])
 */
const P = {
    controller: (definition) => Predicates.controller(Predicates.blocks(definition.get())),
    block: (id, settings) => applySettings(Predicates.blocks(id), settings),
    kjsBlock: (id, settings) => applySettings(Predicates.blocks(`kubejs:${id}`), settings),
    gtBlock: (id, settings) => applySettings(Predicates.blocks(`gtceu:${id}`), settings),
    coreBlock: (id, settings) => applySettings(Predicates.blocks(`start_core:${id}`), settings),
    blockTag: (tag, settings) => applySettings(Predicates.blockTag(tag), settings),
    fluid: (id, settings) => applySettings(Predicates.fluids(id), settings),
    fluidTag: (tag, settings) => applySettings(Predicates.fluidTag(tag), settings),
    any: () => Predicates.any(),
    air: () => Predicates.air(),
    ability: (type, settings) => applySettings(Predicates.abilities(type), settings),
    heatingCoil: (settings) => applySettings(Predicates.heatingCoils(), settings),
    cleanroomFilter: (settings) => applySettings(Predicates.cleanroomFilters(), settings),
    powerSubstationBattery: (settings) => applySettings(Predicates.powerSubstationBatteries(), settings),
    frame: (settings) => applySettings(Predicates.frames(), settings),
    threadingBlocks: () => $StarTThreadingStatBlocks.threadingStatBlocks(),

    /**
     * Combines an array of predicates into a single predicate using logical OR (`.or()`).
     * The first predicate in the array is used as the accumulator.
     *
     * @param {object[]} preds - An array of two or more predicate objects to combine.
     * @returns {TracebilityPredicate} A single combined predicate that matches if any of the inputs match.
     *
     * @example
     * P.anyOf([
     *   P.gtBlock('hv_machine_hull'),
     *   P.ability(PA.maintenance),
     *   P.ability(PA.muffler, { exact: 1 }),
     * ])
     */
    anyOf: (preds) => preds.reduce((acc, p) => acc.or(p)),
};

/**
 * A mapping of `PartAbility` values,
 * used as the first argument to {@link P.ability}.
 */
const PA = {
    // Items
    itemOut: PartAbility.EXPORT_ITEMS,
    itemIn: PartAbility.IMPORT_ITEMS,
    steamIn: PartAbility.STEAM_IMPORT_ITEMS,
    steamOut: PartAbility.STEAM_EXPORT_ITEMS,

    // Fluids
    fluidOut: PartAbility.EXPORT_FLUIDS,
    fluidIn: PartAbility.IMPORT_FLUIDS,
    fluidOut1x: PartAbility.EXPORT_FLUIDS_1X,
    fluidIn1x: PartAbility.IMPORT_FLUIDS_1X,
    fluidOut4x: PartAbility.EXPORT_FLUIDS_4X,
    fluidIn4x: PartAbility.IMPORT_FLUIDS_4X,
    fluidOut9x: PartAbility.EXPORT_FLUIDS_9X,
    fluidIn9x: PartAbility.IMPORT_FLUIDS_9X,

    // Energy
    euIn: PartAbility.INPUT_ENERGY,
    euOut: PartAbility.OUTPUT_ENERGY,
    euIn2a: PartAbility.INPUT_ENERGY_2A,
    euOut2a: PartAbility.OUTPUT_ENERGY_2A,
    euIn4a: PartAbility.INPUT_ENERGY_4A,
    euOut4a: PartAbility.OUTPUT_ENERGY_4A,
    euIn16a: PartAbility.INPUT_ENERGY_16A,
    euOut16a: PartAbility.OUTPUT_ENERGY_16A,
    substationIn: PartAbility.SUBSTATION_INPUT_ENERGY,
    substationOut: PartAbility.SUBSTATION_OUTPUT_ENERGY,
    steam: PartAbility.STEAM,

    // Laser / Optical / Computation / Data / HPCA
    laserIn: PartAbility.INPUT_LASER,
    laserOut: PartAbility.OUTPUT_LASER,
    compIn: PartAbility.COMPUTATION_DATA_RECEPTION,
    compOut: PartAbility.COMPUTATION_DATA_TRANSMISSION,
    optIn: PartAbility.OPTICAL_DATA_RECEPTION,
    optOut: PartAbility.OPTICAL_DATA_TRANSMISSION,
    data: PartAbility.DATA_ACCESS,
    hpcaComponent: PartAbility.HPCA_COMPONENT,

    // Misc
    rotorHolder: PartAbility.ROTOR_HOLDER,
    pumpFluidHatch: PartAbility.PUMP_FLUID_HATCH,
    maintenance: PartAbility.MAINTENANCE,
    muffler: PartAbility.MUFFLER,
    tankValve: PartAbility.TANK_VALVE,
    passthroughHatch: PartAbility.PASSTHROUGH_HATCH,
    parallelHatch: PartAbility.PARALLEL_HATCH,
    objectHolder: PartAbility.OBJECT_HOLDER,

    // Core
    absoluteParallelHatch: $StarTPartAbility.ABSOLUTE_PARALLEL_HATCH,
    variadicsInterface: $StarTPartAbility.REDSTONE_INTERFACE,
    threadingContorller: $StarTPartAbility.THREADING_CONTROLLER,
    vacuumPump: $StarTPartAbility.VACUUM_PUMP,
    modTerminal: $StarTPartAbility.MODULAR_TERMINAL,
    modNode: $StarTPartAbility.MODULAR_NODE,
    modTerminalInterface: $StarTPartAbility.MODULAR_TERMINAL_INTERFACE,
    modNodeInterface: $StarTPartAbility.MODULAR_NODE_INTERFACE,
    modAutoTerminal: $StarTPartAbility.MODULAR_AUTO_SCALING_TERMINAL_CONDUIT,
    modAutoNode: $StarTPartAbility.MODULAR_AUTO_SCALING_NODE_CONDUIT,

    // Modular terminal conduits (by amperage)
    modTerminal2a: $StarTPartAbility.MODULAR_TERMINAL_CONDUIT_2A,
    modTerminal4a: $StarTPartAbility.MODULAR_TERMINAL_CONDUIT_4A,
    modTerminal16a: $StarTPartAbility.MODULAR_TERMINAL_CONDUIT_16A,
    modTerminal64a: $StarTPartAbility.MODULAR_TERMINAL_CONDUIT_64A,
    modTerminal256a: $StarTPartAbility.MODULAR_TERMINAL_CONDUIT_256A,
    modTerminal1024a: $StarTPartAbility.MODULAR_TERMINAL_CONDUIT_1024A,
    modTerminal4096a: $StarTPartAbility.MODULAR_TERMINAL_CONDUIT_4096A,

    // Modular node conduits
    modNode2a: $StarTPartAbility.MODULAR_TERMINAL_CONDUIT_2A,
    modNode4a: $StarTPartAbility.MODULAR_TERMINAL_CONDUIT_4A,
    modNode16a: $StarTPartAbility.MODULAR_TERMINAL_CONDUIT_16A,
    modNode64a: $StarTPartAbility.MODULAR_TERMINAL_CONDUIT_64A,
    modNode256a: $StarTPartAbility.MODULAR_TERMINAL_CONDUIT_256A,
    modNode1024a: $StarTPartAbility.MODULAR_TERMINAL_CONDUIT_1024A,
    modNode4096a: $StarTPartAbility.MODULAR_TERMINAL_CONDUIT_4096A,
};

global.P = P;
global.PA = PA;
