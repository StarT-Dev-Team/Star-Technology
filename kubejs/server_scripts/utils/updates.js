// priority: -1000

/*
 * Handles join messages and update notifications for players.
 *
 * How it works:
 * - First Join -> Displays the welcome message and records the player's initial version
 * - Join on same version -> Silent (no messages)
 * - Joined on a different modpack version:
 *     - Display the version update notification ("updated from X to Y")
 *     - Display breaking changes for the versions since last join
 *     - Update the player's persistent data with current version so notifications are displayed only once
 */

PlayerEvents.loggedIn((event) => {
    const player = event.player;
    const data = player.persistentData;

    /** @param {UpdateInfo} update */
    const formatBreakingChangeContent = (update) => update.breakingChanges ? Text.translatable(`messages.kubejs.breaking_changes.${update.tag}`) : null;

    /**
     * @param {string | null} lastVersion
     * @param {string} newVersion
     * @returns {UpdateInfo[]}
     */
    const getMissedBreakingChanges = (lastVersion, newVersion) => {
        if (!lastVersion) {
            const currentEntry = UPDATE_HISTORY.find((u) => u.version === newVersion);
            return currentEntry && currentEntry.breakingChanges ? [currentEntry] : [];
        }

        const lastIndex = UPDATE_HISTORY.findIndex((u) => u.version === lastVersion);
        const currentIndex = UPDATE_HISTORY.findIndex((u) => u.version === newVersion);

        if (lastIndex !== -1 && currentIndex !== -1 && lastIndex < currentIndex) {
            return UPDATE_HISTORY.slice(lastIndex + 1, currentIndex + 1).filter((u) => u.breakingChanges);
        }

        const currentEntry = UPDATE_HISTORY.find((u) => u.version === newVersion);
        return currentEntry && currentEntry.breakingChanges ? [currentEntry] : [];
    };

    const displayJoinMessage = () => {
        player.tell(Text.translatable('messages.kubejs.first_join', player.name, PACK_VERSION));
    };

    /**
     * @param {string | undefined} fromVersion
     */
    const displayUpdateMessage = (fromVersion) => {
        /** @type {string | internal.net.minecraft.network.chat.MutableComponent} */
        let fromVersionText = fromVersion;
        if (!fromVersionText) {
            fromVersionText = Text.translatable('messages.kubejs.older_version');
        }

        player.tell(Text.translatable('messages.kubejs.updated_version', fromVersionText, PACK_VERSION));
    };

    /**
     * @param {string | null} fromVersion
     */
    const displayBreakingChangesMessage = (fromVersion) => {
        const missedUpdates = getMissedBreakingChanges(fromVersion, PACK_VERSION);
        missedUpdates.forEach((update) => {
            const content = formatBreakingChangeContent(update);
            if (content) {
                player.tell(Text.translatable('messages.kubejs.breaking_changes', content));
            }
        });
    };

    const lastVersion = data.lastJoinedVersion;

    ///////////////////////////////////////////
    // On first join                         //
    ///////////////////////////////////////////
    if (!data.firstJoin && !lastVersion) {
        data.firstJoin = true;
        data.lastJoinedVersion = PACK_VERSION;
        displayJoinMessage();
        return;
    }

    ///////////////////////////////////////////
    // On update                             //
    ///////////////////////////////////////////
    if (lastVersion !== PACK_VERSION) {
        displayUpdateMessage(lastVersion);
        displayBreakingChangesMessage(lastVersion);
        data.firstJoin = true;
        data.lastJoinedVersion = PACK_VERSION;
    }
});
