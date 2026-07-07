// priority: 10000

/**
 * Handles packmode-specific events by executing different functions based on the current packmode.
 *
 * @param {string} packmode - The packmode to check against. Must be one of: 'hard', 'default', 'abydos'.
 * @param {function|null} if_true - Function to execute if the current packmode matches the specified packmode. Pass null to skip execution.
 * @param {function|null} if_false - Function to execute if the current packmode does not match the specified packmode. Pass null to skip execution.
 * @param {*} event - Event object or data to pass to the executed function.
 *
 * @returns {void}
 *
 * @example
 * // Execute different logic based on packmode
 * global.handlePackmodeEvents('hard',
 *   (event) => console.log('Hard mode active'),
 *   (event) => console.log('Not hard mode'),
 *   someEvent
 * );
 *
 * @example
 * // Skip execution for one condition by passing null
 * global.handlePackmodeEvents('default',
 *   (event) => console.log('Default mode'),
 *   null,
 *   someEvent
 * );
 */
global.handlePackmodeEvents = (packmode, if_true, if_false, event) => {
    if (!['hard', 'default', 'abydos'].includes(packmode)) {
        console.warn(`Unknown packmode: ${packmode}. Function skipped.`);
        return;
    }

    if (typeof global.packmode === 'undefined') {
        console.warn('global.packmode is undefined. Function skipped.');
        return;
    }

    if (global.packmode === packmode) {
        if (if_true && typeof if_true === 'function') {
            if_true(event);
        } else if (if_true !== null) {
            console.warn(`Provided 'if_true' for packmode: ${packmode} is not a function. Function skipped.`);
        }
    } else {
        if (if_false && typeof if_false === 'function') {
            if_false(event);
        } else if (if_false !== null) {
            console.warn(`if_false is not a function for non-packmode: ${packmode}. Function skipped.`);
        }
    }
};

/**
 * Execute function only in hard mode.
 *
 * @param {function|null} if_true - Function to execute if current packmode is 'hard'. Pass null to skip.
 * @param {function|null} if_false - Function to execute if current packmode is not 'hard'. Pass null to skip.
 * @param {*} event - Event object or data to pass to the executed function.
 *
 * @example
 * global.hardmode(
 *   (event) => console.log('Hard mode is active!'),
 *   (event) => console.log('Not in hard mode'),
 *   someEvent
 * );
 */
global.hardmode = (if_true, if_false, event) => {
    global.handlePackmodeEvents('hard', if_true, if_false, event);
};

/**
 * Execute function only when NOT in hard mode.
 *
 * @param {function} fun - Function to execute if current packmode is not 'hard'.
 * @param {*} event - Event object or data to pass to the executed function.
 *
 * @example
 * global.not_hardmode(
 *   (event) => console.log('Easy or default mode'),
 *   someEvent
 * );
 */
global.not_hardmode = (fun, event) => {
    global.handlePackmodeEvents('hard', null, fun, event);
};

/**
 * Execute function only in hard mode (no else condition).
 *
 * @param {function} fun - Function to execute if current packmode is 'hard'.
 * @param {*} event - Event object or data to pass to the executed function.
 *
 * @example
 * global.only_hardmode(
 *   (event) => console.log('Hard mode only!'),
 *   someEvent
 * );
 */
global.only_hardmode = (fun, event) => {
    global.handlePackmodeEvents('hard', fun, null, event);
};

/**
 * Execute function only in default mode.
 *
 * @param {function|null} if_true - Function to execute if current packmode is 'default'. Pass null to skip.
 * @param {function|null} if_false - Function to execute if current packmode is not 'default'. Pass null to skip.
 * @param {*} event - Event object or data to pass to the executed function.
 *
 * @example
 * global.defaultmode(
 *   (event) => console.log('Default mode is active!'),
 *   null,
 *   someEvent
 * );
 */
global.defaultmode = (if_true, if_false, event) => {
    global.handlePackmodeEvents('default', if_true, if_false, event);
};

/**
 * Execute function only when NOT in default mode.
 *
 * @param {function} fun - Function to execute if current packmode is not 'default'.
 * @param {*} event - Event object or data to pass to the executed function.
 *
 * @example
 * global.not_defaultmode(
 *   (event) => console.log('Hard or abydos mode'),
 *   someEvent
 * );
 */
