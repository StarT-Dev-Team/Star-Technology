// priority: 10000

/**
 * Handles packmode-specific events by executing different functions based on the current packmode.
 *
 * @param {string} packmode - The packmode to check against. Must be one of: 'hard', 'default', 'abydos'.
 * @param {function|null} ifTrue - Function to execute if the current packmode matches the specified packmode. Pass null to skip execution.
 * @param {function|null} ifFalse - Function to execute if the current packmode does not match the specified packmode. Pass null to skip execution.
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
global.handlePackmodeEvents = (packmode, ifTrue, ifFalse, event) => {
    if (!['hard', 'default', 'abydos'].includes(packmode)) {
        console.warn(`Unknown packmode: ${packmode}. Function skipped.`);
        return;
    }

    if (typeof global.packmode === 'undefined') {
        console.warn('global.packmode is undefined. Function skipped.');
        return;
    }

    if (global.packmode === packmode) {
        if (ifTrue && typeof ifTrue === 'function') {
            ifTrue(event);
        } else if (ifTrue !== null) {
            console.warn(`Provided 'ifTrue' for packmode: ${packmode} is not a function. Function skipped.`);
        }
    } else {
        if (ifFalse && typeof ifFalse === 'function') {
            ifFalse(event);
        } else if (ifFalse !== null) {
            console.warn(`ifFalse is not a function for non-packmode: ${packmode}. Function skipped.`);
        }
    }
};

/**
 * Execute function only in hard mode.
 *
 * @param {function|null} ifTrue - Function to execute if current packmode is 'hard'. Pass null to skip.
 * @param {function|null} ifFalse - Function to execute if current packmode is not 'hard'. Pass null to skip.
 * @param {*} event - Event object or data to pass to the executed function.
 *
 * @example
 * global.hardmode(
 *   (event) => console.log('Hard mode is active!'),
 *   (event) => console.log('Not in hard mode'),
 *   someEvent
 * );
 */
global.hardmode = (ifTrue, ifFalse, event) => {
    global.handlePackmodeEvents('hard', ifTrue, ifFalse, event);
};

/**
 * Execute function only when NOT in hard mode.
 *
 * @param {function} fun - Function to execute if current packmode is not 'hard'.
 * @param {*} event - Event object or data to pass to the executed function.
 *
 * @example
 * global.notHardmode(
 *   (event) => console.log('Easy or default mode'),
 *   someEvent
 * );
 */
global.notHardmode = (fun, event) => {
    global.handlePackmodeEvents('hard', null, fun, event);
};

/**
 * Execute function only in hard mode (no else condition).
 *
 * @param {function} fun - Function to execute if current packmode is 'hard'.
 * @param {*} event - Event object or data to pass to the executed function.
 *
 * @example
 * global.onlyHardmode(
 *   (event) => console.log('Hard mode only!'),
 *   someEvent
 * );
 */
global.onlyHardmode = (fun, event) => {
    global.handlePackmodeEvents('hard', fun, null, event);
};

/**
 * Execute function only in default mode.
 *
 * @param {function|null} ifTrue - Function to execute if current packmode is 'default'. Pass null to skip.
 * @param {function|null} ifFalse - Function to execute if current packmode is not 'default'. Pass null to skip.
 * @param {*} event - Event object or data to pass to the executed function.
 *
 * @example
 * global.defaultmode(
 *   (event) => console.log('Default mode is active!'),
 *   null,
 *   someEvent
 * );
 */
global.defaultmode = (ifTrue, ifFalse, event) => {
    global.handlePackmodeEvents('default', ifTrue, ifFalse, event);
};

/**
 * Execute function only when NOT in default mode.
 *
 * @param {function} fun - Function to execute if current packmode is not 'default'.
 * @param {*} event - Event object or data to pass to the executed function.
 *
 * @example
 * global.notDefaultmode(
 *   (event) => console.log('Hard or abydos mode'),
 *   someEvent
 * );
 */
global.notDefaultmode = (fun, event) => {
    global.handlePackmodeEvents('default', null, fun, event);
};

/**
 * Execute function only in default mode (no else condition).
 *
 * @param {function} fun - Function to execute if current packmode is 'default'.
 * @param {*} event - Event object or data to pass to the executed function.
 *
 * @example
 * global.onlyDefaultmode(
 *   (event) => console.log('Default mode only!'),
 *   someEvent
 * );
 */
global.onlyDefaultmode = (fun, event) => {
    global.handlePackmodeEvents('default', fun, null, event);
};

/**
 * Execute function only in abydos mode.
 *
 * @param {function|null} ifTrue - Function to execute if current packmode is 'abydos'. Pass null to skip.
 * @param {function|null} ifFalse - Function to execute if current packmode is not 'abydos'. Pass null to skip.
 * @param {*} event - Event object or data to pass to the executed function.
 *
 * @example
 * global.abydosmode(
 *   (event) => console.log('Abydos mode is active!'),
 *   (event) => console.log('Not in abydos mode'),
 *   someEvent
 * );
 */
global.abydosmode = (ifTrue, ifFalse, event) => {
    global.handlePackmodeEvents('abydos', ifTrue, ifFalse, event);
};

/**
 * Execute function only when NOT in abydos mode.
 *
 * @param {function} fun - Function to execute if current packmode is not 'abydos'.
 * @param {*} event - Event object or data to pass to the executed function.
 *
 * @example
 * global.notAbydosmode(
 *   (event) => console.log('Hard or default mode'),
 *   someEvent
 * );
 */
global.notAbydosmode = (fun, event) => {
    global.handlePackmodeEvents('abydos', null, fun, event);
};

/**
 * Execute function only in abydos mode (no else condition).
 *
 * @param {function} fun - Function to execute if current packmode is 'abydos'.
 * @param {*} event - Event object or data to pass to the executed function.
 *
 * @example
 * global.onlyAbydosmode(
 *   (event) => console.log('Abydos mode only!'),
 *   someEvent
 * );
 */
global.onlyAbydosmode = (fun, event) => {
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
 * global.notPackmodes(['hard'],
 *   (event) => console.log('Not in hard mode - either default or abydos'),
 *   someEvent
 * );
 */
global.notPackmodes = (packmodes, fun, event) => {
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
