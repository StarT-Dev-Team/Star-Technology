// packmode: hard

// Runs on server load
ServerEvents.loaded((event) => {
    const { server } = event;
    const { gameRules, persistentData } = server;

    // Check if load_check is present on server persistent data, if so then return early
    if (persistentData.load_check) return;

    // The actual code
    server.setDifficulty('hard', true);
    gameRules.set('doWeatherCycle', false);
    gameRules.set('waterSourceConversion', false);
    gameRules.set('doPatrolSpawning', false);
    gameRules.set('doTraderSpawning', false);

    // Add load_check to server persistent data to prevent this from running again
    /* eslint-disable */
    persistentData.load_check = true;
    /* eslint-enable */
});
