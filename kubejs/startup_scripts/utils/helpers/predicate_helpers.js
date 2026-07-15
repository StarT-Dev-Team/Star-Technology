// priority: 10000

/**
 * @typedef {Object} PredicateSettings
 * @property {number} [min] - Minimum global limit for the predicate (calls `setMinGlobalLimited`)
 * @property {number} [max] - Maximum global limit for the predicate (calls `setMaxGlobalLimited`)
 * @property {number} [minLayer] - Minimum global limit for the predicate (calls `setMinGlobalLimited`)
 * @property {number} [maxLayer] - Maximum global limit for the predicate (calls `setMaxGlobalLimited`)
 * @property {number} [exact] - Exact required count for the predicate (calls `setExactLimit`)
 * @property {number} [view] - How many to show in the structure preview (calls `setPreviewCount`)
 */

/**
 * Applies optional min/max/exact/preview settings to a predicate instance.
 *
 * @param {internal.com.gregtechceu.gtceu.api.pattern.TraceabilityPredicate} predicate - The TraceabilityPredicate object to configure.
 * @param {PredicateSettings} [settings] - Optional constraint settings.
 * @returns {internal.com.gregtechceu.gtceu.api.pattern.TraceabilityPredicate} The configured predicate.
 */
function applySettings(predicate, settings) {
    if (settings === undefined) return predicate;
    if (settings.min) predicate = predicate.setMinGlobalLimited(settings.min);
    if (settings.max) predicate = predicate.setMaxGlobalLimited(settings.max);
    if (settings.minLayer) predicate = predicate.setMinLayerLimited(settings.minLayer);
    if (settings.maxLayer) predicate = predicate.setMaxLayerLimited(settings.maxLayer);
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
 * @global
 */
const P = {
    /**
     * @param {internal.com.gregtechceu.gtceu.api.machine.MultiblockMachineDefinition} definition
     * @returns {internal.com.gregtechceu.gtceu.api.pattern.TraceabilityPredicate}
     */
    controller: (definition) => Predicates.controller(Predicates.blocks(definition.get())),
    /**
     * @param {string | internal.net.minecraft.world.level.block.Block} id
     * @param {PredicateSettings} [settings]
     * @returns {internal.com.gregtechceu.gtceu.api.pattern.TraceabilityPredicate}
     */
    block: (id, settings) => applySettings(Predicates.blocks(id), settings),
    /**
     * @param {string} id
     * @param {PredicateSettings} [settings]
     * @returns {internal.com.gregtechceu.gtceu.api.pattern.TraceabilityPredicate}
     */
    kjsBlock: (id, settings) => applySettings(Predicates.blocks(`kubejs:${id}`), settings),
    /**
     * @param {string} id
     * @param {PredicateSettings} [settings]
     * @returns {internal.com.gregtechceu.gtceu.api.pattern.TraceabilityPredicate}
     */
    gtBlock: (id, settings) => applySettings(Predicates.blocks(`gtceu:${id}`), settings),
    /**
     * @param {string} id
     * @param {PredicateSettings} [settings]
     * @returns {internal.com.gregtechceu.gtceu.api.pattern.TraceabilityPredicate}
     */
    coreBlock: (id, settings) => applySettings(Predicates.blocks(`start_core:${id}`), settings),
    /**
     * @param {string} tag
     * @param {PredicateSettings} [settings]
     * @returns {internal.com.gregtechceu.gtceu.api.pattern.TraceabilityPredicate}
     */
    blockTag: (tag, settings) => applySettings(Predicates.blockTag(tag), settings),
    /**
     * @param {string} id
     * @param {PredicateSettings} [settings]
     * @returns {internal.com.gregtechceu.gtceu.api.pattern.TraceabilityPredicate}
     */
    fluid: (id, settings) => applySettings(Predicates.fluids(id), settings),
    /**
     * @param {string} tag
     * @param {PredicateSettings} [settings]
     * @returns {internal.com.gregtechceu.gtceu.api.pattern.TraceabilityPredicate}
     */
    fluidTag: (tag, settings) => applySettings(Predicates.fluidTag(tag), settings),
    /**
     * @returns {internal.com.gregtechceu.gtceu.api.pattern.TraceabilityPredicate}
     */
    any: () => Predicates.any(),
    /**
     * @returns {internal.com.gregtechceu.gtceu.api.pattern.TraceabilityPredicate}
     */
    air: () => Predicates.air(),
    /**
     * @param {internal.com.gregtechceu.gtceu.api.machine.multiblock.PartAbility | internal.com.gregtechceu.gtceu.api.machine.multiblock.PartAbility[]} type
     * @param {PredicateSettings} [settings]
     * @returns {internal.com.gregtechceu.gtceu.api.pattern.TraceabilityPredicate}
     */
    ability: (type, settings) =>
        applySettings(Predicates.abilities.call(Predicates, Array.isArray(type) ? type : [type]), settings),
    /**
     * @param {internal.com.gregtechceu.gtceu.api.machine.multiblock.PartAbility[]} abilities all PartAbilities
     * @returns {internal.com.gregtechceu.gtceu.api.pattern.TraceabilityPredicate}
     */
    abilityOr: (abilities) => P.anyOf(abilities.map((a) => P.ability(a))),
    /**
     * @param {*} recipeTypes
     * @returns {internal.com.gregtechceu.gtceu.api.pattern.TraceabilityPredicate}
     */
    autoAbilities: (recipeTypes) => Predicates.autoAbilities(recipeTypes),
    /**
     * @param {PredicateSettings} [settings]
     * @returns {internal.com.gregtechceu.gtceu.api.pattern.TraceabilityPredicate}
     */
    heatingCoil: (settings) => applySettings(Predicates.heatingCoils(), settings),
    /**
     * @param {PredicateSettings} [settings]
     * @returns {internal.com.gregtechceu.gtceu.api.pattern.TraceabilityPredicate}
     */
    cleanroomFilter: (settings) => applySettings(Predicates.cleanroomFilters(), settings),
    /**
     * @param {PredicateSettings} [settings]
     * @returns {internal.com.gregtechceu.gtceu.api.pattern.TraceabilityPredicate}
     */
    powerSubstationBattery: (settings) => applySettings(Predicates.powerSubstationBatteries(), settings),
    /**
     * @param {string | string[]} materials
     * @param {PredicateSettings} [settings]
     * @returns {internal.com.gregtechceu.gtceu.api.pattern.TraceabilityPredicate}
     */
    frame: (materials, settings) =>
        applySettings(Predicates.frames(Array.isArray(materials) ? materials : [materials]), settings),
    /**
     * @returns {internal.com.gregtechceu.gtceu.api.pattern.TraceabilityPredicate}
     */
    threadingBlocks: () => $StarTThreadingStatBlocks.threadingStatBlocks(),
    /**
     * @returns {internal.com.gregtechceu.gtceu.api.pattern.TraceabilityPredicate}
     */
    vacuumPumps: () => $StarTVacuumPumpPredicates.vacuumPumps(),
    /**
     * Combines an array of predicates into a single predicate using logical OR (`.or()`).
     * The first predicate in the array is used as the accumulator.
     *
     * @param {internal.com.gregtechceu.gtceu.api.pattern.TraceabilityPredicate[]} preds - An array of two or more predicate objects to combine.
     * @returns {internal.com.gregtechceu.gtceu.api.pattern.TraceabilityPredicate} A single combined predicate that matches if any of the inputs match.
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
 * @global
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