global.not_defaultmode = (fun, event) => {
    global.handlePackmodeEvents('default', null, fun, event);
};

/**
 * Execute function only in default mode (no else condition).
 *
 * @param {function} fun - Function to execute if current packmode is 'default'.
 * @param {*} event - Event object or data to pass to the executed function.
 *
 * @example
 * global.only_defaultmode(
 *   (event) => console.log('Default mode only!'),
 *   someEvent
 * );
 */
global.only_defaultmode = (fun, event) => {
    global.handlePackmodeEvents('default', fun, null, event);
};

/**
 * Execute function only in abydos mode.
 *
 * @param {function|null} if_true - Function to execute if current packmode is 'abydos'. Pass null to skip.
 * @param {function|null} if_false - Function to execute if current packmode is not 'abydos'. Pass null to skip.
 * @param {*} event - Event object or data to pass to the executed function.
 *
 * @example
 * global.abydosmode(
 *   (event) => console.log('Abydos mode is active!'),
 *   (event) => console.log('Not in abydos mode'),
 *   someEvent
 * );
 */
global.abydosmode = (if_true, if_false, event) => {
    global.handlePackmodeEvents('abydos', if_true, if_false, event);
};

/**
 * Execute function only when NOT in abydos mode.
 *
 * @param {function} fun - Function to execute if current packmode is not 'abydos'.
 * @param {*} event - Event object or data to pass to the executed function.
 *
 * @example
 * global.not_abydosmode(
 *   (event) => console.log('Hard or default mode'),
 *   someEvent
 * );
 */
global.not_abydosmode = (fun, event) => {
    global.handlePackmodeEvents('abydos', null, fun, event);
};

/**
 * Execute function only in abydos mode (no else condition).
 *
 * @param {function} fun - Function to execute if current packmode is 'abydos'.
 * @param {*} event - Event object or data to pass to the executed function.
 *
 * @example
 * global.only_abydosmode(
 *   (event) => console.log('Abydos mode only!'),
 *   someEvent
 * );
 */
global.only_abydosmode = (fun, event) => {
    global.handlePackmodeEvents('abydos', fun, null, event);
};

/**
 * Execute function if current packmode matches any of the specified packmodes.
 *
 * @param {string[]} packmodes - Array of packmodes to check against. Valid values: 'hard', 'default', 'abydos'.
 * @param {function} fun - Function to execute if current packmode matches any of the specified packmodes.
 * @param {*} event - Event object or data to pass to the executed function.
 *
 * @example
 * global.packmodes(['hard', 'abydos'],
 *   (event) => console.log('Hard or abydos mode active'),
 *   someEvent
 * );
 */
global.packmodes = (packmodes, fun, event) => {
    if (!Array.isArray(packmodes)) {
        console.warn('packmodes parameter must be an array. Function skipped.');
        return;
    }

    if (typeof global.packmode === 'undefined') {
        console.warn('global.packmode is undefined. Function skipped.');
        return;
    }

    if (packmodes.includes(global.packmode)) {
        if (fun && typeof fun === 'function') {
            fun(event);
        } else {
            console.warn('Provided function is not a valid function. Function skipped.');
        }
    }
};

/**
 * Execute function if current packmode does NOT match any of the specified packmodes.
 *
 * @param {string[]} packmodes - Array of packmodes to check against. Valid values: 'hard', 'default', 'abydos'.
 * @param {function} fun - Function to execute if current packmode does not match any of the specified packmodes.
 * @param {*} event - Event object or data to pass to the executed function.
 *
 * @example
 * global.not_packmodes(['hard'],
 *   (event) => console.log('Not in hard mode - either default or abydos'),
 *   someEvent
 * );
 */
global.not_packmodes = (packmodes, fun, event) => {
    if (!Array.isArray(packmodes)) {
        console.warn('packmodes parameter must be an array. Function skipped.');
        return;
    }

    if (typeof global.packmode === 'undefined') {
        console.warn('global.packmode is undefined. Function skipped.');
        return;
    }

    if (!packmodes.includes(global.packmode)) {
        if (fun && typeof fun === 'function') {
            fun(event);
        } else {
            console.warn('Provided function is not a valid function. Function skipped.');
        }
    }
};
