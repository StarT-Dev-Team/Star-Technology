// priority: 10000000

/*
 * How to add a new update:
 * 1. Update PACK_VERSION and VERSION_SLUG below.
 * 2. Add a new entry to the end of UPDATE_HISTORY below.
 * 3. If the update has breaking changes, set `breakingChanges: true` and add the
 *    breaking changes list to the lang files:
 *    "messages.kubejs.breaking_changes.<tag>": " - Change 1\n - Change 2"
 */

const PACK_VERSION = 'Theta 3';
const VERSION_SLUG = PACK_VERSION.toLowerCase().replace(/\s/g, '_');

global.packVersion = PACK_VERSION;
global.versionSlug = VERSION_SLUG;

/**
 * @typedef {{
 *   version: string,
 *   tag: string,
 *   breakingChanges?: boolean
 * }} UpdateInfo
 */

/**
 * @type {UpdateInfo[]}
 */
const UPDATE_HISTORY = [
    {
        version: 'Theta 3',
        tag: 'theta_3',
        breakingChanges: true,
    },
];

global.updateHistory = UPDATE_HISTORY;
