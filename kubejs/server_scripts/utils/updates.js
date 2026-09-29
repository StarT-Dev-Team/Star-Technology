// priority: -1000

/** @typedef {{ version: string, breakingChanges: boolean }} UpdateInfo */

/*
 * How to use this script
 *
 * 1. Add the version to the UPDATE_INFORMATION object
 * 2. Add the version tag to the VERSIONS array
 * 3. Add the breaking changes message to the UPDATE_INFORMATION object
 * 4. Add the breaking changes message to the VERSION_TAG array
 */

/** @type {Record<string, UpdateInfo>} */
const UPDATE_INFORMATION = {
    'Theta 3': {
        version: 'Theta 3',
        breakingChanges: true
    }
};

PlayerEvents.loggedIn(event => {
    const data = event.player.persistentData;

    ///////////////////////////////////////////
    // Helpers                               //
    ///////////////////////////////////////////

    const displayJoinMessage = () => {
        event.player.tell(Text.translatable('messages.kubejs.first_join', event.player.name, PACK_VERSION));
    };

    const displayUpdateMessage = () => {
        event.player.tell(Text.translatable('messages.kubejs.updated_version', data.lastJoinedVersion, PACK_VERSION));
    };

    const displayBreakingChangesMessage = () => {
        if (UPDATE_INFORMATION[PACK_VERSION].breakingChanges) {
            event.player.tell(Text.translatable('messages.kubejs.breaking_changes', Text.translatable(`messages.kubejs.breaking_changes.${VERSION_TAG}`)));
        }
    }

    ///////////////////////////////////////////
    // On first join                         //
    ///////////////////////////////////////////
    if (!data.firstJoin) {
        data.firstJoin = true;
        data.lastJoinedVersion = global.packVersion;
        displayJoinMessage();
    }

    ///////////////////////////////////////////
    // On update                             //
    ///////////////////////////////////////////
    if (data.packVersion !== global.packVersion) {
        displayUpdateMessage();
        displayBreakingChangesMessage();
        data.lastJoinedVersion = global.packVersion;
    }

    data.lastJoinedVersion = global.packVersion;
});